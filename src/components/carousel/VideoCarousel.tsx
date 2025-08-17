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
      title: '香港学生专属活动',
      subtitle: '学生专属福利',
      description:
        '上班族打工人以及大学生，还等什么呢？快上车一起薅羊毛，快速创业，有的甚至月入十万不是梦！',
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
      title: '云上练级计划：边学边做，积分兑豪礼',
      subtitle: '云上新手训练营',
      description:
        '加入训练营，参与挑战任务，积累积分兑换好礼，助你快速上云、进阶成长。',
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
      title: '开发者共创季：开源共建，技术加速',
      subtitle: '开源生态',
      description:
        '参与开源项目共建，与技术社区同频成长，共创更多可能。',
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
      buttonText: '立即参与',
      buttonLink: '#',
    },
    {
      id: 4,
      title: '企业出海加速：全球加速与边缘计算',
      subtitle: '全球化布局',
      description:
        '覆盖全球的边缘节点与网络加速能力，助力业务出海提速、稳定、低时延。',
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
