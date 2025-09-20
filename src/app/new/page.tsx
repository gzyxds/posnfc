import { type Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Solution } from '@/components/Solution'
import { Scenario } from '@/components/common/Scenario'
import BentoGrids from '@/components/BentoGrids'
import { VideoCarousel } from '@/components/carousel/VideoCarousel'
import Cardprice from '@/components/common/Cardprice'
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
 * 现代化POS机视频轮播 Hero 组件
 *
 * 使用 VideoCarousel 组件展示POS机产品，配置为多样化展示：
 * - 支持渐变背景效果
 * - 响应式布局适配各种设备
 * - 现代化UI设计风格
 * - 优化的用户交互体验
 */
function VideoHero() {
  // 高端大气的轮播数据配置
  const heroSlides = [
    {
      id: 1,
      title: '智能POS终端',
      subtitle: '免费申请｜支持信用卡/花呗/数字人民币',
      description:
        '2025新款电签POS机/手机POS/聚合码牌一站式申请：4G网络、秒到帐、0押金、0流量费，支持微信、支付宝、花呗、信用卡、数字人民币、Apple Pay等全渠道收款，个人小微1证办理，顺丰包邮2天到家！',
      productImage: '/images/product/index.png',
      backgroundImage: '/images/carousel/Headernew.png',
      textPosition: 'left',
      buttonText: '立即申请',
      buttonLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
      // 蓝色主题渐变背景
      gradient: {
        direction: 'to-br',
        from: 'blue-50',
        via: 'indigo-50',
        to: 'white',
        opacity: 0.9,
      },
      className: 'relative isolate overflow-hidden',
    },
    {
      id: 2,
      title: '移动收银专家',
      subtitle: '便捷高效的收款体验',
      description:
        '支持信用卡、储蓄卡、移动支付等多种收款方式，费率优惠，到账快速，为各行业商户提供专业的移动收银解决方案',
      productImage: '/images/product/智能屏.png',
      textPosition: 'left',
      buttonText: '免费申请',
      buttonLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
      // 绿色主题渐变背景
      gradient: {
        direction: 'to-br',
        from: 'emerald-50',
        via: 'green-50',
        to: 'white',
        opacity: 0.9,
      },
      className: 'relative isolate overflow-hidden',
    },
    {
      id: 3,
      title: '聚合支付平台',
      subtitle: '一码通收多种支付',
      description:
        '整合微信、支付宝、银联等主流支付渠道，一个二维码即可收取所有支付方式，简化收款流程，提升用户体验',
      productImage: '/images/product/云银.png',
      textPosition: 'left',
      buttonText: '立即体验',
      buttonLink: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all',
      // 紫色主题渐变背景
      gradient: {
        direction: 'to-br',
        from: 'purple-50',
        via: 'violet-50',
        to: 'white',
        opacity: 0.9,
      },
      className: 'relative isolate overflow-hidden',
    }
  ]

  return (
    <VideoCarousel
      autoPlay={true} // 启用自动播放
      interval={6000} // 切换间隔时间
      animationDuration={800} // 动画过渡时间
      showProgress={true} // 显示进度条
      showPlayButton={true} // 显示播放控制按钮
      showNavigation={true} // 显示导航按钮
      showIndicators={true} // 显示指示器
      height={{ base: 'h-[500px]', md: 'h-[600px]', lg: 'h-[700px]' }}
      variant="modern" // 现代风格
      theme="light" // 浅色主题
      parallax={true} // 启用视差效果
      enable3D={false} // 不启用3D效果
      textModeButton={true}
      showOverlay={true} // 显示遮罩
      customSlides={heroSlides}
      className="bg-gradient-to-b from-white to-gray-50"
      enableTouch={true} // 启用触摸滑动
      enableKeyboard={true} // 启用键盘导航
      mobileBreakpoint={768} // 移动端断点
    />
  )
}

/**
 * POS机产品页面主组件
 *
 * 展示POS机产品的核心功能和特性:
 * - 现代化轮播展示产品亮点
 * - 清晰的产品价格和功能对比
 * - 丰富的解决方案和应用场景
 * - 完整的产品特性和优势说明
 * - 常见问题解答和申请引导
 */
export default function ProductPage() {
  return (
    <>
      <main>
        <Header />

        {/* 产品展示区域 */}
        <VideoHero />

        {/* 产品价格展示区域 */}
        <Cardprice />

        {/* 解决方案展示 */}
        <Solution />

        {/* 产品功能与特性 */}
        <Accordion />
        <ProductTraits />

        {/* 产品优势展示 */}
        <Superiority />

        {/* 功能展示区域 */}
        <BentoGrids />

        {/* 常见问题解答 */}
        <Faqs />

        {/* 底部立即申请 */}
        <CatSections />
      </main>
      <Footer />
    </>
  )
}
