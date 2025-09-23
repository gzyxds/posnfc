'use client'

import Image, { type ImageProps } from 'next/image'

import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  ChartBarIcon,
  ArrowsPointingOutIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import screenshotContacts from '@/images/screenshots/achievements.png'
import screenshotExpenses from '@/images/screenshots/contacts.png'
interface Feature {
  name: string
  summary: string
  description: string
  image: ImageProps['src']
  icon: React.ComponentType
}

const features: Array<Feature> = [
  {
    name: '交易监控',
    summary: '实时监控POS机交易情况，智能预警系统。',
    description:
      '通过直观的仪表盘展示交易笔数、收款金额、支付成功率等关键指标，并在异常情况下及时发出预警通知。',
    image: screenshotContacts,
    icon: ChartBarIcon,
  },
  {
    name: '灵活费率',
    summary: '根据商户类型提供灵活的费率方案，确保成本与服务的最优平衡。',
    description:
      '智能感知商户需求，自动匹配最合适的费率方案，既保证服务质量，又降低商户成本。',
    image: screenshotContacts,
    icon: ArrowsPointingOutIcon,
  },
  {
    name: '支付安全',
    summary: '全方位的支付安全防护，为您的交易保驾护航。',
    description:
      '提供多层次安全防护，包括银联认证、数据加密、交易风控等，全面保障您的支付交易安全。',
    image: screenshotContacts,
    icon: ShieldCheckIcon,
  },
]

function Feature({
  feature,
  isActive,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & {
  feature: Feature
  isActive: boolean
}) {
  return (
    <div
      className={clsx(
        className,
        !isActive &&
          'opacity-75 transition-opacity duration-300 hover:opacity-100',
        'group',
      )}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-md transition-colors duration-300',
          'dark:shadow-lg dark:shadow-blue-500/20',
        )}
      >
        <svg aria-hidden="true" className="h-8 w-8 text-blue-600" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium transition-colors duration-300',
          isActive
            ? 'text-blue-600 dark:text-blue-400'
            : 'text-slate-600 group-hover:text-blue-500 dark:text-gray-400 dark:group-hover:text-blue-300',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900 dark:text-white">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600 dark:text-gray-400">
        {feature.description}
      </p>
    </div>
  )
}

/**
 * 移动端POS机功能特性展示组件
 * 参考 test.tsx 的设计风格，采用垂直布局并支持深色模式
 * @returns 移动端POS机功能特性布局
 */
