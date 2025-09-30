import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { CreditCardIcon, QrCodeIcon } from '@heroicons/react/24/outline'

/**
 * 产品卡片的属性接口
 * @interface ProductCardProps
 * @property {string} title - 产品标题
 * @property {string} subtitle - 产品副标题
 * @property {string} description - 产品描述
 * @property {string} rate - 费率信息
 * @property {string} imageSrc - 产品图片路径
 * @property {string} imageAlt - 图片替代文本
 * @property {string} bgGradient - 背景渐变样式类名
 * @property {string} [className] - 额外的样式类名
 */
interface ProductCardProps {
  title: string
  subtitle: string
  description: string
  rate: string
  imageSrc: string
  imageAlt: string
  bgGradient: string
  className?: string
}

/**
 * 产品卡片组件
 * 用于展示单个产品的信息，包括图片、标题、描述和费率
 * 移动端优化：使用卡片式网格布局，极简设计，优化触摸体验
 * @param {ProductCardProps} props - 组件属性
 * @returns {JSX.Element} 产品卡片组件
 */
function ProductCard({
  title,
  subtitle,
  description,
  rate,
  imageSrc,
  imageAlt,
  bgGradient,
  className,
}: ProductCardProps) {
  // 根据产品标题选择合适的图标
  const getIcon = () => {
    if (title.includes('一码聚付') || title.includes('二维码')) {
      return QrCodeIcon
    }
    return CreditCardIcon
  }

  const IconComponent = getIcon()

  return (
    <div
      className={clsx(
        // 基础样式 - 移动端和桌面端差异化
        'group relative overflow-hidden',
        // 移动端：简洁卡片样式 - 改为直角
        'bg-white border border-gray-200 shadow-sm',
        // 桌面端：保持原有样式
        'sm:bg-gradient-to-b sm:from-gray-100 sm:to-white sm:border-2 sm:border-white sm:shadow-[0_6px_20px_#dce0e8] sm:rounded-none',
        // 悬停效果仅在桌面端
        'sm:outline-1 sm:outline-gray-200 sm:transition-all sm:duration-200 sm:hover:shadow-lg sm:hover:outline-gray-300',
        // 布局 - 移动端更紧凑
        'p-3 sm:p-6 lg:p-8',
        'w-full',
        className,
      )}
    >
      {/* 装饰性渐变背景 - 仅在桌面端显示 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-orange-50/50 opacity-0 transition-opacity duration-300 hidden sm:block group-hover:opacity-100" />

      {/* 移动端：极简网格布局 */}
      <div className="block sm:hidden relative z-10">
        {/* 移动端网格容器 */}
        <div className="grid grid-cols-3 gap-3 items-start">
          {/* 左侧：产品图片 */}
          <div className="col-span-1">
            <div className="aspect-square bg-gray-50 p-2 flex items-center justify-center">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={80}
                height={80}
                className="w-full h-full object-contain"
                unoptimized
              />
            </div>
          </div>

          {/* 右侧：产品信息 */}
          <div className="col-span-2 space-y-2">
            {/* 标题和副标题 */}
            <div>
              <h3 className="text-sm font-bold text-gray-900 leading-tight">
                {title}
              </h3>
              <p className="text-xs text-blue-600 font-medium">
                {subtitle}
              </p>
            </div>

            {/* 描述 - 限制行数 */}
            <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
              {description}
            </p>

            {/* 费率信息 */}
            <div className="flex items-center gap-1">
              <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
              <span className="text-xs text-gray-700 font-medium">{rate}</span>
            </div>
          </div>
        </div>

        {/* 移动端按钮区域 - 独立行 */}
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button className="bg-blue-600 text-white text-xs font-medium py-2 px-3 transition-colors active:bg-blue-700 touch-manipulation">
            立即体验
          </button>
          <button className="border border-gray-300 text-gray-700 text-xs font-medium py-2 px-3 transition-colors active:border-gray-400 touch-manipulation">
            查看详情
          </button>
        </div>
      </div>

      {/* 桌面端：保持原有的左右布局 */}
      <div className="hidden sm:flex sm:flex-col sm:gap-8 lg:flex-row lg:items-start lg:gap-10 relative z-10">
        {/* 左侧：产品图片 */}
        <div className="flex-shrink-0 flex justify-center sm:w-64 lg:w-80">
          <div className="w-full max-w-xs sm:max-w-none">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={320}
              height={320}
              className="h-48 w-full object-contain sm:h-56 sm:w-64 lg:h-64 lg:w-80"
              unoptimized
            />
          </div>
        </div>

        {/* 右侧：产品信息 */}
        <div className="flex-1 space-y-6">
          {/* 标题区域 */}
          <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-transparent pb-4">
            <div className="flex h-12 w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-lg">
              <IconComponent className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                {title}
              </h3>
              <div className="font-medium text-blue-600 text-sm sm:text-base">
                {subtitle}
              </div>
            </div>
          </div>

          {/* 描述内容 */}
          <div className="bg-transparent">
            <p className="mb-4 text-sm leading-6 text-gray-700 sm:text-base">
              {description}
            </p>

            {/* 费率信息 */}
            <div className="mb-6 space-y-2">
              <div className="flex items-start gap-x-2">
                <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                <span className="text-sm leading-5 text-gray-600">
                  {rate}
                </span>
              </div>
            </div>

            {/* 操作按钮 */}
            <div className="flex gap-3">
              <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                立即体验
              </button>
              <button className="flex-1 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                查看详情
              </button>
            </div>
          </div>
        </div>
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
 * 展示两个产品卡片：一码聚付和扫码王
 * 移动端：使用紧凑的卡片式网格布局，减少空间占用
 * 桌面端：保持原有的水平排列布局
 * @param {RightleftProps} props - 组件属性
 * @returns {JSX.Element} Rightleft 组件
 */
export default function Rightleft({ className }: RightleftProps) {
  return (
    <section className={clsx('bg-white py-6 sm:py-16 lg:py-24', className)}>
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* 标题区域 - 移动端简化 */}
        <div className="mb-4 sm:mb-12 lg:mb-16 text-center">
          <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl xl:text-5xl">
            热门产品推荐
          </h2>
          <p className="mx-auto mt-1 sm:mt-4 max-w-3xl text-sm sm:text-lg text-gray-600">
            为您提供银联正规POS机办理服务，费率优惠，安全可靠，快速到账
          </p>
        </div>

        {/* 产品卡片容器 - 移动端紧凑间距 */}
        <div className="space-y-3 sm:space-y-0 sm:grid sm:grid-cols-1 sm:gap-6 lg:grid-cols-2 lg:gap-8 xl:gap-x-8">
          {/* 一码聚付卡片 */}
          <ProductCard
            title="一码聚付电子码"
            subtitle="多通道聚合支付"
            description="一码多通道，多商户一键开通，支持微信、支付宝、银联等多种支付方式，让您的收款更便捷"
            rate="费率 0.38% 秒到"
            imageSrc="/images/product/ymjf.webp"
            imageAlt="一码聚付二维码设备"
            bgGradient=""
            className=""
          />

          {/* 扫码王卡片 */}
          <ProductCard
            title="扫码王"
            subtitle="智能收银终端"
            description="扫刷一体机，一机多通道，支持刷卡、扫码、NFC等多种支付方式，智能化收银解决方案"
            rate="费率 0.38% 秒到"
            imageSrc="/images/product/汇来掌柜扫码盒.jpg"
            imageAlt="扫码王POS机设备"
            bgGradient=""
            className=""
          />
        </div>
      </div>
    </section>
  )
}

/**
 * 导出 Rightleft 组件作为默认导出
 * 同时导出 ProductCard 组件供其他地方复用
 */
export { ProductCard }
