'use client'

import { Container } from '@/components/Container'
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
          <h1 className="mb-2 text-3xl font-bold text-blue-600">
            高性价比云桌面电脑
          </h1>
          <p className="max-w-2xl text-gray-600">
            低至 <span className="font-semibold text-blue-700">0.8折</span>{' '}
            助您快速实现大模型训练与推理，轻松搭建 AI 应用
          </p>
        </div>
        {/* 挂机宝服务器配置（4例） */}
        <section className="mt-2">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: '1核1G挂机宝A型',
                description: 'NAT网络服务，适合轻量级应用',
                os: 'Windows/CentOS',
                cpu: '1核',
                memory: '1G',
                storage: 'NVMe SSD 40GB',
                bandwidth: '20Mbps（上行带宽）',
                price: '26.21',
                unit: '元/月',
                originalPrice: '201.6',
              },
              {
                name: '1核2G挂机宝B型',
                description: 'NAT网络服务，性能升级版',
                os: 'Windows/CentOS',
                cpu: '1核',
                memory: '2G',
                storage: 'NVMe SSD 60GB',
                bandwidth: '30Mbps（上行带宽）',
                price: '49',
                unit: '元/月',
                originalPrice: '610.34',
              },
              {
                name: '2核2G挂机宝C型',
                description: 'NAT网络服务，双核配置',
                os: 'Windows/CentOS',
                cpu: '2核',
                memory: '2G',
                storage: 'NVMe SSD 80GB',
                bandwidth: '40Mbps（上行带宽）',
                price: '134.64',
                unit: '元/月',
                originalPrice: '207.44',
              },
              {
                name: '2核4G挂机宝D型',
                description: 'NAT网络服务，高性能配置',
                os: 'Windows/CentOS',
                cpu: '2核',
                memory: '4G',
                storage: 'NVMe SSD 100GB',
                bandwidth: '50Mbps（上行带宽）',
                price: '335.69',
                unit: '元/月',
                originalPrice: '610.34',
              },
            ].map((plan, index) => (
              <div
                key={plan.name + index}
                className="overflow-hidden border border-slate-200 bg-white transition-all duration-200 hover:shadow-md"
              >
                <div className="border-b border-slate-100 p-5">
                  <h3 className="mb-1 text-base font-semibold text-gray-900">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-gray-600">{plan.description}</p>
                </div>
                <div className="border-b border-slate-100 px-5 py-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">系统</span>
                    <span className="font-medium text-gray-900">{plan.os}</span>
                  </div>
                </div>
                <div className="border-b border-slate-100 px-5 py-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">CPU</span>
                    <span className="font-medium text-gray-900">{plan.cpu}</span>
                  </div>
                </div>
                <div className="border-b border-slate-100 px-5 py-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">内存</span>
                    <span className="font-medium text-gray-900">{plan.memory}</span>
                  </div>
                </div>
                <div className="border-b border-slate-100 px-5 py-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">硬盘</span>
                    <span className="font-medium text-gray-900">{plan.storage}</span>
                  </div>
                </div>
                <div className="border-b border-slate-100 px-5 py-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">带宽</span>
                    <span className="font-medium text-gray-900">{plan.bandwidth}</span>
                  </div>
                </div>
                <div className="px-5 py-4">
                  <div className="mb-1 text-xs text-blue-700">
                    100Gbps DDoS 秒解 • NAT转发数量：3个
                  </div>
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="text-xl font-bold text-gray-900">¥{plan.price}</span>
                    <span className="text-xs text-gray-500">{plan.unit}</span>
                  </div>
                  <div className="text-xs text-gray-500">
                    日常价：{plan.originalPrice} 元
                  </div>
                </div>
                <div className="flex gap-2 p-5 pt-0">
                  <button
                    className="flex-1 border border-slate-300 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:bg-slate-50"
                    aria-label="加入购物车"
                  >
                    加入购物车
                  </button>
                  <button
                    className="flex-1 bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700"
                    aria-label="立即购买"
                  >
                    立即购买
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        

        {/* 企业精选 · 限时特惠 */}
        <section className="mt-16" aria-labelledby="flash-sale-title">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2
                id="flash-sale-title"
                className="text-2xl font-bold text-[#05f] md:text-3xl"
              >
                企业精选 · 限时特惠
              </h2>
              <p className="mt-1 text-xs text-gray-500 md:text-sm">
                每日两场（10:00、15:00），限时优惠，数量有限
              </p>
            </div>
         </div>
       </section>
        {/* 轻量应用服务器配置（4例） */}
          <section className="mt-8">
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
