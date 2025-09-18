'use client'
import { useState } from 'react'
import Image from 'next/image'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  CloudArrowUpIcon,
  CpuChipIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  TrophyIcon,
  ShoppingBagIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CreditCardIcon,
  GiftIcon,
  TagIcon,
  UsersIcon,
  StarIcon,
  PlayIcon,
  ShareIcon,
  ScissorsIcon,
  BoltIcon,
  TicketIcon,
  TruckIcon,
  ArrowPathIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { VideoCarousel } from '@/components/carousel/VideoCarousel'
import { ProductsSection } from '@/components/common/ecshop'

/**
 * 电商支付功能标签页数据
 * 包含六个核心功能分类：在线支付、移动支付、聚合收款、支付安全、数据分析、技术集成
 */
const ecommerceFeatures = {
  store: {
    id: 'store',
    name: '在线支付',
    icon: BuildingOfficeIcon,
    title: '全方位在线支付让交易更安全',
    description: '提供完整的在线支付解决方案，助力电商平台高效收款',
    features: [
      { name: '网银支付', desc: '支持各大银行网银，安全便捷支付' },
      { name: '快捷支付', desc: '绑卡快捷支付，提升用户体验' },
      { name: '代扣支付', desc: '自动扣款服务，提升支付成功率' },
    ],
    model: '在线支付系统',
    image: '/images/product/Carousel4.png',
  },
  marketing: {
    id: 'marketing',
    name: '移动支付',
    icon: GiftIcon,
    title: '多样化移动支付助力销量增长',
    description: '丰富的移动支付方式，帮助电商快速收款转化',
    features: [
      { name: '扫码支付', desc: '微信支付宝扫码，快速完成支付' },
      { name: 'NFC支付', desc: '近场支付技术，提升支付体验' },
      { name: 'APP支付', desc: '原生APP支付，无缝集成体验' },
    ],
    model: '移动支付引擎',
    image: '/images/product/Carousel5.png',
  },
  member: {
    id: 'member',
    name: '聚合收款',
    icon: UsersIcon,
    title: '完善的聚合收款体系',
    description: '构建多渠道收款闭环，实现支付方式全覆盖',
    features: [
      { name: '多渠道聚合', desc: '整合各大支付渠道，一站式接入' },
      { name: '智能路由', desc: '智能选择最优支付通道' },
      { name: '风控系统', desc: '实时风险监控，保障资金安全' },
    ],
    model: '聚合收款系统',
    image: '/images/product/Carousel6.png',
  },
  analytics: {
    id: 'analytics',
    name: '支付数据',
    icon: ChartBarIcon,
    title: '智能支付数据分析驱动决策',
    description: '全维度支付数据统计分析，洞察交易增长趋势',
    features: [
      { name: '交易报表', desc: '实时交易数据，掌握收款状况' },
      { name: '用户分析', desc: '深度支付行为分析，优化支付流程' },
      { name: '渠道分析', desc: '各支付渠道效果分析，优化成本结构' },
    ],
    model: '支付数据平台',
    image: '/images/product/Carousel4.png',
  },
  technology: {
    id: 'technology',
    name: '支付安全',
    icon: CpuChipIcon,
    title: '先进安全技术保障资金安全',
    description: '采用金融级安全技术，确保支付系统高安全高可靠',
    features: [
      { name: 'SSL加密', desc: '数据传输加密，保护用户隐私' },
      { name: '实名认证', desc: '多重身份验证，防范欺诈风险' },
      { name: '风控引擎', desc: '智能风控系统，实时监控异常' },
    ],
    model: '支付安全体系',
    image: '/images/screenshots/contacts.png',
  },
  operation: {
    id: 'operation',
    name: '技术集成',
    icon: WrenchScrewdriverIcon,
    title: '丰富的技术集成工具提升效率',
    description: '一站式技术集成工具，简化支付系统对接',
    features: [
      { name: 'API接口', desc: '标准化API接口，快速集成对接' },
      { name: 'SDK开发包', desc: '多语言SDK，降低开发成本' },
      { name: '技术支持', desc: '7×24技术支持，保障系统稳定' },
    ],
    model: '技术集成套件',
    image: '/images/product/label3.png',
  },
}

