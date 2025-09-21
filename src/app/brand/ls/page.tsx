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
  QrCodeIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Brand from '@/components/common/Brand'

// ==================== 页面SEO元数据配置 ====================
export const metadata: Metadata = {
  title: '乐刷POS机官网_乐刷电签POS_乐刷收款码_乐刷代理商_乐刷科技有限公司',
  description:
    '乐刷POS机官网提供乐刷电签POS、乐刷收款码、乐刷MPOS等全方位支付解决方案。乐刷科技有限公司拥有央行支付牌照，提供优惠的乐刷POS机费率，全国招募乐刷代理商，支持乐刷官网下载，为商户提供安全便捷的支付服务',
  keywords: [
    '乐刷POS机官',
    '乐刷电签POS',
    '乐刷收款',
    '乐刷代理',
    '乐刷POS机费',
    '乐刷科技有限公司',
    '乐刷MPOS',
    '乐刷官网下载',
    '乐刷支付',
    '乐刷POS机办',
    '乐刷移动POS',
    '乐刷智能POS',
    '乐刷聚合支付',
    '乐刷一清机',
    '乐刷POS机申',
    '乐刷POS机代',
    '乐刷POS机费率表',
    '乐刷POS机客',
    '乐刷POS机使用教',
    '乐刷POS机激'
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
    title: '乐刷支付牌照',
    description: '乐刷科技有限公司持有央行颁发的支付业务许可证，合法合规经营，为商户提供安全可靠的支付服务',
    stats: '100%',
    unit: '合规保障',
    icon: FaceSmileIcon,
  },
  {
    title: '乐刷电签POS',
    description: '乐刷电签POS支持电子签名功能，无需纸质单据，交易记录自动保存，大大提高商户工作效率',
    stats: '99.9%',
    unit: '交易成功',
    icon: SpeakerWaveIcon,
  },
  {
    title: '乐刷收款',
    description: '提供静态和动态收款码，支持支付宝、微信支付等多种渠道，资金实时到账，费率优惠',
    stats: '24小时',
    unit: '快速结',
    icon: SparklesIcon,
  },
  {
    title: '乐刷MPOS',
    description: '乐刷MPOS便携式移动POS，支持蓝牙连接，随时随地收款，适合各类移动商户使用',
    stats: '1',
    unit: '快速开',
    icon: RocketLaunchIcon,
  },
]

// 应用场景数据
const scenarios: Scenario[] = [
  {
    id: 'retail-store',
    name: '零售店铺',
    description: '乐刷POS机为零售店铺提供便捷收银解决方案，支持多种支付方',
    features: ['快速收', '会员管理', '库存同步'],
    icon: TvIcon,
    video: '/videos/retail-store.mp4',
  },
  {
    id: 'restaurant',
    name: '餐饮行业',
    description: '乐刷电签POS满足餐饮行业点餐、收银、分账等全方位需',
    features: ['扫码点餐', '桌台管理', '后厨打印'],
    icon: UserGroupIcon,
    video: '/videos/restaurant.mp4',
  },
  {
    id: 'online-store',
    name: '电商商户',
    description: '乐刷收款码为电商提供线上支付解决方案，支持多渠道收款',
    features: ['在线支付', '自动对账', '资金管理'],
    icon: AcademicCapIcon,
    video: '/videos/online-store.mp4',
  },
  {
    id: 'mobile-payment',
    name: '移动商户',
    description: '乐刷MPOS为移动商户提供便携式收款设备，随时随地收',
    features: ['移动收款', '蓝牙打印', '离线交易'],
    icon: MegaphoneIcon,
    video: '/videos/mobile-payment.mp4',
  },
]

