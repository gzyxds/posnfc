import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  TicketIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: '服务保障 - 优刻云计算',
  description:
    '主题云专业的服务工程师团队为您提供7x24h云端护航服务，若您在使用主题云时遇到问题，您可以通过技术工单、智能客服、自助文档、热线电话等渠道获得解决方案，轻松上云。',
}

/**
 * 多渠道服务支撑数据
 */
const serviceSupports = [
  {
    title: '自助文档',
    description: '全面贴心的使用文档',
    subDescription: '触手可及的云产品使用指导服务',
    icon: DocumentTextIcon,
    action: '立即查看',
    href: '/document',
  },
  {
    title: '技术工单',
    description: '7x24小时服务',
    subDescription: '提供使用指导、故障排查等技术支持',
    icon: TicketIcon,
    action: '立即提交',
    href: '/ticket',
  },
  {
    title: '热线电话',
    description: '7x24小时服务',
    subDescription: '0595-22113999，即时响应您的需求',
    icon: PhoneIcon,
    action: '立即拨打',
    href: 'tel:0595-22113999',
  },
  {
    title: '在线客服',
    description: '工作日 09:00-18:00',
    subDescription: '资深顾问为您定制最佳解决方案',
    icon: ChatBubbleLeftRightIcon,
    action: '立即咨询',
    href: '/chat',
  },
]

/**
 * 免费备案流程步骤
 */
const backupSteps = [
  {
    step: 1,
    title: '填写备案信息',
  },
  {
    step: 2,
    title: '主题云审核',
  },
  {
    step: 3,
    title: '省管局审核',
  },
  {
    step: 4,
    title: '备案成功',
  },
]

/**
 * 无忧退款流程步骤
 */
const refundSteps = [
  {
    step: 1,
    title: '提交工单',
  },
  {
    step: 2,
    title: '人工审核确认',
  },
  {
    step: 3,
    title: '生成退订订单',
  },
  {
    step: 4,
    title: '收到退款',
  },
]

/**
 * 页面头部横幅组件 - 服务保障Hero区域
 */
function HeroBanner() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
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
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <Container className="py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            服务保障
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            主题云专业的服务工程师团队为您提供7x24h云端护航服务，若您在使用主题云时遇到问题，您可以通过技术工单、智能客服、自助文档、热线电话等渠道获得解决方案，轻松上云。
          </p>
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
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  )
}

/**
 * 多渠道不间断服务支撑区域组件
 */
function ServiceSupportSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            多渠道不间断服务支撑
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {serviceSupports.map((support, index) => {
            const Icon = support.icon
            return (
              <div
                key={support.title}
                className="group relative border border-gray-200 bg-white p-6 transition-shadow duration-300 hover:shadow-lg"
              >
                {/* 头部区域 - 标题和图标 */}
                <div className="mb-6 flex items-center justify-between">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {support.title}
                  </h4>
                  <div className="flex h-12 w-12 items-center justify-center bg-gray-50 transition-colors group-hover:bg-blue-50">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                </div>

                {/* 内容区域 */}
                <div className="pb-10">
                  <p className="mb-2 font-medium text-gray-900">
                    {support.description}
                  </p>
                  <p className="mb-5 text-sm leading-relaxed text-gray-600">
                    {support.subDescription}
                  </p>

                  {/* 操作链接 */}
                  <Link
                    href={support.href}
                    className="inline-flex items-center text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                  >
                    {support.action}
                    <ArrowRightIcon className="ml-1 h-4 w-4" />
                  </Link>
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
 * 免费备案流程区域组件
 */
function BackupProcessSection() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            免费备案
          </h2>
          <div className="mx-auto mt-4 max-w-4xl text-lg text-gray-600">
            在中华人民共和国境内提供互联网信息服务，应当依法履行备案手续，主题云可为您免费提供备案服务。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {backupSteps.map((step, index) => (
            <div
              key={step.step}
              className="flex items-center space-x-4 lg:flex-col lg:items-center lg:space-y-4 lg:space-x-0"
            >
              {/* 步骤图标 */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-blue-600 text-lg font-bold text-white">
                {step.step}
              </div>

              {/* 步骤标题 */}
              <div className="lg:text-center">
                <h5 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h5>
              </div>

              {/* 连接线 (仅在非最后一个步骤显示) */}
              {index < backupSteps.length - 1 && (
                <div className="mt-4 hidden h-px w-full bg-gray-300 lg:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/**
 * 无忧退款流程区域组件
 */
function RefundProcessSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            无忧退款
          </h2>
          <div className="mx-auto mt-4 max-w-4xl text-lg text-gray-600">
            如果您购买主题云产品后有任何退订需求，您可以随时在官网产品中心提交工单发起退订申请。
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {refundSteps.map((step, index) => (
            <div
              key={step.step}
              className="flex items-center space-x-4 lg:flex-col lg:items-center lg:space-y-4 lg:space-x-0"
            >
              {/* 步骤图标 */}
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center bg-blue-600 text-lg font-bold text-white">
                {step.step}
              </div>

              {/* 步骤标题 */}
              <div className="lg:text-center">
                <h5 className="text-lg font-semibold text-gray-900">
                  {step.title}
                </h5>
              </div>

              {/* 连接线 (仅在非最后一个步骤显示) */}
              {index < refundSteps.length - 1 && (
                <div className="mt-4 hidden h-px w-full bg-gray-300 lg:block" />
              )}
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/**
 * 期待您的声音区域组件
 */
function FeedbackSection() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* 左侧模拟界面设计 */}
          <div className="relative">
            <div className="min-h-[500px] border border-gray-200 bg-white p-8 shadow-xl">
              {/* 模拟浏览器窗口 */}
              <div className="mb-6 bg-gray-50 p-6">
                <div className="mb-4 flex items-center">
                  <div className="flex space-x-1">
                    <div className="h-3 w-3 rounded-full bg-red-400"></div>
                    <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
                    <div className="h-3 w-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="ml-4 flex-1 rounded bg-white px-3 py-1 text-xs text-gray-500">
                    云服务中心
                  </div>
                </div>

                {/* 模拟服务界面内容 */}
                <div className="space-y-4">
                  <div className="border border-gray-200 bg-white p-4">
                    <div className="mb-3 flex items-center space-x-2">
                      <div className="h-4 w-4 rounded bg-blue-500"></div>
                      <div className="h-2 flex-1 rounded bg-gray-300"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 w-3/4 rounded bg-gray-200"></div>
                      <div className="h-1.5 w-1/2 rounded bg-gray-200"></div>
                    </div>
                  </div>

                  <div className="border border-gray-200 bg-white p-4">
                    <div className="mb-3 flex items-center space-x-2">
                      <div className="h-4 w-4 rounded bg-green-500"></div>
                      <div className="h-2 flex-1 rounded bg-gray-300"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 w-2/3 rounded bg-gray-200"></div>
                      <div className="h-1.5 w-3/4 rounded bg-gray-200"></div>
                    </div>
                  </div>

                  <div className="border border-gray-200 bg-white p-4">
                    <div className="mb-3 flex items-center space-x-2">
                      <div className="h-4 w-4 rounded bg-purple-500"></div>
                      <div className="h-2 flex-1 rounded bg-gray-300"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 w-4/5 rounded bg-gray-200"></div>
                      <div className="h-1.5 w-1/3 rounded bg-gray-200"></div>
                    </div>
                  </div>

                  <div className="border border-gray-200 bg-white p-4">
                    <div className="mb-3 flex items-center space-x-2">
                      <div className="h-4 w-4 rounded bg-orange-500"></div>
                      <div className="h-2 flex-1 rounded bg-gray-300"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-1.5 w-5/6 rounded bg-gray-200"></div>
                      <div className="h-1.5 w-2/3 rounded bg-gray-200"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 底部状态指示 */}
              <div className="mt-auto flex items-center justify-between text-xs text-gray-500">
                <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 rounded-full bg-green-400"></div>
                  <span>服务在线</span>
                </div>
                <div className="flex items-center space-x-1">
                  <UserGroupIcon className="h-4 w-4" />
                  <span>24/7 支持</span>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧内容区域 */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                期待您的声音
              </h2>

              {/* 意见建议 */}
              <div className="mb-10">
                <h4 className="mb-5 text-xl font-semibold text-gray-900">
                  意见建议
                </h4>
                <p className="mb-5 leading-relaxed text-gray-600">
                  您在使用主题云的产品和服务时，如果对我们的售前售后服务、产品功能操作、系统稳定性等有任何建议或不满，请随时反馈给我们，我们将努力为您带来更好的使用体验。
                </p>
                <Button
                  variant="outline"
                  className="border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                >
                  <Link href="/contact" className="flex items-center">
                    我要建议
                  </Link>
                </Button>
              </div>

              {/* 服务投诉 */}
              <div>
                <h4 className="mb-5 text-xl font-semibold text-gray-900">
                  服务投诉
                </h4>
                <p className="mb-5 leading-relaxed text-gray-600">
                  主题云欢迎您对我们的产品与服务进行监督，如果您发现主题云员工存在任何不合理、不正当行为，请告知我们，我们将及时核实并处理，确保公开透明、公平公正。
                </p>
                <Button
                  variant="outline"
                  className="border-gray-300 bg-white text-gray-900 hover:bg-gray-50"
                >
                  <Link href="/contact" className="flex items-center">
                    我要投诉
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * 服务保障页面主组件
 * 展示主题云的服务保障体系，包括多渠道服务支撑、备案服务、退款服务等
 * @returns JSX.Element
 */
export default function SupportPage() {
  return (
    <>
      <Header />
      <main>
        {/* 页面头部横幅 */}
        <HeroBanner />

        {/* 多渠道服务支撑区域 */}
        <ServiceSupportSection />

        {/* 免费备案流程区域 */}
        <BackupProcessSection />

        {/* 无忧退款流程区域 */}
        <RefundProcessSection />

        {/* 期待您的声音区域 */}
        <FeedbackSection />
      </main>
      <Footer />
    </>
  )
}
