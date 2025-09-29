import { type Metadata } from 'next'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CpuChipIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  CogIcon,
  BoltIcon,
  GlobeAltIcon,
  CheckCircleIcon,
} from '@heroicons/react/20/solid'
import clsx from 'clsx'

// 基础UI组件
import { Button } from '@/components/Button'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

// 业务功能组件
import { Solution } from '@/components/Solution'
import Advantage from '@/components/Advantage'
import Customer from '@/components/common/Customer'
import { Faqs } from '@/components/Faqs'
import CatSections from '@/components/CatSections'
import { Carousel } from '@/components/carousel'
import Cardprice from '@/components/common/Cardprice'
import Latestapplication from '@/components/common/Latestapplication'


// SEO元数据配置
export const metadata: Metadata = {
  title: '移动POS机_便携式移动收款设备_4G全网通_支持扫码刷卡NFC_费率0.38%',
  description:
    '2025新款移动POS机/便携式收款设备一站式申请：体积小巧口袋即放，4G全网通+WiFi双连接，支持微信、支付宝、花呗、信用卡、数字人民币等全渠道收款，0元免押金，激活返现299元，费率0.38%永不加3，个人小微1证办理，顺丰包邮2天到家！',
  keywords: [
    '移动POS机',
    '便携式POS机',
    '移动收款设备',
    '手持POS机',
    '无线POS机',
    '4G移动POS',
    '蓝牙POS机',
    '手机POS机',
    '迷你POS机',
    '袖珍POS机',
    '地摊收款',
    '外卖收款',
    '费率0.38%',
    '激活返现',
    '免押金',
    '秒到账',
  ],
}

// 产品核心优势数据配置 - Hero区域展示用
const posAdvantages = [
  {
    name: '便携小巧',
    description: '体积小巧口袋即放；重量<100g久握不累；随身携带方便收款',
    icon: BoltIcon,
  },
  {
    name: '全网通',
    description: '4G全网通+WiFi+蓝牙双连接；即开即用免安装；无需固定网络',
    icon: GlobeAltIcon,
  },
  {
    name: '多支付',
    description: '支持扫码/刷卡/NFC/数字人民币；兼容微信、支付宝、云闪付',
    icon: CogIcon,
  },
  {
    name: '长续航',
    description: '内置电池续航8小时；声音+震动双提示；防摔防尘设计',
    icon: BoltIcon,
  },
  {
    name: '高安全',
    description: '央行一清机认证；支持键盘输入密码；交易数据加密传输',
    icon: ShieldCheckIcon,
  },
  {
    name: '秒到账',
    description: '交易秒到无需等待；实时查询交易明细；自动结算T+1到账',
    icon: ChartBarIcon,
  },
  {
    name: '零门槛',
    description: '免押金0元领取；个人可申请；一证即可办理；无流量费',
    icon: CloudArrowUpIcon,
  },
  {
    name: '高收益',
    description: '激活返现299元；费率0.38%永不加3；支持花呗信用卡',
    icon: CpuChipIcon,
  },
]

// 产品特性详细列表 - Features区域展示用
const posFeatureList = [
  {
    name: '便携小巧',
    description: '体积小巧口袋即放；重量<100g久握不累；随身携带方便收款',
    icon: BoltIcon,
  },
  {
    name: '全网通',
    description: '4G全网通+WiFi+蓝牙双连接；即开即用免安装；无需固定网络',
    icon: GlobeAltIcon,
  },
  {
    name: '多支付',
    description: '支持扫码/刷卡/NFC/数字人民币；兼容微信、支付宝、云闪付',
    icon: CogIcon,
  },
  {
    name: '长续航',
    description: '内置电池续航8小时；声音+震动双提示；防摔防尘设计',
    icon: BoltIcon,
  },
  {
    name: '高安全',
    description: '央行一清机认证；支持键盘输入密码；交易数据加密传输',
    icon: ShieldCheckIcon,
  },
  {
    name: '秒到账',
    description: '交易秒到无需等待；实时查询交易明细；自动结算T+1到账',
    icon: ChartBarIcon,
  },
  {
    name: '零门槛',
    description: '免押金0元领取；个人可申请；一证即可办理；无流量费',
    icon: CloudArrowUpIcon,
  },
  {
    name: '高收益',
    description: '激活返现299元；费率0.38%永不加3；支持花呗信用卡',
    icon: CpuChipIcon,
  },
]

