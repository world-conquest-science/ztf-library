import { TQuote } from '@ztf-library/types'

export function convertQuote(quote: any): TQuote {
  return {
    id: quote?.id,
    content: quote?.content,
    book: {
      slug: quote?.book?.product?.handle,
      title: quote?.book?.product?.title,
      thumbnail: quote?.book?.product?.thumbnail,
    },
    author: {
      slug: quote?.author?.handle,
      name: quote?.author?.name,
      photo_url: quote?.author?.photoUrl,
      about: quote?.author?.about,
    },
  }
}
