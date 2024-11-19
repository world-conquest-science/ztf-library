import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { convertCategory } from '../../../../library/converters/category'
import { Get, Path, Response, Route } from 'tsoa'
import { TCategory } from '@ztf-library/types'
import { TApiDataReponse } from '../../../../library/types'

@Route('/store/categories')
class OpenApiSchema {
  /**
   * Get a category by its slug
   */
  @Get('/{slug}')
  @Response<TApiDataReponse<TCategory>>('200')
  getCategoryBySlug(@Path() slug: string) {}
}

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { slug } = req.params

  if (!slug) {
    res.sendStatus(404)
  }

  const {
    data: [category],
  } = await query.graph({
    entity: 'product_categories',
    fields: [
      'description',
      'handle',
      'id',
      'name',
      'rank',
      'products.book.*',
      'products.description',
      'products.handle',
      'products.id',
      'products.images.url',
      'products.thumbnail',
      'products.title',
      'products.variants.title',
    ],
    filters: {
      deleted_at: null,
      handle: slug,
    },
  })

  res.json({
    data: convertCategory(category),
  })
}
