import type { Metadata } from 'next'

/**
 * 激活返现专题页布局组件
 * @param children - 子组件内容
 * @returns 包含SEO元数据和子组件的布局组件
 */
export const metadata: Metadata = {
  title: 'POS机激活返现政策｜总部直签激活返现299元/台 分润万12-万16',
  description: 'POS机激活返现299元/台，0加盟费总部直签，T+1自动结算分润万12-万16。支持银盛、拉卡拉、中付、乐刷等热门品牌，提供免费培训、物料支持和区域保护政策。',
  keywords: [
    'POS机激活返现',
    '激活返现299元',
    'POS机代理政策',
    'POS机总部直签',
    '分润万12',
    '分润万16',
    'T+1自动结算',
    '0加盟费代理',
    'POS机代理加盟',
    '激活返现政策',
    '银盛激活返现',
    '拉卡拉激活返现',
    '中付激活返现',
    '乐刷激活返现'
  ],
  openGraph: {
    title: 'POS机激活返现政策｜总部直签激活返现299元/台 分润万12-万16',
    description: 'POS机激活返现299元/台，0加盟费总部直签，T+1自动结算分润万12-万16。支持银盛、拉卡拉、中付、乐刷等热门品牌。',
    type: 'website',
  },
}

export default function CashbackLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}