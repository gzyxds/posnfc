import React from 'react'
import Image from 'next/image'
import { Container } from './Container'
import clsx from 'clsx'

/**
 * 腾讯云全球基础设施展示组件
 * 展示腾讯云在全球的基础设施分布，包括统计数据、地理区域分布等
 * 优化了响应式布局，确保在所有宽屏设备上均匀对齐显示
 */
export default function Zone() {
  // 统计数据配置
  const stats = [
    { value: '3200+', label: '全球CDN节点' },
    { value: '20', label: '数据中心' },
    { value: '70', label: '权威认证' },
    { value: '55', label: '可用区' },
    { value: '21', label: '地理区域' },
  ]

  // 地理区域分布
  const regions = [
    { name: '中国', flag: '' },
    { name: '欧洲', flag: '' },
    { name: '北美', flag: '' },
    { name: '亚太东北', flag: '' },
    { name: '南美', flag: '' },
    { name: '亚太东南', flag: '' },
  ]

  return (
    <section className="py-16 bg-white">
      <Container>
        {/* 标题部分 */}
        <div className="mb-12 text-center lg:text-left">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
            遍布全球的基础设施助力业务飞跃
          </h1>
          <div className="inline-flex items-center text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors cursor-pointer">
            了解更多
            <svg className="ml-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
          {/* 左侧：统计数据 */}
          <div className="space-y-8">
            {/* 统计数据网格 - 响应式布局 */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 lg:gap-8">
              {stats.slice(0, 3).map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-6 lg:gap-8">
              {stats.slice(3, 5).map((stat, index) => (
                <div key={index} className="text-left">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 leading-tight">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* 全球基础设施分布 */}
            <div>
              <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-6">
                全球基础设施分布
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {regions.map((region, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-700 py-1">
                    <span className="mr-3 text-base">{region.flag}</span>
                    <span className="font-medium">{region.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧：世界地图 */}
          <div className="relative flex justify-center">
            <div className="relative w-full max-w-[800px] lg:max-w-[900px] xl:max-w-[1000px] aspect-[4/3]">
              <Image
                src="/images/screenshots/zone-earth.png"
                alt="腾讯云全球基础设施地图"
                width={1000}
                height={750}
                className="w-full h-full object-contain"
              />

              {/* 地图上的数据点动画 */}
              <div className="absolute inset-0">
                {[
                  { top: '37.7%', left: '59.0%', delay: '0s' },
                  { top: '79.0%', left: '25.3%', delay: '0.5s' },
                  { top: '55.5%', left: '79.8%', delay: '1s' },
                  { top: '27.1%', left: '69.5%', delay: '1.5s' },
                  { top: '72.9%', left: '70.4%', delay: '2s' },
                  { top: '67.4%', left: '64.6%', delay: '2.5s' },
                  { top: '55.8%', left: '80.1%', delay: '3s' },
                  { top: '41.0%', left: '16.1%', delay: '3.5s' },
                  { top: '64.3%', left: '31.3%', delay: '4s' },
                  { top: '45.2%', left: '79.8%', delay: '4.5s' },
                  { top: '59.0%', left: '37.5%', delay: '5s' },
                  { top: '29.5%', left: '45.6%', delay: '5.5s' },
                ].map((point, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-blue-500 rounded-full animate-pulse"
                    style={{
                      top: point.top,
                      left: point.left,
                      animationDelay: point.delay,
                      animationDuration: '2s'
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
