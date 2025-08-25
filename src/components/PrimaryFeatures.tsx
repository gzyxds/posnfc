'use client'

import React, { useState, useEffect } from 'react'
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

/**
 * 时间显示组件 - 避免SSR水合错误
 * 只在客户端渲染当前时间
 */
function TimeDisplay() {
  const [time, setTime] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const updateTime = () => {
      setTime(new Date().toLocaleTimeString())
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) {
    return <span>--:--:--</span>
  }

  return <span>{time}</span>
}

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
    description:
      '提供多种规格的云服务器实例，支持CPU、内存、存储的灵活配置，实现业务负载的智能调度与自动扩展。',
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
    title: '代理IP',
    summary: '长时效住宅IP，安全稳定',
    description:
      '提供长时效住宅IP，确保业务安全与稳定性，支持HTTP、HTTPS、FTP等协议。',
    image: screenshotsFeatures1,
    icon: ShieldCheckIcon,
    metrics: [
      { label: 'IP类型', value: '住宅IP' },
      { label: 'IP数量', value: '无限制' },
      { label: '支持协议', value: 'HTTP、HTTPS、FTP等' },
    ],
    features: ['长时效住宅IP', '安全稳定', '支持多种协议'],
  },
  {
    title: '电商云',
    summary: '纯净IP，更符合跨境卖家需求的云主机',
    description:
      '提供纯净IP，更符合跨境卖家需求的云主机，支持HTTP、HTTPS、FTP等协议。',
    image: screenshotsFeatures2,
    icon: CircleStackIcon,
    metrics: [
      { label: 'IP类型', value: '纯净IP' },
      { label: 'IP数量', value: '无限制' },
      { label: '支持协议', value: 'HTTP、HTTPS、FTP等' },
    ],
    features: ['纯净IP', '支持多种协议', '安全稳定'],
  },
  {
    title: '安全防护',
    summary: '全方位安全防护，7×24小时监控',
    description:
      '提供DDoS防护、Web应用防火墙、SSL证书、安全审计等全方位安全解决方案。',
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
        fontFamily:
          'pingfang SC, helvetica neue, arial, hiragino sans gb, microsoft yahei ui, microsoft yahei, simsun, sans-serif',
        background: '#f7f8fb',
      }}
    >
      <div
        className="mx-auto px-3 sm:px-4 md:px-6 lg:px-8"
        style={{ maxWidth: '1800px' }}
      >
        {/* 标题区域 */}
        <div className="mb-6 text-left sm:mb-8 md:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="mb-3 text-xl font-bold text-gray-900 sm:mb-4 sm:text-2xl md:mb-5 md:text-3xl lg:mb-6 lg:text-4xl xl:text-5xl">
            <span className="text-blue-600">数据驱动</span>的云服务能力
          </h2>
          <p className="max-w-4xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg lg:text-xl">
            基于多年技术积累，为企业提供稳定可靠的云计算基础设施，助力数字化转型与业务创新。选择我们的云计算解决方案，您可以轻松构建具备以下优势的计算资源。
          </p>
        </div>

        {/* 功能导航卡片 */}
        <div className="mb-12 grid grid-cols-1 gap-4 px-1 sm:mb-16 sm:grid-cols-2 sm:gap-6 sm:px-0 lg:grid-cols-4">
          {features.map((feature, index) => (
            <button
              key={feature.title}
              onClick={() => setSelectedFeature(index)}
              className={clsx(
                'group relative border border-gray-200 bg-white p-4 text-left transition-all duration-300 sm:p-6',
                'touch-manipulation hover:-translate-y-1 active:scale-95',
                selectedFeature === index ? '' : '',
              )}
            >
              {/* 图标与标题 */}
              <div className="mb-3 flex items-start sm:mb-4 sm:items-center">
                <div
                  className={clsx(
                    'mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center transition-colors duration-300 sm:mr-4 sm:h-12 sm:w-12',
                    selectedFeature === index
                      ? 'bg-blue-500 text-white'
                      : 'bg-blue-50 text-blue-600 group-hover:bg-blue-100',
                  )}
                >
                  <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 truncate text-base font-semibold text-gray-900 sm:text-lg">
                    {feature.title}
                  </h3>
                  <p className="line-clamp-2 text-xs text-gray-500 sm:text-sm">
                    {feature.summary}
                  </p>
                </div>
              </div>

              {/* 核心指标 */}
              <div className="space-y-1.5 sm:space-y-2">
                {feature.metrics.slice(0, 2).map((metric, metricIndex) => (
                  <div
                    key={metricIndex}
                    className="flex items-center justify-between"
                  >
                    <span className="truncate text-xs text-gray-600 sm:text-sm">
                      {metric.label}
                    </span>
                    <span className="ml-2 flex-shrink-0 text-xs font-semibold text-blue-600 sm:text-sm">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* 选中指示器 */}
              {selectedFeature === index && (
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                  <div className="h-2.5 w-2.5 rounded-full bg-blue-500 sm:h-3 sm:w-3" />
                </div>
              )}
            </button>
          ))}
        </div>

        {/* 详细内容展示区域 */}
        <div className="mx-1 overflow-hidden border border-gray-200 bg-white sm:mx-0">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* 左侧：模拟界面 */}
            <div className="relative order-2 hidden h-48 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 sm:h-64 md:h-80 lg:order-1 lg:flex lg:h-96">
              {/* 模拟界面容器 */}
              <div className="flex h-full w-full flex-col border border-gray-200 bg-white/80 backdrop-blur-sm">
                {/* 模拟界面头部 */}
                <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-red-500"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="font-mono text-xs text-gray-500">
                    {features[selectedFeature].title}
                  </div>
                  <div className="w-16"></div>
                </div>

                {/* 模拟界面标题栏 */}
                <div className="border-b border-blue-200 bg-blue-50 px-4 py-3">
                  <div className="flex items-center">
                    <div className="mr-3 flex h-6 w-6 items-center justify-center rounded bg-blue-500">
                      {React.createElement(features[selectedFeature].icon, {
                        className: 'w-4 h-4 text-white',
                      })}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900">
                        {features[selectedFeature].title}
                      </div>
                      <div className="text-xs text-blue-600">
                        {features[selectedFeature].summary}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 模拟功能模块 */}
                <div className="flex-1 space-y-3 p-4">
                  <div className="grid grid-cols-2 gap-3">
                    {features[selectedFeature].features
                      .slice(0, 4)
                      .map((feature, index) => (
                        <div
                          key={index}
                          className="rounded-lg border border-gray-200 bg-white p-3 transition-shadow hover:shadow-sm"
                        >
                          <div className="mb-2 flex items-center">
                            <div className="mr-2 h-2 w-2 rounded-full bg-green-500"></div>
                            <div className="truncate text-xs font-medium text-gray-700">
                              {feature.split(' ')[0]}
                            </div>
                          </div>
                          <div className="h-1.5 w-full rounded-full bg-gray-200">
                            <div
                              className="h-1.5 rounded-full bg-blue-500 transition-all duration-1000 ease-out"
                              style={{
                                width: `${Math.min(85 + index * 5, 100)}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>

                {/* 模拟状态栏 */}
                <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-4 py-2">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <div className="mr-1 h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
                      <span className="text-xs text-gray-600">运行中</span>
                    </div>
                    <div className="text-xs text-gray-500">CPU: 45%</div>
                    <div className="text-xs text-gray-500">内存: 2.1GB</div>
                  </div>
                  <div className="font-mono text-xs text-gray-400">
                    <TimeDisplay />
                  </div>
                </div>
              </div>
            </div>

            {/* 右侧：详细信息 */}
            <div className="order-1 p-6 sm:p-8 lg:order-2 lg:p-12">
              <div className="mb-4 flex items-start sm:mb-6 sm:items-center">
                <div className="mr-3 flex h-12 w-12 flex-shrink-0 items-center justify-center bg-blue-500 text-white sm:mr-4 sm:h-16 sm:w-16">
                  {React.createElement(features[selectedFeature].icon, {
                    className: 'w-6 h-6 sm:w-8 sm:h-8',
                  })}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="mb-1 text-xl font-bold text-gray-900 sm:mb-2 sm:text-2xl">
                    {features[selectedFeature].title}
                  </h3>
                  <p className="text-sm font-medium text-blue-600 sm:text-base">
                    {features[selectedFeature].summary}
                  </p>
                </div>
              </div>

              <p className="mb-6 text-sm leading-relaxed text-gray-600 sm:mb-8 sm:text-base">
                {features[selectedFeature].description}
              </p>

              {/* 核心特性列表 */}
              <div className="mb-6 sm:mb-8">
                <h4 className="mb-3 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg">
                  核心特性
                </h4>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-3">
                  {features[selectedFeature].features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircleIcon className="mr-2 h-4 w-4 flex-shrink-0 text-green-500 sm:h-5 sm:w-5" />
                      <span className="text-xs text-gray-600 sm:text-sm">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                <button className="flex flex-1 touch-manipulation items-center justify-center bg-blue-600 px-4 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 active:bg-blue-800 sm:px-6 sm:py-3 sm:text-base">
                  立即使用
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
                <button className="touch-manipulation border border-gray-300 px-4 py-3 text-sm font-medium text-gray-700 transition-colors duration-200 hover:bg-gray-50 active:bg-gray-100 sm:px-6 sm:py-3 sm:text-base">
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
