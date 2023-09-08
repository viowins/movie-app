/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [process.env.MOVIE_DB_IMG_URL, 'picsum.photos'],
  },
}

module.exports = nextConfig
