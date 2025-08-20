'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import {
  CpuChipIcon,
  CloudIcon,
  CircleStackIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'

// 静态图片资源
const screenshotsFeatures = '/images/screenshots/PrimaryFeatures.png'
const screenshotsFeatures1 = '/images/screenshots/PrimaryFeatures1.png'
const screenshotsFeatures2 = '/images/screenshots/achievements.png'
const screenshotVatReturns3 = '/images/screenshots/PrimaryFeatures1.png'

/**
 * 功能特性接口定义
 * @interface Feature
 * @property title - 功能标题
 * @property description - 功能描述详情
 * @property summary - 功能简要说明
 * @property image - 功能展示图片
 * @property icon - 功能图标组件
 * @property metrics - 性能指标数据
 * @property features - 核心特性列表
 */
interface Feature {
  title: string
  description: string
  summary: string
  image: string
  icon: React.ComponentType<{ className?: string }>
  metrics: {
    label: string
    value: string
  }[]
  features: string[]
}

/**
 * 核心功能数据配置
 * 企业级云计算产品功能展示，突出数据与服务能力
 */
const features: Feature[] = [
  {
    title: '弹性计算 ECS',
    summary: '高性能云服务器，支持秒级弹性伸缩',
    description: '提供多种规格的云服务器实例，支持CPU、内存、存储的灵活配置，实现业务负载的智能调度与自动扩展。',
    image: screenshotsFeatures,
    icon: CpuChipIcon,
    metrics: [
      { label: '实例规格', value: '200+' },
      { label: '可用区', value: '25+' },
      { label: '弹性伸缩', value: '秒级' },
    ],
    features: ['多规格实例', '自动扩缩容', '负载均衡', '高可用架构'],
  },
  {
    title: '云存储 OSS',
    summary: '海量数据存储，99.999999999%可靠性',
    description: '提供对象存储、文件存储、块存储等多种存储服务，支持PB级数据存储，确保数据安全与高可用。',
    image: screenshotsFeatures1,
    icon: CloudIcon,
    metrics: [
      { label: '数据可靠性', value: '99.999999999%' },
      { label: '存储容量', value: '无限制' },
      { label: '访问速度', value: '毫秒级' },
    ],
    features: ['多种存储类型', '数据加密', 'CDN加速', '生命周期管理'],
  },
  {
    title: '数据库 RDS',
    summary: '企业级数据库服务，支持多引擎',
    description: '提供MySQL、PostgreSQL、SQL Server等多种数据库引擎，支持读写分离、自动备份、性能监控。',
    image: screenshotsFeatures2,
    icon: CircleStackIcon,
    metrics: [
      { label: '数据库引擎', value: '10+' },
      { label: '备份保留', value: '730天' },
      { label: '性能提升', value: '5倍' },
    ],
    features: ['多引擎支持', '自动备份', '读写分离', '性能优化'],
  },
  {
    title: '安全防护',
    summary: '全方位安全防护，7×24小时监控',
    description: '提供DDoS防护、Web应用防火墙、SSL证书、安全审计等全方位安全解决方案。',
    image: screenshotVatReturns3,
    icon: ShieldCheckIcon,
    metrics: [
      { label: '防护能力', value: '1Tbps+' },
      { label: '响应时间', value: '<1分钟' },
      { label: '安全等级', value: '等保三级' },
    ],
    features: ['DDoS防护', 'WAF防火墙', 'SSL证书', '安全审计'],
  },
]

/**
 * PrimaryFeatures - 企业级云计算产品核心功能展示组件
 *
 * 采用现代化B端企业设计理念，突出数据与服务能力：
 * 1) 设计风格：蓝白色调的现代企业风格，体现专业性与科技感
 * 2) 布局结构：卡片式网格布局，信息层次分明
 * 3) 视觉层次：合理运用留白，突出核心数据指标
 * 4) 交互体验：简洁的悬停效果，符合B端产品调性
 * 5) 响应式设计：完美适配各种设备尺寸
 *
 * @returns JSX.Element - 渲染的核心功能区域
 */
