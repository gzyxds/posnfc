'use client'

import { useId, useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  ChartBarIcon,
  ArrowRightIcon,
  VideoCameraIcon,
  RadioIcon,
  AcademicCapIcon,
  PuzzlePieceIcon,
  FilmIcon,
} from '@heroicons/react/24/outline'

/**
 * 支付场景解决方案卡片数据接口
 * @interface PaymentSolutionCard
 * @property {string} title - 场景名称
 * @property {string} description - 场景描述和支付解决方案
 * @property {string[]} features - 核心支付功能特性
 * @property {string} bgColor - 背景渐变色
 * @property {string} accentColor - 强调色
 */
interface PaymentSolutionCard {
  title: string
  description: string
  features: string[]
  bgColor: string
  accentColor: string
}

/**
 * 多场景支付解决方案数据配置
 */
const paymentSolutions: PaymentSolutionCard[] = [
  {
    title: '商超',
    description:
      '大型商超智能收银解决方案，支持多种支付方式和商品管理，通过智能POS系统实现快速结账、库存管理和会员营销。集成扫码支付、刷卡支付、现金收银等多元化支付方式，提供完整的商品管理、促销活动和数据分析功能，帮助商超提升收银效率，优化顾客购物体验，实现精准营销和库存优化。',
    features: ['多元支付', '库存管理', '会员营销'],
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    accentColor: 'text-blue-600',
  },
  {
    title: '便利店',
    description:
      '便利店智能收银系统，专为小型零售场景设计的轻量化支付解决方案。支持快速扫码支付、移动支付和传统刷卡，集成商品条码识别、自动计价和小票打印功能。提供简洁易用的操作界面，支持多班次管理和日常对账，帮助便利店提高收银速度，减少排队时间，提升顾客满意度和店铺运营效率。',
    features: ['快速收银', '条码识别', '班次管理'],
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    accentColor: 'text-purple-600',
  },
  {
    title: '水果店',
    description:
      '水果店专业收银解决方案，针对生鲜称重和季节性商品特点定制。支持电子秤集成、按重量计价和新鲜度管理，提供灵活的价格调整和促销设置。集成微信、支付宝等移动支付方式，支持会员积分和优惠券功能，帮助水果店实现精准定价、减少损耗，提升顾客粘性和复购率。',
    features: ['称重计价', '新鲜管理', '积分优惠'],
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
    accentColor: 'text-green-600',
  },
  {
    title: '饮品店',
    description:
      '饮品店智能点餐收银系统，支持个性化定制和快速出单。集成点餐、收银、制作流程管理于一体，支持多种口味、温度、甜度等个性化选择。提供排队叫号、预约取餐和外卖对接功能，支持会员储值和营销活动，帮助饮品店提升点餐效率，优化制作流程，增强顾客体验和品牌忠诚度。',
    features: ['个性定制', '排队叫号', '会员储值'],
    bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
    accentColor: 'text-red-600',
  },
  {
    title: '早餐店',
    description:
      '早餐店高效收银解决方案，专为高峰期快速服务设计。支持预设套餐、快速点餐和移动支付，提供简化的操作流程和快速结账功能。集成外卖平台对接、预约订餐和会员管理，支持营养搭配建议和健康饮食推荐，帮助早餐店在繁忙时段保持高效服务，提升顾客满意度和营业额。',
    features: ['快速点餐', '套餐预设', '外卖对接'],
    bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
    accentColor: 'text-orange-600',
  },
  {
    title: '服装店',
    description:
      '服装店时尚零售收银系统，支持多样化商品管理和季节性营销。集成尺码、颜色、款式等多维度商品属性管理，支持试衣预约、搭配推荐和个性化服务。提供会员等级管理、积分兑换和生日优惠等功能，支持线上线下一体化营销，帮助服装店提升销售转化率，增强顾客购物体验和品牌价值。',
    features: ['多维管理', '搭配推荐', '会员等级'],
    bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
    accentColor: 'text-indigo-600',
  },
]

/**
 * 根据支付场景获取对应的图标组件
 * @param {string} title - 支付场景名称
 * @returns {React.ComponentType} 对应的图标组件
 */
function getIconByTitle(title: string) {
  switch (title) {
    case '商超':
      return ChartBarIcon
    case '便利店':
      return VideoCameraIcon
    case '水果店':
      return AcademicCapIcon
    case '饮品店':
      return PuzzlePieceIcon
    case '早餐店':
      return FilmIcon
    case '服装店':
      return RadioIcon
    default:
      return ChartBarIcon
  }
}

/**
 * 支付场景手风琴卡片组件（PC端）
 * @param {PaymentSolutionCard} solution - 支付解决方案数据
 * @param {number} index - 卡片索引
 * @param {boolean} isExpanded - 是否展开状态
 * @param {() => void} onToggle - 切换展开状态的回调
 * @returns {JSX.Element} 手风琴卡片组件
 */
