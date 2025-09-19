import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '常见问题FAQ - POS机办理指南_银盛拉卡拉中付乐刷_POS支付网',
  description: 'POS机常见问题解答，包含办理流程、使用方法、费率说明、售后服务等全方位指导。解决您在POS机申请、激活、使用过程中遇到的各种问题。',
  keywords: [
    'POS机怎么办理', 'POS机使用教程', 'POS机费率', 'POS机激活流程', 
    '银盛POS机FAQ', '拉卡拉POS机问题', '中付POS机咨询', '乐刷POS机答疑',
    'POS机不到账', 'POS机客服电话', 'POS机退货政策', 'POS机代理问题'
  ],
}

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}