import { type Metadata } from 'next'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Solution } from '@/components/Solution'
import BentoGrids from '@/components/BentoGrids'
import Carousel from '@/components/carousel/Carousel'
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
        <Carousel />
        {/* 产品价格展示区域 */}
        <Cardprice />
        {/* 解决方案展示 */}
        <Solution />
        {/* 产品功能与特性 */}
        <Accordion />
        <ProductTraits />
        {/* 产品优势展示 */}
        <Superiority />


        {/* 底部立即申请 */}
        <CatSections />
      </main>
      <Footer />
    </>
  )
}
