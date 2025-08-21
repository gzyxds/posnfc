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
 * 应用场景数据配置
 */
const solutions: SolutionCard[] = [
  {
    title: '电商',
    description: '大规模智能化推荐系统，基于用户行为数据和市场变化，提供个性化、实时连接的商品推荐，不仅能够显著提升转化率，还能精准把握消费者需求，从而有效驱动销量增长。同时，通过自动化优化推荐算法，减少人工干预，显著降低运营成本，实现更加高效的资源配置和业务运营。',
    features: ['精准推荐', '销售增长', '成本降低'],
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    accentColor: 'text-blue-600',
    bgImage: '/images/screenshots/solution-2.png'
  },
  {
    title: '新媒体',
    description: '智能内容创作与分发平台，利用AI技术自动生成高质量文章、视频脚本和社交媒体内容，同时基于用户兴趣和行为数据，精准投放内容，提高用户参与度和内容转化率，大幅降低内容创作成本和时间，使新媒体运营更加高效和精准。',
    features: ['智能创作', '精准分发', '数据分析'],
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    accentColor: 'text-purple-600',
    bgImage: '/images/screenshots/solution-3.png'
  },
  {
    title: '教育',
    description: '个性化学习平台，通过AI技术分析学生的学习行为、能力水平和学习风格，自动生成定制化学习路径和内容推荐，提供实时反馈和辅导，帮助学生高效掌握知识点，同时为教师提供详细的学生学习数据分析，辅助教学决策和个性化指导。',
    features: ['个性化学习', '智能评估', '教学辅助'],
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
    accentColor: 'text-green-600',
    bgImage: '/images/screenshots/solution-4.png'
  },
  {
    title: '游戏',
    description: 'AI驱动的游戏体验增强系统，通过实时分析玩家行为和偏好，动态调整游戏难度和内容，创造个性化游戏体验；同时利用AI生成游戏场景、角色和剧情，大幅提高游戏开发效率和创新性，为玩家提供更加沉浸和有趣的游戏体验。',
    features: ['动态调整', '内容生成', '玩家分析'],
    bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
    accentColor: 'text-red-600',
    bgImage: '/images/screenshots/solution-5.png'
  },
  {
    title: '翻译',
    description: '高精度多语言翻译系统，支持100+种语言的实时翻译，准确理解文化背景和行业专业术语，保持原文风格和语气，适用于商务文档、技术资料、文学作品等多种场景，大幅提高跨语言沟通效率和准确性。',
    features: ['多语言支持', '专业术语', '风格保持'],
    bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
    accentColor: 'text-orange-600',
    bgImage: '/images/screenshots/solution-3.png'
  },
  {
    title: '金融',
    description: '智能金融风控和投资分析系统，通过AI技术实时监控交易行为，精准识别欺诈风险；同时分析海量市场数据和新闻信息，提供投资建议和风险预警，帮助金融机构提高风控效率和投资决策准确性，降低运营风险和成本。',
    features: ['风险控制', '投资分析', '合规监管'],
    bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
    accentColor: 'text-indigo-600',
    bgImage: '/images/screenshots/solution-1.png'
  }
]

/**
 * 根据标题获取对应的图标组件
 * @param {string} title - 卡片标题
 * @returns {React.ComponentType} 对应的图标组件
 */
function getIconByTitle(title: string) {
  switch (title) {
    case '电商':
      return ChartBarIcon
    case '新媒体':
      return VideoCameraIcon
    case '教育':
      return AcademicCapIcon
    case '游戏':
      return PuzzlePieceIcon
    case '翻译':
      return FilmIcon
    case '金融':
      return RadioIcon
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
        "group relative overflow-hidden transition-all duration-500 ease-in-out cursor-pointer shadow-lg rounded-lg",
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
            <div className="p-2 hover:bg-white/10 transition-colors duration-200">
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
            <div className="absolute bottom-0 right-0 w-4 h-4" />
          </div>
        </div>


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
    <div className="relative overflow-hidden shadow-lg h-[180px] xs:h-[220px] sm:h-[280px] group rounded-lg">
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
        <div className="text-center mb-4 sm:mb-6 md:mb-10 lg:mb-16">
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-4">
            应用场景
          </h2>
          <div className="w-20 h-1 bg-[#015bfe] mx-auto mb-4 sm:mb-8"></div>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            我们的AI解决方案广泛应用于各行各业，为不同领域带来智能化转型和效率提升
          </p>
        </div>

        {/* PC端手风琴布局 - 隐藏在移动端 */}
        <div className="hidden lg:flex h-[400px] xl:h-[500px] gap-2 overflow-hidden">
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
      </div>
    </section>
  )
}
