import { fetchAllCategories } from '@/app/api/categories'
import { CategoryItem } from '@/app/components/CategoryItem'
import React from 'react'

const AllCategoriesPage = async () => {
  const categories = await fetchAllCategories()

  return (
    <section className="px-6 pt-10 sm:px-0 sm:pt-14">
      <div className="container mx-auto">
        <header className="mb-5 flex flex-col items-start sm:mb-5 sm:flex-row sm:items-center sm:justify-between">
          <h4 className="text-2xl font-extrabold text-accent-dark sm:text-4xl">
            All categories
          </h4>
        </header>
        <ul className="grid gap-16 sm:grid-cols-[repeat(auto-fill,18%)] sm:gap-8">
          {categories.map(category => (
            <CategoryItem key={category.slug} category={category} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default AllCategoriesPage
