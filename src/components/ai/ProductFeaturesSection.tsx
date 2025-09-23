import {
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  CurrencyYenIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

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
                className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)]"
              >
                <div className="p-5">
                  <div className="mb-3 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center bg-gray-100 dark:bg-gray-700">
                      <feature.icon
                        className="h-6 w-6 text-blue-600 dark:text-blue-400"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {feature.name}
                    </h3>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
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
