'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'

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
 * 定价方案数据 - 根据图片设计的四个GPU算力方案
 */
const pricingPlans: PricingPlan[] = [
  {
    name: 'HAI-GPU基础型 限1个',
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
    buttonText: '立即购买'
  },
  {
    name: 'HAI-GPU基础型 不限购',
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
 * 顶部导航标签数据
 */
const navigationTabs = [
  { id: 'hai-service', label: '高性能应用服务 HAI', active: true, badge: 'NEW' },
  { id: 'gpu-cloud', label: 'GPU 云服务器', active: false, badge: 'HOT' }
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
    <div className="bg-white min-h-screen pb-16">
      <Container>
        {/* 页面标题区域 */}
        <div className="py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            高性价比云桌面电脑
          </h1>
          <p className="text-gray-600">
            低至 <span className="text-orange-500 font-semibold">0.8折!</span> 助您快速实现大模型训练与推理，轻松搭建 AI 应用!
          </p>
        </div>

        {/* 蓝色横幅区域 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <div className="bg-blue-600 text-white p-6">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold">高性能应用服务 HAI</h3>
              <span className="bg-green-500 text-white text-xs px-2 py-1 font-medium">NEW</span>
            </div>
            <p className="text-blue-100">
              澎湃算力，即开即用，快速部署LLM、AI绘画等应用，玩转AIGC!
            </p>
          </div>
          <div className="bg-gray-100 text-gray-800 p-6">
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-lg font-semibold">GPU 云服务器</h3>
              <span className="bg-red-500 text-white text-xs px-2 py-1 font-medium">HOT</span>
            </div>
            <p className="text-gray-600">
              丰富多样的 GPU 卡型，高效规模云端未来!
            </p>
          </div>
        </div>

        {/* 价格卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className="bg-white border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg"
            >
              {/* 卡片头部 */}
              <div className="p-4 border-b border-gray-100">
                <h3 className="text-base font-semibold text-gray-900 mb-1">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {plan.description}
                </p>
              </div>

              {/* 应用名称 */}
              <div className="px-4 py-2 border-b border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">应用名称</span>
                  <select className="text-gray-900 bg-transparent border-none text-sm font-medium">
                    <option>{plan.os}</option>
                  </select>
                </div>
              </div>

              {/* 算力方案 */}
              <div className="px-4 py-2 border-b border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">算力方案</span>
                  <span className="font-medium text-gray-900">{plan.cpu}</span>
                </div>
              </div>

              {/* 时长 */}
              <div className="px-4 py-2 border-b border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">时长</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">{plan.memory}</span>
                    <span className="text-xs bg-red-100 text-red-600 px-1 py-0.5">{plan.storage}</span>
                  </div>
                </div>
              </div>

              {/* 价格显示 */}
              <div className="px-4 py-3">
                <div className="text-xs text-red-600 mb-1">{plan.storage} {plan.bandwidth}</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-lg font-bold text-red-600">¥{plan.price}</span>
                  <span className="text-xs text-gray-500">{plan.unit}</span>
                </div>
                <div className="text-xs text-gray-500">
                  日常价：{plan.originalPrice} 元
                </div>
              </div>

              {/* 底部按钮区域 */}
              <div className="p-4 pt-0 flex gap-2">
                <button className="flex-1 bg-white border border-blue-600 text-blue-600 py-2 px-3 text-sm font-medium hover:bg-blue-50 transition-colors duration-200">
                  加入购物车
                </button>
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                  {plan.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 上云精选·限时秒杀区域 */}
        <section className="mt-16" aria-labelledby="flash-sale-title">
          {/* 标题和倒计时 */}
          <div className="mb-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 id="flash-sale-title" className="text-2xl md:text-3xl font-bold text-gray-900">
                上云精选 · 限时秒杀
              </h2>
              <p className="mt-1 text-xs md:text-sm text-gray-500">
                每日两场秒杀（上午10:00、下午15:00），爆款不停抢，新老同享
              </p>
            </div>
            {/* 倒计时 */}
            <div className="flex items-center gap-2" aria-label="距离本场结束">
              <span className="hidden sm:inline text-xs md:text-sm text-gray-600">距离本场结束</span>
              <div className="flex items-center gap-2">
                <span className="inline-flex min-w-[40px] justify-center rounded-md bg-blue-600 px-2 py-1 text-sm font-semibold text-white shadow-sm">15</span>
                <span className="inline-flex min-w-[40px] justify-center rounded-md bg-blue-600 px-2 py-1 text-sm font-semibold text-white shadow-sm">47</span>
                <span className="inline-flex min-w-[40px] justify-center rounded-md bg-blue-600 px-2 py-1 text-sm font-semibold text-white shadow-sm">07</span>
              </div>
            </div>
          </div>

          {/* 三列产品卡片 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* 轻量应用服务器 */}
            <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg">
              {/* 卡片头部 */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-gray-900">
                    轻量应用服务器
                  </h3>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 font-medium">
                    秒杀中
                  </span>
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 font-medium">
                    0.5折
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  4核4G3M
                </p>
              </div>

              {/* 配置信息 */}
              <div className="px-4 py-2 border-b border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">配置</span>
                  <span className="font-medium text-gray-900">50G SSD盘 300G月流量</span>
                </div>
              </div>

              <div className="px-4 py-2 border-b border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">地域</span>
                  <span className="font-medium text-gray-900">广州/上海/北京</span>
                </div>
              </div>

              <div className="px-4 py-2 border-b border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">时长</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">1个月</span>
                    <span className="text-xs bg-red-100 text-red-600 px-1 py-0.5">0.5折</span>
                  </div>
                </div>
              </div>

              {/* 价格显示 */}
              <div className="px-4 py-3">
                <div className="text-xs text-red-600 mb-1">0.5折 限1个人</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-lg font-bold text-red-600">¥38</span>
                  <span className="text-xs text-gray-500">元 ¥38.17元/月</span>
                </div>
                <div className="text-xs text-gray-500">
                  日常价：306.60 元
                </div>
              </div>

              {/* 底部按钮区域 */}
              <div className="p-4 pt-0 flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                  添加配置
                </button>
                <button className="flex-1 bg-white border border-blue-600 text-blue-600 py-2 px-3 text-sm font-medium hover:bg-blue-50 transition-colors duration-200">
                  找相似
                </button>
              </div>
            </div>

            {/* 轻量优选流量包 */}
            <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg">
              {/* 卡片头部 */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-gray-900">
                    轻量优选流量包
                  </h3>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 font-medium">
                    秒杀中
                  </span>
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 font-medium">
                    0.1元
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  1GB
                </p>
              </div>

              {/* 配置信息 */}
              <div className="px-4 py-2 border-b border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">配置</span>
                  <span className="font-medium text-gray-900">1GB 共享流量</span>
                </div>
              </div>

              <div className="px-4 py-2 border-b border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">地域</span>
                  <span className="font-medium text-gray-900">全地域</span>
                </div>
              </div>

              <div className="px-4 py-2 border-b border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">时长</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">1个月</span>
                    <span className="text-xs bg-red-100 text-red-600 px-1 py-0.5">0.1元</span>
                  </div>
                </div>
              </div>

              {/* 价格显示 */}
              <div className="px-4 py-3">
                <div className="text-xs text-red-600 mb-1">0.1元 限购</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-lg font-bold text-red-600">¥0.1</span>
                  <span className="text-xs text-gray-500">元 / 包</span>
                </div>
                <div className="text-xs text-gray-500">
                  限购：每账号1次
                </div>
              </div>

              {/* 底部按钮区域 */}
              <div className="p-4 pt-0 flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                  添加配置
                </button>
                <button className="flex-1 bg-white border border-blue-600 text-blue-600 py-2 px-3 text-sm font-medium hover:bg-blue-50 transition-colors duration-200">
                  找相似
                </button>
              </div>
            </div>

            {/* 轻量对象存储 */}
            <div className="bg-white border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg">
              {/* 卡片头部 */}
              <div className="p-4 border-b border-gray-100">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-base font-semibold text-gray-900">
                    轻量对象存储
                  </h3>
                  <span className="bg-red-500 text-white text-xs px-2 py-1 font-medium">
                    秒杀中
                  </span>
                  <span className="bg-orange-500 text-white text-xs px-2 py-1 font-medium">
                    2.6折
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  标准存储 100GB
                </p>
              </div>

              {/* 配置信息 */}
              <div className="px-4 py-2 border-b border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">配置</span>
                  <span className="font-medium text-gray-900">100GB 存储 + 10GB 流量</span>
                </div>
              </div>

              <div className="px-4 py-2 border-b border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">地域</span>
                  <span className="font-medium text-gray-900">华南/华东/华北</span>
                </div>
              </div>

              <div className="px-4 py-2 border-b border-gray-100">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">时长</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">1个月</span>
                    <span className="text-xs bg-red-100 text-red-600 px-1 py-0.5">2.6折</span>
                  </div>
                </div>
              </div>

              {/* 价格显示 */}
              <div className="px-4 py-3">
                <div className="text-xs text-red-600 mb-1">2.6折 限1个人</div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-lg font-bold text-red-600">¥52.2</span>
                  <span className="text-xs text-gray-500">元 / 套</span>
                </div>
                <div className="text-xs text-gray-500">
                  日常价：171.7 元
                </div>
              </div>

              {/* 底部按钮区域 */}
              <div className="p-4 pt-0 flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                  添加配置
                </button>
                <button className="flex-1 bg-white border border-blue-600 text-blue-600 py-2 px-3 text-sm font-medium hover:bg-blue-50 transition-colors duration-200">
                  找相似
                </button>
              </div>
            </div>
          </div>
        </section>
  {/*上云精选 · 限时秒杀*/}

        {/* 轻量应用服务器配置卡片网格 */}
        <section className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: '轻量应用服务器 2核2G',
                badge: '爆款',
                config: '2核2G4M',
                specs: '50G SSD盘 300G月流量',
                location: '北京/上海/广州/成都',
                duration: '3个月',
                discount: '4折',
                price: '60',
                unit: '元 ¥20元/月',
                originalPrice: '150'
              },
              {
                name: '轻量应用服务器 2核2G',
                badge: '爆款',
                config: '2核2G4M',
                specs: '50G SSD盘 300G月流量',
                location: '北京/上海/广州/成都',
                duration: '1年',
                discount: '1折',
                price: '99',
                unit: '元 ¥8.25元/月',
                originalPrice: '1200'
              },
              {
                name: '轻量应用服务器 2核4G5M',
                badge: '入门之选',
                config: '2核4G5M',
                specs: '60G SSD盘 500G月流量',
                location: '北京/上海/广州/成都',
                duration: '1年',
                discount: '2.3折',
                price: '188',
                unit: '元 ¥15.67元/月',
                originalPrice: '816'
              },
              {
                name: '轻量应用服务器 2核4G6M',
                badge: '入门之选',
                config: '2核4G6M',
                specs: '70G SSD盘 800G月流量',
                location: '北京/上海/广州/成都',
                duration: '1年',
                discount: '2.3折',
                price: '199',
                unit: '元 ¥16.58元/月',
                originalPrice: '864'
              }
            ].map((server, index) => (
              <div
                key={server.name + index}
                className="bg-white border border-gray-200 overflow-hidden transition-all duration-200 hover:shadow-lg"
              >
                {/* 卡片头部 */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-base font-semibold text-gray-900">
                      {server.name}
                    </h3>
                    <span className="bg-red-500 text-white text-xs px-2 py-1 font-medium">
                      {server.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    {server.config}
                  </p>
                </div>

                {/* 配置信息 */}
                <div className="px-4 py-2 border-b border-gray-100">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">配置</span>
                    <span className="font-medium text-gray-900">{server.specs}</span>
                  </div>
                </div>

                <div className="px-4 py-2 border-b border-gray-100">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">地域</span>
                    <span className="font-medium text-gray-900">{server.location}</span>
                  </div>
                </div>

                <div className="px-4 py-2 border-b border-gray-100">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">时长</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">{server.duration}</span>
                      <span className="text-xs bg-red-100 text-red-600 px-1 py-0.5">{server.discount}</span>
                    </div>
                  </div>
                </div>

                {/* 价格显示 */}
                <div className="px-4 py-3">
                  <div className="text-xs text-red-600 mb-1">{server.discount} 限1个人</div>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-lg font-bold text-red-600">¥{server.price}</span>
                    <span className="text-xs text-gray-500">{server.unit}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    日常价：{server.originalPrice} 元
                  </div>
                </div>

                {/* 底部按钮区域 */}
                <div className="p-4 pt-0 flex gap-2">
                  <button className="flex-1 bg-blue-600 text-white py-2 px-3 text-sm font-medium hover:bg-blue-700 transition-colors duration-200">
                    立即购买
                  </button>
                  <button className="flex-1 bg-white border border-blue-600 text-blue-600 py-2 px-3 text-sm font-medium hover:bg-blue-50 transition-colors duration-200">
                    找相似
                  </button>
                </div>
              </div>
            ))}
            </div>
          </section>
      </Container>
    </div>
  )
}

/**
 * 导出默认组件
 */
export default Price

/**
 * 导出兼容性别名
 */
export { Price as Faqs }

