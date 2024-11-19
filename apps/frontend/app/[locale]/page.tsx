import React from 'react'
import { Banner } from '@/app/components/Banner'
import { SpecialOffers } from '@/app/components/SpecialOffers'
import { Books } from '@/app/components/Books'
import { QuotesFromAuthor } from '@/app/components/QuotesFromAuthor'
import { PopularSeries } from '@/app/components/PopularSeries'
import { InfiniteBrowser } from '@/app/components/InfiniteBrowser'

const HomePage = () => {
  return (
    <>
      <Banner />
      <SpecialOffers />
      <Books />
      <QuotesFromAuthor />
      <PopularSeries />
      <InfiniteBrowser />
    </>
  )
}

export default HomePage
