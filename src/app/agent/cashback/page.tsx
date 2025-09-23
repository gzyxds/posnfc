'use client'

import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  TicketIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  CurrencyDollarIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
  UsersIcon,
  CogIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  StarIcon,
  ChartBarIcon,
  CalculatorIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon,
  LightBulbIcon,
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

// Note: Metadata is handled by layout.tsx for client components

/**
 * 激活返现核心功能数据
 */
const cashbackFeatures = [
  {
    title: '高额返现',
    description: '激活返现299元/台',
    subDescription: '每激活一台POS机即可获得299元返现，收益立竿见影',
    icon: CurrencyDollarIcon,
  },
  {
    title: '总部直签',
    description: '0加盟费代理政策',
    subDescription: '直接与总部签约，无需中间商，享受最优代理政策',
    icon: BuildingOfficeIcon,
  },
  {
    title: 'T+1结算',
    description: '分润自动到账',
    subDescription: '交易完成后次日自动结算分润，资金周转更快',
    icon: BanknotesIcon,
  },
  {
    title: '多级分润',
    description: '分润万12-万16',
    subDescription: '根据交易量和代理等级，享受不同比例的分润收益',
    icon: ChartBarIcon,
  },
]

/**
 * 激活返现优势数据
 */
const cashbackAdvantages = [
  {
    title: '高收益',
    description: '返现+分润双收益',
    subDescription: '激活返现299元/台，同时享受交易分润万12-万16，收益最大化',
    icon: ArrowTrendingUpIcon,
  },
  {
    title: '低门槛',
    description: '0加盟费0押金',
    subDescription: '无需加盟费和押金，1台起拿，人人可做代理',
    icon: ShieldCheckIcon,
  },
  {
    title: '强支持',
    description: '全方位物料支持',
    subDescription: '提供免费培训、营销物料、技术支持，助力业务快速发展',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: '区域保护',
    description: '独家区域代理权',
    subDescription: '享受区域保护政策，避免同区域恶性竞争，保障代理商利益',
    icon: UsersIcon,
  },
]

/**
 * 激活返现产品数据
 */
const cashbackProducts = [
  {
    title: '电签POS机',
    description: '标准版返现299元',
    subDescription: '4G全网通，支持扫码刷卡NFC，激活返现299元，分润万12',
    icon: CreditCardIcon,
    specs: '费率0.38%永不+3，秒到账，无流量费',
  },
  {
    title: '智能POS机',
    description: '高级版返现349元',
    subDescription: '安卓双屏，会员营销一体化，激活返现349元，分润万13',
    icon: DevicePhoneMobileIcon,
    specs: '15.6"主屏+11.6"客显，3GB+32GB存储',
  },
  {
    title: '移动POS机',
    description: '便携版返现399元',
    subDescription: '超长续航，支持数字人民币，激活返现399元，分润万14',
    icon: DevicePhoneMobileIcon,
    specs: '内置5000mAh电池，4G全网通，小巧便携',
  },
  {
    title: '聚合码牌',
    description: '码牌返现150元',
    subDescription: '一张码全渠道收款，语音播报防逃单，激活返现150元',
    icon: TicketIcon,
    specs: '支持微信支付宝信用卡，语音播报，后台管理',
  },
]

/**
 * 激活返现流程数据
 */
const cashbackProcess = [
  {
    step: 1,
    title: '申请代理',
    description: '提交申请资料',
    details: '填写基本信息，提交代理申请，总部审核通过后签订代理协议',
  },
  {
    step: 2,
    title: '领取设备',
    description: '免费领取POS机',
    details: '根据需求选择POS机型号，免费领取设备，顺丰包邮到家',
  },
  {
    step: 3,
    title: '激活设备',
    description: '激活POS机',
    details: '收到设备后按要求激活，激活成功后立即获得返现奖励',
  },
  {
    step: 4,
    title: '持续收益',
    description: '享受分润收益',
    details: '设备激活后持续享受交易分润收益，T+1自动结算到账',
  },
]

/**
 * 激活返现常见问题数据
 */
