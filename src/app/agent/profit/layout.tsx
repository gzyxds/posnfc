/**
 * 代理分润页面布局组件
 * 处理代理分润页面的SEO元数据和布局结构
 */
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'POS机代理分润政策｜总部直签激活返现299元/台 T+1自动结算分润万12-万16',
  description: 'POS机代理分润结算平台，提供T+1自动到账服务，支持多级分润模式，分润高达万12-万16。总部直签政策，激活返现299元/台，0加盟费，1台起拿，后台实时查询流水，节假日不休自动打款。',
  keywords: [
    'POS机代理分润',
    'POS机分润结算',
    'POS机代理政策',
    'POS机总部直签',
    '激活返现政策',
    'POS机分润万12',
    '多级分润模式',
    'T+1自动到账',
    'POS机代理加盟',
    'POS机一级代理',
    'POS机拿货价',
    'POS机激活一台返多少',
    'POS机二级代理',
    '电签POS机招商',
    '智能POS机加盟'
  ],
  openGraph: {
    title: 'POS机代理分润结算官网｜T+1自动到账 多级分润模式 分润万12-万16',
    description: 'POS机代理分润结算平台，提供T+1自动到账服务，支持多级分润模式，分润高达万12-万16。总部直签政策，激活返现299元/台。',
  },
}

export default function ProfitLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}