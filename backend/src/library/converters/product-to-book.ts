import { Product } from '.medusa/types/remote-query-entry-points'
import { TBook, TCurrency } from '@ztf-library/types'

const toCurrency = (code: string): TCurrency => {
  if (code === 'eur') return 'eur'
  if (code === 'usd') return 'usd'
  if (code === 'xo') return 'xof'
}

export default function (product: Product): TBook {
  return {
    id: product.id,
    title: product.title,
    slug: product.handle,
    audioVersionUrl: product.book?.audioVersionUrl,
    dimensions: product.book?.dimensions,
    ebookVersionUrl: product.book?.ebookVersionEbook,
    isbn: product.book?.isbn,
    pagesCount: product.book?.pagesCount,
    publishDate: parseInt(product.book?.publishDate),
    publisher: product.book?.publisher,
    author: {
      id: product.book?.author?.id,
      name: product.book?.author?.name,
      slug: product.book?.author?.handle,
      about: product.book?.author?.about,
      photoUrl: product.book?.author?.photoUrl,
    },
    categories: product.categories?.map(category => ({
      id: category?.id,
      slug: category?.handle,
      title: category?.name,
      description: category?.description,
    })),
    language: {
      id: product.book?.language?.id,
      code: product.book?.language?.code,
    },
    formats: product.variants.map(variant => ({
      label: variant.title,
      isAvailable: true,
      prices: variant.prices?.map(price => ({
        id: price?.id,
        amount: price?.amount,
        currency: toCurrency(price?.currency_code),
      })),
    })),
    imageUrl: product.images[0]?.url,
    thumbnail: product.thumbnail,
    preface: product.description,
  }
}
