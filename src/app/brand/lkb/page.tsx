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
                className="overflow-hidden rounded-xl outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                  <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-white ring-1 ring-gray-900/10">
                    <IconComponent
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-sm leading-6 font-medium text-gray-900">
                    {feature.name}
                  </div>
                </div>

                <div className="px-6 py-4">
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
                    <button className="flex-1 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                      立即体验
                    </button>
                    <button className="flex-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                      查看详情
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-12 text-center">
          <Button
            href="#"
            className="rounded-lg bg-blue-600 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
          >
            探索更多功能
          </Button>
        </div>
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

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 产品卡片1 - 星驿付POS机 */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">星驿付POS机</h3>
                <div className="font-medium text-blue-600">央行牌照</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              星驿付拥有央行颁发的支付业务许可证，资金安全有保障，一清结算更放心
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  央行支付牌照，正规一清机构
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  银联官方认证，资金安全有保障
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  T+1结算模式，账目清晰可查
                </span>
              </li>
            </ul>
          </div>

          {/* 产品卡片2 - 星驿付官网 */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <AcademicCapIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">星驿付官网</h3>
                <div className="font-medium text-blue-600">费率优势</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              星驿付POS机费率0.38%起，永不+3，支持多种支付方式，成本低更实惠
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  费率低至0.38%，行业领先水平
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  永不+3，费率稳定透明
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  支持多种支付方式，满足不同客户需求
                </span>
              </li>
            </ul>
          </div>

          {/* 产品卡片3 - 星驿付电签POS */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <FaceSmileIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">星驿付电签POS</h3>
                <div className="font-medium text-blue-600">产品齐全</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              星驿付电签版POS机，体积小巧便于携带，支持电子签名，操作简便更环保
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  电签功能，无需打印小票
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  体积小巧，便于携带
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  支持多种支付方式，功能全面
                </span>
              </li>
            </ul>
          </div>

          {/* 产品卡片4 - 星驿付智能POS */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <CpuChipIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">星驿付智能POS</h3>
                <div className="font-medium text-blue-600">快速办理</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              星驿付智能POS机，功能强大的智能终端，支持收银管理、会员管理、库存管理等
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  快速办理，当天发货/审核发货
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  功能全面，一机多用
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  支持会员管理、库存管理等增值服务
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

// ==================== 页面组件定义 ====================

// 演示区域组件
function DemoSection(): JSX.Element {
  // 演示账号数据
  const demoAccounts: DemoAccount[] = [
    {
      title: '星驿付POS机办理系统',
      url: 'https://www.xingyifu.pos.cn',
      username: '自行注册',
      password: '自行注册',
      description: '星驿付官网POS机在线办理平台',
    },
    {
      title: '星驿付代理加盟系统',
      url: 'https://agent.xingyifu.pos.cn',
      username: '代理申请',
      password: '资质审核',
      description: '星驿付代理加盟专用管理系统',
    },
    {
      title: '星驿付收款码演示',
      url: 'https://qrcode.xingyifu.pos.cn',
      username: '自行注册',
      password: '自行注册',
      description: '星驿付聚合收款码在线申请演示',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-gray-50 py-16 sm:py-20">
      {/* 背景装饰元素 */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-full opacity-20 sm:opacity-30">
        <div className="absolute top-10 left-10 h-32 w-32 bg-blue-100 blur-2xl sm:h-40 sm:w-40 sm:blur-3xl"></div>
        <div className="absolute right-10 bottom-10 h-48 w-48 bg-indigo-100 blur-2xl sm:h-60 sm:w-60 sm:blur-3xl"></div>
      </div>
      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row">
          {/* 左侧内容 */}
          <div className="order-2 w-full lg:order-1 lg:w-1/2">
            <div className="mb-4 inline-flex items-center bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700 sm:mb-6 sm:text-sm">
              <span className="mr-2 h-1.5 w-1.5 bg-blue-600"></span>
              申请办理
            </div>
            <h2 className="mb-4 text-2xl leading-tight font-bold text-gray-900 sm:mb-6 sm:text-3xl">
              星驿付
              <br className="hidden sm:block" />
              免费领取机器
            </h2>


            <div className="mb-6 border border-gray-200 bg-white p-4 sm:mb-8 sm:p-6">
              <div className="mb-3 flex items-center sm:mb-4">
                <div className="mr-2 flex h-8 w-8 items-center justify-center bg-blue-50 sm:mr-3 sm:h-10 sm:w-10">
                  <QrCodeIcon className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-base font-medium sm:text-lg">
                  扫码了解更多
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {/* 领取机器二维码 */}
                <div className="flex flex-col items-center bg-gray-50 p-4">
                  <div className="mb-3 h-24 w-24 bg-white p-2 sm:h-32 sm:w-32">
                    <Image
                      src="/images/contact/gzh.png"
                      alt="领取机器"
                      width={120}
                      height={120}
                      className="h-full w-full"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-900">领取机器</p>
                  <p className="text-xs text-gray-500 mt-1">扫码申请POS机</p>
                </div>

                {/* 联系客服二维码 */}
                <div className="flex flex-col items-center bg-gray-50 p-4">
                  <div className="mb-3 h-24 w-24 bg-white p-2 sm:h-32 sm:w-32">
                    <Image
                      src="/images/contact/gzh.png"
                      alt="联系客服"
                      width={120}
                      height={120}
                      className="h-full w-full"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-900">联系客服</p>
                  <p className="text-xs text-gray-500 mt-1">扫码咨询客服</p>
                </div>

                {/* 代理加盟二维码 */}
                <div className="flex flex-col items-center bg-gray-50 p-4">
                  <div className="mb-3 h-24 w-24 bg-white p-2 sm:h-32 sm:w-32">
                    <Image
                      src="/images/contact/gzh.png"
                      alt="代理加盟"
                      width={120}
                      height={120}
                      className="h-full w-full"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-900">代理加盟</p>
                  <p className="text-xs text-gray-500 mt-1">扫码加盟代理</p>
                </div>

                {/* 关注公众号二维码 */}
                <div className="flex flex-col items-center bg-gray-50 p-4">
                  <div className="mb-3 h-24 w-24 bg-white p-2 sm:h-32 sm:w-32">
                    <Image
                      src="/images/contact/gzh.png"
                      alt="关注公众号"
                      width={120}
                      height={120}
                      className="h-full w-full"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-900">关注公众号</p>
                  <p className="text-xs text-gray-500 mt-1">扫码获取最新资讯</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                className="h-auto min-h-[44px] bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 sm:min-h-[48px] sm:px-8 sm:text-base"
                href="#"
              >
                申请设备
              </Button>
              <Button
                variant="outline"
                className="h-auto min-h-[44px] border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:min-h-[48px] sm:px-8 sm:text-base"
                href="#"
              >
                联系客服
              </Button>
            </div>
          </div>
          {/* 右侧内容 */}
          <div className="order-1 flex w-full justify-center lg:order-2 lg:w-1/2">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* 主要演示视频 */}
              <div className="border border-gray-200 bg-white p-4 sm:p-6">
                <Image
                  src="/images/product/zhongfu.png"
                  alt="工作演示"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
                <div className="mt-3 flex items-center justify-between sm:mt-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-900 sm:text-sm">
                      中付智能POS
                    </h4>
                    <p className="text-xs text-gray-500">
                      一站式管理您的所有POS机设备
                    </p>
                  </div>
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="h-1.5 w-1.5 bg-red-500 sm:h-2 sm:w-2"></div>
                    <div className="h-1.5 w-1.5 bg-yellow-500 sm:h-2 sm:w-2"></div>
                    <div className="h-1.5 w-1.5 bg-green-500 sm:h-2 sm:w-2"></div>
                  </div>
                </div>
              </div>

              {/* 装饰元素 */}
              <div className="absolute -top-3 -left-3 transform border border-blue-800 bg-gradient-to-br from-blue-600 to-blue-700 p-3 transition-transform duration-300 hover:scale-105 sm:-top-6 sm:-left-6 sm:p-4">
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center bg-white/20 backdrop-blur-sm sm:h-10 sm:w-10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white sm:h-5 sm:w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm font-medium tracking-wide text-white sm:text-base">
                      支付牌照
                    </p>
                    <p className="text-xs text-blue-100/90 sm:text-sm">
                      安全放心
                    </p>
                  </div>
                </div>
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
        <DemoSection />
        <CoreFeaturesSection />
        {/* 应用场景区域 */}
        <PaymentScenes />
        {/* 功能特色区块 */}
        <FeaturesSection />

        {/* 接入流程 Section */}
        <section className="bg-gray-50 py-24">
          <Container>
            {/* 标题区域 */}
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-2xl font-bold">接入流程</h2>
              <p className="mb-3 text-sm text-gray-600">
                为你提供快速、便捷的接入服务
              </p>
              <Button
                href="https://v.cnai.art"
                target="_blank"
                className="mt-4 rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700"
              >
                立即接入
              </Button>
            </div>

            {/* 流程步骤 */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* 步骤1：需求沟通 */}
              <div className="text-center">
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-sm text-blue-600">01</span>
                  </div>
                </div>
                <h3 className="mb-2 text-base font-bold">需求沟通</h3>
                <div className="mx-auto my-3 w-16 border-t border-gray-200"></div>
                <p className="text-xs text-gray-600">
                  提供产品信息，沟通数字人类型、使用场景和交付形式
                </p>
              </div>

              {/* 步骤2：确认合作 */}
              <div className="text-center">
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-sm text-blue-600">02</span>
                  </div>
                </div>
                <h3 className="mb-2 text-base font-bold">确认合作</h3>
                <div className="mx-auto my-3 w-16 border-t border-gray-200"></div>
                <p className="text-xs text-gray-600">
                  通过控制台直接下单，或线下沟通商务合作
                </p>
              </div>

              {/* 步骤3：资产制作 */}
              <div className="text-center">
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-sm text-blue-600">03</span>
                  </div>
                </div>
                <h3 className="mb-2 text-base font-bold">资产制作</h3>
                <div className="mx-auto my-3 w-16 border-t border-gray-200"></div>
                <p className="text-xs text-gray-600">
                  采集数据，制作数字人形象和声音资产
                </p>
              </div>

              {/* 步骤4：正式上线 */}
              <div className="text-center">
                <div className="mb-4 flex items-center justify-center">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <span className="text-sm text-blue-600">04</span>
                  </div>
                </div>
                <h3 className="mb-2 text-base font-bold">正式上线</h3>
                <div className="mx-auto my-3 w-16 border-t border-gray-200"></div>
                <p className="text-xs text-gray-600">
                  数字人上线，调用接口驱动或通过平台直接使用
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* 准备好开启您的AI数字人之旅了吗？ */}
        <section className="py-12 sm:py-16 lg:py-24">
          <Container>
            <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white sm:rounded-xl">
              {/* 装饰元素 - 仅在大屏显示 */}
              <div className="absolute top-0 right-0 hidden h-full w-1/2 lg:block">
                <svg
                  className="h-full w-full"
                  viewBox="0 0 400 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="100"
                    cy="100"
                    r="80"
                    fill="black"
                    fillOpacity="0.02"
                  />
                  <circle
                    cx="300"
                    cy="300"
                    r="150"
                    fill="black"
                    fillOpacity="0.02"
                  />
                  <circle
                    cx="250"
                    cy="150"
                    r="50"
                    fill="black"
                    fillOpacity="0.02"
                  />
                  <circle
                    cx="150"
                    cy="250"
                    r="30"
                    fill="black"
                    fillOpacity="0.02"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">
                {/* 左侧内容 */}
                <div className="relative z-10 p-6 sm:p-8 lg:col-span-3 lg:p-12">
                  <div className="max-w-xl">
                    <h3 className="mb-4 text-xl leading-tight font-bold text-gray-900 sm:text-2xl lg:text-3xl">
                      星驿付<span className="text-blue-600">智能收款</span>
                      解决方案
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                      星驿付POS机，央行支付牌照，安全稳定。支持电签POS、智能POS、移动POS、收款码等多种产品，
                      费率低至0.38%，T+0秒到账。适用于零售、餐饮、超市、移动收款等多种商用场景。
                    </p>

                    <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                      <div className="flex items-start">
                        <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 sm:text-base">
                            安全稳定
                          </h4>
                          <p className="text-xs text-gray-500 sm:text-sm">
                            央行支付牌照保障
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 sm:text-base">
                            快速到账
                          </h4>
                          <p className="text-xs text-gray-500 sm:text-sm">
                            T+0秒级到账体验
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 sm:text-base">
                            费率优惠
                          </h4>
                          <p className="text-xs text-gray-500 sm:text-sm">
                            0.38%起超低价
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-gray-900 sm:text-base">
                            产品多样
                          </h4>
                          <p className="text-xs text-gray-500 sm:text-sm">
                            POS/收款码全覆盖
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                      <Button
                        href="/demo"
                        className="w-full rounded-none bg-blue-600 px-6 py-3 font-bold text-white shadow-lg hover:bg-blue-700 sm:w-auto sm:py-4"
                      >
                        立即办理
                      </Button>
                      <Button
                        href="/demo"
                        target="_blank"
                        variant="outline"
                        className="w-full rounded-none border-blue-600 px-6 py-3 text-blue-600 hover:bg-blue-50 sm:w-auto sm:py-4"
                      >
                        咨询费率
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 右侧功能卡片 - 在移动端显示在下方 */}
                <div className="relative lg:col-span-2">
                  {/* 移动端显示 */}
                  <div className="p-6 lg:hidden">
                    <div className="grid grid-cols-2 gap-3">
                      {/* 央行牌照 */}
                      <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4 shadow-sm">
                        <div className="mb-2 flex h-8 w-8 items-center justify-center bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-center text-sm font-medium text-gray-900">
                          央行牌照
                        </h4>
                        <p className="mt-1 text-center text-xs text-gray-500">
                          正规安全
                        </p>
                      </div>

                      {/* 费率优势 */}
                      <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4 shadow-sm">
                        <div className="mb-2 flex h-8 w-8 items-center justify-center bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-center text-sm font-medium text-gray-900">
                          费率优势
                        </h4>
                        <p className="mt-1 text-center text-xs text-gray-500">
                          0.38%起
                        </p>
                      </div>

                      {/* 产品齐全 */}
                      <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4 shadow-sm">
                        <div className="mb-2 flex h-8 w-8 items-center justify-center bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                            />
                          </svg>
                        </div>
                        <h4 className="text-center text-sm font-medium text-gray-900">
                          产品齐全
                        </h4>
                        <p className="mt-1 text-center text-xs text-gray-500">
                          POS+收款码
                        </p>
                      </div>

                      {/* 快速办理 */}
                      <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 p-4 shadow-sm">
                        <div className="mb-2 flex h-8 w-8 items-center justify-center bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-center text-sm font-medium text-gray-900">
                          快速办理
                        </h4>
                        <p className="mt-1 text-center text-xs text-gray-500">
                          当天发货
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 桌面端显示 */}
                  <div className="absolute inset-0 hidden lg:block">
                    <div className="flex h-full w-full items-center p-6">
                      <div className="h-full w-full bg-gray-50 p-4 shadow-lg">
                        <div className="grid h-full grid-cols-2 gap-4">
                          {/* 央行牌照 */}
                          <div className="flex flex-col items-center justify-center bg-white p-3 shadow-sm">
                            <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                />
                              </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900">
                              央行牌照
                            </h4>
                            <p className="mt-1 text-center text-sm text-gray-500">
                              正规安全有保障
                            </p>
                          </div>

                          {/* 费率优势 */}
                          <div className="flex flex-col items-center justify-center bg-white p-3 shadow-sm">
                            <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                />
                              </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900">
                              费率优势
                            </h4>
                            <p className="mt-1 text-center text-sm text-gray-500">
                              0.38%起超低价费率
                            </p>
                          </div>

                          {/* 产品齐全 */}
                          <div className="flex flex-col items-center justify-center bg-white p-3 shadow-sm">
                            <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                                />
                              </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900">
                              产品齐全
                            </h4>
                            <p className="mt-1 text-center text-sm text-gray-500">
                              POS机+收款码全覆盖
                            </p>
                          </div>

                          {/* 快速办理 */}
                          <div className="flex flex-col items-center justify-center bg-white p-3 shadow-sm">
                            <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-blue-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M13 10V3L4 14h7v7l9-11h-7z"
                                />
                              </svg>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900">
                              快速办理
                            </h4>
                            <p className="mt-1 text-center text-sm text-gray-500">
                              当天审核当天发货
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        {/*常见问题区域 - 展示用户常见问题和解决方法 */}
        <PaymentFAQSection />
      </main>
      <Footer />
    </>
  )
}
