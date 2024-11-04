import { LANGUAGE } from '../endpoints'
import { TApiPaginatedReponse, TLanguage, TLanguageInput } from '../types'

export const getLanguages = async () => {
  return (await fetch(LANGUAGE.GET_LANGUAGES, {
    credentials: 'include',
  }).then(res => res.json())) as TApiPaginatedReponse<TLanguage[]>
}

export const createLanguage = async (data: TLanguageInput) => {
  return (await fetch(LANGUAGE.CREATE_LANGUAGES, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify(data),
  }).then(res => res.json())) as TLanguage
}

export const updateLanguage = async (data: TLanguageInput) => {
  return (await fetch(LANGUAGE.UPDATE_LANGUAGES, {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'PUT',
    body: JSON.stringify(data),
  }).then(res => res.json())) as TLanguage
}

export const deleteLanguage = (id: string) => {
  return fetch(LANGUAGE.DELETE_LANGUAGES(id), {
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'DELETE',
  })
}
