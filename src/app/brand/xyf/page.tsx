import { JSX } from 'react'
import { type Metadata } from 'next'
import Image from 'next/image'
import { PaymentFAQSection } from '@/components/ai/FAQSection'
import Aisd from '@/components/ai/Aisd'
import { PaymentScenes } from '@/components/ai/AIscene'
import {
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  UserGroupIcon,
  SpeakerWaveIcon,
  FaceSmileIcon,
  SparklesIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  TvIcon,
  UsersIcon,
  MicrophoneIcon,
  PencilIcon,
  VideoCameraIcon,
  PlayIcon,
  ChevronRightIcon,
  QrCodeIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Brand from '@/components/common/Brand'
import Followus from '@/components/common/Followus'

// ==================== 页面SEO元数据配置 ====================
export const metadata: Metadata = {
  title: '星驿付POS机官网办理中心｜星驿付电签/智能/移动POS免费申请＋0.38%费率秒到',
  description:
    '星驿付（国通星驿）央行支付牌照一清机，官网免费申请电签/智能/移动POS机及聚合收款码，费率0.38%永不+3，支持微信、支付宝、信用卡、数字人民币全渠道，激活返现299元，T+0秒到账，个人/商户1证办理，顺丰包邮当天发货，提供星驿付APP下载、代理加盟、售后客服等一站式服务。',
  keywords: [
    '星驿付POS机,星驿付官网,星驿付POS机办理,星驿付电签POS,星驿付智能POS,星驿付移动POS,星驿付收款码,星驿付代理加盟,星驿付费率,星驿付下载,星驿付客服,星驿付刷卡不到账,星驿付总部直签,一清POS机,0.38%费率,激活返现',
  ],
}

// ==================== 数据类型定义 ====================

// 产品优势数据接口
interface Advantage {
  title: string
  description: string
  stats: string
  unit: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// 应用场景数据接口
interface Scenario {
  id: string
  name: string
  description: string
  features: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  video: string
}

// 功能特色卡片接口
interface FeatureCard {
  id: number
  name: string
  description: string
  features: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// 演示账号接口
interface DemoAccount {
  title: string
  url: string
  username: string
  password: string
  description: string
}

// ==================== 静态数据配置 ====================
// 产品优势数据
const advantages: Advantage[] = [
  {
    title: '央行支付牌照',
    description: '星驿付拥有央行颁发的支付业务许可证，资金安全有保障，一清结算更放心',
    stats: '正规',
    unit: '持牌机构',
    icon: FaceSmileIcon,
  },
  {
    title: '费率优势',
    description: '星驿付POS机费率0.38%起，永不+3，支持多种支付方式，成本低更实惠',
    stats: '0.38%',
    unit: '超低费率',
    icon: SpeakerWaveIcon,
  },
  {
    title: '到账速度',
    description: '星驿付T+0秒到账，365天快速到账，资金周转更高效，经营更顺畅',
    stats: '秒到',
    unit: 'T+0到账',
    icon: SparklesIcon,
  },
  {
    title: '办理便捷',
    description: '星驿付POS机免费申请，个人/商户1证办理，顺丰包邮当天发货，快速开通',
    stats: '当天',
    unit: '快速发货',
    icon: RocketLaunchIcon,
  },
]

// 应用场景数据
const scenarios: Scenario[] = [
  {
    id: 'retail-store',
    name: '零售商店',
    description: '星驿付POS机适用于各类零售门店，支持扫码支付、刷卡支付等多种方式',
    features: ['扫码支付', '刷卡支付', '会员管理'],
    icon: TvIcon,
    video: '/videos/retail-store.mp4',
  },
  {
    id: 'restaurant',
    name: '餐饮美食',
    description: '星驿付智能POS支持堂食点餐、外卖接单，提升餐厅经营效率',
    features: ['堂食点餐', '外卖接单', '桌台管理'],
    icon: UserGroupIcon,
    video: '/videos/restaurant.mp4',
  },
  {
    id: 'supermarket',
    name: '超市便利店',
    description: '星驿付移动POS适用于超市便利店，快速收银，提升顾客购物体验',
    features: ['快速收银', '库存管理', '促销活动'],
    icon: AcademicCapIcon,
    video: '/videos/supermarket.mp4',
  },
  {
    id: 'mobile-payment',
    name: '移动收款',
    description: '星驿付移动POS支持外出收款，适合地摊、外卖、送货上门等场景',
    features: ['便携移动', '4G网络', '长续航'],
    icon: MegaphoneIcon,
    video: '/videos/mobile-payment.mp4',
  },
]

// 功能特色数据
const featureCards: FeatureCard[] = [
  {
    id: 1,
    name: '星驿付电签POS',
    description:
      '星驿付电签版POS机，体积小巧便于携带，支持电子签名，无需打印小票，操作简便更环保。适用于移动收款、外卖配送等多种场景。',
    features: [
      '电子签名，无需打印小票',
      '体积小巧，便于携带',
      '支持多种支付方式',
      '续航能力强，适合移动收款'
    ],
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: 2,
    name: '星驿付智能POS',
    description:
      '星驿付智能POS机，功能强大的智能终端，支持收银管理、会员管理、库存管理等，一机多用，是商户经营的得力助手。',
    features: [
      '智能收银系统',
      '会员管理功能',
      '库存管理系统',
      '数据分析报表'
    ],
    icon: AcademicCapIcon,
  },
  {
    id: 3,
    name: '星驿付移动POS',
    description:
      '星驿付移动POS机，4G网络连接，随时随地收款，支持蓝牙连接，适配各种智能终端，让收款更加便捷自由。',
    features: [
      '4G网络连接，信号稳定',
      '蓝牙连接，适配性强',
      '长续航，满足全天使用',
      '支持远程收款'
    ],
    icon: FaceSmileIcon,
  },
  {
    id: 4,
    name: '星驿付收款码',
    description:
      '星驿付聚合收款码，一码多付，支持微信、支付宝、云闪付等多种支付方式，费率低到账快，是小微商户的理想选择。',
    features: [
      '一码多付，方便快捷',
      '费率低至0.38%',
      'D+1到账，资金安全',
      '支持语音播报'
    ],
    icon: CpuChipIcon,
  },
]

// 功能特色展示组件
function FeaturesSection(): JSX.Element {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            功能特色
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            提供智能助手、内容创作、虚拟直播、AI对话等多维度的功能，满足不同行业的业务需求。
          </p>
        </div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 xl:gap-x-8"
        >
          {featureCards.map((feature) => {
            const IconComponent = feature.icon
            return (
              <li
                key={feature.id}
                className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-transparent p-6">
                  <div className="flex h-12 w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-md">
                    <IconComponent
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-sm leading-6 font-medium text-gray-900">
                    {feature.name}
                  </div>
                </div>

                <div className="px-6 py-4 bg-transparent">
                  <p className="mb-4 text-sm leading-6 text-gray-700">
                    {feature.description}
                  </p>
                  <div className="mb-6 space-y-2">
                    {feature.features.map((featureItem, index) => (
                      <div key={index} className="flex items-start gap-x-2">
                        <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                        <span className="text-sm leading-5 text-gray-600">
                          {featureItem}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                      立即体验
                    </button>
                    <button className="flex-1 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                      查看详情
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
// 产品优势展示组件
function AdvantagesSection(): JSX.Element {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">产品优势</h2>
          <div className="mx-auto mb-4 h-1 w-16 bg-blue-600"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            星驿付POS机，央行支付牌照，安全稳定，费率低至0.38%
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4 xl:gap-x-8">
          {/* 产品卡片1 - 星驿付POS机 */}
          <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-transparent p-6">
              <div className="flex h-12 w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-md">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">星驿付POS机</h3>
                <div className="font-medium text-blue-600">央行牌照</div>
              </div>
            </div>

            <div className="px-6 py-4 bg-transparent">
              <p className="mb-4 text-sm leading-6 text-gray-700">
                星驿付拥有央行颁发的支付业务许可证，资金安全有保障，一清结算更放心
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    央行支付牌照，正规一清机构
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    银联官方认证，资金安全有保障
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    T+1结算模式，账目清晰可查
                  </span>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                  立即体验
                </button>
                <button className="flex-1 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                  查看详情
                </button>
              </div>
            </div>
          </div>

          {/* 产品卡片2 - 星驿付官网 */}
          <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-transparent p-6">
              <div className="flex h-12 w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-md">
                <AcademicCapIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">星驿付官网</h3>
                <div className="font-medium text-blue-600">费率优势</div>
              </div>
            </div>

            <div className="px-6 py-4 bg-transparent">
              <p className="mb-4 text-sm leading-6 text-gray-700">
                星驿付POS机费率0.38%起，永不+3，支持多种支付方式，成本低更实惠
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    费率低至0.38%，行业领先水平
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    永不+3，费率稳定透明
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    支持多种支付方式，满足不同客户需求
                  </span>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                  立即体验
                </button>
                <button className="flex-1 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                  查看详情
                </button>
              </div>
            </div>
          </div>

          {/* 产品卡片3 - 星驿付电签POS */}
          <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-transparent p-6">
              <div className="flex h-12 w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-md">
                <FaceSmileIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">星驿付电签POS</h3>
                <div className="font-medium text-blue-600">产品齐全</div>
              </div>
            </div>

            <div className="px-6 py-4 bg-transparent">
              <p className="mb-4 text-sm leading-6 text-gray-700">
                星驿付电签版POS机，体积小巧便于携带，支持电子签名，操作简便更环保
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    电签功能，无需打印小票
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    体积小巧，便于携带
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    支持多种支付方式，功能全面
                  </span>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                  立即体验
                </button>
                <button className="flex-1 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                  查看详情
                </button>
              </div>
            </div>
          </div>

          {/* 产品卡片4 - 星驿付智能POS */}
          <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none">
            <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-transparent p-6">
              <div className="flex h-12 w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-md">
                <CpuChipIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">星驿付智能POS</h3>
                <div className="font-medium text-blue-600">快速办理</div>
              </div>
            </div>

            <div className="px-6 py-4 bg-transparent">
              <p className="mb-4 text-sm leading-6 text-gray-700">
                星驿付智能POS机，功能强大的智能终端，支持收银管理、会员管理、库存管理等
              </p>
              <div className="mb-6 space-y-2">
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    快速办理，当天发货/审核发货
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    功能全面，一机多用
                  </span>
                </div>
                <div className="flex items-start gap-x-2">
                  <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                  <span className="text-sm leading-5 text-gray-600">
                    支持会员管理、库存管理等增值服务
                  </span>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex gap-3">
                <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                  立即体验
                </button>
                <button className="flex-1 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                  查看详情
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}



// 核心功能展示组件
function CoreFeaturesSection(): JSX.Element {
  const coreFeatures = [
    {
      name: '星驿付POS机',
      description:
        '星驿付（国通星驿）央行支付牌照一清机，安全稳定，费率低至0.38%，支持微信、支付宝、信用卡、数字人民币等全支付渠道，资金T+0秒到账。',
      icon: QrCodeIcon,
      image: '/images/screenshots/Productdisplay.jpg',
      stats: [
        { label: '央行牌照', value: '正规持牌机构，资金安全有保障' },
        { label: '超低费率', value: '费率0.38%且永久无+3费用' },
        { label: '秒级到账', value: 'T+0秒到账，资金周转更高效' },
      ],
    },
    {
      name: '星驿付电签',
      description:
        '星驿付电签POS机免费申请，支持电子签名功能，无需打印小票，操作简便更环保。适用于移动收款、外卖配送等多种场景。',
      icon: PencilIcon,
      image: '/images/screenshots/Productdisplay2.jpg',
      stats: [
        { label: '免费申请', value: '官网可免费申请电签POS机' },
        { label: '电子签名', value: '无需纸质单据，环保高效' },
        { label: '便携设计', value: '体积小巧，便于携带' },
      ],
    },
    {
      name: '星驿付收款码',
      description:
        '星驿付聚合收款码，一码多付，支持微信、支付宝、云闪付等多种支付方式，费率低至0.38%，是小微商户的理想选择。',
      icon: QrCodeIcon,
      image: '/images/screenshots/Productdisplay3.jpg',
      stats: [
        { label: '一码多付', value: '支持微信、支付宝、云闪付等全渠道' },
        { label: '超低费率', value: '费率0.38%且永久无+3费用' },
        { label: '语音播报', value: '收款实时语音播报提醒' },
      ],
    },
    {
      name: '星驿付智能设备',
      description:
        '星驿付提供智能POS机、移动POS机等多种设备选择，满足不同商户的收款需求，操作简便，安全可靠。',
      icon: CpuChipIcon,
      image: '/images/screenshots/Productdisplay4.jpg',
      stats: [
        { label: '产品齐全', value: '智能POS机、移动POS机等多种选择' },
        { label: '快速办理', value: '激活后返现299元，快速开通使用' },
        { label: '全面支持', value: '支持微信、支付宝、信用卡、数字人民币等全支付渠道' },
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* 标题区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            核心功能
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            星驿付POS机，央行支付牌照，安全稳定，费率低至0.38%
          </p>
        </div>

        {/* 功能展示 */}
        <div className="mx-auto mt-16 max-w-[1800px]">
          <div className="space-y-20">
            {coreFeatures.map((feature, index) => (
              <div
                key={feature.name}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* 内容区域 */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6 flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {feature.name}
                    </h3>
                  </div>

                  <p className="mb-8 text-lg leading-8 text-gray-600">
                    {feature.description}
                  </p>

                  {/* 特性列表 */}
                  <div className="mb-8 space-y-4">
                    {feature.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-start space-x-3"
                      >
                        <div className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></div>
                        <div>
                          <dt className="font-semibold text-gray-900">
                            {stat.label}
                          </dt>
                          <dd className="text-gray-600">{stat.value}</dd>
                        </div>
                      </div>
                    ))}
                  </div>

                                   {/* 操作按钮 */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <Button
                      href="#"
                      variant="solid"
                      color="blue"
                      className="flex items-center justify-center gap-2 px-4 py-3"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      申请设备
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="flex items-center justify-center gap-2 px-4 py-3"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                      代理加盟
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="flex items-center justify-center gap-2 px-4 py-3"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      联系客服
                    </Button>
                  </div>
                </div>
                 {/* 操作按钮 */}

                {/* 媒体区域 */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={feature.image}
                        alt={`${feature.name}功能演示`}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部CTA区域 */}
        <div className="mt-12 text-center sm:mt-16">
          <a
            href="#features"
            className="inline-flex items-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
          >
            探索更多功能
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}

// 知识库英雄区块开始
export default function KnowledgeBasePage(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        {/* 英雄区块开始 */}
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white pt-24 pb-16">
          {/* 现代化背景装饰 */}
          <div className="absolute inset-0">
            {/* 几何装饰元素 */}
            <div className="absolute top-10 left-10 h-24 w-24 rounded-full bg-blue-100/40 blur-2xl"></div>
            <div className="absolute right-20 bottom-10 h-32 w-32 rounded-full bg-indigo-100/30 blur-3xl"></div>
            {/* 网格背景 */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
          </div>

          <Container className="relative z-10">
            <div className="flex flex-col items-center justify-between gap-12 lg:flex-row">
              {/* 左侧内容 - 优化布局和层次 */}
              <div className="w-full text-center lg:w-1/2 lg:text-left">
                {/* 主标题 - 增强视觉层次 */}
                <h1 className="mb-6 text-4xl leading-[1.1] font-black tracking-tight text-gray-900 lg:text-6xl">
                  <span className="relative inline-block">
                    <span className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-blue-600 to-blue-500"></span>
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                    星驿付
                  </span>
                  <br />
                  <span className="text-3xl font-bold text-gray-800 lg:text-4xl">
                    智能收款解决方案
                  </span>
                </h1>

                {/* 副标题 - 优化描述内容 */}
                <p className="mx-auto mb-6 max-w-xl text-lg leading-relaxed font-medium text-gray-600 lg:mx-0">
                  星驿付POS机，央行支付牌照，安全稳定，
                  <span className="font-semibold text-blue-600">
                    费率低至0.38%，T+0秒到账
                  </span>
                </p>

                {/* 核心特性标签 */}
                <div className="mb-8 flex flex-wrap justify-center gap-2 lg:justify-start">
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                    央行牌照
                  </span>
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                    费率优惠
                  </span>
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                    秒级到账
                  </span>
                  <span className="rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-700">
                    全国包邮
                  </span>
                </div>

                {/* 数据指标 - 重新设计布局 */}
                <div className="mb-8 grid grid-cols-3 gap-4">
                  <div className="group rounded-xl border border-gray-100/50 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="mb-1 flex items-baseline">
                        <span className="text-2xl font-black text-gray-900 lg:text-3xl">
                          0.38
                        </span>
                        <span className="ml-1 text-sm font-semibold text-blue-600">
                          %
                        </span>
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        费率起
                      </span>
                      <div className="mt-2 h-0.5 w-full overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-500 group-hover:w-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="group rounded-xl border border-gray-100/50 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="mb-1 flex items-baseline">
                        <span className="text-2xl font-black text-gray-900 lg:text-3xl">
                          T+0
                        </span>
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        秒到账
                      </span>
                      <div className="mt-2 h-0.5 w-full overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-full rounded-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                  <div className="group rounded-xl border border-gray-100/50 bg-white/70 p-4 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="mb-1 flex items-baseline">
                        <span className="text-2xl font-black text-gray-900 lg:text-3xl">
                          1000
                        </span>
                        <span className="ml-1 text-sm font-semibold text-blue-600">
                          万+
                        </span>
                      </div>
                      <span className="text-xs font-medium text-gray-600">
                        用户信赖
                      </span>
                      <div className="mt-2 h-0.5 w-full overflow-hidden rounded-full bg-gray-100">
                        <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-500 group-hover:w-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 按钮组 - 现代化设计 - 紧凑样式 */}
                <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
                  <Button
                    href="#apply"
                    className="h-auto rounded-xl bg-blue-600 px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700"
                  >
                    <PencilIcon className="mr-2 h-4 w-4" />
                    立即办理
                  </Button>
                  <Button
                    href="/pos/zhineng"
                    variant="outline"
                    className="h-auto rounded-xl border-2 border-gray-300 px-8 py-3 text-base font-semibold text-gray-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-gray-400 hover:bg-gray-50"
                  >
                    <PlayIcon className="mr-2 h-4 w-4" />
                    查看产品
                  </Button>
                </div>
              </div>

              {/* 右侧图形 - 现代化展示 - 紧凑布局 */}
              <div className="relative w-full lg:w-1/2">
                <div className="relative">
                  {/* 主图 - 现代化设计 */}
                  <div className="relative mx-auto max-w-md">
                    {/* 模拟POS机操作界面 */}
                    <div className="w-full rounded-2xl border border-gray-100/50 bg-white/90 p-6 backdrop-blur-sm">
                      {/* 模拟标题栏 - 现代化设计 */}
                      <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="h-3 w-3 rounded-full bg-red-400"></div>
                          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                          <div className="h-3 w-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-blue-200">
                            <svg className="h-3 w-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z"/>
                              <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd"/>
                            </svg>
                          </div>
                          <div className="h-2 w-20 rounded-full bg-gradient-to-r from-blue-100 to-blue-200"></div>
                        </div>
                      </div>

                      {/* 模拟POS交易界面 */}
                      <div className="space-y-4">
                        {/* 交易金额 */}
                        <div className="h-8 w-4/5 rounded-lg bg-gradient-to-r from-green-200 to-green-100"></div>

                        {/* 交易详情 */}
                        <div className="space-y-2">
                          <div className="h-2 rounded bg-gradient-to-r from-gray-100 to-gray-50"></div>
                          <div className="h-2 w-5/6 rounded bg-gradient-to-r from-gray-100 to-gray-50"></div>
                          <div className="h-2 w-4/6 rounded bg-gradient-to-r from-gray-100 to-gray-50"></div>
                        </div>

                        {/* 支付方式选择 */}
                        <div className="mt-4 grid grid-cols-2 gap-3">
                          <div className="flex h-20 items-center justify-center rounded-lg border border-blue-200/50 bg-gradient-to-br from-blue-50 to-blue-100">
                            <div className="h-6 w-6 rounded bg-blue-200"></div>
                          </div>
                          <div className="flex h-20 items-center justify-center rounded-lg border border-green-200/50 bg-gradient-to-br from-green-50 to-green-100">
                            <div className="h-6 w-6 rounded bg-green-200"></div>
                          </div>
                        </div>

                        {/* 操作按钮区域 */}
                        <div className="space-y-1.5 border-t border-gray-100 pt-3">
                          <div className="h-1.5 w-3/4 rounded bg-gradient-to-r from-gray-100 to-gray-50"></div>
                          <div className="h-1.5 w-2/3 rounded bg-gradient-to-r from-gray-100 to-gray-50"></div>
                        </div>
                      </div>
                    </div>

                    {/* 功能标签 - 现代化设计 - 紧凑样式 */}
                    <div className="absolute -top-6 -right-6 flex transform items-center rounded-xl border border-blue-100/50 bg-white/95 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">
                          多种支付
                        </p>
                        <p className="text-xs font-medium text-blue-600">
                          扫码刷卡
                        </p>
                      </div>
                    </div>

                    <div className="absolute -bottom-6 -left-6 flex transform items-center rounded-xl border border-green-100/50 bg-white/95 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-green-500 to-green-600">
                        <svg
                          className="h-4 w-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">
                          交易查询
                        </p>
                        <p className="text-xs font-medium text-green-600">
                          实时到账
                        </p>
                      </div>
                    </div>

                    {/* 安全支付标签 */}
                    <div className="absolute top-1/2 -right-4 flex translate-x-1/2 -translate-y-1/2 transform items-center rounded-xl border border-purple-100/50 bg-white/95 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1">
                      <div className="mr-2 flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-purple-600">
                        <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">
                          安全支付
                        </p>
                      </div>
                    </div>

                    {/* 装饰性几何元素 */}
                    <div className="absolute -top-3 -left-3 h-6 w-6 animate-pulse rounded-full bg-gradient-to-br from-blue-400 to-blue-500 opacity-20"></div>
                    <div className="absolute -right-3 -bottom-3 h-4 w-4 animate-pulse rounded-full bg-gradient-to-br from-purple-400 to-purple-500 opacity-20 delay-1000"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 底部特性标签 - 现代化设计 - 紧凑布局 */}
            <div className="mt-12 flex flex-wrap justify-center gap-2">
              <div className="group rounded-xl border border-gray-200/50 bg-white/80 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">央行牌照</span>
              </div>
              <div className="group rounded-xl border border-gray-200/50 bg-white/80 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">安全加密</span>
              </div>
              <div className="group rounded-xl border border-gray-200/50 bg-white/80 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">全国通用</span>
              </div>
              <div className="group rounded-xl border border-gray-200/50 bg-white/80 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">快速到账</span>
              </div>
              <div className="group rounded-xl border border-gray-200/50 bg-white/80 px-4 py-2 text-sm text-gray-700 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">24小时服务</span>
              </div>
            </div>
          </Container>
        </section>

        <Aisd />
        <AdvantagesSection />
        <CoreFeaturesSection />
        {/* 关注我们 */}
        <Followus />
        {/* 应用场景区域 */}
        <PaymentScenes />
        {/* 功能特色区块 */}
        <FeaturesSection />
        {/* 品牌底部组件 */}
        <Brand />
        {/*常见问题区域*/}
        <PaymentFAQSection />
      </main>
      <Footer />
    </>
  )
}
