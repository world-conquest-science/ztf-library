import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'books2read-prod.s3.us-west-2.amazonaws.com',
      },
      {
        hostname: 'm.media-amazon.com',
      },
      {
        hostname: 'images.pexels.com',
      },
    ],
  },
}

export default withNextIntl(nextConfig)
