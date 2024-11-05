import { ProductCategory } from '.medusa/types/remote-query-entry-points'
import { TCategory } from '@ztf-library/types'

export function convertCategory(category: ProductCategory): TCategory {
  return {
    id: category?.id,
    title: category?.name,
    slug: category?.handle,
    description: category?.description,
  }
}
