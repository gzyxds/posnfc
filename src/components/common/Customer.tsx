'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'

// 客户案例数据
const customers = [
  {
    id: 'xiaohongshu',
    name: '小红书',
    description:
      '我们使用 AMD 实例提供高性能算力支撑，搜索推荐系统分布式训练集群性能提升 30%，多可用区部署，提供大规模高可用算力服务。',
    image: '/images/screenshots/Customer.jpg',
  },
  {
    id: 'weibo',
    name: '新浪微博',
    description:
      '倚天计算型 c8y 实例算力强劲，构建音视频直播处理集群，提升音视频处理效率，转码 H264场景单路成本降 66.7%。',
    image: '/images/screenshots/Customer1.jpg',
  },
  {
    id: 'douyin',
    name: '抖音',
    description:
      '通过优刻云的CDN和存储解决方案，我们的内容分发速度提升了200%，用户体验显著改善，同时运营成本降低了30%。',
    image: '/images/screenshots/Customer2.png',
  },
  {
    id: 'kuaishou',
    name: '快手',
    description:
      '借助优刻云的AI和大数据分析能力，我们成功构建了智能推荐系统，用户留存率提升了45%，平台活跃度显著增长。',
    image: '/images/screenshots/kuaishou.png',
  },
]

/**
 * Customer组件 - 展示客户案例的简约大气界面
 * 采用左右布局，左侧客户列表，右侧展示图片
 * @returns {JSX.Element} Customer组件
 */
export default function Customer() {
  const [activeCustomer, setActiveCustomer] = useState('xiaohongshu')

  // 获取当前激活的客户案例
  const currentCustomer =
    customers.find((customer) => customer.id === activeCustomer) || customers[0]

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        {/* 标题区域 */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            客户案例
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            云服务助力全球知名企业数字化转型，赋能业务成功
          </p>
        </div>

        {/* 主要内容区域 */}
        <div className="flex flex-col items-start gap-8 lg:grid lg:grid-cols-2 lg:gap-16">
          {/* 左侧：客户列表 */}
          <div className="order-2 w-full lg:order-1">
            {/* 移动端：水平滚动的客户选择器 */}
            <div className="mb-6 block lg:hidden">
              <div className="scrollbar-hide flex space-x-2 overflow-x-auto pb-2">
                {customers.map((customer, index) => (
                  <button
                    key={customer.id}
                    onClick={() => setActiveCustomer(customer.id)}
                    className={`flex-shrink-0 px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      activeCustomer === customer.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
                    }`}
                  >
                    {index + 1}. {customer.name}
                  </button>
                ))}
              </div>
            </div>

            {/* 移动端：当前选中客户的详细信息 */}
            <div className="mb-6 block bg-blue-600 p-6 text-white lg:hidden">
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-xl font-semibold">
                  {currentCustomer.name}
                </h3>
                <span className="text-lg font-medium text-blue-200">
                  {customers.findIndex((c) => c.id === activeCustomer) + 1}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-blue-100 sm:text-base">
                {currentCustomer.description}
              </p>
            </div>

            {/* 桌面端：垂直客户列表 */}
            <div className="hidden min-h-[450px] space-y-1 lg:flex lg:flex-col">
              {customers.map((customer, index) => (
                <button
                  key={customer.id}
                  onClick={() => setActiveCustomer(customer.id)}
                  className={`w-full flex-1 transition-all duration-200 ${
                    activeCustomer === customer.id
                      ? 'bg-blue-600 p-6 text-left text-white'
                      : 'flex items-center justify-between bg-gray-100 p-6 text-gray-900 hover:bg-gray-200 active:bg-gray-300'
                  }`}
                >
                  {activeCustomer === customer.id ? (
                    <div className="w-full">
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-xl font-semibold text-white">
                          {customer.name}
                        </h3>
                        <span className="text-lg font-medium text-blue-200">
                          {index + 1}
                        </span>
                      </div>
                      <p className="leading-relaxed text-blue-100">
                        {customer.description}
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {customer.name}
                      </h3>
                      <span className="text-lg font-medium text-gray-500">
                        {index + 1}
                      </span>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* 右侧：展示图片 */}
          <div className="order-1 w-full lg:order-2">
            <div className="h-[250px] overflow-hidden bg-gray-100 sm:h-[300px] md:h-[350px] lg:h-[450px]">
              <Image
                src={currentCustomer.image}
                alt={`${currentCustomer.name}案例展示`}
                width={600}
                height={450}
                className="h-full w-full object-cover transition-opacity duration-300"
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
