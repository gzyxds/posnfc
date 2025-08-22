'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  CloudArrowUpIcon,
  CpuChipIcon,
  ChartBarIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  UserGroupIcon,
  GlobeAltIcon,
  TrophyIcon,
  ShoppingBagIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  CreditCardIcon,
  GiftIcon,
  TagIcon,
  UsersIcon,
  StarIcon,
  PlayIcon,
  ShareIcon,
  ScissorsIcon,
  BoltIcon,
  TicketIcon,
  TruckIcon,
  ArrowPathIcon,
  AcademicCapIcon,
  ShieldCheckIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { VideoCarousel } from '@/components/carousel/VideoCarousel'

/**
 * 电商系统功能标签页数据
 * 包含六个核心功能分类：店铺管理、营销推广、会员分销、数据分析、技术架构、运营工具
 */
const ecommerceFeatures = {
  store: {
    id: 'store',
    name: '店铺管理',
    icon: BuildingOfficeIcon,
    title: '全方位店铺管理让运营更简单',
    description: '提供完整的店铺运营管理功能，助力商家高效经营',
    features: [
      { name: 'DIY装修', desc: '拖拽式页面设计，个性化店铺装修' },
      { name: '商品管理', desc: '批量导入商品，智能分类管理' },
      { name: '订单处理', desc: '自动化订单流程，提升处理效率' }
    ],
    model: '店铺管理系统',
    image: '/images/product/Carousel4.png'
  },
  marketing: {
    id: 'marketing',
    name: '营销推广',
    icon: GiftIcon,
    title: '多样化营销工具助力销量增长',
    description: '丰富的营销玩法，帮助商家快速获客转化',
    features: [
      { name: '限时秒杀', desc: '营造紧迫感，刺激用户快速下单' },
      { name: '拼团砍价', desc: '社交裂变营销，扩大传播范围' },
      { name: '优惠券', desc: '多种优惠策略，精准促销转化' }
    ],
    model: '营销推广引擎',
    image: '/images/product/Carousel5.png'
  },
  member: {
    id: 'member',
    name: '会员分销',
    icon: UsersIcon,
    title: '完善的会员分销体系',
    description: '构建用户生态闭环，实现裂变式增长',
    features: [
      { name: '等级会员', desc: '多层级会员体系，提升用户粘性' },
      { name: '分销推广', desc: '全民分销模式，快速扩张市场' },
      { name: '积分体系', desc: '积分兑换奖励，促进用户复购' }
    ],
    model: '会员分销系统',
    image: '/images/product/Carousel6.png'
  },
  analytics: {
    id: 'analytics',
    name: '数据分析',
    icon: ChartBarIcon,
    title: '智能数据分析驱动决策',
    description: '全维度数据统计分析，洞察业务增长趋势',
    features: [
      { name: '销售报表', desc: '实时销售数据，掌握经营状况' },
      { name: '用户画像', desc: '深度用户分析，精准营销投放' },
      { name: '商品分析', desc: '商品销售趋势，优化库存结构' }
    ],
    model: '数据分析平台',
    image: '/images/product/Carousel4.png'
  },
  technology: {
    id: 'technology',
    name: '技术架构',
    icon: CpuChipIcon,
    title: '先进技术架构保障稳定运行',
    description: '采用前沿技术栈，确保系统高性能高可用',
    features: [
      { name: '微服务架构', desc: '模块化设计，便于扩展和维护' },
      { name: '分布式部署', desc: '支持高并发，保障系统稳定' },
      { name: 'API接口', desc: '开放API，支持第三方系统集成' }
    ],
    model: '技术架构体系',
    image: '/images/screenshots/contacts.png'
  },
  operation: {
    id: 'operation',
    name: '运营工具',
    icon: WrenchScrewdriverIcon,
    title: '丰富的运营工具提升效率',
    description: '一站式运营工具，简化日常管理工作',
    features: [
      { name: '客服系统', desc: '智能客服机器人，提升服务效率' },
      { name: '物流管理', desc: '对接主流快递，自动跟踪订单' },
      { name: '财务结算', desc: '自动财务核算，简化账务处理' }
    ],
    model: '运营工具套件',
    image: '/images/product/label3.png'
  }
}

