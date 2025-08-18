import React from 'react'
import Image from 'next/image'
import { Container } from './Container'
import clsx from 'clsx'

/**
 * 全球基础设施展示组件
 * 展示优刻云在全球的基础设施分布，包括统计数据、地理区域分布等
 * 优化了响应式布局，确保在所有宽屏设备上均匀对齐显示
 */
export default function Zone() {
  // 统计数据配置
  const stats = [
    {
      number: '29',
      unit: '个',
      label: '可用区域',
      description: '覆盖全球主要地区'
    },
    {
      number: '89',
      unit: '个',
      label: '国家和地区',
      description: '服务遍布全球'
    },
    {
      number: '3200',
      unit: '+',
      label: '全球节点',
      description: '高速网络覆盖'
    },
    {
      number: '180',
      unit: '+Tbps',
      label: '网络带宽',
      description: '超大带宽保障'
    }
  ]

  return (
    <section className="bg-white py-8 sm:py-12 lg:py-16">
      <Container>
          {/* 标题部分 */}
          <div className="text-center mb-6 lg:mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              安全合规，通布全球的云计算基础设施
            </h1>
            <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
              优刻云基础设施遍布全球，为您提供安全、稳定、高性能的云计算服务
            </p>
          </div>

          {/* 主要内容区域 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            {/* 左侧统计数据 */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center lg:text-left">
                    <div className="flex items-baseline justify-center lg:justify-start space-x-1">
                      <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600">
                        {stat.number}
                      </span>
                      <span className="text-lg sm:text-xl md:text-2xl lg:text-2xl font-semibold text-blue-600">
                        {stat.unit}
                      </span>
                    </div>
                    <div className="mt-2">
                      <div className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold text-gray-900">
                        {stat.label}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 mt-1">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 右侧世界地图 */}
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden relative">
                {/* 世界地图图片 */}
                <Image
                  src="/images/carousel/Zone.png"
                  alt="全球基础设施分布图"
                  width={800}
                  height={600}
                  className="w-full h-full object-contain"
                  unoptimized
                />
                
                {/* 地球线条元素覆盖层 */}
                <div className="absolute inset-0 pointer-events-none">
                  <svg
                    className="w-full h-full"
                    viewBox="0 0 800 600"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* 经纬线网格 */}
                    <g className="opacity-30">
                      {/* 纬线 */}
                      <path
                        d="M100 150 Q400 140 700 150"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        fill="none"
                        className="animate-pulse"
                      />
                      <path
                        d="M120 250 Q400 240 680 250"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: '0.5s' }}
                      />
                      <path
                        d="M100 350 Q400 340 700 350"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: '1s' }}
                      />
                      <path
                        d="M120 450 Q400 460 680 450"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: '1.5s' }}
                      />
                      
                      {/* 经线 */}
                      <path
                        d="M200 100 Q210 300 200 500"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: '0.2s' }}
                      />
                      <path
                        d="M350 80 Q360 300 350 520"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: '0.7s' }}
                      />
                      <path
                        d="M500 80 Q490 300 500 520"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: '1.2s' }}
                      />
                      <path
                        d="M650 100 Q640 300 650 500"
                        stroke="#3b82f6"
                        strokeWidth="1"
                        fill="none"
                        className="animate-pulse"
                        style={{ animationDelay: '1.7s' }}
                      />
                    </g>
                    

                    
                    {/* 连接节点和线条 */}
                    <g className="opacity-60">
                      {/* 节点 */}
                      <circle cx="200" cy="200" r="4" fill="#ef4444" className="animate-ping" />
                      <circle cx="200" cy="200" r="2" fill="#ef4444" />
                      
                      <circle cx="350" cy="180" r="4" fill="#10b981" className="animate-ping" style={{ animationDelay: '0.5s' }} />
                      <circle cx="350" cy="180" r="2" fill="#10b981" />
                      
                      <circle cx="500" cy="220" r="4" fill="#f59e0b" className="animate-ping" style={{ animationDelay: '1s' }} />
                      <circle cx="500" cy="220" r="2" fill="#f59e0b" />
                      
                      <circle cx="600" cy="300" r="4" fill="#8b5cf6" className="animate-ping" style={{ animationDelay: '1.5s' }} />
                      <circle cx="600" cy="300" r="2" fill="#8b5cf6" />
                      
                      <circle cx="300" cy="380" r="4" fill="#06b6d4" className="animate-ping" style={{ animationDelay: '2s' }} />
                      <circle cx="300" cy="380" r="2" fill="#06b6d4" />
                      
                      {/* 连接线 */}
                      <path
                        d="M200 200 Q275 190 350 180"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,3"
                        className="animate-pulse"
                      />
                      <path
                        d="M350 180 Q425 200 500 220"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,3"
                        className="animate-pulse"
                        style={{ animationDelay: '0.3s' }}
                      />
                      <path
                        d="M500 220 Q550 260 600 300"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,3"
                        className="animate-pulse"
                        style={{ animationDelay: '0.6s' }}
                      />
                      <path
                        d="M300 380 Q400 350 500 220"
                        stroke="#3b82f6"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,3"
                        className="animate-pulse"
                        style={{ animationDelay: '0.9s' }}
                      />
                    </g>
                    
                    {/* 数据流动效果 */}
                    <g className="opacity-50">
                      <circle r="3" fill="#3b82f6" className="opacity-80">
                        <animateMotion
                          dur="4s"
                          repeatCount="indefinite"
                          path="M200 200 Q275 190 350 180 Q425 200 500 220"
                        />
                      </circle>
                      <circle r="3" fill="#06b6d4" className="opacity-80">
                        <animateMotion
                          dur="5s"
                          repeatCount="indefinite"
                          path="M500 220 Q550 260 600 300 Q500 350 300 380"
                          begin="1s"
                        />
                      </circle>
                      <circle r="3" fill="#8b5cf6" className="opacity-80">
                        <animateMotion
                          dur="6s"
                          repeatCount="indefinite"
                          path="M300 380 Q400 350 500 220 Q350 200 200 200"
                          begin="2s"
                        />
                      </circle>
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
      </Container>
    </section>
  )
}
