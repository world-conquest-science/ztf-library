import { createWorkflow, WorkflowResponse } from '@medusajs/framework/workflows-sdk'
import { TBookAdditionnalData, TBookInput } from 'src/library/types'
import { createBookStep } from './steps/create-book'
import { linkBookToAdditionnalDataStep } from './steps/link-book-to-author-and-language'

export const createBookWorkflow = createWorkflow(
  'create-book',
  (input: { book: TBookInput; additionnal_data: TBookAdditionnalData }) => {
    const book = createBookStep(input.book)
    linkBookToAdditionnalDataStep({ book, additionnal_data: input.additionnal_data })

    return new WorkflowResponse(book)
  },
)
