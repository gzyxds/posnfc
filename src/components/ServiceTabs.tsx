'use client'

import React, { useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { Container } from '@/components/Container'
import clsx from 'clsx'

/**
 * 产品数据类型定义
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
  badgeColor: string
}

/**
 * 服务选项卡数据类型定义
 */
interface ServiceTab {
  id: string
  name: string
  products: Product[]
}

/**
 * 服务选项卡数据配置
 */
const serviceTabs: ServiceTab[] = [
  {
    id: 'live-entertainment',
    name: '泛娱乐直播',
    products: [
      {
        id: 'live-streaming',
        name: '企业直播体验福包',
        description: '企业级一体化直播解决方案，一站式满足企业直播需求',
        storage: '20GB',
        duration: '3000分钟',
        originalPrice: '￥600',
        currentPrice: '￥0.00',
        unit: '/月',
        badge: '限时免费',
        badgeColor: 'bg-green-500'
      },
      {
        id: 'video-on-demand',
        name: '视频点播',
        description: '为客户提供安全、稳定、高效的点播服务，帮助客户快速搭建点播平台',
        storage: '100GB',
        duration: '视频分发加速服务',
        originalPrice: '￥200',
        currentPrice: '￥1.00',
        unit: '/月',
        badge: '新用户',
        badgeColor: 'bg-blue-500'
      },
      {
        id: 'live-broadcast',
        name: '视频直播',
        description: '为客户提供专业、稳定、快速的直播接入和分发服务，全面满足超低延迟的直播场景需求',
        storage: '100GB(100小时)',
        duration: '流量包5GB起步',
        originalPrice: '￥100',
        currentPrice: '￥0.00',
        unit: '/月',
        badge: '新用户',
        badgeColor: 'bg-blue-500'
      }
    ]
  },
  {
    id: 'enterprise-acceleration',
    name: '企业建站加速',
    products: [
      {
        id: 'cdn-acceleration',
        name: 'CDN加速服务',
        description: '全球节点分发，智能调度路由，提升网站访问速度高达50%以上',
        storage: '100GB',
        duration: '全球加速服务',
        originalPrice: '￥300',
        currentPrice: '￥199',
        unit: '/月',
        badge: '热门',
        badgeColor: 'bg-orange-500'
      },
      {
        id: 'ssl-service',
        name: 'SSL证书服务',
        description: '免费SSL证书，一键部署HTTPS加密，全站保障数据传输安全',
        storage: '不限',
        duration: '证书有效期1年',
        originalPrice: '￥150',
        currentPrice: '￥0.00',
        unit: '/年',
        badge: '免费',
        badgeColor: 'bg-green-500'
      },
      {
        id: 'ddos-protection',
        name: 'DDoS防护服务',
        description: 'T级防护能力，多层过滤，智能识别攻击流量，保障业务稳定运行',
        storage: '不限',
        duration: '全天候防护',
        originalPrice: '￥500',
        currentPrice: '￥299',
        unit: '/月',
        badge: '安全',
        badgeColor: 'bg-blue-500'
      }
    ]
  },
  {
    id: 'domain-resolution',
    name: '域名解析调度',
    products: [
      {
        id: 'geo-routing',
        name: '智能地理调度',
        description: '基于用户地理位置智能调度，自动选择最优节点，降低访问延迟',
        storage: '不限',
        duration: '智能路由服务',
        originalPrice: '￥200',
        currentPrice: '￥99',
        unit: '/月',
        badge: '推荐',
        badgeColor: 'bg-purple-500'
      },
      {
        id: 'high-availability',
        name: '高可用性保障',
        description: '99.99%服务可用性保障，多区域容灾备份，确保业务连续性',
        storage: '不限',
        duration: '全年不间断',
        originalPrice: '￥350',
        currentPrice: '￥199',
        unit: '/月',
        badge: '稳定',
        badgeColor: 'bg-blue-500'
      },
      {
        id: 'real-time-monitoring',
        name: '实时监控分析',
        description: '7x24小时实时监控服务，多维度数据分析，智能异常检测预警',
        storage: '30天数据存储',
        duration: '全天候监控',
        originalPrice: '￥250',
        currentPrice: '￥149',
        unit: '/月',
        badge: '智能',
        badgeColor: 'bg-green-500'
      }
    ]
  }
]

/**
 * 服务特性数据
 */
const serviceFeatures = [
  '毫秒级超低延时直播体验',
  '多人实时连麦互动无卡顿',
  '全球节点加速内容分发',
  '4K高清画质·百万级并发'
]

/**
 * 产品卡片组件 - B端移动端优化版本
 *
 * @param product - 产品信息对象，用于渲染卡片的标题、描述、规格与价格
 * @returns 渲染单个产品卡片的 JSX 元素
 *
 * 移动端优化特性：
 * - 信息层次清晰，突出核心价值
 * - 简化视觉元素，提升可读性
 * - 优化触摸交互体验
 * - 遵循B端产品简洁高效原则
 */
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="
      bg-white shadow-md hover:shadow-lg
      hover:-translate-y-0.5 sm:hover:-translate-y-1
      transition-all duration-200 relative overflow-hidden group
      border border-gray-200 hover:border-blue-300
      p-3 sm:p-4 md:p-5 lg:p-6
      min-h-[280px] sm:min-h-[320px] md:min-h-[360px]
      flex flex-col
    ">
      {/* 背景装饰 - 几何图形装饰 */}
      <div className="absolute -right-2 -top-2 w-20 h-20 opacity-30 group-hover:opacity-50 transition-all duration-300">
        <div className="relative w-full h-full">
          {/* 主要六边形 */}
          <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 transform rotate-12 group-hover:rotate-45 transition-transform duration-500" 
               style={{
                 clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
               }} />
          {/* 小圆点装饰 */}
          <div className="absolute top-2 right-8 w-2 h-2 bg-blue-300 transform group-hover:scale-150 transition-transform duration-300" />
          <div className="absolute top-6 right-2 w-1.5 h-1.5 bg-blue-200 transform group-hover:scale-125 transition-transform duration-300" />
          {/* 线条装饰 */}
          <div className="absolute top-8 right-6 w-6 h-0.5 bg-gradient-to-r from-blue-300 to-transparent transform group-hover:w-8 transition-all duration-300" />
        </div>
      </div>

      {/* 徽章 - B端简洁设计 */}
      <div className={clsx(
        'absolute top-3 right-3',
        'px-2 sm:px-2.5 py-1',
        'text-xs font-medium text-white shadow-sm z-10',
        'border border-white/20',
        product.badgeColor
      )}>
        {product.badge}
      </div>

      {/* 产品标题 - 移动端突出显示 */}
      <h3 className="
        text-base sm:text-lg md:text-xl font-bold text-gray-900
        mb-2 sm:mb-3 pr-12 sm:pr-14 md:pr-16 relative z-10
        leading-tight line-clamp-2
      ">
        {product.name}
      </h3>

      {/* 产品描述 - 优化移动端可读性，使用细字体 */}
      <p className="
        text-xs sm:text-sm md:text-base text-gray-600
        mb-3 sm:mb-4 md:mb-5 leading-relaxed relative z-10
        line-clamp-2 sm:line-clamp-3 flex-grow
        font-light
      ">
        {product.description}
      </p>

      {/* 分隔线 - 简化设计 */}
      <div className="w-12 sm:w-16 md:w-20 h-0.5 bg-blue-200 mb-3 sm:mb-4 md:mb-5 relative z-10" />

      {/* 规格信息 - B端简洁展示 */}
      <div className="space-y-2 sm:space-y-2.5 md:space-y-3 mb-3 sm:mb-4 md:mb-5 relative z-10">
        <div className="flex justify-between items-center text-xs sm:text-sm bg-gray-50 p-2 sm:p-2.5 border border-gray-100">
          <span className="text-gray-600 font-light">存储空间</span>
          <span className="
            font-medium text-gray-900 bg-white
            px-2 sm:px-2.5 py-1 shadow-sm
            text-xs sm:text-sm border border-gray-200
          ">
            {product.storage}
          </span>
        </div>
        <div className="flex justify-between items-center text-xs sm:text-sm bg-gray-50 p-2 sm:p-2.5 border border-gray-100">
          <span className="text-gray-600 font-light">使用时长</span>
          <span className="
            font-medium text-gray-900 bg-white
            px-2 sm:px-2.5 py-1 shadow-sm
            text-xs sm:text-sm border border-gray-200
          ">
            {product.duration}
          </span>
        </div>
      </div>

      {/* 价格信息 - 突出核心价值 */}
      <div className="mb-4 sm:mb-5 md:mb-6 relative z-10">
        <div className="flex items-baseline justify-between mb-1">
          <span className="text-xs sm:text-sm text-gray-600 font-light">当前价格</span>
          <span className="text-xs sm:text-sm text-gray-400 line-through font-light">{product.originalPrice}</span>
        </div>
        <div className="flex items-baseline mb-2">
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600">{product.currentPrice}</span>
          <span className="text-xs sm:text-sm text-gray-500 ml-1 font-medium">{product.unit}</span>
        </div>
        <div className="text-xs text-blue-600 bg-blue-50 inline-block px-3 py-1.5 border border-blue-100 font-light">
          限时特惠 · 原价{product.originalPrice}
        </div>
      </div>

      {/* 按钮组 - 移动端优化触摸体验 */}
      <div className="
        flex flex-col sm:flex-row
        space-y-3 sm:space-y-0 sm:space-x-3
        relative z-10 mt-auto
      ">
        <button className="
          flex-1 py-3 sm:py-2.5 px-4 sm:px-3 md:px-4
          border-2 border-gray-200
          text-xs sm:text-xs font-semibold text-gray-700
          hover:bg-gray-50 hover:border-gray-300
          transition-all duration-200
          flex items-center justify-center
          active:scale-95 min-h-[44px]
        ">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-light">查看详情</span>
        </button>
        <button className="
          flex-1 py-3 sm:py-2.5 px-4 sm:px-3 md:px-4
          bg-blue-600 text-white
          text-xs sm:text-xs font-semibold
          hover:bg-blue-700 hover:shadow-lg
          transition-all duration-200
          flex items-center justify-center
          active:scale-95 min-h-[44px]
          shadow-md
        ">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          <span className="font-light">立即购买</span>
        </button>
      </div>
    </div>
  )
}

