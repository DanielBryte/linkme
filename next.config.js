/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
images: {
  domains: ['pbs.twimg.com', 'cdn-icons-png.flaticon.com']
}
}

module.exports = nextConfig
