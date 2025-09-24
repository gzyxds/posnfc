'use client'

import Link from 'next/link'
import { useState } from 'react'
import React from 'react'

import {
  TicketIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  CogIcon,
  ChevronDownIcon,
  CreditCardIcon,
  StarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

// ==================== 页面数据定义 ====================

/**
 * 星级奖励政策数据
 */
const starRewards = [
  {
    level: 1,
    title: '1星奖励',
    description: '月新增激活≥20户且当月至少20户累计交易≥2万元',
    benefits: '基础奖励：激活返现299元/台，分润万12',
    icon: StarIcon,
  },
  {
    level: 2,
    title: '2星奖励',
    description: '3个直属代理商月交易量≥200万或自营月交易≥300万',
    benefits: '升级奖励：分润提升至万13，额外奖励2000元',
    icon: StarIcon,
  },
  {
    level: 3,
    title: '3星奖励',
    description: '3个直属代理商月交易量≥500万或自营月交易≥500万',
    benefits: '高级奖励：分润提升至万14，额外奖励5000元',
    icon: StarIcon,
  },
  {
    level: 4,
    title: '4星奖励',
    description: '3个直属代理商月交易量≥1000万',
    benefits: '精英奖励：分润提升至万14.5，额外奖励10000元',
    icon: StarIcon,
  },
  {
    level: 5,
    title: '5星奖励',
    description: '3个直属代理商月交易量≥2000万',
    benefits: '钻石奖励：分润提升至万15，额外奖励20000元',
    icon: StarIcon,
  },
  {
    level: 6,
    title: '6星奖励',
    description: '5个直属代理商月交易量≥2000万',
    benefits: '超级奖励：分润提升至万15.5，额外奖励30000元',
    icon: StarIcon,
  },
  {
    level: 7,
    title: '7星奖励',
    description: '5个直属代理商月交易量≥2000万且月总交易量≥5亿',
    benefits: '王牌奖励：分润提升至万15.8，额外奖励50000元',
    icon: StarIcon,
  },
  {
    level: 8,
    title: '8星奖励',
    description: '10个直属代理商月交易量≥2000万且月总交易量≥10亿',
    benefits: '至尊奖励：分润提升至万15.9，额外奖励80000元',
    icon: StarIcon,
  },
  {
    level: 9,
    title: '9星奖励',
    description: '15个直属代理商月交易量≥2000万且月总交易量≥15亿',
    benefits: '传奇奖励：分润提升至万15.95，额外奖励100000元',
    icon: StarIcon,
  },
  {
    level: 10,
    title: '10星奖励',
    description: '20个直属代理商月交易量≥2000万且月总交易量≥20亿',
    benefits: '巅峰奖励：分润提升至万16，额外奖励200000元',
    icon: StarIcon,
  },
]

/**
 * 八大收益模块数据
 */
const eightIncomes = [
  {
    title: '开户奖',
    description: '新用户开户奖励',
    subDescription: '每成功推荐一个新用户开户，即可获得开户奖励',
    icon: TicketIcon,
  },
  {
    title: '出货奖',
    description: 'POS机出货奖励',
    subDescription: '每成功出货一台POS机，即可获得出货奖励',
    icon: CreditCardIcon,
  },
  {
    title: '推荐激活奖',
    description: '推荐用户激活奖励',
    subDescription: '推荐的用户成功激活POS机，即可获得激活奖励',
    icon: StarIcon,
  },
  {
    title: '月度拉新奖',
    description: '月度新增用户奖励',
    subDescription: '每月新增用户达到指定数量，即可获得拉新奖励',
    icon: UserGroupIcon,
  },
  {
    title: '月度装机奖',
    description: '月度装机量奖励',
    subDescription: '每月装机量达到指定数量，即可获得装机奖励',
    icon: CogIcon,
  },
  {
    title: '付费升级奖',
    description: '用户付费升级奖励',
    subDescription: '用户付费升级服务，即可获得升级奖励',
    icon: CurrencyDollarIcon,
  },
  {
    title: '运营中心补贴',
    description: '运营中心运营补贴',
    subDescription: '建立运营中心，根据运营业绩获得相应补贴',
    icon: DocumentTextIcon,
  },
  {
    title: '管理奖',
    description: '团队管理奖励',
    subDescription: '管理团队业绩达标，即可获得管理奖励',
    icon: ClockIcon,
  },
]

/**
 * 代理政策优势数据
 */
const policyAdvantages = [
  {
    title: '阶梯式奖励',
    description: '10星级奖励体系',
    subDescription: '从1星到10星，每提升一级，奖励更丰厚',
    icon: CurrencyDollarIcon,
  },
  {
    title: '灵活达标',
    description: '多种达标方式',
    subDescription: '支持自营交易和团队交易双重达标方式',
    icon: CogIcon,
  },
  {
    title: '高额分润',
    description: '分润万12-万16',
    subDescription: '行业领先分润比例，T+1自动到账',
    icon: CreditCardIcon,
  },
  {
    title: '激活返现',
    description: '激活返现299元/台',
    subDescription: '每激活一台POS机即可获得返现奖励',
    icon: TicketIcon,
  },
]

/**
 * 政策解读数据
 */
const policyExplanations = [
  {
    title: '分润政策',
    description: '分润计算方式',
    subDescription: '按照交易金额的万12至万16比例计算，每月结算，T+1自动到账',
    icon: CurrencyDollarIcon,
  },
  {
    title: '团队管理',
    description: '代理商团队建设',
    subDescription: '发展直属代理商，扩大团队规模，提升整体交易量',
    icon: UserGroupIcon,
  },
  {
    title: '交易统计',
    description: '交易量计算规则',
    subDescription: '月交易量按自然月统计，包含所有POS机交易金额总和',
    icon: DocumentTextIcon,
  },
  {
    title: '奖励发放',
    description: '奖励金发放时间',
    subDescription: '每月5号结算上月奖励，10号前发放至指定账户',
    icon: ClockIcon,
  },
]

/**
 * 功能特色卡片接口
 */
interface FeatureCard {
  id: number
  name: string
  description: string
  features: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

/**
 * 功能特色数据
 */
const featureCards: FeatureCard[] = [
  {
    id: 1,
    name: '开户奖',
    description:
      '成功推荐新用户开户即可获得开户奖励，每成功开户一户即可获得相应奖励，多开多得，收益稳定。',
    features: [
      '新用户开户即奖励',
      '开户数量无上限',
      '奖励实时到账',
      '开户流程简单便捷'
    ],
    icon: CurrencyDollarIcon,
  },
  {
    id: 2,
    name: '出货奖',
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

/**
 * 常见问题数据
 */
const faqs = [
  {
    question: '如何提升星级等级？',
    answer: '提升星级等级需要增加直属代理商数量和提高月交易量。可以通过发展更多代理商、提升现有代理商的交易活跃度、增加自营交易量等方式来提升星级等级。',
  },
  {
    question: '分润和奖励如何计算？',
    answer: '分润按照交易金额的万12至万16比例计算，根据星级等级不同而有所差异。奖励金在达到相应星级条件后发放，不同星级对应不同额度的奖励金。',
  },
  {
    question: '交易量统计周期是多久？',
    answer: '交易量按自然月统计，从每月1日00:00:00至每月最后一日23:59:59。系统会自动统计所有POS机的交易金额，作为星级评定依据。',
  },
  {
    question: '直属代理商如何认定？',
    answer: '直属代理商是指由您直接推荐并成功注册的代理商。系统会根据推荐关系自动建立直属关系，您可以从直属代理商的交易中获得团队业绩。',
  },
]

// ==================== 页面组件定义 ====================

/**
 * 页面头部横幅组件 - 代理政策Hero区域
 */
function HeroBanner() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* 全屏背景图片 - 仅在Hero区域显示 */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 transform-gpu overflow-hidden"
      >
        <div
           style={{
             backgroundImage: 'url(/images/screenshots/Productdisplay.jpg)',
             backgroundSize: 'cover',
             backgroundPosition: 'center',
           }}
           className="absolute inset-0 opacity-15 blur-sm"
         />
      </div>
      {/* 原有的装饰性背景 */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <Container className="py-20 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-blue-600 sm:text-6xl">
              代理政策
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              代理政策采用10星级奖励体系，从1星到10星，每提升一级，奖励更丰厚。
              分润万12-万16，激活返现299元/台，助力代理商实现收益最大化。
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:justify-start">
              <Button
                variant="solid"
                color="blue"
                className="group relative bg-blue-600 px-8 py-4 font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              >
                <Link href="/contact" className="flex items-center">
                  <span className="mr-2 text-base">立即申请代理</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="group relative border-2 border-gray-400 bg-white px-8 py-4 font-medium text-gray-700 transition-all duration-200 hover:bg-gray-50 hover:shadow-md focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none"
              >
                <Link href="#star-rewards" className="flex items-center">
                  <span className="mr-2 text-base">查看星级奖励</span>
                  <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600">
                <CurrencyDollarIcon className="mr-2 h-5 w-5 text-blue-600" />
                <span className="text-sm">分润万12-万16</span>
              </div>
              <div className="flex items-center text-gray-600">
                <TicketIcon className="mr-2 h-5 w-5 text-blue-600" />
                <span className="text-sm">激活返现299元/台</span>
              </div>
              <div className="flex items-center text-gray-600">
                <StarIcon className="mr-2 h-5 w-5 text-blue-600" />
                <span className="text-sm">10星级奖励体系</span>
              </div>
            </div>
          </div>

          
          {/* 右侧模拟界面 */}
          <div className="relative">
            <div className="min-h-[350px] border border-gray-100 bg-white p-4 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)]">
              <div className="mb-4 rounded-lg bg-gradient-to-b from-white to-gray-50 border border-gray-100 p-4 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)]">
                <div className="mb-3 flex items-center">
                  <div className="flex space-x-1">
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                    <div className="h-3 w-3 rounded-full bg-gray-300"></div>
                  </div>
                  <div className="ml-4 flex-1 rounded bg-gray-50 px-3 py-1 text-xs text-gray-600">
                    星级奖励政策中心
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border border-gray-100 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] p-3">
                    <div className="mb-2 flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(1)].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 text-blue-600" />
                        ))}
                      </div>
                      <div className="h-2 flex-1 rounded bg-gray-200"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-1.5 w-3/4 rounded bg-gray-100"></div>
                      <div className="h-1.5 w-1/2 rounded bg-gray-100"></div>
                    </div>
                  </div>

                  <div className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border border-gray-100 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] p-3">
                    <div className="mb-2 flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(3)].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 text-blue-600" />
                        ))}
                      </div>
                      <div className="h-2 flex-1 rounded bg-gray-200"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-1.5 w-2/3 rounded bg-gray-100"></div>
                      <div className="h-1.5 w-3/4 rounded bg-gray-100"></div>
                    </div>
                  </div>

                  <div className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border border-gray-100 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] p-3">
                    <div className="mb-2 flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 text-blue-600" />
                        ))}
                      </div>
                      <div className="h-2 flex-1 rounded bg-gray-200"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-1.5 w-4/5 rounded bg-gray-100"></div>
                      <div className="h-1.5 w-1/3 rounded bg-gray-100"></div>
                    </div>
                  </div>

                  <div className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border border-gray-100 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] p-3">
                    <div className="mb-2 flex items-center space-x-2">
                      <div className="flex items-center">
                        {[...Array(10)].map((_, i) => (
                          <StarIcon key={i} className="h-4 w-4 text-blue-600" />
                        ))}
                      </div>
                      <div className="h-2 flex-1 rounded bg-gray-200"></div>
                    </div>
                    <div className="space-y-1">
                      <div className="h-1.5 w-5/6 rounded bg-gray-100"></div>
                      <div className="h-1.5 w-2/3 rounded bg-gray-100"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                  <span>奖励政策实时更新</span>
                </div>
                <div className="flex items-center space-x-1">
                  <StarIcon className="h-4 w-4 text-blue-600" />
                  <span>星级奖励体系</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
