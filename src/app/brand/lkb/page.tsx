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
  CurrencyDollarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Brand from '@/components/common/Brand'

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
                className="group relative overflow-hidden border-2 border-white bg-gradient-to-b from-white to-gray-50 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800"
                style={{borderRadius: '4px'}}
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
            联拓宝SaaS系统管理工具，支持多品牌自主运营，全方位管理解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 产品卡片1 - 会员体系 */}
          <div className="group relative border-2 border-white bg-gradient-to-b from-white to-gray-50 p-6 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800" style={{borderRadius: '4px'}}>
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <UserGroupIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">会员体系</h3>
                <div className="font-medium text-blue-600">高度自定义</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              联拓宝拥有高度自定义的会员系统，用户可自定义会员层级数、各级会员名称、会员分润比例、升级条件等
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  自定义会员层级数和名称
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  灵活设置分润比例
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  自主配置升级条件
                </span>
              </li>
            </ul>
          </div>

          {/* 产品卡片2 - 产品体系 */}
          <div className="group relative border-2 border-white bg-gradient-to-b from-white to-gray-50 p-6 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800" style={{borderRadius: '4px'}}>
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <CpuChipIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">产品体系</h3>
                <div className="font-medium text-blue-600">SAAS构架</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              产品基于SAAS构架，可以集成、上架市面上所有POS机、实现机具管理、自定义政策、奖励、激返现、分润总奖金等
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  集成市面上所有POS机
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  自定义政策和奖励机制
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  智能分润和返现管理
                </span>
              </li>
            </ul>
          </div>

          {/* 产品卡片3 - 增值服务 */}
          <div className="group relative border-2 border-white bg-gradient-to-b from-white to-gray-50 p-6 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800" style={{borderRadius: '4px'}}>
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <SparklesIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">增值服务</h3>
                <div className="font-medium text-blue-600">多元收益</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              软件集成了多种增值服务，包括信用卡申请、贷款申请、违章代缴、积分兑换、福利商城等，有效增加代理商收益
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  信用卡申请、贷款申请
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  违章代缴、积分兑换
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  福利商城，增加代理商收益
                </span>
              </li>
            </ul>
          </div>

          {/* 产品卡片4 - 数据统计 */}
          <div className="group relative border-2 border-white bg-gradient-to-b from-white to-gray-50 p-6 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800" style={{borderRadius: '4px'}}>
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                <AcademicCapIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">数据统计</h3>
                <div className="font-medium text-blue-600">核心优势</div>
              </div>
            </div>

            <p className="mb-4 text-sm text-gray-600">
              数据统计与分析是联拓宝核心优势，以数据为驱动，把控整个团队与展业方向
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  数据驱动决策分析
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  团队管理可视化
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  展业方向精准把控
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
            <div className="mb-4 inline-flex items-center bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700 sm:mb-6 sm:text-sm" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
              <span className="mr-2 h-1.5 w-1.5 bg-blue-600"></span>
              申请办理
            </div>
            <h2 className="mb-4 text-2xl leading-tight font-bold text-gray-900 sm:mb-6 sm:text-3xl">
              联拓宝
              <br className="hidden sm:block" />
              免费领取机器
            </h2>


            <div className="mb-6 border border-gray-200 bg-white p-4 sm:mb-8 sm:p-6" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
              <div className="mb-3 flex items-center sm:mb-4">
                <div className="mr-2 flex h-8 w-8 items-center justify-center bg-blue-50 sm:mr-3 sm:h-10 sm:w-10" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                  <QrCodeIcon className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />
                </div>
                <h3 className="text-base font-medium sm:text-lg">
                  扫码了解更多
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {/* 领取机器二维码 */}
                <div className="flex flex-col items-center bg-gray-50 p-4" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                  <div className="mb-3 h-24 w-24 bg-white p-2 sm:h-32 sm:w-32" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
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
                <div className="flex flex-col items-center bg-gray-50 p-4" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                  <div className="mb-3 h-24 w-24 bg-white p-2 sm:h-32 sm:w-32" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
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
                <div className="flex flex-col items-center bg-gray-50 p-4" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                  <div className="mb-3 h-24 w-24 bg-white p-2 sm:h-32 sm:w-32" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
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
                <div className="flex flex-col items-center bg-gray-50 p-4" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                  <div className="mb-3 h-24 w-24 bg-white p-2 sm:h-32 sm:w-32" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
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
              <div className="border border-gray-200 bg-white p-4 sm:p-6" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
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
                      联拓宝
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
              <div className="absolute -top-3 -left-3 transform border border-blue-800 bg-gradient-to-br from-blue-600 to-blue-700 p-3 transition-transform duration-300 hover:scale-105 sm:-top-6 sm:-left-6 sm:p-4" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                <div className="flex items-center space-x-3">
                  <div className="flex h-8 w-8 items-center justify-center bg-white/20 backdrop-blur-sm sm:h-10 sm:w-10" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
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
                      联拓宝
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
      name: '产品可快速上线',
      description:
        '无需平台方自主开发，可直接上线使用，不管经营模式多么复杂，都可以实现多终端管理，省时、省力。',
      icon: RocketLaunchIcon,
      image: '/images/product/ltb.png',
      stats: [
        { label: '即开即用', value: '无需自主开发，产品可直接上线使用' },
        { label: '多终端管理', value: '支持复杂经营模式的多终端统一管理' },
        { label: '省时省力', value: '大幅减少开发时间和人力成本投入' },
      ],
    },
    {
      name: '降低运营成本',
      description:
        '帮助销售管理做"减法"，实现管理成本和展业成本的下降，最高节省50%以上运营成本。',
      icon: CurrencyDollarIcon,
      image: '/images/screenshots/Productdisplay2.jpg',
      stats: [
        { label: '管理减法', value: '简化销售管理流程，提升运营效率' },
        { label: '成本下降', value: '管理成本和展业成本显著降低' },
        { label: '节省50%+', value: '最高可节省50%以上的运营成本' },
      ],
    },
    {
      name: '强大的品质保证',
      description:
        '平台背靠公司大平台，专业技术团队，品质有保障，对加强培训、营销方面，经验丰富，有法可循。',
      icon: ShieldCheckIcon,
      image: '/images/screenshots/Productdisplay.jpg',
      stats: [
        { label: '大平台支撑', value: '依托公司大平台，技术实力雄厚' },
        { label: '专业团队', value: '专业技术团队保障产品品质' },
        { label: '经验丰富', value: '培训营销经验丰富，有法可循' },
      ],
    },
    {
      name: '全方位运营支持',
      description:
        '提供线上线下宣传物料、营销活动、客服解答等服务，提供全方面多角度优质的运营支持。',
      icon: UserGroupIcon,
      image: '/images/screenshots/ltb4.png',
      stats: [
        { label: '宣传物料', value: '提供线上线下完整的宣传物料支持' },
        { label: '营销活动', value: '专业营销活动策划和执行支持' },
        { label: '客服解答', value: '7×24小时专业客服解答服务' },
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* 标题区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            核心优势
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            联拓宝SaaS系统管理工具，提供全方位的运营支持和品质保证
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

// 英雄区块开始
export default function KnowledgeBasePage(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        {/* 英雄区域 - 参考下载页面设计风格 */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
          <Container className="py-20 lg:py-32">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* 左侧内容 */}
              <div className="animate-fade-in-left">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  央行支付牌照
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                  联拓宝
                  <span className="block text-blue-600">智能收款解决方案</span>
                </h1>

                <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
                  联拓宝是一款SaaS系统管理工具，支持多品牌自主运营；可自主上架产品、进行用户管理、开展运营活动、管理订单、统计业务数据等。具备前端风格配置、功能配置、机具和物料库存管理、运营活动管理、分享推广、团队管理、账户管理、机具管理、统计分析等相关功能。
                </p>

                {/* 核心卖点 */}
                <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                      <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-900">央行牌照</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                      <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-900">费率优惠</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                      <svg className="h-4 w-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-900">秒级到账</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                      <svg className="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-900">全国包邮</p>
                  </div>
                </div>

                {/* 按钮组 */}
                <div className="flex flex-col gap-3 sm:gap-4 md:flex-row">
                  <Button
                    href="new"
                    className="flex w-full items-center justify-center gap-2 bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 sm:px-8 sm:py-4 md:w-auto"
                  >
                    <PencilIcon className="h-5 w-5 flex-shrink-0" />
                    <span className="whitespace-nowrap">立即办理</span>
                  </Button>
                  <Button
                    href="/new"
                    variant="outline"
                    className="flex w-full items-center justify-center gap-2 border-gray-300 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 sm:px-8 sm:py-4 md:w-auto"
                  >
                    <PlayIcon className="h-5 w-5 flex-shrink-0" />
                    <span className="whitespace-nowrap">查看产品</span>
                  </Button>
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  支持多品牌自主运营，全方位管理解决方案
                </p>
              </div>

              {/* 右侧手机展示 - 采用下载页面的SVG框架样式 */}
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow animate-fade-in-right">
                <div className="relative">
                  <svg role="img" viewBox="0 0 366 729" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                    <title>联拓宝App界面</title>
                    <defs>
                      <clipPath id="lkb-app-clip">
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
                      clipPath="url(#lkb-app-clip)"
                      transform="translate(24 24)"
                    >
                      <Image alt="联拓宝App界面" src="/images/product/ltbapp.jpg" width={316} height={684} unoptimized />
                    </foreignObject>
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </section>
       {/*英雄区块 */}

        <Aisd />
        <AdvantagesSection />
        <DemoSection />
        <CoreFeaturesSection />
        {/* 应用场景区域 */}
        <PaymentScenes />
        {/* 功能特色区块 */}
        <FeaturesSection />
        {/* 品牌底部组件 */}
        <Brand />
        {/*常见问题区域 */}
        <PaymentFAQSection />
      </main>
      <Footer />
    </>
  )
}
