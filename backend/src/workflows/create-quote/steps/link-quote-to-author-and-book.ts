import { createStep, StepResponse } from '@medusajs/framework/workflows-sdk'
import { AUTHOR_MODULE } from '../../../modules/author'
import { TQuoteAdditionnalData, TQuoteInput } from 'src/library/types'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import AuthorModuleService from 'src/modules/author/service'
import { QUOTE_MODULE } from 'src/modules/quote'
import BookModuleService from 'src/modules/book/service'
import { BOOK_MODULE } from 'src/modules/book'
import { removeQuoteAllAuthors } from 'src/library/links/quote.author'
import { removeQuoteAllBooks } from 'src/library/links/quote.book'

export const linkQuoteToAdditionnalDataStep = createStep(
  'link-quote-to-author-and-book-on-create',
  async (input: { quote: TQuoteInput; additionnal_data: TQuoteAdditionnalData }, { container }) => {
    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
    const links = []

    const authorModuleService: AuthorModuleService = container.resolve(AUTHOR_MODULE)
    if (input.additionnal_data?.author_id) {
      await authorModuleService.retrieveAuthor(input.additionnal_data.author_id as string)

      links.push({
        [QUOTE_MODULE]: {
          quote_id: input.quote.id,
        },
        [AUTHOR_MODULE]: {
          author_id: input.additionnal_data.author_id,
        },
      })

      await removeQuoteAllAuthors(container, input.quote.id)
    }

    const bookModuleService: BookModuleService = container.resolve(BOOK_MODULE)
    if (input.additionnal_data?.book_id) {
      await bookModuleService.retrieveBook(input.additionnal_data.book_id as string)

      links.push({
        [QUOTE_MODULE]: {
          quote_id: input.quote.id,
        },
        [BOOK_MODULE]: {
          book_id: input.additionnal_data.book_id,
        },
      })

      await removeQuoteAllBooks(container, input.quote.id)
    }

    if (!links.length) {
      return new StepResponse([], [])
    }

    await remoteLink.create(links)

    return new StepResponse<any, any>([], [])
  },
)
