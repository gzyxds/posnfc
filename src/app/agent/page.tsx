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
  ChevronUpIcon
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

// Note: Metadata is handled by layout.tsx for client components

/**
 * 代理优势数据
 */
const agentAdvantages = [
  {
    title: '丰厚返佣',
    description: '5-7折优惠价格',
    subDescription: '根据采购量和渠道能力给予不同折扣',
    icon: CurrencyDollarIcon,
  },
  {
    title: '全产品线',
    description: '云服务器全系列',
    subDescription: '云服务器、物理裸机、服务器托管、机柜租用',
    icon: CogIcon,
  },
  {
    title: '专业支持',
    description: '7x24小时技术支持',
    subDescription: '专业技术团队提供全方位技术支持',
    icon: WrenchScrewdriverIcon,
  },
  {
    title: '营销支持',
    description: '全方位营销支持',
    subDescription: '提供营销物料、培训支持、市场推广支持',
    icon: MegaphoneIcon,
  },
]

/**
 * 代理支持服务数据
 */
const agentSupports = [
  {
    title: '培训支持',
    description: '产品培训',
    subDescription: '提供全面的产品知识培训和销售技巧培训',
    icon: AcademicCapIcon,
  },
  {
    title: '市场支持',
    description: '营销物料',
    subDescription: '提供专业的营销物料和市场推广支持',
    icon: MegaphoneIcon,
  },
  {
    title: '销售支持',
    description: '销售指导',
    subDescription: '专业销售团队提供销售指导和客户支持',
    icon: CurrencyDollarIcon,
  },
  {
    title: '技术支持',
    description: '技术保障',
    subDescription: '7x24小时技术支持，确保服务质量',
    icon: WrenchScrewdriverIcon,
  },
]

/**
 * 加入条件数据
 */
const joinConditions = [
  {
    title: '公司规模',
    description: '具备正规企业资质',
    subDescription: '拥有合法的企业营业执照和相关资质',
    icon: BuildingOfficeIcon,
  },
  {
    title: '人员规模',
    description: '专职服务团队',
    subDescription: '至少拥有1名销售人员、1名售前支撑人员',
    icon: UsersIcon,
  },
  {
    title: '服务能力',
    description: '认可产品理念',
    subDescription: '认可主题云产品并愿意长期合作',
    icon: CogIcon,
  },
]

/**
 * 推广流程步骤
 */
const promotionSteps = [
  {
    step: 1,
    title: '注册账号',
    description: '注册主题云账号并完成个人实名认证',
    action: '立即加入',
  },
  {
    step: 2,
    title: '提交申请',
    description: '如实填写代理申请资料，并提交审核',
    action: '立即申请',
  },
  {
    step: 3,
    title: '资质审核',
    description: '通过资质审核，并签署代理合作协议',
    action: '查看进度',
  },
  {
    step: 4,
    title: '开始营业',
    description: '接入业务平台，并开始营业',
    action: '业务平台',
  },
]

/**
 * 常见问题数据
 */
const faqs = [
  {
    question: '如何进行代理合作？',
    answer: '①注册主题云账号，并完成实名认证；\n②在代理合作页面点击"立即申请"提交申请资料；\n③通过资质审核后，与主题云签署合作协议；\n④获得云产品并开始营业。',
  },
  {
    question: '代理资质有什么要求？',
    answer: '①具备正规企业资质；\n②具备专职服务团队，至少拥有1名销售人员、1名售前支撑人员；\n③认可主题云产品并愿意合作。',
  },
  {
    question: '哪些产品可代理？',
    answer: '云服务器、物理裸机、服务器托管、机柜租用全系列产品均可代理。',
  },
  {
    question: '代理合作可优惠多少？',
    answer: '5-7折优惠。我们将根据代理伙伴的采购量和渠道能力给予不同折扣。',
  },
]

