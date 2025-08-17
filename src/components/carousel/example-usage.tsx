/**
 * 示例：如何在首页中使用 VideoCarousel 组件
 * 此文件仅作为参考，不需要实际部署
 */
'use client'

import React from 'react'
import { VideoCarousel } from './VideoCarousel'
import type { SlideData } from '@/components/HeaderCarousel'

/**
 * 首页组件示例
 * 展示如何在首页中集成 VideoCarousel 组件
 */
export default function HomePageExample() {
  // 可选：自定义轮播数据
  const customSlides: SlideData[] = [
    {
      id: 1,
      title: '企业级云服务解决方案',
      subtitle: '为您的业务提供强大支持',
      description: '基于先进技术架构，提供高性能、高可用、安全可靠的云计算服务，满足企业各类业务场景需求。',
      backgroundType: 'video',
      backgroundVideo: {
        src: 'https://your-video-url.mp4',
        autoPlay: true,
        muted: true,
        loop: true,
        controls: false,
        preload: 'metadata',
      },
      textPosition: 'left',
      buttonText: '了解更多',
      buttonLink: '/products',
    },
    // 可添加更多轮播项...
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* 头部轮播区域 */}
      <section className="w-full">
        <VideoCarousel
          autoPlay={true}
          showProgress={true}
          theme="dark"
          customSlides={customSlides} // 使用自定义数据
          // 或者使用默认数据：不传入 customSlides 参数
        />
      </section>

      {/* 其他首页内容区域 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">我们的产品与服务</h2>
          {/* 其他内容... */}
        </div>
      </section>

      {/* 更多首页内容... */}
    </main>
  )
}
