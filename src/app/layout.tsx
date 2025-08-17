import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import CustomerService from '@/components/common/CustomerService'

export const metadata: Metadata = {
  title: {
    template: '%s_ 优刻云计算',
    default: '优刻云计算',
  },
  description:
    '优刻云计算是一家专业提供云计算服务的公司，致力于为客户提供安全、可靠、高效的云计算解决方案。',
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className="flex h-full flex-col">
        {children}
        <CustomerService />
      </body>
    </html>
  )
}
