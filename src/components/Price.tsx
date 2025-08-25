'use client'

import { Container } from '@/components/Container'

/**
 * 定价方案数据结构定义
 * @interface PricingPlan
 * @property name       方案名称
 * @property description 方案描述
 * @property os         预置应用/操作系统
 * @property cpu        GPU/CPU 配置
 * @property memory     购买时长
 * @property storage    折扣信息
 * @property bandwidth  购买限制（如限购）
 * @property cores      核心数（预留字段）
 * @property price      价格数值（字符串形式以保持格式）
 * @property unit       计费单位补充文案
 * @property originalPrice 原价文案
 * @property popular    是否推荐（预留）
 * @property buttonText 行动按钮文案
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
 * 定价方案数据 - 四个 GPU 算力方案（示例数据）
 */
const pricingPlans: PricingPlan[] = [
  {
    name: 'HAI-GPU基础型 限1个',
    description: '搭载 NVIDIA T4 显卡，16G 显存',
    os: 'Stable Diffusion ComfyUI',
    cpu: 'GPU-16GB 显存 (T4 级)',
    memory: '7天',
    storage: '1.3折',
    bandwidth: '限1个',
    cores: 1,
    price: '26.21',
    unit: '元 ¥93.74元/天',
    originalPrice: '201.6',
    buttonText: '立即购买',
  },
  {
    name: 'HAI-GPU进阶型 限1个',
    description: '搭载 NVIDIA V100 显卡，32G 显存',
    os: 'DeepSeek-R1',
    cpu: 'GPU-32GB 显存 (V100 级)',
    memory: '7天',
    storage: '0.8折',
    bandwidth: '限1个',
    cores: 1,
    price: '49',
    unit: '元 ¥97元/天',
    originalPrice: '610.34',
    buttonText: '立即购买',
  },
  {
    name: 'HAI-GPU基础型 不限购',
    description: '搭载 NVIDIA T4 显卡，16G 显存',
    os: 'DeepSeek-R1',
    cpu: 'GPU-16GB 显存 (T4 级)',
    memory: '7天',
    storage: '6.5折',
    bandwidth: '不限购',
    cores: 1,
    price: '134.64',
    unit: '元 ¥519.23元/天',
    originalPrice: '207.44',
    buttonText: '立即购买',
  },
  {
    name: 'HAI-GPU进阶型 不限购',
    description: '搭载 NVIDIA V100 显卡，32G 显存',
    os: 'DeepSeek-R1',
    cpu: 'GPU-32GB 显存 (V100 级)',
    memory: '7天',
    storage: '5.5折',
    bandwidth: '不限购',
    cores: 1,
    price: '335.69',
    unit: '元 ¥947.96元/天',
    originalPrice: '610.34',
    buttonText: '立即购买',
  },
]

/**
 * 方案卡片子组件 - 负责渲染单个定价方案的卡片
 * 设计：蓝白企业风、直角卡片、合理留白，信息层次清晰
 * @param props.plan 定价方案对象
 * @returns 方案卡片 JSX
 */