// 套餐价格配置 - Pricing区域展示用
const posPricingPlans = [
  {
    name: '标准版',
    price: '￥0',
    period: '免押金',
    description: '个人小微商户首选-地摊经济必备',
    features: [
      '激活返现：299元',
      '费率：0.38%',
      '分润：万12',
      '支持：扫码/刷卡/NFC',
      '通讯：4G全网通',
      '续航：8小时',
      '30天内激活有效',
    ],
    href: '#',
    featured: false,
  },
  {
    name: '移动版',
    price: '￥0',
    period: '免押金',
    description: '外卖骑手/网约车司机首选',
    features: [
      '激活返现：349元',
      '费率：0.38%',
      '分润：万13',
      '支持：扫码/刷卡/NFC/数字人民币',
      '通讯：4G全网通+WiFi双频',
      '续航：12小时',
      '30天内激活有效',
    ],
    href: '#',
    featured: true,
  },
  {
    name: '代理版',
    price: '￥0',
    period: '免押金',
    description: '创业者首选-可发展下级',
    features: [
      '激活返现：399元',
      '费率：0.38%',
      '分润：万14',
      '支持：全渠道收款',
      '通讯：4G全网通+WiFi双频+蓝牙5.0',
      '续航：12小时',
      '可发展无限下级',
    ],
    href: '#',
    featured: false,
  },
]

// 产品竞争优势配置 - Advantages区域展示用
const productAdvantages = [
  {
    name: '便携收款',
    description:
      '体积小巧口袋即放，重量不到100g，随身携带方便收款，适合地摊、外卖、网约车等移动场景使用。',
    features: ['体积小巧便携', '重量轻便', '适合移动场景'],
    icon: BoltIcon,
  },
  {
    name: '全渠道支付',
    description:
      '支持微信、支付宝、云闪付、数字人民币等全渠道收款，满足各类消费者的支付习惯和需求。',
    features: ['扫码支付', '刷卡支付', 'NFC支付', '数字人民币'],
    icon: CogIcon,
  },
  {
    name: '安全可靠',
    description:
      '央行一清机认证，交易数据加密传输，支持键盘输入密码，保障商户和消费者的资金安全。',
    features: ['央行认证', '数据加密', '安全支付'],
    icon: ShieldCheckIcon,
  },
  {
    name: '高收益低门槛',
    description:
      '免押金0元领取，激活返现高达399元，费率低至0.38%永不加3，个人可申请，一证即可办理。',
    features: ['免押金', '激活返现', '低费率', '个人可办理'],
    icon: GlobeAltIcon,
  },
]

// 底部特性配置 - BottomFeatures区域展示用
const bottomFeatures = [
  {
    name: '便携收款',
    description: '体积小巧口袋即放，重量不到100g，随身携带方便收款',
    icon: BoltIcon,
  },
  {
    name: '全渠道支付',
    description: '支持微信、支付宝、云闪付、数字人民币等全渠道收款',
    icon: CogIcon,
  },
  {
    name: '安全可靠',
    description: '央行一清机认证，交易数据加密传输，保障资金安全',
    icon: ShieldCheckIcon,
  },
  {
    name: '高收益低门槛',
    description: '免押金0元领取，激活返现高达399元，费率低至0.38%',
    icon: GlobeAltIcon,
  },
]

// Hero区域组件 - 页面顶部主要展示区域
function HeroSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                便携式移动收款设备
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                移动POS机
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                2025新款移动POS机，体积小巧口袋即放，重量不到100g，支持微信、支付宝、花呗、信用卡、数字人民币等全渠道收款，0元免押金，激活返现299元，费率0.38%永不加3！
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {posAdvantages.slice(0, 3).map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-12 flex gap-x-8">
                <Button
                  href="#pricing"
                  className="rounded-none bg-blue-600 px-8 py-4 text-lg hover:bg-blue-700"
                >
                  免费申请
                </Button>
                <Button
                  variant="outline"
                  href="#features"
                  className="rounded-none px-8 py-4 text-lg"
                >
                  了解更多
                </Button>
              </div>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <div className="w-full max-w-none bg-gray-800 p-8 ring-1 ring-white/10" style={{borderRadius: 'var(--border-radius-medium, 4px)'}}>
                  <div className="text-white">
                    <h3 className="mb-4 text-xl font-semibold">
                      移动POS机产品优势
                    </h3>
                    <div className="space-y-3 text-sm">
                      <p>✓ 体积小巧口袋即放，重量&lt;100g久握不累</p>
                      <p>✓ 4G全网通+WiFi+蓝牙双连接，即开即用</p>
                      <p>✓ 内置电池续航8小时，声音+震动双提示</p>
                      <p>✓ 支持扫码/刷卡/NFC/数字人民币</p>
                      <p>✓ 兼容微信、支付宝、云闪付、花呗</p>
                      <p>✓ 交易秒到无需等待，实时查询明细</p>
                      <p>✓ 免押金0元领取，个人可申请</p>
                      <p>✓ 激活返现299元，费率0.38%永不加3</p>
                      <p>✓ 央行一清机认证，交易数据加密</p>
                      <p>✓ 支持键盘输入密码，防摔防尘设计</p>
                      <p>✓ 顺丰包邮，30天无理由退换</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset"
              />
            </div>
          </div>
      </div>
    </div>
  </div>
  )
}

