import { createStep, StepResponse } from '@medusajs/framework/workflows-sdk'
import { BOOK_MODULE } from '../../../modules/book'
import BookModuleService from '../../../modules/book/service'
import { TBookInput } from 'src/library/types'

export const createBookStep = createStep(
  'create-book-step',
  async (input: TBookInput, { container }) => {
    const bookModuleService: BookModuleService = container.resolve(BOOK_MODULE)

    const book = await bookModuleService.createBooks(input)

    return new StepResponse(book, book.id)
  },
  async (id: string, { container }) => {
    const bookModuleService: BookModuleService = container.resolve(BOOK_MODULE)

    await bookModuleService.deleteBooks(id)
  },
)
