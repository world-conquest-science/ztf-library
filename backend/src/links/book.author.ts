import AuthorModule from '../modules/author'
import BookModule from '../modules/book'
import { defineLink } from '@medusajs/framework/utils'

export default defineLink(BookModule.linkable.book, AuthorModule.linkable.author)
