'use client'

import { motion } from 'framer-motion'
import {
  CircleHelp,
  Zap,
  Shield,
  Laptop,
  GraduationCap,
  ChevronDownIcon,
  ChevronUpIcon,
} from 'lucide-react'
import { Container } from '@/components/Container'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import { useState } from 'react'

/**
 * 支付收款常见问题数据
 */
const faqs = [
  {
    icon: <Laptop className="h-5 w-5 text-[#015bfe]" />,
    question: '支持哪些收款方式？',
    answer:
      '我们支持数字人民币支付、刷脸支付、扫码支付（微信、支付宝等）、银行卡支付（芯片/磁条卡、贷记/借记卡）、NFC支付（Apple Pay、HUAWEI Pay、云闪付等）等多种收款方式，可随心组合搭配。',
  },
  {
    icon: <Shield className="h-5 w-5 text-[#015bfe]" />,
    question: '申请开通流程复杂吗？',
    answer:
      '申请流程清晰，审核速度快，终端安装简单。界面清晰，上手简单，让您专心经营。支持自助开通商户收款，一键开户即可使用。',
  },
  {
    icon: <Zap className="h-5 w-5 text-[#015bfe]" />,
    question: '提供哪些增值服务？',
    answer:
      '我们提供一站式SaaS服务，集会员管理、数据管理、营销工具等多项服务于一体。还有丰富营销活动及代运营资源，助力门店推广引流。',
  },
  {
    icon: <GraduationCap className="h-5 w-5 text-[#015bfe]" />,
    question: '费率和价格如何？',
    answer:
      '价格透明，费率清晰，使用更放心。软硬件价格透明，没有额外收费项目。费率清晰，每笔收入皆可快速查询，支持自定义提现，资金周转快。',
  },
]

/**
 * 支付收款FAQ组件
 * 提供支付收款相关常见问题的交互式展示，包含动画效果和联系方式
 * @returns JSX.Element
 */
export function PaymentFAQSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20" id="faq">
      <Container>
        <div className="mb-8 text-center sm:mb-10 lg:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="mb-3 flex justify-center sm:mb-4">
              <CircleHelp className="h-8 w-8 text-[#015bfe] sm:h-10 sm:w-10" />
            </div>
            <h2 className="mb-3 text-2xl font-bold sm:mb-4 sm:text-3xl lg:text-4xl">
              常见问题
            </h2>
            <div className="mx-auto mb-4 h-1 w-16 bg-[#015bfe] sm:mb-5 sm:w-20 lg:mb-6 lg:w-24"></div>
            <p className="mx-auto max-w-2xl px-4 text-sm text-gray-600 sm:text-base">
              以下是关于支付收款服务的常见问题，如果您有其他疑问，请随时联系我们
            </p>
          </motion.div>
        </div>

        <div className="w-full">
          {/* 移动端可折叠FAQ列表 */}
          <div className="block space-y-3 lg:hidden">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Disclosure defaultOpen={false}>
                  {({ open }) => (
                    <div className="border border-gray-100 bg-white transition-all duration-300 hover:border-gray-200">
                      <DisclosureButton className="flex w-full items-center justify-between p-4 text-left hover:bg-gray-50 focus:outline-none">
                        <div className="flex flex-1 items-center">
                          <div className="mr-3 flex h-8 w-8 flex-shrink-0 items-center justify-center bg-[#015bfe]/10">
                            {faq.icon}
                          </div>
                          <h3 className="text-base leading-tight font-semibold text-gray-900">
                            {faq.question}
                          </h3>
                        </div>
                        <div className="ml-3 flex-shrink-0">
                          {open ? (
                            <ChevronUpIcon className="h-5 w-5 text-[#015bfe] transition-transform duration-200" />
                          ) : (
                            <ChevronDownIcon className="h-5 w-5 text-[#015bfe] transition-transform duration-200" />
                          )}
                        </div>
                      </DisclosureButton>
                      <DisclosurePanel className="px-4 pb-4">
                        <div className="ml-11 border-t border-gray-100 pt-3">
                          <p className="text-sm leading-relaxed text-gray-600">
                            {faq.answer}
                          </p>
                        </div>
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>

          {/* PC端可折叠FAQ网格 */}
          <div className="hidden grid-cols-1 gap-4 lg:grid">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Disclosure defaultOpen={false}>
                  {({ open }) => (
                    <div className="border border-gray-100 bg-white transition-all duration-300 hover:border-gray-200">
                      <DisclosureButton className="flex w-full items-center justify-between p-6 text-left hover:bg-gray-50 focus:outline-none">
                        <div className="flex flex-1 items-center">
                          <div className="mr-4 flex h-8 w-8 items-center justify-center bg-[#015bfe]/10">
                            {faq.icon}
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900">
                            {faq.question}
                          </h3>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          {open ? (
                            <ChevronUpIcon className="h-6 w-6 text-[#015bfe] transition-transform duration-200" />
                          ) : (
                            <ChevronDownIcon className="h-6 w-6 text-[#015bfe] transition-transform duration-200" />
                          )}
                        </div>
                      </DisclosureButton>
                      <DisclosurePanel className="px-6 pb-6">
                        <div className="ml-12 border-t border-gray-100 pt-4">
                          <p className="text-base leading-relaxed text-gray-600">
                            {faq.answer}
                          </p>
                        </div>
                      </DisclosurePanel>
                    </div>
                  )}
                </Disclosure>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 bg-gray-50 p-6 sm:mt-14 sm:p-8 lg:mt-16"
          >
            <div className="mb-6 text-center sm:mb-8">
              <h3 className="mb-2 text-xl font-bold sm:text-2xl">
                还有其他问题?
              </h3>
              <p className="px-4 text-sm text-gray-600 sm:text-base">
                如果您有任何其他支付收款问题或需要更详细的信息，请随时联系我们的专业服务团队
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="mailto:contact@payment.com"
                className="inline-flex items-center justify-center bg-[#015bfe] px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 sm:px-6 sm:py-3 sm:text-base"
              >
                发送邮件咨询
              </a>
              <a
                href="tel:+8610012345678"
                className="inline-flex items-center justify-center border border-[#015bfe] bg-white px-4 py-2.5 text-sm font-medium text-[#015bfe] transition-colors hover:bg-[#015bfe]/5 sm:px-6 sm:py-3 sm:text-base"
              >
                电话联系我们
              </a>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
