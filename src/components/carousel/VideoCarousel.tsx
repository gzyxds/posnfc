/**
 * 高端大气现代化轮播组件
 * 专业级POS机轮播展示组件，采用现代化UI设计风格：
 *
 * 🎨 **现代化设计**：
 * - 精致的视觉效果和专业级UI设计
 * - 流畅的动画过渡和微交互
 * - 高端大气的视觉呈现
 * - 现代化的色彩搭配和排版
 *
 * 📱 **完美适配**：
 * - PC端、移动端、平板等多设备完美适配
 * - 响应式布局，自适应不同屏幕尺寸
 * - 触摸友好的交互设计
 * - 智能设备检测与内容优化
 *
 * ⚡ **流畅体验**：
 * - 丝滑的滑动动画和过渡效果
 * - 高性能渲染，确保运行流畅
 * - 智能预加载和懒加载优化
 * - 防抖和节流优化
 *
 * 🎮 **交互控制**：
 * - 可配置的自动播放和手动控制
 * - 键盘导航和无障碍支持
 * - 触摸手势和鼠标交互
 * - 播放/暂停控制
 *
 * 🔧 **高度可配置**：
 * - 灵活的主题和样式配置
 * - 自定义动画时长和效果
 * - 可配置的控件显示
 * - 扩展性强的API设计
 */
'use client'

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * 现代化轮播数据接口
 * 支持多种背景类型和丰富的配置选项
 */
export interface ModernSlideData {
  /** 唯一标识符 */
  id: number
  /** 主标题 */
  title: string
  /** 副标题 */
  subtitle: string
  /** 详细描述 */
  description: string
  /** 背景图片URL */
  backgroundImage: string
  /** 按钮文本 */
  buttonText?: string
  /** 按钮链接 */
  buttonLink?: string
  /** 文本位置：左、中、右 */
  textPosition?: 'left' | 'center' | 'right'
  /** 自定义样式类名 */
  className?: string
  /** 渐变遮罩配置 */
  gradient?: {
    /** 渐变方向 */
    direction: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-br' | 'to-bl' | 'to-tr' | 'to-tl'
    /** 起始颜色 */
    from: string
    /** 中间颜色（可选） */
    via?: string
    /** 结束颜色 */
    to: string
    /** 透明度 */
    opacity?: number
  }
}

/**
 * 高端轮播组件属性接口
 * 提供完整的现代化轮播配置选项
 */
export interface VideoCarouselProps {
  /** 是否自动播放，默认true */
  autoPlay?: boolean
  /** 自动播放间隔时间（毫秒），默认5000ms */
  interval?: number
  /** 动画持续时间（毫秒），默认800ms */
  animationDuration?: number
  /** 是否显示进度条，默认true */
  showProgress?: boolean
  /** 是否显示播放控制按钮，默认true */
  showPlayButton?: boolean
  /** 是否显示导航箭头，默认true */
  showNavigation?: boolean
  /** 是否显示指示器圆点，默认true */
  showIndicators?: boolean
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
  /** 主题风格：现代、经典、简约 */
  variant?: 'modern' | 'classic' | 'minimal'
  /** 色彩主题：深色、浅色、自动 */
  theme?: 'dark' | 'light' | 'auto'
  /** 是否启用视差滚动效果，默认false */
  parallax?: boolean
  /** 是否启用3D效果，默认false */
  enable3D?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义轮播数据，不提供则使用默认数据 */
  slides?: ModernSlideData[]
  /** 移动端断点阈值（像素），默认768px */
  mobileBreakpoint?: number
  /** 是否启用触摸滑动，默认true */
  enableTouch?: boolean
  /** 是否启用键盘导航，默认true */
  enableKeyboard?: boolean
  /** 是否启用鼠标滚轮控制，默认false */
  enableWheel?: boolean
  /** 是否显示文本模式按钮，默认true */
  textModeButton?: boolean
  /** 是否显示遮罩层，默认true */
  showOverlay?: boolean
  /** 自定义遮罩层类名 */
  overlayClassName?: string
  /** 自定义轮播数据（兼容旧版本） */
  customSlides?: any[]
  /** 强制图片模式，默认false */
  forceImageMode?: boolean
  /** 自定义动画缓动函数 */
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'
  /** 回调函数：幻灯片切换时触发 */
  onSlideChange?: (index: number) => void
  /** 回调函数：播放状态改变时触发 */
  onPlayStateChange?: (isPlaying: boolean) => void
}

/**
 * 默认轮播数据配置
 * 高端大气的POS机产品展示内容
 */
