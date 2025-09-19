import type { Metadata } from 'next'

// 布局组件
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// 客户端组件
import ChatIframe from './ChatIframe'

/**
 * 首页 SEO 元数据配置
 * 包含页面标题、描述和关键词，用于搜索引擎优化
 */
export const metadata: Metadata = {
  title:
    'pos支付网客服_pos支付网客服中心_pos支付网客服系统_pos支付网客服软件_pos支付网客服平台',
  description:
    '【pos支付网客服】 pos支付网客服中心_pos支付网客服系统_pos支付网客服软件_pos支付网客服平台',
  keywords: ['pos支付网计算', 'pos支付网服务器', 'pos支付网官网', 'pos支付网弹性云服务器', '轻量云服务器', 'pos支付网数据中心', '香港免备案服务器', '国内高防服务器'],
}

/**
 * 首页组件 - 云计算服务平台主页
 *
 * 页面结构按照用户浏览路径和转化漏斗设计：
 * 1. 视觉冲击 → 功能展示 → 解决方案 → 商业转化 → 社会证明 → 行动引导
 *
 * @returns {JSX.Element} 完整的首页布局
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <ChatIframe />
      </main>
      <Footer />
    </>
  )
}