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
 * 产品优势手风琴卡片组件（PC端）
 * 采用蓝白色调为主的现代企业设计风格，实现简洁的卡片式直角设计
 * 突出数据与服务能力展示，符合B端企业级产品的专业调性
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
        "group relative overflow-hidden transition-all duration-700 ease-out cursor-pointer",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-50/40 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500",
        "hover:before:opacity-100",
        isExpanded
          ? "flex-[2]"
          : "flex-[1.2] bg-white"
      )}
      style={{
        backgroundColor: isExpanded ? '#1b3ec3' : undefined
      }}
      onMouseEnter={onToggle}
    >


      {/* 主要内容区域 */}
      <div className="relative h-full flex flex-col p-6 lg:p-7 xl:p-8 pt-8 lg:pt-9 xl:pt-10">
        {/* 顶部类别标签 */}
        <div className="mb-4 lg:mb-5 xl:mb-6">
          <span className="inline-flex items-center px-2.5 lg:px-3 py-1 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
            {advantage.category}
          </span>
        </div>

        {/* 标题与关键指标区域 */}
        <div className="mb-6 lg:mb-7 xl:mb-8">
          <div className="flex items-start justify-between mb-3 lg:mb-4">
            <h3 className={clsx(
              "font-bold transition-all duration-500 leading-tight",
              isExpanded ? "text-lg lg:text-xl xl:text-2xl text-white" : "text-base lg:text-lg xl:text-xl text-slate-900",
              "max-w-[75%]"
            )}>
              {advantage.title}
            </h3>

            {/* 图标容器 */}
            <div className="flex-shrink-0 p-2 lg:p-2.5 bg-blue-50 border border-blue-100">
              <IconComponent className="h-4 w-4 lg:h-5 lg:w-5 text-blue-600" />
            </div>
          </div>

          {/* 关键指标突出显示 */}
          <div className={clsx(
            "transition-all duration-500 delay-100",
            isExpanded ? "opacity-100 translate-y-0" : "opacity-80 translate-y-1"
          )}>
            <div className="flex items-baseline space-x-1.5 lg:space-x-2">
              <span className={clsx(
                "font-bold transition-all duration-500",
                "text-xl lg:text-2xl xl:text-3xl",
                isExpanded ? 'text-white drop-shadow-sm' : 'text-blue-600'
              )}>{advantage.metric}</span>
              <span className={clsx(
                "text-xs lg:text-sm font-medium transition-all duration-500",
                isExpanded ? 'text-white/90' : 'text-slate-500'
              )}>核心指标</span>
            </div>
          </div>
        </div>

        {/* 未选中时显示的重要文案 */}
        {!isExpanded && (
          <div className="flex-1 flex flex-col justify-start pt-4 lg:pt-5 xl:pt-6">
            <div className="text-center space-y-3 lg:space-y-4">
              <p className="text-xs lg:text-sm text-slate-600 leading-relaxed px-2 lg:px-3 font-medium">
                {advantage.description.slice(0, 50)}...
              </p>
              <div className="flex justify-center space-x-4 lg:space-x-6 text-xs text-slate-500">
                {advantage.highlights.slice(0, 2).map((highlight, idx) => (
                  <span key={idx} className="flex items-center font-medium">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 bg-blue-500 rounded-full mr-1 lg:mr-1.5" />
                    <span className="truncate max-w-[80px] lg:max-w-none">{highlight}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 展开内容区域 */}
        <div className={clsx(
          "transition-all duration-700 delay-200",
          isExpanded ? "opacity-100 max-h-96 flex-1" : "opacity-0 max-h-0 overflow-hidden"
        )}>
          {/* 描述文本 */}
          <div className="mb-6 lg:mb-7 xl:mb-8">
            <p className={clsx(
              "text-sm lg:text-base xl:text-lg leading-relaxed font-light transition-all duration-500",
              isExpanded ? 'text-white/95 drop-shadow-sm' : 'text-slate-700'
            )}>
              {advantage.description}
            </p>
          </div>

          {/* 核心亮点列表 */}
          <div className="space-y-3 lg:space-y-4">
            <h4 className={clsx(
              "text-sm lg:text-base font-semibold flex items-center mb-3 lg:mb-4 transition-all duration-500",
              isExpanded ? 'text-white' : 'text-slate-900'
            )}>
              核心亮点
            </h4>
            <div className="grid gap-2 lg:gap-3">
              {advantage.highlights.map((highlight, highlightIndex) => (
                <div
                  key={highlightIndex}
                  className={clsx(
                    "flex items-center text-xs lg:text-sm transition-all duration-500 group/item",
                    "hover:translate-x-1",
                    isExpanded ? 'text-white hover:text-white' : 'text-slate-600 hover:text-slate-800'
                  )}
                  style={{ transitionDelay: `${highlightIndex * 150 + 400}ms` }}
                >
                  <div className={clsx(
                    "mr-2 lg:mr-3 h-1 w-1 lg:h-1.5 lg:w-1.5 rounded-full flex-shrink-0 transition-all duration-300",
                    "group-hover/item:scale-125",
                    isExpanded ? 'bg-white shadow-sm' : 'bg-blue-500'
                  )} />
                  <span className="font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 底部装饰与状态指示器 */}
        <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
          {/* 进度指示器 */}
          <div className={clsx(
            "flex items-center space-x-1 transition-all duration-500",
            isExpanded ? "opacity-100" : "opacity-40"
          )}>
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={clsx(
                  "h-1 transition-all duration-300",
                  i === index
                    ? isExpanded
                      ? "w-8 bg-white/90"
                      : "w-8 bg-blue-600"
                    : isExpanded
                      ? "w-2 bg-white/40"
                      : "w-2 bg-slate-300",
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
            <ArrowRightIcon className={`h-4 w-4 ${
              isExpanded ? 'text-white' : 'text-blue-600'
            }`} />
          </div>
        </div>

        {/* 右上角序号标识 */}
        <div className="absolute top-6 right-6">
          <div className={clsx(
            "w-8 h-8 flex items-center justify-center transition-all duration-500",
            "text-xs font-bold",
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
 * 移动端产品优势卡片组件
 * 采用蓝白色调为主的现代企业设计风格，实现简洁的卡片式直角设计
 * 突出数据与服务能力展示，符合B端企业级产品的专业调性
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
    <div className="bg-white border border-gray-200 p-4">
      {/* 标题与图标 */}
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-base font-semibold text-gray-900">
          {advantage.title}
        </h3>
        <IconComponent className="h-5 w-5 text-blue-600" />
      </div>

      {/* 关键指标 */}
      <div className="mb-3">
        <span className="text-xl font-bold text-blue-600">{advantage.metric}</span>
      </div>

      {/* 描述文本 */}
      <p className="text-sm text-gray-600 mb-3 line-clamp-2">
        {advantage.description}
      </p>

      {/* 核心亮点 */}
      <div className="space-y-1">
        {advantage.highlights.slice(0, 2).map((highlight, highlightIndex) => (
          <div key={highlightIndex} className="flex items-center text-sm text-gray-600">
            <div className="mr-2 h-1 w-1 bg-gray-400 rounded-full" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

/**
 * 产品优势展示组件 - 响应式设计
 * PC端：手风琴样式，移动端：网格布局
 * 展示优刻云ECS的核心产品优势
 * @returns {JSX.Element} 产品优势组件
 */
export default function Advantage() {
  // 默认展开第一个元素（仅PC端使用）
  const [expandedIndex, setExpandedIndex] = useState(0)

  /**
   * 处理卡片展开状态切换（仅PC端使用）
   * @param {number} index - 卡片索引
   */
  const handleCardToggle = (index: number) => {
    setExpandedIndex(index)
  }

  return (
    <section
      id="advantages"
      aria-label="产品优势"
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
            产品优势
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl leading-relaxed">
            优刻云云服务器 ECS是优刻云提供的性能卓越、稳定可靠、弹性扩展的IaaS（Infrastructure as a Service）级别云计算服务。选择云服务器 ECS，您可以轻松构建具备以下优势的计算资源。
          </p>
        </div>

        {/* PC端手风琴布局 - 隐藏在移动端 */}
        <div className="hidden lg:flex h-[380px] xl:h-[450px] 2xl:h-[500px] gap-1.5 lg:gap-2 overflow-hidden">
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

        {/* 移动端简化布局 - 隐藏在PC端 */}
        <div className="lg:hidden">
          <div className="space-y-4">
            {advantages.map((advantage, index) => (
              <MobileAdvantageCard
                key={index}
                advantage={advantage}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
