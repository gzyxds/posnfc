'use client'

/**
 * 轻量应用服务器专区产品展示组件
 * 完全按照参考图片设计，实现云服务器产品卡片布局
 */

import { useState } from 'react'

/**
 * 服务器产品数据类型定义
 */
interface ServerProduct {
  id: number
  name: string
  subtitle: string
  specs: {
    cpu: string
    memory: string
    storage: string
    bandwidth: string
  }
  regions: string[]
  duration: string
  originalPrice: number
  currentPrice: number
  discount: string
  isHot?: boolean
  isRecommended?: boolean
}

/**
 * 轻量应用服务器产品列表数据
 */
const serverProducts: ServerProduct[] = [
  {
    id: 1,
    name: '轻量应用服务器',
    subtitle: '4核4G3M',
    specs: {
      cpu: '4核4G3M',
      memory: '4GB',
      storage: '80GB SSD',
      bandwidth: '3Mbps',
    },
    regions: ['上海', '北京', '广州', '南京'],
    duration: '1年',
    originalPrice: 396,
    currentPrice: 79,
    discount: '1折',
    isHot: true,
  },
  {
    id: 2,
    name: '轻量应用服务器',
    subtitle: '2核2G3M',
    specs: {
      cpu: '2核2G3M',
      memory: '2GB',
      storage: '40GB SSD',
      bandwidth: '3Mbps',
    },
    regions: ['上海', '广州', '北京'],
    duration: '1年',
    originalPrice: 640,
    currentPrice: 68,
    discount: '1.3折',
  },
  {
    id: 3,
    name: '轻量应用服务器',
    subtitle: '2核4G6M',
    specs: {
      cpu: '2核4G6M',
      memory: '4GB',
      storage: '100GB SSD',
      bandwidth: '6Mbps',
    },
    regions: ['上海', '广州', '北京'],
    duration: '3年',
    originalPrice: 2700,
    currentPrice: 528,
    discount: '2折',
  },
  {
    id: 4,
    name: '轻量应用服务器',
    subtitle: '4核8G10M',
    specs: {
      cpu: '4核8G10M',
      memory: '8GB',
      storage: '180GB SSD',
      bandwidth: '10Mbps',
    },
    regions: ['上海', '广州', '北京', '成都', '南京'],
    duration: '1年',
    originalPrice: 2620,
    currentPrice: 630,
    discount: '2.5折',
    isRecommended: true,
  },
  {
    id: 5,
    name: '轻量应用服务器',
    subtitle: '4核8G12M',
    specs: {
      cpu: '4核8G12M',
      memory: '8GB',
      storage: '200GB SSD',
      bandwidth: '12Mbps',
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 230,
    currentPrice: 161,
    discount: '7折',
  },
  {
    id: 6,
    name: '轻量应用服务器',
    subtitle: '4核16G14M',
    specs: {
      cpu: '4核16G14M',
      memory: '16GB',
      storage: '300GB SSD',
      bandwidth: '14Mbps',
    },
    regions: ['广州', '上海', '北京'],
    duration: '1月',
    originalPrice: 325,
    currentPrice: 227.5,
    discount: '7折',
  },
  {
    id: 7,
    name: '轻量应用服务器',
    subtitle: '8核16G18M',
    specs: {
      cpu: '8核16G18M',
      memory: '16GB',
      storage: '500GB SSD',
      bandwidth: '18Mbps',
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 600,
    currentPrice: 350,
    discount: '7折',
  },
  {
    id: 8,
    name: '轻量应用服务器',
    subtitle: '8核32G22M',
    specs: {
      cpu: '8核32G22M',
      memory: '32GB',
      storage: '800GB SSD',
      bandwidth: '22Mbps',
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 665,
    currentPrice: 465.5,
    discount: '7折',
  },
]

/**
 * 轻量应用服务器专区产品展示组件
 *
 * 功能特点：
 * - 完全按照参考图片设计的云服务器产品卡片布局
 * - 4列网格布局，每行显示4个产品卡片
 * - 包含服务器规格、地域、价格、折扣等完整信息
 * - 支持热门标签和推荐标签显示
 * - 数量选择器和购买按钮交互
 * - 响应式设计，适配不同屏幕尺寸
 *
 * @returns {JSX.Element} 轻量应用服务器产品展示组件
 */
export default function ServerProductGrid() {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>(
    serverProducts.reduce((acc, product) => ({ ...acc, [product.id]: 1 }), {}),
  )

  /**
   * 更新产品数量
   * @param {number} productId - 产品ID
   * @param {number} newQuantity - 新数量
   */
  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity >= 1) {
      setQuantities((prev) => ({ ...prev, [productId]: newQuantity }))
    }
  }

  /**
   * 添加到购物车处理函数
   * @param {number} productId - 产品ID
   */
  const handleAddToCart = (productId: number) => {
    console.log(
      `添加产品 ${productId} 到购物车，数量：${quantities[productId]}`,
    )
    window.location.href = 'https://console.cloudcvm.com/cart/goodsList.htm'
  }

  /**
   * 立即购买处理函数
   * @param {number} productId - 产品ID
   */
  const handleBuyNow = (productId: number) => {
    console.log(`立即购买产品 ${productId}，数量：${quantities[productId]}`)
    window.location.href = 'https://console.cloudcvm.com/cart/goodsList.htm'
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-[1800px] px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900">
            轻量应用服务器专区
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            <span className="font-medium text-orange-500">4核4G起步</span>
            ，新用户低至
            <span className="font-medium text-orange-500">79元/年</span>
            <span className="ml-2 cursor-pointer text-blue-600 underline">
              活动规则&gt;
            </span>
          </p>
        </div>
      </div>

      {/* 产品网格 */}
      <div className="mx-auto max-w-[1800px] px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serverProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              {/* 产品标题和标签 */}
              <div className="border-b border-gray-100 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gray-900">
                    {product.subtitle}
                  </span>
                  {product.isHot && (
                    <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                      申请特惠
                    </span>
                  )}
                  {product.isRecommended && (
                    <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                      申请特惠
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  建站、Web应用、电商网站等高性价比的选择
                </p>
              </div>

              {/* 产品规格信息 */}
              <div className="space-y-3 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">规格</span>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-gray-900">
                      {product.specs.cpu}
                    </span>
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">地域</span>
                  <span className="text-sm text-gray-900">
                    {product.regions.join('/')}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">时长</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900">
                      {product.duration}
                    </span>
                    <span className="rounded bg-red-100 px-1 py-0.5 text-xs text-red-600">
                      {product.discount}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">数量</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantities[product.id] - 1)
                      }
                      className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                    >
                      −
                    </button>
                    <span className="w-8 text-center text-sm">
                      {quantities[product.id]}
                    </span>
                    <button
                      onClick={() =>
                        updateQuantity(product.id, quantities[product.id] + 1)
                      }
                      className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-gray-600 hover:bg-gray-50"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* 价格和折扣信息 */}
              <div className="border-t border-gray-100 p-4">
                {product.discount && (
                  <div className="mb-2 flex items-center gap-2">
                    <span className="rounded bg-red-100 px-2 py-1 text-xs text-red-600">
                      {product.discount}
                    </span>
                    <span className="text-xs text-gray-500">
                      限{quantities[product.id]}个
                    </span>
                  </div>
                )}

                <div className="mb-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-gray-600">活动价:</span>
                    <span className="text-2xl font-bold text-red-600">
                      {product.currentPrice}
                    </span>
                    <span className="text-sm text-gray-600">元</span>
                    <span className="text-xs text-gray-500">
                      ¥{product.originalPrice.toFixed(2)}/月
                    </span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm text-gray-600">日常价:</span>
                    <span className="text-sm text-gray-500">
                      {product.originalPrice} 元
                    </span>
                  </div>
                </div>

                {/* 操作按钮 */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleAddToCart(product.id)}
                    className="flex-1 rounded border border-blue-600 px-3 py-2 text-sm text-blue-600 transition-colors hover:bg-blue-50"
                  >
                    加入购物车
                  </button>
                  <button
                    onClick={() => handleBuyNow(product.id)}
                    className="flex-1 rounded bg-blue-600 px-3 py-2 text-sm text-white transition-colors hover:bg-blue-700"
                  >
                    立即购买
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
