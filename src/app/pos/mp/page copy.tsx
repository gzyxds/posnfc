import { type Metadata } from 'next'
import Image from 'next/image'
import {
  QrCodeIcon,
  SpeakerWaveIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ArrowsPointingOutIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  GiftIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Carousel } from '@/components/carousel'
import { Container } from '@/components/Container'

import screenshotContacts from '@/images/screenshots/achievements.png'
// === 页面组件导入 - 按功能分类排序 ===
// === 解决方案与产品展示 ===
import { Solution } from '@/components/Solution' // 解决方案
import ProductTraits from '@/components/common/ProductTraits' // 产品特性
import Superiority from '@/components/common/Superiority' // 产品优势
import Advantage from '@/components/Advantage' // 优势展示
// === 客户与信任建立 ===
import Customer from '@/components/common/Customer' // 客户案例
// === 支持与帮助 ===
import { Faqs } from '@/components/Faqs' // 常见问题
// === 页面底部 ===
import CatSections from '@/components/CatSections' // 底部行动区域
import Latestapplication from '@/components/common/Latestapplication' // 订单
import Cardprice from '@/components/common/Cardprice' // 码牌收款产品
// === 二维码按钮组件 ===
import DualQRCodeButtonGroup from '@/components/common/QRCode'
import Rightleft from '@/components/common/Rightleft'
import Leftright from '@/components/common/Leftright'

// 码牌收款产品接口定义
interface QRCodeProduct {
  id: number
  name: string
  subtitle: string
  specs: {
    material: string
    size: string
    voice: string
    payment: string
  }
  features: string[]
  duration: string
  originalPrice: number
  currentPrice: number
  discount: string
  isHot?: boolean
  isRecommended?: boolean
}

// 码牌收款产品数据
const qrCodeProducts: QRCodeProduct[] = [
  {
    id: 1,
    name: '聚合码牌',
    subtitle: '基础版',
    specs: {
      material: '亚克力防水',
      size: '15x20cm',
      voice: '本地语音播报',
      payment: '微信+支付宝',
    },
    features: ['扫码收款', '语音播报', '防水防晒', '可粘贴'],
    duration: '终身使用',
    originalPrice: 99,
    currentPrice: 0,
    discount: '免费领取',
    isHot: true,
  },
  {
    id: 2,
    name: '聚合码牌',
    subtitle: '标准版',
    specs: {
      material: '亚克力防水',
      size: '20x25cm',
      voice: '远程语音播报',
      payment: '全渠道支付',
    },
    features: ['全渠道收款', '远程播报', '防水防晒', '立牌支架'],
    duration: '终身使用',
    originalPrice: 199,
    currentPrice: 0,
    discount: '免费领取',
    isRecommended: true,
  },
  {
    id: 3,
    name: '聚合码牌',
    subtitle: '专业版',
    specs: {
      material: '钢化玻璃',
      size: '25x30cm',
      voice: '智能语音播报',
      payment: '全渠道+信用卡',
    },
    features: ['信用卡支持', '智能播报', '钢化材质', '定制Logo'],
    duration: '终身使用',
    originalPrice: 299,
    currentPrice: 0,
    discount: '免费领取',
  },
  {
    id: 4,
    name: '聚合码牌',
    subtitle: '旗舰版',
    specs: {
      material: '不锈钢材质',
      size: '30x40cm',
      voice: 'AI智能播报',
      payment: '全渠道+数字人民币',
    },
    features: ['数字人民币', 'AI播报', '不锈钢材质', '品牌定制'],
    duration: '终身使用',
    originalPrice: 499,
    currentPrice: 0,
    discount: '免费领取',
  },
]

