'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'

/**
 * ECS限量秒杀商品数据结构定义
 * @interface FlashSaleProduct
 * @property {string} name - 商品名称
 * @property {string} description - 商品描述
 * @property {string} currentPrice - 当前秒杀价格
 * @property {string} originalPrice - 原价
 * @property {string} discount - 折扣信息
 * @property {string} specs - 规格信息
 * @property {string} bandwidth - 带宽信息
 * @property {string} duration - 时长信息
 * @property {string} priceUnit - 价格单位
 * @property {string} buttonText - 按钮文字
 */
interface FlashSaleProduct {
  name: string
  description: string
  currentPrice: string
  originalPrice: string
  discount: string
  specs: string
  bandwidth: string
  duration: string
  priceUnit: string
  buttonText: string
}

/**
 * 定价方案数据结构定义
 * @interface PricingPlan
 * @property {string} name - 方案名称
 * @property {string} description - 方案描述
 * @property {string} os - 操作系统
 * @property {string} cpu - CPU配置
 * @property {string} memory - 内存配置
 * @property {string} storage - 存储配置
 * @property {string} bandwidth - 带宽配置
 * @property {number} cores - 核心数
 * @property {string} price - 价格
 * @property {string} unit - 计费单位
 * @property {string} originalPrice - 原价（可选）
 * @property {boolean} popular - 是否为推荐方案
 * @property {string} buttonText - 按钮文字
 */
interface PricingPlan {
  name: string
  description: string
  os: string
  cpu: string
  memory: string
  storage: string
  bandwidth: string
  cores: number
  price: string
  unit: string
  originalPrice?: string
  popular?: boolean
  buttonText: string
}

/**
 * ECS限量秒杀商品数据
 */
const flashSaleProduct: FlashSaleProduct = {
  name: 'ECS 共享经济型e',
  description: 'Intel CPU内存，学习测试，小型网站应用，代码存储库',
  currentPrice: '29.00',
  originalPrice: '1020.0',
  discount: '约0.08元/天起',
  specs: '2核2G 40G',
  bandwidth: '1M',
  duration: '1年',
  priceUnit: '/年',
  buttonText: '立即抢购'
}

/**
 * 高性能云桌面定价方案数据 - 根据图片设计的四个GPU算力方案
 */
