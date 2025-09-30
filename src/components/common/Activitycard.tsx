/**
 * 活动卡片组件 - 独立的活动展示组件
 * 展示POS机相关的活动卡片，包括主推活动和小卡片
 * 支持响应式布局和交互效果
 */

'use client'

import { Container } from '../Container'

/**
 * 活动卡片数据接口
 */
interface ActivityCardData {
  id: string
  title: string
  subtitle?: string
  description: string[]
  tag: string
  backgroundImage: string
  buttonText: string
  href: string
  type: 'large' | 'small'
}

/**
 * 活动卡片组件属性接口
 */
interface ActivityCardProps {
  cards?: ActivityCardData[]
  className?: string
}

/**
 * 默认活动卡片数据
 */
const defaultActivityCards: ActivityCardData[] = [
  {
    id: 'featured-promotion',
    title: '0费率收款码',
    description: ['单笔300以内免手续费', '让你省更多的钱'],
    tag: '精选特惠 新老同享',
    backgroundImage: '/images/carousel/Cardprice.jpg',
    buttonText: '立即抢购',
    href: '#',
    type: 'large'
  },
  {
    id: 'electronic-pos',
    title: '电签POS机',
    description: ['安全便捷收款，支持多种支付方式'],
    tag: '智能电签',
    backgroundImage: '/images/carousel/new-1.png',
    buttonText: '立即查看 →',
    href: '#',
    type: 'small'
  },
  {
    id: 'mobile-payment',
    title: '移动收款',
    description: ['移动支付新体验，蓝牙连接即插即用'],
    tag: '随时随地收款',
    backgroundImage: '/images/carousel/new-2.png',
    buttonText: '立即查看 →',
    href: '#',
    type: 'small'
  },
  {
    id: 'aggregate-payment',
    title: '聚合支付',
    description: ['多渠道聚合收款，统一对账管理', '支持20+支付渠道'],
    tag: '一码通用',
    backgroundImage: '/images/carousel/new-3.png',
    buttonText: '立即查看 →',
    href: '#',
    type: 'small'
  },
  {
    id: 'smart-device',
    title: '智能设备',
    description: ['专业安装部署，远程监控管理', '满足不同业务需求'],
    tag: '定制化配置',
    backgroundImage: '/images/carousel/new-4.png',
    buttonText: '立即查看 →',
    href: '#',
    type: 'small'
  }
]

/**
 * 渲染大卡片组件
 * @param card - 卡片数据
 * @returns 大卡片JSX元素
 */
function renderLargeCard(card: ActivityCardData) {
  return (
    <a 
      key={card.id}
      href={card.href} 
      className="lg:col-span-1 relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block"
    >
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${card.backgroundImage}')`
        }}
      />

      <div className="relative h-full min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] p-4 sm:p-5 lg:p-6 flex flex-col z-10">
        {/* 卡片标签 */}
        <div className="mb-3 sm:mb-4">
          <span className="inline-block bg-blue-600 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-white">
            {card.tag}
          </span>
        </div>

        {/* 卡片标题 */}
        <div className="mb-4 sm:mb-6">
          <h3 className="mb-1 sm:mb-2 text-xl sm:text-2xl font-bold text-white">{card.title}</h3>
          {card.description.map((desc, index) => (
            <p key={index} className="text-sm sm:text-base text-white">{desc}</p>
          ))}
        </div>

        {/* 卡片按钮 - 靠左显示并向上移动 */}
        <div className="mt-auto">
          <div className="text-left">
            <button className="bg-blue-600 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105">
              {card.buttonText}
            </button>
          </div>
        </div>
      </div>
    </a>
  )
}

/**
 * 渲染小卡片组件
 * @param card - 卡片数据
 * @returns 小卡片JSX元素
 */
function renderSmallCard(card: ActivityCardData) {
  return (
    <a 
      key={card.id}
      href={card.href} 
      className="relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block"
    >
      {/* 背景图片 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${card.backgroundImage}')`
        }}
      />

      <div className="relative h-full min-h-[140px] sm:min-h-[150px] p-3 sm:p-4 lg:p-5 flex flex-col z-10">
        {/* 卡片标签 */}
        <div className="mb-2 sm:mb-3">
          <span className="inline-block bg-blue-600 px-2 py-0.5 sm:px-3 sm:py-1 text-xs font-medium text-white">
            {card.tag}
          </span>
        </div>

        {/* 卡片内容 */}
        <div className="mb-3 sm:mb-4">
          <h3 className="mb-0.5 sm:mb-1 text-base sm:text-lg font-bold text-gray-900">{card.title}</h3>
          {card.description.map((desc, index) => (
            <p key={index} className="text-xs sm:text-sm text-gray-700">{desc}</p>
          ))}
        </div>

        {/* 卡片文案 - 靠左显示 */}
        <div className="mt-auto">
          <div className="text-left text-xs sm:text-sm font-medium text-blue-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-700">
            {card.buttonText}
          </div>
        </div>
      </div>
    </a>
  )
}

/**
 * 活动卡片组件
 * 展示POS机相关的活动卡片，包括主推活动和小卡片
 * 
 * @param cards - 活动卡片数据数组，可选，默认使用内置数据
 * @param className - 额外的CSS类名
 * @returns 活动卡片组件JSX
 */
export function ActivityCard({
  cards = defaultActivityCards,
  className = ''
}: ActivityCardProps) {
  // 分离大卡片和小卡片
  const largeCards = cards.filter(card => card.type === 'large')
  const smallCards = cards.filter(card => card.type === 'small')

  return (
    <Container className={`py-6 sm:py-8 pt-16 sm:pt-24 ${className}`}>
      <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6 lg:grid-cols-3">
        {/* 左侧大卡片区域 */}
        {largeCards.map(card => renderLargeCard(card))}

        {/* 右侧小卡片区域 - 移动端双排网格布局 */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
          {smallCards.map(card => renderSmallCard(card))}
        </div>
      </div>
    </Container>
  )
}

export type { ActivityCardData, ActivityCardProps }