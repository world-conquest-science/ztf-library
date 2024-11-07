import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { convertProductToBook } from '../../../library/converters/product'
import { Route, Get, Query, Response } from 'tsoa'
import { TBook } from '@ztf-library/types'
import { TApiPaginatedReponse } from '../../../library/types'

@Route('/books')
class OpenApiSchema {
  /**
   * Get books, paginated using optional limit and offset
   */
  @Get('/')
  @Response<TApiPaginatedReponse<TBook[]>>('200')
  getBooks(@Query() limit?: number, @Query() offset?: number) {}
}

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const limit = (req.query.limit || 30) as number
  const offset = (req.query.offset || 0) as number

  const { data: products } = await query.graph({
    entity: 'product',
    fields: [
      'book.author.about',
      'book.author.handle',
      'book.author.id',
      'book.author.name',
      'book.author.photoUrl',
      'book.language.code',
      'book.language.id',
      'categories.description',
      'categories.handle',
      'categories.id',
      'categories.name',
      'categories.rank',
      'description',
      'handle',
      'id',
      'images.url',
      'thumbnail',
      'title',
      'variants.prices.amount',
      'variants.prices.currency_code',
      'variants.title',
    ],
    filters: { deleted_at: null },
    pagination: { skip: offset, take: limit },
  })

  res.json({
    data: products.map(convertProductToBook),
    count: products.length,
    limit,
    offset,
  })
}
