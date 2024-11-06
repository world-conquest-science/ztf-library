import { MedusaRequest, MedusaResponse } from '@medusajs/framework/http'
import { createAuthorWorkflow } from '../../../workflows/create-author'
import { TAuthorInput } from '../../../library/types'
import { updateAuthorWorkflow } from '../../../workflows/update-author'
import { AUTHOR_MODULE } from '../../../modules/author'
import AuthorModuleService from '../../../modules/author/service'

export const POST = async (req: MedusaRequest<TAuthorInput>, res: MedusaResponse) => {
  const { result } = await createAuthorWorkflow(req.scope).run({
    input: req.body,
  })

  res.json(result)
}

export const PUT = async (req: MedusaRequest<TAuthorInput>, res: MedusaResponse) => {
  const { result } = await updateAuthorWorkflow(req.scope).run({
    input: req.body,
  })

  res.json(result)
}

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const authorModuleService: AuthorModuleService = req.scope.resolve(AUTHOR_MODULE)

  const limit = req.query.limit || 15
  const offset = req.query.offset || 0

  const [authors, count] = await authorModuleService.listAndCountAuthors(
    {},
    {
      skip: offset as number,
      take: limit as number,
    },
  )

  res.json({
    data: authors,
    count,
    limit,
    offset,
  })
}

export const DELETE = async (req: MedusaRequest, res: MedusaResponse) => {
  const authorModuleService: AuthorModuleService = req.scope.resolve(AUTHOR_MODULE)
  const id = req.query.id

  await authorModuleService.softDeleteAuthors(id)

  res.status(200).json()
}
