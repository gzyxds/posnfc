/**
 * 自适应视频/图片轮播组件
 * 基于 HeaderCarousel 设计的智能轮播组件，具备完整的响应式功能：
 * - PC端：视频背景自动播放与循环
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
 * 提供完整的自适应视频/图片轮播配置选项
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
 * 自适应视频/图片轮播组件
 *
 * 基于 HeaderCarousel 的智能轮播组件，根据设备类型自动切换内容类型：
 *
 * 🖥️ **PC端体验**：
 * - 🎥 高清视频背景自动播放与无缝循环
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
 * @param props.autoPlay - 是否自动播放，默认 true
 * @param props.interval - 自动播放间隔时间（毫秒），默认 6000ms
 * @param props.showProgress - 是否显示进度条，默认 true
 * @param props.showPlayButton - 是否显示播放控制按钮，默认 true
 * @param props.height - 轮播高度配置，支持字符串或响应式对象
 * @param props.theme - 主题模式：'dark' | 'light'，默认 'light'
 * @param props.textModeButton - 是否使用文本模式按钮，默认 true
 * @param props.showOverlay - 是否显示遮罩层，默认 true
 * @param props.overlayClassName - 自定义遮罩层类名
 * @param props.className - 自定义容器类名
 * @param props.customSlides - 自定义轮播数据，不提供则使用默认云服务主题数据
 * @param props.forceVideoMode - 强制使用视频模式（忽略设备检测），默认 false
 * @param props.forceImageMode - 强制使用图片模式（忽略设备检测），默认 false
 * @param props.mobileBreakpoint - 移动端断点阈值（像素），默认 768px
 *
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
 * // 强制使用视频模式
 * <VideoCarousel
 *   forceVideoMode={true}
 *   theme="dark"
 * />
 *
 * // 强制使用图片模式
 * <VideoCarousel
 *   forceImageMode={true}
 *   theme="light"
 * />
 *
 * // 自定义数据（会自动为每个slide添加对应的图片版本）
 * <VideoCarousel
 *   customSlides={[
 *     {
 *       id: 1,
 *       title: '自定义标题',
 *       subtitle: '副标题',
 *       description: '描述文本',
 *       backgroundType: 'video',
 *       backgroundVideo: {
 *         src: 'your-video-url.mp4',
 *         autoPlay: true,
 *         muted: true,
 *         loop: true
 *       },
 *       // 移动端会自动使用对应的图片
 *       backgroundImage: '/images/carousel/your-image.jpg',
 *       buttonText: '行动按钮',
 *       buttonLink: '/your-link'
 *     }
 *   ]}
 * />
 * ```
 */