function PlanCard({ plan }: { plan: PricingPlan }) {
  return (
    <div className="overflow-hidden border border-slate-200 bg-white transition-all duration-200 hover:shadow-md">
      {/* 卡片头部 */}
      <div className="border-b border-slate-100 p-5">
        <h3 className="mb-1 text-base font-semibold text-gray-900">
          {plan.name}
        </h3>
        <p className="text-sm text-gray-600">{plan.description}</p>
      </div>

      {/* 应用名称 */}
      <div className="border-b border-slate-100 px-5 py-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">应用名称</span>
          <select className="border-none bg-transparent text-sm font-medium text-gray-900">
            <option>{plan.os}</option>
          </select>
        </div>
      </div>

      {/* 算力方案 */}
      <div className="border-b border-slate-100 px-5 py-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">算力方案</span>
          <span className="font-medium text-gray-900">{plan.cpu}</span>
        </div>
      </div>

      {/* 时长与折扣 */}
      <div className="border-b border-slate-100 px-5 py-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">时长</span>
          <div className="flex items-center gap-2">
            <span className="font-medium text-gray-900">{plan.memory}</span>
            <span className="bg-blue-50 px-1 py-0.5 text-xs text-blue-700">
              {plan.storage}
            </span>
          </div>
        </div>
      </div>

      {/* 价格显示 */}
      <div className="px-5 py-4">
        <div className="mb-1 text-xs text-blue-700">
          {plan.storage} {plan.bandwidth}
        </div>
        <div className="mb-1 flex items-baseline gap-2">
          <span className="text-xl font-bold text-gray-900">¥{plan.price}</span>
          <span className="text-xs text-gray-500">{plan.unit}</span>
        </div>
        <div className="text-xs text-gray-500">
          日常价：{plan.originalPrice} 元
        </div>
      </div>

      {/* 底部按钮 */}
      <div className="flex gap-2 p-5 pt-0">
        <button
          className="flex-1 border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50"
          aria-label="加入购物车"
        >
          加入购物车
        </button>
        <button
          className="flex-1 bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
          aria-label={plan.buttonText}
        >
          {plan.buttonText}
        </button>
      </div>
    </div>
  )
}

/**
 * 价格展示组件 - 企业蓝白风格的定价与促销展示
 * 设计目标：
 * - 蓝白色调主视觉，符合 B 端专业调性
 * - 简洁直角卡片与边框分割，逻辑层级清晰
 * - 合理留白，信息密度与可读性平衡
 * @returns 页面主体 JSX
 */
