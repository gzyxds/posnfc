import { type Metadata } from 'next'

// ==================== 页面SEO元数据配置 ====================
export const metadata: Metadata = {
  title: 'POS机代理政策官网｜10星级奖励体系 分润万12-万16激活返现299元/台',
  description: '0加盟费1台起拿！央行牌照一清机总部直签，10星级奖励体系，分润T+1自动到账，万12-万16终身锁，激活返现299元/台，提供话术+素材+地推点位，新手7天出首台，无限下级分润差实时结算！',
  keywords: 'POS机代理政策,代理加盟,一级代理,分润万12,总部直签,激活返现,10星级奖励,银盛代理,拉卡拉合伙人,乐刷一级机构,智能POS招商,电签POS招商',
  openGraph: {
    title: 'POS机代理政策官网｜10星级奖励体系 分润万12-万16激活返现299元/台',
    description: '0加盟费1台起拿！央行牌照一清机总部直签，10星级奖励体系，分润T+1自动到账，万12-万16终身锁，激活返现299元/台，提供话术+素材+地推点位，新手7天出首台，无限下级分润差实时结算！',
  },
}

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}