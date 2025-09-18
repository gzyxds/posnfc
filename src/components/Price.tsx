'use client'

import { Container } from '@/components/Container'
import clsx from 'clsx'
import { ReactNode } from 'react'

/**
 * POS机计划接口 - 定义POS机配置数据结构
 * @interface PosPlan
 */
interface PosPlan {
  name: string
  description: string
  brand: string
  type: string
  features: string
  paymentMethods: string
  price: string
  unit: string
  originalPrice: string
}

/**
 * 码牌收款接口 - 定义码牌收款配置数据结构
 * @interface CodePlan
 */
interface CodePlan {
  name: string
  badge: string
  config: string
  specs: string
  location: string
  duration: string
  discount: string
  price: string
  unit: string
  originalPrice: string
}

/**
 * 卡片属性接口 - 定义卡片组件的属性
 * @interface CardProps
 */
interface CardProps {
  title: string
  children: ReactNode
  className?: string
}

/**
 * 卡片组件 - 通用卡片布局
 * @param props - 卡片属性
 * @returns 卡片组件JSX
 */
const Card = ({ title, children, className }: CardProps) => (
  <div
    className={clsx(
      "overflow-hidden border border-slate-200 bg-white transition-all duration-200 hover:shadow-md",
      className
    )}
  >
    {title && (
      <div className="border-b border-slate-100 p-5">
        <h3 className="mb-1 text-base font-semibold text-gray-900">{title}</h3>
      </div>
    )}
    {children}
  </div>
)

/**
 * 规格行属性接口 - 定义规格行组件的属性
 * @interface SpecRowProps
 */
interface SpecRowProps {
  label: string
  value: string
}

/**
 * 规格行组件 - 展示配置项的标签和值
 * @param props - 规格行属性
 * @returns 规格行组件JSX
 */
const SpecRow = ({ label, value }: SpecRowProps) => (
  <div className="border-b border-slate-100 px-5 py-3">
    <div className="flex items-center justify-between text-sm">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  </div>
)

/**
 * POS机卡片组件属性接口 - 定义POS机卡片组件的属性
 * @interface PosCardProps
 */
interface PosCardProps {
  plan: PosPlan
}

/**
 * 码牌收款卡片组件属性接口 - 定义码牌收款卡片组件的属性
 * @interface CodeCardProps
 */
interface CodeCardProps {
  code: CodePlan
}

/**
 * 价格展示组件 - POS机产品定价与促销展示
 * 设计目标：
 * - 蓝白色调主视觉，符合 B 端专业调性
 * - 简洁直角卡片与边框分割，逻辑层级清晰
 * - 合理留白，信息密度与可读性平衡
 * @returns 页面主体 JSX
 */
