
/**
 *brand品牌单独的组件
 */

import {
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

/**
 * POS机产品数据接口
 */
interface POSProduct {
  name: string
  description: string
  icon: React.ElementType
  features: string[]
}

/**
 * POS机产品数据
 */
const posProducts: POSProduct[] = [
  {
    name: '电签POS机办理',
    description:
      '提供多种型号电签POS机，支持银联、微信、支付宝等多种支付方式，安全稳定',
    icon: CreditCardIcon,
    features: ['多支付方式', '安全稳定', '快速到账'],
  },
  {
    name: '移动收款解决方案',
    description: '为商户提供移动端收款解决方案，支持手机APP、小程序等多种移动端收款',
    icon: DevicePhoneMobileIcon,
    features: ['移动便捷', '多端支持', '实时到账'],
  },
  {
    name: '聚合支付服务',
    description: '整合多种支付渠道，为商户提供一站式支付解决方案，包含：微信、支付宝、银联等',
    icon: CurrencyDollarIcon,
    features: ['多渠道整合', '统一管理', '降低成本'],
  },
  {
    name: '支付安全保障',
    description: '提供全方位支付安全解决方案，包含：数据加密、风险监控、交易保障等服务',
    icon: ShieldCheckIcon,
    features: ['数据加密', '风险监控', '交易保障'],
  },
]

/**
 * POS机产品展示组件 - 使用现代卡片布局
 * 展示POS机相关产品和解决方案，包括电签POS机、移动收款等
 *
 * @returns POS机产品展示组件
 */
export function AIProductsSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm leading-7 font-semibold text-blue-600 sm:text-base">
            POS机解决方案
          </h2>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            电签POS机、移动收款、聚合支付、安全防护
          </p>
          <p className="mt-6 text-base leading-8 text-gray-600 sm:text-lg">
            专业POS机服务解决方案，电签POS机移动收款系统的支付解决方案，安全稳定，多渠道支持
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8"
          >
            {posProducts.map((product) => (
              <li
                key={product.name}
                className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)]"
              >
                <div className="p-5">
                  <div className="mb-3 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center bg-gray-100 dark:bg-gray-700">
                      <product.icon
                        className="h-6 w-6 text-blue-600 dark:text-blue-400"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {product.name}
                    </h3>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {product.description}
                  </p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset dark:bg-blue-900/20 dark:text-blue-300 dark:ring-blue-700/30"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#"
                    className="group inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400"
                  >
                    <span className="transition-all duration-300 group-hover:mr-1">
                      查看详情
                    </span>
                    <ArrowRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
