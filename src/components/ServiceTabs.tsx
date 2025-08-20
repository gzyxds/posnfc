'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'

/**
 * 产品数据类型定义 - 企业级服务产品信息结构
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
 * 服务选项卡数据类型定义 - 服务分类信息结构
 */
interface ServiceTab {
  id: string
  name: string
  icon: string
  products: Product[]
}

/**
 * 徽章样式配置 - 统一的企业级徽章设计系统
 */
const badgeStyles = {
  free: 'bg-emerald-500 text-white border-emerald-600',
  hot: 'bg-orange-500 text-white border-orange-600', 
  new: 'bg-blue-500 text-white border-blue-600',
  recommended: 'bg-purple-500 text-white border-purple-600',
  secure: 'bg-slate-600 text-white border-slate-700',
  smart: 'bg-teal-500 text-white border-teal-600'
}

/**
 * 服务选项卡数据配置 - 企业级云服务产品矩阵
 */
const serviceTabs: ServiceTab[] = [
  {
    id: 'live-entertainment',
    name: '泛娱乐直播',
    icon: 'M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z',
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
        badgeType: 'free'
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
        badgeType: 'new'
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
        badgeType: 'new'
      }
    ]
  },
  {
    id: 'enterprise-acceleration',
    name: '企业建站加速',
    icon: 'M13 10V3L4 14h7v7l9-11h-7z',
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
        badgeType: 'hot'
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
        badgeType: 'free'
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
        badgeType: 'secure'
      }
    ]
  },
  {
    id: 'domain-resolution',
    name: '域名解析调度',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9',
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
        badgeType: 'recommended'
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
        badgeType: 'secure'
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
        badgeType: 'smart'
      }
    ]
  }
]

/**
 * 企业级服务特性数据 - 核心技术能力展示
 */
const serviceFeatures = [
  {
    title: '毫秒级超低延时',
    description: '全球部署边缘节点，实现<50ms超低延时体验'
  },
  {
    title: '企业级高可用',
    description: '99.99%服务可用性，多重容灾保障业务连续性'
  },
  {
    title: '智能弹性扩容',
    description: '自动识别流量峰值，秒级扩容应对百万并发'
  },
  {
    title: '数据安全合规',
    description: '端到端加密传输，符合等保三级安全标准'
  }
]

/**
 * 企业级产品卡片组件 - 现代蓝白色调设计
 *
 * @param product - 产品信息对象，包含服务规格、价格等核心数据
 * @returns 渲染企业级产品卡片的 JSX 元素
 *
 * 设计特性：
 * - 采用蓝白色调的现代企业设计风格
 * - 简洁直角卡片设计，突出专业感
 * - 合理留白，清晰的信息层次
 * - 突出数据展示，符合B端产品调性
 */