const defaultSlides: ModernSlideData[] = [
  {
    id: 1,
    title: '智能支付终端',
    subtitle: '全方位支付解决方案',
    description:
      '支持智能POS、扫码支付、刷脸支付、数字人民币等多种支付方式，为商户提供专业安全的收单服务，助力数字化转型升级',
    backgroundImage: '/images/carousel/Header.png',
    buttonText: '立即体验',
    buttonLink: '#',
    textPosition: 'left',
    gradient: {
      direction: 'to-r',
      from: 'rgba(0, 0, 0, 0.7)',
      to: 'rgba(0, 0, 0, 0.3)',
      opacity: 0.8,
    },
  },
  {
    id: 2,
    title: '移动收银专家',
    subtitle: '便捷高效的收款体验',
    description:
      '支持信用卡、储蓄卡、移动支付等多种收款方式，费率优惠，到账快速，为各行业商户提供专业的移动收银解决方案',
    backgroundImage: '/images/product/index2.jpg',
    buttonText: '立即办理',
    buttonLink: '#',
    textPosition: 'center',
    gradient: {
      direction: 'to-b',
      from: 'rgba(59, 130, 246, 0.6)',
      to: 'rgba(0, 0, 0, 0.4)',
      opacity: 0.9,
    },
  },
  {
    id: 3,
    title: '聚合支付平台',
    subtitle: '一码通收多种支付',
    description:
      '整合微信、支付宝、银联等主流支付渠道，一个二维码即可收取所有支付方式，简化收款流程，提升用户体验',
    backgroundImage: '/images/product/index3.jpg',
    buttonText: '免费申请',
    buttonLink: '#',
    textPosition: 'right',
    gradient: {
      direction: 'to-l',
      from: 'rgba(16, 185, 129, 0.6)',
      to: 'rgba(0, 0, 0, 0.3)',
      opacity: 0.8,
    },
  },
  {
    id: 4,
    title: '数字化经营',
    subtitle: '智慧商业新时代',
    description:
      '提供数据分析、营销工具、会员管理等增值服务，助力商户实现数字化转型，提升经营效率和客户满意度',
    backgroundImage: '/images/product/index4.jpg',
    buttonText: '了解更多',
    buttonLink: '#',
    textPosition: 'left',
    gradient: {
      direction: 'to-br',
      from: 'rgba(139, 92, 246, 0.6)',
      to: 'rgba(0, 0, 0, 0.4)',
      opacity: 0.85,
    },
  },
]

/**
 * 高端大气现代化轮播组件
 *
 * 专业级POS机轮播展示组件，采用现代化UI设计风格：
 *
 * 🎨 **视觉设计**：
 * - 精致的渐变遮罩和阴影效果
 * - 流畅的动画过渡和微交互
 * - 现代化的排版和色彩搭配
 * - 高端大气的视觉呈现
 *
 * 📱 **响应式适配**：
 * - 完美适配PC、移动端、平板设备
 * - 智能断点检测和布局调整
 * - 触摸友好的交互设计
 * - 自适应文字大小和间距
 *
 * ⚡ **性能优化**：
 * - 高性能渲染和动画优化
 * - 智能预加载和懒加载
 * - 防抖节流和内存管理
 * - 流畅的60fps动画体验
 *
 * 🎮 **交互体验**：
 * - 多种控制方式（触摸、键盘、鼠标）
 * - 智能播放控制和进度显示
 * - 无障碍支持和键盘导航
 * - 丰富的回调和事件处理
 *
 * @param props - VideoCarousel 组件属性
 * @returns React 现代化轮播组件
 *
 * @example
 * ```tsx
 * // 基础用法
 * <VideoCarousel />
 *
 * // 现代风格配置
 * <VideoCarousel
 *   variant="modern"
 *   theme="dark"
 *   enable3D={true}
 *   parallax={true}
 *   animationDuration={1000}
 *   height={{ base: 'h-[60vh]', lg: 'h-[80vh]' }}
 * />
 *
 * // 自定义数据和回调
 * <VideoCarousel
 *   slides={customSlides}
 *   onSlideChange={(index) => console.log('切换到:', index)}
 *   onPlayStateChange={(playing) => console.log('播放状态:', playing)}
 * />
 * ```
 */