/**
 * 模拟界面
 */



/**
 * 八大收益模块组件
 */
function EightIncomesSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            八大收益模块
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            为代理商提供八大收益模块，全方位覆盖代理业务的各个环节，帮助代理商实现多元化收益，最大化利润空间。
          </p>
        </div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4 xl:gap-x-8"
        >
          {eightIncomes.map((income, index) => {
            const IconComponent = income.icon
            return (
              <li
                key={index}
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
                    {income.title}
                  </div>
                </div>

                <div className="px-6 py-4 bg-transparent">
                  <p className="mb-4 text-sm leading-6 text-gray-700">
                    {income.description}
                  </p>
                  <p className="mb-6 text-sm leading-6 text-gray-600">
                    {income.subDescription}
                  </p>

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
 * 星级奖励区域组件
 */
function StarRewardsSection() {
  return (
    <div id="star-rewards" className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            星级奖励政策
          </h2>
          <div className="mx-auto mt-4 max-w-4xl text-lg text-gray-600">
            POSNFC采用10星级奖励体系，从1星到10星，每提升一级，奖励更丰厚。
            通过发展代理商和提升交易量，您可以获得更高的分润比例和额外奖励。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
          {starRewards.map((reward) => {
            const Icon = reward.icon
            return (
              <div
                key={reward.level}
                className={`group flex h-full transform flex-col overflow-hidden rounded-lg border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] ${
                  reward.level <= 3
                    ? 'bg-gradient-to-b from-yellow-50 to-yellow-100'
                    : reward.level <= 6
                    ? 'bg-gradient-to-b from-blue-50 to-blue-100'
                    : reward.level <= 8
                    ? 'bg-gradient-to-b from-purple-50 to-purple-100'
                    : 'bg-gradient-to-b from-red-50 to-red-100'
                }`}
              >
                <div
                  className={`flex items-center justify-center py-3 ${
                    reward.level <= 3
                      ? 'bg-yellow-500'
                      : reward.level <= 6
                      ? 'bg-blue-500'
                      : reward.level <= 8
                      ? 'bg-purple-500'
                      : 'bg-red-500'
                  }`}
                >
                  <div className="flex items-center">
                    {[...Array(reward.level)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-white" />
                    ))}
                  </div>
                </div>

                <div className="p-4">
                  <h4 className="mb-2 text-center text-lg font-semibold text-gray-900">
                    {reward.title}
                  </h4>
                  <p className="mb-3 text-center text-sm font-medium text-gray-700">
                    {reward.description}
                  </p>
                  <div className="mt-3 rounded bg-white p-3 text-xs text-gray-600 shadow-sm">
                    {reward.benefits}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/**
 * 政策优势区域组件
 */
function PolicyAdvantagesSection() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              代理政策优势
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              POSNFC代理政策采用10星级奖励体系，为代理商提供丰厚的分润和奖励。
              无论您是个人创业者还是企业团队，都可以通过我们的代理政策实现收益最大化。
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-4 flex h-8 w-8 items-center justify-center bg-blue-100">
                  <CurrencyDollarIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">
                  分润万12-万16，行业领先水平
                </span>
              </div>
              <div className="flex items-center">
                <div className="mr-4 flex h-8 w-8 items-center justify-center bg-blue-100">
                  <StarIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">
                  10星级奖励体系，阶梯式成长
                </span>
              </div>
              <div className="flex items-center">
                <div className="mr-4 flex h-8 w-8 items-center justify-center bg-blue-100">
                  <TicketIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">激活返现299元/台，即时收益</span>
              </div>
              <div className="flex items-center">
                <div className="mr-4 flex h-8 w-8 items-center justify-center bg-blue-100">
                  <CogIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">灵活达标方式，自营团队双通道</span>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="solid" color="blue">
                <Link href="/contact" className="flex items-center">
                  立即申请代理
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {policyAdvantages.map((advantage) => {
              const Icon = advantage.icon
              return (
                <div
                  key={advantage.title}
                  className="group bg-white p-6 rounded-md transition-all duration-300 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)]"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white transition-colors group-hover:bg-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    {advantage.title}
                  </h4>
                  <p className="mb-2 font-medium text-gray-900">
                    {advantage.description}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {advantage.subDescription}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * 政策解读区域组件
 */
function PolicyExplanationSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            政策解读
          </h2>
          <div className="mx-auto mt-4 max-w-4xl text-lg text-gray-600">
            详细解读POSNFC代理政策的核心内容，帮助您更好地理解政策规则，
            合理规划代理业务，实现收益最大化。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {policyExplanations.map((explanation) => {
            const Icon = explanation.icon
            return (
              <div
                key={explanation.title}
                className="group border-2 border-white bg-gray-50 p-6 rounded-md transition-all duration-300 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)]"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-blue-600 text-white transition-colors group-hover:bg-blue-700">
                  <Icon className="h-6 w-6" />
                </div>

                <h4 className="mb-3 text-lg font-semibold text-gray-900">
                  {explanation.title}
                </h4>
                <p className="mb-2 font-medium text-gray-900">
                  {explanation.description}
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  {explanation.subDescription}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/**
 * 丰厚奖励体系区域组件
 */
function FeaturesSection(): React.JSX.Element {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            丰厚奖励体系
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            提供开户奖、出货奖、推荐激活奖、月度拉新奖、月度装机奖、付费升级奖、运营中心补贴、管理奖等多维度奖励机制，助力代理商持续发展。
          </p>
        </div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4 xl:gap-x-8"
        >
          {featureCards.map((feature) => {
            const IconComponent = feature.icon
            return (
              <li
                key={feature.id}
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
                    {feature.name}
                  </div>
                </div>

                <div className="px-6 py-4 bg-transparent">
                  <p className="mb-4 text-sm leading-6 text-gray-700">
                    {feature.description}
                  </p>
                  <div className="mb-6 space-y-2">
                    {feature.features.map((featureItem, index) => (
                      <div key={index} className="flex items-start gap-x-2">
                        <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                        <span className="text-sm leading-5 text-gray-600">
                          {featureItem}
                        </span>
                      </div>
                    ))}
                  </div>

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
 * FAQ常见问题区域组件
 */
function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            常见问题
          </h2>
          <div className="mx-auto mt-4 max-w-4xl text-lg text-gray-600">
            解答您在代理政策过程中可能遇到的常见问题，帮助您更好地理解我们的奖励体系。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden border-2 border-white bg-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)]"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="leading-relaxed text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

// ==================== 页面主组件 ====================

/**
 * 代理政策页面主组件
 * 展示POSNFC的代理政策，包括星级奖励、政策优势、政策解读等
 * @returns React.JSX.Element
 */
export default function AgentPage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <EightIncomesSection />
        <FeaturesSection />
        <StarRewardsSection />
        <PolicyAdvantagesSection />
        <PolicyExplanationSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
