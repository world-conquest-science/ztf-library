import {
  createWorkflow,
  WorkflowResponse,
} from '@medusajs/framework/workflows-sdk'
import { TQuoteAdditionnalData, TQuoteInput } from 'src/library/types'
import { updateQuoteStep } from './steps/update-quote'
import { linkQuoteToAdditionnalDataStep } from './steps/link-quote-to-author-and-book'

export const updateQuoteWorkflow = createWorkflow(
  'update-quote',
  (input: { quote: TQuoteInput; additionnal_data: TQuoteAdditionnalData }) => {
    const quote = updateQuoteStep(input.quote)
    linkQuoteToAdditionnalDataStep(input)

    return new WorkflowResponse(quote)
  },
)
