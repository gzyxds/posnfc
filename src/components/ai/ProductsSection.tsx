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
 * 产品数据配置
 * 展示艺创AI的核心产品系列
 */
const products: Product[] = [
  {
    image: '/images/product/saas.svg',
    title: '数字分身IP数字人SaaS系统',
    subtitle: '[PHP源码版]',
    description:
      '为企业主、个人博主打造短视频IP的数字人聊天系统，支持真人音+形象定制...',
    features: ['声音克隆', '形象定制', '视频生成', 'AI交谈', '热点话题'],
    price: 4999,
    originalPrice: 6800,
    link: '/demo',
    rating: 4.9,
    sales: 2698,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20',
  },
  {
    image: '/images/product/work.svg',
    title: '企业级全能AI知识库系统',
    subtitle: '[PHP源码版]',
    description:
      '全能AI知识库系统(PHP版，基于前后端分离架构)以及Vue3、uni-app...',
    features: ['多模式输入', '向量检索', '智能问答', '多端支持'],
    price: 6600,
    originalPrice: 9800,
    link: '/demo',
    rating: 4.9,
    sales: 8563,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20',
  },
  {
    image: '/images/product/ai.svg',
    title: '艺创AI智能聊天绘画系统',
    subtitle: '[PHP源码版]',
    description:
      '基于前后端分离架构以及Vue3、uni-app、ThinkPHP6.x、PHP8.0技术栈开发...',
    features: ['Python架构', '向量检索', '多源接入', '智能问答'],
    price: 2999,
    originalPrice: 3800,
    link: '/demo',
    rating: 4.9,
    sales: 15632,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20',
  },
  {
    image: '/images/product/lw.svg',
    title: 'Paper-论文创作写作系统',
    subtitle: '[全新升级]',
    description: '你只需要输入论文关键词，AI即可快速为您生成论文大纲...',
    features: ['期刊论文', '科普文章', '学生作业', '商业报告'],
    price: 3200,
    originalPrice: 4698,
    link: '/demo',
    rating: 4.8,
    sales: 5698,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20',
  },
  {
    image: '/images/product/saas.svg',
    title: '全能AI知识库系统Python源码版',
    subtitle: '[Python源码版]',
    description:
      '基于Python开发的企业级AI知识库系统，高性能、高并发，支持大规模部署...',
    features: ['Python架构', '高并发', '企业级', '多端支持'],
    price: 0,
    originalPrice: 0,
    link: '/demo',
    rating: 4.9,
    sales: 3658,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20',
  },
  {
    image: '/images/product/saas.svg',
    title: '艺创AI数字分身2.0-Pro版',
    subtitle: '[PHP源码版]',
    description:
      '基于Java开发的AI聊天绘画系统，高性能架构，支持多种绘画模型和聊天场景...',
    features: ['Java架构', '多模型支持', '高性能', '场景定制'],
    price: 6600,
    originalPrice: 9800,
    link: '/demo',
    rating: 4.8,
    sales: 5635,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20',
  },
  {
    image: '/images/product/ai.svg',
    title: '艺创AI聊天绘画系统Java',
    subtitle: '[Java源码版]',
    description:
      '实现了AI对话+AI绘画的融合使用，系统功能特色：AI画图对话、AI创作模型...',
    features: ['AI绘画', '智能聊天', '场景定制', '一键部署'],
    price: 2999,
    originalPrice: 3800,
    link: '/demo',
    rating: 4.7,
    sales: 2368,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20',
  },
  {
    image: '/images/product/lw.svg',
    title: '艺创AI论文写作系统',
    subtitle: '[PHP源码版]',
    description:
      '10分钟可生成几万字长文的系统，只需要输入主题关键词，AI即可快速为您生...',
    features: ['快速生成文稿', '一键生成论文', '可下载资料', '走改订通知'],
    price: 3200,
    originalPrice: 4695,
    link: '/demo',
    rating: 4.6,
    sales: 6358,
    buyLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=61&spg_id=20',
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
              onClick={() => window.open(product.link, '_blank')}
              className="group inline-flex flex-1 items-center justify-center gap-2 border border-gray-300 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none"
              aria-label={`查看${product.title}的在线演示`}
            >
              <PlayIcon className="h-4 w-4 text-gray-500 transition-colors group-hover:text-blue-600" />
              <span className="transition-colors group-hover:text-gray-900">
                查看演示
              </span>
            </button>

            <button
              onClick={() => window.open(product.buyLink, '_blank')}
              className="group inline-flex flex-1 transform items-center justify-center gap-2 bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-md transition-all duration-200 hover:scale-[1.02] hover:bg-blue-700 hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none active:scale-[0.98]"
              aria-label={`购买${product.title}`}
            >
              <ShoppingCartIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
              <span>{product.price > 0 ? '立即购买' : '免费获取'}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

/**
 * 产品展示区域组件
 * 展示艺创AI的核心产品系列
 * @returns {JSX.Element} 产品展示区域组件
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
            产品中心
          </h2>
          <p className="mb-4 text-2xl leading-tight font-bold text-gray-900 sm:mb-6 sm:text-3xl md:text-4xl lg:text-5xl dark:text-white">
            艺创AI产品矩阵
          </p>
          <p className="mx-auto max-w-3xl px-4 text-base leading-relaxed text-gray-600 sm:px-0 sm:text-lg dark:text-gray-400">
            为不同行业和场景提供专业的AI解决方案，助力企业数字化转型
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
