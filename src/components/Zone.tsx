import React from 'react'
import Image from 'next/image'
import { Container } from './Container'

/**
 * 全球基础设施展示组件
 * 简洁展示pos支付网在全球的基础设施分布
 * 采用极简设计风格，专注于核心信息展示
 *
 * @returns 渲染的全球基础设施展示区域
 */
export default function Zone() {
  // 核心统计数据
  const stats = [
    { number: '29', label: '可用区域' },
    { number: '89', label: '国家和地区' },
    { number: '10+', label: '动态节点' },
    { number: '180+Tbps', label: '网络带宽' },
  ]

  // 主要节点位置
  const nodes = [
    { name: '中国大陆', x: 70, y: 35 },
    { name: '香港', x: 72, y: 38 },
    { name: '新加坡', x: 78, y: 50 },
    { name: '日本', x: 85, y: 30 },
    { name: '美国', x: 15, y: 35 },
    { name: '加拿大', x: 12, y: 25 },
  ]

  return (
    <section className="relative py-16 sm:py-20">
      {/* 背景图片 */}
      <div className="absolute inset-0">
        <Image
          src="/images/screenshots/zone-earth.png"
          alt="全球基础设施背景"
          fill
          className="object-contain"
          unoptimized
        />
      </div>

      <Container className="relative z-10">
        {/* 标题 */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            全球基础设施
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            安全稳定的云计算服务，覆盖全球主要地区
          </p>
        </div>

        {/* 统计数据 */}
        <div className="mb-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-blue-600 lg:text-4xl">
                {stat.number}
              </div>
              <div className="mt-2 text-sm font-medium text-gray-900">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* 全球分布图 */}
        <div className="text-center">
          <h3 className="mb-6 text-lg font-medium text-gray-900">
            全球网络分布
          </h3>

          <div className="mx-auto grid max-w-2xl grid-cols-3 gap-4 text-sm">
            {nodes.map((node, index) => (
              <div key={index} className="flex items-center justify-center">
                <div className="mr-2 h-2 w-2 rounded-full bg-blue-600" />
                <span className="text-gray-700">{node.name}</span>
              </div>
            ))}
          </div>

          <p className="mt-4 text-sm text-gray-500">
            覆盖全球主要地区
          </p>
        </div>
      </Container>
    </section>
  )
}
