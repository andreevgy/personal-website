/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ['en-US', 'ru-RU'],
    defaultLocale: 'en-US',
    localeDetection: true,
  }
}

module.exports = nextConfig
