'use client'

import React, { JSX, useState } from 'react'
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
  DocumentTextIcon,
  ShieldCheckIcon,
  ServerIcon,
  UserPlusIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  QrCodeIcon,
  ShoppingCartIcon,
  BuildingStorefrontIcon,
  CurrencyYenIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
  PhoneArrowUpRightIcon,
} from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/20/solid'
import { Logo } from '@/components/Logo'

// 菜单项类型定义
interface MenuItem {
  name: string
  description: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  hot?: boolean // 热门标签
}

interface CallToAction {
  name: string
  href: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// POS机产品菜单配置
const posProducts: MenuItem[] = [
  {
    name: '电签POS机',
    description: '电签POS机费率0.38%',
    href: '/pos/dianqian',
    icon: CreditCardIcon,
    hot: true,
  },
  {
    name: '智能POS机',
    description: '安卓智能POS终端',
    href: '/pos/zhineng',
    icon: ComputerDesktopIcon,
  },
  {
    name: '移动POS机',
    description: '便携式移动收款设备',
    href: '/pos/yidong',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: '码牌收款',
    description: '聚合码牌，无营业执照可申请',
    href: '/pos/mapai',
    icon: QrCodeIcon,
  },
]

// 品牌POS机菜单配置
const brandProducts: MenuItem[] = [
  {
    name: '联括宝',
    description: '联梦想·拓未来',
    href: '/brand/lkb',
    icon: CreditCardIcon,
  },
  {
    name: '拉卡拉',
    description: '拉卡拉电签POS机办理',
    href: '/brand/lkl',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: '银盛POS机',
    description: '银盛电签POS机免费领取',
    href: '/brand/ys',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: '中付POS机',
    description: '中付智能POS机代理',
    href: '/brand/zf',
    icon: ComputerDesktopIcon,
  },
  {
    name: '乐刷POS机',
    description: '乐刷码牌收款办理',
    href: '/brand/ls',
    icon: QrCodeIcon,
  },
  {
    name: '汇莱米POS机',
    description: '汇莱米码牌收款POS机',
    href: '/brand/hlm',
    icon: QrCodeIcon,
  },
  {
    name: '合利宝POS机',
    description: '合利宝码牌收款POS机',
    href: '/brand/hlb',
    icon: QrCodeIcon,
  },
  {
    name: '星驿付POS机',
    description: '星驿付支付解决方案',
    href: '/brand/xyf',
    icon: ShieldCheckIcon,
  },
]

// 行业解决方案菜单配置
const solutions: MenuItem[] = [
  {
    name: '零售行业',
    description: '零售行业专属收款方案',
    href: '/solution/retail',
    icon: ShoppingCartIcon,
  },
  {
    name: '餐饮行业',
    description: '餐饮行业高效收款方案',
    href: '/solution/restaurant',
    icon: BuildingStorefrontIcon,
  },
  {
    name: '电商行业',
    description: '电商行业在线收款方案',
    href: '/solution/ecommerce',
    icon: ComputerDesktopIcon,
  },
  {
    name: '小微商户',
    description: '小微商户简易收款方案',
    href: '/solution/smm',
    icon: UsersIcon,
  },
]

// 代理招商菜单配置
const agent: MenuItem[] = [
  {
    name: '代理政策',
    description: 'POS机代理政策2025',
    href: '/agent/policy',
    icon: DocumentTextIcon,
    hot: true,
  },
  {
    name: '分润结算',
    description: '分润万12，总部直签',
    href: '/agent/profit',
    icon: CurrencyYenIcon,
  },
  {
      name: '激活返现',
      description: '激活一台返现299元',
      href: '/agent/cashback',
      icon: UsersIcon,
    },
  {
    name: '代理加盟',
    description: '0加盟费，1台起拿',
    href: '/agent/join',
    icon: UserPlusIcon,
  },
]

// 帮助支持菜单配置
const support: MenuItem[] = [
  {
    name: '办理指南',
    description: 'POS机怎么办理',
    href: '/support/guide',
    icon: DocumentTextIcon,
  },
  {
    name: '常见问题',
    description: 'POS机使用常见问题',
    href: '/support/faq',
    icon: QuestionMarkCircleIcon,
  },
  {
    name: '费率说明',
    description: 'POS机费率是多少',
    href: '/support/rate',
    icon: CurrencyYenIcon,
  },
  {
    name: '关于我们',
    description: '关于我们',
    href: '/support/about',
    icon: ChatBubbleLeftRightIcon,
  },
]

// 行动按钮配置
const callsToAction: CallToAction[] = [
  { name: '办理指南', href: '/support/guide', icon: PlayCircleIcon },
  { name: '客服热线', href: 'tel:95000', icon: PhoneArrowUpRightIcon },
]

/**
 * Header组件 - POS机网站顶部导航栏
 *
 * 功能特性：
 * - 响应式设计，支持桌面端和移动端
 * - 多级下拉菜单，包含POS产品、品牌、解决方案、代理招商、帮助支持
 * - 移动端侧边栏菜单
 * - 用户登录/注册入口
 * - 无障碍访问支持
 *
 * @returns {JSX.Element} Header组件
 */
export function Header(): JSX.Element {
  // 移动端菜单开关状态
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)
  // 移除横幅相关状态和事件监听

