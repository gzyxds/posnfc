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
  CloudIcon,
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
 * 采用蓝白色调为主的现代企业设计风格，突出POS机业务与服务能力
 */
const advantages: AdvantageCard[] = [
  {
    title: '银联正规POS机',
    description:
      '银盛、拉卡拉、中付、乐刷等银联正规POS机，支持多种支付方式。采用银联安全认证，确保交易安全稳定。',
    highlights: ['银联认证', '多支付方式', '交易安全'],
    category: '支付安全',
    metric: '银联认证',
    iconType: 'shield',
  },
  {
    title: '灵活费率',
    description:
      '支持多种费率方案,可灵活选择。即时开通POS机,按需调整收款方式。',
    highlights: ['多种费率', '即时开通', '灵活收款'],
    category: '费率优化',
    metric: '低费率',
    iconType: 'currency',
  },
  {
    title: '全国POS机服务',
    description:
      '全国29个省市提供稳定POS机服务,已服务500万商户客户,助力数字经营。',
    highlights: ['29省市', '87服务网点', '500万+'],
    category: '全国覆盖',
    metric: '29个省市',
    iconType: 'globe',
  },
  {
    title: '智能POS终端',
    description:
      '采用智能POS终端,支持4G网络,支持6000万笔交易和360万次扫码,网络延迟低至0.3秒,针对移动收款优化。',
    highlights: ['4G网络', '6000万笔交易', '0.3秒响应'],
    category: '性能领先',
    metric: '智能终端',
    iconType: 'cpu',
  },
  {
    title: '多重加密',
    description:
      '提供多重安全加密机制,包括交易加密、数据保护和风控系统,确保商户收款安全。',
    highlights: ['交易加密', '数据保护', '风控系统'],
    category: '安全防护',
    metric: '多重加密',
    iconType: 'lock',
  },
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
    cloud: CloudIcon,
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
  onToggle,
}: {
  advantage: AdvantageCard
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const IconComponent = getIconByType(advantage.iconType)

  return (
    <div
      className={clsx(
        'group relative cursor-pointer overflow-hidden border border-gray-200 transition-all duration-700 ease-out',
        'rounded-none md:rounded-none', // 所有端都使用直角设计
        isExpanded
          ? 'flex-[2] md:flex-[2.5] lg:flex-[3]' // 响应式展开比例
          : 'flex-[1] md:flex-[1.2] lg:flex-[1.5]',
      )}
      style={{
        backgroundColor: isExpanded ? '#ffffff' : '#05f',
      }}
      onMouseEnter={onToggle}
    >
      {/* 主要内容区域 */}
      <div className="relative flex h-full flex-col p-3 pt-4 sm:p-4 sm:pt-5 md:p-5 md:pt-6 lg:p-6 lg:pt-7 xl:p-7 xl:pt-8 2xl:p-8 2xl:pt-10">
        {/* 顶部类别标签 - 与右上角序号垂直居中对齐 */}
        <div className="mb-2 flex items-center sm:mb-3 md:mb-4 lg:mb-5 xl:mb-6">
          <span className={clsx(
            "inline-flex items-center px-2 py-0.5 text-xs font-medium sm:px-2.5 sm:py-1 sm:text-xs lg:px-3 lg:text-xs",
            isExpanded
              ? "border border-blue-100 bg-blue-50 text-blue-700"
              : "border border-white/30 bg-white/20 text-white"
          )}>
            {advantage.category}
          </span>
        </div>

        {/* 标题与关键指标区域 */}
        <div className="mb-3 sm:mb-4 md:mb-5 lg:mb-6 xl:mb-7 2xl:mb-8">
          <div className="mb-2 flex items-center justify-start sm:mb-3 lg:mb-4">
            {/* 图标容器 */}
            <div className="flex-shrink-0 p-1.5 sm:p-2 lg:p-2.5">
              <IconComponent className={clsx(
                "h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5",
                isExpanded ? "text-blue-600" : "text-white"
              )} />
            </div>

            <h3
              className={clsx(
                'leading-tight font-bold transition-all duration-500',
                isExpanded
                  ? 'text-sm text-slate-900 sm:text-base md:text-lg lg:text-xl xl:text-2xl'
                  : 'text-sm text-white sm:text-base md:text-lg lg:text-xl xl:text-xl',
              )}
            >
              {advantage.title}
            </h3>
          </div>

          {/* 关键指标突出显示 */}
          <div
            className={clsx(
              'transition-all delay-100 duration-500',
              isExpanded
                ? 'translate-y-0 opacity-100'
                : 'translate-y-1 opacity-80',
            )}
          >
            <div className="flex items-baseline space-x-1 sm:space-x-1.5 lg:space-x-2">
              <span
                className={clsx(
                  'font-bold transition-all duration-500',
                  'text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl',
                  isExpanded ? 'text-blue-600' : 'text-white drop-shadow-sm',
                )}
              >
                {advantage.metric}
              </span>
              <span
                className={clsx(
                  'text-xs font-medium transition-all duration-500 sm:text-xs lg:text-sm',
                  isExpanded ? 'text-slate-500' : 'text-white/90',
                )}
              >
                核心指标
              </span>
            </div>
          </div>
        </div>

        {/* 未选中时显示的重要文案 */}
        {!isExpanded && (
          <div className="flex flex-1 flex-col justify-start pt-2 sm:pt-3 md:pt-4 lg:pt-5 xl:pt-6">
            <div className="space-y-2 text-center sm:space-y-3 lg:space-y-4">
              <p className="px-1 text-xs leading-relaxed font-medium text-white/90 sm:px-2 sm:text-xs lg:px-3 lg:text-sm">
                {advantage.description.slice(0, 40)}...
              </p>
              <div className="flex justify-center space-x-2 text-xs text-white/80 sm:space-x-3 md:space-x-4 lg:space-x-6">
                {advantage.highlights.slice(0, 2).map((highlight, idx) => (
                  <span key={idx} className="flex items-center font-medium">
                    <div className="mr-1 h-1 w-1 rounded-full bg-white sm:mr-1 sm:h-1 sm:w-1 lg:mr-1.5 lg:h-1.5 lg:w-1.5" />
                    <span className="max-w-[60px] truncate sm:max-w-[70px] md:max-w-[80px] lg:max-w-none">
                      {highlight}
                    </span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* 展开内容区域 - 优化布局结构 */}
        <div
          className={clsx(
            'transition-all delay-200 duration-700',
            isExpanded
              ? 'max-h-[500px] flex-1 opacity-100'
              : 'max-h-0 overflow-hidden opacity-0',
          )}
        >
          {/* 主要内容容器 - 改进内容层次和间距 */}
          <div className="flex h-full flex-col justify-between">
            {/* 文案内容区域 */}
            <div className="flex-1 space-y-4 lg:space-y-5 xl:space-y-6">
              {/* 产品描述 - 优化排版 */}
              <div className="relative">
                <div
                  className={clsx(
                    'absolute top-0 -left-3 h-full w-1 transition-all duration-500',
                    isExpanded ? 'bg-white' : 'bg-[#05f]',
                  )}
                />
                <div className="pl-2 sm:pl-3 md:pl-4">
                  <p
                    className={clsx(
                      'text-xs leading-relaxed transition-all duration-500 sm:text-sm md:text-sm lg:text-base xl:text-lg',
                      'font-normal tracking-wide',
                      isExpanded
                        ? 'text-slate-900 drop-shadow-sm'
                        : 'text-slate-700',
                    )}
                  >
                    {advantage.description}
                  </p>
                </div>
              </div>

              {/* 核心亮点区域 - 改进视觉层次 */}
              <div className="space-y-2 lg:space-y-2.5">
                <div className="flex items-center space-x-2">
                  <div
                    className={clsx(
                      'h-2 w-2 transition-all duration-500',
                      isExpanded ? 'bg-white' : 'bg-blue-600',
                    )}
                  />
                  <h4
                    className={clsx(
                      'text-sm font-semibold transition-all duration-500 lg:text-base',
                      isExpanded ? 'text-slate-900' : 'text-slate-900',
                    )}
                  >
                    核心亮点
                  </h4>
                </div>

                {/* 亮点列表 - 优化布局 */}
                <div className="grid grid-cols-1 gap-1 pl-2 sm:gap-1.5 sm:pl-3 md:gap-1.5 md:pl-4 lg:gap-2">
                  {advantage.highlights.map((highlight, highlightIndex) => (
                    <div
                      key={highlightIndex}
                      className={clsx(
                        'flex items-start space-x-2 py-0.5 text-xs sm:space-x-3 sm:py-1 sm:text-xs lg:text-sm',
                        isExpanded ? 'text-slate-900' : 'text-slate-600',
                      )}
                    >
                      <div
                        className={clsx(
                          'mt-1 h-1 w-1 flex-shrink-0 rounded-full sm:mt-1.5 sm:h-1.5 sm:w-1.5 lg:h-2 lg:w-2',
                          isExpanded ? 'bg-slate-900 shadow-sm' : 'bg-blue-500',
                        )}
                      />
                      <span className="leading-relaxed font-medium">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 底部装饰与状态指示器 */}
        <div className="absolute right-4 bottom-3 left-4 flex items-center justify-between sm:right-6 sm:bottom-4 sm:left-6 md:right-7 md:bottom-5 md:left-7 lg:right-8 lg:bottom-6 lg:left-8">
          {/* 进度指示器 */}
          <div
            className={clsx(
              'flex items-center space-x-0.5 transition-all duration-500 sm:space-x-1',
              isExpanded ? 'opacity-100' : 'opacity-40',
            )}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className={clsx(
                  'h-0.5 transition-all duration-300 sm:h-1',
                  i === index
                    ? isExpanded
                      ? 'w-4 bg-white/90 sm:w-6 md:w-8'
                      : 'w-4 bg-white sm:w-6 md:w-8'
                    : isExpanded
                      ? 'w-1 bg-white/40 sm:w-2'
                      : 'w-1 bg-white/60 sm:w-2',
                  i <= index ? 'opacity-100' : 'opacity-50',
                )}
                style={{ transitionDelay: `${i * 100}ms` }}
              />
            ))}
          </div>

          {/* 展开指示器 */}
          <div
            className={clsx(
              'transition-all duration-500',
              isExpanded ? 'rotate-90 opacity-100' : 'rotate-0 opacity-60',
            )}
          >
            <ArrowRightIcon
              className={clsx(
                'h-3 w-3 sm:h-4 sm:w-4',
                isExpanded ? 'text-white' : 'text-white',
              )}
            />
          </div>
        </div>

        {/* 右上角序号标识 */}
        <div className="absolute top-4 right-3 sm:top-5 sm:right-4 md:top-6 md:right-5 lg:top-7 lg:right-6 xl:top-8 2xl:top-10">
          <div
            className={clsx(
              'flex h-6 w-6 items-center justify-center transition-all duration-500 sm:h-7 sm:w-7 md:h-8 md:w-8',
              'text-xs font-bold sm:text-xs md:text-xs',
              isExpanded
                ? 'scale-110 border border-white/30 bg-white/20 text-white backdrop-blur-sm'
                : 'scale-100 border border-white/30 bg-white/20 text-white backdrop-blur-sm',
            )}
          >
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
  index,
}: {
  advantage: AdvantageCard
  index: number
}) {
  const IconComponent = getIconByType(advantage.iconType)

  return (
    <div className="relative rounded-none border border-gray-300 bg-white p-4 transition-colors duration-200 hover:border-gray-400">
      {/* 顶部区域：类别标签和序号 */}
      <div className="mb-3 flex items-center justify-between">
        <span className="bg-blue-50 px-2 py-1 text-xs font-medium text-blue-600">
          {advantage.category}
        </span>
        <span className="flex h-5 w-5 items-center justify-center bg-gray-50 text-xs font-bold text-gray-400">
          {index + 1}
        </span>
      </div>

      {/* 标题与图标 */}
      <div className="mb-3 flex items-center">
        <IconComponent className="mr-2 h-5 w-5 flex-shrink-0 text-blue-600" />
        <h3 className="text-base font-semibold text-gray-900">
          {advantage.title}
        </h3>
      </div>

      {/* 关键指标 */}
      <div className="mb-3">
        <span className="text-xl font-bold text-blue-600">
          {advantage.metric}
        </span>
        <span className="ml-1 text-xs text-gray-500">核心指标</span>
      </div>

      {/* 描述文本 */}
      <p className="mb-3 text-sm leading-relaxed text-gray-600">
        {advantage.description}
      </p>

      {/* 核心亮点 - 简化显示 */}
      <div className="flex flex-wrap gap-1">
        {advantage.highlights.map((highlight, highlightIndex) => (
          <span
            key={highlightIndex}
            className="bg-gray-50 px-2 py-1 text-xs text-gray-600"
          >
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
 * 展示POS机办理服务的核心产品优势，支持多端适配
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
        fontFamily:
          'pingfang SC, helvetica neue, arial, hiragino sans gb, microsoft yahei ui, microsoft yahei, simsun, sans-serif',
        background: '#f7f8fb',
      }}
    >
      <div
        className="mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12"
        style={{ maxWidth: '1800px' }}
      >
        {/* 标题区域 - 响应式优化 */}
        <div className="mb-6 text-left sm:mb-8 md:mb-10 lg:mb-12 xl:mb-16 2xl:mb-20">
          <h2 className="mb-3 text-xl leading-tight font-bold text-gray-900 sm:mb-4 sm:text-2xl md:mb-5 md:text-3xl lg:mb-6 lg:text-4xl xl:mb-8 xl:text-5xl 2xl:text-6xl">
            产品优势
          </h2>
          <p className="max-w-none text-sm leading-relaxed text-gray-600 sm:max-w-2xl sm:text-base md:max-w-3xl md:text-lg lg:max-w-4xl lg:text-xl xl:max-w-5xl xl:text-2xl">
            银盛、拉卡拉、中付、乐刷等银联正规POS机办理服务，是您安全可靠的移动收款、码牌收款解决方案。选择POS机办理服务，您可以轻松构建具备以下优势的支付收款系统。
          </p>
        </div>

        {/* 桌面端手风琴布局 - 大屏幕显示 */}
        <div className="hidden h-[450px] gap-2 overflow-hidden xl:flex 2xl:h-[500px]">
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
        <div className="hidden h-[350px] gap-1.5 overflow-hidden md:flex lg:h-[400px] lg:gap-2 xl:hidden">
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
                <MobileAdvantageCard advantage={advantage} index={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
