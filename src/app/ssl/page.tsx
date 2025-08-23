import { type Metadata } from 'next'
import Image from 'next/image'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CpuChipIcon, ChartBarIcon, DocumentTextIcon, ArrowsPointingOutIcon, ShieldCheckIcon, ExclamationTriangleIcon, EyeSlashIcon, GlobeAltIcon } from '@heroicons/react/20/solid'
import clsx from 'clsx'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { VideoCarousel } from '@/components/carousel/VideoCarousel'
import { Container } from '@/components/Container'

import screenshotContacts from '@/images/screenshots/achievements.png'
// === 页面组件导入 - 按功能分类排序 ===
// === 解决方案与产品展示 ===
import { Solution } from '@/components/Solution'           // 解决方案
import ProductTraits from '@/components/common/ProductTraits'  // 产品特性
import Superiority from '@/components/common/Superiority'      // 产品优势
import Advantage from '@/components/Advantage'         // 优势展示
// === 客户与信任建立 ===
import Customer from '@/components/common/Customer'           // 客户案例
// === 支持与帮助 ===
import { Faqs } from '@/components/Faqs'                  // 常见问题
// === 页面底部 ===
import CatSections from '@/components/CatSections'     // 底部行动区域
// SSL证书产品接口定义
interface SSLProduct {
  id: number
  name: string
  subtitle: string
  specs: {
    type: string
    domains: string
    validation: string
    warranty: string
  }
  regions: string[]
  duration: string
  originalPrice: number
  currentPrice: number
  discount: string
  isHot?: boolean
  isRecommended?: boolean
}

