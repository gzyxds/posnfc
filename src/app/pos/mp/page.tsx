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

// === 二维码按钮组件 ===
import DualQRCodeButtonGroup from '@/components/common/QRCode'

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

// Leftright 组件的特性数据
const leftRightFeatures = [
  {
    name: '收款统计',
    summary: '实时查看收款数据，智能分析经营状况。',
    description:
      '通过手机APP实时查看收款记录、日周月报表，智能分析客流高峰和收入趋势，助力经营决策。',
    icon: ChartBarIcon,
  },
  {
    name: '分店管理',
    summary: '多店铺统一管理，收款数据一目了然。',
    description:
      '支持多门店统一管理，每个店铺独立码牌，收款数据分别统计，总部可查看所有分店经营状况。',
    icon: DocumentTextIcon,
  },
  {
    name: '营销工具',
    summary: '内置营销功能，提升客户复购率。',
    description:
      '支持优惠券发放、会员积分、满减活动等营销工具，扫码即可参与，有效提升客户粘性和复购率。',
    icon: ArrowsPointingOutIcon,
  },
]

// Rightleft 组件的特性数据
const rightLeftFeatures = [
  {
    name: '10秒开通',
    description:
      '在线提交资料，10秒完成开通，码牌当天制作发货，顺丰包邮2天到家，开箱即用。',
    icon: CloudArrowUpIcon,
  },
  {
    name: '费率透明',
    description:
      '费率0.38%永不上涨，电子合同保障，交易秒到账不冻结，无隐藏费用。',
    icon: LockClosedIcon,
  },
  {
    name: '定制服务',
    description:
      '支持Logo定制、尺寸定制、材质选择，满足不同场景需求，打造专属品牌形象。',
    icon: ServerIcon,
  },
]

