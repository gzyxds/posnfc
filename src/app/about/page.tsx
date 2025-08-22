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
  PhoneIcon
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: '关于我们 - 优刻云计算',
  description:
    '优刻云计算成立于2015年，是国内专业的大数据基础能力服务商，专注于通过数据激发生产力，为企业与开发者提供大数据的基础技术底座。',
}

/**
 * 公司统计数据
 */
const companyStats = [
  {
    value: '75000+',
    label: '企业与开发者用户',
    icon: UserGroupIcon,
  },
  {
    value: '50%+',
    label: '技术人员占比',
    icon: CpuChipIcon,
  },
  {
    value: '200+',
    label: '边缘节点覆盖城市',
    icon: GlobeAltIcon,
  },
  {
    value: '80亿+',
    label: '日均网络请求量',
    icon: ChartBarIcon,
  },
]

/**
 * 公司价值观
 */
const companyValues = [
  {
    title: '客户至上',
    description: '始终将客户的需求和利益置于首位',
  },
  {
    title: '科技向善',
    description: '用科技的力量创造积极的社会价值',
  },
  {
    title: '诚信协作',
    description: '诚信让协作更加高效',
  },
  {
    title: '共同成长',
    description: '相互扶持，积极分享迈向卓越',
  },
  {
    title: '结果导向',
    description: '追求目标实现以成果衡量价值',
  },
  {
    title: '拥抱变化',
    description: '唯有变化是永恒不变的',
  },
]

/**
 * 发展历程
 */
const milestones = [
  {
    year: '2024-至今',
    title: '数实融合 破浪前行',
    description: '优刻云成立九周年，迎来第七次办公室搬迁。团队规模接近百人，累计企业与开发者用户超过5万。我们将持续秉持用数据激发生产力的使命，通过数字技术助力实体经济的发展。',
  },
  {
    year: '2022-2023',
    title: '数智应用 激发产能',
    description: '发布新产品自动化RPA和商业智能BI，公司先后被评为创新型中小企业、科技小巨人企业、丰泽区重点企业。推出飞跨浏览器，被评为"瞪羚"创新企业。',
  },
  {
    year: '2019-2021',
    title: '云网融合 赋能产业',
    description: '获得工信部云计算和CDN资质，被评为国家高新技术企业。推出边缘网络PaaS产品，成立飞跨品牌，推出电商云产品。',
  },
  {
    year: '2016-2018',
    title: '顺势而上 逐云向前',
    description: '成为APNIC与CNNIC会员单位，发布QStack多云管理平台。获得IDC/ISP/IP-VPN资质，成为腾讯云、阿里云合作伙伴。',
  },
  {
    year: '2015',
    title: '与云结缘 扬帆起航',
    description: '2015年4月1日，优刻云正式成立，开始为企业提供服务器托管和租用服务。',
  },
]

/**
 * 荣誉资质
 */
