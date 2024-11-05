import { Module } from '@medusajs/framework/utils'
import LanguageModuleService from './service'

export const LANGUAGE_MODULE = 'languageModuleService'

export default Module(LANGUAGE_MODULE, {
  service: LanguageModuleService,
})
