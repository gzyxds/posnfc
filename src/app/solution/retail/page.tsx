'use client'

import { useState } from 'react'
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BoltIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  DevicePhoneMobileIcon,
  EyeIcon,
  GlobeAltIcon,
  PhoneIcon,
  ShieldCheckIcon,
  ShoppingCartIcon,
  StarIcon,
  UserGroupIcon,
  UsersIcon,
  CreditCardIcon,
  QrCodeIcon,
  WifiIcon,
  GiftIcon,
  TrophyIcon,
  ClockIcon,
  ArrowUpRightIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import clsx from 'clsx'
import Image from 'next/image'
import Payindustry from './Payindustry'

// ==================== 页面SEO元数据配置 ====================
// 注意：客户端组件不支持静态元数据导出
// SEO元数据已在 ./layout.tsx 中配置，包含完整的页面标题、描述和关键词

/**
 * 零售支付特色功能接口定义 - 用于展示零售行业专属支付功能的数据结构
 */
interface RetailPaymentFeature {
  icon: React.ComponentType<{ className?: string }> // 功能图标组件
  title: string // 功能标题
  description: string // 功能描述
  highlight: string // 核心亮点
  color: string // 颜色样式类
}

/**
 * 零售支付场景接口定义 - 用于展示零售行业典型支付场景的数据结构
 */
interface RetailPaymentScenario {
  title: string // 场景标题
  description: string // 场景描述
  features: string[] // 场景特性列表
  benefits: string[] // 场景收益列表
  image: string // 场景图片路径
  stats?: {
    // 可选的统计数据
    label: string // 统计标签
    value: string // 统计值
  }[]
}

/**
 * 零售支付设备接口 - 用于展示零售支付设备的数据结构
 */
interface RetailPaymentDevice {
  name: string // 设备名称
  type: string // 设备类型
  features: string[] // 设备特性
  price: string // 设备价格
  highlight: string // 核心卖点
  image: string // 设备图片
}

/**
 * 零售支付优势数据接口 - 用于展示零售支付解决方案优势的数据结构
 */
interface RetailPaymentAdvantage {
  title: string // 优势标题
  value: string // 优势数值
  description: string // 优势描述
  icon: React.ComponentType<{ className?: string }> // 优势图标组件
  trend: string // 趋势描述
}

/**
 * 零售客户评价接口 - 用于展示零售客户对支付解决方案评价的数据结构
 */
interface RetailTestimonial {
  name: string // 客户姓名
  role: string // 客户角色
  business: string // 业务类型
  content: string // 评价内容
  avatar: string // 头像路径
  rating: number // 评分(1-5)
  improvement: string // 改善效果
}

/**
 * Hero区域组件 - 零售行业支付解决方案首页英雄区域
 * 采用左文右图布局设计，突出零售支付特色
 * 特点：聚焦支付功能、突出核心优势、强调零售场景
 *
 * 功能包括：
 * 1. 展示零售行业支付解决方案的主要标题和简介
 * 2. 突出NFC收款、会员积分支付等核心功能
 * 3. 右侧展示零售支付终端预览
 * 4. 响应式设计，适配不同屏幕尺寸
 *
 * @returns {JSX.Element} Hero区域组件
 */
