'use client'

import clsx from 'clsx'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

/**
 * 信息项（卡片内部 2x2 网格中的每个条目）
 */
interface PanelItem {
  title: string
  desc: string
}

/**
 * 卡片数据结构（对应左/右两张大卡）
 */
interface Panel {
  /** 卡片标题，例如：超值优选、智启 AI */
  title: string
  /** 卡片副标题/说明文案 */
  subtitle: string
  /** CTA 按钮文本 */
  cta: string
  /** CTA 无障碍标签（若与文本一致可复用） */
  ctaAriaLabel?: string
  /** 颜色变体：blue 表示左卡，purple 表示右卡 */
  variant: 'blue' | 'purple'
  /** 主体信息 2x2 网格 */
  items: PanelItem[]
  /** 底部了解更多链接文字 */
  learnMore: string
}

/**
 * 按变体返回样式类名集合
 *
 * @param variant - 颜色变体（blue | purple）
 * @returns 含头部渐变、按钮、hover 等样式的类名对象
 */
function getPanelStyles(variant: Panel['variant']) {
  return {
    headerBg:
      variant === 'blue'
        ? 'from-blue-100 via-blue-50 to-indigo-100'
        : 'from-blue-100 via-blue-50 to-indigo-100',
    headerTint: variant === 'blue' ? 'text-blue-700' : 'text-blue-700',
    button: clsx(
      'inline-flex items-center gap-1 px-3 py-1.5 text-sm font-medium shadow-sm transition-all duration-200',
      variant === 'blue'
        ? 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md hover:scale-105'
        : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md hover:scale-105',
    ),
    hyperlink:
      variant === 'blue'
        ? 'text-blue-600 hover:text-blue-700 transition-colors duration-200'
        : 'text-blue-600 hover:text-blue-700 transition-colors duration-200',
    gridTitle: 'text-gray-900',
    gridDesc: 'text-gray-600',
  }
}

/**
 * 装饰性背景图（右上角几何形状）
 * 说明：使用内联 SVG，避免额外静态资源依赖；不参与语义/可交互，aria-hidden。
 *
 * @param variant - 颜色变体，影响渐变颜色
 * @returns 装饰用 SVG JSX
 */
function DecorativeShape({ variant }: { variant: Panel['variant'] }) {
  const gradientId = variant === 'blue' ? 'gBlue' : 'gPurple'
  const from = variant === 'blue' ? '#60A5FA' : '#60A5FA'
  const to = variant === 'blue' ? '#6366F1' : '#6366F1'
  return (
    <svg
      aria-hidden="true"
      className="absolute top-1/2 right-6 h-20 w-28 -translate-y-1/2 opacity-80"
      viewBox="0 0 140 100"
    >
      <defs>
        <linearGradient id={gradientId} x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
      </defs>
      <rect x="10" y="10" width="60" height="60" fill={`url(#${gradientId})`} />
      <rect x="70" y="30" width="50" height="50" fill="#fff" opacity="0.9" />
      <rect
        x="85"
        y="45"
        width="35"
        height="35"
        fill={`url(#${gradientId})`}
        opacity="0.7"
      />
    </svg>
  )
}

/**
 * 单个卡片组件
 *
 * 设计与考虑：
 * - 顶部为渐变背景 + 标题/副标题 + CTA，模拟参考图的头部横幅区。
 * - 下方为 2x2 宫格信息，使用边框分隔，保证视觉节奏与层次。
 * - 整卡 hover 提升阴影与边框色，增强可互动感知。
 *
 * @param panel - 卡片数据
 * @returns 完整的卡片 JSX
 */
