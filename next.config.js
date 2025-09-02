/** @type {import('next').NextConfig} */
const nextConfig = {
  // 配置静态导出以生成 out 目录
  output: 'export',
  // 禁用图片优化以支持静态导出
  images: {
    unoptimized: true,
  },
  // 配置 trailing slash 以确保静态部署兼容性
  trailingSlash: true,
  // 配置导出目录
  distDir: 'out',
  // 确保生成自定义404页面
  generateBuildId: () => 'build',
}

module.exports = nextConfig
