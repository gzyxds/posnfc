'use client'

import { useState } from 'react'
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
 * 产品卡片组件
 *
 * @param product - 产品信息对象，用于渲染卡片的标题、描述、规格与价格
 * @returns 渲染单个产品卡片的 JSX 元素
 */
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group border border-gray-100">
      {/* 背景装饰 */}
      <div className="absolute -right-8 sm:-right-12 -top-8 sm:-top-12 w-32 sm:w-40 h-32 sm:h-40 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

      {/* 徽章 */}
      <div className={clsx(
        'absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-3 py-1 rounded-full text-xs font-semibold text-white shadow-md z-10',
        product.badgeColor
      )}>
        {product.badge}
      </div>

      {/* 产品标题 */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 pr-12 sm:pr-16 relative z-10 leading-tight">
        {product.name}
      </h3>

      {/* 产品描述 */}
      <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-5 leading-relaxed relative z-10 line-clamp-3">
        {product.description}
      </p>

      {/* 分隔线 */}
      <div className="w-12 sm:w-16 h-1 bg-blue-100 rounded-full mb-4 sm:mb-5 relative z-10" />

      {/* 规格信息 */}
      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 relative z-10">
        <div className="flex justify-between items-center text-xs sm:text-sm bg-gray-50 p-2 rounded-lg">
          <span className="text-gray-500 font-medium">存储空间</span>
          <span className="font-semibold text-gray-900 bg-white px-2 py-1 rounded-md shadow-sm text-xs sm:text-sm">
            {product.storage}
          </span>
        </div>
        <div className="flex justify-between items-center text-xs sm:text-sm bg-gray-50 p-2 rounded-lg">
          <span className="text-gray-500 font-medium">使用时长</span>
          <span className="font-semibold text-gray-900 bg-white px-2 py-1 rounded-md shadow-sm text-xs sm:text-sm">
            {product.duration}
          </span>
        </div>
      </div>

      {/* 价格信息 */}
      <div className="mb-4 sm:mb-6 relative z-10">
        <div className="flex items-baseline justify-between">
          <span className="text-xs sm:text-sm text-gray-500 font-medium">当前价格</span>
          <span className="text-xs sm:text-sm text-gray-400 line-through">{product.originalPrice}</span>
        </div>
        <div className="flex items-baseline mt-1">
          <span className="text-2xl sm:text-3xl font-bold text-blue-600">{product.currentPrice}</span>
          <span className="text-xs sm:text-sm text-gray-500 ml-1">{product.unit}</span>
        </div>
        <div className="text-xs text-gray-400 mt-1 bg-blue-50 inline-block px-2 py-1 rounded-md">
          限时特惠 · 原价{product.originalPrice}
        </div>
      </div>

      {/* 按钮组 */}
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 relative z-10">
        <button className="flex-1 py-2.5 px-3 sm:px-4 border border-gray-200 rounded-lg text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 flex items-center justify-center">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          查看详情
        </button>
        <button className="flex-1 py-2.5 px-3 sm:px-4 bg-blue-600 text-white rounded-lg text-xs sm:text-sm font-medium hover:bg-blue-700 hover:shadow-lg transition-all duration-200 flex items-center justify-center group-hover:scale-105 transform">
          <svg className="w-3 h-3 sm:w-4 sm:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          立即购买
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
      <div className="w-3 h-3 bg-blue-300 rounded-full flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300" />
      <span className="text-white/90 text-sm lg:text-base font-medium">{feature}</span>
    </div>
  )
}

/**
 * 热门场景推荐组件
 *
 * @description 企业直播解决方案展示组件，包含选项卡切换和产品展示功能
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
    <section className="relative py-12 sm:py-16 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 opacity-30 pointer-events-none z-0">
        <div
          className="absolute inset-0 bg-white/5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      <Container>
        <div className="relative z-10">
        {/* 头部标题区域 */}
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">
            热门场景推荐
          </h1>
          <p className="text-white/80 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
            企业直播解决方案一站式服务，帮助您快速搭建直播业务
          </p>
        </div>

        {/* 选项卡导航 */}
        <TabGroup selectedIndex={selectedIndex} onChange={handleTabChange}>
          <TabList className="flex justify-center mb-8 sm:mb-12 px-4 border-b border-white/15">
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {serviceTabs.map((tab) => (
                <Tab
                  key={tab.id}
                  className={({ selected }) =>
                    clsx(
                      'relative -mb-px pb-2 sm:pb-3 px-1 sm:px-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer border-b-2 border-transparent focus-visible:outline-none',
                      selected ? 'text-white border-white' : 'text-white/70 hover:text-white'
                    )
                  }
                >
                  {tab.name}
                </Tab>
              ))}
            </div>
          </TabList>

          <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 lg:gap-12 px-4">
            {/* 左侧内容 */}
            <div className="w-full lg:w-1/3 text-white">
              <h2 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 leading-tight text-center lg:text-left">
                <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  领先一步
                </span>
                <br />
                <span className="relative">
                  端到端直播方案
                  <span className="absolute -bottom-1 left-0 w-12 sm:w-16 h-1 bg-blue-300 rounded-full hidden lg:block" />
                </span>
              </h2>

              <p className="text-white/90 text-sm lg:text-base mb-6 lg:mb-8 leading-relaxed text-center lg:text-left">
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
                  className="inline-flex items-center px-4 sm:px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 backdrop-blur-sm border border-white/20 hover:border-white/40 group text-sm sm:text-base"
                >
                  <span>了解技术详情</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* 右侧内容 */}
            <div className="w-full lg:w-2/3">
              <TabPanels>
                {serviceTabs.map((tab) => (
                  <TabPanel key={tab.id} className="focus:outline-none">
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
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
