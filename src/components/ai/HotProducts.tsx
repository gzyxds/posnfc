'use client'

import React, { useState, useCallback, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  ChevronRight,
  Users,
  Bot,
  PenTool,
  Tv,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Star,
  TrendingUp,
  Clock,
  Shield,
  X,
} from 'lucide-react'
import Image from 'next/image'
import { Container } from '@/components/Container'

/**
 * 品牌类型定义
 */
type BrandType =
  | 'huipos2'
  | 'shoukuanwang'
  | 'ruyi'
  | 'yuyinwang'

/**
 * 品牌配置接口定义
 */
interface BrandConfig {
  title: string
  subtitle: string
  description: string
  icon: React.ComponentType<any>
  features: Array<{
    title: string
    description: string
    icon: React.ComponentType<any>
  }>
  image: string
  imageAlt: string
}

/**
 * 品牌配置数据 - 包含所有热门收款产品的详细信息
 */
const brandConfig: Record<BrandType, BrandConfig> = {
  huipos2: {
    title: '慧POS2',
    subtitle: '聚合收款智能终端',
    description:
      '慧POS2是一款功能强大的聚合收款智能终端，支持支付宝、微信、银行卡、云闪付、Apple pay、会员储值等多种支付方式。内置卡券营销系统，提供多种优惠券、代金券、折扣券、会员储值卡、会员计次卡等营销工具。海量应用生态，为商户提供上百种APP，满足各类经营需求。一体化设计，机身自带打印机，一键打印票据。',
    icon: Shield,
    features: [
      {
        title: '聚合收款',
        description: '支持支付宝、微信、银行卡、云闪付、Apple pay等',
        icon: TrendingUp,
      },
      {
        title: '卡券营销',
        description: '多种优惠券、代金券、会员储值卡等营销工具',
        icon: Star,
      },
      {
        title: '海量应用',
        description: '提供上百种APP，满足各类经营需求',
        icon: Bot,
      },
      {
        title: '自带打印',
        description: '一体化设计，机身自带打印机，一键打印票据',
        icon: PenTool,
      },
    ],
    image: '/images/product/慧POS2.png',
    imageAlt: '慧POS2产品展示',
  },
  shoukuanwang: {
    title: '收款王M820',
    subtitle: '多功能收款终端',
    description:
      '收款王M820是一款功能全面的多功能收款终端，支持扫码支付（微信、支付宝、花呗、云闪付）、刷卡、插卡、挥卡等多种收款方式。内置电签屏，支持刷卡后手写签名，操作便捷更省心。适用场景广泛，无论是百货商超等大型商业场景，还是零售、连锁店、便利店以及餐饮店等，都可以使用。',
    icon: Bot,
    features: [
      {
        title: '聚合收款',
        description: '支持扫码支付、刷卡、插卡、挥卡等多种方式',
        icon: Users,
      },
      {
        title: '内置电签屏',
        description: '支持刷卡后手写签名，操作便捷更省心',
        icon: PenTool,
      },
      {
        title: '适用场景广泛',
        description: '百货商超、零售、连锁店、便利店、餐饮店等',
        icon: Star,
      },
      {
        title: '操作便捷',
        description: '多种收款方式，操作简单，省心省力',
        icon: TrendingUp,
      },
    ],
    image: '/images/product/收款王M820.png',
    imageAlt: '收款王M820产品展示',
  },
  ruyi: {
    title: '如意M821',
    subtitle: '支付宝如意Lite设备',
    description:
      '扫码通M821（支付宝如意Lite设备）是蚂蚁集团基于当前收单市场特点，面向市面中小商家推出的一款集软硬件于一体的反扫收款POS设备。如意Lite是独立POS收银设备，既可以扫商品一维码，也可以扫付款二维码，基于大数据提供了一套轻量级的商品管理SAAS服务产品。',
    icon: PenTool,
    features: [
      {
        title: '付款码收钱',
        description: '防漏单，防抹零，收款更安全',
        icon: Shield,
      },
      {
        title: '扫码功能',
        description: '既可扫商品条码，也可扫顾客付款码',
        icon: Bot,
      },
      {
        title: '商品管理',
        description: '基于大数据的轻量级ERP系统',
        icon: TrendingUp,
      },
      {
        title: '收银员模式',
        description: '支持收银员签到/签退，管理更规范',
        icon: Users,
      },
      {
        title: '内置音箱',
        description: '喇叭功率高，播报声音大',
        icon: Tv,
      },
      {
        title: '免费4G流量',
        description: '稳定快速低延迟，省心省力',
        icon: Star,
      },
      {
        title: '查价算价',
        description: '边扫边计算，收银效率大幅提升',
        icon: Clock,
      },
      {
        title: '超高性价比',
        description: '扫码通M821=收银机+扫码枪+音箱',
        icon: PenTool,
      },
    ],
    image: '/images/product/如意M821.png',
    imageAlt: '如意M821产品展示',
  },
  yuyinwang: {
    title: '语音王Y506',
    subtitle: '智能语音收款设备',
    description:
      '语音王Y506是一款专业的智能语音收款设备，具有4G全网通功能，自带流量卡。设备配备显示屏，收款金额看得见，音质洪亮有穿透力，播报更响亮。内置超大电池，续航更持久。适用于零售、专卖店、餐饮店等多种经营场景，为商户提供便捷的收款体验。',
    icon: Users,
    features: [
      {
        title: '4G全网通',
        description: '自带流量卡，网络连接稳定可靠',
        icon: Star,
      },
      {
        title: '自带显示屏',
        description: '收款金额看得见，操作更直观',
        icon: Tv,
      },
      {
        title: '音质洪亮',
        description: '音质洪亮有穿透力，播报更响亮',
        icon: Bot,
      },
      {
        title: '超大电池',
        description: '内置超大电池，续航更持久',
        icon: Shield,
      },
      {
        title: '适用场景广',
        description: '适用零售/专卖店/餐饮店等多种场景',
        icon: Users,
      },
    ],
    image: '/images/product/语音王.png',
    imageAlt: '语音王Y506产品展示',
  },
}