const honors = [
  {
    title: '专精特新中小企业',
    date: '2024.05',
    description: '评为专精特新中小企业',
  },
  {
    title: '区重点企业',
    date: '2023.06',
    description: '认定为丰泽区重点企业',
  },
  {
    title: '科技小巨人企业',
    date: '2023.06',
    description: '荣获科技小巨人企业',
  },
  {
    title: '创新型中小企业',
    date: '2023.01',
    description: '被评为创新型中小企业',
  },
  {
    title: '"瞪羚"创新企业',
    date: '2022.07',
    description: '获评瞪羚企业',
  },
  {
    title: '科技型中小企业',
    date: '2021.10',
    description: '评为科技型中小企业',
  },
  {
    title: '高新技术企业',
    date: '2019.12',
    description: '荣获国家级高新技术企业称号',
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
    name: '专业服务商',
    description: '优刻云成立于2015年，是国内专业的大数据基础能力服务商，专注于通过数据激发生产力。',
    icon: BuildingOfficeIcon,
  },
  {
    name: '丰富经验',
    description: '在大数据领域有丰富的经验，业务覆盖政府、财会、教育、工业、电商等多个行业。',
    icon: ChartBarIcon,
  },
  {
    name: '技术前沿',
    description: '积极推动技术研发与人才培养，确保始终处于数据领域的技术前沿，为客户提供最具竞争力的解决方案。',
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            数据见证实力
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            用数字说话，用成果证明我们的专业能力与服务品质
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="bg-gray-50 rounded-lg p-6 text-center border border-gray-200 hover:shadow-md transition-shadow">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* 愿景区域 */}
          <div className="relative overflow-hidden rounded-lg bg-white p-10 lg:p-12 min-h-[320px] flex flex-col justify-center border border-gray-200">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                愿景 VISION
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 font-semibold text-lg">
                  成为全球领先的数据驱动引擎
                </p>
                <p className="text-gray-600 text-base font-medium">
                  Leading Global Data-Driven Innovation
                </p>
              </div>
            </div>
            {/* 装饰性图形 */}
            <div className="absolute top-6 right-6 w-24 h-24 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="8,4"/>
                <circle cx="50" cy="50" r="25" fill="currentColor" opacity="0.15"/>
                <circle cx="50" cy="50" r="15" fill="currentColor" opacity="0.1"/>
              </svg>
            </div>
          </div>

          {/* 使命区域 */}
          <div className="relative overflow-hidden rounded-lg bg-white p-10 lg:p-12 min-h-[320px] flex flex-col justify-center border border-gray-200">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                使命 MISSION
              </h2>
              <div className="space-y-6">
                <p className="text-gray-700 font-semibold text-lg">
                  用数据驱动生产力
                </p>
                <p className="text-gray-600 text-base font-medium">
                  Driving the Productivity Explosion with Data
                </p>
              </div>
            </div>
            {/* 装饰性图形 */}
            <div className="absolute top-6 right-6 w-24 h-24 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400">
                <rect x="20" y="20" width="60" height="60" rx="8" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6,3"/>
                <rect x="30" y="30" width="40" height="40" rx="6" fill="currentColor" opacity="0.15"/>
                <rect x="40" y="40" width="20" height="20" rx="3" fill="currentColor" opacity="0.1"/>
              </svg>
            </div>
          </div>

          {/* 价值观区域 */}
          <div className="relative overflow-hidden rounded-lg bg-white p-10 lg:p-12 min-h-[320px] flex flex-col justify-center border border-gray-200">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                价值观 VALUES
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {companyValues.map((value, index) => (
                  <div key={value.title} className="text-center">
                    <h3 className="text-sm font-semibold text-gray-900 mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 装饰性图形 */}
            <div className="absolute top-6 right-6 w-24 h-24 opacity-10">
              <svg viewBox="0 0 100 100" className="w-full h-full text-gray-400">
                <polygon points="50,10 90,90 10,90" fill="currentColor" opacity="0.3"/>
                <circle cx="50" cy="60" r="8" fill="currentColor"/>
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            发展历程
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            见证我们从初创到行业领先的每一个重要时刻
          </p>
        </div>

        <div className="space-y-16 relative">
          {/* 整体连续分割线 */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-blue-300 to-blue-200 transform -translate-x-1/2"></div>

          {milestones.map((milestone, index) => {
            const isEven = index % 2 === 0
            return (
              <div key={milestone.year} className="grid grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2 lg:items-center relative">
                {/* 分割线上的装饰圆点 */}
                <div className="hidden lg:block absolute left-1/2 top-1/2 w-3 h-3 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2 border-2 border-white shadow-sm"></div>

                {/* 内容区域 */}
                <div className={`${isEven ? '' : 'lg:order-2'}`}>
                  <div className="relative flex items-start space-x-4">
                    {/* 时间节点 */}
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
                        <span className="text-white text-sm font-medium">
                          {milestone.year.slice(-2)}
                        </span>
                      </div>
                    </div>

                    {/* 内容卡片 */}
                    <div className="flex-1 min-w-0">
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {milestone.title}
                          </h3>
                          <span className="text-sm text-gray-500 font-medium">
                            {milestone.year}
                          </span>
                        </div>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 占位区域 */}
                <div className={`${isEven ? '' : 'lg:order-1'} hidden lg:block`}>
                  <div className="h-32 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-sm">{milestone.year}</span>
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            荣誉资质
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            自成立以来，优刻云计算获得了众多企业、权威行业机构和知名媒体的关注与认可
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {honors.map((honor, index) => (
            <div
              key={honor.title}
              className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              {/* 荣誉图标 */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <TrophyIcon className="h-6 w-6 text-white" />
              </div>

              {/* 荣誉内容 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {honor.title}
                </h3>
                <div className="mb-3 text-sm text-blue-600">
                  {honor.date}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
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
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            联系我们
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            我们在全国多个城市设有办公室，随时为您提供专业的服务支持
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offices.map((office, index) => (
            <div
              key={office.city}
              className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:shadow-md transition-shadow"
            >
              {/* 城市图标 */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600">
                <MapPinIcon className="h-6 w-6 text-white" />
              </div>

              {/* 办公室信息 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {office.city}办公室
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    <p className="text-sm text-gray-600 leading-relaxed break-words">
                      {office.address}
                    </p>
                  </div>

                  {office.phone && (
                    <div className="flex items-center space-x-2">
                      <PhoneIcon className="h-4 w-4 text-blue-500 flex-shrink-0" />
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
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 mx-auto max-w-4xl">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              更多联系方式
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              如需了解更多产品信息或商务合作，欢迎通过邮件或电话与我们联系。
              我们的专业团队将为您提供最优质的服务体验。
            </p>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * 关于我们页面主组件
 * 展示优刻云计算的公司介绍、发展历程、价值观等信息
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
            <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
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

          <Container className="pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:items-center">
            {/* 左侧文本内容 */}
            <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <span className="inline-flex space-x-6">
                  <span className="bg-blue-50 px-3 py-1 text-sm/6 font-semibold text-blue-600 ring-1 ring-blue-600/20 ring-inset">
                    优刻云与您共创未来
                  </span>
                </span>
              </div>
              <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                优刻云计算
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                成为全球领先的数据驱动引擎
              </p>
              <p className="mt-3 text-base font-medium text-blue-600">
                Leading Global Data-Driven Innovation
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

            {/* 右侧图片 */}
            <div className="mx-auto mt-20 flex max-w-2xl sm:mt-28 lg:mt-4 lg:mr-0 lg:ml-16 lg:max-w-none lg:flex-none xl:ml-40">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <Image
                  src="/images/screenshots/PrimaryFeatures.png"
                  alt="优刻云计算平台展示"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                  priority
                />
              </div>
            </div>
          </Container>
        </div>

        {/* 公司介绍区域 */}
        <div id="company" className="overflow-hidden bg-gray-50 py-24 sm:py-32">
          <Container>
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">
              <div className="lg:ml-auto lg:pt-4 lg:pl-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-semibold text-blue-600">优刻云计算</h2>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    专业的大数据服务商
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-600">
                    专注于通过数据激发生产力，为企业与开发者提供大数据的基础技术底座
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
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
              <div className="flex items-start justify-end lg:order-first">
                <Image
                  src="/images/screenshots/PrimaryFeatures.png"
                  alt="优刻云计算平台展示"
                  width={2432}
                  height={1442}
                  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                  priority
                />
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
                准备好开始您的云计算之旅了吗？
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                立即联系我们，获取专业的云计算解决方案和技术支持
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <Button
                  href="/register"
                  variant="solid"
                  color="white"
                  className="w-full sm:w-auto px-8 py-3 text-base"
                >
                  立即咨询
                </Button>

                <Button
                  href="/product"
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-3 text-base text-white"
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

