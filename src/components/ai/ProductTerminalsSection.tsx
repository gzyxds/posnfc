import {
  DeviceTabletIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  CogIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

/**
 * 产品终端数据接口
 */
interface ProductTerminal {
  name: string
  description: string
  icon: React.ElementType
  status: string
}

/**
 * 产品终端数据
 */
const productTerminals: ProductTerminal[] = [
  {
    name: '微信公众号',
    description: '通过微信公众号访问AI智能聊天系统',
    icon: DeviceTabletIcon,
    status: '已上线',
  },
  {
    name: 'H5浏览器',
    description: '通过H5浏览器访问AI智能聊天系统',
    icon: GlobeAltIcon,
    status: '已上线',
  },
  {
    name: '微信小程序',
    description: '通过微信小程序访问AI智能聊天系统',
    icon: DeviceTabletIcon,
    status: '已上线',
  },
  {
    name: 'PC端',
    description: '通过PC客户端访问AI智能聊天系统',
    icon: ComputerDesktopIcon,
    status: '已上线',
  },
  {
    name: '管理后台',
    description: '管理和配置AI智能聊天系统',
    icon: CogIcon,
    status: '已上线',
  },
  {
    name: 'APP',
    description: '即将推出的移动APP访问方式',
    icon: DeviceTabletIcon,
    status: '适配中',
  },
]

/**
 * 产品终端展示组件 - 卡片式设计
 * 展示AI产品支持的多种终端访问方式，包括微信公众号、H5浏览器、小程序等
 * 
 * @returns 产品终端展示组件
 */
export function ProductTerminalsSection() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">产品终端</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            多端支持，全平台覆盖
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            支持微信公众号、H5浏览器、小程序、PC端、管理后台等多种访问方式
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <ul className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
            {productTerminals.map((terminal) => (
              <li key={terminal.name} className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div className="bg-indigo-50 p-2">
                      <terminal.icon aria-hidden="true" className="size-5 text-indigo-600" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">{terminal.name}</h3>
                  </div>
                  <span
                    className={`inline-flex items-center px-2 py-1 text-xs font-medium ${
                      terminal.status === '已上线'
                        ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20'
                        : 'bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20'
                    }`}
                  >
                    {terminal.status}
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">{terminal.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}