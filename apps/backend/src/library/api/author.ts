import { AUTHOR } from '../endpoints'
import { TApiPaginatedReponse, TAuthor, TAuthorInput } from '../types'

export const getAuthors = async () => {
  return (await fetch(AUTHOR.GET_AUTHORS, {
    credentials: 'include',
  }).then(res => res.json())) as TApiPaginatedReponse<TAuthor[]>
}

export const createAuthor = async (data: TAuthorInput) => {
  return (await fetch(AUTHOR.CREATE_AUTHORS, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  }).then(res => res.json())) as TAuthor
}

export const updateAuthor = async (data: TAuthorInput) => {
  return (await fetch(AUTHOR.UPDATE_AUTHORS, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(data),
  }).then(res => res.json())) as TAuthor
}

export const deleteAuthor = (id: string) => {
  return fetch(AUTHOR.DELETE_AUTHORS(id), {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  })
}
