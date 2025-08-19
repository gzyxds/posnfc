'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  CloudIcon,
  SparklesIcon
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { useState } from 'react'

/**
 * 手风琴项数据接口
 */
interface AccordionItem {
  /** 手风琴项标题 */
  title: string
  /** 展开后的详细描述内容 */
  description: string
  /** 图标类型 */
  icon?: 'chat' | 'cpu' | 'cloud' | 'sparkles'
}

/**
 * 左侧手风琴数据源
 */
const accordionItems: AccordionItem[] = [
  {
    title: '与 AI 智能体进行实时语音对话',
    description: '支持自然语言交互，实时语音识别与合成，让您与 AI 智能体进行流畅的语音对话体验。',
    icon: 'chat'
  },
  {
    title: '一键创作 AI 智能脚本',
    description: '通过智能模板快速生成对话脚本，支持多场景定制，让 AI 智能体更贴合您的业务需求。',
    icon: 'cpu'
  },
  {
    title: '10 分钟在现有系统中接入一个 AI 助手',
    description: '提供简单易用的 SDK 和 API，快速集成到您的现有系统中，无需复杂的开发工作。',
    icon: 'cloud'
  },
  {
    title: 'AI 打通各商业化闭环场景',
    description: '从客户咨询到订单处理，AI 智能体帮助您实现业务流程自动化，提升运营效率。',
    icon: 'sparkles'
  },
  {
    title: '多模态数据端到端支持',
    description: '支持文本、语音、图像等多种数据类型，提供完整的端到端解决方案。',
    icon: 'cpu'
  }
]

/**
 * 手风琴项组件
 */
