'use client'

import { useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import { Container } from '@/components/Container'

/**
 * 常见问题数据
 */
const faqs = [
  {
    question: '你们开发AI系统的周期是多久',
    answer: '一般根据你的项目大小和难易程度决定，一般都在5个工作日内可以完成很多工作，当然这里不包含定制开发。',
  },
  {
    question: '你们的AI系统可以接入哪些场景？',
    answer: '主流的软件我们基本都能接入，比如企业微信、钉钉、飞书、微信公众号等或者你自己的App也可以。',
  },
  {
    question: '你们AI接口对接的哪里的',
    answer: '我们接入OpenAI官方最新接口，访问速度非常快，支持GPT4.0和GPT3.5。国内大语言模型例如ChatGLM我们也是支持的。',
  },
  {
    question: '你们训练AI模型的时间是多久',
    answer: '这个需要根据您提供的训练资料决定，根据你提供的训练资料才可以知道他的训练时间和学习过程。',
  },
]

/**
 * FAQ组件
 * 提供常见问题的交互式展示
 * @returns JSX.Element
 */
export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">常见问题</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            解答您的疑问
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            关于艺创AI系统的常见问题解答
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20">
          <dl className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <dt>
                  <button
                    className="flex w-full items-start justify-between text-left text-gray-900"
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  >
                    <span className="text-base font-semibold leading-7">{faq.question}</span>
                    <span className="ml-6 flex h-7 items-center">
                      <ChevronRightIcon
                        aria-hidden="true"
                        className={`size-6 transform transition-transform ${
                          openIndex === index ? 'rotate-90' : ''
                        }`}
                      />
                    </span>
                  </button>
                </dt>
                {openIndex === index && (
                  <dd className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}