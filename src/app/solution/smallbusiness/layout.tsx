import type { Metadata } from 'next'

// ==================== 小微商户支付页面SEO元数据 ====================
export const metadata: Metadata = {
  title: '小微商户支付解决方案_个体户收款_小店支付_移动收银_智能POS机办理官网',
  description: '专为小微商户打造的支付解决方案，0.38%费率秒到账，支持扫码收款、刷卡收银、NFC闪付等多种支付方式。免费申请，当天下机，7×24小时客服支持，助力小微商户数字化经营。',
  keywords: [
    '小微商户支付',
    '个体户收款',
    '小店支付',
    '移动收银',
    '扫码收款',
    'POS机申请',
    '小微商户POS机',
    '个体户POS机',
    '小店收银系统',
    '移动支付终端',
    '0.38费率',
    '秒到账',
    '免费申请',
    '小微支付',
    '个体经营',
    '小店经营',
    '数字化收银',
    '智能收款',
    '便民支付',
    '小微金融'
  ],
  openGraph: {
    title: '小微商户支付解决方案_个体户收款_小店支付_移动收银_智能POS机办理官网',
    description: '专为小微商户打造的支付解决方案，0.38%费率秒到账，支持扫码收款、刷卡收银、NFC闪付等多种支付方式。免费申请，当天下机，7×24小时客服支持。',
    type: 'website',
    locale: 'zh_CN',
  },
  twitter: {
    card: 'summary_large_image',
    title: '小微商户支付解决方案_个体户收款_小店支付',
    description: '专为小微商户打造的支付解决方案，0.38%费率秒到账，免费申请，当天下机。',
  },
  alternates: {
    canonical: '/solution/smallbusiness',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function SmallBusinessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}