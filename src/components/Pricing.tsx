import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const frequencies = [
  { value: 'monthly', label: '每月', priceSuffix: '/月' },
  { value: 'annually', label: '每年', priceSuffix: '/年' },
]
const tiers = [
  {
    name: '爱好者',
    id: 'tier-hobby',
    href: '#',
    price: { monthly: '¥129', annually: '¥1299' },
    description: '为客户提供最佳服务的基本功能。',
    features: ['5个产品', '最多1,000名订阅者', '基础分析'],
    featured: false,
  },
  {
    name: '自由职业者',
    id: 'tier-freelancer',
    href: '#',
    price: { monthly: '¥199', annually: '¥1999' },
    description: '为客户提供最佳服务的基本功能。',
    features: ['5个产品', '最多1,000名订阅者', '基础分析', '48小时支持响应时间'],
    featured: false,
  },
  {
    name: '创业版',
    id: 'tier-startup',
    href: '#',
    price: { monthly: '¥399', annually: '¥3999' },
    description: '随着您的业务快速增长而扩展的计划。',
    features: [
      '25个产品',
      '最多10,000名订阅者',
      '高级分析',
      '24小时支持响应时间',
      '营销自动化',
    ],
    featured: true,
  },
  {
    name: '企业版',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '¥669', annually: '¥6699' },
    description: '为您的公司提供专属支持和基础设施。',
    features: [
      '无限产品',
      '无限订阅者',
      '高级分析',
      '1小时专属支持响应时间',
      '营销自动化',
      '自定义报告工具',
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <form className="group/tiers bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-blue-600 group-active:text-current">定价</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            与您共同成长的定价方案
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
          选择一个实惠的计划，其中包含最佳功能，用于吸引您的受众、建立客户忠诚度和促进销售。
        </p>
        <div className="mt-16 flex justify-center">
          <fieldset aria-label="付款周期">
            <div className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold inset-ring inset-ring-gray-200">
              <label className="group relative rounded-full px-2.5 py-1 has-checked:bg-indigo-600">
                <input
                  defaultValue="monthly"
                  defaultChecked
                  name="frequency"
                  type="radio"
                  className="absolute inset-0 appearance-none rounded-full"
                />
                <span className="text-gray-500 group-has-checked:text-white">每月</span>
              </label>
              <label className="group relative rounded-full px-2.5 py-1 has-checked:bg-indigo-600">
                <input
                  defaultValue="annually"
                  name="frequency"
                  type="radio"
                  className="absolute inset-0 appearance-none rounded-full"
                />
                <span className="text-gray-500 group-has-checked:text-white">每年</span>
              </label>
            </div>
          </fieldset>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              data-featured={tier.featured ? 'true' : undefined}
              className="group/tier rounded-3xl p-8 ring-1 ring-gray-200 data-featured:ring-2 data-featured:ring-indigo-600"
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={`tier-${tier.id}`}
                  className="text-lg/8 font-semibold text-gray-900 group-data-featured/tier:text-indigo-600"
                >
                  {tier.name}
                </h3>
                <p className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600 group-not-data-featured/tier:hidden">
                  最受欢迎
                </p>
              </div>
              <p className="mt-4 text-sm/6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1 group-not-has-[[name=frequency][value=monthly]:checked]/tiers:hidden">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">{tier.price.monthly}</span>
                <span className="text-sm/6 font-semibold text-gray-600">/月</span>
              </p>
              <p className="mt-6 flex items-baseline gap-x-1 group-not-has-[[name=frequency][value=annually]:checked]/tiers:hidden">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">{tier.price.annually}</span>
                <span className="text-sm/6 font-semibold text-gray-600">/年</span>
              </p>
              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className="mt-6 block w-full rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-indigo-600 inset-ring-1 inset-ring-indigo-200 group-data-featured/tier:bg-indigo-600 group-data-featured/tier:text-white group-data-featured/tier:shadow-xs group-data-featured/tier:inset-ring-0 hover:inset-ring-indigo-300 group-data-featured/tier:hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                购买方案
              </Link>
              <ul role="list" className="mt-8 space-y-3 text-sm/6 text-gray-600">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon aria-hidden="true" className="h-6 w-5 flex-none text-indigo-600" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </form>
  )
}
