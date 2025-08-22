import { JSX } from 'react'
import { type Metadata } from 'next'
import Image from 'next/image'
import { FAQSection } from '@/components/ai/FAQSection'
import Aisd from '@/components/ai/Aisd'
import { Solution } from '@/components/ai/ScenarioSection'
import {
  ChatBubbleLeftRightIcon,
  CpuChipIcon,
  UserGroupIcon,
  SpeakerWaveIcon,
  FaceSmileIcon,
  SparklesIcon,
  RocketLaunchIcon,
  AcademicCapIcon,
  MegaphoneIcon,
  TvIcon,
  UsersIcon,
  MicrophoneIcon,
  PencilIcon,
  VideoCameraIcon,
  PlayIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

// ==================== 页面SEO元数据配置 ====================
export const metadata: Metadata = {
  title: '艺创AI_AI系统源码_AI论文写作系统_AI论文生成器',
  description: '艺创AI专注提供AI系统源代码解决方案的技术团队「AI数字人系统」「企业全能AI变现系统」「AI聊天绘画系统」「AI论文写作系统」拥有PHP和Java两种语言版本，技术实力强，系统体验好支持私有部署，专业团队、售后无忧',
  keywords: ['AI论文写作系统,AI论文生成器,论文写作工具,智能写作系统,AI写作助手']
}

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
    title: '数字分身训练数据',
    description: '基于深度学习的数字人训练数据集，包含多种表情、动作和语音样本',
    stats: '10万+',
    unit: '训练样本',
    icon: FaceSmileIcon,
  },
  {
    title: '声音复刻训练数据',
    description: '高质量音频数据集，支持多语言、多音色的声音克隆和合成',
    stats: '50万+',
    unit: '音频片段',
    icon: SpeakerWaveIcon,
  },
  {
    title: '数字人整体效果',
    description: '逼真的数字人形象，支持实时表情同步和自然动作生成',
    stats: '99%',
    unit: '相似度',
    icon: SparklesIcon,
  },
  {
    title: '集成接入方式',
    description: '提供完整的API接口和SDK，支持快速集成到各种应用场景',
    stats: '5分钟',
    unit: '快速接入',
    icon: RocketLaunchIcon,
  }
]

// 应用场景数据
const scenarios: Scenario[] = [
  {
    id: 'live-streaming',
    name: '带货视频',
    description: '数字人主播，24小时不间断直播带货',
    features: ['品牌代言', '内容创作', '社交互动'],
    icon: TvIcon,
    video: '/videos/live-streaming.mp4'
  },
  {
    id: 'digital-employee',
    name: '数字员工',
    description: '智能客服助手，提供专业咨询服务',
    features: ['智能问答', '情感识别', '多语言支持'],
    icon: UserGroupIcon,
    video: '/videos/digital-employee.mp4'
  },
  {
    id: 'content-creation',
    name: '内容创作',
    description: 'AI驱动的内容生成和创意制作',
    features: ['脚本生成', '视频制作', '多媒体输出'],
    icon: AcademicCapIcon,
    video: '/videos/content-creation.mp4'
  },
  {
    id: 'virtual-broadcast',
    name: '虚拟直播',
    description: '虚拟主播直播，降低运营成本',
    features: ['实时互动', '自动回复', '数据分析'],
    icon: MegaphoneIcon,
    video: '/videos/virtual-broadcast.mp4'
  }
]

