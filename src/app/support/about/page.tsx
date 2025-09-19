import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CpuChipIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  TrophyIcon,
  MapPinIcon,
  PhoneIcon,
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: '关于我们 - POS支付网',
  description:
    'POS支付网是国内领先的支付技术服务商，专注于智能POS机、移动支付、聚合支付等支付解决方案，为商户提供安全、便捷、高效的支付服务。',
}

/**
 * 公司统计数据
 */
const companyStats = [
  {
    value: '100000+',
    label: '服务商户数量',
    icon: UserGroupIcon,
  },
  {
    value: '99.9%',
    label: '支付成功率',
    icon: CpuChipIcon,
  },
  {
    value: '300+',
    label: '覆盖城市',
    icon: GlobeAltIcon,
  },
  {
    value: '10亿+',
    label: '年交易笔数',
    icon: ChartBarIcon,
  },
]

/**
 * 公司价值观
 */
const companyValues = [
  {
    title: '客户至上',
    description: '始终将商户需求与体验置于首位',
  },
  {
    title: '安全可靠',
    description: '保障每一笔交易的安全与稳定',
  },
  {
    title: '创新驱动',
    description: '持续创新支付技术与解决方案',
  },
  {
    title: '合作共赢',
    description: '与合作伙伴共同成长，实现共赢',
  },
  {
    title: '诚信经营',
    description: '以诚信为本，打造可信赖品牌',
  },
  {
    title: '追求卓越',
    description: '不断超越自我，提供卓越服务',
  },
]

/**
 * 发展历程
 */
const milestones = [
  {
    year: '2024-至今',
    title: '支付创新 智领未来',
    description:
      'POS支付网迎来品牌升级，推出全新智能POS终端与聚合支付解决方案。服务商户数量突破10万，年交易额超千亿。持续引领支付技术创新，为商户提供更安全、便捷的支付体验。',
  },
  {
    year: '2022-2023',
    title: '聚合支付 全面升级',
    description:
      '推出新一代聚合支付平台，支持微信、支付宝、银联等多种支付方式。获得支付业务许可证，被评为支付行业创新企业。推出智能POS终端，支持扫码、刷卡、NFC等多种支付方式。',
  },
  {
    year: '2019-2021',
    title: '移动支付 快速发展',
    description:
      '全面布局移动支付市场，推出移动收款APP与小程序支付解决方案。与多家银行达成战略合作，拓展线下商户支付场景。被评为金融科技创新企业。',
  },
  {
    year: '2016-2018',
    title: '技术积累 稳步前行',
    description:
      '建立自主研发团队，开发支付核心系统与风控体系。获得多项支付技术专利，成为银联、网联会员单位。推出首款智能POS终端产品。',
  },
  {
    year: '2015',
    title: '扬帆起航 专注支付',
    description:
      '2015年，POS支付网正式成立，开始为商户提供专业的支付解决方案与服务。',
  },
]

/**
 * 荣誉资质
 */
const honors = [
  {
    title: '支付行业创新企业',
    date: '2024.05',
    description: '荣获支付行业创新企业称号',
  },
  {
    title: '金融科技领军企业',
    date: '2023.06',
    description: '被评为金融科技领军企业',
  },
  {
    title: '支付业务许可证',
    date: '2023.06',
    description: '获得支付业务许可证',
  },
  {
    title: '高新技术企业',
    date: '2023.01',
    description: '被评为高新技术企业',
  },
  {
    title: '银联合作伙伴',
    date: '2022.07',
    description: '成为中国银联战略合作伙伴',
  },
  {
    title: '网联会员单位',
    date: '2021.10',
    description: '成为网联清算会员单位',
  },
  {
    title: '金融科技创新奖',
    date: '2019.12',
    description: '荣获金融科技创新奖',
  },
]

/**
 * 联系方式
 */
const offices = [
  {
    city: '泉州',
    address: '泉州市丰泽区领SHOW天地传媒中心8楼',
    phone: '0595-22113999',
  },
  {
    city: '厦门',
    address: '厦门市湖里区厦门跨境产业园1号楼F层AJ02单元',
    phone: '',
  },
  {
    city: '深圳',
    address: '深圳市龙岗区坂田街道万致天地商业中心1栋一单元办公1904',
    phone: '',
  },
]

