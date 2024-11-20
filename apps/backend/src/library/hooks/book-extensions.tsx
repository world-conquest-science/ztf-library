import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  getBookByProductId,
  createBook,
  updateBook,
  updateProduct,
} from '../api/book'
import { TAuthor, TBookInput, TLanguage } from '../types'

type TBookExtensionsContext = {
  setData: React.Dispatch<React.SetStateAction<TBookExtensionsContext>>
  update: () => Promise<void>
  book?: TBookInput
  author?: TAuthor
  language?: TLanguage
  isUpdating?: boolean
  isDisabled?: boolean
}

const emptyBook: Partial<TBookInput> = {
  audioVersionUrl: '',
  dimensions: '',
  ebookVersionEbook: '',
  isbn: '',
  pagesCount: 0,
  publishDate: new Date().getTime(),
  publisher: '',
}

const BookExtensionsContext = createContext<TBookExtensionsContext>({
  update: () => new Promise(() => {}),
  setData: () => {},
})

const useBookExtensions = () => useContext(BookExtensionsContext)

type TBookExtensionsProps = {
  productId: string
  children: React.ReactNode
}

const BookExtensions = ({ productId, children }: TBookExtensionsProps) => {
  const [data, setData] = useState<Partial<TBookExtensionsContext>>({
    book: emptyBook,
  })

  useEffect(() => {
    getBookByProductId(productId).then(({ data }) => {
      setData(prev => ({
        ...prev,
        book: data,
        author: data?.author,
        language: data?.language,
      }))
    })
  }, [])

  const update: () => Promise<void> = () => {
    if (!data) {
      return
    }

    return new Promise((resolve, reject) => {
      setData(prev => ({ ...prev, isUpdating: true }))

      if (data.book && data.book.id) {
        updateBook(data.book, {
          author_id: data.author?.id,
          language_id: data.language?.id,
        })
          .then(resolve)
          .catch(reject)
          .finally(() => setData(prev => ({ ...prev, isUpdating: false })))
      } else {
        createBook(data.book, {
          author_id: data.author?.id,
          language_id: data.language?.id,
        })
          .then(({ data: createdBook }) =>
            updateProduct(productId, { book_id: createdBook.id }),
          )
          .then(resolve)
          .catch(reject)
          .finally(() => setData(prev => ({ ...prev, isUpdating: false })))
      }
    })
  }

  return (
    <BookExtensionsContext.Provider
      value={{
        ...data,
        setData,
        update,
        isDisabled: !data.book,
      }}
    >
      {children}
    </BookExtensionsContext.Provider>
  )
}

export { BookExtensions, useBookExtensions }
