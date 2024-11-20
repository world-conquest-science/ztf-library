import AuthorModule from '../modules/author'
import QuoteModule from '../modules/quote'
import { defineLink } from '@medusajs/framework/utils'

export default defineLink(
  QuoteModule.linkable.quote,
  AuthorModule.linkable.author,
)
