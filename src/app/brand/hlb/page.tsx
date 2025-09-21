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
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import Brand from '@/components/common/Brand'

// ==================== 页面SEO元数据配====================
export const metadata: Metadata = {
  title: '合利宝POS机官网办理中心｜合利宝支付移动收款免费申请＋0.38%费率秒到',
  description:
    '合利宝（央行支付牌照一清机）官网免费申请移动POS、电签POS及聚合收款码，费率0.38%永不+3，支持微信、支付宝、信用卡、数字人民币全渠道，激活返99元，T+0秒到账，个人/商户1证办理，顺丰包邮当天发货，提供合利宝APP下载、代理加盟、售后客服等一站式支付解决方案',
  keywords: [
    '合利宝POS',
    '合利宝支付',
    '合利宝官网',
    '合利宝POS机办理',
    '合利宝移动POS',
    '合利宝收款码',
    '合利宝代理加盟',
    '合利宝费率',
    '合利宝下载',
    '合利宝客服',
    '合利宝刷卡不到账',
    '合利宝总部直签',
    '一清POS',
    '0.38%费率',
    '激活返99'
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
// 合利宝产品优势数据
const advantages: Advantage[] = [
  {
    title: '合利宝支付牌照',
    description: '合利宝持有央行颁发的支付业务许可证，合法合规经营，为商户提供安全可靠的服务',
    stats: '100%',
    unit: '合规保障',
    icon: ShieldCheckIcon,
  },
  {
    title: '合利宝电签POS',
    description: '合利宝电签POS支持电子签名功能，无需纸质单据，交易记录自动保存，大大提高商户工作效率',
    stats: '99.9%',
    unit: '交易成功率99.9%',
    icon: CreditCardIcon,
  },
  {
    title: '合利宝收款码',
    description: '提供静态和动态收款码，支持支付宝、微信支付等多种渠道，资金实时到账，费率优惠',
    stats: '24小时',
    unit: '快速结算',
    icon: QrCodeIcon,
  },
  {
    title: '合利宝移动POS',
    description: '合利宝移动POS便携式移动终端，支持蓝牙连接，随时随地收款，适合各类移动商户使用',
    stats: '1分钟',
    unit: '快速开户',
    icon: DevicePhoneMobileIcon,
  },
]

// 合利宝功能特色数据
const featureCards: FeatureCard[] = [
  {
    id: 1,
    name: '合利宝电签POS',
    description:
      '合利宝电签POS终端支持多种支付方式，包括银行卡、扫码支付、NFC等，满足不同商户的收款需求，操作简便，安全可靠',
    features: [
      '多渠道支付：银行卡、扫码、NFC',
      '高安全性：金融级加密，交易安全有保',
    ],
    icon: CreditCardIcon,
  },
  {
    id: 2,
    name: '合利宝移动POS',
    description:
      '合利宝移动POS便携式移动终端支持蓝牙连接，无需纸质单据，交易记录自动保存，大大提高商户工作效率，降低运营成本',
    features: ['蓝牙连接，便携移动', '交易记录自动保存，方便查询'],
    icon: DevicePhoneMobileIcon,
  },
  {
    id: 3,
    name: '合利宝收款码',
    description:
      '合利宝收款码支持支付宝、微信支付等多种支付渠道，一码多用，资金实时到账，商户后台管理便捷，对账清晰明了',
    features: ['多渠道收款，一码多用', '资金实时到账，后台管理便捷'],
    icon: QrCodeIcon,
  },
  {
    id: 4,
    name: '合利宝费率优惠',
    description:
      '合利宝提供优惠的POS机费率，支持多种交易类型，费率透明，无隐藏费用，为商户节省成本',
    features: ['优惠费率，透明无隐藏', '多种交易类型，灵活选择'],
    icon: BanknotesIcon,
  },
]

// 合利宝英雄区块组
function HeroSection(): JSX.Element {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* 几何背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-blob absolute -top-20 -right-20 h-40 w-40 rounded-full bg-blue-400 opacity-20 mix-blend-multiply blur-xl filter sm:-top-40 sm:-right-40 sm:h-80 sm:w-80"></div>
        <div className="animate-blob animation-delay-2000 absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-purple-400 opacity-20 mix-blend-multiply blur-xl filter sm:-bottom-40 sm:-left-40 sm:h-80 sm:w-80"></div>
        <div className="animate-blob animation-delay-4000 absolute top-1/2 left-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-indigo-400 opacity-20 mix-blend-multiply blur-xl filter sm:h-80 sm:w-80"></div>
      </div>

      {/* 动态渐变背*/}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-transparent to-indigo-600/5"></div>
        <div className="absolute inset-0 animate-pulse bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      </div>

      {/* 响应式容器 */}
      <Container className="relative z-10 pt-16 pb-12 sm:pt-24 sm:pb-20 lg:pt-28">
        {/* 状态标记 */}
        <div className="mb-4 flex justify-center sm:mb-8">
          <div className="inline-flex items-center gap-1.5 border border-blue-100 bg-white/80 px-3 py-1.5 backdrop-blur-sm" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
            <div className="h-1.5 w-1.5 animate-pulse bg-green-400"></div>
            <span className="text-xs font-medium text-gray-700 sm:text-sm">
              合利宝支付服务正常运行中
            </span>
          </div>
        </div>

        <div className="grid items-center gap-6 lg:grid-cols-2 lg:gap-12">
          {/* 左侧内容 */}
          <div className="space-y-4 text-center sm:space-y-8 lg:text-left">
            {/* 主标题 */}
            <div className="space-y-3 sm:space-y-6">
              <h1 className="text-2xl leading-tight font-bold text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="block">专业支付</span>
                <span className="block bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  合利宝移动POS
                </span>
                <span className="block">支付解决方案</span>
              </h1>
              <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-600 sm:text-lg lg:mx-0 lg:text-xl">
                合利宝支付拥有央行颁发的支付业务许可证，提供移动POS、电签POS、收款码等多种支付方式，为商户提供安全便捷的支付解决方案
              </p>
            </div>

            {/* 核心功能标签 */}
            <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-2 sm:gap-4 lg:mx-0 lg:justify-start">
              {[
                { name: '移动POS', time: '24/7', icon: DevicePhoneMobileIcon },
                { name: '电签POS', time: '5min', icon: CreditCardIcon },
                { name: '收款码', time: '<3s', icon: QrCodeIcon },
                { name: '支付牌照', time: '合法', icon: ShieldCheckIcon },
              ].map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div
                    key={index}
                    className="group inline-flex touch-manipulation items-center gap-2 border border-gray-200 bg-white/90 px-3 py-2.5 backdrop-blur-sm transition-all duration-200 hover:bg-white hover:shadow-sm"
                    style={{borderRadius: 'var(--border-radius-medium, 4px)'}}
                  >
                    <Icon className="h-4 w-4 text-gray-600 transition-colors group-hover:text-blue-600 sm:h-5 sm:w-5" />
                    <span className="text-sm font-medium text-gray-800 sm:text-base">
                      {feature.name}
                    </span>
                    <span className="rounded bg-blue-50 px-2 py-0.5 font-mono text-xs text-blue-600 sm:text-sm">
                      {feature.time}
                    </span>
                  </div>
                )
              })}
            </div>

            {/* 行动按钮 */}
            <div className="flex flex-col justify-center gap-2.5 px-4 sm:flex-row sm:gap-4 lg:justify-start">
              <Button
                href="#demo"
                variant="solid"
                color="blue"
                className="min-h-[44px] touch-manipulation px-5 py-2.5 text-sm font-semibold sm:px-8 sm:py-4 sm:rounded-xl"
              >
                立即办理
              </Button>
              <Button
                href="https://v.cnai.art"
                target="_blank"
                variant="outline"
                color="slate"
                className="min-h-[44px] touch-manipulation px-5 py-2.5 text-sm font-semibold sm:px-8 sm:py-4"
              >
                联系合利宝POS机客服
              </Button>
            </div>

            {/* 实时数据展示 */}
            <div className="flex justify-center gap-4 sm:gap-8 lg:justify-start">
              <div className="text-center">
                <div className="mb-0.5 text-xl font-bold text-blue-600 sm:text-3xl">100</div>
                <div className="text-xs text-gray-600 sm:text-sm">商户用户</div>
              </div>
              <div className="text-center">
                <div className="mb-0.5 text-xl font-bold text-blue-600 sm:text-3xl">99.9%</div>
                <div className="text-xs text-gray-600 sm:text-sm">交易成功率99.9%</div>
              </div>
              <div className="text-center">
                <div className="mb-0.5 text-xl font-bold text-blue-600 sm:text-3xl">&lt;3秒</div>
                <div className="text-xs text-gray-600 sm:text-sm">到账速度</div>
              </div>
            </div>
          </div>

          {/* 右侧展示*/}
          <div className="relative mx-2 mt-6 sm:mx-0 lg:mt-0">
            <div className="relative">
              {/* 展示卡片 */}
              <div className="relative min-h-[320px] border border-gray-100 bg-gradient-to-br from-white to-gray-50 p-3 transition-all duration-300 sm:min-h-[460px] sm:p-6" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                {/* 顶部状态栏 */}
                <div className="mb-3 flex items-center justify-between sm:mb-6">
                  <div className="flex items-center gap-1.5 sm:gap-3">
                    <div className="flex h-6 w-6 items-center justify-center bg-blue-600 sm:h-9 sm:w-9" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                      <CreditCardIcon className="h-3 w-3 text-white sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-gray-900 sm:text-base">合利宝支付系统</h3>
                      <p className="text-[10px] text-gray-500 sm:text-sm">移动POS · 电签POS · 收款码</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="h-1 w-1 animate-pulse bg-green-400 sm:h-2 sm:w-2"></div>
                    <span className="text-[10px] text-gray-600 sm:text-sm">运行中</span>
                  </div>
                </div>

                {/* 对话展示 */}
                <div className="mb-3 min-h-[140px] border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-2.5 sm:mb-6 sm:min-h-[220px] sm:p-5" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                  <div className="space-y-2.5 sm:space-y-5">
                    {/* 系统消息 */}
                    <div className="animate-fade-in flex items-start gap-1.5 sm:gap-3">
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center border border-blue-700 bg-blue-600 sm:h-8 sm:w-8" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                        <CreditCardIcon className="h-2.5 w-2.5 text-white sm:h-4 sm:w-4" />
                      </div>
                      <div className="max-w-[calc(100%-2.5rem)] border border-gray-200 bg-white p-2 sm:max-w-xs sm:p-3.5" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                        <p className="text-[10px] leading-relaxed text-gray-800 sm:text-sm">
                          您好！欢迎使用合利宝支付系统，我们提供移动POS、电签POS、收款码等多种支付解决方案
                        </p>
                      </div>
                    </div>

                    {/* 用户消息 */}
                    <div className="animate-fade-in animation-delay-300 flex items-start justify-end gap-1.5 sm:gap-3">
                      <div className="max-w-[calc(100%-2.5rem)] border border-blue-700 bg-blue-600 p-2 sm:max-w-xs sm:p-3.5" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                        <p className="text-[10px] leading-relaxed text-white sm:text-sm">
                          我需要为我的零售店办理一台合利宝移动POS
                        </p>
                      </div>
                      <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center border border-gray-800 bg-gray-700 sm:h-8 sm:w-8" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                        <UsersIcon className="h-2.5 w-2.5 text-white sm:h-4 sm:w-4" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* 功能展示 */}
                <div className="grid grid-cols-3 gap-1.5 sm:gap-3">
                  <div className="group touch-manipulation border border-blue-700 bg-gradient-to-br from-blue-500 to-blue-600 p-2 text-white transition-all duration-300 sm:p-3.5" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                    <DevicePhoneMobileIcon className="mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5" />
                    <h4 className="mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">移动POS</h4>
                    <p className="hidden text-[9px] text-blue-100 opacity-80 sm:block sm:text-xs">便携移动终端</p>
                  </div>

                  <div className="group touch-manipulation border border-indigo-700 bg-gradient-to-br from-indigo-500 to-indigo-600 p-2 text-white transition-all duration-300 sm:p-3.5" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                    <CreditCardIcon className="mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5" />
                    <h4 className="mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">电签POS</h4>
                    <p className="hidden text-[9px] text-indigo-100 opacity-80 sm:block sm:text-xs">电子签名终端</p>
                  </div>

                  <div className="group touch-manipulation border border-purple-700 bg-gradient-to-br from-purple-500 to-purple-600 p-2 text-white transition-all duration-300 sm:p-3.5" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                    <QrCodeIcon className="mb-1 h-3 w-3 transition-transform duration-300 group-hover:scale-110 sm:mb-2.5 sm:h-5 sm:w-5" />
                    <h4 className="mb-0.5 text-[10px] font-medium sm:mb-1.5 sm:text-sm">收款码</h4>
                    <p className="hidden text-[9px] text-purple-100 opacity-80 sm:block sm:text-xs">扫码支付</p>
                  </div>
                </div>
              </div>

              {/* 装饰浮动元素 */}
              <div className="animate-float absolute -top-1.5 -right-1.5 transform border border-gray-200 bg-white p-1.5 transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:-top-3 sm:-right-3 sm:p-3" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                <div className="flex items-center justify-center gap-0.5 sm:gap-2">
                  <svg className="h-2.5 w-2.5 text-blue-600 sm:h-4 sm:w-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-[9px] font-medium whitespace-nowrap text-transparent sm:text-sm">
                    安全支付
                  </span>
                </div>
              </div>
              <div className="animate-float animation-delay-2000 absolute -bottom-1.5 -left-1.5 transform border border-gray-200 bg-white p-1.5 transition-all duration-300 hover:-translate-y-1 hover:scale-105 sm:-bottom-3 sm:-left-3 sm:p-3">
                <div className="flex items-center justify-center gap-0.5 sm:gap-2">
                  <ShieldCheckIcon className="h-2.5 w-2.5 text-black sm:h-4 sm:w-4" />
                  <span className="text-[8px] font-medium whitespace-nowrap text-black sm:text-sm">
                    央行颁发支付牌照
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 技术优势展示 */}
        <div className="mt-12 sm:mt-20">
          <div className="mb-6 text-center">
            <h3 className="mb-1.5 text-base font-semibold text-gray-900 sm:text-xl">核心支付优势</h3>
            <p className="px-4 text-xs text-gray-600 sm:text-sm">基于央行支付牌照，为商户提供安全可靠的支付解决方案</p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {[
              { name: '支付安全', desc: '安全' },
              { name: '快速到账服务', desc: '高效' },
              { name: '多种支付', desc: '便捷' },
              { name: '合法合规', desc: '合规' },
              { name: '专业服务', desc: '专业' },
            ].map((tech, index) => (
              <div
                key={index}
                className="group cursor-pointer touch-manipulation border border-gray-200 bg-white/80 p-3 text-center backdrop-blur-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50"
                style={{borderRadius: 'var(--border-radius-medium, 4px)'}}
              >
                <div className="mb-0.5 font-mono text-[10px] font-semibold text-blue-600 group-hover:text-blue-700 sm:text-xs">
                  {tech.desc}
                </div>
                <div className="text-xs font-medium text-gray-700 group-hover:text-gray-900 sm:text-sm">
                  {tech.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>

      {/* 自定义CSS动画样式 */}
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
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .touch-manipulation {
            touch-action: manipulation;
          }
          @media (max-width: 640px) {
            .animate-float {
              animation-duration: 4s;
            }
            .animate-blob {
              animation-duration: 8s;
            }
          }
        `,
        }}
      />
    </section>
  )
}

// 合利宝产品优势展示组
function AdvantagesSection(): JSX.Element {
  const gradientColors = [
    'from-blue-600 to-blue-700',
    'from-blue-500 to-blue-600',
    'from-blue-400 to-blue-500',
    'from-blue-700 to-blue-800',
  ]

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl">
            合利宝POS机优势
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
                className="group overflow-hidden border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-gray-300"
                style={{borderRadius: 'var(--border-radius-medium, 4px)'}}
              >
                <div className={`bg-gradient-to-br ${gradientColors[index % 4]} relative overflow-hidden p-6 text-white sm:p-8`}>
                  <div className="absolute top-0 right-0 h-16 w-16 translate-x-8 -translate-y-8 bg-white/10 sm:h-24 sm:w-24 sm:translate-x-12 sm:-translate-y-12"></div>
                  <div className="relative z-10">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center bg-white/20" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                      <IconComponent className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="mb-2 text-sm font-semibold opacity-90 sm:mb-3 sm:text-lg">
                      {advantage.title}
                    </h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl font-bold sm:text-5xl">{advantage.stats}</span>
                      <span className="ml-2 text-lg font-medium sm:text-xl">{advantage.unit}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
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

// 合利宝核心功能展示组
function CoreFeaturesSection(): JSX.Element {
  const coreFeatures = [
    {
      name: '合利宝移动POS',
      description:
        '合利宝移动POS终端支持多种支付方式，包括银行卡、扫码支付、NFC等，满足不同商户的收款需求，操作简便，安全可靠',
      icon: DevicePhoneMobileIcon,
      image: '/images/screenshots/Productdisplay.jpg',
      videoUrl: undefined,
      stats: [
        { label: '多渠道支付', value: '支持银行卡、扫码、NFC等多种支付方式' },
        { label: '高安全性', value: '金融级加密，交易安全有保' },
        { label: '便携移动', value: '小巧便携，随时随地收款' },
      ],
    },
    {
      name: '合利宝电签POS',
      description:
        '合利宝电签POS支持电子签名功能，无需纸质单据，交易记录自动保存，大大提高商户工作效率，降低运营成本',
      icon: CreditCardIcon,
      image: '/images/screenshots/Productdisplay2.jpg',
      videoUrl: undefined,
      stats: [
        { label: '电子签名', value: '无需纸质单据，环保高效' },
        { label: '自动保存', value: '交易记录自动保存，方便查询' },
        { label: '降低成本', value: '减少纸张使用，降低运营成本' },
      ],
    },
    {
      name: '合利宝收款码',
      description:
        '合利宝收款码支持支付宝、微信支付等多种支付渠道，一码多用，资金实时到账，商户后台管理便捷，对账清晰明了',
      icon: QrCodeIcon,
      image: '/images/screenshots/Productdisplay3.jpg',
      videoUrl: undefined,
      stats: [
        { label: '多渠道收款', value: '支持支付宝、微信支付等多种渠道' },
        { label: '一码多用', value: '一个收款码支持多种支付方式' },
        { label: '实时到账', value: '资金快速到账，提高资金周转率' },
      ],
    },
    {
      name: '合利宝支付牌照',
      description:
        '合利宝支付持有央行颁发的支付业务许可证，合法合规经营，为商户提供安全可靠的支付服务，资金安全保障，合规经营无忧',
      icon: ShieldCheckIcon,
      image: '/images/product/leshua.png',
      imageUrl: '/images/screenshots/合利宝支付.jpg',
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
            合利宝支付核心功能
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            强大的支付技术能力，为您提供全方位的支付解决方案
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

// 合利宝演示区域组
function DemoSection(): JSX.Element {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            合利宝产品演示
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            体验合利宝支付产品的强大功能，了解如何为您的业务提供便捷的支付解决方案
          </p>
        </div>

        {/* 功能卡片网格 */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featureCards.map((feature) => (
              <div
                key={feature.id}
                className="overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
                style={{borderRadius: 'var(--border-radius-medium, 4px)'}}
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
            立即办理合利宝POS机
          </Button>
          <p className="mt-4 text-sm text-gray-600">
            或致电客服热线：400-888-8888
          </p>
        </div>
      </Container>
    </section>
  )
}

// 合利宝功能特色展示组
function FeaturesSection(): JSX.Element {
  return (
    <section id="features" className="relative bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            合利宝功能特色
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
                className="overflow-hidden border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md"
                style={{borderRadius: 'var(--border-radius-medium, 4px)'}}
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
            申请成为合利宝合作伙伴
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
        <HeroSection />
        <Aisd />
        <AdvantagesSection />
        <CoreFeaturesSection />
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
