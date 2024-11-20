import api from '@ztf-library/api'

export async function fetchRandomQuotes() {
  const quotes = await api
    .with(process.env.NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY)
    .quote.getRandomQuote()

  if (!quotes) {
    return []
  }

  return quotes
}
