import { createWorkflow, WorkflowResponse } from '@medusajs/framework/workflows-sdk'
import { TBookAdditionnalData, TBookInput } from 'src/library/types'
import { updateBookStep } from './steps/update-book'
import { linkBookToAdditionnalDataStep } from './steps/link-book-to-author-and-language'

export const updateBookWorkflow = createWorkflow(
  'update-book',
  (input: { book: TBookInput; additionnal_data: TBookAdditionnalData }) => {
    const book = updateBookStep(input.book)
    linkBookToAdditionnalDataStep(input)

    return new WorkflowResponse(book)
  },
)
