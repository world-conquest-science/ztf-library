import { MedusaContainer } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { AUTHOR_MODULE } from '../../modules/author'
import { BOOK_MODULE } from '../../modules/book'

export const removeBookAllAuthors = async (
  container: MedusaContainer,
  bookId: any,
) => {
  const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [book],
  } = await query.graph({
    entity: 'book',
    fields: ['author.*'],
    filters: { id: bookId as string },
  })

  if (!book || !book.author) {
    return
  }

  await remoteLink.dismiss({
    [BOOK_MODULE]: {
      book_id: bookId,
    },
    [AUTHOR_MODULE]: {
      author_id: book.author?.id,
    },
  })
}
