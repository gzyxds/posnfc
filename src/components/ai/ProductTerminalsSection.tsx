import {
  DeviceTabletIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  CogIcon,
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
                className="border border-gray-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div className="bg-indigo-50 p-2">
                      <terminal.icon
                        aria-hidden="true"
                        className="size-5 text-indigo-600"
                      />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {terminal.name}
                    </h3>
                  </div>
                  <span
                    className={`inline-flex items-center px-2 py-1 text-xs font-medium ${
                      terminal.status === '已上线'
                        ? 'bg-green-50 text-green-700 ring-1 ring-green-600/20 ring-inset'
                        : 'bg-yellow-50 text-yellow-700 ring-1 ring-yellow-600/20 ring-inset'
                    }`}
                  >
                    {terminal.status}
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">
                    {terminal.description}
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
