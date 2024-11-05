import { model } from '@medusajs/framework/utils'

export const Language = model.define('language', {
  id: model.id().primaryKey(),
  code: model.text(),
})