function PanelCard({ panel }: { panel: Panel }) {
  const styles = getPanelStyles(panel.variant)
  const labelledById = `${panel.title}-heading`
  return (
    <section
      aria-labelledby={labelledById}
      className="group relative cursor-pointer overflow-hidden rounded-[2px] bg-gradient-to-b from-[#f3f5f8] to-white shadow-[0_6px_20px_#dce0e8] border-2 border-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-100/50"
    >
      {/* Header */}
      <div
        className={clsx(
          'relative flex items-center justify-between px-6 py-6',
        )}
      >
        <div className="pr-28">
          <h3
            id={labelledById}
            className={clsx('text-lg font-semibold', styles.headerTint)}
          >
            {panel.title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">{panel.subtitle}</p>
          <div className="mt-4">
            <button
              className={styles.button}
              aria-label={panel.ctaAriaLabel || panel.cta}
            >
              {panel.cta}
              <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
        <DecorativeShape variant={panel.variant} />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 divide-y divide-gray-100 sm:grid-cols-2 sm:divide-x sm:divide-y-0 bg-white bg-opacity-50">
        {panel.items.map((it, idx) => (
          <div key={idx} className="p-5">
            <p className={clsx('text-sm font-medium', styles.gridTitle)}>
              {it.title}
            </p>
            <p className={clsx('mt-1 text-sm leading-6', styles.gridDesc)}>
              {it.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="px-6 py-4 bg-white bg-opacity-50">
        <a
          href="#"
          className={clsx(
            'inline-flex items-center gap-1 text-sm font-medium',
            styles.hyperlink,
          )}
        >
          {panel.learnMore}
          <ChevronRightIcon className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}

/**
 * Erlie - POS机与支付服务权益区块
 *
 * 功能：
 * - 根据参考图片实现双卡片布局：左侧"超值优选"，右侧"智能支付"。
 * - 每张卡片包含标题、副标题、CTA、2x2 信息网格与"了解更多"链接。
 * - 使用 Tailwind CSS 响应式与渐变，兼顾视觉一致性与性能。
 *
 * 参数：无
 * 返回值：返回完整的区块 JSX 结构
 */
export default function Erlie() {
  const panels: Panel[] = [
    {
      title: '超值优选',
      subtitle: '新用户办理POS机综合权益，热门机型0元领，激活返现299元',
      cta: '立即申请',
      variant: 'blue',
      items: [
        { title: '多品牌POS机组合', desc: '银盛/拉卡拉/中付/乐刷，长期有效' },
        {
          title: '0.38%费率，永不+3',
          desc: '支持多场景收款，开箱即用更经济',
        },
        {
          title: '全支付方式解决方案',
          desc: '刷卡/扫码/数字人民币/NFC支付一站式',
        },
        { title: '组合省，智能省', desc: '多重优惠叠加，自定义提现资金周转快' },
      ],
      learnMore: '了解更多优惠',
    },
    {
      title: '智能支付',
      subtitle: '支持全渠道收款，30+支付功能开通',
      cta: '开始体验',
      variant: 'purple',
      items: [
        {
          title: '多终端支持，不写码',
          desc: '覆盖电签POS/手机POS/聚合码牌，办理与使用一体化',
        },
        {
          title: '云端管理，多平台接入',
          desc: '深度集成支付生态，交易更稳定',
        },
        {
          title: '一对一专属客服服务',
          desc: '专业指导，快速解决，使用能力快速提升',
        },
        {
          title: '开放能力，推进创新与落地',
          desc: '央行一清牌照，强大并发，支撑复杂场景',
        },
      ],
      learnMore: '了解支付权益',
    },
  ]

  return (
    <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-16 sm:py-24">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
            <span className="text-gray-900">全方位支付超值权益</span><span className="text-blue-600">助力商户经营</span>
          </h2>
        </div>

        {/* Panels */}
        <div className="mx-auto mt-10 grid max-w-[1800px] grid-cols-1 gap-6 lg:mt-12 lg:grid-cols-2">
          {panels.map((panel) => (
            <PanelCard key={panel.title} panel={panel} />
          ))}
        </div>
      </div>
    </div>
  )
}