/**
 * 公司介绍特性
 */
const companyFeatures = [
  {
    name: '专业支付服务商',
    description:
      'POS支付网是国内领先的支付技术服务商，专注于智能POS机、移动支付、聚合支付等支付解决方案。',
    icon: BuildingOfficeIcon,
  },
  {
    name: '丰富行业经验',
    description:
      '在支付领域有丰富经验，业务覆盖零售、餐饮、电商、物流等多个行业，为不同规模商户提供定制化支付解决方案。',
    icon: ChartBarIcon,
  },
  {
    name: '安全技术保障',
    description:
      '拥有自主研发的支付核心系统与风控体系，采用银行级加密技术，确保每一笔交易的安全与稳定。',
    icon: CpuChipIcon,
  },
]

/**
 * 公司统计数据展示组件
 */
function StatsSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            数据见证实力
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            用数字说话，用成果证明我们的专业支付服务能力
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={stat.label}
                className="border border-gray-200 bg-gray-50 p-6 text-center transition-shadow hover:shadow-md"
              >
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center bg-blue-600">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-gray-600">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/**
 * 愿景使命价值观展示组件
 */
function VisionMissionSection() {
  return (
    <div className="py-6 sm:py-8">
      <Container>
        {/* 愿景、使命和价值观区域 - 三个卡片等高布局 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* 愿景区域 */}
          <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden border border-gray-200 bg-white p-10 lg:p-12">
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                愿景 VISION
              </h2>
              <div className="space-y-6">
                <p className="text-lg font-semibold text-gray-700">
                  成为全球领先的支付技术服务商
                </p>
                <p className="text-base font-medium text-gray-600">
                  Leading Global Payment Technology Service Provider
                </p>
              </div>
            </div>
            {/* 装饰性图形 */}
            <div className="absolute top-6 right-6 h-24 w-24 opacity-10">
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full text-gray-400"
              >
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="8,4"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="25"
                  fill="currentColor"
                  opacity="0.15"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="15"
                  fill="currentColor"
                  opacity="0.1"
                />
              </svg>
            </div>
          </div>

          {/* 使命区域 */}
          <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden border border-gray-200 bg-white p-10 lg:p-12">
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                使命 MISSION
              </h2>
              <div className="space-y-6">
                <p className="text-lg font-semibold text-gray-700">
                  用支付技术赋能商业发展
                </p>
                <p className="text-base font-medium text-gray-600">
                  Empowering Business Development with Payment Technology
                </p>
              </div>
            </div>
            {/* 装饰性图形 */}
            <div className="absolute top-6 right-6 h-24 w-24 opacity-10">
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full text-gray-400"
              >
                <rect
                  x="20"
                  y="20"
                  width="60"
                  height="60"
                  rx="8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="6,3"
                />
                <rect
                  x="30"
                  y="30"
                  width="40"
                  height="40"
                  rx="6"
                  fill="currentColor"
                  opacity="0.15"
                />
                <rect
                  x="40"
                  y="40"
                  width="20"
                  height="20"
                  rx="3"
                  fill="currentColor"
                  opacity="0.1"
                />
              </svg>
            </div>
          </div>

          {/* 价值观区域 */}
          <div className="relative flex min-h-[320px] flex-col justify-center overflow-hidden border border-gray-200 bg-white p-10 lg:p-12">
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                价值观 VALUES
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {companyValues.map((value, index) => (
                  <div key={value.title} className="text-center">
                    <h3 className="mb-1 text-sm font-semibold text-gray-900">
                      {value.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-gray-600">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 装饰性图形 */}
            <div className="absolute top-6 right-6 h-24 w-24 opacity-10">
              <svg
                viewBox="0 0 100 100"
                className="h-full w-full text-gray-400"
              >
                <polygon
                  points="50,10 90,90 10,90"
                  fill="currentColor"
                  opacity="0.3"
                />
                <circle cx="50" cy="60" r="8" fill="currentColor" />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * 发展历程组件 - 左右交替布局，保持原有样式不变
 */
function TimelineSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            发展历程
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            见证我们从初创到行业领先的每一个重要时刻
          </p>
        </div>

        <div className="relative space-y-16">
          {/* 整体连续分割线 */}
          <div className="absolute top-0 bottom-0 left-1/2 hidden w-0.5 -translate-x-1/2 transform bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 lg:block"></div>

          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={milestone.year}
                className="relative grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 lg:items-center"
              >
                {/* 分割线上的装饰圆点 */}
                <div className="absolute top-1/2 left-1/2 hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 transform rounded-full border-2 border-white bg-blue-500 shadow-sm lg:block"></div>

                {/* 内容区域 */}
                <div className={`${isEven ? '' : 'lg:order-2'}`}>
                  <div className="relative flex items-start space-x-4">
                    {/* 时间节点 */}
                    <div className="flex-shrink-0">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
                        <span className="text-sm font-medium text-white">
                          {milestone.year.slice(-2)}
                        </span>
                      </div>
                    </div>

                    {/* 内容卡片 */}
                    <div className="min-w-0 flex-1">
                      <div className="border border-gray-200 bg-gray-50 p-4">
                        <div className="mb-2 flex items-center justify-between">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {milestone.title}
                          </h3>
                          <span className="text-sm font-medium text-gray-500">
                            {milestone.year}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed text-gray-600">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 占位区域 */}
                <div
                  className={`${isEven ? '' : 'lg:order-1'} hidden lg:block`}
                >
                  <div className="flex h-32 items-center justify-center bg-gray-100">
                    <span className="text-sm text-gray-400">
                      {milestone.year}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

/**
 * 荣誉资质组件
 */
function HonorsSection() {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            荣誉资质
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            自成立以来，POS支付网获得了众多金融机构、权威行业组织和知名媒体的关注与认可
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {honors.map((honor, index) => (
            <div
              key={honor.title}
              className="border border-gray-200 bg-white p-6 transition-shadow hover:shadow-md"
            >
              {/* 荣誉图标 */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center bg-blue-600">
                <TrophyIcon className="h-6 w-6 text-white" />
              </div>

              {/* 荣誉内容 */}
              <div>
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {honor.title}
                </h3>
                <div className="mb-3 text-sm text-blue-600">{honor.date}</div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {honor.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  )
}

/**
 * 联系我们组件
 */
function ContactSection() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            联系我们
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            我们在全国多个城市设有服务中心，随时为您提供专业的支付解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office, index) => (
            <div
              key={office.city}
              className="border border-gray-200 bg-gray-50 p-6 transition-shadow hover:shadow-md"
            >
              {/* 城市图标 */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center bg-blue-600">
                <MapPinIcon className="h-6 w-6 text-white" />
              </div>

              {/* 办公室信息 */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {office.city}办公室
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-500" />
                    <p className="text-sm leading-relaxed break-words text-gray-600">
                      {office.address}
                    </p>
                  </div>

                  {office.phone && (
                    <div className="flex items-center space-x-2">
                      <PhoneIcon className="h-4 w-4 flex-shrink-0 text-blue-500" />
                      <span className="text-sm font-medium text-gray-700">
                        {office.phone}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 联系方式说明 */}
        <div className="mt-12 text-center">
          <div className="mx-auto max-w-4xl border border-gray-200 bg-gray-50 p-6">
            <h3 className="mb-3 text-lg font-semibold text-gray-900">
              更多联系方式
            </h3>
            <p className="text-sm leading-relaxed text-gray-600">
              如需了解更多支付解决方案或商务合作，欢迎通过邮件或电话与我们联系。
              我们的专业团队将为您提供最适合的支付服务体验。
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * 关于我们页面主组件
 * 展示POS支付网的公司介绍、发展历程、价值观等信息
 * @returns JSX.Element
 */
export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* 页面头部区域 */}
        <div className="relative isolate overflow-hidden bg-white">
          {/* 背景网格图案 */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="983e3e4c-de6d-4c3f-8d64-b9761d1534cc"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)"
              width="100%"
              height="100%"
              strokeWidth={0}
            />
          </svg>

          {/* 渐变装饰元素 */}
          <div
            aria-hidden="true"
            className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#0055ff] opacity-20"
            />
          </div>

          <Container className="pt-10 pb-24 sm:pb-32 lg:flex lg:items-center lg:py-40">
            {/* 左侧文本内容 */}
            <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <span className="inline-flex space-x-6">
                  <span className="bg-blue-50 px-3 py-1 text-sm/6 font-semibold text-blue-600 ring-1 ring-blue-600/20 ring-inset">
                    POS支付网与您共创支付新未来
                  </span>
                </span>
              </div>
              <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                POS支付网
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                成为全球领先的支付技术服务商
              </p>
              <p className="mt-3 text-base font-medium text-blue-600">
                Leading Global Payment Technology Service Provider
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button
                  href="#contact"
                  variant="solid"
                  color="blue"
                  className="bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  联系我们
                </Button>
                <Button
                  href="#company"
                  variant="outline"
                  className="text-sm/6 font-semibold text-gray-900 hover:text-blue-600"
                >
                  了解更多 <span aria-hidden="true">→</span>
                </Button>
              </div>
            </div>

            {/* 右侧模拟界面设计 */}
            <div className="mx-auto mt-20 flex max-w-2xl sm:mt-28 lg:mt-4 lg:mr-0 lg:ml-16 lg:max-w-none lg:flex-none xl:ml-40">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                {/* 模拟支付服务管理平台界面 */}
                <div className="w-[76rem] overflow-hidden bg-gradient-to-br from-slate-50 to-blue-50 ring-1 ring-gray-200/50">
                  {/* 顶部导航栏 */}
                  <div className="border-b border-gray-200 bg-white px-6 py-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600">
                          <svg
                            className="h-5 w-5 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          优刻云支付平台
                        </h3>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-green-400"></div>
                        <div className="h-2 w-2 rounded-full bg-yellow-400"></div>
                        <div className="h-2 w-2 rounded-full bg-red-400"></div>
                      </div>
                    </div>
                  </div>

                  {/* 主要内容区域 */}
                  <div className="space-y-6 p-6">
                    {/* 统计卡片 */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border border-gray-100 bg-white p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">智能POS终端</p>
                            <p className="text-2xl font-bold text-gray-900">
                              24
                            </p>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center bg-blue-100">
                            <svg
                              className="h-6 w-6 text-blue-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="border border-gray-100 bg-white p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">支付渠道</p>
                            <p className="text-2xl font-bold text-gray-900">
                              12
                            </p>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center bg-purple-100">
                            <svg
                              className="h-6 w-6 text-purple-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm text-gray-600">交易处理量</p>
                            <p className="text-2xl font-bold text-gray-900">
                              2.4亿
                            </p>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center bg-green-100">
                            <svg
                              className="h-6 w-6 text-green-600"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 图表区域 */}
                    <div className="border border-gray-100 bg-white p-6">
                      <h4 className="mb-4 text-lg font-semibold text-gray-900">
                        交易量趋势
                      </h4>
                      <div className="flex h-32 items-end justify-between bg-gradient-to-r from-blue-50 to-purple-50 px-4 pb-4">
                        {[40, 65, 45, 80, 55, 90, 70, 85].map(
                          (height, index) => (
                            <div
                              key={index}
                              className="rounded-t-sm bg-gradient-to-t from-blue-500 to-purple-500"
                              style={{ height: `${height}%`, width: '12px' }}
                            ></div>
                          ),
                        )}
                      </div>
                    </div>

                    {/* 服务状态 */}
                    <div className="border border-gray-100 bg-white p-6">
                      <h4 className="mb-4 text-lg font-semibold text-gray-900">
                        支付服务状态
                      </h4>
                      <div className="space-y-3">
                        {[
                          {
                            name: '智能POS服务',
                            status: '运行中',
                            color: 'green',
                          },
                          {
                            name: '移动支付平台',
                            status: '运行中',
                            color: 'green',
                          },
                          { name: '聚合支付网关', status: '运行中', color: 'green' },
                          {
                            name: '交易数据备份',
                            status: '维护中',
                            color: 'yellow',
                          },
                        ].map((service, index) => (
                          <div
                            key={index}
                            className="flex items-center justify-between"
                          >
                            <span className="text-sm text-gray-700">
                              {service.name}
                            </span>
                            <div className="flex items-center space-x-2">
                              <div
                                className={`h-2 w-2 rounded-full ${
                                  service.color === 'green'
                                    ? 'bg-green-400'
                                    : 'bg-yellow-400'
                                }`}
                              ></div>
                              <span
                                className={`text-xs font-medium ${
                                  service.color === 'green'
                                    ? 'text-green-600'
                                    : 'text-yellow-600'
                                }`}
                              >
                                {service.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* 公司介绍区域 */}
        <div
          id="company"
          className="overflow-hidden bg-gray-50 py-16 sm:py-24 lg:py-32"
        >
          <Container>
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:gap-y-16 lg:grid-cols-2 lg:gap-y-20">
              <div className="lg:ml-auto lg:pt-4 lg:pl-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-semibold text-blue-600">
                    优刻云
                  </h2>
                  <p className="mt-2 text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl lg:text-5xl">
                    专业的支付技术服务商
                  </p>
                  <p className="mt-4 text-base/7 text-gray-600 sm:mt-6 sm:text-lg/8">
                    专注于智能POS机、移动支付、聚合支付等支付解决方案，为商户提供安全、便捷、高效的支付服务
                  </p>
                  <dl className="mt-8 max-w-xl space-y-6 text-base/7 text-gray-600 sm:mt-10 sm:space-y-8 lg:max-w-none">
                    {companyFeatures.map((feature) => {
                      const Icon = feature.icon
                      return (
                        <div key={feature.name} className="relative pl-9">
                          <dt className="inline font-semibold text-gray-900">
                            <Icon
                              aria-hidden="true"
                              className="absolute top-1 left-1 size-5 text-blue-600"
                            />
                            {feature.name}
                          </dt>{' '}
                          <dd className="inline">{feature.description}</dd>
                        </div>
                      )
                    })}
                  </dl>
                </div>
              </div>
              <div className="flex items-start justify-center lg:order-first lg:justify-end">
                {/* 模拟云计算控制台界面 */}
                <div className="w-full max-w-sm bg-white ring-1 ring-gray-400/10 sm:max-w-lg md:max-w-2xl lg:w-[48rem] lg:max-w-none xl:w-[57rem]">
                  {/* 控制台顶部导航 */}
                  <div className="bg-gray-900 px-3 py-3 sm:px-4 sm:py-4 lg:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 sm:space-x-4">
                        <div className="text-sm font-semibold text-white sm:text-base">
                          优刻云控制台
                        </div>
                        <div className="flex space-x-1 sm:space-x-2">
                          <div className="h-2 w-2 bg-red-500 sm:h-3 sm:w-3"></div>
                          <div className="h-2 w-2 bg-yellow-500 sm:h-3 sm:w-3"></div>
                          <div className="h-2 w-2 bg-green-500 sm:h-3 sm:w-3"></div>
                        </div>
                      </div>
                      <div className="hidden text-xs text-gray-300 sm:block sm:text-sm">
                        console.cloudcvm.com
                      </div>
                    </div>
                  </div>

                  {/* 主要内容区域 */}
                  <div className="p-3 sm:p-4">
                    {/* 导航菜单 */}
                    <div className="mb-4 flex space-x-3 overflow-x-auto border-b border-gray-200 sm:mb-6 sm:space-x-6">
                      <div className="border-b-2 border-blue-600 pb-2 text-sm font-medium whitespace-nowrap text-blue-600">
                        概览
                      </div>
                      <div className="pb-2 text-sm whitespace-nowrap text-gray-500">
                        云服务器
                      </div>
                      <div className="hidden pb-2 text-sm whitespace-nowrap text-gray-500 sm:block">
                        数据库
                      </div>
                      <div className="hidden pb-2 text-sm whitespace-nowrap text-gray-500 md:block">
                        网络
                      </div>
                      <div className="hidden pb-2 text-sm whitespace-nowrap text-gray-500 md:block">
                        监控
                      </div>
                    </div>

                    {/* 统计卡片 */}
                    <div className="mb-3 grid grid-cols-1 gap-2 sm:mb-4 sm:grid-cols-3 sm:gap-3">
                      <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xl font-bold text-blue-600 sm:text-2xl">
                              24
                            </div>
                            <div className="text-xs text-blue-600 sm:text-sm">
                              云服务器
                            </div>
                          </div>
                          <ServerIcon className="h-6 w-6 text-blue-500 sm:h-8 sm:w-8" />
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-green-50 to-green-100 p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xl font-bold text-green-600 sm:text-2xl">
                              12
                            </div>
                            <div className="text-xs text-green-600 sm:text-sm">
                              数据库实例
                            </div>
                          </div>
                          <DocumentTextIcon className="h-6 w-6 text-green-500 sm:h-8 sm:w-8" />
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-xl font-bold text-purple-600 sm:text-2xl">
                              8
                            </div>
                            <div className="text-xs text-purple-600 sm:text-sm">
                              负载均衡
                            </div>
                          </div>
                          <CloudArrowUpIcon className="h-6 w-6 text-purple-500 sm:h-8 sm:w-8" />
                        </div>
                      </div>
                    </div>

                    {/* 资源使用趋势图 */}
                    <div className="mb-3 bg-gray-50 p-2 sm:mb-4 sm:p-3">
                      <div className="mb-2 text-sm font-semibold sm:mb-3 sm:text-base">
                        资源使用趋势
                      </div>
                      <div className="flex h-16 items-end justify-between bg-white p-2 sm:h-20 sm:p-3">
                        <div className="h-6 w-4 bg-blue-200 sm:h-10 sm:w-6"></div>
                        <div className="h-8 w-4 bg-blue-300 sm:h-12 sm:w-6"></div>
                        <div className="h-10 w-4 bg-blue-400 sm:h-14 sm:w-6"></div>
                        <div className="h-12 w-4 bg-blue-500 sm:h-16 sm:w-6"></div>
                        <div className="h-8 w-4 bg-blue-600 sm:h-12 sm:w-6"></div>
                        <div className="h-10 w-4 bg-blue-500 sm:h-14 sm:w-6"></div>
                        <div className="h-7 w-4 bg-blue-400 sm:h-11 sm:w-6"></div>
                        <div className="h-9 w-4 bg-blue-300 sm:h-13 sm:w-6"></div>
                        <div className="h-11 w-4 bg-blue-400 sm:h-15 sm:w-6"></div>
                        <div className="h-10 w-4 bg-blue-500 sm:h-14 sm:w-6"></div>
                      </div>
                    </div>

                    {/* 服务状态监控 */}
                    <div className="space-y-1 sm:space-y-2">
                      <div className="text-sm font-semibold sm:text-base">
                        服务状态
                      </div>
                      <div className="flex items-center justify-between bg-green-50 p-2">
                        <div className="flex items-center space-x-2">
                          <div className="h-2 w-2 bg-green-500"></div>
                          <span className="text-xs sm:text-sm">
                            云服务器 ECS
                          </span>
                        </div>
                        <span className="text-xs text-green-600">运行正常</span>
                      </div>
                      <div className="flex items-center justify-between bg-green-50 p-2">
                        <div className="flex items-center space-x-2">
                          <div className="h-2 w-2 bg-green-500"></div>
                          <span className="text-xs sm:text-sm">
                            云数据库 RDS
                          </span>
                        </div>
                        <span className="text-xs text-green-600">运行正常</span>
                      </div>
                      <div className="flex items-center justify-between bg-yellow-50 p-2">
                        <div className="flex items-center space-x-2">
                          <div className="h-2 w-2 bg-yellow-500"></div>
                          <span className="text-xs sm:text-sm">CDN 加速</span>
                        </div>
                        <span className="text-xs text-yellow-600">维护中</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* 统计数据展示 */}
        <StatsSection />

        {/* 愿景使命价值观 */}
        <VisionMissionSection />

        {/* 发展历程 */}
        <TimelineSection />

        {/* 荣誉资质 */}
        <HonorsSection />

        {/* 联系我们 */}
        <ContactSection />

        {/* 行动号召区域 */}
        <div className="bg-blue-600 py-16 sm:py-24">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                准备好开始您的支付服务之旅了吗？
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                立即联系我们，获取专业的支付解决方案和技术支持
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Button
                  href="/register"
                  variant="solid"
                  color="white"
                  className="w-full px-8 py-3 text-base sm:w-auto"
                >
                  立即咨询
                </Button>

                <Button
                  href="/product"
                  variant="outline"
                  className="w-full px-8 py-3 text-base text-white sm:w-auto"
                >
                  了解产品
                </Button>
              </div>
            </div>
          </Container>
        </div>
      </main>
      <Footer />
    </>
  )
}