export function Price() {
  return (
    <div className="min-h-screen bg-white pb-16">
      <Container>
        {/* 标题区 */}
        <div className="py-10">
          <h1 className="mb-2 text-3xl font-bold text-gray-900">
            高性价比云桌面电脑
          </h1>
          <p className="max-w-2xl text-gray-600">
            低至 <span className="font-semibold text-blue-700">0.8折</span>{' '}
            助您快速实现大模型训练与推理，轻松搭建 AI 应用
          </p>
        </div>

        {/* 顶部信息横幅（蓝白） */}
        <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="border border-blue-100 bg-gradient-to-r from-blue-50 to-blue-100 p-6 text-blue-900">
            <div className="mb-2 flex items-center gap-2">
              <h3 className="text-lg font-semibold">高性能应用服务 HAI</h3>
              <span className="bg-blue-600 px-2 py-1 text-xs font-medium text-white">
                NEW
              </span>
            </div>
            <p className="text-blue-800">
              澎湃算力，即开即用，快速部署 LLM、AI 绘画等应用，玩转 AIGC
            </p>
          </div>
          <div className="border border-slate-200 bg-white p-6 text-gray-900">
            <div className="mb-2 flex items-center gap-2">
              <h3 className="text-lg font-semibold">GPU 云服务器</h3>
              <span className="border border-blue-200 bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                HOT
              </span>
            </div>
            <p className="text-gray-600">
              丰富多样的 GPU 卡型，高效规模云端未来
            </p>
          </div>
        </div>

        {/* 定价卡片网格 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {pricingPlans.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        {/* 企业精选 · 限时特惠 */}
        <section className="mt-16" aria-labelledby="flash-sale-title">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="flash-sale-title"
                className="text-2xl font-bold text-gray-900 md:text-3xl"
              >
                企业精选 · 限时特惠
              </h2>
              <p className="mt-1 text-xs text-gray-500 md:text-sm">
                每日两场（10:00、15:00），限时优惠，数量有限
              </p>
            </div>
            {/* 倒计时（静态占位） */}
            <div className="flex items-center gap-2" aria-label="距离本场结束">
              <span className="hidden text-xs text-gray-600 sm:inline md:text-sm">
                距离本场结束
              </span>
              <div className="flex items-center gap-2">
                <span className="inline-flex min-w-[44px] justify-center border border-blue-200 bg-white px-2.5 py-1 text-sm font-semibold text-blue-700 shadow-sm">
                  15
                </span>
                <span className="inline-flex min-w-[44px] justify-center border border-blue-200 bg-white px-2.5 py-1 text-sm font-semibold text-blue-700 shadow-sm">
                  47
                </span>
                <span className="inline-flex min-w-[44px] justify-center border border-blue-200 bg-white px-2.5 py-1 text-sm font-semibold text-blue-700 shadow-sm">
                  07
                </span>
              </div>
            </div>
          </div>

          {/* 三列产品卡片 */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* 轻量应用服务器 */}
            <div className="overflow-hidden border border-slate-200 bg-white transition-all duration-200 hover:shadow-md">
              <div className="border-b border-slate-100 p-4">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-base font-semibold text-gray-900">
                    轻量应用服务器
                  </h3>
                  <span className="border border-blue-200 bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                    特惠
                  </span>
                  <span className="border border-blue-200 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                    0.5折
                  </span>
                </div>
                <p className="text-sm text-gray-600">4核4G3M</p>
              </div>
              <div className="border-b border-slate-100 px-4 py-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">配置</span>
                  <span className="font-medium text-gray-900">
                    50G SSD盘 300G月流量
                  </span>
                </div>
              </div>
              <div className="border-b border-slate-100 px-4 py-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">地域</span>
                  <span className="font-medium text-gray-900">
                    广州/上海/北京
                  </span>
                </div>
              </div>
              <div className="border-b border-slate-100 px-4 py-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">时长</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">1个月</span>
                    <span className="bg-blue-50 px-1 py-0.5 text-xs text-blue-700">
                      0.5折
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3">
                <div className="mb-1 text-xs text-blue-700">0.5折 限1个人</div>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-lg font-bold text-blue-700">¥38</span>
                  <span className="text-xs text-gray-500">元 ¥38.17元/月</span>
                </div>
                <div className="text-xs text-gray-500">日常价：306.60 元</div>
              </div>
              <div className="flex gap-2 p-4 pt-0">
                <button
                  className="flex-1 bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                  aria-label="添加配置"
                >
                  添加配置
                </button>
                <button
                  className="flex-1 border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50"
                  aria-label="找相似"
                >
                  找相似
                </button>
              </div>
            </div>

            {/* 轻量优选流量包 */}
            <div className="overflow-hidden border border-slate-200 bg-white transition-all duration-200 hover:shadow-md">
              <div className="border-b border-slate-100 p-4">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-base font-semibold text-gray-900">
                    轻量优选流量包
                  </h3>
                  <span className="border border-blue-200 bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                    特惠
                  </span>
                  <span className="border border-blue-200 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                    0.1元
                  </span>
                </div>
                <p className="text-sm text-gray-600">1GB</p>
              </div>
              <div className="border-b border-slate-100 px-4 py-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">配置</span>
                  <span className="font-medium text-gray-900">
                    1GB 共享流量
                  </span>
                </div>
              </div>
              <div className="border-b border-slate-100 px-4 py-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">地域</span>
                  <span className="font-medium text-gray-900">全地域</span>
                </div>
              </div>
              <div className="border-b border-slate-100 px-4 py-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">时长</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">1个月</span>
                    <span className="bg-blue-50 px-1 py-0.5 text-xs text-blue-700">
                      0.1元
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3">
                <div className="mb-1 text-xs text-blue-700">0.1元 限购</div>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-lg font-bold text-blue-700">¥0.1</span>
                  <span className="text-xs text-gray-500">元 / 包</span>
                </div>
                <div className="text-xs text-gray-500">限购：每账号1次</div>
              </div>
              <div className="flex gap-2 p-4 pt-0">
                <button
                  className="flex-1 bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                  aria-label="添加配置"
                >
                  添加配置
                </button>
                <button
                  className="flex-1 border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50"
                  aria-label="找相似"
                >
                  找相似
                </button>
              </div>
            </div>

            {/* 轻量对象存储 */}
            <div className="overflow-hidden border border-slate-200 bg-white transition-all duration-200 hover:shadow-md">
              <div className="border-b border-slate-100 p-4">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-base font-semibold text-gray-900">
                    轻量对象存储
                  </h3>
                  <span className="border border-blue-200 bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                    特惠
                  </span>
                  <span className="border border-blue-200 bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700">
                    2.6折
                  </span>
                </div>
                <p className="text-sm text-gray-600">标准存储 100GB</p>
              </div>
              <div className="border-b border-slate-100 px-4 py-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">配置</span>
                  <span className="font-medium text-gray-900">
                    100GB 存储 + 10GB 流量
                  </span>
                </div>
              </div>
              <div className="border-b border-slate-100 px-4 py-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">地域</span>
                  <span className="font-medium text-gray-900">
                    华南/华东/华北
                  </span>
                </div>
              </div>
              <div className="border-b border-slate-100 px-4 py-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">时长</span>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-gray-900">1个月</span>
                    <span className="bg-blue-50 px-1 py-0.5 text-xs text-blue-700">
                      2.6折
                    </span>
                  </div>
                </div>
              </div>
              <div className="px-4 py-3">
                <div className="mb-1 text-xs text-blue-700">2.6折 限1个人</div>
                <div className="mb-1 flex items-baseline gap-1">
                  <span className="text-lg font-bold text-blue-700">¥52.2</span>
                  <span className="text-xs text-gray-500">元 / 套</span>
                </div>
                <div className="text-xs text-gray-500">日常价：171.7 元</div>
              </div>
              <div className="flex gap-2 p-4 pt-0">
                <button
                  className="flex-1 bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                  aria-label="添加配置"
                >
                  添加配置
                </button>
                <button
                  className="flex-1 border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50"
                  aria-label="找相似"
                >
                  找相似
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* 轻量应用服务器配置（示例） */}
        <section className="mt-16">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                originalPrice: '150',
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
                originalPrice: '1200',
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
                originalPrice: '816',
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
                originalPrice: '864',
              },
            ].map((server, index) => (
              <div
                key={server.name + index}
                className="overflow-hidden border border-slate-200 bg-white transition-all duration-200 hover:shadow-md"
              >
                <div className="border-b border-slate-100 p-4">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="text-base font-semibold text-gray-900">
                      {server.name}
                    </h3>
                    <span className="border border-blue-200 bg-blue-100 px-2 py-1 text-xs font-medium text-blue-700">
                      {server.badge}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{server.config}</p>
                </div>
                <div className="border-b border-slate-100 px-4 py-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">配置</span>
                    <span className="font-medium text-gray-900">
                      {server.specs}
                    </span>
                  </div>
                </div>
                <div className="border-b border-slate-100 px-4 py-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">地域</span>
                    <span className="font-medium text-gray-900">
                      {server.location}
                    </span>
                  </div>
                </div>
                <div className="border-b border-slate-100 px-4 py-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">时长</span>
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">
                        {server.duration}
                      </span>
                      <span className="bg-blue-50 px-1 py-0.5 text-xs text-blue-700">
                        {server.discount}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-3">
                  <div className="mb-1 text-xs text-blue-700">
                    {server.discount} 限1个人
                  </div>
                  <div className="mb-1 flex items-baseline gap-1">
                    <span className="text-lg font-bold text-blue-700">
                      ¥{server.price}
                    </span>
                    <span className="text-xs text-gray-500">{server.unit}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    日常价：{server.originalPrice} 元
                  </div>
                </div>
                <div className="flex gap-2 p-4 pt-0">
                  <button
                    className="flex-1 bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                    aria-label="立即购买"
                  >
                    立即购买
                  </button>
                  <button
                    className="flex-1 border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50"
                    aria-label="找相似"
                  >
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

export default Price