// 功能特色数据
const featureCards: FeatureCard[] = [
  {
    id: 1,
    name: 'AI智能对话',
    description: '智能聊天对话，AI秒回答。对接ChatAI接口，可以对自然语言进行深度理解，识别出用户的意图和需求，从而提供更加精准的回答和服务。',
    features: ['自然语言深度理解，精准识别用户意图', '秒级响应，提升服务体验', '多场景适配，满足多行业需求'],
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: 2,
    name: 'AI模型创作',
    description: '它无所不知，无所不能。根据不同模型进行提问，AI会针对输入的问题进行深度创作，提高创作能力；可定义不同的技能模型，用户根据不同技能进行提问，技能分类得越细，AI回答得越准确。',
    features: ['多模型支持，满足多样化创作需求', '技能模型可自定义，分类越细，回答越精准', '深度创作，提升内容质量与创新力'],
    icon: AcademicCapIcon,
  },
  {
    id: 3,
    name: 'AI绘画',
    description: '只需一句话，生成精美画作。支持知数云MJ。即将支持gpt3.5、api2d3.5生图、意间AI、SD、Midjourney官方、灵犀星火；已支持以图生图！生图速度快，不用排队等半天。',
    features: ['一句话生成精美画作，操作简单高效', '支持多平台模型，生图速度快，无需排队', '支持以图生图，创作更自由'],
    icon: FaceSmileIcon,
  },
  {
    id: 4,
    name: '丰富的营销功能',
    description: 'VIP会员、挽留优惠券。1、会员期间不消耗次数，可无限使用；2、系统赠送优惠券挽留用户，每个套餐赠送的优惠券金额不同，给用户更大的优惠或更多的权益，以吸引其继续购买。',
    features: ['VIP会员期间不限次数，畅享全部功能', '系统自动赠送优惠券，提升用户复购率', '多种套餐权益，满足不同用户需求'],
    icon: CpuChipIcon,
  },
]

