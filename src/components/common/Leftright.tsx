'use client'

import React from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'

/**
 * SVG 图标组件接口
 * @interface IconProps
 */
interface IconProps {
  className?: string
}

/**
 * 团队管理图标
 */
function UsersIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  )
}

/**
 * 设备管理图标
 */
function DevicePhoneMobileIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
    </svg>
  )
}

/**
 * 搜索查询图标
 */
function MagnifyingGlassIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  )
}

/**
 * 信用卡交易图标
 */
function CreditCardIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
    </svg>
  )
}

/**
 * 商店建筑图标
 */
function BuildingStorefrontIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.001 3.001 0 0 1-.621-1.72c0-.816.328-1.54.861-2.067C5.98 5.107 10.14 2.25 12 2.25s6.02 2.857 7.139 4.253c.533.527.861 1.251.861 2.067 0 .615-.187 1.185-.621 1.72m-16.5 0V9.349" />
    </svg>
  )
}

/**
 * 货币金钱图标
 */
function CurrencyDollarIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

/**
 * 问号帮助图标
 */
function QuestionMarkCircleIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
    </svg>
  )
}

/**
 * 剪贴板列表图标
 */
function ClipboardDocumentListIcon({ className }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
    </svg>
  )
}

/**
 * 管理功能卡片数据接口
 * @interface ManagementCard
 */
interface ManagementCard {
  id: string
  title: string
  description: string
  icon: React.ComponentType<IconProps>
  features: string[]
  actionText: string
  detailText: string
}

/**
 * 管理功能卡片数据 - 根据关键词布局.md文件
 */
const managementCards: ManagementCard[] = [
  {
    id: 'team-management',
    title: '团队管理',
    description: '全面的团队管理功能，支持成员权限分配、业绩统计、团队层级管理等',
    icon: UsersIcon,
    features: [
      '成员权限分配管理',
      '团队层级结构设置',
      '业绩统计与分析',
      '团队协作工具'
    ],
    actionText: '管理团队',
    detailText: '查看详情'
  },
  {
    id: 'device-management',
    title: '机具管理',
    description: '智能化机具管理系统，实时监控设备状态、维护记录、库存管理',
    icon: DevicePhoneMobileIcon,
    features: [
      '设备状态实时监控',
      '维护记录管理',
      '库存统计分析',
      '设备配置管理'
    ],
    actionText: '管理机具',
    detailText: '查看详情'
  },
  {
    id: 'activation-query',
    title: '激活查询',
    description: '快速查询设备激活状态，支持批量查询、激活统计、状态跟踪',
    icon: MagnifyingGlassIcon,
    features: [
      '快速激活状态查询',
      '批量查询功能',
      '激活统计报表',
      '状态变更跟踪'
    ],
    actionText: '查询激活',
    detailText: '查看详情'
  },
  {
    id: 'transaction-query',
    title: '交易查询',
    description: '全面的交易数据查询系统，支持多维度筛选、实时统计、数据导出',
    icon: CreditCardIcon,
    features: [
      '多维度交易筛选',
      '实时交易统计',
      '交易数据导出',
      '异常交易监控'
    ],
    actionText: '查询交易',
    detailText: '查看详情'
  },
  {
    id: 'merchant-management',
    title: '商户管理',
    description: '完整的商户生命周期管理，从入驻审核到日常运营全流程支持',
    icon: BuildingStorefrontIcon,
    features: [
      '商户入驻审核',
      '资质信息管理',
      '经营状态监控',
      '服务支持跟进'
    ],
    actionText: '管理商户',
    detailText: '查看详情'
  },
  {
    id: 'credit-management',
    title: '抵用金',
    description: '灵活的抵用金管理系统，支持发放、使用、统计、规则配置等功能',
    icon: CurrencyDollarIcon,
    features: [
      '抵用金发放管理',
      '使用记录跟踪',
      '余额统计查询',
      '规则配置设置'
    ],
    actionText: '管理抵用金',
    detailText: '查看详情'
  },
  {
    id: 'help-center',
    title: '帮助中心',
    description: '完善的帮助支持体系，提供操作指南、常见问题、在线客服等服务',
    icon: QuestionMarkCircleIcon,
    features: [
      '操作指南文档',
      '常见问题解答',
      '在线客服支持',
      '问题反馈处理'
    ],
    actionText: '获取帮助',
    detailText: '查看详情'
  },
  {
    id: 'order-management',
    title: '订单管理',
    description: '高效的订单处理系统，支持订单跟踪、状态管理、批量操作等功能',
    icon: ClipboardDocumentListIcon,
    features: [
      '订单状态跟踪',
      '批量订单处理',
      '订单统计分析',
      '异常订单处理'
    ],
    actionText: '管理订单',
    detailText: '查看详情'
  }
]

