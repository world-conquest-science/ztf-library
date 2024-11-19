import React from 'react'
import { Banner } from '@/app/components/Banner'
import { SpecialOffers } from '@/app/components/SpecialOffers'
import { Books } from '@/app/components/Books'
import { Quote } from '@/app/components/Quote'
import { PopularSeries } from '@/app/components/PopularSeries'
import { AllBooks } from '@/app/components/AllBooks'
import api from '@ztf-library/api'
import { getRandomItems } from '../helpers/random'
import { TCategory } from '@ztf-library/types'

async function fetchAllCategories() {
  const categories = await api
    .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
    .category.getAllCategories({ includeProducts: true })

  if (!categories) {
    return []
  }

  return categories
}

async function fetchRandomQuotes() {
  const quotes = await api
    .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
    .quote.getRandomQuote()

  if (!quotes) {
    return []
  }

  return quotes
}

const HomePage = async () => {
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

export default HomePage
