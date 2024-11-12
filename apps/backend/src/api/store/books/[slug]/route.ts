import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { convertProductToBook } from '../../../../library/converters/product'
import { Get, Path, Query, Response, Route } from 'tsoa'
import { TBook } from '@ztf-library/types'
import { TApiDataReponse } from '../../../../library/types'

@Route('/books')
class OpenApiSchema {
  /**
   * Get a book by its slug
   */
  @Get('/{slug}')
  @Response<TApiDataReponse<TBook>>('200')
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
      'description',
      'handle',
      'id',
      'images.url',
      'thumbnail',
      'title',
      'variants.prices.amount',
      'variants.prices.currency_code',
      'variants.title',
    ],
    filters: {
      deleted_at: null,
      handle: slug,
    },
  })

  res.json({
    data: convertProductToBook(product),
  })
}
