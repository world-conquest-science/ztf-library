import { Product } from '.medusa/types/remote-query-entry-points'
import { TBook, TCurrency } from '@ztf-library/types'
import { convertCategory } from './category'

const toCurrency = (code: string): TCurrency => {
  if (code === 'eur') return 'eur'
  if (code === 'usd') return 'usd'
  if (code === 'xo') return 'xof'
}

export function convertProductToBook(product: Product): TBook {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    slug: product.handle,
    audio_version_url: product.book?.audioVersionUrl,
    dimensions: product.book?.dimensions,
    ebook_version_url: product.book?.ebookVersionEbook,
    isbn: product.book?.isbn,
    pages_count: product.book?.pagesCount,
    publish_date: parseInt(product.book?.publishDate),
    publisher: product.book?.publisher,
    author: {
      id: product.book?.author?.id,
      name: product.book?.author?.name,
      slug: product.book?.author?.handle,
      about: product.book?.author?.about,
      photo_url: product.book?.author?.photoUrl,
    },
    categories: product.categories?.map(convertCategory),
    language: {
      id: product.book?.language?.id,
      code: product.book?.language?.code,
    },
    formats: product.variants.map(variant => ({
      label: variant.title,
      is_available: true,
      prices: variant.prices?.map(price => ({
        id: price?.id,
        amount: price?.amount,
        currency: toCurrency(price?.currency_code),
      })),
    })),
    image_url: product.images[0]?.url,
    thumbnail: product.thumbnail,
    preface: product.description,
  }
}
