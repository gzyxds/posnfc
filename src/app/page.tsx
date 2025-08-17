import CallToAction from '@/components/BentoGrids'
import CatSections from '@/components/CatSections'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Hero from '@/components/Hero'
import { VideoCarousel } from '@/components/carousel/VideoCarousel'
import Logoclouds from '@/components/Logoclouds'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import Stats from '@/components/Stats'
import Testimonials from '@/components/Testimonials'
import { Solution } from '@/components/Solution'
import Zone from '@/components/Zone'
import { Price } from '@/components/Price'
import Customer from '@/components/common/Customer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '优刻云计算_弹性云服务器_cvm轻量服务器_香港服务器_高防服务器_优刻云官网',
  description: '【优刻云计算CloudCvm】 云计算云服务器基础设施服务提供商、为数百万中小微企业和开发者降低全球化上云成本、提供优刻云服务器、 弹性云服务器、CVM轻量云服务器、 云主机CVM 、 香港云服务器、云虚拟主机、免备案海外空间、服务器租用一站式服务',
}

export default function Home() {
  return (
    <>
      <Header />
      <VideoCarousel /> {/* 视频轮播 */}
      <main>
        <Hero /> {/* 英雄区域 */}
        <PrimaryFeatures /> {/* 主要功能 */}
        <SecondaryFeatures /> {/* 次要功能 */}
        <Solution /> {/* 解决方案 */}
        <Price /> {/* 价格方案 */}
        <CallToAction /> {/* 呼叫行动 */}
        <Stats /> {/* 统计数据 */}
        <Testimonials /> {/* 客户案例 */}
        <Customer /> {/* 客户案例（手风琴布局） */}
        <Zone />{/*区域分布 */}
        <Faqs /> {/* 常见问题解答 */}
        <Logoclouds /> {/* 客户案例 */}
        <CatSections />{/* 立即行动 */}
      </main>
      <Footer />
    </>
  )
}
