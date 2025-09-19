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
  title: '联拓宝_联拓宝官网_联拓宝APP_联拓宝平台',
  description:
    '联拓宝官网提供App移动POS收银系统免费下载安装，支持Android/iOS全平台，0.38%费率永不+3，信用卡、微信、支付宝、云闪付全能收款，激活返现299元，T+0秒到账，个人/商户1证开通，无需额外设备，手机秒变POS机，一站式官网下载、代理加盟、售后客服服务。',
  keywords: [
    '联拓宝官网,联拓宝App下载,联拓宝移动POS,联拓宝收银系统,联拓宝POS机办理,联拓宝官网下载,联拓宝安卓版,联拓宝iOS版,联拓宝客服,联拓宝代理,联拓宝费率,移动收银App,手机POS软件,激活返现,一清支付',
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
    description: '联拓宝拥有央行颁发的支付业务许可证，资金安全有保障，一清结算更放心',
    stats: '正规',
    unit: '持牌机构',
    icon: FaceSmileIcon,
  },
  {
    title: '费率优势',
    description: '联拓宝POS机费率0.38%起，永不+3，支持多种支付方式，成本低更实惠',
    stats: '0.38%',
    unit: '超低费率',
    icon: SpeakerWaveIcon,
  },
  {
    title: '到账速度',
    description: '联拓宝T+0秒到账，365天快速到账，资金周转更高效，经营更顺畅',
    stats: '秒到',
    unit: 'T+0到账',
    icon: SparklesIcon,
  },
  {
    title: '办理便捷',
    description: '联拓宝POS机免费申请，个人/商户1证办理，顺丰包邮当天发货，快速开通',
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
    description: '联拓宝POS机适用于各类零售门店，支持扫码支付、刷卡支付等多种方式',
    features: ['扫码支付', '刷卡支付', '会员管理'],
    icon: TvIcon,
    video: '/videos/retail-store.mp4',
  },
  {
    id: 'restaurant',
    name: '餐饮美食',
    description: '联拓宝智能POS支持堂食点餐、外卖接单，提升餐厅经营效率',
    features: ['堂食点餐', '外卖接单', '桌台管理'],
    icon: UserGroupIcon,
    video: '/videos/restaurant.mp4',
  },
  {
    id: 'supermarket',
    name: '超市便利店',
    description: '联拓宝移动POS适用于超市便利店，快速收银，提升顾客购物体验',
    features: ['快速收银', '库存管理', '促销活动'],
    icon: AcademicCapIcon,
    video: '/videos/supermarket.mp4',
  },
  {
    id: 'mobile-payment',
    name: '移动收款',
    description: '联拓宝移动POS支持外出收款，适合地摊、外卖、送货上门等场景',
    features: ['便携移动', '4G网络', '长续航'],
    icon: MegaphoneIcon,
    video: '/videos/mobile-payment.mp4',
  },
]

