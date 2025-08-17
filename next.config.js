/** @type {import('next').NextConfig} */
const nextConfig = {
  // 所有图片已本地化，不再需要外部域名配置
  images: {
    // remotePatterns 已移除，所有图片使用本地路径
  },
}

module.exports = nextConfig