function AccordionRow({
  item,
  isOpen,
  onToggle
}: {
  item: AccordionItem,
  isOpen: boolean,
  onToggle: () => void
}) {
  // 根据图标类型选择对应的图标组件
  const getIconComponent = (iconType?: string) => {
    switch (iconType) {
      case 'chat': return ChatBubbleLeftRightIcon
      case 'cpu': return CpuChipIcon
      case 'cloud': return CloudIcon
      case 'sparkles': return SparklesIcon
      default: return ChatBubbleLeftRightIcon
    }
  }

  const IconComponent = getIconComponent(item.icon)

  return (
    <Disclosure as="div" className="border-b border-gray-100 last:border-b-0">
      <Disclosure.Button
        className={clsx(
          'flex w-full items-center justify-between py-4 px-4 sm:px-6 text-left',
          'hover:bg-gray-50 transition-all duration-300 ease-in-out',
          'focus:outline-none focus:bg-gray-50',
          'group',
          isOpen && 'bg-indigo-50'
        )}
        onClick={onToggle}
      >
        <div className="flex items-center gap-3 min-w-0 flex-1">
          <div className={clsx(
            'flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 transition-all duration-300',
            isOpen
              ? 'bg-indigo-600 text-white'
              : 'bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-600'
          )}>
            <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <span className={clsx(
            'font-medium text-sm sm:text-base transition-colors duration-300',
            'truncate',
            isOpen ? 'text-indigo-900' : 'text-gray-900 group-hover:text-indigo-800'
          )}>
            {item.title}
          </span>
        </div>

        <ChevronDownIcon className={clsx(
          'w-5 h-5 text-gray-400 transition-all duration-300 flex-shrink-0 ml-2',
          'group-hover:text-indigo-500',
          isOpen && 'rotate-180 text-indigo-600'
        )} />
      </Disclosure.Button>

      <Disclosure.Panel
        className={clsx(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
        static
      >
        <div className="px-4 sm:px-6 pb-4 pt-2">
          <div className="ml-11 sm:ml-13 text-sm sm:text-base text-gray-600 leading-relaxed">
            {item.description}
          </div>

          {/* 底部按钮组 */}
          <div className="flex flex-col sm:flex-row gap-2 pt-4 mt-4 border-t border-gray-100">
            <button className="flex-1 bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 transition-colors rounded-none">
              立即体验
            </button>
            <button className="flex-1 bg-white text-gray-700 px-4 py-2 text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors rounded-none">
              联系客服
            </button>
          </div>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  )
}

/**
 * 媒体展示组件 - PC端显示视频，移动端显示图片，优化响应式体验
 */
function ImageDisplay() {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
      {/* PC端视频 - 大屏幕显示 */}
      <div className="hidden lg:block relative w-full h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/screenshots/solution-1.png"
        >
          <source
            src="https://tbexpand.alicdn.com/1751338266768/fdf935034157fef4.mp4?auth_key=1755611229-0-0-6a2eb932a0f5c600643904bf7044b195&biz=publish-2845963359ef8af1&t=2107d64617556085295433085e0d16&t=2107d64617556085295433085e0d16&b=publish&p=cloudvideo_http_video_extranet_notrans&i=525212373483"
            type="video/mp4"
          />
          您的浏览器不支持视频播放。
        </video>
        
        {/* 视频控制提示 */}
        <div className="absolute bottom-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-medium opacity-0">
          点击暂停/播放
        </div>
      </div>

      {/* 移动端和平板图片 - 小屏幕显示 */}
      <div className="lg:hidden relative w-full h-full group">
        <Image
          src="/images/screenshots/solution-1.png"
          alt="AI 智能体演示界面 - 支持实时语音对话和智能交互"
          fill
          className="object-cover"
          unoptimized
          priority
        />
        
        {/* 移动端交互提示 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0">
          <div className="absolute bottom-4 left-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
              <p className="text-sm font-medium text-gray-800 text-center">
                💬 体验AI智能对话
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* 加载状态指示器 */}
      <div className="absolute inset-0 bg-gray-200 animate-pulse lg:hidden" style={{zIndex: -1}}>
        <div className="flex items-center justify-center h-full">
          <div className="text-gray-400 text-center">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-indigo-600 rounded-full animate-spin mx-auto mb-2"></div>
            <p className="text-sm">加载中...</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 场景组件 - 响应式设计，PC端显示视频，移动端显示图片
 */
export function Scenario() {
  const [activeIndex, setActiveIndex] = useState(0)

  const handleToggle = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(-1)
    } else {
      setActiveIndex(index)
    }
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 sm:py-20 lg:py-24 xl:py-32">
      <Container>
        {/* 顶部标题区域 */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              依托大模型与云计算协同发展，
              <span className="block text-indigo-600 mt-2">让 AI 触手可及</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              通过先进的人工智能技术，为您提供智能、高效、易用的解决方案，
              <span className="block mt-2">让每个企业都能轻松拥抱AI时代</span>
            </p>
          </div>
        </div>

        {/* 主体布局：响应式左右分栏 */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-start">
          {/* 左侧：手风琴问答区域 */}
          <div className="order-2 lg:order-1 lg:col-span-2">
            <div className="bg-white border border-gray-100 overflow-hidden transition-all duration-500">
              {/* 头部标题 */}
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 sm:px-8 py-6">
                <h3 className="font-bold text-white flex items-center gap-3 text-lg sm:text-xl">
                  <div className="p-2 bg-white/20">
                    <ChatBubbleLeftRightIcon className="w-6 h-6" />
                  </div>
                  核心功能特性
                </h3>
                <p className="text-indigo-100 mt-2 text-sm sm:text-base">
                  探索我们的AI智能体核心能力
                </p>
              </div>

              {/* 手风琴列表 */}
              <div className="divide-y divide-gray-100">
                {accordionItems.map((item, index) => (
                  <AccordionRow
                    key={item.title}
                    item={item}
                    isOpen={activeIndex === index}
                    onToggle={() => handleToggle(index)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* 右侧：媒体展示区域 */}
          <div className="order-1 lg:order-2 lg:col-span-3">
            <div className="relative">
              {/* 装饰性背景 */}
              <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl"></div>
              
              {/* 主要内容区域 */}
              <div className="relative bg-white overflow-hidden">
                {/* 顶部标签 */}
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 text-sm font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 animate-pulse"></div>
                    <span className="hidden sm:inline">实时演示</span>
                    <span className="sm:hidden">演示</span>
                  </div>
                </div>
                
                {/* 媒体内容 */}
                <div className="aspect-video sm:aspect-[4/3] lg:aspect-video">
                  <ImageDisplay />
                </div>
                
                {/* 底部信息栏 */}
                <div className="bg-gray-50 px-6 py-4 border-t border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-700">
                        AI 智能体正在运行
                      </span>
                    </div>
                    <div className="hidden sm:flex items-center gap-2 text-xs text-gray-500">
                      <span>支持多模态交互</span>
                      <span>•</span>
                      <span>实时响应</span>
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
