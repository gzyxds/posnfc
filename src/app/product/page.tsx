import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

export const metadata: Metadata = {
  title: '产品功能',
  description:
    '了解 TaxPal 的完整功能套件，专为小型企业会计需求而设计的强大工具。',
}

/**
 * 产品功能数据配置
 * 定义了产品的主要功能特性，包括标题、描述、图片和详细信息
 */
const productFeatures = [
  {
    id: 'payroll',
    title: '工资管理系统',
    description: '全面的员工薪资管理解决方案',
    image: screenshotPayroll,
    features: [
      '自动计算工资和扣除项',
      '员工工时跟踪',
      '税务合规处理',
      '工资单生成和发送',
      '年终报表自动生成',
    ],
    benefits: [
      '节省 80% 的工资处理时间',
      '减少人为计算错误',
      '确保税务合规性',
    ],
  },
  {
    id: 'expenses',
    title: '费用报销管理',
    description: '智能化的费用跟踪和报销系统',
    image: screenshotExpenses,
    features: [
      '移动端收据拍照上传',
      '自动分类和标记',
      '实时费用跟踪',
      '多币种支持',
      '审批工作流程',
    ],
    benefits: [
      '简化报销流程',
      '提高费用透明度',
      '加快报销审批速度',
    ],
  },
  {
    id: 'vat',
    title: '增值税处理',
    description: '专业的税务管理和申报工具',
    image: screenshotVatReturns,
    features: [
      '自动税率计算',
      '增值税申报表生成',
      '税务合规检查',
      '多地区税法支持',
      '税务审计准备',
    ],
    benefits: [
      '确保税务合规',
      '减少税务风险',
      '简化申报流程',
    ],
  },
  {
    id: 'reporting',
    title: '智能报表系统',
    description: '强大的数据分析和报表生成工具',
    image: screenshotReporting,
    features: [
      '实时财务仪表板',
      '自定义报表模板',
      '数据可视化图表',
      '多格式导出支持',
      '定时报表发送',
    ],
    benefits: [
      '深入了解业务状况',
      '数据驱动决策',
      '提高工作效率',
    ],
  },
]

/**
 * 产品功能卡片组件
 * 用于展示单个产品功能的详细信息
 * @param feature - 功能特性对象
 * @param index - 功能索引，用于布局控制
 */
function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof productFeatures)[0]
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <div className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          className={`mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 ${
            isEven ? 'lg:items-start' : 'lg:items-start lg:grid-cols-2'
          }`}
        >
          <div className={`lg:pr-8 ${!isEven ? 'lg:order-2 lg:pl-8 lg:pr-0' : ''}`}>
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-blue-600">
                {feature.title}
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {feature.description}
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  核心功能
                </h3>
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-5 w-5 text-blue-500 mt-0.5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-3 text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  主要优势
                </h3>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="flex-shrink-0">
                        <svg
                          className="h-4 w-4 text-green-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <span className="ml-2 text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={`${!isEven ? 'lg:order-1' : ''}`}>
            <Image
              src={feature.image}
              alt={feature.title}
              className="w-full max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 产品页面主组件
 * 展示 TaxPal 的完整产品功能和特性
 * @returns JSX.Element
 */
export default function Product() {
  return (
    <>
      <Header />
      <main>
        {/* 页面头部区域 */}
        <div className="bg-white py-24 sm:py-32">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                强大的会计管理
                <span className="text-blue-600">解决方案</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                TaxPal 为小型企业提供全面的会计管理工具，从工资管理到税务申报，
                让您的财务管理变得简单高效。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button href="/register">免费试用</Button>
                <Link
                  href="#features"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  了解功能 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </Container>
        </div>

        {/* 产品功能展示区域 */}
        <div id="features" className="bg-gray-50">
          {productFeatures.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>

        {/* 行动号召区域 */}
        <div className="bg-blue-600">
          <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                准备开始使用 TaxPal？
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-blue-100">
                立即注册，享受 6 个月免费试用期。无需信用卡，随时可以取消。
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button
                  href="/register"
                  variant="solid"
                  color="white"
                  className="bg-white text-blue-600 hover:bg-gray-50"
                >
                  立即开始
                </Button>
                <Button
                  href="/"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-600"
                >
                  返回首页
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