/**
 * 页面头部横幅组件 - 代理合作Hero区域
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
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* 左侧文字内容 */}
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              代理合作
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              加入主题云代理合作伙伴计划，享受5-7折优惠价格，获得全方位销售支持和技术支持，共同开拓云计算市场，实现互利共赢。
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
              <Button
                variant="solid"
                color="blue"
                className="group relative bg-blue-600 text-white px-4 py-2 font-medium transition-all duration-200 hover:bg-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Link href="/contact" className="flex items-center">
                  <span className="mr-2 text-sm">立即申请代理</span>
                  <ArrowRightIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                variant="outline"
                className="group relative bg-white text-blue-600 border-2 border-blue-600 px-4 py-2 font-medium transition-all duration-200 hover:bg-blue-50 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                <Link href="#faq" className="flex items-center">
                  <span className="mr-2 text-sm">了解详情</span>
                  <ArrowRightIcon className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* 功能标签 */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex items-center text-gray-600">
                <CurrencyDollarIcon className="h-5 w-5 mr-2 text-blue-600" />
                <span className="text-sm">5-7折优惠</span>
              </div>
              <div className="flex items-center text-gray-600">
                <WrenchScrewdriverIcon className="h-5 w-5 mr-2 text-blue-600" />
                <span className="text-sm">7x24技术支持</span>
              </div>
              <div className="flex items-center text-gray-600">
                <MegaphoneIcon className="h-5 w-5 mr-2 text-blue-600" />
                <span className="text-sm">营销支持</span>
              </div>
            </div>
          </div>

          {/* 右侧模拟界面设计 */}
          <div className="relative">
            <div className="bg-gray-50 border border-gray-200 shadow-xl p-6 min-h-[500px]">
              {/* 模拟浏览器窗口 */}
              <div className="bg-white border border-gray-200 shadow-sm p-6 mb-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="ml-4 bg-gray-100 rounded px-3 py-1 text-xs text-gray-700 flex-1">
                    代理合作管理中心
                  </div>
                </div>

                {/* 模拟代理管理界面内容 */}
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 border border-blue-200">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-4 h-4 bg-blue-500 rounded"></div>
                      <div className="h-2 bg-blue-300 rounded flex-1"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 bg-blue-200 rounded w-3/4"></div>
                      <div className="h-1.5 bg-blue-200 rounded w-1/2"></div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 border border-green-200">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-4 h-4 bg-green-500 rounded"></div>
                      <div className="h-2 bg-green-300 rounded flex-1"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 bg-green-200 rounded w-2/3"></div>
                      <div className="h-1.5 bg-green-200 rounded w-3/4"></div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 border border-purple-200">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-4 h-4 bg-purple-500 rounded"></div>
                      <div className="h-2 bg-purple-300 rounded flex-1"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 bg-purple-200 rounded w-4/5"></div>
                      <div className="h-1.5 bg-purple-200 rounded w-1/3"></div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 border border-orange-200">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-4 h-4 bg-orange-500 rounded"></div>
                      <div className="h-2 bg-orange-300 rounded flex-1"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 bg-orange-200 rounded w-5/6"></div>
                      <div className="h-1.5 bg-orange-200 rounded w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 底部状态指示 */}
              <div className="flex items-center justify-between text-xs text-gray-600 mt-auto">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>代理系统在线</span>
                </div>
                <div className="flex items-center space-x-1">
                  <UserGroupIcon className="w-4 h-4 text-blue-600" />
                  <span>合作伙伴支持</span>
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
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-blue-100 to-indigo-100 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  )
}

/**
 * 代理优势区域组件
 */
function AgentAdvantagesSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* 左侧招募信息 */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
              诚招代理合作伙伴
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              主题云面向全国诚招代理合作伙伴，我们提供优质的云计算产品和服务，
              丰厚的代理返佣政策，完善的技术支持和营销支持体系，
              助力合作伙伴快速开拓市场，实现共同发展。
            </p>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center bg-blue-100 mr-4">
                  <CurrencyDollarIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">5-7折优惠价格，丰厚返佣政策</span>
              </div>
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center bg-blue-100 mr-4">
                  <CogIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">全产品线代理，云服务器全系列</span>
              </div>
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center bg-blue-100 mr-4">
                  <WrenchScrewdriverIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">7x24小时专业技术支持</span>
              </div>
              <div className="flex items-center">
                <div className="flex h-8 w-8 items-center justify-center bg-blue-100 mr-4">
                  <MegaphoneIcon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-gray-700">全方位营销支持和培训支持</span>
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

          {/* 右侧优势卡片 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {agentAdvantages.map((advantage, index) => {
              const Icon = advantage.icon
              return (
                <div
                  key={advantage.title}
                  className="bg-gray-50 p-6 hover:shadow-lg transition-shadow duration-300 group"
                >
                  {/* 图标 */}
                  <div className="flex h-12 w-12 items-center justify-center bg-blue-600 text-white mb-4 group-hover:bg-blue-700 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* 内容 */}
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {advantage.title}
                  </h4>
                  <p className="text-gray-900 font-medium mb-2">
                    {advantage.description}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
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
 * 代理支持区域组件
 */
