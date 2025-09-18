'use client'

import { useId, useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  ChartBarIcon,
  ArrowRightIcon,
  CreditCardIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  BuildingOfficeIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline'

/**
 * 解决方案卡片数据接口
 * @interface SolutionCard
 * @property {string} title - 卡片标题
 * @property {string} description - 功能描述
 * @property {string[]} features - 核心功能特性
 * @property {string} bgColor - 背景渐变色
 * @property {string} accentColor - 强调色
 */
interface SolutionCard {
  title: string
  description: string
  features: string[]
  bgColor: string
  accentColor: string
  bgImage: string
}

/**
 * 解决方案数据配置
 */
const solutions: SolutionCard[] = [
  {
    title: '零售商户解决方案',
    description:
      '专为零售商户打造的电签POS机解决方案，支持多种支付方式，操作简便，结算快速，帮助商户提升经营效率，降低运营成本',
    features: ['多种支付方式', '操作简便', '结算快速'],
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    accentColor: 'text-blue-600',
    bgImage: '/images/screenshots/solution-1.png',
  },
  {
    title: '餐饮行业解决方案',
    description:
      '针对餐饮行业特点定制的电签POS机解决方案，支持扫码点餐、快速结账、会员管理等功能，提升餐厅运营效率和顾客体验',
    features: ['扫码点餐', '快速结账', '会员管理'],
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    accentColor: 'text-purple-600',
    bgImage: '/images/screenshots/solution-2.png',
  },
  {
    title: '电商物流解决方案',
    description:
      '为电商物流行业提供电签POS机解决方案，支持货到付款、快递代收、电子签名等功能，提高物流效率和资金周转速度',
    features: ['货到付款', '快递代收', '电子签名'],
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
    accentColor: 'text-green-600',
    bgImage: '/images/screenshots/solution-3.png',
  },
  {
    title: '连锁门店解决方案',
    description:
      '为连锁门店提供电签POS机解决方案，支持统一管理、数据同步、会员互通等功能，帮助连锁企业实现标准化管理和运营',
    features: ['统一管理', '数据同步', '会员互通'],
    bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
    accentColor: 'text-red-600',
    bgImage: '/images/screenshots/solution-4.png',
  },
  {
    title: '小微商户解决方案',
    description:
      '专为小微商户设计的电签POS机解决方案，低成本、易操作、功能全面，帮助小微商户实现数字化转型，提升竞争力',
    features: ['低成本', '易操作', '功能全面'],
    bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
    accentColor: 'text-orange-600',
    bgImage: '/images/screenshots/solution-5.png',
  },
]

/**
 * 根据标题获取对应的图标组件
 * @param {string} title - 卡片标题
 * @returns {React.ComponentType} 对应的图标组件
 */
function getIconByTitle(title: string) {
  switch (title) {
    case '零售商户解决方案':
      return CreditCardIcon
    case '餐饮行业解决方案':
      return ShoppingBagIcon
    case '电商物流解决方案':
      return BuildingOfficeIcon
    case '连锁门店解决方案':
      return ChartPieIcon
    case '小微商户解决方案':
      return ShoppingCartIcon
    default:
      return ChartBarIcon
  }
}

/**
 * 解决方案手风琴卡片组件（PC端）
 * @param {SolutionCard} solution - 解决方案数据
 * @param {number} index - 卡片索引
 * @param {boolean} isExpanded - 是否展开状态
 * @param {() => void} onToggle - 切换展开状态的回调
 * @returns {JSX.Element} 手风琴卡片组件
 */
function SolutionCard({
  solution,
  index,
  isExpanded,
  onToggle,
}: {
  solution: SolutionCard
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={clsx(
        'group relative cursor-pointer overflow-hidden shadow-lg transition-all duration-500 ease-in-out',
        isExpanded ? 'flex-[2.5]' : 'flex-[1.2]',
      )}
      onMouseEnter={onToggle}
    >
      {/* 背景图片 - 完全无遮罩 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${solution.bgImage})`,
        }}
      />

      {/* 内容区域 */}
      <div className="relative flex h-full flex-col p-6">
        {/* 标题区域 - 始终可见，与箭头按钮对齐 */}
        <div className="mb-12 flex items-center justify-between">
          <h3
            className="py-2 text-xl font-bold text-white transition-all duration-300"
            style={{
              writingMode: 'horizontal-tb',
              textOrientation: 'mixed',
              transition: 'writing-mode 0.3s ease-in-out',
            }}
          >
            {solution.title}
          </h3>

          {/* 箭头按钮图标 - 移动到标题行 */}
          <div
            className={clsx(
              'transition-all duration-300',
              isExpanded
                ? 'translate-x-0 opacity-100'
                : 'translate-x-2 opacity-80',
            )}
          >
            <div className="p-2 transition-colors duration-200 hover:bg-white/10">
              <ArrowRightIcon className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>

        {/* 展开内容 - 始终显示，但选中时更明显 */}
        <div
          className={clsx(
            'flex-1 transition-all delay-100 duration-500',
            isExpanded ? 'opacity-100' : 'opacity-90',
          )}
        >
          {/* 描述文本 */}
          <p className="mb-6 text-base leading-relaxed text-white/90">
            {solution.description}
          </p>

          {/* 核心功能列表 */}
          <div className="space-y-3">
            <h4 className="mb-3 text-base font-semibold text-white">
              核心功能
            </h4>
            {solution.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className={clsx(
                  'flex items-center text-base text-white/80 transition-transform duration-300',
                  isExpanded ? 'translate-x-0' : 'translate-x-2',
                )}
                style={{ transitionDelay: `${featureIndex * 100}ms` }}
              >
                <div className="mr-3 h-2 w-2 rounded-full bg-white/60" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* 左下角图标 - 根据标题动态显示 */}
        <div className="absolute bottom-4 left-4">
          {(() => {
            const IconComponent = getIconByTitle(solution.title)
            return (
              <IconComponent
                className={clsx(
                  'h-6 w-6 text-white transition-opacity duration-300',
                  isExpanded ? 'opacity-100' : 'opacity-80',
                )}
              />
            )
          })()}
        </div>

        {/* 右下角直角装饰元素 - 简约版本 */}
        <div className="absolute right-4 bottom-4">
          <div
            className={clsx(
              'relative h-6 w-6 transition-all duration-300',
              isExpanded ? 'scale-100 opacity-100' : 'scale-95 opacity-80',
            )}
          >
            {/* 简约直角边框 */}
            <div className="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 border-white/60" />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 移动端解决方案卡片组件
 * @param {SolutionCard} solution - 解决方案数据
 * @param {number} index - 卡片索引
 * @returns {JSX.Element} 移动端卡片组件
 */
function MobileSolutionCard({
  solution,
  index,
}: {
  solution: SolutionCard
  index: number
}) {
  return (
    <div className="xs:h-[220px] group relative h-[180px] overflow-hidden shadow-lg sm:h-[280px]">
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${solution.bgImage})`,
        }}
      />

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* 内容区域 */}
      <div className="relative flex h-full flex-col p-3 sm:p-4">
        {/* 标题和图标 */}
        <div className="mb-2 flex items-center justify-between sm:mb-3">
          <h3 className="text-base font-bold text-white sm:text-lg">
            {solution.title}
          </h3>
          {(() => {
            const IconComponent = getIconByTitle(solution.title)
            return (
              <IconComponent className="h-4 w-4 text-white/80 sm:h-5 sm:w-5" />
            )
          })()}
        </div>

        {/* 描述文本 */}
        <p className="mb-2 line-clamp-3 flex-1 text-xs leading-relaxed text-white/90 sm:mb-4 sm:line-clamp-4 sm:text-sm">
          {solution.description}
        </p>

        {/* 核心功能列表 */}
        <div className="space-y-1 sm:space-y-2">
          <h4 className="text-xs font-semibold text-white sm:text-sm">
            核心功能
          </h4>
          {solution.features.slice(0, 2).map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className="flex items-center text-xs text-white/80 sm:text-sm"
            >
              <div className="mr-1.5 h-1 w-1 rounded-full bg-white/60 sm:mr-2 sm:h-1.5 sm:w-1.5" />
              {feature}
            </div>
          ))}
          {solution.features.length > 2 && (
            <div className="text-xs text-white/60 sm:text-sm">...</div>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * 解决方案展示组件 - 响应式设计
 * PC端：手风琴样式，移动端：网格布局
 * 电签POS机全行业解决方案，满足各类商户支付需求
 * @returns {JSX.Element} 解决方案组件
 */
export function Solution() {
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
      id="solutions"
      aria-label="电签POS机全行业解决方案"
      className="py-12 sm:py-16 lg:py-24"
      style={{
        fontFamily:
          'pingfang SC, helvetica neue, arial, hiragino sans gb, microsoft yahei ui, microsoft yahei, simsun, sans-serif',
        background: '#f7f8fb',
      }}
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: '1800px' }}
      >
        {/* 标题区域 */}
        <div className="mb-4 text-left sm:mb-6 md:mb-10 lg:mb-16">
          <h2 className="mb-2 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl md:text-3xl lg:text-5xl">
            电签POS机全行业解决方案，满足各类商户支付需求
          </h2>
        </div>

        {/* PC端手风琴布局 - 隐藏在移动端 */}
        <div className="hidden h-[400px] gap-2 overflow-hidden lg:flex xl:h-[500px]">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              solution={solution}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => handleCardToggle(index)}
            />
          ))}
        </div>

        {/* 移动端网格布局 - 隐藏在PC端 */}
        <div className="lg:hidden">
          {/* 平板端：两行两列 */}
          <div className="hidden sm:mb-6 sm:grid sm:grid-cols-2 sm:gap-4 lg:hidden">
            {solutions.slice(0, 4).map((solution, index) => (
              <MobileSolutionCard
                key={index}
                solution={solution}
                index={index}
              />
            ))}
          </div>

          {/* 平板端：剩余的一个卡片单独一行 */}
          {solutions.length > 4 && (
            <div className="hidden sm:block lg:hidden">
              <MobileSolutionCard solution={solutions[4]} index={4} />
            </div>
          )}

          {/* 手机端：单列布局 */}
          <div className="sm:hidden">
            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <MobileSolutionCard
                  key={index}
                  solution={solution}
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
