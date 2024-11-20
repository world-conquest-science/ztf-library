import BookModule from '../modules/book'
import ProductModule from '@medusajs/medusa/product'
import { defineLink } from '@medusajs/framework/utils'

export default defineLink(
  ProductModule.linkable.product,
  BookModule.linkable.book,
)