export function VideoCarousel({
  autoPlay = true,
  interval = 6000,
  showProgress = true,
  showPlayButton = true,
  height = { base: 'h-[70vh]', md: 'h-[80vh]', lg: 'h-[90vh]' },
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

  /**
   * 检测设备类型和屏幕尺寸
   * 根据屏幕宽度判断是否为移动设备
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

  // 服务端渲染时的默认状态
  if (!isClient) {
    return (
      <div className="w-full h-[50vh] bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center">
            <div className="h-8 w-8 rounded-full bg-blue-200 animate-pulse" />
          </div>
          <p className="text-blue-600 font-medium">正在加载轮播内容...</p>
        </div>
      </div>
    )
  }
  /**
   * 根据设备类型处理轮播数据
   * PC端使用视频，移动端使用图片
   */
  const processSlideData = (originalSlides: SlideData[]): SlideData[] => {
    return originalSlides.map((slide) => {
      if (isMobile) {
        // 移动端：使用图片背景
        return {
          ...slide,
          backgroundType: 'image' as const,
          // 如果没有指定图片，使用默认图片
          backgroundImage: slide.backgroundImage || `/images/carousel/HeaderCarousel${slide.id}.jpg`,
          // 移除视频配置以节省资源
          backgroundVideo: undefined,
        }
      } else {
        // PC端：保持原有配置（视频优先）
        return slide
      }
    })
  }

  // 使用自定义轮播数据或默认数据
  const originalSlides: SlideData[] = customSlides || [
    {
      id: 1,
      title: '云计算服务',
      subtitle: '专属福利活动',
      description:
        '安全稳定、可弹性伸缩的云计算服务，为企业数字化转型提供强大技术支撑，助力业务快速发展',
      backgroundType: 'video',
      backgroundVideo: {
        src: 'https://1302445663.vod2.myqcloud.com/cea47bfavodsgp1302445663/2fe0f8df3560136622931560295/Bi8A3X97c0MA.mp4',
        autoPlay: true,
        muted: true,
        loop: true,
        controls: false,
        preload: 'metadata',
      },
      backgroundImage: '/images/carousel/HeaderCarousel1.jpg',
      textPosition: 'left',
      buttonText: '立即开户',
      buttonLink: '#',
    },
    {
      id: 2,
      title: '轻量应用服务器',
      subtitle: '云上新手训练营',
      description:
        '高性价比云服务器解决方案，轻松管理全球部署，专为开发者、初创团队及企业级用户精心打造',
      backgroundType: 'video',
      backgroundVideo: {
        src: 'https://1302445663.vod2.myqcloud.com/cea47bfavodsgp1302445663/95622e503560136622939468774/PgKns80ZyJUA.mp4',
        autoPlay: true,
        muted: true,
        loop: true,
        controls: false,
        preload: 'metadata',
      },
      backgroundImage: '/images/carousel/HeaderCarousel2.jpg',
      textPosition: 'left',
      buttonText: '查看详情',
      buttonLink: '#',
    },
    {
      id: 3,
      title: 'GPU 云服务器',
      subtitle: 'AI 算力平台',
      description:
        '提供强大 GPU 算力的弹性计算服务，具有超强并行计算能力，专为深度学习训练、科学计算、图形渲染等场景优化',
      backgroundType: 'video',
      backgroundVideo: {
        src: 'https://1302445663.vod2.myqcloud.com/cea47bfavodsgp1302445663/63bc0edf5145403691403255359/BubHsdlcVkIA.mp4',
        autoPlay: true,
        muted: true,
        loop: true,
        controls: false,
        preload: 'metadata',
      },
      backgroundImage: '/images/carousel/HeaderCarousel3.jpg',
      textPosition: 'left',
      buttonText: '立即体验',
      buttonLink: '#',
    },
    {
      id: 4,
      title: '弹性伸缩服务',
      subtitle: '全球化部署',
      description:
        '智能化、自动化的计算资源管理策略，具备计划性调度和高容错性，为您提供低成本、高效率的云端解决方案',
      backgroundType: 'video',
      backgroundVideo: {
        src: 'https://1302445663.vod2.myqcloud.com/cea47bfavodsgp1302445663/761709cb3560136622932299783/tTIcvvcAlzQA.mp4',
        autoPlay: true,
        muted: true,
        loop: true,
        controls: false,
        preload: 'metadata',
      },
      backgroundImage: '/images/carousel/HeaderCarousel4.jpg',
      textPosition: 'left',
      buttonText: '了解更多',
      buttonLink: '#',
    },
  ]

  // 根据设备类型处理轮播数据
  const slides = processSlideData(originalSlides)

  return (
    <div className="w-full">
      <HeaderCarousel
        autoPlay={autoPlay}
        interval={interval}
        showProgress={showProgress}
        // 移动端隐藏播放按钮（因为使用图片）
        showPlayButton={isMobile ? false : showPlayButton}
        height={height}
        slides={slides}
        theme={theme}
        textModeButton={textModeButton}
        showOverlay={showOverlay}
        overlayClassName={overlayClassName}
        className={clsx(
          // 基础样式
          'relative overflow-hidden',
          // 移动端优化
          isMobile && [
            'touch-pan-y', // 允许垂直滚动
            'select-none', // 禁止文本选择
          ],
          // PC端优化
          !isMobile && [
            'cursor-pointer', // 鼠标指针
          ],
          className
        )}
      />
    </div>
  )
}

/**
 * 设备检测工具函数
 * 用于在组件外部检测设备类型
 * @param breakpoint - 断点阈值，默认768px
 * @returns 是否为移动设备
 */
export const isMobileDevice = (breakpoint: number = 768): boolean => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < breakpoint
}

/**
 * 预加载图片资源
 * 用于提前加载轮播图片，提升用户体验
 * @param imageUrls - 图片URL数组
 */
export const preloadCarouselImages = (imageUrls: string[]): void => {
  if (typeof window === 'undefined') return

  imageUrls.forEach((url) => {
    const img = new Image()
    img.src = url
  })
}

// 默认导出，方便导入使用
export default VideoCarousel
