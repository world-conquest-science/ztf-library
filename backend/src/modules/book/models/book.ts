import { model } from '@medusajs/framework/utils'

export const Book = model.define('book', {
  id: model.id().primaryKey(),
  audioVersionUrl: model.text().nullable(),
  dimensions: model.text().nullable(),
  ebookVersionEbook: model.text().nullable(),
  isbn: model.text().nullable(),
  pagesCount: model.number().nullable(),
  publishDate: model.bigNumber().nullable(),
  publisher: model.text().nullable(),
})
