'use client'

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'

/**
 * 云计算功能特性数据
 * 包含三个核心功能：一键部署、SSL证书管理、数据库备份
 */
const features = [
  {
    name: '一键部署',
    description:
      '通过简单的推送操作即可完成应用部署，大幅提升开发效率，让您专注于业务创新而非运维工作。',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL证书管理',
    description: '自动化SSL证书申请、部署和续期，为您的网站提供全方位的HTTPS安全保护。',
    icon: LockClosedIcon,
  },
  {
    name: '数据库备份',
    description: '智能化数据备份策略，支持定时备份和增量备份，确保您的数据安全无忧。',
    icon: ServerIcon,
  },
]

/**
 * 左右分栏展示组件 - 采用最新设计风格
 * 展示云计算产品的核心功能特性，支持响应式布局和完整的暗色模式
 * 采用简洁的左右分栏布局，左侧为功能介绍，右侧为产品截图
 * 支持亮色/暗色模式图片自动切换
 * @returns 左右分栏功能特性区块
 */
function Example() {
  return (
    <div className="overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-12 sm:gap-x-8 sm:gap-y-16 md:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-sm font-semibold text-indigo-600 sm:text-base/7 dark:text-indigo-400">更快部署</h2>
              <p className="mt-2 text-2xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
                云计算让业务更简单
              </p>
              <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg/8 dark:text-gray-300">
                借助先进的云计算技术，轻松实现业务创新与数字化转型，大幅提升企业竞争力和运营效率。
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
          <div className="flex items-start justify-center lg:justify-end lg:order-first">
            <div className="relative overflow-hidden bg-white/20 backdrop-blur-xl border border-white/30 shadow-lg p-4 sm:p-6 dark:bg-gray-900/20 dark:border-gray-700/30 w-full max-w-lg sm:max-w-xl lg:max-w-2xl">
              {/* 模拟界面头部 */}
              <div className="flex items-center justify-between mb-4 sm:mb-6">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <div className="w-2.5 h-2.5 bg-red-400 rounded-full sm:w-3 sm:h-3"></div>
                  <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full sm:w-3 sm:h-3"></div>
                  <div className="w-2.5 h-2.5 bg-green-400 rounded-full sm:w-3 sm:h-3"></div>
                </div>
                <div className="text-gray-800 dark:text-white text-xs font-medium sm:text-sm">云计算控制台</div>
              </div>

              {/* 模拟界面标题栏 */}
              <div className="bg-white/30 backdrop-blur-sm border border-white/20 p-3 mb-3 sm:p-4 sm:mb-4 dark:bg-gray-800/30 dark:border-gray-600/20">
                <h3 className="text-gray-800 dark:text-white text-base font-semibold mb-1 sm:text-lg sm:mb-2">资源管理中心</h3>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">实时监控和管理您的云计算资源</p>
              </div>

              {/* 模拟功能模块 */}
              <div className="grid grid-cols-1 gap-3 mb-3 sm:gap-4 sm:mb-4">
                {features.slice(0, 4).map((feature, index) => (
                  <div key={feature.name} className="bg-white/20 backdrop-blur-sm border border-white/10 p-3 hover:bg-white/30 transition-all duration-300 group sm:p-4 dark:bg-gray-800/20 dark:border-gray-600/10 dark:hover:bg-gray-800/30">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div className="flex-shrink-0">
                        <div className="w-6 h-6 bg-blue-500/80 backdrop-blur-sm flex items-center justify-center sm:w-8 sm:h-8 dark:bg-blue-600/80">
                          <feature.icon className="w-3 h-3 text-white sm:w-5 sm:h-5" />
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-gray-800 dark:text-white text-xs font-medium truncate sm:text-sm">{feature.name}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-xs mt-0.5 truncate sm:mt-1">{feature.description.slice(0, 25)}...</p>
                        <div className="mt-1.5 sm:mt-2">
                          <div className="w-full bg-gray-300/50 dark:bg-gray-600/50 h-1 sm:h-1.5">
                            <div
                              className="bg-blue-500 dark:bg-blue-400 h-1 transition-all duration-1000 group-hover:w-full sm:h-1.5"
                              style={{width: `${60 + index * 10}%`}}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* 模拟状态栏 */}
              <div className="bg-white/30 backdrop-blur-sm border border-white/20 p-2 flex flex-col space-y-2 text-xs text-gray-600 sm:p-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0 dark:bg-gray-800/30 dark:border-gray-600/20 dark:text-gray-300">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <span className="flex items-center space-x-1">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full sm:w-2 sm:h-2"></div>
                    <span>系统正常</span>
                  </span>
                  <span className="hidden sm:inline">CPU: 45%</span>
                  <span className="hidden sm:inline">内存: 62%</span>
                </div>
                <div className="flex items-center justify-between sm:block">
                  <div className="flex space-x-2 sm:hidden">
                    <span>CPU: 45%</span>
                    <span>内存: 62%</span>
                  </div>
                  <span className="text-right">最后更新: 刚刚</span>
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
 * 左右分栏展示组件 - 主导出组件
 * 展示云计算产品的功能特性，支持响应式布局和深色模式
 * 参考 test.tsx 的设计风格，采用简洁的左右分栏布局
 * @returns 左右分栏功能特性区块
 */
export function Rightleft() {
  return (
    <section
      id="secondary-features"
      aria-label="云计算功能特性展示"
    >
      <Example />
    </section>
  )
}