const cashbackFAQ = [
  {
    question: '激活返现是真的吗？多久到账？',
    answer:
      '激活返现是真实可靠的，POS机激活成功后，返现金额将在24小时内自动打入您的结算账户。我们承诺每台激活的POS机返现299元，高级型号返现更高，返现金额可直接提现或用于后续采购。',
  },
  {
    question: '没有经验可以做代理吗？',
    answer:
      '完全可以！我们提供全方位的培训支持，包括产品知识、销售技巧、市场推广等方面的培训。同时提供营销物料、话术模板、推广方案等支持，即使没有经验也能快速上手开展业务。',
  },
  {
    question: '分润是怎么计算的？什么时候结算？',
    answer:
      '分润按照交易金额的一定比例计算，标准分润比例为万12-万16，具体比例根据代理等级和交易量确定。分润采用T+1结算模式，即交易完成后的第二个工作日自动结算到您的账户，节假日顺延。',
  },
  {
    question: '需要交加盟费和押金吗？',
    answer:
      '不需要！我们实行0加盟费、0押金政策，您只需要1台起拿即可成为我们的代理商。设备免费提供，激活后获得返现，无需任何前期投入，大大降低了创业门槛。',
  },
  {
    question: '可以发展下级代理吗？',
    answer:
      '可以！我们支持多级代理模式，您可以发展下级代理，并从下级代理的交易中获得级差分润。系统支持无限级代理发展，每级代理的分润比例和返现政策清晰透明，确保各级代理商的权益。',
  },
  {
    question: '设备坏了怎么办？有售后保障吗？',
    answer:
      '我们提供完善的售后保障服务。设备非人为损坏12个月内免费换新，人为损坏（如摔坏、进水）只需补59元即可换新。同时提供7×24小时客服支持，遇到任何问题都能及时得到解决。',
  },
]

/**
 * 页面头部横幅组件 - 激活返现Hero区域
 */
function HeroBanner() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      {/* 背景装饰 */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-100 to-orange-100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <Container className="py-20 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 xl:gap-20">
          {/* 左侧文字内容 */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              支付激活返现
              <span className="block text-yellow-500">299元/台</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              POSNFC支付激活返现政策，总部直签代理，0加盟费0押金，1台起拿，
              激活即返现299元，分润万12-万16，T+1自动结算，助力代理商实现收益最大化。
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:justify-start">
              <Button
                variant="solid"
                color="blue"
                className="group relative bg-yellow-500 px-4 py-2 font-medium text-white transition-all duration-200 hover:bg-yellow-600 hover:shadow-lg focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none"
              >
                <Link href="/contact" className="flex items-center">
                  <span className="mr-2 text-sm">立即申请代理</span>
                  <ArrowRightIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="group relative border-2 border-yellow-500 bg-white px-4 py-2 font-medium text-yellow-600 transition-all duration-200 hover:bg-yellow-50 hover:shadow-md focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:outline-none"
              >
                <Link href="#cashback-features" className="flex items-center">
                  <span className="mr-2 text-sm">了解返现详情</span>
                  <ArrowRightIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* 功能标签 */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600">
                <CurrencyDollarIcon className="mr-2 h-5 w-5 text-yellow-600" />
                <span className="text-sm">激活返现299元</span>
              </div>
              <div className="flex items-center text-gray-600">
                <BuildingOfficeIcon className="mr-2 h-5 w-5 text-yellow-600" />
                <span className="text-sm">总部直签代理</span>
              </div>
              <div className="flex items-center text-gray-600">
                <BanknotesIcon className="mr-2 h-5 w-5 text-yellow-600" />
                <span className="text-sm">T+1自动结算</span>
              </div>
            </div>
          </div>

          {/* 右侧激活返现预览 */}
          <div className="relative">
            <div className="min-h-[500px] border-2 border-white bg-gray-50 p-6 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)]">
              {/* 模拟激活返现界面 */}
              <div className="mb-6 border-2 border-white bg-white p-6 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)]">
                <div className="mb-4 flex items-center">
                  <div className="flex space-x-1">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 flex-1 rounded bg-gray-100 px-3 py-1 text-xs text-gray-700">
                    激活返现收益计算器
                  </div>
                </div>

                {/* 模拟激活返现内容 */}
                <div className="space-y-4">
                  <div className="border border-yellow-200 bg-yellow-50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-sm font-medium text-yellow-800">激活设备数量</div>
                      <div className="text-sm font-bold text-yellow-800">10台</div>
                    </div>
                    <div className="h-2 w-full rounded bg-yellow-200">
                      <div className="h-2 w-3/4 rounded bg-yellow-500"></div>
                    </div>
                  </div>

                  <div className="border border-green-200 bg-green-50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-sm font-medium text-green-800">单台返现金额</div>
                      <div className="text-sm font-bold text-green-800">299元</div>
                    </div>
                    <div className="h-2 w-full rounded bg-green-200">
                      <div className="h-2 w-full rounded bg-green-500"></div>
                    </div>
                  </div>

                  <div className="border border-blue-200 bg-blue-50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-sm font-medium text-blue-800">激活返现总额</div>
                      <div className="text-sm font-bold text-blue-800">2,990元</div>
                    </div>
                    <div className="h-2 w-full rounded bg-blue-200">
                      <div className="h-2 w-4/5 rounded bg-blue-500"></div>
                    </div>
                  </div>

                  <div className="border border-purple-200 bg-purple-50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-sm font-medium text-purple-800">月分润收益</div>
                      <div className="text-sm font-bold text-purple-800">1,200元</div>
                    </div>
                    <div className="text-xs text-purple-700">月均交易量100万元</div>
                  </div>
                </div>
              </div>

              {/* 底部状态指示 */}
              <div className="mt-auto flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>返现24小时内到账</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CurrencyDollarIcon className="h-4 w-4 text-yellow-600" />
                  <span>收益立竿见影</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* 底部装饰 */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-yellow-100 to-orange-100 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  )
}