// 页面元数据配置
export const metadata: Metadata = {
  title: '聚合码牌免费申请｜一张码支持微信支付宝信用卡，0元包邮',
  description:
    '聚合码牌免费申请，一张码支持微信、支付宝、信用卡、花呗、数字人民币全渠道收款，语音播报防逃单，费率0.38%秒到账，央行聚合支付备案，商户专用收款码牌。',
  keywords: [
    '码牌收款',
    '聚合码牌',
    '商户码牌',
    '码牌申请',
    '码牌办理',
    '二维码收款牌',
    '支付宝微信码牌',
    '静态码牌',
    '语音码牌',
    '聚合收款码',
    '信用卡扫码',
    '花呗收款',
    '数字人民币',
    '商户收款',
    '免费码牌',
    '央行备案',
  ],
}

// 码牌收款核心特性配置
const qrCodeFeatures = [
  {
    name: '一码全收',
    description:
      '一张码牌支持微信、支付宝、云闪付、数字人民币等全渠道收款，信用卡、花呗、白条都能刷。',
    icon: QrCodeIcon,
  },
  {
    name: '语音播报',
    description:
      '实时语音播报收款金额，防止漏单逃单，支持远程播报器，收银台也能听到。',
    icon: SpeakerWaveIcon,
  },
  {
    name: '安全可靠',
    description:
      '央行聚合支付备案，资金安全有保障，防水防晒材质，户外使用无忧。',
    icon: ShieldCheckIcon,
  },
]



// 码牌收款 Hero 组件 - 展示码牌收款服务的主要内容
function QRCodeVideoHero() {
  return (
    <section className="relative pt-16 pb-12 lg:py-16" style={{backgroundColor: '#f0f4f8'}}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 左侧内容区域 */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-700">
                0元免费领取 · 费率0.38%秒到账
              </div>

              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                聚合码牌收款
                <span className="block text-blue-600">一张码全搞定</span>
              </h1>

              <p className="text-lg text-gray-600">
                聚合码牌支持微信、支付宝、信用卡、花呗、数字人民币全渠道收款，语音播报防逃单，费率0.38%秒到账，0元免费领取。
              </p>
            </div>

            {/* 核心特性 - 简化版 */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="text-green-600">✓</span>
                <span>全渠道收款 · 语音播报防逃单</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="text-green-600">✓</span>
                <span>费率0.38% · 防水防晒材质</span>
              </div>
            </div>

            {/* 行动按钮 - 使用DualQRCodeButtonGroup */}
            <DualQRCodeButtonGroup
              leftButton={{
                text: '免费申请码牌',
                className: 'inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 transition-colors',
                icon: <GiftIcon className="mr-2 h-5 w-5" />
              }}
              rightButton={{
                text: '联系客服',
                className: 'inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors',
                icon: <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />
              }}
              leftQRCode={{
                src: '/images/contact/gzh.png',
                alt: '微信公众号二维码',
                title: '关注公众号',
                description: '扫描二维码关注公众号'
              }}
              rightQRCode={{
                src: '/images/contact/userhlc.png',
                alt: '客服二维码',
                title: '联系客服',
                description: '扫码添加客服咨询'
              }}
              title="扫码联系我们"
              description="选择下方二维码进行联系"
            />

            {/* 信任标识 - 简化版 */}
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>央行聚合支付备案</span>
              <span>·</span>
              <span>顺丰包邮</span>
              <span>·</span>
              <span>防水防晒</span>
            </div>
          </div>

          {/* 右侧产品图片 - 简化版 */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/product/云银.png"
              alt="聚合码牌收款产品图"
              width={500}
              height={500}
              className="w-[500px] h-[500px] object-contain"
              unoptimized
            />
          </div>
        </div>
      </Container>
    </section>
  )
}



export default function QRCodePage() {
  return (
    <>
      <Header />
      <main>
        <QRCodeVideoHero />
       {/* === 产品对比展示 === */}
        <Rightleft />
        <Leftright />
        {/* === 解决方案与产品展示 === */}
        <ProductTraits />
        <Superiority />
        <Solution />
        <Advantage />

        {/* === 客户与信任建立 === */}
        <Latestapplication />
        {/* === 页面底部 === */}
        <CatSections />
      </main>
      <Footer />
    </>
  )
}
