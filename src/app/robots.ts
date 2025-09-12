import { generateRobots } from '@/config/robots.config'

// 静态导出需要强制静态生成
export const dynamic = 'force-static'

/**
 * Next.js 15 robots.txt 路由处理器
 * 使用集中配置生成 robots.txt
 */
export default function robots() {
  return generateRobots()
}