export function PrimaryFeatures() {
  // 当前选中的功能索引
  const [selectedFeature, setSelectedFeature] = useState<number>(0)

  return (
    <section
      id="features"
      aria-label="企业级云计算核心功能"
      className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24"
      style={{
        fontFamily: 'pingfang SC, helvetica neue, arial, hiragino sans gb, microsoft yahei ui, microsoft yahei, simsun, sans-serif',
        background: '#f7f8fb'
      }}
    >
      <div className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8" style={{ maxWidth: '1800px' }}>
        {/* 标题区域 */}
        <div className="text-left mb-6 sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            <span className="text-blue-600">数据驱动</span>的云服务能力
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl leading-relaxed">
            基于多年技术积累，为企业提供稳定可靠的云计算基础设施，助力数字化转型与业务创新。选择我们的云计算解决方案，您可以轻松构建具备以下优势的计算资源。
          </p>
        </div>

        {/* 功能导航卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 px-1 sm:px-0">
          {features.map((feature, index) => (
            <button
              key={feature.title}
              onClick={() => setSelectedFeature(index)}
              className={clsx(
                'group relative p-4 sm:p-6 bg-white border border-gray-200 transition-all duration-300 text-left',
                'hover:-translate-y-1 active:scale-95 touch-manipulation',
                selectedFeature === index
                  ? ''
                  : ''
              )}
            >
              {/* 图标与标题 */}
              <div className="flex items-start sm:items-center mb-3 sm:mb-4">
                <div className={clsx(
                  'flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 mr-3 sm:mr-4 transition-colors duration-300 flex-shrink-0',
                  selectedFeature === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'
                )}>
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-gray-900 text-base sm:text-lg mb-1 truncate">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 line-clamp-2">
                    {feature.summary}
                  </p>
                </div>
              </div>

              {/* 核心指标 */}
              <div className="space-y-1.5 sm:space-y-2">
                {feature.metrics.slice(0, 2).map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex justify-between items-center">
                    <span className="text-xs sm:text-sm text-gray-600 truncate">{metric.label}</span>
                    <span className="font-semibold text-blue-600 text-xs sm:text-sm ml-2 flex-shrink-0">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* 选中指示器 */}
              {selectedFeature === index && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* 详细内容展示区域 */}
        <div className="bg-white border border-gray-200 overflow-hidden mx-1 sm:mx-0">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* 左侧：图片展示 */}
            <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 order-2 lg:order-1 overflow-hidden flex items-center justify-center">
               <Image
                 src={features[selectedFeature].image}
                 alt={`${features[selectedFeature].title}功能展示`}
                 fill
                 className="object-cover object-center"
                 sizes="(min-width: 1024px) 50vw, 100vw"
               />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent" />
            </div>

            {/* 右侧：详细信息 */}
            <div className="p-6 sm:p-8 lg:p-12 order-1 lg:order-2">
              <div className="flex items-start sm:items-center mb-4 sm:mb-6">
                <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 text-white mr-3 sm:mr-4 flex-shrink-0">
                  {React.createElement(features[selectedFeature].icon, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">
                    {features[selectedFeature].title}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm sm:text-base">
                    {features[selectedFeature].summary}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 sm:mb-8 text-sm sm:text-base">
                {features[selectedFeature].description}
              </p>

              {/* 核心特性列表 */}
              <div className="mb-6 sm:mb-8">
                <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-base sm:text-lg">核心特性</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                  {features[selectedFeature].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 sm:w-5 sm:h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <button className="flex-1 bg-blue-600 text-white px-4 sm:px-6 py-3 sm:py-3 font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors duration-200 flex items-center justify-center text-sm sm:text-base touch-manipulation">
                  立即使用
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
                <button className="px-4 sm:px-6 py-3 sm:py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 active:bg-gray-100 transition-colors duration-200 text-sm sm:text-base touch-manipulation">
                  了解更多
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
