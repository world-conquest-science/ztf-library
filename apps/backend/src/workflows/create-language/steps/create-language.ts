import { createStep, StepResponse } from '@medusajs/framework/workflows-sdk'
import { TLanguageInput } from 'src/library/types'
import LanguageModuleService from '../../../modules/language/service'
import { LANGUAGE_MODULE } from '../../../modules/language'

export const createLanguageStep = createStep(
  'create-language-step',
  async (input: TLanguageInput, { container }) => {
    const languageModuleService: LanguageModuleService =
      container.resolve(LANGUAGE_MODULE)

    const language = await languageModuleService.createLanguages(input)

    return new StepResponse(language, language.id)
  },
  async (id: string, { container }) => {
    const languageModuleService: LanguageModuleService =
      container.resolve(LANGUAGE_MODULE)

    await languageModuleService.deleteLanguages(id)
  },
)
