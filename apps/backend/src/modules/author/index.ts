import { Module } from '@medusajs/framework/utils'
import AuthorModuleService from './service'

export const AUTHOR_MODULE = 'authorModuleService'

export default Module(AUTHOR_MODULE, {
  service: AuthorModuleService,
})
