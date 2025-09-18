'use client'

import clsx from 'clsx'
import {
  CurrencyDollarIcon,
  ClockIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  LockClosedIcon,
  QrCodeIcon,
  ChartBarIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

/**
 * 产品优势数据类型定义
 */
interface ProductAdvantage {
  id: string
  name: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

/**
 * POS机产品优势数据配置
 * 基于关键词布局文档中的POS机核心优势
 */
const productAdvantages: ProductAdvantage[] = [
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
    id: 'easy-apply',
    name: '便捷申请',
    description:
      '无营业执照也能申请，个人小微商户1证即可办理。申请流程清晰，审核速度快，终端安装简单。界面清晰，上手简单，让您专心经营。',
    icon: DevicePhoneMobileIcon,
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
    id: 'no-deposit',
    name: '无押金办理',
    description:
      '机器0元包邮，无激活费、无押金。快递签收后30天内激活即可，快递费我方承担。工作日16:00前提交，当天出仓，顺丰陆运全国送达。',
    icon: LockClosedIcon,
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
]

/**
 * 产品优势组件属性接口
 */
interface SuperiorityProps {
  /** 自定义标题 */
  title?: string
  /** 自定义副标题 */
  subtitle?: string
  /** 自定义描述 */
  description?: string
  /** 自定义CSS类名 */
  className?: string
  /** 是否显示背景 */
  showBackground?: boolean
  /** 网格列数配置 */
  gridCols?: {
    base?: string
    sm?: string
    lg?: string
  }
}

/**
 * 产品优势展示组件
 *
 * 功能特点：
 * - 响应式网格布局，支持移动端、平板和桌面端适配
 * - 使用 Heroicons 图标库提供视觉化图标
 * - 支持自定义标题、描述和样式
 * - 基于项目现有设计规范，保持一致的视觉风格
 * - 展示POS机的核心优势
 *
 * @param title - 组件标题，默认为"产品优势"
 * @param subtitle - 组件副标题
 * @param description - 组件描述
 * @param className - 自定义CSS类名
 * @param showBackground - 是否显示背景色，默认为true
 * @param gridCols - 网格列数配置
 * @returns {JSX.Element} 产品优势展示组件
 */
export function Superiority({
  title = '产品优势',
  subtitle,
  description = '正规一清POS机为您提供全方位的支付优势，助力业务快速发展',
  className,
  showBackground = true,
  gridCols = {
    base: 'grid-cols-1',
    sm: 'grid-cols-2',
    lg: 'grid-cols-3',
  },
}: SuperiorityProps = {}) {
  return (
    <section
      className={clsx(
        'py-16 sm:py-20 lg:py-24',
        showBackground && 'bg-gray-50',
        className,
      )}
    >
      <Container>
        {/* 标题区域 */}
        <div className="max-w-2xl text-left">
          {subtitle && (
            <h2 className="text-base leading-7 font-semibold text-indigo-600">
              {subtitle}
            </h2>
          )}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
          {description && (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {description}
            </p>
          )}
        </div>

        {/* 产品优势网格 */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl
            className={clsx(
              'grid max-w-xl gap-x-8 gap-y-16 lg:max-w-none',
              gridCols.base,
              gridCols.sm && `sm:${gridCols.sm}`,
              gridCols.lg && `lg:${gridCols.lg}`,
            )}
          >
            {productAdvantages.map((advantage) => (
              <div
                key={advantage.id}
                className="flex flex-col rounded-none border border-gray-200 bg-white p-6 transition-all duration-200 hover:border-gray-300"
              >
                <dt className="flex items-center gap-x-3 text-base leading-7 font-semibold text-gray-900">
                  <advantage.icon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-indigo-600"
                  />
                  {advantage.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{advantage.description}</p>
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
 * 默认导出产品优势组件
 */
export default Superiority
