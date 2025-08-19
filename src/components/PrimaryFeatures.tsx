'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'
import {
  CpuChipIcon,
  CloudIcon,
  CircleStackIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

import { Container } from '@/components/Container'
// 使用 public/images/screenshots 路径的静态图片
const screenshotsFeatures = '/images/screenshots/PrimaryFeatures.png'
const screenshotsFeatures1 = '/images/screenshots/PrimaryFeatures1.png'
const screenshotsFeatures2 = '/images/screenshots/achievements.png'
const screenshotVatReturns3 = '/images/screenshots/PrimaryFeatures1.png'

/**
 * 功能特性接口定义
 * @interface Feature
 * @property title - 功能标题
 * @property description - 功能描述
 * @property image - 功能展示图片
 * @property icon - 功能图标组件
 */
interface Feature {
  title: string
  description: string
  image: string
  icon: React.ComponentType<{ className?: string }>
}

/**
 * PrimaryFeatures - 主页核心功能区块
 *
 * 现代化专业简洁的云计算产品展示组件，采用左右分栏布局设计：
 * - 主色调：蓝色(#05f)、灰色、白色的专业配色方案
 * - 布局：左侧功能导航，右侧内容展示，适配宽屏显示器
 * - 交互：流畅的悬停动画效果，提升用户体验
 * - 响应式：完美适配不同屏幕尺寸，移动端自动调整为上下布局
 *
 * @returns 渲染的核心功能区域
 */
const features: Feature[] = [
  {
    title: '弹性计算',
    description:
      '提供多种类型的云服务器实例，支持按需扩展，灵活应对业务负载变化。',
    image: screenshotsFeatures,
    icon: CpuChipIcon,
  },
  {
    title: '云存储',
    description:
      '高可靠、低成本的云存储服务，支持对象存储、文件存储和块存储等多种存储方案。',
    image: screenshotsFeatures1,
    icon: CloudIcon,
  },
  {
    title: '数据库服务',
    description:
      '提供关系型数据库、NoSQL数据库等多种类型的数据库服务，确保数据安全可靠。',
    image: screenshotsFeatures2,
    icon: CircleStackIcon,
  },
  {
    title: '安全服务',
    description:
      '全方位的云安全解决方案，包括DDoS防护、WAF、SSL证书等多重安全保障。',
    image: screenshotVatReturns3,
    icon: ShieldCheckIcon,
  },
]

/**
 * 主页核心功能区块组件
 *
 * 采用现代化云计算产品设计理念，左右分栏布局展示核心功能：
 * 1) 专业配色：蓝色(#05f)主色调配合灰白色系，体现云计算产品的专业性
 * 2) 左右分栏：左侧功能导航，右侧内容展示，充分利用宽屏空间
 * 3) 悬停动画：精心设计的过渡效果，提升交互体验
 * 4) 响应式设计：移动端自动调整为垂直布局，确保各尺寸设备完美显示
 *
 * @returns JSX.Element - 渲染的核心功能区域
 */
export function PrimaryFeatures() {
  // 响应式布局状态管理
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    // 监听屏幕尺寸变化，动态调整布局方向 - 多端适配优化
    const mdMediaQuery = window.matchMedia('(min-width: 768px)')

    /**
     * 媒体查询变化处理函数
     * 根据屏幕尺寸动态调整布局方向：
     * - 移动端（<768px）：水平布局，功能按钮横向排列
     * - 平板端及以上（≥768px）：垂直布局，左右分栏设计
     */
    function onMediaQueryChange() {
      if (mdMediaQuery.matches) {
        setTabOrientation('vertical')
      } else {
        setTabOrientation('horizontal')
      }
    }

    // 初始化布局
    onMediaQueryChange()

    // 监听屏幕尺寸变化
    mdMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      mdMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="云计算核心功能"
      className={clsx(
        'relative overflow-hidden',
        // 现代化专业配色：纯白背景配合蓝色渐变装饰
        'bg-white',
        // 多端适配：移动端紧凑，平板端适中，桌面端宽松
        'py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24',
      )}
    >
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-gradient-to-tr from-gray-500/5 to-transparent rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        {/* 标题区域 - 多端适配优化 */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 xl:mb-20">
          <h2 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-tight text-gray-900 mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            <span className="text-[#0055ff]">性能强大</span>、安全、稳定的
            <br className="hidden sm:block" />
            云计算产品
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto px-4 sm:px-6 md:px-0">
            多年技术沉淀，300+ 款产品共筑云产品矩阵
          </p>
        </div>

        {/* 主要内容区域 - 多端适配优化 */}
        <TabGroup
          className={clsx(
            'grid gap-4 sm:gap-5 md:gap-6 lg:gap-8 xl:gap-10',
            tabOrientation === 'vertical'
              ? 'md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-12 items-start'
              : 'grid-cols-1',
          )}
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              {/* 左侧导航区域 - 多端适配优化 */}
              <div
                className={clsx(
                  tabOrientation === 'vertical'
                    ? 'md:col-span-2 lg:col-span-2 xl:col-span-4'
                    : 'w-full',
                )}
              >
                <TabList
                  aria-label="功能选项"
                  className={clsx(
                    tabOrientation === 'horizontal'
                      ? 'flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start'
                      : 'flex flex-col h-56 sm:h-72 md:h-[400px] lg:h-[500px] xl:h-[600px]',
                  )}
                >
                  {features.map((feature, featureIndex) => (
                    <Tab
                      key={feature.title}
                      className={({ selected }) =>
                        clsx(
                          // 基础样式：直角设计，增加高度和间距
                          'group relative w-full text-left transition-all duration-300 ease-out',
                          'border border-gray-200 bg-white hover:bg-gray-50',
                          'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ffffff] focus-visible:ring-offset-0',
                          // 布局适配：直角，平均分配高度，多端响应式内边距
                          tabOrientation === 'horizontal'
                            ? 'flex-1 min-w-[160px] sm:min-w-[180px] md:min-w-[200px] p-4 sm:p-5 md:p-6 lg:p-7 rounded-none'
                            : 'flex-1 p-4 sm:p-5 md:p-6 lg:p-8 xl:p-10 rounded-none mb-2 sm:mb-3 last:mb-0',
                          // 选中状态：淡灰色主题
                          selected
                            ? 'border-gray-300 bg-[#0055ff] text-black'
                            : 'text-gray-500 hover:border-gray-300 hover:shadow-md hover:text-gray-600',
                          // 悬停动画效果
                          'transform hover:scale-[1.01] hover:-translate-y-0.5',
                        )
                      }
                    >
                      {({ selected }) => (
                        <div className="relative z-10 h-full flex flex-col justify-center">
                          {/* 标题区域 - 始终显示，多端适配优化 */}
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              {/* 功能图标 - 多端响应式尺寸 */}
                              <feature.icon
                                className={clsx(
                                  'w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 transition-colors duration-200 flex-shrink-0',
                                  selected ? 'text-black' : 'text-blue-600'
                                )}
                              />
                              {/* 功能标题 - 多端响应式字体（调小字体大小） */}
                              <h3
                                className={clsx(
                                  'font-display text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-bold transition-colors duration-200 leading-tight',
                                  selected ? 'text-black' : 'text-gray-600',
                                )}
                              >
                                {feature.title}
                              </h3>
                            </div>
                            {/* 箭头图标 - 指示展开/收起状态，多端适配 */}
                            <div
                              className={clsx(
                                'transition-all duration-300 flex-shrink-0 ml-2 sm:ml-3',
                                selected
                                  ? 'text-black transform rotate-90'
                                  : 'text-gray-400 group-hover:text-gray-600',
                              )}
                            >
                              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>

                          {/* 描述区域 - 仅在选中时显示，多端适配优化 */}
                          <div
                            className={clsx(
                              'overflow-hidden transition-all duration-300 ease-in-out',
                              selected
                                ? 'max-h-32 sm:max-h-36 md:max-h-40 lg:max-h-44 opacity-100 mt-2 sm:mt-3'
                                : 'max-h-0 opacity-0 mt-0'
                            )}
                          >
                            <p
                              className={clsx(
                                'text-xs sm:text-xs md:text-sm lg:text-base leading-relaxed transition-colors duration-200 mb-2 sm:mb-3',
                                selected
                                  ? 'text-gray-600'
                                  : 'text-gray-500',
                              )}
                            >
                              {feature.description}
                            </p>

                            {/* 按钮区域 - 查看详情和立即购买按钮 */}
                            <div className={clsx(
                              'flex space-x-2 sm:space-x-3 transition-all duration-300',
                              selected ? 'opacity-100' : 'opacity-0'
                            )}>
                              <a
                                href="#"
                                className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-none transition-colors duration-200 inline-block text-center"
                              >
                                查看详情
                              </a>
                              <a
                                href="#"
                                className="text-xs sm:text-sm px-2 sm:px-3 py-1 bg-[#0055ff] border border-[#0055ff] text-white hover:bg-[#0044dd] rounded-none transition-colors duration-200 inline-block text-center"
                              >
                                立即购买
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </Tab>
                  ))}
                </TabList>
              </div>

              {/* 右侧内容展示区域 - 固定高度与左侧保持一致，多端适配优化 */}
              <div
                className={clsx(
                  tabOrientation === 'vertical'
                    ? 'md:col-span-3 lg:col-span-3 xl:col-span-8'
                    : 'w-full mt-4 sm:mt-5 md:mt-6',
                )}
              >
                <TabPanels className="relative h-56 sm:h-72 md:h-[400px] lg:h-[500px] xl:h-[600px]">
                  {features.map((feature, featureIndex) => (
                    <TabPanel
                      key={feature.title}
                      className={clsx(
                        'focus:outline-none transition-all duration-500 ease-in-out h-full',
                        featureIndex === selectedIndex
                          ? 'opacity-100 transform translate-x-0'
                          : 'opacity-0 transform translate-x-4 absolute inset-0',
                      )}
                      unmount={false}
                    >
                      <div className="relative h-full">
                        {/* 内容卡片 - 填满整个容器高度 */}
                        <div className="bg-white border border-gray-200 rounded-none shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full">
                          {/* 图片容器 - 填满整个容器 */}
                          <div className="relative overflow-hidden rounded-none bg-gray-50 h-full">
                            <Image
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                              src={feature.image}
                              alt={`${feature.title}功能展示`}
                              width={800}
                              height={600}
                              priority={featureIndex === 0}
                              loading={featureIndex === 0 ? 'eager' : 'lazy'}
                              sizes="(min-width: 1280px) 50vw, (min-width: 768px) 70vw, 90vw"
                            />

                            {/* 图片遮罩层 */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />

                            {/* 图片内文案覆盖层 - 多端适配优化 */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 lg:p-10 bg-black/20">
                              <h3 className="font-display text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-white mb-2 sm:mb-3 md:mb-4 lg:mb-5 drop-shadow-lg">
                                {feature.title}
                              </h3>
                              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 font-medium leading-relaxed max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg drop-shadow-md">
                                {feature.description}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* 装饰性元素 */}
                        <div className="absolute -top-2 -right-2 w-16 h-16 bg-gradient-to-br from-[#0055ff]/10 to-transparent rounded-full blur-xl" />
                      </div>
                    </TabPanel>
                  ))}
                </TabPanels>
              </div>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
