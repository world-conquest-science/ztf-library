import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { Get, Path, Response, Route } from 'tsoa'
import { TApiDataReponse } from '../../../../library/types'
import { Product } from '../../../../../.medusa/types/remote-query-entry-points'

@Route('/store/books')
class OpenApiSchema {
  /**
   * Get a book by its slug
   */
  @Get('/{slug}')
  @Response<TApiDataReponse<Product>>('200')
  getBookBySlug(@Path() slug: string) {}
}

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { slug } = req.params

  if (!slug) {
    res.sendStatus(404)
  }

  const {
    data: [product],
  } = await query.graph({
    entity: 'product',
    fields: [
      'book.*',
      'book.author.*',
      'book.language.*',
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
      'description',
      'variants.prices.amount',
      'variants.prices.currency_code',
      'variants.title',
    ],
    filters: {
      deleted_at: null,
      handle: slug,
    },
  })

  res.json({ data: product })
}
