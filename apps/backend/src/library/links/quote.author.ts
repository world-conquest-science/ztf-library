import { MedusaContainer } from '@medusajs/framework'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { AUTHOR_MODULE } from 'src/modules/author'
import { QUOTE_MODULE } from 'src/modules/quote'

export const removeQuoteAllAuthors = async (container: MedusaContainer, quoteId: any) => {
  const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
  const query = container.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [quote],
  } = await query.graph({
    entity: 'quote',
    fields: ['author.*'],
    filters: { id: quoteId as string },
  })

  if (!quote || !quote.author) {
    return
  }

  await remoteLink.dismiss({
    [QUOTE_MODULE]: {
      quote_id: quoteId,
    },
    [AUTHOR_MODULE]: {
      author_id: quote.author?.id,
    },
  })
}