const pricingPlans: PricingPlan[] = [
  {
    name: '云桌面 限1个',
    description: '搭载NVIDIA T4显卡，16G显存',
    os: 'Stable Diffusion ComfyUI',
    cpu: 'GPU-16GB显存(T4级)',
    memory: '7天',
    storage: '1.3折',
    bandwidth: '限1个',
    cores: 1,
    price: '26.21',
    unit: '元 ¥93.74元/天',
    originalPrice: '201.6',
    buttonText: '立即购买'
  },
  {
    name: 'HAI-GPU进阶型 限1个',
    description: '搭载NVIDIA V100显卡，32G显存',
    os: 'DeepSeek-R1',
    cpu: 'GPU-32GB显存(V100级)',
    memory: '7天',
    storage: '0.8折',
    bandwidth: '限1个',
    cores: 1,
    price: '49',
    unit: '元 ¥97元/天',
    originalPrice: '610.34',
    popular: true,
    buttonText: '立即购买'
  },
  {
    name: '云桌面 不限购',
    description: '搭载NVIDIA T4显卡，16G显存',
    os: 'DeepSeek-R1',
    cpu: 'GPU-16GB显存(T4级)',
    memory: '7天',
    storage: '6.5折',
    bandwidth: '不限购',
    cores: 1,
    price: '134.64',
    unit: '元 ¥519.23元/天',
    originalPrice: '207.44',
    buttonText: '立即购买'
  },
   {
    name: '云桌面 不限购',
    description: '搭载NVIDIA T4显卡，16G显存',
    os: 'DeepSeek-R1',
    cpu: 'GPU-16GB显存(T4级)',
    memory: '7天',
    storage: '6.5折',
    bandwidth: '不限购',
    cores: 1,
    price: '134.64',
    unit: '元 ¥519.23元/天',
    originalPrice: '207.44',
    buttonText: '立即购买'
  },
   {
    name: '云桌面 不限购',
    description: '搭载NVIDIA T4显卡，16G显存',
    os: 'DeepSeek-R1',
    cpu: 'GPU-16GB显存(T4级)',
    memory: '7天',
    storage: '6.5折',
    bandwidth: '不限购',
    cores: 1,
    price: '134.64',
    unit: '元 ¥519.23元/天',
    originalPrice: '207.44',
    buttonText: '立即购买'
  },
   {
    name: '云桌面 不限购',
    description: '搭载NVIDIA T4显卡，16G显存',
    os: 'DeepSeek-R1',
    cpu: 'GPU-16GB显存(T4级)',
    memory: '7天',
    storage: '6.5折',
    bandwidth: '不限购',
    cores: 1,
    price: '134.64',
    unit: '元 ¥519.23元/天',
    originalPrice: '207.44',
    buttonText: '立即购买'
  },
   {
    name: '云桌面 不限购',
    description: '搭载NVIDIA T4显卡，16G显存',
    os: 'DeepSeek-R1',
    cpu: 'GPU-16GB显存(T4级)',
    memory: '7天',
    storage: '6.5折',
    bandwidth: '不限购',
    cores: 1,
    price: '134.64',
    unit: '元 ¥519.23元/天',
    originalPrice: '207.44',
    buttonText: '立即购买'
  },
  {
    name: 'HAI-GPU进阶型 不限购',
    description: '搭载NVIDIA V100显卡，32G显存',
    os: 'DeepSeek-R1',
    cpu: 'GPU-32GB显存(V100级)',
    memory: '7天',
    storage: '5.5折',
    bandwidth: '不限购',
    cores: 1,
    price: '335.69',
    unit: '元 ¥947.96元/天',
    originalPrice: '610.34',
    buttonText: '立即购买'
  }
]

/**
 * 高性能云桌面定价方案数据 - 根据图片设计的四个GPU算力方案
 */


/**
 * 顶部导航标签数据
 */
const navigationTabs = [
  { id: 'first-purchase', label: '爆款首购', active: true, badge: 'NEW' },
  { id: 'exclusive-deals', label: '新用户首购专享，热门产品低至1元', active: false, badge: 'HOT' }
]

/**
 * 价格展示组件 - 简洁现代的云服务器定价界面
 * 完全根据提供图片设计，包含：
 * - 顶部蓝色导航标签栏
 * - 四个价格卡片的网格布局
 * - 推荐方案橙色高亮
 * - 简洁的配置信息展示
 * - 现代化的按钮设计
 *
 * @returns {JSX.Element} 价格展示组件
 */
