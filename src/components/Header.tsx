'use client'

import { useState } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
  QuestionMarkCircleIcon,
  UserIcon,
  ComputerDesktopIcon,
  CogIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CloudIcon,
  ServerIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Logo } from '@/components/Logo'

const products = [
  { name: '云服务器', description: '稳定、安全、弹性、高性能的计算服务', href: '#', icon: ChartPieIcon },
  { name: '云数据库', description: '稳定可靠、可弹性伸缩的数据库服务', href: '#', icon: CursorArrowRaysIcon },
  { name: '云安全', description: '一站式安全管理平台', href: '#', icon: FingerPrintIcon },
  { name: '云存储', description: '安全、稳定、海量、便捷的云端存储服务', href: '#', icon: SquaresPlusIcon },
  { name: '云网络', description: '安全、可靠的网络连接服务', href: '#', icon: ArrowPathIcon },
]

const aiProducts = [
  { name: 'AI平台', description: '一站式人工智能开发平台', href: '#', icon: CursorArrowRaysIcon },
  { name: '机器学习', description: '高效易用的机器学习服务', href: '#', icon: ChartPieIcon },
  { name: '智能语音', description: '语音识别与合成服务', href: '#', icon: FingerPrintIcon },
  { name: '图像识别', description: '智能图像分析与处理', href: '#', icon: SquaresPlusIcon },
]

const callsToAction = [
  { name: '产品文档', href: '#', icon: PlayCircleIcon },
  { name: '联系销售', href: '#', icon: PhoneIcon },
]

const company = [
  { name: '关于我们', href: '#' },
  { name: '招贤纳士', href: '#' },
  { name: '技术支持', href: '#' },
  { name: '新闻中心', href: '#' },
  { name: '博客', href: '#' },
]

const solutions = [
  { name: '金融解决方案', href: '#' },
  { name: '教育解决方案', href: '#' },
  { name: '医疗解决方案', href: '#' },
  { name: '零售解决方案', href: '#' },
  { name: '政务解决方案', href: '#' },
]

// 控制台菜单数据
const consoleMenuItems = [
  { name: '云服务器控制台', description: '管理您的云服务器实例', href: '#', icon: ServerIcon },
  { name: '云数据库控制台', description: '管理数据库实例和配置', href: '#', icon: CogIcon },
  { name: '云存储控制台', description: '管理对象存储和文件', href: '#', icon: CloudIcon },
  { name: '安全中心', description: '查看安全状态和配置', href: '#', icon: ShieldCheckIcon },
  { name: '监控中心', description: '查看资源监控和告警', href: '#', icon: ChartPieIcon },
  { name: '账单中心', description: '查看费用和账单详情', href: '#', icon: DocumentTextIcon },
]

