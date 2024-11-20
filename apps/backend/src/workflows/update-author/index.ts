import {
  createWorkflow,
  WorkflowResponse,
} from '@medusajs/framework/workflows-sdk'
import { TAuthorInput } from 'src/library/types'
import { updateAuthorStep } from './steps/update-author'

export const updateAuthorWorkflow = createWorkflow(
  'update-author',
  (input: TAuthorInput) => {
    const author = updateAuthorStep(input)

    return new WorkflowResponse(author)
  },
)
