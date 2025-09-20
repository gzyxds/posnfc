'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'

/**
 * 产品数据类型定义 - POS机服务产品信息结构
 */
interface Product {
  id: string
  name: string
  description: string
  storage: string
  duration: string
  originalPrice: string
  currentPrice: string
  unit: string
  badge: string
  badgeType: 'free' | 'hot' | 'new' | 'recommended' | 'secure' | 'smart'
}

/**
 * 服务选项卡数据类型定义 - POS机分类信息结构
 */
interface ServiceTab {
  id: string
  name: string
  icon: string
  products: Product[]
}

/**
 * 徽章样式配置 - 统一的POS机服务徽章设计系统
 */
const badgeStyles = {
  free: 'bg-emerald-500 text-white border-emerald-600',
  hot: 'bg-orange-500 text-white border-orange-600',
  new: 'bg-blue-500 text-white border-blue-600',
  recommended: 'bg-purple-500 text-white border-purple-600',
  secure: 'bg-slate-600 text-white border-slate-700',
  smart: 'bg-teal-500 text-white border-teal-600',
}

/**
 * 服务选项卡数据配置 - POS机服务产品矩阵
 */
const serviceTabs: ServiceTab[] = [
  {
    id: 'card-reader',
    name: '台卡',
    icon: 'M2 4a2 2 0 012-2h12a2 2 0 012 2v2H2V4zM2 7h16v9a2 2 0 01-2 2H4a2 2 0 01-2-2V7z',
    products: [
      {
        id: 'desktop-card-reader',
        name: '桌面台卡收款机',
        description: '专业台式刷卡设备，支持磁条卡/IC卡/NFC支付，0.38%费率，适合固定收银场景',
        storage: '内置存储',
        duration: '三年质保',
        originalPrice: '￥599',
        currentPrice: '￥299',
        unit: '/台',
        badge: '热门',
        badgeType: 'hot',
      },
      {
        id: 'wireless-card-reader',
        name: '无线台卡终端',
        description: '便携式台卡设备，支持蓝牙连接，移动收款灵活便捷，银联认证安全可靠',
        storage: '无线连接',
        duration: '即时到账',
        originalPrice: '￥399',
        currentPrice: '￥199',
        unit: '/台',
        badge: '新品',
        badgeType: 'new',
      },
    ],
  },
  {
    id: 'cloud-speaker',
    name: '云音箱',
    icon: 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z',
    products: [
      {
        id: 'smart-cloud-speaker',
        name: '智能云音箱收款',
        description: '语音播报收款金额，支持微信/支付宝/云闪付，无需看屏幕即可确认收款',
        storage: '云端存储',
        duration: '语音播报',
        originalPrice: '￥299',
        currentPrice: '￥99',
        unit: '/台',
        badge: '智能',
        badgeType: 'smart',
      },
      {
        id: 'voice-payment-speaker',
        name: '语音支付音箱',
        description: 'AI语音识别，智能播报交易信息，支持多种支付方式，提升收银效率',
        storage: '本地缓存',
        duration: '实时播报',
        originalPrice: '￥399',
        currentPrice: '￥199',
        unit: '/台',
        badge: '推荐',
        badgeType: 'recommended',
      },
    ],
  },
  {
    id: 'scan-king',
    name: '扫码王',
    icon: 'M4 4v4h4V4H4zm6 0v4h4V4h-4zm6 0v4h4V4h-4zM4 10v4h4v-4H4zm6 0v4h4v-4h-4zm6 0v4h4v-4h-4zM4 16v4h4v-4H4zm6 0v4h4v-4h-4zm6 0v4h4v-4h-4z',
    products: [
      {
        id: 'qr-scan-device',
        name: '二维码扫码王',
        description: '专业扫码设备，支持微信/支付宝/银联二维码，扫码速度快，识别率高',
        storage: '高速扫描',
        duration: '毫秒识别',
        originalPrice: '￥199',
        currentPrice: '￥99',
        unit: '/台',
        badge: '高效',
        badgeType: 'hot',
      },
      {
        id: 'multi-code-scanner',
        name: '全能扫码终端',
        description: '支持一维码/二维码/条形码扫描，适用于零售、餐饮、便利店等多场景',
        storage: '多码识别',
        duration: '全场景适用',
        originalPrice: '￥299',
        currentPrice: '￥149',
        unit: '/台',
        badge: '全能',
        badgeType: 'recommended',
      },
    ],
  },
  {
    id: 'traditional-pos',
    name: '传统POS',
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 14h16V8H4v10zm2-8h12v2H6v-2zm0 4h8v2H6v-2z',
    products: [
      {
        id: 'classic-pos-machine',
        name: '经典POS收银机',
        description: '传统按键式POS机，稳定可靠，支持磁条卡/IC卡刷卡，适合传统商户使用',
        storage: '稳定系统',
        duration: '长期使用',
        originalPrice: '￥899',
        currentPrice: '￥599',
        unit: '/台',
        badge: '稳定',
        badgeType: 'secure',
      },
      {
        id: 'basic-pos-terminal',
        name: '基础POS终端',
        description: '简单易用的传统POS设备，功能齐全，操作简便，适合中小商户日常收银',
        storage: '基础功能',
        duration: '简单易用',
        originalPrice: '￥599',
        currentPrice: '￥399',
        unit: '/台',
        badge: '实用',
        badgeType: 'recommended',
      },
    ],
  },
  {
    id: 'smart-pos',
    name: '智能POS',
    icon: 'M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 14h16V8H4v10zm2-8h12v2H6v-2zm0 4h8v2H6v-2z',
    products: [
      {
        id: 'android-smart-pos',
        name: '安卓智能POS',
        description: '触屏智能POS，支持会员管理、库存管理，0.38%费率，适合门店商户',
        storage: '32GB存储',
        duration: '终身免费系统升级',
        originalPrice: '￥1299',
        currentPrice: '￥899',
        unit: '/台',
        badge: '热门',
        badgeType: 'hot',
      },
      {
        id: 'ai-smart-pos',
        name: 'AI智能收银机',
        description: '人工智能驱动，支持人脸识别、语音交互，全渠道支付，智慧经营管理',
        storage: '64GB存储',
        duration: 'AI智能升级',
        originalPrice: '￥1999',
        currentPrice: '￥1299',
        unit: '/台',
        badge: '智能',
        badgeType: 'smart',
      },
    ],
  },
  {
    id: 'nfc-tap',
    name: '碰一碰',
    icon: 'M13.75 7h-3.5C9.56 7 9 7.56 9 8.25v3.5c0 .69.56 1.25 1.25 1.25h3.5c.69 0 1.25-.56 1.25-1.25v-3.5C15 7.56 14.44 7 13.75 7zM6 10c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm14 0c0 5.52-4.48 10-10 10S0 15.52 0 10 4.48 0 10 0s10 4.48 10 10z',
    products: [
      {
        id: 'nfc-payment-device',
        name: 'NFC碰一碰支付',
        description: '支持Apple Pay/HUAWEI Pay/云闪付，手机轻触即可完成支付，便捷安全',
        storage: 'NFC芯片',
        duration: '即触即付',
        originalPrice: '￥399',
        currentPrice: '￥199',
        unit: '/台',
        badge: '便捷',
        badgeType: 'new',
      },
      {
        id: 'contactless-terminal',
        name: '无接触支付终端',
        description: '非接触式支付设备，支持银联闪付、手机Pay，安全快捷的支付体验',
        storage: '无接触',
        duration: '秒级支付',
        originalPrice: '￥599',
        currentPrice: '￥299',
        unit: '/台',
        badge: '安全',
        badgeType: 'secure',
      },
    ],
  },
  {
    id: 'cloud-printer',
    name: '云打印机',
    icon: 'M6 16.5h12M6 16.5V18a2 2 0 002 2h8a2 2 0 002-2v-1.5M6 16.5v-12A2.5 2.5 0 018.5 2h7A2.5 2.5 0 0118 4.5v12M10 6h4m-4 3h4m-4 3h4',
    products: [
      {
        id: 'thermal-cloud-printer',
        name: '热敏云打印机',
        description: '云端连接，支持远程打印小票，自动接单打印，适合外卖、快递等场景',
        storage: '云端连接',
        duration: '自动打印',
        originalPrice: '￥399',
        currentPrice: '￥199',
        unit: '/台',
        badge: '云端',
        badgeType: 'smart',
      },
      {
        id: 'wireless-receipt-printer',
        name: '无线小票打印机',
        description: 'WiFi连接，支持多设备共享打印，高速打印，低噪音设计，商用首选',
        storage: '无线连接',
        duration: '高速打印',
        originalPrice: '￥299',
        currentPrice: '￥149',
        unit: '/台',
        badge: '高效',
        badgeType: 'hot',
      },
    ],
  },
  {
    id: 'saas-cashier',
    name: 'SAAS收银机',
    icon: 'M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm0 3h16v11H4V7zm4 4h8v1H8v-1zm0 3h6v1H8v-1z',
    products: [
      {
        id: 'cloud-saas-pos',
        name: '云端SAAS收银系统',
        description: '基于云端的智能收银解决方案，支持多门店管理、数据分析、会员营销',
        storage: '云端存储',
        duration: 'SAAS服务',
        originalPrice: '￥1999',
        currentPrice: '￥999',
        unit: '/年',
        badge: '企业版',
        badgeType: 'recommended',
      },
      {
        id: 'smart-saas-terminal',
        name: '智能SAAS终端',
        description: '一体化SAAS收银终端，集成支付、库存、会员、营销功能，助力数字化经营',
        storage: '一体化',
        duration: '数字化经营',
        originalPrice: '￥2999',
        currentPrice: '￥1999',
        unit: '/套',
        badge: '全能',
        badgeType: 'smart',
      },
    ],
  },
]

