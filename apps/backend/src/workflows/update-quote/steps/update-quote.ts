import { createStep, StepResponse } from '@medusajs/framework/workflows-sdk'
import { QUOTE_MODULE } from '../../../modules/quote'
import QuoteModuleService from '../../../modules/quote/service'
import { TQuoteInput } from 'src/library/types'

export const updateQuoteStep = createStep(
  'update-quote-step',
  async (input: TQuoteInput, { container }) => {
    const quoteModuleService: QuoteModuleService =
      container.resolve(QUOTE_MODULE)

    const quote = await quoteModuleService.updateQuotes(input)

    return new StepResponse(quote, quote.id)
  },
  async (id: string, { container }) => {
    const quoteModuleService: QuoteModuleService =
      container.resolve(QUOTE_MODULE)

    await quoteModuleService.deleteQuotes(id)
  },
)
