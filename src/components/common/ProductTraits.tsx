'use client'

import clsx from 'clsx'
import {
  CreditCardIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  QrCodeIcon,
  ChartBarIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  ClockIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

/**
 * 产品特性数据类型定义
 */
interface ProductTrait {
  id: string
  name: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

/**
 * POS机产品特性数据
 * 基于关键词布局文档中的产品特性文案
 */
const productTraits: ProductTrait[] = [
  {
    id: 'low-rate',
    name: '0.38%费率',
    description:
      '银盛/拉卡拉/中付/乐刷电签POS机，贷记卡0.38%费率永不+3，写入电子协议。如上调需向银联报备并提前30天推送消息，用户可无条件停用，费率透明无套路。',
    icon: CurrencyDollarIcon,
  },
  {
    id: 'instant-settlement',
    name: '秒到账服务',
    description:
      '7:00-22:30交易秒到，22:30-次日7:00交易T+1上午10点前到账，节假日正常。资金周转更灵活，支持个人储蓄卡结算，无需对公账户，实时掌握资金动态。',
    icon: ClockIcon,
  },
  {
    id: 'secure-payment',
    name: '安全支付',
    description:
      '央行牌照一清机，资金安全有保障。银联正规POS机，支持银联贷记卡、借记卡。端到端数据加密，确保支付信息安全，让您收款更放心。',
    icon: ShieldCheckIcon,
  },
  {
    id: 'multi-channel',
    name: '全渠道收款',
    description:
      '支持微信、支付宝、数字人民币、Apple Pay、HUAWEI Pay、云闪付等全渠道收款。一机多用，满足各种场景收款需求，提升客户支付体验。',
    icon: CreditCardIcon,
  },
  {
    id: 'mobile-payment',
    name: '移动收款',
    description:
      '手机POS软件，支持信用卡、花呗、云闪付。无营业执照也能申请，个人小微商户1证即可办理。随时随地收款，让生意更便捷。',
    icon: DevicePhoneMobileIcon,
  },
  {
    id: 'qr-code-payment',
    name: '码牌收款',
    description:
      '聚合码牌收款，支持微信、支付宝等主流扫码支付。收款实时语音播报，防止漏单。无需营业执照，个人小微商户1证即可办理，简单易用。',
    icon: QrCodeIcon,
  },
  {
    id: 'transaction-monitoring',
    name: '交易监控',
    description:
      '24/7实时监控交易状态和资金流向，深度分析交易数据，提供经营建议。智能异常交易提醒，及时发现和处理问题，让经营更安心。',
    icon: ChartBarIcon,
  },
  {
    id: 'agent-join',
    name: '代理加盟',
    description:
      '0加盟费1台起拿，分润万12-万16总部直签。激活一台返299元，分润T+1自动到账，万12-万16终身锁。支持无限下级，分润差实时结算。',
    icon: UserGroupIcon,
  },
  {
    id: 'no-deposit',
    name: '无押金办理',
    description:
      '机器0元包邮，无激活费、无押金。快递签收后30天内激活即可，快递费我方承担。工作日16:00前提交，当天出仓，顺丰陆运全国送达。',
    icon: ShieldCheckIcon,
  },
]

/**
 * 产品特性展示组件属性接口
 */
interface ProductTraitsProps {
  /** 自定义类名 */
  className?: string
  /** 标题 */
  title?: string
  /** 副标题 */
  subtitle?: string
  /** 描述文本 */
  description?: string
}

/**
 * 产品特性展示组件
 *
 * 功能特点：
 * - 展示POS机产品的核心特性
 * - 响应式网格布局（移动端1列，平板2列，桌面3列）
 * - 每个特性包含图标、标题和详细描述
 * - 使用 Heroicons 图标库
 * - 支持自定义标题和描述
 *
 * @param className - 自定义类名
 * @param title - 主标题，默认为"产品特性"
 * @param subtitle - 副标题，默认为"POS机核心优势"
 * @param description - 描述文本，默认为产品特性介绍
 * @returns {JSX.Element} 产品特性展示组件
 */
export function ProductTraits({
  className,
  title = '产品特性',
  subtitle = 'POS机核心优势',
  description = '正规一清POS机办理入口：银盛/拉卡拉/中付/乐刷总部直签，电签版/智能版/手机POS/聚合码牌随心选，0.38%费率永不+3',
}: ProductTraitsProps) {
  return (
    <section
      className={clsx('bg-white py-24 sm:py-32', className)}
      aria-label="产品特性展示"
    >
      <Container>
        {/* 标题区域 */}
        <div className="mb-16 max-w-2xl text-left">
          <h2 className="text-base leading-7 font-semibold text-blue-600">
            {subtitle}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">{description}</p>
        </div>

        {/* 特性网格 */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
            {productTraits.map((trait) => (
              <div
                key={trait.id}
                className="flex flex-col rounded-none border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-gray-300"
              >
                <dt className="flex items-center gap-x-3 text-base leading-7 font-semibold text-gray-900">
                  <trait.icon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-indigo-600"
                  />
                  {trait.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{trait.description}</p>
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
 * 默认导出
 */
export default ProductTraits
