import { QUOTE } from '../endpoints'
import {
  TApiPaginatedReponse,
  TQuote,
  TQuoteAdditionnalData,
  TQuoteInput,
} from '../types'

export const getQuotes = async () => {
  return (await fetch(QUOTE.GET_QUOTES, {
    credentials: 'include',
  }).then(res => res.json())) as TApiPaginatedReponse<TQuote[]>
}

export const createQuote = async (
  data: TQuoteInput,
  additionnal_data: TQuoteAdditionnalData,
) => {
  return (await fetch(QUOTE.CREATE_QUOTES, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ data, additionnal_data }),
  }).then(res => res.json())) as TQuote
}

export const updateQuote = async (
  data: TQuoteInput,
  additionnal_data: TQuoteAdditionnalData,
) => {
  return (await fetch(QUOTE.UPDATE_QUOTES, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify({ data, additionnal_data }),
  }).then(res => res.json())) as TQuote
}

export const deleteQuote = (id: string) => {
  return fetch(QUOTE.DELETE_QUOTES(id), {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  })
}
