import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const frequencies = [
  { value: 'monthly', label: '每月', priceSuffix: '/月' },
  { value: 'annually', label: '每年', priceSuffix: '/年' },
]
const tiers = [
  {
    name: '基础版',
    id: 'tier-basic',
    href: '#',
    price: { monthly: '¥99', annually: '¥999' },
    description: '适合小微商户和个体工商户的基础POS机服务。',
    features: ['1台电签POS机', '0.38%费率', 'T+1结算', '基础交易统计'],
    featured: false,
  },
  {
    name: '标准版',
    id: 'tier-standard',
    href: '#',
    price: { monthly: '¥199', annually: '¥1999' },
    description: '适合中小商户的标准POS机服务方案。',
    features: [
      '2台电签POS机',
      '0.35%费率',
      'D+0即时结算',
      '详细交易报表',
      '24小时客服支持',
    ],
    featured: true,
  },
  {
    name: '专业版',
    id: 'tier-professional',
    href: '#',
    price: { monthly: '¥399', annually: '¥3999' },
    description: '适合连锁门店和专业商户的高级POS机服务。',
    features: [
      '5台电签POS机',
      '0.32%费率',
      'D+0即时结算',
      '会员管理系统',
      '营销工具支持',
      '专属客户经理',
    ],
    featured: false,
  },
  {
    name: '企业版',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '¥699', annually: '¥6999' },
    description: '为大型企业和连锁品牌提供定制化POS机解决方案。',
    features: [
      '无限POS机数量',
      '0.30%费率',
      'D+0即时结算',
      '定制化系统对接',
      '数据分析平台',
      '专属技术支持',
      '定制化营销方案',
    ],
    featured: false,
  },
]

export default function Pricing() {
  return (
    <form className="group/tiers bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-blue-600 group-active:text-current">
            定价
          </h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-6xl">
            选择适合您的POS机方案
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">
          为不同规模的商户提供灵活的电签POS机服务方案，满足您的各种支付需求。
        </p>
        <div className="mt-16 flex justify-center">
          <fieldset aria-label="付款周期">
            <div className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs/5 font-semibold inset-ring inset-ring-gray-200">
              <label className="group relative rounded-full px-2.5 py-1">
                <input
                  defaultValue="monthly"
                  defaultChecked
                  name="frequency"
                  type="radio"
                  className="absolute inset-0 appearance-none rounded-full"
                />
                <span className="text-gray-500 group-has-checked:text-white">
                  每月
                </span>
              </label>
              <label className="group relative rounded-full px-2.5 py-1">
                <input
                  defaultValue="annually"
                  name="frequency"
                  type="radio"
                  className="absolute inset-0 appearance-none rounded-full"
                />
                <span className="text-gray-500 group-has-checked:text-white">
                  每年
                </span>
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
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  {tier.price.monthly}
                </span>
                <span className="text-sm/6 font-semibold text-gray-600">
                  /月
                </span>
              </p>
              <p className="mt-6 flex items-baseline gap-x-1 group-not-has-[[name=frequency][value=annually]:checked]/tiers:hidden">
                <span className="text-4xl font-semibold tracking-tight text-gray-900">
                  {tier.price.annually}
                </span>
                <span className="text-sm/6 font-semibold text-gray-600">
                  /年
                </span>
              </p>
              <Link
                href={tier.href}
                aria-describedby={tier.id}
                className="mt-6 block w-full rounded-md px-3 py-2 text-center text-sm/6 font-semibold text-indigo-600 inset-ring-1 inset-ring-indigo-200 group-data-featured/tier:bg-indigo-600 group-data-featured/tier:text-white group-data-featured/tier:shadow-xs group-data-featured/tier:inset-ring-0 hover:inset-ring-indigo-300 group-data-featured/tier:hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                购买方案
              </Link>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm/6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className="h-6 w-5 flex-none text-indigo-600"
                    />
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
