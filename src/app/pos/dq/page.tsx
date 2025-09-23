import { type Metadata } from 'next'
import Image from 'next/image'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ArrowsPointingOutIcon,
  ShieldCheckIcon,
  GiftIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/20/solid'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import DualQRCodeButtonGroup from '@/components/common/QRCode'
// === 页面组件导入 - 按功能分类排序 ===
// === 解决方案与产品展示 ===
import { Solution } from '@/components/Solution' // 解决方案
import ProductTraits from '@/components/common/ProductTraits' // 产品特性
import Superiority from '@/components/common/Superiority' // 产品优势
import Advantage from '@/components/Advantage' // 优势展示
// === 客户与信任建立 ===
import Customer from '@/components/common/Customer' // 客户案例
// === 支持与帮助 ===
import { Faqs } from '@/components/Faqs' // 常见问题
// === 页面底部 ===
import CatSections from '@/components/CatSections' // 底部行动区域
// 电签POS机产品接口定义
interface PosProduct {
  id: number
  name: string
  subtitle: string
  specs: {
    cpu: string
    memory: string
    storage: string
    bandwidth: string
  }
  regions: string[]
  duration: string
  originalPrice: number
  currentPrice: number
  discount: string
  isHot?: boolean
  isRecommended?: boolean
}

