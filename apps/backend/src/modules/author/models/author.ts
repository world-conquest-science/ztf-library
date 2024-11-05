import { model } from '@medusajs/framework/utils'

export const Author = model.define('author', {
  id: model.id().primaryKey(),
  handle: model.text(),
  name: model.text(),
  about: model.text(),
  photoUrl: model.text(),
})
