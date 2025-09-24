import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: '超级推_超级推官网_超级推APP_超级推平台',
  description:
    '超级推官网提供App移动POS收银系统免费下载安装，支持Android/iOS全平台，0.38%费率永不+3，信用卡、微信、支付宝、云闪付全能收款，激活返现299元，T+0秒到账，个人/商户1证开通，无需额外设备，手机秒变POS机，一站式官网下载、代理加盟、售后客服服务。',
  keywords: [
    '超级推官网,超级推App下载,超级推移动POS,超级推收银系统,超级推POS机办理,超级推官网下载,超级推安卓版,超级推iOS版,超级推客服,超级推代理,超级推费率,移动收银App,手机POS软件,激活返现,一清支付',
  ],
}

export default function CJTLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}