// 登录菜单数据
const loginMenuItems = [
  { name: '个人中心', description: '管理个人信息和设置', href: '#', icon: UserIcon },
  { name: '我的订单', description: '查看订单历史和状态', href: '#', icon: DocumentTextIcon },
  { name: '我的工单', description: '查看技术支持工单', href: '#', icon: CogIcon },
  { name: '安全设置', description: '管理账户安全选项', href: '#', icon: ShieldCheckIcon },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav aria-label="Global" className="mx-auto flex max-w-full items-center justify-between px-4 py-2 lg:px-8">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <span className="sr-only">腾讯云</span>
            <Logo className="h-8 w-auto" />
          </a>
          <div className="h-6 w-px bg-gray-200 mx-4 hidden lg:block"></div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-1">
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  onMouseEnter={(e) => e.currentTarget.click()}
                  className={`flex items-center gap-x-1 px-3 py-2 text-sm font-medium rounded-md ${open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                >
                  产品
                  <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none ${open ? 'text-blue-600 rotate-180' : 'text-gray-400'} transition-transform`} />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-0 z-10 mt-2 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-200 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="p-4">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm hover:bg-gray-50"
                      >
                        <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                          <item.icon aria-hidden="true" className="size-5 text-blue-600" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-medium text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-xs text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-medium text-gray-900 hover:bg-gray-100"
                      >
                        <item.icon aria-hidden="true" className="size-5 flex-none text-blue-600" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  onMouseEnter={(e) => e.currentTarget.click()}
                  className={`flex items-center gap-x-1 px-3 py-2 text-sm font-medium rounded-md ${open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                >
                  AI与大数据
                  <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none ${open ? 'text-blue-600 rotate-180' : 'text-gray-400'} transition-transform`} />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-0 z-10 mt-2 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-200 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="p-4">
                    {aiProducts.map((item) => (
                      <div
                        key={item.name}
                        className="group relative flex items-center gap-x-6 rounded-lg p-3 text-sm hover:bg-gray-50"
                      >
                        <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100">
                          <item.icon aria-hidden="true" className="size-5 text-blue-600" />
                        </div>
                        <div className="flex-auto">
                          <a href={item.href} className="block font-medium text-gray-900">
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-xs text-gray-500">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  className={`flex items-center gap-x-1 px-3 py-2 text-sm font-medium rounded-md ${open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                >
                  解决方案
                  <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none ${open ? 'text-blue-600 rotate-180' : 'text-gray-400'} transition-transform`} />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute left-0 z-10 mt-2 w-56 rounded-lg bg-white p-2 shadow-lg ring-1 ring-gray-200 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      {item.name}
                    </a>
                  ))}
                </PopoverPanel>
              </>
            )}
          </Popover>

          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  className={`flex items-center gap-x-1 px-3 py-2 text-sm font-medium rounded-md ${open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                >
                  公司
                  <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none ${open ? 'text-blue-600 rotate-180' : 'text-gray-400'} transition-transform`} />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute right-0 z-10 mt-2 w-56 rounded-lg bg-white p-2 shadow-lg ring-1 ring-gray-200 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  {company.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                    >
                      {item.name}
                    </a>
                  ))}
                </PopoverPanel>
              </>
            )}
          </Popover>
          </PopoverGroup>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
          >
            <span className="sr-only">打开主菜单</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-x-2 lg:justify-end lg:flex-1">
          {/* 控制台菜单 */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  className={`flex items-center gap-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <ComputerDesktopIcon className="h-4 w-4" />
                  控制台
                  <ChevronDownIcon aria-hidden="true" className={`size-4 flex-none transition-transform ${
                    open ? 'text-blue-600 rotate-180' : 'text-gray-400'
                  }`} />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute right-0 z-10 mt-2 w-80 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-200 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {consoleMenuItems.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                            <item.icon aria-hidden="true" className="size-4 text-blue-600" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-xs text-gray-500">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          {/* 登录菜单 */}
          <Popover className="relative">
            {({ open }) => (
              <>
                <PopoverButton
                  className={`flex items-center gap-x-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <UserIcon className="h-4 w-4" />
                  登录
                  <ChevronDownIcon aria-hidden="true" className={`size-4 flex-none transition-transform ${
                    open ? 'text-blue-600 rotate-180' : 'text-gray-400'
                  }`} />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute right-0 z-10 mt-2 w-72 overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-200 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-3">
                      {loginMenuItems.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                            <item.icon aria-hidden="true" className="size-4 text-blue-600" />
                          </div>
                          <div className="flex-auto">
                            <a href={item.href} className="block font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-xs text-gray-500">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-3">
                    <a
                      href="#"
                      className="flex items-center justify-center gap-x-2 text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors"
                    >
                      <UserIcon className="size-4" />
                      退出登录
                    </a>
                  </div>
                </PopoverPanel>
              </>
            )}
          </Popover>

          {/* 立即注册按钮 */}
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            立即注册
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-gray-900/50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-200 shadow-xl">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <a href="#" className="flex items-center">
              <span className="sr-only">腾讯云</span>
              <Logo className="h-8 w-auto" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-md p-2 text-gray-500 hover:text-gray-700"
            >
              <span className="sr-only">关闭菜单</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-4 flow-root">
            <div className="-my-2 divide-y divide-gray-200">
              <div className="py-4 space-y-1">
                <Disclosure as="div" defaultOpen={false}>
                  {({ open }) => (
                    <>
                      <DisclosureButton className={`group flex w-full items-center justify-between rounded-md py-2 px-3 text-base font-medium ${open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                        产品
                        <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none ${open ? 'rotate-180 text-blue-600' : 'text-gray-400'} transition-transform`} />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-1 space-y-1 pl-3 pr-1">
                        {products.map((item) => (
                          <div key={item.name} className="flex items-center py-2 px-3 rounded-md hover:bg-gray-50">
                            <div className="flex-shrink-0 mr-3">
                              <div className="flex size-8 items-center justify-center rounded-md bg-blue-50">
                                <item.icon aria-hidden="true" className="size-4 text-blue-600" />
                              </div>
                            </div>
                            <a href={item.href} className="block text-sm font-medium text-gray-700 hover:text-blue-600">
                              {item.name}
                            </a>
                          </div>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" defaultOpen={false}>
                  {({ open }) => (
                    <>
                      <DisclosureButton className={`group flex w-full items-center justify-between rounded-md py-2 px-3 text-base font-medium ${open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                        AI与大数据
                        <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none ${open ? 'rotate-180 text-blue-600' : 'text-gray-400'} transition-transform`} />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-1 space-y-1 pl-3 pr-1">
                        {aiProducts.map((item) => (
                          <div key={item.name} className="flex items-center py-2 px-3 rounded-md hover:bg-gray-50">
                            <div className="flex-shrink-0 mr-3">
                              <div className="flex size-8 items-center justify-center rounded-md bg-blue-50">
                                <item.icon aria-hidden="true" className="size-4 text-blue-600" />
                              </div>
                            </div>
                            <a href={item.href} className="block text-sm font-medium text-gray-700 hover:text-blue-600">
                              {item.name}
                            </a>
                          </div>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" defaultOpen={false}>
                  {({ open }) => (
                    <>
                      <DisclosureButton className={`group flex w-full items-center justify-between rounded-md py-2 px-3 text-base font-medium ${open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                        解决方案
                        <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none ${open ? 'rotate-180 text-blue-600' : 'text-gray-400'} transition-transform`} />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-1 space-y-1 pl-3 pr-1">
                        {solutions.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-md py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          >
                            {item.name}
                          </a>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" defaultOpen={false}>
                  {({ open }) => (
                    <>
                      <DisclosureButton className={`group flex w-full items-center justify-between rounded-md py-2 px-3 text-base font-medium ${open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                        公司
                        <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none ${open ? 'rotate-180 text-blue-600' : 'text-gray-400'} transition-transform`} />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-1 space-y-1 pl-3 pr-1">
                        {company.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="block rounded-md py-2 px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                          >
                            {item.name}
                          </a>
                        ))}
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>

              <div className="py-4">
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="flex items-center gap-x-2 rounded-md px-3 py-2 text-base font-medium text-blue-600 hover:text-blue-700"
                  >
                    <UserIcon className="h-5 w-5" />
                    登录
                  </a>

                  <button type="button" className="rounded-md p-2 text-gray-500 hover:text-blue-600">
                    <span className="sr-only">查看帮助</span>
                    <QuestionMarkCircleIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
export default Header
