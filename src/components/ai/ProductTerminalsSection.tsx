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

        {/* APP展示页面 */}
        <div className="mx-auto mt-24" style={{maxWidth: '1800px'}}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* 左侧文案 - 独立卡片设计 */}
            <div className="lg:col-span-1">
              <div className="text-center lg:text-left mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  智能收银管理
                </h3>
                <p className="text-gray-600">
                  支持门店管理、员工管理、商户提额等功能，实现店铺移动化管理，经营管理更便捷。
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 p-6 shadow-sm">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <span className="text-sm font-medium text-gray-800 block mb-1">经营管理</span>
                    <span className="text-xs text-gray-600">门店管理、员工管理、商户提额等功能</span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-6 shadow-sm">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <span className="text-sm font-medium text-gray-800 block mb-1">会员卡券</span>
                    <span className="text-xs text-gray-600">会员卡、积分等级、优惠券、储值等营销工具</span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-6 shadow-sm">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <span className="text-sm font-medium text-gray-800 block mb-1">营销推广</span>
                    <span className="text-xs text-gray-600">直播、关注公众号、支付后赠券等丰富玩法</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 中间APP图片 - 采用SVG手机框架样式 */}
            <div className="lg:col-span-1 flex justify-center">
              <div className="relative">
                <svg role="img" viewBox="0 0 366 729" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                  <title>好哒慧掌柜APP界面</title>
                  <defs>
                    <clipPath id="app-clip">
                      <rect rx={36} width={316} height={684} />
                    </clipPath>
                  </defs>
                  <path
                    d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                    fill="#4B5563"
                  />
                  <path
                    d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                    fill="#343E4E"
                  />
                  <foreignObject
                    width={316}
                    height={684}
                    clipPath="url(#app-clip)"
                    transform="translate(24 24)"
                  >
                    <img alt="好哒慧掌柜APP界面" src="/images/screenshots/好哒app.jpg" width={316} height={684} style={{objectFit: 'cover'}} />
                  </foreignObject>
                </svg>
              </div>
            </div>

            {/* 右侧文案 - 独立卡片设计 */}
            <div className="lg:col-span-1">
              <div className="text-center lg:text-right mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  数据分析报表
                </h3>
                <p className="text-gray-600">
                  全面覆盖采购入库、库存管理、商品管理等模块，精准实时账本，收款笔笔播报清晰明了。
                </p>
              </div>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 p-6 shadow-sm">
                  <div className="border-r-4 border-blue-600 pr-4 text-right">
                    <span className="text-sm font-medium text-gray-800 block mb-1">进销存</span>
                    <span className="text-xs text-gray-600">采购入库、库存管理、商品管理、订单管理</span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-6 shadow-sm">
                  <div className="border-r-4 border-blue-600 pr-4 text-right">
                    <span className="text-sm font-medium text-gray-800 block mb-1">收款播报</span>
                    <span className="text-xs text-gray-600">精准实时账本，收款笔笔播报，高效收款版</span>
                  </div>
                </div>
                <div className="bg-white border border-gray-200 p-6 shadow-sm">
                  <div className="border-r-4 border-blue-600 pr-4 text-right">
                    <span className="text-sm font-medium text-gray-800 block mb-1">可视化报表</span>
                    <span className="text-xs text-gray-600">多维度报表显示，一秒对账，快速核对门店营收</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
