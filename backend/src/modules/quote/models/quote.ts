import { model } from '@medusajs/framework/utils'

export const Quote = model.define('quote', {
  id: model.id().primaryKey(),
  content: model.text(),
  details: model.text().nullable(),
})