// SSL证书产品数据
const sslProducts: SSLProduct[] = [
  {
    id: 1,
    name: 'DV SSL证书',
    subtitle: '域名验证型',
    specs: {
      type: 'DV域名验证',
      domains: '单域名',
      validation: '自动验证',
      warranty: '10万美元'
    },
    regions: ['上海', '北京', '广州', '南京'],
    duration: '1年',
    originalPrice: 396,
    currentPrice: 79,
    discount: '1折',
    isHot: true
  },
  {
    id: 2,
    name: 'OV SSL证书',
    subtitle: '组织验证型',
    specs: {
      type: 'OV组织验证',
      domains: '单域名',
      validation: '人工验证',
      warranty: '100万美元'
    },
    regions: ['上海', '广州', '北京'],
    duration: '1年',
    originalPrice: 640,
    currentPrice: 68,
    discount: '1.3折'
  },
  {
    id: 3,
    name: 'EV SSL证书',
    subtitle: '扩展验证型',
    specs: {
      type: 'EV扩展验证',
      domains: '单域名',
      validation: '严格验证',
      warranty: '150万美元'
    },
    regions: ['上海', '广州', '北京'],
    duration: '3年',
    originalPrice: 2700,
    currentPrice: 528,
    discount: '2折'
  },
  {
    id: 4,
    name: '通配符SSL证书',
    subtitle: '多子域名',
    specs: {
      type: '通配符证书',
      domains: '无限子域名',
      validation: '域名验证',
      warranty: '100万美元'
    },
    regions: ['上海', '广州', '北京', '成都', '南京'],
    duration: '1年',
    originalPrice: 2620,
    currentPrice: 630,
    discount: '2.5折',
    isRecommended: true
  },
  {
    id: 5,
    name: '多域名SSL证书',
    subtitle: 'SAN证书',
    specs: {
      type: 'SAN多域名',
      domains: '最多250个域名',
      validation: '域名验证',
      warranty: '100万美元'
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 230,
    currentPrice: 161,
    discount: '7折'
  },
  {
    id: 6,
    name: '代码签名证书',
    subtitle: '软件签名',
    specs: {
      type: '代码签名',
      domains: '软件应用',
      validation: '组织验证',
      warranty: '50万美元'
    },
    regions: ['广州', '上海', '北京'],
    duration: '1月',
    originalPrice: 325,
    currentPrice: 227.5,
    discount: '7折'
  },
  {
    id: 7,
    name: '企业级SSL证书',
    subtitle: '高级加密',
    specs: {
      type: '企业级证书',
      domains: '多域名支持',
      validation: 'OV组织验证',
      warranty: '200万美元'
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 600,
    currentPrice: 350,
    discount: '7折'
  },
  {
    id: 8,
    name: '免费SSL证书',
    subtitle: 'Let\'s Encrypt',
    specs: {
      type: 'DV域名验证',
      domains: '单域名',
      validation: '自动验证',
      warranty: '免费版本'
    },
    regions: ['广州', '上海', '北京', '成都', '南京'],
    duration: '1月',
    originalPrice: 665,
    currentPrice: 465.5,
    discount: '7折'
  }
]
// 页面元数据配置
export const metadata: Metadata = {
  title: 'SSL证书_HTTPS证书_网站安全证书_域名证书_数字证书_优刻云',
  description:
    '优刻云SSL证书服务，提供DV、OV、EV等多种类型SSL证书，保障网站数据传输安全，支持通配符和多域名证书。',
  keywords: [
    'SSL证书',
    'HTTPS证书',
    '网站安全证书',
    '域名证书',
    '数字证书',
    'DV证书',
    'OV证书',
    'EV证书',
    '通配符证书',
    '多域名证书',
    '代码签名证书',
    '网站加密',
    '数据安全',
    '优刻云',
    'HTTPS加密',
    '安全防护',
  ],
}

// SSL证书核心特性配置
const sslFeatures = [
  {
    name: '数据加密',
    description:
      '采用256位SSL加密技术，确保网站数据传输过程中的安全性，防止数据被窃取或篡改。',
    icon: LockClosedIcon,
  },
  {
    name: '身份验证',
    description: '通过权威CA机构验证网站身份，提升用户信任度，显示绿色地址栏和安全锁标识。',
    icon: ShieldCheckIcon,
  },
  {
    name: '兼容性保障',
    description: '支持99.9%的浏览器和移动设备，确保所有用户都能安全访问您的网站，提升用户体验。',
    icon: ChartBarIcon,
  },
]

// Leftright 组件的特性数据
const leftRightFeatures = [
  {
    name: '证书监控',
    summary: '实时监控SSL证书状态，智能到期提醒系统。',
    description:
      '通过专业监控工具实时检测SSL证书的有效性、到期时间和安全状态，并在证书即将到期时及时发出提醒通知。',
    icon: ChartBarIcon,
  },
  {
    name: '自动续费',
    summary:
      '根据业务需求自动续费SSL证书，确保网站持续安全。',
    description:
      '提供多种证书类型选择，支持DV、OV、EV等不同验证级别，满足不同业务场景的安全需求。',
    icon: ArrowsPointingOutIcon,
  },
  {
    name: '安全加密',
    summary:
      '全方位的HTTPS加密防护，为您的网站保驾护航。',
    description:
      '提供256位SSL加密、证书透明度日志、HSTS支持等多层次安全防护，全面保障您的网站数据安全。',
    icon: ShieldCheckIcon,
  },
]

// Rightleft 组件的特性数据
const rightLeftFeatures = [
  {
    name: '快速签发',
    description:
      '专业的证书签发和验证服务，快速为您的网站部署SSL证书，让您专注于业务发展而非技术配置。',
    icon: CloudArrowUpIcon,
  },
  {
    name: '证书管理',
    description: '提供证书安装、配置、更新等一站式管理服务，为您的网站提供全方位的HTTPS安全保护。',
    icon: LockClosedIcon,
  },
  {
    name: '技术支持',
    description: '提供7x24小时技术支持、证书故障排查、安全咨询等专业服务，确保您的网站安全稳定运行。',
    icon: ServerIcon,
  },
]

// SSL证书风险数据 - 不使用SSL证书的三大风险
const sslRisks = [
  {
    id: 1,
    title: '信息泄露严重',
    description: '数据库中信息以明文存储，给不法分子提供了便利。密码验证过程中并未对传输数据进行加密，导致任何第三方可以轻松截获到服务器传递的明文密码。',
    icon: EyeSlashIcon,
    color: 'blue'
  },
  {
    id: 2,
    title: '网站被钓鱼、仿冒、篡改',
    description: '不法分子利用人们防范意识薄弱的特点，通过海外主机搭设钓鱼网站、仿冒网站，盗取用户信息、诈骗钱财。',
    icon: ExclamationTriangleIcon,
    color: 'blue'
  },
  {
    id: 3,
    title: 'http网站被标记为"不安全"网站',
    description: '浏览网站时，大部分浏览器会把非https网站标记为不安全网站，导致访客退出访问，网站自然流量下降。',
    icon: GlobeAltIcon,
    color: 'blue'
  }
]

/**
 * SSL风险展示组件 - 以卡片形式展示不使用SSL证书的风险
 * @returns JSX.Element
 */
function SSLRisksSection() {
  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            不使用SSL证书的风险
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            了解网站缺乏SSL证书保护可能面临的安全威胁
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sslRisks.map((risk) => {
            const IconComponent = risk.icon
            return (
              <div
                key={risk.id}
                className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100">
                    <IconComponent className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {risk.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {risk.description}
                </p>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}



// SSL证书图片轮播 Hero 组件 - 展示SSL证书的主要图片内容
function SSLVideoHero() {
  const sslVideoSlide = [
    {
      id: 1,
      title: 'SSL证书服务',
      subtitle: '重新定义网站安全',
      description: '体验专业的SSL证书服务，让HTTPS加密为您的网站提供强大的安全保障。从证书申请到自动部署，SSL证书让网站安全变得前所未有的简单。',
      backgroundType: 'image' as const,
      backgroundImage: '/images/carousel/HeaderCarousel.jpg',
      textPosition: 'left' as const,
      buttonText: '立即申请SSL证书',
      buttonLink: '/register',
    },
  ]

  return (
    <VideoCarousel
      autoPlay={false}
      showProgress={false}
      showPlayButton={false}
      showNavigation={false}
      height={{ base: 'h-[500px]', md: 'h-[550px]', lg: 'h-[600px]' }}
      theme="light"
      textModeButton={true}
      showOverlay={false}
      customSlides={sslVideoSlide}
      className=""
    />
  )
}



// SSL证书快速选购指南组件
function SSLGuideTable() {
  const guideData = [
    {
      domainType: '单域名',
      supportContent: '仅支持绑定1个域名',
      scenario: '仅1个域名',
      domainExample: 'www.example.com',
      quantity: '1个'
    },
    {
      domainType: '多域名',
      supportContent: '支持绑定多个不同域名',
      scenario: '多个不同域名',
      domainExample: 'www.a.com, www.b.com',
      quantity: '2-250个'
    },
    {
      domainType: '通配符',
      supportContent: '支持绑定主域名及其所有子域名',
      scenario: '主域名+所有子域名',
      domainExample: '*.example.com',
      quantity: '无限个'
    }
  ]

  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <Container>
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl mb-4 sm:mb-6">
            SSL证书快速选购指南
          </h2>
          <p className="text-lg sm:text-xl leading-7 sm:leading-8 text-gray-600">
            根据您的域名需求选择合适的SSL证书类型
          </p>
        </div>

        {/* 移动端卡片布局 */}
        <div className="block lg:hidden space-y-6">
          {guideData.map((item, index) => (
            <div key={index} className="bg-white border border-gray-200 p-6 hover:border-blue-300 transition-colors duration-200">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.domainType}</h3>
                <p className="text-blue-600 font-medium text-sm">{item.quantity}</p>
              </div>
              
              <div className="space-y-3">
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">支持内容</dt>
                  <dd className="text-base text-gray-700">{item.supportContent}</dd>
                </div>
                
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">适用场景</dt>
                  <dd className="text-base text-gray-700">{item.scenario}</dd>
                </div>
                
                <div>
                  <dt className="text-sm font-medium text-gray-500 mb-1">域名举例</dt>
                  <dd className="text-base text-gray-700 font-medium">{item.domainExample}</dd>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 桌面端表格布局 */}
        <div className="hidden lg:block overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-8 py-5 xl:px-10 xl:py-6 text-left text-sm font-semibold uppercase tracking-wide text-gray-700">
                    域名类型
                  </th>
                  <th className="px-8 py-5 xl:px-10 xl:py-6 text-left text-sm font-semibold uppercase tracking-wide text-gray-700">
                    支持内容
                  </th>
                  <th className="px-8 py-5 xl:px-10 xl:py-6 text-left text-sm font-semibold uppercase tracking-wide text-gray-700">
                    适用场景
                  </th>
                  <th className="px-8 py-5 xl:px-10 xl:py-6 text-left text-sm font-semibold uppercase tracking-wide text-gray-700">
                    域名举例
                  </th>
                  <th className="px-8 py-5 xl:px-10 xl:py-6 text-left text-sm font-semibold uppercase tracking-wide text-gray-700">
                    数量选择
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                {guideData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="whitespace-nowrap px-8 py-5 xl:px-10 xl:py-6 text-base xl:text-lg font-semibold text-gray-900">
                      {item.domainType}
                    </td>
                    <td className="px-8 py-5 xl:px-10 xl:py-6 text-base xl:text-lg text-gray-700">
                      {item.supportContent}
                    </td>
                    <td className="px-8 py-5 xl:px-10 xl:py-6 text-base xl:text-lg text-gray-700">
                      {item.scenario}
                    </td>
                    <td className="px-8 py-5 xl:px-10 xl:py-6 text-base xl:text-lg text-gray-700 font-medium">
                      {item.domainExample}
                    </td>
                    <td className="px-8 py-5 xl:px-10 xl:py-6 text-base xl:text-lg text-gray-700 font-medium">
                      {item.quantity}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Container>
    </div>
  )
}

// Leftright 组件 - 左右分栏展示
function SSLLeftrightSection() {
  // 移动端功能特性展示组件
  function FeaturesMobile() {
    return (
      <div className="lg:hidden">
        <div className="mx-auto max-w-2xl">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
            <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">更安全防护</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              SSL证书让网站更安全
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              借助专业SSL证书技术，轻松实现HTTPS加密与网站安全防护，提升用户信任度和企业形象。
            </p>
            <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
              {leftRightFeatures.map((feature) => {
                const IconComponent = feature.icon
                return (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900 dark:text-white">
                      <div className="absolute top-1 left-1 h-5 w-5 text-blue-600 dark:text-blue-400">
                        <svg
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 36 36"
                          aria-hidden="true"
                        >
                          <IconComponent />
                        </svg>
                      </div>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                )
              })}
            </dl>
          </div>
          <div className="mt-16 sm:mt-20">
            <div className="relative isolate overflow-hidden bg-blue-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:pt-16 sm:pr-0 sm:pl-16">
              <div
                aria-hidden="true"
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-white ring-inset"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                  alt="产品截图"
                  src={screenshotContacts}
                  width={2432}
                  height={1442}
                  className="-mb-12 w-[57rem] max-w-none bg-gray-800"
                  unoptimized
                />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

// 桌面端功能特性展示组件
  function FeaturesDesktop() {
    return (
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
          <div className="px-6 lg:px-0 lg:pt-4 lg:pr-4">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-blue-600 dark:text-blue-400">更安全防护</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                SSL证书让网站更安全
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                借助专业SSL证书技术，轻松实现HTTPS加密与网站安全防护，提升用户信任度和企业形象。
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                {leftRightFeatures.map((feature) => {
                  const IconComponent = feature.icon
                  return (
                    <div
                      key={feature.name}
                      className="relative pl-9"
                    >
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        <div className="absolute top-1 left-1 h-5 w-5 text-blue-600 dark:text-blue-400">
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 36 36"
                            aria-hidden="true"
                          >
                            <IconComponent />
                          </svg>
                        </div>
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
          <div className="sm:px-6 lg:px-0">
            <div className="relative isolate overflow-hidden bg-blue-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
              <div
                aria-hidden="true"
                className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-white ring-inset"
              />
              <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                <Image
                   alt="产品功能截图"
                   src={screenshotContacts}
                   width={2432}
                   height={1442}
                   className="-mb-12 w-[57rem] max-w-none bg-gray-800"
                   unoptimized
                 />
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section
      id="secondary-features"
      aria-label="Features for simplifying everyday business tasks"
      className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900"
    >
      <Container className="md:px-6 lg:px-8">
        <FeaturesMobile />
        <FeaturesDesktop />
      </Container>
    </section>
  )
}

// Rightleft 组件 - 右左分栏展示
function SSLRightleftSection() {
  return (
    <section
      id="rightleft-features"
      aria-label="SSL证书功能特性展示"
    >
      <div className="overflow-hidden bg-white py-24 sm:py-32 dark:bg-gray-900">
        <div className="mx-auto max-w-[1800px] px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:ml-auto lg:pt-4 lg:pl-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">更安全防护</h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
                  SSL证书让网站更安全
                </p>
                <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                  借助先进的SSL证书技术，轻松实现HTTPS加密与网站安全防护，大幅提升用户信任度和企业品牌形象。
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none dark:text-gray-400">
                  {rightLeftFeatures.map((feature) => (
                    <div key={feature.name} className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900 dark:text-white">
                        <feature.icon
                          aria-hidden="true"
                          className="absolute top-1 left-1 size-5 text-indigo-600 dark:text-indigo-400"
                        />
                        {feature.name}
                      </dt>{' '}
                      <dd className="inline">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
            <div className="flex items-start justify-end lg:order-first">
              <div className="relative isolate overflow-hidden bg-blue-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:pt-16 sm:pr-0 sm:pl-16 lg:mx-0 lg:max-w-none">
                <div
                  aria-hidden="true"
                  className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-blue-100 opacity-20 ring-1 ring-white ring-inset"
                />
                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                  <Image
                    alt="SSL证书产品功能截图"
                    src="/images/screenshots/contacts.png"
                    width={2432}
                    height={1442}
                    className="-mb-12 w-[57rem] max-w-none bg-gray-800"
                    unoptimized
                  />
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// SSL证书页面主组件
export default function SSLPage() {

  return (
    <>
      <Header />
      <main>
        <SSLVideoHero />

        {/* SSL证书专区 - 直接嵌入的代码 */}
        <div className="bg-gray-50 min-h-screen">
          {/* 页面标题 */}
          <div className="bg-white border-b border-gray-200">
            <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-6">
              <h1 className="text-2xl font-bold text-gray-900">SSL证书专区</h1>
              <p className="mt-2 text-sm text-gray-600">
                <span className="text-orange-500 font-medium">DV证书起步</span>，新用户低至
                <span className="text-orange-500 font-medium">79元/年</span>
                <span className="text-blue-600 underline cursor-pointer ml-2">活动规则&gt;</span>
              </p>
            </div>
          </div>

          {/* 产品网格 */}
          <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {sslProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                  {/* 产品标题和标签 */}
                  <div className="p-4 border-b border-gray-100">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
                      <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-gray-900">{product.subtitle}</span>
                      {product.isHot && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">申请特惠</span>
                      )}
                      {product.isRecommended && (
                        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">申请特惠</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      高性能计算、大数据处理、游戏服务器等专业应用的首选
                    </p>
                  </div>

                  {/* 产品规格信息 */}
                  <div className="p-4 space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">类型</span>
                      <div className="flex items-center gap-1">
                        <span className="font-medium text-gray-900">{product.specs.type}</span>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">域名</span>
                      <span className="text-sm text-gray-900">{product.specs.domains}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">验证</span>
                      <span className="text-sm text-gray-900">{product.specs.validation}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">保障</span>
                      <span className="text-sm text-gray-900">{product.specs.warranty}</span>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">时长</span>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-900">{product.duration}</span>
                        <span className="bg-red-100 text-red-600 text-xs px-1 py-0.5 rounded">{product.discount}</span>
                      </div>
                    </div>

                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">数量</span>
                      <div className="flex items-center gap-2">
                        <button className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-50">
                          −
                        </button>
                        <span className="w-8 text-center text-sm">1</span>
                        <button className="w-6 h-6 border border-gray-300 rounded flex items-center justify-center text-gray-600 hover:bg-gray-50">
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* 价格和折扣信息 */}
                  <div className="p-4 border-t border-gray-100">
                    {product.discount && (
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded">{product.discount}</span>
                        <span className="text-xs text-gray-500">限1个</span>
                      </div>
                    )}

                    <div className="mb-3">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm text-gray-600">活动价:</span>
                        <span className="text-2xl font-bold text-red-600">{product.currentPrice}</span>
                        <span className="text-sm text-gray-600">元</span>
                        <span className="text-xs text-gray-500">¥{product.originalPrice.toFixed(2)}/月</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-gray-600">日常价:</span>
                        <span className="text-sm text-gray-500">{product.originalPrice} 元</span>
                      </div>
                    </div>

                    {/* 操作按钮 */}
                    <div className="flex gap-2">
                      <a
                        href="https://console.cloudcvm.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 border border-blue-600 text-blue-600 text-sm rounded hover:bg-blue-50 transition-colors text-center inline-block"
                      >
                        加入购物车
                      </a>
                      <a
                        href="https://console.cloudcvm.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 px-3 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors text-center inline-block"
                      >
                        立即购买
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <SSLLeftrightSection />
         <SSLRightleftSection />
{/* === SSL证书选购指南与风险提示 === */}
        <SSLGuideTable />
        <SSLRisksSection />
        {/* === 解决方案与产品展示 === */}
        
        <ProductTraits />
        <Superiority />
        <Solution />
        <Advantage />

        {/* === 客户与信任建立 === */}
        <Customer />

        {/* === 支持与帮助 === */}
        <Faqs />



        {/* === 页面底部 === */}
        <CatSections />
      </main>
      <Footer />
    </>
  )
}
