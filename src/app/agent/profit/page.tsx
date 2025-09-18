'use client'

import Link from 'next/link'
import { useState } from 'react'
import {
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  ChevronDownIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  CalculatorIcon,
  ShieldCheckIcon,
  BanknotesIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

// ==================== 页面数据定义 ====================

/**
 * 分润结算核心功能数据
 */
const settlementFeatures = [
  {
    title: '实时分润',
    description: 'T+1自动结算',
    subDescription: '交易完成后次日自动结算分润，无需手动申请',
    icon: BanknotesIcon,
  },
  {
    title: '多级分润',
    description: '支持多级代理分润',
    subDescription: '灵活设置分润比例，支持多级代理分润模式',
    icon: ChartBarIcon,
  },
  {
    title: '透明计算',
    description: '分润明细一目了然',
    subDescription: '详细记录每笔交易分润，计算过程完全透明',
    icon: CalculatorIcon,
  },
  {
    title: '安全可靠',
    description: '资金安全保障',
    subDescription: '银行级加密技术，确保分润资金安全到账',
    icon: ShieldCheckIcon,
  },
]

/**
 * 分润结算优势数据
 */
const settlementAdvantages = [
  {
    title: '高效结算',
    description: '快速到账',
    subDescription: 'T+1自动结算，资金快速到账，提升资金周转效率',
    icon: ClockIcon,
  },
  {
    title: '灵活配置',
    description: '自定义分润比例',
    subDescription: '根据业务需求灵活配置分润比例，满足不同场景',
    icon: CogIcon,
  },
  {
    title: '数据分析',
    description: '交易数据可视化',
    subDescription: '提供多维度数据分析报表，助力业务决策优化',
    icon: ArrowTrendingUpIcon,
  },
  {
    title: '智能提醒',
    description: '结算状态实时通知',
    subDescription: '结算状态实时推送，异常情况及时提醒处理',
    icon: DevicePhoneMobileIcon,
  },
]

/**
 * 分润计算示例数据
 */
const settlementExamples = [
  {
    title: '标准分润模式',
    description: '基础分润计算',
    subDescription: '按交易金额的固定比例计算分润，简单直接',
    icon: CalculatorIcon,
    example: '交易金额10,000元，分润比例万15，分润金额=10,000×0.0015=15元',
  },
  {
    title: '阶梯分润模式',
    description: '交易量阶梯分润',
    subDescription: '根据月交易量设置不同分润比例，交易量越大分润比例越高',
    icon: ChartBarIcon,
    example: '月交易量<100万，分润万12；100万-500万，分润万14；>500万，分润万16',
  },
  {
    title: '多级分润模式',
    description: '团队分润计算',
    subDescription: '支持多级代理分润，上级可从下级交易中获得分润',
    icon: UserGroupIcon,
    example: '一级代理分润万15，二级代理分润万3，三级代理分润万2',
  },
  {
    title: '产品分润模式',
    description: '差异化产品分润',
    subDescription: '不同产品类型可设置不同分润比例，精细化运营',
    icon: CreditCardIcon,
    example: 'POS机分润万15，扫码支付分润万10，其他产品分润万8',
  },
]

/**
 * 分润结算流程数据
 */
const settlementProcess = [
  {
    step: 1,
    title: '交易完成',
    description: '用户完成支付交易',
    details: '用户通过POS机或其他支付方式完成交易，系统记录交易数据',
  },
  {
    step: 2,
    title: '分润计算',
    description: '系统自动计算分润',
    details: '根据预设的分润规则，系统自动计算每笔交易的应得分润金额',
  },
  {
    step: 3,
    title: '分润结算',
    description: 'T+1自动结算',
    details: '交易完成后次日，系统自动将分润金额结算到指定账户',
  },
  {
    step: 4,
    title: '分润到账',
    description: '资金安全到账',
    details: '分润资金安全到账，系统发送到账通知，用户可查看分润明细',
  },
]

/**
 * 常见问题数据
 */
const faqs = [
  {
    question: '分润结算的周期是多久？',
    answer:
      'POSNFC采用T+1结算模式，即交易完成后的第二个工作日自动结算分润。例如，周一的交易将在周二结算，节假日的交易将在假期后的第一个工作日结算。',
  },
  {
    question: '如何设置分润比例？',
    answer:
      '分润比例可以在代理商后台进行设置，支持按产品类型、交易量阶梯、代理等级等多种维度设置。系统管理员可以根据业务需求灵活调整分润比例，设置后实时生效。',
  },
  {
    question: '分润资金如何提现？',
    answer:
      '分润资金结算到账户后，可以通过代理商后台申请提现。支持提现到银行卡、支付宝等多种方式，提现申请一般在1-3个工作日内处理完成，大额提现可能需要更长时间审核。',
  },
  {
    question: '如何查看分润明细？',
    answer:
      '代理商后台提供详细的分润明细查询功能，可以按日期、交易类型、分润类型等多维度筛选查看。每笔分润都有详细的计算过程说明，确保分润计算的透明度。',
  },
  {
    question: '分润结算有最低限额吗？',
    answer:
      '分润结算没有最低限额限制，无论金额大小都会按规则结算。但提现操作可能设有最低限额要求，具体限额可以在代理商后台的提现规则中查看。',
  },
  {
    question: '分润结算失败怎么办？',
    answer:
      '如果分润结算失败，系统会自动重试，并发送失败通知。您可以查看失败原因，如账户信息错误、银行系统维护等，并根据提示进行相应处理。如有疑问，可联系客服人员协助解决。',
  },
]

// ==================== 页面组件定义 ====================

/**
 * 页面头部横幅组件 - 分润结算Hero区域
 */
function HeroBanner() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <Container className="py-20 sm:py-20 md:py-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              支付分润结算
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              POSNFC支付分润结算系统，提供T+1自动结算、多级分润、透明计算等核心功能。
              支持多种分润模式，满足不同业务场景需求，助力代理商实现收益最大化。
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row sm:justify-start">
              <Button
                variant="solid"
                color="blue"
                className="group relative bg-blue-600 px-4 py-2 font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              >
                <Link href="/contact" className="flex items-center">
                  <span className="mr-2 text-sm">立即申请代理</span>
                  <ArrowRightIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="group relative border-2 border-blue-600 bg-white px-4 py-2 font-medium text-blue-600 transition-all duration-200 hover:bg-blue-50 hover:shadow-md focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              >
                <Link href="#settlement-features" className="flex items-center">
                  <span className="mr-2 text-sm">了解分润功能</span>
                  <ArrowRightIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600">
                <BanknotesIcon className="mr-2 h-5 w-5 text-blue-600" />
                <span className="text-sm">T+1自动结算</span>
              </div>
              <div className="flex items-center text-gray-600">
                <ChartBarIcon className="mr-2 h-5 w-5 text-blue-600" />
                <span className="text-sm">多级分润模式</span>
              </div>
              <div className="flex items-center text-gray-600">
                <CalculatorIcon className="mr-2 h-5 w-5 text-blue-600" />
                <span className="text-sm">透明分润计算</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="min-h-[500px] border border-gray-200 bg-gray-50 p-6 shadow-xl">
              <div className="mb-6 border border-gray-200 bg-white p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <div className="flex space-x-1">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 flex-1 rounded bg-gray-100 px-3 py-1 text-xs text-gray-700">
                    分润结算管理中心
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="border border-blue-200 bg-blue-50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-sm font-medium text-blue-800">今日交易金额</div>
                      <div className="text-sm font-bold text-blue-800">¥128,450.00</div>
                    </div>
                    <div className="h-2 w-full rounded bg-blue-200">
                      <div className="h-2 w-3/4 rounded bg-blue-500"></div>
                    </div>
                  </div>

                  <div className="border border-green-200 bg-green-50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-sm font-medium text-green-800">预计分润金额</div>
                      <div className="text-sm font-bold text-green-800">¥1,926.75</div>
                    </div>
                    <div className="h-2 w-full rounded bg-green-200">
                      <div className="h-2 w-2/3 rounded bg-green-500"></div>
                    </div>
                  </div>

                  <div className="border border-purple-200 bg-purple-50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-sm font-medium text-purple-800">本月累计分润</div>
                      <div className="text-sm font-bold text-purple-800">¥45,680.50</div>
                    </div>
                    <div className="h-2 w-full rounded bg-purple-200">
                      <div className="h-2 w-4/5 rounded bg-purple-500"></div>
                    </div>
                  </div>

                  <div className="border border-yellow-200 bg-yellow-50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="text-sm font-medium text-yellow-800">待结算分润</div>
                      <div className="text-sm font-bold text-yellow-800">¥3,245.30</div>
                    </div>
                    <div className="text-xs text-yellow-700">预计明日到账</div>
                  </div>
                </div>
              </div>

              <div className="mt-auto flex items-center justify-between text-xs text-gray-600">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  <span>分润结算实时更新</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BanknotesIcon className="h-4 w-4 text-blue-600" />
                  <span>T+1自动结算</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  )
}

