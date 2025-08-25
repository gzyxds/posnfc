import type { Metadata } from 'next'

/**
 * 产品演示页面 SEO 元数据配置
 * 包含页面标题、描述和关键词，用于搜索引擎优化
 */
export const metadata: Metadata = {
  title: '产品演示_艺创AI_AI系统源码_AI数字人源码_AI数字人系统源码',
  description:
    '艺创AI提供全方位的AI解决方案，包括AI数字人SaaS系统、全能知识库、聊天绘画系统和论文写作系统。立即体验我们的产品特性，探索AI带来的无限可能',
  keywords:
    '艺创AI,AI数字人,知识库,聊天绘画,论文写作,SaaS系统,PHP系统,Java系统,AI演示',
}

/**
 * 产品演示页面布局组件
 *
 * @param children 子组件内容
 * @returns {JSX.Element} 布局组件
 */
export default function DemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
