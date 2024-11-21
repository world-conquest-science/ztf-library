import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { Get, Path, Query, Response, Route } from 'tsoa'
import { TApiPaginatedReponse } from '../../../../../library/types'
import { Product } from '../../../../../../.medusa/types/remote-query-entry-points'

@Route('/store/books')
class OpenApiSchema {
  /**
   * Get books from a category, paginated using optional limit and offset
   */
  @Get('/category/{category_id}')
  @Response<TApiPaginatedReponse<Product[]>>('200')
  getBooksByCategory(
    @Path() category_id: string,
    @Query() limit?: number,
    @Query() offset?: number,
  ) {}
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
    filters: {
      deleted_at: null,
      categories: { id: req.params.id as string },
    },
    pagination: {
      skip: offset,
      take: limit,
    },
  })

  res.json({
    data: products,
    count: products.length,
    limit,
    offset,
  })
}
