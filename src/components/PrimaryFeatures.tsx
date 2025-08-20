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
      className="relative bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-24"
    >
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
          <div className="absolute top-20 right-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-blue-600/3 rounded-full blur-3xl" />
        </div>
      </div>

      <Container className="relative">
        {/* 标题区域 */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 border border-blue-100 rounded-full text-blue-700 text-sm font-medium mb-6">
            <CheckCircleIcon className="w-4 h-4 mr-2" />
            企业级云计算解决方案
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">数据驱动</span>的云服务能力
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            基于多年技术积累，为企业提供稳定可靠的云计算基础设施，
            <br className="hidden sm:block" />
            助力数字化转型与业务创新
          </p>
        </div>

        {/* 功能导航卡片 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <button
              key={feature.title}
              onClick={() => setSelectedFeature(index)}
              className={clsx(
                'group relative p-6 bg-white border-2 transition-all duration-300 text-left',
                'hover:shadow-lg hover:-translate-y-1',
                selectedFeature === index
                  ? 'border-gray-200'
                  : 'border-gray-200'
              )}
            >
              {/* 图标与标题 */}
              <div className="flex items-center mb-4">
                <div className={clsx(
                  'flex items-center justify-center w-12 h-12 rounded-lg mr-4 transition-colors duration-300',
                  selectedFeature === index
                    ? 'bg-blue-500 text-white'
                    : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100'
                )}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {feature.summary}
                  </p>
                </div>
              </div>

              {/* 核心指标 */}
              <div className="space-y-2">
                {feature.metrics.slice(0, 2).map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">{metric.label}</span>
                    <span className="font-semibold text-blue-600">{metric.value}</span>
                  </div>
                ))}
              </div>

              {/* 选中指示器 */}
              {selectedFeature === index && (
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-blue-500 rounded-full" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* 详细内容展示区域 */}
        <div className="bg-white border border-gray-200 shadow-xl overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* 左侧：图片展示 */}
            <div className="relative h-64 sm:h-80 lg:h-96">
              <Image
                src={features[selectedFeature].image}
                alt={`${features[selectedFeature].title}功能展示`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-transparent" />
            </div>

            {/* 右侧：详细信息 */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center mb-6">
                <div className="flex items-center justify-center w-16 h-16 bg-blue-500 text-white rounded-lg mr-4">
                  {React.createElement(features[selectedFeature].icon, { className: "w-8 h-8" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {features[selectedFeature].title}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {features[selectedFeature].summary}
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                {features[selectedFeature].description}
              </p>



              {/* 核心特性列表 */}
              <div className="mb-8">
                <h4 className="font-semibold text-gray-900 mb-4">核心特性</h4>
                <div className="grid grid-cols-2 gap-3">
                  {features[selectedFeature].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex space-x-4">
                <button className="flex-1 bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                  立即使用
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors duration-200">
                  了解更多
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
