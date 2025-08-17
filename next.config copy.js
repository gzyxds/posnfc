/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.urlnet.cn',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
