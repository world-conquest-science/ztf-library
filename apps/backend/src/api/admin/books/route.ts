import { MedusaRequest, MedusaResponse } from '@medusajs/framework/http'
import { ContainerRegistrationKeys } from '@medusajs/framework/utils'
import { TBookAdditionnalData, TBookInput } from 'src/library/types'
import { BOOK_MODULE } from 'src/modules/book'
import BookModuleService from 'src/modules/book/service'
import { createBookWorkflow } from 'src/workflows/create-book'
import { updateBookWorkflow } from 'src/workflows/update-book'

export const POST = async (
  req: MedusaRequest<{
    data: TBookInput
    additionnal_data: TBookAdditionnalData
  }>,
  res: MedusaResponse,
) => {
  const { result } = await createBookWorkflow(req.scope).run({
    input: {
      book: req.body.data,
      additionnal_data: req.body.additionnal_data,
    },
  })

  res.json({ data: result })
}

export const PUT = async (
  req: MedusaRequest<{
    data: TBookInput
    additionnal_data: TBookAdditionnalData
  }>,
  res: MedusaResponse,
) => {
  const { result } = await updateBookWorkflow(req.scope).run({
    input: {
      book: req.body.data,
      additionnal_data: req.body.additionnal_data,
    },
  })

  res.json(result)
}

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY)

  const {
    data: [product],
  } = await query.graph({
    entity: 'product',
    fields: ['book.*', 'book.author.*', 'book.language.*'],
    filters: { id: req.query.productId as string },
  })

  res.json({ data: product.book })
}

export const DELETE = async (req: MedusaRequest, res: MedusaResponse) => {
  const bookModuleService: BookModuleService = req.scope.resolve(BOOK_MODULE)
  const id = req.query.id

  await bookModuleService.softDeleteBooks(id)

  res.status(200).json()
}
