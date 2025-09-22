'use client'

import React, { useState, useEffect, useCallback, useRef, useMemo } from 'react'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlayIcon,
  PauseIcon,
  XMarkIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  CreditCardIcon,
  ChartBarIcon,
  CpuChipIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '../Button'

/**
 * 现代化轮播数据接口
 * 支持多种背景类型和丰富的配置选项
 */
export interface ModernSlideData {
  /** 唯一标识符 */
  id: number
  /** 主标题 */
  title: string
  /** 副标题 */
  subtitle: string
  /** 详细描述 */
  description: string
  /** 背景图片URL（可选，用于渐变背景时可不设置） */
  backgroundImage?: string
  /** 产品图片URL（右侧显示的产品图片） */
  productImage?: string
  /** 按钮文本 */
  buttonText?: string
  /** 按钮链接 */
  buttonLink?: string
  /** 文本位置：左、中、右 */
  textPosition?: 'left' | 'center' | 'right'
  /** 自定义样式类名 */
  className?: string
  /** 渐变遮罩配置 */
  gradient?: {
    /** 渐变方向 */
    direction: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-br' | 'to-bl' | 'to-tr' | 'to-tl'
    /** 起始颜色 */
    from: string
    /** 中间颜色（可选） */
    via?: string
    /** 结束颜色 */
    to: string
    /** 透明度 */
    opacity?: number
  }
  /** 模拟界面配置（可选，如果设置则显示模拟界面而非产品图片） */
  mockInterface?: MockInterfaceConfig
}

/**
 * 模拟界面配置接口
 * 用于配置右侧显示的模拟POS系统界面
 */
export interface MockInterfaceConfig {
  /** 界面标题 */
  title: string
  /** 界面副标题 */
  subtitle: string
  /** 界面图标 */
  icon: React.ComponentType<{ className?: string }>
  /** 核心指标数据 */
  metrics: Array<{
    label: string
    value: string
    trend?: 'up' | 'down' | 'stable'
    color?: 'blue' | 'emerald' | 'purple' | 'orange'
  }>
  /** 功能模块数据 */
  features: Array<{
    name: string
    description: string
    progress: number
    status: 'active' | 'processing' | 'completed' | 'pending'
    color: 'emerald' | 'blue' | 'purple' | 'orange'
  }>
  /** 实时数据 */
  realTimeData: {
    transactions: number
    amount: string
    cpu: number
    memory: number
    network: 'excellent' | 'good' | 'fair' | 'poor'
    latency: string
  }
}

/**
 * 高端轮播组件属性接口
 * 提供完整的现代化轮播配置选项
 */
export interface VideoCarouselProps {
  /** 是否自动播放，默认true */
  autoPlay?: boolean
  /** 自动播放间隔时间（毫秒），默认5000ms */
  interval?: number
  /** 动画持续时间（毫秒），默认800ms */
  animationDuration?: number
  /** 是否显示进度条，默认true */
  showProgress?: boolean
  /** 是否显示播放控制按钮，默认true */
  showPlayButton?: boolean
  /** 是否显示导航箭头，默认true */
  showNavigation?: boolean
  /** 是否显示指示器圆点，默认true */
  showIndicators?: boolean
  /** 自定义高度配置，支持字符串或响应式对象 */
  height?:
    | string
    | {
        base?: string
        sm?: string
        md?: string
        lg?: string
        xl?: string
        '2xl'?: string
      }
  /** 主题风格：现代、经典、简约 */
  variant?: 'modern' | 'classic' | 'minimal'
  /** 色彩主题：深色、浅色、自动 */
  theme?: 'dark' | 'light' | 'auto'
  /** 是否启用视差滚动效果，默认false */
  parallax?: boolean
  /** 是否启用3D效果，默认false */
  enable3D?: boolean
  /** 自定义类名 */
  className?: string
  /** 自定义轮播数据，不提供则使用默认数据 */
  slides?: ModernSlideData[]
  /** 移动端断点阈值（像素），默认768px */
  mobileBreakpoint?: number
  /** 是否启用触摸滑动，默认true */
  enableTouch?: boolean
  /** 是否启用键盘导航，默认true */
  enableKeyboard?: boolean
  /** 是否启用鼠标滚轮控制，默认false */
  enableWheel?: boolean
  /** 是否显示文本模式按钮，默认true */
  textModeButton?: boolean
  /** 是否显示遮罩层，默认true */
  showOverlay?: boolean
  /** 自定义遮罩层类名 */
  overlayClassName?: string
  /** 自定义轮播数据（兼容旧版本） */
  customSlides?: any[]
  /** 强制图片模式，默认false */
  forceImageMode?: boolean
  /** 自定义动画缓动函数 */
  easing?: 'ease' | 'ease-in' | 'ease-out' | 'ease-in-out' | 'linear'
  /** 回调函数：幻灯片切换时触发 */
  onSlideChange?: (index: number) => void
  /** 回调函数：播放状态改变时触发 */
  onPlayStateChange?: (isPlaying: boolean) => void
}

/**
 * 默认轮播数据配置
 * 高端大气的POS机产品展示内容
 * 参考 Hero.tsx 的背景设计，添加现代化背景效果
 */
