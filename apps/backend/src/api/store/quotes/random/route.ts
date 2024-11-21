import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { Get, Response, Route } from 'tsoa'
import { TApiDataReponse } from '../../../../library/types'
import { Quote } from '../../../../../.medusa/types/remote-query-entry-points'

@Route('/store/quotes')
class OpenApiSchema {
  /**
   * Get two random quotes
   */
  @Get('/random')
  @Response<TApiDataReponse<Quote[]>>('200')
  getRandomQuote() {}
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
      'book.product.thumbnail',
      'content',
      'id',
    ],
    filters: {
      deleted_at: null,
    },
  })

  const quote1 = quotes[Math.floor(Math.random() * quotes.length)]
  const remainingQuotes = quotes.filter(q => q.id !== quote1.id)
  const quote2 =
    remainingQuotes[Math.floor(Math.random() * remainingQuotes.length)]

  res.json({ data: [quote1, quote2] })
}
