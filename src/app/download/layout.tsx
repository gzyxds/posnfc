import type { Metadata } from 'next'
import { appDownloadMetadata } from './metadata'
import { viewport } from './viewport'

/**
 * APP下载页面 SEO 元数据配置
 * 包含手机POS机APP下载相关的关键词和描述，用于搜索引擎优化
 */
export const metadata: Metadata = appDownloadMetadata

// 导出viewport配置
export { viewport }

/**
 * APP下载页面布局组件
 *
 * @param children 子组件内容
 * @returns {JSX.Element} 布局组件
 */
export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
