import { MedusaContainer } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { BOOK_MODULE } from 'src/modules/book'
import { LANGUAGE_MODULE } from 'src/modules/language'

export const removeBookAllLanguages = async (container: MedusaContainer, bookId: any) => {
  const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [book],
  } = await query.graph({
    entity: 'book',
    fields: ['language.*'],
    filters: { id: bookId as string },
  })

  if (!book || !book.language) {
    return
  }

  await remoteLink.dismiss({
    [BOOK_MODULE]: {
      book_id: bookId,
    },
    [LANGUAGE_MODULE]: {
      language_id: book.language?.id,
    },
  })
}
