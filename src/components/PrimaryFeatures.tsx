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
const screenshotsFeatures = '/images/screenshots/ltb4.png'
const screenshotsFeatures1 = '/images/screenshots/Productdisplay.jpg'
const screenshotsFeatures2 = '/images/screenshots/Productdisplay2.jpg'
const screenshotVatReturns3 = '/images/screenshots/Productdisplay6.jpg'

/**
 * 功能特性数据配置
 * 包含图标、标题、描述、核心指标等信息
 */
const features = [
  {
    title: '电签POS机',
    summary: '智能电子签名，安全便捷收款',
    description:
      '集成先进的电子签名技术，支持多种支付方式，为商户提供安全、快速的收款体验。内置智能风控系统，实时监控交易安全，确保每一笔交易的可靠性。',
    icon: CpuChipIcon,
    image: screenshotsFeatures,
    metrics: [
      { label: '交易成功率', value: '99.9%' },
      { label: '平均响应时间', value: '< 2s' },
      { label: '支持支付方式', value: '15+' },
      { label: '日处理能力', value: '100万+' },
    ],
    features: [
      '支持银联、微信、支付宝等主流支付方式',
      '内置高清触摸屏，操作简单直观',
      '4G/WiFi双网络，确保连接稳定',
      '电子签名防篡改，交易记录可追溯',
      '实时到账，资金周转更灵活',
      '支持会员管理和营销活动',
    ],
  },
  {
    title: '移动收款',
    summary: '随时随地，移动支付新体验',
    description:
      '基于移动互联网技术，为商户提供便携式收款解决方案。无论是线下门店还是移动摊位，都能轻松实现快速收款，提升客户支付体验。',
    icon: CloudIcon,
    image: screenshotsFeatures1,
    metrics: [
      { label: '移动覆盖率', value: '99.8%' },
      { label: '离线支持', value: '支持' },
      { label: '设备兼容性', value: '100%' },
      { label: '用户满意度', value: '98.5%' },
    ],
    features: [
      '支持iOS/Android双平台应用',
      '蓝牙连接，即插即用',
      '离线交易支持，网络中断不影响收款',
      '语音播报，收款状态实时提醒',
      '云端数据同步，多设备数据共享',
      '丰富的数据报表和分析功能',
    ],
  },
  {
    title: '聚合支付',
    summary: '一码通用，多渠道聚合收款',
    description:
      '整合多种支付渠道，为商户提供统一的收款入口。一个二维码即可支持所有主流支付方式，简化收款流程，提升运营效率。',
    icon: CircleStackIcon,
    image: screenshotsFeatures2,
    metrics: [
      { label: '支付渠道', value: '20+' },
      { label: '聚合成功率', value: '99.95%' },
      { label: '结算周期', value: 'T+1' },
      { label: '手续费率', value: '0.38%起' },
    ],
    features: [
      '支持微信、支付宝、银联等20+支付渠道',
      '统一对账，简化财务管理',
      '智能路由，自动选择最优支付通道',
      '实时风控，保障交易安全',
      '灵活的费率配置和分润管理',
      '完善的API接口，支持系统集成',
    ],
  },
  {
    title: 'POS机安全',
    summary: '银行级安全，全方位风险防护',
    description:
      '采用银行级安全标准，多重加密技术保护交易数据。建立完善的风控体系，实时监控异常交易，为商户和消费者提供安全可靠的支付环境。',
    icon: ShieldCheckIcon,
    image: screenshotVatReturns3,
    metrics: [
      { label: '安全等级', value: 'PCI DSS' },
      { label: '加密强度', value: 'AES-256' },
      { label: '风控准确率', value: '99.9%' },
      { label: '安全认证', value: '10+' },
    ],
    features: [
      'PCI DSS Level 1安全认证',
      '端到端加密，数据传输安全可靠',
      '实时风控引擎，智能识别异常交易',
      '多重身份验证，防止非法操作',
      '定期安全更新，持续提升防护能力',
      '7×24小时安全监控服务',
    ],
  },
]

