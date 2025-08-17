'use client'

import React, { useState, useEffect, useCallback, useRef, memo } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, PlayIcon, PauseIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import type { StaticImageData } from 'next/image'
import backgroundFeatures from '@/images/background-features.jpg'
import backgroundAuth from '@/images/background-auth.jpg'
import backgroundCallToAction from '@/images/background-call-to-action.jpg'

/**
 * 头部轮播组件属性接口
 */
export interface HeaderCarouselProps {
  /** 是否自动播放，默认true */
  autoPlay?: boolean
  /** 自动播放间隔时间（毫秒），默认5000ms */
  interval?: number
  /** 自定义类名 */
  className?: string
  /** 轮播高度，支持字符串或响应式对象，默认 'h-[500px]' */
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
  /** 是否显示播放控制按钮，默认false */
  showPlayButton?: boolean
  /** 是否显示进度条，默认true */
  showProgress?: boolean
  /** 轮播数据 */
  slides?: SlideData[]
  /** 文字与遮罩主题：'dark' 为深色背景配白字，'light' 为浅色背景配深色字，默认 'dark' */
  theme?: 'light' | 'dark'
  /** 覆盖层类名，传入时将覆盖默认的主题遮罩样式 */
  overlayClassName?: string
  /** 是否使用文案模式按钮（纯文字+箭头），默认false使用传统按钮样式 */
  textModeButton?: boolean
  /** 是否显示遮罩层，默认true */
  showOverlay?: boolean
}

/**
 * 轮播项数据接口
 */
export interface SlideData {
  id: number
  title: string
  subtitle: string
  description: string
  /** 背景类型：纯色、图片或视频，默认 image */
  backgroundType?: 'color' | 'image' | 'video'
  /** 纯色背景色值（当 backgroundType 为 color 时使用） */
  backgroundColor?: string
  /** 图片背景（当 backgroundType 为 image 时使用）。为兼容旧用法，仍然支持此字段 */
  backgroundImage?: StaticImageData | string
  /** 视频背景配置（当 backgroundType 为 video 时使用） */
  backgroundVideo?: {
    /** 视频地址，可以是单个 src 或不同格式的多源 */
    src: string | string[]
    /** 海报图（可选） */
    poster?: StaticImageData | string
    /** 是否自动播放（默认 true） */
    autoPlay?: boolean
    /** 是否静音（默认 true，通常必须静音才可自动播放） */
    muted?: boolean
    /** 是否循环播放（默认 true） */
    loop?: boolean
    /** 是否显示控制条（默认 false） */
    controls?: boolean
    /** 预加载策略（默认 'metadata'） */
    preload?: 'auto' | 'metadata' | 'none'
  }
  buttonText?: string
  buttonLink?: string
  textPosition?: 'left' | 'center' | 'right'
}

/**
 * 默认轮播数据
 */
const defaultSlides: SlideData[] = [
  {
    id: 1,
    title: '香港学生专属活动',
    subtitle: '关注、发帖、进频道，轻松赢取代金券福利！',
    description: '上班族打工人以及大学生，还等什么呢？快上车一起薅羊毛，快速创业，有的甚至月入十万不是梦！',
    backgroundType: 'image',
    backgroundImage: backgroundFeatures,
    buttonText: '立即参与',
    buttonLink: '#',
    textPosition: 'left'
  },
  {
    id: 2,
    title: '免费试用计算服务',
    subtitle: 'Tencent RTC 音视频通话',
    description: '为各行业、各场景提供专业稳定、低延时、高并发的音视频通信能力。',
    backgroundType: 'image',
    backgroundImage: backgroundCallToAction,
    buttonText: '免费体验',
    buttonLink: '#',
    textPosition: 'center'
  },
  {
    id: 3,
    title: '香港学生专属活动',
    subtitle: 'EdgeOne 客户案例荟萃',
    description: '分布式全栈服务，提供丰富的开发工具和运行环境，助力企业快速构建应用。',
    backgroundType: 'image',
    backgroundImage: backgroundAuth,
    buttonText: '查看案例',
    buttonLink: '#',
    textPosition: 'right'
  }
]

