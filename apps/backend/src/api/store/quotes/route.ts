import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { convertQuote } from '../../../library/converters/quote'

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: quotes } = await query.graph({
    entity: 'quote',
    fields: ['author.about', 'author.handle', 'author.id', 'author.name', 'author.photoUrl', 'book.id', 'book.product.handle', 'book.product.title', 'content', 'id'],
    filters: {
      deleted_at: null,
    },
  })

  res.json({
    data: quotes.map(convertQuote),
  })
}
