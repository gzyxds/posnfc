import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Solution } from '@/components/Solution'
import BentoGrids from '@/components/BentoGrids'
import { VideoCarousel } from '@/components/carousel/VideoCarousel'
import { Price } from '@/components/common/Price'
import { Scenario } from '@/components/common/Scenario'
import { ServiceTabs } from '@/components/ServiceTabs'
import CatSections from '@/components/CatSections'
import { Faqs } from '@/components/Faqs'
import { Accordion } from '@/components/common/Accordion'


export const metadata: Metadata = {
  title: '优刻云-最新活动',
  description:
    '了解 TaxPal 的完整功能套件，专为小型企业会计需求而设计的强大工具。',
}

/**
 * 视频轮播 Hero 组件
 * 使用 VideoCarousel 组件，配置为单个视频展示
 */
function VideoHero() {
  // 自定义单个视频的轮播数据
  const singleVideoSlide = [
    {
      id: 1,
      title: '优刻云新用户',
      subtitle: '新用户特惠专场',
      description: '火山引擎旗下优刻云，为新用户提供丰富的云服务体验。从云计算到AI服务，从数据分析到智能推荐，助力您的业务快速上云。',
      backgroundType: 'video' as const,
      backgroundVideo: {
        src: 'https://lf6-cdn-tos.huoshanstatic.com/obj/inspirecloud-file/baas/tt502102w0zm96mm30/48fc7d2b04a1c55b_1736500004142.mp4',
        autoPlay: true,
        muted: true,
        loop: true,
        controls: false,
        preload: 'auto' as const,
      },
      backgroundImage: '/images/carousel/HeaderCarousel1.jpg',
      textPosition: 'left' as const,
      buttonText: '立即参与',
      buttonLink: '#features',
    },
  ]

  return (
    <VideoCarousel
      autoPlay={false} // 单个视频不需要自动切换
      showProgress={false} // 单个视频不需要进度条
      showPlayButton={true} // 显示播放控制按钮
      height={{ base: 'h-[400px]', md: 'h-[450px]', lg: 'h-[500px]' }}
      theme="light"
      textModeButton={true}
      showOverlay={false} // 不显示遮罩
      customSlides={singleVideoSlide}
      className=""
    />
  )
}

/**
 * 产品功能页面主组件
 * 展示产品的核心功能和特性
 */
export default function ProductPage() {
  return (
    <>
      <main>
        <Header /> {/* 导航栏 */}
        <VideoHero /> {/* Hero 区域 */}
        <Price /> {/* 价格展示区域 */}
       <ServiceTabs /> {/* 价格选项卡 */}
       <Scenario /> {/* 应用场景 */}
       <Solution /> {/* 解决方案 */}
       <Accordion /> {/* 云计算功能特性展示 */}
       <BentoGrids /> {/* 功能展示区域 */}
       <Faqs /> {/* 常见问题解答 */}
       <CatSections /> {/* 底部立即购买 */}

      </main>
      <Footer />
    </>
  )
}
