import {
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

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
                className="overflow-hidden outline outline-gray-200"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                  <div className="flex size-12 flex-none items-center justify-center bg-blue-600 text-white">
                    <product.icon aria-hidden="true" className="size-6" />
                  </div>
                  <div className="text-sm/6 font-medium text-gray-900">
                    {product.name}
                  </div>
                  <Menu as="div" className="relative ml-auto">
                    <MenuButton className="relative block text-gray-400 hover:text-gray-500">
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">打开选项</span>
                      <EllipsisHorizontalIcon
                        aria-hidden="true"
                        className="size-5"
                      />
                    </MenuButton>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right bg-white py-2 shadow-lg outline-1 outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                          查看详情
                          <span className="sr-only">, {product.name}</span>
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                          立即体验
                          <span className="sr-only">, {product.name}</span>
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
                <div className="px-6 py-4">
                  <p className="mb-4 text-sm/6 text-gray-600">
                    {product.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
