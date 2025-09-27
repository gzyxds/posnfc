'use client'

import { motion } from 'framer-motion'
import clsx from 'clsx'
import { Container } from '@/components/Container'
import {
  BuildingStorefrontIcon,
  ScissorsIcon,
  TruckIcon,
  ShoppingBagIcon,
  PlayIcon,
  WrenchScrewdriverIcon,
  SparklesIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  MusicalNoteIcon,
} from '@heroicons/react/24/outline'

/**
 * 行业类别数据接口
 * 定义各行业收银需求的数据结构
 */
interface IndustryCategory {
  id: string
  title: string
  subtitle: string
  icon: React.ElementType
  iconColor: string
  bgImage: string
  bgGradient: string
}

/**
 * 行业类别数据
 * 展示适用于各类商家收银需求的行业分类
 */
const industryCategories: IndustryCategory[] = [
  {
    id: 'restaurant',
    title: '餐饮行业',
    subtitle: '快餐店/中西餐厅/火锅...',
    icon: BuildingStorefrontIcon,
    iconColor: 'text-orange-600',
    bgImage: '/images/screenshots/餐饮行业.webp',
    bgGradient: 'from-orange-400 to-red-500',
  },
  {
    id: 'beauty',
    title: '美业养生',
    subtitle: '理发店/美容院/养生馆...',
    icon: ScissorsIcon,
    iconColor: 'text-pink-600',
    bgImage: '/images/screenshots/美业养生.webp',
    bgGradient: 'from-pink-400 to-rose-500',
  },
  {
    id: 'gas-station',
    title: '加油气站',
    subtitle: '石油石化/液化天然气...',
    icon: TruckIcon,
    iconColor: 'text-red-600',
    bgImage: '/images/screenshots/加油气站.webp',
    bgGradient: 'from-red-400 to-red-600',
  },
  {
    id: 'fresh-market',
    title: '农贸生鲜',
    subtitle: '农贸市场/生鲜水果店...',
    icon: ShoppingBagIcon,
    iconColor: 'text-green-600',
    bgImage: '/images/screenshots/农贸生鲜.webp',
    bgGradient: 'from-green-400 to-emerald-500',
  },
  {
    id: 'sports',
    title: '运动场馆',
    subtitle: '球类场馆/游泳池/棋牌...',
    icon: PlayIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/screenshots/Customer2.png',
    bgGradient: 'from-blue-400 to-indigo-500',
  },
  {
    id: 'auto-service',
    title: '汽车服务',
    subtitle: '4S店/汽车美容店/洗车...',
    icon: WrenchScrewdriverIcon,
    iconColor: 'text-gray-600',
    bgImage: '/images/screenshots/Productdisplay5.jpg',
    bgGradient: 'from-gray-400 to-slate-500',
  },
  {
    id: 'retail',
    title: '专卖行业',
    subtitle: '服饰鞋帽/饰品/母婴...',
    icon: SparklesIcon,
    iconColor: 'text-purple-600',
    bgImage: '/images/screenshots/专卖行业.webp',
    bgGradient: 'from-purple-400 to-violet-500',
  },
  {
    id: 'education',
    title: '教育培训',
    subtitle: '教育培训机构/琴行...',
    icon: AcademicCapIcon,
    iconColor: 'text-indigo-600',
    bgImage: '/images/screenshots/教育培训.webp',
    bgGradient: 'from-indigo-400 to-blue-500',
  },
  {
    id: 'supermarket',
    title: '零售商超',
    subtitle: '商超/便利店/批发市场...',
    icon: BuildingOfficeIcon,
    iconColor: 'text-yellow-600',
    bgImage: '/images/screenshots/零售商超.webp',
    bgGradient: 'from-yellow-400 to-orange-500',
  },
  {
    id: 'entertainment',
    title: '游乐场所',
    subtitle: '主题乐园/游乐园/儿童乐...',
    icon: MusicalNoteIcon,
    iconColor: 'text-cyan-600',
    bgImage: '/images/screenshots/游乐场所.webp',
    bgGradient: 'from-cyan-400 to-teal-500',
  },
]

/**
 * 行业卡片组件属性接口
 */
interface IndustryCardProps {
  category: IndustryCategory
  index: number
}

/**
 * 行业卡片组件
 * 展示单个行业类别的信息卡片
 *
 * @param category - 行业类别数据
 * @param index - 卡片索引，用于动画延迟
 * @returns 渲染的行业卡片组件
 */
function IndustryCard({ category, index }: IndustryCardProps) {
  const IconComponent = category.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none cursor-pointer relative"
    >
      {/* 背景图片区域 - 移动端适配高度 */}
      <div className="relative h-32 sm:h-40 overflow-hidden">
        {/* 背景图片 */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${category.bgImage})`,
          }}
        />
      </div>

      {/* 内容区域 - 移动端优化内边距和字体 */}
      <div className="p-3 sm:p-6 min-h-[120px] sm:min-h-[140px] bg-transparent">
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
        <div className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm border border-gray-200 shadow-lg">
          <IconComponent className={`h-8 w-8 sm:h-10 sm:w-10 ${category.iconColor}`} />
        </div>
      </div>
    </motion.div>
  )
}

/**
 * 商户组件属性接口
 */
interface MerchantsProps {
  className?: string
}

/**
 * 商户展示组件
 * 展示适用于各类商家收银需求的行业分类
 *
 * @param className - 自定义样式类名
 * @returns 渲染的商户展示组件
 */
export function Merchants({ className }: MerchantsProps) {
  return (
    <section
      className={clsx(
        'relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-20 sm:py-32',
        className,
      )}
    >
      <Container>
        {/* 标题区域 */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl"
          >
            适用于各类商家收银需求
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-4 flex items-center justify-center"
          >
            <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            流动摊位、个体户、连锁、多门店、公司、线上平台、私域收款，等等
          </motion.p>
        </div>

        {/* 行业卡片网格 - 移动端双列，平板三列，桌面五列布局 */}
        <div className="mx-auto mt-16" style={{ maxWidth: '1800px' }}>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
            {industryCategories.map((category, index) => (
              <IndustryCard
                key={category.id}
                category={category}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* 底部说明文字 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-base text-gray-500">
            无论您是哪个行业，我们都能为您提供专业的收银解决方案
          </p>
        </motion.div>
      </Container>
    </section>
  )
}
