import { createWorkflow, WorkflowResponse } from '@medusajs/framework/workflows-sdk'
import { createAuthorStep } from './steps/create-author'
import { TAuthorInput } from 'src/library/types'

export const createAuthorWorkflow = createWorkflow('create-author', (input: TAuthorInput) => {
  const author = createAuthorStep(input)

  return new WorkflowResponse(author)
})
