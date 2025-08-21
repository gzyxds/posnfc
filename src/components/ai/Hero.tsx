'use client'

import { useState } from 'react'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  CodeBracketIcon,
  CloudArrowDownIcon,
  UserGroupIcon,
  StarIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon,
  BoltIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/Button'

/**
 * 产品特性接口
 * @interface Feature
 * @property {string} name - 特性名称
 * @property {string} href - 链接地址
 */
interface Feature {
  name: string
  href: string
}

/**
 * 功能卡片接口
 * @interface Card
 * @property {string} title - 卡片标题
 * @property {string} description - 卡片描述
 * @property {string} iconType - 图标类型
 */
interface Card {
  title: string
  description: string
  iconType: string
}

/**
 * 产品特性数据配置
 * 展示艺创AI的核心功能模块
 */
const features: Feature[] = [
  { name: 'AI数字人', href: '/human' },
  { name: '知识库', href: '/ai' },
  { name: '智能绘画', href: '/chat' },
  { name: '论文创作', href: '/paper' },
  { name: 'PHP&Java', href: '/' }
]

/**
 * 功能卡片数据配置
 * 突出艺创AI的核心优势和服务能力
 */
const cards: Card[] = [
  {
    iconType: 'code',
    title: '双语言版本',
    description: 'PHP/Java双版本支持'
  },
  {
    title: '私有部署',
    description: '安全可控的私有化部署',
    iconType: 'cloud'
  },
  {
    title: '专业团队',
    description: '一对一技术支持',
    iconType: 'group'
  },
  {
    title: '开源方案',
    description: '灵活定制，售后无忧',
    iconType: 'star'
  }
]

/**
 * 根据图标类型获取对应的图标组件
 * @param {string} iconType - 图标类型标识
 * @returns {React.ComponentType} 对应的图标组件
 */
function getIconByType(iconType: string) {
  const iconMap = {
    code: CodeBracketIcon,
    cloud: CloudArrowDownIcon,
    group: UserGroupIcon,
    star: StarIcon
  }
  return iconMap[iconType as keyof typeof iconMap] || CodeBracketIcon
}

/**
 * 二维码弹窗组件
 * 用于显示客服联系方式
 * @param {boolean} isOpen - 是否打开弹窗
 * @param {() => void} onClose - 关闭弹窗回调
 * @returns {JSX.Element} 二维码弹窗组件
 */
function QRModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-sm mx-4 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          aria-label="关闭弹窗"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div className="text-center space-y-4">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">联系客服</h3>
          <div className="w-48 h-48 mx-auto bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">二维码占位</span>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300">扫描二维码添加客服微信</p>
        </div>
      </div>
    </div>
  )
}

/**
 * 功能卡片组件
 * 展示艺创AI的核心功能特性
 * @param {Card} card - 卡片数据
 * @param {number} index - 卡片索引
 * @returns {JSX.Element} 功能卡片组件
 */
function FeatureCard({ card, index }: { card: Card; index: number }) {
  const IconComponent = getIconByType(card.iconType)

  return (
    <div
      className="bg-gray-50/80 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 p-3 sm:p-4 md:p-5 lg:p-7 hover:shadow-lg hover:border-[#0055ff]/30 hover:-translate-y-1 transition-all duration-300 group/card rounded-lg"
      style={{animationDelay: `${index * 0.1}s`}}
    >
      {/* 图标区域 - 增强视觉效果 */}
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#0055ff]/10 to-[#0066ff]/10 border border-[#0055ff]/20 flex items-center justify-center mb-2 sm:mb-3 md:mb-5 group-hover/card:scale-110 group-hover/card:border-[#0055ff]/40 transition-all duration-300 rounded-lg">
        <IconComponent className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#0055ff] group-hover/card:text-[#0066ff] transition-colors" aria-hidden="true" />
      </div>

      {/* 内容区域 - 优化排版 */}
      <div className="space-y-1 sm:space-y-2 md:space-y-3">
        <h4 className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
          {card.title}
        </h4>
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>
  )
}