// 功能特色展示组件
function FeaturesSection(): JSX.Element {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white">
      <Container>
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              功能特色
            </h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              提供智能助手、内容创作、虚拟直播、AI对话等多维度的功能，满足不同行业的业务需求。
            </p>
          </div>
          <ul role="list" className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 xl:gap-x-8">
            {featureCards.map((feature) => {
              const IconComponent = feature.icon
              return (
                <li key={feature.id} className="overflow-hidden rounded-xl outline-1 outline-gray-200 hover:outline-gray-300 transition-all duration-200 hover:shadow-lg">
                  <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                    <div className="flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-white ring-1 ring-gray-900/10">
                      <IconComponent className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    </div>
                    <div className="text-sm font-medium text-gray-900 leading-6">
                      {feature.name}
                    </div>
                  </div>

                  <div className="px-6 py-4">
                    <p className="text-sm leading-6 text-gray-700 mb-4">
                      {feature.description}
                    </p>
                    <div className="space-y-2 mb-6">
                      {feature.features.map((featureItem, index) => (
                        <div key={index} className="flex items-start gap-x-2">
                          <div className="flex-none w-1.5 h-1.5 bg-blue-600 rounded-full mt-2" />
                          <span className="text-sm text-gray-600 leading-5">
                            {featureItem}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    {/* 操作按钮 */}
                    <div className="flex gap-3">
                      <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                        立即体验
                      </button>
                      <button className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 hover:text-gray-900 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                        查看详情
                      </button>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>

          <div className="mt-12 text-center">
            <Button
              href="#"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200"
            >
              探索更多功能
            </Button>
          </div>
      </Container>
    </section>
  )
}

// 产品优势展示组件
function AdvantagesSection(): JSX.Element {
  return (
    <section className="py-20 bg-white">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">产品优势</h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">多维度产品优势，助力企业数字化升级</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 产品卡片1 - AI智能对话 */}
          <div className="bg-white rounded-xl p-6 transition-all duration-300 border border-gray-100 hover:border-blue-100 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                <ChatBubbleLeftRightIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">AI智能对话</h3>
                <div className="text-blue-600 font-medium">秒级回复</div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">对接GPT接口，AI秒级回复，提供精准服务</p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">自然语言深度理解，精准识别用户意图</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">秒级响应，提升服务体验</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">多场景适配，满足多行业需求</span>
              </li>
            </ul>
          </div>
          
          {/* 产品卡片2 - AI智能创作 */}
          <div className="bg-white rounded-xl p-6 transition-all duration-300 border border-gray-100 hover:border-blue-100 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                <AcademicCapIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">AI智能创作</h3>
                <div className="text-blue-600 font-medium">深度创作</div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">多模型支持，满足多样化创作需求</p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">多模型支持，满足多样化创作需求</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">技能模型可自定义，分类越细，回答越精准</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">深度创作，提升内容质量与创新力</span>
              </li>
            </ul>
          </div>
          
          {/* 产品卡片3 - AI绘画创作 */}
          <div className="bg-white rounded-xl p-6 transition-all duration-300 border border-gray-100 hover:border-blue-100 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                <FaceSmileIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">AI绘画创作</h3>
                <div className="text-blue-600 font-medium">智能绘图</div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">支持多平台绘画模型，快速生成精美作品</p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">一句话生成精美画作，操作简单高效</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">支持多平台模型，生图速度快，无需排队</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">支持以图生图，创作更自由</span>
              </li>
            </ul>
          </div>
          
          {/* 产品卡片4 - 营销功能 */}
          <div className="bg-white rounded-xl p-6 transition-all duration-300 border border-gray-100 hover:border-blue-100 group">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-100">
                <CpuChipIcon className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">营销功能</h3>
                <div className="text-blue-600 font-medium">商业变现</div>
              </div>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">VIP会员、优惠券等丰富营销工具</p>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <SparklesIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">VIP会员期间不限次数，畅享全部功能</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">系统自动赠送优惠券，提升用户复购率</span>
              </li>
              <li className="flex items-start">
                <SparklesIcon className="h-4 w-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700 text-sm">多种套餐权益，满足不同用户需求</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

// ==================== 页面组件定义 ====================



// 在线演示组件
function DemoSection(): JSX.Element {
  // 演示账号数据
  const demoAccounts: DemoAccount[] = [
    {
      title: 'PC端后台',
      url: 'https://www.cnai.art',
      username: '自行注册',
      password: '自行注册',
      description: '完整的AI聊天绘画管理后台'
    },
    {
      title: '代理商后台',
      url: 'https://www.cnai.art/admin',
      username: 'demo',
      password: 'demo',
      description: '代理商专用管理系统'
    },
    {
      title: '移动端',
      url: 'https://www.cnai.art/mobile',
      username: '暂不提供',
      password: '暂不提供',
      description: 'AI创作服务管理平台'
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gray-50 relative overflow-hidden">
      {/* 背景装饰元素 */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 sm:opacity-30 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-100 blur-2xl sm:blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 sm:w-60 sm:h-60 bg-indigo-100 blur-2xl sm:blur-3xl"></div>
      </div>
      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 sm:gap-12">
          {/* 左侧内容 */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="inline-flex items-center px-3 py-1.5 bg-blue-100 text-blue-700 text-xs sm:text-sm font-medium mb-4 sm:mb-6">
              <span className="w-1.5 h-1.5 bg-blue-600 mr-2"></span>
              在线演示
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              艺创AI-聊天绘画系统<br className="hidden sm:block" />演示中心
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              通过我们的在线演示系统，您可以亲身体验AI聊天绘画系统的强大功能和直观界面，无需安装，即刻体验。
            </p>

            <div className="bg-white shadow-lg p-4 sm:p-6 mb-6 sm:mb-8">
              <div className="flex items-center mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 flex items-center justify-center mr-2 sm:mr-3">
                  <PlayIcon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600" />
                </div>
                <h3 className="text-base sm:text-lg font-medium">演示账号信息</h3>
              </div>

              <div className="space-y-3 sm:space-y-4">
                {demoAccounts.map((account, index) => (
                  <div key={account.title} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50">
                    <div className="mb-2 sm:mb-0">
                      <p className="text-xs sm:text-sm font-medium text-gray-900">{account.title}</p>
                      <p className="text-xs text-blue-600 break-all sm:break-normal">{account.url}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-1 sm:mr-2">账号:</span>
                        <span className="text-xs font-medium">{account.username}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-xs text-gray-500 mr-1 sm:mr-2">密码:</span>
                        <span className="text-xs font-medium">{account.password}</span>
                      </div>
                      <Button
                        href={account.url}
                        variant="outline"
                        className="h-7 sm:h-8 text-xs border-blue-600 text-blue-600 hover:bg-blue-50 mt-2 sm:mt-0"
                      >
                        访问
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px]"
                href="#"
              >
                申请专属演示
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 sm:px-8 py-3 h-auto text-sm sm:text-base font-medium rounded-none min-h-[44px] sm:min-h-[48px]"
                href="#"
              >
                联系客服
              </Button>
            </div>
          </div>

          {/* 右侧内容 */}
          <div className="w-full lg:w-1/2 flex justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* 主要演示视频 */}
              <div className="bg-white p-4 sm:p-6 shadow-lg">
                <video
                  src="https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/virtual-digit.ed88f4c6.mp4"
                  className="w-full h-auto"
                  preload="metadata"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls={false}
                />
                <div className="mt-3 sm:mt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs sm:text-sm font-medium text-gray-900">AI聊天绘画平台</h4>
                    <p className="text-xs text-gray-500">一站式AI创作与智能对话体验</p>
                  </div>
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500"></div>
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-500"></div>
                  </div>
                </div>
              </div>

              {/* 装饰元素 */}
              <div className="absolute -top-3 sm:-top-6 -left-3 sm:-left-6 bg-gradient-to-br from-blue-600 to-blue-700 p-3 sm:p-4 shadow-lg transform hover:scale-105 transition-transform duration-300">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 sm:h-5 sm:w-5 text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-sm sm:text-base font-medium text-white tracking-wide">在线演示</p>
                    <p className="text-xs sm:text-sm text-blue-100/90">实时体验</p>
                  </div>
                </div>
              </div>
            </div>
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
      name: '智能文案创作',
      description: '智能文案创作助手！基于AI大语言模型，一键生成爆款短视频剧本、直播话术和图文内容，让创作更轻松高效！',
      icon: PencilIcon,
      image: '/images/product/Sound.webp',
      stats: [
        { label: '短视频剧本', value: '智能生成爆款视频文案' },
        { label: '平台适配', value: '小红书/抖音等平台风格' },
        { label: '灵感洞察', value: '全网热点智能推荐' }
      ]
    },
    {
      name: '声音克隆',
      description: '有声胜过一个性格说，仅需1句话，快速克隆你的声色，配合文案即可生成专属声音口播内容！',
      icon: SpeakerWaveIcon,
      image: '/images/product/Sound.webp',
      stats: [
        { label: '声音还原', value: '100%真实还原' },
        { label: '语音转换', value: '100%智能转换' },
        { label: '超逼真', value: '100%自然效果' }
      ]
    },
    {
      name: '用户管理',
      description: '基于可定制的多层分站，输入用户相关信息系统后，即可创建新分站与管理账号。',
      icon: UserGroupIcon,
      image: '/images/product/human2.png',
      stats: [
        { label: '多级分站', value: '灵活的分站管理' },
        { label: '账户管理', value: '完善的账户体系' },
        { label: '权限管理', value: '精细的权限控制' }
      ]
    },
    {
      name: 'AI视频',
      description: 'AI一键自动生成视频，从容应对内容创作和营销需求，助力商家和创作者提升视频生成的效率。',
      icon: VideoCameraIcon,
      image: '/images/product/saas.svg',
      videoUrl: 'https://portal.volccdn.com/obj/volcfe-scm/wanyou/static/media/ai-video.a4cd977a.mp4',
      stats: [
        { label: '一键生成', value: '智能快速生成视频' },
        { label: '场景丰富', value: '多样化视频模板' },
        { label: '高效营销', value: '提升内容转化率' }
      ]
    }
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        {/* 标题区域 */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            核心功能
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            强大的AI技术能力，为您提供全方位的智能创作解决方案
          </p>
        </div>

        {/* 功能展示 */}
        <div className="mx-auto mt-16 max-w-[1800px]">
          <div className="space-y-20">
            {coreFeatures.map((feature, index) => (
              <div
                key={feature.name}
                className={`grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* 内容区域 */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{feature.name}</h3>
                  </div>

                  <p className="text-lg leading-8 text-gray-600 mb-8">
                    {feature.description}
                  </p>

                  {/* 特性列表 */}
                  <div className="space-y-4 mb-8">
                    {feature.stats.map((stat) => (
                      <div key={stat.label} className="flex items-start space-x-3">
                        <div className="flex-shrink-0 w-2 h-2 bg-blue-600 rounded-full mt-3"></div>
                        <div>
                          <dt className="font-semibold text-gray-900">{stat.label}</dt>
                          <dd className="text-gray-600">{stat.value}</dd>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 操作按钮 */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    <Button
                      href="#"
                      variant="solid"
                      color="blue"
                      className="px-4 py-3 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      立即体验
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="px-4 py-3 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                      购买授权
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="px-4 py-3 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      体验Demo
                    </Button>
                    <Button
                      href="#"
                      variant="outline"
                      color="slate"
                      className="px-4 py-3 flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                      </svg>
                      联系客服
                    </Button>
                  </div>
                </div>

                {/* 媒体区域 */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative">
                    {feature.videoUrl ? (
                      <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                        <video
                          src={feature.videoUrl}
                          controls
                          autoPlay
                          muted
                          loop
                          className="h-full w-full object-cover"
                        >
                          您的浏览器不支持视频播放。
                        </video>
                      </div>
                    ) : (
                      <div className="aspect-video overflow-hidden rounded-lg bg-gray-100">
                        <Image
                          src={feature.image}
                          alt={`${feature.name}功能演示`}
                          width={600}
                          height={400}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 底部CTA区域 */}
        <div className="mt-12 sm:mt-16 text-center">
          <a
            href="#features"
            className="inline-flex items-center px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 border border-gray-300 hover:border-gray-400 rounded-md transition-colors"
          >
            探索更多功能
            <ChevronRightIcon className="ml-2 h-4 w-4" />
          </a>
        </div>
      </Container>
    </section>
  )
}



// 知识库英雄区块开始
export default function KnowledgeBasePage(): JSX.Element {
  return (
    <>
      <Header />
      <main>
        {/* 英雄区块开始 */}
        <section className="pt-24 pb-16 bg-gradient-to-br from-white via-blue-50/30 to-white overflow-hidden relative">
          {/* 现代化背景装饰 */}
          <div className="absolute inset-0">
            {/* 几何装饰元素 */}
            <div className="absolute top-10 left-10 w-24 h-24 bg-blue-100/40 rounded-full blur-2xl"></div>
            <div className="absolute bottom-10 right-20 w-32 h-32 bg-indigo-100/30 rounded-full blur-3xl"></div>
            {/* 网格背景 */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30"></div>
          </div>

          
          <Container className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* 左侧内容 - 优化布局和层次 */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                {/* 主标题 - 增强视觉层次 */}
                <h1 className="text-4xl lg:text-6xl font-black text-gray-900 mb-6 leading-[1.1] tracking-tight">
                  <span className="inline-block relative">
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full"></span>
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">艺创AI</span>
                  <br />
                  <span className="text-gray-800 text-3xl lg:text-4xl font-bold">智能聊天绘画系统</span>
                </h1>
                
                {/* 副标题 - 优化描述内容 */}
                <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  集成最新GPT-4、DALL-E 3、Midjourney等顶级AI模型，
                  <span className="text-blue-600 font-semibold">打造一站式AI创作平台</span>
                </p>

                {/* 核心特性标签 */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
                  <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                    智能对话
                  </span>
                  <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                    AI绘画
                  </span>
                  <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                    智能创作
                  </span>
                  <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-sm font-medium border border-blue-100">
                    营销变现
                  </span>
                </div>
                
                {/* 数据指标 - 重新设计布局 */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="group bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-gray-100/50 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="flex items-baseline mb-1">
                        <span className="text-2xl lg:text-3xl font-black text-gray-900">1000</span>
                        <span className="text-sm font-semibold text-blue-600 ml-1">+</span>
                      </div>
                      <span className="text-xs text-gray-600 font-medium">企业用户</span>
                      <div className="w-full h-0.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-4/5 group-hover:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                  <div className="group bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-gray-100/50 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="flex items-baseline mb-1">
                        <span className="text-2xl lg:text-3xl font-black text-gray-900">50</span>
                        <span className="text-sm font-semibold text-blue-600 ml-1">万+</span>
                      </div>
                      <span className="text-xs text-gray-600 font-medium">AI创作</span>
                      <div className="w-full h-0.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full w-full transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                  <div className="group bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-gray-100/50 transition-all duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center lg:items-start">
                      <div className="flex items-baseline mb-1">
                        <span className="text-2xl lg:text-3xl font-black text-gray-900">99.9</span>
                        <span className="text-sm font-semibold text-blue-600 ml-1">%</span>
                      </div>
                      <span className="text-xs text-gray-600 font-medium">系统稳定</span>
                      <div className="w-full h-0.5 bg-gray-100 rounded-full mt-2 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-3/4 group-hover:w-full transition-all duration-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 按钮组 - 现代化设计 - 紧凑样式 */}
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                  <Button 
                    href="#demo"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 h-auto text-base font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <PencilIcon className="w-4 h-4 mr-2" />
                    立即开始创作
                  </Button>
                  <Button 
                    href="https://v.cnai.art" 
                    target="_blank"
                    variant="outline" 
                    className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 px-8 py-3 h-auto text-base font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <PlayIcon className="w-4 h-4 mr-2" />
                    观看演示
                  </Button>
                </div>
              </div>

              {/* 右侧图形 - 现代化展示 - 紧凑布局 */}
              <div className="w-full lg:w-1/2 relative">
                <div className="relative">
                  {/* 主图 - 现代化设计 */}
                  <div className="relative mx-auto max-w-md">
                    {/* 模拟AI创作界面 */}
                    <div className="w-full bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-100/50">
                      {/* 模拟标题栏 - 现代化设计 */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center space-x-2">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                            <ChatBubbleLeftRightIcon className="w-3 h-3 text-blue-600" />
                          </div>
                          <div className="w-20 h-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full"></div>
                        </div>
                      </div>

                      {/* 模拟AI对话内容区 */}
                      <div className="space-y-4">
                        {/* 对话标题 */}
                        <div className="h-8 bg-gradient-to-r from-gray-200 to-gray-100 rounded-lg w-4/5"></div>
                        
                        {/* 对话内容 */}
                        <div className="space-y-2">
                          <div className="h-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded"></div>
                          <div className="h-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded w-5/6"></div>
                          <div className="h-2 bg-gradient-to-r from-gray-100 to-gray-50 rounded w-4/6"></div>
                        </div>
                        
                        {/* 功能区域 */}
                        <div className="grid grid-cols-2 gap-3 mt-4">
                          <div className="h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200/50 flex items-center justify-center">
                            <div className="w-6 h-6 bg-blue-200 rounded"></div>
                          </div>
                          <div className="h-20 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg border border-purple-200/50 flex items-center justify-center">
                            <div className="w-6 h-6 bg-purple-200 rounded"></div>
                          </div>
                        </div>
                        
                        {/* 工具栏区域 */}
                        <div className="space-y-1.5 pt-3 border-t border-gray-100">
                          <div className="h-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded w-3/4"></div>
                          <div className="h-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded w-2/3"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* 功能标签 - 现代化设计 - 紧凑样式 */}
                    <div className="absolute -top-6 -right-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 flex items-center border border-blue-100/50 transform transition-all duration-300 hover:-translate-y-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <ChatBubbleLeftRightIcon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">智能对话</p>
                        <p className="text-xs text-blue-600 font-medium">AI助手交互</p>
                      </div>
                    </div>
                    
                    <div className="absolute -bottom-6 -left-6 bg-white/95 backdrop-blur-sm rounded-xl p-3 flex items-center border border-green-100/50 transform transition-all duration-300 hover:-translate-y-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3">
                        <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">AI绘画</p>
                        <p className="text-xs text-green-600 font-medium">智能创图</p>
                      </div>
                    </div>
                    
                    {/* 创作工具标签 */}
                    <div className="absolute top-1/2 -right-4 transform translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-sm rounded-xl p-3 flex items-center border border-purple-100/50 transition-all duration-300 hover:-translate-y-1">
                      <div className="w-7 h-7 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mr-2">
                        <PencilIcon className="h-3 w-3 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-900">智能创作</p>
                      </div>
                    </div>
                    
                    {/* 装饰性几何元素 */}
                    <div className="absolute -top-3 -left-3 w-6 h-6 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 底部技术标签 - 现代化设计 - 紧凑布局 */}
            <div className="flex justify-center mt-12 gap-2 flex-wrap">
              <div className="group px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl text-sm text-gray-700 border border-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">自然语言处理</span>
              </div>
              <div className="group px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl text-sm text-gray-700 border border-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">计算机视觉</span>
              </div>
              <div className="group px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl text-sm text-gray-700 border border-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">深度学习</span>
              </div>
              <div className="group px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl text-sm text-gray-700 border border-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">多模态融合</span>
              </div>
              <div className="group px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl text-sm text-gray-700 border border-gray-200/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200">
                <span className="font-medium">智能推荐</span>
              </div>
            </div>
          </Container>
        </section>

        <Aisd />

        <AdvantagesSection />
        <DemoSection />
        <CoreFeaturesSection />
         {/* 应用场景区域 */}
        <Solution />
        {/* 功能特色区块 */}
        <FeaturesSection />

        {/* 接入流程 Section */}
        <section className="py-24 bg-gray-50">
          <Container>

              {/* 标题区域 */}
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">接入流程</h2>
                <p className="text-gray-600 text-sm mb-3">为你提供快速、便捷的接入服务</p>
                <Button
                  href="https://v.cnai.art"
                  target="_blank"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-sm font-medium mt-4"
                >
                  立即接入
                </Button>
              </div>

              {/* 流程步骤 */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* 步骤1：需求沟通 */}
                <div className="text-center">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">01</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2">需求沟通</h3>
                  <div className="border-t border-gray-200 w-16 mx-auto my-3"></div>
                  <p className="text-gray-600 text-xs">提供产品信息，沟通数字人类型、使用场景和交付形式</p>
                </div>

                {/* 步骤2：确认合作 */}
                <div className="text-center">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">02</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2">确认合作</h3>
                  <div className="border-t border-gray-200 w-16 mx-auto my-3"></div>
                  <p className="text-gray-600 text-xs">通过控制台直接下单，或线下沟通商务合作</p>
                </div>

                {/* 步骤3：资产制作 */}
                <div className="text-center">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">03</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2">资产制作</h3>
                  <div className="border-t border-gray-200 w-16 mx-auto my-3"></div>
                  <p className="text-gray-600 text-xs">采集数据，制作数字人形象和声音资产</p>
                </div>

                {/* 步骤4：正式上线 */}
                <div className="text-center">
                  <div className="flex justify-center items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 text-sm">04</span>
                    </div>
                  </div>
                  <h3 className="text-base font-bold mb-2">正式上线</h3>
                  <div className="border-t border-gray-200 w-16 mx-auto my-3"></div>
                  <p className="text-gray-600 text-xs">数字人上线，调用接口驱动或通过平台直接使用</p>
                </div>
              </div>
          </Container>
        </section>

        {/* 准备好开启您的AI数字人之旅了吗？ */}
        <section className="py-12 sm:py-16 lg:py-24">
          <Container>

              <div className="bg-white overflow-hidden relative border border-gray-200 rounded-lg sm:rounded-xl">
                {/* 装饰元素 - 仅在大屏显示 */}
                <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
                  <svg className="h-full w-full" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="100" cy="100" r="80" fill="black" fillOpacity="0.02" />
                    <circle cx="300" cy="300" r="150" fill="black" fillOpacity="0.02" />
                    <circle cx="250" cy="150" r="50" fill="black" fillOpacity="0.02" />
                    <circle cx="150" cy="250" r="30" fill="black" fillOpacity="0.02" />
                  </svg>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                  {/* 左侧内容 */}
                  <div className="lg:col-span-3 p-6 sm:p-8 lg:p-12 relative z-10">
                    <div className="max-w-xl">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 text-gray-900 leading-tight">
                        艺创AI<span className="text-blue-600">企业知识库</span>系统
                      </h3>
                      <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed">
                       基于Vue3和ThinkPHP技术栈开发,支持PC端和H5端。系统支持多种文档格式导入,完成AI训练后可进行智能问答。 提供网页窗口、API等多种接入方式,可快速对接第三方系统。适用于企业智能客服、智能文档、顾问助理等多种商用场景。
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6">
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-gray-900 font-medium text-sm sm:text-base">高清还原</h4>
                            <p className="text-gray-500 text-xs sm:text-sm">100%真实感官体验</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-gray-900 font-medium text-sm sm:text-base">专业服务</h4>
                            <p className="text-gray-500 text-xs sm:text-sm">7×24小时技术支持</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-gray-900 font-medium text-sm sm:text-base">数据安全</h4>
                            <p className="text-gray-500 text-xs sm:text-sm">企业级安全保障</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mr-3 flex-shrink-0">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="text-gray-900 font-medium text-sm sm:text-base">持续更新</h4>
                            <p className="text-gray-500 text-xs sm:text-sm">定期功能迭代升级</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3">
                        <Button href="#demo" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 sm:py-4 rounded-none shadow-lg w-full sm:w-auto">
                          立即体验
                        </Button>
                        <Button href="https://v.cnai.art" target="_blank" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 sm:py-4 rounded-none w-full sm:w-auto">
                          咨询价格
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* 右侧功能卡片 - 在移动端显示在下方 */}
                  <div className="lg:col-span-2 relative">
                    {/* 移动端显示 */}
                    <div className="lg:hidden p-6">
                      <div className="grid grid-cols-2 gap-3">
                        {/* AI数字人 */}
                        <div className="bg-gray-50 p-4 flex flex-col items-center justify-center shadow-sm rounded-lg">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <h4 className="text-gray-900 font-medium text-sm text-center">AI知识库</h4>
                          <p className="text-gray-500 text-xs text-center mt-1">三版本支持</p>
                        </div>

                        {/* 私有部署 */}
                        <div className="bg-gray-50 p-4 flex flex-col items-center justify-center shadow-sm rounded-lg">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                          </div>
                          <h4 className="text-gray-900 font-medium text-sm text-center">私有部署</h4>
                          <p className="text-gray-500 text-xs text-center mt-1">安全可控</p>
                        </div>

                        {/* 专业团队 */}
                        <div className="bg-gray-50 p-4 flex flex-col items-center justify-center shadow-sm rounded-lg">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                          </div>
                          <h4 className="text-gray-900 font-medium text-sm text-center">专业团队</h4>
                          <p className="text-gray-500 text-xs text-center mt-1">一对一支持</p>
                        </div>

                        {/* 开源方案 */}
                        <div className="bg-gray-50 p-4 flex flex-col items-center justify-center shadow-sm rounded-lg">
                          <div className="w-8 h-8 bg-blue-50 flex items-center justify-center mb-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                          </div>
                          <h4 className="text-gray-900 font-medium text-sm text-center">开源方案</h4>
                          <p className="text-gray-500 text-xs text-center mt-1">灵活定制</p>
                        </div>
                      </div>
                    </div>

                    {/* 桌面端显示 */}
                    <div className="hidden lg:block absolute inset-0">
                      <div className="w-full h-full p-6 flex items-center">
                        <div className="bg-gray-50 w-full h-full p-4 shadow-lg">
                          <div className="grid grid-cols-2 gap-4 h-full">
                            {/* AI数字人 */}
                            <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                              <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                              </div>
                              <h4 className="text-gray-900 font-medium text-lg">AI知识库</h4>
                              <p className="text-gray-500 text-sm text-center mt-1">PHP/Java双版本支持</p>
                            </div>

                            {/* 私有部署 */}
                            <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                              <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                              </div>
                              <h4 className="text-gray-900 font-medium text-lg">私有部署</h4>
                              <p className="text-gray-500 text-sm text-center mt-1">安全可控的私有化部署</p>
                            </div>

                            {/* 专业团队 */}
                            <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                              <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                              </div>
                              <h4 className="text-gray-900 font-medium text-lg">专业团队</h4>
                              <p className="text-gray-500 text-sm text-center mt-1">一对一技术支持</p>
                            </div>

                            {/* 开源方案 */}
                            <div className="bg-white p-3 flex flex-col items-center justify-center shadow-sm">
                              <div className="w-10 h-10 bg-blue-50 flex items-center justify-center mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                </svg>
                              </div>
                              <h4 className="text-gray-900 font-medium text-lg">开源方案</h4>
                              <p className="text-gray-500 text-sm text-center mt-1">灵活定制，售后无忧</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </Container>
        </section>
        {/*常见问题区域 - 展示用户常见问题和解决方法 */}
        <FAQSection />
      </main>
      <Footer />
    </>
  )
}
