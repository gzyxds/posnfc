'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Container } from '@/components/Container'

// 客户案例数据
const customers = [
  {
    id: 'retail',
    name: '连锁零售品牌',
    description:
      '采用电签POS机后，我们的结算周期从T+3缩短到T+1，资金周转效率提升50%，同时电子签名功能让交易凭证更加安全可靠，客户满意度显著提升。',
    image: '/images/screenshots/Customer.jpg',
  },
  {
    id: 'restaurant',
    name: '餐饮连锁集团',
    description:
      '电签POS机的扫码点餐和快速结账功能，使我们的翻台率提升了30%，会员管理系统帮助我们实现了精准营销，复购率增长了25%。',
    image: '/images/screenshots/Customer1.jpg',
  },
  {
    id: 'logistics',
    name: '物流配送公司',
    description:
      '通过电签POS机的货到付款和快递代收功能，我们的资金回笼速度提升了60%，电子签名功能大幅减少了配送纠纷，运营效率显著提高。',
    image: '/images/screenshots/Customer2.png',
  },
  {
    id: 'ecommerce',
    name: '电商平台',
    description:
      '电签POS机帮助我们实现了线上线下支付一体化，多种支付方式覆盖了各类用户需求，移动便携特性让我们的业务拓展更加灵活。',
    image: '/images/screenshots/kuaishou.png',
  },
]

/**
 * Customer组件 - 展示电签POS机成功案例的简约大气界面
 * 采用左右布局，左侧客户列表，右侧展示图片
 * @returns {JSX.Element} Customer组件
 */
export default function Customer() {
  const [activeCustomer, setActiveCustomer] = useState('retail')

  // 获取当前激活的客户案例
  const currentCustomer =
    customers.find((customer) => customer.id === activeCustomer) || customers[0]

  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        {/* 标题区域 */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            成功案例
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            电签POS机助力各类商户实现支付升级，提升经营效率
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