/**
 * Hero组件 - 艺创AI首页英雄区域
 * 采用简洁的模拟面设计风格，以蓝色调为主，统一视觉效果
 * 特点：视觉统一性、层次清晰、交互友好、响应式设计、暗黑模式兼容
 * 
 * 功能包括：
 * 1. 展示网站的主要标题和简介
 * 2. 提供产品特性标签
 * 3. 提供行动按钮（联系客服、查看演示）
 * 4. 展示产品功能卡片
 * 5. 响应式设计，适配不同屏幕尺寸
 * 6. 支持暗黑模式
 * 7. 集成二维码弹窗功能
 * @returns {JSX.Element} Hero组件
 */
export default function Hero() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false)

  /**
   * 处理联系客服按钮点击
   */
  const handleContactClick = () => {
    setIsQRModalOpen(true)
  }

  /**
   * 关闭二维码弹窗
   */
  const handleCloseQRModal = () => {
    setIsQRModalOpen(false)
  }

  return (
    <>
      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
        {/* AI背景装饰 - 简化版 */}
        <div className="absolute inset-0">
          {/* 简化的光晕效果 - 响应式调整 */}
          <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-[#0055ff]/8 blur-3xl opacity-40"></div>
          <div className="absolute bottom-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#0055ff]/6 blur-3xl opacity-30"></div>
          
          {/* 简化的装饰点 - 响应式调整 */}
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
            
            {/* 左侧内容区 - 优化排版和间距 */}
            <div className="text-center lg:text-left space-y-4 sm:space-y-6">
              {/* 主标题区域 - 增强视觉层次 */}
              <div className="space-y-3 sm:space-y-4">
                {/* 品牌标识 - 响应式优化 */}
                <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#0055ff]/10 border border-[#0055ff]/20 text-[#0055ff] text-xs sm:text-sm font-medium mb-2 rounded-md">
                  <BoltIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                  新一代AI解决方案
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                  <span className="text-[#0055ff] block mb-1 sm:mb-2 bg-gradient-to-r from-[#0055ff] to-[#0066ff] bg-clip-text">
                    艺创AI
                  </span>
                  <span className="text-gray-900 dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
                    赋能企业智能化转型
                  </span>
                </h1>
              </div>
              
              {/* 描述文本 - 优化可读性和响应式 */}
              <div className="space-y-2 sm:space-y-3">
                <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                  一站式渐进式AIGC系统
                </p>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  提供面向个人用户(ToC)、开发者(ToD)和企业(ToB)的全面AI解决方案
                </p>
                <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
                  一次购买，永久免费更新
                </p>
              </div>

              {/* 特性标签 - 优化布局和响应式 */}
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
              
              {/* 按钮组 - 增强视觉效果和响应式 */}
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
                <Button href="#demo" variant="solid" color="blue" className="group w-full sm:w-auto">
                  <span>立即体验</span>
                  <ChatBubbleLeftRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>

                <Button href="#features" variant="outline" className="group w-full sm:w-auto">
                  <span>了解更多</span>
                  <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* 右侧展示区 - 优化设计和交互 */}
            <div className="relative mt-8 sm:mt-10 lg:mt-0">
              {/* 背景装饰 - 响应式调整 */}
              <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-[#0055ff]/10 to-[#0066ff]/10 blur-xl opacity-50 rounded-xl"></div>

              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-6 md:p-8 lg:p-10 group rounded-xl">
                
                {/* 顶部标签区 - 优化间距和响应式 */}
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

                {/* 功能卡片网格 - 优化布局和动画 */}
                <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                  {cards.map((card, index) => (
                    <FeatureCard key={index} card={card} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 二维码弹窗 */}
      <QRModal 
        isOpen={isQRModalOpen}
        onClose={handleCloseQRModal}
      />
    </>
  )
}
