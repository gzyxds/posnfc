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
    description: '单实例SLA达99.975%，多可用区多实例SLA达99.995%，云盘可靠性达99.9999999%。可实现宕机自动迁移，快照备份。支持跨可用区的高可用架构设计与自动恢复能力，保障业务连续性。',
    highlights: ['SLA达99.975%', '宕机自动迁移', '跨可用区高可用'],
    category: '稳定性保障',
    metric: '99.975%',
    iconType: 'shield'
  },
  {
    title: '灵活计费',
    description: '提供多种弹性付费方式，可有效降低企业IT成本。支持分钟级别创建万台实例，满足突发需求进行灵活的弹性扩容，计算资源、存储空间、网络带宽可分别按需升降。',
    highlights: ['多种付费方式', '分钟级创建', '弹性扩容'],
    category: '成本优化',
    metric: '分钟级',
    iconType: 'currency'
  },
  {
    title: '全球云基础设施',
    description: '在全球29个地域、87个可用区提供高效、稳定的计算服务。已为全球500万客户提供算力服务，助力企业实现数字化转型和业务创新，为企业出海和新市场拓展提供算力保障。',
    highlights: ['29个地域', '87个可用区', '500万客户'],
    category: '全球覆盖',
    metric: '29个地域',
    iconType: 'globe'
  },
  {
    title: '自研CIPU架构',
    description: '基于优刻云自研软硬件一体CIPU架构，网络带宽升级至400G，支持最高6000万PPS，360万IOPS，网络时延降低到8微秒。满足各种场景需求，针对AI训练与推理场景深度优化，加速AI业务创新。',
    highlights: ['400G带宽', '6000万PPS', '8微秒时延'],
    category: '性能领先',
    metric: '400G',
    iconType: 'cpu'
  },
  {
    title: '多层防护',
    description: '通过多方国际安全认证，为企业提供完善的安全性保障。提供DDoS防护、操作系统漏洞检测、木马查杀等服务，降低业务安全风险。提供可信计算、硬件加密、虛拟化加密计算的实例与云盘数据加密功能，减少数据泄露风险。',
    highlights: ['国际安全认证', 'DDoS防护', '硬件加密'],
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
        "bg-white border border-slate-200/60 shadow-sm hover:shadow-lg",
        "before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-50/30 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500",
        "hover:before:opacity-100",
        isExpanded ? "flex-[3]" : "flex-[1]"
      )}
      style={{
        backgroundImage: 'url(/images/screenshots/Advantage-4.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
      onMouseEnter={onToggle}
    >


      {/* 主要内容区域 */}
      <div className="relative h-full flex flex-col p-8 pt-10">
        {/* 顶部类别标签 */}
        <div className="mb-6">
          <span className={clsx(
            "inline-flex items-center px-3 py-1 text-xs font-medium transition-all duration-500",
            "bg-blue-50 text-blue-700 border border-blue-100",
            isExpanded ? "opacity-100 scale-100" : "opacity-70 scale-95"
          )}>
            {advantage.category}
          </span>
        </div>

        {/* 标题与关键指标区域 */}
        <div className="mb-8">
          <div className="flex items-start justify-between mb-4">
            <h3 className={clsx(
              "font-bold transition-all duration-500 text-slate-900 leading-tight",
              isExpanded ? "text-xl" : "text-lg",
              "max-w-[75%]"
            )}>
              {advantage.title}
            </h3>

            {/* 图标容器 */}
            <div className={clsx(
              "flex-shrink-0 p-2.5 transition-all duration-500",
              "bg-blue-50 border border-blue-100",
              isExpanded ? "opacity-100 scale-110" : "opacity-80 scale-100"
            )}>
              <IconComponent className="h-5 w-5 text-blue-600" />
            </div>
          </div>

          {/* 关键指标突出显示 */}
          <div className={clsx(
            "transition-all duration-500 delay-100",
            isExpanded ? "opacity-100 translate-y-0" : "opacity-60 translate-y-2"
          )}>
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl font-bold text-blue-600">{advantage.metric}</span>
              <span className="text-sm text-slate-500 font-medium">核心指标</span>
            </div>
          </div>
        </div>

        {/* 展开内容区域 */}
        <div className={clsx(
          "transition-all duration-700 delay-200 flex-1",
          isExpanded ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
        )}>
          {/* 描述文本 */}
          <div className="mb-8">
            <p className="text-base leading-relaxed text-slate-700 font-light">
              {advantage.description}
            </p>
          </div>

          {/* 核心亮点列表 */}
          <div className="space-y-4">
            <h4 className="text-base font-semibold text-slate-900 flex items-center mb-4">
              核心亮点
            </h4>
            <div className="grid gap-3">
              {advantage.highlights.map((highlight, highlightIndex) => (
                <div
                  key={highlightIndex}
                  className={clsx(
                    "flex items-center text-sm text-slate-600 transition-all duration-500",
                    "hover:text-slate-800 hover:translate-x-1"
                  )}
                  style={{ transitionDelay: `${highlightIndex * 150 + 400}ms` }}
                >
                  <div className="mr-3 h-1.5 w-1.5 bg-slate-400 flex-shrink-0" />
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
                  i === index ? "w-8 bg-slate-600" : "w-2 bg-slate-300",
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
            <ArrowRightIcon className="h-4 w-4 text-blue-600" />
          </div>
        </div>

        {/* 右上角序号标识 */}
        <div className="absolute top-6 right-6">
          <div className={clsx(
            "w-8 h-8 flex items-center justify-center transition-all duration-500",
            "bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600",
            isExpanded ? "scale-110 bg-blue-50 border-blue-200 text-blue-700" : "scale-100"
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
    <div
      className="relative overflow-hidden h-[280px] sm:h-[320px] group bg-white border border-slate-200/60 shadow-sm hover:shadow-md transition-all duration-500"
      style={{
        backgroundImage: 'url(/images/screenshots/Advantage-1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >


      {/* 内容区域 */}
      <div className="relative h-full flex flex-col p-5 sm:p-6 pt-6">
        {/* 顶部类别标签与序号 */}
        <div className="flex items-center justify-between mb-4">
          <span className="inline-flex items-center px-2.5 py-1 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
            {advantage.category}
          </span>
          <div className="w-6 h-6 flex items-center justify-center bg-slate-50 border border-slate-200 text-xs font-bold text-slate-600">
            {String(index + 1).padStart(2, '0')}
          </div>
        </div>

        {/* 标题与图标区域 */}
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-tight flex-1 pr-3">
            {advantage.title}
          </h3>
          <div className="flex-shrink-0 p-2 bg-blue-50 border border-blue-100">
            <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
          </div>
        </div>

        {/* 关键指标突出显示 */}
        <div className="mb-4">
          <div className="flex items-baseline space-x-2">
            <span className="text-xl sm:text-2xl font-bold text-blue-600">{advantage.metric}</span>
            <span className="text-xs text-slate-500 font-medium">核心指标</span>
          </div>
        </div>

        {/* 描述文本 */}
        <p className="text-sm leading-relaxed text-slate-700 mb-4 flex-1 line-clamp-3 sm:line-clamp-4 font-light">
          {advantage.description}
        </p>

        {/* 核心亮点列表 */}
        <div className="space-y-2 mt-auto">
          <h4 className="text-sm font-semibold text-slate-900 flex items-center mb-3">
            核心亮点
          </h4>
          <div className="space-y-2">
            {advantage.highlights.slice(0, 2).map((highlight, highlightIndex) => (
              <div
                key={highlightIndex}
                className="flex items-center text-sm text-slate-600"
              >
                <div className="mr-2 h-1 w-1 bg-slate-400 flex-shrink-0" />
                <span className="font-medium">{highlight}</span>
              </div>
            ))}
            {advantage.highlights.length > 2 && (
              <div className="text-sm text-blue-600 font-medium ml-3">
                +{advantage.highlights.length - 2}项更多优势
              </div>
            )}
          </div>
        </div>

        {/* 底部进度指示器 */}
        <div className="absolute bottom-4 left-5 right-5">
          <div className="flex items-center space-x-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={clsx(
                  "h-0.5 transition-all duration-300",
                  i === index ? "w-6 bg-slate-600" : "w-1.5 bg-slate-300",
                  i <= index ? "opacity-100" : "opacity-50"
                )}
              />
            ))}
          </div>
        </div>
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
      className="py-12 sm:py-16 lg:py-24"
      style={{
        fontFamily: 'pingfang SC, helvetica neue, arial, hiragino sans gb, microsoft yahei ui, microsoft yahei, simsun, sans-serif',
        background: '#f7f8fb'
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1800px' }}>
        {/* 标题区域 */}
        <div className="text-left mb-4 sm:mb-6 md:mb-10 lg:mb-16">
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            产品优势
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-4xl">
            优刻云云服务器 ECS是优刻云提供的性能卓越、稳定可靠、弹性扩展的IaaS（Infrastructure as a Service）级别云计算服务。选择云服务器 ECS，您可以轻松构建具备以下优势的计算资源。
          </p>
        </div>

        {/* PC端手风琴布局 - 隐藏在移动端 */}
        <div className="hidden lg:flex h-[400px] xl:h-[500px] gap-2 overflow-hidden">
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

        {/* 移动端网格布局 - 隐藏在PC端 */}
        <div className="lg:hidden">
          {/* 平板端：两行两列 */}
          <div className="hidden sm:grid sm:grid-cols-2 sm:gap-4 sm:mb-6 lg:hidden">
            {advantages.slice(0, 4).map((advantage, index) => (
              <MobileAdvantageCard
                key={index}
                advantage={advantage}
                index={index}
              />
            ))}
          </div>

          {/* 平板端：剩余的一个卡片单独一行 */}
          {advantages.length > 4 && (
            <div className="hidden sm:block lg:hidden">
              <MobileAdvantageCard
                advantage={advantages[4]}
                index={4}
              />
            </div>
          )}

          {/* 手机端：单列布局 */}
          <div className="sm:hidden">
            <div className="space-y-3">
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
      </div>
    </section>
  )
}
