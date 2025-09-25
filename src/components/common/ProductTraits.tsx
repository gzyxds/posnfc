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
    name: '费率0.38%永不+3',
    description:
      '银盛/拉卡拉/中付/乐刷电签POS机，贷记卡0.38%费率永不加3，写入电子协议。价格透明，费率清晰，使用更放心，没有额外收费项目。',
    icon: CurrencyDollarIcon,
  },
  {
    id: 'instant-settlement',
    name: '交易秒到无需等待',
    description:
      '7:00-22:30交易秒到，22:30-次日7:00交易T+1上午10点前到账，节假日正常。自定义提现，资金周转快，实时掌握资金动态。',
    icon: ClockIcon,
  },
  {
    id: 'secure-payment',
    name: '央行一清认证',
    description:
      '央行牌照一清机，资金安全有保障。银联正规POS机，支持芯片/磁条卡、贷记/借记卡全都可以受理。端到端数据加密，确保支付信息安全。',
    icon: ShieldCheckIcon,
  },
  {
    id: 'multi-channel',
    name: '支持扫码/刷卡/NFC',
    description:
      '支持微信、支付宝、数字人民币、Apple Pay、HUAWEI Pay、云闪付等全渠道收款。兼容微信、支付宝、云闪付，一机多用满足各种场景收款需求。',
    icon: CreditCardIcon,
  },
  {
    id: 'mobile-payment',
    name: '4G全网通WiFi+蓝牙双连接',
    description:
      '体积小巧口袋即放，重量<100g久握不累。内置电池续航8小时，即开即用免安装。支持键盘输入密码，声音+震动双提示。',
    icon: DevicePhoneMobileIcon,
  },
  {
    id: 'qr-code-payment',
    name: '一张码全渠道收款',
    description:
      '聚合码牌收款，支持微信、支付宝、云闪付、数字人民币。语音播报防漏单，可设置固定金额/自定义金额。亚克力防水防晒材质。',
    icon: QrCodeIcon,
  },
  {
    id: 'digital-currency',
    name: '支持数字人民币',
    description:
      '布设简单，体验良好，新支付时代收款新方式。支持花呗信用卡，一键签名电子小票，防摔防尘设计，操作简单服务贴心。',
    icon: ChartBarIcon,
  },
  {
    id: 'agent-join',
    name: '激活返现299元',
    description:
      '0加盟费1台起拿，分润万12-万16总部直签。激活一台返299元，分润T+1自动到账，万12-万16终身锁。支持无限下级代理。',
    icon: UserGroupIcon,
  },
  {
    id: 'no-deposit',
    name: '0元免押立即领',
    description:
      '机器0元包邮，无激活费、无押金。顺丰包邮当天发，快递签收后30天内激活即可。10秒开机即刷，30天无理由退换。',
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
  title = '我们的核心优势',
  subtitle = 'POS机核心优势',
  description = '正规一清POS机办理入口：银盛/拉卡拉/中付/乐刷总部直签，电签版/智能版/手机POS/聚合码牌随心选。费率0.38%永不加3，交易秒到不冻结，0元免押立即领',
}: ProductTraitsProps) {
  return (
    <section
      className={clsx('bg-slate-50 py-20 sm:py-32', className)}
      aria-label="产品特性展示"
    >
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* 标题区域 */}
        <div className="lg:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            {description}
          </p>
        </div>

        {/* 特性网格 */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <ul
            role="list"
            className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:grid-cols-3 xl:gap-x-8"
          >
            {productTraits.map((trait, index) => (
              <li
                key={trait.id}
                className="group relative border-2 border-white bg-gradient-to-b from-white to-gray-50 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800"
                style={{borderRadius: '4px'}}
              >
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6 transition-colors duration-300 group-hover:bg-blue-50 dark:border-white/10 dark:bg-gray-800/50">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white ring-1 ring-gray-900/10 dark:bg-gray-700 dark:ring-white/10">
                    <trait.icon
                      className="h-5 w-5 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-sm/6 font-medium text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white">
                    {trait.name}
                  </div>
                  <div className="ml-auto">
                    <span className="inline-flex h-6 w-6 items-center justify-center border border-gray-200 bg-white text-xs font-bold text-gray-400 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="px-6 py-4">
                  <p className="text-sm/6 text-gray-600 transition-colors duration-300 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-200">
                    {trait.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/**
 * 默认导出
 */
export default ProductTraits
