'use client'

import React, { useState, useMemo, useCallback } from 'react'
import Image from 'next/image'
import { ActivityCard } from './Activitycard'
import { DualQRCodeButtonGroup } from './QRCode'
import { 
  serverProducts, 
  cloudVmProducts, 
  promotionProducts, 
  productGroups,
  type ServerProduct,
  type ProductGroupKey 
} from '@/data/products'

/**
 * 产品卡片组件的属性接口
 * 定义产品卡片组件所需的所有属性
 *
 * @interface CardpriceProps
 * @property {string} [className] - 可选的CSS类名，用于自定义样式
 * @property {boolean} [showActivityCard] - 是否显示活动卡片，默认为true
 * @property {number} [maxProducts] - 最大显示产品数量，用于性能优化
 */
interface CardpriceProps {
  className?: string
  showActivityCard?: boolean
  maxProducts?: number
}

/**
 * 产品卡片组件
 * 展示POS机产品列表，包含产品信息、价格、特性等
 * 支持响应式设计，适配移动端和桌面端
 *
 * @param {CardpriceProps} props - 组件属性
 * @returns {React.ReactElement} 渲染的产品卡片列表组件
 *
 * @example
 * ```tsx
 * <Cardprice
 *   className="my-4"
 *   showActivityCard={true}
 *   maxProducts={20}
 * />
 * ```
 */
