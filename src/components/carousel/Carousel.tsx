'use client'

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { CreditCardIcon, DevicePhoneMobileIcon, QrCodeIcon, UserGroupIcon } from '@heroicons/react/20/solid'
import { DualQRCodeButtonGroup } from '@/components/common/QRCode'

/**
 * 轮播每一项的数据结构
 */
export interface CarouselSlide {
  id: number
  title: string
  subtitle?: string
  description: string
  imagePath: string
  imageAlt: string
  primaryButtonText: string
  primaryButtonHref?: string
  secondaryButtonText?: string
  secondaryButtonHref?: string
}

/**
 * 轮播组件属性
 */
export interface CarouselProps {
  autoPlay?: boolean
  interval?: number
  heightClass?: string
  showIndicators?: boolean
  slides?: CarouselSlide[]
  className?: string
}

/**
 * 默认轮播图数据
 */
const defaultSlides: CarouselSlide[] = [
  {
    id: 1,
    title: '全方位支付解决方案',
    subtitle: '智能支付终端',
    description: '支持智能POS、扫码支付、刷脸支付、数字人民币等多种支付方式，为商户提供专业安全的收单服务，助力数字化转型转变',
    imagePath: '/images/screenshots/carousel -2.jpg',
    imageAlt: '全方位支付解决方案',
    primaryButtonText: '立即领取',
    primaryButtonHref: '#',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: '#'
  },
  {
    id: 2,
    title: '便捷高效的收款体验',
    subtitle: '移动收银专家',
    description: '支持信用卡、储蓄卡、移动支付等多种收款方式，费率优惠，到账快速，为各行业商户提供专业的移动收银解决方案',
    imagePath: '/images/screenshots/carousel -5.jpg',
    imageAlt: '移动收银解决方案',
    primaryButtonText: '立即领取',
    primaryButtonHref: '#',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: '#'
  },
  {
    id: 3,
    title: '一码通收多种支付',
    subtitle: '聚合支付平台',
    description: '整合微信、支付宝、银联等主流支付渠道，一个二维码即可收取所有支付方式，简化收款流程，提升用户体验',
    imagePath: '/images/screenshots/carousel -6.jpg',
    imageAlt: '聚合支付平台',
    primaryButtonText: '立即领取',
    primaryButtonHref: '#',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: '#'
  },
  {
    id: 4,
    title: '智慧商业新时代',
    subtitle: '数字化经营',
    description: '提供数据分析、营销工具、会员管理等增值服务，助力商户实现数字化转型，提升经营效率和客户满意度',
    imagePath: '/images/screenshots/carousel -9.jpg',
    imageAlt: '数字化经营解决方案',
    primaryButtonText: '立即领取',
    primaryButtonHref: '#',
    secondaryButtonText: '联系客服',
    secondaryButtonHref: '#'
  }
]

/**
 * 底部悬浮卡片数据 - 独立设计的4个卡片，使用Heroicons图标
 */
const floatingCards = [
  {
    id: 1,
    type: 'feature',
    title: 'POS机办理',
    description: '银联正规POS机，安全稳定',
    icon: CreditCardIcon,
    bgColor: 'bg-gray-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-gray-200',
    hoverEffect: 'hover:shadow-gray-100',
    style: 'modern'
  },
  {
    id: 2,
    type: 'feature',
    title: '移动收款',
    description: '支持拉卡拉、银盛等多种品牌',
    icon: DevicePhoneMobileIcon,
    bgColor: 'bg-gray-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-gray-200',
    hoverEffect: 'hover:shadow-gray-100',
    style: 'rounded'
  },
  {
    id: 3,
    type: 'feature',
    title: '聚合码牌',
    description: '商户收款码，多种支付方式',
    icon: QrCodeIcon,
    bgColor: 'bg-gray-100',
    iconColor: 'text-blue-600',
    borderColor: 'border-gray-200',
    hoverEffect: 'hover:shadow-gray-100',
    style: 'gradient'
  },
  {
    id: 4,
    type: 'special',
    title: '代理加盟',
    description: '代理加盟，专业收款解决方案',
    icon: UserGroupIcon,
    iconColor: 'text-blue-600',
    bgColor: 'bg-gray-100',
    borderColor: 'border-gray-200',
    hoverEffect: 'hover:shadow-gray-100',
    style: 'extended'
  }
]

