import { type Metadata } from 'next'
import Image from 'next/image'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ChartBarIcon,
  DocumentTextIcon,
  ArrowsPointingOutIcon,
  ShieldCheckIcon,
  GiftIcon,
  ChatBubbleLeftRightIcon,
  CreditCardIcon,
  BanknotesIcon,
  BoltIcon
} from '@heroicons/react/20/solid'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Container } from '@/components/Container'
import DualQRCodeButtonGroup from '@/components/common/QRCode'
// === 页面组件导入 - 按功能分类排序 ===
// === 解决方案与产品展示 ===
import { Solution } from '@/components/Solution' // 解决方案
import ProductTraits from '@/components/common/ProductTraits' // 产品特性
import Superiority from '@/components/common/Superiority' // 产品优势
import Advantage from '@/components/Advantage' // 优势展示
// === 客户与信任建立 ===
import Customer from '@/components/common/Customer' // 客户案例
// === 支持与帮助 ===
import { Faqs } from '@/components/Faqs' // 常见问题
// === 页面底部 ===
import CatSections from '@/components/CatSections' // 底部行动区域
import Rightleft from '@/components/common/Rightleft'
import Leftright from '@/components/common/Leftright'
import Hotpos from '@/components/Hotpos'
import LatestApplication from '@/components/common/Latestapplication'
// 电签POS机产品接口定义
interface PosProduct {
  id: number
  name: string
  subtitle: string
  specs: {
    cpu: string
    memory: string
    storage: string
    bandwidth: string
  }
  regions: string[]
  duration: string
  originalPrice: number
  currentPrice: number
  discount: string
  isHot?: boolean
  isRecommended?: boolean
}