const Cardprice: React.FC<CardpriceProps> = React.memo(({
  className = '',
  showActivityCard = true,
  maxProducts = 50
}) => {
  // 当前选中的产品类别状态
  const [selectedCategory, setSelectedCategory] = useState<ProductGroupKey | 'server' | 'cloudvm' | 'promotion'>('server')

  /**
   * 处理类别切换的回调函数
   * 使用useCallback优化性能，避免不必要的重渲染
   *
   * @param {string} category - 要切换到的产品类别
   */
  const handleCategoryChange = useCallback((category: 'server' | 'cloudvm' | 'promotion') => {
    setSelectedCategory(category)
  }, [])

  /**
   * 根据选中类别获取对应的产品数据
   * 使用useMemo缓存计算结果，提升性能
   *
   * @returns {ServerProduct[]} 当前类别的产品列表
   */
  const currentProducts = useMemo(() => {
    let products: ServerProduct[] = []

    switch (selectedCategory) {
      case 'server':
        products = serverProducts
        break
      case 'cloudvm':
        products = cloudVmProducts
        break
      case 'promotion':
        products = promotionProducts
        break
      case 'qrCode':
        products = productGroups.qrCode
        break
      case 'electronicPos':
        products = productGroups.electronicPos
        break
      case 'smartScreen':
        products = productGroups.smartScreen
        break
      case 'cloudSpeaker':
        products = productGroups.cloudSpeaker
        break
      case 'scanCode':
        products = productGroups.scanCode
        break
      case 'stickerCode':
        products = productGroups.stickerCode
        break
      case 'nfcTouch':
        products = productGroups.nfcTouch
        break
      case 'bigPos':
        products = productGroups.bigPos
        break
      default:
        products = serverProducts
    }

    // 限制产品数量以提升性能
    return products.slice(0, maxProducts)
  }, [selectedCategory, maxProducts])

  /**
   * 格式化价格显示
   * 处理不同类型的价格数据，统一显示格式
   *
   * @param {string | number} price - 原始价格数据
   * @param {string} unit - 价格单位
   * @returns {string} 格式化后的价格字符串
   */
  const formatPrice = useCallback((price: string | number, unit: string): string => {
    if (price === 0 || price === '0') {
      return unit.includes('免费') ? unit : `免费${unit}`
    }
    return `${price}${unit}`
  }, [])

  /**
   * 格式化费率显示
   * 直接显示费率数值，因为数据中已经是百分比形式
   *
   * @param {number} rate - 费率（已经是百分比数值）
   * @returns {string} 格式化后的费率字符串
   */
  const formatRate = useCallback((rate: number): string => {
    return `${rate}%`
  }, [])

  /**
   * 渲染产品特性标签
   * 将产品特性数组渲染为标签列表
   *
   * @param {string[]} features - 产品特性数组
   * @returns {React.ReactElement[]} 特性标签元素数组
   */
  const renderFeatures = useCallback((features: string[]) => {
    return features.map((feature, index) => (
      <span
        key={`feature-${index}`}
        className="inline-block rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
      >
        {feature}
      </span>
    ))
  }, [])

  /**
   * 渲染支付方式标签
   * 将支付方式数组渲染为标签列表
   *
   * @param {string[]} paymentMethods - 支付方式数组
   * @returns {React.ReactElement[]} 支付方式标签元素数组
   */
  const renderPaymentMethods = useCallback((paymentMethods: string[]) => {
    return paymentMethods.map((method, index) => (
      <span
        key={`payment-${index}`}
        className="inline-block rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-700/10"
      >
        {method}
      </span>
    ))
  }, [])

  /**
   * 渲染单个产品卡片
   * 包含产品图片、信息、价格、特性等完整内容
   * 针对5列布局优化了卡片尺寸和间距
   * 参考copy文件设计，增强视觉效果和交互体验
   *
   * @param {ServerProduct} product - 产品数据对象
   * @param {number} index - 产品在列表中的索引，用于动画延迟
   * @returns {React.ReactElement} 单个产品卡片元素
   */
  const renderProductCard = useCallback((product: ServerProduct, index: number = 0) => (
    <div
      key={`product-${product.id}`}
      className="group relative overflow-hidden outline-1 outline-gray-200 transition-all duration-200 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-2 sm:p-3 xl:p-4 flex flex-col h-full min-h-[280px] sm:min-h-[320px] md:min-h-[360px]"
    >
      {/* 产品图片容器 - 增强视觉效果 */}
      <div className="relative mb-2 sm:mb-4 md:mb-5">
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 shadow-inner transition-all duration-500 aspect-square">
          <Image
            src={product.imageUrl || '/images/product/云银扫码盒.jpg'}
            alt={product.name}
            width={300}
            height={300}
            className="w-full h-full object-cover"
            unoptimized
          />

          {/* 热门标签 - 蓝色简洁样式 */}
          {product.isHot && (
            <div className="absolute top-1 left-1 sm:top-2 sm:left-2">
              <span className="inline-flex items-center bg-blue-600 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium text-white shadow-lg">
                热门
              </span>
            </div>
          )}

          {/* 新品标签 */}
          {product.isNew && (
            <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
              <span className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-600 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full text-xs font-medium text-white shadow-xl transform hover:scale-110 transition-transform duration-300 border border-green-400">
                <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                新品
              </span>
            </div>
          )}

          {/* 产品类型标签 - 增强毛玻璃效果 */}
          <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-black/70 backdrop-blur-md text-white text-xs px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full shadow-lg border border-white/20 transform hover:scale-105 transition-all duration-300">
            {product.type}
          </div>
        </div>
      </div>

      {/* 产品信息区域 - 优化移动端字体 */}
      <div className="flex-1 flex flex-col">
        <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 group-hover:text-blue-500 transition-colors duration-200 line-clamp-2 leading-tight mb-2">
          {product.name}
        </h3>

        {/* 支付方式标签和品牌信息 - 移动端精简 */}
        <div className="flex flex-wrap gap-1 mb-2">
          {product.paymentMethods.slice(0, 2).map((method, index) => {
            // 为不同支付方式分配简洁颜色
            const getPaymentMethodStyle = (method: string) => {
              switch (method) {
                case '信用卡':
                case '刷卡':
                  return 'bg-blue-50 text-blue-600';
                case '借记卡':
                case '插卡':
                  return 'bg-purple-50 text-purple-600';
                case '微信':
                  return 'bg-green-50 text-green-600';
                case '支付宝':
                  return 'bg-orange-50 text-orange-600';
                case '云闪付':
                case 'NFC':
                  return 'bg-cyan-50 text-cyan-600';
                case '花呗':
                  return 'bg-indigo-50 text-indigo-600';
                case '数字人民币':
                  return 'bg-red-50 text-red-600';
                case '扫码':
                  return 'bg-teal-50 text-teal-600';
                case '非接':
                  return 'bg-pink-50 text-pink-600';
                case '会员卡':
                  return 'bg-amber-50 text-amber-600';
                case '银联二维码':
                  return 'bg-slate-50 text-slate-600';
                default:
                  return 'bg-gray-50 text-gray-600';
              }
            };

            return (
              <span
                key={index}
                className={`px-1.5 py-0.5 text-xs rounded-full transition-colors duration-200 ${getPaymentMethodStyle(method)}`}
              >
                {method}
              </span>
            );
          })}
          {product.paymentMethods.length > 2 && (
            <span className="px-1.5 py-0.5 bg-gray-50 text-gray-600 text-xs rounded-full transition-colors duration-200">
              +{product.paymentMethods.length - 2}
            </span>
          )}
          {/* 品牌信息 */}
          <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full transition-colors duration-200">
            {product.brand}
          </span>
        </div>

        {/* 费率信息显示区域 - 简洁标签样式 */}
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-emerald-50 text-emerald-700 text-xs rounded-full font-medium">
            扫码 {formatRate(product.qrCodeRate)}
          </span>
          <span className="inline-flex items-center gap-1 px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full font-medium">
            刷卡 {formatRate(product.cardRate)}
          </span>
        </div>

        {/* 价格信息 - 突出显示 */}
        <div className="mb-3">
          <div className="flex items-baseline gap-2">
            <span className="text-base sm:text-lg md:text-xl font-bold text-red-500 leading-none">
              ¥{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-gray-400 line-through">
                ¥{product.originalPrice}
              </span>
            )}
          </div>
          {product.unit && product.unit.includes('月费') && (
             <p className="mt-1 text-xs text-gray-500">
               {product.unit}
             </p>
           )}
        </div>

        {/* 特色功能标签 - 精简显示 */}
        {product.features && product.features.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-1">
              {product.features.slice(0, 2).map((feature, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-600 text-xs rounded-full font-medium transition-all duration-200 hover:shadow-sm"
                >
                  {feature}
                </span>
              ))}
              {product.features.length > 2 && (
                <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
                  +{product.features.length - 2}
                </span>
              )}
            </div>
          </div>
        )}

        {/* 活动说明 - 优化样式 */}
        {product.activityNote && (
          <div className="mb-3">
            <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-orange-50 to-amber-50 p-2 border border-orange-100">
              <p className="text-xs text-orange-700 font-medium leading-relaxed">
                {product.activityNote}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* 操作按钮组 - 使用双弹窗二维码组件 */}
      <div className="mt-auto pt-3 border-t border-gray-200">
        <DualQRCodeButtonGroup
          containerClassName="gap-2 w-full"
          leftButton={{
            text: '免费申请',
            className: '!w-full !min-w-0 !max-w-none flex-1 inline-flex items-center justify-center gap-0.5 px-2 py-1.5 sm:px-3 sm:py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-200 text-xs sm:text-sm font-medium',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            )
          }}
          rightButton={{
            text: '联系客服',
            className: '!w-full !min-w-0 !max-w-none flex-1 inline-flex items-center justify-center gap-0.5 px-2 py-1.5 sm:px-3 sm:py-2 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200 text-xs sm:text-sm font-medium border border-gray-200',
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            )
          }}
          leftQRCode={{
            src: '/images/contact/userhlc.png',
            title: '客服微信',
            description: '扫码添加客服微信'
          }}
          rightQRCode={{
            src: '/images/contact/gzh.png',
            title: '微信公众号',
            description: '关注获取最新资讯'
          }}
          title="联系我们"
          description="扫描下方二维码获取产品信息或联系客服"
        />
      </div>
    </div>
  ), [formatPrice, formatRate])

  return (
    <div className={`w-full max-w-[1800px] mx-auto px-4 ${className}`}>
      {/* 标题区域 - 优化移动端显示 */}
      <div className="mt-[100px] mb-6 sm:mb-8 xl:mb-12 text-center px-4">
        <h2 className="text-2xl sm:text-3xl xl:text-5xl font-black text-gray-900 leading-tight tracking-tight">
          热门产品推荐
        </h2>
        <p className="mt-3 sm:mt-4 xl:mt-6 text-base sm:text-lg xl:text-xl text-gray-600 leading-relaxed font-medium max-w-2xl mx-auto">
          精选优质支付产品，助力您的业务发展
        </p>
      </div>

      {/* 产品类别切换 - 统一梯形标签设计 */}
      <div className="mb-8">
        <div className="relative overflow-hidden border-b-2 border-blue-600">
          <div className="flex overflow-x-auto scrollbar-hide">
            {[
              { id: 'server', name: '所有产品', count: '34+', desc: '全部产品' },
              { id: 'qrCode', name: '码牌台卡', count: '8+', desc: '桌面收款' },
              { id: 'electronicPos', name: '电签POS', count: '6+', desc: '移动支付' },
              { id: 'smartScreen', name: '智能屏', count: '4+', desc: '智能终端' },
              { id: 'cloudSpeaker', name: '云音箱', count: '4+', desc: '语音播报' },
              { id: 'scanCode', name: '扫码设备', count: '3+', desc: '扫码收款' },
              { id: 'stickerCode', name: '贴纸码', count: '3+', desc: '便携收款' },
              { id: 'nfcTouch', name: 'NFC设备', count: '2+', desc: '碰一碰付' },
              { id: 'bigPos', name: '大型POS', count: '2+', desc: '商超收银' },
              { id: 'promotion', name: '热销推荐', count: '5+', desc: '精选爆款' }
            ].map((category, index) => (
              <button
                key={category.id}
                onClick={() => {
                  if (['server', 'promotion'].includes(category.id)) {
                    handleCategoryChange(category.id as 'server' | 'cloudvm' | 'promotion')
                  } else {
                    setSelectedCategory(category.id as ProductGroupKey)
                  }
                }}
                className={`
                  relative flex-shrink-0 cursor-pointer transition-all duration-300
                  ${selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                    : 'bg-gray-50 hover:bg-gray-100'
                  }
                `}
                style={{
                  clipPath: index === 0
                    ? 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 0 100%)'
                    : (index === 9
                        ? 'polygon(8px 0, 100% 0, 100% 100%, 0 100%)'
                        : 'polygon(8px 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'),
                  marginRight: index === 9 ? '0' : '-8px',
                  zIndex: 10 - index,
                  minWidth: '120px',
                  width: 'auto',
                  flex: '1 1 0%'
                }}
              >
                <div className="flex flex-col items-center justify-center w-full px-2 py-2 sm:px-3 sm:py-2.5 md:px-4 md:py-3 lg:px-5 lg:py-3.5 relative">
                  <div className="flex items-center gap-1 sm:gap-1.5 mb-1">
                    <span className={`
                        text-xs sm:text-sm md:text-base font-medium transition-colors duration-200
                        ${selectedCategory === category.id ? 'text-white' : 'text-gray-600'}
                      `}>
                      {category.name}
                    </span>
                    <span className={`
                      text-xs transition-colors duration-300 px-1.5 py-0.5 rounded-full
                      ${selectedCategory === category.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}
                    `}>
                      {category.count}
                    </span>
                  </div>
                  <span className={`
                    text-xs transition-colors duration-200 opacity-75
                    ${selectedCategory === category.id ? 'text-white' : 'text-gray-500'}
                  `}>
                    {category.desc}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 产品网格 - 优化响应式布局 */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 sm:gap-3 md:gap-4 xl:gap-5 px-2 sm:px-4 md:px-0">
        {currentProducts.map(renderProductCard)}
      </div>

      {/* 加载更多按钮 - 移动端友好 */}
      <div className="mt-6 sm:mt-8 xl:mt-10 text-center">
        <button className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white text-sm sm:text-base font-medium rounded-lg hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 active:scale-95">
          <span>查看更多产品</span>
          <svg className="h-4 w-4 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>

      {/* 活动卡片 - 移动到底部 */}
      {showActivityCard && (
        <div className="mt-8">
          <ActivityCard />
        </div>
      )}
    </div>
  )
})

// 设置组件显示名称，便于调试
Cardprice.displayName = 'Cardprice'

export default Cardprice
