import {
  createWorkflow,
  WorkflowResponse,
} from '@medusajs/framework/workflows-sdk'
import { TQuoteAdditionnalData, TQuoteInput } from 'src/library/types'
import { createQuoteStep } from './steps/create-quote'
import { linkQuoteToAdditionnalDataStep } from './steps/link-quote-to-author-and-book'

export const createQuoteWorkflow = createWorkflow(
  'create-quote',
  (input: { quote: TQuoteInput; additionnal_data: TQuoteAdditionnalData }) => {
    const quote = createQuoteStep(input.quote)
    linkQuoteToAdditionnalDataStep({
      quote,
      additionnal_data: input.additionnal_data,
    })

    return new WorkflowResponse(quote)
  },
)
