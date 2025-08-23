'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  ShieldCheckIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  CpuChipIcon,
  LockClosedIcon,
  ArrowRightIcon,
  ChartBarIcon,
  CloudIcon
} from '@heroicons/react/24/outline'

/**
 * 产品优势卡片数据接口
 * @interface AdvantageCard
 * @property {string} title - 优势标题
 * @property {string} description - 详细描述
 * @property {string[]} highlights - 核心亮点
 * @property {string} category - 优势类别
 * @property {string} metric - 关键指标
 * @property {string} iconType - 图标类型
 */
interface AdvantageCard {
  title: string
  description: string
  highlights: string[]
  category: string
  metric: string
  iconType: string
}

/**
 * 产品优势数据配置
 * 采用蓝白色调为主的现代企业设计风格，突出数据与服务能力
 */
const advantages: AdvantageCard[] = [
  {
    title: '高稳定性承诺',
    description: '单实例SLA达99.975%，支持宕机自动迁移和快照备份。采用跨可用区高可用架构，确保业务连续运行。',
    highlights: ['SLA达99.975%', '宕机自动迁移', '跨可用区高可用'],
    category: '稳定性保障',
    metric: '99.975%',
    iconType: 'shield'
  },
  {
    title: '灵活计费',
    description: '支持按量付费和包年包月,可灵活扩容。分钟级创建实例,按需调整资源配置。',
    highlights: ['多种付费方式', '分钟级创建', '弹性扩容'],
    category: '成本优化',
    metric: '分钟级',
    iconType: 'currency'
  },
  {
    title: '全球云基础设施',
    description: '全球29个地域提供稳定计算服务,已服务500万企业客户,助力数字化转型。',
    highlights: ['29地域', '87可用区', '500万+'],
    category: '全球覆盖',
    metric: '29个地域',
    iconType: 'globe'
  },
  {
    title: '自研CIPU架构',
    description: '采用自研CIPU架构,400G网络带宽,支持6000万PPS和360万IOPS,网络延迟低至8微秒,针对AI场景优化。',
    highlights: ['400G带宽', '6000万PPS', '8微秒时延'],
    category: '性能领先',
    metric: '400G',
    iconType: 'cpu'
  },
  {
    title: '多层防护',
    description: '提供多重安全防护机制,包括DDoS防护、漏洞检测和数据加密,确保企业业务安全运行。',
    highlights: ['安全认证', 'DDoS防护', '数据加密'],
    category: '安全防护',
    metric: '多层防护',
    iconType: 'lock'
  }
]

/**
 * 根据图标类型获取对应的图标组件
 * @param {string} iconType - 图标类型标识
 * @returns {React.ComponentType} 对应的图标组件
 */
function getIconByType(iconType: string) {
  const iconMap = {
    shield: ShieldCheckIcon,
    currency: CurrencyDollarIcon,
    globe: GlobeAltIcon,
    cpu: CpuChipIcon,
    lock: LockClosedIcon,
    chart: ChartBarIcon,
    cloud: CloudIcon
  }
  return iconMap[iconType as keyof typeof iconMap] || ShieldCheckIcon
}

/**
 * 产品优势手风琴卡片组件（桌面端和平板端）
 * 采用蓝白色调为主的现代企业设计风格，实现简洁的卡片式直角设计
 * 突出数据与服务能力展示，符合B端企业级产品的专业调性
 * 支持响应式设计，在不同屏幕尺寸下自适应布局
 * @param {AdvantageCard} advantage - 产品优势数据
 * @param {number} index - 卡片索引
 * @param {boolean} isExpanded - 是否展开状态
 * @param {() => void} onToggle - 切换展开状态的回调
 * @returns {JSX.Element} 手风琴卡片组件
 */
