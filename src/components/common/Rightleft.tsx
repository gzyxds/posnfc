import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { Container } from '@/components/Container'
import {
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  QrCodeIcon,
} from '@heroicons/react/24/outline'

/**
 * ProductCard 组件属性接口
 * 定义产品卡片组件的所有可配置属性
 */
interface ProductCardProps {
  /** 产品标题 */
  title: string
  /** 产品副标题 */
  subtitle: string
  /** 产品描述 */
  description: string
  /** 费率信息 */
  rate: string
  /** 卡片尺寸 */
  size?: 'normal' | 'large'
  /** 卡片位置 */
  position?: 'left' | 'right' | 'top' | 'bottom'
  /** 自定义样式类名 */
  className?: string
}

/**
 * 产品卡片组件
 * 参考参考样式.html的设计，使用现代化的卡片布局和边框样式
 * @param {ProductCardProps} props - 组件属性
 * @returns {JSX.Element} 产品卡片组件
 */
function ProductCard({
  title,
  subtitle,
  description,
  rate,
  size = 'normal',
  position,
  className,
}: ProductCardProps) {
  /**
   * 根据产品类型获取对应的图标组件
   * @returns {React.ElementType} 图标组件
   */
  const getIcon = (): React.ElementType => {
    if (title.includes('一码聚付') || title.includes('扫码')) {
      return QrCodeIcon
    }
    if (title.includes('安全') || title.includes('保障')) {
      return ShieldCheckIcon
    }
    if (title.includes('智能') || title.includes('POS')) {
      return CreditCardIcon
    }
    return DevicePhoneMobileIcon
  }

  const IconComponent = getIcon()

  // 根据尺寸和位置计算卡片布局样式
  const cardLayoutClasses = clsx(
    // 基础样式 - 参考Leftright.tsx的卡片样式
    'overflow-hidden outline-1 outline-gray-200 transition-all duration-200',
    'hover:shadow-lg hover:outline-gray-300',
    'bg-gradient-to-b from-gray-100 to-white',
    'border-2 border-white shadow-[0_6px_20px_#dce0e8]',
    // 大小样式
    size === 'large' && 'lg:row-span-2',
  )

  return (
    <div className={clsx(cardLayoutClasses, className)}>
      {/* 卡片头部 - 参考Leftright.tsx的设计 */}
      <div className="flex items-center gap-x-3 border-b border-gray-900/5 bg-transparent p-4 sm:p-6">
        <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-md">
          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm sm:text-lg font-bold text-gray-900 truncate">{title}</h3>
          <div className="font-medium text-blue-600 text-xs sm:text-sm">{subtitle}</div>
        </div>
      </div>

      {/* 卡片内容 - 参考Leftright.tsx的布局 */}
        <div className="px-4 py-3 sm:px-6 sm:py-4 bg-transparent">
          <p className="mb-3 sm:mb-4 text-xs sm:text-sm leading-5 sm:leading-6 text-gray-700 line-clamp-2">
            {description}
          </p>

          {/* 费率信息 */}
          <div className="flex items-start gap-x-2">
            <div className="mt-1.5 sm:mt-2 h-1 w-1 sm:h-1.5 sm:w-1.5 flex-none rounded-full bg-blue-600" />
            <span className="text-xs sm:text-sm leading-4 sm:leading-5 text-gray-600">
              {rate}
            </span>
          </div>

          {/* 支付宝图片 - 仅在一码聚付卡片中显示，减小间距 */}
          {title.includes('一码聚付') && (
            <div className="mt-3 mx-3 mb-3 sm:mx-4 sm:mb-4">
              <Image
                src="/images/screenshots/alipay.webp"
                alt="支付宝支付示例"
                width={400}
                height={240}
                className="w-full h-auto object-cover rounded-md"
                unoptimized
              />
            </div>
          )}

          {/* 智能POS产品展示图片 - 仅在智能POS卡片中显示，减小间距 */}
          {title.includes('智能POS') && (
            <div className="mt-3 mx-3 mb-3 sm:mx-4 sm:mb-4">
              <Image
                src="/images/screenshots/wxpay.webp"
                alt="智能POS产品展示"
                width={400}
                height={240}
                className="w-full h-auto object-cover rounded-md"
                unoptimized
              />
            </div>
          )}
        </div>
    </div>
  )
}

/**
 * Rightleft 组件的属性接口
 * @interface RightleftProps
 * @property {string} [className] - 额外的样式类名
 */
interface RightleftProps {
  className?: string
}

/**
 * Rightleft 主组件
 * 参考参考样式.html的网格布局，展示多个产品卡片
 * 使用现代化的网格系统和边框样式
 * @param {RightleftProps} props - 组件属性
 * @returns {JSX.Element} Rightleft 组件
 */
export default function Rightleft({ className }: RightleftProps) {
  return (
    <section className={clsx('bg-gray-50 py-24 sm:py-32', className)}>
      <Container>
        {/* 标题区域 */}
        <div className="text-center">
          <h2 className="text-center text-base/7 font-semibold text-blue-600">
            为您提供
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
            全方位的支付服务
          </p>
        </div>

        {/* 产品卡片网格 - 参考参考样式.html的布局 */}
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* 一码聚付 - 左侧大卡片 */}
          <ProductCard
            title="一码聚付电子码"
            subtitle="多通道聚合支付"
            description="一码多通道，多商户一键开通，支持微信、支付宝、银联等多种支付方式，让您的收款更便捷"
            rate="费率 0.38% 秒到"
            size="large"
            position="left"
          />

          {/* 扫码王 - 右上卡片 */}
          <ProductCard
            title="扫码王"
            subtitle="智能收银终端"
            description="扫刷一体机，一机多通道，支持刷卡、扫码、NFC等多种支付方式"
            rate="费率 0.38% 秒到"
            position="top"
            className="max-lg:row-start-1"
          />

          {/* 安全保障 - 右中卡片 */}
          <ProductCard
            title="安全保障"
            subtitle="银联认证"
            description="银联正规POS机办理服务，央行认证，资金安全有保障，交易数据实时监控"
            rate="安全可靠 快速到账"
            position="bottom"
            className="max-lg:row-start-3 lg:col-start-2 lg:row-start-2"
          />

          {/* 智能POS - 右侧大卡片 */}
          <ProductCard
            title="智能POS终端"
            subtitle="全能支付解决方案"
            description="集成多种支付方式，支持刷卡、插卡、挥卡、扫码等，满足各种收款需求，提供完整的商户管理功能"
            rate="费率优惠 功能强大"
            size="large"
            position="right"
          />
        </div>
      </Container>
    </section>
  )
}

/**
 * 导出 Rightleft 组件作为默认导出
 * 同时导出 ProductCard 组件供其他地方复用
 */
export { ProductCard }