/**
 * 电商系统功能展示标签页组件
 * 参考 Accordion 的设计风格，采用标签页布局展示电商功能
 * 支持响应式设计和交互动画效果
 * @returns 电商功能标签页组件
 */
function EcommerceFeatureTabs() {
  const [activeTab, setActiveTab] = useState('store')
  const currentFeature =
    ecommerceFeatures[activeTab as keyof typeof ecommerceFeatures]

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: '#F7F9FC' }}
    >
      <div className="mx-auto max-w-[1800px] px-3 lg:px-4">
        {/* 标题区域 */}
        <div className="mb-8 text-center sm:mb-12 md:mb-16 lg:mb-20">
          <div className="mb-4 inline-block rounded-full border border-gray-200 bg-white px-3 py-2 sm:mb-6 sm:px-4 md:mb-8">
            <span className="text-xs font-semibold tracking-wide text-[#0052D9] sm:text-sm">
              电商支付功能展示
            </span>
          </div>
          <h2
            className="mb-3 px-2 text-2xl font-bold sm:mb-4 sm:text-3xl md:mb-6 md:text-4xl lg:text-5xl"
            style={{ color: '#05f' }}
          >
            电商支付解决方案能为你做什么？
          </h2>
          <p
            className="mx-auto max-w-3xl px-2 text-base leading-relaxed sm:text-lg md:text-xl"
            style={{ color: 'rgba(12,13,14,0.7)' }}
          >
            探索电商支付解决方案在不同场景的强大应用，让安全便捷的支付服务为你的电商业务发展赋能
          </p>
        </div>

        {/* 标签导航栏 */}
        <div className="mb-12 px-2 md:mb-16">
          {/* 移动端：水平滚动标签 */}
          <div className="overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:hidden [&::-webkit-scrollbar]:hidden">
            <div className="flex min-w-max space-x-2 pb-2">
              {Object.values(ecommerceFeatures).map((feature) => {
                const IconComponent = feature.icon
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setActiveTab(feature.id)
                    }}
                    className={`flex flex-shrink-0 touch-manipulation items-center gap-2 px-4 py-2 text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      activeTab === feature.id
                        ? 'bg-[#0052D9] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
                    }`}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      userSelect: 'none',
                    }}
                  >
                    <IconComponent className="h-4 w-4 flex-shrink-0" />
                    {feature.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* 桌面端：网格布局标签 */}
          <div className="hidden gap-1 md:grid md:grid-cols-3 lg:grid-cols-6 lg:gap-2">
            {Object.values(ecommerceFeatures).map((feature) => {
              const IconComponent = feature.icon
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveTab(feature.id)}
                  className={`flex w-full items-center justify-center gap-2 px-4 py-2 text-sm font-medium transition-all duration-200 lg:px-6 lg:py-3 lg:text-base ${
                    activeTab === feature.id
                      ? 'border-b-2 border-[#0052D9] text-[#0052D9]'
                      : 'text-gray-600 hover:text-[#0052D9]'
                  }`}
                >
                  <IconComponent className="h-4 w-4 lg:h-5 lg:w-5" />
                  {feature.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* 标签内容区域 */}
        <div className="grid grid-cols-1 gap-4">
          <div className="transition-all duration-300 ease-out">
            <div
              className="flex min-h-[300px] flex-col items-center gap-6 bg-white p-4 sm:min-h-[400px] sm:p-6 md:min-h-[500px] md:gap-8 md:p-8 lg:min-h-[600px] lg:flex-row lg:gap-12 lg:p-12 xl:gap-20"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,.05)' }}
            >
              {/* 左侧文字内容 */}
              <div className="order-2 flex w-full flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8 lg:order-1 lg:w-2/5">
                <h3
                  className="text-lg leading-tight font-semibold sm:text-xl md:text-2xl lg:text-3xl"
                  style={{ color: 'rgba(12,13,14,1)', lineHeight: '1.3' }}
                >
                  {currentFeature.title}
                </h3>
                <p
                  className="text-sm leading-relaxed sm:text-base md:text-lg"
                  style={{ color: 'rgba(12,13,14,0.7)', lineHeight: '1.6' }}
                >
                  {currentFeature.description}
                </p>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {currentFeature.features.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-2 sm:gap-3 md:gap-4"
                    >
                      <div className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-[#0052D9] sm:mt-2"></div>
                      <span
                        className="text-sm leading-relaxed sm:text-base md:text-lg"
                        style={{ color: 'rgba(12,13,14,1)', lineHeight: '1.6' }}
                      >
                        <strong style={{ fontWeight: '500' }}>
                          {item.name}
                        </strong>
                        ：{item.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className="text-xs sm:text-sm"
                  style={{ color: 'rgba(12,13,14,0.6)' }}
                >
                  相关服务：{currentFeature.model}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 sm:px-6 sm:py-3 md:px-8 md:py-4 md:text-base"
                  >
                    查看详情
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center bg-[#0052D9] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-[#003db8] sm:px-6 sm:py-3 md:px-8 md:py-4 md:text-base"
                  >
                    立即体验
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* 右侧模拟界面 */}
              <div className="order-1 mt-6 hidden w-full items-center justify-center lg:order-2 lg:mt-0 lg:flex lg:w-3/5 lg:justify-end">
                <div className="h-48 w-full max-w-xs sm:h-60 sm:max-w-md md:h-80 md:max-w-xl lg:h-[28rem] lg:max-w-2xl xl:h-[32rem] xl:max-w-3xl">
                  {/* 模拟界面容器 */}
                  <div className="h-full w-full overflow-hidden rounded-lg border border-gray-200 bg-white/80 shadow-lg backdrop-blur-sm">
                    {/* 模拟界面头部 */}
                    <div className="border-b border-gray-200 bg-gray-50 px-3 py-2 sm:px-4 sm:py-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="h-2 w-2 rounded-full bg-red-400 sm:h-3 sm:w-3"></div>
                          <div className="h-2 w-2 rounded-full bg-yellow-400 sm:h-3 sm:w-3"></div>
                          <div className="h-2 w-2 rounded-full bg-green-400 sm:h-3 sm:w-3"></div>
                        </div>
                        <div className="text-xs font-medium text-gray-600 sm:text-sm">
                          {currentFeature.model}
                        </div>
                      </div>
                    </div>

                    {/* 模拟界面内容 */}
                    <div className="space-y-3 p-3 sm:space-y-4 sm:p-4 md:space-y-6 md:p-6">
                      {/* 标题栏 */}
                      <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                        <h4 className="text-sm font-semibold text-gray-800 sm:text-base md:text-lg">
                          {currentFeature.name}
                        </h4>
                        <div className="h-4 w-4 rounded bg-[#0052D9] sm:h-5 sm:w-5"></div>
                      </div>

                      {/* 功能模块 */}
                      <div className="space-y-2 sm:space-y-3">
                        {currentFeature.features.map((item, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between rounded-md bg-gray-50 p-2 sm:p-3"
                          >
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div className="h-2 w-2 rounded-full bg-[#0052D9] sm:h-3 sm:w-3"></div>
                              <span className="text-xs font-medium text-gray-700 sm:text-sm md:text-base">
                                {item.name}
                              </span>
                            </div>
                            <div className="h-2 w-8 rounded-full bg-green-200 sm:h-3 sm:w-12">
                              <div className="h-full w-3/4 rounded-full bg-green-400"></div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* 状态栏 */}
                      <div className="flex items-center justify-between border-t border-gray-100 pt-2 sm:pt-3">
                        <div className="flex items-center space-x-1 sm:space-x-2">
                          <div className="h-2 w-2 animate-pulse rounded-full bg-green-400 sm:h-3 sm:w-3"></div>
                          <span className="text-xs text-gray-600 sm:text-sm">
                            运行中
                          </span>
                        </div>
                        <div className="text-xs text-gray-500 sm:text-sm">
                          系统状态正常
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 核心特性数据
const coreFeatures = [
  {
    name: '多终端支付',
    description: 'PC端、移动端、APP、H5全平台支付支持',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: '聚合收款',
    description: '微信、支付宝、银联等多渠道聚合',
    icon: BuildingOfficeIcon,
  },
  {
    name: '安全保障',
    description: '金融级安全、实时风控、资金保护',
    icon: UsersIcon,
  },
]

// 系统功能数据
const systemFeatures = [
  {
    title: '快速结算',
    description: '0.38%费率秒到账，7×24小时实时结算，提升资金周转效率',
    icon: ShareIcon,
  },
  {
    title: '支付转化',
    description: '具备快捷支付、扫码支付、NFC支付等多种支付方式，提升转化率',
    icon: GiftIcon,
  },
  {
    title: '风控管理',
    description: '智能风控系统+实时监控机制，充分保障交易资金安全',
    icon: StarIcon,
  },
  {
    title: 'API集成',
    description: '标准化API接口，快速集成对接，个性化定制更加灵活便捷',
    icon: ComputerDesktopIcon,
  },
]

// 全面功能数据
const allFeatures = [
  {
    name: '在线支付',
    description: '全面的在线支付功能，轻松完成交易收款',
    icon: BuildingOfficeIcon,
  },
  {
    name: '移动支付',
    description: '自由选择支付方式，打造便捷支付体验',
    icon: ComputerDesktopIcon,
  },
  {
    name: '聚合收款',
    description: '支持多渠道聚合收款，一站式支付解决方案',
    icon: GlobeAltIcon,
  },
  {
    name: '会员支付',
    description: '全面的会员支付管理，提升客户支付体验',
    icon: UsersIcon,
  },
  {
    name: '客服系统',
    description: '高效的支付客服，提升用户支付满意度',
    icon: UserGroupIcon,
  },
  {
    name: '数据统计',
    description: '全面的支付数据分析，助力精准决策',
    icon: ChartBarIcon,
  },
  {
    name: '交易查询',
    description: '实时跟踪交易状态，提升用户体验',
    icon: TruckIcon,
  },
  {
    name: '发票管理',
    description: '便捷的电子发票处理，满足各类需求',
    icon: DocumentTextIcon,
  },
]

// 支付安全与风控系统数据
const membershipFeatures = [
  {
    name: '实名认证',
    description: '多重身份验证，提供安全保障',
    icon: AcademicCapIcon,
  },
  {
    name: '等级风控',
    description: '分级风控策略，提高交易安全性',
    icon: StarIcon,
  },
  { name: '智能反欺诈', description: '灵活的反欺诈策略，防范风险', icon: TagIcon },
  {
    name: '交易监控',
    description: '多维度交易监控，提升安全等级',
    icon: GiftIcon,
  },
  {
    name: '多重加密',
    description: '多层级加密体系，保护数据安全',
    icon: ShareIcon,
  },
  {
    name: '全链路监控',
    description: '全流程安全监控，快速响应异常',
    icon: UsersIcon,
  },
  {
    name: '定制化风控',
    description: '精准定制风控规则，提高防护质量',
    icon: UserGroupIcon,
  },
  {
    name: '大额预警',
    description: '大额交易预警机制，提升风控效果',
    icon: CreditCardIcon,
  },
]

// 支付工具数据
const marketingTools = [
  { name: '扫码支付', description: '实时扫码支付，提高支付转化率', icon: PlayIcon },
  { name: '快捷支付', description: '一键快捷支付，快速完成交易', icon: UsersIcon },
  {
    name: 'NFC支付',
    description: '近场支付技术，提高用户支付体验',
    icon: ScissorsIcon,
  },
  { name: '闪付功能', description: '创造便捷体验，刺激快速成交', icon: BoltIcon },
  { name: '分期支付', description: '多样化支付策略，促进大额消费', icon: TicketIcon },
  {
    name: '免密支付',
    description: '提高支付效率，优化用户体验',
    icon: TruckIcon,
  },
  {
    name: '积分支付',
    description: '提高用户忠诚度，促进复购消费',
    icon: ArrowPathIcon,
  },
  {
    name: '会员支付',
    description: '提供专属支付优惠，增加会员价值',
    icon: AcademicCapIcon,
  },
]

// 应用场景数据
const applicationScenarios = [
  { title: '直播电商支付', description: '直播带货支付解决方案', icon: PlayIcon },
  { title: '社区团购支付', description: '社区拼团支付系统', icon: UsersIcon },
  { title: '分销电商支付', description: '分销电商支付系统', icon: ShareIcon },
  { title: '会员电商支付', description: '会员电商支付解决方案', icon: StarIcon },
  {
    title: '生鲜电商支付',
    description: '食品生鲜电商支付系统',
    icon: ShoppingBagIcon,
  },
  { title: '服装电商支付', description: '服装鞋帽电商支付系统', icon: TrophyIcon },
  {
    title: '商超电商支付',
    description: '商超百货电商支付系统',
    icon: BuildingOfficeIcon,
  },
  { title: '数码电商支付', description: '数码家电电商支付系统', icon: CpuChipIcon },
]

// 技术框架数据
const techStack = [
  {
    name: 'SSL/TLS',
    description: '数据传输加密技术',
    category: '安全技术',
  },
  {
    name: '微服务架构',
    description: '支付系统底层架构',
    category: '后端架构',
  },
  {
    name: 'API网关',
    description: '统一支付接口管理',
    category: '接口框架',
  },
  {
    name: '分布式部署',
    description: '提高系统可用性',
    category: '架构设计',
  },
  {
    name: 'Redis集群',
    description: '减少支付延迟，支持高并发',
    category: '性能优化',
  },
  {
    name: '消息队列',
    description: '异步处理，提升支付处理能力',
    category: '通信技术',
  },
]

// 集成优势数据
const developmentAdvantages = [
  {
    name: 'API易集成',
    description: 'RESTful API标准接口，快速集成',
    icon: CpuChipIcon,
  },
  {
    name: '架构清晰',
    description: '支付层、风控层、数据层，职责明确',
    icon: DocumentTextIcon,
  },
  {
    name: '灵活配置',
    description: '自动检查支付环境，错误提示说明',
    icon: UserGroupIcon,
  },
  {
    name: '文档完善',
    description: '所有接口都有详细的集成说明',
    icon: DocumentTextIcon,
  },
  {
    name: '技术支持',
    description: '专业的技术支持和集成指导文档',
    icon: DocumentTextIcon,
  },
  {
    name: '系统配置',
    description: '后台快速完成各种支付配置',
    icon: BuildingOfficeIcon,
  },
]

// 电商支付解决方案轮播数据
const ecommerceSlides = [
  {
    id: 1,
    title: '电商行业解决方案',
    subtitle: '全场景支付解决方案',
    description:
      '集在线支付、移动支付、聚合收款、NFC支付等多种支付方式，构建全场景电商支付解决方案',
    backgroundType: 'video' as const,
    backgroundVideo: {
      src: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/48fc7d2b04a1c55b_1736500004142.mp4',
      autoPlay: true,
      muted: true,
      loop: true,
      controls: false,
      preload: 'auto' as const,
    },
    backgroundImage: '/images/carousel/HeaderCarousel2.jpg',
    textPosition: 'left' as const,
    buttonText: '立即体验',
    buttonLink: '#',
  },
]

export default function EcommercePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* 电商解决方案转播组件 */}
        <VideoCarousel
          autoPlay={false}
          showProgress={false}
          showNavigation={false}
          height={{ base: 'h-[50vh]', md: 'h-[60vh]', lg: 'h-[70vh]' }}
          theme="light"
          textModeButton={true}
          showOverlay={true}
          customSlides={ecommerceSlides}
        />

        {/* 电商产品展示区域 */}
        <ProductsSection />

        {/* 核心特性 */}
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                全方位电商支付解决方案
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                多终端支付覆盖，全面支付功能支持，助力您的电商支付业务快速发展
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {coreFeatures.map((feature) => (
                <div
                  key={feature.name}
                  className="border border-gray-200 bg-white p-6"
                >
                  <div className="mb-4">
                    <feature.icon
                      className="h-8 w-8 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 系统功能 */}
        <section className="bg-gray-50 py-20">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                支付功能加持，让收款更轻松
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                追踪电商支付新趋势，跟进移动支付热门技术，丰富支付功能加持
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {systemFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="border border-gray-200 bg-white p-8"
                >
                  <div className="mb-6">
                    <feature.icon
                      className="h-10 w-10 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-3 text-xl font-medium text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 全面功能支持 */}
        <section className="py-20">
          <Container>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                全面支付功能支持
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                我们提供丰富多样的电商支付功能，满足您的各种支付业务需求
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {allFeatures.map((feature) => (
                <div
                  key={feature.name}
                  className="border border-gray-200 bg-gray-50 p-6"
                >
                  <div className="mb-4">
                    <feature.icon
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 支付安全与风控系统 */}
        <section className="bg-gray-50 py-20">
          <Container>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                支付安全与风控系统
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                我们的支付安全与风控系统为您提供全面的交易安全保障和风险防控解决方案，助力您的电商支付业务安全增长
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {membershipFeatures.map((feature) => (
                <div
                  key={feature.name}
                  className="border border-gray-200 bg-white p-6"
                >
                  <div className="mb-4">
                    <feature.icon
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    {feature.name}
                  </h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 支付工具 */}
        <section className="py-20">
          <Container>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                多样化支付工具
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                多样化的支付工具，助力商家快速收款和提高支付转化率，为您的电商业务增长赋能
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {marketingTools.map((tool) => (
                <div
                  key={tool.name}
                  className="border border-gray-200 bg-gray-50 p-6"
                >
                  <div className="mb-4">
                    <tool.icon
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    {tool.name}
                  </h3>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 电商系统核心功能展示 */}
        <EcommerceFeatureTabs />
        {/* 应用场景 */}
        <section className="bg-gray-50 py-20">
          <Container>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                满足多行业多场景支付需求
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                支持多种电商行业类型，满足不同支付场景的个性化需求
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {applicationScenarios.map((scenario) => (
                <div
                  key={scenario.title}
                  className="border border-gray-200 bg-white p-6 text-center"
                >
                  <div className="mb-4 flex justify-center">
                    <scenario.icon
                      className="h-8 w-8 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    {scenario.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {scenario.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 技术框架 */}
        <section className="py-20">
          <Container>
            <div className="mx-auto mb-16 max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                采用最新前沿支付技术
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                大势所趋，行业引领，使用成熟稳定的支付技术栈，保障支付系统可靠性和安全性
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-gray-50 p-6"
                >
                  <div className="mb-3">
                    <span className="inline-block border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                      {tech.category}
                    </span>
                  </div>
                  <h3 className="mb-2 text-lg font-medium text-gray-900">
                    {tech.name}
                  </h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 集成优势 */}
        <section className="bg-gray-50 py-20">
          <Container>
            <div className="mx-auto mb-16 max-w-3xl text-center">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                想你所想，让支付集成更简单
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                从支付系统设计到技术实现，每一个细节都在考虑让支付集成更方便，减少重复开发
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {developmentAdvantages.map((advantage) => (
                <div
                  key={advantage.name}
                  className="border border-gray-200 bg-white p-6"
                >
                  <div className="mb-4">
                    <advantage.icon
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="mb-2 text-base font-medium text-gray-900">
                    {advantage.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {advantage.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 行动召唤 */}
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                准备好开启您的电商支付之旅了吗？
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                选择我们的电商行业支付解决方案，让您的支付业务赢在起跑线上
              </p>
              <div className="mt-10 flex items-center justify-center gap-6">
                <Button variant="solid" color="blue">
                  立即开始
                </Button>
                <Button variant="outline" color="slate">
                  联系咨询
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
