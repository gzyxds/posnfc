'use client'

import { JSX, useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  ChatBubbleLeftRightIcon,
  PaintBrushIcon,
  CpuChipIcon,
  GlobeAltIcon,
  BoltIcon,
  UserGroupIcon,
  PlayIcon,
  SpeakerWaveIcon,
  FaceSmileIcon,
  SparklesIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  TvIcon,
  VideoCameraIcon,
  PencilIcon,
  QrCodeIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { PaymentScenes } from '@/components/ai/AIscene'
import { Menu, MenuButton } from '@headlessui/react'
import Brand from '@/components/common/Brand'
import Followus from '@/components/common/Followus'

// 产品优势配置数据
interface Advantage {
  title: string
  description: string
  stats: string
  unit: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const advantages: Advantage[] = [
  {
    title: '交易处理能力',
    description: '银盛POS机支持银联、微信、支付宝等多种支付方式，交易处理快速稳定',
    stats: '99.9%',
    unit: '成功率',
    icon: BoltIcon,
  },
  {
    title: '商户覆盖范围',
    description: '服务全国各地商户，覆盖餐饮、零售、服务业等多个行业领域',
    stats: '500万+',
    unit: '商户',
    icon: UserGroupIcon,
  },
  {
    title: '资金安全保障',
    description: '银联认证，央行颁发支付牌照，资金安全有保障，T+1快速到账',
    stats: '100%',
    unit: '安全保障',
    icon: SparklesIcon,
  },
  {
    title: '设备激活时间',
    description: '在线申请，快速审核，设备激活简单便捷，即刻开始收款',
    stats: '5分钟',
    unit: '快速激活',
    icon: RocketLaunchIcon,
  },
]

// 应用场景配置数据
interface Scenario {
  id: string
  name: string
  description: string
  features: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  video: string
}

const scenarios: Scenario[] = [
  {
    id: 'retail-store',
    name: '零售门店',
    description: '适用于各类零售门店，支持多种支付方式收款',
    features: ['刷卡收款', '扫码支付', '会员管理'],
    icon: TvIcon,
    video: '/videos/retail-store.mp4',
  },
  {
    id: 'restaurant',
    name: '餐饮行业',
    description: '专为餐饮商户设计，支持快速结账和订单管理',
    features: ['快速结账', '订单管理', '营业报表'],
    icon: UserGroupIcon,
    video: '/videos/restaurant.mp4',
  },
  {
    id: 'service-industry',
    name: '服务行业',
    description: '美容美发、维修服务等行业的专业收款解决方案',
    features: ['预约管理', '服务记录', '客户档案'],
    icon: AcademicCapIcon,
    video: '/videos/service-industry.mp4',
  },
  {
    id: 'mobile-business',
    name: '移动商户',
    description: '外卖配送、上门服务等移动场景的便携收款',
    features: ['移动收款', '实时到账', '交易查询'],
    icon: MegaphoneIcon,
    video: '/videos/mobile-business.mp4',
  },
]

// Hero区域组件 - 数字人首页英雄区域
interface Feature {
  name: string
  href: string
}

interface Card {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

function HeroSection(): JSX.Element {
  // 产品特性标签配置
  const features: Feature[] = [
    { name: '电签POS', href: '/' },
    { name: '移动收款', href: '/' },
    { name: '刷脸支付', href: '/' },
    { name: '聚合支付', href: '/' },
  ]

  // 功能卡片配置 - 数字人核心特性
  const cards: Card[] = [
    {
      icon: CpuChipIcon,
      title: '安全支付',
      description: '数字人民币支付，安全可靠',
    },
    {
      icon: PaintBrushIcon,
      title: '便捷交易',
      description: '线上线下一体化，支付更便捷',
    },
    {
      icon: GlobeAltIcon,
      title: '场景全覆盖',
      description: '零售、餐饮、交通等全场景支持',
    },
    {
      icon: BoltIcon,
      title: '实时到账',
      description: '数字人民币实时到账，资金高效流转',
    },
  ]
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950">
      {/* 背景装饰效果 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 h-48 w-48 bg-[#0055ff]/8 opacity-40 blur-3xl sm:h-64 sm:w-64 md:h-80 md:w-80"></div>
        <div className="absolute bottom-1/4 left-1/4 h-32 w-32 bg-[#0055ff]/6 opacity-30 blur-3xl sm:h-48 sm:w-48 md:h-64 md:w-64"></div>
        <div className="absolute top-6 left-6 opacity-20 sm:top-8 sm:left-8 md:top-10 md:left-10">
          <div className="flex space-x-1 sm:space-x-2">
            <div className="h-1.5 w-1.5 rounded-sm bg-[#0055ff]/40 sm:h-2 sm:w-2"></div>
            <div className="h-1.5 w-1.5 rounded-sm bg-[#0055ff]/30 sm:h-2 sm:w-2"></div>
            <div className="h-1.5 w-1.5 rounded-sm bg-[#0055ff]/40 sm:h-2 sm:w-2"></div>
          </div>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-8 sm:gap-12 md:gap-16 lg:grid-cols-2 lg:gap-20">
          {/* 左侧内容区域 */}
          <div className="space-y-4 text-center sm:space-y-6 lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              {/* 品牌标识 */}
              <div className="mb-2 inline-flex items-center rounded-md border border-[#0055ff]/20 bg-[#0055ff]/10 px-3 py-1.5 text-xs font-medium text-[#0055ff] sm:px-4 sm:py-2 sm:text-sm" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                <BoltIcon className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                银盛支付官网
              </div>

              {/* 主标题 */}
              <h1 className="text-3xl leading-tight font-bold sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="mb-1 block bg-gradient-to-r from-[#0055ff] to-[#0066ff] bg-clip-text text-[#0055ff] sm:mb-2">
                  银盛支付官网
                </span>
                <span className="text-xl leading-tight font-semibold text-gray-900 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl dark:text-white">
                  专业POS机办理服务
                </span>
              </h1>
            </div>
            {/* 描述文本 */}
            <div className="space-y-2 sm:space-y-3">
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg lg:mx-0 dark:text-gray-300">
                银盛支付官网提供专业的银盛POS机办理服务，支持银盛电签版、移动收款、刷脸支付等多种收款方式，银联正规认证，资金安全有保障
              </p>
              <p className="mx-auto max-w-xl text-sm text-gray-500 sm:text-base lg:mx-0 dark:text-gray-400">
                覆盖各种收款方式 随心组合搭配
              </p>
            </div>

            {/* 特性标签 */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              {features.map((feature) => (
                <a
                  key={feature.name}
                  href={feature.href}
                  className="rounded-md border border-gray-200 bg-gray-50 px-2 py-1.5 text-xs font-medium text-gray-900 transition-all duration-200 hover:border-gray-300 hover:bg-gray-100 sm:px-3 sm:py-2 sm:text-sm" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}
                  aria-label={feature.name}
                >
                  {feature.name}
                </a>
              ))}
            </div>

{/* 按钮组 - 增强视觉效果和响应式 - 增大按钮尺寸 */}
            <div className="flex flex-col justify-center gap-4 pt-4 sm:flex-row sm:gap-6 lg:justify-start">
              <Button
                href="/demo"
                variant="solid"
                color="blue"
                className="group w-full px-8 py-4 text-lg font-semibold sm:w-auto"
              >
                <span>立即体验</span>
                <ChatBubbleLeftRightIcon
                  className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
              </Button>

              <Button
                href="#features"
                variant="outline"
                className="group w-full px-8 py-4 text-lg font-semibold sm:w-auto"
              >
                <span>了解更多</span>
                <ChevronRightIcon
                  className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1 sm:h-6 sm:w-6"
                  aria-hidden="true"
                />
              </Button>
            </div>
          </div>

          {/* 右侧展示区域 */}
          <div className="relative mt-8 sm:mt-10 lg:mt-0">
            <div className="absolute -inset-2 rounded-xl bg-gradient-to-r from-[#0055ff]/10 to-[#0066ff]/10 opacity-50 blur-xl sm:-inset-3 md:-inset-4"></div>
            <div className="group relative rounded-xl border border-gray-200/50 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md sm:p-6 md:p-8 lg:p-10 dark:border-gray-700/50 dark:bg-gray-800/80" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
              {/* 顶部标签区域 */}
              <div className="mb-6 flex flex-wrap gap-1.5 sm:mb-8 sm:gap-2 md:mb-10 md:gap-3">
                {features.slice(0, 4).map((feature, index) => (
                  <span
                    key={feature.name}
                    className="cursor-pointer rounded-md border border-[#0055ff]/20 bg-[#0055ff]/10 px-2 py-1.5 text-xs font-medium text-[#0055ff] transition-colors hover:bg-[#0055ff]/20 sm:px-3 sm:py-2 sm:text-sm md:px-4"
                    style={{ borderRadius: 'var(--border-radius-medium, 4px)', animationDelay: `${index * 0.1}s` }}
                  >
                    {feature.name}
                  </span>
                ))}
              </div>
              {/* 功能卡片网格 */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {cards.map((card, index) => (
                  <div
                    key={card.title}
                    className="group/card rounded-lg border border-gray-200/50 bg-gray-50/80 p-3 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0055ff]/30 hover:shadow-lg sm:p-4 md:p-5 lg:p-7 dark:border-gray-600/50 dark:bg-gray-700/50"
                    style={{ borderRadius: 'var(--border-radius-medium, 4px)', animationDelay: `${index * 0.1}s` }}
                  >
                    {/* 图标区域 */}
                    <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg border border-[#0055ff]/20 bg-gradient-to-br from-[#0055ff]/10 to-[#0066ff]/10 transition-all duration-300 group-hover/card:scale-110 group-hover/card:border-[#0055ff]/40 sm:mb-3 sm:h-10 sm:w-10 md:mb-5 md:h-12 md:w-12">
                      <card.icon
                        className="h-4 w-4 text-[#0055ff] transition-colors group-hover/card:text-[#0066ff] sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
                        aria-hidden="true"
                      />
                    </div>
                    {/* 内容区域 */}
                    <div className="space-y-1 sm:space-y-2 md:space-y-3">
                      <h4 className="text-xs leading-tight font-bold text-gray-900 sm:text-sm md:text-base lg:text-lg dark:text-white">
                        {card.title}
                      </h4>
                      <p className="text-xs leading-relaxed text-gray-600 sm:text-sm dark:text-gray-400">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
        {/* 标题区域 */}
        <div className="mb-12 text-center sm:mb-16 lg:mb-20">
          <h2 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl dark:text-white">
            产品优势
          </h2>
          <div className="mx-auto mb-4 h-0.5 w-12 bg-blue-600 sm:mb-6 sm:h-1 sm:w-16"></div>
          <p className="mx-auto max-w-2xl px-4 text-base leading-relaxed text-gray-600 sm:text-lg dark:text-gray-300">
            多维度产品优势，助力企业数字化升级
          </p>
        </div>
        {/* 产品优势卡片网格 */}
        <div className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:gap-8 sm:px-0 lg:grid-cols-4">
          {advantages.map((advantage, index) => {
            return (
              <div
                key={advantage.title}
                className="group overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none"
              >
                {/* 数据展示区域 */}
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
                {/* 内容区域 */}
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


// 应用场景展示组件
function ScenariosSection(): JSX.Element {
  const [activeScenario, setActiveScenario] = useState<keyof typeof scenarioData>('digitalPayment')

  // 场景数据配置
  const scenarioData = {
    digitalPayment: {
      title: '数字人民币支付',
      subtitle: '新支付时代',
      description:
        '数字人民币支付布设简单，体验良好，开启收款新方式，让支付更便捷高效。',
      features: [
        { name: '布设简单', desc: '快速部署上线' },
        { name: '体验良好', desc: '用户操作便捷' },
        { name: '收款新方式', desc: '多元化支付选择' },
      ],
      imageUrl: '/images/screenshots/Productdisplay.jpg',
      icon: VideoCameraIcon,
      tagText: '数字人民币',
      tagDesc: '新支付时代',
    },
    facePayment: {
      title: '刷脸支付',
      subtitle: '升级体验',
      description:
        '刷脸即支付，升级付款体验，提升经营效率，让收款更加智能便捷。',
      features: [
        { name: '刷脸即付', desc: '无需手机操作' },
        { name: '升级体验', desc: '科技感十足' },
        { name: '提升效率', desc: '加快收款速度' },
      ],
      imageUrl: '/images/screenshots/Productdisplay2.jpg',
      icon: UserGroupIcon,
      tagText: '刷脸支付',
      tagDesc: '智能收款方式',
    },
    qrPayment: {
      title: '扫码支付',
      subtitle: '主流支付',
      description:
        '支持微信、支付宝等主流扫码支付，高效稳定收款，覆盖更多用户群体。',
      features: [
        { name: '微信支付', desc: '覆盖广泛用户' },
        { name: '支付宝', desc: '便民支付首选' },
        { name: '高效稳定', desc: '收款无忧' },
      ],
      imageUrl: '/images/screenshots/Productdisplay3.jpg',
      icon: PencilIcon,
      tagText: '扫码支付',
      tagDesc: '主流支付方式',
    },
    nfcPayment: {
      title: 'NFC支付',
      subtitle: '便捷支付',
      description:
        '支持Apple Pay、HUAWEI Pay、云闪付等NFC支付，银行卡支付芯片/磁条卡、贷记/借记卡全都可以受理。',
      features: [
        { name: 'Apple Pay', desc: 'iOS用户首选' },
        { name: 'HUAWEI Pay', desc: '华为生态支付' },
        { name: '云闪付', desc: '银联官方应用' },
      ],
      imageUrl: '/images/screenshots/Productdisplay4.jpg',
      icon: TvIcon,
      tagText: 'NFC支付',
      tagDesc: '近场支付技术',
    },
  }

  const currentScenario = scenarioData[activeScenario]

  return (
    <section className="bg-white py-20">
      <Container>
        {/* 标题区域 - 参考demo页面设计 */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center rounded-full bg-blue-50 px-4 py-2" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
            <span className="mr-2 h-2 w-2 rounded-full bg-blue-600"></span>
            <span className="text-sm font-medium text-blue-700">场景应用</span>
          </div>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900">
            应用场景
          </h2>
          <div className="mx-auto mb-6 h-0.5 w-20 bg-blue-600"></div>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600">
            丰富的应用场景和解决方案，满足多种业务需求
          </p>
        </div>

        {/* 场景标签导航 - 现代化简约风格 - 全屏显示 */}
        <div className="mb-16">
          <div className="scrollbar-hide flex w-full overflow-x-auto bg-gray-50 p-1.5 shadow-sm" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
            <button
              className={`relative flex-1 px-4 py-2 font-medium whitespace-nowrap transition-all duration-300 sm:px-6 sm:py-3 ${
                activeScenario === 'digitalPayment'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-white hover:text-gray-900'
              }`}
              onClick={() => setActiveScenario('digitalPayment')}
            >
              <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                <VideoCameraIcon className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                数字人民币
              </span>
              {activeScenario === 'digitalPayment' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              )}
            </button>
            <button
              className={`relative flex-1 px-4 py-2 font-medium whitespace-nowrap transition-all duration-300 sm:px-6 sm:py-3 ${
                activeScenario === 'facePayment'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-white hover:text-gray-900'
              }`}
              onClick={() => setActiveScenario('facePayment')}
            >
              <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                <UserGroupIcon className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                刷脸支付
              </span>
              {activeScenario === 'facePayment' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              )}
            </button>
            <button
              className={`relative flex-1 px-4 py-2 font-medium whitespace-nowrap transition-all duration-300 sm:px-6 sm:py-3 ${
                activeScenario === 'qrPayment'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-white hover:text-gray-900'
              }`}
              onClick={() => setActiveScenario('qrPayment')}
            >
              <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                <PencilIcon className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                扫码支付
              </span>
              {activeScenario === 'qrPayment' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              )}
            </button>
            <button
              className={`relative flex-1 px-4 py-2 font-medium whitespace-nowrap transition-all duration-300 sm:px-6 sm:py-3 ${
                activeScenario === 'nfcPayment'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-white hover:text-gray-900'
              }`}
              onClick={() => setActiveScenario('nfcPayment')}
            >
              <span className="relative z-10 flex items-center justify-center text-sm sm:text-base">
                <TvIcon className="mr-1 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
                NFC支付
              </span>
              {activeScenario === 'nfcPayment' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              )}
            </button>
          </div>
        </div>

        {/* 场景内容 - 参考demo页面的左右布局 */}
        <div className="grid items-center gap-8 px-4 sm:gap-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          {/* 左侧内容 */}
          <div
            className={`space-y-8 ${
              activeScenario === 'facePayment' ? 'order-2 lg:order-1' : ''
            }`}
          >
            <div>
              <div className="mb-4 inline-flex items-center rounded-full bg-blue-50 px-3 py-1" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                <span className="text-xs font-medium text-blue-600">
                  {currentScenario.subtitle}
                </span>
              </div>
              <h3 className="mb-3 text-2xl font-bold text-gray-900 sm:mb-4 sm:text-3xl">
                {currentScenario.title}
              </h3>
              <p className="text-base leading-relaxed text-gray-600 sm:text-lg">
                {currentScenario.description}
              </p>
            </div>

            {/* 功能特性 - 简洁样式 */}
            <div className="space-y-3">
              {currentScenario.features.map(
                (feature: { name: string; desc: string }, index: number) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></div>
                    <div>
                      <span className="font-medium text-gray-900">
                        {feature.name}
                      </span>
                      <span className="ml-2 text-gray-500">
                        - {feature.desc}
                      </span>
                    </div>
                  </div>
                ),
              )}
            </div>

            {/* 按钮组 - 优化移动端按钮大小 */}
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button
                className="flex h-auto min-h-[44px] items-center justify-center rounded-none bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-200 hover:bg-blue-700 sm:min-h-[48px] sm:px-8 sm:py-3 sm:text-base"
                onClick={() => (window.location.href = '/demo')}
              >
                <PlayIcon className="mr-2 h-4 w-4" />
                立即试用
              </Button>
              <Button
                variant="outline"
                className="flex h-auto min-h-[44px] items-center justify-center rounded-none border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:min-h-[48px] sm:px-8 sm:py-3 sm:text-base"
                href="#"
              >
                <UserGroupIcon className="mr-2 h-4 w-4" />
                购买授权
              </Button>
            </div>
          </div>

          {/* 右侧图片 */}
          <div
            className={`relative ${
              activeScenario === 'facePayment' ? 'order-1 lg:order-2' : ''
            }`}
          >
            <div className="rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:rounded-3xl sm:p-8" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
              <Image
                src={currentScenario.imageUrl}
                alt={currentScenario.title}
                width={600}
                height={400}
                className="w-full rounded-2xl shadow-lg object-cover"
                unoptimized
              />
            </div>
            {/* 悬浮标签 */}
            <div
              className={`absolute rounded-2xl border border-gray-100 bg-white p-4 shadow-lg ${
                activeScenario === 'facePayment'
                  ? '-top-4 -left-4'
                  : '-top-4 -right-4'
              }`}
              style={{borderRadius: 'var(--border-radius-medium, 4px)'}}
            >
              <div className="flex items-center space-x-3">
                <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl bg-blue-50" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                  <currentScenario.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {currentScenario.tagText}
                  </p>
                  <p className="text-sm text-gray-500">
                    {currentScenario.tagDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 核心功能数据接口定义
 * @interface CoreFeature
 * @property {string} name - 功能名称
 * @property {string} description - 功能描述
 * @property {React.ComponentType} icon - 功能图标组件
 * @property {string} image - 功能展示图片
 * @property {string} [videoUrl] - 可选的视频地址
 * @property {Array} stats - 功能统计数据
 */
interface CoreFeature {
  name: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  image: string
  videoUrl?: string
  stats: {
    label: string
    value: string
  }[]
}

/**
 * 核心功能展示组件 - 简洁版设计
 * 展示银盛支付产品的核心功能和特性，采用简洁清晰的设计风格
 * 特点：简洁布局、清晰层次、易于阅读
 */
function CoreFeaturesSection(): JSX.Element {
  // 核心功能数据配置
  const coreFeatures: CoreFeature[] = [
    {
      name: '银盛电签版',
      description:
        '银盛电签版POS机，支持银联、微信、支付宝等多种支付方式，交易安全快捷，适合各类商户使用！',
      icon: BoltIcon,
      image: '/images/screenshots/Productdisplay5.jpg',
      stats: [
        { label: '交易成功率', value: '99.9%稳定处理' },
        { label: '激活速度', value: '5分钟快速激活' },
        { label: '支付方式', value: '多种支付全覆盖' },
      ],
    },
    {
      name: '移动收款',
      description:
        '随时随地收款无忧！支持刷卡、扫码、NFC等多种收款方式，让您的生意不受地点限制！',
      icon: UserGroupIcon,
      image: '/images/screenshots/Productdisplay6.jpg',
      stats: [
        { label: '便携性', value: '轻便易携带' },
        { label: '续航能力', value: '长时间使用' },
        { label: '网络支持', value: '4G/WiFi双网络' },
      ],
    },
    {
      name: '商户管理',
      description:
        '完善的商户管理系统，实时查看交易数据、营业报表，帮助商户更好地管理生意。',
      icon: AcademicCapIcon,
      image: '/images/screenshots/Productdisplay7.jpg',
      stats: [
        { label: '数据统计', value: '实时交易数据' },
        { label: '报表分析', value: '多维度分析' },
        { label: '账户管理', value: '完善的账户体系' },
      ],
    },
    {
      name: '银盛智能POS',
      description:
        '银盛智能POS终端，集收款、会员管理、库存管理于一体，助力商户数字化经营升级。',
      icon: SparklesIcon,
      image: '/images/screenshots/Productdisplay8.jpg',
      stats: [
        { label: '功能集成', value: '多功能一体化' },
        { label: '操作简便', value: '简单易用界面' },
        { label: '数据同步', value: '云端数据同步' },
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
            专业的银盛POS机产品线，为您提供全方位的收款解决方案
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
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
                      银盛代理商
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
                      <div className="aspect-video overflow-hidden rounded-lg bg-gray-100" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                        <video
                          src={feature.videoUrl}
                          controls
                          autoPlay
                          muted
                          loop
                          className="h-full w-full object-cover"
                        >
                          您的浏览器不支持视频播放。
                        </video>
                      </div>
                    ) : (
                      <div className="aspect-video overflow-hidden rounded-lg bg-gray-100" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                        <Image
                          src={feature.image}
                          alt={`${feature.name}功能演示`}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover"
                        />
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
            className="inline-flex items-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}
          >
            探索更多功能
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}

// 银盛页面主组件
export default function YsPage(): JSX.Element {
  return (
    <>
      <Header />
      <main className="pt-10 sm:pt-0">
        <HeroSection />
        <AdvantagesSection />
        <ScenariosSection />
        <CoreFeaturesSection />
        {/* 关注我们 */}
        <Followus />
        <PaymentScenes />
        <Brand /> {/* 品牌底部组件 */}
      </main>
      <Footer />
    </>
  )
}
