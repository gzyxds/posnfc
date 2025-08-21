import { CheckIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import {
  ChatBubbleLeftRightIcon,
  PaintBrushIcon,
  CpuChipIcon,
  CloudIcon,
  DeviceTabletIcon,
  ComputerDesktopIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  BoltIcon,
  CogIcon,
  DocumentTextIcon,
  UserGroupIcon,
  EllipsisHorizontalIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FAQSection } from '@/components/ai/FAQSection'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
// 导入艺创AI企业解决方案组件 - 展示企业AI解决方案服务
import Aisd from '@/components/ai/Aisd'
// 导入热门产品组件 - 展示不同场景的产品解决方案
import HotProducts from '@/components/ai/HotProducts'
// 导入产品展示组件 - 展示艺创AI核心产品系列
import { ProductsSection } from '@/components/ai/ProductsSection'
// 导入应用场景组件 - 展示AI在不同行业的应用场景
import { Solution } from '@/components/ai/ScenarioSection'

/**
 * AI产品特性数据
 */
const aiProducts = [
  {
    name: 'AI智聊系统开发',
    description: '快速搭建AI智能聊天系统，包含：公众号端，小程序端，PC端，APP端',
    icon: ChatBubbleLeftRightIcon,
    features: ['多端支持', '智能对话', '快速部署'],
  },
  {
    name: 'AI绘画系统开发',
    description: '快速搭建AI绘画软件，包含：公众号端，小程序端，抖音小程序端',
    icon: PaintBrushIcon,
    features: ['创意生成', '多平台发布', '高质量输出'],
  },
  {
    name: '接入AI接口',
    description: '为企业办公工具接入AI接口,包含：企业微信，钉钉，飞书',
    icon: CpuChipIcon,
    features: ['无缝集成', '企业级安全', '高效协作'],
  },
  {
    name: '训练大语言模型',
    description: '打造专属企业知识库的AI模型,包含：客服，数字人直播，AI女友',
    icon: CloudIcon,
    features: ['定制化训练', '专业知识库', '多场景应用'],
  },
]

/**
 * 核心特性数据
 */


/**
 * 产品终端数据
 */
const productTerminals = [
  {
    name: '微信公众号',
    description: '通过微信公众号访问AI智能聊天系统',
    icon: DeviceTabletIcon,
    status: '已上线',
  },
  {
    name: 'H5浏览器',
    description: '通过H5浏览器访问AI智能聊天系统',
    icon: GlobeAltIcon,
    status: '已上线',
  },
  {
    name: '微信小程序',
    description: '通过微信小程序访问AI智能聊天系统',
    icon: DeviceTabletIcon,
    status: '已上线',
  },
  {
    name: 'PC端',
    description: '通过PC客户端访问AI智能聊天系统',
    icon: ComputerDesktopIcon,
    status: '已上线',
  },
  {
    name: '管理后台',
    description: '管理和配置AI智能聊天系统',
    icon: CogIcon,
    status: '已上线',
  },
  {
    name: 'APP',
    description: '即将推出的移动APP访问方式',
    icon: DeviceTabletIcon,
    status: '适配中',
  },
]

/**
 * 产品功能特色数据
 */
const productFeatures = [
  {
    name: 'AI智能对话',
    description: '运用自然语言处理技术，实现智能知识库搜索和问答，提升用户体验。',
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: '知识库应用',
    description: '支持创建多个知识库，适用于不同场景，打造企业专属应用。',
    icon: DocumentTextIcon,
  },
  {
    name: '多样化发布',
    description: '应用支持网页、JS嵌入、API接口三种发布方式。',
    icon: GlobeAltIcon,
  },
  {
    name: '数据训练',
    description: '通过后台训练数据，用户可快速查阅各种内部资料和文档。',
    icon: CpuChipIcon,
  },
  {
    name: '数据测试',
    description: '训练好的数据可在后台进行测试，大幅提升用户体验。',
    icon: ShieldCheckIcon,
  },
  {
    name: '移动端自适应',
    description: '支持多端访问，完美解决移动端管理需求。',
    icon: DeviceTabletIcon,
  },
  {
    name: 'AI大语言模型',
    description: '支持GPT3.5、GPT4.0、ChatGLM等多种大语言模型。',
    icon: CpuChipIcon,
  },
  {
    name: '多场景适用',
    description: '适用于企业智能客服、文档管理、专家顾问助理等场景。',
    icon: UserGroupIcon,
  },
]





/**
 * Hero区域组件 - 艺创AI首页英雄区域
 * 采用简洁的模拟面设计风格，以蓝色调为主，统一视觉效果
 * 特点：视觉统一性、层次清晰、交互友好、响应式设计、暗黑模式兼容
 *
 * 功能包括：
 * 1. 展示网站的主要标题和简介
 * 2. 提供产品特性标签
 * 3. 提供行动按钮（联系客服、查看演示）
 * 4. 展示产品功能卡片
 * 5. 响应式设计，适配不同屏幕尺寸
 * 6. 支持暗黑模式
 */
function HeroSection() {
  // 产品特性标签数据
  const features = [
    { name: 'AI数字人', href: '/human' },
    { name: '知识库', href: '/ai' },
    { name: '智能绘画', href: '/chat' },
    { name: '论文创作', href: '/paper' },
    { name: 'PHP&Java', href: '/' }
  ]

  // 功能卡片数据
  const cards = [
    {
      icon: CpuChipIcon,
      title: '双语言版本',
      description: 'PHP/Java双版本支持'
    },
    {
      title: '私有部署',
      description: '安全可控的私有化部署',
      icon: CloudIcon
    },
    {
      title: '专业团队',
      description: '一对一技术支持',
      icon: UserGroupIcon
    },
    {
      title: '开源方案',
      description: '灵活定制，售后无忧',
      icon: ShieldCheckIcon
    }
  ]


  {/* Hero */}
  return (
    <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 bg-gradient-to-br from-blue-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-950 overflow-hidden">
      {/* AI背景装饰 - 简化版 */}
      <div className="absolute inset-0">
        {/* 简化的光晕效果 - 响应式调整 */}
        <div className="absolute top-1/4 right-1/4 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 bg-[#0055ff]/8 blur-3xl opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/4 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-[#0055ff]/6 blur-3xl opacity-30"></div>

        {/* 简化的装饰点 - 响应式调整 */}
        <div className="absolute top-6 left-6 sm:top-8 sm:left-8 md:top-10 md:left-10 opacity-20">
          <div className="flex space-x-1 sm:space-x-2">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0055ff]/40 rounded-sm"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0055ff]/30 rounded-sm"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#0055ff]/40 rounded-sm"></div>
          </div>
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-center">

          {/* 左侧内容区 - 优化排版和间距 */}
          <div className="text-center lg:text-left space-y-4 sm:space-y-6">
            {/* 主标题区域 - 增强视觉层次 */}
            <div className="space-y-3 sm:space-y-4">
              {/* 品牌标识 - 响应式优化 */}
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-[#0055ff]/10 border border-[#0055ff]/20 text-[#0055ff] text-xs sm:text-sm font-medium mb-2 rounded-md">
                <BoltIcon className="w-3 h-3 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                新一代AI解决方案
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-[#0055ff] block mb-1 sm:mb-2 bg-gradient-to-r from-[#0055ff] to-[#0066ff] bg-clip-text">
                  艺创AI
                </span>
                <span className="text-gray-900 dark:text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight">
                  赋能企业智能化转型
                </span>
              </h1>

            </div>

            {/* 描述文本 - 优化可读性和响应式 */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                一站式渐进式AIGC系统
              </p>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                提供面向个人用户(ToC)、开发者(ToD)和企业(ToB)的全面AI解决方案
              </p>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
                一次购买，永久免费更新
              </p>
            </div>

            {/* 特性标签 - 优化布局和响应式 */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3">
              {features.map((feature) => (
                <a
                  key={feature.name}
                  href={feature.href}
                  className="px-3 py-2 sm:px-4 sm:py-2.5 bg-[#0055ff]/10 text-[#0055ff] border border-[#0055ff]/20 text-xs sm:text-sm font-medium hover:bg-[#0055ff]/20 hover:border-[#0055ff]/30 hover:scale-105 transition-all duration-200 rounded-md"
                  aria-label={feature.name}
                >
                  {feature.name}
                </a>
              ))}
            </div>

            {/* 按钮组 - 增强视觉效果和响应式 */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 pt-2">
              <Button href="#demo" variant="solid" color="blue" className="group w-full sm:w-auto">
                <span>立即体验</span>
                <ChatBubbleLeftRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>

              <Button href="#features" variant="outline" className="group w-full sm:w-auto">
                <span>了解更多</span>
                <ChevronRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
              </Button>
            </div>
          </div>

          {/* 右侧展示区 - 优化设计和交互 */}
          <div className="relative mt-8 sm:mt-10 lg:mt-0">
            {/* 背景装饰 - 响应式调整 */}
            <div className="absolute -inset-2 sm:-inset-3 md:-inset-4 bg-gradient-to-r from-[#0055ff]/10 to-[#0066ff]/10 blur-xl opacity-50 rounded-xl"></div>

            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-all duration-300 p-4 sm:p-6 md:p-8 lg:p-10 group rounded-xl">

              {/* 顶部标签区 - 优化间距和响应式 */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 mb-6 sm:mb-8 md:mb-10">
                {features.slice(0, 4).map((feature, index) => (
                  <span
                    key={feature.name}
                    className="px-2 sm:px-3 md:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-[#0055ff]/10 text-[#0055ff] border border-[#0055ff]/20 font-medium hover:bg-[#0055ff]/20 transition-colors cursor-pointer rounded-md"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {feature.name}
                  </span>
                ))}
              </div>

              {/* 功能卡片网格 - 优化布局和动画 */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
                {cards.map((card, index) => (
                  <div
                    key={card.title}
                    className="bg-gray-50/80 dark:bg-gray-700/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 p-3 sm:p-4 md:p-5 lg:p-7 hover:shadow-lg hover:border-[#0055ff]/30 hover:-translate-y-1 transition-all duration-300 group/card rounded-lg"
                    style={{animationDelay: `${index * 0.1}s`}}
                  >
                    {/* 图标区域 - 增强视觉效果 */}
                    <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#0055ff]/10 to-[#0066ff]/10 border border-[#0055ff]/20 flex items-center justify-center mb-2 sm:mb-3 md:mb-5 group-hover/card:scale-110 group-hover/card:border-[#0055ff]/40 transition-all duration-300 rounded-lg">
                      <card.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 text-[#0055ff] group-hover/card:text-[#0066ff] transition-colors" aria-hidden="true" />
                    </div>

                    {/* 内容区域 - 优化排版 */}
                    <div className="space-y-1 sm:space-y-2 md:space-y-3">
                      <h4 className="font-bold text-gray-900 dark:text-white text-xs sm:text-sm md:text-base lg:text-lg leading-tight">
                        {card.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
 {/* Hero */}



/**
 * AI产品展示组件 - 使用现代卡片布局
 */
function AIProductsSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-sm sm:text-base font-semibold leading-7 text-indigo-600">AI解决方案</h2>
          <p className="mt-2 text-2xl sm:text-4xl font-semibold tracking-tight text-gray-900 lg:text-5xl">
            AI智能聊天系统、AI绘画、大模型知识库训练开发
          </p>
          <p className="mt-6 text-base sm:text-lg leading-8 text-gray-600">
            艺创AI企业解决方案，AI智聊系统AI绘画系统的AI解决方案，快速搭建，多端支持
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8">
            {aiProducts.map((product) => (
              <li key={product.name} className="overflow-hidden outline outline-gray-200">
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                  <div className="flex size-12 flex-none items-center justify-center bg-indigo-600 text-white">
                    <product.icon aria-hidden="true" className="size-6" />
                  </div>
                  <div className="text-sm/6 font-medium text-gray-900">{product.name}</div>
                  <Menu as="div" className="relative ml-auto">
                    <MenuButton className="relative block text-gray-400 hover:text-gray-500">
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">打开选项</span>
                      <EllipsisHorizontalIcon aria-hidden="true" className="size-5" />
                    </MenuButton>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right bg-white py-2 shadow-lg outline-1 outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                          查看详情<span className="sr-only">, {product.name}</span>
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                          立即体验<span className="sr-only">, {product.name}</span>
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
                <div className="px-6 py-4">
                  <p className="text-sm/6 text-gray-600 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <span
                        key={feature}
                        className="inline-flex items-center bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

/**
 * 产品终端展示组件 - 卡片式设计
 */
function ProductTerminalsSection() {
  return (
    <section className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">产品终端</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            多端支持，全平台覆盖
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            支持微信公众号、H5浏览器、小程序、PC端、管理后台等多种访问方式
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <ul className="grid max-w-xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-3">
            {productTerminals.map((terminal) => (
              <li key={terminal.name} className="bg-white border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <div className="bg-indigo-50 p-2">
                      <terminal.icon aria-hidden="true" className="size-5 text-indigo-600" />
                    </div>
                    <h3 className="text-base font-semibold text-gray-900">{terminal.name}</h3>
                  </div>
                  <span
                    className={`inline-flex items-center px-2 py-1 text-xs font-medium ${
                      terminal.status === '已上线'
                        ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20'
                        : 'bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20'
                    }`}
                  >
                    {terminal.status}
                  </span>
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-600">{terminal.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

/**
 * 产品功能特色组件 - 使用现代卡片布局
 */
function ProductFeaturesSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">产品功能特色</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            强大的AI功能体系
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            从智能对话到知识库应用，从数据训练到多端适配，全方位满足企业AI需求
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-8 lg:grid-cols-2 xl:gap-x-8">
            {productFeatures.map((feature) => (
              <li key={feature.name} className="overflow-hidden outline outline-gray-200">
                <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                  <div className="flex size-12 flex-none items-center justify-center bg-indigo-600 text-white">
                    <feature.icon aria-hidden="true" className="size-6" />
                  </div>
                  <div className="text-sm/6 font-medium text-gray-900">{feature.name}</div>
                  <Menu as="div" className="relative ml-auto">
                    <MenuButton className="relative block text-gray-400 hover:text-gray-500">
                      <span className="absolute -inset-2.5" />
                      <span className="sr-only">打开选项</span>
                      <EllipsisHorizontalIcon aria-hidden="true" className="size-5" />
                    </MenuButton>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right bg-white py-2 shadow-lg outline-1 outline-gray-900/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                    >
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                          了解更多<span className="sr-only">, {feature.name}</span>
                        </a>
                      </MenuItem>
                      <MenuItem>
                        <a
                          href="#"
                          className="block px-3 py-1 text-sm/6 text-gray-900 data-focus:bg-gray-50 data-focus:outline-hidden"
                        >
                          立即使用<span className="sr-only">, {feature.name}</span>
                        </a>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
                <div className="px-6 py-4">
                  <p className="text-sm/6 text-gray-600">{feature.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}







/**
 * AIGC页面主组件
 * 展示艺创AI企业解决方案的完整功能和特性
 * @returns JSX.Element
 */
export default function AIGCPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        {/* 艺创AI企业解决方案区块 - 展示企业AI解决方案和核心服务 */}
        <Aisd />
        <HotProducts />
        {/* 产品展示区域 - 展示艺创AI核心产品系列 */}
        <ProductsSection />
        {/* 应用场景区域 - 展示AI在不同行业的应用场景 */}
        <Solution />
        <AIProductsSection />
        <ProductTerminalsSection />
        <ProductFeaturesSection />

        <FAQSection />
      </main>
      <Footer />
    </>
  )
}

/**
 * 页面元数据
 */
export const metadata = {
  title: '艺创AI_AI系统程序源码_AI数字人SaaS系统_AI企业知识库_企业级AI平台系统',
  description: '艺创AI专注提供AI系统源代码解决方案的技术团队「AI数字人系统」「企业全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
}
