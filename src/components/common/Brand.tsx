"use client"

// 品牌页面底部通用组件
// 包含申请流程和智能收款解决方案

import React, { useState } from 'react'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { DualQRCodeModal } from '@/components/common/QRCode'
import { ArrowRightIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'

/**
 * 申请流程组件 - 展示产品申请的简单流程
 * @param onContactService - 联系客服按钮点击回调函数
 */
interface ApplicationProcessProps {
  onContactService: () => void
}

export const ApplicationProcess = ({ onContactService }: ApplicationProcessProps) => {
  // 流程步骤数据
  const steps = [
    {
      id: '01',
      title: '联系客服',
      description: '在线咨询客服，说明需求及疑问'
    },
    {
      id: '02',
      title: '提交资料',
      description: '按要求提交个人或商户资料，完成信息登记'
    },
    {
      id: '03',
      title: '审核通过',
      description: '等待平台审核，审核通过后会收到通知'
    },
    {
      id: '04',
      title: '收货激活',
      description: '收到POS机后，按指引完成激活即可使用'
    }
  ]

  return (
    <section className="bg-gray-50 py-16 sm:py-20 lg:py-24">
      <Container>
        {/* 标题区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-blue-600 sm:text-4xl">
            申请办理流程
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            为你提供快速、便捷的POS机申请办理服务
          </p>

          {/* 操作按钮 */}
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-6">
            <Button
              href="/new"
              target="_blank"
              color="blue"
              className="w-full rounded-md px-4 py-2 font-medium shadow-md sm:w-auto sm:px-5 sm:py-2.5"
            >
              <ArrowRightIcon className="mr-2 h-4 w-4" />
              立即申请
            </Button>

            <Button
              onClick={onContactService}
              variant="outline"
              color="slate"
              className="w-full rounded-md px-4 py-2 sm:w-auto sm:px-5 sm:py-2.5"
            >
              <ChatBubbleLeftRightIcon className="mr-2 h-4 w-4" />
              联系客服
            </Button>
          </div>
        </div>

        {/* 流程步骤 */}
        <div className="mt-16 sm:mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* 连接线 - 仅在大屏幕显示 */}
                {index < steps.length - 1 && (
                  <div className="absolute top-8 left-1/2 z-0 hidden h-0.5 w-full bg-gray-200 lg:block"></div>
                )}

                {/* 步骤卡片 */}
                <div className="group relative z-10 border-2 border-white bg-gradient-to-b from-white to-gray-50 p-6 text-center shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800" style={{borderRadius: '4px'}}>
                  {/* 步骤编号 */}
                  <div className="mb-4 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                      <span className="text-lg font-bold">{step.id}</span>
                    </div>
                  </div>

                  {/* 步骤内容 */}
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部提示 */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500">
            全程免费办理，专业客服一对一指导
          </p>
        </div>
      </Container>
    </section>
  )
}
// 申请流程组件结束

/**
 * 智能收款解决方案组件
 * @param onContactService - 联系客服按钮点击回调函数
 */
interface SmartPaymentSolutionProps {
  onContactService: () => void
}

export const SmartPaymentSolution = ({ onContactService }: SmartPaymentSolutionProps) => {
  return (
    <section className="py-8 sm:py-12 lg:py-16 xl:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-lg border border-gray-200 bg-white sm:rounded-xl">
          {/* 装饰元素 - 仅在大屏显示 */}
          <div className="absolute top-0 right-0 hidden h-full w-1/2 lg:block">
            <svg
              className="h-full w-full"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="black"
                fillOpacity="0.02"
              />
              <circle
                cx="300"
                cy="300"
                r="150"
                fill="black"
                fillOpacity="0.02"
              />
              <circle
                cx="250"
                cy="150"
                r="50"
                fill="black"
                fillOpacity="0.02"
              />
              <circle
                cx="150"
                cy="250"
                r="30"
                fill="black"
                fillOpacity="0.02"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 gap-0 lg:grid-cols-5">
            {/* 左侧内容 */}
            <div className="relative z-10 p-6 sm:p-8 lg:col-span-3 lg:p-12">
              <div className="max-w-xl">
                <h3 className="mb-4 text-2xl leading-tight font-bold text-gray-900 sm:mb-6 sm:text-2xl lg:text-3xl">
                  <span className="text-blue-600">智能收款</span>
                  解决方案
                </h3>
                <p className="mb-6 text-base leading-relaxed text-gray-600 sm:mb-8 sm:text-base lg:text-lg">
                  央行支付牌照，安全稳定。支持电签POS、智能POS、移动POS、收款码等多种产品，
                  费率低至0.38%，T+0秒到账。适用于零售、餐饮、超市、移动收款等多种商用场景。
                </p>

                <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-4">
                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center bg-blue-50 sm:h-8 sm:w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600 sm:h-5 sm:w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-gray-900 sm:text-sm">
                        安全稳定
                      </h4>
                      <p className="text-sm text-gray-500 sm:text-xs">
                        央行支付牌照保障
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center bg-blue-50 sm:h-8 sm:w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600 sm:h-5 sm:w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-gray-900 sm:text-sm">
                        快速到账
                      </h4>
                      <p className="text-sm text-gray-500 sm:text-xs">
                        T+0秒级到账体验
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center bg-blue-50 sm:h-8 sm:w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600 sm:h-5 sm:w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-gray-900 sm:text-sm">
                        费率优惠
                      </h4>
                      <p className="text-sm text-gray-500 sm:text-xs">
                        0.38%起超低价
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="mr-3 flex h-10 w-10 flex-shrink-0 items-center justify-center bg-blue-50 sm:h-8 sm:w-8">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600 sm:h-5 sm:w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-gray-900 sm:text-sm">
                        产品多样
                      </h4>
                      <p className="text-sm text-gray-500 sm:text-xs">
                        POS/收款码全覆盖
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    href="/new"
                    color="blue"
                    className="w-full rounded-md px-4 py-2 font-medium shadow-md sm:w-auto sm:px-5 sm:py-2.5"
                  >
                    <ArrowRightIcon className="mr-2 h-4 w-4" />
                    立即申请
                  </Button>
                  <Button
                    onClick={onContactService}
                    variant="outline"
                    color="slate"
                    className="w-full rounded-md px-4 py-2 sm:w-auto sm:px-5 sm:py-2.5"
                  >
                    <ChatBubbleLeftRightIcon className="mr-2 h-4 w-4" />
                    联系客服
                  </Button>
                </div>
              </div>
            </div>

            {/* 右侧功能卡片 - 在移动端显示在下方 */}
            <div className="relative lg:col-span-2">
              {/* 移动端显示 */}
              <div className="p-6 lg:hidden">
                <div className="grid grid-cols-2 gap-4">
                  {/* 央行牌照 */}
                  <div className="group relative flex flex-col items-center justify-center border-2 border-white bg-gradient-to-b from-white to-gray-50 p-3 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800" style={{borderRadius: '4px'}}>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">
                      央行牌照
                    </h4>
                    <p className="mt-1 text-center text-sm text-gray-500">
                      正规安全有保障
                    </p>
                  </div>

                  {/* 费率优势 */}
                  <div className="group relative flex flex-col items-center justify-center border-2 border-white bg-gradient-to-b from-white to-gray-50 p-3 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800" style={{borderRadius: '4px'}}>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">
                      费率优势
                    </h4>
                    <p className="mt-1 text-center text-sm text-gray-500">
                      0.38%起超低价费率
                    </p>
                  </div>

                  {/* 产品齐全 */}
                  <div className="group relative flex flex-col items-center justify-center border-2 border-white bg-gradient-to-b from-white to-gray-50 p-3 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800" style={{borderRadius: '4px'}}>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">
                      产品齐全
                    </h4>
                    <p className="mt-1 text-center text-sm text-gray-500">
                      POS机+收款码全覆盖
                    </p>
                  </div>

                  {/* 快速办理 */}
                  <div className="group relative flex flex-col items-center justify-center border-2 border-white bg-gradient-to-b from-white to-gray-50 p-3 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800" style={{borderRadius: '4px'}}>
                    <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-medium text-gray-900">
                      快速办理
                    </h4>
                    <p className="mt-1 text-center text-sm text-gray-500">
                      当天审核当天发货
                    </p>
                  </div>
                </div>
              </div>

              {/* 桌面端显示 */}
              <div className="absolute inset-0 hidden lg:block">
                <div className="flex h-full w-full items-center p-6">
                  <div className="h-full w-full bg-gray-50 p-4 shadow-lg">
                    <div className="grid h-full grid-cols-2 gap-4">
                      {/* 央行牌照 */}
                      <div className="group relative flex flex-col items-center justify-center border-2 border-white bg-gradient-to-b from-white to-gray-50 p-3 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800" style={{borderRadius: '4px'}}>
                        <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-medium text-gray-900">
                          央行牌照
                        </h4>
                        <p className="mt-1 text-center text-sm text-gray-500">
                          正规安全有保障
                        </p>
                      </div>

                      {/* 费率优势 */}
                      <div className="group relative flex flex-col items-center justify-center border-2 border-white bg-gradient-to-b from-white to-gray-50 p-3 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800" style={{borderRadius: '4px'}}>
                        <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-medium text-gray-900">
                          费率优势
                        </h4>
                        <p className="mt-1 text-center text-sm text-gray-500">
                          0.38%起超低价费率
                        </p>
                      </div>

                      {/* 产品齐全 */}
                      <div className="group relative flex flex-col items-center justify-center border-2 border-white bg-gradient-to-b from-white to-gray-50 p-3 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800" style={{borderRadius: '4px'}}>
                        <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                        </div>
                        <h4 className="text-lg font-medium text-gray-900">
                          产品齐全
                        </h4>
                        <p className="mt-1 text-center text-sm text-gray-500">
                          POS机+收款码全覆盖
                        </p>
                      </div>

                      {/* 快速办理 */}
                      <div className="group relative flex flex-col items-center justify-center border-2 border-white bg-gradient-to-b from-white to-gray-50 p-3 shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:bg-gray-50 hover:shadow-[inset_8px_8px_20px_rgba(55,99,170,0.1),inset_-8px_-8px_20px_#fff] dark:bg-gray-800" style={{borderRadius: '4px'}}>
                        <div className="mb-2 flex h-10 w-10 items-center justify-center bg-blue-50">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-blue-600"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-lg font-medium text-gray-900">
                          快速办理
                        </h4>
                        <p className="mt-1 text-center text-sm text-gray-500">
                          当天审核当天发货
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// 默认导出组件，保持向后兼容性
const Brand = () => {
  // 二维码弹窗状态管理
  const [isQRModalOpen, setIsQRModalOpen] = useState(false)

  /**
   * 处理联系客服按钮点击事件
   * 打开二维码弹窗显示客服和公众号二维码
   */
  const handleContactService = () => {
    setIsQRModalOpen(true)
  }

  /**
   * 处理二维码弹窗关闭事件
   */
  const handleCloseQRModal = () => {
    setIsQRModalOpen(false)
  }

  return (
    <>
      <ApplicationProcess onContactService={handleContactService} />
      <SmartPaymentSolution onContactService={handleContactService} />

      {/* 共享的双二维码弹窗 */}
      <DualQRCodeModal
        isOpen={isQRModalOpen}
        onClose={handleCloseQRModal}
        buttonText="联系客服"
        title="联系我们"
        description="扫描下方二维码，联系客服或关注公众号获取更多信息"
        firstQRCode={{
          src: '/images/contact/userhlc.png',
          alt: '微信客服二维码',
          label: '微信客服',
          description: '添加微信客服'
        }}
        secondQRCode={{
          src: '/images/contact/userhlc.png',
          alt: '微信公众号二维码',
          label: '微信公众号',
          description: '关注公众号'
        }}
        qrCodeSize={120}
        hintText="长按二维码保存到相册"
      />
    </>
  )
}

export default Brand
