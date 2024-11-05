import BookModule from '../modules/book'
import QuoteModule from '../modules/quote'
import { defineLink } from '@medusajs/framework/utils'

export default defineLink(QuoteModule.linkable.quote, BookModule.linkable.book)
