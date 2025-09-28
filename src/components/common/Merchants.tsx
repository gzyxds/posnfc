'use client'

import clsx from 'clsx'
import { Container } from '@/components/Container'
import { useRef } from 'react'
import styles from '../css/Merchants.module.css'
import {
  BuildingStorefrontIcon,
  ScissorsIcon,
  ShoppingBagIcon,
  UserGroupIcon,
  UsersIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'

// 行业分类数据
const industryCategories = [
  {
    id: 'restaurant',
    title: '餐饮行业',
    subtitle: '快餐店/中西餐厅/火锅...',
    icon: BuildingStorefrontIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/screenshots/餐饮行业.webp',
  },
  {
    id: 'beauty',
    title: '美业养生',
    subtitle: '理发店/美容院/养生馆...',
    icon: ScissorsIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/screenshots/美业养生.webp',
  },
  {
    id: 'retail',
    title: '专卖行业',
    subtitle: '服饰鞋帽/饰品/母婴...',
    icon: ShoppingBagIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/screenshots/专卖行业.webp',
  },
  {
    id: 'service',
    title: '汽车服务',
    subtitle: '4S店/汽车美容店/洗车...',
    icon: WrenchScrewdriverIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/screenshots/Productdisplay5.jpg',
  },
  {
    id: 'education',
    title: '教育培训',
    subtitle: '教育培训机构/琴行...',
    icon: UserGroupIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/screenshots/教育培训.webp',
  },
  {
    id: 'entertainment',
    title: '游乐场所',
    subtitle: '主题乐园/游乐园/儿童乐...',
    icon: UsersIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/screenshots/游乐场所.webp',
  },
  {
    id: 'supermarket',
    title: '零售商超',
    subtitle: '商超/便利店/批发市场...',
    icon: BuildingStorefrontIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/screenshots/零售商超.webp',
  },
]

// 行业卡片组件
interface IndustryCardProps {
  category: typeof industryCategories[number]
  index: number
}

function IndustryCard({ category, index }: IndustryCardProps) {
  const IconComponent = category.icon

  return (
    <div className="group overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none cursor-pointer relative">
      {/* 背景图片区域 - 移动端适配高度 */}
      <div className="relative h-32 sm:h-36 overflow-hidden">
        {/* 背景图片 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${category.bgImage})`,
          }}
        />
      </div>

      {/* 内容区域 - 移动端优化内边距和字体 */}
      <div className="p-4 sm:p-5 min-h-[110px] sm:min-h-[130px] bg-transparent">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {category.title}
        </h3>
        <p className="mt-1 text-xs sm:text-sm text-gray-600 leading-relaxed">
          {category.subtitle}
        </p>

        {/* 行动按钮 - 移动端优化 */}
        <div className="mt-3 sm:mt-4 flex items-center text-blue-600 font-medium text-xs sm:text-sm group-hover:text-blue-700 transition-colors">
          <span>立即领取</span>
          <svg
            className="ml-1 h-3 w-3 sm:h-4 sm:w-4 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* 图标 - 移动端适配尺寸 */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-lg bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg">
          <IconComponent className={`h-8 w-8 sm:h-10 sm:w-10 ${category.iconColor}`} />
        </div>
      </div>
    </div>
  )
}

export function Merchants() {
  // 滚动容器引用
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white py-12 sm:py-16 lg:py-20">
      {/* 标题区域 - 使用Container限制宽度 */}
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            适用于各行各业的收款解决方案
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            无论您经营什么类型的店铺，我们都能为您提供专业的收银/款解决方案
          </p>
        </div>
      </Container>

      {/* 卡片展示区域 - 全屏展示 */}
      <div className="relative mt-10 sm:mt-12 overflow-hidden py-4">
        {/* 卡片容器 - 纯CSS无限滚动 */}
        <div
          ref={scrollContainerRef}
          className={`${styles.hideScrollbar} relative overflow-hidden`}
          style={{ width: '100%' }}
        >
          <div className={`${styles.scrollContainer} px-4 md:px-8 py-2`}>
            {/* 第一组卡片 */}
            {industryCategories.map((category, index) => (
              <div
                key={`first-${category.id}`}
                className={`${styles.industryCard}`}
              >
                <IndustryCard
                  category={category}
                  index={index}
                />
              </div>
            ))}

            {/* 第二组卡片（用于无缝循环） */}
            {industryCategories.map((category, index) => (
              <div
                key={`second-${category.id}`}
                className={`${styles.industryCard}`}
              >
                <IndustryCard
                  category={category}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部说明文字 - 使用Container限制宽度 */}
      <Container>
        <div className="mt-16 text-center">
          <p className="text-base text-gray-500">
            流动摊位、个体户、连锁、多门店、公司、线上平台、私域收款，等等
          </p>
        </div>
      </Container>
    </section>
  )
}