/**
 * 激活返现核心功能区域组件
 */
function CashbackFeaturesSection() {
  return (
    <div id="cashback-features" className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            激活返现核心优势
          </h2>
          <div className="mx-auto mt-4 max-w-5xl text-lg text-gray-600">
            POSNFC激活返现政策提供高额返现、总部直签、T+1结算、多级分润等核心优势，
            满足不同代理商需求，助力实现收益最大化。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-10">
          {cashbackFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group overflow-hidden rounded-lg border-2 border-white bg-white p-6 transition-all duration-300 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)]"
              >
                {/* 图标 */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center bg-yellow-500 text-white transition-colors group-hover:bg-yellow-600">
                  <Icon className="h-6 w-6" />
                </div>

                {/* 内容 */}
                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  {feature.title}
                </h4>
                <p className="mb-3 font-medium text-gray-900">
                  {feature.description}
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  {feature.subDescription}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/**
 * 激活返现优势区域组件
 */
function CashbackAdvantagesSection() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            为什么选择我们的激活返现政策
          </h2>
          <div className="mx-auto mt-4 max-w-5xl text-lg text-gray-600">
            我们提供行业内最具竞争力的激活返现政策，帮助代理商快速回本，实现长期稳定收益。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-10">
          {cashbackAdvantages.map((advantage, index) => {
            const Icon = advantage.icon
            return (
              <div
                key={advantage.title}
                className="group overflow-hidden rounded-lg border-2 border-white bg-white p-6 transition-all duration-300 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)]"
              >
                {/* 图标 */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center bg-yellow-500 text-white transition-colors group-hover:bg-yellow-600">
                  <Icon className="h-6 w-6" />
                </div>

                {/* 内容 */}
                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  {advantage.title}
                </h4>
                <p className="mb-3 font-medium text-gray-900">
                  {advantage.description}
                </p>
                <p className="text-sm text-gray-600">
                  {advantage.subDescription}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/**
 * 激活返现产品区域组件
 */
function CashbackProductsSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            激活返现产品矩阵
          </h2>
          <div className="mx-auto mt-4 max-w-5xl text-lg text-gray-600">
            我们提供多种POS机产品，满足不同商户需求，激活即可获得高额返现，持续享受分润收益。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 xl:gap-10">
          {cashbackProducts.map((product, index) => {
            const Icon = product.icon
            return (
              <div
                key={product.title}
                className="group overflow-hidden rounded-lg border-2 border-white bg-white p-6 transition-all duration-300 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)]"
              >
                {/* 图标 */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center bg-yellow-500 text-white transition-colors group-hover:bg-yellow-600">
                  <Icon className="h-6 w-6" />
                </div>

                {/* 内容 */}
                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  {product.title}
                </h4>
                <p className="mb-3 font-medium text-gray-900">
                  {product.description}
                </p>
                <p className="mb-3 text-sm text-gray-600">
                  {product.subDescription}
                </p>
                <div className="mt-4 rounded bg-gray-50 p-3">
                  <p className="text-xs text-gray-500">
                    {product.specs}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/**
 * 激活返现流程区域组件
 */
function CashbackProcessSection() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            激活返现流程
          </h2>
          <div className="mx-auto mt-4 max-w-5xl text-lg text-gray-600">
            简单四步，轻松获得激活返现收益，全程透明高效，让您安心代理。
          </div>
        </div>

        <div className="mx-auto">
          <div className="relative">
            {/* 时间线 */}
            <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-300 sm:left-1/2 sm:-ml-0.5"></div>

            <div className="relative space-y-10">
              {cashbackProcess.map((step, index) => {
                const isEven = index % 2 === 0

                return (
                  <div
                    key={step.title}
                    className={`relative flex ${isEven ? 'sm:flex-row' : 'sm:flex-row-reverse'} items-start sm:space-x-10`}
                  >
                    {/* 时间线节点 */}
                    <div className="absolute left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-yellow-500 text-white shadow-md sm:left-1/2 sm:-ml-4">
                      <span className="text-sm font-bold">{step.step}</span>
                    </div>

                    {/* 内容卡片 */}
                    <div className={`ml-12 flex-1 rounded-lg bg-white p-6 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] sm:ml-0 sm:w-5/12 ${isEven ? 'sm:mr-auto' : 'sm:ml-auto'}`}>
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        {step.title}
                      </h3>
                      <p className="mb-2 font-medium text-gray-900">
                        {step.description}
                      </p>
                      <p className="text-sm text-gray-600">
                        {step.details}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * 激活返现FAQ常见问题区域组件
 */
function CashbackFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((i) => i !== index))
    } else {
      setOpenItems([...openItems, index])
    }
  }

  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            激活返现常见问题
          </h2>
          <div className="mx-auto mt-4 max-w-5xl text-lg text-gray-600">
            解答您在激活返现过程中可能遇到的常见问题，帮助您更好地理解我们的激活返现政策。
          </div>
        </div>

        <div className="mx-auto">
          <div className="space-y-6">
            {cashbackFAQ.map((faq, index) => {
              const isOpen = openItems.includes(index)
              return (
                <div
                  key={faq.question}
                  className="overflow-hidden rounded-lg border-2 border-white bg-white transition-all duration-300 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)]"
                >
                  <button
                    className="flex w-full items-center justify-between p-8 text-left font-medium text-gray-900 transition-colors hover:bg-gray-50"
                    onClick={() => toggleItem(index)}
                  >
                    <span className="flex items-center">
                      <span className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100 text-yellow-800">
                        {index + 1}
                      </span>
                      {faq.question}
                    </span>
                    {isOpen ? (
                      <ChevronUpIcon className="h-6 w-6 text-yellow-600" />
                    ) : (
                      <ChevronDownIcon className="h-6 w-6 text-gray-500" />
                    )}
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="border-t border-gray-200 p-8 pt-6 text-gray-600">
                      <div className="flex">
                        <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center">
                          <QuestionMarkCircleIcon className="h-6 w-6 text-yellow-600" />
                        </div>
                        <div className="text-lg">{faq.answer}</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* 额外帮助信息 */}
          <div className="mt-16 rounded-lg bg-yellow-50 p-8 text-center">
            <h3 className="text-xl font-medium text-yellow-800">还有其他问题？</h3>
            <p className="mt-3 text-lg text-yellow-700">
              我们的客服团队随时为您提供帮助，解答您关于激活返现政策的任何疑问。
            </p>
            <div className="mt-6 flex justify-center">
              <Button
                variant="solid"
                className="bg-yellow-500 px-6 py-3 text-lg text-white hover:bg-yellow-600"
              >
                <Link href="/contact" className="flex items-center">
                  <PhoneIcon className="mr-2 h-5 w-5" />
                  联系客服
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * 激活返现页面主组件
 * 展示POSNFC的激活返现系统，包括核心功能、优势、产品、流程和FAQ等
 * @returns JSX.Element
 */
export default function CashbackPage() {
  return (
    <>
      <Header />
      <main>
        {/* 页面头部横幅 */}
        <HeroBanner />

        {/* 激活返现核心功能区域 */}
        <CashbackFeaturesSection />

        {/* 激活返现优势区域 */}
        <CashbackAdvantagesSection />

        {/* 激活返现产品区域 */}
        <CashbackProductsSection />

        {/* 激活返现流程区域 */}
        <CashbackProcessSection />

        {/* 激活返现FAQ常见问题区域 */}
        <CashbackFAQSection />
      </main>
      <Footer />
    </>
  )
}