function FeaturesMobile() {
  return (
    <div className="lg:hidden">
      <div className="mx-auto max-w-2xl">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
          <h2 className="text-base/7 font-semibold text-gray-900 dark:text-white">
           数字支付
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-blue-600 sm:text-5xl dark:text-blue-400">
           为商户提供数字化支付解决方案
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            借助银盛、拉卡拉、中付、乐刷等银联正规POS机，轻松实现移动收款、码牌收款，提升商户收款效率。
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 dark:text-white">
                    <div className="absolute top-1 left-1 h-5 w-5 flex items-center justify-center">
                      <svg
                        className="h-4 w-4 text-blue-600"
                        fill="none"
                        viewBox="0 0 36 36"
                        aria-hidden="true"
                      >
                        <IconComponent />
                      </svg>
                    </div>
                    {feature.name}
                  </dt>{' '}
                  <dd className="inline">{feature.description}</dd>
                </div>
              )
            })}
          </dl>
        </div>
        <div className="mt-16 sm:mt-20">
          <div className="relative overflow-hidden rounded-md border border-gray-200/50 bg-white/80 p-4 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
            {/* 移动端模拟界面头部 */}
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="h-2 w-2 rounded-full bg-red-400"></div>
                <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                <div className="h-2 w-2 rounded-full bg-green-400"></div>
              </div>
              <div className="text-xs font-medium text-gray-700 dark:text-gray-300">
                数字支付控制台
              </div>
            </div>

            {/* 移动端模拟界面标题栏 */}
            <div className="mb-3 rounded-md border border-gray-200/50 bg-gray-50/80 p-3 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
              <h3 className="mb-1 text-base font-semibold text-gray-900 dark:text-white">
                交易管理中心
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400">
                数字支付控制台
              </p>
            </div>

            {/* 移动端模拟功能模块 */}
            <div className="mb-3 space-y-3">
              {features.slice(0, 3).map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={feature.name}
                    className="rounded-md border border-gray-200/30 bg-gray-50/60 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md">
                        <svg
                          className="h-5 w-5 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <IconComponent />
                        </svg>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          {feature.name}
                        </h4>
                        <div className="mt-1">
                          <div className="h-1 w-full bg-gray-200/60 dark:bg-gray-700/60">
                            <div
                              className="h-1 bg-blue-500 transition-all duration-1000 dark:bg-blue-400"
                              style={{ width: `${50 + index * 15}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* 移动端模拟状态栏 */}
            <div className="flex items-center justify-between rounded-md border border-gray-200/30 bg-gray-50/60 p-2 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
              <div className="flex items-center space-x-2">
                <div className="h-1.5 w-1.5 rounded-full bg-green-400"></div>
                <span>交易正常</span>
              </div>
              <span>刚刚更新</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 桌面端POS机功能特性展示组件
 * 采用左右分栏布局并支持深色模式
 * @returns 桌面端POS机功能特性布局
 */
function FeaturesDesktop() {
  return (
    <div className="hidden lg:block">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base/7 font-semibold text-black dark:text-gray-100">
              数字支付
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-blue-600 sm:text-5xl dark:text-blue-400">
             为商户提供数字化支付解决方案
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              借助银盛、拉卡拉、中付、乐刷等银联正规POS机，轻松实现移动收款、码牌收款，提升商户收款效率。
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
              {features.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <div className="absolute top-1 left-1 h-5 w-5 flex items-center justify-center">
                       <svg
                         className="h-4 w-4 text-blue-600"
                         fill="none"
                         viewBox="0 0 36 36"
                         aria-hidden="true"
                       >
                         <IconComponent />
                       </svg>
                     </div>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
        </div>
        <div className="sm:px-6 lg:px-0">
          <div className="relative overflow-hidden rounded-md border border-gray-200/50 bg-white/80 p-6 shadow-xl backdrop-blur-lg dark:border-gray-700/50 dark:bg-white/10">
            {/* 模拟界面头部 */}
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-sm font-medium text-gray-700 dark:text-gray-300">
                POS机控制台
              </div>
            </div>

            {/* 模拟界面标题栏 */}
            <div className="mb-4 rounded-md border border-gray-200/50 bg-gray-50/80 p-4 backdrop-blur-sm dark:border-gray-700/50 dark:bg-gray-800/50">
              <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                交易管理中心
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                实时监控和管理您的POS机交易
              </p>
            </div>

            {/* 模拟功能模块 */}
            <div className="mb-4 grid grid-cols-1 gap-4">
              {features.slice(0, 4).map((feature, index) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={feature.name}
                    className="group rounded-md border border-gray-200/30 bg-gray-50/60 p-4 backdrop-blur-sm transition-all duration-300 hover:bg-gray-100/60 dark:border-gray-700/30 dark:bg-gray-800/30 dark:hover:bg-gray-700/40"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0">
                        <div className="flex h-8 w-8 items-center justify-center rounded-md">
                           <svg
                             className="h-6 w-6 text-blue-600"
                             fill="none"
                             viewBox="0 0 24 24"
                             stroke="currentColor"
                           >
                             <IconComponent />
                           </svg>
                         </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-sm font-medium text-gray-900 dark:text-white">
                          {feature.name}
                        </h4>
                        <p className="mt-1 truncate text-xs text-gray-600 dark:text-gray-400">
                          {feature.summary}
                        </p>
                        <div className="mt-2">
                          <div className="h-1.5 w-full bg-gray-200/60 dark:bg-gray-700/60">
                            <div
                              className="h-1.5 bg-blue-500 transition-all duration-1000 group-hover:w-full dark:bg-blue-400"
                              style={{ width: `${60 + index * 10}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* 模拟状态栏 */}
            <div className="flex items-center justify-between rounded-md border border-gray-200/30 bg-gray-50/60 p-3 text-xs text-gray-600 backdrop-blur-sm dark:border-gray-700/30 dark:bg-gray-800/30 dark:text-gray-400">
              <div className="flex items-center space-x-4">
                <span className="flex items-center space-x-1">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span>交易正常</span>
                </span>
                <span>交易笔数: 45</span>
                <span>收款金额: 2.1万</span>
              </div>
              <div className="text-right">
                <span>最后更新: 刚刚</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 左右分栏展示组件
 * 展示POS机的功能特性，支持响应式布局和深色模式
 * 采用左右分栏布局设计
 * @returns 左右分栏POS机功能特性区块
 */
export function Leftright() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900"
    >
      <Container className="md:px-6 lg:px-8">
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