const defaultSlides: ModernSlideData[] = [
  {
    id: 1,
    title: '智能支付终端',
    subtitle: '全方位支付解决方案',
    description:
      '支持智能POS、扫码支付、刷脸支付、数字人民币等多种支付方式，为商户提供专业安全的收单服务，助力数字化转型转变',
    productImage: '/images/product/index.png',
    buttonText: '免费申请',
    buttonLink: '#',
    textPosition: 'left',
    // 参考 Hero.tsx 的背景设计 - 蓝色主题
    gradient: {
      direction: 'to-br',
      from: 'blue-50',
      via: 'indigo-50',
      to: 'white',
      opacity: 0.9,
    },
    className: 'relative isolate overflow-hidden',
    // 添加模拟界面配置
    mockInterface: {
      title: '智能支付系统',
      subtitle: '实时交易监控',
      icon: CreditCardIcon,
      metrics: [
        { label: '今日交易', value: '2,847', trend: 'up', color: 'blue' },
        { label: '交易金额', value: '¥156.8万', trend: 'up', color: 'emerald' },
        { label: '成功率', value: '99.8%', trend: 'stable', color: 'purple' },
      ],
      features: [
        { name: '扫码支付', description: '微信支付宝', progress: 98, status: 'active', color: 'emerald' },
        { name: '刷卡支付', description: '银联卡支付', progress: 95, status: 'active', color: 'blue' },
        { name: '刷脸支付', description: '生物识别', progress: 87, status: 'processing', color: 'purple' },
        { name: '数字货币', description: '央行DCEP', progress: 76, status: 'processing', color: 'orange' },
      ],
      realTimeData: {
        transactions: 156,
        amount: '8.7万',
        cpu: 65,
        memory: 42,
        network: 'excellent',
        latency: '12ms',
      },
    },
  },
  {
    id: 2,
    title: '移动收银专家',
    subtitle: '便捷高效的收款体验',
    description:
      '支持信用卡、储蓄卡、移动支付等多种收款方式，费率优惠，到账快速，为各行业商户提供专业的移动收银解决方案',
    productImage: '/images/product/智能屏.png',
    buttonText: '免费申请',
    buttonLink: '#',
    textPosition: 'left',
    // 参考 Hero.tsx 的背景设计 - 绿色主题
    gradient: {
      direction: 'to-br',
      from: 'emerald-50',
      via: 'green-50',
      to: 'white',
      opacity: 0.9,
    },
    className: 'relative isolate overflow-hidden',
    // 添加模拟界面配置
    mockInterface: {
      title: '移动收银系统',
      subtitle: '便携式收款终端',
      icon: ChartBarIcon,
      metrics: [
        { label: '日均订单', value: '1,234', trend: 'up', color: 'emerald' },
        { label: '收款金额', value: '¥89.2万', trend: 'up', color: 'blue' },
        { label: '到账速度', value: 'T+0', trend: 'stable', color: 'purple' },
      ],
      features: [
        { name: '银行卡', description: '信用卡储蓄卡', progress: 99, status: 'active', color: 'blue' },
        { name: '移动支付', description: '扫码收款', progress: 96, status: 'active', color: 'emerald' },
        { name: '会员管理', description: '客户积分', progress: 82, status: 'processing', color: 'purple' },
        { name: '数据分析', description: '经营报表', progress: 78, status: 'processing', color: 'orange' },
      ],
      realTimeData: {
        transactions: 89,
        amount: '5.2万',
        cpu: 58,
        memory: 38,
        network: 'good',
        latency: '15ms',
      },
    },
  },
  {
    id: 3,
    title: '聚合支付平台',
    subtitle: '一码通收多种支付',
    description:
      '整合微信、支付宝、银联等主流支付渠道，一个二维码即可收取所有支付方式，简化收款流程，提升用户体验',
    productImage: '/images/product/云银.png',
    buttonText: '免费申请',
    buttonLink: '#',
    textPosition: 'left',
    // 参考 Hero.tsx 的背景设计 - 紫色主题
    gradient: {
      direction: 'to-br',
      from: 'purple-50',
      via: 'violet-50',
      to: 'white',
      opacity: 0.9,
    },
    className: 'relative isolate overflow-hidden',
    // 添加模拟界面配置
    mockInterface: {
      title: '聚合支付平台',
      subtitle: '多渠道统一收款',
      icon: CpuChipIcon,
      metrics: [
        { label: '支付渠道', value: '15+', trend: 'stable', color: 'purple' },
        { label: '聚合订单', value: '3,567', trend: 'up', color: 'blue' },
        { label: '平台费率', value: '0.38%', trend: 'down', color: 'emerald' },
      ],
      features: [
        { name: '微信支付', description: '扫码收款', progress: 100, status: 'active', color: 'emerald' },
        { name: '支付宝', description: '花呗分期', progress: 98, status: 'active', color: 'blue' },
        { name: '银联云闪付', description: 'NFC支付', progress: 92, status: 'active', color: 'purple' },
        { name: '京东支付', description: '白条支付', progress: 85, status: 'processing', color: 'orange' },
      ],
      realTimeData: {
        transactions: 203,
        amount: '12.8万',
        cpu: 72,
        memory: 55,
        network: 'excellent',
        latency: '8ms',
      },
    },
  },
  {
    id: 4,
    title: '数字化经营',
    subtitle: '智慧商业新时代',
    description:
      '提供数据分析、营销工具、会员管理等增值服务，助力商户实现数字化转型，提升经营效率和客户满意度',
    productImage: '/images/product/index10.png',
    buttonText: '免费申请',
    buttonLink: '#',
    textPosition: 'left',
    // 参考 Hero.tsx 的背景设计 - 橙色主题
    gradient: {
      direction: 'to-br',
      from: 'orange-50',
      via: 'amber-50',
      to: 'white',
      opacity: 0.9,
    },
    className: 'relative isolate overflow-hidden',
    // 添加模拟界面配置
    mockInterface: {
      title: '数字化经营平台',
      subtitle: '智慧商业管理',
      icon: ShieldCheckIcon,
      metrics: [
        { label: '活跃会员', value: '8,926', trend: 'up', color: 'orange' },
        { label: '营销转化', value: '23.5%', trend: 'up', color: 'emerald' },
        { label: '客户满意度', value: '4.8分', trend: 'stable', color: 'blue' },
      ],
      features: [
        { name: '会员管理', description: '积分营销', progress: 94, status: 'active', color: 'orange' },
        { name: '数据分析', description: '经营报表', progress: 88, status: 'active', color: 'blue' },
        { name: '营销工具', description: '优惠券', progress: 91, status: 'processing', color: 'emerald' },
        { name: '库存管理', description: '商品管理', progress: 86, status: 'processing', color: 'purple' },
      ],
      realTimeData: {
        transactions: 127,
        amount: '6.9万',
        cpu: 48,
        memory: 35,
        network: 'good',
        latency: '18ms',
      },
    },
  },
]

