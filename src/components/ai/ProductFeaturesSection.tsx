import {
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  CurrencyYenIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

/**
 * 产品功能特色数据接口
 */
interface ProductFeature {
  name: string
  description: string
  icon: React.ElementType
}

/**
 * 产品功能特色数据
 */
const productFeatures: ProductFeature[] = [
  {
    name: '电签POS机',
    description:
      '提供多种型号的电签POS机，支持银行卡、扫码、NFC等多种支付方式，实现商户收款的智能处理与安全保障。',
    icon: CreditCardIcon,
  },
  {
    name: '移动收款',
    description: '提供便捷的移动收款解决方案，支持手机POS、码牌收款等多种移动支付方式，确保商户收款便捷安全。',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: '聚合支付',
    description: '提供聚合支付解决方案，支持一码多付，更符合商户需求的支付服务，支持银联、微信、支付宝等多种支付方式。',
    icon: CreditCardIcon,
  },
  {
    name: '安全防护',
    description: '提供交易加密、风控系统、安全认证等全方位安全解决方案，确保商户收款安全可靠。',
    icon: ShieldCheckIcon,
  },
  {
    name: '快速到账',
    description: '7:00-22:30交易秒到账，22:30-次日7:00T+1上午10点前到账，节假日正常，资金周转快。',
    icon: ClockIcon,
  },
  {
    name: '代理加盟',
    description: '0加盟费1台起拿，分润万12-万16终身锁，激活返现299元/台，支持无限下级，分润差实时结算。',
    icon: UserGroupIcon,
  },
  {
    name: '低费率',
    description: '0.38%费率永不涨价，银盛/拉卡拉/中付/乐刷电签POS机，支持信用卡、花呗、数字人民币等多种支付方式。',
    icon: CurrencyYenIcon,
  },
  {
    name: '专业服务',
    description: '提供7×24小时专业客服支持，全方位解决商户使用问题，确保商户收款无忧。',
    icon: CogIcon,
  },
]

/**
 * 产品功能特色组件 - 使用现代卡片布局
 * 展示AI产品的核心功能特色，包括AI智能对话、知识库应用、多样化发布等
 *
 * @returns 产品功能特色组件
 */
export function ProductFeaturesSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base leading-7 font-semibold text-blue-600">
            产品功能特色
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            全面的POS机服务
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            从电签POS机到移动收款，从聚合支付到安全防护，全方位满足商户支付需求
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8"
          >
            {productFeatures.map((feature) => (
              <li
                key={feature.name}
                className="overflow-hidden outline outline-gray-200"
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                  <div className="flex size-12 flex-none items-center justify-center bg-blue-600 text-white">
                    <feature.icon aria-hidden="true" className="size-6" />
                  </div>
                  <div className="text-sm/6 font-medium text-gray-900">
                    {feature.name}
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
                          了解更多
                          <span className="sr-only">, {feature.name}</span>
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                          立即使用
                          <span className="sr-only">, {feature.name}</span>
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
                <div className="px-6 py-4">
                  <p className="text-sm/6 text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
