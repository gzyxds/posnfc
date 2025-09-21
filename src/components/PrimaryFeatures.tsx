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
 * POS机业务产品功能展示，突出支付与服务能力
 */
const features: Feature[] = [
  {
    title: '电签POS机',
    summary: '高性能电签POS机，支持秒级交易处理',
    description:
      '提供多种型号的电签POS机，支持银行卡、扫码、NFC等多种支付方式，实现商户收款的智能处理与安全保障。',
    image: screenshotsFeatures,
    icon: CpuChipIcon,
    metrics: [
      { label: 'POS机型号', value: '50+' },
      { label: '服务城市', value: '300+' },
      { label: '交易处理', value: '秒级' },
      { label: '今日交易', value: '1,256' },
      { label: '交易金额', value: '¥18.7万' },
      { label: '成功率', value: '99.9%' },
    ],
    features: ['多型号POS机', '智能收款', '交易安全', '24小时服务'],
  },
  {
    title: '移动收款',
    summary: '便捷移动收款，随时随地收单',
    description:
      '提供便捷的移动收款解决方案，支持手机POS、码牌收款等多种移动支付方式，确保商户收款便捷安全。',
    image: screenshotsFeatures1,
    icon: ShieldCheckIcon,
    metrics: [
      { label: '收款方式', value: '多种' },
      { label: '支持银行', value: '无限制' },
      { label: '支持支付', value: '银联、微信、支付宝等' },
      { label: '移动交易', value: '856' },
      { label: '移动金额', value: '¥12.3万' },
      { label: '到账速度', value: 'T+0' },
    ],
    features: ['手机POS', '码牌收款', '安全稳定', '即时到账'],
  },
  {
    title: '聚合支付',
    summary: '一码多付，更符合商户需求的支付解决方案',
    description:
      '提供聚合支付解决方案，支持一码多付，更符合商户需求的支付服务，支持银联、微信、支付宝等多种支付方式。',
    image: screenshotsFeatures2,
    icon: CircleStackIcon,
    metrics: [
      { label: '支付方式', value: '聚合支付' },
      { label: '支持渠道', value: '无限制' },
      { label: '支付类型', value: '银联、微信、支付宝等' },
      { label: '聚合交易', value: '2,148' },
      { label: '聚合金额', value: '¥35.6万' },
      { label: '渠道覆盖', value: '100%' },
    ],
    features: ['一码多付', '多渠道支付', '安全稳定', '实时对账'],
  },
  {
    title: 'POS机安全',
    summary: '全方位安全防护，7×24小时监控',
    description:
      '提供交易加密、风控系统、安全认证等全方位安全解决方案，确保商户收款安全可靠。',
    image: screenshotVatReturns3,
    icon: ShieldCheckIcon,
    metrics: [
      { label: '安全等级', value: '银联认证' },
      { label: '响应时间', value: '<0.3秒' },
      { label: '防护能力', value: '金融级' },
      { label: '风控拦截', value: '99.8%' },
      { label: '安全事件', value: '0' },
      { label: '监控覆盖', value: '7×24' },
    ],
    features: ['交易加密', '风控系统', '安全认证', '实时监控'],
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
            // 为每个卡片定义不同的渐变颜色
            const gradientClasses = [
              'bg-gradient-to-r from-blue-500/5 to-transparent', // 电签POS机 - 蓝色渐变
              'bg-gradient-to-r from-emerald-500/5 to-transparent', // 移动收款 - 绿色渐变
              'bg-gradient-to-r from-[#00c250]/5 to-transparent', // 聚合支付 - 绿色渐变
              'bg-gradient-to-r from-orange-500/5 to-transparent', // POS机安全 - 橙色渐变
            ]

            return (
              <button
                key={feature.title}
                onClick={() => setSelectedFeature(index)}
                className={clsx(
                  'group relative border border-gray-200 p-4 text-left transition-all duration-300 sm:p-6',
                  'touch-manipulation hover:-translate-y-1 active:scale-95',
                  'rounded-md overflow-hidden', // 4px 圆角，添加overflow-hidden确保渐变不溢出
                  gradientClasses[index], // 应用对应的渐变背景
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
                    <h3 className="mb-1 truncate text-base font-semibold text-gray-900 sm:text-lg">
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

        {/* 详细内容展示区域 */}
        <div className="mx-1 overflow-hidden border border-gray-200 bg-white rounded-lg shadow-sm sm:mx-0">
          <div className="grid gap-0 lg:grid-cols-2">
            {/* 左侧：模拟界面 */}
            <div className="relative order-2 hidden h-48 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/50 sm:h-64 md:h-80 lg:order-1 lg:flex lg:h-[32rem]">
              {/* 背景装饰元素 */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5"></div>
              <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-gradient-to-br from-blue-400/10 to-purple-400/10 blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-gradient-to-br from-emerald-400/10 to-blue-400/10 blur-xl"></div>

              {/* 模拟界面容器 */}
              <div className="relative z-10 flex h-full w-full flex-col border border-transparent bg-white/90 backdrop-blur-sm shadow-lg overflow-hidden">
                {/* 模拟界面头部 */}
                <div className="flex-shrink-0 border-b border-transparent bg-gradient-to-r from-gray-50 to-gray-100/80 px-4 py-3">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500 shadow-sm hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500 shadow-sm hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500 shadow-sm hover:scale-110 transition-transform duration-300 cursor-pointer"></div>
                    </div>
                    <div className="font-mono text-xs text-gray-600 font-medium hover:text-blue-600 transition-colors duration-300">
                      {features[selectedFeature].title} 控制台
                    </div>
                    <div className="flex items-center space-x-1 group">
                      <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse group-hover:animate-bounce"></div>
                      <span className="text-xs text-green-600 font-medium group-hover:text-green-700 transition-colors duration-300">在线</span>
                    </div>
                  </div>

                  {/* 实时状态指示器 */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1 group">
                        <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-gray-600 group-hover:text-blue-600 transition-colors duration-300">连接数: </span>
                        <span className="font-mono font-semibold text-blue-600">1,247</span>
                      </div>
                      <div className="flex items-center space-x-1 group">
                        <div className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" style={{animationDelay: '0.5s'}}></div>
                        <span className="text-gray-600 group-hover:text-purple-600 transition-colors duration-300">TPS: </span>
                        <span className="font-mono font-semibold text-purple-600">89.3</span>
                      </div>
                      <div className="flex items-center space-x-1 group">
                        <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" style={{animationDelay: '1s'}}></div>
                        <span className="text-gray-600 group-hover:text-orange-600 transition-colors duration-300">响应: </span>
                        <span className="font-mono font-semibold text-orange-600">45ms</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex space-x-1">
                        <div className="w-1 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                        <div className="w-1 h-4 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-1 h-2 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                        <div className="w-1 h-5 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                        <div className="w-1 h-3 bg-emerald-500 rounded-full animate-pulse" style={{animationDelay: '0.8s'}}></div>
                      </div>
                      <span className="text-gray-500 font-medium">活动监控</span>
                    </div>
                  </div>
                </div>

                {/* 模拟界面标题栏 */}
                <div className="flex-shrink-0 border-b border-transparent bg-gradient-to-r from-blue-50 to-indigo-50/80 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-md">
                        {React.createElement(features[selectedFeature].icon, {
                          className: 'w-4 h-4 text-white',
                        })}
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">
                          {features[selectedFeature].title}
                        </div>
                        <div className="text-xs text-blue-600 font-medium">
                          {features[selectedFeature].summary}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></div>
                      <span className="text-xs text-emerald-600 font-medium">运行中</span>
                    </div>
                  </div>
                </div>

                {/* 核心指标卡片 */}
                <div className="flex-shrink-0 px-4 py-3 bg-gradient-to-r from-gray-50/50 to-white border-b border-gray-100/60">
                  <div className="grid grid-cols-3 gap-3">
                    {features[selectedFeature].metrics.slice(3, 6).map((metric, index) => (
                      <div key={index} className="group text-center p-2 rounded-lg hover:bg-blue-50/50 transition-all duration-300">
                        <div className="relative">
                          <div className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors duration-300">
                            {metric.value}
                          </div>
                          {/* 数据变化指示器 */}
                          <div className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-emerald-500 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        <div className="text-xs text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                          {metric.label}
                        </div>
                        {/* 数据趋势线 */}
                        <div className="mt-1 h-0.5 w-full bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: `${Math.min(60 + index * 15, 95)}%`,
                              animationDelay: `${index * 200}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 模拟功能模块 */}
                <div className="flex-1 space-y-3 p-4 bg-gradient-to-b from-white to-gray-50/30 relative min-h-0">
                  {/* 数据流动背景动画 */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-1/4 left-0 w-1 h-8 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
                    <div className="absolute top-1/2 right-0 w-1 h-6 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-6 h-1 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 relative z-10">
                    {features[selectedFeature].features
                      .slice(0, 4)
                      .map((feature, index) => {
                        const progressValue = Math.min(75 + index * 8, 98);
                        const statusColors = ['emerald', 'blue', 'purple', 'orange'];
                        const currentColor = statusColors[index % statusColors.length];

                        return (
                          <div
                            key={index}
                            className="group rounded-lg border border-gray-200/60 bg-white/80 p-3 transition-all duration-300 hover:shadow-lg hover:border-blue-300/60 hover:bg-white hover:scale-105 relative overflow-hidden"
                          >
                            {/* 悬停时的光效 */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <div className="mb-2 flex items-center justify-between relative z-10">
                              <div className="flex items-center">
                                <div className={`mr-2 h-2 w-2 rounded-full bg-${currentColor}-500 shadow-sm animate-pulse`}></div>
                                <div className="truncate text-xs font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                                  {feature.split(' ')[0]}
                                </div>
                              </div>
                              <div className="flex items-center space-x-1">
                                <div className="text-xs text-gray-500 font-mono group-hover:text-blue-600 transition-colors duration-300">
                                  {progressValue}%
                                </div>
                                {/* 实时状态指示器 */}
                                <div className={`h-1.5 w-1.5 rounded-full bg-${currentColor}-500 animate-pulse`}></div>
                              </div>
                            </div>

                            {/* 进度条容器 */}
                            <div className="h-2 w-full rounded-full bg-gray-200/80 overflow-hidden relative">
                              {/* 主进度条 */}
                              <div
                                className={`h-2 rounded-full bg-gradient-to-r from-${currentColor}-500 to-${currentColor}-600 transition-all duration-2000 ease-out shadow-sm relative`}
                                style={{
                                  width: `${progressValue}%`,
                                }}
                              >
                                {/* 流光效果 */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                              </div>

                              {/* 背景脉冲效果 */}
                              <div className={`absolute inset-0 bg-${currentColor}-500/10 animate-pulse`} style={{animationDelay: `${index * 500}ms`}}></div>
                            </div>

                            <div className="mt-2 text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300 relative z-10">
                              {feature.split(' ').slice(1).join(' ')}
                            </div>

                            {/* 数据传输指示器 */}
                            <div className="absolute top-1 right-1 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <div className={`h-1 w-1 rounded-full bg-${currentColor}-500 animate-ping`}></div>
                              <div className={`h-1 w-1 rounded-full bg-${currentColor}-500 animate-ping`} style={{animationDelay: '0.2s'}}></div>
                              <div className={`h-1 w-1 rounded-full bg-${currentColor}-500 animate-ping`} style={{animationDelay: '0.4s'}}></div>
                            </div>
                          </div>
                        );
                      })}
                  </div>
                </div>

                {/* 模拟状态栏 */}
                <div className="flex-shrink-0 border-t border-transparent bg-gradient-to-r from-gray-50 to-gray-100/80 px-4 py-3">
                  {/* 主要状态信息 */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center group">
                        <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-emerald-500 shadow-sm"></div>
                        <span className="text-xs text-gray-700 font-medium group-hover:text-emerald-600 transition-colors duration-300">实时交易</span>
                      </div>
                      <div className="flex items-center space-x-1 group cursor-pointer">
                        <span className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors duration-300">交易</span>
                        <span className="font-mono font-semibold text-blue-600 group-hover:scale-110 transition-transform duration-300">156</span>
                        <span className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors duration-300">笔</span>
                        <div className="h-1 w-1 rounded-full bg-blue-500 animate-ping ml-1"></div>
                      </div>
                      <div className="flex items-center space-x-1 group cursor-pointer">
                        <span className="text-xs text-gray-600 group-hover:text-emerald-600 transition-colors duration-300">金额</span>
                        <span className="font-mono font-semibold text-emerald-600 group-hover:scale-110 transition-transform duration-300">¥8.7</span>
                        <span className="text-xs text-gray-600 group-hover:text-emerald-600 transition-colors duration-300">万</span>
                        <div className="h-1 w-1 rounded-full bg-emerald-500 animate-ping ml-1"></div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {/* 系统状态指示器 */}
                      <div className="flex items-center space-x-1 group">
                        <div className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                        <span className="text-xs text-gray-500 font-medium group-hover:text-blue-600 transition-colors duration-300">系统</span>
                      </div>
                      <div className="font-mono text-xs text-gray-500 hover:text-gray-700 transition-colors duration-300">
                        <TimeDisplay />
                      </div>
                    </div>
                  </div>

                  {/* 实时数据流 */}
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <span className="text-gray-500">CPU:</span>
                        <div className="w-8 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse" style={{width: '65%'}}></div>
                        </div>
                        <span className="font-mono text-gray-600">65%</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-gray-500">内存:</span>
                        <div className="w-8 h-1 bg-gray-200 rounded-full overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full animate-pulse" style={{width: '42%'}}></div>
                        </div>
                        <span className="font-mono text-gray-600">42%</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <span className="text-gray-500">网络:</span>
                        <div className="flex space-x-0.5">
                          <div className="w-0.5 h-2 bg-emerald-500 animate-pulse"></div>
                          <div className="w-0.5 h-3 bg-emerald-500 animate-pulse" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-0.5 h-2 bg-emerald-500 animate-pulse" style={{animationDelay: '0.2s'}}></div>
                          <div className="w-0.5 h-4 bg-emerald-500 animate-pulse" style={{animationDelay: '0.3s'}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">延迟:</span>
                      <span className="font-mono text-emerald-600 font-semibold">12ms</span>
                      <div className="h-1 w-1 rounded-full bg-emerald-500 animate-ping"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           {/* 左侧侧：详细信息 */}


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
                  立即申请
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
