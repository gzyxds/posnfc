'use client'

import Image from 'next/image'
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
    <div className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">更快部署</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                云计算让业务更简单
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                借助先进的云计算技术，轻松实现业务创新与数字化转型，大幅提升企业竞争力和运营效率。
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-600 dark:text-indigo-400"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <div className="relative isolate overflow-hidden bg-blue-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-white ring-inset"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  alt="云计算产品功能截图"
                  src="/images/screenshots/contacts.png"
                  width={2432}
                  height={1442}
                  className="-mb-12 w-[57rem] max-w-none bg-gray-800"
                  unoptimized
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              />
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
