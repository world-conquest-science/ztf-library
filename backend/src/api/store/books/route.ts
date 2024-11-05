import { MedusaRequest, MedusaResponse } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import productToBook from 'src/library/converters/product-to-book'

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const limit = (req.query.limit || 30) as number
  const offset = (req.query.offset || 0) as number

  const { data: products } = await query.graph({
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
      id: req.query.productId as string,
      deleted_at: null,
    },
    pagination: {
      skip: offset,
      take: limit,
    },
  })

  res.json({
    data: products.map(productToBook),
    count: products.length,
    limit,
    offset,
  })
}
