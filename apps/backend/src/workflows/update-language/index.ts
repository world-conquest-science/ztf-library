import { createWorkflow, WorkflowResponse } from '@medusajs/framework/workflows-sdk'
import { TLanguageInput } from 'src/library/types'
import { updateLanguageStep } from './steps/update-language'

export const updateLanguageWorkflow = createWorkflow('update-language', (input: TLanguageInput) => {
  const language = updateLanguageStep(input)

  return new WorkflowResponse(language)
})
