import { type Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Solution } from '@/components/Solution'
import BentoGrids from '@/components/BentoGrids'
import { VideoCarousel } from '@/components/carousel/VideoCarousel'
import Cardprice from '@/components/common/Cardprice'
import { Scenario } from '@/components/common/Scenario'
import ServiceTabs from '@/components/ServiceTabs'
import CatSections from '@/components/CatSections'
import { Faqs } from '@/components/Faqs'
import { Accordion } from '@/components/common/Accordion'
import { ProductTraits } from '@/components/common/ProductTraits'
import { Superiority } from '@/components/common/Superiority'

export const metadata: Metadata = {
  title: '电签POS机_手机POS_聚合码牌免费申请｜支持信用卡/花呗/数字人民币',

  keywords: [
    '电签POS机',
    '手机POS机',
    '聚合码牌',
    '4G电签',
    '免费申请',
    '支持花呗',
    '支持信用卡',
    '数字人民币支付',
    '移动收款',
    '刷卡秒到',
    '无押金',
  ],

  description:
    '2025新款电签POS机/手机POS/聚合码牌一站式申请：4G网络、秒到帐、0押金、0流量费，支持微信、支付宝、花呗、信用卡、数字人民币、Apple Pay等全渠道收款，个人小微1证办理，顺丰包邮2天到家！',
}

/**
 * POS机视频轮播 Hero 组件
 * 使用 VideoCarousel 组件展示POS机产品视频，配置为单个视频展示
 */
function VideoHero() {
  // 自定义单个视频的轮播数据
  const singleVideoSlide = [
    {
      id: 1,
      title: '在线申请',
      subtitle: '免费申请｜支持信用卡/花呗/数字人民币',
      description:
        '2025新款电签POS机/手机POS/聚合码牌一站式申请：4G网络、秒到帐、0押金、0流量费，支持微信、支付宝、花呗、信用卡、数字人民币、Apple Pay等全渠道收款，个人小微1证办理，顺丰包邮2天到家！',
      backgroundType: 'video' as const,
      backgroundVideo: {
        src: '/images/product/index1.jpg',
        autoPlay: true,
        muted: true,
        loop: true,
        controls: false,
        preload: 'auto' as const,
      },
      backgroundImage: '/images/carousel/Headernew.png',
      textPosition: 'left' as const,
      buttonText: '立即申请',
      buttonLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
    },
  ]

  return (
    <VideoCarousel
      autoPlay={false} // 单个视频不需要自动切换
      showProgress={false} // 单个视频不需要进度条
      showPlayButton={true} // 显示播放控制按钮
      showNavigation={false} // 不显示导航按钮
      height={{ base: 'h-[500px]', md: 'h-[600px]', lg: 'h-[700px]' }}
      theme="light"
      textModeButton={true}
      showOverlay={false} // 不显示遮罩
      customSlides={singleVideoSlide}
      className=""
    />
  )
}

/**
 * POS机产品页面主组件
 * 展示POS机产品的核心功能和特性
 */
export default function ProductPage() {
  return (
    <>
      <main>
        <Header /> {/* 导航栏 */}
        <VideoHero /> {/* POS机产品展示区域 */}
        <Cardprice /> {/* POS机价格展示区域 */}

        <Solution /> {/* POS机收款解决方案 */}
        <Accordion /> {/* POS机功能特性展示 */}
        <ProductTraits /> {/* POS机产品特性展示 */}
        <Superiority /> {/* POS机产品优势展示 */}
        <BentoGrids /> {/* POS机功能展示区域 */}
        <Faqs /> {/* POS机常见问题解答 */}
        <CatSections /> {/* 底部立即申请 */}
      </main>
      <Footer />
    </>
  )
}
