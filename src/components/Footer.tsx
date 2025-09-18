'use client'

import Image from 'next/image'
import { useState } from 'react'

const navigation = {
  products: [
    { name: '电签POS机', href: '/pos/dianqian/' },
    { name: '智能POS机', href: '/pos/zhineng/' },
    { name: '移动POS机', href: '/pos/yidong/' },
    { name: '台式POS机', href: '/pos/taishi/' },
    { name: '刷卡机', href: '/pos/shuaka/' },
    { name: '扫码支付', href: '/pos/saoma/' },
  ],
  services: [
    { name: 'POS机办理', href: '/service/banli/' },
    { name: 'POS机申请', href: '/service/shenqing/' },
    { name: 'POS机安装', href: '/service/anzhuang/' },
    { name: 'POS机维修', href: '/service/weixiu/' },
    { name: '费率查询', href: '/service/feilv/' },
    { name: '结算服务', href: '/service/jiesuan/' },
  ],
  solutions: [
    { name: '零售行业解决方案', href: '/solution/retail/' },
    { name: '餐饮行业解决方案', href: '/solution/catering/' },
    { name: '电商行业解决方案', href: '/solution/ecommerce/' },
    { name: '小微商户解决方案', href: '/solution/smallbusiness/' },
    { name: '连锁门店解决方案', href: '/solution/chain/' },
  ],
  support: [
    { name: '帮助支持', href: '/support/' },
    { name: '联系我们', href: '/contact/' },
    { name: '关于我们', href: '/about/' },
    { name: '代理加盟', href: '/agent/' },
  ],
  friendlyLinks: [
    { name: '银盛支付', href: 'https://www.ums.com' },
    { name: '拉卡拉', href: 'https://www.lakala.com' },
    { name: '随行付', href: 'https://www.vbill.cn' },
    { name: '嘉联支付', href: 'https://www.jlpay.com' },
    { name: '国通星驿', href: 'https://www.starpos.com.cn' },
    { name: '支付百科', href: 'https://www.paypedia.cn' },
    { name: '盒子科技', href: 'https://www.boxpay.cn' },
    { name: '好哒', href: 'https://www.hodashop.com' },
    { name: '讯易通', href: 'https://www.xunyi.com' },

  ],
  social: [
    {
      name: 'Facebook',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Instagram',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'X',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
}

export function Footer() {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({})

  const toggleSection = (sectionKey: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }))
  }

  const AccordionSection = ({
    title,
    items,
    sectionKey,
  }: {
    title: string
    items: { name: string; href: string }[]
    sectionKey: string
  }) => {
    const isExpanded = expandedSections[sectionKey]

    return (
      <div className="border-b border-gray-200 md:border-none dark:border-gray-700">
        <button
          onClick={() => toggleSection(sectionKey)}
          className="flex w-full items-center justify-between py-4 text-left md:pointer-events-none md:cursor-default"
          aria-expanded={isExpanded}
        >
          <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <svg
            className={`h-5 w-5 transform transition-transform duration-200 md:hidden ${
              isExpanded ? 'rotate-180' : ''
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:block ${
            isExpanded ? 'max-h-96 pb-4' : 'max-h-0 md:max-h-none md:pb-0'
          }`}
        >
          <ul role="list" className="space-y-4 md:mt-6">
            {items.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block py-1 text-sm/6 text-gray-600 hover:text-gray-900 md:py-0 dark:text-gray-400 dark:hover:text-white"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return (
    <>
      {/* 全屏分割线 */}
      <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-[1800px] px-6 pt-6 pb-4 sm:pt-10 lg:px-8 lg:pt-14">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            {/* 移动端手风琴布局，桌面端网格布局 */}
            <div className="space-y-0 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 xl:col-span-2">
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <AccordionSection
                  title="产品中心"
                  items={navigation.products}
                  sectionKey="products"
                />
                <div className="md:mt-0">
                  <AccordionSection
                    title="POS服务"
                    items={navigation.services}
                    sectionKey="services"
                  />
                </div>
              </div>
              <div className="md:grid md:grid-cols-2 md:gap-8">
                <AccordionSection
                  title="行业解决方案"
                  items={navigation.solutions}
                  sectionKey="solutions"
                />
                <div className="md:mt-0">
                  <AccordionSection
                    title="服务支持"
                    items={navigation.support}
                    sectionKey="support"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10 xl:mt-0">
              <div className="flex justify-center xl:justify-start">
                <Image
                  src="/images/logos/logo.svg"
                  alt="优刻云"
                  width={109}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
              {/* 二维码区域 */}
              <div className="mt-8">
                <div className="mx-auto grid max-w-sm grid-cols-3 gap-4 xl:mx-0">
                  {/* 微信公众号二维码 */}
                  <div className="text-center">
                    <div className="rounded-none bg-white p-1.5 shadow-sm">
                      <Image
                        src="/images/contact/gzh.png"
                        alt="关注微信公众号"
                        width={48}
                        height={48}
                        className="h-auto w-full"
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-gray-600 dark:text-gray-400">
                      关注微信公众号
                    </p>
                  </div>
                  {/* 扫码加入社群二维码 */}
                  <div className="text-center">
                    <div className="rounded-none bg-white p-1.5 shadow-sm">
                      <Image
                        src="/images/contact/userhlc.png"
                        alt="扫码联系客服"
                        width={48}
                        height={48}
                        className="h-auto w-full"
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-gray-600 dark:text-gray-400">
                      扫码联系客服
                    </p>
                  </div>
                  {/* 微信小程序二维码 */}
                  <div className="text-center">
                    <div className="rounded-none bg-white p-1.5 shadow-sm">
                      <Image
                        src="/images/contact/QQ.png"
                        alt="关注微信小程序"
                        width={48}
                        height={48}
                        className="h-auto w-full"
                      />
                    </div>
                    <p className="mt-1.5 text-xs text-gray-600 dark:text-gray-400">
                      腾讯在线客服
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 友情链接区域 */}
          <div className="mt-6 border-t border-gray-900/10 pt-6 md:flex md:items-center md:justify-between dark:border-white/10">
            {/* 桌面端：标题和链接并排显示，与底部版权信息保持一致的布局 */}
            <div className="hidden md:flex md:items-center md:gap-x-6">
              <h3 className="text-sm/6 font-semibold whitespace-nowrap text-gray-900 dark:text-white">
                友情链接：
              </h3>
              <div className="flex flex-wrap gap-x-6">
                {navigation.friendlyLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm/6 whitespace-nowrap text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* 移动端：优化的折叠功能 */}
            <div className="md:hidden">
              {/* 折叠按钮 */}
              <button
                type="button"
                onClick={() => toggleSection('friendlyLinks')}
                className="flex w-full items-center justify-between py-3 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                aria-expanded={!!expandedSections['friendlyLinks']}
                aria-controls="friendlyLinks-content"
                aria-label="展开或收起友情链接"
              >
                <h3 className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                  友情链接
                </h3>
                <svg
                  className={`h-5 w-5 transform text-gray-500 transition-transform duration-200 dark:text-gray-400 ${
                    expandedSections['friendlyLinks'] ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* 折叠内容 */}
              <div
                id="friendlyLinks-content"
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  expandedSections['friendlyLinks']
                    ? 'max-h-96 pb-3'
                    : 'max-h-0'
                }`}
              >
                <div className="flex flex-wrap gap-x-4 gap-y-3">
                  {navigation.friendlyLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block py-1 text-sm/6 text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* 底部版权信息 */}
          <div className="mt-6 border-t border-gray-900/10 pt-6 md:flex md:items-center md:justify-between dark:border-white/10">
            <div className="flex gap-x-6 md:order-2">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon aria-hidden="true" className="size-6" />
                </a>
              ))}
            </div>
            <p className="mt-6 text-sm/6 text-gray-600 md:order-1 md:mt-0 dark:text-gray-400">
              &copy; 2023 优刻云计算. All rights reserved.{' '}
              <a
                href="https://beian.miit.gov.cn/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-white"
              >
                赣ICP备2023002309号-3
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}