// 功能特色数据
const featureCards: FeatureCard[] = [
  {
    id: 1,
    name: '乐刷电签POS',
    description:
      '乐刷电签POS终端支持多种支付方式，包括银行卡、扫码支付、NFC等，满足不同商户的收款需求，操作简便，安全可靠',
    features: [
      '多渠道支付：银行卡、扫码、NFC',
      '高安全性：金融级加密，交易安全有保',
    ],
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: 2,
    name: '乐刷MPOS',
    description:
      '乐刷MPOS便携式移动POS机支持蓝牙连接，无需纸质单据，交易记录自动保存，大大提高商户工作效率，降低运营成本',
    features: ['蓝牙连接，便携移', '交易记录自动保存，方便查'],
    icon: AcademicCapIcon,
  },
  {
    id: 3,
    name: '乐刷收款',
    description:
      '乐刷收款码支持支付宝、微信支付等多种支付渠道，一码多用，资金实时到账，商户后台管理便捷，对账清晰明了',
    features: ['多渠道收款，一码多', '资金实时到账，后台管理便'],
    icon: FaceSmileIcon,
  },
  {
    id: 4,
    name: '乐刷POS机费',
    description:
      '乐刷科技有限公司提供优惠的POS机费率，支持多种交易类型，费率透明，无隐藏费用，为商户节省成本',
    features: ['优惠费率，透明无隐', '多种交易类型，灵活选择'],
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
            乐刷POS机产品特色          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            全面的支付解决方案，为您的商户提供安全便捷的收款服务
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
                className="overflow-hidden border border-gray-200 outline-1 outline-gray-200 transition-all duration-200 hover:border-gray-300 hover:outline-gray-300"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                  <div className="flex h-12 w-12 flex-none items-center justify-center bg-white ring-1 ring-gray-900/10">
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
                    <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                      申请设备
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

        <div className="mt-12 text-center">
          <Button
            href="#"
            className="bg-blue-600 px-8 py-3 font-medium text-white transition-colors duration-200 hover:bg-blue-700"
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
  // 渐变色配置
  const gradientColors = [
    'from-blue-600 to-blue-700',
    'from-blue-500 to-blue-600',
    'from-blue-400 to-blue-500',
    'from-blue-700 to-blue-800',
  ]
  const bulletColors = [
    'bg-blue-600',
    'bg-blue-500',
    'bg-blue-400',
    'bg-blue-700',
  ]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 dark:bg-gray-900">
      <Container>
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl dark:text-white">
            乐刷支付优势
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-12 bg-blue-600 sm:mb-6 sm:h-1 sm:w-16"></div>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
            专业支付服务提供商，助力商户提升收款效率
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {[
            {
              title: '乐刷POS机办理',
              description:
                '乐刷POS机办理流程简便，最快当天激活使用，提供一对一专业指导，全程无忧，适合各类商户使用',
              stats: '1',
              unit: '快速开通',
            },
            {
              title: '乐刷支付牌照',
              description:
                '乐刷支付持有央行颁发的支付业务许可证，合法合规经营，为商户提供安全可靠的支付服务，资金安全保障',
              stats: '100%',
              unit: '合规保障',
            },
            {
              title: '代理加盟',
              description:
                '全国招募代理加盟，提供丰厚佣金回报，完善培训体系，专业技术支持，共同发展支付业务',
              stats: '全国',
              unit: '招募中',
            },
            {
              title: '乐刷POS机客服',
              description:
                '专业乐刷POS机客服团队，7×24小时在线支持，快速响应各类问题，确保商户收款顺畅无忧',
              stats: '24/7',
              unit: '全天候服务',
            },
          ].map((advantage, index) => {
            return (
              <div
                key={advantage.title}
                className="group overflow-hidden border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-gray-300 dark:border-gray-700 dark:bg-gray-800"
              >
                <div
                  className={`bg-gradient-to-br ${gradientColors[index % 4]} relative overflow-hidden p-6 text-white sm:p-8`}
                >
                  <div className="absolute top-0 right-0 h-16 w-16 translate-x-8 -translate-y-8 bg-white/10 sm:h-24 sm:w-24 sm:translate-x-12 sm:-translate-y-12"></div>
                  <div className="relative z-10">
                    <h3 className="mb-2 text-sm font-semibold opacity-90 sm:mb-3 sm:text-lg">
                      {advantage.title}
                    </h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold sm:text-5xl">
                        {advantage.stats}
                      </span>
                      {advantage.unit && (
                        <span className="ml-2 text-lg font-medium sm:text-xl">
                          {advantage.unit}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <h4 className="mb-4 text-sm font-semibold text-gray-900 sm:mb-6 sm:text-base dark:text-white">
                    {advantage.description.split('，')[0]}
                  </h4>
                  <ul className="space-y-3 sm:space-y-4">
                    {advantage.description
                      .split('，')
                      .slice(1)
                      .map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start">
                          <div
                            className={`h-1.5 w-1.5 sm:h-2 sm:w-2 ${bulletColors[index % 4]} mt-1.5 mr-2 flex-shrink-0 sm:mt-2 sm:mr-3`}
                          ></div>
                          <span className="text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-gray-300">
                            {feature.trim()}
                          </span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
            )
          })}
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
      title: '乐刷POS机办理系统',
      url: 'https://www.cnai.art',
      username: '自行注册',
      password: '自行注册',
      description: '乐刷POS机官网在线办理平台',
    },
    {
      title: '乐刷代理商系统',
      url: 'https://ai-demo.chatmoney.cn/admin',
      username: 'admin',
      password: '123456',
      description: '乐刷代理商专用管理系统',
    },
    {
      title: '乐刷收款码演示',
      url: 'https://www.cnai.art/mobile',
      username: '自行注册',
      password: '自行注册',
      description: '乐刷收款码在线申请演示',
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
              乐刷POS机              <br className="hidden sm:block" />
              免费领取机器
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-600 sm:mb-8 sm:text-lg">
              通过乐刷POS机官网演示系统，您可以亲身体验乐刷电签POS、乐刷MPOS和乐刷收款码的强大功能，无需安装，即刻体验。            </p>

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
                {/* 领取机器二维码*/}
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

                {/* 联系客服二维码*/}
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

                {/* 代理加盟二维码*/}
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
                  src="/images/product/leshua.png"
                  alt="工作演示"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
                <div className="mt-3 flex items-center justify-between sm:mt-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-900 sm:text-sm">
                      乐刷电签POS
                    </h4>
                    <p className="text-xs text-gray-500">
                      一站式管理您的所有POS机设备                    </p>
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

// 申请办理组件
function ApplySection(): JSX.Element {
  // 演示账号数据
  const demoAccounts: DemoAccount[] = [
    {
      title: '乐刷POS机办理系统',
      url: 'https://www.cnai.art',
      username: '自行注册',
      password: '自行注册',
      description: '乐刷POS机官网在线办理平台',
    },
    {
      title: '乐刷代理商系统',
      url: 'https://ai-demo.chatmoney.cn/admin',
      username: 'admin',
      password: '123456',
      description: '乐刷代理商专用管理系统',
    },
    {
      title: '乐刷收款码演示',
      url: 'https://www.cnai.art/mobile',
      username: '自行注册',
      password: '自行注册',
      description: '乐刷收款码在线申请演示',
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
              乐刷POS机              <br className="hidden sm:block" />
              免费领取机器
            </h2>
            <p className="mb-6 text-base leading-relaxed text-gray-600 sm:mb-8 sm:text-lg">
              通过乐刷POS机官网演示系统，您可以亲身体验乐刷电签POS、乐刷MPOS和乐刷收款码的强大功能，无需安装，即刻体验。            </p>

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
                  src="/images/product/leshua.png"
                  alt="工作演示"
                  width={600}
                  height={400}
                  className="h-auto w-full"
                />
                <div className="mt-3 flex items-center justify-between sm:mt-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-900 sm:text-sm">
                      乐刷电签POS
                    </h4>
                    <p className="text-xs text-gray-500">
                      一站式管理您的所有POS机设备                    </p>
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
// 申请办理组件

// 核心功能展示组件
function CoreFeaturesSection(): JSX.Element {
  const coreFeatures = [
    {
      name: '乐刷电签POS',
      description:
        '乐刷电签POS终端支持多种支付方式，包括银行卡、扫码支付、NFC等，满足不同商户的收款需求，操作简便，安全可靠',
      icon: PencilIcon,
      image: '/images/screenshots/Productdisplay.jpg',
      videoUrl: undefined,
      stats: [
        { label: '多渠道支付', value: '支持银行卡、扫码、NFC等多种支付方式' },
        { label: '高安全性', value: '金融级加密，交易安全有保障' },
        { label: '操作简单', value: '界面友好，易于上手使用' },
      ],
    },
    {
      name: '乐刷MPOS',
      description:
        '乐刷MPOS支持电子签名功能，无需纸质单据，交易记录自动保存，大大提高商户工作效率，降低运营成本',
      icon: SpeakerWaveIcon,
      image: '/images/screenshots/Productdisplay2.jpg',
      videoUrl: undefined,
      stats: [
        { label: '电子签名', value: '无需纸质单据，环保高效' },
        { label: '自动保存', value: '交易记录自动保存，方便查询' },
        { label: '降低成本', value: '减少纸张使用，降低运营成本' },
      ],
    },
    {
      name: '乐刷收款',
      description:
        '乐刷收款码支持支付宝、微信支付等多种支付渠道，一码多用，资金实时到账，商户后台管理便捷，对账清晰明了',
      icon: PencilIcon,
      image: '/images/screenshots/Productdisplay3.jpg',
      videoUrl: undefined,
      stats: [
        { label: '多渠道收款', value: '支持支付宝、微信支付等多种渠道' },
        { label: '一码多用', value: '一个收款码支持多种支付方式' },
        { label: '实时到账', value: '资金快速到账，提高资金周转' },
      ],
    },
    {
      name: '乐刷支付牌照',
      description:
        '乐刷支付持有央行颁发的支付业务许可证，合法合规经营，为商户提供安全可靠的支付服务，资金安全保障，合规经营无忧',
      icon: VideoCameraIcon,
      image: '/images/product/leshua.png',
      imageUrl: '/images/screenshots/乐刷支付.jpg',
      videoUrl: undefined,
      stats: [
        { label: '央行牌照', value: '持有央行颁发的支付业务许可证' },
        { label: '合规经营', value: '合法合规，资金安全保障' },
        { label: '专业服务', value: '提供专业支付解决方案' },
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* 标题区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            乐刷支付核心功能
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            强大的支付技术能力，为您提供全方位的支付解决方案
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
                    <div className="flex h-10 w-10 items-center justify-center bg-blue-600">
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
                        <div className="mt-3 h-2 w-2 flex-shrink-0 bg-blue-600"></div>
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

                {/* 媒体区域 */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    {feature.videoUrl ? (
                      <div className="aspect-video overflow-hidden bg-gray-100">
                        <video
                          src={feature.videoUrl}
                          controls
                          autoPlay
                          muted
                          loop
                          className="h-full w-full object-cover"
                        >
                          您的浏览器不支持视频播放
                        </video>
                      </div>
                    ) : feature.image ? (
                      <div className="aspect-video overflow-hidden bg-gray-100">
                        <Image
                          src={feature.image}
                          alt={`${feature.name}功能演示`}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video overflow-hidden bg-gray-100 flex items-center justify-center">
                        <div className="text-center text-gray-500">
                          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-gray-200 flex items-center justify-center">
                            <feature.icon className="h-8 w-8 text-gray-400" />
                          </div>
                          <p className="text-sm">功能演示图片</p>
                        </div>
                      </div>
                    )}
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
            className="inline-flex items-center border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
          >
            探索更多功能
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}

// 乐刷支付英雄区块开始
export default function KnowledgeBasePage(): JSX.Element {
  return (
    <>
      <Header />
      <main className="pt-4 sm:pt-0">
        {/* 乐刷支付英雄区块开始 */}
        <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
          {/* 几何背景装饰 - 响应式尺寸优化 */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="xs:-top-32 xs:-right-32 xs:w-60 xs:h-60 animate-blob absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-400 opacity-20 mix-blend-multiply blur-xl filter sm:-top-40 sm:-right-40 sm:h-80 sm:w-80"></div>
            <div className="xs:-bottom-32 xs:-left-32 xs:w-60 xs:h-60 animate-blob animation-delay-2000 absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-400 opacity-20 mix-blend-multiply blur-xl filter sm:-bottom-40 sm:-left-40 sm:h-80 sm:w-80"></div>
            <div className="xs:w-60 xs:h-60 animate-blob animation-delay-4000 absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-indigo-400 opacity-20 mix-blend-multiply blur-xl filter sm:h-80 sm:w-80"></div>
          </div>

          {/* 动态渐变背景 - 光效和网格 */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5"></div>
            <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
            <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(59,130,246,0.03)_25%,rgba(59,130,246,0.03)_26%,transparent_27%,transparent_74%,rgba(59,130,246,0.03)_75%,rgba(59,130,246,0.03)_76%,transparent_77%,transparent),linear-gradient(rgba(59,130,246,0.03)_24%,transparent_25%,transparent_26%,rgba(59,130,246,0.03)_27%,rgba(59,130,246,0.03)_74%,transparent_75%,transparent_76%,rgba(59,130,246,0.03)_77%,rgba(59,130,246,0.03))] bg-[length:75px_75px]"></div>
          </div>

          {/* 响应式容器 - 优化超小屏幕适配 */}
          <div className="xs:px-4 xs:pt-20 xs:pb-16 relative z-10 mx-auto max-w-[1800px] px-3 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 lg:pt-28">
            {/* 状态标签 - 响应式间距和字体 */}
            <div className="xs:mb-6 mb-4 flex justify-center sm:mb-8">
              <div className="xs:gap-2 xs:px-4 xs:py-2 inline-flex items-center gap-1.5 border border-blue-100 bg-white/80 px-3 py-1.5 backdrop-blur-sm">
                <div className="xs:w-2 xs:h-2 h-1.5 w-1.5 animate-pulse bg-green-400"></div>
                <span className="xs:text-sm text-xs font-medium text-gray-700">
                  乐刷支付服务正常运行
                </span>
              </div>
            </div>

            <div className="xs:gap-8 grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
              {/* 左侧内容 - 优化移动端间距 */}
              <div className="xs:space-y-6 space-y-4 text-center sm:space-y-8 lg:text-left">
                {/* 主标题 - 增强响应式字体大小 */}
                <div className="xs:space-y-4 space-y-3 sm:space-y-6">
                  <h1 className="xs:text-3xl text-2xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                    <span className="block">专业支付</span>
                    <span className="block bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      乐刷电签POS
                    </span>
                    <span className="block">支付解决方案</span>
                  </h1>
                  <p className="xs:text-base xs:px-0 mx-auto max-w-2xl px-2 text-sm leading-relaxed text-gray-600 sm:text-lg lg:mx-0 lg:text-xl">
                    乐刷支付拥有央行颁发的支付业务许可证，提供电签POS、MPOS、收款码等多种支付方式，为商户提供安全便捷的支付解决方案
                  </p>
                </div>

                {/* 核心功能标签 - 优化移动端显示 */}
                <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2 px-3 xs:gap-3 xs:px-0 sm:gap-4 lg:mx-0 lg:justify-start">
                  {[
                    {
                      name: '电签POS',
                      time: '24/7',
                      icon: ChatBubbleLeftRightIcon,
                    },
                    { name: 'MPOS', time: '5min', icon: UsersIcon },
                    { name: '收款', time: '<3s', icon: MicrophoneIcon },
                    { name: '支付牌照', time: '合法', icon: AcademicCapIcon },
                  ].map((feature, index) => {
                    const Icon = feature.icon
                    return (
                      <div
                        key={index}
                        className="group inline-flex touch-manipulation items-center gap-2 border border-gray-200 bg-white/90 px-3 py-2.5 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-sm xs:gap-3 xs:px-4 xs:py-3 xs:rounded-none sm:rounded-lg"
                      >
                        <Icon className="h-4 w-4 text-gray-600 transition-colors group-hover:text-blue-600 xs:h-5 xs:w-5" />
                        <span className="text-sm font-medium text-gray-800 xs:text-base">
                          {feature.name}
                        </span>
                        <span className="rounded bg-blue-50 px-2 py-0.5 font-mono text-xs text-blue-600 xs:px-2.5 xs:text-sm">
                          {feature.time}
                        </span>
                      </div>
                    )
                  })}
                </div>
                {/* 行动按钮 - 增强移动端适配 */}
                <div className="xs:flex-row xs:gap-3 xs:px-0 flex flex-col justify-center gap-2.5 px-4 sm:gap-4 lg:justify-start">
                  <Button
                    href="#demo"
                    variant="solid"
                    color="blue"
                    className="xs:px-6 xs:py-3 xs:text-base min-h-[44px] touch-manipulation xs:rounded-none sm:rounded-xl px-5 py-2.5 text-sm font-semibold sm:px-8 sm:py-4"
                  >
                    立即办理
                  </Button>
                  <Button
                    href="https://v.cnai.art"
                    target="_blank"
                    variant="outline"
                    color="slate"
                    className="xs:px-6 xs:py-3 xs:text-base min-h-[44px] touch-manipulation px-5 py-2.5 text-sm font-semibold sm:px-8 sm:py-4"
                  >
                    联系乐刷POS机客服
                  </Button>
                </div>

                {/* 实时数据展示 - 优化移动端布局 */}
                <div className="xs:gap-6 flex justify-center gap-4 sm:gap-8 lg:justify-start">
                  <div className="text-center">
                    <div className="xs:text-2xl xs:mb-1 mb-0.5 text-xl font-bold text-blue-600 sm:text-3xl">
                      100万+
                    </div>
                    <div className="xs:text-sm text-xs text-gray-600">
                      商户用户
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="xs:text-2xl xs:mb-1 mb-0.5 text-xl font-bold text-blue-600 sm:text-3xl">
                      99.9%
                    </div>
                    <div className="xs:text-sm text-xs text-gray-600">
                      交易成功率
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="xs:text-2xl xs:mb-1 mb-0.5 text-xl font-bold text-blue-600 sm:text-3xl">
                      &lt;3秒
                    </div>
                    <div className="xs:text-sm text-xs text-gray-600">到账速度</div>
                  </div>
                </div>
              </div>

              {/* 右侧展示区 - 增强移动端适配 */}
              <div className="xs:mt-8 xs:mx-4 relative mx-2 mt-6 sm:mx-0 lg:mt-0">
                {/* 主展示容器 - 优化响应式尺寸 */}
                <div className="relative">
                  {/* 展示卡片 - 全面优化移动端高度和间距 */}
                  <div className="xs:p-4 xs:min-h-[380px] relative min-h-[320px] border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-3 transition-all duration-300 sm:min-h-[460px] sm:p-6 md:min-h-[500px]">
                    {/* 顶部状态栏 - 增强移动端布局 */}
                    <div className="xs:mb-4 mb-3 flex items-center justify-between sm:mb-6">
                      <div className="xs:gap-2 flex items-center gap-1.5 sm:gap-3">
                        <div className="xs:w-7 xs:h-7 flex h-6 w-6 items-center justify-center bg-blue-600 sm:h-9 sm:w-9">
                          <ChatBubbleLeftRightIcon className="xs:w-4 xs:h-4 h-3 w-3 text-white sm:h-5 sm:w-5" />
                        </div>
                        <div>
                          <h3 className="xs:text-sm text-xs font-bold text-gray-900 sm:text-base">
                            乐刷支付系统
                          </h3>
                          <p className="xs:text-xs text-[10px] text-gray-500 sm:text-sm">
                            电签POS · MPOS · 收款码
                          </p>
                        </div>
                      </div>
                      <div className="xs:gap-1.5 flex items-center gap-1 sm:gap-2">
                        <div className="xs:w-1.5 xs:h-1.5 h-1 w-1 animate-pulse bg-green-400 sm:h-2 sm:w-2"></div>
                        <span className="xs:text-xs xs:inline hidden text-[10px] text-gray-600 sm:text-sm">
                          服务运行中
                        </span>
                        <span className="xs:hidden text-[10px] text-gray-600">
                          运行中
                        </span>
                      </div>
                    </div>

                    {/* 对话展示区 - 全面优化移动端设计 */}
                    <div className="xs:p-3 xs:mb-4 xs:min-h-[170px] mb-3 min-h-[140px] border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-2.5 transition-all duration-300 sm:mb-6 sm:min-h-[220px] sm:p-5 md:min-h-[250px]">
                      <div className="xs:space-y-3 space-y-2.5 sm:space-y-5">
                        {/* 系统消息 */}
                        <div className="xs:gap-2 animate-fade-in flex items-start gap-1.5 sm:gap-3">
                          <div className="xs:w-6 xs:h-6 flex h-5 w-5 flex-shrink-0 items-center justify-center border border-blue-700 bg-blue-600 sm:h-8 sm:w-8">
                            <ChatBubbleLeftRightIcon
                              className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-white sm:h-4 sm:w-4"
                              aria-hidden="true"
                            />
                            <span className="sr-only">乐刷支付系统</span>
                          </div>
                          <div className="xs:p-2.5 xs:max-w-[calc(100%-3rem)] max-w-[calc(100%-2.5rem)] border border-gray-200 bg-white p-2 sm:max-w-xs sm:p-3.5">
                            <p className="xs:text-xs text-[10px] leading-relaxed text-gray-800 sm:text-sm">
                              您好！欢迎使用乐刷支付系统，我们提供电签POS、MPOS、收款码等多种支付解决方案
                            </p>
                          </div>
                        </div>

                        {/* 用户消息 */}
                        <div className="xs:gap-2 animate-fade-in animation-delay-300 flex items-start justify-end gap-1.5 sm:gap-3">
                          <div className="xs:p-2.5 xs:max-w-[calc(100%-3rem)] max-w-[calc(100%-2.5rem)] border border-blue-700 bg-blue-600 p-2 sm:max-w-xs sm:p-3.5">
                            <p className="xs:text-xs text-[10px] leading-relaxed text-white sm:text-sm">
                              我需要为我的零售店办理一台乐刷电签POS机
                            </p>
                          </div>
                          <div className="xs:w-6 xs:h-6 flex h-5 w-5 flex-shrink-0 items-center justify-center border border-gray-800 bg-gray-700 sm:h-8 sm:w-8">
                            <UsersIcon
                              className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-white sm:h-4 sm:w-4"
                              aria-hidden="true"
                            />
                            <span className="sr-only">用户</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 功能展示区 - 优化移动端网格布局 */}
                    <div className="xs:gap-2 grid grid-cols-3 gap-1.5 sm:gap-3 md:gap-4">
                      {/* 智能POS功能卡片 */}
                      <div className="xs:p-2.5 group touch-manipulation border border-blue-700 bg-gradient-to-br from-blue-500 to-blue-600 p-2 text-white transition-all duration-300 sm:p-3.5">
                        <PencilIcon
                          className="xs:w-4 xs:h-4 xs:mb-1.5 mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5"
                          aria-hidden="true"
                        />
                        <h4 className="xs:text-xs mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">
                          电签POS
                        </h4>
                        <p className="xs:text-xs xs:block hidden text-[9px] text-blue-100 opacity-80">
                          多功能支付终端
                        </p>
                      </div>

                      {/* 电签版功能卡片 */}
                      <div className="xs:p-2.5 group touch-manipulation border border-indigo-700 bg-gradient-to-br from-indigo-500 to-indigo-600 p-2 text-white transition-all duration-300 sm:p-3.5">
                        <VideoCameraIcon
                          className="xs:w-4 xs:h-4 xs:mb-1.5 mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5"
                          aria-hidden="true"
                        />
                        <h4 className="xs:text-xs mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">
                          MPOS
                        </h4>
                        <p className="xs:text-xs xs:block hidden text-[9px] text-indigo-100 opacity-80">
                          电子签名功能
                        </p>
                      </div>

                      {/* 收款码功能卡片 */}
                      <div className="xs:p-2.5 group touch-manipulation border border-purple-700 bg-gradient-to-br from-purple-500 to-purple-600 p-2 text-white transition-all duration-300 sm:p-3.5">
                        <MicrophoneIcon
                          className="xs:w-4 xs:h-4 xs:mb-1.5 mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5"
                          aria-hidden="true"
                        />
                        <h4 className="xs:text-xs mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">
                          收款码
                        </h4>
                        <p className="xs:text-xs xs:block hidden text-[9px] text-purple-100 opacity-80">
                          扫码支付
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* 装饰浮动元素 - 全面优化移动端位置和大小 */}
                  <div className="xs:-top-2 xs:-right-2 xs:p-2 animate-float absolute -top-1.5 -right-1.5 transform border border-gray-200 bg-white p-1.5 transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:-top-3 sm:-right-3 sm:p-3 md:-top-4 md:-right-4">
                    <div className="xs:gap-1 flex items-center justify-center gap-0.5 sm:gap-2">
                      <svg
                        className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-blue-600 sm:h-4 sm:w-4"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="xs:text-xs bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-[9px] font-medium whitespace-nowrap text-transparent sm:text-sm">
                        安全支付
                      </span>
                    </div>
                  </div>
                  <div className="xs:-bottom-2 xs:-left-2 xs:p-2 animate-float animation-delay-2000 absolute -bottom-1.5 -left-1.5 transform border border-gray-200 bg-white p-1.5 transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:-bottom-3 sm:-left-3 sm:p-3 md:-bottom-4 md:-left-4">
                    <div className="xs:gap-1 flex items-center justify-center gap-0.5 sm:gap-2">
                      <VideoCameraIcon className="xs:w-3 xs:h-3 h-2.5 w-2.5 text-black sm:h-4 sm:w-4" />
                      <span className="xs:text-[10px] text-[8px] font-medium whitespace-nowrap text-black sm:text-sm">
                        央行颁发支付牌照
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 技术优势展示 - 优化移动端布局 */}
            <div className="xs:mt-16 mt-12 sm:mt-20">
              <div className="xs:mb-8 mb-6 text-center">
                <h3 className="xs:text-lg xs:mb-2 mb-1.5 text-base font-semibold text-gray-900 sm:text-xl">
                  核心支付优势
                </h3>
                <p className="xs:text-sm xs:px-0 px-4 text-xs text-gray-600">
                  基于央行支付牌照，为商户提供安全可靠的支付解决方案
                </p>
              </div>
              <div className="xs:gap-3 xs:px-0 mx-auto grid max-w-5xl grid-cols-2 gap-2 px-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
                {[
                  { name: '支付安全', desc: '安全' },
                  { name: '快速到账', desc: '高效' },
                  { name: '多种支付', desc: '便捷' },
                  { name: '合法合规', desc: '合规' },
                  { name: '专业服务', desc: '专业' },
                ].map((tech, index) => (
                  <div
                    key={index}
                    className="xs:p-4 group cursor-pointer touch-manipulation border border-gray-200 bg-white/80 p-3 text-center backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50"
                  >
                    <div className="xs:text-xs xs:mb-1 mb-0.5 font-mono text-[10px] font-semibold text-blue-600 group-hover:text-blue-700">
                      {tech.desc}
                    </div>
                    <div className="xs:text-sm text-xs font-medium text-gray-700 group-hover:text-gray-900">
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 自定义CSS动画样式 - 增加移动端优化 */}
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-10px); }
              }
              .animate-float {
                animation: float 3s ease-in-out infinite;
              }
              .animation-delay-2000 {
                animation-delay: 2s;
              }
              .animation-delay-4000 {
                animation-delay: 4s;
              }
              .animation-delay-300 {
                animation-delay: 0.3s;
              }
              .rotate-3d {
                transform: perspective(1000px) rotateY(-15deg) rotateX(5deg);
              }
              @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
              }
              .animate-fade-in {
                animation: fadeIn 0.5s ease-out forwards;
              }
              /* 移动端触摸优化 */
              .touch-manipulation {
                touch-action: manipulation;
              }
              /* 减少移动端动画以提升性能 */
              @media (max-width: 640px) {
                .animate-float {
                  animation-duration: 4s;
                }
                .animate-blob {
                  animation-duration: 8s;
                }
              }
              /* 超小屏幕断点 */
              @media (min-width: 475px) {
                .xs\:block { display: block; }
                .xs\:inline { display: inline; }
                .xs\:flex { display: flex; }
                .xs\:hidden { display: none; }
              }
            `,
            }}
          />
        </section>
        {/* 乐刷支付英雄区块结束 */}

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
        {/*常见问题区域*/}
        <PaymentFAQSection />
      </main>
      <Footer />
    </>
  )
}