function AdvantageCard({
  advantage,
  index,
  isExpanded,
  onToggle
}: {
  advantage: AdvantageCard;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const IconComponent = getIconByType(advantage.iconType)

  return (
    <div
      className={clsx(
        "group relative overflow-hidden transition-all duration-700 ease-out cursor-pointer border border-gray-200",
        "rounded-none md:rounded-none", // 所有端都使用直角设计
        isExpanded
          ? "flex-[2] md:flex-[2.5] lg:flex-[3]" // 响应式展开比例
          : "flex-[1] md:flex-[1.2] lg:flex-[1.5] bg-white"
      )}
      style={{
        backgroundColor: isExpanded ? '#1b3ec3' : undefined
      }}
      onMouseEnter={onToggle}
    >


      {/* 主要内容区域 */}
      <div className="relative h-full flex flex-col p-3 sm:p-4 md:p-5 lg:p-6 xl:p-7 2xl:p-8 pt-4 sm:pt-5 md:pt-6 lg:pt-7 xl:pt-8 2xl:pt-10">
        {/* 顶部类别标签 - 与右上角序号垂直居中对齐 */}
        <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6 flex items-center">
          <span className="inline-flex items-center px-2 sm:px-2.5 lg:px-3 py-0.5 sm:py-1 text-xs sm:text-xs lg:text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
            {advantage.category}
          </span>
        </div>

        {/* 标题与关键指标区域 */}
        <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8">
          <div className="flex items-center justify-start mb-2 sm:mb-3 lg:mb-4">
            {/* 图标容器 */}
            <div className="flex-shrink-0 p-1.5 sm:p-2 lg:p-2.5">
              <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-blue-600" />
            </div>

            <h3 className={clsx(
              "font-bold transition-all duration-500 leading-tight",
              isExpanded
                ? "text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white"
                : "text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-slate-900"
            )}>
              {advantage.title}
            </h3>
          </div>

          {/* 关键指标突出显示 */}
          <div className={clsx(
            "transition-all duration-500 delay-100",
            isExpanded ? "opacity-100 translate-y-0" : "opacity-80 translate-y-1"
          )}>
            <div className="flex items-baseline space-x-1 sm:space-x-1.5 lg:space-x-2">
              <span className={clsx(
                "font-bold transition-all duration-500",
                "text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl",
                isExpanded ? 'text-white drop-shadow-sm' : 'text-blue-600'
              )}>{advantage.metric}</span>
              <span className={clsx(
                "text-xs sm:text-xs lg:text-sm font-medium transition-all duration-500",
                isExpanded ? 'text-white/90' : 'text-slate-500'
              )}>核心指标</span>
            </div>
          </div>
        </div>

        {/* 未选中时显示的重要文案 */}
        {!isExpanded && (
          <div className="flex-1 flex flex-col justify-start pt-2 sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6">
            <div className="text-center space-y-2 sm:space-y-3 lg:space-y-4">
              <p className="text-xs sm:text-xs lg:text-sm text-slate-600 leading-relaxed px-1 sm:px-2 lg:px-3 font-medium">
                {advantage.description.slice(0, 40)}...
              </p>
              <div className="flex justify-center space-x-2 sm:space-x-3 md:space-x-4 lg:space-x-6 text-xs text-slate-500">
                {advantage.highlights.slice(0, 2).map((highlight, idx) => (
                  <span key={idx} className="flex items-center font-medium">
                    <div className="w-1 h-1 sm:w-1 sm:h-1 lg:w-1.5 lg:h-1.5 bg-[#05f] rounded-full mr-1 sm:mr-1 lg:mr-1.5" />
                    <span className="truncate max-w-[60px] sm:max-w-[70px] md:max-w-[80px] lg:max-w-none">{highlight}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 展开内容区域 - 优化布局结构 */}
        <div className={clsx(
          "transition-all duration-700 delay-200",
          isExpanded ? "opacity-100 max-h-[500px] flex-1" : "opacity-0 max-h-0 overflow-hidden"
        )}>
          {/* 主要内容容器 - 改进内容层次和间距 */}
          <div className="flex flex-col h-full justify-between">
            {/* 文案内容区域 */}
            <div className="flex-1 space-y-4 lg:space-y-5 xl:space-y-6">
              {/* 产品描述 - 优化排版 */}
              <div className="relative">
                <div className={clsx(
                  "absolute -left-3 top-0 w-1 h-full transition-all duration-500",
                  isExpanded ? 'bg-white' : 'bg-[#05f]'
                )} />
                <div className="pl-2 sm:pl-3 md:pl-4">
                  <p className={clsx(
                    "text-xs sm:text-sm md:text-sm lg:text-base xl:text-lg leading-relaxed transition-all duration-500",
                    "font-normal tracking-wide",
                    isExpanded ? 'text-white/95 drop-shadow-sm' : 'text-slate-700'
                  )}>
                    {advantage.description}
                  </p>
                </div>
              </div>

              {/* 核心亮点区域 - 改进视觉层次 */}
              <div className="space-y-2 lg:space-y-2.5">
                <div className="flex items-center space-x-2">
                  <div className={clsx(
                    "w-2 h-2 transition-all duration-500",
                    isExpanded ? 'bg-white' : 'bg-blue-600'
                  )} />
                  <h4 className={clsx(
                    "text-sm lg:text-base font-semibold transition-all duration-500",
                    isExpanded ? 'text-white' : 'text-slate-900'
                  )}>
                    核心亮点
                  </h4>
                </div>

                {/* 亮点列表 - 优化布局 */}
                <div className="grid grid-cols-1 gap-1 sm:gap-1.5 md:gap-1.5 lg:gap-2 pl-2 sm:pl-3 md:pl-4">
                  {advantage.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className={clsx(
                        "flex items-start space-x-2 sm:space-x-3 text-xs sm:text-xs lg:text-sm py-0.5 sm:py-1",
                        isExpanded ? 'text-white/90' : 'text-slate-600'
                      )}
                    >
                      <div className={clsx(
                        "mt-1 sm:mt-1.5 h-1 w-1 sm:h-1.5 sm:w-1.5 lg:h-2 lg:w-2 rounded-full flex-shrink-0",
                        isExpanded ? 'bg-white shadow-sm' : 'bg-blue-500'
                      )} />
                      <span className="font-medium leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>


          </div>
        </div>

        {/* 底部装饰与状态指示器 */}
        <div className="absolute bottom-3 sm:bottom-4 md:bottom-5 lg:bottom-6 left-4 sm:left-6 md:left-7 lg:left-8 right-4 sm:right-6 md:right-7 lg:right-8 flex items-center justify-between">
          {/* 进度指示器 */}
          <div className={clsx(
            "flex items-center space-x-0.5 sm:space-x-1 transition-all duration-500",
            isExpanded ? "opacity-100" : "opacity-40"
          )}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={clsx(
                  "h-0.5 sm:h-1 transition-all duration-300",
                  i === index
                    ? isExpanded
                      ? "w-4 sm:w-6 md:w-8 bg-white/90"
                      : "w-4 sm:w-6 md:w-8 bg-blue-600"
                    : isExpanded
                      ? "w-1 sm:w-2 bg-white/40"
                      : "w-1 sm:w-2 bg-slate-300",
                  i <= index ? "opacity-100" : "opacity-50"
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              />
            ))}
          </div>

          {/* 展开指示器 */}
          <div className={clsx(
            "transition-all duration-500",
            isExpanded ? "opacity-100 rotate-90" : "opacity-60 rotate-0"
          )}>
            <ArrowRightIcon className={clsx(
              "h-3 w-3 sm:h-4 sm:w-4",
              isExpanded ? 'text-white' : 'text-blue-600'
            )} />
          </div>
        </div>

        {/* 右上角序号标识 */}
        <div className="absolute top-4 sm:top-5 md:top-6 lg:top-7 xl:top-8 2xl:top-10 right-3 sm:right-4 md:right-5 lg:right-6">
          <div className={clsx(
            "w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 flex items-center justify-center transition-all duration-500",
            "text-xs sm:text-xs md:text-xs font-bold",
            isExpanded
              ? "scale-110 bg-white/20 border border-white/30 text-white backdrop-blur-sm"
              : "scale-100 bg-slate-50 border border-slate-200 text-slate-600"
          )}>
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 移动端产品优势卡片组件 - 简化版
 * 采用简洁的设计风格，减少视觉噪音，突出核心信息
 * @param {AdvantageCard} advantage - 产品优势数据
 * @param {number} index - 卡片索引
 * @returns {JSX.Element} 移动端卡片组件
 */
function MobileAdvantageCard({
  advantage,
  index
}: {
  advantage: AdvantageCard;
  index: number;
}) {
  const IconComponent = getIconByType(advantage.iconType)

  return (
    <div className="relative bg-white border border-gray-300 hover:border-gray-400 transition-colors duration-200 rounded-none p-4">
      {/* 顶部区域：类别标签和序号 */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1">
          {advantage.category}
        </span>
        <span className="text-xs font-bold text-gray-400 bg-gray-50 w-5 h-5 flex items-center justify-center">
          {index + 1}
        </span>
      </div>

      {/* 标题与图标 */}
      <div className="flex items-center mb-3">
        <IconComponent className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0" />
        <h3 className="text-base font-semibold text-gray-900">
          {advantage.title}
        </h3>
      </div>

      {/* 关键指标 */}
      <div className="mb-3">
        <span className="text-xl font-bold text-blue-600">{advantage.metric}</span>
        <span className="text-xs text-gray-500 ml-1">核心指标</span>
      </div>

      {/* 描述文本 */}
      <p className="text-sm text-gray-600 mb-3 leading-relaxed">
        {advantage.description}
      </p>

      {/* 核心亮点 - 简化显示 */}
      <div className="flex flex-wrap gap-1">
        {advantage.highlights.map((highlight, highlightIndex) => (
          <span key={highlightIndex} className="text-xs bg-gray-50 text-gray-600 px-2 py-1">
            {highlight}
          </span>
        ))}
      </div>
    </div>
  )
}

/**
 * 产品优势展示组件 - 全面响应式设计
 * 桌面端：手风琴样式交互，平板端：简化手风琴，移动端：垂直卡片布局
 * 展示优刻云ECS的核心产品优势，支持多端适配
 * @returns {JSX.Element} 产品优势组件
 */
export default function Advantage() {
  // 默认展开第一个元素（仅桌面端和平板端使用）
  const [expandedIndex, setExpandedIndex] = useState(0)

  /**
   * 处理卡片展开状态切换（桌面端和平板端使用）
   * @param {number} index - 卡片索引
   */
  const handleCardToggle = (index: number) => {
    setExpandedIndex(index)
  }

  return (
    <section
      id="advantages"
      aria-label="产品优势"
      className="py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 2xl:py-24"
      style={{
        fontFamily: 'pingfang SC, helvetica neue, arial, hiragino sans gb, microsoft yahei ui, microsoft yahei, simsun, sans-serif',
        background: '#f7f8fb'
      }}
    >
      <div className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12" style={{ maxWidth: '1800px' }}>
        {/* 标题区域 - 响应式优化 */}
        <div className="text-left mb-6 sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 2xl:mb-20">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-8 leading-tight">
            产品优势
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-600 max-w-none sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl leading-relaxed">
            优刻云云服务器 ECS是优刻云提供的性能卓越、稳定可靠、弹性扩展的IaaS（Infrastructure as a Service）级别云计算服务。选择云服务器 ECS，您可以轻松构建具备以下优势的计算资源。
          </p>
        </div>

        {/* 桌面端手风琴布局 - 大屏幕显示 */}
        <div className="hidden xl:flex h-[450px] 2xl:h-[500px] gap-2 overflow-hidden">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              advantage={advantage}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => handleCardToggle(index)}
            />
          ))}
        </div>

        {/* 平板端简化手风琴布局 - 中等屏幕显示 */}
        <div className="hidden md:flex xl:hidden h-[350px] lg:h-[400px] gap-1.5 lg:gap-2 overflow-hidden">
          {advantages.map((advantage, index) => (
            <AdvantageCard
              key={index}
              advantage={advantage}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => handleCardToggle(index)}
            />
          ))}
        </div>

        {/* 移动端和小平板垂直布局 - 小屏幕显示 */}
        <div className="md:hidden">
          <div className="space-y-4 sm:space-y-5">
            {advantages.map((advantage, index) => (
              <div key={index} className="relative">
                <MobileAdvantageCard
                  advantage={advantage}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
