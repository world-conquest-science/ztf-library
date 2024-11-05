import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { convertCategory } from 'src/library/converters/category'

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: categories } = await query.graph({
    entity: 'product_categories',
    fields: ['description', 'handle', 'id', 'name'],
    filters: {
      deleted_at: null,
    },
  })

  res.json({
    data: categories.map(convertCategory),
  })
}