// 功能特色数据
const featureCards: FeatureCard[] = [
  {
    id: 1,
    name: '联拓宝电签POS',
    description:
      '联拓宝电签版POS机，体积小巧便于携带，支持电子签名，无需打印小票，操作简便更环保。适用于移动收款、外卖配送等多种场景。',
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
    name: '联拓宝智能POS',
    description:
      '联拓宝智能POS机，功能强大的智能终端，支持收银管理、会员管理、库存管理等，一机多用，是商户经营的得力助手。',
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
    name: '联拓宝移动POS',
    description:
      '联拓宝移动POS机，4G网络连接，随时随地收款，支持蓝牙连接，适配各种智能终端，让收款更加便捷自由。',
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
    name: '联拓宝收款码',
    description:
      '联拓宝聚合收款码，一码多付，支持微信、支付宝、云闪付等多种支付方式，费率低到账快，是小微商户的理想选择。',
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
            联拓宝POS机，央行支付牌照，安全稳定，费率低至0.38%
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 产品卡片1 - 联拓宝POS机 */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">联拓宝POS机</h3>
                <div className="font-medium text-blue-600">央行牌照</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              联拓宝拥有央行颁发的支付业务许可证，资金安全有保障，一清结算更放心
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

          {/* 产品卡片2 - 联拓宝官网 */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <AcademicCapIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">联拓宝官网</h3>
                <div className="font-medium text-blue-600">费率优势</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              联拓宝POS机费率0.38%起，永不+3，支持多种支付方式，成本低更实惠
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

          {/* 产品卡片3 - 联拓宝电签POS */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <FaceSmileIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">联拓宝电签POS</h3>
                <div className="font-medium text-blue-600">产品齐全</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              联拓宝电签版POS机，体积小巧便于携带，支持电子签名，操作简便更环保
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

          {/* 产品卡片4 - 联拓宝智能POS */}
          <div className="group rounded-xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:border-blue-100">
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <CpuChipIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">联拓宝智能POS</h3>
                <div className="font-medium text-blue-600">快速办理</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              联拓宝智能POS机，功能强大的智能终端，支持收银管理、会员管理、库存管理等
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
      title: '联拓宝POS机办理系统',
      url: 'https://www.xingyifu.pos.cn',
      username: '自行注册',
      password: '自行注册',
      description: '联拓宝官网POS机在线办理平台',
    },
    {
      title: '联拓宝代理加盟系统',
      url: 'https://agent.xingyifu.pos.cn',
      username: '代理申请',
      password: '资质审核',
      description: '联拓宝代理加盟专用管理系统',
    },
    {
      title: '联拓宝收款码演示',
      url: 'https://qrcode.xingyifu.pos.cn',
      username: '自行注册',
      password: '自行注册',
      description: '联拓宝聚合收款码在线申请演示',
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
              联拓宝
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
      name: '联拓宝POS机',
      description:
        '联拓宝（国通星驿）央行支付牌照一清机，安全稳定，费率低至0.38%，支持微信、支付宝、信用卡、数字人民币等全支付渠道，资金T+0秒到账。',
      icon: QrCodeIcon,
      image: '/images/screenshots/Productdisplay.jpg',
      stats: [
        { label: '央行牌照', value: '正规持牌机构，资金安全有保障' },
        { label: '超低费率', value: '费率0.38%且永久无+3费用' },
        { label: '秒级到账', value: 'T+0秒到账，资金周转更高效' },
      ],
    },
    {
      name: '联拓宝电签',
      description:
        '联拓宝电签POS机免费申请，支持电子签名功能，无需打印小票，操作简便更环保。适用于移动收款、外卖配送等多种场景。',
      icon: PencilIcon,
      image: '/images/screenshots/Productdisplay2.jpg',
      stats: [
        { label: '免费申请', value: '官网可免费申请电签POS机' },
        { label: '电子签名', value: '无需纸质单据，环保高效' },
        { label: '便携设计', value: '体积小巧，便于携带' },
      ],
    },
    {
      name: '联拓宝收款码',
      description:
        '联拓宝聚合收款码，一码多付，支持微信、支付宝、云闪付等多种支付方式，费率低至0.38%，是小微商户的理想选择。',
      icon: QrCodeIcon,
      image: '/images/screenshots/Productdisplay3.jpg',
      stats: [
        { label: '一码多付', value: '支持微信、支付宝、云闪付等全渠道' },
        { label: '超低费率', value: '费率0.38%且永久无+3费用' },
        { label: '语音播报', value: '收款实时语音播报提醒' },
      ],
    },
    {
      name: '联拓宝智能设备',
      description:
        '联拓宝提供智能POS机、移动POS机等多种设备选择，满足不同商户的收款需求，操作简便，安全可靠。',
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
            联拓宝POS机，央行支付牌照，安全稳定，费率低至0.38%
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
        {/* 英雄区块开始 - 采用demo.tsx设计风格 */}
        <div className="relative isolate pt-14 bg-white dark:bg-gray-900">
          {/* 背景装饰 - 采用demo.tsx的SVG背景 */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)] dark:stroke-white/10"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M100 200V.5M.5 .5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/50">
              <path
                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          
          <Container className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              {/* 联拓宝特色标签 - 采用现代化设计风格 */}
              <div className="flex">
                <div className="relative flex items-center gap-x-4 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 px-4 py-1.5 text-sm/6 text-gray-700 ring-1 ring-blue-200/50 hover:ring-blue-300/70 dark:from-blue-900/20 dark:to-indigo-900/20 dark:text-blue-200 dark:ring-blue-800/30 dark:hover:ring-blue-700/50 transition-all duration-300 shadow-sm">
                  <span className="font-semibold text-blue-600 dark:text-blue-400 flex items-center">
                    <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    央行支付牌照
                  </span>
                  <span aria-hidden="true" className="h-4 w-px bg-blue-300/50 dark:bg-blue-700/50" />
                  <a href="#" className="flex items-center gap-x-1 text-blue-700 hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200 transition-colors">
                    <span aria-hidden="true" className="absolute inset-0" />
                    安全可靠
                    <ChevronRightIcon aria-hidden="true" className="-mr-2 size-4 text-blue-500" />
                  </a>
                </div>
              </div>
              
              {/* 主标题 - 采用现代化设计风格 */}
              <h1 className="mt-10 text-pretty text-5xl font-bold tracking-tight text-blue-600 sm:text-7xl dark:text-blue-400">
                <span>
                  联拓宝
                </span>
                <br />
                <span className="text-3xl font-bold text-gray-800 lg:text-4xl dark:text-gray-200 mt-2 inline-block">
                  智能收款解决方案
                </span>
              </h1>
              
              {/* 副标题 - 采用现代化设计风格 */}
              <p className="mt-8 text-pretty text-lg font-medium text-gray-600 sm:text-xl/8 dark:text-gray-300 max-w-2xl leading-relaxed">
                联拓宝是一款SaaS系统管理工具，支持多品牌自主运营；可自主上架产品、进行用户管理、开展运营活动、管理订单、统计业务数据等。具备前端风格配置、功能配置、机具和物料库存管理、运营活动管理、分享推广、团队管理、账户管理、机具管理、统计分析等相关功能。
              </p>
              
              {/* 核心特性标签 - 采用现代化设计风格 */}
              <div className="mb-8 mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50/70 px-3 py-1.5 text-sm font-medium text-blue-700 dark:border-blue-800 dark:bg-blue-900/30 dark:text-blue-300 transition-all hover:scale-105 hover:bg-blue-100 dark:hover:bg-blue-900/50">
                  <svg className="w-3.5 h-3.5 mr-1.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  央行牌照
                </span>
                <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50/70 px-3 py-1.5 text-sm font-medium text-green-700 dark:border-green-800 dark:bg-green-900/30 dark:text-green-300 transition-all hover:scale-105 hover:bg-green-100 dark:hover:bg-green-900/50">
                  <svg className="w-3.5 h-3.5 mr-1.5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  费率优惠
                </span>
                <span className="inline-flex items-center rounded-full border border-purple-200 bg-purple-50/70 px-3 py-1.5 text-sm font-medium text-purple-700 dark:border-purple-800 dark:bg-purple-900/30 dark:text-purple-300 transition-all hover:scale-105 hover:bg-purple-100 dark:hover:bg-purple-900/50">
                  <svg className="w-3.5 h-3.5 mr-1.5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  秒级到账
                </span>
                <span className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50/70 px-3 py-1.5 text-sm font-medium text-amber-700 dark:border-amber-800 dark:bg-amber-900/30 dark:text-amber-300 transition-all hover:scale-105 hover:bg-amber-100 dark:hover:bg-amber-900/50">
                  <svg className="w-3.5 h-3.5 mr-1.5 text-amber-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  全国包邮
                </span>
              </div>
              
              
              
              {/* 按钮组 - 采用现代化设计风格 */}
              <div className="mt-10 flex flex-col sm:flex-row items-center gap-x-6 gap-y-4 sm:gap-y-0">
                <Button
                  href="#apply"
                  className="group relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:from-blue-700 dark:to-indigo-700 dark:hover:from-blue-600 dark:hover:to-indigo-600 dark:focus-visible:outline-blue-500"
                >
                  <span className="relative flex items-center">
                    <PencilIcon className="mr-2 h-4 w-4" />
                    立即办理
                    <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
                <Button
                  href="/pos/zhineng"
                  variant="outline"
                  className="group relative overflow-hidden rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-300 hover:border-gray-400 hover:bg-gray-50 hover:shadow-md hover:-translate-y-0.5 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-200 dark:hover:border-gray-500 dark:hover:bg-gray-700"
                >
                  <span className="relative flex items-center">
                    <PlayIcon className="mr-2 h-4 w-4" />
                    查看产品
                    <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
            
            {/* 右侧图形 - 采用demo.tsx的布局和样式 */}
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow">
              <svg role="img" viewBox="0 0 366 729" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                <title>联拓宝App截图</title>
                <defs>
                  <clipPath id="2ade4387-9c63-4fc4-b754-10e687a0d332">
                    <rect rx={36} width={316} height={684} />
                  </clipPath>
                </defs>
                <path
                  d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                  fill="#4B5563"
                />
                <path
                  d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                  fill="#343E4E"
                />
                <foreignObject
                  width={316}
                  height={684}
                  clipPath="url(#2ade4387-9c63-4fc4-b754-10e687a0d332)"
                  transform="translate(24 24)"
                >
                  <Image alt="联拓宝App界面" src="/images/product/ltbapp.jpg" width={316} height={684} unoptimized />
                </foreignObject>
              </svg>
            </div>
          </Container>
         </div>
       {/*英雄区块 */}

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
                      联拓宝<span className="text-blue-600">智能收款</span>
                      解决方案
                    </h3>
                    <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
                      联拓宝POS机，央行支付牌照，安全稳定。支持电签POS、智能POS、移动POS、收款码等多种产品，
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
