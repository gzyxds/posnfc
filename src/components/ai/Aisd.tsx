'use client'

import { useState, useEffect } from 'react'
import { Container } from '@/components/Container'
import {
  ArrowRightIcon,
  BookOpenIcon,
  UserIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  PhoneIcon,
  LightBulbIcon,
  LockClosedIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

/**
 * 服务项目接口
 * @interface ServiceItem
 * @property {string} title - 服务标题
 * @property {string} description - 服务描述
 * @property {string} href - 链接地址
 * @property {React.ComponentType<any>} icon - Heroicons 图标组件
 * @property {string} alt - 图标描述
 */
interface ServiceItem {
  title: string
  description: string
  href: string
  icon: React.ComponentType<any>
  alt: string
}

/**
 * 服务项目数据配置
 * 展示智能支付终端的解决方案
 * 使用 Heroicons 直角图标
 */
const services: ServiceItem[] = [
  {
    title: '智能收银终端',
    description: '支付宝、微信、花呗分期、云闪付、刷卡插卡等支付方式全面兼容，收款笔笔不落',
    href: '/pos/zhineng',
    icon: BookOpenIcon,
    alt: '智能收银终端',
  },
  {
    title: '移动收银设备',
    description: '轻薄便携的移动支付设备，专为多元商业场景打造，适用于商超、便利店、水果店等',
    href: '/pos/yidong',
    icon: UserIcon,
    alt: '移动收银设备',
  },
  {
    title: '智能POS机',
    description:
      '功能强大、性能卓越的移动支付产品，接入多家主流支付通道，实现支付方式的全面覆盖',
    href: '/pos/dianqian',
    icon: ChatBubbleLeftRightIcon,
    alt: '智能POS机',
  },
  {
    title: '刷脸支付设备',
    description: '高速网络连接，畅快刷卡体验，经久耐用的专业支付设备，让每一笔交易都畅通无阻',
    href: '/pos/mapai',
    icon: DocumentTextIcon,
    alt: '刷脸支付设备',
  },
]

/**
 * 打字机效果Hook
 * @param {string} text - 要显示的文本
 * @param {number} speed - 打字速度（毫秒）
 * @returns {string} 当前显示的文本
 */
function useTypewriter(text: string, speed: number = 100) {
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    let i = 0
    setDisplayText('')
    const typing = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1))
        i++
      } else {
        clearInterval(typing)
      }
    }, speed)

    return () => clearInterval(typing)
  }, [text, speed])

  return displayText
}

/**
 * 服务卡片组件
 * 展示智能支付终端的解决方案服务
 * @param {ServiceItem} service - 服务数据
 * @returns {JSX.Element} 服务卡片组件
 */
function ServiceCard({ service }: { service: ServiceItem }) {
  const IconComponent = service.icon

  return (
    <div className="group flex h-full transform flex-col overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[0_6px_20px_rgba(55,99,170,0.2)]">
      <div className="p-5">
        <div className="mb-3 flex items-center">
          <div className="mr-3 flex h-10 w-10 items-center justify-center bg-white border border-gray-200 dark:bg-gray-700">
            <IconComponent
              className="h-6 w-6 text-blue-600 dark:text-blue-400"
              aria-hidden="true"
            />
          </div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {service.title}
          </h3>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
          {service.description}
        </p>
        <a
          href={service.href}
          className="group inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="transition-all duration-300 group-hover:mr-1">
            查看详情
          </span>
          <ArrowRightIcon className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  )
}

/**
 * 服务特点数据配置
 * 展示智能支付终端的服务优势和特点
 */
const serviceFeatures = [
  {
    icon: PhoneIcon,
    title: '轻薄便携',
    description: '专业支付设备，轻薄设计便于携带',
  },
  {
    icon: LightBulbIcon,
    title: '智能随心',
    description: '智能终端电签，功能强大性能卓越',
  },
  {
    icon: LockClosedIcon,
    title: '高速网络',
    description: '畅快刷卡体验，网络连接稳定高速',
  },
  {
    icon: ShieldCheckIcon,
    title: '经久耐用',
    description: '专业品质保障，设备稳定可靠',
  },
]

/**
 * 服务特点展示组件
 * 展示智能支付终端的核心服务优势，支持移动端两列两排布局
 * @returns {JSX.Element} 服务特点组件
 */
function ServiceFeatures() {
  return (
    <footer className="border-t border-gray-100 bg-white dark:border-gray-800 dark:bg-gray-900">
      {/* 服务特点展示 */}
      <div className="border-b border-gray-100 dark:border-gray-800">
        <Container className="py-6 sm:py-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 sm:gap-6 md:grid-cols-4">
            {serviceFeatures.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div
                  key={index}
                  className="flex flex-col items-center gap-2 text-center sm:flex-row sm:items-start sm:gap-4 sm:text-left"
                >
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-white border border-gray-200 sm:h-12 sm:w-12 dark:bg-gray-700">
                    <IconComponent className="h-6 w-6 text-blue-500 sm:h-8 sm:w-8 dark:text-blue-400" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm leading-tight font-medium text-gray-900 sm:text-base dark:text-white">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-500 sm:text-sm dark:text-gray-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </div>
    </footer>
  )
}

/**
 * Aisd组件 - 智能支付终端解决方案展示区域
 * 参考 Aisd.astro 设计，展示智能支付解决方案
 * 特点：居中布局、打字机效果、服务卡片展示、响应式设计、暗黑模式兼容
 *
 * 功能包括：
 * 1. 展示智能支付解决方案标题和描述
 * 2. 打字机效果的动态文本
 * 3. 四个核心支付设备项目卡片
 * 4. 响应式网格布局
 * 5. 支持暗黑模式
 * 6. 悬停交互效果
 * 7. 服务特点展示区域
 * @returns {JSX.Element} Aisd组件
 */
export default function Aisd() {
  const typingText = useTypewriter('适用多种场景，助力生意蒸蒸日上悦享支付', 100)

  return (
    <>
      {/* 服务特点展示 */}
      <ServiceFeatures />

      <section className="relative w-full overflow-hidden bg-gray-50 py-24 dark:bg-gray-900">
        {/* 背景装饰 */}
        <div className="absolute top-0 left-1/2 -z-10 h-[300px] w-[130%] -translate-x-1/2 rounded-b-[100%] bg-gradient-to-b from-blue-50/50 to-transparent blur-xl dark:from-blue-900/20 dark:to-transparent"></div>

        {/* 标题区域 */}
        <Container className="relative text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-600 sm:text-4xl lg:text-5xl dark:text-blue-400">
            智能支付终端解决方案·高效稳定收款
          </h2>
          <p className="mx-auto mb-12 max-w-4xl text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            {typingText}
          </p>
        </Container>

        {/* 服务项目网格 */}
        <Container className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