/**
 * 预定义样式类 - 减少重复计算
 */
const styles = {
  section: 'relative w-full overflow-hidden touch-pan-y',
  imageContainer: 'absolute inset-0 transition-opacity duration-1000 ease-in-out',
  image: 'object-cover transition-transform duration-[8000ms] ease-linear hover:scale-105',
  titleButton: 'group relative text-left transition-all duration-300 cursor-pointer bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 border border-gray-200 hover:border-gray-300 hover:bg-white hover:-translate-x-1 shadow-sm hover:shadow-md max-w-[200px] sm:max-w-[250px]',
  titleButtonActive: 'bg-white border-blue-300 -translate-x-2 shadow-md',
  content: 'absolute inset-0 z-10 flex items-center',
  controlButton: 'absolute top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur-sm rounded-full shadow-lg hover:bg-white/30 transition-all duration-300 flex items-center justify-center group',
  floatingCard: 'group bg-white p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100 w-48 sm:w-52',
  indicator: 'h-2 rounded-full transition-all duration-300'
}

/**
 * 优化后的轮播组件
 */
export default function Carousel({
  autoPlay = true,
  interval = 8000,
  heightClass = 'h-[400px] sm:h-[500px] lg:h-[600px]',
  showIndicators = true,
  slides: propSlides,
  className
}: CarouselProps) {
  const slides = useMemo(() => propSlides || defaultSlides, [propSlides])
  const [active, setActive] = useState(0)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  // 触摸滑动相关状态
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // 最小滑动距离（像素）
  const minSwipeDistance = 50

  // 合并的导航函数
  const navigate = useCallback((direction: 'next' | 'prev' | number) => {
    setActive(prev => {
      const total = slides.length
      if (typeof direction === 'number') {
        return ((direction % total) + total) % total
      }
      return direction === 'next'
        ? (prev + 1) % total
        : ((prev - 1) + total) % total
    })
  }, [slides.length])

  // 标题点击处理 - 优化后
  const handleTitleClick = useCallback((index: number) => {
    navigate(index)
    setIsPlaying(false)
    setTimeout(() => setIsPlaying(autoPlay), 3000)
  }, [navigate, autoPlay])

  // 合并的定时器管理
  useEffect(() => {
    if (!autoPlay || !isPlaying || slides.length <= 1) {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
      return
    }

    timerRef.current = setInterval(() => navigate('next'), interval)
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
        timerRef.current = null
      }
    }
  }, [autoPlay, isPlaying, slides.length, interval, navigate])

  // 悬停控制 - 简化
  const handleMouseEnter = () => setIsPlaying(false)
  const handleMouseLeave = () => setIsPlaying(autoPlay)

  // 触摸事件处理函数
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // 重置touchEnd
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      navigate('next')
    } else if (isRightSwipe) {
      navigate('prev')
    }

    // 重置触摸状态
    setTouchStart(null)
    setTouchEnd(null)
  }

  const currentSlide = slides[active]

  return (
    <div className="relative">
      <section
        className={clsx(styles.section, heightClass, className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {/* 轮播图片背景 */}
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={clsx(
                styles.imageContainer,
                index === active ? 'opacity-100' : 'opacity-0'
              )}
            >
              <Image
                src={slide.imagePath}
                alt={slide.imageAlt}
                fill
                className={styles.image}
                unoptimized
                priority={index === active}
              />
            </div>
          ))}
        </div>

        {/* 轮播内容叠加层 - 响应式优化 */}
        <div className={styles.content}>
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 w-full flex flex-col lg:flex-row">
            {/* 左侧标题列表 - 移动端隐藏，PC端显示 */}
            <div className="hidden lg:block w-64 lg:w-72 xl:w-80 flex-shrink-0">
              <div className="flex flex-col space-y-4">
                {slides.map((slideItem, index) => (
                  <button
                    key={slideItem.id}
                    onClick={() => handleTitleClick(index)}
                    className={clsx(
                      styles.titleButton,
                      active === index && styles.titleButtonActive
                    )}
                    aria-label={`切换到 ${slideItem.title}`}
                  >
                    {/* 激活指示器 */}
                    <div className={clsx(
                      'absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-500 rounded-r-full transition-all duration-300',
                      active === index ? 'opacity-100 -translate-x-3' : 'opacity-0 -translate-x-1'
                    )} />

                    {/* 标题内容 */}
                    <div className="relative">
                      <h3 className={clsx(
                        'text-sm lg:text-base font-bold leading-tight mb-1 transition-colors duration-300',
                        active === index ? 'text-gray-900' : 'text-gray-800 group-hover:text-gray-900'
                      )}>
                        {slideItem.title}
                      </h3>

                      {slideItem.subtitle && (
                        <p className={clsx(
                          'text-xs leading-relaxed line-clamp-2 transition-colors duration-300',
                          active === index ? 'text-gray-600' : 'text-gray-500 group-hover:text-gray-600'
                        )}>
                          {slideItem.subtitle}
                        </p>
                      )}
                    </div>

                    {/* 悬停箭头 */}
                    <div className={clsx(
                      'absolute right-2 top-1/2 -translate-y-1/2 transition-all duration-300',
                      'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0',
                      active === index && 'opacity-100 translate-x-0'
                    )}>
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 轮播内容 - 移动端优化 */}
            <div className="flex-1 max-w-3xl mt-4 sm:mt-8 lg:mt-12 xl:mt-16 px-2 sm:px-0">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black leading-tight mb-3 sm:mb-4">
                {currentSlide.title}
              </h1>

              {currentSlide.subtitle && (
                <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-black leading-relaxed mb-4 sm:mb-6">
                  {currentSlide.subtitle}
                </h2>
              )}

              <p className="text-sm sm:text-base lg:text-lg text-black leading-relaxed max-w-2xl mb-6 sm:mb-8">
                {currentSlide.description}
              </p>

              {/* 双二维码按钮组 */}
              <DualQRCodeButtonGroup
                leftButton={{
                  text: currentSlide.primaryButtonText,
                  className: "px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base",
                  icon: (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                  )
                }}
                rightButton={{
                  text: currentSlide.secondaryButtonText || '联系客服',
                  className: "px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4 bg-white/90 backdrop-blur-sm text-black font-medium rounded-lg border border-gray-300 hover:bg-white hover:border-gray-400 transition-all duration-300 shadow-md hover:shadow-lg text-sm sm:text-base",
                  icon: (
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  )
                }}
                leftQRCode={{
                  src: '/images/contact/userhlc.png',
                  title: '客服咨询',
                  description: '扫码添加客服微信，获取专业支付解决方案咨询'
                }}
                rightQRCode={{
                  src: '/images/contact/gzh.png',
                  title: '关注公众号',
                  description: '扫码关注公众号，获取最新产品资讯和优惠信息'
                }}
                title="扫码联系我们"
                description="选择下方二维码进行联系，为您提供专业的支付解决方案"
                containerClassName="flex-row gap-3 sm:gap-4"
              />
            </div>
          </div>
        </div>

        {/* 移动端底部指示器 - 仅在移动端显示 */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 lg:hidden">
          <div className="flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleTitleClick(index)}
                className={clsx(
                  'w-2 h-2 rounded-full transition-all duration-300',
                  active === index ? 'bg-white w-6' : 'bg-white/50'
                )}
                aria-label={`切换到第 ${index + 1} 张图片`}
              />
            ))}
          </div>
        </div>

        {/* 移动端左右滑动按钮 - 已隐藏 */}
        <button
          onClick={() => navigate('prev')}
          className="hidden"
          aria-label="上一张"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => navigate('next')}
          className="hidden"
          aria-label="下一张"
        >
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>



        {/* 轮播信息 - 已隐藏 */}
        <div className="hidden">
          <div className="bg-white/20 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
            <span className="text-sm text-white font-medium">
              {active + 1} / {slides.length}
            </span>
          </div>
        </div>
      </section>

      {/* 底部悬浮卡片 - 响应式设计，移动端和PC端不同布局 */}
      <div className="absolute bottom-0 left-0 right-0 z-50 transform translate-y-1/2">
        {/* PC端：水平排列的4个卡片 */}
        <div className="hidden lg:flex justify-center items-center gap-4 px-4 max-w-[1800px] mx-auto">
          {floatingCards.map((card) => (
            <div
              key={card.id}
              className={clsx(
                'transition-all duration-300',
                'hover:-translate-y-1 cursor-pointer',
                'border-2 border-white',
                card.style === 'rounded' ? 'rounded-xl' : 'rounded',
                card.style === 'extended' ? 'px-4 pt-2.5 pb-5' : 'p-4'
              )}
              style={{
                display: 'block',
                marginRight: '20px',
                backgroundImage: card.type === 'special'
                  ? 'linear-gradient(rgb(80, 141, 255) 0%, rgba(80, 141, 255, 0.85) 100%)'
                  : 'linear-gradient(0deg, #fff, #f3f5f8)',
                boxShadow: card.type === 'special'
                  ? 'rgba(80, 141, 255, 0.4) 8px 8px 20px 0px'
                  : '8px 8px 20px 0 rgba(55,99,170,.1)',
                borderRadius: '4px',
                borderColor: card.type === 'special' ? 'rgba(80, 141, 255, 0.45)' : undefined,
                boxSizing: 'border-box',
                flex: card.style === 'extended' ? '2' : '1',
                width: '1px',
                maxWidth: card.style === 'extended' ? '420px' : 'none',
                height: 'auto',
                padding: card.style === 'extended' ? '10px 16px 20px' : '18px',
                position: 'relative',
                pointerEvents: 'auto'
              }}
            >
              {card.type === 'special' ? (
                <div className="flex flex-col items-start">
                  <h3 className="font-bold text-white flex items-center gap-3 text-lg mb-2 text-left">
                    {card.icon && React.createElement(card.icon, {
                      className: clsx(
                        'flex-shrink-0',
                        'text-white',
                        'w-6 h-6'
                      )
                    })}
                    {card.title}
                  </h3>
                  {card.description && (
                    <p className="text-white/90 text-base leading-relaxed text-left">
                      {card.description}
                    </p>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-start text-left">
                  <h3 className="font-bold text-gray-900 flex items-center gap-3 text-base">
                    {React.createElement(card.icon, {
                      className: clsx(
                        'flex-shrink-0',
                        card.iconColor || 'text-blue-600',
                        'w-6 h-6'
                      )
                    })}
                    {card.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-base">
                    {card.description}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 移动端：可滚动的水平卡片列表 */}
        <div className="lg:hidden px-4">
          <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2" style={{ scrollSnapType: 'x mandatory' }}>
            {floatingCards.map((card) => (
              <div
                key={card.id}
                className="flex-shrink-0 bg-white rounded-lg border-2 border-white shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer"
                style={{
                  backgroundImage: 'linear-gradient(0deg, #fff, #f3f5f8)',
                  boxShadow: '4px 4px 12px 0 rgba(55,99,170,.1)',
                  width: card.style === 'extended' ? '200px' : '160px',
                  minWidth: card.style === 'extended' ? '200px' : '160px',
                  scrollSnapAlign: 'start'
                }}
              >
                <div className="p-3">
                  {card.type === 'special' ? (
                    <div className="flex flex-col items-start">
                      <h3 className="font-bold text-gray-900 flex items-center gap-2 text-sm mb-1.5 text-left">
                        {card.icon && React.createElement(card.icon, {
                          className: clsx(
                            'flex-shrink-0',
                            card.iconColor || 'text-blue-600',
                            'w-5 h-5'
                          )
                        })}
                        {card.title}
                      </h3>
                      {card.description && (
                        <p className="text-gray-600 text-xs leading-relaxed text-left line-clamp-2">
                          {card.description}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="flex flex-col items-start text-left">
                      <h3 className="font-bold text-gray-900 flex items-center gap-2 text-sm mb-1.5">
                        {React.createElement(card.icon, {
                          className: clsx(
                            'flex-shrink-0',
                            card.iconColor || 'text-blue-600',
                            'w-5 h-5'
                          )
                        })}
                        {card.title}
                      </h3>
                      <p className="text-gray-600 text-xs line-clamp-2">
                        {card.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
