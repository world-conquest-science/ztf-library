import React from 'react'
import { Banner } from '@/app/components/Banner'
import { SpecialOffers } from '@/app/components/SpecialOffers'
import { Books } from '@/app/components/Books'
import { Quote } from '@/app/components/Quote'
import { PopularSeries } from '@/app/components/PopularSeries'
import { AllBooks } from '@/app/components/AllBooks'
import { getRandomItems } from '../helpers/random'
import { TCategory } from '@ztf-library/types'
import { fetchAllCategories } from '../api/categories'
import { fetchRandomQuotes } from '../api/quotes'

export default async function HomePage() {
  const categories = await fetchAllCategories()
  const quotes = await fetchRandomQuotes()
  const someCategories = getRandomItems<TCategory>(categories.slice(0), 3)
  const popularCategories = categories
    .filter(category => category.books && category.books?.length >= 3)
    .slice(1, 5)

  return (
    <>
      <Banner quotes={quotes} />
      {/* <SpecialOffers /> */}
      {someCategories.map(category => (
        <Books key={category.slug} category={category} />
      ))}
      <Quote quote={quotes[0]} />
      <PopularSeries categories={popularCategories} />
      <AllBooks />
    </>
  )
}