/**
 * 收银设备服务特性数据 - 核心服务能力展示
 */
const serviceFeatures = [
  {
    title: '多元化设备选择',
    description: '台卡、云音箱、扫码王、传统POS、智能POS、碰一碰、云打印机、SAAS收银机全覆盖',
  },
  {
    title: '智能化收银体验',
    description: '语音播报、AI识别、云端管理，提升收银效率，优化用户体验',
  },
  {
    title: '全场景支付支持',
    description: '支持刷卡、扫码、NFC、语音等多种支付方式，适配各类商业场景',
  },
  {
    title: '专业技术保障',
    description: '银联认证设备，稳定可靠，专业售后服务，助力商户数字化经营',
  },
]

/**
 * POS机产品卡片组件 - 现代蓝白色调设计
 *
 * @param product - 产品信息对象，包含服务规格、价格等核心数据
 * @returns 渲染POS机产品卡片的 JSX 元素
 *
 * 设计特性：
 * - 采用蓝白色调的现代企业设计风格
 * - 简洁直角卡片设计，突出专业感
 * - 合理留白，清晰的信息层次
 * - 突出数据展示，符合B端产品调性
 */
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden border border-slate-200 bg-white transition-all duration-300 ease-out hover:border-gray-200 hover:shadow-xl rounded-md">
      {/* 卡片内容区域 - 响应式内边距 */}
      <div className="flex flex-1 flex-col p-4 sm:p-6">
        {/* 徽章 - 移动端优化 */}
        <div
          className={clsx(
            'absolute top-3 right-3 px-2 py-1 sm:top-4 sm:right-4 sm:px-3 sm:py-1.5',
            'text-xs font-semibold tracking-wide uppercase',
            'z-10 border shadow-sm rounded-md',
            badgeStyles[product.badgeType],
          )}
        >
          {product.badge}
        </div>

        {/* 产品标题 - 响应式字体 */}
        <h3 className="mb-2 pr-16 text-lg leading-tight font-bold text-slate-900 sm:mb-3 sm:pr-20 sm:text-xl">
          {product.name}
        </h3>

        {/* 产品描述 - 移动端优化 */}
        <p className="mb-4 flex-grow text-xs leading-relaxed text-slate-600 sm:mb-6 sm:text-sm">
          {product.description}
        </p>

        {/* 规格信息 - 移动端紧凑布局 */}
        <div className="mb-4 space-y-2 sm:mb-6 sm:space-y-3">
          <div className="border border-slate-100 bg-slate-50 p-3 sm:p-4 rounded-md">
            <div className="mb-1.5 flex items-center justify-between sm:mb-2">
              <span className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                产品特点
              </span>
              <span className="text-xs font-bold text-slate-900 sm:text-sm">
                {product.storage}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium tracking-wide text-slate-500 uppercase">
                优惠政策
              </span>
              <span className="text-xs font-bold text-slate-900 sm:text-sm">
                {product.duration}
              </span>
            </div>
          </div>
        </div>

        {/* 价格信息 - 移动端优化 */}
        <div className="mb-4 sm:mb-6">
          <div className="mb-1.5 flex items-center justify-between sm:mb-2">
            <span className="text-xs text-slate-500 sm:text-sm">市场价格</span>
            <span className="text-xs text-slate-400 line-through sm:text-sm">
              {product.originalPrice}
            </span>
          </div>
          <div className="mb-2 flex items-baseline sm:mb-3">
            <span className="text-2xl font-bold text-blue-600 sm:text-3xl">
              {product.currentPrice}
            </span>
            <span className="ml-2 text-xs text-slate-500 sm:text-sm">
              {product.unit}
            </span>
          </div>
          <div className="inline-flex items-center border border-blue-200 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 sm:px-3 sm:py-1.5 rounded-md">
            <svg
              className="mr-1 h-3 w-3 flex-shrink-0 sm:mr-1.5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="truncate">
              限时特惠 · 立省
              {parseInt(product.originalPrice.replace('￥', '')) -
                parseInt(product.currentPrice.replace('￥', ''))}
              元
            </span>
          </div>
        </div>

        {/* 操作按钮 - 移动端优化 */}
        <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:gap-3">
          <button className="flex flex-1 items-center justify-center gap-1.5 bg-blue-600 px-3 py-2.5 text-xs font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg sm:gap-2 sm:px-4 sm:py-3 sm:text-sm rounded-md">
            <svg
              className="h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            <span className="whitespace-nowrap">立即领取</span>
          </button>
          <button className="flex flex-1 items-center justify-center gap-1.5 border border-slate-300 px-3 py-2.5 text-xs font-medium text-slate-700 transition-all duration-200 hover:border-slate-400 hover:bg-slate-50 sm:gap-2 sm:px-4 sm:py-3 sm:text-sm rounded-md">
            <svg
              className="h-3 w-3 flex-shrink-0 sm:h-4 sm:w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="whitespace-nowrap">联系客服</span>
          </button>
        </div>
      </div>
    </div>
  )
}

