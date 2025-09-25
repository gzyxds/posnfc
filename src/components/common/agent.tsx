'use client'

import React, { type JSX } from 'react'
import {
  TicketIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  CogIcon,
  CreditCardIcon,
  StarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
} from '@heroicons/react/20/solid'

import { Container } from '@/components/Container'

// ==================== 数据定义 ====================

/**
 * 收益特色统一接口
 * 用于统一不同类型的收益特色数据结构
 */
interface IncomeFeature {
  id?: number
  title: string
  description: string
  subDescription?: string
  features?: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

/**
 * 功能特色卡片接口（向后兼容）
 * @deprecated 请使用 IncomeFeature 接口
 */
interface FeatureCard extends IncomeFeature {
  id: number
  name: string
  features: string[]
}

/**
 * 丰厚奖励体系数据
 */
const eightIncomes: FeatureCard[] = [
  {
    id: 1,
    name: '交易分润',
    title: '交易分润',
    description:
      '每笔交易都可获得相应分润，交易量越大收益越高，支持多种支付方式，包括刷卡、扫码、云闪付等。',
    features: [
      '每笔交易都有分润',
      '交易量越大收益越高',
      '支持多种支付方式',
      '实时到账透明结算'
    ],
    icon: CurrencyDollarIcon,
  },
  {
    id: 2,
    name: '出货奖',
    title: '出货奖',
    description:
      '成功推荐POS机设备出货即可获得出货奖励，每成功出货一台设备即可获得相应奖励，设备激活后奖励自动发放。',
    features: [
      '设备出货即奖励',
      '出货量越大奖励越高',
      '激活后自动发放',
      '奖励透明可查询'
    ],
    icon: RocketLaunchIcon,
  },
  {
    id: 3,
    name: '推荐激活奖',
    title: '推荐激活奖',
    description:
      '成功推荐用户激活设备即可获得激活奖励，每成功激活一台设备即可获得相应奖励，激活率越高收益越多。',
    features: [
      '设备激活即奖励',
      '激活率越高奖励越多',
      '奖励阶梯式增长',
      '激活数据实时统计'
    ],
    icon: StarIcon,
  },
  {
    id: 4,
    name: '月度拉新奖',
    title: '月度拉新奖',
    description:
      '每月根据拉新数量给予额外奖励，拉新数量越多奖励越丰厚，月度结算，激励持续发展。',
    features: [
      '月度拉新数量奖励',
      '拉新越多奖励越丰厚',
      '月度结算准时发放',
      '排行榜激励竞争'
    ],
    icon: UserGroupIcon,
  },
  {
    id: 5,
    name: '月度装机奖',
    title: '月度装机奖',
    description:
      '每月根据装机数量给予额外奖励，装机数量越多奖励越丰厚，鼓励代理商积极拓展市场。',
    features: [
      '月度装机数量奖励',
      '装机量越大奖励越高',
      '装机质量双重考核',
      '月度排名额外奖励'
    ],
    icon: CogIcon,
  },
  {
    id: 6,
    name: '付费升级奖',
    title: '付费升级奖',
    description:
      '成功推荐用户付费升级即可获得升级奖励，每成功推荐一次付费升级即可获得相应奖励，升级金额越大奖励越高。',
    features: [
      '付费升级即奖励',
      '升级金额越大奖励越高',
      '奖励比例阶梯式增长',
      '升级数据实时统计'
    ],
    icon: ShieldCheckIcon,
  },
  {
    id: 7,
    name: '运营中心补贴',
    title: '运营中心补贴',
    description:
      '设立运营中心可获得额外补贴，补贴包括场地租金、人员工资、运营费用等，支持代理商规模化发展。',
    features: [
      '场地租金补贴',
      '人员工资补贴',
      '运营费用补贴',
      '规模化发展支持'
    ],
    icon: AcademicCapIcon,
  },
  {
    id: 8,
    name: '管理奖',
    title: '管理奖',
    description:
      '根据团队规模和业绩给予管理奖励，团队规模越大业绩越好管理奖励越高，鼓励代理商发展团队。',
    features: [
      '团队规模奖励',
      '团队业绩奖励',
      '管理层级奖励',
      '长期稳定收益'
    ],
    icon: UserGroupIcon,
  },
]

// ==================== 组件定义 ====================

/**
 * 特色功能区块组件属性接口
 */
interface FeatureSectionProps {
  title: string
  subtitle: string
  features: IncomeFeature[]
  className?: string
}

/**
 * 通用特色功能区块组件
 * 用于展示各种收益特色，消除代码重复
 *
 * @param props - 组件属性
 * @param props.title - 区块标题
 * @param props.subtitle - 区块副标题
 * @param props.features - 特色功能列表
 * @param props.className - 自定义CSS类名
 * @returns 特色功能区块组件
 */
function FeatureSection({ title, subtitle, features, className }: FeatureSectionProps): JSX.Element {
  return (
    <section className={`bg-white py-16 sm:py-20 lg:py-24 ${className || ''}`}>
      <Container>
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            {subtitle}
          </p>
        </div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4 xl:gap-x-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <li
                key={feature.id || index}
                className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-transparent p-6">
                  <div className="flex h-12 w-12 flex-none items-center justify-center bg-white border border-gray-200">
                    <IconComponent
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-sm leading-6 font-medium text-gray-900">
                    {feature.title || (feature as any).name}
                  </div>
                </div>

                <div className="px-6 py-4 bg-transparent">
                  <p className="mb-4 text-sm leading-6 text-gray-700">
                    {feature.description}
                  </p>

                  {/* 显示子描述或特性列表 */}
                  {feature.subDescription ? (
                    <p className="mb-6 text-sm leading-6 text-gray-600">
                      {feature.subDescription}
                    </p>
                  ) : feature.features ? (
                    <ul className="mb-6 space-y-2">
                      {feature.features.map((featureItem, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-gray-600">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-600"></span>
                          {featureItem}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {/* 操作按钮 */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                      立即申请
                    </button>
                    <button className="flex-1 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                      查看详情
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

/**
 * 代理商组件属性接口
 */
interface AgentProps {
  className?: string
}

/**
 * 代理商组件
 * 展示代理商的八大收益模块和十大奖励赋能团队高效展业，包括开户奖、出货奖等各种奖励机制
 *
 * @param props - 组件属性
 * @param props.className - 自定义CSS类名
 * @returns 代理商组件
 */
export function Agent({ className }: AgentProps): JSX.Element {
  return (
    <div className={className || ''}>
      {/* 八大收益模块 */}
      <FeatureSection
        title="八大收益模块"
        subtitle="为代理商提供八大收益模块，全方位覆盖代理业务的各个环节，帮助代理商实现多元化收益，最大化利润空间。"
        features={eightIncomes}
      />

      {/* 十大奖励赋能团队高效展业 */}
      <PolicyRewardsSection />
    </div>
  )
}

/**
 * 默认导出代理商组件
 */
export default Agent

// ==================== 新增内容 ====================

/**
 * 十大奖励赋能团队高效展业数据
 */
const policyEightIncomes: IncomeFeature[] = [
  {
    title: '激活奖励',
    description: '机具激活返现奖励',
    subDescription: '激活奖60元，免费送1台，无限循环送',
    icon: RocketLaunchIcon,
  },
  {
    title: '服务费奖励',
    description: '激活服务费返现',
    subDescription: '激活自定义，收取99奖90，199奖190，299奖290',
    icon: CurrencyDollarIcon,
  },
  {
    title: '出货奖',
    description: '机具出货奖励',
    subDescription: '代理采购机具，奖励推荐人10元/台，采购码牌奖励推荐人1元/张',
    icon: CreditCardIcon,
  },
  {
    title: '推荐激活奖',
    description: '推荐激活返现',
    subDescription: '代理激活机具，奖励推荐人20元/台',
    icon: StarIcon,
  },
  {
    title: '招商补贴',
    description: '直属代理交易补贴',
    subDescription: '直属代理月交易>3个200万，奖励200元/个合计600元起',
    icon: UserGroupIcon,
  },
  {
    title: '分润嘉奖',
    description: '交易量阶梯奖励',
    subDescription: '月累计交易3千万奖万0.3，5千万奖万0.6，1亿奖万1，3亿奖万1.5',
    icon: AcademicCapIcon,
  },
  {
    title: '交易分润',
    description: '交易流水分润',
    subDescription: '分润高达万15',
    icon: TicketIcon,
  },
  {
    title: '笔数分润',
    description: '交易笔数奖励',
    subDescription: '自定义+3，分润高达2元/笔',
    icon: DocumentTextIcon,
  },
]

/**
 * 政策奖励区块组件
 * 展示代理商的十大奖励政策，包括激活奖励、服务费奖励等各种奖励机制
 *
 * @returns 政策奖励组件
 */
export function PolicyRewardsSection(): JSX.Element {
  return (
    <FeatureSection
      title="多重奖励赋能团队高效展业"
      subtitle="为代理商提供多重奖励赋能团队高效展业，全方位覆盖代理业务的各个环节，帮助代理商实现多元化收益，最大化利润空间。"
      features={policyEightIncomes}
    />
  )
}
