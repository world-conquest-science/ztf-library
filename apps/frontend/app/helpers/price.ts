export function formatPrice(
  price: number,
  currency: string = 'EUR',
  locale: string = 'fr-FR',
): string {
  const currencyFormatter = Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    useGrouping: false,
  })

  return currencyFormatter.format(price)
}
