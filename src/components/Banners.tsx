'use client'

import React, { useState, useEffect } from 'react'
import { XMarkIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'

/**
 * Banners 组件 - 固定在页面顶部的横幅通知组件
 *
 * 功能特性：
 * - 固定在页面顶部显示
 * - 支持关闭功能
 * - 响应式布局适配不同屏幕尺寸
 * - 保持与项目设计规范一致的 UI 风格
 *
 * @param message - 横幅显示的消息内容
 * @param linkText - 链接文本
 * @param linkHref - 链接地址
 * @param bgColor - 背景颜色类名，默认为 'bg-indigo-600'
 * @param textColor - 文字颜色类名，默认为 'text-white'
 * @param className - 额外的 CSS 类名
 * @param onDismiss - 关闭回调函数
 */
interface BannersProps {
  message?: string
  linkText?: string
  linkHref?: string
  bgColor?: string
  textColor?: string
  className?: string
  onDismiss?: () => void
}

export default function Banners({
  message = '最高赚取 25% 佣金奖励 Tencent RTC营销联盟 立即加入',
  linkText = 'GeneriCon 2023',
  linkHref = '#',
  bgColor = 'bg-indigo-600',
  textColor = 'text-white',
  className,
  onDismiss,
}: BannersProps) {
  const [isVisible, setIsVisible] = useState(true)
  // 轮播公告数组
  const announcements = [
    {
      message: '最高赚取 25% 佣金奖励 Tencent RTC营销联盟 立即加入',
      linkText: '营销联盟',
      linkHref: '#',
    },
    {
      message: 'AI开源源码一次购买，永久免费更新',
      linkText: 'AI开源项目',
      linkHref: '#',
    },
    {
      message: '云服务器限时优惠，新用户首单享5折',
      linkText: '限时优惠',
      linkHref: '#',
    },
  ]
  
  // 当前显示的公告索引
  const [currentIndex, setCurrentIndex] = useState(0)
  // 控制过渡动画
  const [isTransitioning, setIsTransitioning] = useState(false)
  
  // 切换到下一条公告
  const goToNext = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length)
      setIsTransitioning(false)
    }, 500) // 500ms后切换到下一条，与CSS过渡时间匹配
  }
  
  // 切换到上一条公告
  const goToPrev = () => {
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? announcements.length - 1 : prevIndex - 1
      )
      setIsTransitioning(false)
    }, 500)
  }
  
  // 自动轮播效果
  useEffect(() => {
    if (!isVisible) return
    
    const interval = setInterval(goToNext, 5000) // 每5秒切换一次
    
    return () => clearInterval(interval)
  }, [isVisible, announcements.length])
  
  // 当前显示的公告
  const currentAnnouncement = announcements[currentIndex]

  /**
   * 处理横幅关闭事件
   * 隐藏横幅并触发回调函数
   */
  const handleDismiss = () => {
    setIsVisible(false)
    // 触发自定义事件通知容器组件
    window.dispatchEvent(new CustomEvent('bannerDismissed'))
    onDismiss?.()
  }

  // 如果横幅已被关闭，则不渲染
  if (!isVisible) {
    return null
  }

  return (
    <div
      className={clsx(
        // 固定定位在页面顶部
        'fixed top-0 left-0 right-0 z-40',
        // 基础布局样式
        'flex items-center gap-x-2 px-3 py-2',
        // 响应式样式 - 移动端优化
        'sm:gap-x-6 sm:px-6 sm:py-2.5',
        // 背景和文字颜色
        bgColor,
        textColor,
        // 自定义类名
        className,
      )}
      role="banner"
      aria-label="网站横幅通知"
    >
      {/* 左侧导航按钮 - 仅在PC端显示 */}
      <div className="hidden sm:flex items-center">
        <button
          type="button"
          onClick={goToPrev}
          className="p-1 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          aria-label="查看上一条公告"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
      
      {/* 公告内容区域 */}
      <div className="flex-1 min-w-0 sm:flex sm:justify-center overflow-hidden">
        <p 
          className={clsx(
            "text-xs sm:text-sm/6 truncate sm:whitespace-normal sm:text-center transition-opacity duration-500 ease-in-out",
            isTransitioning && "opacity-0"
          )}
        >
          <a
            href={currentAnnouncement.linkHref || linkHref}
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 rounded-sm inline-flex flex-wrap items-center"
            aria-label={`${currentAnnouncement.linkText || linkText} - ${currentAnnouncement.message || message}`}
          >
            <strong className="font-semibold">{currentAnnouncement.linkText || linkText}</strong>
            {/* 装饰性分隔符 - 在移动端隐藏 */}
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              className="mx-1 sm:mx-2 inline size-0.5 fill-current hidden sm:inline"
            >
              <circle r={1} cx={1} cy={1} />
            </svg>
            {/* 移动端显示简化版本 */}
            <span className="sm:hidden"> </span>
            <span className="hidden sm:inline">{currentAnnouncement.message || message}&nbsp;</span>
            <span className="sm:hidden">
              {(currentAnnouncement.message || message).length > 15 
                ? (currentAnnouncement.message || message).substring(0, 15) + '...' 
                : (currentAnnouncement.message || message)}&nbsp;
            </span>
            <span aria-hidden="true" className="ml-0.5">&rarr;</span>
          </a>
        </p>
      </div>

      {/* 右侧导航和关闭按钮区域 */}
      <div className="flex items-center gap-x-1 sm:gap-x-2 flex-shrink-0">
        {/* 右侧导航按钮 - 仅在PC端显示 */}
        <button
          type="button"
          onClick={goToNext}
          className="hidden sm:flex p-1 rounded-full hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          aria-label="查看下一条公告"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-4">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
          </svg>
        </button>
        

        
        {/* 轮播指示器已移除 */}
        
        {/* 关闭按钮 */}
        <button
          type="button"
          onClick={handleDismiss}
          className="-m-2 p-2 sm:-m-3 sm:p-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600 rounded-sm hover:bg-white/10 transition-colors"
          aria-label="关闭横幅"
        >
          <span className="sr-only">关闭</span>
          <XMarkIcon aria-hidden="true" className="size-4 sm:size-5" />
        </button>
      </div>
    </div>
  )
}

