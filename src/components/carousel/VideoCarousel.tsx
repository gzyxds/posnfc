/**
 * 视频背景轮播组件
 * 基于 HeaderCarousel 设计的专业视频轮播组件，具备完整的轮播交互功能：
 * - 视频背景自动播放与循环
 * - 进度条显示播放进度
 * - 导航箭头支持手动切换
 * - 分页指示器显示当前位置
 * - 触摸手势支持移动端操作
 * - 键盘导航支持无障碍访问
 * - 播放控制按钮
 * - 响应式设计适配各种屏幕
 */
'use client'

import { HeaderCarousel } from '@/components/HeaderCarousel'
import type { SlideData } from '@/components/HeaderCarousel'
import React from 'react'

/**
 * VideoCarousel 组件属性接口
 * 提供完整的视频轮播配置选项
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
}

/**
 * 视频背景轮播组件
 *
 * 基于 HeaderCarousel 的专业视频轮播组件，提供完整的轮播交互体验：
 *
 * 核心功能：
 * - 🎥 视频背景自动播放与无缝循环
 * - ⏱️ 可配置的自动切换间隔时间
 * - 📊 实时进度条显示播放进度
 * - 🎮 播放/暂停控制按钮
 * - 🔄 左右导航箭头支持手动切换
 * - 📍 底部分页指示器显示当前位置
 * - 👆 触摸手势支持移动端滑动操作
 * - ⌨️ 键盘导航支持无障碍访问（← → 空格）
 * - 📱 响应式设计适配各种屏幕尺寸
 * - 🎨 深色/浅色主题切换
 * - 🔧 灵活的遮罩层配置
 *
 * 交互特性：
 * - 鼠标悬停时暂停自动播放
 * - 焦点获得时暂停播放（无障碍支持）
 * - 导航箭头悬停时显示动画效果
 * - 平滑的切换过渡动画
 *
 * @param props - VideoCarousel 组件属性
 * @param props.autoPlay - 是否自动播放，默认 true
 * @param props.interval - 自动播放间隔时间（毫秒），默认 6000ms
 * @param props.showProgress - 是否显示进度条，默认 true
 * @param props.showPlayButton - 是否显示播放控制按钮，默认 true
 * @param props.height - 轮播高度配置，支持字符串或响应式对象
 * @param props.theme - 主题模式：'dark' | 'light'，默认 'dark'
 * @param props.textModeButton - 是否使用文本模式按钮，默认 true
 * @param props.showOverlay - 是否显示遮罩层，默认 true
 * @param props.overlayClassName - 自定义遮罩层类名
 * @param props.className - 自定义容器类名
 * @param props.customSlides - 自定义轮播数据，不提供则使用默认云服务主题数据
 *
 * @returns React 视频轮播组件
 *
 * @example
 * ```tsx
 * // 基础用法
 * <VideoCarousel />
 *
 * // 自定义配置
 * <VideoCarousel
 *   autoPlay={true}
 *   interval={8000}
 *   theme="light"
 *   height={{ base: 'h-[60vh]', lg: 'h-[70vh]' }}
 *   showPlayButton={true}
 * />
 *
 * // 自定义数据
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
  height = { base: 'h-[56vh]', md: 'h-[62vh]', lg: 'h-[66vh]' },
  theme = 'light', // 视频背景通常使用深色主题效果更佳
  textModeButton = true,
  showOverlay = true,
  overlayClassName,
  className,
  customSlides,
}: VideoCarouselProps): React.ReactNode {
  // 使用自定义轮播数据或默认数据
  const slides: SlideData[] = customSlides || [
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
      textPosition: 'left',
      buttonText: '了解更多',
      buttonLink: '#',
    },
  ]

  return (
    <div className="w-full">
      <HeaderCarousel
        autoPlay={autoPlay}
        interval={interval}
        showProgress={showProgress}
        showPlayButton={showPlayButton}
        height={height}
        slides={slides}
        theme={theme}
        textModeButton={textModeButton}
        showOverlay={showOverlay}
        overlayClassName={overlayClassName}
        className={className}
      />
    </div>
  )
}

// 默认导出，方便导入使用
export default VideoCarousel
