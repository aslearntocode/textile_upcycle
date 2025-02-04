/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  trailingSlash: true,
  basePath: '',
  eslint: {
    ignoreDuringBuilds: true, // Only if you want to deploy despite warnings
  },
}

module.exports = nextConfig 