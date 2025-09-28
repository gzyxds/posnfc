import type { Metadata } from 'next'

// 布局组件
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// 媒体展示组件
import { Carousel } from '@/components/carousel'
import Hero from '@/components/Hero'

// 功能特性组件
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import Leftright from '@/components/common/Leftright'
import Rightleft from '@/components/common/Rightleft'
import { Solution } from '@/components/Solution'
import { Scenario } from '@/components/common/Scenario'
import Erlie from '@/components/common/Erlie'
import { Accordion } from '@/components/common/Accordion'
import { Merchants } from '@/components/common/Merchants'


// 商业组件
import Price from '@/components/Price'
import ServiceTabs from '@/components/ServiceTabs'
import CallToAction from '@/components/BentoGrids'

// 数据展示组件
import Advantage from '@/components/Advantage'
import Testimonials from '@/components/Testimonials'
import Customer from '@/components/common/Customer'


// 信息组件
import { Faqs } from '@/components/Faqs'
import Logoclouds from '@/components/Logoclouds'
import { Agent } from '@/components/common/agent'
import CatSections from '@/components/CatSections'
import Latestapplication from '@/components/common/Latestapplication'



/**
 * 首页 SEO 元数据配置
 * 包含页面标题、描述和关键词，用于搜索引擎优化
 */
export const metadata: Metadata = {
  title: 'POS支付网_电签POS机_手机POS办理_商户收款码_聚合支付服务平台',
  description: '【POS支付网】专业POS机办理平台，提供银盛、拉卡拉、中付、乐刷等品牌智能收银终端、移动收款设备、刷脸支付设备办理服务。支持电签POS机、手机POS、码牌收款、商户收款码等多种支付方式，银联正规认证，费率优惠，激活返现。提供数字经营、聚合支付、在线pos刷卡等全方位支付解决方案',
  keywords: [
    // 核心业务词
    'POS机办理', 'pos机官网', 'POS机支付网', 'pos支付网', 'POS网站',
    // 品牌词
    '银盛POS机', '拉卡拉POS机', '中付POS机', '乐刷POS机', '银联正规pos机办理',
    // 产品类型词
    '智能收银终端', '移动收款设备', '刷脸支付设备', '电签POS机', '信用卡POS机',
    '手机POS', '智能终端', '移动收银设备', '刷卡POS机',
    // 功能服务词
    '码牌收款', '商户收款码', '收钱码', '聚合码牌', '移动收款', 'pos收单',
    '支付服务', '数字经营', '智能设备',
    // 应用场景词
    'pos业务', '在线pos刷卡', 'posapp下载', '手机POS下载',
    // 长尾词
    '拉卡拉pos机怎么办理', '点刷pos官网下载手机版', 'pos圈支付网',
    'posapp下载刷卡pos机'
  ],
}

/**
 * 首页组件 - POS机服务平台主页
 *
 * 页面结构按照用户浏览路径和转化漏斗设计：
 * 1. 视觉冲击 → 功能展示 → 解决方案 → 商业转化 → 社会证明 → 行动引导
 *
 * @returns {JSX.Element} 完整的首页布局
 */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Carousel />
        <PrimaryFeatures />
        <Scenario />
        <Rightleft />
        <Leftright />
        <Agent />
        <Accordion />
        <Merchants />
        <CallToAction />
        <Advantage />
        <Logoclouds />
        <Latestapplication />
        <CatSections />
      </main>
      <Footer />
    </>
  )
}
