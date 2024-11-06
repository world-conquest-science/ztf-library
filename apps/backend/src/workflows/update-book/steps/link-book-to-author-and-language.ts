import { createStep, StepResponse } from '@medusajs/framework/workflows-sdk'
import { AUTHOR_MODULE } from '../../../modules/author'
import { TBookAdditionnalData, TBookInput } from '../../../library/types'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import AuthorModuleService from '../../../modules/author/service'
import { BOOK_MODULE } from '../../../modules/book'
import LanguageModuleService from '../../../modules/language/service'
import { LANGUAGE_MODULE } from '../../../modules/language'
import { removeBookAllLanguages } from '../../../library/links/book.language'
import { removeBookAllAuthors } from '../../../library/links/book.author'

export const linkBookToAdditionnalDataStep = createStep('link-book-to-author-and-language-on-update', async (input: { book: TBookInput; additionnal_data: TBookAdditionnalData }, { container }) => {
  const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
  const links = []

  const authorModuleService: AuthorModuleService = container.resolve(AUTHOR_MODULE)
  if (input.additionnal_data?.author_id) {
    await authorModuleService.retrieveAuthor(input.additionnal_data.author_id as string)

    links.push({
      [BOOK_MODULE]: {
        book_id: input.book.id,
      },
      [AUTHOR_MODULE]: {
        author_id: input.additionnal_data.author_id,
      },
    })

    await removeBookAllAuthors(container, input.book.id)
  }

  const languageModuleService: LanguageModuleService = container.resolve(LANGUAGE_MODULE)
  if (input.additionnal_data?.language_id) {
    await languageModuleService.retrieveLanguage(input.additionnal_data.language_id as string)

    links.push({
      [BOOK_MODULE]: {
        book_id: input.book.id,
      },
      [LANGUAGE_MODULE]: {
        language_id: input.additionnal_data.language_id,
      },
    })

    await removeBookAllLanguages(container, input.book.id)
  }

  if (!links.length) {
    return new StepResponse([], [])
  }

  await remoteLink.create(links)

  return new StepResponse<any, any>([], [])
})
