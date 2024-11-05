import { InferTypeOf } from '@medusajs/framework/types'
import { Author } from 'src/modules/author/models/author'
import { Book } from 'src/modules/book/models/book'
import { Language } from 'src/modules/language/models/language'
import { Quote } from 'src/modules/quote/models/quote'

export type TApiPaginatedReponse<T> = {
  data: T
  count: number
  limit: number
  offset: number
}

export type TApiDataReponse<T> = {
  data: T
}

export type TAuthor = InferTypeOf<typeof Author>
export type TAuthorInput = Pick<TAuthor, 'id' | 'name' | 'about' | 'photoUrl'>

export type TLanguage = InferTypeOf<typeof Language>
export type TLanguageInput = Pick<TLanguage, 'id' | 'code'>

export type TBook = InferTypeOf<typeof Book> & {
  author: TAuthorInput
  language: TLanguageInput
}
export type TBookInput = Partial<
  Pick<
    TBook,
    | 'id'
    | 'audioVersionUrl'
    | 'dimensions'
    | 'ebookVersionEbook'
    | 'isbn'
    | 'pagesCount'
    | 'publishDate'
    | 'publisher'
  >
>

export type TBookAdditionnalData = {
  author_id: string
  language_id: string
}

export type TBookWithTitle = TBook & { title: string }

export type TQuote = InferTypeOf<typeof Quote> & {
  author?: TAuthor
  book?: TBookWithTitle
}
export type TQuoteInput = Pick<TQuote, 'id' | 'content' | 'author' | 'book'>

export type TQuoteAdditionnalData = {
  author_id: string
  book_id: string
}
