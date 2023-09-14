/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['image.tmdb.org', 'picsum.photos', 'img.youtube.com'],
  },
  reactStrictMode: false,
  env: {
    API_KEY: process.env.API_KEY,
    APP_URL: process.env.APP_URL,
    API_URL: process.env.API_URL,
    MOVIE_DB_URL: process.env.MOVIE_DB_URL,
    MOVIE_DB_IMG_URL: process.env.MOVIE_DB_IMG_URL,
  }
}

module.exports = nextConfig
