import LanguageModule from '../modules/language'
import BookModule from '../modules/book'
import { defineLink } from '@medusajs/framework/utils'

export default defineLink(BookModule.linkable.book, LanguageModule.linkable.language)