  return (
    <header className="scrollbar-width-none fixed top-0 right-0 left-0 z-50 box-border w-full bg-white font-[TTTGB-regular,pingfang_SC,helvetica_neue,arial,hiragino_sans_gb,microsoft_yahei_ui,microsoft_yahei,simsun,sans-serif] text-[14px] antialiased">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-full items-center justify-between px-4 py-2 lg:px-8"
      >
        {/* 左侧：Logo和桌面端导航菜单 */}
        <div className="flex items-center">
          {/* 网站Logo */}
          <Link href="/" className="flex items-center">
            <span className="sr-only">POSNFC</span>
            <Logo className="h-8 w-auto" />
          </Link>

          {/* 分隔线 */}
          <div className="mx-4 hidden h-6 w-px bg-gray-200 lg:block"></div>

          {/* 桌面端导航菜单组 */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-1">
            {/* 免费领取POS机菜单 - 带HOT标签的直链菜单 */}
            <a
              href="/new"
              className="relative rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
            >
              免费领取收银设备
              <span className="absolute -top-1 -right-1 rounded-full bg-red-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                HOT
              </span>
            </a>

            {/* POS机产品下拉菜单 */}
            <Popover className="group relative">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                  >
                    热门产品
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`size-5 flex-none transition-all duration-200 ${open ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}
                    />
                  </PopoverButton>

                  <PopoverPanel
                    className="pointer-events-none absolute top-full left-1/2 z-10 w-screen max-w-md origin-top -translate-x-1/2 scale-95 transform overflow-hidden rounded-lg bg-white opacity-0 shadow-lg ring-1 ring-gray-200 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    }}
                    static
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {posProducts.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm transition-colors hover:bg-gray-50"
                          >
                            <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-100">
                              <item.icon
                                aria-hidden="true"
                                className="size-4 text-gray-600"
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-medium text-black transition-colors group-hover:text-gray-700"
                              >
                                {item.name}
                                {item.hot && (
                                  <span className="ml-1 inline-flex items-center rounded-full bg-red-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                                    HOT
                                  </span>
                                )}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-xs text-black">
                                {item.description}
                              </p>
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
                          <item.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-blue-600"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>

            {/* 品牌POS机下拉菜单 */}
            <Popover className="group relative">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                  >
                    合作品牌
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`size-5 flex-none transition-all duration-200 ${open ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}
                    />
                  </PopoverButton>

                  <PopoverPanel
                    className="pointer-events-none absolute top-full left-1/2 z-10 w-screen max-w-md origin-top -translate-x-1/2 scale-95 transform overflow-hidden rounded-lg bg-white opacity-0 shadow-lg ring-1 ring-gray-200 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    }}
                    static
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {brandProducts.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm transition-colors hover:bg-gray-50"
                          >
                            <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-100">
                              <item.icon
                                aria-hidden="true"
                                className="size-4 text-gray-600"
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-medium text-black transition-colors group-hover:text-gray-700"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-xs text-black">
                                {item.description}
                              </p>
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
                          <item.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-blue-600"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>

            {/* 行业解决方案下拉菜单 */}
            <Popover className="group relative">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                  >
                    支付解决方案
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`size-5 flex-none transition-all duration-200 ${open ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}
                    />
                  </PopoverButton>

                  <PopoverPanel
                    className="pointer-events-none absolute top-full left-1/2 z-10 w-screen max-w-md origin-top -translate-x-1/2 scale-95 transform overflow-hidden rounded-lg bg-white opacity-0 shadow-lg ring-1 ring-gray-200 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    }}
                    static
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {solutions.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm transition-colors hover:bg-gray-50"
                          >
                            <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-100">
                              <item.icon
                                aria-hidden="true"
                                className="size-4 text-gray-600"
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-medium text-black transition-colors group-hover:text-gray-700"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-xs text-black">
                                {item.description}
                              </p>
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
                          <item.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-blue-600"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>

            {/* 代理招商下拉菜单 */}
            <Popover className="group relative">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                  >
                    代理招商
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`size-5 flex-none transition-all duration-200 ${open ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}
                    />
                  </PopoverButton>

                  <PopoverPanel
                    className="pointer-events-none absolute top-full left-1/2 z-10 w-screen max-w-md origin-top -translate-x-1/2 scale-95 transform overflow-hidden rounded-lg bg-white opacity-0 shadow-lg ring-1 ring-gray-200 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    }}
                    static
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {agent.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm transition-colors hover:bg-gray-50"
                          >
                            <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-100">
                              <item.icon
                                aria-hidden="true"
                                className="size-4 text-gray-600"
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-medium text-black transition-colors group-hover:text-gray-700"
                              >
                                {item.name}
                                {item.hot && (
                                  <span className="ml-1 inline-flex items-center rounded-full bg-red-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                                    HOT
                                  </span>
                                )}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-xs text-black">
                                {item.description}
                              </p>
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
                          <item.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-blue-600"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>

            {/* 帮助支持下拉菜单 */}
            <Popover className="group relative">
              {({ open }) => (
                <>
                  <PopoverButton
                    className={`flex items-center gap-x-1 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${open ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'}`}
                  >
                    帮助支持
                    <ChevronDownIcon
                      aria-hidden="true"
                      className={`size-5 flex-none transition-all duration-200 ${open ? 'rotate-180 text-blue-600' : 'text-gray-400 group-hover:text-blue-600'}`}
                    />
                  </PopoverButton>

                  <PopoverPanel
                    className="pointer-events-none absolute top-full left-1/2 z-10 w-screen max-w-md origin-top -translate-x-1/2 scale-95 transform overflow-hidden rounded-lg bg-white opacity-0 shadow-lg ring-1 ring-gray-200 transition-all duration-200 ease-out group-hover:pointer-events-auto group-hover:scale-100 group-hover:opacity-100"
                    style={{
                      boxShadow:
                        '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                    }}
                    static
                  >
                    <div className="p-4">
                      <div className="grid grid-cols-2 gap-3">
                        {support.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex items-center gap-x-3 rounded-lg p-3 text-sm transition-colors hover:bg-gray-50"
                          >
                            <div className="flex size-8 flex-none items-center justify-center rounded-lg bg-gray-50 transition-colors group-hover:bg-gray-100">
                              <item.icon
                                aria-hidden="true"
                                className="size-4 text-gray-600"
                              />
                            </div>
                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-medium text-black transition-colors group-hover:text-gray-700"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-1 text-xs text-black">
                                {item.description}
                              </p>
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
                          <item.icon
                            aria-hidden="true"
                            className="size-5 flex-none text-blue-600"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>
          </PopoverGroup>
        </div>

        {/* 移动端：汉堡菜单按钮 */}
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
        {/* 右侧：桌面端直链菜单和用户操作区 */}
        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-x-1">
          {/* 文档中心 */}
          <a
            href="/docs"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
          >
            文档中心
          </a>

          {/* 分割线 */}
          <div className="mx-2 h-6 w-px bg-gray-200"></div>

          {/* 控制台 */}
          <a
            href="https://console.cloudcvm.com"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
          >
            控制台
          </a>

          {/* 分割线 */}
          <div className="mx-2 h-6 w-px bg-gray-200"></div>

          {/* 登录 */}
          <a
            href="https://console.cloudcvm.com/login.htm"
            className="rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
          >
            登录
          </a>

          {/* 分割线 */}
          <div className="mx-2 h-6 w-px bg-gray-200"></div>

          {/* 免费注册 - 主要CTA按钮 */}
          <a
            href="https://console.cloudcvm.com/login.htm"
            className="inline-flex items-center justify-center gap-2 border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
          >
            <UserPlusIcon className="h-4 w-4" aria-hidden="true" />
            免费注册
          </a>
        </div>
      </nav>
      {/* 分割线 */}
      <div className="h-px w-full bg-gray-200"></div>
      {/* 移动端侧边栏菜单 */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            {/* 网站Logo */}
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">POSNFC</span>
              <Logo className="h-8 w-auto" />
            </Link>

            {/* 关闭按钮 */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">关闭菜单</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {/* 直链菜单组 */}
              <div className="space-y-2 py-6">
                {/* 免费领取POS机 - 带HOT标签 */}
                <a
                  href="/new"
                  className="relative -mx-3 flex items-center rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                >
                  免费领取收银设备
                  <span className="ml-2 inline-flex items-center rounded-full bg-red-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                    HOT
                  </span>
                </a>

                {/* POS机产品折叠菜单 */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600">
                        热门产品
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={`size-5 flex-none transition-transform ${open ? 'rotate-180' : ''}`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-3">
                        <div className="grid grid-cols-2 gap-3 px-3">
                          {posProducts.map((item) => (
                            <DisclosureButton
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="flex flex-col items-center justify-center border border-gray-200 bg-white p-4 text-center transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md active:scale-95"
                            >
                              <div className="mb-2 flex size-10 items-center justify-center bg-blue-50">
                                <item.icon
                                  aria-hidden="true"
                                  className="size-5 text-blue-600"
                                />
                              </div>
                              <div className="flex items-center justify-center mb-1">
                                <span className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </span>
                                {item.hot && (
                                  <span className="ml-1 inline-flex items-center rounded-full bg-red-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                                    HOT
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 leading-tight">
                                {item.description}
                              </p>
                            </DisclosureButton>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* 品牌POS机折叠菜单 */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600">
                        合作品牌
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={`size-5 flex-none transition-transform ${open ? 'rotate-180' : ''}`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-3">
                        <div className="grid grid-cols-2 gap-3 px-3">
                          {brandProducts.map((item) => (
                            <DisclosureButton
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 text-center transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md active:scale-95"
                            >
                              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-blue-50">
                                <item.icon
                                  aria-hidden="true"
                                  className="size-5 text-blue-600"
                                />
                              </div>
                              <div className="mb-1">
                                <span className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 leading-tight">
                                {item.description}
                              </p>
                            </DisclosureButton>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* 行业解决方案折叠菜单 */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600">
                        支付解决方案
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={`size-5 flex-none transition-transform ${open ? 'rotate-180' : ''}`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-3">
                        <div className="grid grid-cols-2 gap-3 px-3">
                          {solutions.map((item) => (
                            <DisclosureButton
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 text-center transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md active:scale-95"
                            >
                              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-blue-50">
                                <item.icon
                                  aria-hidden="true"
                                  className="size-5 text-blue-600"
                                />
                              </div>
                              <div className="mb-1">
                                <span className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 leading-tight">
                                {item.description}
                              </p>
                            </DisclosureButton>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* 代理招商折叠菜单 */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600">
                        代理招商
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={`size-5 flex-none transition-transform ${open ? 'rotate-180' : ''}`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-3">
                        <div className="grid grid-cols-2 gap-3 px-3">
                          {agent.map((item) => (
                            <DisclosureButton
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 text-center transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md active:scale-95"
                            >
                              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-blue-50">
                                <item.icon
                                  aria-hidden="true"
                                  className="size-5 text-blue-600"
                                />
                              </div>
                              <div className="flex items-center justify-center mb-1">
                                <span className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </span>
                                {item.hot && (
                                  <span className="ml-1 inline-flex items-center rounded-full bg-red-500 px-1.5 py-0.5 text-xs leading-none font-bold text-white">
                                    HOT
                                  </span>
                                )}
                              </div>
                              <p className="text-xs text-gray-500 leading-tight">
                                {item.description}
                              </p>
                            </DisclosureButton>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>

                {/* 帮助支持折叠菜单 */}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600">
                        帮助支持
                        <ChevronDownIcon
                          aria-hidden="true"
                          className={`size-5 flex-none transition-transform ${open ? 'rotate-180' : ''}`}
                        />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-3">
                        <div className="grid grid-cols-2 gap-3 px-3">
                          {support.map((item) => (
                            <DisclosureButton
                              key={item.name}
                              as="a"
                              href={item.href}
                              className="flex flex-col items-center justify-center rounded-lg border border-gray-200 bg-white p-4 text-center transition-all duration-200 hover:border-blue-300 hover:bg-blue-50 hover:shadow-md active:scale-95"
                            >
                              <div className="mb-2 flex size-10 items-center justify-center rounded-lg bg-blue-50">
                                <item.icon
                                  aria-hidden="true"
                                  className="size-5 text-blue-600"
                                />
                              </div>
                              <div className="mb-1">
                                <span className="text-sm font-medium text-gray-900">
                                  {item.name}
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 leading-tight">
                                {item.description}
                              </p>
                            </DisclosureButton>
                          ))}
                        </div>
                      </DisclosurePanel>
                    </>
                  )}
                </Disclosure>
              </div>

              {/* 行动按钮组 - 移动端显示 */}
              <div className="space-y-2 py-6">
                {callsToAction.map((button) => (
                  <a
                    key={button.name}
                    href={button.href}
                    className="-mx-3 flex items-center gap-x-3 rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                  >
                    <button.icon aria-hidden="true" className="size-5" />
                    {button.name}
                  </a>
                ))}
              </div>

              {/* 登录/注册按钮 - 移动端显示 */}
              <div className="py-6">
                <a
                  href="https://console.cloudcvm.com/login.htm"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-blue-600"
                >
                  登录
                </a>
                <a
                  href="https://console.cloudcvm.com/login.htm"
                  className="-mx-3 mt-2 block rounded-lg bg-blue-600 px-3 py-2.5 text-base font-medium text-white transition-colors hover:bg-blue-700"
                >
                  免费注册
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