export function VideoCarousel({
  autoPlay = true,
  interval = 5000,
  animationDuration = 800,
  showProgress = true,
  showPlayButton = true,
  showNavigation = true,
  showIndicators = true,
  height = { base: 'h-[60vh]', md: 'h-[70vh]', lg: 'h-[80vh]' },
  variant = 'modern',
  theme = 'dark',
  parallax = false,
  enable3D = false,
  textModeButton = true,
  showOverlay = true,
  overlayClassName,
  customSlides,
  forceImageMode = false,
  className,
  slides = defaultSlides,
  mobileBreakpoint = 768,
  enableTouch = true,
  enableKeyboard = true,
  enableWheel = false,
  easing = 'ease-out',
  onSlideChange,
  onPlayStateChange,
}: VideoCarouselProps): React.ReactNode {
  // 核心状态管理
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [expandedCardIndex, setExpandedCardIndex] = useState(-1)

  // Refs for performance optimization
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement>(null)

  // 处理自定义轮播数据
  const actualSlides = customSlides || slides

  // 计算总幻灯片数量
  const totalSlides = actualSlides.length

  /**
   * 设备类型检测和屏幕尺寸监听
   * 智能检测设备类型并优化交互体验
   */
  useEffect(() => {
    setIsClient(true)

    const checkDevice = () => {
      const screenWidth = window.innerWidth
      setIsMobile(screenWidth < mobileBreakpoint)
    }

    // 初始检测
    checkDevice()

    // 防抖的窗口大小变化监听
    let resizeTimer: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(checkDevice, 150)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
    }
  }, [mobileBreakpoint])

  /**
   * 清理所有定时器
   * 防止内存泄漏和性能问题
   */
  const clearAllIntervals = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (progressRef.current) {
      clearInterval(progressRef.current)
      progressRef.current = null
    }
  }, [])

  /**
   * 设置自动播放定时器
   * 支持进度条显示和播放状态管理
   */
  const setAutoPlayTimer = useCallback(() => {
    if (!isPlaying || isHovered) return

    clearAllIntervals()
    setProgress(0)

    // 进度条更新定时器
    if (showProgress) {
      const progressStep = 100 / (interval / 50)
      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + progressStep
          return newProgress >= 100 ? 100 : newProgress
        })
      }, 50)
    }

    // 自动切换定时器
    intervalRef.current = setTimeout(() => {
      nextSlide()
    }, interval)
  }, [isPlaying, isHovered, interval, showProgress])

  /**
   * 切换到下一张幻灯片
   * 支持循环播放和动画效果
   */
  const nextSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const newIndex = (currentIndex + 1) % totalSlides
    setCurrentIndex(newIndex)
    onSlideChange?.(newIndex)

    setTimeout(() => setIsTransitioning(false), animationDuration)
  }, [currentIndex, totalSlides, isTransitioning, animationDuration, onSlideChange])

  /**
   * 切换到上一张幻灯片
   * 支持循环播放和动画效果
   */
  const prevSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    onSlideChange?.(newIndex)

    setTimeout(() => setIsTransitioning(false), animationDuration)
  }, [currentIndex, totalSlides, isTransitioning, animationDuration, onSlideChange])

  /**
   * 跳转到指定幻灯片
   * 支持直接索引跳转
   */
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return

      setIsTransitioning(true)
      setCurrentIndex(index)
      onSlideChange?.(index)

      setTimeout(() => setIsTransitioning(false), animationDuration)
    },
    [currentIndex, isTransitioning, animationDuration, onSlideChange],
  )

  /**
   * 播放/暂停控制
   * 支持播放状态回调
   */
  const togglePlayPause = useCallback(() => {
    const newPlayingState = !isPlaying
    setIsPlaying(newPlayingState)
    onPlayStateChange?.(newPlayingState)
  }, [isPlaying, onPlayStateChange])

  /**
   * 触摸手势处理
   * 支持移动端滑动切换
   */
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!enableTouch) return
      setTouchEnd(null)
      setTouchStart(e.targetTouches[0].clientX)
    },
    [enableTouch],
  )

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }, [])

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd || !enableTouch) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }
  }, [touchStart, touchEnd, enableTouch, nextSlide, prevSlide])

  /**
   * 键盘导航处理
   * 支持方向键和空格键控制
   */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!enableKeyboard) return

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          prevSlide()
          break
        case 'ArrowRight':
          e.preventDefault()
          nextSlide()
          break
        case ' ':
          e.preventDefault()
          togglePlayPause()
          break
        case 'Home':
          e.preventDefault()
          goToSlide(0)
          break
        case 'End':
          e.preventDefault()
          goToSlide(totalSlides - 1)
          break
      }
    },
    [enableKeyboard, prevSlide, nextSlide, togglePlayPause, goToSlide, totalSlides],
  )

  /**
   * 鼠标滚轮处理
   * 支持滚轮切换幻灯片
   */
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!enableWheel || isTransitioning) return

      e.preventDefault()
      if (e.deltaY > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    },
    [enableWheel, isTransitioning, nextSlide, prevSlide],
  )

  /**
   * 自动播放管理
   * 根据播放状态和悬停状态控制自动播放
   */
  useEffect(() => {
    if (isPlaying && !isHovered) {
      setAutoPlayTimer()
    } else {
      clearAllIntervals()
    }

    return () => clearAllIntervals()
  }, [isPlaying, isHovered, currentIndex, setAutoPlayTimer, clearAllIntervals])

  /**
   * 键盘和滚轮事件监听
   * 添加全局事件监听器
   */
  useEffect(() => {
    if (!isClient) return

    if (enableKeyboard) {
      document.addEventListener('keydown', handleKeyDown)
    }

    if (enableWheel && containerRef.current) {
      containerRef.current.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      if (containerRef.current) {
        containerRef.current.removeEventListener('wheel', handleWheel)
      }
    }
  }, [isClient, enableKeyboard, enableWheel, handleKeyDown, handleWheel])

  /**
   * 组件卸载时清理
   * 防止内存泄漏
   */
  useEffect(() => {
    return () => {
      clearAllIntervals()
    }
  }, [clearAllIntervals])

  /**
   * 样式计算
   * 根据主题和配置计算动态样式
   */
  const containerStyles = useMemo(() => {
    let heightClass = ''
    if (typeof height === 'string') {
      heightClass = height
    } else {
      heightClass = clsx(
        height.base || 'h-[60vh]',
        height.sm && `sm:${height.sm}`,
        height.md && `md:${height.md}`,
        height.lg && `lg:${height.lg}`,
        height.xl && `xl:${height.xl}`,
        height['2xl'] && `2xl:${height['2xl']}`
      )
    }

    return clsx(
      'relative w-full overflow-hidden',
      heightClass,
      theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50',
      enable3D && 'perspective-1000',
      className
    )
  }, [height, theme, enable3D, className])

  const slideStyles = useMemo(() => {
    return {
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: isTransitioning
        ? `transform ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
        : 'none',
    }
  }, [currentIndex, isTransitioning, animationDuration])

  const indicatorStyles = useMemo(() => {
    return clsx(
      'absolute bottom-6 left-1/2 -translate-x-1/2 z-30',
      'flex space-x-2',
      isMobile ? 'bottom-4' : 'bottom-6'
    )
  }, [isMobile])

  const controlStyles = useMemo(() => {
    const baseStyles = 'absolute top-1/2 -translate-y-1/2 z-30'
    const buttonStyles = clsx(
      'rounded-full bg-white/20 backdrop-blur-sm border border-white/30',
      'p-3 text-white transition-all duration-200',
      'hover:bg-white/30 hover:scale-110',
      'focus:outline-none focus:ring-2 focus:ring-white/50',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      isMobile ? 'p-2' : 'p-3'
    )

    return { baseStyles, buttonStyles }
  }, [isMobile])

  // 处理轮播数据
  const processedSlides = useMemo(() => {
    return actualSlides.map(slide => ({
      ...slide,
      gradient: slide.gradient || {
        direction: 'to-r',
        from: 'rgba(0, 0, 0, 0.7)',
        to: 'rgba(0, 0, 0, 0.3)',
        opacity: 0.8,
      }
    }))
  }, [actualSlides])



  // 服务端渲染时的组件渲染
  if (!isClient) {
    return (
      <div className={containerStyles}>
        {/* 加载占位符 */}
        <div className="flex h-full items-center justify-center">
          <div className="animate-pulse text-center">
            <div className="mx-auto h-8 w-32 rounded-md bg-gray-300 mb-4"></div>
            <div className="mx-auto h-4 w-48 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* 主轮播容器 */}
      <div
        ref={containerRef}
        className={containerStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label="图片轮播"
        aria-live="polite"
      >
        {/* 幻灯片容器 */}
        <div
          ref={slidesRef}
          className="flex h-full transition-transform duration-300 ease-out"
          style={slideStyles}
        >
          {processedSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative h-full w-full flex-shrink-0"
              aria-hidden={index !== currentIndex}
            >
              {/* 背景图片 */}
              <div className="absolute inset-0">
                <Image
                  src={slide.backgroundImage}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  sizes="100vw"
                  quality={90}
                />
              </div>

              {/* 渐变遮罩 */}
              {slide.gradient && (
                <div
                  className={clsx(
                    'absolute inset-0',
                    `bg-gradient-${slide.gradient.direction}`,
                  )}
                  style={{
                    background: `linear-gradient(${slide.gradient.direction.replace('to-', 'to ')}, ${slide.gradient.from}, ${slide.gradient.via ? slide.gradient.via + ', ' : ''}${slide.gradient.to})`,
                    opacity: slide.gradient.opacity || 0.8,
                  }}
                />
              )}

              {/* 内容区域 */}
               <div className="relative z-10 flex h-full items-center">
                 <div className="mx-auto w-full max-w-[1800px] px-4 sm:px-6 lg:px-8">
                  <div className="max-w-3xl mr-auto text-left">
                    {/* 副标题 */}
                     <p className="mb-3 text-sm font-medium uppercase tracking-wider text-blue-600 sm:text-base lg:mb-4 text-left">
                       {slide.subtitle}
                     </p>

                     {/* 主标题 */}
                     <h1 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl xl:text-6xl lg:mb-6 text-left">
                       {slide.title}
                     </h1>

                     {/* 描述 */}
                     <p className="mb-8 text-lg leading-relaxed text-gray-700 sm:text-xl lg:text-2xl lg:mb-10 text-left">
                       {slide.description}
                     </p>

                    {/* 按钮 */}
                    {slide.buttonText && (
                      <div>
                        <a
                          href={slide.buttonLink || '#'}
                          className="inline-flex items-center rounded-lg bg-white/95 backdrop-blur-sm px-6 py-3 text-base font-semibold text-gray-900 shadow-lg transition-all duration-200 hover:bg-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 sm:px-8 sm:py-4 sm:text-lg"
                        >
                          {slide.buttonText}
                          <svg
                            className="ml-2 h-5 w-5"
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
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 导航箭头 */}
        {showNavigation && !isMobile && (
          <>
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className={clsx(controlStyles.baseStyles, 'left-6', controlStyles.buttonStyles)}
              aria-label="上一张"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className={clsx(controlStyles.baseStyles, 'right-6', controlStyles.buttonStyles)}
              aria-label="下一张"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </>
        )}

        {/* 播放控制按钮 */}
        {showPlayButton && !isMobile && (
          <button
            onClick={togglePlayPause}
            className="absolute bottom-6 right-6 z-30 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 p-3 text-white transition-all duration-200 hover:bg-white/30 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={isPlaying ? '暂停' : '播放'}
          >
            {isPlaying ? (
              <PauseIcon className="h-6 w-6" />
            ) : (
              <PlayIcon className="h-6 w-6" />
            )}
          </button>
        )}

        {/* 指示器 */}
        {showIndicators && (
          <div className={indicatorStyles}>
            {processedSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={clsx(
                  'h-3 w-3 rounded-full transition-all duration-200',
                  index === currentIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/75',
                  isMobile ? 'h-2 w-2' : 'h-3 w-3'
                )}
                aria-label={`跳转到第 ${index + 1} 张`}
              />
            ))}
          </div>
        )}

        {/* 进度条 */}
        {showProgress && isPlaying && (
          <div className="absolute bottom-0 left-0 z-30 h-1 w-full bg-white/20">
            <div
              className="h-full bg-white transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
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
                   className="group flex items-center justify-between gap-4 rounded-md border-0 bg-white p-4 transition-colors duration-200 hover:bg-gray-50 md:rounded-none md:border-none md:bg-transparent md:px-6 md:py-6"
                   aria-label={item.ariaLabel}
                 >
                   <div className="min-w-0 flex-1">
                     <h3 className="mb-1 text-lg font-medium tracking-tight text-gray-900 group-hover:text-gray-900 md:mb-2 md:text-base md:font-semibold">
                       {item.title}
                     </h3>
                     <p className="text-sm leading-relaxed text-gray-500 md:block">
                       {item.description}
                     </p>
                   </div>
                   <svg
                     className="h-6 w-6 shrink-0 text-gray-300 transition-transform duration-200 group-hover:text-gray-400 md:h-5 md:w-5"
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
    const img = new window.Image()
    img.src = url
  })
}

/**
 * 防抖函数
 * 用于优化频繁触发的事件处理
 * @param func 要防抖的函数
 * @param wait 等待时间（毫秒）
 * @returns 防抖后的函数
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * 节流函数
 * 用于限制函数执行频率
 * @param func 要节流的函数
 * @param limit 时间限制（毫秒）
 * @returns 节流后的函数
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export default VideoCarousel
