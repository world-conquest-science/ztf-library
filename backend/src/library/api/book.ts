import { BOOK } from '../endpoints'
import {
  TAuthor,
  TLanguage,
  TApiDataReponse,
  TBookInput,
  TBook,
  TBookAdditionnalData,
} from '../types'

export const getBookByProductId = async (productId: string) => {
  return (await fetch(BOOK.GET_BOOK_BY_PRODUCT_ID(productId), {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())) as TApiDataReponse<
    Partial<
      TBook & {
        author: TAuthor
        language: TLanguage
      }
    >
  >
}

export const getAllBooks = async () => {
  return (await fetch(BOOK.GET_ALL_BOOKS, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json())) as TApiDataReponse<Partial<TBook & { title: string }>>
}

export const createBook = async (data: TBookInput, additionnal_data: TBookAdditionnalData) => {
  return (await fetch(BOOK.CREATE_BOOK, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ data, additionnal_data }),
  }).then(res => res.json())) as TApiDataReponse<TBook>
}

export const updateBook = async (data: TBookInput, additionnal_data: TBookAdditionnalData) => {
  return (await fetch(BOOK.UPDATE_BOOK, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify({ data, additionnal_data }),
  }).then(res => res.json())) as void
}

export const updateProduct = async (productId: string, additional_data: { book_id: string }) => {
  return (await fetch(BOOK.UPDATE_PRODUCT(productId), {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ additional_data }),
  }).then(res => res.json())) as void
}
