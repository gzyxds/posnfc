import { MetadataRoute } from 'next'
import { seoConfig } from './seo.config'

/**
 * Robots.txt 配置生成器
 * 集中管理 robots.txt 的生成逻辑
 */
export function generateRobots(): MetadataRoute.Robots {
  const baseUrl = seoConfig.site.url
  
  // 从配置中获取所有页面路径（除了根路径）
  const specificPaths = seoConfig.pages
    .map(page => page.path)
    .filter(path => path !== '/')

  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', ...specificPaths], // 首先允许根路径，然后显式列出其他路径
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/private/',
          '/.git/',
          '/node_modules/',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Baiduspider',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: '360Spider',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Sogou web spider',
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: ['AhrefsBot', 'SemrushBot', 'MJ12bot'],
        disallow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

export default generateRobots