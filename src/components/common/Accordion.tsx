'use client'

import { useState } from 'react'
import Image from 'next/image'
import {
  CreditCardIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  QrCodeIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'

/**
 * POS机功能标签页数据
 * 包含六个核心功能分类：聚合收款|数字经营|营销功能|POS机收银|收银硬件|支付通道|
 */
const posFeatures = {
  aggregatePayment: {
    id: 'aggregatePayment',
    name: '聚合收款',
    icon: QrCodeIcon,
    title: '聚合收款解决方案',
    description: '整合多种支付方式，为商户提供一站式收款服务',
    features: [
      { name: '多渠道收款', desc: '支持微信、支付宝、银联云闪付等主流支付方式' },
      { name: '聚合码牌', desc: '一码收全款，支持所有主流扫码支付' },
      { name: '实时到账', desc: '7×24小时实时到账，资金周转更灵活' },
    ],
    model: '聚合收款系统',
    image: '/images/screenshots/Accordion.svg',
  },
  digitalBusiness: {
    id: 'digitalBusiness',
    name: '数字经营',
    icon: ChartBarIcon,
    title: '数字化经营管理',
    description: '通过数据分析和智能工具，助力商户数字化转型升级',
    features: [
      { name: '经营分析', desc: '深度分析交易数据，提供经营洞察和建议' },
      { name: '客户管理', desc: '智能客户画像，精准营销和客户维护' },
      { name: '库存管理', desc: '实时库存监控，智能补货提醒' },
    ],
    model: '数字经营平台',
    image: '/images/screenshots/internet.svg',
  },
  marketing: {
    id: 'marketing',
    name: '营销功能',
    icon: UserGroupIcon,
    title: '智能营销工具',
    description: '丰富的营销工具和活动模板，助力商户提升销售业绩',
    features: [
      { name: '优惠券营销', desc: '多样化优惠券模板，灵活设置营销活动' },
      { name: '会员积分', desc: '完善的会员体系，积分兑换增强客户粘性' },
      { name: '拼团秒杀', desc: '社交电商功能，拼团秒杀提升销量' },
    ],
    model: '营销管理系统',
    image: '/images/screenshots/Accordion1.svg',
  },
  posCashier: {
    id: 'posCashier',
    name: 'POS机收银',
    icon: CreditCardIcon,
    title: 'POS机收银系统',
    description: '专业的POS收银解决方案，支持多种支付方式和业务场景',
    features: [
      { name: '刷卡收款', desc: '支持银联卡、信用卡、借记卡等传统刷卡支付' },
      { name: '电签功能', desc: '电子签名确认，无纸化交易更环保' },
      { name: '小票打印', desc: '自动打印交易小票，完整交易记录' },
    ],
    model: 'POS收银终端',
    image: '/images/screenshots/Accordion2.svg',
  },
  cashierHardware: {
    id: 'cashierHardware',
    name: '收银硬件',
    icon: DevicePhoneMobileIcon,
    title: '收银硬件设备',
    description: '提供全套收银硬件设备，满足不同规模商户的收银需求',
    features: [
      { name: '智能POS机', desc: 'Android系统智能POS，支持多种应用扩展' },
      { name: '扫码枪', desc: '高精度扫码设备，快速识别商品条码' },
      { name: '钱箱打印机', desc: '收银钱箱和热敏打印机，完整收银配套' },
    ],
    model: '收银硬件套装',
    image: '/images/screenshots/Accordion3.svg',
  },
  paymentChannel: {
    id: 'paymentChannel',
    name: '支付通道',
    icon: ShieldCheckIcon,
    title: '支付通道服务',
    description: '稳定可靠的支付通道，确保交易安全和资金安全',
    features: [
      { name: '一清机保障', desc: '央行牌照一清机，资金安全有保障' },
      { name: '多通道备份', desc: '多个支付通道备份，确保交易成功率' },
      { name: '风控系统', desc: '智能风控系统，实时监控异常交易' },
    ],
    model: '支付通道平台',
    image: '/images/screenshots/Accordion.svg',
  },
}

/**
 * POS机功能展示标签页组件
 * 采用标签页布局展示POS机功能
 * 支持响应式设计和交互动画效果
 * @returns POS机功能标签页组件
 */
export function PosFeatureTabs() {
  const [activeTab, setActiveTab] = useState('aggregatePayment')
  const currentFeature = posFeatures[activeTab as keyof typeof posFeatures]

  return (
    <section
      className="py-12 sm:py-16 md:py-20 lg:py-24"
      style={{ backgroundColor: '#F7F9FC' }}
    >
      <div className="mx-auto max-w-[1800px] px-3 lg:px-4">
        {/* 标题区域 */}
        <div className="mb-8 text-center sm:mb-12 md:mb-16 lg:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 sm:mb-6 sm:px-4 md:mb-8">
            <span className="h-2 w-2 rounded-full bg-[#0052D9]"></span>
            <span className="text-xs font-semibold tracking-wide text-[#0052D9] sm:text-sm">
              智能收银解决方案
            </span>
          </div>
          <div className="space-y-4">
            <h2 className="relative mx-auto max-w-4xl px-2 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
              <span className="relative z-10 bg-gradient-to-r from-[#0052D9] to-[#00A6FF] bg-clip-text text-transparent">
                全方位智能收银系统
              </span>
              <span className="relative z-10">，助力商户</span>
              <span className="relative z-10 bg-gradient-to-r from-[#FF4D4D] to-[#F6B73C] bg-clip-text text-transparent">
                业务增长
              </span>
              <div className="absolute -left-4 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-blue-100 blur-xl sm:h-6 sm:w-6 md:h-8 md:w-8"></div>
              <div className="absolute -right-4 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-orange-100 blur-xl sm:h-6 sm:w-6 md:h-8 md:w-8"></div>
            </h2>
            <p className="mx-auto max-w-3xl px-2 text-base leading-relaxed text-gray-600 sm:text-lg md:text-xl">
              从收银、支付到经营分析，打造一站式数字化经营平台，让每一笔交易都创造更大价值
            </p>
          </div>
        </div>

        {/* 标签导航栏 - 多端适配设计 */}
        <div className="mb-12 md:mb-16">
          {/* 移动端：水平滚动布局 */}
          <div className="overflow-x-auto md:hidden">
            <div className="flex gap-2 pb-2">
              {Object.values(posFeatures).map((feature) => {
                const IconComponent = feature.icon
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setActiveTab(feature.id)
                    }}
                    className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-colors duration-200 border ${
                      activeTab === feature.id
                        ? 'border-blue-500 bg-blue-500 text-white'
                        : 'border-gray-300 bg-white text-gray-700 hover:border-blue-300'
                    }`}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      userSelect: 'none',
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <IconComponent className="h-4 w-4" />
                      <span className="whitespace-nowrap">{feature.name}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 平板端及以上：水平布局 */}
          <div className="hidden w-full gap-2 md:flex lg:gap-3">
            {Object.values(posFeatures).map((feature) => {
              const IconComponent = feature.icon
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveTab(feature.id)}
                  className={`flex-1 px-4 py-3 text-sm font-medium transition-all duration-300 md:px-6 md:py-4 flex items-center justify-center gap-2 border md:gap-3 hover:shadow-md ${
                    activeTab === feature.id
                      ? 'border-blue-600 bg-blue-600 text-white shadow-lg'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <IconComponent className="h-4 w-4 flex-shrink-0 md:h-5 md:w-5" />
                  <span className="whitespace-nowrap">{feature.name}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* 标签内容区域 */}
        <div className="grid grid-cols-1 gap-4">
          <div className="transition-all duration-300 ease-out">
            <div
              className="flex min-h-[300px] flex-col items-center gap-6 bg-white p-4 sm:min-h-[400px] sm:p-6 md:min-h-[500px] md:gap-8 md:p-8 lg:min-h-[600px] lg:flex-row lg:gap-12 lg:p-12 xl:gap-20"
              style={{ boxShadow: '0 2px 8px rgba(0,0,0,.05)' }}
            >
              {/* 左侧文字内容 */}
              <div className="order-2 flex w-full flex-col justify-center space-y-6 sm:space-y-8 md:space-y-10 lg:order-1 lg:w-2/5">
                {/* 主标题 */}
                <div className="space-y-3 sm:space-y-4">
                  <h3
                    className="text-xl leading-tight font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl"
                    style={{ color: 'rgba(12,13,14,1)', lineHeight: '1.2' }}
                  >
                    {currentFeature.title}
                  </h3>
                  <p
                    className="max-w-lg text-base leading-relaxed sm:text-lg md:text-xl"
                    style={{ color: 'rgba(12,13,14,0.65)', lineHeight: '1.7' }}
                  >
                    {currentFeature.description}
                  </p>
                </div>

                {/* 功能特性列表 */}
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  {currentFeature.features.map((item, index) => (
                    <div
                      key={index}
                      className="group flex items-start gap-3 sm:gap-4"
                    >
                      <div className="mt-2 h-2.5 w-2.5 flex-shrink-0 rounded-full bg-[#0052D9] transition-transform duration-200 group-hover:scale-110"></div>
                      <div className="flex-1 space-y-1">
                        <div
                          className="text-base font-semibold sm:text-lg md:text-xl"
                          style={{
                            color: 'rgba(12,13,14,0.9)',
                            lineHeight: '1.4',
                          }}
                        >
                          {item.name}
                        </div>
                        <div
                          className="text-sm leading-relaxed sm:text-base md:text-lg"
                          style={{
                            color: 'rgba(12,13,14,0.6)',
                            lineHeight: '1.6',
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* 相关服务标签 */}
                <div className="inline-flex w-fit items-center rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5">
                  <span
                    className="text-xs font-medium sm:text-sm"
                    style={{ color: 'rgba(12,13,14,0.7)' }}
                  >
                    相关服务：{currentFeature.model}
                  </span>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 sm:px-6 sm:py-3 md:px-8 md:py-4 md:text-base"
                  >
                    查看详情
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center bg-[#0052D9] px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:scale-105 hover:bg-[#003db8] sm:px-6 sm:py-3 md:px-8 md:py-4 md:text-base"
                  >
                    立即申请
                    <svg
                      className="ml-2 h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* 右侧模拟界面展示 */}
              <div className="order-1 mt-6 hidden w-full items-center justify-center px-4 sm:px-0 lg:order-2 lg:mt-0 lg:flex lg:w-3/5 lg:justify-end">
                <div className="h-48 w-full max-w-xs overflow-hidden border border-gray-200 bg-white/80 p-3 shadow-lg backdrop-blur-sm sm:h-60 sm:max-w-md sm:p-4 md:h-80 md:max-w-xl md:p-6 lg:h-[28rem] lg:max-w-2xl lg:p-8 xl:h-[32rem] xl:max-w-3xl xl:p-10">
                  {/* 模拟界面头部 */}
                  <div className="mb-2 flex items-center justify-between sm:mb-3 md:mb-4 lg:mb-6">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-400 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3"></div>
                      <div className="h-2 w-2 rounded-full bg-yellow-400 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3"></div>
                      <div className="h-2 w-2 rounded-full bg-green-400 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3"></div>
                    </div>
                    <div className="ml-2 truncate font-mono text-xs text-gray-500 sm:text-sm">
                      {currentFeature.model}
                    </div>
                  </div>

                  {/* 模拟界面内容 */}
                  <div className="h-full space-y-2 overflow-hidden sm:space-y-3 md:space-y-4 lg:space-y-6">
                    {/* 标题栏 */}
                    <div className="mb-2 flex items-center gap-1 sm:mb-3 sm:gap-2 md:mb-4 md:gap-3">
                      <currentFeature.icon className="h-4 w-4 flex-shrink-0 text-[#0052D9] sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-8 lg:w-8" />
                      <div className="truncate text-xs font-bold text-gray-800 sm:text-sm md:text-base lg:text-lg xl:text-xl">
                        {currentFeature.name}控制台
                      </div>
                    </div>

                    {/* 功能模块卡片 */}
                    <div className="grid flex-1 grid-cols-1 gap-1 overflow-y-auto sm:gap-2 md:gap-3">
                      {currentFeature.features
                        .slice(0, 4)
                        .map((item, index) => (
                          <div
                            key={index}
                            className="group border border-gray-200 bg-white p-2 transition-all duration-200 hover:border-[#0052D9] sm:p-3 md:p-4"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex min-w-0 flex-1 items-center gap-1 sm:gap-2">
                                <div className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#0052D9] transition-transform duration-200 group-hover:scale-110 sm:h-2 sm:w-2"></div>
                                <span className="truncate text-xs font-medium text-gray-700 sm:text-sm">
                                  {item.name}
                                </span>
                              </div>
                              <div className="ml-2 flex flex-shrink-0 items-center gap-1">
                                <div className="h-1 w-1 animate-pulse rounded-full bg-green-400 sm:h-1.5 sm:w-1.5"></div>
                                <span className="hidden text-xs font-medium text-green-600 sm:inline">
                                  运行中
                                </span>
                              </div>
                            </div>
                            <div className="mt-1 line-clamp-1 text-xs text-gray-500 sm:mt-2">
                              {item.desc}
                            </div>
                            {/* 模拟进度条 */}
                            <div className="mt-1 sm:mt-2">
                              <div className="h-0.5 w-full bg-gray-200 sm:h-1">
                                <div
                                  className="h-0.5 bg-[#0052D9] transition-all duration-1000 ease-out sm:h-1"
                                  style={{ width: `${75 + index * 8}%` }}
                                ></div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>

                    {/* 底部状态栏 */}
                    <div className="mt-2 border-t border-gray-200 pt-2 sm:mt-3 sm:pt-3 md:mt-4">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400 sm:h-2 sm:w-2"></div>
                          <span className="text-gray-600">系统正常</span>
                        </div>
                        <div className="ml-2 truncate text-xs text-gray-500">
                          <span className="hidden sm:inline">
                            交易: 45笔 | 金额: 6.2万 |{' '}
                          </span>
                          状态: 正常
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * POS机功能展示组件 - 主导出组件
 * 展示POS机产品的功能特性，采用标签页交互设计
 * 提供现代化的用户体验
 * @returns POS机功能展示区块
 */
export function Accordion() {
  return (
    <section id="pos-features" aria-label="POS机功能特性展示">
      <PosFeatureTabs />
    </section>
  )
}
