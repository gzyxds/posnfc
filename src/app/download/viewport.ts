import type { Viewport } from 'next'

/**
 * APP下载页面的视口配置
 * 根据Next.js 15的要求，将viewport相关配置从metadata中分离
 */
export const viewport: Viewport = {
  // 移动端优化
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  
  // 主题颜色
  themeColor: '#2563eb',
  colorScheme: 'light',
}