/**
 * 分润结算核心功能区域组件
 */
function SettlementFeaturesSection() {
  return (
    <div id="settlement-features" className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            分润结算核心功能
          </h2>
          <div className="mx-auto mt-4 max-w-4xl text-lg text-gray-600">
            POSNFC分润结算系统提供实时分润、多级分润、透明计算、安全可靠等核心功能，
            满足不同场景下的分润结算需求，助力代理商业务高效发展。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {settlementFeatures.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center bg-blue-600 text-white transition-colors group-hover:bg-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
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
 * 分润结算优势区域组件
 */
function SettlementAdvantagesSection() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              分润结算优势
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              POSNFC分润结算系统采用先进的技术架构，为代理商提供高效、灵活、安全、智能的分润结算服务。
              无论您是个人创业者还是企业团队，都可以通过我们的分润结算系统实现收益最大化。
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="mr-4 flex h-8 w-8 items-center justify-center bg-blue-100">
                  <ClockIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">
                  T+1自动结算，资金快速到账
                </span>
              </div>
              <div className="flex items-center">
                <div className="mr-4 flex h-8 w-8 items-center justify-center bg-blue-100">
                  <CogIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">
                  灵活配置分润比例，满足不同场景
                </span>
              </div>
              <div className="flex items-center">
                <div className="mr-4 flex h-8 w-8 items-center justify-center bg-blue-100">
                  <ArrowTrendingUpIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">多维度数据分析，助力业务决策</span>
              </div>
              <div className="flex items-center">
                <div className="mr-4 flex h-8 w-8 items-center justify-center bg-blue-100">
                  <DevicePhoneMobileIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">智能提醒通知，及时掌握动态</span>
              </div>
            </div>

            <div className="mt-8">
              <Button variant="solid" color="blue">
                <Link href="/contact" className="flex items-center">
                  立即申请代理
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {settlementAdvantages.map((advantage) => {
              const Icon = advantage.icon
              return (
                <div
                  key={advantage.title}
                  className="group bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center bg-blue-600 text-white transition-colors group-hover:bg-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h4 className="mb-2 text-lg font-semibold text-gray-900">
                    {advantage.title}
                  </h4>
                  <p className="mb-2 font-medium text-gray-900">
                    {advantage.description}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {advantage.subDescription}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * 分润计算示例区域组件
 */
function SettlementExamplesSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            分润计算示例
          </h2>
          <div className="mx-auto mt-4 max-w-4xl text-lg text-gray-600">
            POSNFC分润结算系统支持多种分润模式，包括标准分润、阶梯分润、多级分润和产品分润等，
            满足不同业务场景下的分润需求，助力代理商实现收益最大化。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {settlementExamples.map((example) => {
            const Icon = example.icon
            return (
              <div
                key={example.title}
                className="group overflow-hidden rounded-lg border border-gray-200 bg-gray-50 p-6 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center bg-blue-600 text-white transition-colors group-hover:bg-blue-700">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  {example.title}
                </h4>
                <p className="mb-3 font-medium text-gray-900">
                  {example.description}
                </p>
                <p className="mb-4 text-sm leading-relaxed text-gray-600">
                  {example.subDescription}
                </p>
                <div className="rounded bg-white p-3 text-xs text-gray-700 shadow-sm">
                  {example.example}
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
 * 分润结算流程区域组件
 */
function SettlementProcessSection() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            分润结算流程
          </h2>
          <div className="mx-auto mt-4 max-w-4xl text-lg text-gray-600">
            POSNFC分润结算系统采用简洁高效的结算流程，从交易完成到分润到账，
            全程自动化处理，确保分润结算的准确性和及时性。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {settlementProcess.map((process, index) => (
            <div
              key={process.step}
              className="group relative bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="absolute -top-4 left-6 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                {process.step}
              </div>
              <div className="mt-4">
                <h4 className="mb-2 text-lg font-semibold text-gray-900">
                  {process.title}
                </h4>
                <p className="mb-3 font-medium text-gray-900">
                  {process.description}
                </p>
                <p className="text-sm leading-relaxed text-gray-600">
                  {process.details}
                </p>
              </div>
              {index < settlementProcess.length - 1 && (
                <div className="absolute right-0 top-1/2 hidden h-0.5 w-1/2 bg-gray-300 lg:block"></div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/**
 * FAQ常见问题区域组件
 */
function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index],
    )
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            常见问题
          </h2>
          <div className="mx-auto mt-4 max-w-4xl text-lg text-gray-600">
            解答您在分润结算过程中可能遇到的常见问题，帮助您更好地理解我们的分润结算系统。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden border border-gray-200 bg-white"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left transition-colors hover:bg-gray-50"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="leading-relaxed text-gray-600">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/**
 * 分润结算页面主组件
 * 展示POSNFC的分润结算系统，包括核心功能、优势、计算示例、流程和FAQ等
 * @returns JSX.Element
 */
export default function SettlementPage() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <SettlementFeaturesSection />
        <SettlementAdvantagesSection />
        <SettlementExamplesSection />
        <SettlementProcessSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
