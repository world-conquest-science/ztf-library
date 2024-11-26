import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import {
  ContainerRegistrationKeys,
  QueryContext,
} from '@medusajs/framework/utils'
import { Route, Get, Query, Response } from 'tsoa'
import { TApiPaginatedReponse } from '../../../library/types'
import { shuffleArray } from '../../../library/helpers'
import { Product } from '../../../../.medusa/types/remote-query-entry-points'

@Route('/store/books')
class OpenApiSchema {
  /**
   * Get books, paginated using optional limit and offset
   */
  @Get('/')
  @Response<TApiPaginatedReponse<Product[]>>('200')
  getBooks(@Query() limit?: number, @Query() offset?: number) {}
}

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const limit = parseInt(req.query.limit as string) || 30
  const offset = parseInt(req.query.offset as string) || 0

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
      'variants.title',
      'variants.calculated_price.id',
      'variants.calculated_price.calculated_amount',
      'variants.calculated_price.original_amount',
      'variants.calculated_price.currency_code',
    ],
    filters: { deleted_at: null, title: 'The Way Of Life' },
    pagination: { skip: offset, take: limit },
    context: {
      variants: {
        calculated_price: QueryContext({
          region_id: 'reg_01JBSPVXV0GA901B8XFMJD5Y6A',
          currency_code: 'eur',
        }),
      },
    },
  })

  res.json({
    data: shuffleArray(products),
    count: products.length,
    limit,
    offset,
  })
}