// 特性展示组件 - 网格布局展示产品核心特性
function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-50 py-20 sm:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            移动POS机
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            便携高效安全的移动收款设备，支持多种支付方式，0元免押金申请
          </p>
        </div>
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:grid-cols-4 xl:gap-x-8"
          >
            {posFeatureList.map((feature, index) => (
              <li
                  key={feature.name}
                  className="group relative border-2 border-white bg-gradient-to-b from-white to-gray-50 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800"
                  style={{borderRadius: '4px'}}
                >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6 transition-colors duration-300 group-hover:bg-blue-50 dark:border-white/10 dark:bg-gray-800/50">
                  <div className="flex h-12 w-12 items-center justify-center bg-blue-600 ring-1 ring-gray-900/10 transition-colors duration-300 group-hover:bg-blue-700 dark:bg-blue-500 dark:ring-white/10">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-sm/6 font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white">
                    {feature.name}
                  </div>
                  <div className="ml-auto">
                    <span className="inline-flex h-6 w-6 items-center justify-center border border-gray-200 bg-white text-xs font-bold text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <p className="text-sm/6 text-gray-600 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-200">
                    {feature.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

// 勾选图标组件 - 价格方案功能列表标识
function CheckIcon({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      aria-hidden="true"
      className={clsx(
        'h-6 w-6 flex-none fill-current stroke-current',
        className,
      )}
      {...props}
    >
      <path
        d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
        strokeWidth={0}
      />
      <circle
        cx={12}
        cy={12}
        r={8.25}
        fill="none"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// 价格方案卡片组件 - 单个套餐展示卡片
function PricingPlan({
  name,
  price,
  period,
  description,
  href,
  features,
  featured = false,
}: {
  name: string
  price: string
  period: string
  description: string
  href: string
  features: Array<string>
  featured?: boolean
}) {
  return (
    <section
      className={clsx(
        'flex flex-col px-6 sm:px-8',
        featured
          ? 'order-first bg-blue-600 py-8 lg:order-0'
          : 'bg-slate-900 py-8',
      )}
    >
      <h3 className="mt-5 font-display text-lg text-white">{name}</h3>
      <p
        className={clsx(
          'mt-2 text-base',
          featured ? 'text-white' : 'text-slate-400',
        )}
      >
        {description}
      </p>
      <p className="order-first font-display text-5xl font-light tracking-tight text-white">
        {price}
        <span className="text-lg font-normal text-slate-400">{period}</span>
      </p>
      <ul
        role="list"
        className={clsx(
          'order-last mt-10 flex flex-col gap-y-3 text-sm',
          featured ? 'text-white' : 'text-slate-200',
        )}
      >
        {features.map((feature) => (
          <li key={feature} className="flex">
            <CheckIcon className={featured ? 'text-white' : 'text-slate-400'} />
            <span className="ml-4">{feature}</span>
          </li>
        ))}
      </ul>
      <Button
        href={href}
        variant={featured ? 'solid' : 'outline'}
        color={featured ? 'white' : 'slate'}
        className="mt-10"
        aria-describedby={name}
      >
        立即购买
      </Button>
    </section>
  )
}

// 价格区域组件 - 展示所有套餐价格方案


// 产品优势组件 - 展示产品核心竞争优势
function AdvantagesSection() {
  return (
    <section className="py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-center lg:text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            移动POS机产品优势
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base lg:text-lg">
            为您的业务提供全方位的移动收款解决方案
          </p>
        </div>
        <div className="mt-10 sm:mt-14 lg:mt-16">
          <ul
            role="list"
            className="grid grid-cols-1 gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-2 lg:gap-6"
          >
            {productAdvantages.map((advantage, index) => (
              <li
                key={advantage.name}
                className="group relative col-span-1 divide-y divide-gray-200 border-2 border-white bg-gradient-to-b from-white to-gray-50 shadow-[4px_4px_12px_0_rgba(55,99,170,0.08)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_4px_4px_12px_rgba(55,99,170,0.08),inset_-4px_-4px_12px_#fff] sm:shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] sm:hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:divide-white/10 dark:bg-gray-800"
                style={{borderRadius: '4px'}}
              >
                <div className="flex w-full items-center justify-between space-x-4 p-4 sm:space-x-5 sm:p-5 lg:space-x-6 lg:p-6">
                  <div className="flex-1 truncate">
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <h3 className="truncate text-sm font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white sm:text-base">
                        {advantage.name}
                      </h3>
                      <span className="inline-flex h-5 w-5 items-center justify-center border border-gray-200 bg-white text-xs font-bold text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300 sm:h-6 sm:w-6">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <p className="mt-1 truncate text-xs leading-5 text-gray-500 dark:text-gray-400 sm:text-sm sm:leading-6">
                      {advantage.description}
                    </p>
                  </div>
                  <advantage.icon
                    className="h-7 w-7 flex-shrink-0 text-gray-400 transition-colors duration-300 group-hover:text-blue-500 dark:text-gray-300 sm:h-9 sm:w-9 lg:h-10 lg:w-10"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <div className="-mt-px flex divide-x divide-gray-200 dark:divide-white/10">
                    {advantage.features.map((feature, featureIndex) => (
                      <div
                        key={feature}
                        className="flex w-0 flex-1 transition-colors duration-300 group-hover:bg-blue-50 dark:group-hover:bg-blue-900/20"
                      >
                        <div className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-2 border border-transparent py-2.5 text-xs font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400 sm:gap-x-3 sm:py-3 sm:text-sm lg:py-4">
                          <CheckCircleIcon
                            className="h-3.5 w-3.5 text-gray-400 transition-colors duration-300 group-hover:text-blue-500 dark:text-gray-300 sm:h-4 sm:w-4 lg:h-5 lg:w-5"
                            aria-hidden="true"
                          />
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

// 底部特性组件 - 页面底部特性展示
function BottomFeaturesSection() {
  return (
    <section className="bg-gray-50 py-12 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="text-center sm:text-center lg:text-center">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            为什么选择我们的移动POS机
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4 sm:text-base lg:text-lg">
            专业的移动收款解决方案，助力您的业务快速发展
          </p>
        </div>
        <div className="mt-10 sm:mt-14 lg:mt-16">
          <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {bottomFeatures.map((feature, index) => (
              <div
                key={feature.name}
                className="group relative overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_4px_12px_#dce0e8] sm:shadow-[0_6px_20px_#dce0e8] rounded-none p-4 sm:p-5 lg:p-6"
              >
                <div className="flex items-center gap-x-3 border-b border-gray-900/5 bg-transparent p-4 sm:gap-x-4 sm:p-5 lg:p-6">
                  <div className="flex h-8 w-8 flex-none items-center justify-center bg-white border border-gray-200 rounded-md sm:h-10 sm:w-10 lg:h-12 lg:w-12">
                    <feature.icon className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5 lg:h-6 lg:w-6" aria-hidden="true" />
                  </div>
                  <div className="text-xs leading-5 font-medium text-gray-900 sm:text-sm sm:leading-6">
                    {feature.name}
                  </div>
                </div>
                <div className="px-4 py-3 sm:px-5 sm:py-4 lg:px-6 lg:py-4">
                  <h3 className="text-xs font-semibold leading-5 text-gray-900 sm:text-sm sm:leading-6">{feature.name}</h3>
                  <p className="mt-1 text-xs leading-5 text-gray-600 sm:mt-2 sm:text-sm sm:leading-6">{feature.description}</p>
                </div>
                <span
                  className="pointer-events-none absolute top-4 right-4 text-gray-300 transition-colors duration-300 group-hover:text-blue-400 dark:text-gray-600 sm:top-5 sm:right-5 lg:top-6 lg:right-6"
                  aria-hidden="true"
                >
                  <svg className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}



// 主页面组件 - 移动POS机产品页面
export default function MobilePOSPage() {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <HeroSection />
        <FeaturesSection />
        <Cardprice />
        <AdvantagesSection />
        <BottomFeaturesSection />
        <Solution />
        <Advantage />
        <Latestapplication />
        <CatSections />
      </main>
      <Footer />
    </>
  )
}