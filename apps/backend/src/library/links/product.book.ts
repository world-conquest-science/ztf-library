import { Book } from '.medusa/types/remote-query-entry-points'
import { MedusaContainer } from '@medusajs/framework'
import { ContainerRegistrationKeys, Modules } from '@medusajs/framework/utils'
import { BOOK_MODULE } from '../../modules/book'

export const removeProductAllBooks = async (container: MedusaContainer, productId: any) => {
  const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [product],
  } = await query.graph({
    entity: 'product',
    fields: ['book.*'],
    filters: { id: productId },
  })

  if (!product || !product.book) {
    return
  }

  const productBooks: Book[] = Array.isArray(product.book) ? product.book : [product.book]

  for (const productBook of productBooks) {
    await remoteLink.dismiss({
      [Modules.PRODUCT]: {
        product_id: productId,
      },
      [BOOK_MODULE]: {
        book_id: productBook.id,
      },
    })
  }
}