/**
 * 时间显示组件
 * 显示当前时间，每秒更新
 */
function TimeDisplay(): React.ReactNode {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('zh-CN', { hour12: false }))
    }

    updateTime()
    const timer = setInterval(updateTime, 1000)

    return () => clearInterval(timer)
  }, [])

  return <span>{time}</span>
}

/**
 * 模拟界面组件
 * 根据配置数据渲染POS系统界面
 */
function MockInterface({ config }: { config: MockInterfaceConfig }): React.ReactNode {
  return (
    <div className="flex h-80 sm:h-80 md:h-96 lg:h-[28rem] flex-col rounded-xl bg-white/95 backdrop-blur-sm">
      {/* 模拟界面标题栏 */}
      <div className="flex-shrink-0 border-b border-transparent bg-gradient-to-r from-blue-50 to-indigo-50/80 px-3 sm:px-4 py-1.5 sm:py-3 rounded-t-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 sm:mr-3 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-600">
              {React.createElement(config.icon, {
                className: 'w-3 h-3 sm:w-4 sm:h-4 text-white',
              })}
            </div>
            <div>
              <div className="text-xs sm:text-sm font-semibold text-gray-900">
                {config.title}
              </div>
              <div className="text-xs text-blue-600 font-medium hidden sm:block">
                {config.subtitle}
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-1 sm:space-x-2">
            <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs text-emerald-600 font-medium hidden sm:inline">运行中</span>
          </div>
        </div>
      </div>

      {/* 核心指标卡片 */}
      <div className="flex-shrink-0 px-3 sm:px-4 py-1.5 sm:py-3 bg-gradient-to-r from-gray-50/50 to-white border-b border-gray-100/60">
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
          {config.metrics.slice(0, 2).map((metric, index) => (
            <div key={index} className="group text-center p-1.5 sm:p-2 rounded-lg hover:bg-blue-50/50 transition-all duration-300 sm:hidden">
              <div className="relative">
                <div className="text-sm sm:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1 group-hover:text-blue-600 transition-colors duration-300">
                  {metric.value}
                </div>
                {/* 数据变化指示器 */}
                <div className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-emerald-500 animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-xs text-gray-600 font-medium group-hover:text-gray-700 transition-colors duration-300">
                {metric.label}
              </div>
              {/* 数据趋势线 */}
              <div className="mt-0.5 sm:mt-1 h-0.5 w-full bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-600 rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: `${Math.min(60 + index * 15, 95)}%`,
                    animationDelay: `${index * 200}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
          {/* 桌面端显示所有指标 */}
          {config.metrics.map((metric, index) => (
            <div key={index} className="group text-center p-2 rounded-lg hover:bg-blue-50/50 transition-all duration-300 hidden sm:block">
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
                  className={`h-full bg-gradient-to-r from-${metric.color}-500 to-${metric.color}-600 rounded-full transition-all duration-1000 ease-out`}
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
      <div className="flex-1 space-y-2 sm:space-y-3 p-3 sm:p-4 bg-gradient-to-b from-white to-gray-50/30 relative min-h-[120px] sm:min-h-0">
        {/* 数据流动背景动画 */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-1 h-8 bg-gradient-to-b from-transparent via-blue-400/30 to-transparent animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-1 h-6 bg-gradient-to-b from-transparent via-emerald-400/30 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-6 h-1 bg-gradient-to-r from-transparent via-purple-400/20 to-transparent animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        {/* 移动端显示前2个功能模块 */}
        <div className="grid grid-cols-1 gap-2.5 relative z-10 sm:hidden">
          {config.features.slice(0, 2).map((feature, index) => (
            <div
              key={index}
              className="group rounded-lg bg-white/80 p-2.5 transition-all duration-300 hover:bg-white hover:scale-105 relative overflow-hidden"
            >
              {/* 悬停时的光效 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="mb-1 sm:mb-2 flex items-center justify-between relative z-10">
                <div className="flex items-center">
                  <div className={`mr-1 sm:mr-2 h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-${feature.color}-500 animate-pulse`}></div>
                  <div className="truncate text-xs font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {feature.name}
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="text-xs text-gray-500 font-mono group-hover:text-blue-600 transition-colors duration-300">
                    {feature.progress}%
                  </div>
                  {/* 实时状态指示器 */}
                  <div className={`h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-${feature.color}-500 animate-pulse`}></div>
                </div>
              </div>

              {/* 进度条容器 */}
              <div className="h-1.5 sm:h-2 w-full rounded-full bg-gray-200/80 overflow-hidden relative">
                {/* 主进度条 */}
                <div
                  className={`h-1.5 sm:h-2 rounded-full bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 transition-all duration-2000 ease-out relative`}
                  style={{
                    width: `${feature.progress}%`,
                  }}
                >
                  {/* 流光效果 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>

                {/* 背景脉冲效果 */}
                <div className={`absolute inset-0 bg-${feature.color}-500/10 animate-pulse`} style={{animationDelay: `${index * 500}ms`}}></div>
              </div>

              <div className="mt-1 sm:mt-2 text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300 relative z-10">
                {feature.description}
              </div>

              {/* 数据传输指示器 */}
              <div className="absolute top-1 right-1 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-${feature.color}-500 animate-ping`}></div>
                <div className={`h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-${feature.color}-500 animate-ping`} style={{animationDelay: '0.2s'}}></div>
                <div className={`h-0.5 w-0.5 sm:h-1 sm:w-1 rounded-full bg-${feature.color}-500 animate-ping`} style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          ))}
        </div>

        {/* 桌面端显示所有功能模块 */}
        <div className="hidden sm:grid grid-cols-2 gap-3 relative z-10">
          {config.features.map((feature, index) => (
            <div
              key={index}
              className="group rounded-lg bg-white/80 p-3 transition-all duration-300 hover:bg-white hover:scale-105 relative overflow-hidden"
            >
              {/* 悬停时的光效 */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="mb-2 flex items-center justify-between relative z-10">
                <div className="flex items-center">
                  <div className={`mr-2 h-2 w-2 rounded-full bg-${feature.color}-500 animate-pulse`}></div>
                  <div className="truncate text-xs font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {feature.name}
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <div className="text-xs text-gray-500 font-mono group-hover:text-blue-600 transition-colors duration-300">
                    {feature.progress}%
                  </div>
                  {/* 实时状态指示器 */}
                  <div className={`h-1.5 w-1.5 rounded-full bg-${feature.color}-500 animate-pulse`}></div>
                </div>
              </div>

              {/* 进度条容器 */}
              <div className="h-2 w-full rounded-full bg-gray-200/80 overflow-hidden relative">
                {/* 主进度条 */}
                <div
                  className={`h-2 rounded-full bg-gradient-to-r from-${feature.color}-500 to-${feature.color}-600 transition-all duration-2000 ease-out relative`}
                  style={{
                    width: `${feature.progress}%`,
                  }}
                >
                  {/* 流光效果 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                </div>

                {/* 背景脉冲效果 */}
                <div className={`absolute inset-0 bg-${feature.color}-500/10 animate-pulse`} style={{animationDelay: `${index * 500}ms`}}></div>
              </div>

              <div className="mt-2 text-xs text-gray-500 group-hover:text-gray-600 transition-colors duration-300 relative z-10">
                {feature.description}
              </div>

              {/* 数据传输指示器 */}
              <div className="absolute top-1 right-1 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`h-1 w-1 rounded-full bg-${feature.color}-500 animate-ping`}></div>
                <div className={`h-1 w-1 rounded-full bg-${feature.color}-500 animate-ping`} style={{animationDelay: '0.2s'}}></div>
                <div className={`h-1 w-1 rounded-full bg-${feature.color}-500 animate-ping`} style={{animationDelay: '0.4s'}}></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 模拟状态栏 */}
      <div className="flex-shrink-0 border-t border-transparent bg-gradient-to-r from-gray-50 to-gray-100/80 px-3 sm:px-4 py-2 sm:py-3 rounded-b-xl">
        {/* 移动端简化状态信息 */}
        <div className="flex items-center justify-between mb-0.5 sm:mb-2 sm:hidden">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1 group cursor-pointer">
              <span className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors duration-300">交易</span>
              <span className="font-mono font-semibold text-blue-600 group-hover:scale-110 transition-transform duration-300">{config.realTimeData.transactions}</span>
              <span className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors duration-300">笔</span>
              <div className="h-1 w-1 rounded-full bg-blue-500 animate-ping ml-1"></div>
            </div>
            <div className="flex items-center space-x-1 group cursor-pointer">
              <span className="text-xs text-gray-600 group-hover:text-emerald-600 transition-colors duration-300">¥{config.realTimeData.amount}</span>
              <div className="h-1 w-1 rounded-full bg-emerald-500 animate-ping ml-1"></div>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span className="text-xs text-emerald-600 font-medium">在线</span>
          </div>
        </div>

        {/* 桌面端完整状态信息 */}
        <div className="hidden sm:flex items-center justify-between mb-2">
          <div className="flex items-center space-x-4">
            <div className="flex items-center group">
              <div className="mr-2 h-2 w-2 animate-pulse rounded-full bg-emerald-500"></div>
              <span className="text-xs text-gray-700 font-medium group-hover:text-emerald-600 transition-colors duration-300">实时交易</span>
            </div>
            <div className="flex items-center space-x-1 group cursor-pointer">
              <span className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors duration-300">交易</span>
              <span className="font-mono font-semibold text-blue-600 group-hover:scale-110 transition-transform duration-300">{config.realTimeData.transactions}</span>
              <span className="text-xs text-gray-600 group-hover:text-blue-600 transition-colors duration-300">笔</span>
              <div className="h-1 w-1 rounded-full bg-blue-500 animate-ping ml-1"></div>
            </div>
            <div className="flex items-center space-x-1 group cursor-pointer">
              <span className="text-xs text-gray-600 group-hover:text-emerald-600 transition-colors duration-300">金额</span>
              <span className="font-mono font-semibold text-emerald-600 group-hover:scale-110 transition-transform duration-300">¥{config.realTimeData.amount}</span>
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

        {/* 桌面端实时数据流 */}
        <div className="hidden sm:flex items-center justify-between text-xs">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <span className="text-gray-500">CPU:</span>
              <div className="w-8 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full animate-pulse" style={{width: `${config.realTimeData.cpu}%`}}></div>
              </div>
              <span className="font-mono text-gray-600">{config.realTimeData.cpu}%</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-gray-500">内存:</span>
              <div className="w-8 h-1 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full animate-pulse" style={{width: `${config.realTimeData.memory}%`}}></div>
              </div>
              <span className="font-mono text-gray-600">{config.realTimeData.memory}%</span>
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
            <span className="font-mono text-emerald-600 font-semibold">{config.realTimeData.latency}</span>
            <div className="h-1 w-1 rounded-full bg-emerald-500 animate-ping"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 高端大气现代化轮播组件
 *
 * 专业级POS机轮播展示组件，采用现代化UI设计风格：
 *
 * 🎨 **视觉设计**：
 * - 精致的渐变遮罩和阴影效果
 * - 流畅的动画过渡和微交互
 * - 现代化的排版和色彩搭配
 * - 高端大气的视觉呈现
 *
 * 📱 **响应式适配**：
 * - 完美适配PC、移动端、平板设备
 * - 智能断点检测和布局调整
 * - 触摸友好的交互设计
 * - 自适应文字大小和间距
 *
 * ⚡ **性能优化**：
 * - 高性能渲染和动画优化
 * - 智能预加载和懒加载
 * - 防抖节流和内存管理
 * - 流畅的60fps动画体验
 *
 * 🎮 **交互体验**：
 * - 多种控制方式（触摸、键盘、鼠标）
 * - 智能播放控制和进度显示
 * - 无障碍支持和键盘导航
 * - 丰富的回调和事件处理
 *
 * @param props - VideoCarousel 组件属性
 * @returns React 现代化轮播组件
 *
 * @example
 * ```tsx
 * // 基础用法
 * <VideoCarousel />
 *
 * // 现代风格配置
 * <VideoCarousel
 *   variant="modern"
 *   theme="dark"
 *   enable3D={true}
 *   parallax={true}
 *   animationDuration={1000}
 *   height={{ base: 'h-[60vh]', lg: 'h-[80vh]' }}
 * />
 *
 * // 自定义数据和回调
 * <VideoCarousel
 *   slides={customSlides}
 *   onSlideChange={(index) => console.log('切换到:', index)}
 *   onPlayStateChange={(playing) => console.log('播放状态:', playing)}
 * />
 * ```
 */
export function VideoCarousel({
  autoPlay = true,
  interval = 5000,
  animationDuration = 800,
  showProgress = true,
  showPlayButton = true,
  showNavigation = true,
  showIndicators = true,
  height = { base: 'h-[75vh]', sm: 'h-[80vh]', md: 'h-[70vh]', lg: 'h-[90vh]', xl: 'h-[950px]' },
  variant = 'modern',
  theme = 'dark',
  parallax = false,
  enable3D = false,
  textModeButton = true,
  showOverlay = true,
  overlayClassName,
  customSlides,
  forceImageMode = false,
  className,
  slides = defaultSlides,
  mobileBreakpoint = 768,
  enableTouch = true,
  enableKeyboard = true,
  enableWheel = false,
  easing = 'ease-out',
  onSlideChange,
  onPlayStateChange,
}: VideoCarouselProps): React.ReactNode {
  // 核心状态管理
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const [progress, setProgress] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [expandedCardIndex, setExpandedCardIndex] = useState(-1)
  const [showQRCodeModal, setShowQRCodeModal] = useState(false)
  // 推广服务项目展开状态管理
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set()) // 所有项目默认隐藏

  // Refs for performance optimization
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const progressRef = useRef<NodeJS.Timeout | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const slidesRef = useRef<HTMLDivElement>(null)

  // 处理自定义轮播数据
  const actualSlides = customSlides || slides

  // 计算总幻灯片数量
  const totalSlides = actualSlides.length

  /**
   * 设备类型检测和屏幕尺寸监听
   * 智能检测设备类型并优化交互体验
   */
  useEffect(() => {
    setIsClient(true)

    const checkDevice = () => {
      const screenWidth = window.innerWidth
      setIsMobile(screenWidth < mobileBreakpoint)
    }

    // 初始检测
    checkDevice()

    // 防抖的窗口大小变化监听
    let resizeTimer: NodeJS.Timeout
    const handleResize = () => {
      clearTimeout(resizeTimer)
      resizeTimer = setTimeout(checkDevice, 150)
    }

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
      clearTimeout(resizeTimer)
    }
  }, [mobileBreakpoint])

  /**
   * 清理所有定时器
   * 防止内存泄漏和性能问题
   */
  const clearAllIntervals = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
    if (progressRef.current) {
      clearInterval(progressRef.current)
      progressRef.current = null
    }
  }, [])

  /**
   * 设置自动播放定时器
   * 支持进度条显示和播放状态管理
   */
  const setAutoPlayTimer = useCallback(() => {
    if (!isPlaying || isHovered) return

    clearAllIntervals()
    setProgress(0)

    // 进度条更新定时器
    if (showProgress) {
      const progressStep = 100 / (interval / 50)
      progressRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + progressStep
          return newProgress >= 100 ? 100 : newProgress
        })
      }, 50)
    }

    // 自动切换定时器
    intervalRef.current = setTimeout(() => {
      nextSlide()
    }, interval)
  }, [isPlaying, isHovered, interval, showProgress])

  /**
   * 切换到下一张幻灯片
   * 支持循环播放和动画效果
   */
  const nextSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const newIndex = (currentIndex + 1) % totalSlides
    setCurrentIndex(newIndex)
    onSlideChange?.(newIndex)

    setTimeout(() => setIsTransitioning(false), animationDuration)
  }, [currentIndex, totalSlides, isTransitioning, animationDuration, onSlideChange])

  /**
   * 切换到上一张幻灯片
   * 支持循环播放和动画效果
   */
  const prevSlide = useCallback(() => {
    if (isTransitioning) return

    setIsTransitioning(true)
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
    onSlideChange?.(newIndex)

    setTimeout(() => setIsTransitioning(false), animationDuration)
  }, [currentIndex, totalSlides, isTransitioning, animationDuration, onSlideChange])

  /**
   * 跳转到指定幻灯片
   * 支持直接索引跳转
   */
  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentIndex) return

      setIsTransitioning(true)
      setCurrentIndex(index)
      onSlideChange?.(index)

      setTimeout(() => setIsTransitioning(false), animationDuration)
    },
    [currentIndex, isTransitioning, animationDuration, onSlideChange],
  )

  /**
   * 播放/暂停控制
   * 支持播放状态回调
   */
  const togglePlayPause = useCallback(() => {
    const newPlayingState = !isPlaying
    setIsPlaying(newPlayingState)
    onPlayStateChange?.(newPlayingState)
  }, [isPlaying, onPlayStateChange])

  /**
   * 处理按钮点击弹出二维码
   */
  const handleButtonClick = useCallback(() => {
    setShowQRCodeModal(true)
  }, [])

  /**
   * 关闭二维码弹出框
   */
  const handleCloseQRCodeModal = useCallback(() => {
    setShowQRCodeModal(false)
  }, [])

  /**
   * 触摸手势处理
   * 支持移动端滑动切换，优化触摸体验
   */
  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      if (!enableTouch) return
      setTouchEnd(null)
      setTouchStart(e.targetTouches[0].clientX)
      // 暂停自动播放，避免触摸时自动切换
      setIsHovered(true)
    },
    [enableTouch],
  )

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
    // 防止页面滚动
    if (Math.abs((touchStart || 0) - e.targetTouches[0].clientX) > 10) {
      e.preventDefault()
    }
  }, [touchStart])

  const handleTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd || !enableTouch) return

    const distance = touchStart - touchEnd
    const minSwipeDistance = isMobile ? 30 : 50 // 移动端降低滑动阈值
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    } else if (isRightSwipe) {
      prevSlide()
    }

    // 恢复自动播放
    setTimeout(() => setIsHovered(false), 100)
  }, [touchStart, touchEnd, enableTouch, nextSlide, prevSlide, isMobile])

  /**
   * 切换推广项目展开状态
   * 支持点击切换和悬停展开
   */
  const toggleExpanded = useCallback((index: number) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        newSet.add(index)
      }
      return newSet
    })
  }, [])

  /**
   * 键盘导航处理
   * 支持方向键和空格键控制
   */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!enableKeyboard) return

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          prevSlide()
          break
        case 'ArrowRight':
          e.preventDefault()
          nextSlide()
          break
        case ' ':
          e.preventDefault()
          togglePlayPause()
          break
        case 'Home':
          e.preventDefault()
          goToSlide(0)
          break
        case 'End':
          e.preventDefault()
          goToSlide(totalSlides - 1)
          break
      }
    },
    [enableKeyboard, prevSlide, nextSlide, togglePlayPause, goToSlide, totalSlides],
  )

  /**
   * 鼠标滚轮处理
   * 支持滚轮切换幻灯片
   */
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      if (!enableWheel || isTransitioning) return

      e.preventDefault()
      if (e.deltaY > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    },
    [enableWheel, isTransitioning, nextSlide, prevSlide],
  )

  /**
   * 自动播放管理
   * 根据播放状态和悬停状态控制自动播放
   */
  useEffect(() => {
    if (isPlaying && !isHovered) {
      setAutoPlayTimer()
    } else {
      clearAllIntervals()
    }

    return () => clearAllIntervals()
  }, [isPlaying, isHovered, currentIndex, setAutoPlayTimer, clearAllIntervals])

  /**
   * 键盘和滚轮事件监听
   * 添加全局事件监听器
   */
  useEffect(() => {
    if (!isClient) return

    if (enableKeyboard) {
      document.addEventListener('keydown', handleKeyDown)
    }

    if (enableWheel && containerRef.current) {
      containerRef.current.addEventListener('wheel', handleWheel, { passive: false })
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      if (containerRef.current) {
        containerRef.current.removeEventListener('wheel', handleWheel)
      }
    }
  }, [isClient, enableKeyboard, enableWheel, handleKeyDown, handleWheel])

  /**
   * 组件卸载时清理
   * 防止内存泄漏
   */
  useEffect(() => {
    return () => {
      clearAllIntervals()
    }
  }, [clearAllIntervals])

  /**
   * 样式计算
   * 根据主题和配置计算动态样式
   */
  const containerStyles = useMemo(() => {
    let heightClass = ''
    if (typeof height === 'string') {
      heightClass = height
    } else {
      heightClass = clsx(
        height.base || 'h-[60vh]',
        height.sm && `sm:${height.sm}`,
        height.md && `md:${height.md}`,
        height.lg && `lg:${height.lg}`,
        height.xl && `xl:${height.xl}`,
        height['2xl'] && `2xl:${height['2xl']}`
      )
    }

    return clsx(
      'relative w-full overflow-hidden isolate',
      heightClass,
      // 移除bg-white，让渐变背景能够显示
      enable3D && 'perspective-1000',
      className
    )
  }, [height, enable3D, className])

  const slideStyles = useMemo(() => {
    return {
      transform: `translateX(-${currentIndex * 100}%)`,
      transition: isTransitioning
        ? `transform ${animationDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
        : 'none',
    }
  }, [currentIndex, isTransitioning, animationDuration])

  const indicatorStyles = useMemo(() => {
    return clsx(
      'absolute left-1/2 -translate-x-1/2 z-30',
      'flex space-x-2',
      isMobile ? 'bottom-2' : 'bottom-6'
    )
  }, [isMobile])

  const controlStyles = useMemo(() => {
    const baseStyles = 'absolute top-1/2 -translate-y-1/2 z-30'
    const buttonStyles = clsx(
      'rounded-full bg-white/20 backdrop-blur-sm border border-white/30',
      'p-3 text-white transition-all duration-200',
      'hover:bg-white/30 hover:scale-110',
      'focus:outline-none focus:ring-2 focus:ring-white/50',
      'disabled:opacity-50 disabled:cursor-not-allowed',
      isMobile ? 'p-2' : 'p-3'
    )

    return { baseStyles, buttonStyles }
  }, [isMobile])

  // 处理轮播数据
  const processedSlides = useMemo(() => {
    return actualSlides.map(slide => ({
      ...slide,
      // 保持原有的渐变配置，不覆盖
    }))
  }, [actualSlides])



  // 服务端渲染时的组件渲染
  if (!isClient) {
    return (
      <div className={containerStyles}>
        {/* 加载占位符 */}
        <div className="flex h-full items-center justify-center">
          <div className="animate-pulse text-center">
            <div className="mx-auto h-8 w-32 rounded-md bg-gray-300 mb-4"></div>
            <div className="mx-auto h-4 w-48 rounded bg-gray-200"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* 主轮播容器 */}
      <div
        ref={containerRef}
        className={containerStyles}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        role="region"
        aria-label="图片轮播"
        aria-live="polite"
      >
        {/* Hero风格背景 - SVG网格图案 */}
        <svg
          aria-hidden="true"
          className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="carousel-grid-pattern"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            fill="url(#carousel-grid-pattern)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>

        {/* Hero风格装饰性渐变元素 - 与Hero组件保持一致 */}
        <div
          aria-hidden="true"
          className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1108/632] w-[277px] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
          />
        </div>

        {/* 幻灯片容器 */}
        <div
          ref={slidesRef}
          className="flex h-full transition-transform duration-300 ease-out relative z-10"
          style={slideStyles}
        >
          {processedSlides.map((slide, index) => (
            <div
              key={slide.id}
              className="relative h-full w-full flex-shrink-0"
              aria-hidden={index !== currentIndex}
            >
              {/* 渐变背景 - 参考Hero组件的背景设计，使用Tailwind CSS类实现 */}
              <div
                className={clsx(
                  "absolute inset-0",
                  slide.gradient ?
                    `bg-gradient-${slide.gradient.direction} ${slide.gradient.from} ${slide.gradient.via || ''} ${slide.gradient.to}`.trim()
                    : 'bg-gradient-to-br from-blue-50 via-white to-blue-50'
                )}
                style={{
                  opacity: slide.gradient?.opacity || 1,
                }}
              />

              {/* 内容区域 */}
              <div className="relative z-10 flex h-full items-center">
                <div className="mx-auto w-full max-w-[1800px] px-3 sm:px-4 md:px-6 lg:px-8 py-4 sm:py-6 md:py-10 lg:py-12">
                  <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-12 lg:items-center">
                    {/* 文本内容 - 移动端显示title，隐藏subtitle和按钮 */}
                    <div
                      className={clsx(
                        'w-full text-center lg:text-left order-2 lg:order-1',
                        slide.textPosition === 'center' && 'lg:text-center',
                        slide.textPosition === 'right' && 'lg:text-right'
                      )}
                    >
                      {/* 副标题 - 移动端隐藏 */}
                      <p className="hidden sm:block mb-1 text-xs font-medium uppercase tracking-wider text-slate-600 sm:mb-2 sm:text-sm lg:mb-4 lg:text-base">
                        {slide.subtitle}
                      </p>

                      {/* 主标题 - 移动端显示 */}
                      <h1 className="mb-2 text-lg font-bold leading-tight tracking-tight text-blue-600 sm:mb-3 sm:text-2xl md:text-4xl lg:mb-6 lg:text-5xl xl:text-6xl">
                        {slide.title}
                      </h1>

                      {/* 描述文本 - 移动端隐藏 */}
                      <p className="hidden sm:block mb-3 text-sm leading-snug text-slate-600 sm:mb-4 sm:text-base md:text-lg lg:mb-8 lg:text-xl">
                        {slide.description}
                      </p>

                      {/* 按钮 - 移动端和桌面端都显示 */}
                      {slide.buttonText && (
                        <div className="flex flex-col gap-3 sm:flex-row sm:gap-6 md:justify-start">
                          <Button
                            onClick={handleButtonClick}
                            color="blue"
                            className="w-full rounded-md px-4 py-2 font-medium shadow-md sm:w-auto sm:px-5 sm:py-2.5"
                          >
                            <ArrowRightIcon className="mr-2 h-4 w-4" />
                            {slide.buttonText}
                          </Button>
                          <Button
                            onClick={handleButtonClick}
                            variant="outline"
                            className="w-full rounded-md px-4 py-2 sm:w-auto sm:px-5 sm:py-2.5"
                          >
                            <ChatBubbleLeftRightIcon className="mr-2 h-4 w-4" />
                            了解更多
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* 模拟界面 - 移动端显示在下方 */}
                    {slide.mockInterface && (
                      <div className="w-full order-1 sm:order-1 lg:order-2 mt-8 sm:mt-0">
                        <div className="relative">
                          <MockInterface config={slide.mockInterface} />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 导航箭头 - 已彻底隐藏 */}
        {/*
        {showNavigation && !isMobile && (
          <>
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className={clsx(controlStyles.baseStyles, 'left-6', controlStyles.buttonStyles)}
              aria-label="上一张"
            >
              <ChevronLeftIcon className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className={clsx(controlStyles.baseStyles, 'right-6', controlStyles.buttonStyles)}
              aria-label="下一张"
            >
              <ChevronRightIcon className="h-6 w-6" />
            </button>
          </>
        )}
        */}

        {/* 播放控制按钮 */}
        {showPlayButton && !isMobile && (
          <button
            onClick={togglePlayPause}
            className="absolute bottom-6 right-6 z-30 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 p-3 text-white transition-all duration-200 hover:bg-white/30 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label={isPlaying ? '暂停' : '播放'}
          >
            {isPlaying ? (
              <PauseIcon className="h-6 w-6" />
            ) : (
              <PlayIcon className="h-6 w-6" />
            )}
          </button>
        )}

        {/* 指示器 - 新样式 */}
        {showIndicators && (
          <div className={indicatorStyles}>
            {processedSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                disabled={isTransitioning}
                className={clsx(
                  'transition-all duration-300 touch-manipulation mx-1',
                  index === currentIndex
                    ? 'w-8 h-1.5 bg-indigo-600 rounded-sm'
                    : 'w-2.5 h-1.5 bg-gray-300 rounded-full hover:bg-indigo-300',
                  isMobile ? 'w-6 h-1' : ''
                )}
                aria-label={`跳转到第 ${index + 1} 张`}
              />
            ))}
          </div>
        )}

        {/* 进度条 */}
        {showProgress && isPlaying && (
          <div className="absolute bottom-0 left-0 z-30 h-1 w-full bg-white/20">
            <div
              className="h-full bg-white transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}
      </div>

      {/* 推广服务区域 - 参考 Aisd.tsx ServiceFeatures 设计 */}
      <div className="border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
        <div className="border-b border-gray-100 dark:border-gray-800">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
              {/* 推广项目列表 */}
              {[
                {
                  title: 'POS机办理',
                  description: '银联正规POS机，安全稳定费率优惠',
                  href: '#',
                  icon: (
                    <svg className="h-4 w-4 text-blue-500 sm:h-8 sm:w-8 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                    </svg>
                  ),
                },
                {
                  title: '移动收款',
                  description: '支持拉卡拉、银盛等多种品牌',
                  href: '#',
                  icon: (
                    <svg className="h-4 w-4 text-blue-500 sm:h-8 sm:w-8 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                    </svg>
                  ),
                },
                {
                  title: '聚合码牌',
                  description: '商户收款码，多种支付方式',
                  href: '#',
                  icon: (
                    <svg className="h-4 w-4 text-blue-500 sm:h-8 sm:w-8 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 3.75 9.375v-4.5ZM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 0 1-1.125-1.125v-4.5ZM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0 1 13.5 9.375v-4.5Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75ZM6.75 16.5h.75v.75h-.75v-.75ZM16.5 6.75h.75v.75H16.5v-.75ZM13.5 13.5h4.5v4.5h-4.5v-4.5Z" />
                    </svg>
                  ),
                },
                {
                  title: '代理加盟',
                  description: '代理加盟，专业收款解决方案',
                  href: '#',
                  icon: (
                    <svg className="h-4 w-4 text-blue-500 sm:h-8 sm:w-8 dark:text-blue-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                    </svg>
                  ),
                },
              ].map((item, index) => {
                const isExpanded = expandedItems.has(index)

                return (
                  <div
                    key={index}
                    className="group cursor-pointer transition-all duration-300 hover:scale-105 touch-manipulation"
                    onClick={() => toggleExpanded(index)}
                    onMouseEnter={() => setExpandedItems(prev => new Set(prev).add(index))}
                    onMouseLeave={() => setExpandedItems(prev => {
                      const newSet = new Set(prev)
                      newSet.delete(index)
                      return newSet
                    })} // 鼠标离开时隐藏描述
                  >
                    {/* 移动端布局：图标在标题前面 */}
                    <div className="flex flex-col gap-2 sm:hidden">
                      <div className="flex items-center gap-2">
                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md bg-gray-100 dark:bg-gray-700">
                          {item.icon}
                        </div>
                        <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 dark:text-white">
                          {item.title}
                        </h3>
                      </div>
                      {/* 移动端描述：可展开/收起 */}
                      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'}`}>
                        <p className="text-xs leading-relaxed text-gray-500 dark:text-gray-400 pl-8">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* 桌面端布局：保持原有设计 */}
                    <a
                      href={item.href}
                      className="hidden sm:flex sm:flex-row sm:items-start sm:gap-4 sm:text-left"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-base font-medium text-gray-900 group-hover:text-blue-600 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-gray-500 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 二维码弹出框 - 参考Top.tsx设计 */}
       <AnimatePresence>
         {showQRCodeModal && (
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             transition={{ duration: 0.35 }}
             className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
             onClick={handleCloseQRCodeModal}
           >
             {/* 背景遮罩 */}
             <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

             {/* 模态框内容 */}
             <motion.div
               initial={{ opacity: 0, scale: 0.9, y: 10 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 10 }}
               transition={{ duration: 0.35, ease: "easeOut" }}
               className="relative mx-4 w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-gray-200/70"
               onClick={(e) => e.stopPropagation()}
             >
               {/* 关闭按钮 */}
               <button
                 onClick={handleCloseQRCodeModal}
                 className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100/80 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
                 aria-label="关闭"
               >
                 <XMarkIcon className="h-4 w-4 text-gray-700" />
               </button>

               {/* 内容区域 */}
               <div className="p-8 text-center">
                 <h3 className="mb-2 text-lg font-semibold text-gray-900">
                   免费申请POS机
                 </h3>
                 <p className="mb-6 text-sm text-gray-600">
                   扫描下方二维码，联系客服或关注公众号
                 </p>

                 {/* 双二维码布局 */}
                 <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                   {/* 客服二维码 */}
                   <div className="text-center">
                     <div className="mb-3 text-sm font-medium text-gray-700">
                       联系客服
                     </div>
                     <div className="flex justify-center">
                       <Image
                         src="/images/contact/userhlc.png"
                         alt="客服二维码"
                         width={120}
                         height={120}
                         className="h-30 w-30 border border-gray-200 object-contain shadow-sm"
                         unoptimized
                       />
                     </div>
                     <p className="mt-2 text-xs text-gray-500">
                       扫码添加客服领取机器
                     </p>
                   </div>

                   {/* 公众号二维码 */}
                   <div className="text-center">
                     <div className="mb-3 text-sm font-medium text-gray-700">
                       关注公众号
                     </div>
                     <div className="flex justify-center">
                       <Image
                         src="/images/contact/gzh.png"
                         alt="公众号二维码"
                         width={120}
                         height={120}
                         className="h-30 w-30 border border-gray-200 object-contain shadow-sm"
                         unoptimized
                       />
                     </div>
                     <p className="mt-2 text-xs text-gray-500">
                       获取最新资讯
                     </p>
                   </div>
                 </div>

                 {/* 提示文字 */}
                 <p className="mt-6 text-xs text-gray-500">
                   长按二维码保存到相册，或使用微信扫一扫
                 </p>
               </div>
             </motion.div>
           </motion.div>
         )}
       </AnimatePresence>
    </div>
  )
}

/**
 * 设备检测工具函数
 * 用于在组件外部检测设备类型
 */
export const isMobileDevice = (breakpoint: number = 768): boolean => {
  if (typeof window === 'undefined') return false
  return window.innerWidth < breakpoint
}

/**
 * 图片预加载工具函数
 * 用于提前加载轮播图片，提升用户体验
 */
export const preloadCarouselImages = (imageUrls: string[]): void => {
  imageUrls.forEach((url) => {
    const img = new window.Image()
    img.src = url
  })
}

/**
 * 防抖函数
 * 用于优化频繁触发的事件处理
 * @param func 要防抖的函数
 * @param wait 等待时间（毫秒）
 * @returns 防抖后的函数
 */
export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number,
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout
  return (...args: Parameters<T>) => {
    clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

/**
 * 节流函数
 * 用于限制函数执行频率
 * @param func 要节流的函数
 * @param limit 时间限制（毫秒）
 * @returns 节流后的函数
 */
export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number,
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => (inThrottle = false), limit)
    }
  }
}

export default VideoCarousel
