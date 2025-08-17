import CallToAction from '@/components/BentoGrids'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import Hero from '@/components/Hero'
import { VideoCarousel } from '@/components/carousel/VideoCarousel'
import Pricing from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import Stats from '@/components/Stats'
import { Testimonials } from '@/components/Testimonials'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '优刻云计算 - 专业云服务',
  description: '优刻云计算提供专业的云服务，帮助企业实现数字化转型。',
}

export default function Home() {
  return (
    <>
      <Header />
      <VideoCarousel />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Stats />
        <Testimonials />
        <Pricing />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
