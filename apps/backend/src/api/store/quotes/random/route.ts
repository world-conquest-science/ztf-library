import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { convertQuote } from '../../../../library/converters/quote'
import { Get, Response, Route } from 'tsoa'
import { TApiDataReponse } from '../../../../library/types'
import { TQuote } from '@ztf-library/types'

@Route('/quotes')
class OpenApiSchema {
  /**
   * Get a random quote
   */
  @Get('/random')
  @Response<TApiDataReponse<TQuote>>('200')
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
      'content',
      'id',
    ],
    filters: {
      deleted_at: null,
    },
  })

  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

  res.json({
    data: convertQuote(randomQuote),
  })
}
