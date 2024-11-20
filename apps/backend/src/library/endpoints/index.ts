export const AUTHOR = {
  GET_AUTHORS: '/admin/authors',
  CREATE_AUTHORS: '/admin/authors',
  UPDATE_AUTHORS: '/admin/authors',
  DELETE_AUTHORS: (id: string) => `/admin/authors?id=${id}`,
}

export const BOOK = {
  CREATE_BOOK: '/admin/books',
  GET_EXTENSIONS: (id: string) => `/admin/books/${id}/extensions`,
  GET_ALL_BOOKS: '/admin/books/all',
  GET_BOOK_BY_PRODUCT_ID: (productId: string) =>
    `/admin/books?productId=${productId}`,
  UPDATE_PRODUCT: (productId: string) => `/admin/products/${productId}`,
  UPDATE_BOOK: '/admin/books',
}

export const LANGUAGE = {
  GET_LANGUAGES: '/admin/languages',
  CREATE_LANGUAGES: '/admin/languages',
  UPDATE_LANGUAGES: '/admin/languages',
  DELETE_LANGUAGES: (id: string) => `/admin/languages?id=${id}`,
}

export const QUOTE = {
  GET_QUOTES: '/admin/quotes',
  CREATE_QUOTES: '/admin/quotes',
  UPDATE_QUOTES: '/admin/quotes',
  DELETE_QUOTES: (id: string) => `/admin/quotes?id=${id}`,
}
