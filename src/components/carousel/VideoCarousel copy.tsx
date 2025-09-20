/**
 * 自适应POS机轮播组件
 * 智能轮播组件，根据设备类型自动切换内容：
 * - PC端：高质量图片背景显示
 * - 移动端：高质量图片背景显示
 * - 智能设备检测与内容切换
 * - 进度条显示播放进度
 * - 导航箭头支持手动切换
 * - 分页指示器显示当前位置
 * - 触摸手势支持移动端操作
 * - 键盘导航支持无障碍访问
 * - 播放控制按钮
 * - 响应式文案排版优化
 * - 自适应UI布局设计
 */
'use client'

import { HeaderCarousel } from '@/components/HeaderCarousel'
import type { SlideData } from '@/components/HeaderCarousel'
import React, { useState, useEffect } from 'react'
import clsx from 'clsx'

/**
 * VideoCarousel 组件属性接口
 * 提供完整的自适应POS机轮播配置选项
 */
export interface VideoCarouselProps {
  /** 是否自动播放，默认true */
  autoPlay?: boolean
  /** 自动播放间隔时间（毫秒），默认6000ms */
  interval?: number
  /** 是否显示进度条，默认true */
  showProgress?: boolean
  /** 是否显示播放控制按钮，默认true */
  showPlayButton?: boolean
  /** 是否显示导航按钮，默认true */
  showNavigation?: boolean
  /** 自定义高度配置，支持字符串或响应式对象 */
  height?:
    | string
    | {
        base?: string
        sm?: string
        md?: string
        lg?: string
        xl?: string
        '2xl'?: string
      }
  /** 主题：'dark' 为深色背景配白字，'light' 为浅色背景配深色字，默认 'dark' */
  theme?: 'light' | 'dark'
  /** 是否使用文本模式按钮（纯文字+箭头），默认true */
  textModeButton?: boolean
  /** 是否显示遮罩层，默认true */
  showOverlay?: boolean
  /** 覆盖层类名，传入时将覆盖默认的主题遮罩样式 */
  overlayClassName?: string
  /** 自定义类名 */
  className?: string
  /** 自定义轮播数据，不提供则使用默认数据 */
  customSlides?: SlideData[]
  /** 是否强制使用视频模式（忽略设备检测），默认false */
  forceVideoMode?: boolean
  /** 是否强制使用图片模式（忽略设备检测），默认false */
  forceImageMode?: boolean
  /** 移动端断点阈值（像素），默认768px */
  mobileBreakpoint?: number
}

/**
 * 自适应POS机轮播组件
 *
 * 基于 HeaderCarousel 的智能轮播组件，根据设备类型自动切换内容类型：
 *
 * 🖥️ **PC端体验**：
 * - 🖼️ 高质量图片背景显示
 * - 🎮 播放/暂停控制按钮
 * - 🖱️ 鼠标悬停交互效果
 * - ⌨️ 键盘导航支持（← → 空格）
 *
 * 📱 **移动端体验**：
 * - 🖼️ 高质量静态图片背景
 * - 👆 触摸手势滑动操作
 * - ⚡ 更快的加载速度
 * - 🔋 更低的电池消耗
 *
 * 🔄 **通用功能**：
 * - ⏱️ 可配置的自动切换间隔时间
 * - 📊 实时进度条显示播放进度
 * - 🔄 左右导航箭头支持手动切换
 * - 📍 底部分页指示器显示当前位置
 * - 🎨 深色/浅色主题切换
 * - 📱 响应式文案排版优化
 * - 🔧 灵活的遮罩层配置
 *
 * 📐 **响应式设计**：
 * - 智能设备检测（默认768px断点）
 * - 自适应高度配置
 * - 移动优先的文案排版
 * - 触摸友好的交互元素
 *
 * 🎯 **无障碍支持**：
 * - ARIA 标签完整支持
 * - 键盘导航完全可用
 * - 屏幕阅读器友好
 * - 焦点管理优化
 *
 * @param props - VideoCarousel 组件属性
 * @returns React 自适应轮播组件
 *
 * @example
 * ```tsx
 * // 基础用法（自动检测设备类型）
 * <VideoCarousel />
 *
 * // 自定义配置
 * <VideoCarousel
 *   autoPlay={true}
 *   interval={8000}
 *   theme="light"
 *   height={{ base: 'h-[50vh]', md: 'h-[60vh]', lg: 'h-[70vh]' }}
 *   showPlayButton={true}
 *   mobileBreakpoint={1024}
 * />
 *
 * // 强制使用图片模式
 * <VideoCarousel
 *   forceImageMode={true}
 *   theme="dark"
 * />
 * ```
 */
