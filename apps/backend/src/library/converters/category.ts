import { ProductCategory } from '.medusa/types/remote-query-entry-points'
import { TCategory } from '@ztf-library/types'
import { convertProductToBook } from './product'

export function convertCategory(category: ProductCategory): TCategory {
  return {
    id: category?.id,
    title: category?.name,
    slug: category?.handle,
    description: category?.description,
    rank: category?.rank,
    books: category?.products?.map(convertProductToBook),
  }
}