// 码牌收款 Hero 组件 - 展示码牌收款服务的主要内容
function QRCodeVideoHero() {
  return (
    <section className="relative bg-gray-50 py-12 lg:py-16">
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
                src: '/images/qr/wechat-official.png',
                alt: '微信公众号二维码',
                title: '关注公众号',
                description: '扫描二维码关注公众号'
              }}
              rightQRCode={{
                src: '/images/qr/customer-service.png',
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
            <img
              src="/images/product/云银.png"
              alt="聚合码牌收款产品图"
              width={500}
              height={500}
              className="w-[500px] h-[500px] object-contain"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

// Leftright 组件 - 左右分栏展示
function QRCodeLeftrightSection() {
  // 移动端功能特性展示组件
  function FeaturesMobile() {
    return (
      <div className="lg:hidden">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">
              智能收款
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              码牌让收款更简单
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              借助聚合码牌技术，轻松实现全渠道收款与智能管理，提升经营效率。
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
              {leftRightFeatures.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <div className="absolute top-1 left-1 h-5 w-5 text-blue-600 dark:text-blue-400">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 36 36"
                          aria-hidden="true"
                        >
                          <IconComponent />
                        </svg>
                      </div>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
          <div className="mt-16 sm:mt-20">
            <div className="relative overflow-hidden border border-gray-200/50 bg-white/80 p-6 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
              {/* 移动端模拟界面头部 */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  码牌管理后台
                </div>
              </div>

              {/* 移动端模拟界面标题栏 */}
              <div className="mb-4 border border-gray-200/50 bg-gray-50/80 p-4 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  收款管理中心
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  实时监控码牌收款服务
                </p>
              </div>

              {/* 移动端模拟功能模块 */}
              <div className="mb-4 space-y-4">
                {leftRightFeatures.slice(0, 2).map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={feature.name}
                      className="border border-gray-200/30 bg-gray-50/60 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50">
                          <svg
                            className="h-5 w-5 text-blue-600 dark:text-blue-400"
                            fill="none"
                            viewBox="0 0 36 36"
                            aria-hidden="true"
                          >
                            <IconComponent />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {feature.name}
                          </h4>
                          <div className="mt-2">
                            <div className="h-1.5 w-full bg-gray-200/60 dark:bg-gray-700/60">
                              <div
                                className="h-1.5 bg-blue-500 transition-all duration-1000 dark:bg-blue-400"
                                style={{ width: `${60 + index * 15}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* 移动端模拟状态栏 */}
              <div className="flex items-center justify-between border border-gray-200/30 bg-gray-50/60 p-3 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span>码牌正常</span>
                </div>
                <span>刚刚更新</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 桌面端功能特性展示组件
  function FeaturesDesktop() {
    return (
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">
                智能收款
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                码牌让收款更简单
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                借助聚合码牌技术，轻松实现全渠道收款与智能管理，提升经营效率。
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                {leftRightFeatures.map((feature) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        <div className="absolute top-1 left-1 h-5 w-5 text-blue-600 dark:text-blue-400">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 36 36"
                            aria-hidden="true"
                          >
                            <IconComponent />
                          </svg>
                        </div>
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative overflow-hidden border border-gray-200/50 bg-white/80 p-6 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
               {/* 模拟界面头部 */}
               <div className="mb-6 flex items-center justify-between">
                 <div className="flex items-center space-x-3">
                   <div className="h-3 w-3 rounded-full bg-red-400"></div>
                   <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                   <div className="h-3 w-3 rounded-full bg-green-400"></div>
                 </div>
                 <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                   码牌管理后台
                 </div>
               </div>

               {/* 模拟界面标题栏 */}
               <div className="mb-4 border border-gray-200/50 bg-gray-50/80 p-4 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
                 <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                   码牌让收款更简单
                 </h3>
                 <p className="text-sm text-gray-600 dark:text-gray-400">
                   实时监控和管理您的码牌收款服务
                 </p>
               </div>

               {/* 模拟功能模块 */}
               <div className="mb-4 grid grid-cols-1 gap-4">
                 {leftRightFeatures.slice(0, 3).map((feature, index) => {
                   const IconComponent = feature.icon
                   return (
                     <div
                       key={feature.name}
                       className="group border border-gray-200/30 bg-gray-50/60 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                     >
                       <div className="flex items-start space-x-3">
                         <div className="flex-shrink-0">
                           <div className="flex h-8 w-8 items-center justify-center border border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50">
                             <svg
                               className="h-5 w-5 text-blue-600 dark:text-blue-400"
                               fill="none"
                               viewBox="0 0 36 36"
                               aria-hidden="true"
                             >
                               <IconComponent />
                             </svg>
                           </div>
                         </div>
                         <div className="min-w-0 flex-1">
                           <h4 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                             {feature.name}
                           </h4>
                           <p className="mt-1 truncate text-xs text-gray-600 dark:text-gray-400">
                             {feature.summary}
                           </p>
                           <div className="mt-2">
                             <div className="h-1.5 w-full bg-gray-200/60 dark:bg-gray-700/60">
                               <div
                                 className="h-1.5 bg-blue-500 transition-all duration-1000 group-hover:w-full dark:bg-blue-400"
                                 style={{ width: `${60 + index * 10}%` }}
                               ></div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   )
                 })}
               </div>

               {/* 模拟状态栏 */}
               <div className="flex items-center justify-between border border-gray-200/30 bg-gray-50/60 p-3 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                 <div className="flex items-center space-x-4">
                   <span className="flex items-center space-x-1">
                     <div className="h-2 w-2 rounded-full bg-green-400"></div>
                     <span>码牌正常</span>
                   </span>
                   <span>今日: 128笔</span>
                   <span>成功率: 99.8%</span>
                 </div>
                 <div className="text-right">
                   <span>刚刚更新</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
      <Container>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </div>
  )
}

// Rightleft 组件 - 右左分栏展示
function QRCodeRightleftSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
      <Container>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">
                快速部署
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                开箱即用的收款解决方案
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                从申请到使用，全程无忧服务，让您专注经营。
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                {rightLeftFeatures.map((feature) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        <div className="absolute top-1 left-1 h-5 w-5 text-blue-600 dark:text-blue-400">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 36 36"
                            aria-hidden="true"
                          >
                            <IconComponent />
                          </svg>
                        </div>
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <div className="relative w-full max-w-2xl overflow-hidden border border-gray-200/50 bg-white/80 p-8 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
              {/* 模拟界面头部 */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  码牌申请系统
                </div>
              </div>

              {/* 模拟界面标题栏 */}
              <div className="mb-4 border border-gray-200/50 bg-gray-50/80 p-4 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  快速申请码牌
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  10秒完成申请，当天制作发货
                </p>
              </div>

              {/* 模拟申请步骤 */}
              <div className="mb-4 space-y-4">
                {rightLeftFeatures.map((feature, index) => {
                  const IconComponent = feature.icon
                  const isCompleted = index < 2
                  const isCurrent = index === 2
                  return (
                    <div
                      key={feature.name}
                      className={clsx(
                        'border p-4 backdrop-blur-sm transition-all duration-300',
                        isCompleted && 'border-green-200/50 bg-green-50/60 dark:border-green-800/50 dark:bg-green-900/30',
                        isCurrent && 'border-blue-200/50 bg-blue-50/60 dark:border-blue-800/50 dark:bg-blue-900/30',
                        !isCompleted && !isCurrent && 'border-gray-200/30 bg-gray-50/60 dark:border-gray-700/30 dark:bg-gray-800/30'
                      )}
                      style={{borderRadius: 'var(--border-radius-medium, 4px)'}}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={clsx(
                          'flex h-8 w-8 flex-shrink-0 items-center justify-center border',
                          isCompleted && 'border-green-200/50 bg-green-100/80 dark:border-green-800/50 dark:bg-green-900/50',
                          isCurrent && 'border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50',
                          !isCompleted && !isCurrent && 'border-gray-200/50 bg-gray-100/80 dark:border-gray-700/50 dark:bg-gray-800/50'
                        )}>
                          {isCompleted ? (
                            <svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg
                              className={clsx(
                                'h-5 w-5',
                                isCurrent && 'text-blue-600 dark:text-blue-400',
                                !isCurrent && 'text-gray-600 dark:text-gray-400'
                              )}
                              fill="none"
                              viewBox="0 0 36 36"
                              aria-hidden="true"
                            >
                              <IconComponent />
                            </svg>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className={clsx(
                            'text-sm font-medium',
                            isCompleted && 'text-green-900 dark:text-green-100',
                            isCurrent && 'text-blue-900 dark:text-blue-100',
                            !isCompleted && !isCurrent && 'text-gray-900 dark:text-white'
                          )}>
                            {feature.name}
                          </h4>
                          <p className={clsx(
                            'mt-1 text-xs',
                            isCompleted && 'text-green-600 dark:text-green-400',
                            isCurrent && 'text-blue-600 dark:text-blue-400',
                            !isCompleted && !isCurrent && 'text-gray-600 dark:text-gray-400'
                          )}>
                            {isCompleted ? '已完成' : isCurrent ? '进行中...' : '等待中'}
                          </p>
                          {isCurrent && (
                            <div className="mt-2">
                              <div className="h-1.5 w-full bg-gray-200/60 dark:bg-gray-700/60">
                                <div className="h-1.5 w-3/4 bg-blue-500 transition-all duration-1000 dark:bg-blue-400"></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* 模拟操作按钮 */}
              <div className="flex items-center justify-between border border-gray-200/30 bg-gray-50/60 p-4 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    <span className="text-xs text-gray-600 dark:text-gray-400">系统正常</span>
                  </span>
                  <span className="text-xs text-gray-600 dark:text-gray-400">预计2分钟完成</span>
                </div>
                <button className="bg-blue-600 px-4 py-2 text-xs text-white transition-colors hover:bg-blue-700" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                  继续申请
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default function QRCodePage() {
  return (
    <>
      <Header />
      <main>
        <QRCodeVideoHero />
        <QRCodeLeftrightSection />

        {/* === 解决方案与产品展示 === */}

        <ProductTraits />
        <Superiority />
        <Solution />
        <Advantage />

        {/* === 客户与信任建立 === */}
        <Customer />

        {/* === 支持与帮助 === */}
        <Faqs />

        {/* === 页面底部 === */}
        <CatSections />
      </main>
      <Footer />
    </>
  )
}