// 电签POS机产品数据
const posProducts: PosProduct[] = [
  {
    id: 1,
    name: '电签POS机',
    subtitle: '基础版',
    specs: {
      cpu: '单核处理器',
      memory: '512MB',
      storage: '4GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 599,
    currentPrice: 299,
    discount: '5折',
    isHot: true,
  },
  {
    id: 2,
    name: '4G电签POS',
    subtitle: '标准版',
    specs: {
      cpu: '双核处理器',
      memory: '1GB',
      storage: '8GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 899,
    currentPrice: 499,
    discount: '5.5折',
  },
  {
    id: 3,
    name: '智能电签POS',
    subtitle: '专业版',
    specs: {
      cpu: '四核处理器',
      memory: '2GB',
      storage: '16GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 1299,
    currentPrice: 799,
    discount: '6折',
  },
  {
    id: 4,
    name: '全能电签POS',
    subtitle: '旗舰版',
    specs: {
      cpu: '八核处理器',
      memory: '4GB',
      storage: '32GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 1999,
    currentPrice: 1299,
    discount: '6.5折',
    isRecommended: true,
  },
  {
    id: 5,
    name: '便携式电签POS',
    subtitle: '迷你版',
    specs: {
      cpu: '单核处理器',
      memory: '512MB',
      storage: '4GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 499,
    currentPrice: 199,
    discount: '4折',
  },
  {
    id: 6,
    name: '触屏电签POS',
    subtitle: '触控版',
    specs: {
      cpu: '双核处理器',
      memory: '1GB',
      storage: '8GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 999,
    currentPrice: 599,
    discount: '6折',
  },
  {
    id: 7,
    name: '双屏电签POS',
    subtitle: '豪华版',
    specs: {
      cpu: '四核处理器',
      memory: '2GB',
      storage: '16GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 1599,
    currentPrice: 999,
    discount: '6.2折',
  },
  {
    id: 8,
    name: '全能收款POS',
    subtitle: '企业版',
    specs: {
      cpu: '八核处理器',
      memory: '4GB',
      storage: '32GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 2299,
    currentPrice: 1599,
    discount: '7折',
    isHot: true,
  },
]
// 页面元数据配置
export const metadata: Metadata = {
  title: '电签POS机_4G电签POS_电签版POS机_移动POS机_智能POS机',
  description:
    '电签POS机，支持电子签名功能，4G全网通，银联认证，多支付方式，助力商户轻松收款。',
  keywords: [
    '电签POS机',
    '4G电签POS',
    '电签版POS机',
    '移动POS机',
    '智能POS机',
    '电子签名',
    'POS机办理',
    '银联POS机',
    '移动支付',
    '收款神器',
    'POS机申请',
    '低费率POS机',
    'POS机费率',
    'POS机品牌',
    'POSNFC',
    '商户收款',
    '便捷收款',
  ],
}

// ECS 云计算服务核心特性配置
const ecsFeatures = [
  {
    name: '弹性伸缩',
    description:
      '根据业务需求自动调整计算资源，支持秒级扩容和缩容，确保应用性能的同时优化成本控制。',
    icon: ChartBarIcon,
  },
  {
    name: '高可用架构',
    description:
      '多可用区部署，99.95% 的服务可用性保障，自动故障转移和负载均衡，确保业务连续性。',
    icon: DocumentTextIcon,
  },
  {
    name: '安全防护',
    description:
      '企业级安全防护体系，包括网络隔离、访问控制、数据加密和安全审计，全方位保护您的数据安全。',
    icon: LockClosedIcon,
  },
]

// Leftright 组件的特性数据
const leftRightFeatures = [
  {
    name: '资源监控',
    summary: '实时监控云资源使用情况，智能预警系统。',
    description:
      '通过直观的仪表盘展示CPU、内存、存储等关键指标的使用情况，并在达到阈值时及时发出预警通知。',
    icon: ChartBarIcon,
  },
  {
    name: '弹性伸缩',
    summary: '根据业务负载自动调整计算资源，确保性能与成本的最优平衡。',
    description:
      '智能感知业务高峰，自动扩展或收缩计算资源，既保证服务质量，又避免资源浪费。',
    icon: ArrowsPointingOutIcon,
  },
  {
    name: '安全管理',
    summary: '全方位的云安全防护，为您的业务保驾护航。',
    description:
      '提供多层次安全防护，包括访问控制、数据加密、安全组策略等，全面保障您的云上资产安全。',
    icon: ShieldCheckIcon,
  },
]

// Rightleft 组件的特性数据
const rightLeftFeatures = [
  {
    name: '一键部署',
    description:
      '通过简单的推送操作即可完成应用部署，大幅提升开发效率，让您专注于业务创新而非运维工作。',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL证书管理',
    description:
      '自动化SSL证书申请、部署和续期，为您的网站提供全方位的HTTPS安全保护。',
    icon: LockClosedIcon,
  },
  {
    name: '数据库备份',
    description:
      '智能化数据备份策略，支持定时备份和增量备份，确保您的数据安全无忧。',
    icon: ServerIcon,
  },
]

// 图片轮播 Hero 组件 - 展示 双屏电签POS 云计算服务的主要图片内容
function DqHero() {
  return (
    <section className="relative pt-16 pb-12 lg:py-16" style={{backgroundColor: '#f0f4f8'}}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 左侧内容区域 */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-700">
                0元免押金 · 激活返现299元
              </div>

              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                热门爆款
                <span className="block text-blue-600">智能POS机</span>
              </h1>

              <p className="text-lg text-gray-600">
                支持银盛、中付、海科、乐刷和合利宝多品牌
              </p>
            </div>

            {/* 核心特性 - 简化版 */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="text-green-600">✓</span>
                <span>全渠道收款 · 会员营销SaaS</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="text-green-600">✓</span>
                <span>费率0.38% · 多场景适用</span>
              </div>
            </div>

            {/* 行动按钮 - 简化版 */}
            <DualQRCodeButtonGroup
              leftButton={{
                text: '立即领取',
                className: 'inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 transition-colors',
                icon: <GiftIcon className="mr-2 h-5 w-5" />
              }}
              rightButton={{
                text: '联系客服',
                className: 'inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors',
                icon: <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />
              }}
              leftQRCode={{
                src: '/images/contact/gzh.png',
                alt: '微信公众号二维码',
                title: '关注公众号',
                description: '扫描二维码关注公众号'
              }}
              rightQRCode={{
                src: '/images/contact/userhlc.png',
                alt: '客服二维码',
                title: '联系客服',
                description: '扫码添加客服领取'
              }}
              title="扫码联系我们"
              description="选择下方二维码进行联系"
            />

            {/* 信任标识 - 简化版 */}
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>央行一清认证</span>
              <span>·</span>
              <span>顺丰包邮</span>
              <span>·</span>
              <span>30天无理由退</span>
            </div>
          </div>

          {/* 右侧产品图片 - 简化版 */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/product/智能屏.png"
              alt="智能POS机产品图"
              width={400}
              height={300}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

// POS功能特性组件 - 左右分栏展示
function POSFeaturesSection() {
  // 移动端功能特性展示组件
  function FeaturesMobile() {
    return (
      <div className="lg:hidden">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base/7 font-semibold text-black dark:text-black">
              快速办理
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-blue-600 sm:text-5xl dark:text-blue-400">
              电签让收款更便捷
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              银盛、拉卡拉等银联正规POS机及移动收款解决方案，助力商户轻松收款。
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
              {leftRightFeatures.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <div className="absolute top-1 left-1 h-5 w-5 text-blue-600 dark:text-blue-400">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 36 36"
                          aria-hidden="true"
                        >
                          <IconComponent />
                        </svg>
                      </div>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
          <div className="mt-16 sm:mt-20">
            <div className="relative overflow-hidden rounded-md border border-gray-200/50 bg-white/80 p-4 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
              {/* 移动端模拟界面头部 */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-red-400"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  POS机控制台
                </div>
              </div>

              {/* 移动端模拟界面标题栏 */}
              <div className="mb-3 rounded-md border border-gray-200/50 bg-gray-50/80 p-3 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
                <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
                  交易管理中心
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  实时监控POS机交易
                </p>
              </div>

              {/* 移动端模拟功能模块 */}
              <div className="mb-3 space-y-3">
                {leftRightFeatures.slice(0, 3).map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={feature.name}
                      className="rounded-md border border-gray-200/30 bg-gray-50/60 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50">
                          <svg
                            className="h-4 w-4 text-blue-600 dark:text-blue-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <IconComponent />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {feature.name}
                          </h4>
                          <div className="mt-1">
                            <div className="h-1 w-full bg-gray-200/60 dark:bg-gray-700/60">
                              <div
                                className="h-1 bg-blue-500 transition-all duration-1000 dark:bg-blue-400"
                                style={{ width: `${50 + index * 15}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* 移动端模拟状态栏 */}
              <div className="flex items-center justify-between rounded-md border border-gray-200/30 bg-gray-50/60 p-2 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                  <span>交易正常</span>
                </div>
                <span>刚刚更新</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 桌面端功能特性展示组件
  function FeaturesDesktop() {
    return (
      <div className="hidden lg:block">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16 md:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start">
          <div className="sm:px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-black dark:text-black">
                快速办理
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-blue-600 sm:text-5xl dark:text-blue-400">
              让收款更便捷
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                银盛、拉卡拉等银联正规POS机及移动收款解决方案，助力商户轻松收款。
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                {leftRightFeatures.map((feature) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        <div className="absolute top-1 left-1 h-5 w-5 text-blue-600 dark:text-blue-400">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 36 36"
                            aria-hidden="true"
                          >
                            <IconComponent />
                          </svg>
                        </div>
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative overflow-hidden rounded-md border border-gray-200/50 bg-white/80 p-6 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
              {/* 模拟界面头部 */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="h-3 w-3 rounded-full bg-red-400"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                  <div className="h-3 w-3 rounded-full bg-green-400"></div>
                </div>
                <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  POS机控制台
                </div>
              </div>

              {/* 模拟界面标题栏 */}
              <div className="mb-4 rounded-md border border-gray-200/50 bg-gray-50/80 p-4 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  交易管理中心
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  实时监控和管理您的POS机交易
                </p>
              </div>

              {/* 模拟功能模块 */}
              <div className="mb-4 grid grid-cols-1 gap-4">
                {leftRightFeatures.slice(0, 4).map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={feature.name}
                      className="group rounded-md border border-gray-200/30 bg-gray-50/60 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0">
                          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50">
                            <svg
                              className="h-5 w-5 text-blue-600 dark:text-blue-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <IconComponent />
                            </svg>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {feature.name}
                          </h4>
                          <p className="mt-1 truncate text-xs text-gray-600 dark:text-gray-400">
                            {feature.summary}
                          </p>
                          <div className="mt-2">
                            <div className="h-1.5 w-full bg-gray-200/60 dark:bg-gray-700/60">
                              <div
                                className="h-1.5 bg-blue-500 transition-all duration-1000 group-hover:w-full dark:bg-blue-400"
                                style={{ width: `${60 + index * 10}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* 模拟状态栏 */}
              <div className="flex items-center justify-between rounded-md border border-gray-200/30 bg-gray-50/60 p-3 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <div className="h-2 w-2 rounded-full bg-green-400"></div>
                    <span>交易正常</span>
                  </span>
                  <span>交易笔数: 45</span>
                  <span>收款金额: 2.1万</span>
                </div>
                <div className="text-right">
                  <span>最后更新: 刚刚</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900"
    >
      <Container>
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}

// POS服务功能组件 - 右左分栏展示
function POSServicesSection() {
  // 移动端功能特性展示组件
  function FeaturesMobile() {
    return (
      <div className="block lg:hidden">
        <div className="mx-auto max-w-2xl">
          {/* 移动端文本内容 */}
          <div className="text-center">
            <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">
              高效收款
            </h2>
            <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl md:text-4xl dark:text-white">
              智能POS，轻松收款
            </p>
            <p className="mt-4 text-base/7 text-gray-600 sm:text-lg/8 dark:text-gray-300">
              通过智能化POS机设备，实现移动收款、码牌收款等多种支付方式。
            </p>
          </div>

          {/* 移动端功能列表 */}
          <div className="mt-8">
            <dl className="space-y-4 text-sm/6 text-gray-600 sm:space-y-6 sm:text-base/7 dark:text-gray-400">
              {rightLeftFeatures.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.name} className="relative pl-8 sm:pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <IconComponent
                        aria-hidden="true"
                        className="absolute top-1 left-1 h-4 w-4 text-blue-600 sm:h-5 sm:w-5 dark:text-blue-400"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                )
              })}
            </dl>
          </div>

          {/* 移动端模拟界面 */}
          <div className="mt-8 sm:mt-12">
            <div className="relative overflow-hidden border border-gray-200/50 bg-white/80 p-3 shadow-xl backdrop-blur-lg sm:p-4 dark:border-gray-700/50 dark:bg-white/10">
              {/* 移动端模拟界面头部 */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center space-x-1.5 sm:space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-red-400 sm:h-2 sm:w-2"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-yellow-400 sm:h-2 sm:w-2"></div>
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400 sm:h-2 sm:w-2"></div>
                </div>
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  POS支付网
                </div>
              </div>

              {/* 移动端模拟界面标题栏 */}
              <div className="mb-2 rounded border border-gray-200/50 bg-gray-50/80 p-2 backdrop-blur-sm sm:p-3 dark:border-gray-700/50 dark:bg-gray-800/50">
                <h3 className="mb-1 text-sm font-semibold text-gray-900 sm:text-base dark:text-white">
                  智能终端中心
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  多种收款方式管理平台
                </p>
              </div>

              {/* 移动端模拟功能模块 */}
              <div className="mb-2 space-y-1.5 sm:space-y-2">
                {rightLeftFeatures.slice(0, 3).map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={feature.name}
                      className="rounded border border-gray-200/30 bg-gray-50/60 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 sm:p-2.5 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                    >
                      <div className="flex items-center space-x-2 sm:space-x-3">
                        <div className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded border border-blue-200/50 bg-blue-100/80 sm:h-6 sm:w-6 dark:border-blue-800/50 dark:bg-blue-900/50">
                          <IconComponent className="h-3 w-3 text-blue-600 sm:h-4 sm:w-4 dark:text-blue-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-xs font-medium text-gray-900 sm:text-sm dark:text-white">
                            {feature.name}
                          </h4>
                          <div className="mt-1">
                            <div className="h-0.5 w-full rounded-full bg-gray-200/60 sm:h-1 dark:bg-gray-700/60">
                              <div
                                className="h-0.5 rounded-full bg-blue-500 transition-all duration-1000 sm:h-1 dark:bg-blue-400"
                                style={{ width: `${70 + index * 10}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* 移动端模拟状态栏 */}
              <div className="flex items-center justify-between border border-gray-200/30 bg-gray-50/60 p-1.5 text-xs text-gray-600 backdrop-blur-sm sm:p-2 dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                <div className="flex items-center space-x-1.5">
                  <div className="h-1 w-1 bg-blue-400 sm:h-1.5 sm:w-1.5"></div>
                  <span className="text-xs">收款正常</span>
                </div>
                <span className="text-xs">支付服务中</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 平板端功能特性展示组件
  function FeaturesTablet() {
    return (
      <div className="hidden md:block lg:hidden">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            {/* 平板端文本内容 */}
            <div className="order-2 md:order-1">
              <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">
                高效收款
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 md:text-4xl dark:text-white">
                智能POS，轻松收款
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                通过智能化POS机设备，实现移动收款、码牌收款等多种支付方式。
              </p>
              <dl className="mt-8 space-y-6 text-base/7 text-gray-600 dark:text-gray-400">
                {rightLeftFeatures.map((feature) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        <IconComponent
                          aria-hidden="true"
                          className="absolute top-1 left-1 h-5 w-5 text-blue-600 dark:text-blue-400"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>

            {/* 平板端模拟界面 */}
            <div className="order-1 md:order-2">
              <div className="relative overflow-hidden rounded-lg border border-gray-200/50 bg-white/80 p-4 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
                {/* 平板端模拟界面头部 */}
                <div className="mb-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-2.5 w-2.5 bg-red-400"></div>
                    <div className="h-2.5 w-2.5 bg-yellow-400"></div>
                    <div className="h-2.5 w-2.5 bg-green-400"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    POS支付管理中心
                  </div>
                </div>

                {/* 平板端模拟界面标题栏 */}
                <div className="mb-2 border border-gray-200/50 bg-gray-50/80 p-3 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
                  <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
                    智能终端管理平台
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    多种收款方式和支付服务系统
                  </p>
                </div>

                {/* 平板端模拟功能模块 */}
                <div className="mb-2 space-y-1.5">
                  {rightLeftFeatures.slice(0, 4).map((feature, index) => {
                    const IconComponent = feature.icon
                    return (
                      <div
                        key={feature.name}
                        className="group rounded-md border border-gray-200/30 bg-gray-50/60 p-2.5 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50">
                            <IconComponent className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <h4 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                              {feature.name}
                            </h4>
                            <div className="mt-1">
                              <div className="h-1 w-full bg-gray-200/60 dark:bg-gray-700/60">
                                <div
                                  className="h-1 bg-blue-500 transition-all duration-1000 group-hover:w-full dark:bg-blue-400"
                                  style={{ width: `${75 + index * 5}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* 平板端模拟状态栏 */}
                <div className="flex items-center justify-between rounded-md border border-gray-200/30 bg-gray-50/60 p-2 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <div className="h-1.5 w-1.5 bg-blue-400"></div>
                      <span>收款正常</span>
                    </span>
                    <span>支付服务: 启用</span>
                  </div>
                  <div className="text-right">
                    <span>交易成功率: 99.9%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 桌面端功能特性展示组件
  function FeaturesDesktop() {
    return (
      <div className="hidden lg:block">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:gap-x-12">
          <div className="flex items-start justify-end lg:order-first lg:col-span-3">
            <div className="relative w-full overflow-hidden rounded-md border border-gray-200/50 bg-white/80 p-4 shadow-xl backdrop-blur-lg xl:p-5 dark:border-gray-700/50 dark:bg-white/10">
               {/* 桌面端模拟界面头部 */}
               <div className="mb-3 flex items-center justify-between xl:mb-4">
                 <div className="flex items-center space-x-3">
                   <div className="h-3 w-3 bg-red-400"></div>
                   <div className="h-3 w-3 bg-yellow-400"></div>
                   <div className="h-3 w-3 bg-green-400"></div>
                 </div>
                 <div className="text-sm font-medium text-gray-700 xl:text-base dark:text-gray-300">
                   POS支付管理中心
                 </div>
               </div>

               {/* 桌面端模拟界面标题栏 */}
               <div className="mb-3 rounded-md border border-gray-200/50 bg-gray-50/80 p-3 backdrop-blur-sm xl:mb-4 xl:p-4 dark:border-gray-700/50 dark:bg-gray-800/50">
                 <h3 className="mb-1 text-lg font-semibold text-gray-900 xl:text-xl dark:text-white">
                   智能终端管理平台
                 </h3>
                 <p className="text-sm text-gray-600 xl:text-base dark:text-gray-400">
                   多种收款方式和支付服务系统
                 </p>
               </div>

               {/* 桌面端模拟功能模块 */}
               <div className="mb-3 grid grid-cols-1 gap-2 xl:mb-4 xl:gap-3">
                 {rightLeftFeatures.map((feature, index) => {
                   const IconComponent = feature.icon
                   return (
                     <div
                       key={feature.name}
                       className="group rounded-md border border-gray-200/30 bg-gray-50/60 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 hover:shadow-md xl:p-4 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                     >
                       <div className="flex items-start space-x-3 xl:space-x-4">
                         <div className="flex-shrink-0">
                           <div className="flex h-8 w-8 items-center justify-center rounded-md border border-blue-200/50 bg-blue-100/80 xl:h-10 xl:w-10 dark:border-blue-800/50 dark:bg-blue-900/50">
                             <IconComponent className="h-5 w-5 text-blue-600 xl:h-6 xl:w-6 dark:text-blue-400" />
                           </div>
                         </div>
                         <div className="min-w-0 flex-1">
                           <h4 className="text-sm font-medium text-gray-900 xl:text-base dark:text-white">
                             {feature.name}
                           </h4>
                           <p className="mt-1 text-xs text-gray-600 xl:text-sm dark:text-gray-400">
                             {feature.description}
                           </p>
                           <div className="mt-2 xl:mt-3">
                             <div className="h-1.5 w-full bg-gray-200/60 xl:h-2 dark:bg-gray-700/60">
                               <div
                                 className="h-1.5 bg-blue-500 transition-all duration-1000 group-hover:w-full xl:h-2 dark:bg-blue-400"
                                 style={{ width: `${75 + index * 5}%` }}
                               ></div>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                   )
                 })}
               </div>

               {/* 桌面端模拟状态栏 */}
               <div className="flex items-center justify-between rounded-md border border-gray-200/30 bg-gray-50/60 p-2.5 text-xs text-gray-600 backdrop-blur-sm xl:p-3 xl:text-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                <div className="flex items-center space-x-4">
                  <span className="flex items-center space-x-1">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    <span>收款正常</span>
                  </span>
                  <span>支付服务: 启用</span>
                  <span>交易监控: 活跃</span>
                </div>
                <div className="text-right">
                  <span>交易成功率: 99.9%</span>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:col-span-2 lg:ml-auto lg:pt-4 lg:pl-4 xl:pt-6 xl:pl-6">
            <div className="lg:max-w-lg xl:max-w-xl">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">
                快速办理
              </h2>
              <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 lg:text-4xl xl:text-5xl dark:text-white">
                让收款更便捷
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 xl:text-xl/9 dark:text-gray-300">
                银盛、拉卡拉等银联正规POS机及移动收款解决方案，助力商户轻松收款。
              </p>
              <dl className="mt-10 space-y-8 text-base/7 text-gray-600 xl:space-y-10 xl:text-lg/8 dark:text-gray-400">
                {rightLeftFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9 xl:pl-11">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 h-5 w-5 text-indigo-600 xl:h-6 xl:w-6 dark:text-indigo-400"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="rightleft-features" aria-label="POS机功能特性展示">
      <div className="overflow-hidden bg-gray-50 py-16 sm:py-20 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <FeaturesMobile />
          <FeaturesTablet />
          <FeaturesDesktop />
        </div>
      </div>
    </section>
  )
}

// ECS 页面主组件
export default function ECSPage() {
  return (
    <>
      <Header />
      <main>
        <DqHero />

        {/* 轻量应用服务器器专区 - 直接嵌入的代码 */}
        <div className="min-h-screen bg-gray-50">
          {/* 页面标题 */}
          <div className="border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-bold text-gray-900">
                电签POS机专区
              </h1>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-medium text-orange-500">4G全网通</span>
                ，新用户低至
                <span className="font-medium text-orange-500">299元/台</span>
                <span className="ml-2 cursor-pointer text-blue-600 underline">
                  活动规则&gt;
                </span>
              </p>
            </div>
          </div>

          {/* 产品网格 */}
          <div className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {posProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
                >
                  {/* 产品标题和标签 */}
                  <div className="border-b border-gray-100 p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <h3 className="text-lg font-medium text-gray-900">
                        {product.name}
                      </h3>
                      <svg
                        className="h-5 w-5 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">
                        {product.subtitle}
                      </span>
                      {product.isHot && (
                        <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                          申请特惠
                        </span>
                      )}
                      {product.isRecommended && (
                        <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                          申请特惠
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      电子签名、多支付方式、银联认证
                    </p>
                  </div>

                  {/* 产品规格信息 */}
                  <div className="space-y-3 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">处理器</span>
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-gray-900">
                          {product.specs.cpu}
                        </span>
                        <svg
                          className="h-4 w-4 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">覆盖范围</span>
                      <span className="text-sm text-gray-900">
                        {product.regions.join('/')}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">质保期</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900">
                          {product.duration}
                        </span>
                        <span className="rounded bg-red-100 px-1 py-0.5 text-xs text-red-600">
                          {product.discount}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">数量</span>
                      <div className="flex items-center gap-2">
                        <button className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                          −
                        </button>
                        <span className="w-8 text-center text-sm">1</span>
                        <button className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50">
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 价格和折扣信息 */}
                  <div className="border-t border-gray-100 p-4">
                    {product.discount && (
                      <div className="mb-2 flex items-center gap-2">
                        <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-600">
                          {product.discount}
                        </span>
                        <span className="text-xs text-gray-500">限1台</span>
                      </div>
                    )}

                    <div className="mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-gray-600">活动价:</span>
                        <span className="text-2xl font-bold text-red-600">
                          {product.currentPrice}
                        </span>
                        <span className="text-sm text-gray-600">元</span>
                        <span className="text-xs text-gray-500">
                          ¥{product.originalPrice.toFixed(2)}/台
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm text-gray-600">日常价:</span>
                        <span className="text-sm text-gray-500">
                          {product.originalPrice} 元
                        </span>
                      </div>
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex gap-2">
                      <a
                        href="https://console.cloudcvm.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block flex-1 rounded border border-blue-600 px-3 py-2 text-center text-sm text-blue-600 transition-colors hover:bg-blue-50"
                      >
                        申请办理
                      </a>
                      <a
                        href="https://console.cloudcvm.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block flex-1 rounded bg-blue-600 px-3 py-2 text-center text-sm text-white transition-colors hover:bg-blue-700"
                      >
                        立即购买
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <POSFeaturesSection />
        <POSServicesSection />

        {/* 产品优势卡片网格 */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                产品优势
              </h2>
              <p className="text-lg text-gray-600">
                专业电签POS机，助力商户轻松收款
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <div className="relative rounded border-2 border-white bg-gradient-to-b from-white to-gray-50 p-[18px] shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-200 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff]">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  电子签名
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  支持电子签名功能，符合银联认证标准，交易安全可靠，让每一笔交易都有法律保障
                </p>
              </div>

              <div className="relative rounded border-2 border-white bg-gradient-to-b from-white to-gray-50 p-[18px] shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-200 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff]">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  4G全网通
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  内置4G模块，支持三大运营商网络，信号稳定，随时随地轻松收款，不受网络限制
                </p>
              </div>

              <div className="relative rounded border-2 border-white bg-gradient-to-b from-white to-gray-50 p-[18px] shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-200 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff]">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  多支付方式
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  支持银行卡、微信、支付宝、云闪付等多种支付方式，满足不同客户支付需求
                </p>
              </div>

              <div className="relative rounded border-2 border-white bg-gradient-to-b from-white to-gray-50 p-[18px] shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-200 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff]">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  安全可靠
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  通过银联安全认证，采用金融级加密技术，保障交易数据安全，让商户收款更安心
                </p>
              </div>

              <div className="relative rounded border-2 border-white bg-gradient-to-b from-white to-gray-50 p-[18px] shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-200 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff]">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  操作简单
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  界面友好，操作简单，无需专业知识，快速上手，轻松完成收款操作
                </p>
              </div>

              <div className="relative rounded border-2 border-white bg-gradient-to-b from-white to-gray-50 p-[18px] shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-200 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff]">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  费率优惠
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  提供行业优惠费率，低至0.38%，为商户节省交易成本，提高经营利润
                </p>
              </div>

              <div className="relative rounded border-2 border-white bg-gradient-to-b from-white to-gray-50 p-[18px] shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-200 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff]">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  快速到账
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  支持T+1、D+0等多种结算方式，资金快速到账，提高商户资金周转效率
                </p>
              </div>

              <div className="relative rounded border-2 border-white bg-gradient-to-b from-white to-gray-50 p-[18px] shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-200 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff]">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  全程服务
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  7×24小时客服支持，专业安装指导，定期维护保养，让商户使用无忧
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 优势对比表格 */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                优势对比
              </h2>
            </div>

            {/* 移动端卡片布局 - 显示核心对比信息 */}
            <div className="block space-y-6 lg:hidden">
              {[
                {
                  title: '支付方式',
                  other: '仅支持银行卡',
                  ours: '支持多种支付方式',
                  traditional: '仅支持现金或银行卡',
                },
                {
                  title: '网络连接',
                  other: '需要WiFi或有线网络',
                  ours: '4G全网通，不受网络限制',
                  traditional: '需要电话线或网络',
                },
                {
                  title: '交易安全',
                  other: '基础安全防护',
                  ours: '银联认证，金融级加密',
                  traditional: '安全防护较弱',
                },
                {
                  title: '操作便捷性',
                  other: '操作较复杂',
                  ours: '界面友好，操作简单',
                  traditional: '操作繁琐',
                },
                {
                  title: '结算速度',
                  other: 'T+1结算',
                  ours: '支持T+1、D+0多种结算',
                  traditional: '结算周期长',
                },
                {
                  title: '售后服务',
                  other: '工作时间服务',
                  ours: '7×24小时全天候服务',
                  traditional: '服务响应慢',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-white transition-colors duration-200 hover:border-blue-300"
                >
                  <div className="border-b border-gray-200 bg-gray-50 p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="border border-blue-200 bg-blue-50 p-3">
                      <div className="mb-1 text-sm font-medium text-blue-800">
                        电签POS机
                      </div>
                      <div className="text-sm text-blue-700">{item.ours}</div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="flex-1 bg-gray-50 p-3">
                        <div className="mb-1 text-xs font-medium text-gray-600">
                          传统POS机
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.other}
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-50 p-3">
                        <div className="mb-1 text-xs font-medium text-gray-600">
                          收银系统
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.traditional}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PC端完整表格布局 */}
            <div className="hidden overflow-x-auto lg:block">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-40 border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      对比项
                    </th>
                    <th className="border-b border-gray-200 px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      传统POS机
                    </th>
                    <th className="border-b border-blue-600 bg-blue-600 px-6 py-4 text-center text-sm font-semibold text-white">
                      电签POS机
                    </th>
                    <th className="border-b border-gray-200 px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      收银系统
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      支付方式
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      仅支持银行卡支付
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      支持银行卡、微信、支付宝、云闪付等多种支付方式
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      仅支持现金或银行卡支付
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      网络连接
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      需要WiFi或有线网络
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      4G全网通，不受网络限制，随时随地轻松收款
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      需要电话线或网络连接
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      交易安全
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      基础安全防护
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      银联认证，金融级加密技术，保障交易数据安全
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      安全防护较弱
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      操作便捷性
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      操作较复杂，需要培训
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      界面友好，操作简单，无需专业知识，快速上手
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      操作繁琐，功能复杂
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      结算速度
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      T+1结算
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      支持T+1、D+0等多种结算方式，资金快速到账
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      结算周期长，通常需要3-5天
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      售后服务
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      工作时间服务
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      7×24小时全天候服务，专业安装指导，定期维护保养
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      服务响应慢，维修周期长
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* === 解决方案与产品展示 === */}

        <ProductTraits />
        <Superiority />
        <Advantage />
        <Solution />
        {/* === 客户与信任建立 === */}
        <Customer />
        {/* === 页面底部 === */}
        <CatSections />
      </main>
      <Footer />
    </>
  )
}
