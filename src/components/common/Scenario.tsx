'use client'

import clsx from 'clsx'
import Image from 'next/image'
import {
  CreditCardIcon,
  DevicePhoneMobileIcon,
  CurrencyYenIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { useState } from 'react'

/**
 * POS机服务能力卡片数据接口
 */
interface ServiceCard {
  /** 服务标题 */
  title: string
  /** 服务描述 */
  description: string
  /** 核心特性列表 */
  features: string[]
  /** 图标类型 */
  icon: 'credit' | 'mobile' | 'currency' | 'shield'
  /** 数据指标 */
  metrics?: {
    label: string
    value: string
  }[]
}

/**
 * POS机服务能力数据源
 */
const serviceCards: ServiceCard[] = [
  {
    title: '电签POS机',
    description: '4G网络电签POS机，支持信用卡、借记卡、微信、支付宝等多种支付方式',
    features: ['0.38%超低费率', '秒到账', '电子签名', '交易记录查询'],
    icon: 'credit',
    metrics: [
      { label: '费率', value: '0.38%' },
      { label: '到账时间', value: '秒到' },
    ],
  },
  {
    title: '手机POS',
    description: '无需硬件设备，手机APP即可完成收款，支持多种支付方式',
    features: ['无押金', '无流量费', '支持花呗', '多账户管理'],
    icon: 'mobile',
    metrics: [
      { label: '激活返现', value: '299元' },
      { label: '支持方式', value: '8种' },
    ],
  },
  {
    title: '聚合码牌',
    description: '一码多付，支持微信、支付宝、云闪付等多种扫码支付',
    features: ['自定义提现', '资金周转快', '语音播报', '交易安全'],
    icon: 'currency',
    metrics: [
      { label: '申请时间', value: '10分钟' },
      { label: '结算方式', value: 'T+1' },
    ],
  },
  {
    title: '安全防护',
    description: '央行一清牌照，资金安全有保障，多重加密保护交易安全',
    features: ['一清机', '银联认证', '加密传输', '风控系统'],
    icon: 'shield',
    metrics: [
      { label: '安全等级', value: '银行级' },
      { label: '赔付保障', value: '100万' },
    ],
  },
]

/**
 * 获取图标组件
 * @param iconType - 图标类型
 * @returns 对应的图标组件
 */
function getIconComponent(iconType: string) {
  switch (iconType) {
    case 'credit':
      return CreditCardIcon
    case 'mobile':
      return DevicePhoneMobileIcon
    case 'currency':
      return CurrencyYenIcon
    case 'shield':
      return ShieldCheckIcon
    default:
      return CreditCardIcon
  }
}

/**
 * POS机服务能力卡片组件
 * @param card - 服务卡片数据
 * @param isActive - 是否为激活状态
 * @param onClick - 点击回调函数
 */
function ServiceCard({
  card,
  isActive,
  onClick,
}: {
  card: ServiceCard
  isActive: boolean
  onClick: () => void
}) {
  const IconComponent = getIconComponent(card.icon)

  return (
    <div
      className={clsx(
        'group cursor-pointer overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none',
        isActive
          ? 'shadow-lg'
          : 'hover:shadow-lg',
      )}
      onClick={onClick}
    >
      {/* 卡片头部 - 移动端简化 */}
      <div className="flex items-center gap-x-2 border-b border-gray-900/5 bg-transparent p-3 sm:gap-x-4 sm:p-6">
        <div className="flex h-8 w-8 flex-none items-center justify-center bg-white border border-gray-200 rounded-md sm:h-12 sm:w-12">
          <IconComponent
            className="h-4 w-4 text-blue-600 sm:h-6 sm:w-6"
            aria-hidden="true"
          />
        </div>
        <div className="text-xs leading-5 font-medium text-gray-900 sm:text-sm sm:leading-6">
          {card.title}
        </div>
      </div>

      <div className="p-3 bg-transparent sm:px-6 sm:py-4">
        {/* 移动端隐藏描述文字，桌面端显示 */}
        <p className="hidden mb-4 text-sm leading-6 text-gray-700 sm:block">
          {card.description}
        </p>
        {/* 功能特性列表 - 移动端只显示前2个 */}
        <div className="mb-3 space-y-1 sm:mb-6 sm:space-y-2">
          {card.features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex items-start gap-x-2">
              <div className="mt-1 h-1 w-1 flex-none rounded-full bg-blue-600 sm:mt-2 sm:h-1.5 sm:w-1.5" />
              <span className="text-xs leading-4 text-gray-600 sm:text-sm sm:leading-5">
                {feature}
              </span>
            </div>
          ))}
          {/* 桌面端显示剩余特性 */}
          <div className="hidden sm:block">
            {card.features.slice(2).map((feature, index) => (
              <div key={index + 2} className="flex items-start gap-x-2 mb-2">
                <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                <span className="text-sm leading-5 text-gray-600">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 操作按钮 - 移动端简化为单个按钮 */}
         <div className="flex gap-2 sm:gap-3">
           <button className="flex-1 bg-blue-600 px-2 py-1.5 text-xs font-medium text-white transition-colors duration-200 hover:bg-blue-700 sm:px-4 sm:py-2 sm:text-sm">
             立即体验
           </button>
           <button className="hidden flex-1 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900 sm:block">
             查看详情
           </button>
         </div>
       </div>
     </div>
  )
}

/**
 * 数据展示面板组件
 * @param activeCard - 当前激活的服务卡片
 */
function DataPanel({ activeCard }: { activeCard: ServiceCard | null }) {
  return (
    <div className="flex h-full flex-col overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none">
      {/* 面板头部 */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 py-4 sm:px-6 sm:py-6 md:px-8">
        <div className="mb-2 flex items-center gap-2 sm:mb-3 sm:gap-3">
          <div className="flex h-6 w-6 items-center justify-center bg-white/20 sm:h-8 sm:w-8">
            <CreditCardIcon className="h-4 w-4 text-white sm:h-5 sm:w-5" />
          </div>
          <h3 className="text-lg font-bold text-white sm:text-xl">
            POS机服务能力总览
          </h3>
        </div>
        <p className="text-xs leading-relaxed text-blue-100 sm:text-sm">
          基于央行一清牌照，为您提供安全、便捷、高效的支付收款解决方案
        </p>
      </div>

      {/* 核心数据展示 */}
      <div className="flex-1 p-4 sm:p-6 md:p-8">
        <div className="mb-6 grid grid-cols-2 gap-3 sm:mb-8 sm:gap-4 md:gap-6">
          <div className="border-2 border-white bg-white bg-opacity-50 p-1 text-center sm:p-2 md:p-3 rounded-[2px] shadow-[0_6px_20px_#dce0e8]">
            <div className="mb-1 text-xl font-bold text-blue-600 sm:mb-2 sm:text-2xl md:text-3xl">
              0.38%
            </div>
            <div className="text-xs text-gray-600 sm:text-sm">超低费率</div>
          </div>
          <div className="border-2 border-white bg-white bg-opacity-50 p-1 text-center sm:p-2 md:p-3 rounded-[2px] shadow-[0_6px_20px_#dce0e8]">
            <div className="mb-1 text-xl font-bold text-blue-600 sm:mb-2 sm:text-2xl md:text-3xl">
              10000+
            </div>
            <div className="text-xs text-gray-600 sm:text-sm">商户客户</div>
          </div>
          <div className="border-2 border-white bg-white bg-opacity-50 p-1 text-center sm:p-2 md:p-3 rounded-[2px] shadow-[0_6px_20px_#dce0e8]">
            <div className="mb-1 text-xl font-bold text-blue-600 sm:mb-2 sm:text-2xl md:text-3xl">
              24/7
            </div>
            <div className="text-xs text-gray-600 sm:text-sm">客服支持</div>
          </div>
          <div className="border-2 border-white bg-white bg-opacity-50 p-1 text-center sm:p-2 md:p-3 rounded-[2px] shadow-[0_6px_20px_#dce0e8]">
            <div className="mb-1 text-xl font-bold text-blue-600 sm:mb-2 sm:text-2xl md:text-3xl">
              299元
            </div>
            <div className="text-xs text-gray-600 sm:text-sm">激活返现</div>
          </div>
        </div>

        {/* 当前选中服务的详细信息 */}
        {activeCard && (
          <div className="border-2 border-white bg-white bg-opacity-50 p-4 sm:p-6 rounded-[2px] shadow-[0_6px_20px_#dce0e8]">
            <div className="mb-3 flex items-center gap-2 sm:mb-4 sm:gap-3">
              {(() => {
                const IconComponent = getIconComponent(activeCard.icon)
                return (
                  <IconComponent className="h-5 w-5 flex-shrink-0 text-blue-600 sm:h-6 sm:w-6" />
                )
              })()}
              <h4 className="line-clamp-2 text-base font-semibold text-gray-900 sm:text-lg">
                {activeCard.title}
              </h4>
            </div>
            <p className="mb-3 text-sm leading-relaxed text-gray-600 sm:mb-4 sm:text-base">
              {activeCard.description}
            </p>
            <div className="space-y-1.5 sm:space-y-2">
              {activeCard.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></div>
                  <span className="text-xs text-gray-700 sm:text-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 默认展示图片 */}
        {!activeCard && (
          <div className="relative h-48 overflow-hidden border-2 border-white sm:h-56 md:h-64 rounded-[2px] shadow-[0_6px_20px_#dce0e8]">
            <Image
              src="/images/screenshots/PrimaryFeatures.png"
              alt="POS机服务演示界面"
              fill
              className="object-cover"
              unoptimized
              priority
            />
            <div className="absolute inset-0 flex items-center justify-center bg-blue-900/20 p-4">
              <div className="text-center text-white">
                <h4 className="mb-1 text-base font-semibold sm:mb-2 sm:text-lg">
                  POS机服务平台
                </h4>
                <p className="text-xs opacity-90 sm:text-sm">
                  点击卡片查看详细信息
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * POS机服务能力展示组件 - 现代企业级设计
 * 采用蓝白色调，卡片式布局，突出数据与服务能力展示
 */
export function Scenario() {
  const [activeIndex, setActiveIndex] = useState(0)

  /**
   * 处理服务卡片点击事件
   * @param index - 卡片索引
   */
  const handleCardClick = (index: number) => {
    setActiveIndex(index)
  }

  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-12 sm:py-16 md:py-20 lg:py-28">
      <Container>
        {/* 顶部标题区域 - 移动端简化 */}
        <div className="mb-8 text-center sm:mb-12 md:mb-16 lg:mb-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1.5 text-xs font-medium text-blue-700 sm:mb-4 sm:gap-2 sm:px-3 sm:py-2 sm:text-sm md:mb-6 md:px-4">
              <ShieldCheckIcon className="h-3 w-3 sm:h-4 sm:w-4" />
              央行一清POS机服务
            </div>
            <h2 className="mb-3 px-2 text-xl leading-tight font-bold text-gray-900 sm:mb-4 sm:text-2xl md:mb-6 md:text-4xl lg:text-5xl xl:text-6xl">
              多种收款方式随心组合
              <span className="mt-1 block text-blue-600 sm:mt-1 md:mt-2">
                让支付更便捷
              </span>
            </h2>
            {/* 移动端隐藏详细描述，桌面端显示 */}
            <p className="hidden mx-auto max-w-3xl px-4 text-base leading-relaxed text-gray-600 sm:block sm:text-lg md:text-xl">
              基于央行一清牌照，为您提供电签POS、手机POS、聚合码牌等多种收款方式，0.38%超低费率，激活返现299元
            </p>
          </div>
        </div>

        {/* 主体布局：响应式网格布局 - 移动端简化间距 */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:gap-8 lg:grid-cols-3 lg:gap-12">
          {/* 左侧：数据展示面板 - 移动端隐藏，桌面端在左侧 */}
          <div className="hidden lg:block lg:order-1 lg:col-span-1">
            <div className="lg:sticky lg:top-8">
              <DataPanel activeCard={serviceCards[activeIndex]} />
            </div>
          </div>

          {/* 服务能力卡片网格 - 移动端2列紧凑布局 */}
          <div className="order-1 lg:order-2 lg:col-span-2">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {serviceCards.map((card, index) => (
                <ServiceCard
                  key={card.title}
                  card={card}
                  isActive={activeIndex === index}
                  onClick={() => handleCardClick(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 底部行动号召区域 - 移动端简化 */}
        <div className="mt-6 text-center sm:mt-8 md:mt-16 lg:mt-20">
          <div className="border-2 border-white bg-gradient-to-r from-blue-600 to-blue-700 px-3 py-4 sm:px-6 sm:py-8 md:px-8 md:py-12 lg:py-16 rounded-[2px] shadow-[0_6px_20px_#dce0e8]">
            <div className="mx-auto max-w-3xl">
              <h3 className="mb-2 px-2 text-base font-bold text-white sm:mb-3 sm:text-lg md:mb-4 md:text-2xl lg:text-3xl">
                全国招募代理商
              </h3>
              {/* 移动端隐藏详细描述 */}
              <p className="hidden mb-6 px-4 text-sm leading-relaxed text-blue-100 sm:block md:mb-8 md:text-base lg:text-lg">
                支持自主进件，风口项目，广阔市场，收益丰厚，<br />
                多重收益等你拿，自用享受0.38%超低费率，推广赚取高额分润
              </p>
              <div className="flex justify-center gap-2 px-2 sm:gap-3 sm:px-4 md:gap-4">
                <button className="bg-white px-4 py-2 text-xs font-semibold text-blue-600 transition-colors hover:bg-blue-50 active:bg-blue-800 sm:px-6 sm:text-sm md:px-10 md:py-3 md:text-base rounded-[2px]">
                  自用省钱
                </button>
                {/* 移动端隐藏第二个按钮 */}
                <button className="hidden border-2 border-white px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-blue-600 active:bg-blue-50 sm:block md:px-10 md:py-3 md:text-base rounded-[2px]">
                  推广赚钱
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