function ProductCard({ product }: { product: Product }) {
  return (
    <div className="
      bg-white border border-slate-200
      hover:border-blue-300 hover:shadow-xl
      transition-all duration-300 ease-out
      group relative overflow-hidden
      h-full flex flex-col
    ">
      {/* 顶部装饰条 - 蓝色渐变 */}
      <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
      
      {/* 卡片内容区域 */}
      <div className="p-6 flex-1 flex flex-col">
        {/* 徽章 - 企业级设计 */}
        <div className={clsx(
          'absolute top-4 right-4 px-3 py-1.5',
          'text-xs font-semibold tracking-wide uppercase',
          'border shadow-sm z-10',
          badgeStyles[product.badgeType]
        )}>
          {product.badge}
        </div>

        {/* 产品标题 */}
        <h3 className="
          text-xl font-bold text-slate-900
          mb-3 pr-20 leading-tight
        ">
          {product.name}
        </h3>

        {/* 产品描述 */}
        <p className="
          text-slate-600 text-sm leading-relaxed
          mb-6 flex-grow
        ">
          {product.description}
        </p>

        {/* 规格信息 - 数据展示优化 */}
        <div className="space-y-3 mb-6">
          <div className="bg-slate-50 border border-slate-100 p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">存储空间</span>
              <span className="text-sm font-bold text-slate-900">{product.storage}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wide">服务时长</span>
              <span className="text-sm font-bold text-slate-900">{product.duration}</span>
            </div>
          </div>
        </div>

        {/* 价格信息 - 突出显示 */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-slate-500">企业价格</span>
            <span className="text-sm text-slate-400 line-through">{product.originalPrice}</span>
          </div>
          <div className="flex items-baseline mb-3">
            <span className="text-3xl font-bold text-blue-600">{product.currentPrice}</span>
            <span className="text-sm text-slate-500 ml-2">{product.unit}</span>
          </div>
          <div className="inline-flex items-center px-3 py-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-700">
            <svg className="w-3 h-3 mr-1.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            限时特惠 · 立省{parseInt(product.originalPrice.replace('￥', '')) - parseInt(product.currentPrice.replace('￥', ''))}元
          </div>
        </div>

        {/* 操作按钮 - 企业级交互设计 */}
        <div className="flex gap-3 mt-auto">
          <button className="
            flex-1 px-4 py-3
            border border-slate-300 text-slate-700
            hover:bg-slate-50 hover:border-slate-400
            transition-all duration-200
            text-sm font-medium
            flex items-center justify-center gap-2
          ">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            查看详情
          </button>
          <button className="
            flex-1 px-4 py-3
            bg-blue-600 text-white
            hover:bg-blue-700 hover:shadow-lg
            transition-all duration-200
            text-sm font-medium
            flex items-center justify-center gap-2
          ">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
            立即开通
          </button>
        </div>
      </div>
    </div>
  )
}

/**
 * 企业级服务特性组件 - 现代技术能力展示
 *
 * @param feature - 服务特性对象，包含标题和详细描述
 * @returns 渲染企业级服务特性的 JSX 元素
 *
 * 设计特点：
 * - 现代蓝白色调企业设计风格
 * - 突出技术指标和核心能力
 * - 简洁直角设计，专业感强
 * - 清晰的信息层次和数据展示
 */
function ServiceFeature({ feature }: { feature: { title: string; description: string } }) {
  return (
    <div className="
      bg-white border border-slate-200
      hover:border-blue-300 hover:shadow-md
      transition-all duration-300 ease-out
      p-6 group h-full
    ">
      {/* 图标区域 - 企业级设计 */}
      <div className="
        w-12 h-12 mb-4
        bg-gradient-to-br from-blue-500 to-blue-600
        flex items-center justify-center
        group-hover:shadow-lg
        transition-all duration-300
      ">
        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      </div>
      
      {/* 内容区域 */}
      <div>
        <h4 className="
          text-lg font-bold text-slate-900
          mb-3 group-hover:text-blue-900
          transition-colors duration-300
        ">
          {feature.title}
        </h4>
        <p className="
          text-slate-600 text-sm leading-relaxed
          group-hover:text-slate-700
          transition-colors duration-300
        ">
          {feature.description}
        </p>
      </div>
      
      {/* 底部装饰线 */}
      <div className="
        mt-4 h-0.5 bg-gradient-to-r from-blue-500 to-transparent
        transform scale-x-0 group-hover:scale-x-100
        transition-transform duration-300 origin-left
      " />
    </div>
  )
}

/**
 * 企业级服务选项卡主组件 - 现代蓝白色调设计
 *
 * @returns 渲染完整的企业级服务选项卡界面
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
    <section className="py-20 bg-slate-50">
      <Container>
        {/* 标题区域 - 企业级设计 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-200 text-blue-700 text-sm font-medium mb-6">
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            企业级云服务解决方案
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">
            专业云计算服务平台
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            为不同行业和场景提供专业的云计算服务，助力企业数字化转型升级
          </p>
        </div>

        {/* 选项卡导航 - 现代企业设计 */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {serviceTabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={clsx(
                  'px-6 py-4 text-sm font-medium transition-all duration-300',
                  'border flex items-center gap-3',
                  'hover:shadow-md',
                  activeTab === index
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50'
                )}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d={tab.icon} />
                </svg>
                <span>{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* 内容区域 - 优化布局 */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 产品展示区域 */}
          <div className="lg:col-span-3">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                {activeService.name} 产品方案
              </h3>
              <p className="text-slate-600 leading-relaxed">
                为{activeService.name}场景提供专业的云计算服务解决方案
              </p>
            </div>
            
            {/* 产品卡片网格 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activeService.products.map((product, index) => (
                <ProductCard key={index} product={product} />
              ))}
            </div>
          </div>

          {/* 服务特性区域 - 现代设计 */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 p-6">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  核心技术优势
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  基于云原生架构，为企业提供稳定可靠的技术保障
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 mb-6">
                {serviceFeatures.map((feature, index) => (
                  <ServiceFeature key={index} feature={feature} />
                ))}
              </div>

              <button className="
                w-full py-3 px-4
                bg-blue-600 text-white font-medium
                hover:bg-blue-700 hover:shadow-lg
                transition-all duration-300
                text-sm flex items-center justify-center gap-2
              ">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                了解更多技术详情
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
