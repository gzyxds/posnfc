'use client'

import { useState } from 'react'
import Link from 'next/link'
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
  { name: '云服务器ECS', description: '稳定高效的计算服务', href: '/ecs', icon: ServerIcon },
  { name: '云电脑桌面', description: '便捷安全的远程办公', href: '/desktop', icon: ComputerDesktopIcon },
  { name: '虚拟主机', description: '简单易用的建站服务', href: '/host', icon: FingerPrintIcon },
  { name: 'CDN服务', description: '全球内容加速分发', href: '/cdn', icon: SquaresPlusIcon },
  { name: '独立服务器', description: '专属物理服务器租用', href: '/server', icon: ArrowPathIcon },
  { name: '安全服务', description: '安全服务', href: '/security', icon: ShieldCheckIcon },
]

const aiProducts = [
  { name: '智能助手', description: '全能AI助手', href: '/ai', icon: CursorArrowRaysIcon },
  { name: 'AI绘画', description: '智能图像生成', href: '/aigc', icon: ChartPieIcon },
  { name: '数字人', description: '虚拟数字人服务', href: '/human', icon: FingerPrintIcon },
  { name: '知识库', description: '智能知识管理', href: '/base', icon: SquaresPlusIcon },
  { name: '内容创作', description: '智能内容生成', href: '/creation', icon: SquaresPlusIcon },
  { name: '学术助手', description: '智能论文写作', href: '/academic', icon: SquaresPlusIcon },
]

const callsToAction = [
  { name: '产品文档', href: '/docs', icon: PlayCircleIcon },
  { name: '联系销售', href: '/contact', icon: PhoneIcon },

]

const company = [
  { name: '关于我们', description: '了解公司历史与文化', href: '/about', icon: UserIcon },
  { name: '招贤纳士', description: '加入我们的团队', href: '/recruitment', icon: DocumentTextIcon },
  { name: '技术支持', description: '获取专业技术帮助', href: '/support', icon: QuestionMarkCircleIcon },
  { name: '新闻中心', description: '公司最新动态', href: '/news', icon: MagnifyingGlassIcon },
  { name: '推广合作', description: '推广合作', href: '/cooperation', icon: DocumentTextIcon },
]

const solutions = [
  { name: '电商解决方案', description: '智能建站解决方案', href: '/ecommerce', icon: ChartPieIcon },
  { name: 'CMS解决方案', description: '内容管理系统解决方案', href: '/cms', icon: DocumentTextIcon },
  { name: '视频解决方案', description: '视频行业专属解决方案', href: '/video', icon: ShieldCheckIcon },
  { name: '零售解决方案', description: '零售行业专属解决方案', href: '/retail', icon: SquaresPlusIcon },
]

