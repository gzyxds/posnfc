import {
  DeviceTabletIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  CogIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

/**
 * 支付终端产品数据接口
 */
interface PaymentTerminal {
  name: string
  description: string
  icon: React.ElementType
  status: string
}

/**
 * 支付终端产品数据
 */
const paymentTerminals: PaymentTerminal[] = [
  {
    name: '智能POS机',
    description: '支持刷卡、扫码、NFC等多种支付方式的智能收银终端',
    icon: DeviceTabletIcon,
    status: '已上线',
  },
  {
    name: '移动收银台',
    description: '便携式移动支付终端，支持线上线下一体化收银',
    icon: GlobeAltIcon,
    status: '已上线',
  },
  {
    name: '扫码支付盒',
    description: '专业扫码支付设备，支持微信、支付宝等主流支付方式',
    icon: DeviceTabletIcon,
    status: '已上线',
  },
  {
    name: '收银软件',
    description: 'PC端专业收银管理软件，支持商品管理和数据分析',
    icon: ComputerDesktopIcon,
    status: '已上线',
  },
  {
    name: '商户管理后台',
    description: '商户后台管理系统，支持交易查询、对账和营销管理',
    icon: CogIcon,
    status: '已上线',
  },
  {
    name: '聚合支付APP',
    description: '移动端聚合支付应用，支持多渠道收款和账务管理',
    icon: DeviceTabletIcon,
    status: '适配中',
  },
]

/**
 * 支付终端产品展示组件 - 卡片式设计
 * 展示支付产品支持的多种终端设备，包括智能POS机、移动收银台、扫码支付盒等
 *
 * @returns 支付终端产品展示组件
 */
export function PaymentTerminalsSection() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base leading-7 font-semibold text-indigo-600">
            支付终端
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            多终端覆盖，全场景支付
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            提供智能POS机、移动收银台、扫码支付盒、收银软件、管理后台等全套支付解决方案
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <ul className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
            {paymentTerminals.map((terminal) => (
              <li
                key={terminal.name}
                className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)]"
              >
                <div className="p-5">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="mr-3 flex h-10 w-10 items-center justify-center bg-gray-100 dark:bg-gray-700">
                        <terminal.icon
                          className="h-6 w-6 text-blue-600 dark:text-blue-400"
                          aria-hidden="true"
                        />
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                        {terminal.name}
                      </h3>
                    </div>
                    <span
                      className={`inline-flex items-center px-2 py-1 text-xs font-medium ${
                        terminal.status === '已上线'
                          ? 'bg-green-50 text-green-700 ring-1 ring-green-600/20 ring-inset dark:bg-green-900/20 dark:text-green-300 dark:ring-green-700/30'
                          : 'bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20 ring-inset dark:bg-yellow-900/20 dark:text-yellow-300 dark:ring-yellow-700/30'
                      }`}
                    >
                      {terminal.status}
                    </span>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {terminal.description}
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
