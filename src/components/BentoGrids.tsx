'use client'

import { useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import {
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  CurrencyYenIcon,
  ClockIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

/**
 * 产品特性卡片数据接口
 * @interface FeatureCard
 * @property {string} category - 功能分类
 * @property {string} title - 卡片标题
 * @property {string} description - 功能描述
 * @property {string[]} features - 核心功能特性
 * @property {string} bgImage - 背景图片
 * @property {React.ComponentType} icon - 图标组件
 * @property {string} topLeftText - 左上角文本
 * @property {string} bottomLeftText - 左下角文本
 */
interface FeatureCard {
  category: string
  title: string
  description: string
  features: string[]
  bgImage: string
  icon: React.ComponentType<{ className?: string }>
  topLeftText: string
  bottomLeftText: string
}

/**
 * 产品特性数据配置
 */
const features: FeatureCard[] = [
  {
    category: '电签POS',
    title: '0.38%费率永不涨价',
    description: '银盛/拉卡拉/中付/乐刷电签POS机，支持信用卡、花呗、数字人民币等多种支付方式。0.38%费率写入电子协议，永不+3，激活一台返299元，个人商户均可申请。',
    features: ['0.38%超低费率', '多种支付方式', '激活返现299元'],
    bgImage: '/images/screenshots/solution-1.png',
    icon: CreditCardIcon,
    topLeftText: '央行一清牌照',
    bottomLeftText: '资金安全有保障',
  },
  {
    category: '秒到账',
    title: '交易资金快速到账',
    description: '7:00-22:30交易秒到账，22:30-次日7:00T+1上午10点前到账，节假日正常。支持自定义提现，资金周转快，让您经营更灵活，资金更自由。',
    features: ['交易秒到账', '自定义提现', '资金周转快'],
    bgImage: '/images/screenshots/solution-5.png',
    icon: ClockIcon,
    topLeftText: '365天全天候服务',
    bottomLeftText: '专业客服支持',
  },
  {
    category: '安全防护',
    title: '全方位安全保障',
    description: '采用银联认证加密技术，支持芯片/磁条卡、贷记/借记卡全都可以受理。内置4G网络，前30天免费，每年仅需48元流量费，安全稳定不中断。',
    features: ['银联加密技术', '4G网络稳定', '全年低流量费'],
    bgImage: '/images/screenshots/solution-1.png',
    icon: ShieldCheckIcon,
    topLeftText: '24/7全天候监控',
    bottomLeftText: '交易安全无忧',
  },
  {
    category: '移动收款',
    title: '多场景收款解决方案',
    description: '支持微信、支付宝、花呗、云闪付、Apple Pay、Huawei Pay等主流支付方式。适配餐厅、零售、地摊、外卖等多种场景，满足不同商户需求。',
    features: ['全渠道支付', '多场景适配', '无营业执照可办'],
    bgImage: '/images/screenshots/solution-2.png',
    icon: DevicePhoneMobileIcon,
    topLeftText: '覆盖全行业场景',
    bottomLeftText: '一站式收款方案',
  },
  {
    category: '代理加盟',
    title: '0加盟费总部直签',
    description: '0加盟费1台起拿，分润万12-万16终身锁，激活返现299元/台。提供话术+素材+地推点位，支持无限下级，分润差实时结算，轻松创业。',
    features: ['0加盟费', '分润万12起', '无限下级代理'],
    bgImage: '/images/screenshots/solution-4.png',
    icon: CurrencyYenIcon,
    topLeftText: '专业团队支持',
    bottomLeftText: '全程培训指导',
  },
]

/**
 * 手风琴特性卡片组件（PC端）
 * @param {FeatureCard} feature - 特性数据
 * @param {number} index - 卡片索引
 * @param {boolean} isExpanded - 是否展开状态
 * @param {() => void} onToggle - 切换展开状态的回调
 * @returns {JSX.Element} 手风琴卡片组件
 */
function AccordionFeatureCard({
  feature,
  index,
  isExpanded,
  onToggle,
}: {
  feature: FeatureCard
  index: number
  isExpanded: boolean
  onToggle: () => void
}) {
  const IconComponent = feature.icon

  return (
    <div
      className={clsx(
        'group relative cursor-pointer overflow-hidden rounded-md shadow-lg transition-all duration-500 ease-in-out',
        isExpanded ? 'flex-[2.5]' : 'flex-[1.2]',
      )}
      onMouseEnter={onToggle}
    >
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${feature.bgImage})`,
          backgroundColor: '#05f',
          backgroundBlendMode: 'overlay',
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
            {feature.title}
          </h3>

          {/* 箭头按钮图标 */}
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
          {/* 分类标签 */}
          <div className="mb-4">
            <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-sm font-medium text-white">
              {feature.category}
            </span>
          </div>

          {/* 描述文本 */}
          <p className="mb-6 text-base leading-relaxed text-white/90">
            {feature.description}
          </p>

          {/* 核心功能列表 */}
          <div className="space-y-3">
            <h4 className="mb-3 text-base font-semibold text-white">
              核心功能
            </h4>
            {feature.features.map((featureItem, featureIndex) => (
              <div
                key={featureIndex}
                className={clsx(
                  'flex items-center text-base text-white/80 transition-transform duration-300',
                  isExpanded ? 'translate-x-0' : 'translate-x-2',
                )}
                style={{ transitionDelay: `${featureIndex * 100}ms` }}
              >
                <div className="mr-3 h-2 w-2 rounded-full bg-white/60" />
                {featureItem}
              </div>
            ))}
          </div>
        </div>

        {/* 左下角图标 */}
        <div className="absolute bottom-4 left-4">
          <IconComponent
            className={clsx(
              'h-6 w-6 text-white transition-opacity duration-300',
              isExpanded ? 'opacity-100' : 'opacity-80',
            )}
          />
        </div>

        {/* 右下角直角装饰元素 */}
        <div className="absolute right-4 bottom-4">
          <div
            className={clsx(
              'relative h-6 w-6 transition-all duration-300',
              isExpanded ? 'scale-100 opacity-100' : 'scale-95 opacity-80',
            )}
          >
            <div className="absolute right-0 bottom-0 h-4 w-4 border-r-2 border-b-2 border-white/60" />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 移动端特性卡片组件
 * @param {FeatureCard} feature - 特性数据
 * @param {number} index - 卡片索引
 * @returns {JSX.Element} 移动端卡片组件
 */
function MobileFeatureCard({
  feature,
  index,
}: {
  feature: FeatureCard
  index: number
}) {
  const IconComponent = feature.icon

  return (
    <div className="xs:h-[220px] group relative h-[180px] overflow-hidden rounded-md shadow-lg sm:h-[280px]">
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${feature.bgImage})`,
          backgroundColor: '#05f',
          backgroundBlendMode: 'overlay',
        }}
      />

      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* 内容区域 */}
      <div className="relative flex h-full flex-col p-3 sm:p-4">
        {/* 标题和图标 */}
        <div className="mb-2 flex items-center justify-between sm:mb-3">
          <h3 className="text-base font-bold text-white sm:text-lg">
            {feature.title}
          </h3>
          <IconComponent className="h-4 w-4 text-white/80 sm:h-5 sm:w-5" />
        </div>

        {/* 分类标签 */}
        <div className="mb-2">
          <span className="inline-block rounded-md bg-white/20 px-2 py-0.5 text-xs font-medium text-white sm:text-sm">
            {feature.category}
          </span>
        </div>

        {/* 描述文本 */}
        <p className="mb-2 line-clamp-2 flex-1 text-xs leading-relaxed text-white/90 sm:mb-4 sm:line-clamp-3 sm:text-sm">
          {feature.description}
        </p>

        {/* 核心功能列表 */}
        <div className="space-y-1 sm:space-y-2">
          <h4 className="text-xs font-semibold text-white sm:text-sm">
            核心功能
          </h4>
          {feature.features.slice(0, 2).map((featureItem, featureIndex) => (
            <div
              key={featureIndex}
              className="flex items-center text-xs text-white/80 sm:text-sm"
            >
              <div className="mr-1.5 h-1 w-1 rounded-full bg-white/60 sm:mr-2 sm:h-1.5 sm:w-1.5" />
              {featureItem}
            </div>
          ))}
          {feature.features.length > 2 && (
            <div className="text-xs text-white/60 sm:text-sm">...</div>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * BentoGrids组件 - 展示产品特性的手风琴布局
 * PC端：手风琴样式，移动端：网格布局
 * 使用手风琴设计模式展示不同的产品功能和特性
 * @returns {JSX.Element} BentoGrids组件
 */
export default function BentoGrids() {
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
      id="features"
      aria-label="产品特性"
      className="py-12 sm:py-16 lg:py-24"
      style={{
        fontFamily:
          'pingfang SC, helvetica neue, arial, hiragino sans gb, microsoft yahei ui, microsoft yahei, simsun, sans-serif',
        background: '#ffffff',
      }}
    >
      <div
        className="mx-auto px-4 sm:px-6 lg:px-8"
        style={{ maxWidth: '1800px' }}
      >
        {/* 标题区域 */}
        <div className="mb-4 text-left sm:mb-6 md:mb-10 lg:mb-16">
          <h2 className="text-xs/6 font-semibold text-indigo-600 sm:text-sm/6 md:text-base/7">
            POS机办理
          </h2>
          <p className="mt-1 max-w-lg text-2xl font-semibold tracking-tight text-pretty text-gray-950 sm:mt-2 sm:text-3xl md:text-4xl lg:text-5xl">
            收款所需的一切服务
          </p>
        </div>

        {/* PC端手风琴布局 - 隐藏在移动端 */}
        <div className="hidden h-[400px] gap-2 overflow-hidden lg:flex xl:h-[500px]">
          {features.map((feature, index) => (
            <AccordionFeatureCard
              key={index}
              feature={feature}
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
            {features.slice(0, 4).map((feature, index) => (
              <MobileFeatureCard
                key={index}
                feature={feature}
                index={index}
              />
            ))}
          </div>

          {/* 平板端：剩余的一个卡片单独一行 */}
          {features.length > 4 && (
            <div className="hidden sm:block lg:hidden">
              <MobileFeatureCard feature={features[4]} index={4} />
            </div>
          )}

          {/* 手机端：单列布局 */}
          <div className="sm:hidden">
            <div className="space-y-3">
              {features.map((feature, index) => (
                <MobileFeatureCard
                  key={index}
                  feature={feature}
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