/**
 * BannersContainer 组件 - 用于包装页面内容，为固定横幅预留空间
 *
 * @param children - 子组件
 * @param bannerHeight - 横幅高度，默认为 '3rem'
 * @param className - 额外的 CSS 类名
 */
interface BannersContainerProps {
  children: React.ReactNode
  className?: string
}

export function BannersContainer({
  children,
  className,
}: BannersContainerProps) {
  // 检查 Banners 组件是否可见
  const [bannerVisible, setBannerVisible] = useState(true)

  // 监听 Banners 组件的关闭事件
  React.useEffect(() => {
    const handleBannerDismiss = () => {
      setBannerVisible(false)
    }

    // 监听自定义事件
    window.addEventListener('bannerDismissed', handleBannerDismiss)

    return () => {
      window.removeEventListener('bannerDismissed', handleBannerDismiss)
    }
  }, [])

  return (
    <div
      className={clsx(
        // 只有当横幅可见时才添加上边距，确保内容紧贴菜单栏下方
        bannerVisible ? 'pt-[5.5rem] sm:pt-[6rem] md:pt-[6.5rem]' : 'pt-0',
        className
      )}
      role="main"
    >
      {children}
    </div>
  )
}

/**
 * 使用示例：
 *
 * ```tsx
 * import Banners, { BannersContainer } from '@/components/Banners'
 *
 * export default function Layout({ children }) {
 *   return (
 *     <>
 *       <Banners
 *         message="特别优惠活动进行中！"
 *         linkText="立即查看"
 *         linkHref="/promotion"
 *         onDismiss={() => console.log('横幅已关闭')}
 *       />
 *       <BannersContainer>
 *         {children}
 *       </BannersContainer>
 *     </>
 *   )
 * }
 * ```
 */
