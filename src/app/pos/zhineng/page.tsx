import { type Metadata } from 'next'
import {
  CpuChipIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  CreditCardIcon,
  UserGroupIcon,
  CubeIcon,
  WifiIcon,
  Cog6ToothIcon,
  Battery100Icon,
  CurrencyYenIcon,
  GiftIcon,
  PercentBadgeIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

// === 页面组件导入 - 按功能分类排序 ===
// === 布局组件 ===
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

// === 轮播组件 ===
import { VideoCarousel } from '@/components/carousel/VideoCarousel'

// === 解决方案与产品展示 ===
import { Solution } from '@/components/Solution'
import ProductTraits from '@/components/common/ProductTraits'
import Superiority from '@/components/common/Superiority'
import Advantage from '@/components/Advantage'

// === 客户与信任建立 ===
import Customer from '@/components/common/Customer'

// === 支持与帮助 ===
import { Faqs } from '@/components/Faqs'

// === 页面底部 ===
import CatSections from '@/components/CatSections'

/**
 * 智能POS机产品接口定义
 * 定义POS机产品的基本属性和规格信息
 */
interface PosProduct {
  id: number
  name: string
  subtitle: string
  specs: {
    cpu: string
    memory: string
    storage: string
    screen: string
  }
  regions: string[]
  duration: string
  originalPrice: number
  currentPrice: number
  discount: string
  isHot?: boolean
  isRecommended?: boolean
}

/**
 * 智能POS机产品数据配置
 * 包含8款不同场景的POS机产品信息
 */
const posProducts: PosProduct[] = [
  {
    id: 1,
    name: '智能POS标准版',
    subtitle: '双屏收银一体机',
    specs: {
      cpu: '8核2.0GHz',
      memory: '3GB',
      storage: '32GB',
      screen: '15.6英寸+11.6英寸客显',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 2999,
    currentPrice: 0,
    discount: '免押金',
    isHot: true,
  },
  {
    id: 2,
    name: '智能POS移动版',
    subtitle: '带电池便携款',
    specs: {
      cpu: '8核2.0GHz',
      memory: '4GB',
      storage: '64GB',
      screen: '15.6英寸+11.6英寸客显',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 3499,
    currentPrice: 0,
    discount: '免押金',
    isHot: true,
  },
  {
    id: 3,
    name: '智能POS代理版',
    subtitle: '可发展下级代理',
    specs: {
      cpu: '8核2.0GHz',
      memory: '4GB',
      storage: '64GB',
      screen: '15.6英寸+11.6英寸客显',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 3999,
    currentPrice: 0,
    discount: '免押金',
    isRecommended: true,
  },
  {
    id: 4,
    name: '智能POS餐饮版',
    subtitle: '扫码点餐专用',
    specs: {
      cpu: '8核2.0GHz',
      memory: '4GB',
      storage: '64GB',
      screen: '15.6英寸+11.6英寸客显',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 3799,
    currentPrice: 0,
    discount: '免押金',
  },
  {
    id: 5,
    name: '智能POS零售版',
    subtitle: '库存管理专用',
    specs: {
      cpu: '8核2.0GHz',
      memory: '4GB',
      storage: '64GB',
      screen: '15.6英寸+11.6英寸客显',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 3599,
    currentPrice: 0,
    discount: '免押金',
  },
  {
    id: 6,
    name: '智能POS美业版',
    subtitle: '预约次卡管理',
    specs: {
      cpu: '8核2.0GHz',
      memory: '4GB',
      storage: '64GB',
      screen: '15.6英寸+11.6英寸客显',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 3699,
    currentPrice: 0,
    discount: '免押金',
  },
  {
    id: 7,
    name: '智能POS加油站版',
    subtitle: '车牌支付专用',
    specs: {
      cpu: '8核2.0GHz',
      memory: '4GB',
      storage: '64GB',
      screen: '15.6英寸+11.6英寸客显',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 3899,
    currentPrice: 0,
    discount: '免押金',
  },
  {
    id: 8,
    name: '智能POS夜市版',
    subtitle: '移动便携款',
    specs: {
      cpu: '8核2.0GHz',
      memory: '3GB',
      storage: '32GB',
      screen: '15.6英寸+11.6英寸客显',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 3299,
    currentPrice: 0,
    discount: '免押金',
  },
]

/**
 * 页面SEO元数据配置
 * 包含标题、描述和关键词等SEO优化信息
 */
export const metadata: Metadata = {
  title: '智能POS机办理官网｜0元免押+激活返现299元，费率0.38%终身锁',
  description:
    '正规一清智能POS机办理入口：双屏收银一体机，0元免押金，激活返现299元，支持微信、支付宝、花呗、信用卡、数字人民币等全渠道收款，自带会员营销SaaS系统，餐饮/零售/美业/加油站/夜市等场景全覆盖，顺丰包邮当天发货！',
  keywords:
    '智能POS机,安卓收银一体机,双屏POS机,POS机办理,POS机价格,POS机官网,扫码支付,刷卡支付,NFC闪付,数字人民币支付,会员管理SaaS,库存管理,营销发券,数据分析,4G全网通,WiFi双频,蓝牙5.0,15.6英寸大屏,客显广告屏,安卓13系统,8核CPU,一键OTA升级,0元免押,激活返现299元,费率0.38%永不+3,秒到帐,终身免费SaaS,顺丰包邮,10分钟上手,30天无理由退,支持花呗信用卡,央行一清认证',
}

/**
 * 智能POS机硬件配置特性数据
 * 用于左右分栏展示的硬件配置信息
 */
const leftRightFeatures = [
  {
    name: '安卓13系统',
    description: '搭载最新安卓13系统，操作流畅，兼容性强，支持一键OTA升级',
    icon: Cog6ToothIcon,
  },
  {
    name: '8核高性能CPU',
    description: '8核2.0GHz高性能处理器，多任务处理流畅，收银不卡顿',
    icon: CpuChipIcon,
  },
  {
    name: '大容量存储',
    description: '3GB+32GB大容量存储，支持扩展至128GB，满足各类应用需求',
    icon: ServerIcon,
  },
  {
    name: '移动便携',
    description: '可选配5000mAh大容量电池，断电续航4小时，移动收款无忧',
    icon: Battery100Icon,
  },
]

/**
 * 智能POS机优惠政策特性数据
 * 用于右左分栏展示的优惠政策信息
 */
const rightLeftFeatures = [
  {
    name: '0元免押',
    description: '0元押金拿机，30天内激活即可，无任何隐藏费用',
    icon: CurrencyYenIcon,
  },
  {
    name: '激活返现',
    description: '激活一台返现299元，代理版最高返现399元，快速回本',
    icon: GiftIcon,
  },
  {
    name: '费率0.38%',
    description: '费率0.38%永不+3，电子合同写明，涨价双倍赔付',
    icon: PercentBadgeIcon,
  },
  {
    name: '终身免费SaaS',
    description: '收银系统、会员管理、库存管理等SaaS功能终身免费使用',
    icon: ShieldCheckIcon,
  },
]

/**
 * 智能POS机图片轮播Hero组件
 * 展示产品核心卖点的轮播图组件
 */
function ECSVideoHero() {
  const ecsVideoSlide = [
    {
      id: 1,
      title: '智能POS机',
      subtitle: '双屏收银一体机',
      description:
        '15.6英寸主屏+11.6英寸客显，全渠道收款，会员营销SaaS，库存管理，数据分析',
      backgroundType: 'image' as const,
      backgroundImage: '/images/carousel/HeaderCarousel.jpg',
      textPosition: 'left' as const,
      buttonText: '立即办理',
      buttonLink: 'https://console.cloudcvm.com/regist.htm',
    },
    {
      id: 2,
      title: '全渠道收款',
      subtitle: '支持多种支付方式',
      description:
        '微信、支付宝、花呗、信用卡、数字人民币、Apple Pay等全渠道支付',
      backgroundType: 'image' as const,
      backgroundImage: '/images/carousel/HeaderCarousel1.jpg',
      textPosition: 'left' as const,
      buttonText: '立即办理',
      buttonLink: 'https://console.cloudcvm.com/regist.htm',
    },
    {
      id: 3,
      title: '会员营销SaaS',
      subtitle: '提升复购率',
      description:
        '自带会员管理系统，积分、储值、优惠券一键发放，复购率提升35%',
      backgroundType: 'image' as const,
      backgroundImage: '/images/carousel/HeaderCarousel2.jpg',
      textPosition: 'left' as const,
      buttonText: '立即办理',
      buttonLink: 'https://console.cloudcvm.com/regist.htm',
    },
    {
      id: 4,
      title: '多场景适用',
      subtitle: '餐饮/零售/美业/加油站/夜市',
      description:
        '扫码点餐、库存管理、预约次卡、车牌支付、移动便携，场景全覆盖',
      backgroundType: 'image' as const,
      backgroundImage: '/images/carousel/HeaderCarousel3.jpg',
      textPosition: 'left' as const,
      buttonText: '立即办理',
      buttonLink: 'https://console.cloudcvm.com/regist.htm',
    },
  ]

  return (
    <VideoCarousel
      autoPlay={false}
      showProgress={false}
      showPlayButton={false}
      showNavigation={false}
      height={{ base: 'h-[400px]', md: 'h-[450px]', lg: 'h-[550px]' }}
      theme="light"
      textModeButton={true}
      showOverlay={false}
      customSlides={ecsVideoSlide}
      className=""
    />
  )
}

/**
 * 左右分栏展示组件 - 硬件配置
 * 展示智能POS机的硬件配置和技术特性
 */
function ECSLeftrightSection() {
  /**
   * 移动端功能特性展示组件
   * 在移动设备上垂直排列展示硬件配置信息
   */
  function FeaturesMobile() {
    return (
      <div className="lg:hidden">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">
              硬件配置
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              智能POS收款
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              15.6英寸主屏+11.6英寸客显，8核高性能CPU，安卓13系统，大容量存储，移动便携
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
              {leftRightFeatures.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <IconComponent
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-blue-600 dark:text-blue-400"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
          <div className="mt-16 sm:mt-20">
            <div className="relative overflow-hidden border border-gray-200/50 bg-white/80 p-4 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
              {/* 移动端模拟界面头部 */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-red-400"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  智能POS系统
                </div>
              </div>
              {/* 移动端模拟界面标题栏 */}
              <div className="mb-3 border border-gray-200/50 bg-gray-50/80 p-3 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
                <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
                  智能POS机控制台
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  专业智能POS机管理平台
                </p>
              </div>
              {/* 移动端模拟功能模块 */}
              <div className="mb-3 space-y-3">
                {leftRightFeatures.slice(0, 3).map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={feature.name}
                      className="border border-gray-200/30 bg-gray-50/60 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center border border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50">
                          <IconComponent className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                            {feature.name}
                          </h4>
                          <div className="mt-1">
                            <div className="h-1 w-full bg-gray-200/60 dark:bg-gray-700/60">
                              <div
                                className="h-1 bg-blue-500 transition-all duration-1000 dark:bg-blue-400"
                                style={{ width: `${60 + index * 15}%` }}
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
              <div className="flex items-center justify-between border border-gray-200/30 bg-gray-50/60 p-2 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                <div className="flex items-center space-x-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                  <span>系统运行正常</span>
                </div>
                <span>Android 13</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  /**
   * 桌面端功能特性展示组件
   * 在桌面设备上左右分栏展示硬件配置信息
   */
  function FeaturesDesktop() {
    return (
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">
                硬件配置
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                智能POS收款
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                15.6英寸主屏+11.6英寸客显，8核高性能CPU，安卓13系统，大容量存储，移动便携
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                {leftRightFeatures.map((feature) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        <IconComponent
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-blue-600 dark:text-blue-400"
                        />
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
            {/* 桌面端模拟界面 */}
            <div className="relative overflow-hidden border border-gray-200/50 bg-white/80 p-4 shadow-2xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10 max-h-[600px]">
              {/* 桌面端模拟界面头部 */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  智能POS系统
                </div>
              </div>
              {/* 桌面端模拟界面标题栏 */}
              <div className="mb-4 border border-gray-200/50 bg-gray-50/80 p-3 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
                <h3 className="mb-1 text-base font-bold text-gray-900 dark:text-white">
                  智能POS机控制台
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  专业智能POS机管理平台
                </p>
              </div>
              {/* 桌面端模拟功能模块 */}
              <div className="space-y-3">
                {leftRightFeatures.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={feature.name}
                      className="border border-gray-200/30 bg-gray-50/60 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 hover:shadow-md dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50">
                          <IconComponent className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                            {feature.name}
                          </h4>
                          <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-400">
                            {feature.description.length > 60
                              ? feature.description.substring(0, 60) + '...'
                              : feature.description}
                          </p>
                          <div className="mt-1.5">
                            <div className="h-1.5 w-full bg-gray-200/60 dark:bg-gray-700/60">
                              <div
                                className="h-1.5 bg-blue-500 transition-all duration-1000 dark:bg-blue-400"
                                style={{ width: `${70 + index * 10}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>
                        <div className="text-sm font-medium text-green-600 dark:text-green-400">
                          运行中
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              {/* 桌面端模拟状态栏 */}
              <div className="mt-6 flex items-center justify-between border border-gray-200/30 bg-gray-50/60 p-3 text-sm text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                <div className="flex items-center space-x-3">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span>系统运行正常</span>
                  <span className="text-xs text-gray-500">• 99.9% 可用性</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-xs">CPU: 15%</span>
                  <span className="text-xs">内存: 32%</span>
                  <span className="text-xs">Android 13</span>
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
      className="bg-white py-24 sm:py-32 dark:bg-gray-900"
    >
      <Container className="md:px-6 lg:px-8">
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}

/**
 * 右左分栏展示组件2 - 优惠政策
 * 展示智能POS机的优惠政策和服务保障
 */
function ECSRightleftSection() {
  /**
   * 移动端功能特性展示组件
   * 在移动设备上垂直排列展示优惠政策信息
   */
  function FeaturesMobile() {
    return (
      <div className="lg:hidden">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">
              优惠政策
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              智能POS机
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              0元免押金，费率0.38%，专业安装培训，7×24小时技术支持，全方位售后保障
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
              {rightLeftFeatures.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <IconComponent
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-blue-600 dark:text-blue-400"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
          <div className="mt-16 sm:mt-20">
            <div className="relative overflow-hidden border border-gray-200/50 bg-white/80 p-4 shadow-2xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
              {/* 移动端模拟界面头部 */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-red-400"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  智能POS系统2
                </div>
              </div>
              {/* 移动端模拟界面标题栏 */}
              <div className="mb-3 border border-gray-200/50 bg-gray-50/80 p-2 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
                <h3 className="mb-1 text-sm font-bold text-gray-900 dark:text-white">
                  智能POS机管理平台
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  专业智能POS机管理平台
                </p>
              </div>
              {/* 移动端模拟功能模块 */}
              <div className="space-y-2">
                {rightLeftFeatures.slice(0, 3).map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={feature.name}
                      className="border border-gray-200/30 bg-gray-50/60 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 hover:shadow-md dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50">
                          <IconComponent className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-xs font-semibold text-gray-900 dark:text-white">
                            {feature.name}
                          </h4>
                          <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-400">
                            {feature.description}
                          </p>
                          <div className="mt-1">
                            <div className="h-1.5 w-full bg-gray-200/60 dark:bg-gray-700/60">
                              <div
                                className="h-1.5 bg-blue-500 transition-all duration-1000 dark:bg-blue-400"
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
              <div className="mt-3 flex items-center justify-between border border-gray-200/30 bg-gray-50/60 p-2 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                  <span>系统运行正常</span>
                </div>
                <span>Android 13</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  /**
   * 桌面端功能特性展示组件
   * 在桌面设备上右左分栏展示优惠政策信息
   */
  function FeaturesDesktop() {
    return (
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                POS机功能特性
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                0元免押金，费率0.38%，专业安装培训，7×24小时技术支持，全方位售后保障
              </p>
              <dl className="mt-8 max-w-xl space-y-6 text-sm leading-6 text-gray-600 sm:mt-10 sm:space-y-8 sm:text-base/7 lg:max-w-none dark:text-gray-400">
                {rightLeftFeatures.map((feature) => {
                  const IconComponent = feature.icon
                  return (
                    <div key={feature.name} className="relative pl-8 sm:pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        <IconComponent
                          aria-hidden="true"
                          className="absolute top-0.5 left-0.5 size-4 text-indigo-600 sm:top-1 sm:left-1 sm:size-5 dark:text-indigo-400"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-center lg:order-first lg:justify-end">
            {/* 桌面端模拟界面 */}
            <div className="relative w-full max-w-lg overflow-hidden border border-gray-200/50 bg-white/80 p-4 shadow-2xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10 sm:max-w-xl lg:max-w-2xl">
              {/* 桌面端模拟界面头部 */}
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-red-400"></div>
                  <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                </div>
                <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  智能POS系统2
                </div>
              </div>
              {/* 桌面端模拟界面标题栏 */}
              <div className="mb-3 border border-gray-200/50 bg-gray-50/80 p-3 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
                <h3 className="mb-1 text-base font-bold text-gray-900 dark:text-white">
                  智能POS机管理平台
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  专业智能POS机管理平台
                </p>
              </div>
              {/* 桌面端模拟功能模块 */}
              <div className="space-y-2">
                {rightLeftFeatures.map((feature, index) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={feature.name}
                      className="border border-gray-200/30 bg-gray-50/60 p-2 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 hover:shadow-md dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center border border-blue-200/50 bg-blue-100/80 dark:border-blue-800/50 dark:bg-blue-900/50">
                          <IconComponent className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                            {feature.name}
                          </h4>
                          <p className="mt-0.5 text-xs text-gray-600 dark:text-gray-400">
                            {feature.description}
                          </p>
                          <div className="mt-1">
                            <div className="h-1.5 w-full bg-gray-200/60 dark:bg-gray-700/60">
                              <div
                                className="h-1.5 bg-blue-500 transition-all duration-1000 dark:bg-blue-400"
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
              {/* 桌面端模拟状态栏 */}
              <div className="mt-3 flex items-center justify-between border border-gray-200/30 bg-gray-50/60 p-2 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                  <span>系统运行正常</span>
                </div>
                <span>Android 13</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section id="rightleft-features" aria-label="云计算功能特性展示">
      <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
        <Container className="md:px-6 lg:px-8">
          <FeaturesMobile />
          <FeaturesDesktop />
        </Container>
      </div>
    </section>
  )
}

/**
 * 智能POS机页面主组件
 * 整合所有功能模块，构建完整的产品展示页面
 */
export default function ECSPage() {
  return (
    <>
      <Header />
      <main>
        <ECSVideoHero />
        {/* 智能POS机产品展示区域 */}
        <div className="min-h-screen bg-gray-50">
          {/* 页面标题区域 */}
          <div className="border-b border-gray-200 bg-white">
            <div className="mx-auto max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-bold text-gray-900">智能POS机专区</h1>
              <p className="mt-2 text-sm text-gray-600">
                <span className="font-medium text-orange-500">0元免押金</span>
                ，激活返现
                <span className="font-medium text-orange-500">299元</span>
                <span className="ml-2 cursor-pointer text-blue-600 underline">
                  活动规则&gt;
                </span>
              </p>
            </div>
          </div>
          {/* 产品网格展示区域 */}
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
                          热销产品
                        </span>
                      )}
                      {product.isRecommended && (
                        <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                          推荐产品
                        </span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-gray-600">
                      双屏收银一体机，全渠道收款，会员营销SaaS系统
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
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">内存/存储</span>
                      <span className="text-sm text-gray-900">
                        {product.specs.memory}/{product.specs.storage}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">屏幕</span>
                      <span className="text-sm text-gray-900">
                        {product.specs.screen}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">适用地区</span>
                      <span className="text-sm text-gray-900">
                        {product.regions.join('/')}
                      </span>
                    </div>
                  </div>
                  {/* 价格和折扣信息 */}
                  <div className="border-t border-gray-100 p-4">
                    <div className="mb-2 flex items-center gap-2">
                      <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-600">
                        {product.discount}
                      </span>
                      <span className="text-xs text-gray-500">限时优惠</span>
                    </div>
                    <div className="mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-gray-600">押金:</span>
                        <span className="text-2xl font-bold text-red-600">
                          {product.currentPrice}
                        </span>
                        <span className="text-sm text-gray-600">元</span>
                        <span className="text-xs text-gray-500">
                          原价¥{product.originalPrice}
                        </span>
                      </div>
                      <div className="mt-1 flex items-center gap-2">
                        <span className="text-sm text-gray-600">服务期限:</span>
                        <span className="text-sm text-gray-500">
                          {product.duration}
                        </span>
                      </div>
                    </div>
                    {/* 操作按钮 */}
                    <div className="flex gap-2">
                      <a
                        href="https://console.cloudcvm.com/regist.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block flex-1 rounded border border-blue-600 px-3 py-2 text-center text-sm text-blue-600 transition-colors hover:bg-blue-50"
                      >
                        了解详情
                      </a>
                      <a
                        href="https://console.cloudcvm.com/regist.htm"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block flex-1 rounded bg-blue-600 px-3 py-2 text-center text-sm text-white transition-colors hover:bg-blue-700"
                      >
                        立即申请
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <ECSLeftrightSection />
        <ECSRightleftSection />
        {/* === 解决方案与产品展示 === */}
        <ProductTraits />
        <Superiority />
        <Solution />
        <Advantage />
        {/* === 客户与信任建立 === */}
        <Customer />
        {/* === 支持与帮助 === */}
        <Faqs />
        {/* === 页面底部 === */}
        <CatSections />
      </main>
      <Footer />
    </>
  )
}
