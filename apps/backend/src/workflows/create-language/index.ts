import {
  createWorkflow,
  WorkflowResponse,
} from '@medusajs/framework/workflows-sdk'
import { createLanguageStep } from './steps/create-language'
import { TLanguageInput } from 'src/library/types'

export const createLanguageWorkflow = createWorkflow(
  'create-language',
  (input: TLanguageInput) => {
    const brand = createLanguageStep(input)

    return new WorkflowResponse(brand)
  },
)