/**
 * Header组件 - 网站顶部导航栏
 * 实现了响应式设计和鼠标悬停菜单功能
 * @returns {JSX.Element} Header组件
 */
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 w-full z-[1000] scrollbar-width-none font-[TTTGB-regular,pingfang_SC,helvetica_neue,arial,hiragino_sans_gb,microsoft_yahei_ui,microsoft_yahei,simsun,sans-serif] text-[14px] antialiased box-border">
      <nav aria-label="Global" className="mx-auto flex max-w-full items-center justify-between px-4 py-2 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="sr-only">优刻云</span>
            <Logo className="h-8 w-auto" />
          </Link>
          <div className="h-6 w-px bg-gray-200 mx-4 hidden lg:block"></div>

          <PopoverGroup className="hidden lg:flex lg:gap-x-1">
            {/* 最新活动菜单 */}
            <a
              href="/new"
              className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors relative"
            >
              最新活动
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold leading-none">
                HOT
              </span>
            </a>

            {/* 产品菜单 */}
            <Popover className="relative group">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`flex items-center gap-x-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                  >
                    产品与服务
                    <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none transition-all duration-200 ${open ? 'text-blue-600 rotate-180' : 'text-gray-400 group-hover:text-blue-600'}`} />
                  </PopoverButton>

                  <PopoverPanel
                    className="absolute left-0 top-full z-10 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-200 transform origin-top transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto opacity-0 scale-95 pointer-events-none"
                    style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                    static
                  >
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-3">
                          {products.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                                <item.icon aria-hidden="true" className="size-4 text-gray-600" />
                              </div>
                              <div className="flex-auto">
                                <a href={item.href} className="block font-medium text-black group-hover:text-gray-700 transition-colors">
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-xs text-black">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-medium text-black hover:bg-gray-100"
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

            {/* AI产品菜单 */}
            <Popover className="relative group">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`flex items-center gap-x-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                  >
                   人工智能与应用
                    <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none transition-all duration-200 ${open ? 'text-blue-600 rotate-180' : 'text-gray-400 group-hover:text-blue-600'}`} />
                  </PopoverButton>

                  <PopoverPanel
                    className="absolute left-0 top-full z-10 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-200 transform origin-top transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto opacity-0 scale-95 pointer-events-none"
                    style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                    static
                  >
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-3">
                          {aiProducts.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                                <item.icon aria-hidden="true" className="size-4 text-gray-600" />
                              </div>
                              <div className="flex-auto">
                                <a href={item.href} className="block font-medium text-black group-hover:text-gray-700 transition-colors">
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-xs text-black">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-medium text-black hover:bg-gray-100"
                          >
                            <item.icon aria-hidden="true" className="size-4 flex-none text-blue-600" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </PopoverPanel>
                </>
              )}
            </Popover>

            {/* 解决方案菜单 */}
            <Popover className="relative group">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`flex items-center gap-x-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                  >
                    解决方案
                    <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none transition-all duration-200 ${open ? 'text-blue-600 rotate-180' : 'text-gray-400 group-hover:text-blue-600'}`} />
                  </PopoverButton>

                  <PopoverPanel
                    className="absolute left-0 top-full z-10 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-200 transform origin-top transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto opacity-0 scale-95 pointer-events-none"
                    style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                    static
                  >
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-3">
                          {solutions.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                                <item.icon aria-hidden="true" className="size-4 text-gray-600" />
                              </div>
                              <div className="flex-auto">
                                <a href={item.href} className="block font-medium text-black group-hover:text-gray-700 transition-colors">
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-xs text-black">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-medium text-black hover:bg-gray-100"
                          >
                            <item.icon aria-hidden="true" className="size-4 flex-none text-blue-600" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </PopoverPanel>
                </>
              )}
            </Popover>

            {/* 公司菜单 */}
            <Popover className="relative group">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`flex items-center gap-x-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-200 ${open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'}`}
                  >
                    关于我们
                    <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none transition-all duration-200 ${open ? 'text-blue-600 rotate-180' : 'text-gray-400 group-hover:text-blue-600'}`} />
                  </PopoverButton>

                  <PopoverPanel
                    className="absolute right-0 top-full z-10 w-screen max-w-md overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-gray-200 transform origin-top transition-all duration-200 ease-out group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto opacity-0 scale-95 pointer-events-none"
                    style={{ boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)' }}
                    static
                  >
                      <div className="p-4">
                        <div className="grid grid-cols-2 gap-3">
                          {company.map((item) => (
                            <div
                              key={item.name}
                              className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm hover:bg-gray-50 transition-colors"
                            >
                              <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-gray-100 transition-colors">
                                <item.icon aria-hidden="true" className="size-4 text-gray-600" />
                              </div>
                              <div className="flex-auto">
                                <a href={item.href} className="block font-medium text-black group-hover:text-gray-700 transition-colors">
                                  {item.name}
                                  <span className="absolute inset-0" />
                                </a>
                                <p className="mt-1 text-xs text-black">{item.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callsToAction.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-medium text-black hover:bg-gray-100"
                          >
                            <item.icon aria-hidden="true" className="size-4 flex-none text-blue-600" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </PopoverPanel>
                </>
              )}
            </Popover>

            {/* 艺创AI菜单 */}
            <a
              href="/yichuang-ai"
              className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              艺创AI
            </a>

            {/* 172号卡菜单 */}
            <a
              href="/172-card"
              className="px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
            >
              172号卡
            </a>
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
          {/* 控制台链接 */}
          <a
            href="#"
            className="flex items-center gap-x-1 px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
          >
            <ComputerDesktopIcon className="h-4 w-4" />
            控制台
          </a>

          {/* 登录链接 */}
          <a
            href="#"
            className="flex items-center gap-x-1 px-3 py-2 text-sm font-medium rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
          >
            <UserIcon className="h-4 w-4" />
            登录
          </a>

          {/* 立即注册按钮 */}
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            立即注册
          </a>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50 bg-gray-900/50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-4 sm:max-w-sm sm:ring-1 sm:ring-gray-200 shadow-xl">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3">
            <Link href="/" className="flex items-center">
              <span className="sr-only">优刻云</span>
              <Logo className="h-8 w-auto" />
            </Link>
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
                {/* 移动端最新活动链接 */}
                <a
                  href="/activities"
                  className="block rounded-md py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600 relative"
                >
                  最新活动
                  <span className="absolute top-1 right-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full font-bold leading-none">
                    HOT
                  </span>
                </a>

                <Disclosure as="div" defaultOpen={false}>
                  {({ open }) => (
                    <>
                      <DisclosureButton className={`group flex w-full items-center justify-between rounded-md py-2 px-3 text-base font-medium ${open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                        产品与服务
                        <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none ${open ? 'rotate-180 text-blue-600' : 'text-gray-400'} transition-transform`} />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-1 pl-3 pr-1">
                        <div className="grid grid-cols-2 gap-2">
                          {products.map((item) => (
                            <div key={item.name} className="flex flex-col py-2 px-3 rounded-md hover:bg-gray-50">
                              <div className="flex items-center mb-2">
                                <div className="flex size-7 items-center justify-center rounded-lg bg-gray-50 mr-2">
                                  <item.icon aria-hidden="true" className="size-4 text-gray-600" />
                                </div>
                                <a href={item.href} className="block font-medium text-black">
                                  {item.name}
                                </a>
                              </div>
                              <p className="text-xs text-black">{item.description}</p>
                            </div>
                          ))}
                        </div>
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
                      <DisclosurePanel className="mt-1 pl-3 pr-1">
                        <div className="grid grid-cols-2 gap-2">
                          {aiProducts.map((item) => (
                            <div key={item.name} className="flex flex-col py-2 px-3 rounded-md hover:bg-gray-50">
                              <div className="flex items-center mb-2">
                                <div className="flex size-7 items-center justify-center rounded-lg bg-gray-50 mr-2">
                                  <item.icon aria-hidden="true" className="size-4 text-gray-600" />
                                </div>
                                <a href={item.href} className="block font-medium text-black">
                                  {item.name}
                                </a>
                              </div>
                              <p className="text-xs text-black">{item.description}</p>
                            </div>
                          ))}
                        </div>
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
                      <DisclosurePanel className="mt-1 pl-3 pr-1">
                        <div className="grid grid-cols-2 gap-2">
                          {solutions.map((item) => (
                            <div key={item.name} className="flex flex-col py-2 px-3 rounded-md hover:bg-gray-50">
                              <div className="flex items-center mb-2">
                                <div className="flex size-7 items-center justify-center rounded-lg bg-gray-50 mr-2">
                                  <item.icon aria-hidden="true" className="size-4 text-gray-600" />
                                </div>
                                <a href={item.href} className="block font-medium text-black">
                                  {item.name}
                                </a>
                              </div>
                              <p className="text-xs text-black">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                <Disclosure as="div" defaultOpen={false}>
                  {({ open }) => (
                    <>
                      <DisclosureButton className={`group flex w-full items-center justify-between rounded-md py-2 px-3 text-base font-medium ${open ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50'}`}>
                        关于我们
                        <ChevronDownIcon aria-hidden="true" className={`size-5 flex-none ${open ? 'rotate-180 text-blue-600' : 'text-gray-400'} transition-transform`} />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-1 pl-3 pr-1">
                        <div className="grid grid-cols-2 gap-2">
                          {company.map((item) => (
                            <div key={item.name} className="flex flex-col py-2 px-3 rounded-md hover:bg-gray-50">
                              <div className="flex items-center mb-2">
                                <div className="flex size-7 items-center justify-center rounded-lg bg-gray-50 mr-2">
                                  <item.icon aria-hidden="true" className="size-4 text-gray-600" />
                                </div>
                                <a href={item.href} className="block font-medium text-black">
                                  {item.name}
                                </a>
                              </div>
                              <p className="text-xs text-black">{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* 移动端艺创AI链接 */}
                <a
                  href="/yichuang-ai"
                  className="block rounded-md py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                >
                  艺创AI
                </a>

                {/* 移动端172号卡链接 */}
                <a
                  href="/172-card"
                  className="block rounded-md py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                >
                  172号卡
                </a>

                {/* 移动端控制台链接 */}
                <a
                  href="#"
                  className="flex items-center gap-x-2 rounded-md py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                >
                  <ComputerDesktopIcon className="h-5 w-5" />
                  控制台
                </a>

                {/* 移动端登录链接 */}
                <a
                  href="#"
                  className="flex items-center gap-x-2 rounded-md py-2 px-3 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                >
                  <UserIcon className="h-5 w-5" />
                  登录
                </a>

                {/* 移动端立即注册按钮 */}
                <a
                  href="#"
                  className="flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  立即注册
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}

export default Header
