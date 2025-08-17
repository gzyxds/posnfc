import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CpuChipIcon, ChartBarIcon, DocumentTextIcon } from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

export const metadata: Metadata = {
  title: 'AI 智能助手',
  description:
    '体验 TaxPal 的 AI 智能助手功能，让人工智能为您的财务管理提供更智能的解决方案。',
}

/**
 * AI 功能特性数据配置
 * 定义了 AI 智能助手的核心功能和特性
 */
const aiFeatures = [
  {
    name: '智能数据分析',
    description:
      '利用机器学习算法自动分析财务数据，识别异常模式和趋势，为您提供深入的业务洞察和预测分析。',
    icon: ChartBarIcon,
  },
  {
    name: '自动化报表生成',
    description: '基于 AI 的报表系统能够自动生成各类财务报表，减少手工操作，提高准确性和效率。',
    icon: DocumentTextIcon,
  },
  {
    name: '智能风险预警',
    description: 'AI 系统持续监控财务状况，及时发现潜在风险并提供预警，帮助您做出更明智的决策。',
    icon: LockClosedIcon,
  },
  {
    name: '云端智能处理',
    description: '强大的云计算能力支持大规模数据处理，确保系统高效运行和数据安全存储。',
    icon: CloudArrowUpIcon,
  },
  {
    name: '机器学习优化',
    description: '系统不断学习用户行为和业务模式，自动优化工作流程，提供个性化的使用体验。',
    icon: CpuChipIcon,
  },
  {
    name: '智能备份系统',
    description: 'AI 驱动的备份策略确保数据安全，自动选择最佳备份时机和存储方案。',
    icon: ServerIcon,
  },
]

/**
 * AI 功能展示组件
 * 基于 Tailwind UI 设计的现代化功能展示布局
 * @returns JSX.Element
 */
function AIFeaturesSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pt-4 lg:pl-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                智能化升级
              </h2>
              <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                AI 驱动的财务管理
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                TaxPal 集成了先进的人工智能技术，为您的财务管理带来前所未有的智能化体验。
                从自动化数据处理到智能决策支持，让 AI 成为您最可靠的财务助手。
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {aiFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 h-5 w-5 text-blue-600"
                      />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
              </div>
            </div>
          <div className="flex items-start justify-end lg:order-first">
            <Image
              src={screenshotReporting}
              alt="AI 智能分析界面"
              width={2432}
              height={1442}
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * AI 智能助手页面主组件
 * 展示 TaxPal 的 AI 功能和智能化特性
 * @returns JSX.Element
 */
export default function AIPage() {
  return (
    <>
      <Header />
      <main>
        {/* 页面头部区域 */}
        <div className="bg-white py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                AI 智能助手
                <span className="text-blue-600">重新定义财务管理</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                体验下一代财务管理工具，让人工智能为您的业务决策提供强大支持。
                从智能数据分析到自动化报表生成，AI 助手让财务管理变得前所未有的简单。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button href="/register">体验 AI 功能</Button>
                <Link
                  href="#ai-features"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  了解 AI 特性 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Container>
        </div>

        {/* AI 功能展示区域 */}
        <div id="ai-features">
          <AIFeaturesSection />
        </div>

        {/* 合作伙伴 Logo 展示 */}
        <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                信任与合作
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                全球领先企业的选择
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                已有数千家企业选择 TaxPal AI 智能助手，提升财务管理效率
              </p>
            </div>
            <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:grid-cols-5">
              <img
                alt="Transistor"
                src="/images/logos/logo.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
              />
              <img
                alt="Transistor"
                  src="/images/logos/logo.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
              />

              <img
                alt="Reform"
                 src="/images/logos/logo.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
              />
              <img
                alt="Reform"
                 src="/images/logos/logo.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
              />

              <img
                alt="Tuple"
                src="/images/logos/logo.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 dark:hidden"
              />
              <img
                alt="Tuple"
                src="/images/logos/logo.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain not-dark:hidden lg:col-span-1"
              />

              <img
                alt="SavvyCal"
                src="/images/logos/logo.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1 dark:hidden"
              />
              <img
                alt="SavvyCal"
                src="/images/logos/logo.svg"
                width={158}
                height={48}
                className="col-span-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-2 lg:col-span-1"
              />

              <img
                alt="Statamic"
                src="/images/logos/logo.svg"
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1 dark:hidden"
              />
              <img
                alt="Statamic"
                src="/images/logos/logo.svg"
                width={158}
                height={48}
                className="col-span-2 col-start-2 max-h-12 w-full object-contain not-dark:hidden sm:col-start-auto lg:col-span-1"
              />
            </div>
          </div>
        </div>

        {/* 额外的 AI 优势展示 */}
        <div className="bg-gray-50 py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                为什么选择 AI 驱动的财务管理？
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                传统的财务管理方式已经无法满足现代企业的需求。TaxPal 的 AI 技术
                为您带来更智能、更高效、更准确的财务管理体验。
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
              <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <CpuChipIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    提升 90% 工作效率
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">
                      AI 自动化处理重复性任务，让您专注于更重要的业务决策。
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <ChartBarIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    99.9% 数据准确性
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">
                      机器学习算法确保数据处理的高精度，减少人为错误。
                    </p>
                  </dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <LockClosedIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    24/7 智能监控
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">
                      AI 系统全天候监控财务状况，及时发现异常并提供预警。
                    </p>
                  </dd>
                </div>
              </dl>
            </div>
          </Container>
        </div>

        {/* 行动号召区域 */}
        <div className="bg-blue-600">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                准备体验 AI 智能财务管理？
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                立即开始使用 TaxPal AI 助手，让人工智能为您的财务管理带来革命性的改变。
                免费试用，无需信用卡。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  href="/register"
                  variant="solid"
                  color="white"
                  className="bg-white text-blue-600 hover:bg-gray-50"
                >
                  开始 AI 体验
                </Button>
                <Button
                  href="/product"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  查看所有功能
                </Button>
              </div>
            </div>
          </div>
        </div>


      </main>
      <Footer />
    </>
  )
}