export function Price() {
  // 电签POS机配置数据
  const posPlans: PosPlan[] = [
    {
      name: '银盛电签POS机A型',
      description: '4G网络电签版，适合个人及小微商户',
      brand: '银盛支付',
      type: '电签版',
      features: '电子签名、秒到账、T+1结算',
      paymentMethods: '信用卡、借记卡、微信、支付宝、云闪付',
      price: '0',
      unit: '元（免费领取）',
      originalPrice: '299',
    },
    {
      name: '拉卡拉电签POS机B型',
      description: '新款4G电签版，功能全面升级',
      brand: '拉卡拉',
      type: '电签版',
      features: '电子签名、秒到账、支持花呗',
      paymentMethods: '信用卡、借记卡、微信、支付宝、花呗',
      price: '0',
      unit: '元（免费领取）',
      originalPrice: '299',
    },
    {
      name: '中付智能POS机C型',
      description: '安卓智能系统，适合中大型商户',
      brand: '中付支付',
      type: '智能版',
      features: '触摸屏、打印小票、会员管理',
      paymentMethods: '信用卡、借记卡、微信、支付宝、数字人民币',
      price: '599',
      unit: '元/台',
      originalPrice: '999',
    },
    {
      name: '乐刷手机POS机D型',
      description: '手机APP+刷卡器，移动收款神器',
      brand: '乐刷',
      type: '手机POS',
      features: '即插即用、移动便捷、免押金',
      paymentMethods: '信用卡、借记卡、微信、支付宝、Apple Pay',
      price: '99',
      unit: '元/台',
      originalPrice: '199',
    },
  ]

  // 码牌收款配置数据
  const codePlans: CodePlan[] = [
    {
      name: '银盛聚合码牌',
      badge: '爆款',
      config: '静态聚合码',
      specs: '支持微信/支付宝/云闪付',
      location: '全国通用',
      duration: '长期有效',
      discount: '免费',
      price: '0',
      unit: '元 免费申请',
      originalPrice: '99',
    },
    {
      name: '拉卡拉收款码牌',
      badge: '爆款',
      config: '动态聚合码',
      specs: '支持微信/支付宝/花呗',
      location: '全国通用',
      duration: '长期有效',
      discount: '免费',
      price: '0',
      unit: '元 免费申请',
      originalPrice: '99',
    },
    {
      name: '中付智能语音码牌',
      badge: '入门之选',
      config: '语音播报+聚合码',
      specs: '支持微信/支付宝/云闪付',
      location: '全国通用',
      duration: '长期有效',
      discount: '限时优惠',
      price: '39',
      unit: '元/个',
      originalPrice: '99',
    },
    {
      name: '乐刷多功能码牌',
      badge: '入门之选',
      config: '桌面式+语音播报',
      specs: '支持微信/支付宝/花呗',
      location: '全国通用',
      duration: '长期有效',
      discount: '限时优惠',
      price: '49',
      unit: '元/个',
      originalPrice: '99',
    },
  ]

  /**
   * POS机卡片组件 - 展示单个POS机配置信息
   * @param props - POS机卡片组件属性
   * @returns POS机卡片组件JSX
   */
  const PosCard = ({ plan }: PosCardProps) => (
    <Card title={plan.name}>
      <p className="border-b border-slate-100 p-5 pt-0 text-sm text-gray-600">
        {plan.description}
      </p>
      <SpecRow label="品牌" value={plan.brand} />
      <SpecRow label="类型" value={plan.type} />
      <SpecRow label="功能特点" value={plan.features} />
      <SpecRow label="支付方式" value={plan.paymentMethods} />
      <div className="px-5 py-4">
        <div className="mb-1 text-xs text-blue-700">
          0.38%费率永不+3 • 激活一台返299元
        </div>
        <div className="mb-1 flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">¥{plan.price}</span>
          <span className="text-xs text-gray-500">{plan.unit}</span>
        </div>
        <div className="text-xs text-gray-500">
          原价：{plan.originalPrice} 元
        </div>
      </div>
      <div className="flex gap-2 p-5 pt-0">
        <a
          href="/contact"
          className="flex-1 border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50 text-center"
          aria-label="咨询详情"
        >
          咨询详情
        </a>
        <a
          href="/contact"
          className="flex-1 bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 text-center"
          aria-label="立即申请"
        >
          立即申请
        </a>
      </div>
    </Card>
  )

  /**
   * 码牌收款卡片组件 - 展示单个码牌收款配置信息
   * @param props - 码牌收款卡片组件属性
   * @returns 码牌收款卡片组件JSX
   */
  const CodeCard = ({ code }: CodeCardProps) => (
    <Card title="" className="rounded-lg">
      <div className="border-b border-slate-100 p-4">
        <div className="mb-1 flex items-center gap-2">
          <h3 className="text-base font-semibold text-gray-900">
            {code.name}
          </h3>
          <span className="border border-blue-200 bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
            {code.badge}
          </span>
        </div>
        <p className="text-sm text-gray-600">{code.config}</p>
      </div>
      <div className="border-b border-slate-100 px-4 py-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">配置</span>
          <span className="font-medium text-gray-900">
            {code.specs}
          </span>
        </div>
      </div>
      <div className="border-b border-slate-100 px-4 py-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">使用范围</span>
          <span className="font-medium text-gray-900">
            {code.location}
          </span>
        </div>
      </div>
      <div className="border-b border-slate-100 px-4 py-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">有效期</span>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900">
              {code.duration}
            </span>
            <span className="bg-blue-50 px-1 py-0.5 text-xs text-blue-700">
              {code.discount}
            </span>
          </div>
        </div>
      </div>
      <div className="px-4 py-3">
        <div className="mb-1 text-xs text-blue-700">
          {code.discount} 0.38%费率永不+3
        </div>
        <div className="mb-1 flex items-baseline gap-1">
          <span className="text-lg font-bold text-blue-700">
            ¥{code.price}
          </span>
          <span className="text-xs text-gray-500">{code.unit}</span>
        </div>
        <div className="text-xs text-gray-500">
          原价：{code.originalPrice} 元
        </div>
      </div>
      <div className="flex gap-2 p-4 pt-0">
        <a
          href="/contact"
          className="flex-1 bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700 text-center"
          aria-label="立即申请"
        >
          立即申请
        </a>
        <a
          href="/contact"
          className="flex-1 border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50 text-center"
          aria-label="了解详情"
        >
          了解详情
        </a>
      </div>
    </Card>
  )

  return (
    <div className="min-h-screen bg-white pb-16">
      <Container>
        {/* 标题区 */}
        <div className="py-10">
          <h1 className="mb-2 text-3xl font-bold text-blue-600">
            POS机办理官网_银盛/拉卡拉/中付/乐刷一级代理_0.38%费率秒到
          </h1>
          <p className="max-w-2xl text-gray-600">
            正规一清POS机办理入口：银盛/拉卡拉/中付/乐刷总部直签，电签版/智能版/手机POS/聚合码牌随心选，0.38%费率永不+3，激活一台返299元，支持信用卡、微信、支付宝、数字人民币，个人/商户均可在线申请，顺丰包邮当天发货！
          </p>
        </div>

        {/* 电签POS机配置（4例） */}
        <section className="mt-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {posPlans.map((plan, index) => (
              <PosCard key={plan.name + index} plan={plan} />
            ))}
          </div>
        </section>


        {/* 企业精选 · 限时特惠 */}
        <section className="mt-16" aria-labelledby="flash-sale-title">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="flash-sale-title"
                className="text-2xl font-bold text-[#05f] md:text-3xl"
              >
                聚合码牌 · 限时特惠
              </h2>
              <p className="mt-1 text-xs text-gray-500 md:text-sm">
                免费申请，无押金，无激活费，支持微信、支付宝、花呗等多种支付方式
              </p>
            </div>
         </div>
       </section>
        {/* 码牌收款配置（4例） */}
        <section className="mt-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {codePlans.map((code, index) => (
              <CodeCard key={code.name + index} code={code} />
            ))}
          </div>
        </section>
      </Container>
    </div>
  )
}

export default Price
