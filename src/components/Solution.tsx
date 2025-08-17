'use client'

import { useId, useState } from 'react'
import Image, { type ImageProps } from 'next/image'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  ChartBarIcon,
  ArrowRightIcon,
  VideoCameraIcon,
  RadioIcon,
  AcademicCapIcon,
  PuzzlePieceIcon,
  FilmIcon
} from '@heroicons/react/24/outline'

/**
 * 解决方案卡片数据接口
 * @interface SolutionCard
 * @property {string} title - 卡片标题
 * @property {string} description - 功能描述
 * @property {string[]} features - 核心功能特性
 * @property {string} bgColor - 背景渐变色
 * @property {string} accentColor - 强调色
 */
interface SolutionCard {
  title: string
  description: string
  features: string[]
  bgColor: string
  accentColor: string
  bgImage: string
}

/**
 * 解决方案数据配置
 */
const solutions: SolutionCard[] = [
  {
    title: '音视频',
    description: '提供一站式视频解决方案，涵盖点播直播、实时视频通话、短视频等视频服务，广泛应用于在线视频、电商、游戏直播、在线教育等场景',
    features: ['广电级音视频处理', '在线视频点播', '实时音视频通话'],
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    accentColor: 'text-blue-600',
    bgImage: '/images/screenshots/solution-1.png'
  },
  {
    title: '互动直播',
    description: '覆盖PK连麦直播、派对直播、视频相亲、在线自习室、互动课堂等多种场景，低延时的连麦互动，更优质的直播体验',
    features: ['PK连麦直播', '派对直播', '在线自习室'],
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    accentColor: 'text-purple-600',
    bgImage: '/images/screenshots/solution-2.png'
  },
  {
    title: '在线教育',
    description: '快速搭建在线课堂平台，提供全面的在线学习解决方案',
    features: ['在线课堂', '互动教学', '学习管理'],
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
    accentColor: 'text-green-600',
    bgImage: '/images/screenshots/solution-3.png'
  },
  {
    title: '游戏',
    description: '依托丰富的游戏生态资源和能力，共享海量游戏研发和运营经验，致力于打造高质量、全方位生态的游戏云服务平台',
    features: ['游戏多媒体引擎', '边缘加速平台', '游戏云服务'],
    bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
    accentColor: 'text-red-600',
    bgImage: '/images/screenshots/solution-4.png'
  },
  {
    title: '游戏媒体',
    description: '一站式游戏视频工具包，视频转码、视频摘要提取、视频内容整理、视觉增强',
    features: ['视频转码', '内容整理', '视觉增强'],
    bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
    accentColor: 'text-orange-600',
    bgImage: '/images/screenshots/solution-5.png'
  }
]

/**
 * 根据标题获取对应的图标组件
 * @param {string} title - 卡片标题
 * @returns {React.ComponentType} 对应的图标组件
 */
function getIconByTitle(title: string) {
  switch (title) {
    case '音视频':
      return VideoCameraIcon
    case '互动直播':
      return RadioIcon
    case '在线教育':
      return AcademicCapIcon
    case '游戏':
      return PuzzlePieceIcon
    case '游戏媒体':
      return FilmIcon
    default:
      return ChartBarIcon
  }
}

/**
 * 解决方案手风琴卡片组件（PC端）
 * @param {SolutionCard} solution - 解决方案数据
 * @param {number} index - 卡片索引
 * @param {boolean} isExpanded - 是否展开状态
 * @param {() => void} onToggle - 切换展开状态的回调
 * @returns {JSX.Element} 手风琴卡片组件
 */
function SolutionCard({
  solution,
  index,
  isExpanded,
  onToggle
}: {
  solution: SolutionCard;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={clsx(
        "group relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer shadow-lg",
        isExpanded ? "flex-[2.5]" : "flex-[0.8]"
      )}
      onMouseEnter={onToggle}
    >
      {/* 背景图片 - 完全无遮罩 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${solution.bgImage})`
        }}
      />

      {/* 内容区域 */}
      <div className="relative h-full flex flex-col p-6">
        {/* 标题区域 - 始终可见，与箭头按钮对齐 */}
        <div className="flex items-center justify-between mb-12">
          <h3
             className="text-xl font-bold transition-all duration-300 text-white py-2"
             style={{
               writingMode: 'horizontal-tb',
               textOrientation: 'mixed',
               transition: 'writing-mode 0.3s ease-in-out'
             }}
           >
            {solution.title}
          </h3>

          {/* 箭头按钮图标 - 移动到标题行 */}
          <div className={clsx(
            "transition-all duration-300",
            isExpanded ? "opacity-100 translate-x-0" : "opacity-80 translate-x-2"
          )}>
            <div className="p-2 border border-white/50 hover:bg-white/10 transition-colors duration-200">
              <ArrowRightIcon className="h-4 w-4 text-white" />
            </div>
          </div>
        </div>

        {/* 展开内容 */}
        <div className={clsx(
          "transition-all duration-500 delay-100 flex-1",
          isExpanded ? "opacity-100" : "opacity-0"
        )}>
          {/* 描述文本 */}
          <p className="mb-6 text-base leading-relaxed text-white/90">
            {solution.description}
          </p>

          {/* 核心功能列表 */}
          <div className="space-y-3">
            <h4 className="text-base font-semibold text-white mb-3">核心功能</h4>
            {solution.features.map((feature, featureIndex) => (
              <div
                key={featureIndex}
                className={clsx(
                  "flex items-center text-base text-white/80 transition-transform duration-300",
                  isExpanded ? "translate-x-0" : "translate-x-4"
                )}
                style={{ transitionDelay: `${featureIndex * 100 + 200}ms` }}
              >
                <div className="mr-3 h-2 w-2 rounded-full bg-white/60" />
                {feature}
              </div>
            ))}
          </div>
        </div>



        {/* 左下角图标 - 根据标题动态显示 */}
        <div className="absolute bottom-4 left-4">
          {(() => {
            const IconComponent = getIconByTitle(solution.title)
            return (
              <IconComponent className={clsx(
                'h-6 w-6 transition-opacity duration-300 text-white',
                isExpanded ? 'opacity-100' : 'opacity-60'
              )} />
            )
          })()}
        </div>

        {/* 右下角直角装饰元素 - 简约版本 */}
        <div className="absolute bottom-4 right-4">
          <div className={clsx(
            'relative w-6 h-6 transition-all duration-300',
            isExpanded ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
          )}>
            {/* 简约直角边框 */}
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-white/70" />
          </div>
        </div>

        {/* 底部装饰线 */}
        <div className={clsx(
          'absolute bottom-0 left-0 h-1 transition-all duration-500 bg-white/80',
          isExpanded ? 'w-full' : 'w-0'
        )} />
      </div>
    </div>
  )
}