/**
 * POS机服务特性组件 - 现代服务能力展示
 *
 * @param feature - 服务特性对象，包含标题和详细描述
 * @returns 渲染POS机服务特性的 JSX 元素
 *
 * 设计特点：
 * - 现代蓝白色调企业设计风格
 * - 突出服务指标和核心能力
 * - 简洁直角设计，专业感强
 * - 清晰的信息层次和数据展示
 */
function ServiceFeature({
  feature,
}: {
  feature: { title: string; description: string }
}) {
  return (
    <div className="group h-full border border-slate-200 bg-white p-3 transition-all duration-300 ease-out hover:border-gray-200 hover:shadow-md sm:p-4 lg:p-6 rounded-md">
      {/* 图标区域 - 响应式设计 */}
      <div className="mb-2 flex h-8 w-8 items-center justify-center bg-gradient-to-br from-blue-500 to-blue-600 transition-all duration-300 group-hover:shadow-lg sm:mb-3 sm:h-10 sm:w-10 lg:mb-4 lg:h-12 lg:w-12 rounded-md">
        <svg
          className="h-4 w-4 text-white sm:h-5 sm:w-5 lg:h-6 lg:w-6"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      </div>

      {/* 内容区域 - 响应式字体 */}
      <div>
        <h4 className="mb-1.5 text-sm leading-tight font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-900 sm:mb-2 sm:text-base lg:mb-3 lg:text-lg">
          {feature.title}
        </h4>
        <p className="text-xs leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-slate-700 sm:text-sm">
          {feature.description}
        </p>
      </div>

      {/* 底部装饰线 */}
      <div className="mt-2 h-0.5 origin-left scale-x-0 transform bg-gradient-to-r from-blue-500 to-transparent transition-transform duration-300 group-hover:scale-x-100 sm:mt-3 lg:mt-4" />
    </div>
  )
}

