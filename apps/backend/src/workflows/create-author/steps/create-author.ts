import { createStep, StepResponse } from '@medusajs/framework/workflows-sdk'
import { toHandle } from '@medusajs/framework/utils'
import { TAuthorInput } from 'src/library/types'
import AuthorModuleService from '../../../modules/author/service'
import { AUTHOR_MODULE } from '../../../modules/author'

export const createAuthorStep = createStep(
  'create-author-step',
  async (input: TAuthorInput, { container }) => {
    const authorModuleService: AuthorModuleService =
      container.resolve(AUTHOR_MODULE)

    const author = await authorModuleService.createAuthors({
      ...input,
      handle: toHandle(input.name),
    })

    return new StepResponse(author, author.id)
  },
  async (id: string, { container }) => {
    const authorModuleService: AuthorModuleService =
      container.resolve(AUTHOR_MODULE)

    await authorModuleService.deleteAuthors(id)
  },
)