/**
 * 电商系统功能展示标签页组件
 * 参考 Accordion 的设计风格，采用标签页布局展示电商功能
 * 支持响应式设计和交互动画效果
 * @returns 电商功能标签页组件
 */
function EcommerceFeatureTabs() {
  const [activeTab, setActiveTab] = useState('store')
  const currentFeature = ecommerceFeatures[activeTab as keyof typeof ecommerceFeatures]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#F7F9FC' }}>
      <div className="mx-auto max-w-[1800px] px-3 lg:px-4">
        {/* 标题区域 */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-full mb-4 sm:mb-6 md:mb-8">
            <span className="text-[#0052D9] font-semibold text-xs sm:text-sm tracking-wide">电商系统功能展示</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2" style={{ color: '#05f' }}>
            你可以用电商系统做什么？
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2" style={{ color: 'rgba(12,13,14,0.7)' }}>
            探索电商系统在不同场景的强大应用，让智能电商平台为你的业务发展赋能
          </p>
        </div>

        {/* 标签导航栏 */}
        <div className="mb-12 md:mb-16 px-2">
          {/* 移动端：水平滚动标签 */}
          <div className="md:hidden overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex space-x-2 pb-2 min-w-max">
              {Object.values(ecommerceFeatures).map((feature) => {
                const IconComponent = feature.icon
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setActiveTab(feature.id)
                    }}
                    className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 font-medium text-sm transition-all duration-200 whitespace-nowrap touch-manipulation ${
                      activeTab === feature.id
                        ? 'bg-[#0052D9] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
                    }`}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      userSelect: 'none'
                    }}
                  >
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                    {feature.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* 桌面端：网格布局标签 */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-1 lg:gap-2">
            {Object.values(ecommerceFeatures).map((feature) => {
              const IconComponent = feature.icon
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveTab(feature.id)}
                  className={`flex items-center justify-center gap-2 px-4 lg:px-6 py-2 lg:py-3 font-medium text-sm lg:text-base transition-all duration-200 w-full ${
                    activeTab === feature.id
                      ? 'text-[#0052D9] border-b-2 border-[#0052D9]'
                      : 'text-gray-600 hover:text-[#0052D9]'
                  }`}
                >
                  <IconComponent className="w-4 h-4 lg:w-5 lg:h-5" />
                  {feature.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* 标签内容区域 */}
        <div className="grid grid-cols-1 gap-4">
          <div className="transition-all duration-300 ease-out">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-20 items-center bg-white p-4 sm:p-6 md:p-8 lg:p-12 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,.05)' }}>
              {/* 左侧文字内容 */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8 flex flex-col justify-center lg:w-2/5 w-full order-2 lg:order-1">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight" style={{ color: 'rgba(12,13,14,1)', lineHeight: '1.3' }}>
                  {currentFeature.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: 'rgba(12,13,14,0.7)', lineHeight: '1.6' }}>
                  {currentFeature.description}
                </p>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {currentFeature.features.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3 md:gap-4">
                      <div className="w-2 h-2 bg-[#0052D9] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: 'rgba(12,13,14,1)', lineHeight: '1.6' }}>
                        <strong style={{ fontWeight: '500' }}>{item.name}</strong>：{item.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-xs sm:text-sm" style={{ color: 'rgba(12,13,14,0.6)' }}>
                  相关服务：{currentFeature.model}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white border border-gray-300 text-gray-700 font-medium transition-all duration-200 hover:bg-gray-50 text-sm md:text-base"
                  >
                    查看详情
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-[#0052D9] text-white font-medium transition-all duration-200 hover:scale-105 hover:bg-[#003db8] text-sm md:text-base"
                  >
                    立即体验
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* 右侧图片展示 */}
              <div className="flex justify-center lg:justify-end items-center lg:w-3/5 w-full mt-6 lg:mt-0 order-1 lg:order-2">
                <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-48 sm:h-60 md:h-80 lg:h-[28rem] xl:h-[32rem]">
                  <img
                    src={currentFeature.image}
                    alt={`${currentFeature.name}功能演示`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// 核心特性数据
const coreFeatures = [
  {
    name: '多终端覆盖',
    description: 'PC端、小程序、APP、H5全平台支持',
    icon: DevicePhoneMobileIcon,
  },
  {
    name: '店铺管理',
    description: 'DIY装修、线下多点核销',
    icon: BuildingOfficeIcon,
  },
  {
    name: '会员系统',
    description: '等级会员、积分、分销体系',
    icon: UsersIcon,
  },
]

// 系统功能数据
const systemFeatures = [
  {
    title: '分销拓客',
    description: '多种分销模式、多种返佣规则，促进分销列表推广',
    icon: ShareIcon,
  },
  {
    title: '营销转化',
    description: '具备拼团、砍价、秒杀、抽奖、优惠券等多种营销工具',
    icon: GiftIcon,
  },
  {
    title: '会员管理',
    description: '用户等级管理+SVIP付费会员制度，充分挖掘会员价值',
    icon: StarIcon,
  },
  {
    title: 'DIY装修',
    description: '商城首页DIY自定义装修，个性化设计、更加灵活多变',
    icon: ComputerDesktopIcon,
  },
]

// 全面功能数据
const allFeatures = [
  { name: '店铺管理', description: '全面的店铺管理功能，轻松掌控业务', icon: BuildingOfficeIcon },
  { name: '店铺DIY装修', description: '自由定制店铺风格，打造独特品牌形象', icon: ComputerDesktopIcon },
  { name: '线下多点核销', description: '支持线上线下一体化运营模式', icon: GlobeAltIcon },
  { name: '会员系统', description: '全面的会员管理，提升客户忠诚度', icon: UsersIcon },
  { name: '客服系统', description: '高效的客户服务，提升用户满意度', icon: UserGroupIcon },
  { name: '数据统计', description: '全面的数据分析，助力精准决策', icon: ChartBarIcon },
  { name: '物流查询', description: '实时跟踪订单状态，提升用户体验', icon: TruckIcon },
  { name: '发票管理', description: '便捷的发票处理，满足各类需求', icon: DocumentTextIcon },
]

// 会员与分销系统数据
const membershipFeatures = [
  { name: '付费会员', description: '增加收入来源，提供专属服务', icon: AcademicCapIcon },
  { name: '等级会员', description: '激励用户升级，提高用户粘性', icon: StarIcon },
  { name: '会员折扣', description: '灵活的折扣策略，刺激消费', icon: TagIcon },
  { name: '会员积分', description: '多样化积分应用，提升复购率', icon: GiftIcon },
  { name: '事业部代理分销', description: '多层级分销体系，扩大销售网络', icon: ShareIcon },
  { name: '人人分销', description: '全民营销模式，快速扩张市场', icon: UsersIcon },
  { name: '指定分销', description: '精准选择分销商，提高销售质量', icon: UserGroupIcon },
  { name: '满额分销', description: '激励高额订单，提升客单价', icon: CreditCardIcon },
]

// 营销工具数据
const marketingTools = [
  { name: '直播带货', description: '实时互动营销，提高转化率', icon: PlayIcon },
  { name: '多人拼团', description: '社交裂变营销，快速获客', icon: UsersIcon },
  { name: '砍价助力', description: '互动式营销，提高用户参与度', icon: ScissorsIcon },
  { name: '限时秒杀', description: '创造稀缺感，刺激快速成交', icon: BoltIcon },
  { name: '优惠券', description: '多样化优惠策略，促进销售', icon: TicketIcon },
  { name: '满额包邮', description: '提高客单价，优化物流成本', icon: TruckIcon },
  { name: '积分兑换', description: '提高用户忠诚度，促进复购', icon: ArrowPathIcon },
  { name: '会员专享', description: '提供专属优惠，增加会员价值', icon: AcademicCapIcon },
]

// 应用场景数据
const applicationScenarios = [
  { title: '直播带货', description: '直播带货商城系统源码', icon: PlayIcon },
  { title: '社区拼团', description: '社区拼团商城系统源码', icon: UsersIcon },
  { title: '分销电商', description: '分销电商系统源码', icon: ShareIcon },
  { title: '会员电商', description: '会员电商开源系统', icon: StarIcon },
  { title: '食品生鲜', description: '食品生鲜开源电商系统', icon: ShoppingBagIcon },
  { title: '服装鞋帽', description: '服装鞋帽开源电商系统', icon: TrophyIcon },
  { title: '商超百货', description: '商超百货开源电商系统', icon: BuildingOfficeIcon },
  { title: '数码家电', description: '数码家电开源电商系统', icon: CpuChipIcon },
]

// 技术框架数据
const techStack = [
  {
    name: 'uni-app',
    description: '移动端前端开发语言',
    category: '前端技术'
  },
  {
    name: 'ThinkPHP6',
    description: '系统底层框架',
    category: '后端框架'
  },
  {
    name: 'ElementUI',
    description: '管理后台',
    category: 'UI框架'
  },
  {
    name: '前后端分离',
    description: '提高开发效率',
    category: '架构设计'
  },
  {
    name: 'Redis缓存',
    description: '减少数据库交互，支持分布式部署',
    category: '性能优化'
  },
  {
    name: 'Workerman',
    description: '长连接，减少CPU及内存使用',
    category: '通信技术'
  },
]

// 二开优势数据
const developmentAdvantages = [
  { name: '框架易二开', description: 'TP6 + MySQL常见框架，快速开发', icon: CpuChipIcon },
  { name: '层次清晰', description: '接口层、服务层、数据层，职责明确', icon: DocumentTextIcon },
  { name: '灵活权限控制', description: '自动检查系统环境，错误提示说明', icon: UserGroupIcon },
  { name: '代码注释全面', description: '所有方法都有详细的注释说明', icon: DocumentTextIcon },
  { name: '开发文档', description: '众多的二次开发功能说明文档', icon: DocumentTextIcon },
  { name: '系统配置', description: '后台快速完成各种系统配置', icon: BuildingOfficeIcon },
]

// 电商解决方案轮播数据
const ecommerceSlides = [
  {
    id: 1,
    title: '新零售社交电商解决方案',
    subtitle: '全场景电商解决方案',
    description:
      '集直播、分销、拼团、砍价、抽奖等热门社交电商玩法，打通多端用户数据，构建全场景新零售社交电商解决方案',
    backgroundType: 'image' as const,
    backgroundImage: '/images/carousel/HeaderCarousel2.jpg',
    textPosition: 'left' as const,
    buttonText: '立即体验',
    buttonLink: '#',
  },
  {
    id: 2,
    title: '多终端覆盖',
    subtitle: 'PC端、小程序、APP、H5',
    description:
      '全平台支持，一套系统适配所有终端，让您的电商业务覆盖更广泛的用户群体，提升销售转化率',
    backgroundType: 'image' as const,
    backgroundImage: '/images/carousel/HeaderCarousel2.jpg',
    textPosition: 'left' as const,
    buttonText: '查看详情',
    buttonLink: '#',
  },
  {
    id: 3,
    title: '智能营销系统',
    subtitle: '多样化营销工具',
    description:
      '直播带货、多人拼团、砍价助力、限时秒杀等营销工具，助力商家快速获客和提高销售转化率',
    backgroundType: 'image' as const,
    backgroundImage: '/images/carousel/HeaderCarousel3.jpg',
    textPosition: 'left' as const,
    buttonText: '了解更多',
    buttonLink: '#',
  },
  {
    id: 4,
    title: '会员与分销体系',
    subtitle: '全面的客户关系管理',
    description:
      '完善的会员管理和多层级分销体系，扩大销售网络，充分挖掘会员价值，助力业务快速增长',
    backgroundType: 'image' as const,
    backgroundImage: '/images/carousel/HeaderCarousel4.jpg',
    textPosition: 'left' as const,
    buttonText: '立即开始',
    buttonLink: '#',
  },
]

export default function EcommercePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Header />
      <main className="bg-white">
        {/* 电商解决方案转播组件 */}
        <VideoCarousel
          autoPlay={true}
          interval={6000}
          showProgress={true}
          showPlayButton={false}
          showNavigation={false}
          height={{ base: 'h-[70vh]', md: 'h-[80vh]', lg: 'h-[90vh]' }}
          theme="light"
          textModeButton={true}
          showOverlay={true}
          customSlides={ecommerceSlides}
          forceImageMode={true}
        />

        {/* 核心特性 */}
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                全方位电商解决方案
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                多终端覆盖，全面功能支持，助力您的电商业务快速发展
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {coreFeatures.map((feature) => (
                <div key={feature.name} className="bg-white p-6 border border-gray-200">
                  <div className="mb-4">
                    <feature.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 系统功能 */}
        <section className="bg-gray-50 py-20">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                系统功能加持，让运营更轻松
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                追踪零售行业新趋势，跟进社交电商热门玩法，丰富营销功能加持
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2">
              {systemFeatures.map((feature) => (
                <div key={feature.title} className="bg-white p-8 border border-gray-200">
                  <div className="mb-6">
                    <feature.icon className="h-10 w-10 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 全面功能支持 */}
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                全面功能支持
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                我们提供丰富多样的电商功能，满足您的各种业务需求
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {allFeatures.map((feature) => (
                <div key={feature.name} className="bg-gray-50 p-6 border border-gray-200">
                  <div className="mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">{feature.name}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 会员与分销系统 */}
        <section className="bg-gray-50 py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                会员与分销系统
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                我们的会员与分销系统为您提供全面的客户关系管理和销售网络扩展解决方案，助力您的业务快速增长
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {membershipFeatures.map((feature) => (
                <div key={feature.name} className="bg-white p-6 border border-gray-200">
                  <div className="mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">{feature.name}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 营销拓客工具 */}
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                营销拓客工具
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                多样化的营销工具，助力商家快速获客和提高销售转化率，为您的业务增长赋能
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {marketingTools.map((tool) => (
                <div key={tool.name} className="bg-gray-50 p-6 border border-gray-200">
                  <div className="mb-4">
                    <tool.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 电商系统核心功能展示 */}
        <EcommerceFeatureTabs />
        {/* 应用场景 */}
        <section className="bg-gray-50 py-20">
          <Container>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                满足多行业多场景应用需求
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                支持多种行业类型，满足不同业务场景的个性化需求
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {applicationScenarios.map((scenario) => (
                <div key={scenario.title} className="bg-white p-6 border border-gray-200 text-center">
                  <div className="mb-4 flex justify-center">
                    <scenario.icon className="h-8 w-8 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{scenario.title}</h3>
                  <p className="text-sm text-gray-600">{scenario.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 技术框架 */}
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                采用最新前沿技术框架
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                大势所趋，行业引领，使用成熟稳定的技术栈，保障系统可靠性和扩展性
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {techStack.map((tech, index) => (
                <div key={index} className="bg-gray-50 p-6 border border-gray-200">
                  <div className="mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium text-blue-700 bg-blue-100 border border-blue-200">
                      {tech.category}
                    </span>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 二开优势 */}
        <section className="bg-gray-50 py-20">
          <Container>
            <div className="mx-auto max-w-3xl text-center mb-16">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                想你所想，让二开更简单
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                从系统设计到技术实现，每一个细节都在考虑让二开更方便，减少重复造轮子
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {developmentAdvantages.map((advantage) => (
                <div key={advantage.name} className="bg-white p-6 border border-gray-200">
                  <div className="mb-4">
                    <advantage.icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-medium text-gray-900 mb-2">{advantage.name}</h3>
                  <p className="text-sm text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 行动召唤 */}
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
                准备好开启您的电商之旅了吗？
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                选择我们的新零售社交电商解决方案，让您的业务赢在起跑线上
              </p>
              <div className="mt-10 flex items-center justify-center gap-6">
                <Button variant="solid" color="blue">
                  立即开始
                </Button>
                <Button variant="outline" color="slate">
                  联系咨询
                </Button>
              </div>
            </div>
          </Container>
        </section>
       </main>
      <Footer />
    </>
  )
}