/**
 * PrimaryFeatures - POS机业务产品核心功能展示组件
 *
 * 采用现代化B端企业设计理念，突出支付与服务能力：
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
      aria-label="POS机业务核心功能"
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
            <span className="text-blue-600">安全可靠</span>支付解决方案
          </h2>
          <p className="max-w-4xl text-sm leading-relaxed text-gray-600 sm:text-base md:text-lg lg:text-xl">
            基于多年支付行业经验，为商户提供安全可靠的支付解决方案，助力数字经营与业务增长。选择我们的支付产品，您可以轻松构建具备以下优势的支付收款系统。
          </p>
        </div>

        {/* 功能导航卡片 */}
        <div className="mb-12 grid grid-cols-1 gap-4 px-1 sm:mb-16 sm:grid-cols-2 sm:gap-6 sm:px-0 lg:grid-cols-4">
          {features.map((feature, index) => {
            return (
              <button
                key={feature.title}
                onClick={() => setSelectedFeature(index)}
                className={clsx(
                  'group relative p-4 text-left transition-all duration-300 sm:p-6',
                  'touch-manipulation hover:-translate-y-1 active:scale-95',
                  'rounded border-2 border-white overflow-hidden', // 参考样式：2px白色边框，4px圆角
                  'bg-gradient-to-b from-white to-[#f3f5f8]', // 参考样式：从白色到浅灰色的垂直渐变
                  'shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)]', // 参考样式：蓝色阴影效果
                )}
              >
                {/* 图标与标题 */}
                <div className="mb-3 flex items-start sm:mb-4 sm:items-center">
                  <div
                    className={clsx(
                      'mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center transition-colors duration-300 sm:mr-4 sm:h-12 sm:w-12 rounded-lg',
                      selectedFeature === index
                        ? 'bg-white/90 text-gray-800 shadow-md'
                        : 'bg-white/80 text-gray-700 group-hover:bg-white/90',
                    )}
                  >
                    <feature.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className={clsx(
                      'mb-1 truncate text-base font-semibold sm:text-lg transition-colors duration-300',
                      selectedFeature === index ? 'text-blue-600' : 'text-gray-900'
                    )}>
                      {feature.title}
                    </h3>
                    <p className="line-clamp-2 text-xs text-gray-700 sm:text-sm">
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
                      <span className="truncate text-xs text-gray-700 sm:text-sm">
                        {metric.label}
                      </span>
                      <span className="ml-2 flex-shrink-0 text-xs font-semibold text-gray-900 sm:text-sm">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 选中指示器 */}
                {selectedFeature === index && (
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                    <div className="h-2.5 w-2.5 rounded-full bg-white shadow-md sm:h-3 sm:w-3" />
                  </div>
                )}
              </button>
            )
          })}
        </div>

        {/* 详细内容展示区域 - 左右布局 */}
        <div className="mx-1 overflow-hidden border border-gray-200 bg-white rounded-lg shadow-sm sm:mx-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* 左侧：文案内容区域 */}
            <div className="flex flex-col justify-center px-6 py-4 lg:px-8 lg:py-6">
              <div className="max-w-xl">
                {/* 标题区域 */}
                <div className="mb-6 flex items-center">
                  <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                    {React.createElement(features[selectedFeature].icon, {
                      className: 'w-6 h-6 text-white',
                    })}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 lg:text-3xl">
                      {features[selectedFeature].title}
                    </h3>
                    <p className="text-base text-blue-600 font-medium">
                      {features[selectedFeature].summary}
                    </p>
                  </div>
                </div>

                {/* 产品描述 */}
                <p className="mb-8 text-lg text-gray-700 leading-relaxed">
                  {features[selectedFeature].description}
                </p>

                {/* 核心特性列表 */}
                <div className="mb-8 space-y-3">
                  {features[selectedFeature].features.slice(0, 4).map((feature, index) => (
                    <div key={index} className="flex items-start group">
                      <div className="mr-3 mt-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                        <CheckCircleIcon className="h-3 w-3 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <p className="text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                          {feature}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 操作按钮 */}
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <button className="group relative overflow-hidden px-8 py-3 bg-blue-600 text-white font-medium text-base transition-colors duration-200 hover:bg-blue-700 active:bg-blue-800 rounded-lg">
                    <span className="relative z-10">立即体验</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                  <button className="group border border-gray-300 text-gray-700 hover:border-blue-300 hover:text-blue-600 px-8 py-3 font-medium text-base transition-colors duration-200 rounded-lg flex items-center justify-center">
                    了解更多
                    <ArrowRightIcon className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </div>

            {/* 右侧：产品图片区域 */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center overflow-hidden">
              <div className="relative w-full h-full">
                <Image
                  src={features[selectedFeature].image}
                  alt={`${features[selectedFeature].title}产品截图`}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                  unoptimized
                />
                {/* 装饰性元素 */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-600/5 rounded-full blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
