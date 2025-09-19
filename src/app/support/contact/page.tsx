'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  PhoneIcon,
  ChatBubbleLeftRightIcon,
  TicketIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
  ClockIcon,
  UserGroupIcon,
  ChevronRightIcon,
} from '@heroicons/react/20/solid'
import {
  ArrowRightIcon as ArrowRightIconOutline,
  ChatBubbleLeftRightIcon as ChatBubbleLeftRightIconOutline,
  ChevronRightIcon as ChevronRightIconOutline,
  PhoneIcon as PhoneIconOutline,
} from '@heroicons/react/24/outline'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

/**
 * 官方线上支持服务
 */
const onlineSupport = [
  {
    title: '在线工单',
    description: '获取产品技术支持，部署解决方案支持',
    icon: TicketIcon,
    action: '提交工单',
  },
  {
    title: '售前客服',
    description: '专属客户经理在线解答，提供1V1购买咨询',
    icon: ChatBubbleLeftRightIcon,
    action: '立即咨询',
  },
  {
    title: '售后客服',
    description: '365天全年无休，3分钟极速响应',
    icon: ChatBubbleLeftRightIcon,
    action: '立即咨询',
  },
  {
    title: '帮助中心',
    description: '覆盖产品介绍、购买、入门、操作等帮助内容',
    icon: DocumentTextIcon,
    action: '查看详情',
  },
]

/**
 * 联系我们信息
 */
const contactInfo = [
  {
    title: '产品咨询',
    phone: 'userhlc',
    wechat: '产品咨询微信',
    icon: PhoneIcon,
  },
  {
    title: '合作QQ',
    phone: '236749035',
    wechat: '联系QQ',
    icon: PhoneIcon,
  },
  {
    title: '基础设施资源合作',
    phone: '18296693256',
    wechat: '资源合作微信',
    icon: PhoneIcon,
  },
  {
    title: '微信公众号',
    description: '了解pos支付网最新产品动态',
    qrcode: '/images/contact/gzh.png',
    action: '关注二维码',
    icon: PhoneIcon,
  },
]

/**
 * 页面头部横幅组件 - 左右布局
 * 左侧展示联系信息，右侧展示联系方式卡片
 */
function HeroBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 md:py-24 lg:py-32">
      {/* 背景网格图案 */}
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full stroke-gray-200/40"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="contact-grid-pattern"
            width={200}
            height={200}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect
          fill="url(#contact-grid-pattern)"
          width="100%"
          height="100%"
          strokeWidth={0}
        />
      </svg>

      {/* 装饰元素 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 h-64 w-64 bg-gray-100/60 opacity-60 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 h-48 w-48 bg-blue-50/80 opacity-40 blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-2 lg:gap-20">
          {/* 左侧内容区 */}
          <div className="space-y-6 text-center lg:space-y-8 lg:text-left">
            {/* 品牌标识 */}
            <div className="inline-flex items-center border border-blue-200 bg-blue-50 px-3 py-2 text-xs font-medium text-blue-700 sm:px-4 sm:text-sm">
              <PhoneIconOutline className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              专业客户服务
            </div>
            {/* 主标题 */}
            <div className="space-y-3 sm:space-y-4">
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                <span className="text-blue-700">联系我们</span>
              </h1>
              <p className="mx-auto max-w-2xl text-base leading-7 text-gray-700 sm:text-lg md:text-xl lg:mx-0 lg:leading-8">
                pos支付网拥有专业的售前咨询、1v1资深顾问指导、热情的售后支持
              </p>
              <p className="mx-auto max-w-xl text-sm leading-6 text-gray-600 sm:text-base lg:mx-0 lg:leading-7">
                随时等候您的垂询，祝您轻松上云，技术无忧！
              </p>
            </div>
            {/* 联系方式快捷标签 */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start">
              <div className="border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 sm:px-4 sm:py-2 sm:text-sm">
                在线客服
              </div>
              <div className="border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 sm:px-4 sm:py-2 sm:text-sm">
                技术支持
              </div>
              <div className="border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-600 transition-colors hover:bg-gray-50 sm:px-4 sm:py-2 sm:text-sm">
                商务合作
              </div>
            </div>

            {/* CTA按钮组 */}
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
              <Button
                href="#contact"
                variant="solid"
                color="blue"
                className="group w-full sm:w-auto"
              >
                <span>立即咨询</span>
                <ChatBubbleLeftRightIconOutline className="ml-2 h-4 w-4 transition-transform group-hover:scale-110 sm:h-5 sm:w-5" />
              </Button>
              <Button
                href="#support"
                variant="outline"
                color="blue"
                className="group w-full sm:w-auto"
              >
                <span>查看支持</span>
                <ArrowRightIconOutline className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1 sm:h-4 sm:w-4" />
              </Button>
            </div>
          </div>

          {/* 右侧联系卡片区 */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative border border-gray-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
              {/* 卡片头部 */}
              <div className="border-b border-gray-200 bg-gray-50 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    <div className="text-sm font-medium text-gray-900">
                      在线服务
                    </div>
                  </div>
                  <div className="text-xs text-gray-600">24/7 支持</div>
                </div>
              </div>

              {/* 联系方式内容 */}
              <div className="p-6">
                {/* 服务时间 */}
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="rounded-lg bg-blue-50 p-3 text-center">
                    <div className="text-lg font-bold text-blue-600">7×24</div>
                    <div className="text-xs text-gray-600">小时服务</div>
                  </div>
                  <div className="rounded-lg bg-green-50 p-3 text-center">
                    <div className="text-lg font-bold text-green-600">
                      3分钟
                    </div>
                    <div className="text-xs text-gray-600">响应时间</div>
                  </div>
                </div>

                {/* 联系方式列表 */}
                <div className="space-y-4">
                  {/* 在线客服 */}
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <div className="text-sm font-medium text-gray-900">
                          在线客服
                        </div>
                      </div>
                      <div className="text-xs text-gray-600">立即连接</div>
                    </div>
                  </div>

                  {/* 技术支持 */}
                  <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                      <div className="text-sm font-medium text-gray-900">
                        技术支持
                      </div>
                    </div>
                    <div className="mt-2 text-xs text-gray-600">
                      专业技术团队为您解答
                    </div>
                  </div>

                  {/* 商务合作 */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 p-2 text-center">
                      <div className="text-xs font-medium text-blue-700">
                        商务合作
                      </div>
                      <div className="text-xs text-gray-600">partnership</div>
                    </div>
                    <div className="rounded-lg bg-gradient-to-r from-green-50 to-green-100 p-2 text-center">
                      <div className="text-xs font-medium text-green-700">
                        售后服务
                      </div>
                      <div className="text-xs text-gray-600">support</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* 底部状态 */}
              <div className="border-t border-gray-200 bg-gray-50 p-3">
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>服务状态：正常</span>
                  <span>响应时间：优秀</span>
                </div>
              </div>
            </div>

            {/* 装饰性光效 */}
            <div className="absolute -top-4 -right-4 h-24 w-24 bg-blue-100/60 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 h-16 w-16 bg-purple-100/60 blur-2xl"></div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 官方线上支持区域组件
 * 参考AI服务卡片的现代化设计风格，提供更好的用户体验
 */
function OnlineSupportSection() {
  return (
    <div className="bg-white py-14 sm:py-18 lg:py-24">
      <Container>
        <div className="mb-10 text-center sm:mb-14">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            官方线上支持
          </h2>
          <p className="mx-auto mt-3 max-w-3xl px-4 text-base text-gray-600 sm:mt-4 sm:px-0 sm:text-lg">
            专业的技术支持团队，为您提供全方位的产品技术支持和解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
          {onlineSupport.map((support, index) => {
            const Icon = support.icon
            return (
              <div
                key={support.title}
                className="group flex h-full transform flex-col overflow-hidden border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-lg"
              >
                <div className="p-6">
                  {/* 图标和标题区域 */}
                  <div className="mb-4 flex items-center">
                    <div className="mr-4 flex h-12 w-12 items-center justify-center bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
                      <Icon
                        className="h-6 w-6 text-blue-600"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                      {support.title}
                    </h3>
                  </div>

                  {/* 描述内容 */}
                  <p className="mb-6 text-sm leading-relaxed text-gray-600">
                    {support.description}
                  </p>

                  {/* 操作按钮 */}
                  <div className="mt-auto">
                    <Button
                      variant="outline"
                      className="w-full border-blue-200 bg-white px-3 py-1.5 text-sm text-blue-600 shadow-sm transition-all duration-300 group-hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow"
                    >
                      <span className="transition-all duration-300 group-hover:mr-1">
                        {support.action}
                      </span>
                      <ArrowRightIcon className="ml-2 h-3 w-3 transform transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/**
 * 联系我们区域组件
 */
function ContactInfoSection() {
  return (
    <div className="bg-gray-50 py-12 sm:py-16 lg:py-24">
      <Container>
        <div className="mb-8 text-center sm:mb-12">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl lg:text-4xl">
            联系我们
          </h2>
          <p className="mt-3 px-4 text-base text-gray-600 sm:mt-4 sm:px-0 sm:text-lg">
            多种联系方式，为您提供专业的咨询和合作服务
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon
            const isWechatPublic = contact.title === '微信公众号'

            return (
              <div
                key={contact.title}
                className="relative border border-gray-200 bg-white p-4 shadow-md transition-shadow duration-300 hover:shadow-lg sm:p-6"
              >
                {/* 图标区域 */}
                <div className="mx-auto mb-3 flex h-8 w-8 items-center justify-center rounded-sm bg-gray-100 sm:mb-4 sm:h-10 sm:w-10">
                  <Icon className="h-4 w-4 text-blue-600 sm:h-5 sm:w-5" />
                </div>

                {/* 内容区域 */}
                <div className="text-center">
                  <h3 className="mb-3 text-base font-semibold text-gray-900 sm:mb-4 sm:text-lg">
                    {contact.title}
                  </h3>
                  <div className="mb-3 h-px w-full bg-gray-200 sm:mb-4"></div>

                  {isWechatPublic ? (
                    /* 微信公众号特殊布局 */
                    <>
                      <p className="mb-3 text-xs text-gray-600 sm:text-sm">
                        {contact.description}
                      </p>
                      <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center overflow-hidden bg-gray-100 sm:h-24 sm:w-24">
                        {contact.qrcode && (
                          <Image
                            src={contact.qrcode}
                            alt="微信公众号二维码"
                            width={96}
                            height={96}
                            className="h-full w-full object-cover"
                            unoptimized
                          />
                        )}
                      </div>
                      <p className="text-xs text-gray-600">{contact.action}</p>
                    </>
                  ) : (
                    /* 普通联系方式布局 */
                    <>
                      {/* 联系电话 */}
                      <div className="mb-3 sm:mb-4">
                        <p className="mb-1 text-xs text-gray-600 sm:text-sm">
                          联系电话
                        </p>
                        <p className="text-lg font-semibold text-blue-600 sm:text-xl">
                          {contact.phone}
                        </p>
                      </div>

                      {/* 联系微信 */}
                      <div className="mb-4 sm:mb-6">
                        <p className="mb-2 text-xs text-gray-600 sm:text-sm">
                          联系微信
                        </p>
                        <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden bg-gray-100 sm:h-28 sm:w-28">
                          <Image
                            src={contact.title === '产品咨询' ? '/images/contact/userhlc.png' : 
                                 contact.title === '合作QQ' ? '/images/contact/QQ.png' : 
                                 '/images/contact/weixin.png'}
                            alt="联系微信二维码"
                            width={112}
                            height={112}
                            className="h-full w-full object-cover"
                            unoptimized
                          />
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/**
 * 联系我们页面主组件
 * 展示pos支付网计算的联系方式、售前售后支持、帮助文档等信息
 * @returns JSX.Element
 */
export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* 页面头部横幅 */}
        <HeroBanner />

        {/* 官方线上支持区域 */}
        <OnlineSupportSection />

        {/* 联系我们区域 */}
        <ContactInfoSection />

        {/* 行动号召区域 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-50 p-6 sm:mt-14 sm:p-8 lg:mt-16"
        >
          <Container>
            <div className="mb-6 text-center sm:mb-8">
              <h3 className="mb-2 text-xl font-bold sm:text-2xl">
                还有其他问题?
              </h3>
              <p className="px-4 text-sm text-gray-600 sm:text-base">
                如果您有任何其他问题或需要更详细的信息，请随时联系我们的客户服务团队
              </p>
            </div>

            <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
              <a
                href="mailto:contact@aitech.com"
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
          </Container>
        </motion.div>
      </main>
      <Footer />
    </>
  )
}
