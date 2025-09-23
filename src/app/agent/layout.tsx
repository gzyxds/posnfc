import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'POS机代理加盟官网｜pos机官网｜pos代理平台｜pos机代理机构',
  description:
    '0加盟费1台起拿！央行牌照一清机总部直签，分润T+1自动到账，万12-万16终身锁，激活返现299元/台，提供话术+素材+地推点位，新手7天出首台，无限下级分润差实时结算，立即抢占区域代理权！',
  keywords: [
    'POS机代理',
    'POS机加盟',
    '一级代理',
    '分润万12',
    '总部直签',
    '激活返现',
    '银盛代理',
    '拉卡拉合伙人',
    '乐刷一级机构',
    '智能POS招商',
    '电签POS招商'
  ],
  openGraph: {
    title: 'POS机代理加盟官网｜pos机官网｜pos代理平台｜pos机代理机构',
    description:
      '0加盟费1台起拿！央行牌照一清机总部直签，分润T+1自动到账，万12-万16终身锁，激活返现299元/台，提供话术+素材+地推点位，新手7天出首台，无限下级分润差实时结算，立即抢占区域代理权！',
    type: 'website',
    locale: 'zh_CN',
  },
}

export default function AgentLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}