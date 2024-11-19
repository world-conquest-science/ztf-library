import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { convertCategory } from '../../../library/converters/category'
import { Get, Query, Response, Route } from 'tsoa'
import { TApiDataReponse } from '../../../library/types'
import { TCategory } from '@ztf-library/types'

const productFields = [
  'products.book.*',
  'products.categories.description',
  'products.categories.handle',
  'products.categories.id',
  'products.categories.name',
  'products.description',
  'products.handle',
  'products.id',
  'products.images.url',
  'products.thumbnail',
  'products.title',
  'products.variants.prices.amount',
  'products.variants.prices.currency_code',
  'products.variants.title',
]
const baseFields = ['description', 'handle', 'id', 'name', 'rank']

@Route('/store/categories')
class OpenApiSchema {
  /**
   * Get all the categories
   */
  @Get('/')
  @Response<TApiDataReponse<TCategory[]>>('200')
  getCategories(@Query() includeProducts?: boolean) {}
}

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const includeProducts = req.query.includeProducts || false

  const { data: categories } = await query.graph({
    entity: 'product_categories',
    fields: includeProducts
      ? [...baseFields, ...productFields]
      : [...baseFields],
    filters: {
      deleted_at: null,
    },
    pagination: {
      skip: 0,
      order: {
        rank: 'asc',
      },
    },
  })

  res.json({
    data: categories.map(convertCategory),
  })
}