/**
 * 服务特性展示项
 *
 * @param feature - 特性文案字符串，将以行项形式展示
 * @returns 渲染单条服务特性的 JSX 元素
 */
function ServiceFeature({ feature }: { feature: string }) {
  return (
    <div className="flex items-center justify-center lg:justify-start space-x-3 group hover:translate-x-1 transition-transform duration-300">
      <div className="w-3 h-3 bg-blue-300 flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300" />
      <span className="text-white/90 text-sm lg:text-base font-light">{feature}</span>
    </div>
  )
}

/**
 * 热门场景推荐组件 - 多端适配版本
 *
 * @description 企业直播解决方案展示组件，包含选项卡切换和产品展示功能
 * 针对移动端、平板和桌面端进行了全面优化：
 * - 移动端：垂直布局，紧凑间距，触摸友好的选项卡
 * - 平板端：混合布局，适中间距
 * - 桌面端：水平布局，宽松间距，悬停效果
 * @returns {JSX.Element} 服务选项卡组件
 */
export function ServiceTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0)

  /**
   * 处理选项卡切换
   * @param {number} index - 选项卡索引
   */
  const handleTabChange = (index: number) => {
    setSelectedIndex(index)
  }

  return (
    <section className="
      relative overflow-hidden
      py-8 sm:py-12 md:py-16 lg:py-20
      bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800
      px-4 sm:px-6 lg:px-8
    ">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-20 sm:opacity-30 pointer-events-none z-0">
        <div
           className="absolute inset-0 bg-white/5"
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
             backgroundSize: '40px 40px'
           }}
         />
      </div>
      <Container>
        <div className="relative z-10">
        {/* 头部标题区域 - 移动端优化 */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10">
          <h1 className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold text-white
            mb-3 sm:mb-4 md:mb-5
            leading-tight
          ">
            热门场景推荐
          </h1>
          <p className="
            text-white/90
            text-base sm:text-lg md:text-xl
            max-w-2xl sm:max-w-3xl mx-auto
            leading-relaxed
            mb-2 sm:mb-4 md:mb-6
            px-4 sm:px-6
            font-medium
          ">
            企业直播解决方案一站式服务，帮助您快速搭建直播业务
          </p>
        </div>

        {/* 选项卡导航 - 简洁分割线样式 */}
        <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
          <TabList className="
            flex flex-row justify-start sm:justify-center
            mb-8 sm:mb-10 md:mb-12
            px-4 sm:px-6
          ">
            <div className="
              flex flex-row flex-nowrap justify-start sm:justify-center
              gap-1 sm:gap-2
              w-full sm:w-auto
              overflow-x-auto -mx-2 sm:mx-0 px-2
            ">
              {serviceTabs.map((tab, index) => (
                 <Tab
                   key={tab.id}
                   className={({ selected }) =>
                     clsx(
                       'relative transition-all duration-200 cursor-pointer focus-visible:outline-none touch-manipulation',
                       'px-3 py-2 sm:px-4 sm:py-3 text-sm sm:text-base font-medium',
                       'whitespace-nowrap text-center min-h-[40px] sm:min-h-[44px] flex items-center',
                       'w-auto',
                       selected
                         ? 'text-white border-b-2 border-white'
                         : 'text-white/70 hover:text-white/90 border-b-2 border-transparent hover:border-white/30'
                     )
                   }
                 >
                   {tab.name}
                 </Tab>
               ))}
            </div>
          </TabList>

          <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12 px-2 sm:px-4">
            {/* 左侧内容（移动端隐藏，仅桌面端显示） */}
            <div className="hidden lg:block lg:w-1/3 text-white">
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight text-center lg:text-left">
                <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  领先一步
                </span>
                <br />
                <span className="relative">
                  端到端直播方案
                  <span className="absolute -bottom-1 left-0 w-12 sm:w-16 h-1 bg-blue-300 hidden lg:block" />
                </span>
              </h2>

              <p className="text-white/90 text-sm lg:text-base mb-6 lg:mb-8 leading-relaxed text-center lg:text-left font-light">
                为您提供从内容创作到全球分发的完整解决方案，让您的业务在数字时代脱颖而出。
              </p>

              <div className="space-y-3 sm:space-y-4 lg:space-y-5 mb-6 sm:mb-8 lg:mb-10">
                {serviceFeatures.map((feature, index) => (
                  <ServiceFeature key={index} feature={feature} />
                ))}
              </div>

              <div className="text-center lg:text-left">
                <a
                  href="#"
                  className="inline-flex items-center px-4 sm:px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 group text-sm sm:text-base"
                >
                  <span>了解技术详情</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* 右侧内容（移动端占满宽度，展示标题与商品卡片） */}
            <div className="w-full lg:w-2/3">
              <TabPanels className="mt-2 sm:mt-4 lg:mt-0">
                {serviceTabs.map((tab) => (
                  <TabPanel key={tab.id} className="focus:outline-none">
                    {/* 移动端标题：突出核心价值 */}
                    <div className="block lg:hidden mb-4 sm:mb-5">
                      <h2 className="text-white text-xl sm:text-2xl font-bold leading-tight text-center">
                        <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                          领先一步
                        </span>
                        <br />
                        <span>端到端直播方案</span>
                      </h2>
                      <p className="text-white/80 text-sm sm:text-base text-center mt-2 px-2 font-light">
                        为您提供从内容创作到全球分发的完整解决方案
                      </p>
                    </div>

                    {/* 商品网格 - 移动端优化布局 */}
                    <div className="
                      grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3
                      gap-4 sm:gap-5 md:gap-6 lg:gap-7
                      max-w-none
                    ">
                      {tab.products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </div>
          </div>
        </TabGroup>
        </div>
      </Container>
    </section>
  )
}