/**
 * POS机服务选项卡主组件 - 现代蓝白色调设计
 *
 * @returns 渲染完整的POS机服务选项卡界面
 *
 * 设计特性：
 * - 现代蓝白色调企业设计风格
 * - 简洁直角卡片设计
 * - 清晰的信息层次和数据展示
 * - 响应式布局优化
 * - 符合B端产品专业调性
 */
export default function ServiceTabs() {
  const [activeTab, setActiveTab] = useState(0)
  const activeService = serviceTabs[activeTab]

  return (
    <section className="bg-slate-50 py-12 sm:py-16 lg:py-20">
      <Container>
        {/* 标题区域 - 多端适配设计 */}
        <div className="mb-10 text-center sm:mb-12 lg:mb-16">
          <div className="mb-4 inline-flex items-center border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-medium text-blue-700 sm:mb-6 sm:px-4 sm:py-2 sm:text-sm rounded-md">
            <svg
              className="mr-1.5 h-3 w-3 flex-shrink-0 sm:mr-2 sm:h-4 sm:w-4"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
            <span className="whitespace-nowrap">专业收银设备服务解决方案</span>
          </div>
          <h2 className="mb-4 px-4 text-2xl font-bold text-slate-900 sm:mb-6 sm:text-3xl lg:text-4xl">
            多元化收银设备服务平台
          </h2>
          <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-slate-600 sm:text-lg lg:text-xl">
            提供台卡、云音箱、扫码王、传统POS、智能POS、碰一碰、云打印机、SAAS收银机等全方位收银解决方案
          </p>
        </div>

        {/* 选项卡导航 - 多端适配设计 */}
        <div className="mb-8 sm:mb-12">
          {/* 移动端：垂直堆叠布局 */}
          <div className="space-y-2 sm:hidden">
            {serviceTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={clsx(
                  'w-full px-4 py-3 text-sm font-medium transition-all duration-300',
                  'flex items-center justify-start gap-3 border',
                  'hover:shadow-md rounded-md',
                  activeTab === index
                    ? 'border-blue-600 bg-blue-600 text-white shadow-lg'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50',
                )}
              >
                <svg
                  className="h-4 w-4 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={tab.icon} />
                </svg>
                <span className="truncate">{tab.name}</span>
              </button>
            ))}
          </div>

          {/* 平板端及以上：全屏水平布局 */}
          <div className="hidden w-full gap-2 sm:flex lg:gap-3">
            {serviceTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={clsx(
                  'flex-1 px-4 py-3 text-sm font-medium transition-all duration-300 sm:px-6 sm:py-4',
                  'flex items-center justify-center gap-2 border sm:gap-3',
                  'hover:shadow-md rounded-md',
                  activeTab === index
                    ? 'border-blue-600 bg-blue-600 text-white shadow-lg'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50',
                )}
              >
                <svg
                  className="h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d={tab.icon} />
                </svg>
                <span className="whitespace-nowrap">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 内容区域 - 多端适配布局 */}
        <div className="space-y-8 lg:grid lg:grid-cols-4 lg:gap-8 lg:space-y-0">
          {/* 产品展示区域 */}
          <div className="lg:col-span-3">
            <div className="mb-6 sm:mb-8">
              <h3 className="mb-3 text-xl font-bold text-slate-900 sm:mb-4 sm:text-2xl">
                {activeService.name} 产品方案
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
                为{activeService.name}场景提供专业的POS机服务解决方案
              </p>
            </div>

            {/* 产品卡片网格 - 响应式优化 */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 xl:grid-cols-2">
              {activeService.products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>

          {/* 服务特性区域 - 移动端优化 */}
          <div className="lg:col-span-1">
            <div className="border border-slate-200 bg-white p-4 sm:p-6 rounded-md">
              <div className="mb-4 sm:mb-6">
                <h3 className="mb-2 text-lg font-bold text-slate-900 sm:mb-3 sm:text-xl">
                  核心服务优势
                </h3>
                <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
                  央行一清牌照，0.38%费率，为商户提供安全可靠的支付服务
                </p>
              </div>

              {/* 移动端：水平滚动布局 */}
              <div className="mb-4 sm:hidden">
                <div className="-mx-4 flex gap-3 overflow-x-auto px-4 pb-2">
                  {serviceFeatures.map((feature, index) => (
                    <div key={index} className="w-64 flex-shrink-0">
                      <ServiceFeature feature={feature} />
                    </div>
                  ))}
                </div>
              </div>

              {/* 平板端及以上：垂直布局 */}
              <div className="mb-4 hidden grid-cols-1 gap-3 sm:mb-6 sm:grid sm:gap-4">
                {serviceFeatures.map((feature, index) => (
                  <ServiceFeature key={index} feature={feature} />
                ))}
              </div>

              <button className="flex w-full items-center justify-center gap-2 bg-blue-600 px-3 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:shadow-lg sm:px-4 sm:py-3 sm:text-sm rounded-md">
                <svg
                  className="h-3 w-3 sm:h-4 sm:w-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
                <span className="whitespace-nowrap">了解更多技术详情</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
