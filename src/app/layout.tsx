import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import Top from '@/components/common/Top'
import Analytics from '@/components/Analytics'

export const metadata: Metadata = {
  title: {
    template: '%s_pos支付网',
    default:
      '【POS 支付网】中付 POS 机办理_智能收银终端_移动收款设备_收钱码服务',
  },
  description:
    '【POS支付网】专业POS机办理平台，提供银盛、拉卡拉、中付、乐刷等品牌智能收银终端、移动收款设备、刷脸支付设备、码牌收款、电签POS机、信用卡POS机办理服务，支持数字经营、聚合支付、收钱码等多元化支付解决方案，银联正规认证，安全可靠',
  keywords: [
    'POS机办理',
    'pos机官网',
    '智能收银终端',
    '移动收款设备',
    '刷脸支付设备',
    '银盛POS机',
    '拉卡拉POS机',
    '中付POS机',
    '乐刷POS机',
    '电签POS机',
    '信用卡POS机',
    '码牌收款',
    '收钱码',
    '聚合支付',
    '数字经营',
    '银联POS机',
    'POS支付网',
    '商户收款码',
    '移动收银设备',
    '智能终端',
    'pos收单',
    '支付服务',
    '在线pos刷卡',
    'posapp下载'
  ],
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="zh-CN"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className="flex h-full flex-col">
        <Analytics />
        {children}
        <Top />
      </body>
    </html>
  )
}