function PaymentSolutionCard({
  solution,
  index,
  isExpanded,
  onToggle,
}: {
  solution: PaymentSolutionCard
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={clsx(
        'group relative cursor-pointer overflow-hidden border border-gray-200 bg-white transition-all duration-500 ease-in-out',
        isExpanded ? 'flex-[2]' : 'flex-[1.2]',
      )}
      style={{borderRadius: 'var(--border-radius-medium, 4px)'}}
      onMouseEnter={onToggle}
    >
      {/* 内容区域 */}
      <div className="relative flex h-full flex-col p-6">
        {/* 标题区域 - 始终可见，与箭头按钮对齐 */}
        <div className="mb-4 flex items-center justify-between">
          <h3
            className="py-2 text-xl font-bold text-gray-900 transition-all duration-300"
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
            <div className="p-2 transition-colors duration-200 hover:bg-gray-100">
              <ArrowRightIcon className="h-4 w-4 text-gray-600" />
            </div>
          </div>
        </div>

        {/* 未展开时的简化文案 */}
        <div
          className={clsx(
            'mb-4 transition-all duration-300',
            isExpanded ? 'h-0 opacity-0' : 'h-auto opacity-100',
          )}
        >
          <p className="mb-4 text-sm leading-relaxed text-gray-500">
            {solution.description.substring(0, 80)}...
          </p>
          <div className="space-y-2">
            <h4 className="text-sm font-semibold text-gray-900">核心功能</h4>
            {solution.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className="flex items-center text-sm text-gray-600"
              >
                <div className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                {feature}
              </div>
            ))}
          </div>
        </div>

        {/* 展开内容 */}
        <div
          className={clsx(
            'flex-1 transition-all delay-100 duration-500',
            isExpanded ? 'h-auto opacity-100' : 'h-0 overflow-hidden opacity-0',
          )}
        >
          {/* 描述文本 */}
          <p className="mb-6 text-base leading-relaxed text-gray-700">
            {solution.description}
          </p>

          {/* 核心功能列表 */}
          <div className="space-y-3">
            <h4 className="mb-3 text-base font-semibold text-gray-900">
              核心功能
            </h4>
            {solution.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className={clsx(
                  'flex items-center text-base text-gray-600 transition-transform duration-300',
                  isExpanded ? 'translate-x-0' : 'translate-x-4',
                )}
                style={{ transitionDelay: `${featureIndex * 100 + 200}ms` }}
              >
                <div className="mr-3 h-2 w-2 rounded-full bg-blue-500" />
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
              <IconComponent className="h-6 w-6 text-blue-600 opacity-80" />
            )
          })()}
        </div>

        {/* 右下角直角装饰元素 - 简约版本 */}
        <div className="absolute right-4 bottom-4">
          <div
            className={clsx(
              'relative h-6 w-6 transition-all duration-300',
              isExpanded ? 'scale-100 opacity-100' : 'scale-95 opacity-60',
            )}
          >
            {/* 简约直角边框 */}
            <div className="absolute right-0 bottom-0 h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 移动端支付场景卡片组件
 * @param {PaymentSolutionCard} solution - 支付解决方案数据
 * @param {number} index - 卡片索引
 * @returns {JSX.Element} 移动端卡片组件
 */
function MobilePaymentSolutionCard({
  solution,
  index,
}: {
  solution: PaymentSolutionCard
  index: number
}) {
  return (
    <div className="xs:h-[220px] group relative h-[180px] overflow-hidden border border-gray-200 bg-white sm:h-[280px]" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
      {/* 内容区域 */}
      <div className="relative flex h-full flex-col p-3 sm:p-4">
        {/* 标题和图标 */}
        <div className="mb-2 flex items-center justify-between sm:mb-3">
          <h3 className="text-base font-bold text-gray-900 sm:text-lg">
            {solution.title}
          </h3>
          {(() => {
            const IconComponent = getIconByTitle(solution.title)
            return (
              <IconComponent className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />
            )
          })()}
        </div>

        {/* 描述文本 */}
        <p className="mb-2 line-clamp-3 flex-1 text-xs leading-relaxed text-gray-600 sm:mb-4 sm:line-clamp-4 sm:text-sm">
          {solution.description}
        </p>

        {/* 核心功能列表 */}
        <div className="space-y-1 sm:space-y-2">
          <h4 className="text-xs font-semibold text-gray-900 sm:text-sm">
            核心功能
          </h4>
          {solution.features.slice(0, 2).map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className="flex items-center text-xs text-gray-600 sm:text-sm"
            >
              <div className="mr-1.5 h-1 w-1 rounded-full bg-blue-500 sm:mr-2 sm:h-1.5 sm:w-1.5" />
              {feature}
            </div>
          ))}
          {solution.features.length > 2 && (
            <div className="text-xs text-gray-400 sm:text-sm">...</div>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * 多场景支付解决方案展示组件 - 响应式设计
 * PC端：手风琴样式，移动端：网格布局
 * 为不同零售场景提供专业的支付收银解决方案
 * @returns {JSX.Element} 支付场景组件
 */
export function PaymentScenes() {
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
      id="payment-scenes"
      aria-label="多场景支付解决方案"
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
        <div className="mb-4 text-center sm:mb-6 md:mb-10 lg:mb-16">
          <h2 className="mb-2 text-lg font-bold text-gray-900 sm:mb-4 sm:text-xl md:text-3xl lg:text-5xl">
            支付应用场景
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 bg-[#015bfe] sm:mb-8"></div>
          <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-gray-600 sm:px-0 sm:text-lg">
            盖多种商业支付场景，满足不同行业的支付需求
          </p>
        </div>

        {/* PC端手风琴布局 - 隐藏在移动端 */}
        <div className="mb-8 hidden h-[400px] gap-4 overflow-hidden lg:flex xl:h-[500px]">
          {paymentSolutions.map((solution, index) => (
            <PaymentSolutionCard
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
            {paymentSolutions.slice(0, 4).map((solution, index) => (
              <MobilePaymentSolutionCard
                key={index}
                solution={solution}
                index={index}
              />
            ))}
          </div>

          {/* 平板端：剩余的卡片单独一行 */}
          {paymentSolutions.length > 4 && (
            <div className="hidden sm:block lg:hidden">
              <MobilePaymentSolutionCard solution={paymentSolutions[4]} index={4} />
            </div>
          )}

          {/* 手机端：单列布局 */}
          <div className="sm:hidden">
            <div className="space-y-3">
              {paymentSolutions.map((solution, index) => (
                <MobilePaymentSolutionCard
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