/**
 * 头部轮播组件
 *
 * 设计特色：
 * - 全屏宽度背景图片轮播
 * - 响应式文本布局：支持左中右三种对齐方式
 * - 智能自动播放：支持暂停/恢复控制
 * - 现代化导航：圆点指示器 + 左右箭头
 * - 无障碍支持：完整的 ARIA 标签和键盘导航
 * - 移动端优化：触摸滑动手势支持
 *
 * @param props - 头部轮播组件属性
 * @returns React头部轮播组件
 */
export const HeaderCarousel = memo<HeaderCarouselProps>(function HeaderCarousel({
  autoPlay = true,
  interval = 5000,
  className,
  height = 'h-[700px]',
  showPlayButton = false,
  showProgress = true,
  slides = defaultSlides,
  theme = 'dark',
  overlayClassName,
  textModeButton = false,
  showOverlay = true,
}) {
  const totalSlides = slides.length

  // 状态管理
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [progress, setProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // 文字与段落颜色（根据主题）
  const headingTextClass = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const paragraphTextClass = theme === 'dark' ? 'text-gray-200' : 'text-gray-600'

  // Refs
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)

  /**
   * 清理所有定时器
   * @returns void 不返回任何值，仅用于清理正在运行的主轮播与进度条定时器
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
   * 设置自动播放和进度条定时器
   * @returns void 根据当前播放状态与配置创建定时器
   */
  const setAutoPlayInterval = useCallback(() => {
    if (isPlaying && totalSlides > 1) {
      clearAllIntervals()

      // 重置进度条
      setProgress(0)

      // 设置主轮播定时器
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex + 1
          return nextIndex >= totalSlides ? 0 : nextIndex
        })
        setProgress(0) // 重置进度条
      }, interval)

      // 设置进度条更新定时器
      if (showProgress) {
        const progressInterval = 50 // 50ms更新一次进度条
        const progressStep = (progressInterval / interval) * 100

        progressRef.current = setInterval(() => {
          setProgress((prevProgress) => {
            const newProgress = prevProgress + progressStep
            return newProgress >= 100 ? 100 : newProgress
          })
        }, progressInterval)
      }
    }
  }, [isPlaying, totalSlides, interval, showProgress, clearAllIntervals])

  /**
   * 切换到指定索引
   * @param {number} index 目标轮播下标（0 到 totalSlides-1）
   * @returns void 超出范围时安全忽略
   */
  const goToSlide = useCallback(
    (index: number) => {
      if (index < 0 || index >= totalSlides) return
      setCurrentIndex(index)
      setProgress(0) // 重置进度条
    },
    [totalSlides]
  )

  /**
   * 上一张
   * @returns void 跳转到上一张（首张时回绕到最后一张）
   */
  const goToPrevious = useCallback(() => {
    const prevIndex = currentIndex - 1
    const targetIndex = prevIndex < 0 ? totalSlides - 1 : prevIndex
    goToSlide(targetIndex)
  }, [currentIndex, totalSlides, goToSlide])

  /**
   * 下一张
   * @returns void 跳转到下一张（末张时回绕到第一张）
   */
  const goToNext = useCallback(() => {
    const nextIndex = currentIndex + 1
    const targetIndex = nextIndex >= totalSlides ? 0 : nextIndex
    goToSlide(targetIndex)
  }, [currentIndex, totalSlides, goToSlide])

  /**
   * 处理鼠标悬停 - 暂停自动播放
   * @returns void 在 autoPlay 为 true 时暂停播放
   */
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
    if (autoPlay) {
      setIsPlaying(false)
    }
  }, [autoPlay])

  /**
   * 处理鼠标离开 - 恢复自动播放
   * @returns void 在 autoPlay 为 true 时恢复播放
   */
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
    if (autoPlay) {
      setIsPlaying(true)
    }
  }, [autoPlay])

  /**
   * 处理容器获得焦点（例如通过键盘 Tab）时暂停自动播放
   * @returns void 在 autoPlay 为 true 时暂停播放
   */
  const handleFocus = useCallback(() => {
    if (autoPlay) {
      setIsPlaying(false)
    }
  }, [autoPlay])

  /**
   * 处理容器失去焦点时恢复自动播放
   * @returns void 在 autoPlay 为 true 时恢复播放
   */
  const handleBlur = useCallback(() => {
    if (autoPlay) {
      setIsPlaying(true)
    }
  }, [autoPlay])

  /**
   * 切换播放状态
   * @returns void 根据新状态启动/清理定时器
   */
  const togglePlayState = useCallback(() => {
    setIsPlaying((prev) => {
      const newState = !prev
      if (newState) {
        setAutoPlayInterval()
      } else {
        clearAllIntervals()
      }
      return newState
    })
  }, [setAutoPlayInterval, clearAllIntervals])

  /**
   * 处理触摸开始
   * @param {React.TouchEvent} e 触摸事件对象
   * @returns void 记录触点起始位置
   */
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }, [])

  /**
   * 处理触摸移动
   * @param {React.TouchEvent} e 触摸事件对象
   * @returns void 更新触点当前位置
   */
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }, [])

  /**
   * 处理键盘交互（← → 空格）
   * @param {React.KeyboardEvent<HTMLDivElement>} e - 键盘事件对象
   * @returns {void} 根据按键执行上一张、下一张或播放/暂停
   */
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>): void => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        goToNext()
      } else if (e.key === ' ' || e.key === 'Spacebar') {
        e.preventDefault()
        togglePlayState()
      }
    },
    [goToPrevious, goToNext, togglePlayState]
  )

  /**
   * 处理触摸结束
   * @returns void 根据滑动距离判断左右滑动作并切换
   */
  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      goToNext()
    } else if (isRightSwipe) {
      goToPrevious()
    }
  }, [touchStart, touchEnd, goToNext, goToPrevious])

  // 自动播放效果
  useEffect(() => {
    clearAllIntervals()
    setAutoPlayInterval()

    return clearAllIntervals
  }, [clearAllIntervals, setAutoPlayInterval])

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      clearAllIntervals()
    }
  }, [clearAllIntervals])

  /**
   * 获取文本位置样式
   * @param {string} [position='left'] 文本对齐方式：left | center | right
   * @returns {string} Tailwind 类名片段
   */
  const getTextPositionClass = (position: string = 'left') => {
    switch (position) {
      case 'center':
        return 'items-center text-center'
      case 'right':
        return 'items-end text-right'
      default:
        return 'items-start text-left'
    }
  }

  /**
   * 生成响应式高度类名
   * @param {HeaderCarouselProps['height']} heightProp 高度配置
   * @returns {string} 拼接后的 Tailwind 类名
   */
  const getResponsiveHeightClasses = (
    heightProp: HeaderCarouselProps['height']
  ): string => {
    if (!heightProp) return 'h-[800px] md:h-[900px] lg:h-[1000px]'
    if (typeof heightProp === 'string') return heightProp
    const parts: string[] = []
    if (heightProp.base) parts.push(heightProp.base)
    if (heightProp.sm) parts.push(`sm:${heightProp.sm}`)
    if (heightProp.md) parts.push(`md:${heightProp.md}`)
    if (heightProp.lg) parts.push(`lg:${heightProp.lg}`)
    if (heightProp.xl) parts.push(`xl:${heightProp.xl}`)
    if (heightProp['2xl']) parts.push(`2xl:${heightProp['2xl']}`)
    return parts.join(' ')
  }

  /**
   * 渲染背景：支持纯色、图片或视频
   */
  const renderBackground = (slide: SlideData, index: number) => {
    const type: 'color' | 'image' | 'video' = slide.backgroundType
      ?? (slide.backgroundVideo ? 'video' : slide.backgroundColor ? 'color' : 'image')

    if (type === 'color') {
      return (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: slide.backgroundColor || '#000000' }}
          aria-hidden="true"
        />
      )
    }

    if (type === 'video' && slide.backgroundVideo) {
      const v = slide.backgroundVideo
      const posterUrl = typeof v.poster === 'string' ? v.poster : v.poster?.src
      return (
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay={v.autoPlay ?? true}
          muted={v.muted ?? true}
          loop={v.loop ?? true}
          playsInline
          controls={v.controls ?? false}
          preload={v.preload ?? 'metadata'}
          poster={posterUrl}
          aria-hidden="true"
        >
          {Array.isArray(v.src)
            ? v.src.map((s, i) => <source key={i} src={s} />)
            : <source src={v.src} />}
        </video>
      )
    }

    // 默认图片背景（兼容旧数据）
    const img = slide.backgroundImage
    return (
      <Image
        src={img as any}
        alt={slide.title}
        fill
        className="object-cover"
        priority={index === 0}
        sizes="100vw"
        placeholder={typeof img === 'string' ? 'empty' : 'blur'}
        fetchPriority={index === 0 ? 'high' : 'auto'}
      />
    )
  }

  if (totalSlides === 0) {
    return (
      <div className={clsx(
        'flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100',
        getResponsiveHeightClasses(height),
        className
      )}>
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-blue-200 animate-pulse" />
          </div>
          <p className="text-blue-600 font-medium">暂无轮播内容</p>
        </div>
      </div>
    )
  }

  const currentSlide = slides[currentIndex]

  return (
    <div
      className={clsx(
        'group relative w-full overflow-hidden',
        getResponsiveHeightClasses(height),
        className
      )}
      role="region"
      aria-roledescription="carousel"
      aria-label="头部轮播"
      aria-live="off"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* 进度条 */}
      {showProgress && (
        <div className="absolute top-0 left-0 right-0 z-30 h-1 bg-black/20">
          <div
            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-100 ease-out"
            style={{ width: `${progress}%` }}
            role="progressbar"
            aria-label="自动播放进度"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(progress)}
            aria-live="off"
          />
        </div>
      )}

      {/* 背景图片 */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={clsx(
            'absolute inset-0 transition-opacity duration-1000 ease-in-out',
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          )}
        >
          {renderBackground(slide, index)}
          {/* 覆盖层 */}
          {showOverlay && (
            <div className={clsx('absolute inset-0', overlayClassName ?? (theme === 'dark' ? 'bg-black/40' : 'bg-white/40'))} />
          )}
        </div>
      ))}

      {/* 内容区域 */}
      <div className="relative z-20 h-full flex flex-col justify-center py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1800px] px-4 sm:px-6 lg:px-8 ml-16 sm:ml-24 lg:ml-32">
          <div className={clsx(
            'flex flex-col max-w-2xl transition-all duration-700 ease-out',
            'items-start text-left'
          )}>
            {/* 副标题 */}
            <div className="mb-4">
              <span className="inline-flex items-center rounded-full bg-blue-600/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                {currentSlide.subtitle}
              </span>
            </div>

            {/* 主标题 */}
            <h1 className={clsx('text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl mb-6 leading-tight', headingTextClass)}>
              {currentSlide.title}
            </h1>

            {/* 描述文本 */}
            <p className={clsx('text-lg mb-8 leading-relaxed max-w-lg', paragraphTextClass)}>
              {currentSlide.description}
            </p>

            {/* 行动按钮 */}
            {currentSlide.buttonText && (
              <div className="flex items-center space-x-4">
                {textModeButton ? (
                  <a
                    href={currentSlide.buttonLink || '#'}
                    className={clsx(
                      'group inline-flex items-center text-lg font-medium transition-all duration-200',
                      'border border-current px-4 py-2 bg-transparent',
                      theme === 'dark'
                        ? 'text-white hover:text-blue-300'
                        : 'text-blue-600 hover:text-blue-700',
                      'focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2',
                      theme === 'dark' ? 'focus:ring-offset-gray-900' : 'focus:ring-offset-white'
                    )}
                  >
                    <span className="mr-2">{currentSlide.buttonText}</span>
                    <svg
                      className={clsx(
                        'h-5 w-5 transition-transform duration-200 group-hover:translate-x-1',
                        theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                ) : (
                  <a
                    href={currentSlide.buttonLink || '#'}
                    className="inline-flex items-center bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors duration-200"
                  >
                    {currentSlide.buttonText}
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 播放控制按钮 */}
      {showPlayButton && (
        <button
          onClick={togglePlayState}
          className={clsx(
            'absolute top-4 right-4 z-30 rounded-full bg-white/20 backdrop-blur-sm p-3',
            'shadow-lg transition-all duration-300 hover:bg-white/30 hover:shadow-xl hover:scale-110',
            'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20',
            'border border-white/20'
          )}
          aria-label={isPlaying ? '暂停' : '播放'}
        >
          {isPlaying ? (
            <PauseIcon className="h-5 w-5 text-white" />
          ) : (
            <PlayIcon className="h-5 w-5 text-white" />
          )}
        </button>
      )}

      {/* 导航箭头 */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className={clsx(
              'absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full',
              'bg-white/20 backdrop-blur-sm p-3 border border-white/20',
              'shadow-lg transition-all duration-300 hover:bg-white/30 hover:shadow-xl hover:scale-110',
              'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20',
              'opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0'
            )}
            aria-label="上一张"
          >
            <ChevronLeftIcon className="h-6 w-6 text-white" />
          </button>
          <button
            onClick={goToNext}
            className={clsx(
              'absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full',
              'bg-white/20 backdrop-blur-sm p-3 border border-white/20',
              'shadow-lg transition-all duration-300 hover:bg-white/30 hover:shadow-xl hover:scale-110',
              'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black/20',
              'opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0'
            )}
            aria-label="下一张"
          >
            <ChevronRightIcon className="h-6 w-6 text-white" />
          </button>
        </>
      )}

      {/* 分页指示器 - 简约全宽黑色字体样式，透明背景 */}
      {totalSlides > 1 && (
        <div className="absolute bottom-9 left-0 right-0 z-20 w-full bg-transparent">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 flex items-center justify-between py-3 overflow-x-auto">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={clsx(
                  'relative text-sm font-medium tracking-tight transition-all duration-200 whitespace-nowrap',
                  'focus:outline-none focus:ring-0',
                  'px-3 py-1',
                  index === currentIndex
                    ? 'text-black font-semibold'
                    : 'text-black/60 hover:text-black',
                )}
                aria-label={slide.title}
                aria-current={index === currentIndex ? 'true' : 'false'}
              >
                {slide.title}
                {index === currentIndex && (
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-black rounded-none" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* 卡片式设计参考图片 */}
      {/* <div className="absolute bottom-16 left-0 right-0 z-20 w-full">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* 卡片1 - 免费体验 */}
            {/* <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">免费体验</h3>
                </div>
                <p className="text-xs text-gray-600">新用户专享7天全功能免费试用</p>
              </div>
            </div> */}

            {/* 卡片2 - RTC 服务 */}
            {/* <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">Tencent RTC</h3>
                </div>
                <p className="text-xs text-gray-600">低延时高并发音视频通话服务</p>
              </div>
            </div> */}

            {/* 卡片3 - 应用服务 */}
            {/* <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">轻量应用服务</h3>
                </div>
                <p className="text-xs text-gray-600">一站式解决方案，快速构建应用</p>
              </div>
            </div> */}

            {/* 卡片4 - EdgeOne */}
            {/* <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <div className="p-4">
                <div className="flex items-center mb-3">
                  <div className="h-8 w-8 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                    <svg className="h-4 w-4 text-orange-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900">EdgeOne</h3>
                </div>
                <p className="text-xs text-gray-600">全球边缘计算服务，加速内容分发</p>
              </div>
            </div> */}


    </div>
  )
})

// 默认导出
export default HeaderCarousel
