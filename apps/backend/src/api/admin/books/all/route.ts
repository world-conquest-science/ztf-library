import { MedusaRequest, MedusaResponse } from '@medusajs/framework/http'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: products } = await query.graph({
    entity: 'product',
    fields: ['book.id', 'title'],
    filters: { deleted_at: null },
  })

  res.json({ data: products.map(p => ({ ...p.book, title: p.title })) })
}
