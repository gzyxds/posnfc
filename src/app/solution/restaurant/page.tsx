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
  CakeIcon,
  TableCellsIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import clsx from 'clsx'
import Image from 'next/image'

// ==================== 页面SEO元数据配置 ====================
// 注意：客户端组件不支持静态元数据导出
// SEO元数据已在 ./layout.tsx 中配置，包含完整的页面标题、描述和关键词

/**
 * 餐饮支付特色功能接口定义 - 用于展示餐饮行业专属支付功能的数据结构
 */
interface RestaurantPaymentFeature {
  icon: React.ComponentType<{ className?: string }> // 功能图标组件
  title: string // 功能标题
  description: string // 功能描述
  highlight: string // 核心亮点
  color: string // 颜色样式类
}

/**
 * 餐饮支付场景接口定义 - 用于展示餐饮行业典型支付场景的数据结构
 */
interface RestaurantPaymentScenario {
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
 * 餐饮支付设备接口 - 用于展示餐饮支付设备的数据结构
 */
interface RestaurantPaymentDevice {
  name: string // 设备名称
  type: string // 设备类型
  features: string[] // 设备特性
  price: string // 设备价格
  highlight: string // 核心卖点
  image: string // 设备图片
}

/**
 * 餐饮支付优势数据接口 - 用于展示餐饮支付解决方案优势的数据结构
 */
interface RestaurantPaymentAdvantage {
  title: string // 优势标题
  value: string // 优势数值
  description: string // 优势描述
  icon: React.ComponentType<{ className?: string }> // 优势图标组件
  trend: string // 趋势描述
}

/**
 * 餐饮客户评价接口 - 用于展示餐饮客户对支付解决方案评价的数据结构
 */
interface RestaurantTestimonial {
  name: string // 客户姓名
  role: string // 客户角色
  business: string // 业务类型
  content: string // 评价内容
  avatar: string // 头像路径
  rating: number // 评分(1-5)
  improvement: string // 改善效果
}

/**
 * Hero区域组件 - 餐饮行业支付解决方案首页英雄区域
 * 采用左文右图布局设计，突出餐饮支付特色
 * 特点：聚焦餐饮支付功能、突出核心优势、强调餐饮场景
 *
 * 功能包括：
 * 1. 展示餐饮行业支付解决方案的主要标题和简介
 * 2. 突出扫码点餐、会员储值等核心功能
 * 3. 右侧展示餐饮收银终端预览
 * 4. 响应式设计，适配不同屏幕尺寸
 *
 * @returns {JSX.Element} Hero区域组件
 */
function HeroSection() {
  // 餐饮支付核心功能标签
  const paymentFeatures = [
    { name: '扫码点餐', href: '#qr-ordering' },
    { name: '会员储值', href: '#member-recharge' },
    { name: '分桌结账', href: '#table-billing' },
    { name: '刷卡秒到', href: '#card-payment' },
    { name: '数字人民币', href: '#digital-currency' },
  ]

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-orange-50 via-white to-red-50 py-16 sm:py-20 md:py-24 lg:py-32">
      {/* 背景网格图案 */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-orange-200/30"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="restaurant-payment-grid"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#restaurant-payment-grid)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      {/* 装饰元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 h-64 w-64 bg-orange-400/10 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 h-48 w-48 bg-red-400/10 opacity-40 blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* 左侧内容区 */}
          <div className="space-y-6 text-center lg:space-y-8 lg:text-left">
            {/* 品牌标识 */}
            <div className="inline-flex items-center border border-orange-200 bg-orange-50 px-3 py-2 text-xs font-medium text-orange-900 sm:px-4 sm:text-sm">
              <CakeIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              餐饮行业支付解决方案
            </div>

            {/* 主标题 */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  智慧餐厅
                </span>
                <br />
                收银专家
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg md:text-xl lg:mx-0 lg:leading-8">
                扫码点餐+会员储值+分桌结账，0.38%费率秒到账
              </p>
              <p className="mx-auto max-w-xl text-sm leading-6 text-gray-500 sm:text-base lg:mx-0 lg:leading-7">
                专为餐饮门店打造的一站式支付解决方案，支持扫码点餐、会员储值、分桌管理等功能，提升翻台率和经营效率
              </p>
            </div>

            {/* 核心优势标签 */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              {paymentFeatures.map((feature) => (
                <a
                  key={feature.name}
                  href={feature.href}
                  className="border border-orange-200 bg-white px-3 py-1.5 text-xs font-medium text-orange-900 transition-all hover:border-orange-300 hover:bg-orange-50 sm:px-4 sm:py-2 sm:text-sm"
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
                className="group w-full sm:w-auto bg-orange-600 hover:bg-orange-700"
              >
                <span>免费申请设备</span>
                <CakeIcon className="ml-2 h-4 w-4 transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
              </Button>
              <Button
                href="#scenarios"
                variant="outline"
                className="group w-full sm:w-auto border-orange-600 text-orange-600 hover:bg-orange-50"
              >
                <span>查看餐厅案例</span>
                <ShoppingCartIcon className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
              </Button>
            </div>

            {/* 核心数据展示 */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">0.38%</div>
                <div className="text-sm text-gray-500">费率永不+3</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">秒到账</div>
                <div className="text-sm text-gray-500">7×24小时</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">+25%</div>
                <div className="text-sm text-gray-500">翻台率提升</div>
              </div>
            </div>
          </div>

          {/* 右侧展示区 - 餐饮收银终端预览 */}
          <div className="relative mt-8 lg:mt-0">
            <div className="hover:shadow-3xl relative border border-gray-200/80 bg-gradient-to-br from-white to-gray-50 shadow-2xl transition-all duration-500 hover:-translate-y-1">
              {/* 设备控制栏 */}
              <div className="border-b border-gray-200 bg-gray-50/80 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 bg-red-400"></div>
                    <div className="h-3 w-3 bg-yellow-400"></div>
                    <div className="h-3 w-3 bg-green-400"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    智慧餐厅收银系统
                  </div>
                  <div className="w-6"></div>
                </div>
              </div>

              {/* 收银界面内容 */}
              <div className="p-6">
                {/* 顶部餐厅功能栏 */}
                <div className="mb-6 grid grid-cols-4 gap-2">
                  <div className="bg-orange-50 p-2 text-center">
                    <QrCodeIcon className="mx-auto h-4 w-4 text-orange-600 mb-1" />
                    <div className="text-xs text-orange-600">扫码点餐</div>
                  </div>
                  <div className="bg-green-50 p-2 text-center">
                    <TableCellsIcon className="mx-auto h-4 w-4 text-green-600 mb-1" />
                    <div className="text-xs text-green-600">分桌管理</div>
                  </div>
                  <div className="bg-purple-50 p-2 text-center">
                    <GiftIcon className="mx-auto h-4 w-4 text-purple-600 mb-1" />
                    <div className="text-xs text-purple-600">会员储值</div>
                  </div>
                  <div className="bg-blue-50 p-2 text-center">
                    <CreditCardIcon className="mx-auto h-4 w-4 text-blue-600 mb-1" />
                    <div className="text-xs text-blue-600">收银结账</div>
                  </div>
                </div>

                {/* 当前订单信息 */}
                <div className="space-y-4">
                  {/* 桌台信息 */}
                  <div className="border border-gray-200 bg-white p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm font-medium text-gray-700">8号桌 · 4人用餐</div>
                      <div className="text-lg font-bold text-orange-600">¥186.50</div>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <div className="h-2 w-2 bg-orange-400 rounded-full animate-pulse"></div>
                      <span>已点餐 · 等待结账</span>
                    </div>
                  </div>

                  {/* 会员信息 */}
                  <div className="border border-gray-200 bg-green-50 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <UserGroupIcon className="h-4 w-4 text-green-600" />
                        <div className="text-sm font-medium text-green-700">金卡会员</div>
                      </div>
                      <div className="text-sm text-green-600">储值余额: ¥580</div>
                    </div>
                    <div className="mt-1 text-xs text-green-600">
                      李先生 · 本月第12次用餐 · 享8.8折优惠
                    </div>
                  </div>

                  {/* 菜品列表 */}
                  <div className="border border-gray-200 bg-gray-50 p-3">
                    <div className="text-sm font-medium text-gray-700 mb-2">本桌菜品</div>
                    <div className="space-y-1 text-xs text-gray-600">
                      <div className="flex justify-between">
                        <span>宫保鸡丁 × 1</span>
                        <span>¥38</span>
                      </div>
                      <div className="flex justify-between">
                        <span>麻婆豆腐 × 1</span>
                        <span>¥28</span>
                      </div>
                      <div className="flex justify-between">
                        <span>米饭 × 4</span>
                        <span>¥12</span>
                      </div>
                      <div className="flex justify-between">
                        <span>饮料 × 2</span>
                        <span>¥16</span>
                      </div>
                    </div>
                  </div>

                  {/* 支付方式选择 */}
                  <div className="grid grid-cols-2 gap-2">
                    <button className="bg-gradient-to-r from-green-500 to-green-600 p-3 text-center text-white">
                      <div className="text-sm font-medium">储值支付</div>
                      <div className="text-xs opacity-90">余额充足</div>
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
                        满200减30活动进行中
                      </div>
                    </div>
                    <div className="text-xs text-orange-600 mt-1">
                      再消费¥13.50即可享受优惠
                    </div>
                  </div>
                </div>
              </div>

              {/* 底部状态栏 */}
              <div className="border-t border-gray-200 bg-gray-50/80 p-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span>营业中</span>
                  </div>
                  <span>今日翻台: 3.2次</span>
                </div>
              </div>
            </div>

            {/* 装饰性光效 */}
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-orange-400/10 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 h-16 w-16 bg-red-400/10 blur-2xl"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 餐饮支付特色功能区域组件 - 展示餐饮行业专属支付功能
 * 采用卡片式网格布局，突出餐饮支付特色
 *
 * @returns {JSX.Element} 餐饮支付特色功能区域组件
 */
function RestaurantPaymentFeaturesSection() {
  const features: RestaurantPaymentFeature[] = [
    {
      icon: QrCodeIcon,
      title: '扫码点餐系统',
      description: '顾客扫码自助点餐下单，减少服务员工作量，提升点餐效率和用餐体验',
      highlight: '人工成本降低30%',
      color: 'text-orange-600',
    },
    {
      icon: GiftIcon,
      title: '会员储值系统',
      description: '支持会员充值储值、等级折扣、积分兑换等功能，提升客户粘性和复购率',
      highlight: '复购率提升40%',
      color: 'text-green-600',
    },
    {
      icon: TableCellsIcon,
      title: '分桌管理系统',
      description: '支持多桌同时点餐结账，桌台状态实时更新，提升餐厅运营效率',
      highlight: '翻台率提升25%',
      color: 'text-purple-600',
    },
    {
      icon: CreditCardIcon,
      title: '多元支付收款',
      description: '支持刷卡、扫码、NFC、现金等多种支付方式，满足不同客户支付习惯',
      highlight: '0.38%费率秒到',
      color: 'text-blue-600',
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
      title: '经营数据分析',
      description: '实时统计营业数据、菜品销量、客流分析，提供精准经营建议',
      highlight: '数据驱动经营',
      color: 'text-indigo-600',
    },
  ]

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
            餐饮支付专属功能
          </h2>
          <p
            className={clsx(
              'mx-auto max-w-2xl text-lg leading-8',
              'text-gray-600',
            )}
          >
            为餐饮门店量身定制的支付功能，全面提升经营效率和客户体验
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className={clsx(
                'group relative p-6 transition-all duration-300',
                'bg-gray-50 hover:bg-white hover:shadow-lg border border-gray-200 hover:border-gray-300',
              )}
            >
              <div className="text-left">
                <div className="mb-4 flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center bg-white border border-gray-200 group-hover:border-gray-300">
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
 * 餐饮支付场景区域组件 - 展示餐饮行业的典型支付应用场景
 * 采用选项卡切换的方式，展示不同场景的详细信息
 *
 * @returns {JSX.Element} 餐饮支付场景区域组件
 */
function RestaurantPaymentScenariosSection() {
  const [activeScenario, setActiveScenario] = useState(0)

  const scenarios: RestaurantPaymentScenario[] = [
    {
      title: '快餐连锁店',
      description:
        '为快餐连锁店提供高效收银解决方案，支持快速点餐、多种支付方式、会员积分等功能，大幅提升服务效率和客户满意度。',
      features: [
        '快速点餐系统，缩短排队时间',
        '多种支付方式，满足不同客户需求',
        '会员积分系统，提升客户忠诚度',
        '营业数据统计，优化经营策略',
      ],
      benefits: [
        '服务效率提升50%',
        '排队时间减少60%',
        '会员复购率增长35%',
        '营业额提升20%',
      ],
      image: '/images/product/fast-food.png',
      stats: [
        { label: '日均订单', value: '500+单' },
        { label: '平均出餐', value: '3分钟' },
        { label: '会员占比', value: '70%' },
      ],
    },
    {
      title: '正餐餐厅',
      description:
        '专为正餐餐厅打造的智慧收银解决方案，支持扫码点餐、分桌管理、会员储值等功能，提升用餐体验和翻台率。',
      features: [
        '扫码点餐，顾客自助下单减少等待',
        '分桌管理，多桌同时服务提升效率',
        '会员储值系统，稳定现金流',
        '菜品推荐，提升客单价',
      ],
      benefits: [
        '翻台率提升25%',
        '人工成本降低30%',
        '客单价提升15%',
        '会员储值增长60%',
      ],
      image: '/images/product/restaurant.png',
      stats: [
        { label: '翻台率', value: '3.2次/天' },
        { label: '储值会员', value: '800+人' },
        { label: '客单价', value: '¥128' },
      ],
    },
    {
      title: '奶茶咖啡店',
      description:
        '为奶茶咖啡店提供专业的点餐收银系统，支持在线预订、会员等级、积分兑换等功能，助力门店精细化运营。',
      features: [
        '在线预订系统，避免排队等待',
        '会员等级管理，不同折扣权益',
        '积分兑换系统，提升客户粘性',
        '销售数据分析，优化产品结构',
      ],
      benefits: [
        '订单效率提升40%',
        'VIP会员贡献65%销售额',
        '积分活跃度90%',
        '复购率提升45%',
      ],
      image: '/images/product/coffee-shop.png',
      stats: [
        { label: '日均订单', value: '300+杯' },
        { label: 'VIP会员', value: '1200+人' },
        { label: '积分兑换率', value: '90%' },
      ],
    },
    {
      title: '火锅烧烤店',
      description:
        '为火锅烧烤店提供桌台管理和收银一体化解决方案，支持桌台预约、计时收费、会员储值等专业功能。',
      features: [
        '桌台预约系统，客户提前预订座位',
        '计时收费功能，按时长精准计费',
        '会员储值管理，预付费模式稳定现金流',
        '菜品库存管理，避免缺货影响体验',
      ],
      benefits: [
        '预约率提升70%',
        '储值占比50%',
        '客户满意度95%',
        '库存周转率提升',
      ],
      image: '/images/product/hotpot.png',
      stats: [
        { label: '月预约量', value: '2000+次' },
        { label: '储值会员', value: '600+人' },
        { label: '客户留存', value: '82%' },
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
            餐饮支付应用场景
          </h2>
          <p
            className={clsx(
              'mx-auto max-w-2xl text-lg leading-8',
              'text-gray-600',
            )}
          >
            覆盖各类餐饮业态，提供专业的支付和经营解决方案
          </p>
        </div>

        <div className="mt-12">
          {/* 场景选项卡 */}
          <div className="mb-8">
            <div className="flex w-full space-x-1 bg-gray-100 p-1">
              {scenarios.map((scenario, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScenario(index)}
                  className={clsx(
                    'flex-1 px-6 py-3 text-base font-medium transition-all duration-200',
                    activeScenario === index
                      ? 'bg-white text-orange-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700',
                  )}
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
                      <div className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center text-orange-600">
                        <div className="h-2 w-2 rounded-full bg-orange-600"></div>
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
                        className={clsx('text-2xl font-bold', 'text-orange-600')}
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
              <div className="aspect-video overflow-hidden rounded-lg border border-gray-200 bg-white/80 shadow-lg backdrop-blur-sm">
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
                      <div className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-800">
                        营业中
                      </div>
                      <div className="rounded-full bg-orange-100 px-3 py-1 text-xs text-orange-800">
                        会员系统
                      </div>
                    </div>
                  </div>

                  {/* 功能模块 */}
                  <div className="grid grid-cols-2 gap-4">
                    {scenarios[activeScenario].features
                      .slice(0, 4)
                      .map((feature, index) => (
                        <div key={index} className="rounded-lg bg-gray-50 p-3">
                          <div className="mb-2 flex items-center space-x-2">
                            <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                            <div className="text-sm font-medium text-gray-700">
                              功能 {index + 1}
                            </div>
                          </div>
                          <div className="line-clamp-2 text-xs text-gray-600">
                            {feature.substring(0, 20)}...
                          </div>
                          <div className="mt-2">
                            <div className="h-1.5 w-full rounded-full bg-gray-200">
                              <div
                                className="h-1.5 rounded-full bg-orange-500 transition-all duration-1000"
                                style={{ width: `${85 + index * 3}%` }}
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
                          <div className="text-lg font-bold text-orange-600">
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
                      <div>今日: 126单</div>
                      <div>会员: 68人</div>
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
 * 餐饮支付设备区域组件 - 展示餐饮支付设备产品
 * 采用产品卡片布局，突出设备特色和优势
 *
 * @returns {JSX.Element} 餐饮支付设备区域组件
 */
function RestaurantPaymentDevicesSection() {
  const devices: RestaurantPaymentDevice[] = [
    {
      name: '智能收银一体机',
      type: '双屏餐厅收银系统',
      features: [
        '15.6英寸主屏+11.6英寸客显',
        '内置扫码点餐和会员系统',
        '支持分桌管理和计时收费',
        '4G全网通+WiFi双频',
        '安卓13系统，8核CPU',
      ],
      price: '0元免押',
      highlight: '激活返现299元',
      image: '/images/product/restaurant-pos.png',
    },
    {
      name: '扫码点餐桌牌',
      type: '自助点餐二维码',
      features: [
        '顾客扫码自助点餐下单',
        '菜品图片展示和详细介绍',
        '支持会员登录享受折扣',
        '实时菜品库存状态更新',
        '防水防油污材质制作',
      ],
      price: '0元包邮',
      highlight: '人工成本降低30%',
      image: '/images/product/table-qr.png',
    },
    {
      name: '聚合收款码牌',
      type: '多合一收银码牌',
      features: [
        '支持微信、支付宝、云闪付',
        '兼容信用卡、花呗、白条',
        '语音播报防止漏单',
        '可设置固定金额或自定义',
        '亚克力材质防水防晒',
      ],
      price: '0元包邮',
      highlight: '支持信用卡花呗',
      image: '/images/product/payment-qr.png',
    },
    {
      name: '移动点餐设备',
      type: '服务员专用点餐机',
      features: [
        '7英寸触摸屏，操作简便',
        '内置点餐系统和菜品库',
        '支持桌台管理和订单同步',
        '长续航电池，全天使用',
        '防摔防水，适合餐厅环境',
      ],
      price: '0元免押',
      highlight: '提升点餐效率',
      image: '/images/product/mobile-ordering.png',
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
            餐饮支付设备
          </h2>
          <p
            className={clsx(
              'mx-auto max-w-2xl text-lg leading-8',
              'text-gray-600',
            )}
          >
            多款专业餐饮设备，满足不同餐厅场景的经营需求
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {devices.map((device, index) => (
            <div
              key={index}
              className={clsx(
                'group relative overflow-hidden border border-gray-200 bg-white transition-all duration-300',
                'hover:-translate-y-1 hover:shadow-lg hover:border-gray-300',
              )}
            >
              {/* 设备图片区域 */}
              <div className="aspect-square bg-gradient-to-br from-orange-50 to-red-50 p-6">
                <div className="flex h-full items-center justify-center">
                  <div className="text-6xl text-orange-400">🍽️</div>
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
                  <div className={clsx('text-sm font-medium', 'text-orange-600')}>
                    {device.highlight}
                  </div>
                  <div className={clsx('text-lg font-bold', 'text-gray-900')}>
                    {device.price}
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-gray-600">
                  {device.features.slice(0, 3).map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-orange-600"></div>
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Button
                    href="#contact"
                    variant="solid"
                    color="blue"
                    className="w-full group bg-orange-600 hover:bg-orange-700"
                  >
                    <span>立即申请</span>
                    <ArrowTrendingUpIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>

              {/* 热门标签 */}
              {index === 0 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 text-xs font-medium">
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
 * 餐饮支付优势数据区域组件 - 展示餐饮支付解决方案的核心优势
 * 采用数据展示的方式，突出技术实力和业务成果
 *
 * @returns {JSX.Element} 餐饮支付优势数据区域组件
 */
function RestaurantPaymentAdvantagesSection() {
  const advantages: RestaurantPaymentAdvantage[] = [
    {
      title: '快速结算',
      value: '秒到账',
      description: '7×24小时实时到账',
      icon: ClockIcon,
      trend: '比传统收银快99%',
    },
    {
      title: '翻台率提升',
      value: '+25%',
      description: '平均翻台率提升',
      icon: TableCellsIcon,
      trend: '扫码点餐效率提升',
    },
    {
      title: '费率优势',
      value: '0.38%',
      description: '费率永不上调',
      icon: BanknotesIcon,
      trend: '为餐厅节省成本',
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
      value: '80%',
      description: '新客转会员比例',
      icon: UserGroupIcon,
      trend: '储值系统效果显著',
    },
    {
      title: '人工成本节省',
      value: '30%',
      description: '服务员工作量减少',
      icon: CurrencyDollarIcon,
      trend: '扫码点餐自动化',
    },
  ]

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
            餐饮支付核心优势
          </h2>
          <p
            className={clsx(
              'mx-auto max-w-2xl text-lg leading-8',
              'text-gray-600',
            )}
          >
            用数据说话，展现餐饮支付解决方案的强大实力
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={clsx(
                'group border border-gray-200 p-6 transition-all duration-300',
                'bg-white hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg',
              )}
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center bg-orange-50 border border-orange-200 group-hover:bg-orange-100">
                    <advantage.icon
                      className="h-6 w-6 text-orange-600"
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div
                  className={clsx('mb-2 text-3xl font-bold', 'text-gray-900')}
                >
                  {advantage.value}
                </div>
                <h3
                  className={clsx(
                    'mb-2 text-lg font-semibold',
                    'text-gray-900',
                  )}
                >
                  {advantage.title}
                </h3>
                <p className={clsx('text-sm mb-2', 'text-gray-600')}>
                  {advantage.description}
                </p>
                <div className={clsx('text-xs font-medium', 'text-orange-600')}>
                  {advantage.trend}
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
 * 餐饮客户评价区域组件 - 展示餐饮客户对支付解决方案的评价
 * 采用卡片式布局，突出客户声音和实际效果
 *
 * @returns {JSX.Element} 餐饮客户评价区域组件
 */
function RestaurantTestimonialsSection() {
  const testimonials: RestaurantTestimonial[] = [
    {
      name: '陈老板',
      role: '店长',
      business: '川菜餐厅',
      content:
        '使用扫码点餐系统后，服务员的工作量减少了很多，客人也觉得很方便。翻台率比以前提升了25%，营业额明显增长。',
      avatar: '/images/avatars/avatar1.jpg',
      rating: 5,
      improvement: '翻台率提升25%',
    },
    {
      name: '李经理',
      role: '区域经理',
      business: '火锅连锁',
      content:
        '会员储值系统太实用了，现在有50%的客户都办了储值卡，现金流更稳定，而且客户粘性也大大提升。',
      avatar: '/images/avatars/avatar2.jpg',
      rating: 5,
      improvement: '储值占比50%',
    },
    {
      name: '张女士',
      role: '老板娘',
      business: '奶茶店',
      content:
        '智能收银系统操作简单，员工很快就学会了。积分系统让客户复购率提升了40%，生意越来越好。',
      avatar: '/images/avatars/avatar3.jpg',
      rating: 5,
      improvement: '复购率提升40%',
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
            餐饮客户评价
          </h2>
          <p
            className={clsx(
              'mx-auto max-w-2xl text-lg leading-8',
              'text-gray-600',
            )}
          >
            听听餐饮商户对我们支付解决方案的真实评价
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={clsx(
                'p-6 transition-all duration-300 border border-gray-200',
                'bg-white hover:shadow-lg hover:border-gray-300',
              )}
            >
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
                  <div className="flex h-10 w-10 items-center justify-center bg-orange-100">
                    <CakeIcon className="h-6 w-6 text-orange-600" />
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
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 立即开始区域组件 - 引导用户开始使用餐饮支付解决方案
 * 采用CTA设计，突出行动引导和联系方式
 *
 * @returns {JSX.Element} 立即开始区域组件
 */
function GetStartedSection() {
  return (
    <section
      className={clsx('py-16', 'bg-gradient-to-r from-orange-600 to-red-600')}
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
            立即开启智慧餐厅新体验
          </h2>
          <p
            className={clsx(
              'mx-auto max-w-2xl text-lg leading-8',
              'text-orange-100',
            )}
          >
            0元免押金领取设备，专业团队提供一对一服务，助力您的餐厅业务快速增长
          </p>
        </div>

        {/* 核心卖点 */}
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center bg-white/20 rounded-full">
              <BanknotesIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">0元免押</h3>
            <p className="text-orange-100">设备免费领取，激活返现299元</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center bg-white/20 rounded-full">
              <ClockIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">秒到账</h3>
            <p className="text-orange-100">0.38%费率，7×24小时实时到账</p>
          </div>
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center bg-white/20 rounded-full">
              <TableCellsIcon className="h-6 w-6 text-white" />
            </div>
            <h3 className="mb-2 text-lg font-semibold text-white">翻台率+25%</h3>
            <p className="text-orange-100">扫码点餐，提升经营效率</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          {/* 主要按钮 - 立即申请 */}
          <a
            href="tel:400-123-4567"
            className="group relative inline-flex w-full min-w-[160px] items-center justify-center bg-white px-6 py-3 text-base font-semibold text-orange-600 shadow-md transition-all duration-300 hover:shadow-lg focus:ring-4 focus:ring-white/30 focus:outline-none sm:w-auto"
          >
            <span className="relative z-10 flex items-center">
              立即申请设备
              <CakeIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            {/* 按钮光效 */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-50 to-red-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>

          {/* 次要按钮 - 在线咨询 */}
          <a
            href="#consultation"
            className="group relative inline-flex w-full min-w-[160px] items-center justify-center border-2 border-white/30 bg-transparent px-6 py-3 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-md focus:ring-4 focus:ring-white/30 focus:outline-none sm:w-auto"
          >
            <span className="relative z-10 flex items-center">
              在线咨询
              <PhoneIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            {/* 按钮光效 */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          </a>
        </div>

        {/* 联系信息 */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <PhoneIcon className="mx-auto mb-3 h-8 w-8 text-orange-200" />
            <h3 className="mb-2 text-lg font-semibold text-white">电话申请</h3>
            <p className="text-orange-100">400-123-4567</p>
            <p className="text-sm text-orange-200">工作日9:00-18:00</p>
          </div>
          <div className="text-center">
            <GlobeAltIcon className="mx-auto mb-3 h-8 w-8 text-orange-200" />
            <h3 className="mb-2 text-lg font-semibold text-white">在线申请</h3>
            <p className="text-orange-100">官网在线提交</p>
            <p className="text-sm text-orange-200">24小时受理</p>
          </div>
          <div className="text-center">
            <UsersIcon className="mx-auto mb-3 h-8 w-8 text-orange-200" />
            <h3 className="mb-2 text-lg font-semibold text-white">专属顾问</h3>
            <p className="text-orange-100">一对一服务</p>
            <p className="text-sm text-orange-200">免费培训指导</p>
          </div>
        </div>

        {/* 服务承诺 */}
        <div className="mt-12 border-t border-white/20 pt-8">
          <div className="text-center">
            <p className="text-orange-100 mb-4">
              <strong className="text-white">服务承诺：</strong>
              当天申请，次日发货 | 30天内激活 | 终身技术支持
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-orange-200">
              <span>✓ 央行支付牌照</span>
              <span>✓ 银联一清认证</span>
              <span>✓ 资金安全保障</span>
              <span>✓ 7×24客服支持</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 餐饮行业支付解决方案页面 - 主页面组件
 * 整合所有餐饮行业支付解决方案相关的子组件，构建完整的页面结构
 *
 * @returns {JSX.Element} 餐饮行业支付解决方案页面
 */
export default function RestaurantPaymentSolutionPage() {
  return (
    <>
      <Header />
      <main className="pt-10 sm:pt-0">
        <HeroSection />
        <RestaurantPaymentFeaturesSection />
        <RestaurantPaymentScenariosSection />
        <RestaurantPaymentDevicesSection />
        <RestaurantPaymentAdvantagesSection />
        <RestaurantTestimonialsSection />
        <GetStartedSection />
      </main>
      <Footer />
    </>
  )
}