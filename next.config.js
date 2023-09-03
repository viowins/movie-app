/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.MOVIE_DB_IMG_URL],
  },
}

module.exports = nextConfig
