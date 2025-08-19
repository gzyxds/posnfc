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
            'group-hover:scale-105',
            isOpen
              ? 'bg-indigo-600 text-white shadow-lg scale-105'
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
            <button className="flex-1 bg-indigo-600 text-white px-4 py-2 text-sm font-medium hover:bg-indigo-700 transition-colors">
              立即体验
            </button>
            <button className="flex-1 bg-white text-gray-700 px-4 py-2 text-sm font-medium border border-gray-300 hover:bg-gray-50 transition-colors">
              联系客服
            </button>
          </div>
        </div>
      </Disclosure.Panel>
    </Disclosure>
  )
}

/**
 * 图片展示界面组件
 */
function ImageDisplay() {
  return (
    <div className="relative h-full bg-white overflow-hidden shadow-xl">
      {/* 主要内容区域 */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8">
        {/* 功能特点 */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 w-full max-w-lg">
          <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 text-center hover:bg-white transition-all duration-300">
            <div className="w-8 h-8 bg-indigo-100 flex items-center justify-center mx-auto mb-2">
              <ChatBubbleLeftRightIcon className="w-4 h-4 text-indigo-600" />
            </div>
            <h4 className="font-medium text-xs sm:text-sm text-gray-900 mb-1">智能对话</h4>
            <p className="text-xs text-gray-600">自然语言交互</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 text-center hover:bg-white transition-all duration-300">
            <div className="w-8 h-8 bg-green-100 flex items-center justify-center mx-auto mb-2">
              <CpuChipIcon className="w-4 h-4 text-green-600" />
            </div>
            <h4 className="font-medium text-xs sm:text-sm text-gray-900 mb-1">智能分析</h4>
            <p className="text-xs text-gray-600">数据处理能力</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 text-center hover:bg-white transition-all duration-300">
            <div className="w-8 h-8 bg-purple-100 flex items-center justify-center mx-auto mb-2">
              <CloudIcon className="w-4 h-4 text-purple-600" />
            </div>
            <h4 className="font-medium text-xs sm:text-sm text-gray-900 mb-1">云端部署</h4>
            <p className="text-xs text-gray-600">快速集成</p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-3 sm:p-4 text-center hover:bg-white transition-all duration-300">
            <div className="w-8 h-8 bg-orange-100 flex items-center justify-center mx-auto mb-2">
              <SparklesIcon className="w-4 h-4 text-orange-600" />
            </div>
            <h4 className="font-medium text-xs sm:text-sm text-gray-900 mb-1">多模态</h4>
            <p className="text-xs text-gray-600">全方位支持</p>
          </div>
        </div>
      </div>
    </div>
  )
}

/**
 * 场景组件 - 根据参考图片设计的简洁现代界面
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
    <section className="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
      <Container>
        {/* 顶部标题 */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 px-4">
            依托大模型与云计算协同发展，让 AI 触手可及
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            通过先进的人工智能技术，为您提供智能、高效的解决方案
          </p>
        </div>

        {/* 主体布局：左右分栏 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-stretch">
          {/* 左侧：手风琴问答区域 */}
          <div className="order-2 lg:order-1 flex">
            <div className="bg-white shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 w-full">
              {/* 头部 */}
              <div className="bg-white px-4 sm:px-6 py-4 border-b border-gray-100">
                <h3 className="font-semibold text-gray-900 flex items-center gap-2 text-sm sm:text-base">
                  <ChatBubbleLeftRightIcon className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-600" />
                  与 AI 智能体进行实时语音对话
                </h3>
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

          {/* 右侧：图片展示界面 */}
          <div className="order-1 lg:order-2 flex">
            <div className="w-full">
              <ImageDisplay />
            </div>
          </div>
        </div>
      </Container>

      {/* 添加自定义动画样式 */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  )
}