/**
 * 热门产品组件 - 展示慧POS2、收款王M820、如意M821、语音王Y506等智能收款设备
 * 支持多端响应式设计，包含产品标签导航和详细功能展示
 * 产品特色：聚合收款、智能终端、营销工具、应用生态等
 */
export default function HotBrands() {
  // 状态管理
  const [activeBrand, setActiveBrand] =
    useState<BrandType>('huipos2')
  const [imageError, setImageError] = useState<boolean>(false)
  const [showLeftArrow, setShowLeftArrow] = useState<boolean>(false)
  const [showRightArrow, setShowRightArrow] = useState<boolean>(false)
  const [showQRCodeModal, setShowQRCodeModal] = useState<boolean>(false)

  // 引用管理
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  // 当前品牌数据
  const currentBrand = brandConfig[activeBrand]
  const IconComponent = currentBrand.icon
  const brandKeys = Object.keys(brandConfig) as BrandType[]

  /**
   * 图片加载失败处理
   */
  const handleImageError = useCallback(() => {
    setImageError(true)
  }, [])

  const handleConsultNow = useCallback(() => {
    setShowQRCodeModal(true)
  }, [])

  const handleViewDetails = useCallback(() => {
    // 使用 Next.js 的 router 进行页面跳转
    window.location.href = '/demo'
  }, [])

  const handleCloseQRCodeModal = useCallback(() => {
    setShowQRCodeModal(false)
  }, [])

  /**
   * 品牌切换处理
   */
  const handleBrandChange = useCallback((brand: BrandType) => {
    setActiveBrand(brand)
  }, [])

  /**
   * 检查滚动位置并更新箭头显示状态
   */
  const checkScrollPosition = useCallback(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const { scrollLeft, scrollWidth, clientWidth } = container
    setShowLeftArrow(scrollLeft > 0)
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1)
  }, [])

  /**
   * 滚动控制函数
   */
  const scrollTo = useCallback((direction: 'left' | 'right') => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = 200
    const scrollLeft = direction === 'left' ? -scrollAmount : scrollAmount
    container.scrollBy({ left: scrollLeft, behavior: 'smooth' })
  }, [])

  /**
   * 事件追踪函数
   */
  const trackEvent = useCallback((action: string, label: string) => {
    if (typeof window !== 'undefined' && (window as any)._hmt) {
      ;(window as any)._hmt.push(['_trackEvent', 'HotBrands', action, label])
    }
  }, [])

  // 监听滚动事件
  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    checkScrollPosition()
    container.addEventListener('scroll', checkScrollPosition)
    window.addEventListener('resize', checkScrollPosition)

    return () => {
      container.removeEventListener('scroll', checkScrollPosition)
      window.removeEventListener('resize', checkScrollPosition)
    }
  }, [checkScrollPosition])

  // 品牌切换时重置图片状态
  useEffect(() => {
    setImageError(false)
  }, [activeBrand])

  /**
   * 渲染标签项组件
   */
  const renderTabItem = useCallback(
    (brand: BrandType, layoutId: string, className: string) => {
      const TabIcon = brandConfig[brand].icon
      const isActive = activeBrand === brand

      return (
        <motion.div
          key={brand}
          className={`${className} ${
            isActive ? 'text-[#0055ff]' : 'text-gray-600 hover:text-gray-900'
          }`}
          onClick={() => handleBrandChange(brand)}
          aria-label={`切换到${brandConfig[brand].title}品牌`}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
          data-monitor-click-id={`tab-${brand}`}
        >
          <TabIcon
            className={`transition-colors duration-300 ${
              isActive ? 'text-[#0055ff]' : 'text-gray-500'
            }`}
          />
          <span>{brandConfig[brand].title}</span>
          {isActive && (
            <motion.div
              className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-[#0055ff]"
              layoutId={layoutId}
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            />
          )}
        </motion.div>
      )
    },
    [activeBrand, handleBrandChange],
  )

  /**
   * 渲染滚动箭头
   */
  const renderScrollArrow = useCallback(
    (direction: 'left' | 'right', show: boolean) => {
      if (!show) return null

      const Icon = direction === 'left' ? ChevronLeft : ChevronRightIcon
      const position = direction === 'left' ? 'left-0' : 'right-0'

      return (
        <div
          onClick={() => scrollTo(direction)}
          className={`absolute ${position} top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-white/90 p-2 text-gray-400 shadow-md backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:text-[#0055ff] hover:shadow-lg active:scale-95 sm:p-2.5 md:p-3`}
          aria-label={`向${direction === 'left' ? '左' : '右'}滚动`}
        >
          <Icon className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7" />
        </div>
      )
    },
    [scrollTo],
  )

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/50 py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20"
      data-monitor-comp-id="c854860"
    >
      {/* 背景装饰元素 */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-3xl sm:-top-40 sm:-right-40 sm:h-80 sm:w-80"></div>
        <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-tr from-indigo-400/10 to-pink-400/10 blur-3xl sm:-bottom-40 sm:-left-40 sm:h-80 sm:w-80"></div>
      </div>

      <Container>
        {/* 页面标题区域 */}
        <div className="mb-6 text-center sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 sm:mb-3 sm:text-2xl md:mb-4 md:text-3xl lg:mb-6 lg:text-4xl xl:text-5xl">
            热门产品
          </h2>
          <div className="mx-auto mb-3 h-0.5 w-12 bg-[#0055ff] sm:mb-4 sm:h-0.5 sm:w-14 md:h-1 md:w-16"></div>
          <p className="mx-auto max-w-3xl px-2 text-sm leading-relaxed text-gray-600 sm:px-4 sm:text-base md:text-lg lg:text-xl">
            支持支付宝、微信、银行卡、云闪付、Apple pay、会员储值等多种支付方式。
          </p>
        </div>

        {/* 品牌标签导航区域 */}
        <div className="mb-4 sm:mb-6 md:mb-8">
          {/* 桌面端标签 - 宽屏显示，遵循Container宽度规范 */}
          <div className="relative hidden lg:flex">
            <div className="mx-auto flex w-full gap-4 xl:gap-6 2xl:gap-8">
              {brandKeys.map((brand) =>
                renderTabItem(
                  brand,
                  'activeTab',
                  'flex-1 px-4 py-3 xl:px-6 xl:py-4 2xl:px-8 2xl:py-5 cursor-pointer transition-all duration-300 text-sm xl:text-base 2xl:text-lg font-medium tracking-wide relative flex items-center justify-center space-x-2',
                ),
              )}
            </div>
          </div>

          {/* 移动端标签 */}
          <div className="relative block md:hidden">
            {renderScrollArrow('left', showLeftArrow)}
            {renderScrollArrow('right', showRightArrow)}

            <div
              ref={scrollContainerRef}
              className="scrollbar-hide flex gap-4 overflow-x-auto px-3 py-2 sm:gap-6 sm:px-4 sm:py-3"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {brandKeys.map((brand) => {
                const TabIcon = brandConfig[brand].icon
                const isActive = activeBrand === brand

                return (
                  <motion.div
                    key={brand}
                    className={`relative flex flex-shrink-0 cursor-pointer items-center space-x-1.5 px-2 py-2 text-xs font-medium tracking-wide whitespace-nowrap transition-all duration-300 sm:px-3 sm:py-3 sm:text-sm ${
                      isActive
                        ? 'text-[#0055ff]'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                    onClick={() => handleBrandChange(brand)}
                    aria-label={`切换到${brandConfig[brand].title}品牌`}
                    whileHover={{ y: -1 }}
                    whileTap={{ y: 0 }}
                    data-monitor-click-id={`mobile-tab-${brand}`}
                  >
                    <TabIcon
                      className={`h-3.5 w-3.5 transition-colors duration-300 sm:h-4 sm:w-4 ${
                        isActive ? 'text-[#0055ff]' : 'text-gray-500'
                      }`}
                    />
                    <span>{brandConfig[brand].title}</span>
                    {isActive && (
                      <motion.div
                        className="absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-[#0055ff]"
                        layoutId="activeMobileTab"
                        initial={{ opacity: 0, scaleX: 0 }}
                        animate={{ opacity: 1, scaleX: 1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      />
                    )}
                  </motion.div>
                )
              })}
            </div>
          </div>

          {/* 平板端标签 - 宽屏显示，等宽布局 */}
          <div className="hidden md:block lg:hidden">
            <div className="mx-auto flex w-full gap-3 md:gap-4">
              {brandKeys.map((brand) =>
                renderTabItem(
                  brand,
                  'activeTabletTab',
                  'flex-1 px-3 py-3 md:px-4 md:py-4 cursor-pointer transition-all duration-300 text-sm md:text-base font-medium tracking-wide relative flex items-center justify-center space-x-2',
                ),
              )}
            </div>
          </div>
        </div>

        {/* 产品详情卡片 */}
        <div className="w-full">
          <motion.div
            key={activeBrand}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm sm:rounded-xl lg:flex-row"
          >
            {/* 左侧内容区域 */}
            <div className="flex min-h-[300px] w-full flex-col justify-between p-3 sm:min-h-[350px] sm:p-4 md:p-6 lg:w-1/2 lg:p-8 xl:p-10">
              {/* 产品标题区域 */}
              <div className="mb-4 sm:mb-6">
                <motion.span
                  className="mb-3 inline-flex items-center rounded-full border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 px-2 py-1 text-xs font-semibold text-blue-700 shadow-sm sm:mb-4 sm:px-3 sm:py-1.5 sm:text-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <IconComponent className="mr-1 h-3 w-3 text-blue-600 sm:mr-2 sm:h-4 sm:w-4" />
                  {currentBrand.subtitle}
                </motion.span>

                <motion.h3
                  className="mb-3 text-xl leading-tight font-bold tracking-tight text-gray-900 sm:mb-4 sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {currentBrand.title}
                </motion.h3>

                <motion.p
                  className="text-sm leading-relaxed font-medium text-gray-600 sm:text-base lg:text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                >
                  {currentBrand.description}
                </motion.p>
              </div>

              {/* 功能特性列表 */}
              <div className="mb-4 sm:mb-5">
                <motion.h4
                  className="mb-2 flex items-center text-base font-bold text-gray-900 sm:mb-3 sm:text-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <div className="mr-2 h-4 w-1 rounded-full bg-gradient-to-b from-blue-600 to-indigo-600 sm:mr-3 sm:h-6"></div>
                  核心功能特性
                </motion.h4>

                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-2.5">
                  {currentBrand.features.map((feature, index) => {
                    const FeatureIcon = feature.icon
                    return (
                      <motion.div
                        key={index}
                        className="group flex items-start space-x-2 rounded-lg border border-transparent p-2 transition-all duration-300 hover:border-blue-100 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 sm:space-x-2.5 sm:p-2.5"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                      >
                        <div className="mt-0.5 flex-shrink-0">
                          <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-gradient-to-br from-blue-100 to-indigo-100 transition-colors duration-300 group-hover:from-blue-200 group-hover:to-indigo-200 sm:h-7 sm:w-7">
                            <FeatureIcon className="h-3 w-3 text-blue-600 sm:h-3.5 sm:w-3.5" />
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h5 className="mb-0.5 text-xs leading-tight font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-900 sm:text-xs">
                            {feature.title}
                          </h5>
                          <p className="line-clamp-2 text-xs leading-relaxed text-gray-600 transition-colors duration-300 group-hover:text-gray-700">
                            {feature.description}
                          </p>
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              {/* 操作按钮区域 */}
              <motion.div
                className="flex flex-col gap-2 sm:flex-row sm:gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.9 }}
              >
                <motion.button
                  className="group flex flex-1 items-center justify-center rounded-lg bg-blue-600 px-4 py-1.5 text-xs font-medium text-white shadow-sm transition-colors duration-200 hover:bg-blue-700 sm:flex-none sm:px-5 sm:py-2 sm:text-sm"
                  onClick={() => {
                    handleConsultNow()
                    trackEvent('PrimaryAction', currentBrand.title)
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center">
                    立即咨询
                    <ArrowRight className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 sm:ml-1.5 sm:h-3.5 sm:w-3.5" />
                  </span>
                </motion.button>

                <motion.button
                  className="group flex flex-1 items-center justify-center rounded-lg border border-blue-600 bg-white px-4 py-1.5 text-xs font-medium text-blue-600 shadow-sm transition-colors duration-200 hover:bg-blue-50 sm:flex-none sm:px-5 sm:py-2 sm:text-sm"
                  onClick={() => {
                    handleViewDetails()
                    trackEvent('SecondaryAction', currentBrand.title)
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center">
                    查看详情
                    <ChevronRight className="ml-1 h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5 sm:ml-1.5 sm:h-3.5 sm:w-3.5" />
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* 右侧图片区域 */}
            <div className="relative flex w-full items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50/50 p-4 sm:p-6 lg:w-1/2 lg:p-8">
              <div className="relative mx-auto w-full max-w-lg lg:max-w-xl xl:max-w-2xl">
                {imageError ? (
                  <div className="flex w-full items-center justify-center rounded-lg bg-gray-100" style={{ aspectRatio: '16/9' }}>
                    <div className="text-center text-gray-500">
                      <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-lg bg-gray-200">
                        <IconComponent className="h-8 w-8 text-gray-400" />
                      </div>
                      <p className="text-sm">{currentBrand.imageAlt}</p>
                    </div>
                  </div>
                ) : (
                  <motion.img
                    key={activeBrand}
                    src={currentBrand.image}
                    alt={currentBrand.imageAlt}
                    className="w-full object-contain rounded-lg"
                    style={{ aspectRatio: '16/9' }}
                    onError={handleImageError}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </Container>

      {/* 二维码弹窗模态框 */}
      {showQRCodeModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
          onClick={handleCloseQRCodeModal}
        >
          {/* 背景遮罩 */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

          {/* 模态框内容 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative mx-4 w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-gray-200/70"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 关闭按钮 */}
            <button
              onClick={handleCloseQRCodeModal}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100/80 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
              aria-label="关闭"
            >
              <X className="h-4 w-4 text-gray-700" />
            </button>

            {/* 内容区域 */}
            <div className="p-8 text-center">
              <h3 className="mb-2 text-lg font-semibold text-gray-900">
                产品详情咨询
              </h3>
              <p className="mb-6 text-sm text-gray-600">
                扫描二维码添加客服微信，获取详细产品信息
              </p>

              {/* 二维码 */}
              <div className="mb-4 flex justify-center">
                <div className="relative">
                  <Image
                    src="/images/contact/weixin.png"
                    alt="客服二维码"
                    width={192}
                    height={192}
                    className="h-48 w-48 border border-gray-200 object-contain shadow-lg"
                  />
                </div>
              </div>

              {/* 提示文字 */}
              <p className="text-xs text-gray-500">长按二维码保存到相册</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.section>
  )
}
