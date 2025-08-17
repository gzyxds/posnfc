/**
 * 头部轮播组件封装
 * 此组件封装了 HeaderCarousel 组件，可以直接导入到首页或其他页面使用。
 * 注意：组件为客户端组件，内部渲染的 HeaderCarousel 也为客户端组件。
 */
'use client'

import HeaderCarousel from '@/components/HeaderCarousel'
import type { SlideData } from '@/components/HeaderCarousel'

/**
 * 渲染视频背景轮播组件（视频背景 + 文案按钮版本）。
 * - 使用视频背景增强视觉冲击力
 * - 底部按钮采用纯文案设计，突出内容而非按钮本身
 * @returns {React.ReactNode} 返回包含 HeaderCarousel 的组件
 */
import React from 'react'

/**
 * VideoCarousel 组件属性接口
 */
export interface VideoCarouselProps {
  /** 是否自动播放，默认false */
  autoPlay?: boolean
  /** 是否显示进度条，默认false */
  showProgress?: boolean
  /** 自定义高度配置，响应式设置 */
  height?: { base: string; md: string; lg: string }
  /** 主题，默认light */
  theme?: 'light' | 'dark'
  /** 是否使用文本模式按钮，默认true */
  textModeButton?: boolean
  /** 是否显示遮罩层，默认false */
  showOverlay?: boolean
  /** 自定义轮播数据，不提供则使用默认数据 */
  customSlides?: SlideData[]
}

export function VideoCarousel({
  autoPlay = false,
  showProgress = false,
  height = { base: 'h-[56vh]', md: 'h-[62vh]', lg: 'h-[66vh]' },
  theme = 'light', // 默认使用浅色主题，文本为黑色
  textModeButton = true,
  showOverlay = false,
  customSlides,
}: VideoCarouselProps): React.ReactNode {
  // 使用自定义轮播数据或默认数据
  const slides: SlideData[] = customSlides || [
    {
      id: 1,
      title: '优刻云服务器',
      subtitle: '专属福利',
      description:
        '安全稳定、可弹性伸缩的云计算服务',
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
        '高性价比云服务器，轻松管理全球部署，专为开发者、初创团队及企业级用户打造',
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
      subtitle: '开源生态',
      description:
        ' GPU 算力的弹性计算服务，具有超强的并行计算能力，作为 IaaS 层的尖兵利器，服务于深度学习训练、科学计算、图形图像处理、视频编解码等场景',
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
      buttonText: '立即参与',
      buttonLink: '#',
    },
    {
      id: 4,
      title: '弹性伸缩',
      subtitle: '全球化布局',
      description:
        '自动化、具备计划性、高效且高容错性的低成本计算资源管理策略',
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
      buttonText: '查看详情',
      buttonLink: '#',
    },
  ]

  return (
    <div className="w-full">
      <HeaderCarousel
        autoPlay={autoPlay}
        showProgress={showProgress}
        height={height}
        slides={slides}
        theme={theme}
        textModeButton={textModeButton}
        showOverlay={showOverlay}
      />
    </div>
  )
}
