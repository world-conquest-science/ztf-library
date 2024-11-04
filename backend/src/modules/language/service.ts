import { MedusaService } from '@medusajs/framework/utils'
import { Language } from './models/language'

class LanguageModuleService extends MedusaService({
  Language,
}) {}

export default LanguageModuleService
