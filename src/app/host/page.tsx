import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CpuChipIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ChevronRightIcon,
  ShieldCheckIcon,
  CogIcon,
  BoltIcon,
  GlobeAltIcon
} from '@heroicons/react/20/solid'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: '虚拟主机服务 - 优刻云',
  description:
    '优刻云虚拟主机，适合新手小白初次部署站点，预装了常见环境、数据库及管理工具，可以通过控制面板便捷地管理托管网站，仅需5分钟即可部署第一个站点！',
}

/**
 * 虚拟主机页面
 */
const hostingFeatures = [
  {
    name: '安全',
    description: 'WAF智能防入侵系统；IPS防火墙系统；防CC攻击模块；备用防护线路',
    icon: ShieldCheckIcon,
  },
  {
    name: '易用',
    description: '预装常见环境、数据库及管理工具；通过控制面板便捷管理托管网站',
    icon: CogIcon,
  },
  {
    name: '灵活',
    description: '多种套餐可选；可根据业务需求弹性调整；轻松应对业务快速变化',
    icon: BoltIcon,
  },
  {
    name: '高性能',
    description: '内置自研柠檬云防CDN；大陆延迟20-70MS左右；10Mbps网络带宽',
    icon: ChartBarIcon,
  },
  {
    name: '智能',
    description: 'KVM提供虚拟化技术支持；智能管理系统；自动化运维',
    icon: CpuChipIcon,
  },
  {
    name: '可靠',
    description: '部署于专业级T3+机房；采用最新redis数据库管理；确保业务连续性和数据安全',
    icon: ServerIcon,
  },
  {
    name: '稳定',
    description: '99.9%可用性保证；多重备份机制；7*24小时技术支持',
    icon: CloudArrowUpIcon,
  },
  {
    name: '安全防护',
    description: 'SSL证书加密；定期安全扫描；多层次安全防护体系',
    icon: LockClosedIcon,
  },
]

/**
 * 虚拟主机套餐配置
 */
const hostingPlans = [
  {
    name: '入门主机',
    price: '￥1.99',
    period: '/月',
    description: '小白入门选择-适合试用体验',
    features: [
      '网页容量：128MB',
      '数据库量：32MB',
      '域名绑定：2个',
      '子目录数：2个',
      '网络带宽：10Mbps',
      '每月流量：15G',
      '年付10%优惠'
    ],
    href: '#',
    featured: false,
  },
  {
    name: '高阶主机',
    price: '￥3.99',
    period: '/月',
    description: '多数用户选择-适合中型站点',
    features: [
      '网页容量：512MB',
      '数据库量：128MB',
      '域名绑定：4个',
      '子目录数：4个',
      '网络带宽：10Mbps',
      '每月流量：45G',
      '年付10%优惠'
    ],
    href: '#',
    featured: true,
  },
  {
    name: '顶配主机',
    price: '￥13.99',
    period: '/月',
    description: '多站用户选择-适合大型存储类站点',
    features: [
      '网页容量：5120MB',
      '数据库量：1024MB',
      '域名绑定：6个',
      '子目录数：6个',
      '网络带宽：10Mbps',
      '每月流量：100G',
      '年付10%优惠'
    ],
    href: '#',
    featured: false,
  },
]

/**
 * 产品优势配置
 */
const productAdvantages = [
  {
    name: '弹性计算',
    description: '在优刻云您可以在几分钟之内快速根据业务需求，可弹性创建与释放云服务器，轻松应对业务的快速变化。',
    features: ['快速创建与释放', '灵活应对业务变化', '按需付费'],
    icon: BoltIcon,
  },
  {
    name: '多样化配置',
    description: '提供多种类型的实例、操作系统和软件包。各实例中的CPU、内存、硬盘和带宽可以灵活调整。',
    features: ['多种实例类型', '灵活的资源配置', '丰富的操作系统和软件包'],
    icon: CogIcon,
  },
  {
    name: '安全的网络',
    description: '通过云控制台，切实保证您云上资源的安全性。您还可以完全掌控您的私有网络环境配置等。',
    features: ['云控制台安全管理', '私有网络环境配置', '多重安全保障'],
    icon: ShieldCheckIcon,
  },
  {
    name: '管理简单',
    description: '可以使用云控制台、进行重启等重要操作，这样管理实例就像管理操作您的计算机一样简单方便。',
    features: ['云控制台操作', '简单便捷的管理', '类似本地计算机的操作体验'],
    icon: GlobeAltIcon,
  },
]

/**
 * Hero 区域组件 - 采用双栏布局展示虚拟主机特性
 */
function HeroSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <Container>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">优刻云虚拟主机</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                虚拟主机系统
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                虚拟主机，适合新手小白初次部署站点，预装了常见环境、数据库及管理工具，可以通过控制面板便捷地管理托管网站，仅需5分钟即可部署第一个站点！
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {hostingFeatures.slice(0, 3).map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              <div className="mt-10 flex gap-x-6">
                <Button href="#pricing">立即购买</Button>
                <Button variant="outline" href="#features">
                  了解更多
                </Button>
              </div>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-indigo-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-indigo-100 opacity-20 ring-1 ring-white ring-inset"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <div className="w-full max-w-none rounded-tl-xl bg-gray-800 ring-1 ring-white/10 p-8">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-4">优刻云虚拟主机优势</h3>
                    <div className="space-y-3 text-sm">
                      <p>✓ 内置自研柠檬云防CDN，大陆延迟20-70MS左右</p>
                      <p>✓ 支持实现重定向、实现伪静态等功能</p>
                      <p>✓ 部署于专业级的T3+机房</p>
                      <p>✓ 采用最新redis数据库管理</p>
                      <p>✓ WAF智能防入侵系统、IPS防火墙系统</p>
                      <p>✓ 防CC攻击模块</p>
                      <p>✓ 支持实现重定向、实现伪静态等功能</p>
                      <p>✓ 部署于专业级的T3+机房</p>
                      <p>✓ 采用最新redis数据库管理</p>
                      <p>✓ WAF智能防入侵系统、IPS防火墙系统</p>
                      <p>✓ 防CC攻击模块</p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 ring-1 ring-black/10 ring-inset sm:rounded-3xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * 特性展示组件
 */
function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-50 py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-[1800px] lg:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            虚拟主机企业版
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            安全可靠易用灵活的虚拟主机服务，高性能支持，智能管理体验
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-[1800px] sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {hostingFeatures.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-slate-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

/**
 * 价格方案组件
 */
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
        'flex flex-col rounded-3xl px-6 sm:px-8',
        featured ? 'order-first bg-blue-600 py-8 lg:order-0' : 'bg-slate-900 py-8',
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

function PricingSection() {
  return (
    <section id="pricing" className="bg-slate-900 py-20 sm:py-32">
      <Container>
        <div className="md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            <span className="relative whitespace-nowrap">
              <span className="relative">选择适合您的套餐</span>
            </span>{' '}
            助力便捷上云服务
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            产品规格 <span className="bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent font-bold">HOT</span> 官方自营 超高性价比！
          </p>
        </div>
        <div className="-mx-4 mt-16 grid max-w-[1800px] grid-cols-1 gap-y-10 sm:mx-auto sm:mt-20 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
          {hostingPlans.map((plan) => (
            <PricingPlan key={plan.name} {...plan} />
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 产品优势组件
 */
function AdvantagesSection() {
  return (
    <section className="py-20 sm:py-32">
      <Container>
        <div className="mx-auto max-w-screen-2xl lg:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            虚拟主机产品优势 💖
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            为您的业务提供全方位的云端解决方案
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-screen-2xl sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {productAdvantages.map((advantage) => (
              <div key={advantage.name} className="flex flex-col">
                <div className="flex items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                    <advantage.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="ml-4 text-xl font-semibold text-slate-900">
                    {advantage.name}
                  </h3>
                </div>
                <p className="mt-4 text-base text-slate-600">
                  {advantage.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {advantage.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-slate-600">
                      <CheckIcon className="h-4 w-4 text-blue-600" />
                      <span className="ml-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 底部特性展示组件 - 参考 test.ts 布局
 */
function BottomFeaturesSection() {
  const bottomFeatures = [
    {
      name: '一键部署',
      description: '通过控制面板一键部署网站，无需复杂配置，5分钟即可上线您的第一个站点。',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL证书',
      description: '免费提供SSL证书，确保网站数据传输安全，提升用户信任度和SEO排名。',
      icon: LockClosedIcon,
    },
    {
      name: '简单队列',
      description: '内置消息队列系统，轻松处理异步任务，提升网站性能和用户体验。',
      icon: ServerIcon,
    },
    {
      name: '高级安全',
      description: '多层安全防护体系，包括WAF防火墙、DDoS防护和实时监控预警系统。',
      icon: ShieldCheckIcon,
    },
    {
      name: '强大API',
      description: '提供完整的RESTful API接口，支持自定义开发和第三方系统集成。',
      icon: CogIcon,
    },
    {
      name: '数据备份',
      description: '自动定时备份网站数据和数据库，多重备份策略确保数据安全无忧。',
      icon: DocumentTextIcon,
    },
  ]

  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-base/7 font-semibold text-indigo-600">您需要的一切功能</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            无服务器？没问题。
          </p>
          <p className="mt-6 text-lg/8 text-gray-700">
            优刻云虚拟主机为您提供完整的网站托管解决方案，从基础设施到高级功能，一应俱全。
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-16">
          {bottomFeatures.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold text-gray-900">
                <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-indigo-600" />
                {feature.name}
              </dt>{' '}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </div>
  )
}

/**
 * 虚拟主机页面主组件
 */
export default function HostPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PricingSection />
        <AdvantagesSection />
        <BottomFeaturesSection />
      </main>
      <Footer />
    </>
  )
}
