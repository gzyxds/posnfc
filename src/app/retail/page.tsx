'use client'

import React from 'react'
import {
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BoltIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  CheckCircleIcon,
  CloudArrowUpIcon,
  CogIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  GlobeAltIcon,
  PhoneIcon,
  PresentationChartLineIcon,
  ShieldCheckIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  StarIcon,
  TagIcon,
  TruckIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import clsx from 'clsx'
import Image from 'next/image'

// 注意：客户端组件不支持静态元数据导出
// 如需 SEO 优化，请考虑将此页面改为服务器组件或使用动态元数据

/**
 * 行业趋势项接口定义
 */
interface TrendItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

/**
 * 典型场景项接口定义
 */
interface ScenarioItem {
  title: string
  description: string
  details: string[]
  image: string
}

/**
 * 产品特征项接口定义
 */
interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

/**
 * 场景解决方案接口
 */
interface ScenarioSolution {
  title: string
  description: string
  features: string[]
  image: string
  stats?: {
    label: string
    value: string
  }[]
}

/**
 * 技术优势数据接口
 */
interface TechAdvantage {
  title: string
  value: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

/**
 * 客户评价接口
 */
interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  avatar: string
  rating: number
}

/**
 * Hero区域组件 - 零售行业解决方案首页英雄区域
 * 采用左文右图布局设计，突出零售行业特色
 * 特点：视觉统一性、层次清晰、交互友好、响应式设计
 *
 * 功能包括：
 * 1. 展示零售行业解决方案的主要标题和简介
 * 2. 提供行动按钮和特性标签
 * 3. 右侧展示零售业务仪表板预览
 * 4. 响应式设计，适配不同屏幕尺寸
 *
 * @returns {JSX.Element} Hero区域组件
 */
function HeroSection() {
  // 零售行业特性标签
  const features = [
    { name: '高并发处理', href: '#performance' },
    { name: '弹性扩容', href: '#scaling' },
    { name: '安全防护', href: '#security' },
    { name: '营销创新', href: '#marketing' },
    { name: '数据分析', href: '#analytics' },
  ]

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16 sm:py-20 md:py-24 lg:py-32">
      {/* 背景网格图案 */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-gray-200/50"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="retail-grid-pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#retail-grid-pattern)"
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
            {/* 品牌标识 */}
            <div className="inline-flex items-center border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700 sm:px-4 sm:text-sm">
              <BuildingStorefrontIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              零售行业解决方案
            </div>

            {/* 主标题 */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  智能化
                </span>
                <br />
                零售云解决方案
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-7 text-gray-600 sm:text-lg md:text-xl lg:mx-0 lg:leading-8">
                为零售客户快速交付高稳定性、高可靠性、高弹性的实例配置
              </p>
              <p className="mx-auto max-w-xl text-sm leading-6 text-gray-500 sm:text-base lg:mx-0 lg:leading-7">
                支持灵活扩容、缩容，有效应对大促带来的业务高并发问题，强化安全防护能力，助力零售客户快速实现营销创新与业务增收
              </p>
            </div>

            {/* 特性标签 */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              {features.map((feature) => (
                <a
                  key={feature.name}
                  href={feature.href}
                  className="border border-blue-200 bg-white px-3 py-1.5 text-xs font-medium text-blue-700 transition-all hover:border-blue-300 hover:bg-blue-50 sm:px-4 sm:py-2 sm:text-sm"
                >
                  {feature.name}
                </a>
              ))}
            </div>

            {/* CTA按钮组 */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <Button
                href="#scenarios"
                variant="solid"
                color="blue"
                className="group w-full sm:w-auto"
              >
                <span>立即体验</span>
                <ShoppingCartIcon className="ml-2 h-4 w-4 transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
              </Button>
              <Button
                href="#features"
                variant="outline"
                className="group w-full sm:w-auto"
              >
                <span>了解更多</span>
                <ChartBarIcon className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>

          {/* 右侧展示区 - 零售业务仪表板预览 */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative bg-gradient-to-br from-white to-gray-50 border border-gray-200/80 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:-translate-y-1">
              {/* 窗口控制栏 */}
              <div className="border-b border-gray-200 bg-gray-50/80 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="h-3 w-3 bg-red-400"></div>
                    <div className="h-3 w-3 bg-yellow-400"></div>
                    <div className="h-3 w-3 bg-green-400"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700">零售业务中心</div>
                  <div className="w-6"></div>
                </div>
              </div>

              {/* 仪表板内容 */}
              <div className="p-6">
                {/* 顶部状态栏 */}
                <div className="mb-6 grid grid-cols-3 gap-4">
                  <div className="bg-blue-50 p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">2.4K</div>
                    <div className="text-xs text-blue-500">日订单</div>
                  </div>
                  <div className="bg-green-50 p-3 text-center">
                    <div className="text-lg font-bold text-green-600">98.5%</div>
                    <div className="text-xs text-green-500">系统稳定性</div>
                  </div>
                  <div className="bg-purple-50 p-3 text-center">
                    <div className="text-lg font-bold text-purple-600">15.2%</div>
                    <div className="text-xs text-purple-500">转化率</div>
                  </div>
                </div>

                {/* 内容预览区 */}
                <div className="space-y-4">
                  {/* 销售数据预览 */}
                  <div className="border border-gray-200 bg-white p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 bg-green-400"></div>
                        <div className="h-2 w-20 bg-gray-200"></div>
                      </div>
                      <div className="h-2 w-8 bg-gray-200"></div>
                    </div>
                    <div className="mt-2 h-2 w-full bg-gray-200"></div>
                    <div className="mt-1 h-2 w-3/4 bg-gray-200"></div>
                  </div>

                  {/* 库存管理区域 */}
                  <div className="border border-gray-200 bg-gray-50 p-3">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 bg-orange-400"></div>
                      <div className="h-2 w-16 bg-gray-300"></div>
                    </div>
                    <div className="mt-2 grid grid-cols-2 gap-2">
                      <div className="h-2 bg-gray-300"></div>
                      <div className="h-2 bg-gray-300"></div>
                    </div>
                  </div>

                  {/* 营销数据预览 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-2 text-center">
                      <div className="text-xs font-medium text-white">活跃用户</div>
                      <div className="text-sm font-bold text-white">8.9K</div>
                    </div>
                    <div className="bg-gradient-to-r from-green-500 to-green-600 p-2 text-center">
                      <div className="text-xs font-medium text-white">销售额</div>
                      <div className="text-sm font-bold text-white">¥126K</div>
                    </div>
                  </div>

                  {/* 快速操作按钮 */}
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-blue-600 px-3 py-2 text-xs font-medium text-white transition-colors hover:bg-blue-700">
                      营销活动
                    </button>
                    <button className="flex-1 border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 transition-colors hover:bg-gray-50">
                      数据分析
                    </button>
                  </div>
                </div>
              </div>

              {/* 底部状态栏 */}
              <div className="border-t border-gray-200 bg-gray-50/80 p-3">
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>实时同步</span>
                  <span>v3.2.1</span>
                </div>
              </div>
            </div>

            {/* 装饰性光效 */}
            <div className="absolute -right-4 -top-4 h-24 w-24 bg-blue-400/10 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 h-16 w-16 bg-indigo-400/10 blur-2xl"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 行业趋势区域组件 - 展示零售行业的发展趋势
 * 采用卡片式网格布局，突出行业特色
 * 特点：视觉统一、信息清晰、响应式设计
 *
 * @returns {JSX.Element} 行业趋势区域组件
 */
function TrendsSection() {
  const trends: TrendItem[] = [
    {
      icon: BuildingStorefrontIcon,
      title: '平台内容化',
      description: '内容成为零售平台必备的基础设施，驱动网络零售市场从以"商品"为中心到以"人的需求"为中心加速转变，通过人格化的认同及信任促进商品销售。',
      color: 'text-blue-600'
    },
    {
      icon: ChartBarIcon,
      title: '信息流数字化',
      description: '信息流让线上营销更加精准多元，帮助零售平台通过大数据把握消费者所有特征，明确该为哪类消费者提供什么样的商品和服务，做好市场细分。',
      color: 'text-green-600'
    },
    {
      icon: ArrowTrendingUpIcon,
      title: '竞争非常态',
      description: '行业以KOL、模式创新和主导权争夺为代表的的动态竞争为主，云计算、人工智能、虚拟现实等数字技术快速发展，正驱动着新一轮零售产业创新。',
      color: 'text-purple-600'
    },
    {
      icon: GlobeAltIcon,
      title: '规模不断扩张',
      description: '跨境零售较传统销售模式，减少了外贸中间环节，为国货出海提供了更高效简便的渠道，随着相关产业链一体化的不断完善，跨境零售行业正蓬勃发展。',
      color: 'text-orange-600'
    }
  ]

  return (
    <section className={clsx(
      'py-16',
      'bg-white'
    )}>
      <Container>
        <div className="text-center">
          <h2 className={clsx(
            'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
            'text-gray-900'
          )}>
            行业趋势
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trends.map((trend, index) => (
            <div
              key={index}
              className={clsx(
                'group p-6 transition-all duration-300',
                'bg-gray-50 hover:bg-white hover:shadow-lg'
              )}
            >
              <div className="text-left">
                <div className="flex items-center mb-3">
                  <trend.icon
                    className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className={clsx(
                    'text-lg font-semibold',
                    'text-gray-900'
                  )}>
                    {trend.title}
                  </h3>
                </div>
                <p className={clsx(
                  'text-sm leading-relaxed',
                  'text-gray-600'
                )}>
                  {trend.description}
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
 * 典型场景区域组件 - 展示零售行业的典型应用场景
 * 采用选项卡切换的方式，展示不同场景的详细信息
 *
 * @returns {JSX.Element} 典型场景区域组件
 */
function ScenariosSection() {
  const [activeScenario, setActiveScenario] = React.useState(0)

  const scenarios: ScenarioItem[] = [
    {
      title: '零售上云',
      description: '主题云依托强大的云计算能力，为零售企业提供多场景数智化解决方案，帮助企业快速搭建零售平台，完成所有资源的创建与配置，全方位满足线上消费场景对弹性、性能、稳定等多方位的计算需求。',
      details: [
        '支持客户自建零售业务系统，提供从前端的域名解析、安全防护，到后端的业务系统，以及大数据分析等一整套的解决方案。',
        '提供全方位的基础安全防护与业务风控能力。',
        '降低客户技术门槛并减轻系统运维压力，为上云业务保驾护航。'
      ],
      image: '/images/product/retail.png'
    },
    {
      title: '云上容灾',
      description: '在当前的互联网环境下，如果服务器宕机造成业务不可用，将引起不可估量的连锁反应与经营损失，主题云拥有多维度云上容灾备份能力，可有效提高企业业务的连续性与稳定性，全面保障关键数据的安全可靠。',
      details: [
        '主题云在国内以及海外均部署了大量集群，通过DNS智能调度，任意节点发生故障均能无缝切换至其他节点。',
        '提供三副本容灾方案，并支持实时热备、读写分离存储方案，有效提升零售平台的高可用性与零售业务的连续性。'
      ],
      image: '/images/product/retail1.png'
    },
    {
      title: '平台大促',
      description: '促销活动期间，平台访问量激增，如果系统缺乏高并发、高可靠能力，极可能造成用户操作卡顿、内容加载缓慢等情况，影响用户体验。主题云方案在接入层高并发及数据层处理海量数据等方面均有优质表现，可轻松应对抢购、秒杀等高并发压力。',
      details: [
        '主题云CDN超大的带宽储备，可有效应对促销活动时爆发性的用户访问请求。',
        '快速伸缩的负载均衡CLB可以实时调整集群规模以自适应促销流量的增长，无需人工介入。',
        '三网合一的高并发短信通道，确保您的促销信息即时触达每一位用户。'
      ],
      image: '/images/product/retail2.png'
    },
    {
      title: '零售直播',
      description: '主题云融合卓越的内容接入与分发网络与大规模分布式实时视频处理技术，打造低延迟、超高清、沉浸式的视听盛宴，全面赋能新零售、新消费场景。',
      details: [
        '主题云为开发者提供专业、稳定的直播推流、转码、分发、播放等服务。',
        '支持零售APP和小程序中实现直播功能。',
        '多方案满足超低延迟、超高画质、超大并发访问量的要求。',
        '弹性支撑直播间访问流量，超高性价比。'
      ],
      image: '/images/product/retail1.png'
    },
    {
      title: '社交零售',
      description: '随着公域流量的边际成本不断上涨，私域流量的投入与运营变得尤为重要，主题云可助力企业建立强大的触达能力与有效互动平台，帮助品牌加强对流量的转化率与把控权，从而带动销售额增长。',
      details: [
        '为小程序商城、微信私域流量运营等独立零售平台提供低成本技术支撑。',
        '为获客、拉新等诉求提供社群营销、营销短信等产品能力。',
        '主题云提供多种认证和服务，保障交易安全、事务安全。'
      ],
      image: '/images/product/retail2.png'
    }
  ]

  return (
    <section className={clsx(
      'py-16',
      'bg-white'
    )}>
      <Container>
        <div className="text-center">
          <h2 className={clsx(
            'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
            'text-gray-900'
          )}>
            典型场景
          </h2>
        </div>

        <div className="mt-12">
          {/* 场景选项卡 */}
          <div className="mb-8">
            <div className="flex space-x-1 bg-gray-100 p-1 w-full">
              {scenarios.map((scenario, index) => (
                <button
                  key={index}
                  onClick={() => setActiveScenario(index)}
                  className={clsx(
                    'flex-1 px-6 py-3 text-base font-medium transition-all duration-200',
                    activeScenario === index
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  )}
                >
                  {scenario.title}
                </button>
              ))}
            </div>
          </div>

          {/* 场景详情展示 */}
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            {/* 左侧：场景描述和详情 */}
            <div className="space-y-6">
              <div>
                <h3 className={clsx(
                  'text-2xl font-bold tracking-tight sm:text-3xl',
                  'text-gray-900'
                )}>
                  {scenarios[activeScenario].title}
                </h3>
                <p className={clsx(
                  'mt-4 text-lg leading-8',
                  'text-gray-600'
                )}>
                  {scenarios[activeScenario].description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className={clsx(
                  'text-lg font-semibold',
                  'text-gray-900'
                )}>核心特性</h4>
                <ul className="space-y-3">
                  {scenarios[activeScenario].details.map((detail, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className={clsx(
                        'mt-1 h-5 w-5 flex-shrink-0',
                        'text-blue-600'
                      )} />
                      <span className={clsx(
                        'ml-3 text-base leading-7',
                        'text-gray-600'
                      )}>
                        {detail}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* 右侧：场景图片 */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                <Image
                  src={scenarios[activeScenario].image}
                  alt={scenarios[activeScenario].title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 产品特征区域组件 - 展示零售解决方案的核心特征
 * 采用卡片式网格布局，突出产品特色
 *
 * @returns {JSX.Element} 产品特征区域组件
 */
function FeaturesSection() {
  const features: FeatureItem[] = [
    {
      icon: CogIcon,
      title: '降低技术门槛',
      description: '直接复用主题云零售技术架构，有效降低零售企业使用云计算、大数据、人工智能等新技术的使用门槛。',
      color: 'text-blue-600'
    },
    {
      icon: ShoppingCartIcon,
      title: '丰富的场景方案',
      description: '快速满足客户多场景的业务需求，例如大量图片与视频的智能处理，以及直播和短视频获客模式支撑等。',
      color: 'text-green-600'
    },
    {
      icon: BoltIcon,
      title: '弹性支撑',
      description: '提供弹性、可扩展的基础设施与护航服务，帮助零售企业从容应对大促、秒杀等活动对业务系统的挑战。',
      color: 'text-purple-600'
    },
    {
      icon: CloudArrowUpIcon,
      title: '技术开放',
      description: '主题云基于开源OpenStack技术，具备开放性，不绑定商家，帮助企业自建零售平台，保有独立自主的渠道，避免被业界平台绑定。',
      color: 'text-orange-600'
    }
  ]

  return (
    <section className={clsx(
      'py-16',
      'bg-gray-50'
    )}>
      <Container>
        <div className="text-center">
          <h2 className={clsx(
            'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
            'text-gray-900'
          )}>
            产品特征
          </h2>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={clsx(
                'group p-6 transition-all duration-300',
                'bg-white hover:shadow-lg'
              )}
            >
              <div className="text-left">
                <div className="flex items-center mb-3">
                  <feature.icon
                    className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0"
                    aria-hidden="true"
                  />
                  <h3 className={clsx(
                    'text-lg font-semibold',
                    'text-gray-900'
                  )}>
                    {feature.title}
                  </h3>
                </div>
                <p className={clsx(
                  'text-sm leading-relaxed',
                  'text-gray-600'
                )}>
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
 * 应用场景解决方案区域组件 - 展示零售行业的具体解决方案
 * 采用左右布局，突出解决方案的实用性
 *
 * @returns {JSX.Element} 应用场景解决方案区域组件
 */
function SolutionsSection() {
  const solutions: ScenarioSolution[] = [
    {
      title: '电商平台解决方案',
      description: '为电商平台提供高性能、高可用的云计算基础设施，支持海量商品管理、订单处理、支付结算等核心业务功能。',
      features: [
        '支持千万级商品管理，提供高效的商品搜索和推荐服务',
        '弹性扩容能力，轻松应对促销活动带来的流量高峰',
        '多重安全防护，保障用户数据和交易安全',
        '全球CDN加速，提升用户购物体验'
      ],
      image: '/images/product/commerce.png',
      stats: [
        { label: '日处理订单', value: '100万+' },
        { label: '系统可用性', value: '99.9%' },
        { label: '响应时间', value: '<100ms' }
      ]
    },
    {
      title: '新零售门店解决方案',
      description: '整合线上线下资源，为新零售门店提供智能化管理系统，实现库存同步、会员管理、营销推广等一体化服务。',
      features: [
        '实时库存同步，线上线下库存统一管理',
        '智能会员系统，精准用户画像和个性化推荐',
        '移动支付集成，支持多种支付方式',
        '数据分析报表，助力经营决策优化'
      ],
      image: '/images/product/commerce1.png',
      stats: [
        { label: '门店覆盖', value: '5000+' },
        { label: '会员管理', value: '500万+' },
        { label: '库存准确率', value: '99.5%' }
      ]
    },
    {
      title: '直播电商解决方案',
      description: '专为直播电商打造的一站式解决方案，提供稳定的直播技术支持、实时互动功能和高效的商品展示系统。',
      features: [
        '高清直播技术，支持多路并发直播流',
        '实时互动功能，弹幕、点赞、礼物等社交元素',
        '商品展示系统，直播间内一键下单购买',
        '数据统计分析，直播效果实时监控'
      ],
      image: '/images/product/commerce2.jpg',
      stats: [
        { label: '并发观看', value: '10万+' },
        { label: '直播延迟', value: '<3秒' },
        { label: '转化率提升', value: '300%' }
      ]
    }
  ]

  const [activeSolution, setActiveSolution] = React.useState(0)

  return (
    <section className={clsx(
      'py-16',
      'bg-white'
    )}>
      <Container>
        <div className="text-center">
          <h2 className={clsx(
            'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
            'text-gray-900'
          )}>
            应用场景解决方案
          </h2>
          <p className={clsx(
            'mx-auto max-w-2xl text-lg leading-8',
            'text-gray-600'
          )}>
            针对不同零售场景，提供专业的解决方案
          </p>
        </div>

        <div className="mt-12">
          {/* 解决方案选项卡 */}
          <div className="mb-8">
            <div className="flex space-x-1 bg-gray-100 p-1 w-full">
              {solutions.map((solution, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSolution(index)}
                  className={clsx(
                    'flex-1 px-6 py-3 text-base font-medium transition-all duration-200',
                    activeSolution === index
                      ? 'bg-white text-blue-600 shadow-sm'
                      : 'text-gray-500 hover:text-gray-700'
                  )}
                >
                  {solution.title.replace('解决方案', '')}
                </button>
              ))}
            </div>
          </div>

          {/* 解决方案内容 */}
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* 左侧：解决方案描述 */}
            <div className="space-y-6">
              <div>
                <h3 className={clsx(
                  'text-2xl font-bold tracking-tight sm:text-3xl',
                  'text-gray-900'
                )}>
                  {solutions[activeSolution].title}
                </h3>
                <p className={clsx(
                  'mt-4 text-lg leading-8',
                  'text-gray-600'
                )}>
                  {solutions[activeSolution].description}
                </p>
              </div>

              <div className="space-y-4">
                <h4 className={clsx(
                  'text-lg font-semibold',
                  'text-gray-900'
                )}>核心功能</h4>
                <ul className="space-y-3">
                  {solutions[activeSolution].features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircleIcon className={clsx(
                        'mt-1 h-5 w-5 flex-shrink-0',
                        'text-blue-600'
                      )} />
                      <span className={clsx(
                        'ml-3 text-base leading-7',
                        'text-gray-600'
                      )}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 数据统计 */}
              {solutions[activeSolution].stats && (
                <div className="grid grid-cols-3 gap-4 pt-6">
                  {solutions[activeSolution].stats!.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={clsx(
                        'text-2xl font-bold',
                        'text-blue-600'
                      )}>
                        {stat.value}
                      </div>
                      <div className={clsx(
                        'text-sm',
                        'text-gray-500'
                      )}>
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 右侧：解决方案图片 */}
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center overflow-hidden">
                <Image
                  src={solutions[activeSolution].image}
                  alt={solutions[activeSolution].title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 技术优势数据区域组件 - 展示零售解决方案的技术优势
 * 采用数据展示的方式，突出技术实力
 *
 * @returns {JSX.Element} 技术优势数据区域组件
 */
function TechAdvantagesSection() {
  const advantages: TechAdvantage[] = [
    {
      title: '高并发处理',
      value: '100万+',
      description: '每秒处理订单数',
      icon: CpuChipIcon
    },
    {
      title: '系统稳定性',
      value: '99.99%',
      description: '服务可用性保障',
      icon: ShieldCheckIcon
    },
    {
      title: '响应速度',
      value: '<50ms',
      description: '平均响应时间',
      icon: BoltIcon
    },
    {
      title: '数据安全',
      value: '100%',
      description: '数据加密传输',
      icon: CloudArrowUpIcon
    },
    {
      title: '弹性扩容',
      value: '10倍',
      description: '流量峰值承载',
      icon: ArrowTrendingUpIcon
    },
    {
      title: '成本节省',
      value: '40%',
      description: '运维成本降低',
      icon: CurrencyDollarIcon
    }
  ]

  return (
    <section className={clsx(
      'py-16',
      'bg-white'
    )}>
      <Container>
        <div className="text-center">
          <h2 className={clsx(
            'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
            'text-gray-900'
          )}>
            技术优势数据
          </h2>
          <p className={clsx(
            'mx-auto max-w-2xl text-lg leading-8',
            'text-gray-600'
          )}>
            用数据说话，展现零售解决方案的技术实力
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={clsx(
                'group p-6 transition-all duration-300 border border-gray-200',
                'bg-white hover:shadow-lg hover:-translate-y-1 hover:border-gray-300'
              )}
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <advantage.icon
                    className="h-8 w-8 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <div className={clsx(
                  'text-3xl font-bold mb-2',
                  'text-gray-900'
                )}>
                  {advantage.value}
                </div>
                <h3 className={clsx(
                  'text-lg font-semibold mb-2',
                  'text-gray-900'
                )}>
                  {advantage.title}
                </h3>
                <p className={clsx(
                  'text-sm',
                  'text-gray-600'
                )}>
                  {advantage.description}
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
 * 客户评价区域组件 - 展示客户对零售解决方案的评价
 * 采用卡片式布局，突出客户声音
 *
 * @returns {JSX.Element} 客户评价区域组件
 */
function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      name: '张明',
      role: '技术总监',
      company: '某知名电商平台',
      content: '主题云的零售解决方案帮助我们在双11期间轻松应对了10倍的流量增长，系统稳定性表现出色，用户体验得到了显著提升。',
      avatar: '/images/avatars/avatar1.jpg',
      rating: 5
    },
    {
      name: '李华',
      role: 'CTO',
      company: '新零售连锁品牌',
      content: '通过主题云的新零售解决方案，我们实现了线上线下库存的实时同步，大大提高了运营效率，客户满意度也有了明显改善。',
      avatar: '/images/avatars/avatar2.jpg',
      rating: 5
    },
    {
      name: '王芳',
      role: '运营总监',
      company: '直播电商公司',
      content: '主题云的直播电商解决方案为我们提供了稳定的直播技术支持，直播间的互动体验非常流畅，转化率提升了300%。',
      avatar: '/images/avatars/avatar3.jpg',
      rating: 5
    }
  ]

  return (
    <section className={clsx(
      'py-16',
      'bg-gray-50'
    )}>
      <Container>
        <div className="text-center">
          <h2 className={clsx(
            'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
            'text-gray-900'
          )}>
            客户评价
          </h2>
          <p className={clsx(
            'mx-auto max-w-2xl text-lg leading-8',
            'text-gray-600'
          )}>
            听听客户对我们零售解决方案的真实评价
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={clsx(
                'p-6 transition-all duration-300',
                'bg-white hover:shadow-lg'
              )}
            >
              <div className="space-y-4">
                {/* 评分 */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                {/* 评价内容 */}
                <p className={clsx(
                  'text-base leading-7',
                  'text-gray-600'
                )}>
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* 客户信息 */}
                <div className="flex items-center space-x-3">
                  <div className="h-10 w-10 bg-gray-300 flex items-center justify-center">
                    <UserGroupIcon className="h-6 w-6 text-gray-600" />
                  </div>
                  <div>
                    <div className={clsx(
                      'text-sm font-semibold',
                      'text-gray-900'
                    )}>
                      {testimonial.name}
                    </div>
                    <div className={clsx(
                      'text-sm',
                      'text-gray-500'
                    )}>
                      {testimonial.role}，{testimonial.company}
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
 * 准备好开始了吗区域组件 - 引导用户开始使用零售解决方案
 * 采用CTA设计，突出行动引导
 *
 * @returns {JSX.Element} 准备好开始了吗区域组件
 */
function ReadyToStartSection() {
  return (
    <section className={clsx(
      'py-16',
      'bg-gradient-to-r from-blue-600 to-indigo-600'
    )}>
      <Container>
        <div className="text-center">
          <h2 className={clsx(
            'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
            'text-white'
          )}>
            准备好开始了吗？
          </h2>
          <p className={clsx(
            'mx-auto max-w-2xl text-lg leading-8',
            'text-blue-100'
          )}>
            立即体验主题云零售解决方案，开启您的数字化零售之旅
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          {/* 主要按钮 - 免费试用 */}
          <a
            href="#contact"
            className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-blue-600 bg-white shadow-md transition-all duration-300 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30 w-full sm:w-auto min-w-[160px]"
          >
            <span className="relative z-10 flex items-center">
              免费试用
              <ShoppingCartIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            {/* 按钮光效 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>

          {/* 次要按钮 - 预约演示 */}
          <a
            href="#demo"
            className="group relative inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-white bg-transparent border-2 border-white/30 backdrop-blur-sm transition-all duration-300 hover:border-white hover:bg-white/10 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-white/30 w-full sm:w-auto min-w-[160px]"
          >
            <span className="relative z-10 flex items-center">
              预约演示
              <PhoneIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
            {/* 按钮光效 */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
        </div>

        {/* 联系信息 */}
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          <div className="text-center">
            <PhoneIcon className="mx-auto h-8 w-8 text-blue-200 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">电话咨询</h3>
            <p className="text-blue-100">400-123-4567</p>
          </div>
          <div className="text-center">
            <GlobeAltIcon className="mx-auto h-8 w-8 text-blue-200 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">在线咨询</h3>
            <p className="text-blue-100">7×24小时在线服务</p>
          </div>
          <div className="text-center">
            <UsersIcon className="mx-auto h-8 w-8 text-blue-200 mb-3" />
            <h3 className="text-lg font-semibold text-white mb-2">专属顾问</h3>
            <p className="text-blue-100">一对一专业服务</p>
          </div>
        </div>
      </Container>
    </section>
  )
}



export default function RetailPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <TrendsSection />
        <ScenariosSection />
        <FeaturesSection />
        <SolutionsSection />
        <TechAdvantagesSection />
        <TestimonialsSection />
        <ReadyToStartSection />
      </main>
      <Footer />
    </>
  )
}

