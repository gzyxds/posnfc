'use client'

import { JSX, useState } from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  ChatBubbleLeftRightIcon,
  PaintBrushIcon,
  CpuChipIcon,
  GlobeAltIcon,
  BoltIcon,
  UserGroupIcon,
  PlayIcon,
  SpeakerWaveIcon,
  FaceSmileIcon,
  SparklesIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  TvIcon,
  VideoCameraIcon,
  PencilIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Menu, MenuButton } from '@headlessui/react'

// 产品优势配置数据
interface Advantage {
  title: string
  description: string
  stats: string
  unit: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

const advantages: Advantage[] = [
  {
    title: '数字分身训练数据',
    description: '基于深度学习的数字人训练数据集，包含多种表情、动作和语音样本',
    stats: '10万+',
    unit: '训练样本',
    icon: FaceSmileIcon,
  },
  {
    title: '声音复刻训练数据',
    description: '高质量音频数据集，支持多语言、多音色的声音克隆和合成',
    stats: '50万+',
    unit: '音频片段',
    icon: SpeakerWaveIcon,
  },
  {
    title: '数字人整体效果',
    description: '逼真的数字人形象，支持实时表情同步和自然动作生成',
    stats: '99%',
    unit: '相似度',
    icon: SparklesIcon,
  },
  {
    title: '集成接入方式',
    description: '提供完整的API接口和SDK，支持快速集成到各种应用场景',
    stats: '5分钟',
    unit: '快速接入',
    icon: RocketLaunchIcon,
  }
]

// 应用场景配置数据
interface Scenario {
  id: string
  name: string
  description: string
  features: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  video: string
}

const scenarios: Scenario[] = [
  {
    id: 'live-streaming',
    name: '带货视频',
    description: '数字人主播，24小时不间断直播带货',
    features: ['品牌代言', '内容创作', '社交互动'],
    icon: TvIcon,
    video: '/videos/live-streaming.mp4'
  },
  {
    id: 'digital-employee',
    name: '数字员工',
    description: '智能客服助手，提供专业咨询服务',
    features: ['智能问答', '情感识别', '多语言支持'],
    icon: UserGroupIcon,
    video: '/videos/digital-employee.mp4'
  },
  {
    id: 'content-creation',
    name: '内容创作',
    description: 'AI驱动的内容生成和创意制作',
    features: ['脚本生成', '视频制作', '多媒体输出'],
    icon: AcademicCapIcon,
    video: '/videos/content-creation.mp4'
  },
  {
    id: 'virtual-broadcast',
    name: '虚拟直播',
    description: '虚拟主播直播，降低运营成本',
    features: ['实时互动', '自动回复', '数据分析'],
    icon: MegaphoneIcon,
    video: '/videos/virtual-broadcast.mp4'
  }
]

// Hero区域组件 - 数字人首页英雄区域
interface Feature {
  name: string
  href: string
}

interface Card {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

function HeroSection(): JSX.Element {
  // 产品特性标签配置
  const features: Feature[] = [
    { name: 'AI数字人', href: '/human' },
    { name: '知识库', href: '/ai' },
    { name: '智能绘画', href: '/chat' },
    { name: '论文创作', href: '/paper' },
    { name: 'PHP&Java', href: '/' }
  ]

  // 功能卡片配置 - 数字人核心特性
  const cards: Card[] = [
    {
      icon: CpuChipIcon,
      title: '智能交互',
      description: '自然语言对话，情感识别表达'
    },
    {
      icon: PaintBrushIcon,
      title: '形象定制',
      description: '多样化数字人形象，个性化定制'
    },
    {
      icon: GlobeAltIcon,
      title: '多场景应用',
      description: '客服、教育、直播、营销全覆盖'
    },
    {
      icon: BoltIcon,
      title: '实时渲染',
      description: '高清画质，流畅动作表现'
    }
  ]
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
      {/* 背景装饰效果 */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-[#0055ff]/8 blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#0055ff]/6 blur-3xl opacity-30"></div>
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-10 opacity-20">
          <div className="flex space-x-1 sm:space-x-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0055ff]/40 rounded-sm"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0055ff]/30 rounded-sm"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0055ff]/40 rounded-sm"></div>
          </div>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">
          {/* 左侧内容区域 */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6">
            <div className="space-y-3 sm:space-y-4">
              {/* 品牌标识 */}
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#0055ff]/10 border border-[#0055ff]/20 text-[#0055ff] text-xs sm:text-sm font-medium mb-2 rounded-md">
                <BoltIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                虚拟数字人
              </div>

              {/* 主标题 */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-[#0055ff] block mb-1 sm:mb-2 bg-gradient-to-r from-[#0055ff] to-[#0066ff] bg-clip-text">
                  数字分身
                </span>
                <span className="text-gray-900 dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
                  赋能企业智能化转型
                </span>
              </h1>
            </div>
            {/* 描述文本 */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                基于先进的AI技术，提供高度拟真的数字人解决方案，助力企业数字化转型
              </p>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
                一次购买，永久免费更新
              </p>
            </div>

            {/* 特性标签 */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {features.map((feature) => (
                <a
                  key={feature.name}
                  href={feature.href}
                  className="px-3 py-2 sm:px-4 sm:py-2.5 bg-[#0055ff]/10 text-[#0055ff] border border-[#0055ff]/20 text-xs sm:text-sm font-medium hover:bg-[#0055ff]/20 hover:border-[#0055ff]/30 hover:scale-105 transition-all duration-200 rounded-md"
                  aria-label={feature.name}
                >
                  {feature.name}
                </a>
              ))}
            </div>

            {/* 操作按钮组 */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Menu as="div" className="w-full sm:w-auto">
                <MenuButton
                  as="a"
                  href="#demo"
                  className="group inline-flex w-full justify-center items-center bg-[#0055ff] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#0066ff] focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0055ff]"
                >
                  <span>立即体验</span>
                  <ChatBubbleLeftRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </MenuButton>
              </Menu>

              <Menu as="div" className="w-full sm:w-auto">
                <MenuButton
                  as="a"
                  href="#features"
                  className="group inline-flex w-full justify-center items-center bg-white px-4 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50 border border-gray-300 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                >
                  <span>了解更多</span>
                  <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </MenuButton>
              </Menu>
            </div>
          </div>

          {/* 右侧展示区域 */}
          <div className="relative mt-8 sm:mt-10 lg:mt-0">
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-[#0055ff]/10 to-[#0066ff]/10 blur-xl opacity-50 rounded-xl"></div>
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-6 md:p-8 lg:p-10 group rounded-xl">
              {/* 顶部标签区域 */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mb-6 sm:mb-8 md:mb-10">
                {features.slice(0, 4).map((feature, index) => (
                  <span
                    key={feature.name}
                    className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-[#0055ff]/10 text-[#0055ff] border border-[#0055ff]/20 font-medium hover:bg-[#0055ff]/20 transition-colors cursor-pointer rounded-md"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {feature.name}
                  </span>
                ))}
              </div>
              {/* 功能卡片网格 */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {cards.map((card, index) => (
                  <div
                    key={card.title}
                    className="bg-gray-50/80 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 p-3 sm:p-4 md:p-5 lg:p-7 hover:shadow-lg hover:border-[#0055ff]/30 hover:-translate-y-1 transition-all duration-300 group/card rounded-lg"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {/* 图标区域 */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#0055ff]/10 to-[#0066ff]/10 border border-[#0055ff]/20 flex items-center justify-center mb-2 sm:mb-3 md:mb-5 group-hover/card:scale-110 group-hover/card:border-[#0055ff]/40 transition-all duration-300 rounded-lg">
                      <card.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#0055ff] group-hover/card:text-[#0066ff] transition-colors" aria-hidden="true" />
                    </div>
                    {/* 内容区域 */}
                    <div className="space-y-1 sm:space-y-2 md:space-y-3">
                      <h4 className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

// 产品优势展示组件
function AdvantagesSection(): JSX.Element {
  // 渐变色配置
  const gradientColors = [
    'from-blue-600 to-blue-700',
    'from-blue-500 to-blue-600',
    'from-blue-400 to-blue-500',
    'from-blue-700 to-blue-800'
  ]
  const bulletColors = [
    'bg-blue-600',
    'bg-blue-500',
    'bg-blue-400',
    'bg-blue-700'
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900">
      <Container>
        {/* 标题区域 */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight">
            产品优势
          </h2>
          <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-blue-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed px-4">
            多维度产品优势，助力企业数字化升级
          </p>
        </div>
        {/* 产品优势卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-0">
          {advantages.map((advantage, index) => {

            return (
              <div
                key={advantage.title}
                className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* 数据展示区域 */}
                <div className={`bg-gradient-to-br ${gradientColors[index % 4]} p-6 sm:p-8 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-16 sm:w-24 h-16 sm:h-24 bg-white/10 -translate-y-8 sm:-translate-y-12 translate-x-8 sm:translate-x-12"></div>
                  <div className="relative z-10">
                    <h3 className="text-sm sm:text-lg font-semibold mb-2 sm:mb-3 opacity-90">
                      {advantage.title}
                    </h3>
                    <div className="flex items-baseline">
                      <span className="text-3xl sm:text-5xl font-bold">
                        {advantage.stats}
                      </span>
                      {advantage.unit && (
                        <span className="text-lg sm:text-xl font-medium ml-2">
                          {advantage.unit}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
                {/* 内容区域 */}
                <div className="p-6 sm:p-8">
                  <h4 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-4 sm:mb-6">
                    {advantage.description.split('，')[0]}
                  </h4>
                  <ul className="space-y-3 sm:space-y-4">
                    {advantage.description.split('，').slice(1).map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-1.5 sm:w-2 h-1.5 sm:h-2 ${bulletColors[index % 4]} mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0`}></div>
                        <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {feature.trim()}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}

/**
 * 演示中心组件 - 参考demo页面设计风格
 */
// 演示账号接口定义
interface DemoAccount {
  title: string
  url: string
  username: string
  password: string
  description: string
}

// 在线演示组件
function DemoSection(): JSX.Element {
  // 演示账号配置
  const demoAccounts: DemoAccount[] = [
    {
      title: 'PC端后台',
      url: 'https://v.cnai.art',
      username: '自行注册',
      password: '自行注册',
      description: '完整的数字人管理后台'
    },
    {
      title: '代理商后台',
      url: 'https://demo.cnai.art/admin',
      username: 'demo',
      password: 'demo',
      description: '代理商专用管理系统'
    },
    {
      title: 'SaaS平台端',
      url: 'https://saas.cnai.art/platform',
      username: '暂不提供',
      password: '暂不提供',
      description: 'SaaS服务管理平台'
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 sm:opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-100 blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-60 sm:h-60 bg-indigo-100 blur-2xl sm:blur-3xl"></div>
      </div>
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          {/* 左侧内容 */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 bg-blue-600 mr-2"></span>
              在线演示
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              AI数字人SaaS系统2.0<br className="hidden sm:block" />演示中心
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              通过我们的在线演示系统，您可以亲身体验AI数字人的强大功能和直观界面，无需安装，即刻体验。
            </p>

            <div className="bg-white shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 flex items-center justify-center mr-2 sm:mr-3">
                  <PlayIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-medium">演示账号信息</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {demoAccounts.map((account, index) => (
                  <div key={account.title} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-900">{account.title}</p>
                      <p className="text-xs text-blue-600 break-all sm:break-normal">{account.url}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-1 sm:mr-2">账号:</span>
                        <span className="text-xs font-medium">{account.username}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-1 sm:mr-2">密码:</span>
                        <span className="text-xs font-medium">{account.password}</span>
                      </div>
                      <Button
                        href={account.url}
                        variant="outline"
                        className="h-7 sm:h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50 mt-2 sm:mt-0"
                      >
                        访问
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px]"
                href="#"
              >
                申请专属演示
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px]"
                href="#"
              >
                联系客服
              </Button>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* 主要演示视频 */}
              <div className="bg-white p-4 sm:p-6 shadow-lg">
                <video
                  src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/virtual-digit.ed88f4c6.mp4"
                  className="w-full h-auto"
                  preload="metadata"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                />
                <div className="mt-3 sm:mt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-900">数字人管理平台</h4>
                    <p className="text-xs text-gray-500">一站式管理您的所有数字人资产</p>
                  </div>
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500"></div>
                  </div>
                </div>
              </div>

              {/* 装饰元素 */}
              <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-gradient-to-br from-blue-600 to-blue-700 p-3 sm:p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm sm:text-base font-medium text-white tracking-wide">在线演示</p>
                    <p className="text-xs sm:text-sm text-blue-100/90">实时体验</p>
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

// 应用场景展示组件
function ScenariosSection(): JSX.Element {
  const [activeScenario, setActiveScenario] = useState<keyof typeof scenarioData>('virtualIP')

  // 场景数据配置
  const scenarioData = {
    virtualIP: {
      title: '带货视频',
      subtitle: '热门场景',
      description: '面向文化传播、影视内容等多个行业，帮助打造带货视频，赋能品牌营销，提升品牌心智。',
      features: [
        { name: '品牌代言', desc: '提升品牌辨识度' },
        { name: '内容创作', desc: '高质量虚拟角色' },
        { name: '社交互动', desc: '增强用户体验' }
      ],
      videoUrl: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/d7597b2e51444a40_1697534317820.mp4',
      icon: VideoCameraIcon,
      tagText: '带货视频',
      tagDesc: '品牌营销解决方案'
    },
    digitalEmployee: {
      title: '数字员工',
      subtitle: '企业应用',
      description: '为企业提供智能数字员工解决方案，提高工作效率，降低人力成本，实现业务流程自动化。',
      features: [
        { name: '智能客服', desc: '7×24小时在线服务' },
        { name: '销售助手', desc: '提高转化率' },
        { name: '培训讲师', desc: '标准化培训内容' }
      ],
      videoUrl: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/58de8e04fa71151b_1697611541810.mp4',
      icon: UserGroupIcon,
      tagText: '数字员工',
      tagDesc: '智能业务助手'
    },
    contentCreation: {
      title: '内容创作',
      subtitle: '创意应用',
      description: '为媒体、自媒体、营销团队提供智能内容创作解决方案，提高内容生产效率和质量。',
      features: [
        { name: '视频脚本', desc: '专业视频脚本' },
        { name: '营销文案', desc: '提高转化率' },
        { name: '多语言翻译', desc: '拓展全球市场' }
      ],
      videoUrl: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/77eb68b8aabcb8aa_1697534305029.mp4',
      icon: PencilIcon,
      tagText: '内容创作',
      tagDesc: '智能创作助手'
    },
    virtualLive: {
      title: '虚拟直播',
      subtitle: '直播应用',
      description: '提供24小时不间断的虚拟主播直播服务，降低直播成本，提升直播效果和用户粘性。',
      features: [
        { name: '24小时直播', desc: '全天候在线' },
        { name: '互动问答', desc: '智能回复观众' },
        { name: '商品推荐', desc: '精准营销' }
      ],
      videoUrl: 'https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/virtual-digit.ed88f4c6.mp4',
      icon: TvIcon,
      tagText: '虚拟直播',
      tagDesc: '24小时在线主播'
    }
  }

  const currentScenario = scenarioData[activeScenario]

  return (
    <section className="py-20 bg-white">
      <Container>
        {/* 标题区域 - 参考demo页面设计 */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full mb-6">
            <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
            <span className="text-blue-700 text-sm font-medium">场景应用</span>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">应用场景</h2>
          <div className="w-20 h-0.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">丰富的应用场景和解决方案，满足多种业务需求</p>
        </div>

        {/* 场景标签导航 - 现代化简约风格 - 优化移动端滚动 */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex bg-gray-50 p-1.5 shadow-sm overflow-x-auto max-w-full scrollbar-hide">
            <button
              className={`px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all duration-300 relative whitespace-nowrap min-w-[100px] sm:min-w-[120px] ${
                activeScenario === 'virtualIP'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white'
              }`}
              onClick={() => setActiveScenario('virtualIP')}
            >
              <span className="relative z-10 text-sm sm:text-base flex items-center justify-center">
                <VideoCameraIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                带货视频
              </span>
              {activeScenario === 'virtualIP' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              )}
            </button>
            <button
              className={`px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all duration-300 relative whitespace-nowrap min-w-[100px] sm:min-w-[120px] ${
                activeScenario === 'digitalEmployee'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white'
              }`}
              onClick={() => setActiveScenario('digitalEmployee')}
            >
              <span className="relative z-10 text-sm sm:text-base flex items-center justify-center">
                <UserGroupIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                数字员工
              </span>
              {activeScenario === 'digitalEmployee' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              )}
            </button>
            <button
              className={`px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all duration-300 relative whitespace-nowrap min-w-[100px] sm:min-w-[120px] ${
                activeScenario === 'contentCreation'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white'
              }`}
              onClick={() => setActiveScenario('contentCreation')}
            >
              <span className="relative z-10 text-sm sm:text-base flex items-center justify-center">
                <PencilIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                内容创作
              </span>
              {activeScenario === 'contentCreation' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              )}
            </button>
            <button
              className={`px-4 sm:px-6 py-2 sm:py-3 font-medium transition-all duration-300 relative whitespace-nowrap min-w-[100px] sm:min-w-[120px] ${
                activeScenario === 'virtualLive'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-white'
              }`}
              onClick={() => setActiveScenario('virtualLive')}
            >
              <span className="relative z-10 text-sm sm:text-base flex items-center justify-center">
                <TvIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                虚拟直播
              </span>
              {activeScenario === 'virtualLive' && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700"></div>
              )}
            </button>
          </div>
        </div>

        {/* 场景内容 - 参考demo页面的左右布局 */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center px-4 sm:px-6 lg:px-8">
          {/* 左侧内容 */}
          <div className={`space-y-8 ${
            activeScenario === 'digitalEmployee' ? 'order-2 lg:order-1' : ''
          }`}>
            <div>
              <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full mb-4">
                <span className="text-blue-600 text-xs font-medium">{currentScenario.subtitle}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">{currentScenario.title}</h3>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                {currentScenario.description}
              </p>
            </div>

            {/* 功能特性 - 简洁样式 */}
             <div className="space-y-3">
               {currentScenario.features.map((feature: { name: string; desc: string }, index: number) => (
                 <div key={index} className="flex items-center space-x-3">
                   <div className="w-2 h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                   <div>
                     <span className="font-medium text-gray-900">{feature.name}</span>
                     <span className="text-gray-500 ml-2">- {feature.desc}</span>
                   </div>
                 </div>
               ))}
             </div>

            {/* 按钮组 - 优化移动端按钮大小 */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none shadow-lg transition-all duration-200 min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                onClick={() => window.location.href = '/demo'}
              >
                <PlayIcon className="w-4 h-4 mr-2" />
                立即试用
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 sm:py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px] flex items-center justify-center"
                href="#"
              >
                <UserGroupIcon className="w-4 h-4 mr-2" />
                购买授权
              </Button>
            </div>
          </div>

          {/* 右侧视频 */}
          <div className={`relative ${
            activeScenario === 'digitalEmployee' ? 'order-1 lg:order-2' : ''
          }`}>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl sm:rounded-3xl p-4 sm:p-8">
              <video
                src={currentScenario.videoUrl}
                className="w-full rounded-2xl shadow-lg"
                preload="metadata"
                playsInline
                controls
                autoPlay
                muted
                loop
              >
                您的浏览器不支持 video 标签。
              </video>
            </div>
            {/* 悬浮标签 */}
            <div className={`absolute bg-white rounded-2xl shadow-lg p-4 border border-gray-100 ${
              activeScenario === 'digitalEmployee' ? '-top-4 -left-4' : '-top-4 -right-4'
            }`}>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-blue-50 rounded-xl overflow-hidden flex items-center justify-center">
                  <currentScenario.icon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{currentScenario.tagText}</p>
                  <p className="text-sm text-gray-500">{currentScenario.tagDesc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </Container>
    </section>
  )
}

/**
 * 核心功能数据接口定义
 * @interface CoreFeature
 * @property {string} name - 功能名称
 * @property {string} description - 功能描述
 * @property {React.ComponentType} icon - 功能图标组件
 * @property {string} image - 功能展示图片
 * @property {string} [videoUrl] - 可选的视频地址
 * @property {Array} stats - 功能统计数据
 */
interface CoreFeature {
  name: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  image: string
  videoUrl?: string
  stats: {
    label: string
    value: string
  }[]
}

/**
 * 核心功能展示组件 - 简洁版设计
 * 展示数字人产品的核心功能和特性，采用简洁清晰的设计风格
 * 特点：简洁布局、清晰层次、易于阅读
 */
function CoreFeaturesSection(): JSX.Element {
  // 核心功能数据配置
  const coreFeatures: CoreFeature[] = [
    {
      name: '数字分身',
      description: '轻松创建你的AI虚拟数字人！只需上传一段视频，即可高品质、批量克隆你的形象！',
      icon: FaceSmileIcon,
      image: '/images/product/human1.png',
      stats: [
        { label: '高清还原', value: '100%真实感官体验' },
        { label: '形象生成', value: '100%快速生成' },
        { label: '定制形象', value: '个性化定制服务' }
      ]
    },
    {
      name: '声音克隆',
      description: '有声胜过一个性格说，仅需1句话，快速克隆你的声色，配合文案即可生成专属声音口播内容！',
      icon: SpeakerWaveIcon,
      image: '/images/product/Sound.webp',
      stats: [
        { label: '声音还原', value: '100%真实还原' },
        { label: '语音转换', value: '100%智能转换' },
        { label: '超逼真', value: '100%自然效果' }
      ]
    },
    {
      name: '用户管理',
      description: '基于可定制的多层分站，输入用户相关信息系统后，即可创建新分站与管理账号。',
      icon: UserGroupIcon,
      image: '/images/product/human2.png',
      stats: [
        { label: '多级分站', value: '灵活的分站管理' },
        { label: '账户管理', value: '完善的账户体系' },
        { label: '权限管理', value: '精细的权限控制' }
      ]
    },
    {
      name: 'AI视频',
      description: 'AI一键自动生成视频，从容应对内容创作和营销需求，助力商家和创作者提升视频生成的效率。',
      icon: VideoCameraIcon,
      image: '/images/product/saas.svg',
      videoUrl: 'https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/ai-video.a4cd977a.mp4',
      stats: [
        { label: '一键生成', value: '智能快速生成视频' },
        { label: '场景丰富', value: '多样化视频模板' },
        { label: '高效营销', value: '提升内容转化率' }
      ]
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* 标题区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            核心功能
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            强大的AI技术能力，为您提供全方位的数字人解决方案
          </p>
        </div>

        {/* 功能展示 */}
        <div className="mx-auto mt-16 max-w-[1800px]">
          <div className="space-y-20">
            {coreFeatures.map((feature, index) => (
              <div
                key={feature.name}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* 内容区域 */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{feature.name}</h3>
                  </div>

                  <p className="text-lg leading-8 text-gray-600 mb-8">
                    {feature.description}
                  </p>

                  {/* 特性列表 */}
                  <div className="space-y-4 mb-8">
                    {feature.stats.map((stat) => (
                      <div key={stat.label} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                        <div>
                          <dt className="font-semibold text-gray-900">{stat.label}</dt>
                          <dd className="text-gray-600">{stat.value}</dd>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 操作按钮 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <Button
                      href="#"
                      variant="solid"
                      color="blue"
                      className="px-4 py-3 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      立即体验
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="px-4 py-3 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      购买授权
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="px-4 py-3 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      体验Demo
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="px-4 py-3 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      联系客服
                    </Button>
                  </div>
                </div>

                {/* 媒体区域 */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    {feature.videoUrl ? (
                      <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                        <video
                          src={feature.videoUrl}
                          controls
                          autoPlay
                          muted
                          loop
                          className="h-full w-full object-cover"
                        >
                          您的浏览器不支持视频播放。
                        </video>
                      </div>
                    ) : (
                      <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                        <Image
                          src={feature.image}
                          alt={`${feature.name}功能演示`}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部CTA区域 */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#features"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-md transition-colors"
          >
            探索更多功能
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}



// 数字人页面主组件
export default function DigitalHumanPage(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AdvantagesSection />
        <DemoSection />
        <ScenariosSection />
        <CoreFeaturesSection />

        {/* 接入流程 Section */}
        <section className="py-24 bg-gray-50">
          <Container>
            <div className="mx-auto max-w-[1800px] px-6 lg:px-8">
              {/* 标题区域 */}
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">接入流程</h2>
                <p className="text-gray-600 text-sm mb-3">为你提供快速、便捷的接入服务</p>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium mt-4"
                  onClick={() => window.open('https://v.cnai.art', '_blank')}
                >
                  立即接入
                </Button>
              </div>

              {/* 流程步骤 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 步骤1：需求沟通 */}
                <div className="text-center">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">01</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2">需求沟通</h3>
                  <div className="border-t border-gray-200 w-16 mx-auto my-3"></div>
                  <p className="text-gray-600 text-xs">提供产品信息，沟通数字人类型、使用场景和交付形式</p>
                </div>

                {/* 步骤2：确认合作 */}
                <div className="text-center">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">02</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2">确认合作</h3>
                  <div className="border-t border-gray-200 w-16 mx-auto my-3"></div>
                  <p className="text-gray-600 text-xs">通过控制台直接下单，或线下沟通商务合作</p>
                </div>

                {/* 步骤3：资产制作 */}
                <div className="text-center">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">03</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2">资产制作</h3>
                  <div className="border-t border-gray-200 w-16 mx-auto my-3"></div>
                  <p className="text-gray-600 text-xs">采集数据，制作数字人形象和声音资产</p>
                </div>

                {/* 步骤4：正式上线 */}
                <div className="text-center">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">04</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2">正式上线</h3>
                  <div className="border-t border-gray-200 w-16 mx-auto my-3"></div>
                  <p className="text-gray-600 text-xs">数字人上线，调用接口驱动或通过平台直接使用</p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 准备好开启您的AI数字人之旅了吗？ */}
        <section className="py-12 sm:py-16 lg:py-24">
          <Container>
            <div className="mx-auto max-w-[1800px] px-1 sm:px-2 lg:px-4">
              <div className="bg-white overflow-hidden relative border border-gray-200 rounded-lg sm:rounded-xl">
                {/* 装饰元素 - 仅在大屏显示 */}
                <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
                  <svg className="h-full w-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" fill="black" fillOpacity="0.02" />
                    <circle cx="300" cy="300" r="150" fill="black" fillOpacity="0.02" />
                    <circle cx="250" cy="150" r="50" fill="black" fillOpacity="0.02" />
                    <circle cx="150" cy="250" r="30" fill="black" fillOpacity="0.02" />
                  </svg>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* 左侧内容 */}
                  <div className="lg:col-span-3 p-6 sm:p-8 lg:p-12 relative z-10">
                    <div className="max-w-xl">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-900 leading-tight">
                        准备好开启您的<span className="text-blue-600">AI数字人之旅</span>了吗？
                      </h3>
                      <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                       专为企业主、个人博主打造短视频IP的数字人源码系统，支持真人声音+形象克隆，一键合成知识付费、课程、带货、形象宣传、行业干货等口播视频。基于SaaS多开模式的架构设计，支持无限OEM贴牌开通站点。版本免费迭代升级+售后技术支撑，让你无后顾之忧！
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-gray-900 font-medium text-sm sm:text-base">高清还原</h4>
                            <p className="text-gray-500 text-xs sm:text-sm">100%真实感官体验</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-gray-900 font-medium text-sm sm:text-base">专业服务</h4>
                            <p className="text-gray-500 text-xs sm:text-sm">7×24小时技术支持</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-gray-900 font-medium text-sm sm:text-base">数据安全</h4>
                            <p className="text-gray-500 text-xs sm:text-sm">企业级安全保障</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-gray-900 font-medium text-sm sm:text-base">持续更新</h4>
                            <p className="text-gray-500 text-xs sm:text-sm">定期功能迭代升级</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 sm:py-4 rounded-none shadow-lg w-full sm:w-auto">
                          立即体验
                        </Button>
                        <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 sm:py-4 rounded-none w-full sm:w-auto">
                          咨询价格
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* 右侧功能卡片 - 在移动端显示在下方 */}
                  <div className="lg:col-span-2 relative">
                    {/* 移动端显示 */}
                    <div className="lg:hidden p-6">
                      <div className="grid grid-cols-2 gap-3">
                        {/* AI数字人 */}
                        <div className="bg-gray-50 p-4 flex flex-col items-center justify-center shadow-sm rounded-lg">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <h4 className="text-gray-900 font-medium text-sm text-center">AI数字人</h4>
                          <p className="text-gray-500 text-xs text-center mt-1">双版本支持</p>
                        </div>

                        {/* 私有部署 */}
                        <div className="bg-gray-50 p-4 flex flex-col items-center justify-center shadow-sm rounded-lg">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <h4 className="text-gray-900 font-medium text-sm text-center">私有部署</h4>
                          <p className="text-gray-500 text-xs text-center mt-1">安全可控</p>
                        </div>

                        {/* 专业团队 */}
                        <div className="bg-gray-50 p-4 flex flex-col items-center justify-center shadow-sm rounded-lg">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <h4 className="text-gray-900 font-medium text-sm text-center">专业团队</h4>
                          <p className="text-gray-500 text-xs text-center mt-1">一对一支持</p>
                        </div>

                        {/* 开源方案 */}
                        <div className="bg-gray-50 p-4 flex flex-col items-center justify-center shadow-sm rounded-lg">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          </div>
                          <h4 className="text-gray-900 font-medium text-sm text-center">开源方案</h4>
                          <p className="text-gray-500 text-xs text-center mt-1">灵活定制</p>
                        </div>
                      </div>
                    </div>

                    {/* 桌面端显示 */}
                    <div className="hidden lg:block absolute inset-0">
                      <div className="w-full h-full p-6 flex items-center">
                        <div className="bg-gray-50 w-full h-full p-4 shadow-lg">
                          <div className="grid grid-cols-2 gap-4 h-full">
                            {/* AI数字人 */}
                            <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                              <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
                              <h4 className="text-gray-900 font-medium text-lg">AI数字人</h4>
                              <p className="text-gray-500 text-sm text-center mt-1">PHP/Java双版本支持</p>
                            </div>

                            {/* 私有部署 */}
                            <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                              <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                              </div>
                              <h4 className="text-gray-900 font-medium text-lg">私有部署</h4>
                              <p className="text-gray-500 text-sm text-center mt-1">安全可控的私有化部署</p>
                            </div>

                            {/* 专业团队 */}
                            <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                              <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                              </div>
                              <h4 className="text-gray-900 font-medium text-lg">专业团队</h4>
                              <p className="text-gray-500 text-sm text-center mt-1">一对一技术支持</p>
                            </div>

                            {/* 开源方案 */}
                            <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                              <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                              </div>
                              <h4 className="text-gray-900 font-medium text-lg">开源方案</h4>
                              <p className="text-gray-500 text-sm text-center mt-1">灵活定制，售后无忧</p>
                            </div>
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
      </main>
      <Footer />
    </>
  )
}
