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
  | 'yinsheng'
  | 'lakala'
  | 'zhongfu'
  | 'leshua'

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
 * 品牌配置数据 - 包含所有热门合作品牌的详细信息
 */
const brandConfig: Record<BrandType, BrandConfig> = {
  yinsheng: {
    title: '银盛POS机',
    subtitle: '央行牌照一清机',
    description:
      '银盛支付作为央行颁发支付牌照的一清机构，电签版EPOS机型支持0.38%永不+3费率，4G网络秒到账。总部直签一级代理，分润万16，激活返现299元。支持数字人民币官方合作，银联官方认证，为商户提供安全稳定的收款解决方案。',
    icon: Shield,
    features: [
      {
        title: '0.38%永不+3',
        description: '行业最低费率，永不上调，4G网络秒到账',
        icon: TrendingUp,
      },
      {
        title: '总部直签',
        description: '一级代理资质，分润万16，区域保护政策',
        icon: Star,
      },
      {
        title: '激活返现',
        description: '新机激活返现299元，阶梯奖励无上限',
        icon: Users,
      },
      {
        title: '数字人民币',
        description: '官方合作机构，支持数字人民币收款功能',
        icon: Shield,
      },
    ],
    image: '/images/product/产品展示.png',
    imageAlt: '银盛POS机产品展示',
  },
  lakala: {
    title: '拉卡拉POS机',
    subtitle: '全渠道支付生态',
    description:
      '拉卡拉智能POS+收款码双品牌解决方案，全渠道支付覆盖，SaaS生态对接356家平台。5万亿餐饮市场联合解决方案，支付宝/微信官方服务商认证。提供餐饮连锁、零售便利店、美业门店等多行业定制化收银系统。',
    icon: Bot,
    features: [
      {
        title: 'SaaS生态',
        description: '对接356家平台，覆盖5万亿餐饮市场',
        icon: Bot,
      },
      {
        title: '全渠道支付',
        description: '智能POS+收款码，支持所有主流支付方式',
        icon: Users,
      },
      {
        title: '官方服务商',
        description: '支付宝/微信官方认证服务商资质',
        icon: Star,
      },
      {
        title: '行业定制',
        description: '餐饮、零售、美业等多行业解决方案',
        icon: TrendingUp,
      },
    ],
    image: '/images/product/产品展示.png',
    imageAlt: '拉卡拉POS机产品展示',
  },
  zhongfu: {
    title: '中付智能POS',
    subtitle: '安卓13双屏POS',
    description:
      '中付智能双屏POS机搭载安卓13系统，会员营销一体化解决方案。支持联名信用卡满减活动，消费立减50元。提供餐饮SaaS、零售管理、会员系统等全套商户运营工具，助力商户数字化转型升级。',
    icon: PenTool,
    features: [
      {
        title: '安卓13系统',
        description: '最新安卓系统，双屏显示，操作流畅',
        icon: Tv,
      },
      {
        title: '会员营销',
        description: '一体化会员管理，营销活动自动化',
        icon: Users,
      },
      {
        title: '联名信用卡',
        description: '合作信用卡满减活动，消费立减50元',
        icon: Star,
      },
      {
        title: '数字化转型',
        description: '全套商户运营工具，助力业务升级',
        icon: TrendingUp,
      },
    ],
    image: '/images/product/产品展示.png',
    imageAlt: '中付智能POS产品展示',
  },
  leshua: {
    title: '乐刷POS机',
    subtitle: '小POS+码牌组合',
    description:
      '乐刷小POS+聚合码牌双品牌礼包，激活返现349元，分润万12。支持免流量卡使用，一张码全渠道收款，语音播报到账提醒。适用于夜市地摊、移动商户等场景，轻便易携带，满足各种收款需求。',
    icon: Users,
    features: [
      {
        title: '双品牌礼包',
        description: '小POS+码牌组合，激活返现349元',
        icon: Star,
      },
      {
        title: '免流量卡',
        description: '无需额外流量费用，降低使用成本',
        icon: Shield,
      },
      {
        title: '语音播报',
        description: '到账语音提醒，收款状态实时掌握',
        icon: Clock,
      },
      {
        title: '移动便携',
        description: '适用夜市地摊，轻便易携带使用',
        icon: Users,
      },
    ],
    image: '/images/product/产品展示.png',
    imageAlt: '乐刷POS机产品展示',
  },
}

/**
 * 热门合作品牌组件 - 展示不同品牌的POS机产品解决方案
 * 支持多端响应式设计，包含标签导航和产品详情展示
 */
export default function HotBrands() {
  // 状态管理
  const [activeBrand, setActiveBrand] =
    useState<BrandType>('yinsheng')
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
            热门合作品牌
          </h2>
          <div className="mx-auto mb-3 h-0.5 w-12 bg-[#0055ff] sm:mb-4 sm:h-0.5 sm:w-14 md:h-1 md:w-16"></div>
          <p className="mx-auto max-w-3xl px-2 text-sm leading-relaxed text-gray-600 sm:px-4 sm:text-base md:text-lg lg:text-xl">
            央行牌照一清机，银盛/拉卡拉/中付/乐刷一级代理，分润万16
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
                  <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gray-100">
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
                    className="h-auto w-full object-contain"
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