export function Price() {
  const [activeTab, setActiveTab] = useState('hai-service')

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <Container>
        {/* ECS限量秒杀标题和活动规则 */}
        <div className="mb-8">
          <div className="text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#05f] mb-4">ECS限量秒杀</h1>
            <p className="text-gray-600 text-base md:text-lg lg:text-xl">新客首单享优惠活动规则</p>
          </div>
        </div>

        {/* ECS限量秒杀模块 */}
        <div className="mb-12">
          <div className="bg-white border border-gray-200 p-6 md:p-8 lg:p-10 shadow-lg" style={{ backgroundColor: '#f9faff' }}>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-6 lg:space-y-0">
              <div className="flex items-center space-x-6">
                {/* 商品信息 */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-3 mb-2">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold truncate text-gray-900">{flashSaleProduct.name}</h2>
                    <span className="px-3 py-1.5 text-sm font-bold self-start mt-2 sm:mt-0 text-white" style={{ backgroundColor: '#0055ff' }}>
                      限量秒杀
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-3 line-clamp-2">{flashSaleProduct.description}</p>

                  {/* 规格信息 */}
                  <div className="flex flex-wrap gap-3 text-sm md:text-base">
                    <span className="bg-gray-100 text-gray-700 px-3 py-2 whitespace-nowrap border border-gray-200">
                      {flashSaleProduct.specs}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-2 whitespace-nowrap border border-gray-200">
                      带宽 {flashSaleProduct.bandwidth}
                    </span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-2 whitespace-nowrap border border-gray-200">
                      {flashSaleProduct.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* 价格和购买区域 */}
              <div className="text-left lg:text-right flex-shrink-0">
                <div className="mb-4">
                  <div className="flex items-baseline space-x-3 lg:justify-end">
                    <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">¥{flashSaleProduct.currentPrice}</span>
                    <span className="text-lg md:text-xl lg:text-2xl text-gray-400 line-through">¥{flashSaleProduct.originalPrice}</span>
                  </div>
                  <p className="text-gray-600 text-sm md:text-base lg:text-lg">{flashSaleProduct.discount}</p>
                </div>

                {/* 立即抢购按钮 */}
                <button
                  className="w-full lg:w-auto text-white font-bold py-3 md:py-4 lg:py-5 px-6 md:px-8 lg:px-10 text-base md:text-lg lg:text-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{ backgroundColor: '#0055ff' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0044dd'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0055ff'}
                >
                  {flashSaleProduct.buttonText}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*  云桌面方案数据 - 根据图片设计的四个GPU算力方案 */}
        <div className="mb-8">
          <div className="flex space-x-2 bg-blue-50 p-2 inline-flex">
            {navigationTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={clsx(
                  'relative px-8 py-4 text-base md:text-lg lg:text-xl font-medium transition-all duration-200',
                  tab.active
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-blue-600 hover:bg-blue-100'
                )}
              >
                {tab.label}
                {tab.badge && (
                  <span className={clsx(
                    'absolute -top-2 -right-2 px-2 py-1 text-sm font-bold',
                    tab.badge === 'NEW' ? 'bg-orange-500 text-white' : 'bg-red-500 text-white'
                  )}>
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* 价格卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={clsx(
                'relative bg-white border-2 p-8 shadow-sm hover:shadow-md transition-shadow duration-200',
                plan.popular ? 'border-orange-400' : 'border-gray-200'
              )}
            >
              {/* 推荐标签 */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-orange-500 text-white px-4 py-2 text-sm font-medium">
                    推荐
                  </span>
                </div>
              )}

              {/* 方案名称和描述 */}
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {plan.description}
                </p>
              </div>

              {/* 配置信息 */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">操作系统</span>
                  <span className="text-sm font-medium text-gray-900">{plan.os}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">GPU配置</span>
                  <span className="text-sm font-medium text-gray-900">{plan.cpu}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">时长</span>
                  <span className="text-sm font-medium text-gray-900">{plan.memory}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">折扣</span>
                  <span className="text-sm font-medium text-orange-600">{plan.storage}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">购买限制</span>
                  <span className="text-sm font-medium text-gray-900">{plan.bandwidth}</span>
                </div>
              </div>

              {/* 价格信息 */}
              <div className="mb-6">
                <div className="flex items-baseline mb-2">
                  <span className="text-3xl font-bold text-gray-900">¥{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="ml-2 text-lg text-gray-400 line-through">
                      ¥{plan.originalPrice}
                    </span>
                  )}
                </div>
                <p className="text-sm text-gray-600">{plan.unit}</p>
              </div>

              {/* 购买按钮 */}
              <button
                className={clsx(
                  'w-full py-3 px-4 font-medium text-sm transition-colors duration-200',
                  plan.popular
                    ? 'bg-orange-500 text-white hover:bg-orange-600'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                )}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* 底部说明文字 */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            * 以上价格为限时优惠价格，具体以实际购买页面为准
          </p>
        </div>
      </Container>
    </div>
  )
}
 {/*  云桌面方案数据 - 根据图片设计的四个GPU算力方案 */}

/**
 * 导出默认组件
 */
export default Price

/**
 * 导出兼容性别名
 */
export { Price as Faqs }

