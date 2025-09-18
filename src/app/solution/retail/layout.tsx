import type { Metadata } from 'next'

// ==================== 零售行业支付解决方案SEO元数据配置 ====================
export const metadata: Metadata = {
  title: '零售行业支付解决方案_NFC收款_会员积分支付_智能POS机办理官网',
  description:
    '专业零售行业支付解决方案：智能POS机+聚合码牌+会员积分支付一站式服务，支持NFC闪付、扫码支付、刷卡收款，0.38%费率秒到账，助力零售门店数字化经营，提升收银效率和客户体验。',
  keywords: [
    '零售行业支付解决方案',
    'NFC收款',
    '会员积分支付',
    '智能POS机',
    '零售收银系统',
    '聚合码牌',
    '零售门店收款',
    '扫码支付',
    '刷卡收款',
    '数字人民币支付',
    '零售支付终端',
    '会员营销系统',
    '快速结算',
    '多终端支付',
    '零售收款设备',
  ],
  openGraph: {
    title: '零售行业支付解决方案_NFC收款_会员积分支付_智能POS机办理官网',
    description:
      '专业零售行业支付解决方案：智能POS机+聚合码牌+会员积分支付一站式服务，支持NFC闪付、扫码支付、刷卡收款，0.38%费率秒到账，助力零售门店数字化经营，提升收银效率和客户体验。',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '零售行业支付解决方案_NFC收款_会员积分支付_智能POS机办理官网',
    description:
      '专业零售行业支付解决方案：智能POS机+聚合码牌+会员积分支付一站式服务，支持NFC闪付、扫码支付、刷卡收款，0.38%费率秒到账，助力零售门店数字化经营，提升收银效率和客户体验。',
  },
}

/**
 * 零售行业支付解决方案页面布局组件
 * 为零售行业支付解决方案页面提供专用的SEO配置和布局结构
 * @param children - 子组件内容
 */
export default function RetailLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