// 电签POS机产品数据
const posProducts: PosProduct[] = [
  {
    id: 1,
    name: '电签POS机',
    subtitle: '基础版',
    specs: {
      cpu: '单核处理器',
      memory: '512MB',
      storage: '4GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 599,
    currentPrice: 299,
    discount: '5折',
    isHot: true,
  },
  {
    id: 2,
    name: '4G电签POS',
    subtitle: '标准版',
    specs: {
      cpu: '双核处理器',
      memory: '1GB',
      storage: '8GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 899,
    currentPrice: 499,
    discount: '5.5折',
  },
  {
    id: 3,
    name: '智能电签POS',
    subtitle: '专业版',
    specs: {
      cpu: '四核处理器',
      memory: '2GB',
      storage: '16GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 1299,
    currentPrice: 799,
    discount: '6折',
  },
  {
    id: 4,
    name: '全能电签POS',
    subtitle: '旗舰版',
    specs: {
      cpu: '八核处理器',
      memory: '4GB',
      storage: '32GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 1999,
    currentPrice: 1299,
    discount: '6.5折',
    isRecommended: true,
  },
  {
    id: 5,
    name: '便携式电签POS',
    subtitle: '迷你版',
    specs: {
      cpu: '单核处理器',
      memory: '512MB',
      storage: '4GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 499,
    currentPrice: 199,
    discount: '4折',
  },
  {
    id: 6,
    name: '触屏电签POS',
    subtitle: '触控版',
    specs: {
      cpu: '双核处理器',
      memory: '1GB',
      storage: '8GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 999,
    currentPrice: 599,
    discount: '6折',
  },
  {
    id: 7,
    name: '双屏电签POS',
    subtitle: '豪华版',
    specs: {
      cpu: '四核处理器',
      memory: '2GB',
      storage: '16GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 1599,
    currentPrice: 999,
    discount: '6.2折',
  },
  {
    id: 8,
    name: '全能收款POS',
    subtitle: '企业版',
    specs: {
      cpu: '八核处理器',
      memory: '4GB',
      storage: '32GB',
      bandwidth: '4G全网通',
    },
    regions: ['全国'],
    duration: '1年',
    originalPrice: 2299,
    currentPrice: 1599,
    discount: '7折',
    isHot: true,
  },
]
// 页面元数据配置
export const metadata: Metadata = {
  title: '电签POS机_4G电签POS_电签版POS机_移动POS机_智能POS机',
  description:
    '电签POS机，支持电子签名功能，4G全网通，银联认证，多支付方式，助力商户轻松收款。',
  keywords: [
    '电签POS机',
    '4G电签POS',
    '电签版POS机',
    '移动POS机',
    '智能POS机',
    '电子签名',
    'POS机办理',
    '银联POS机',
    '移动支付',
    '收款神器',
    'POS机申请',
    '低费率POS机',
    'POS机费率',
    'POS机品牌',
    'POSNFC',
    '商户收款',
    '便捷收款',
  ],
}

// ECS 云计算服务核心特性配置
const ecsFeatures = [
  {
    name: '弹性伸缩',
    description:
      '根据业务需求自动调整计算资源，支持秒级扩容和缩容，确保应用性能的同时优化成本控制。',
    icon: ChartBarIcon,
  },
  {
    name: '高可用架构',
    description:
      '多可用区部署，99.95% 的服务可用性保障，自动故障转移和负载均衡，确保业务连续性。',
    icon: DocumentTextIcon,
  },
  {
    name: '安全防护',
    description:
      '企业级安全防护体系，包括网络隔离、访问控制、数据加密和安全审计，全方位保护您的数据安全。',
    icon: LockClosedIcon,
  },
]

// Leftright 组件的特性数据
const leftRightFeatures = [
  {
    name: '资源监控',
    summary: '实时监控云资源使用情况，智能预警系统。',
    description:
      '通过直观的仪表盘展示CPU、内存、存储等关键指标的使用情况，并在达到阈值时及时发出预警通知。',
    icon: ChartBarIcon,
  },
  {
    name: '弹性伸缩',
    summary: '根据业务负载自动调整计算资源，确保性能与成本的最优平衡。',
    description:
      '智能感知业务高峰，自动扩展或收缩计算资源，既保证服务质量，又避免资源浪费。',
    icon: ArrowsPointingOutIcon,
  },
  {
    name: '安全管理',
    summary: '全方位的云安全防护，为您的业务保驾护航。',
    description:
      '提供多层次安全防护，包括访问控制、数据加密、安全组策略等，全面保障您的云上资产安全。',
    icon: ShieldCheckIcon,
  },
]

// Rightleft 组件的特性数据
const rightLeftFeatures = [
  {
    name: '一键部署',
    description:
      '通过简单的推送操作即可完成应用部署，大幅提升开发效率，让您专注于业务创新而非运维工作。',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL证书管理',
    description:
      '自动化SSL证书申请、部署和续期，为您的网站提供全方位的HTTPS安全保护。',
    icon: LockClosedIcon,
  },
  {
    name: '数据库备份',
    description:
      '智能化数据备份策略，支持定时备份和增量备份，确保您的数据安全无忧。',
    icon: ServerIcon,
  },
]

// 图片轮播 Hero 组件 - 展示 双屏电签POS 云计算服务的主要图片内容
function DqHero() {
  return (
    <section className="relative pt-16 pb-12 lg:py-16" style={{
      background: 'linear-gradient(135deg, #f0f8ff 0%, #e6f0ff 50%, #d9e8ff 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* 添加科技感元素 */}
      <div className="absolute inset-0 z-0">
        {/* 网格线条 */}
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
          backgroundSize: '20px 20px',
          backgroundPosition: 'center center'
        }}></div>

        {/* 浮动圆点 - 模拟数据流 */}
        <div className="absolute top-0 left-1/4 w-64 h-64 rounded-full bg-blue-500/20 blur-xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full bg-blue-400/15 blur-xl"></div>

        {/* 支付科技元素 */}
        <div className="absolute top-1/4 right-1/3 w-20 h-20 border border-blue-300/40 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/3 w-32 h-32 border border-blue-400/30 rounded-full"></div>

        {/* 模拟电路板线条 */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>
      </div>

      {/* 添加半透明遮罩确保文字可读性 */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 to-blue-100/30 z-0"></div>
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 左侧内容区域 */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-md bg-blue-500/20 px-3 py-1 text-sm text-blue-700 border border-blue-300/50">
                尊享特权 · 激活立返299元
              </div>

              <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
                引领支付新时代
                <span className="block text-blue-600">智慧收款终端</span>
              </h1>

              <p className="text-lg text-gray-600">
                全面支持国内主流支付品牌，打造一站式商业解决方案
              </p>
            </div>

            {/* 核心特性 - 简化版 */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-800">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-lg">全渠道智能收款 · 一体化会员营销系统</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-800">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-lg">行业领先费率0.38% · 全场景商业解决方案</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-800">
                <span className="text-blue-600 font-bold">✓</span>
                <span className="text-lg">银行级安全保障 · 智能资金管理系统</span>
              </div>
            </div>

            {/* 行动按钮 - 简化版 */}
            <DualQRCodeButtonGroup
              leftButton={{
                text: '立即领取',
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
                description: '扫码添加客服领取'
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

          {/* 右侧产品图片 - 增大尺寸 */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/product/index.png"
              alt="智能POS机产品图"
              width={650}
              height={450}
              className="w-full h-auto max-w-[350px] lg:max-w-[650px]"
              unoptimized
            />
          </div>
        </div>
      </Container>
    </section>
  )
}


// 电签POS机 页面主组件
export default function DqPage() {
  return (
    <>
      <Header />
      <main>
        <DqHero />

        {/* 热门电签POS机产品推荐 */}
        <Rightleft />
        <Hotpos />
        <Leftright />

        {/* 电签POS产品优势卡片网格 */}
        <section className="bg-gray-50 py-16 sm:py-24">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                <svg className="mr-3 inline-block h-8 w-8 text-blue-600 sm:h-10 sm:w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                产品优势
              </h2>
              <p className="text-lg text-gray-600">
                专业电签POS机，助力商户轻松收款
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-6">
                <div className="flex items-center mb-3">
                  <svg className="mr-3 h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">
                    电子签名
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  支持电子签名功能，符合银联认证标准，交易安全可靠，让每一笔交易都有法律保障
                </p>
              </div>

              <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-6">
                <div className="flex items-center mb-3">
                  <svg className="mr-3 h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">
                    4G全网通
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  内置4G模块，支持三大运营商网络，信号稳定，随时随地轻松收款，不受网络限制
                </p>
              </div>

              <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-6">
                <div className="flex items-center mb-3">
                  <svg className="mr-3 h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">
                    多支付方式
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  支持银行卡、微信、支付宝、云闪付等多种支付方式，满足不同客户支付需求
                </p>
              </div>

              <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-6">
                <div className="flex items-center mb-3">
                  <svg className="mr-3 h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">
                    安全可靠
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  通过银联安全认证，采用金融级加密技术，保障交易数据安全，让商户收款更安心
                </p>
              </div>

              <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-6">
                <div className="flex items-center mb-3">
                  <svg className="mr-3 h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">
                    操作简单
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  界面友好，操作简单，无需专业知识，快速上手，轻松完成收款操作
                </p>
              </div>

              <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-6">
                <div className="flex items-center mb-3">
                  <svg className="mr-3 h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">
                    费率优惠
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  提供行业优惠费率，低至0.38%，为商户节省交易成本，提高经营利润
                </p>
              </div>

              <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-6">
                <div className="flex items-center mb-3">
                  <svg className="mr-3 h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">
                    快速到账
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  支持T+1、D+0多种结算方式，资金快速到账，提高商户资金周转效率
                </p>
              </div>

              <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-6">
                <div className="flex items-center mb-3">
                  <svg className="mr-3 h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">
                    全程服务
                  </h3>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  7×24小时客服支持，专业安装指导，定期维护保养，让商户使用无忧
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 电签POS优势对比表格 */}
        <section className="bg-white py-16 sm:py-24">
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                优势对比
              </h2>
            </div>

            {/* 移动端卡片布局 - 显示核心对比信息 */}
            <div className="block space-y-6 lg:hidden">
              {[
                {
                  title: '支付方式',
                  other: '仅支持银行卡',
                  ours: '支持多种支付方式',
                  traditional: '仅支持现金或银行卡',
                },
                {
                  title: '网络连接',
                  other: '需要WiFi或有线网络',
                  ours: '4G全网通，不受网络限制',
                  traditional: '需要电话线或网络',
                },
                {
                  title: '交易安全',
                  other: '基础安全防护',
                  ours: '银联认证，金融级加密',
                  traditional: '安全防护较弱',
                },
                {
                  title: '操作便捷性',
                  other: '操作较复杂',
                  ours: '界面友好，操作简单',
                  traditional: '操作繁琐',
                },
                {
                  title: '结算速度',
                  other: 'T+1结算',
                  ours: '支持T+1、D+0多种结算',
                  traditional: '结算周期长',
                },
                {
                  title: '售后服务',
                  other: '工作时间服务',
                  ours: '7×24小时全天候服务',
                  traditional: '服务响应慢',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border border-gray-200 bg-white transition-colors duration-200 hover:border-blue-300"
                >
                  <div className="border-b border-gray-200 bg-gray-50 p-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="border border-blue-200 bg-blue-50 p-3">
                      <div className="mb-1 text-sm font-medium text-blue-800">
                        电签POS机
                      </div>
                      <div className="text-sm text-blue-700">{item.ours}</div>
                    </div>
                    <div className="flex space-x-3">
                      <div className="flex-1 bg-gray-50 p-3">
                        <div className="mb-1 text-xs font-medium text-gray-600">
                          传统POS机
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.other}
                        </div>
                      </div>
                      <div className="flex-1 bg-gray-50 p-3">
                        <div className="mb-1 text-xs font-medium text-gray-600">
                          收银系统
                        </div>
                        <div className="text-xs text-gray-500">
                          {item.traditional}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* PC端完整表格布局 */}
            <div className="hidden overflow-x-auto lg:block">
              <table className="min-w-full border border-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="w-40 border-b border-gray-200 px-6 py-4 text-left text-sm font-semibold text-gray-900">
                      对比项
                    </th>
                    <th className="border-b border-gray-200 px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      传统POS机
                    </th>
                    <th className="border-b border-blue-600 bg-blue-600 px-6 py-4 text-center text-sm font-semibold text-white">
                      电签POS机
                    </th>
                    <th className="border-b border-gray-200 px-6 py-4 text-center text-sm font-semibold text-gray-900">
                      收银系统
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      支付方式
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      仅支持银行卡支付
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      支持银行卡、微信、支付宝、云闪付等多种支付方式
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      仅支持现金或银行卡支付
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      网络连接
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      需要WiFi或有线网络
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      4G全网通，不受网络限制，随时随地轻松收款
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      需要电话线或网络连接
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      交易安全
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      基础安全防护
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      银联认证，金融级加密技术，保障交易数据安全
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      安全防护较弱
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      操作便捷性
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      操作较复杂，需要培训
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      界面友好，操作简单，无需专业知识，快速上手
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      操作繁琐，功能复杂
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      结算速度
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      T+1结算
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      支持T+1、D+0多种结算方式，资金快速到账
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      结算周期长，通常需要3-5天
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="border-r border-gray-200 px-6 py-4 text-sm font-medium text-gray-900">
                      售后服务
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      工作时间服务
                    </td>
                    <td className="bg-blue-50 px-6 py-4 text-sm font-medium text-blue-600">
                      7×24小时全天候服务，专业安装指导，定期维护保养
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      服务响应慢，维修周期长
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* === 解决方案与产品展示 === */}

        <ProductTraits />
        <Superiority />
        <Advantage />
        <Solution />
        {/* === 客户与信任建立 === */}
        <LatestApplication />
        {/* === 页面底部 === */}
        <CatSections />
      </main>
      <Footer />
    </>
  )
}