function HeroSection() {
  // 零售支付核心功能标签
  const paymentFeatures = [
    { name: 'NFC闪付', href: '#nfc-payment' },
    { name: '会员积分', href: '#member-points' },
    { name: '扫码收款', href: '#qr-payment' },
    { name: '刷卡秒到', href: '#card-payment' },
    { name: '数字人民币', href: '#digital-currency' },
  ]

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-16 sm:py-20 md:py-24 lg:py-32">
      {/* 背景网格图案 */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-blue-200/30"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="retail-payment-grid"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#retail-payment-grid)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      {/* 装饰元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 h-64 w-64 bg-blue-400/10 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 h-48 w-48 bg-indigo-400/10 opacity-40 blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* 左侧内容区 */}
          <div className="space-y-6 text-center lg:space-y-8 lg:text-left">
            {/* 主标题 */}
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight">
                <span className="text-blue-600">
                  智能收银
                </span>
                <br />
                零售支付专家
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-gray-600 sm:text-xl md:text-2xl lg:mx-0 lg:leading-9 font-medium">
                NFC闪付+会员积分+扫码收款，0.38%费率秒到账
              </p>
              <p className="mx-auto max-w-xl text-base leading-7 text-gray-500 sm:text-lg lg:mx-0 lg:leading-8">
                专为零售门店打造的一站式支付解决方案，支持刷卡、扫码、NFC、数字人民币等全渠道收款，内置会员营销系统，助力门店业绩增长
              </p>
            </div>

            {/* 核心优势标签 */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              {paymentFeatures.map((feature) => (
                <a
                  key={feature.name}
                  href={feature.href}
                  className="border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 transition-all hover:border-gray-400 hover:bg-gray-50 hover:text-gray-800 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {feature.name}
                </a>
              ))}
            </div>

            {/* CTA按钮组 */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <Button
                href="#devices"
                variant="solid"
                color="blue"
                className="group w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 font-medium transform hover:-translate-y-0.5 transition-all duration-300 text-sm sm:text-base"
              >
                <span>免费申请设备</span>
                <CreditCardIcon className="ml-2 h-4 w-4 transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
              </Button>
              <Button
                href="#scenarios"
                variant="outline"
                className="group w-full sm:w-auto px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-white/90 backdrop-blur-sm font-medium border border-gray-300 hover:bg-white hover:border-gray-400 transition-all duration-300 text-sm sm:text-base"
              >
                <span>查看应用场景</span>
                <ShoppingCartIcon className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
              </Button>
            </div>

            {/* 核心数据展示 */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">0.38%</div>
                <div className="text-sm text-gray-500">费率永不+3</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">秒到账</div>
                <div className="text-sm text-gray-500">7×24小时</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">0元</div>
                <div className="text-sm text-gray-500">免押金领取</div>
              </div>
            </div>
          </div>

          {/* 右侧展示区 - 零售支付终端预览 */}
          <div className="relative mt-8 lg:mt-0">
            <div className="hover:shadow-3xl relative border border-gray-200/80 bg-gradient-to-br from-white to-gray-50 shadow-2xl transition-all duration-500 hover:-translate-y-1" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
              {/* 设备控制栏 */}
              <div className="border-b border-gray-200 bg-gray-50/80 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 bg-red-400"></div>
                    <div className="h-3 w-3 bg-yellow-400"></div>
                    <div className="h-3 w-3 bg-green-400"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    智能收银终端
                  </div>
                  <div className="w-6"></div>
                </div>
              </div>

              {/* 收银界面内容 */}
              <div className="p-6">
                {/* 顶部支付方式栏 */}
                <div className="mb-6 grid grid-cols-4 gap-2">
                  <div className="bg-blue-50 p-2 text-center" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                    <CreditCardIcon className="mx-auto h-4 w-4 text-blue-600 mb-1" />
                    <div className="text-xs text-blue-600">刷卡</div>
                  </div>
                  <div className="bg-green-50 p-2 text-center" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                    <QrCodeIcon className="mx-auto h-4 w-4 text-green-600 mb-1" />
                    <div className="text-xs text-green-600">扫码</div>
                  </div>
                  <div className="bg-purple-50 p-2 text-center">
                    <WifiIcon className="mx-auto h-4 w-4 text-purple-600 mb-1" />
                    <div className="text-xs text-purple-600">NFC</div>
                  </div>
                  <div className="bg-orange-50 p-2 text-center">
                    <GiftIcon className="mx-auto h-4 w-4 text-orange-600 mb-1" />
                    <div className="text-xs text-orange-600">积分</div>
                  </div>
                </div>

                {/* 交易信息显示 */}
                <div className="space-y-4">
                  {/* 当前交易 */}
                  <div className="border border-gray-200 bg-white p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium text-gray-700">当前交易</div>
                      <div className="text-lg font-bold text-green-600">¥128.50</div>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>会员卡支付 · 积分抵扣 ¥8.50</span>
                    </div>
                  </div>

                  {/* 会员信息 */}
                  <div className="border border-gray-200 bg-blue-50 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <UserGroupIcon className="h-4 w-4 text-blue-600" />
                        <div className="text-sm font-medium text-blue-700">VIP会员</div>
                      </div>
                      <div className="text-sm text-blue-600">积分: 2,580</div>
                    </div>
                    <div className="mt-1 text-xs text-blue-600">
                      张女士 · 本月第8次消费 · 享9.5折优惠
                    </div>
                  </div>

                  {/* 支付方式选择 */}
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-gradient-to-r from-blue-500 to-blue-600 p-3 text-center text-white">
                      <div className="text-sm font-medium">刷卡支付</div>
                      <div className="text-xs opacity-90">银行卡闪付</div>
                    </button>
                    <button className="border border-gray-300 bg-white p-3 text-center text-gray-700">
                      <div className="text-sm font-medium">扫码支付</div>
                      <div className="text-xs text-gray-500">微信支付宝</div>
                    </button>
                  </div>

                  {/* 营销活动提示 */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 p-3">
                    <div className="flex items-center space-x-2">
                      <TrophyIcon className="h-4 w-4 text-orange-600" />
                      <div className="text-sm font-medium text-orange-700">
                        满200减20活动进行中
                      </div>
                    </div>
                    <div className="text-xs text-orange-600 mt-1">
                      再消费¥71.50即可享受优惠
                    </div>
                  </div>
                </div>
              </div>

              {/* 底部状态栏 */}
              <div className="border-t border-gray-200 bg-gray-50/80 p-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>设备在线</span>
                  </div>
                  <span>今日交易: 156笔</span>
                </div>
              </div>
            </div>

            {/* 装饰性光效 */}
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-blue-400/10 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 h-16 w-16 bg-indigo-400/10 blur-2xl"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 零售支付特色功能区域组件 - 展示零售行业专属支付功能
 * 采用卡片式网格布局，突出零售支付特色
 *
 * @returns {JSX.Element} 零售支付特色功能区域组件
 */
function RetailPaymentFeaturesSection() {
  const features: RetailPaymentFeature[] = [
    {
      icon: WifiIcon,
      title: 'NFC闪付收款',
      description: '支持Apple Pay、华为Pay、云闪付等NFC支付方式，轻触即付，提升收银效率',
      highlight: '3秒完成支付',
      color: 'text-blue-600',
    },
    {
      icon: GiftIcon,
      title: '会员积分支付',
      description: '内置会员管理系统，支持积分抵扣、等级折扣、储值消费等多种会员权益',
      highlight: '提升复购率35%',
      color: 'text-green-600',
    },
    {
      icon: QrCodeIcon,
      title: '聚合扫码收款',
      description: '一张码支持微信、支付宝、云闪付、数字人民币等全渠道扫码支付',
      highlight: '支持花呗信用卡',
      color: 'text-purple-600',
    },
    {
      icon: CreditCardIcon,
      title: '银行卡刷卡',
      description: '支持芯片卡、磁条卡、贷记卡、借记卡等各类银行卡刷卡支付',
      highlight: '0.38%费率秒到',
      color: 'text-orange-600',
    },
    {
      icon: BanknotesIcon,
      title: '数字人民币',
      description: '官方合作数字人民币支付通道，支持硬钱包、软钱包等多种支付形式',
      highlight: '央行官方认证',
      color: 'text-red-600',
    },
    {
      icon: ChartBarIcon,
      title: '营销数据分析',
      description: '实时统计交易数据、会员消费行为，提供精准营销建议和经营分析',
      highlight: '智能经营助手',
      color: 'text-indigo-600',
    },
  ]





  // 零售支付专属功能 – 展示零售行业专属支付功能，采用卡片式网格布局，突出零售支付特色
  return (
    <section className={clsx('py-16', 'bg-white')} id="features">
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
              'text-gray-900',
            )}
          >
            零售支付专属功能
          </h2>
          <p
            className={clsx(
              'mx-auto max-w-2xl text-lg leading-8',
              'text-gray-600',
            )}
          >
            为零售门店量身定制的支付功能，全面提升收银效率和客户体验
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex h-full transform flex-col overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none"
            >
              <div className="p-5">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center bg-white rounded-lg">
                    <feature.icon
                      className={clsx('h-6 w-6', feature.color)}
                      aria-hidden="true"
                    />
                  </div>
                  <div className="ml-4">
                    <h3
                      className={clsx('text-lg font-semibold', 'text-gray-900')}
                    >
                      {feature.title}
                    </h3>
                    <div className={clsx('text-sm font-medium', feature.color)}>
                      {feature.highlight}
                    </div>
                  </div>
                </div>
                <p className={clsx('text-sm leading-relaxed', 'text-gray-600')}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}



/**
 * 方案优势区域组件 - 展示我们的核心优势
 * 采用卡片式设计，标题单独显示，优势内容双排布局
 *
 * @returns {JSX.Element} 方案优势区域组件
 */
function SolutionAdvantagesSection() {
  return (
    <section className="py-16 sm:py-20 bg-gray-50">
      <Container>
        {/* 标题卡片 - 左右布局 */}
        <div className="mb-12">
          <div className="bg-gradient-to-b from-gray-100 to-white border-2 border-white hover:outline-gray-300 outline-1 outline-gray-200 transition-all duration-200 p-8 rounded-none">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* 左侧文字内容 */}
              <div className="flex-1 text-center lg:text-left">
                <h2 className="text-3xl font-black text-gray-900 sm:text-4xl">
                  我们的方案优势
                </h2>
                <p className="mt-4 text-lg text-gray-600 leading-relaxed">
                  聚合支付场景：实现线上线下统一支付<br />
                  支持商家扫码（B扫C）和用户扫码（C扫B）主流支付方式
                </p>
              </div>
              
              {/* 右侧图片 */}
               <div className="flex-shrink-0">
                 <img 
                   src="/images/screenshots/advantage1.png" 
                   alt="方案优势展示图"
                   className="w-80 h-auto rounded-lg"
                 />
               </div>
            </div>
          </div>
        </div>

        {/* 优势内容 - 双排显示 */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {/* 结算灵活卡片 */}
          <div className="group flex h-full transform flex-col overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white rounded-none p-3 sm:p-4 md:p-6 cursor-pointer">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 group-hover:text-blue-600 transition-colors">
              结算灵活
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3 md:mb-4">
              7*24资金处理，提升平台资金处理效率，降低财务人工成本
            </p>
            <div className="flex justify-center">
              <img 
                src="/images/screenshots/advantage2.png" 
                alt="结算灵活展示图"
                className="h-auto rounded-lg max-w-full"
              />
            </div>
          </div>

          {/* 灵活分账与结算卡片 */}
          <div className="group flex h-full transform flex-col overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white rounded-none p-3 sm:p-4 md:p-6 cursor-pointer">
            <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 sm:mb-3 md:mb-4 group-hover:text-blue-600 transition-colors">
              灵活分账与结算
            </h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-2 sm:mb-3 md:mb-4">
              分账账期、分账金额、分账接收方、结算周期、结算账户由平台灵活定义，统一交易对账和资金结算减少财务压力和运营成本
            </p>
            <div className="flex justify-center">
              <img 
                src="/images/screenshots/advantage3.png" 
                alt="灵活分账与结算展示图"
                className="h-auto rounded-lg max-w-full"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}


/**
 * 零售支付场景区域组件 - 展示零售行业的典型支付应用场景
 * 采用选项卡切换的方式，展示不同场景的详细信息
 *
 * @returns {JSX.Element} 零售支付场景区域组件
 */
function RetailPaymentScenariosSection() {
  const [activeScenario, setActiveScenario] = useState(0)

  const scenarios: RetailPaymentScenario[] = [
    {
      title: '便利店收银',
      description:
        '为便利店提供快速收银解决方案，支持商品扫码、会员识别、多种支付方式，大幅提升收银效率，减少排队时间。',
      features: [
        '商品条码扫描，快速录入商品信息',
        '会员卡自动识别，享受专属优惠',
        '支持现金、刷卡、扫码、NFC等全支付方式',
        '小票自动打印，支持电子小票',
      ],
      benefits: [
        '收银效率提升60%',
        '会员复购率增长40%',
        '减少收银员工作量',
        '提升客户满意度',
      ],
      image: '/images/product/convenience-store.png',
      stats: [
        { label: '日均交易', value: '800+笔' },
        { label: '收银速度', value: '15秒/单' },
        { label: '会员占比', value: '65%' },
      ],
    },
    {
      title: '餐饮门店',
      description:
        '专为餐饮行业打造的收银解决方案，支持扫码点餐、会员储值、分桌结账等功能，提升用餐体验和经营效率。',
      features: [
        '扫码点餐，顾客自助下单减少人工',
        '会员储值系统，提升客户粘性',
        '分桌管理，支持多桌同时结账',
        '营销活动推送，促进二次消费',
      ],
      benefits: [
        '人工成本降低30%',
        '翻台率提升25%',
        '会员储值增长50%',
        '营销转化率提升',
      ],
      image: '/images/product/restaurant.png',
      stats: [
        { label: '日均订单', value: '200+单' },
        { label: '储值会员', value: '1200+人' },
        { label: '营销转化', value: '18%' },
      ],
    },
    {
      title: '服装零售',
      description:
        '为服装零售店提供专业的收银和会员管理系统，支持库存管理、会员等级、积分兑换等功能，助力门店精细化运营。',
      features: [
        '商品库存实时同步，避免超卖',
        '会员等级管理，不同折扣权益',
        '积分兑换系统，提升客户忠诚度',
        '销售数据分析，优化商品结构',
      ],
      benefits: [
        '库存周转率提升20%',
        'VIP会员贡献70%销售额',
        '积分活跃度85%',
        '数据驱动选品',
      ],
      image: '/images/product/clothing-store.png',
      stats: [
        { label: 'VIP会员', value: '2800+人' },
        { label: '积分兑换率', value: '85%' },
        { label: '库存准确率', value: '99.5%' },
      ],
    },
    {
      title: '美容美发',
      description:
        '为美容美发行业提供预约管理和收银一体化解决方案，支持服务预约、会员次卡、技师提成等专业功能。',
      features: [
        '在线预约系统，客户自助预约服务',
        '会员次卡管理，预付费模式稳定现金流',
        '技师提成计算，激励员工积极性',
        '客户档案管理，提供个性化服务',
      ],
      benefits: [
        '预约率提升80%',
        '次卡销售占比60%',
        '客户满意度95%',
        '员工积极性提升',
      ],
      image: '/images/product/beauty-salon.png',
      stats: [
        { label: '月预约量', value: '1500+次' },
        { label: '次卡会员', value: '800+人' },
        { label: '客户留存', value: '78%' },
      ],
    },
  ]

  return (
    <section className={clsx('py-16', 'bg-gray-50')} id="scenarios">
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
              'text-gray-900',
            )}
          >
            零售支付应用场景
          </h2>
          <p
            className={clsx(
              'mx-auto max-w-2xl text-lg leading-8',
              'text-gray-600',
            )}
          >
            覆盖各类零售业态，提供专业的支付和经营解决方案
          </p>
        </div>

        <div className="mt-12">
          {/* 场景选项卡 */}
          <div className="mb-8">
            <div className="flex w-full space-x-1 bg-gray-100 p-1" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
              {scenarios.map((scenario, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScenario(index)}
                  className={clsx(
                    'flex-1 px-6 py-3 text-base font-medium transition-all duration-200',
                    activeScenario === index
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700',
                  )}
                  style={{borderRadius: 'var(--border-radius-medium, 4px)'}}
                >
                  {scenario.title}
                </button>
              ))}
            </div>
          </div>

          {/* 场景详情展示 */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* 左侧：场景描述和特性 */}
            <div className="space-y-6">
              <div>
                <h3
                  className={clsx(
                    'text-2xl font-bold tracking-tight sm:text-3xl',
                    'text-gray-900',
                  )}
                >
                  {scenarios[activeScenario].title}
                </h3>
                <p className={clsx('mt-4 text-lg leading-8', 'text-gray-600')}>
                  {scenarios[activeScenario].description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className={clsx('text-lg font-semibold', 'text-gray-900')}>
                  核心功能
                </h4>
                <ul className="space-y-3">
                  {scenarios[activeScenario].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center text-blue-600">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                      </div>
                      <span
                        className={clsx(
                          'ml-3 text-base leading-7',
                          'text-gray-600',
                        )}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-4">
                <h4 className={clsx('text-lg font-semibold', 'text-gray-900')}>
                  经营收益
                </h4>
                <ul className="space-y-3">
                  {scenarios[activeScenario].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center text-green-600">
                        <ArrowTrendingUpIcon className="h-3 w-3" />
                      </div>
                      <span
                        className={clsx(
                          'ml-3 text-base leading-7',
                          'text-gray-600',
                        )}
                      >
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 统计数据 */}
              {scenarios[activeScenario].stats && (
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                  {scenarios[activeScenario].stats!.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div
                        className={clsx('text-2xl font-bold', 'text-blue-600')}
                      >
                        {stat.value}
                      </div>
                      <div className={clsx('text-sm', 'text-gray-500')}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 右侧：场景模拟界面 */}
            <div className="relative hidden lg:flex">
              <div className="aspect-video overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none backdrop-blur-sm">
                {/* 模拟界面头部 */}
                <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <div className="flex space-x-1">
                      <div className="h-3 w-3 rounded-full bg-red-400"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                      <div className="h-3 w-3 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <div className="text-sm font-medium text-gray-700">
                        {scenarios[activeScenario].title} - 收银系统
                      </div>
                    </div>
                  </div>
                </div>

                {/* 模拟界面内容 */}
                <div className="space-y-4 p-6">
                  {/* 标题栏 */}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {scenarios[activeScenario].title}收银台
                    </h3>
                    <div className="flex space-x-2">
                      <div className="bg-green-100 px-3 py-1 text-xs text-green-800 rounded-none">
                        营业中
                      </div>
                      <div className="bg-blue-100 px-3 py-1 text-xs text-blue-800 rounded-none">
                        会员系统
                      </div>
                    </div>
                  </div>

                  {/* 功能模块 */}
                  <div className="grid grid-cols-2 gap-4">
                    {scenarios[activeScenario].features
                      .slice(0, 4)
                      .map((feature, index) => (
                        <div key={index} className="bg-gray-50 p-3" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                          <div className="mb-2 flex items-center space-x-2">
                            <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            <div className="text-sm font-medium text-gray-700">
                              功能 {index + 1}
                            </div>
                          </div>
                          <div className="line-clamp-2 text-xs text-gray-600">
                            {feature.substring(0, 20)}...
                          </div>
                          <div className="mt-2">
                            <div className="h-1.5 w-full bg-gray-200" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                              <div
                                className="h-1.5 bg-blue-500 transition-all duration-1000"
                                style={{ width: `${85 + index * 3}%`, borderRadius: 'var(--border-radius-medium, 4px)' }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>

                  {/* 统计数据展示 */}
                  {scenarios[activeScenario].stats && (
                    <div className="grid grid-cols-3 gap-3 border-t border-gray-200 pt-4">
                      {scenarios[activeScenario].stats!.map((stat, index) => (
                        <div key={index} className="text-center">
                          <div className="text-lg font-bold text-blue-600">
                            {stat.value}
                          </div>
                          <div className="text-xs text-gray-500">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* 状态栏 */}
                  <div className="flex items-center justify-between border-t border-gray-200 pt-3">
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                        <span>系统正常</span>
                      </div>
                      <div>今日: 86笔</div>
                      <div>会员: 52人</div>
                    </div>
                    <div className="text-xs text-gray-500">更新: 刚刚</div>
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

/**
 * 零售支付设备区域组件 - 展示零售支付设备产品
 * 采用产品卡片布局，突出设备特色和优势
 *
 * @returns {JSX.Element} 零售支付设备区域组件
 */
function RetailPaymentDevicesSection() {
  const devices: RetailPaymentDevice[] = [
    {
      name: '智能POS机',
      type: '双屏收银一体机',
      features: [
        '15.6英寸主屏+11.6英寸客显',
        '安卓13系统，8核CPU',
        '支持刷卡、扫码、NFC、数字人民币',
        '内置会员管理和营销系统',
        '4G全网通+WiFi双频',
      ],
      price: '0元免押',
      highlight: '激活返现299元',
      image: '/images/product/海多财电签(循环版).jpg',
    },
    {
      name: '电签POS机',
      type: '4G电签收款终端',
      features: [
        '4G网络，无需连接手机',
        '电子签名，环保便捷',
        '支持银行卡刷卡支付',
        '0.38%费率，秒到账',
        '小巧便携，适合移动收款',
      ],
      price: '0元免押',
      highlight: '费率0.38%永不+3',
      image: '/images/product/汇来掌柜扫码盒.jpg',
    },
    {
      name: '聚合码牌',
      type: '多合一收款码牌',
      features: [
        '一张码支持全渠道收款',
        '微信、支付宝、云闪付、数字人民币',
        '支持信用卡、花呗、白条',
        '语音播报，防止漏单',
        '防水防晒，持久耐用',
      ],
      price: '0元包邮',
      highlight: '支持信用卡花呗',
      image: '/images/product/汇来掌柜台卡.jpg',
    },
    {
      name: '移动POS机',
      type: '便携式移动收款',
      features: [
        '口袋大小，随身携带',
        '内置电池，续航8小时',
        '4G网络+蓝牙连接',
        '支持扫码、刷卡、NFC',
        '适合外卖、地摊、上门服务',
      ],
      price: '0元免押',
      highlight: '移动收款神器',
      image: '/images/product/汇来掌柜音箱.jpg',
    },
  ]

  return (
    <section className={clsx('py-16', 'bg-white')} id="devices">
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
              'text-gray-900',
            )}
          >
            零售支付设备
          </h2>
          <p
            className={clsx(
              'mx-auto max-w-2xl text-lg leading-8',
              'text-gray-600',
            )}
          >
            多款专业收款设备，满足不同零售场景的支付需求
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {devices.map((device, index) => (
            <div
              key={index}
              className="group relative overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none flex flex-col h-full"
            >
              {/* 设备图片区域 */}
              <div className="aspect-video bg-gradient-to-br from-gray-50 to-gray-100 p-6">
                <div className="flex h-full items-center justify-center">
                  <Image
                    src={device.image}
                    alt={device.name}
                    width={200}
                    height={200}
                    className="h-auto w-auto max-h-full max-w-full object-contain"
                    unoptimized
                  />
                </div>
              </div>

              {/* 设备信息区域 */}
              <div className="p-6">
                <div className="mb-2">
                  <h3 className={clsx('text-lg font-semibold', 'text-gray-900')}>
                    {device.name}
                  </h3>
                  <p className={clsx('text-sm', 'text-gray-500')}>
                    {device.type}
                  </p>
                </div>

                <div className="mb-4">
                  <div className={clsx('text-sm font-medium', 'text-blue-600')}>
                    {device.highlight}
                  </div>
                  <div className={clsx('text-lg font-bold', 'text-gray-900')}>
                    {device.price}
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-gray-600">
                  {device.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></div>
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button
                    href="#contact"
                    variant="solid"
                    color="blue"
                    className="w-full group"
                  >
                    <span>立即申请</span>
                    <ArrowTrendingUpIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              {/* 热门标签 */}
              {index === 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-xs font-medium rounded-none">
                  热门
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 零售支付优势数据区域组件 - 展示零售支付解决方案的核心优势
 * 采用数据展示的方式，突出技术实力和业务成果
 *
 * @returns {JSX.Element} 零售支付优势数据区域组件
 */
function RetailPaymentAdvantagesSection() {
  const advantages: RetailPaymentAdvantage[] = [
    {
      title: '快速结算',
      value: '秒到账',
      description: '7×24小时实时到账',
      icon: ClockIcon,
      trend: '比传统POS快99%',
    },
    {
      title: '多终端支持',
      value: '8种',
      description: '支付方式全覆盖',
      icon: DevicePhoneMobileIcon,
      trend: '满足所有客户需求',
    },
    {
      title: '费率优势',
      value: '0.38%',
      description: '费率永不上调',
      icon: BanknotesIcon,
      trend: '为商户节省成本',
    },
    {
      title: '系统稳定性',
      value: '99.99%',
      description: '服务可用性保障',
      icon: ShieldCheckIcon,
      trend: '金融级安全标准',
    },
    {
      title: '会员转化率',
      value: '85%',
      description: '新客转会员比例',
      icon: UserGroupIcon,
      trend: '提升客户粘性',
    },
    {
      title: '营业额增长',
      value: '35%',
      description: '平均业绩提升',
      icon: ArrowTrendingUpIcon,
      trend: '数字化经营成果',
    },
  ]


  /**
   * 零售支付核心优势数据区域组件 - 展示零售支付解决方案的核心优势
   * 采用数据展示的方式，突出技术实力和业务成果
   *
   * @returns {JSX.Element} 零售支付核心优势数据区域组件
   */
  return (
    <section className={clsx('py-16', 'bg-gray-50')}>
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
              'text-gray-900',
            )}
          >
            零售支付核心优势
          </h2>
          <p
            className={clsx(
              'mx-auto max-w-2xl text-lg leading-8',
              'text-gray-600',
            )}
          >
            用数据说话，展现零售支付解决方案的强大实力
          </p>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-20">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className={`group relative overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_4px_12px_#dce0e8] rounded-none p-4 sm:p-6 ${
                  index === 0 ? 'col-span-2 lg:col-span-1' : ''
                } ${
                  index === advantages.length - 1 ? 'col-span-2 sm:col-span-1 lg:col-span-1' : ''
                }`}
              >
                <ArrowUpRightIcon className="absolute top-3 right-3 h-3 w-3 text-gray-400 group-hover:text-blue-600 transition-colors duration-200 sm:top-4 sm:right-4 sm:h-4 sm:w-4" />
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span
                      className="inline-flex items-center justify-center p-1.5 bg-gray-100 rounded-lg flex-shrink-0 sm:p-2"
                    >
                      <advantage.icon className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5" aria-hidden="true" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div
                        className={clsx('text-2xl sm:text-3xl font-bold mb-1', 'text-gray-900')}
                      >
                        {advantage.value}
                      </div>
                      <h3 className="text-sm font-semibold text-gray-900 leading-tight sm:text-lg">
                        {advantage.title}
                      </h3>
                    </div>
                  </div>
                  <hr className="border-t border-gray-300" />
                  <div className="space-y-2">
                    <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                      {advantage.description}
                    </p>
                    <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 border border-blue-100 text-blue-700 sm:px-3 sm:text-sm">
                      {advantage.trend}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 零售客户评价区域组件 - 展示零售客户对支付解决方案的评价
 * 采用卡片式布局，突出客户声音和实际效果
 *
 * @returns {JSX.Element} 零售客户评价区域组件
 */
function RetailTestimonialsSection() {
  const testimonials: RetailTestimonial[] = [
    {
      name: '李老板',
      role: '店长',
      business: '连锁便利店',
      content:
        '使用智能POS机后，收银效率提升了60%，会员系统帮我们留住了很多老客户，营业额比去年同期增长了40%。',
      avatar: '/images/avatars/avatar1.jpg',
      rating: 5,
      improvement: '营业额增长40%',
    },
    {
      name: '张女士',
      role: '老板娘',
      business: '奶茶店',
      content:
        '扫码点餐功能太实用了，顾客可以自己下单，我们专心做产品就行，而且会员储值功能让现金流更稳定。',
      avatar: '/images/avatars/avatar2.jpg',
      rating: 5,
      improvement: '人工成本降低30%',
    },
    {
      name: '王总',
      role: '区域经理',
      business: '服装连锁',
      content:
        '多店数据统一管理，库存同步，会员通用，大大提升了我们的运营效率，客户满意度也明显提升。',
      avatar: '/images/avatars/avatar3.jpg',
      rating: 5,
      improvement: '运营效率提升50%',
    },
  ]

  return (
    <section className={clsx('py-16', 'bg-white')}>
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
              'text-gray-900',
            )}
          >
            零售客户评价
          </h2>
          <p
            className={clsx(
              'mx-auto max-w-2xl text-lg leading-8',
              'text-gray-600',
            )}
          >
            听听零售商户对我们支付解决方案的真实评价
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none"
            >
              <div className="p-6">
                <div className="space-y-4">
                  {/* 评分 */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon
                          key={i}
                          className="h-5 w-5 fill-current text-yellow-400"
                        />
                      ))}
                    </div>
                    <div className={clsx('text-sm font-medium', 'text-green-600')}>
                      {testimonial.improvement}
                    </div>
                  </div>

                  {/* 评价内容 */}
                  <p className={clsx('text-base leading-7', 'text-gray-600')}>
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* 客户信息 */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                    <div className="flex h-10 w-10 items-center justify-center bg-white border border-gray-200 rounded-md">
                      <UserGroupIcon className="h-6 w-6 text-gray-600" />
                    </div>
                    <div>
                      <div
                        className={clsx('text-sm font-semibold', 'text-gray-900')}
                      >
                        {testimonial.name}
                      </div>
                      <div className={clsx('text-sm', 'text-gray-500')}>
                        {testimonial.role} · {testimonial.business}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 立即开始区域组件 - 引导用户开始使用零售支付解决方案
 * 采用CTA设计，突出行动引导和联系方式
 *
 * @returns {JSX.Element} 立即开始区域组件
 */
function GetStartedSection() {
  return (
    <section
      className={clsx('py-16', 'bg-gradient-to-r from-blue-600 to-indigo-600')}
      id="contact"
    >
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
              'text-white',
            )}
          >
            立即开启零售支付新体验
          </h2>
          <p
            className={clsx(
              'mx-auto max-w-2xl text-lg leading-8',
              'text-blue-100',
            )}
          >
            0元免押金领取设备，专业团队提供一对一服务，助力您的零售业务快速增长
          </p>
        </div>

        {/* 服务承诺 */}
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="text-center">
            <p className="text-blue-100 mb-4">
              <strong className="text-white">服务承诺：</strong>
              当天申请，次日发货 | 30天内激活 | 终身技术支持
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-blue-200">
              <span>✓ 央行支付牌照</span>
              <span>✓ 银联一清认证</span>
              <span>✓ 资金安全保障</span>
              <span>✓ 7×24客服支持</span>
            </div>
          </div>
        </div>

        {/* 按钮区域 - 移动到底部 */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          {/* 主要按钮 - 立即申请 */}
          <a
            href="tel:400-123-4567"
            className="group relative inline-flex w-full min-w-[160px] items-center justify-center bg-white px-6 py-3 text-base font-semibold text-blue-600 shadow-md transition-all duration-300 hover:shadow-lg focus:ring-4 focus:ring-white/30 focus:outline-none sm:w-auto"
            style={{borderRadius: 'var(--border-radius-medium, 4px)'}}
          >
            <span className="relative z-10 flex items-center">
              立即申请设备
              <CreditCardIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            {/* 按钮光效 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>

          {/* 次要按钮 - 在线咨询 */}
          <a
            href="#consultation"
            className="group relative inline-flex w-full min-w-[160px] items-center justify-center border-2 border-white/30 bg-transparent px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-md focus:ring-4 focus:ring-white/30 focus:outline-none sm:w-auto"
            style={{borderRadius: 'var(--border-radius-medium, 4px)'}}
          >
            <span className="relative z-10 flex items-center">
              在线咨询
              <PhoneIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            {/* 按钮光效 */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>
        </div>
      </Container>
    </section>
  )
}

/**
 * 零售行业支付解决方案页面 - 主页面组件
 * 整合所有零售行业支付解决方案相关的子组件，构建完整的页面结构
 *
 * @returns {JSX.Element} 零售行业支付解决方案页面
 */
export default function RetailPaymentSolutionPage() {
  return (
    <>
      <Header />
      <main className="pt-10 sm:pt-0">

        <HeroSection />

        <RetailPaymentFeaturesSection />
        <SolutionAdvantagesSection />
        <Payindustry />
        <RetailPaymentDevicesSection />
        <RetailPaymentAdvantagesSection />
        <RetailTestimonialsSection />
        <GetStartedSection />
      </main>
      <Footer />
    </>
  )
}
