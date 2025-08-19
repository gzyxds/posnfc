'use client'

import Image, { type ImageProps } from 'next/image'

import clsx from 'clsx'
import { Container } from '@/components/Container'
import { ChartBarIcon, ArrowsPointingOutIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'
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
    name: '资源监控',
    summary: '实时监控云资源使用情况，智能预警系统。',
    description:
      '通过直观的仪表盘展示CPU、内存、存储等关键指标的使用情况，并在达到阈值时及时发出预警通知。',
    image: screenshotContacts,
    icon: ChartBarIcon,
  },
  {
    name: '弹性伸缩',
    summary:
      '根据业务负载自动调整计算资源，确保性能与成本的最优平衡。',
    description:
      '智能感知业务高峰，自动扩展或收缩计算资源，既保证服务质量，又避免资源浪费。',
    image: screenshotContacts,
    icon: ArrowsPointingOutIcon,
  },
  {
    name: '安全管理',
    summary:
      '全方位的云安全防护，为您的业务保驾护航。',
    description:
      '提供多层次安全防护，包括访问控制、数据加密、安全组策略等，全面保障您的云上资产安全。',
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
        !isActive && 'opacity-75 hover:opacity-100 transition-opacity duration-300',
        'group'
      )}
      {...props}
    >
      <div
        className={clsx(
          'w-9 rounded-lg transition-colors duration-300',
          isActive ? 'bg-blue-600' : 'bg-slate-500 group-hover:bg-blue-500',
          'dark:shadow-lg dark:shadow-blue-500/20'
        )}
      >
        <svg aria-hidden="true" className="h-9 w-9" fill="none">
          <feature.icon />
        </svg>
      </div>
      <h3
        className={clsx(
          'mt-6 text-sm font-medium transition-colors duration-300',
          isActive ? 'text-blue-600 dark:text-blue-400' : 'text-slate-600 group-hover:text-blue-500 dark:text-gray-400 dark:group-hover:text-blue-300',
        )}
      >
        {feature.name}
      </h3>
      <p className="mt-2 font-display text-xl text-slate-900 dark:text-white">
        {feature.summary}
      </p>
      <p className="mt-4 text-sm text-slate-600 dark:text-gray-400">{feature.description}</p>
    </div>
  )
}

/**
 * 移动端功能特性展示组件
 * 参考 test.tsx 的设计风格，采用垂直布局并支持深色模式
 * @returns 移动端功能特性布局
 */
function FeaturesMobile() {
  return (
    <div className="lg:hidden">
      <div className="mx-auto max-w-2xl">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
          <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">更快部署</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
            云计算让业务更1
          </p>
          <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
            借助云计算技术，轻松实现业务创新与数字化转型，提升企业竞争力。
          </p>
          <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
            {features.map((feature) => {
              const IconComponent = feature.icon
              return (
                <div key={feature.name} className="relative pl-9">
                  <dt className="inline font-semibold text-gray-900 dark:text-white">
                    <div className="absolute top-1 left-1 h-5 w-5 text-blue-600 dark:text-blue-400">
                      <svg
                        className="h-5 w-5"
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
          <div className="relative isolate overflow-hidden bg-blue-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:pt-16 sm:pr-0 sm:pl-16">
            <div
              aria-hidden="true"
              className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-white ring-inset"
            />
            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              <Image
                alt="产品截图"
                src={screenshotExpenses}
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
  )
}

/**
 * 桌面端功能特性展示组件
 * 参考 test.tsx 的设计风格，采用左右分栏布局并支持深色模式
 * @returns 桌面端功能特性布局
 */
function FeaturesDesktop() {
  return (
    <div className="hidden lg:block">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
        <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">更快部署</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              云计算让业务更简单
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              借助云计算技术，轻松实现业务创新与数字化转型，提升企业竞争力。
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
              {features.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div
                    key={feature.name}
                    className="relative pl-9"
                  >
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <div className="absolute top-1 left-1 h-5 w-5 text-blue-600 dark:text-blue-400">
                        <svg
                          className="h-5 w-5"
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
          <div className="relative isolate overflow-hidden bg-blue-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
            <div
              aria-hidden="true"
              className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-white ring-inset"
            />
            <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
              <Image
                 alt="产品功能截图"
                 src={screenshotExpenses}
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
  )
}

/**
 * 左右分栏展示组件
 * 展示产品的功能特性，支持响应式布局和深色模式
 * 采用左右分栏布局设计
 * @returns 左右分栏功能特性区块
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
