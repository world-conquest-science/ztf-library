import { MedusaRequest, MedusaResponse } from '@medusajs/framework/http'
import { createQuoteWorkflow } from '../../../workflows/create-quote'
import { TQuoteAdditionnalData, TQuoteInput } from 'src/library/types'
import { updateQuoteWorkflow } from '../../../workflows/update-quote'
import { QUOTE_MODULE } from '../../../modules/quote'
import QuoteModuleService from '../../../modules/quote/service'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'

export const POST = async (
  req: MedusaRequest<{
    data: TQuoteInput
    additionnal_data: TQuoteAdditionnalData
  }>,
  res: MedusaResponse,
) => {
  const { result } = await createQuoteWorkflow(req.scope).run({
    input: {
      quote: req.body.data,
      additionnal_data: req.body.additionnal_data,
    },
  })

  res.json({ quote: result })
}

export const PUT = async (
  req: MedusaRequest<{
    data: TQuoteInput
    additionnal_data: TQuoteAdditionnalData
  }>,
  res: MedusaResponse,
) => {
  const { result } = await updateQuoteWorkflow(req.scope).run({
    input: {
      quote: req.body.data,
      additionnal_data: req.body.additionnal_data,
    },
  })

  res.json(result)
}

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const { data: quotes } = await query.graph({
    entity: 'quote',
    fields: ['book.*', 'book.product.title', 'author.*', '*'],
  })

  res.json({ data: quotes.map(q => ({ ...q, book: { ...q.book, title: q.book.product.title } })) })
}

export const DELETE = async (req: MedusaRequest, res: MedusaResponse) => {
  const quoteModuleService: QuoteModuleService = req.scope.resolve(QUOTE_MODULE)
  const id = req.query.id

  await quoteModuleService.softDeleteQuotes(id)

  res.status(200).json()
}
