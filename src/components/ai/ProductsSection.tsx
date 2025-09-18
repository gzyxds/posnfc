'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import {
  ShoppingCartIcon,
  PlayIcon,
  StarIcon,
} from '@heroicons/react/24/outline'

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
 * 热门合作品牌数据配置
 * 展示银盛、拉卡拉、中付、乐刷等热门POS机品牌
 */
const products: Product[] = [
  {
    image: '/images/product/产品展示.png',
    title: '银盛POS机官网',
    subtitle: '[电签版EPOS]',
    description:
      '银盛支付官方POS机，0.38%永不+3费率，4G秒到账，央行牌照一清机，安全可靠...',
    features: ['0.38%费率', '4G秒到', '央行牌照', '一清机', '电签版'],
    price: 299,
    originalPrice: 399,
    link: '/brand/yinsheng',
    rating: 4.9,
    sales: 15698,
    buyLink: '/contact',
  },
  {
    image: '/images/product/产品展示.png',
    title: '拉卡拉POS机办理',
    subtitle: '[智能POS+收款码]',
    description:
      '拉卡拉智能POS机，全渠道支付解决方案，SaaS生态系统，支持数字人民币...',
    features: ['全渠道支付', 'SaaS生态', '数字人民币', '智能POS', '收款码'],
    price: 349,
    originalPrice: 499,
    link: '/brand/lakala',
    rating: 4.9,
    sales: 28563,
    buyLink: '/contact',
  },
  {
    image: '/images/product/产品展示.png',
    title: '中付智能POS机',
    subtitle: '[智能双屏POS]',
    description:
      '中付支付智能双屏POS机，安卓13系统，会员营销一体化，支持多种支付方式...',
    features: ['安卓13系统', '双屏显示', '会员营销', '多种支付', '智能POS'],
    price: 399,
    originalPrice: 599,
    link: '/brand/zhongfu',
    rating: 4.8,
    sales: 12632,
    buyLink: '/contact',
  },
  {
    image: '/images/product/产品展示.png',
    title: '乐刷电签POS机',
    subtitle: '[小POS+码牌]',
    description: '乐刷电签POS机，激活返299元，万12分润，小巧便携，支持多种支付场景...',
    features: ['激活返299', '万12分润', '小巧便携', '电签版', '多场景'],
    price: 199,
    originalPrice: 299,
    link: '/brand/leshua',
    rating: 4.7,
    sales: 9698,
    buyLink: '/contact',
  },
  {
    image: '/images/product/产品展示.png',
    title: '汇莱米聚合码牌',
    subtitle: '[聚合码牌]',
    description:
      '汇莱米聚合码牌，一张码全渠道收款，语音播报，支持微信、支付宝、银联等...',
    features: ['一码全收', '语音播报', '全渠道', '聚合支付', '便携码牌'],
    price: 99,
    originalPrice: 199,
    link: '/contact',
    rating: 4.6,
    sales: 5658,
    buyLink: '/contact',
  },
  {
    image: '/images/product/产品展示.png',
    title: '合利宝移动POS机',
    subtitle: '[移动POS]',
    description:
      '合利宝移动POS机，免流量卡，支持数字人民币，4G网络，移动收款更便捷...',
    features: ['免流量卡', '数字人民币', '4G网络', '移动收款', '便捷支付'],
    price: 259,
    originalPrice: 359,
    link: '/contact',
    rating: 4.5,
    sales: 7635,
    buyLink: '/contact',
  },
  {
    image: '/images/product/产品展示.png',
    title: '热门品牌联合办理',
    subtitle: '[多品牌选择]',
    description:
      '多个热门POS机品牌联合办理，一站式服务，总部直签，一级代理，分润万16...',
    features: ['多品牌选择', '总部直签', '一级代理', '分润万16', '一站服务'],
    price: 0,
    originalPrice: 0,
    link: '/contact',
    rating: 4.8,
    sales: 18368,
    buyLink: '/contact',
  },
  {
    image: '/images/product/产品展示.png',
    title: '餐饮SaaS生态联名方案',
    subtitle: '[行业解决方案]',
    description:
      '拉卡拉+356家平台联名，5万亿餐饮市场共拓，提供完整的餐饮行业支付解决方案...',
    features: ['356家平台', '餐饮专用', '5万亿市场', '完整方案', 'SaaS生态'],
    price: 599,
    originalPrice: 899,
    link: '/solution/restaurant',
    rating: 4.7,
    sales: 3358,
    buyLink: '/contact',
  },
]

/**
 * 产品卡片组件
 * 展示单个产品的详细信息
 * @param {Product} product - 产品数据
 * @param {number} index - 产品索引
 * @returns {JSX.Element} 产品卡片组件
 */
