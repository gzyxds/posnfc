import { generateSitemap } from '@/config/sitemap.config'

// 静态导出需要强制静态生成
export const dynamic = 'force-static'

/**
 * Next.js 15 sitemap.xml 路由处理器
 * 使用集中配置生成 sitemap.xml
 */
export default function sitemap() {
  return generateSitemap()
}