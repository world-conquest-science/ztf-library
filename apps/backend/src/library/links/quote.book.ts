import { MedusaContainer } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { QUOTE_MODULE } from '../../modules/quote'
import { BOOK_MODULE } from '../../modules/book'

export const removeQuoteAllBooks = async (container: MedusaContainer, quoteId: any) => {
  const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [quote],
  } = await query.graph({
    entity: 'quote',
    fields: ['book.*'],
    filters: { id: quoteId as string },
  })

  if (!quote || !quote.book) {
    return
  }

  await remoteLink.dismiss({
    [QUOTE_MODULE]: {
      quote_id: quoteId,
    },
    [BOOK_MODULE]: {
      book_id: quote.book?.id,
    },
  })
}
