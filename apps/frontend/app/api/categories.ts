import api from '@ztf-library/api'

export async function fetchAllCategories() {
  const categories = await api
    .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
    .category.getAllCategories({ includeProducts: true })

  if (!categories) {
    return []
  }

  return categories
}

export async function getCategoryBySlug(slug: string) {
  const category = await api
    .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
    .category.getCategoryBySlug(slug)

  if (!category) {
    return null
  }

  return category
}
