import { JSX } from 'react'
import { type Metadata } from 'next'
import Image from 'next/image'
import { PaymentFAQSection } from '@/components/ai/FAQSection'
import Aisd from '@/components/ai/Aisd'
import { PaymentScenes } from '@/components/ai/AIscene'
import {
  UsersIcon,
  QrCodeIcon,
  ChevronRightIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  BanknotesIcon,
  BuildingStorefrontIcon,
  ComputerDesktopIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Brand from '@/components/common/Brand'
import Followus from '@/components/common/Followus'
import { Carousel } from '@/components/carousel'

// ==================== 页面SEO元数据配====================
export const metadata: Metadata = {
  title: '讯易通官网_POS机办理_电签POS机_智能收银终端_移动收款设备_聚合支付服务平台',
  description:
    '讯易通是一款帮助代理管理经营业绩，管理自身数据的APP。提供快捷商户管理、快捷机具管理和快捷业绩管理功能，助力代理高效协作，实现移动办公和远程办公，是互联网时代小微创业者的经营平台',
  keywords: [
    '讯易通POS',
    '讯易通支付',
    '讯易通官网',
    '讯易通POS机办理',
    '讯易通移动POS',
    '讯易通收款码',
    '讯易通代理加盟',
    '讯易通费率',
    '讯易通下载',
    '讯易通客服',
    '讯易通小程序',
    '讯易通总部直签',
    '讯易通app',
    '讯易通官网',
    '讯易通邀请码'
  ],
}

// ==================== 数据类型定义 ====================
interface Advantage {
  title: string
  description: string
  stats: string
  unit: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

interface FeatureCard {
  id: number
  name: string
  description: string
  features: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// ==================== 静态数据配====================
// 讯易通产品优势数据
const advantages: Advantage[] = [
  {
    title: '讯易通支付牌照',
    description: '讯易通持有央行颁发的支付业务许可证，合法合规经营，为商户提供安全可靠的服务',
    stats: '100%',
    unit: '合规保障',
    icon: ShieldCheckIcon,
  },
  {
    title: '讯易通电签POS',
    description: '讯易通电签POS支持电子签名功能，无需纸质单据，交易记录自动保存，大大提高商户工作效率',
    stats: '99.9%',
    unit: '交易成功率99.9%',
    icon: CreditCardIcon,
  },
  {
    title: '讯易通收款码',
    description: '提供静态和动态收款码，支持支付宝、微信支付等多种渠道，资金实时到账，费率优惠',
    stats: '24小时',
    unit: '快速结算',
    icon: QrCodeIcon,
  },
  {
    title: '讯易通移动POS',
    description: '讯易通移动POS便携式移动终端，支持蓝牙连接，随时随地收款，适合各类移动商户使用',
    stats: '1分钟',
    unit: '快速开户',
    icon: DevicePhoneMobileIcon,
  },
]

// 讯易通功能特色数据
const featureCards: FeatureCard[] = [
  {
    id: 1,
    name: '讯易通电签POS',
    description:
      '讯易通电签POS终端支持多种支付方式，包括银行卡、扫码支付、NFC等，满足不同商户的收款需求，操作简便，安全可靠',
    features: [
      '多渠道支付：银行卡、扫码、NFC',
      '高安全性：金融级加密，交易安全有保',
    ],
    icon: CreditCardIcon,
  },
  {
    id: 2,
    name: '讯易通移动POS',
    description:
      '讯易通移动POS便携式移动终端支持蓝牙连接，无需纸质单据，交易记录自动保存，大大提高商户工作效率，降低运营成本',
    features: ['蓝牙连接，便携移动', '交易记录自动保存，方便查询'],
    icon: DevicePhoneMobileIcon,
  },
  {
    id: 3,
    name: '讯易通收款码',
    description:
      '讯易通收款码支持支付宝、微信支付等多种支付渠道，一码多用，资金实时到账，商户后台管理便捷，对账清晰明了',
    features: ['多渠道收款，一码多用', '资金实时到账，后台管理便捷'],
    icon: QrCodeIcon,
  },
  {
    id: 4,
    name: '讯易通费率优惠',
    description:
      '讯易通提供优惠的POS机费率，支持多种交易类型，费率透明，无隐藏费用，为商户节省成本',
    features: ['优惠费率，透明无隐藏', '多种交易类型，灵活选择'],
    icon: BanknotesIcon,
  },
]

// 讯易通英雄区块组

// 讯易通产品优势展示组
function AdvantagesSection(): JSX.Element {
  const gradientColors = [
    'from-blue-600 to-blue-700',
    'from-blue-500 to-blue-600',
    'from-blue-400 to-blue-500',
    'from-blue-700 to-blue-800',
  ]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 mt-8">
      <Container>
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-blue-600 sm:mb-6 sm:text-3xl md:text-4xl">
            讯易通APP
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-12 bg-blue-600 sm:mb-6 sm:h-1 sm:w-16"></div>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
            专业支付服务提供商，助力商户提升收款效率
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <div
                key={advantage.title}
                className="group flex h-full transform flex-col overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-transparent p-6">
                  <div className="flex h-12 w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-md">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-sm leading-6 font-medium text-gray-900">
                    {advantage.title}
                  </div>
                </div>
                <div className="px-6 py-4 bg-transparent">
                  <div className="mb-4 flex items-baseline">
                    <span className="text-3xl font-bold text-blue-600 sm:text-5xl">{advantage.stats}</span>
                    <span className="ml-2 text-lg font-medium sm:text-xl">{advantage.unit}</span>
                  </div>
                  <p className="mb-4 text-sm leading-6 text-gray-700">
                    {advantage.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

// 讯易通核心功能展示组
function CoreFeaturesSection(): JSX.Element {
  const coreFeatures = [
    {
      name: '快捷商户管理',
      description:
        '可以查看代理拓展的商户，及时联系，维护个人商户信息。通过智能化的商户管理系统，帮助代理高效管理客户资源，提升服务质量和客户满意度',
      icon: BuildingStorefrontIcon,
      image: '/images/screenshots/Productdisplay.jpg',
      videoUrl: undefined,
      stats: [
        { label: '商户查看', value: '实时查看代理拓展的所有商户信息' },
        { label: '及时联系', value: '一键联系功能，快速沟通维护' },
        { label: '信息维护', value: '便捷维护个人商户详细信息' },
      ],
    },
    {
      name: '快捷机具管理',
      description:
        '可以管理代理从公司提货的机具，了解自己的未开通数据。全面掌握机具库存状态，优化资源配置，提高机具使用效率和管理水平',
      icon: ComputerDesktopIcon,
      image: '/images/screenshots/Productdisplay2.jpg',
      videoUrl: undefined,
      stats: [
        { label: '机具管理', value: '全面管理从公司提货的所有机具' },
        { label: '状态跟踪', value: '实时了解机具开通和使用状态' },
        { label: '库存优化', value: '智能分析未开通数据，优化配置' },
      ],
    },
    {
      name: '快捷业绩管理',
      description:
        '可以管理个人经营交易额，每日更新，了解自身业务发展情况。通过数据分析和可视化报表，帮助代理制定更好的业务策略，实现业绩持续增长',
      icon: ChartBarIcon,
      image: '/images/screenshots/Productdisplay3.jpg',
      videoUrl: undefined,
      stats: [
        { label: '交易管理', value: '实时管理个人经营交易额数据' },
        { label: '每日更新', value: '业绩数据每日自动更新统计' },
        { label: '发展分析', value: '深度分析业务发展趋势和机会' },
      ],
    },
    {
      name: '创业平台支持',
      description:
        '提供互联网时代小微创业者的经营平台，助力每一个不平凡的梦。通过完善的支持体系和专业的服务团队，为代理创业提供全方位保障',
      icon: UsersIcon,
      image: '/images/screenshots/wxpay.png',
      imageUrl: '/images/screenshots/讯易通支付.jpg',
      videoUrl: undefined,
      stats: [
        { label: '创业平台', value: '专为小微创业者打造的经营平台' },
        { label: '梦想助力', value: '全方位支持每一个创业梦想' },
        { label: '专业服务', value: '提供专业的创业指导和支持' },
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* 标题区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            讯易通APP核心功能
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            帮助代理管理经营业绩，管理自身数据的专业APP，提供互联网时代小微创业者的经营平台
          </p>
        </div>

        {/* 功能展示 */}
        <div className="mt-16">
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
                    <div className="flex h-10 w-10 items-center justify-center bg-blue-600" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
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
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                      下载APP
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
                          d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                        />
                      </svg>
                      成为代理
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
                      <div className="aspect-video overflow-hidden bg-gray-100" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
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
                      <div className="aspect-video overflow-hidden bg-gray-100" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                        <Image
                          src={feature.image}
                          alt={`${feature.name}功能演示`}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video overflow-hidden bg-gray-100 flex items-center justify-center" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                        <div className="text-center text-gray-500">
                          <div className="mx-auto mb-4 h-16 w-16 bg-gray-200 flex items-center justify-center" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
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
            style={{borderRadius: 'var(--border-radius-medium, 4px)'}}
          >
            探索更多功能
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}

// 讯易通演示区域组
function DemoSection(): JSX.Element {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            讯易通产品演示
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            体验讯易通支付产品的强大功能，了解如何为您的业务提供便捷的支付解决方案
          </p>
        </div>

        {/* 功能卡片网格 */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature) => (
              <div
                key={feature.id}
                className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none"
              >
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center bg-blue-600" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mb-4 text-sm text-gray-600">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, index) => (
                      <li key={index} className="flex items-start text-sm text-gray-600">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-100 bg-gray-50 px-6 py-3">
                  <Button
                    href="#"
                    variant="outline"
                    color="slate"
                    className="w-full text-sm"
                  >
                    了解详情
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部CTA区域 */}
        <div className="mt-16 text-center">
          <Button
            href="#"
            variant="solid"
            color="blue"
            className="px-8 py-3 text-base font-semibold"
          >
            立即办理讯易通POS机
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            或致电客服热线：400-888-8888
          </p>
        </div>
      </Container>
    </section>
  )
}

// 讯易通功能特色展示组
function FeaturesSection(): JSX.Element {
  return (
    <section id="features" className="relative bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            讯易通功能特色
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            全面的支付解决方案，满足不同行业商户的多样化需求
          </p>
        </div>

        {/* 功能展示 */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {featureCards.map((feature) => (
              <div
                key={feature.id}
                className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none"
              >
                <div className="p-6">
                  <div className="mb-4 flex items-center space-x-4">
                    <div className="flex h-12 w-12 items-center justify-center bg-blue-600" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="mb-4 text-gray-600">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.features.map((item, index) => (
                      <li key={index} className="flex items-start text-gray-600">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-gray-100 bg-gray-50 px-6 py-3">
                  <Button
                    href="#"
                    variant="outline"
                    color="slate"
                    className="w-full"
                  >
                    了解更多
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部CTA区域 */}
        <div className="mt-16 text-center">
          <Button
            href="#"
            variant="solid"
            color="blue"
            className="px-8 py-3 text-base font-semibold"
          >
            申请成为讯易通合作伙伴
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            享受更多优惠政策和技术支持
          </p>
        </div>
      </Container>
    </section>
  )
}

// 主页面组件
export default function HelibaoPage(): JSX.Element {
  return (
    <>
      <Header />
      <main className="pt-4 sm:pt-0">
        <Carousel />

        <AdvantagesSection />
        <CoreFeaturesSection />
        {/* 关注我们 */}
        <Followus />
        <DemoSection />
        <PaymentScenes />
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
