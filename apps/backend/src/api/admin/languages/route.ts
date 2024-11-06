import { MedusaRequest, MedusaResponse } from '@medusajs/framework/http'
import { createLanguageWorkflow } from '../../../workflows/create-language'
import { TLanguageInput } from '../../../library/types'
import { updateLanguageWorkflow } from '../../../workflows/update-language'
import { LANGUAGE_MODULE } from '../../../modules/language'
import LanguageModuleService from '../../../modules/language/service'

export const POST = async (req: MedusaRequest<TLanguageInput>, res: MedusaResponse) => {
  const { result } = await createLanguageWorkflow(req.scope).run({
    input: req.body,
  })

  res.json({ language: result })
}

export const PUT = async (req: MedusaRequest<TLanguageInput>, res: MedusaResponse) => {
  const { result } = await updateLanguageWorkflow(req.scope).run({
    input: req.body,
  })

  res.json(result)
}

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const languageModuleService: LanguageModuleService = req.scope.resolve(LANGUAGE_MODULE)

  const limit = req.query.limit || 15
  const offset = req.query.offset || 0

  const [languages, count] = await languageModuleService.listAndCountLanguages(
    {},
    {
      skip: offset as number,
      take: limit as number,
    },
  )

  res.json({
    data: languages,
    count,
    limit,
    offset,
  })
}

export const DELETE = async (req: MedusaRequest, res: MedusaResponse) => {
  const languageModuleService: LanguageModuleService = req.scope.resolve(LANGUAGE_MODULE)
  const id = req.query.id

  await languageModuleService.softDeleteLanguages(id)

  res.status(200).json()
}