/**
 * 移动端解决方案卡片组件
 * @param {SolutionCard} solution - 解决方案数据
 * @param {number} index - 卡片索引
 * @returns {JSX.Element} 移动端卡片组件
 */
function MobileSolutionCard({
  solution,
  index
}: {
  solution: SolutionCard;
  index: number;
}) {
  return (
    <div className="relative overflow-hidden shadow-lg h-[220px] sm:h-[280px] group">
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${solution.bgImage})`
        }}
      />
      
      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      
      {/* 内容区域 */}
      <div className="relative h-full flex flex-col p-3 sm:p-4">
        {/* 标题和图标 */}
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <h3 className="text-base sm:text-lg font-bold text-white">
            {solution.title}
          </h3>
          {(() => {
            const IconComponent = getIconByTitle(solution.title)
            return (
              <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-white/80" />
            )
          })()}
        </div>
        
        {/* 描述文本 */}
        <p className="text-xs sm:text-sm leading-relaxed text-white/90 mb-2 sm:mb-4 flex-1 line-clamp-3 sm:line-clamp-4">
          {solution.description}
        </p>
        
        {/* 核心功能列表 */}
        <div className="space-y-1 sm:space-y-2">
          <h4 className="text-xs sm:text-sm font-semibold text-white">核心功能</h4>
          {solution.features.slice(0, 2).map((feature, featureIndex) => (
            <div
              key={featureIndex}
              className="flex items-center text-xs sm:text-sm text-white/80"
            >
              <div className="mr-1.5 sm:mr-2 h-1 w-1 sm:h-1.5 sm:w-1.5 rounded-full bg-white/60" />
              {feature}
            </div>
          ))}
          {solution.features.length > 2 && (
            <div className="text-xs sm:text-sm text-white/60">...</div>
          )}
        </div>
      </div>
    </div>
  )
}

/**
 * 解决方案展示组件 - 响应式设计
 * PC端：手风琴样式，移动端：网格布局
 * 为不同业务场景提供安全且高效的解决方案
 * @returns {JSX.Element} 解决方案组件
 */
export function Solution() {
  // 默认展开第一个元素（仅PC端使用）
  const [expandedIndex, setExpandedIndex] = useState(0)

  /**
   * 处理卡片展开状态切换（仅PC端使用）
   * @param {number} index - 卡片索引
   */
  const handleCardToggle = (index: number) => {
    setExpandedIndex(index)
  }

  return (
    <section
      id="solutions"
      aria-label="业务解决方案"
      className="py-12 sm:py-16 lg:py-24"
      style={{
        fontFamily: 'pingfang SC, helvetica neue, arial, hiragino sans gb, microsoft yahei ui, microsoft yahei, simsun, sans-serif',
        background: '#f7f8fb'
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8" style={{ maxWidth: '1800px' }}>
        {/* 标题区域 */}
        <div className="text-left mb-6 sm:mb-10 lg:mb-16">
          <h2 className="text-xl sm:text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
            为不同业务场景提供安全且高效的解决方案
          </h2>
        </div>

        {/* PC端手风琴布局 - 隐藏在移动端 */}
        <div className="hidden lg:flex h-[500px] gap-2 overflow-hidden">
          {solutions.map((solution, index) => (
            <SolutionCard
              key={index}
              solution={solution}
              index={index}
              isExpanded={expandedIndex === index}
              onToggle={() => handleCardToggle(index)}
            />
          ))}
        </div>

        {/* 移动端网格布局 - 隐藏在PC端 */}
        <div className="lg:hidden">
          {/* 平板端：两行两列 */}
          <div className="hidden sm:grid sm:grid-cols-2 sm:gap-4 sm:mb-6 lg:hidden">
            {solutions.slice(0, 4).map((solution, index) => (
              <MobileSolutionCard
                key={index}
                solution={solution}
                index={index}
              />
            ))}
          </div>
          
          {/* 平板端：剩余的一个卡片单独一行 */}
          {solutions.length > 4 && (
            <div className="hidden sm:block lg:hidden">
              <MobileSolutionCard
                solution={solutions[4]}
                index={4}
              />
            </div>
          )}
          
          {/* 手机端：单列布局 */}
          <div className="sm:hidden">
            <div className="space-y-3">
              {solutions.map((solution, index) => (
                <MobileSolutionCard
                  key={index}
                  solution={solution}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>

        {/* 提示文本 */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            了解更多
          </p>
        </div>
      </div>
    </section>
  )
}