function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
    >
      {/* 产品图片 */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          width={400}
          height={225}
          className="h-full w-full object-cover object-center"
          unoptimized
          onError={(e) => {
            const target = e.target as HTMLImageElement
            target.src = '/images/product/placeholder.svg'
          }}
        />
        {product.price === 0 && (
          <div className="absolute top-2 left-2 bg-green-500 px-2 py-1 text-xs font-medium text-white sm:top-4 sm:left-4 sm:px-3 sm:py-1 sm:text-sm">
            免费
          </div>
        )}
      </div>

      {/* 产品内容 */}
      <div className="p-4 sm:p-5 lg:p-6">
        {/* 标题和副标题 */}
        <div className="mb-3 sm:mb-4">
          <h3 className="mb-2 line-clamp-2 text-base leading-tight font-bold text-gray-900 sm:text-lg dark:text-white">
            {product.title}
          </h3>
          <p className="text-xs font-medium text-[#0055ff] sm:text-sm">
            {product.subtitle}
          </p>
        </div>

        {/* 评分和销量 */}
        <div className="mb-3 flex items-center justify-between sm:mb-4">
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-3 w-3 sm:h-4 sm:w-4 ${
                    i < Math.floor(product.rating)
                      ? 'fill-current text-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-xs text-gray-600 sm:text-sm dark:text-gray-400">
              {product.rating}
            </span>
          </div>
          <span className="text-xs text-gray-500 sm:text-sm dark:text-gray-400">
            已售 {product.sales}
          </span>
        </div>

        {/* 产品描述 */}
        <p className="mb-3 line-clamp-2 text-xs leading-relaxed text-gray-600 sm:mb-4 sm:line-clamp-3 sm:text-sm dark:text-gray-400">
          {product.description}
        </p>

        {/* 功能标签 */}
        <div className="mb-4 flex flex-wrap gap-1.5 sm:mb-6 sm:gap-2">
          {product.features.slice(0, 4).map((feature, idx) => (
            <span
              key={idx}
              className="bg-gray-100 px-2 py-0.5 text-xs whitespace-nowrap text-gray-700 sm:py-1 dark:bg-gray-700 dark:text-gray-300"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* 价格和操作区域 */}
        <div className="space-y-4">
          {/* 价格信息 */}
          <div className="flex items-center justify-center space-x-2 sm:justify-start">
            {product.price > 0 ? (
              <>
                <span className="text-xl font-bold text-[#0055ff] sm:text-2xl lg:text-3xl">
                  ¥{product.price.toLocaleString()}
                </span>
                {product.originalPrice > product.price && (
                  <>
                    <span className="text-sm text-gray-500 line-through sm:text-base">
                      ¥{product.originalPrice.toLocaleString()}
                    </span>
                    <span className="inline-flex items-center bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                      省¥
                      {(product.originalPrice - product.price).toLocaleString()}
                    </span>
                  </>
                )}
              </>
            ) : (
              <span className="text-xl font-bold text-green-500 sm:text-2xl lg:text-3xl">
                免费体验
              </span>
            )}
          </div>

          {/* 操作按钮 */}
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-3">
            <button
              onClick={() => window.open(product.buyLink, '_blank')}
              className="group inline-flex flex-1 transform items-center justify-center gap-2 bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:scale-[0.98]"
              aria-label={`立即领取${product.title}`}
            >
              <svg
                className="h-4 w-4 transition-transform group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span>立即领取</span>
            </button>

            <button
              onClick={() => window.open(product.link, '_blank')}
              className="group inline-flex flex-1 items-center justify-center gap-2 border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              aria-label={`联系客服了解${product.title}`}
            >
              <svg
                className="h-4 w-4 text-gray-500 transition-colors group-hover:text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
              <span className="transition-colors group-hover:text-gray-900">
                联系客服
              </span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * 热门合作品牌展示区域组件
 * 展示银盛、拉卡拉、中付、乐刷等热门POS机品牌
 * @returns {JSX.Element} 热门合作品牌展示区域组件
 */
export function ProductsSection() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20 xl:py-24 dark:bg-gray-900">
      <Container>
        {/* 标题区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8 text-center sm:mb-12 lg:mb-16"
        >
          <h2 className="mb-3 text-sm font-semibold text-[#0055ff] sm:mb-4 sm:text-base">
            热门合作品牌
          </h2>
          <p className="mb-4 text-2xl leading-tight font-bold text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
            POS机品牌矩阵
          </p>
          <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-gray-600 sm:px-0 sm:text-lg dark:text-gray-400">
            银盛、拉卡拉、中付、乐刷等热门品牌，总部直签，一级代理，为商户提供专业的支付解决方案
          </p>
        </motion.div>

        {/* 产品网格 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} index={index} />
          ))}
        </div>
      </Container>
    </section>
  )
}
