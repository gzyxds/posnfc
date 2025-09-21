import { type Metadata } from 'next'
import { QRCodeModal } from '@/components/common/QRCode'
import {
  PhoneIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  TruckIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  QrCodeIcon,
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { VideoCarousel } from '@/components/carousel/VideoCarousel'

export const metadata: Metadata = {
  title: 'POS机办理指南｜银盛/拉卡拉/中付/乐刷一级代理_0.38%费率秒到',
  description:
    '正规一清POS机办理指南：银盛/拉卡拉/中付/乐刷总部直签，电签版/智能版/手机POS/聚合码牌随心选，0.38%费率永不+3，激活一台返299元，支持信用卡、微信、支付宝、数字人民币，个人/商户均可在线申请，顺丰包邮当天发货！',
}

// POS机服务数据
const posServices = [
  {
    title: '电签POS机',
    description: '4G全网通，秒到账',
    subDescription: '0.38%费率永不+3，支持信用卡/花呗/数字人民币',
    icon: CreditCardIcon,
    action: '立即申请',
    href: '/new',
  },
  {
    title: '智能POS机',
    description: '双屏收银，会员管理',
    subDescription: '安卓13系统，扫码点餐+库存管理一体化',
    icon: DevicePhoneMobileIcon,
    action: '了解详情',
    href: '/new',
  },
  {
    title: '手机POS机',
    description: '便携式移动收款',
    subDescription: '口袋大小，内置电池，地摊外卖都能刷',
    icon: DevicePhoneMobileIcon,
    action: '免费领取',
    href: '/new',
  },
  {
    title: '聚合码牌',
    description: '一张码全渠道收款',
    subDescription: '支持微信/支付宝/云闪付，语音播报防漏单',
    icon: QrCodeIcon,
    action: '立即办理',
    href: '/new',
  },
]

// POS机办理流程数据
const posProcessSteps = [
  {
    title: '提交申请',
    description: '填写基本信息',
    icon: DocumentTextIcon,
  },
  {
    title: '客服电核',
    description: '确认身份信息',
    icon: PhoneIcon,
  },
  {
    title: '顺丰包邮',
    description: '全国24小时发货',
    icon: TruckIcon,
  },
  {
    title: '开机即用',
    description: '激活秒到账',
    icon: CheckCircleIcon,
  },
]

// POS机常见问题数据
const faqData = [
  {
    question: 'POS机怎么办理？需要什么资料？',
    answer: '办理POS机需要提供身份证正反面照片、银行卡照片和联系方式。个人和商户均可办理，无需营业执照，最快当天发货。',
  },
  {
    question: 'POS机费率是多少？会不会涨价？',
    answer: '我们提供0.38%的优惠费率，永不+3，费率透明公开，不会随意涨价。银盛、拉卡拉、中付、乐刷等品牌均为正规一清机，资金安全有保障。',
  },
  {
    question: 'POS机刷信用卡到账时间是多久？',
    answer: '所有POS机均支持秒到账功能，刷信用卡后资金立即到账，无节假日延迟，支持365天全天候到账。',
  },
  {
    question: 'POS机激活返现怎么领取？',
    answer: '激活POS机后，返现将在24小时内自动发放到您的结算卡，电签POS机返现299元/台，智能POS机返现399元/台，手机POS机返现199元/台。',
  },
  {
    question: 'POS机支持哪些支付方式？',
    answer: '我们的POS机支持信用卡、借记卡、微信、支付宝、云闪付、数字人民币等多种支付方式，满足不同场景的收款需求。',
  },
  {
    question: '个人可以办理POS机吗？有什么限制？',
    answer: '个人可以办理POS机，无需营业执照，只需年满18周岁，有身份证和银行卡即可。个人POS机与商户POS机功能相同，均可正常收款。',
  },
]

// POS机费率与返现数据
const posRatesAndCashbacks = [
  {
    type: '电签POS机',
    rate: '0.38%',
    cashback: '299元/台',
    features: '支持信用卡/花呗/数字人民币',
  },
  {
    type: '智能POS机',
    rate: '0.38%',
    cashback: '399元/台',
    features: '双屏收银+会员管理',
  },
  {
    type: '手机POS机',
    rate: '0.38%',
    cashback: '199元/台',
    features: '便携式移动收款',
  },
  {
    type: '聚合码牌',
    rate: '0.38%',
    cashback: '99元/台',
    features: '一张码全渠道收款',
  },
]
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
 * POS机产品展示组件
 * 展示不同类型的POS机产品及其特点，提供清晰的产品分类和选择
 */
function PosProductsSection() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 sm:py-28">
      <Container>
        {/* 标题区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            多种POS机产品任您选择
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            银盛/拉卡拉/中付/乐刷等正规一清机，满足您不同场景的收款需求
          </p>
        </div>

        {/* 产品卡片网格 */}
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {posServices.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl"
            >
              {/* 卡片顶部背景区域 */}
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-blue-700">
                <service.icon
                  className="absolute right-6 top-6 h-16 w-16 text-white opacity-25 transition-opacity group-hover:opacity-40"
                  aria-hidden="true"
                />
              </div>

              {/* 卡片内容区域 */}
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  <p className="mt-3 text-sm text-gray-600">{service.description}</p>
                  <p className="mt-2 text-xs text-gray-500">{service.subDescription}</p>
                </div>

                <div className="mt-6">
                  <Button
                    href={service.href}
                    variant="solid"
                    color="blue"
                    className="w-full justify-center"
                  >
                    {service.action}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

// POS机办理流程组件 - 展示POS机办理的四个简单步骤
function PosProcessSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            简单四步，轻松办理POS机
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            全程线上办理，无需上门，最快当天发货，顺丰包邮，激活即可使用
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {posProcessSteps.map((step, index) => (
              <div key={step.title} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-600 text-white">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600">
                      {step.description}
                    </p>
                  </div>
                </div>
                {index < posProcessSteps.length - 1 && (
                  <div className="absolute top-8 left-3/4 hidden h-0.5 w-1/4 bg-blue-200 sm:block lg:left-3/4 lg:w-1/4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

// POS机费率与返现组件 - 展示不同类型POS机的费率和激活返现信息
function PosRatesSection() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            费率透明，返现丰厚
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            0.38%优惠费率，永不+3，激活一台最高返现399元，资金安全有保障
          </p>
        </div>
        <div className="mt-16">
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                  >
                    产品类型
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                  >
                    费率
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                  >
                    激活返现
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-sm font-semibold text-gray-900"
                  >
                    主要功能
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {posRatesAndCashbacks.map((item, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {item.type}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                      {item.rate}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-900">
                      {item.cashback}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {item.features}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              注：以上费率均为标准费率，永不+3，激活后返现将在24小时内自动发放到结算卡
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

// 常见问题解答组件 - 展示用户关于POS机办理的常见问题及答案
function FaqSection() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            常见问题解答
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            关于POS机办理、费率、到账时间等常见问题，这里都有详细解答
          </p>
        </div>
        <div className="mt-16 divide-y divide-gray-200">
          {faqData.map((faq, index) => (
            <div key={index} className="py-8">
              <h3 className="text-lg font-semibold text-gray-900">
                {faq.question}
              </h3>
              <p className="mt-4 text-base text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button
            href="/support/faq"
            variant="solid"
            color="blue"
          >
            查看更多问题
          </Button>
        </div>
      </Container>
    </div>
  )
}

// 立即申请组件 - 提供POS机申请的最终行动号召
function ApplyNowSection() {
  return (
    <div className="bg-blue-600 py-24 sm:py-32">
      <Container>
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            立即申请POS机
          </h2>
          <p className="mt-6 text-lg leading-8 text-blue-100">
            填写基本信息，最快当天发货，顺丰包邮，激活即可使用，享受0.38%优惠费率
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              href="/new"
              variant="solid"
              color="white"
              className="flex items-center justify-center gap-1 rounded-md px-6 py-3 text-sm font-medium text-blue-600 transition-all duration-300 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              立即申请
            </Button>
            <QRCodeModal
              buttonText="咨询客服"
              qrCodeSrc="/images/contact/userhlc.png"
              qrCodeAlt="微信客服二维码"
              title="扫码咨询客服"
              description="扫描下方二维码，添加微信客服，获取更多POS机申请帮助"
              buttonClassName="flex items-center justify-center gap-1 rounded-md px-6 py-3 text-sm font-medium transition-all duration-300 hover:bg-white/20 hover:scale-105 border border-white text-white"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

// POS机办理指南页面主组件 - 整合所有子组件构成完整的办理指南页面
export default function SupportPage() {
  return (
    <>
      <Header />
      <main>
        <VideoHero />
        <PosProductsSection />
        <PosProcessSection />
        <PosRatesSection />
        <FaqSection />
        <ApplyNowSection />
      </main>
      <Footer />
    </>
  )
}
