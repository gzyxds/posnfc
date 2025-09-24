import { type Metadata } from 'next'
import Link from 'next/link'
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  TicketIcon,
  DocumentTextIcon,
  ArrowRightIcon,
} from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: '费率说明 - 各支付通道的结算费率、实时结算费及结算周期的详细信息，以及不同用户类型的交易限额',
  description:
    '查看各支付通道的结算费率、实时结算费及结算周期，以及不同用户类型的交易限额，选择最适合您的支付方案。',
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
 * 页面头部横幅组件 - 费率说明Hero区域
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
            费率说明
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            查看各支付通道的结算费率、实时结算费及结算周期，以及不同用户类型的交易限额，选择最适合您的支付方案。
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
 * 费率说明区域组件
 */
function RateExplanationSection() {
  // 费率数据
  const rateData = [
    {
      channelName: "大额付Y",
      settlementRate: "0.53%",
      realTimeSettlementFee: "+0.03%",
      settlementCycle: "实时结算"
    },
    {
      channelName: "银易付",
      settlementRate: "0.38%",
      realTimeSettlementFee: "+0.03%",
      settlementCycle: "实时结算"
    },
    {
      channelName: "嘉易付",
      settlementRate: "0.38%",
      realTimeSettlementFee: "+0.03%",
      settlementCycle: "实时结算"
    },
    {
      channelName: "生易付",
      settlementRate: "0.38%",
      realTimeSettlementFee: "+0.03%",
      settlementCycle: "实时结算（23:55-00:05时段交易T1结算）"
    },
    {
      channelName: "盛易付",
      settlementRate: "0.38%",
      realTimeSettlementFee: "+0.03%",
      settlementCycle: "实时结算（新注册首次交易和23:00-07:00时段交易次日结算）"
    },
    {
      channelName: "恒易付",
      settlementRate: "0.38%",
      realTimeSettlementFee: "+0.03%",
      settlementCycle: "实时结算（新注册首次交易次日结算）"
    },
    {
      channelName: "海易付",
      settlementRate: "0.38%",
      realTimeSettlementFee: "+0.03%（最低收0.3，超过0.3收万3）",
      settlementCycle: "实时结算（新注册首次交易T1结算）"
    },
    {
      channelName: "中易付",
      settlementRate: "0.38%",
      realTimeSettlementFee: "+0.03%（最低收0.3，超过0.3收万3）",
      settlementCycle: "大于5元实时结算，小于等于5元次日结算"
    },
    {
      channelName: "大额付Z",
      settlementRate: "0.53%",
      realTimeSettlementFee: "+0.03%（最低收0.3，超过0.3收万3）",
      settlementCycle: "大于5元实时结算，小于等于5元次日结算"
    },
    {
      channelName: "汇易付",
      settlementRate: "0.38%",
      realTimeSettlementFee: "+0.03%（最低收0.5，超过0.5收万3）",
      settlementCycle: "大于10元实时结算，小于等于10元次日结算"
    },
    {
      channelName: "拉易付",
      settlementRate: "0.38%",
      realTimeSettlementFee: "+0.05%",
      settlementCycle: "累计交易大于10元实时结算（新注册1小时内交易和超出额度部分次日结算）"
    },
    {
      channelName: "大额付L",
      settlementRate: "0.53%",
      realTimeSettlementFee: "+0.05%",
      settlementCycle: "累计交易大于10元实时结算（新注册1小时内交易和超出额度部分次日结算）"
    }
  ];

  // 限额数据
  const limitData = [
    {
      channelName: "大额付Y",
      micro: "5万 / 50万",
      individual: "10万 / 200万",
      enterprise: "20万 / 200万"
    },
    {
      channelName: "银易付",
      micro: "3万 / 20万",
      individual: "5万 / 100万",
      enterprise: "5万 / 100万"
    },
    {
      channelName: "嘉易付",
      micro: "5万 / 10万",
      individual: "10万 / 30万",
      enterprise: "10万 / 200万"
    },
    {
      channelName: "生易付",
      micro: "3万 / 10万",
      individual: "10万 / 50万",
      enterprise: "10万 / 100万"
    },
    {
      channelName: "盛易付",
      micro: "5千 / 10万",
      individual: "5万 / 100万",
      enterprise: "5万 / 200万"
    },
    {
      channelName: "恒易付",
      micro: "5千 / 2万",
      individual: "2万 / 10万",
      enterprise: "2万 / 10万"
    },
    {
      channelName: "海易付",
      micro: "3万 / 10万",
      individual: "10万 / 50万",
      enterprise: "20万 / 200万"
    },
    {
      channelName: "中易付",
      micro: "3万 / 10万",
      individual: "10万 / 50万",
      enterprise: "20万 / 50万"
    },
    {
      channelName: "大额付Z",
      micro: "5万 / 20万",
      individual: "10万 / 50万",
      enterprise: "20万 / 200万"
    },
    {
      channelName: "汇易付",
      micro: "2万 / 10万",
      individual: "5万 / 100万",
      enterprise: "5万 / 100万"
    },
    {
      channelName: "拉易付",
      micro: "3万 / 5万",
      individual: "10万 / 50万",
      enterprise: "20万 / 50万"
    },
    {
      channelName: "大额付L（微信）",
      micro: "3万 / 5万",
      individual: "10万 / 50万",
      enterprise: "20万 / 50万"
    },
    {
      channelName: "大额付L（支付宝）",
      micro: "5万 / 50万",
      individual: "10万 / 200万",
      enterprise: "20万 / 200万"
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            费率说明
          </h2>
          <div className="mx-auto mt-4 max-w-4xl text-lg text-gray-600">
            以下是各支付通道的结算费率、实时结算费及结算周期的详细信息，以及不同用户类型的交易限额。
          </div>
        </div>

        {/* 费率表格 */}
        <div className="mb-16">
          <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      通道名称
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      结算费率
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      实时结算费
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      结算周期
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {rateData.map((rate, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {rate.channelName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {rate.settlementRate}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {rate.realTimeSettlementFee}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500">
                        {rate.settlementCycle}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 限额表格 */}
        <div className="mb-8">
          <h3 className="mb-6 text-xl font-semibold text-gray-900">交易限额</h3>
          <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      通道名称
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      小微（单笔/单日）
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      个体（单笔/单日）
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      企业（单笔/单日）
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {limitData.map((limit, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                        {limit.channelName}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {limit.micro}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {limit.individual}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {limit.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* 费率说明 */}
        <div className="outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-6">
          <h3 className="mb-4 text-lg font-medium text-blue-800">费率说明</h3>
          <ul className="space-y-2 text-sm text-blue-700">
            <li>• 结算费率：每笔交易的基本手续费比例</li>
            <li>• 实时结算费：选择实时结算服务时额外收取的费用</li>
            <li>• 结算周期：交易金额结算到账的时间，实时结算为立即到账，T1结算为下一个工作日到账</li>
            <li>• 交易限额：不同用户类型的单笔交易金额上限和单日累计交易金额上限</li>
          </ul>
        </div>
      </Container>
    </div>
  );
}



/**
 * 费率说明页面主组件
 * 展示各支付通道的结算费率、实时结算费及结算周期，以及不同用户类型的交易限额
 * @returns JSX.Element
 */
export default function SupportPage() {
  return (
    <>
      <Header />
      <main>
        {/* 页面头部横幅 */}
        <HeroBanner />
        {/* 费率说明区域 */}
        <RateExplanationSection />
        {/* 多渠道服务支撑区域 */}
        <ServiceSupportSection />
      </main>
      <Footer />
    </>
  )
}