/**
 * 管理功能卡片组件 - 移动端优化版本
 * @param card - 卡片数据
 * @returns JSX.Element
 */
function ManagementCard({ card }: { card: ManagementCard }): React.JSX.Element {
  const IconComponent = card.icon

  return (
    <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none">
      {/* 卡片头部 - 移动端简化设计 */}
      <div className="flex items-center gap-x-3 border-b border-gray-900/5 bg-transparent p-4 sm:p-6">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-md">
          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm sm:text-lg font-bold text-gray-900 truncate">{card.title}</h3>
          <div className="font-medium text-blue-600 text-xs sm:text-sm">管理功能</div>
        </div>
      </div>

      {/* 卡片内容 - 移动端简化 */}
      <div className="px-4 py-3 sm:px-6 sm:py-4 bg-transparent">
        <p className="mb-3 sm:mb-4 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-700 line-clamp-2">
          {card.description}
        </p>

        {/* 功能特性列表 - 移动端只显示前2个 */}
        <div className="mb-4 sm:mb-6 space-y-1.5 sm:space-y-2">
          {card.features.slice(0, 2).map((feature, index) => (
            <div key={index} className="flex items-start gap-x-2">
              <div className="mt-1.5 sm:mt-2 h-1 w-1 sm:h-1.5 sm:w-1.5 flex-none rounded-full bg-blue-600" />
              <span className="text-xs sm:text-sm leading-4 sm:leading-5 text-gray-600 line-clamp-1">
                {feature}
              </span>
            </div>
          ))}
          {/* 移动端显示省略号表示更多功能 */}
          <div className="sm:hidden flex items-start gap-x-2">
            <div className="mt-1.5 h-1 w-1 flex-none rounded-full bg-gray-400" />
            <span className="text-xs leading-4 text-gray-500">
              更多功能...
            </span>
          </div>
        </div>

        {/* 操作按钮 - 移动端垂直布局 */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
          <button className="w-full bg-blue-600 px-3 py-2 text-xs sm:text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
            {card.actionText}
          </button>
          <button className="w-full border border-gray-300 px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
            {card.detailText}
          </button>
        </div>
      </div>
    </div>
  )
}

/**
 * Leftright 组件 - 管理功能展示（移动端优化）
 * 根据关键词布局.md创建8个管理功能卡片
 * 样式参考本系统的边框样式.tsx
 * 移动端采用一排两列的简化布局
 * @returns JSX.Element
 */
export default function Leftright(): React.JSX.Element {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <Container>
        {/* 标题区域 - 移动端优化 */}
        <div className="mb-8 sm:mb-12 lg:mb-16 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight text-gray-900">
            管理功能中心
          </h2>
          <p className="mx-auto mt-3 sm:mt-4 max-w-3xl text-sm sm:text-base lg:text-lg text-gray-600 px-4 sm:px-0">
            提供全面的管理功能，包括团队管理、机具管理、激活查询、交易查询、商户管理、抵用金、帮助中心、订单管理等核心功能模块
          </p>
        </div>

        {/* 卡片网格布局 - 移动端一排两列 */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 md:gap-8 lg:grid-cols-4 xl:gap-x-8">
          {managementCards.map((card) => (
            <ManagementCard key={card.id} card={card} />
          ))}
        </div>

        {/* 底部说明 - 移动端优化 */}
        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-xs sm:text-sm text-gray-500 px-4 sm:px-0">
            所有功能模块均支持权限管理和数据安全保护
          </p>
        </div>
      </Container>
    </section>
  )
}
