import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { Get, Response, Route } from 'tsoa'
import { TApiDataReponse } from '../../../library/types'
import { Quote } from '../../../../.medusa/types/remote-query-entry-points'

@Route('/store/quotes')
class OpenApiSchema {
  /**
   * Get all the quotes
   */
  @Get('/')
  @Response<TApiDataReponse<Quote[]>>('200')
  getQuotes() {}
}

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: quotes } = await query.graph({
    entity: 'quote',
    fields: [
      'author.about',
      'author.handle',
      'author.id',
      'author.name',
      'author.photoUrl',
      'book.id',
      'book.product.handle',
      'book.product.title',
      'content',
      'id',
    ],
    filters: {
      deleted_at: null,
    },
  })

  res.json({ data: quotes })
}