function AgentSupportSection() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            全方位代理支持
          </h2>
          <div className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
            我们为代理合作伙伴提供全方位的支持服务，包括培训支持、市场支持、销售支持和技术支持，
            助力合作伙伴快速成长，实现业务目标。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {agentSupports.map((support, index) => {
            const Icon = support.icon
            return (
              <div
                key={support.title}
                className="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 group"
              >
                {/* 图标 */}
                <div className="flex h-12 w-12 items-center justify-center bg-blue-600 text-white mb-6 group-hover:bg-blue-700 transition-colors">
                  <Icon className="h-6 w-6" />
                </div>

                {/* 内容 */}
                <h4 className="text-lg font-semibold text-gray-900 mb-3">
                  {support.title}
                </h4>
                <p className="text-gray-900 font-medium mb-2">
                  {support.description}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {support.subDescription}
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
 * 加入条件区域组件
 */
function JoinConditionsSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            加入条件
          </h2>
          <div className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
            我们欢迎具备一定资质和服务能力的企业加入我们的代理合作伙伴计划，
            共同为客户提供优质的云计算服务。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {joinConditions.map((condition, index) => {
            const Icon = condition.icon
            return (
              <div
                key={condition.title}
                className="text-center p-8 bg-gray-50 hover:shadow-lg transition-shadow duration-300 group"
              >
                {/* 图标 */}
                <div className="mx-auto flex h-16 w-16 items-center justify-center bg-blue-600 text-white mb-6 group-hover:bg-blue-700 transition-colors">
                  <Icon className="h-8 w-8" />
                </div>

                {/* 内容 */}
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  {condition.title}
                </h4>
                <p className="text-gray-900 font-medium mb-3">
                  {condition.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {condition.subDescription}
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
 * 推广流程区域组件
 */
function PromotionProcessSection() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            推广流程
          </h2>
          <div className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
            简单四步，轻松成为主题云代理合作伙伴，开启您的云计算代理业务。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {promotionSteps.map((step, index) => (
            <div
              key={step.step}
              className="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 group"
            >
              {/* 步骤图标 */}
              <div className="flex h-12 w-12 items-center justify-center bg-blue-600 text-white font-bold text-lg mb-6 group-hover:bg-blue-700 transition-colors">
                {step.step}
              </div>

              {/* 步骤内容 */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold text-gray-900 mb-3">
                  {step.title}
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              {/* 操作按钮 */}
              <Button
                variant="outline"
                color="slate"
                className="w-full border-gray-300 text-gray-700 hover:bg-gray-50"
              >
                {step.action}
              </Button>
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
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            常见问题
          </h2>
          <div className="mt-4 text-lg text-gray-600 max-w-4xl mx-auto">
            解答您在代理合作过程中可能遇到的常见问题，帮助您更好地了解我们的合作模式。
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-50 border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors"
              >
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <ChevronDownIcon
                  className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                    openItems.includes(index) ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-4">
                  <div className="text-gray-600 leading-relaxed">
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
 * 代理合作页面主组件
 * 展示主题云的代理合作计划，包括代理优势、支持服务、加入条件等
 * @returns JSX.Element
 */
export default function AgentPage() {
  return (
    <>
      <Header />
      <main>
        {/* 页面头部横幅 */}
        <HeroBanner />

        {/* 代理优势区域 */}
        <AgentAdvantagesSection />

        {/* 代理支持区域 */}
        <AgentSupportSection />

        {/* 加入条件区域 */}
        <JoinConditionsSection />

        {/* 推广流程区域 */}
        <PromotionProcessSection />

        {/* FAQ常见问题区域 */}
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}

