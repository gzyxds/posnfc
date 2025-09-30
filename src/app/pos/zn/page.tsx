import { type Metadata } from 'next'
import Image from 'next/image'
import {
  CpuChipIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  CreditCardIcon,
  UserGroupIcon,
  CubeIcon,
  WifiIcon,
  Cog6ToothIcon,
  Battery100Icon,
  CurrencyYenIcon,
  GiftIcon,
  PercentBadgeIcon,
  ServerIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/20/solid'

// === 页面组件导入 - 按功能分类排序 ===
// === 布局组件 ===
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'

// === 轮播组件 ===
import { Carousel } from '@/components/carousel'

// === 解决方案与产品展示 ===
import { Solution } from '@/components/Solution'
import ProductTraits from '@/components/common/ProductTraits'
import Superiority from '@/components/common/Superiority'
import Advantage from '@/components/Advantage'

// === 产品价格卡片 ===
import Cardprice from '@/components/common/Cardprice'

// === 客户与信任建立 ===
import Customer from '@/components/common/Customer'


// === 支持与帮助 ===
import { Faqs } from '@/components/Faqs'

// === 页面底部 ===
import CatSections from '@/components/CatSections'

// === 二维码按钮组件 ===
import DualQRCodeButtonGroup from '@/components/common/QRCode'
import Latestapplication from '@/components/common/Latestapplication'




/**
 * 页面SEO元数据配置
 * 包含标题、描述和关键词等SEO优化信息
 */
export const metadata: Metadata = {
  title: '智能POS机办理官网｜0元免押+激活返现299元，费率0.38%终身锁',
  description:
    '正规一清智能POS机办理入口：双屏收银一体机，0元免押金，激活返现299元，支持微信、支付宝、花呗、信用卡、数字人民币等全渠道收款，自带会员营销SaaS系统，餐饮/零售/美业/加油站/夜市等场景全覆盖，顺丰包邮当天发货！',
  keywords:
    '智能POS机,安卓收银一体机,双屏POS机,POS机办理,POS机价格,POS机官网,扫码支付,刷卡支付,NFC闪付,数字人民币支付,会员管理SaaS,库存管理,营销发券,数据分析,4G全网通,WiFi双频,蓝牙5.0,15.6英寸大屏,客显广告屏,安卓13系统,8核CPU,一键OTA升级,0元免押,激活返现299元,费率0.38%永不+3,秒到帐,终身免费SaaS,顺丰包邮,10分钟上手,30天无理由退,支持花呗信用卡,央行一清认证',
}

/**
 * 智能POS机Hero组件 - 简约版
 * 左右分栏布局，左侧展示产品信息，右侧展示产品图片
 */
function PosHero() {
  return (
    <section className="relative pt-16 pb-12 lg:py-16" style={{backgroundColor: '#f0f4f8'}}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 左侧内容区域 */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-700">
                0元免押金 · 激活返现299元
              </div>

              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                智能POS机
                <span className="block text-blue-600">双屏收银一体机</span>
              </h1>

              <p className="text-lg text-gray-600">
                15.6英寸主屏+11.6英寸客显，全渠道收款，会员营销SaaS，库存管理，数据分析
              </p>
            </div>

            {/* 核心特性 - 简化版 */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="text-green-600">✓</span>
                <span>全渠道收款 · 会员营销SaaS</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="text-green-600">✓</span>
                <span>费率0.38% · 多场景适用</span>
              </div>
            </div>

            {/* 行动按钮 - 简化版 */}
            <DualQRCodeButtonGroup
              leftButton={{
                text: '立即办理',
                className: 'inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 transition-colors',
                icon: <GiftIcon className="mr-2 h-5 w-5" />
              }}
              rightButton={{
                text: '联系客服',
                className: 'inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors',
                icon: <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />
              }}
              leftQRCode={{
                src: '/images/contact/gzh.png',
                alt: '微信公众号二维码',
                title: '关注公众号',
                description: '扫描二维码关注公众号'
              }}
              rightQRCode={{
                src: '/images/contact/userhlc.png',
                alt: '客服二维码',
                title: '联系客服',
                description: '扫码添加客服咨询'
              }}
              title="扫码联系我们"
              description="选择下方二维码进行联系"
            />

            {/* 信任标识 - 简化版 */}
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>央行一清认证</span>
              <span>·</span>
              <span>顺丰包邮</span>
              <span>·</span>
              <span>30天无理由退</span>
            </div>
          </div>

          {/* 右侧产品图片 - 简化版 */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/product/聚合支持.svg"
              alt="智能POS机产品图"
              width={500}
              height={400}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
我们的核心优势
 */
const rightLeftFeatures = [
  {
    name: '0元免押',
    description: '0元押金拿机，30天内激活即可，无任何隐藏费用',
    icon: CurrencyYenIcon,
  },
  {
    name: '激活返现',
    description: '激活一台返现299元，代理版最高返现399元，快速回本',
    icon: GiftIcon,
  },
  {
    name: '费率0.38%',
    description: '费率0.38%永不+3，电子合同写明，涨价双倍赔付',
    icon: PercentBadgeIcon,
  },
  {
    name: '终身免费SaaS',
    description: '收银系统、会员管理、库存管理等SaaS功能终身免费使用',
    icon: ShieldCheckIcon,
  },
]





/**
 * 智能POS机页面主要组件
 * 整合所有功能模块，构建完整的产品展示页面
 */
export default function ECSPage() {
  return (
    <>
      <Header />
      <main>
        <PosHero />
        <Cardprice />
        {/* === 解决方案与产品展示 === */}
        <ProductTraits />
        <Superiority />
        <Solution />
        <Advantage />
        {/* === 订单记录 === */}
        <Latestapplication />


        {/* === 页面底部 === */}
        <CatSections />
      </main>
      <Footer />
    </>
  )
}