export function VideoCarousel({
  autoPlay = true,
  interval = 6000,
  showProgress = false,
  showPlayButton = true,
  showNavigation = false,
  height = { base: 'h-[400px]', md: 'h-[450px]', lg: 'h-[500px]' },
  theme = 'light',
  textModeButton = true,
  showOverlay = true,
  overlayClassName,
  className,
  customSlides,
  forceVideoMode = false,
  forceImageMode = false,
  mobileBreakpoint = 768,
}: VideoCarouselProps): React.ReactNode {
  // 设备检测状态
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [isClient, setIsClient] = useState<boolean>(false)
  // 当前展开的卡片索引，默认为0（第一个卡片）
  const [expandedCardIndex, setExpandedCardIndex] = useState<number>(0)

  /**
   * 设备类型检测和屏幕尺寸监听
   * 根据屏幕宽度和强制模式判断设备类型
   */
  useEffect(() => {
    setIsClient(true)

    const checkDevice = () => {
      if (forceVideoMode) {
        setIsMobile(false)
        return
      }
      if (forceImageMode) {
        setIsMobile(true)
        return
      }
      // 检测屏幕宽度
      const screenWidth = window.innerWidth
      setIsMobile(screenWidth < mobileBreakpoint)
    }

    // 初始检测
    checkDevice()

    // 监听窗口大小变化
    const handleResize = () => {
      checkDevice()
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [forceVideoMode, forceImageMode, mobileBreakpoint])

  /**
   * 根据设备类型处理轮播数据
   * PC端和移动端均使用图片背景
   */
  const processSlideData = (originalSlides: SlideData[]): SlideData[] => {
    return originalSlides.map((slide) => {
      // 统一使用图片背景
      return {
        ...slide,
        backgroundType: 'image' as const,
        backgroundImage:
          slide.backgroundImage ||
          `/images/carousel/HeaderCarousel${slide.id}.jpg`,
        backgroundVideo: undefined,
      }
    })
  }

  // 默认轮播数据配置
  const defaultSlides: SlideData[] = [
    {
      id: 1,
      title: '多种支付终端',
      subtitle: '全方位支付终端解决方案',
      description:
        '支持智能POS、扫码POS、传统POS、银盛立码收、银盛E付码牌、数字人民币支付、刷脸支付、碰一碰等多种支付终端，为商户提供专业的银行卡POS收单服务',
      backgroundType: 'image',
      backgroundImage: '/images/carousel/Header.png',
      textPosition: 'left',
      buttonText: '立即体验',
      buttonLink: '#',
    },
    {
      id: 2,
      title: '移动收银',
      subtitle: '专业收款解决方案',
      description:
        '支持多种移动收银设备，提供信用卡、储蓄卡等多种支付方式，安全稳定，费率优惠，为商户提供全方位的收款服务',
      backgroundType: 'image',
      backgroundImage: '/images/product/index2.jpg',
      textPosition: 'left',
      buttonText: '立即办理',
      buttonLink: '#',
    },
    {
      id: 3,
      title: '移动收款',
      subtitle: '智能支付终端解决方案',
      description:
        '支持多种主流支付终端品牌，提供聚合支付、商户收款码等全方位支付服务，满足不同行业收款需求',
      backgroundType: 'image',
      backgroundImage: '/images/product/index3.jpg',
      textPosition: 'left',
      buttonText: '免费申请',
      buttonLink: '#',
    },
    {
      id: 4,
      title: '数字经营',
      subtitle: '智能支付终端解决方案',
      description:
        '提供POS机支付网、在线POS刷卡、手机POS下载等全方位支付服务，助力商户实现数字化转型，提升经营效率和客户体验',
      backgroundType: 'image',
      backgroundImage: '/images/product/index4.jpg',
      textPosition: 'left',
      buttonText: '了解更多',
      buttonLink: '#',
    },
  ]

  // 使用自定义轮播数据或默认数据
  const originalSlides = customSlides || defaultSlides
  // 根据设备类型处理轮播数据
  const slides = processSlideData(originalSlides)

  // 服务端渲染时直接渲染轮播组件
  if (!isClient) {
    return (
      <div className="w-full">
        <HeaderCarousel
          autoPlay={false}
          interval={interval}
          showProgress={showProgress}
          showPlayButton={false}
          showNavigation={showNavigation}
          height={height}
          slides={processSlideData(originalSlides)}
          theme={theme}
          textModeButton={textModeButton}
          showOverlay={showOverlay}
          overlayClassName={overlayClassName}
          className={clsx('relative overflow-hidden', className)}
        />
        
        {/* 卡片式设计区域 */}
        <div className="relative w-full">
          <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <nav aria-label="推广资源" className="relative">
              <div className="grid grid-cols-2 gap-0 divide-x divide-y divide-gray-200 md:grid-cols-4 md:divide-x md:divide-y-0">
                {/* 推广项目列表 */}
              {[
                {
                  title: 'POS机办理',
                  description: '银联正规POS机，安全稳定费率优惠',
                  href: '#',
                  ariaLabel: 'POS机办理，银联正规POS机，安全稳定费率优惠',
                },
                {
                  title: '移动收款',
                  description: '支持拉卡拉、银盛等多种品牌',
                  href: '#',
                  ariaLabel: '移动收款，支持拉卡拉、银盛等多种品牌',
                },
                {
                  title: '聚合码牌',
                  description: '商户收款码，多种支付方式',
                  href: '#',
                  ariaLabel: '聚合码牌，商户收款码，多种支付方式',
                },
                {
                  title: '代理加盟',
                  description: '代理加盟，专业收款解决方案',
                  href: '#',
                  ariaLabel: '代理加盟，专业收款解决方案',
                },
              ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center justify-between gap-4 rounded-none border-0 bg-white p-4 transition-colors duration-200 hover:bg-gray-50 md:rounded-none md:border-none md:bg-transparent md:px-6 md:py-6"
                    aria-label={item.ariaLabel}
                    onClick={(e) => {
                      e.preventDefault()
                      setExpandedCardIndex(index === expandedCardIndex ? -1 : index)
                    }}
                  >
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-1 text-lg font-medium tracking-tight text-gray-900 group-hover:text-gray-900 md:mb-2 md:text-base md:font-semibold">
                        {item.title}
                      </h3>
                      <p className={`text-sm leading-relaxed text-gray-500 ${index === expandedCardIndex ? 'block' : 'hidden'} md:block`}>
                        {item.description}
                      </p>
                    </div>
                    <svg
                      className={`h-6 w-6 shrink-0 text-gray-300 transition-transform duration-200 group-hover:text-gray-400 md:h-5 md:w-5 ${index === expandedCardIndex ? 'rotate-90' : ''}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                ))}
              </div>
              {/* 移动端分割标记 */}
              <span
                aria-hidden
                className="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-base text-gray-300 select-none md:hidden"
              >
                +
              </span>
            </nav>
          </div>
          {/* 白色底部容器 */}
          <div className="absolute top-0 right-0 left-0 -z-10 h-full bg-white shadow-lg" />
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* 服务端渲染时的占位符 */}
      <div className="relative -mt-[1px]">
        <HeaderCarousel
          autoPlay={autoPlay}
          interval={interval}
          showProgress={showProgress}
          showPlayButton={isMobile ? false : showPlayButton}
          showNavigation={showNavigation}
          height={height}
          slides={slides}
          theme={theme}
          textModeButton={textModeButton}
          showOverlay={showOverlay}
          overlayClassName={overlayClassName}
          className={clsx(
            'relative overflow-hidden',
            isMobile && ['touch-pan-y', 'select-none'],
            !isMobile && ['cursor-pointer'],
            className,
          )}
        />
      </div>

      {/* 卡片式设计区域 */}
      <div className="relative w-full">
        <div className="relative z-10 mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <nav aria-label="推广资源" className="relative">
            <div className="grid grid-cols-2 gap-0 divide-x divide-y divide-gray-200 md:grid-cols-4 md:divide-x md:divide-y-0">
              {/* 推广项目列表 */}
              {[
                {
                  title: 'POS机办理',
                  description: '银联正规POS机，安全稳定费率优惠',
                  href: '#',
                  ariaLabel: 'POS机办理，银联正规POS机，安全稳定费率优惠',
                },
                {
                  title: '移动收款',
                  description: '支持拉卡拉、银盛等多种品牌',
                  href: '#',
                  ariaLabel: '移动收款，支持拉卡拉、银盛等多种品牌',
                },
                {
                  title: '聚合码牌',
                  description: '商户收款码，多种支付方式',
                  href: '#',
                  ariaLabel: '聚合码牌，商户收款码，多种支付方式',
                },
                {
                  title: '代理加盟',
                  description: '代理加盟，专业收款解决方案',
                  href: '#',
                  ariaLabel: '代理加盟，专业收款解决方案',
                },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center justify-between gap-4 rounded-none border-0 bg-white p-4 transition-colors duration-200 hover:bg-gray-50 md:rounded-none md:border-none md:bg-transparent md:px-6 md:py-6"
                  aria-label={item.ariaLabel}
                  onClick={(e) => {
                    e.preventDefault()
                    setExpandedCardIndex(index === expandedCardIndex ? -1 : index)
                  }}
                >
                  <div className="min-w-0 flex-1">
                    <h3 className="mb-1 text-lg font-medium tracking-tight text-gray-900 group-hover:text-gray-900 md:mb-2 md:text-base md:font-semibold">
                      {item.title}
                    </h3>
                    <p className={`text-sm leading-relaxed text-gray-500 ${index === expandedCardIndex ? 'block' : 'hidden'} md:block`}>
                      {item.description}
                    </p>
                  </div>
                  <svg
                    className={`h-6 w-6 shrink-0 text-gray-300 transition-transform duration-200 group-hover:text-gray-400 md:h-5 md:w-5 ${index === expandedCardIndex ? 'rotate-90' : ''}`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
            {/* 移动端分割标记 */}
            <span
              aria-hidden
              className="pointer-events-none absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-base text-gray-300 select-none md:hidden"
            >
              +
            </span>
          </nav>
        </div>
        {/* 白色底部容器 */}
        <div className="absolute top-0 right-0 left-0 -z-10 h-full bg-white shadow-lg" />
      </div>
    </div>
  )
}

/**
 * 设备检测工具函数
 * 用于在组件外部检测设备类型
 */
export const isMobileDevice = (breakpoint: number = 768): boolean => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < breakpoint
}

/**
 * 图片预加载工具函数
 * 用于提前加载轮播图片，提升用户体验
 */
export const preloadCarouselImages = (imageUrls: string[]): void => {
  imageUrls.forEach((url) => {
    const img = new Image()
    img.src = url
  })
}

export default VideoCarousel
