'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import {
  ShoppingCartIcon,
  PlayIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'

/**
 * 产品数据接口
 * @interface Product
 */
interface Product {
  image: string
  title: string
  subtitle: string
  description: string
  features: string[]
  price: number
  originalPrice: number
  link: string
  rating: number
  sales: number
  buyLink: string
}

/**
 * 支付设备产品数据
 */
const products: Product[] = [
  {
    image: '/images/product/海多财电签(循环版).jpg',
    title: '海多财电签',
    subtitle: '[循环版]',
    description:
      '智能电签POS机 | 循环版本 | 支持刷卡、插卡、挥卡、扫码等多种支付方式，满足各种收款需求...',
    features: ['循环版本', '多种支付', '智能电签', '便携设计'],
    price: 299,
    originalPrice: 399,
    link: '/demo',
    rating: 4.8,
    sales: 1256,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/product/汇来掌柜(扫码盒）.jpg',
    title: '汇来掌柜扫码盒',
    subtitle: '[扫码支付]',
    description:
      '智能扫码盒 | 支持微信、支付宝扫码支付 | 语音播报，到账提醒，让收款更安心...',
    features: ['扫码支付', '语音播报', '到账提醒', '智能收款'],
    price: 199,
    originalPrice: 299,
    link: '/demo',
    rating: 4.9,
    sales: 2103,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/product/汇来掌柜台卡.jpg',
    title: '汇来掌柜台卡',
    subtitle: '[台卡收款]',
    description:
      '智能台卡 | 桌面收款神器 | 支持扫码支付，美观大方，适合餐厅、咖啡厅等场所...',
    features: ['台卡收款', '桌面神器', '美观大方', '扫码支付'],
    price: 159,
    originalPrice: 229,
    link: '/demo',
    rating: 4.7,
    sales: 1578,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/product/汇来掌柜音箱.jpg',
    title: '汇来掌柜音箱',
    subtitle: '[音箱收款]',
    description:
      '智能音箱收款 | 语音播报 | 支持扫码支付，音质清晰，播报及时，收款更放心...',
    features: ['音箱收款', '语音播报', '音质清晰', '扫码支付'],
    price: 299,
    originalPrice: 399,
    link: '/demo',
    rating: 4.8,
    sales: 1432,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/product/惠客收 音箱.jpg',
    title: '惠客收音箱',
    subtitle: '[智能音箱]',
    description:
      '惠客收智能音箱 | 收款播报 | 支持多种支付方式，音质优美，播报清晰，商户首选...',
    features: ['智能音箱', '收款播报', '音质优美', '多种支付'],
    price: 279,
    originalPrice: 359,
    link: '/demo',
    rating: 4.6,
    sales: 989,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/product/拉多财大POS循环版.jpg',
    title: '拉多财大POS',
    subtitle: '[循环版]',
    description:
      '大屏智能POS机 | 循环版本 | 功能强大，支持刷卡、扫码、打印小票等全方位收款服务...',
    features: ['大屏POS', '循环版本', '功能强大', '全方位收款'],
    price: 599,
    originalPrice: 799,
    link: '/demo',
    rating: 4.9,
    sales: 1165,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
  {
    image: '/images/product/拉多财电签循环版.jpg',
    title: '拉多财电签',
    subtitle: '[循环版]',
    description:
      '智能电签POS | 循环版本 | 小巧便携，功能齐全，支持多种支付方式，商户收款利器...',
    features: ['智能电签', '循环版本', '小巧便携', '功能齐全'],
    price: 319,
    originalPrice: 419,
    link: '/demo',
    rating: 4.8,
    sales: 1318,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
  },
]

/**
 * 产品卡片组件
 * 展示单个产品的详细信息，包括图片、标题、价格、评分等
 * @param product - 产品数据对象
 * @returns {JSX.Element} 产品卡片组件
 */
function ProductCard({ product }: { product: Product }) {
  const [showQRCodeModal, setShowQRCodeModal] = useState(false)

  /**
   * 处理在线演示按钮点击事件
   * 弹出客服二维码模态框
   */
  const handleDemoClick = () => {
    setShowQRCodeModal(true)
  }

  /**
   * 关闭客服二维码模态框
   */
  const handleCloseModal = () => {
    setShowQRCodeModal(false)
  }

  return (
    <div className="group relative overflow-hidden border border-gray-200 bg-white shadow-sm">
      {/* 产品图片区域 */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={225}
          className="h-full w-full object-cover object-center"
          unoptimized
        />
        {/* 折扣标签 */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
            省{product.originalPrice - product.price}元
          </span>
        </div>
      </div>

      {/* 产品信息区域 */}
      <div className="p-6">
        {/* 产品标题和副标题 */}
        <div className="mb-3">
          <h3 className="mb-1 line-clamp-2 text-lg font-semibold text-gray-900">
            {product.title}
          </h3>
          <p className="text-sm font-medium text-blue-600">
            {product.subtitle}
          </p>
        </div>

        {/* 产品描述 */}
        <p className="mb-4 line-clamp-2 text-sm text-gray-600">
          {product.description}
        </p>

        {/* 产品特性标签 */}
        <div className="mb-4 flex flex-wrap gap-1">
          {product.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* 价格信息 */}
        <div className="mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-bold text-gray-900">
              ¥{product.price.toLocaleString()}
            </span>
            <span className="text-sm text-gray-500 line-through">
              ¥{product.originalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* 评分和销量 */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex items-center gap-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-4 w-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm text-gray-600">{product.rating}</span>
          </div>
          <span className="text-sm text-gray-500">已售{product.sales}套</span>
        </div>

        {/* 操作按钮 */}
        <div className="flex gap-3">
          <button
            onClick={handleDemoClick}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700"
          >
            立即领取
          </button>
          <button
            onClick={handleDemoClick}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            联系客服
          </button>
        </div>
      </div>

      {/* 客服二维码模态框，参考 Top.tsx 的设计 */}
      <AnimatePresence>
        {showQRCodeModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            {/* 背景遮罩 */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            {/* 模态框内容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative mx-4 w-full max-w-sm overflow-hidden bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center bg-gray-100 transition-colors hover:bg-gray-200"
                aria-label="关闭"
              >
                <XMarkIcon className="h-4 w-4 text-gray-600" />
              </button>

              {/* 内容区域 */}
              <div className="p-8 text-center">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  联系客服
                </h3>
                <p className="mb-6 text-sm text-gray-600">
                  扫描二维码添加客服微信获取详细演示
                </p>

                {/* 二维码 */}
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <Image
                      src="/images/contact/weixin.png"
                      alt="客服二维码"
                      width={192}
                      height={192}
                      className="h-48 w-48 border border-gray-200 object-contain shadow-lg"
                      unoptimized
                    />
                  </div>
                </div>

                {/* 提示文字 */}
                <p className="text-xs text-gray-500">长按二维码保存到相册</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/**
 * 产品展示区域组件
 * 展示开源电商系统的核心产品系列
 * @returns {JSX.Element} 产品展示区域组件
 */
export function ProductsSection() {
  return (
    <div className="bg-gray-50">
      <Container className="py-16 sm:py-24">
        {/* 区域标题 */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            智能支付设备
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            专业的支付设备解决方案，从电签POS到智能音箱，从扫码盒到台卡收款，满足不同场景的收款需求
          </p>
        </div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

        {/* 底部行动召唤 */}
        <div className="mt-16 text-center">
          <div className="rounded-none border border-gray-200 bg-white p-8 shadow-sm">
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              需要专业的支付设备解决方案？
            </h3>
            <p className="mx-auto mb-6 max-w-xl text-gray-600">
              我们提供专业的支付设备和技术支持服务，帮助您快速搭建符合业务需求的收款系统
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                variant="solid"
                color="blue"
                className="rounded-none px-8 py-3"
                onClick={() => window.open('https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all', '_blank')}
              >
                联系我们
              </Button>
              <Button
                variant="outline"
                color="slate"
                className="rounded-none px-8 py-3"
                onClick={() => window.open('/demo', '_blank')}
              >
                查看更多设备
              </Button>
            </div>
          </div>
        </div>
      </Container>
      <style jsx global>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
