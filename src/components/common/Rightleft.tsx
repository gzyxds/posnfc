'use client'

import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'

/**
 * POS机功能特性数据
 * 包含三个核心功能：快速办理、支付安全、移动收款
 */
const features = [
  {
    name: '快速办理',
    description:
      '银盛、拉卡拉等银联正规POS机快速办理流程，让您轻松拥有收款设备，无需等待。',
    icon: CloudArrowUpIcon,
  },
  {
    name: '支付安全',
    description:
      '银联认证的支付安全保障，为您的交易提供全方位的加密保护，确保资金安全。',
    icon: LockClosedIcon,
  },
  {
    name: '移动收款',
    description:
      '支持多种收款方式，包括电签POS、聚合码牌等，满足不同场景的收款需求。',
    icon: ServerIcon,
  },
]
/**
 * 左右分栏展示组件 - 采用最新设计风格
 * 展示POS机产品的核心功能特性，支持响应式布局和完整的暗色模式
 * 采用简洁的左右分栏布局，左侧为功能介绍，右侧为产品截图
 * 支持亮色/暗色模式图片自动切换
 * @returns 左右分栏POS机功能特性区块
 */
function Example() {
  return (
    <div className="overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16 md:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              POS机功能特性
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              银盛、拉卡拉等银联正规POS机及移动收款解决方案，助力商户轻松收款。
            </p>
              <dl className="mt-8 max-w-xl space-y-6 text-sm leading-6 text-gray-600 sm:mt-10 sm:space-y-8 sm:text-base/7 lg:max-w-none dark:text-gray-400">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-8 sm:pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-0.5 left-0.5 size-4 text-indigo-600 sm:top-1 sm:left-1 sm:size-5 dark:text-indigo-400"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-center lg:order-first lg:justify-end">
            <div className="relative w-full max-w-lg overflow-hidden border border-white/30 bg-white/20 p-4 shadow-lg backdrop-blur-xl sm:max-w-xl sm:p-6 lg:max-w-2xl dark:border-gray-700/30 dark:bg-gray-900/20">
              {/* 模拟界面头部 */}
              <div className="mb-4 flex items-center justify-between sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-400 sm:h-3 sm:w-3"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-400 sm:h-3 sm:w-3"></div>
                  <div className="h-2.5 w-2.5 rounded-full bg-green-400 sm:h-3 sm:w-3"></div>
                </div>
                <div className="text-xs font-medium text-gray-800 sm:text-sm dark:text-white">
                  POS机管理平台
                </div>
              </div>
              <div className="mb-3 border border-white/20 bg-white/30 p-3 backdrop-blur-sm sm:mb-4 sm:p-4 dark:border-gray-600/20 dark:bg-gray-800/30">
                <h3 className="mb-1 text-base font-semibold text-gray-800 sm:mb-2 sm:text-lg dark:text-white">
                  交易管理中心
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm dark:text-gray-300">
                  实时监控和管理您的POS机交易
                </p>
              </div>

              {/* 模拟功能模块 */}
              <div className="mb-3 grid grid-cols-1 gap-3 sm:mb-4 sm:gap-4">
                {features.slice(0, 4).map((feature, index) => (
                  <div
                    key={feature.name}
                    className="group border border-white/10 bg-white/20 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/30 sm:p-4 dark:border-gray-600/10 dark:bg-gray-800/20 dark:hover:bg-gray-800/30"
                  >
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="flex-shrink-0">
                        <div className="flex h-6 w-6 items-center justify-center bg-blue-500/80 backdrop-blur-sm sm:h-8 sm:w-8 dark:bg-blue-600/80">
                          <feature.icon className="h-3 w-3 text-white sm:h-5 sm:w-5" />
                        </div>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="truncate text-xs font-medium text-gray-800 sm:text-sm dark:text-white">
                          {feature.name}
                        </h4>
                        <p className="mt-0.5 truncate text-xs text-gray-600 sm:mt-1 dark:text-gray-300">
                          {feature.description.slice(0, 25)}...
                        </p>
                        <div className="mt-1.5 sm:mt-2">
                          <div className="h-1 w-full bg-gray-300/50 sm:h-1.5 dark:bg-gray-600/50">
                            <div
                              className="h-1 bg-blue-500 transition-all duration-1000 group-hover:w-full sm:h-1.5 dark:bg-blue-400"
                              style={{ width: `${60 + index * 10}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 模拟状态栏 */}
              <div className="mt-4 flex items-center justify-between rounded-b-lg border border-white/20 bg-white/30 px-3 py-2 text-xs text-gray-800 backdrop-blur-sm sm:mt-6 sm:px-4 sm:py-3 sm:text-sm dark:border-gray-600/20 dark:bg-gray-800/30 dark:text-white">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <span className="flex items-center space-x-1">
                    <div className="h-2 w-2 rounded-full bg-blue-400"></div>
                    <span>交易正常</span>
                  </span>
                  <span>交易笔数: 45</span>
                </div>
                <div className="text-right">
                  <span>收款金额: 2.1万</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 右左分栏展示组件 - 采用最新设计风格
 * 展示POS机产品的核心功能特性，支持响应式布局和完整的暗色模式
 * 采用简洁的右左分栏布局，右侧为功能介绍，左侧为产品截图
 * 支持亮色/暗色模式图片自动切换
 * @returns 右左分栏POS机功能特性区块
 */
export function Rightleft() {
  return (
    <section id="secondary-features" aria-label="云计算功能特性展示">
      <Example />
    </section>
  )
}
