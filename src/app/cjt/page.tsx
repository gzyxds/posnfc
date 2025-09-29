'use client'

import { JSX, useState } from 'react'
import { type Metadata } from 'next'
import Image from 'next/image'
import { PaymentFAQSection } from '@/components/ai/FAQSection'
import Aisd from '@/components/ai/Aisd'
import { PaymentScenes } from '@/components/ai/AIscene'
import {
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  UserGroupIcon,
  SpeakerWaveIcon,
  FaceSmileIcon,
  SparklesIcon,
  RocketLaunchIcon,
  CloudArrowDownIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  TvIcon,
  UsersIcon,
  MicrophoneIcon,
  PencilIcon,
  PlayIcon,
  ChevronRightIcon,
  ArrowUpRightIcon,
  QrCodeIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Followus } from '@/components/common/Followus'
import { Footer } from '@/components/Footer'
import Brand from '@/components/common/Brand'

// ==================== 页面SEO元数据配置 ====================
// 注意：由于使用了"use client"指令，metadata已移至layout.tsx中定义

// ==================== 数据类型定义 ====================

// 产品优势数据接口
interface Advantage {
  title: string
  description: string
  stats: string
  unit: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// 应用场景数据接口
interface Scenario {
  id: string
  name: string
  description: string
  features: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  video: string
}

// 功能特色卡片接口
interface FeatureCard {
  id: number
  name: string
  description: string
  features: string[]
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

// 演示账号接口
interface DemoAccount {
  title: string
  url: string
  username: string
  password: string
  description: string
}

// ==================== 静态数据配置 ====================
// 产品优势数据
const advantages: Advantage[] = [
  {
    title: '央行支付牌照',
    description: '超级推拥有央行颁发的支付业务许可证，资金安全有保障，一清结算更放心',
    stats: '正规',
    unit: '持牌机构',
    icon: FaceSmileIcon,
  },
  {
    title: '费率优势',
    description: '超级推POS机费率0.38%起，永不+3，支持多种支付方式，成本低更实惠',
    stats: '0.38%',
    unit: '超低费率',
    icon: SpeakerWaveIcon,
  },
  {
    title: '到账速度',
    description: '超级推T+0秒到账，365天快速到账，资金周转更高效，经营更顺畅',
    stats: '秒到',
    unit: 'T+0到账',
    icon: SparklesIcon,
  },
  {
    title: '办理便捷',
    description: '超级推POS机免费申请，个人/商户1证办理，顺丰包邮当天发货，快速开通',
    stats: '当天',
    unit: '快速发货',
    icon: RocketLaunchIcon,
  },
]

// 应用场景数据
const scenarios: Scenario[] = [
  {
    id: 'retail-store',
    name: '零售商店',
    description: '超级推POS机适用于各类零售门店，支持扫码支付、刷卡支付等多种方式',
    features: ['扫码支付', '刷卡支付', '会员管理'],
    icon: TvIcon,
    video: '/videos/retail-store.mp4',
  },
  {
    id: 'restaurant',
    name: '餐饮美食',
    description: '超级推智能POS支持堂食点餐、外卖接单，提升餐厅经营效率',
    features: ['堂食点餐', '外卖接单', '桌台管理'],
    icon: UserGroupIcon,
    video: '/videos/restaurant.mp4',
  },
  {
    id: 'supermarket',
    name: '超市便利店',
    description: '超级推移动POS适用于超市便利店，快速收银，提升顾客购物体验',
    features: ['快速收银', '库存管理', '促销活动'],
    icon: AcademicCapIcon,
    video: '/videos/supermarket.mp4',
  },
  {
    id: 'mobile-payment',
    name: '移动收款',
    description: '超级推移动POS支持外出收款，适合地摊、外卖、送货上门等场景',
    features: ['便携移动', '4G网络', '长续航'],
    icon: MegaphoneIcon,
    video: '/videos/mobile-payment.mp4',
  },
]

// 功能特色数据
const featureCards: FeatureCard[] = [
  {
    id: 1,
    name: '开户奖',
    description:
      '成功推荐新用户开户即可获得开户奖励，每成功开户一户即可获得相应奖励，多开多得，收益稳定。',
    features: [
      '新用户开户即奖励',
      '开户数量无上限',
      '奖励实时到账',
      '开户流程简单便捷'
    ],
    icon: CurrencyDollarIcon,
  },
  {
    id: 2,
    name: '出货奖',
    description:
      '成功推荐POS机设备出货即可获得出货奖励，每成功出货一台设备即可获得相应奖励，设备激活后奖励自动发放。',
    features: [
      '设备出货即奖励',
      '出货量越大奖励越高',
      '激活后自动发放',
      '奖励透明可查询'
    ],
    icon: RocketLaunchIcon,
  },
  {
    id: 3,
    name: '推荐激活奖',
    description:
      '成功推荐用户激活设备即可获得激活奖励，每成功激活一台设备即可获得相应奖励，激活率越高收益越多。',
    features: [
      '设备激活即奖励',
      '激活率越高奖励越多',
      '奖励阶梯式增长',
      '激活数据实时统计'
    ],
    icon: SparklesIcon,
  },
  {
    id: 4,
    name: '月度拉新奖',
    description:
      '每月根据拉新数量给予额外奖励，拉新数量越多奖励越丰厚，月度结算，激励持续发展。',
    features: [
      '月度拉新数量奖励',
      '拉新越多奖励越丰厚',
      '月度结算准时发放',
      '排行榜激励竞争'
    ],
    icon: UsersIcon,
  },
  {
    id: 5,
    name: '月度装机奖',
    description:
      '每月根据装机数量给予额外奖励，装机数量越多奖励越丰厚，鼓励代理商积极拓展市场。',
    features: [
      '月度装机数量奖励',
      '装机量越大奖励越高',
      '装机质量双重考核',
      '月度排名额外奖励'
    ],
    icon: CpuChipIcon,
  },
  {
    id: 6,
    name: '付费升级奖',
    description:
      '成功推荐用户付费升级即可获得升级奖励，每成功推荐一次付费升级即可获得相应奖励，升级金额越大奖励越高。',
    features: [
      '付费升级即奖励',
      '升级金额越大奖励越高',
      '奖励比例阶梯式增长',
      '升级数据实时统计'
    ],
    icon: ShieldCheckIcon,
  },
  {
    id: 7,
    name: '运营中心补贴',
    description:
      '设立运营中心可获得额外补贴，补贴包括场地租金、人员工资、运营费用等，支持代理商规模化发展。',
    features: [
      '场地租金补贴',
      '人员工资补贴',
      '运营费用补贴',
      '规模化发展支持'
    ],
    icon: AcademicCapIcon,
  },
  {
    id: 8,
    name: '管理奖',
    description:
      '根据团队规模和业绩给予管理奖励，团队规模越大业绩越好管理奖励越高，鼓励代理商发展团队。',
    features: [
      '团队规模奖励',
      '团队业绩奖励',
      '管理层级奖励',
      '长期稳定收益'
    ],
    icon: UserGroupIcon,
  },
]

// 功能特色展示组件
function FeaturesSection(): JSX.Element {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="mb-12 text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            丰厚奖励体系
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            提供开户奖、出货奖、推荐激活奖、月度拉新奖、月度装机奖、付费升级奖、运营中心补贴、管理奖等多维度奖励机制，助力代理商持续发展。
          </p>
        </div>
        <ul
          role="list"
          className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-4 xl:gap-x-8"
        >
          {featureCards.map((feature) => {
            const IconComponent = feature.icon
            return (
              <li
                key={feature.id}
                className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none relative"
              >
                <ArrowUpRightIcon className="absolute top-4 right-4 h-5 w-5 text-gray-400 transition-colors duration-200 hover:text-blue-600" />
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-transparent p-6">
                  <div className="flex h-12 w-12 flex-none items-center justify-center bg-white border border-gray-200 rounded-md">
                    <IconComponent
                      className="h-6 w-6 text-blue-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="text-sm leading-6 font-medium text-gray-900">
                    {feature.name}
                  </div>
                </div>

                <div className="px-6 py-4 bg-transparent">
                  <p className="mb-4 text-sm leading-6 text-gray-700">
                    {feature.description}
                  </p>
                  <div className="mb-6 space-y-2">
                    {feature.features.map((featureItem, index) => (
                      <div key={index} className="flex items-start gap-x-2">
                        <div className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-blue-600" />
                        <span className="text-sm leading-5 text-gray-600">
                          {featureItem}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* 操作按钮 */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 hover:bg-blue-700">
                      立即体验
                    </button>
                    <button className="flex-1 border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors duration-200 hover:border-gray-400 hover:text-gray-900">
                      查看详情
                    </button>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>


      </Container>
    </section>
  )
}

// 产品优势展示组件
function AdvantagesSection(): JSX.Element {
  return (
    <section className="bg-white py-20">
      <Container>
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold">产品优势</h2>
          <div className="mx-auto mb-4 h-1 w-16 bg-blue-600"></div>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            超级推SaaS系统管理工具，支持多品牌自主运营，全方位管理解决方案
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* 产品卡片1 - 会员体系 */}
          <div className="group flex h-full transform flex-col overflow-hidden rounded-none bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_#dce0e8] p-6 relative">
            <ArrowUpRightIcon className="absolute top-4 right-4 h-4 w-4 text-gray-400 transition-colors duration-200 hover:text-blue-600" />
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-gray-200">
                <UserGroupIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">会员体系</h3>
                <div className="font-medium text-blue-600">高度自定义</div>
              </div>
            </div>

            {/* 白色分割线 */}
            <div className="my-4 h-[1px] w-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 opacity-50"></div>

            <p className="mb-4 text-sm text-gray-600">
              超级推拥有高度自定义的会员系统，用户可自定义会员层级数、各级会员名称、会员分润比例、升级条件等
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  自定义会员层级数和名称
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  灵活设置分润比例
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  自主配置升级条件
                </span>
              </li>
            </ul>
          </div>

          {/* 产品卡片2 - 产品体系 */}
          <div className="group flex h-full transform flex-col overflow-hidden rounded-none bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_#dce0e8] p-6 relative">
              <ArrowUpRightIcon className="absolute top-4 right-4 h-4 w-4 text-gray-400 transition-colors duration-200 hover:text-blue-600" />
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-gray-200">
                <CpuChipIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">产品体系</h3>
                <div className="font-medium text-blue-600">SAAS构架</div>
              </div>
            </div>

            {/* 白色分割线 */}
            <div className="my-4 h-[1px] w-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 opacity-50"></div>

            <p className="mb-4 text-sm text-gray-600">
              产品基于SAAS构架，可以集成、上架市面上所有POS机、实现机具管理、自定义政策、奖励、激返现、分润总奖金等
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  集成市面上所有POS机
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  自定义政策和奖励机制
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  智能分润和返现管理
                </span>
              </li>
            </ul>
          </div>

          {/* 产品卡片3 - 增值服务 */}
          <div className="group flex h-full transform flex-col overflow-hidden rounded-none bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_#dce0e8] p-6 relative">
              <ArrowUpRightIcon className="absolute top-4 right-4 h-4 w-4 text-gray-400 transition-colors duration-200 hover:text-blue-600" />
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-gray-200">
                <SparklesIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">增值服务</h3>
                <div className="font-medium text-blue-600">多元收益</div>
              </div>
            </div>

            {/* 白色分割线 */}
            <div className="my-4 h-[1px] w-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 opacity-50"></div>

            <p className="mb-4 text-sm text-gray-600">
              软件集成了多种增值服务，包括信用卡申请、贷款申请、违章代缴、积分兑换、福利商城等，有效增加代理商收益
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  信用卡申请、贷款申请
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  违章代缴、积分兑换
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  福利商城，增加代理商收益
                </span>
              </li>
            </ul>
          </div>

          {/* 产品卡片4 - 数据统计 */}
          <div className="group flex h-full transform flex-col overflow-hidden rounded-none bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_25px_#dce0e8] p-6 relative">
              <ArrowUpRightIcon className="absolute top-4 right-4 h-4 w-4 text-gray-400 transition-colors duration-200 hover:text-blue-600" />
            <div className="mb-6 flex items-center">
              <div className="mr-4 flex h-12 w-12 items-center justify-center rounded-lg bg-white border border-gray-200">
                <AcademicCapIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">数据统计</h3>
                <div className="font-medium text-blue-600">核心优势</div>
              </div>
            </div>

            {/* 白色分割线 */}
            <div className="my-4 h-[1px] w-full bg-gradient-to-r from-gray-200 via-gray-400 to-gray-200 opacity-50"></div>

            <p className="mb-4 text-sm text-gray-600">
              数据统计与分析是超级推核心优势，以数据为驱动，把控整个团队与展业方向
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  数据驱动决策分析
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  团队管理可视化
                </span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="mt-0.5 mr-2 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span className="text-sm text-gray-700">
                  展业方向精准把控
                </span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}


// 核心功能展示组件
function CoreFeaturesSection(): JSX.Element {
  const coreFeatures = [
    {
      name: '团队展业系统',
      description:
        '直推、间推都有分润收益，打通线上线下，展业无后顾之忧。线上裂变，锁定客户，线下随时交易。',
      icon: RocketLaunchIcon,
      image: '/images/product/ltb.png',
      stats: [
        { label: '即开即用', value: '无需自主开发，产品可直接上线使用' },
        { label: '多终端管理', value: '支持复杂经营模式的多终端统一管理' },
        { label: '省时省力', value: '大幅减少开发时间和人力成本投入' },
        { label: '购机奖励', value: '购机活动奖励多，有效提高客户成交率' },
      ],
    },
    {
      name: '机具管理',
      description:
        '下发机具，有手机就够了，选机、扫码两种方式下发，简单便捷激活返现、达标奖励、推荐数据应有尽有',
      icon: CurrencyDollarIcon,
      image: '/images/screenshots/Productdisplay2.jpg',
      stats: [
        { label: '多种下发方式', value: '支持选机、扫码两种机具下发方式，操作简单便捷' },
        { label: '丰富奖励数据', value: '激活返现、达标奖励、推荐数据等信息一应俱全' },
        { label: '手机即可操作', value: '有手机就能完成机具下发，不受设备限制' },
      ],
    },
    {
      name: '在线商城',
      description:
        '一键购机，总部直签，分润系统日结多种机具和政策自由选择，总有适合你的',
      icon: ShieldCheckIcon,
      image: '/images/screenshots/Productdisplay3.jpg',
      stats: [
        { label: '大平台支撑', value: '依托公司大平台，技术实力雄厚' },
        { label: '专业团队', value: '专业技术团队保障产品品质' },
        { label: '经验丰富', value: '培训营销经验丰富，有法可循' },
      ],
    },
    {
      name: '全方位运营支持',
      description:
        '提供线上线下宣传物料、营销活动、客服解答等服务，提供全方面多角度优质的运营支持。',
      icon: UserGroupIcon,
      image: '/images/screenshots/lkl2.jpg',
      stats: [
        { label: '宣传物料', value: '提供线上线下完整的宣传物料支持' },
        { label: '营销活动', value: '专业营销活动策划和执行支持' },
        { label: '客服解答', value: '7×24小时专业客服解答服务' },
      ],
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* 标题区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            核心优势
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            超级推SaaS系统管理工具，提供全方位的运营支持和品质保证
          </p>
        </div>

        {/* 功能展示 */}
        <div className="mx-auto mt-16 max-w-[1800px]">
          <div className="space-y-20">
            {coreFeatures.map((feature, index) => (
              <div
                key={feature.name}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* 内容区域 */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6 flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {feature.name}
                    </h3>
                  </div>

                  <p className="mb-8 text-lg leading-8 text-gray-600">
                    {feature.description}
                  </p>

                  {/* 特性列表 */}
                  <div className="mb-8 space-y-4">
                    {feature.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex items-start space-x-3"
                      >
                        <div className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-blue-600"></div>
                        <div>
                          <dt className="font-semibold text-gray-900">
                            {stat.label}
                          </dt>
                          <dd className="text-gray-600">{stat.value}</dd>
                        </div>
                      </div>
                    ))}
                  </div>

                 {/* 操作按钮 */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                    <Button
                      href="#"
                      variant="solid"
                      color="blue"
                      className="flex items-center justify-center gap-2 px-4 py-3"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      申请设备
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="flex items-center justify-center gap-2 px-4 py-3"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                      </svg>
                      代理加盟
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="flex items-center justify-center gap-2 px-4 py-3"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      联系客服
                    </Button>
                  </div>
                </div>
                 {/* 操作按钮 */}

                {/* 媒体区域 */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                      <Image
                        src={feature.image}
                        alt={`${feature.name}功能演示`}
                        width={600}
                        height={400}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部CTA区域 */}
        <div className="mt-12 text-center sm:mt-16">
          <a
            href="#features"
            className="inline-flex items-center rounded-md border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-gray-400 hover:text-gray-900"
          >
            探索更多功能
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}



// 英雄区块开始
export default function KnowledgeBasePage(): JSX.Element {
  // 状态管理：控制二维码显示
  const [showQRCode, setShowQRCode] = useState(false)
  const [showProductQRCode, setShowProductQRCode] = useState(false)

  return (
    <>
      <Header />
      <main>
        {/* 英雄区域 - 参考下载页面设计风格 */}
        <section className="relative overflow-hidden bg-[#e6f0fd] pt-16">
          <Container className="py-20 lg:py-32">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* 左侧内容 */}
              <div className="animate-fade-in-left">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  央行支付牌照
                </div>

                <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                  超级推
                  <span className="block text-blue-600">代理躺赚管道收益</span>
                </h1>

                <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
                  超级推是一款SaaS系统管理工具，支持多品牌自主运营；可自主上架产品、进行用户管理、开展运营活动、管理订单、统计业务数据等。具备前端风格配置、功能配置、机具和物料库存管理、运营活动管理、分享推广、团队管理、账户管理、机具管理、统计分析等相关功能。
                </p>

                {/* 核心卖点 */}
                <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center gap-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full">
                      <svg className="h-4 w-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-900">央行牌照</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full">
                      <svg className="h-4 w-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-900">费率优惠</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full">
                      <svg className="h-4 w-4 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-900">秒级到账</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full">
                      <svg className="h-4 w-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium text-gray-900">全国包邮</p>
                  </div>
                </div>

                {/* 按钮组 */}
                <div className="flex flex-col gap-3 sm:gap-4 md:flex-row">
                  <div className="relative">
                    <Button
                      href="#apply"
                      color="blue"
                      className="flex w-full items-center justify-center gap-2 px-6 py-3 text-base font-medium hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:px-8 sm:py-4 md:w-auto outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-blue-500 to-blue-600 border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none"
                      onMouseEnter={() => setShowQRCode(true)}
                      onMouseLeave={() => setShowQRCode(false)}
                    >
                      <CloudArrowDownIcon className="h-5 w-5 flex-shrink-0" />
                      <span className="whitespace-nowrap">立即下载</span>
                    </Button>

                    {/* 二维码弹出层 */}
                    {showQRCode && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 z-50 bg-white p-6 rounded-none shadow-2xl border border-gray-200 animate-fade-in w-64">
                        <div className="text-center">
                          <p className="text-base font-medium text-gray-800 mb-3">扫码下载超级推APP</p>
                          <Image
                            src="/images/screenshots/超级推推广码.png"
                            alt="超级推推广码"
                            width={220}
                            height={220}
                            className="mx-auto border border-gray-100 rounded-none"
                          />
                          <p className="text-xs text-gray-500 mt-2">支持Android和iOS系统</p>
                        </div>
                        {/* 三角形指示器 */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                          <div className="border-8 border-transparent border-t-white"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <Button
                      href="#"
                      variant="outline"
                      className="flex w-full items-center justify-center gap-2 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 sm:px-8 sm:py-4 md:w-auto outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none"
                      onMouseEnter={() => setShowProductQRCode(true)}
                      onMouseLeave={() => setShowProductQRCode(false)}
                    >
                      <PlayIcon className="h-5 w-5 flex-shrink-0" />
                      <span className="whitespace-nowrap">联系客服</span>
                    </Button>

                    {/* 产品二维码弹出层 */}
                    {showProductQRCode && (
                      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-3 z-50 bg-white p-6 rounded-none shadow-2xl border border-gray-200 animate-fade-in w-64">
                        <div className="text-center">
                          <p className="text-base font-medium text-gray-800 mb-3">扫码查看产品详情</p>
                          <Image
                            src="/images/contact/userhlc.png"
                            alt="超级推产品二维码"
                            width={220}
                            height={220}
                            className="mx-auto border border-gray-100 rounded-none"
                          />
                          <p className="text-xs text-gray-500 mt-2">了解更多产品信息</p>
                        </div>
                        {/* 三角形指示器 */}
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                          <div className="border-8 border-transparent border-t-white"></div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  支持多品牌自主运营，全方位管理解决方案
                </p>
              </div>

              {/* 右侧手机展示 - 采用下载页面的SVG框架样式 */}
              <div className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow animate-fade-in-right relative">
                {/* 第一个手机 - 前面 */}
                <div className="relative z-10 transform scale-90">
                  <svg role="img" viewBox="0 0 366 729" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                    <title>超级推App界面</title>
                    <defs>
                      <clipPath id="lkb-app-clip">
                        <rect rx={36} width={316} height={684} />
                      </clipPath>
                    </defs>
                    <path
                      d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                      fill="#4B5563"
                    />
                    <path
                      d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                      fill="#343E4E"
                    />
                    <foreignObject
                      width={316}
                      height={684}
                      clipPath="url(#lkb-app-clip)"
                      transform="translate(24 24)"
                    >
                      <Image alt="超级推App界面" src="/images/screenshots/cjt.jpg" width={316} height={684} unoptimized />
                    </foreignObject>
                  </svg>
                </div>

                {/* 第二个手机 - 背面小一点 */}
                <div className="absolute bottom-0 right-0 z-0 transform translate-x-1/4 scale-75 opacity-90">
                  <svg role="img" viewBox="0 0 366 729" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                    <title>超级推App界面背面</title>
                    <defs>
                      <clipPath id="lkb-app-clip-2">
                        <rect rx={36} width={316} height={684} />
                      </clipPath>
                    </defs>
                    <path
                      d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                      fill="#4B5563"
                    />
                    <path
                      d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                      fill="#343E4E"
                    />
                    <foreignObject
                      width={316}
                      height={684}
                      clipPath="url(#lkb-app-clip-2)"
                      transform="translate(24 24)"
                    >
                      <Image alt="超级推App界面背面" src="/images/product/ltbapp.jpg" width={316} height={684} unoptimized />
                    </foreignObject>
                  </svg>
                </div>
              </div>
            </div>
          </Container>
        </section>
       {/*英雄区块 */}

        <Aisd />
        <AdvantagesSection />
        <CoreFeaturesSection />
        {/* 关注我们 */}
        <Followus />
        {/* 功能特色区块 */}
        <FeaturesSection />
        {/* 应用场景区域 */}
        <PaymentScenes />
        {/* 办理流程 */}
        <Brand />
        {/*常见问题区域 - 展示用户常见问题和解决方法 */}
        <PaymentFAQSection />
      </main>
      <Footer />
    </>
  )
}
