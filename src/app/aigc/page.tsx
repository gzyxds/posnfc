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
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FAQSection } from '@/components/FAQSection'

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
const coreFeatures = [
  {
    name: '技术过硬',
    description: '采用最新AI技术，确保系统稳定可靠',
    icon: ShieldCheckIcon,
  },
  {
    name: '私有部署',
    description: '支持私有化部署，保障数据安全',
    icon: CloudIcon,
  },
  {
    name: '个性化定制',
    description: '根据企业需求提供定制化解决方案',
    icon: CogIcon,
  },
  {
    name: '稳定使用',
    description: '7x24小时稳定运行，高可用性保障',
    icon: BoltIcon,
  },
]

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
 * 系统演示数据
 */
const systemDemos = [
  {
    name: 'H5演示',
    description: 'H5端',
    url: 'https://urlnet.cn/',
    account: '自行注册',
    password: '自行注册',
    type: 'web',
  },
  {
    name: '小程序演示',
    description: '扫码查看',
    url: '小程序搜索：艺界AI',
    account: '',
    password: '',
    type: 'miniprogram',
  },
  {
    name: 'APP演示',
    description: 'APP演示',
    url: 'https://urlnet.cn',
    account: '自行注册',
    password: '自行注册',
    type: 'app',
  },
  {
    name: 'PC演示',
    description: 'PC端',
    url: 'https://urlnet.cn',
    account: '自行注册',
    password: '自行注册',
    type: 'desktop',
  },
  {
    name: '管理后台',
    description: '请使用PC电脑端打开',
    url: 'https://www.urlnet.cn/',
    account: '自行注册',
    password: '自行注册',
    type: 'admin',
  },
]



/**
 * Hero区域组件
 */
function HeroSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        aria-hidden="true"
        className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
      >
        <defs>
          <pattern
            x="50%"
            y={-1}
            id="aigc-hero-pattern"
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
        <rect fill="url(#aigc-hero-pattern)" width="100%" height="100%" strokeWidth={0} />
      </svg>
      <div
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu blur-3xl sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          className="aspect-[1108/632] w-[69.25rem] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
        />
      </div>
      <Container className="pt-10 pb-24 sm:pb-32 lg:flex lg:py-40">
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-600/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-600/10">
                最新发布
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                <span>AI企业解决方案</span>
                <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400" />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl">
            艺创AI
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-500 sm:text-xl">
            艺创GC企业解决方案·用AI为企业赋能，引领企业实现数字化、智能化转型。我们提供技术过硬、私有部署、个性化定制、稳定使用的AI解决方案，广泛应用于办公、社交文娱、营销广告等场景。
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Button href="#demo" variant="solid" color="blue">
              立即体验
            </Button>
            <Button href="#features" variant="outline">
              了解更多 <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              alt="AI聊天绘画系统界面"
              src="/images/screenshots/ai-chat-painting-interface.svg"
              width={800}
              height={600}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * 核心特性展示组件
 */
function CoreFeaturesSection() {
  return (
    <section id="features" className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">核心优势</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            技术过硬，私有部署
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            个性化定制，稳定使用。全面支持各个终端，数据同步
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {coreFeatures.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-600" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

/**
 * AI产品展示组件
 */
function AIProductsSection() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">AI解决方案</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            ChatAI智能聊天系统
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            艺创AI企业解决方案，AI智聊系统AI绘画系统的AI解决方案，快速搭建，多端支持
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {aiProducts.map((product) => (
              <div key={product.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <product.icon aria-hidden="true" className="size-5 flex-none text-indigo-600" />
                  {product.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{product.description}</p>
                  <div className="mt-6">
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((feature) => (
                        <span
                          key={feature}
                          className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-xs font-medium text-indigo-700 ring-1 ring-inset ring-indigo-700/10"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

/**
 * 产品终端展示组件
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
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {productTerminals.map((terminal) => (
              <div key={terminal.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <terminal.icon aria-hidden="true" className="size-5 flex-none text-indigo-600" />
                  {terminal.name}
                  <span
                    className={`ml-auto inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                      terminal.status === '已上线'
                        ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-600/20'
                        : 'bg-yellow-50 text-yellow-700 ring-1 ring-inset ring-yellow-600/20'
                    }`}
                  >
                    {terminal.status}
                  </span>
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{terminal.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

/**
 * 产品功能特色组件
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
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            {productFeatures.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-600" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

/**
 * 系统演示组件
 */
function SystemDemoSection() {
  return (
    <section id="demo" className="bg-gray-50 py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">系统演示</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
            立即体验AI系统
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            PC请在浏览器中打开，移动端微信扫码查看
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3">
            {systemDemos.map((demo) => (
              <div
                key={demo.name}
                className="relative flex flex-col rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200"
              >
                <h3 className="text-lg font-semibold leading-8 text-gray-900">{demo.name}</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">{demo.description}</p>
                {demo.url && (
                  <div className="mt-6">
                    <p className="text-sm font-medium text-gray-900">访问地址：</p>
                    <a
                      href={demo.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-indigo-600 hover:text-indigo-500"
                    >
                      {demo.url}
                    </a>
                  </div>
                )}
                {demo.account && (
                  <div className="mt-4 space-y-2">
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">账号：</span>{demo.account}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">密码：</span>{demo.password}
                    </p>
                  </div>
                )}
                <div className="mt-6">
                  <Button
                    href={demo.url}
                    variant="outline"
                    className="w-full"
                  >
                    立即体验
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}



/**
 * CTA组件
 */
function CTASection() {
  return (
    <section className="bg-indigo-600">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            开始您的AI之旅
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
            联系我们，获取专属的AI解决方案，让AI为您的企业赋能
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button href="#contact" variant="solid" color="white">
              立即咨询
            </Button>
            <Button href="#demo" variant="outline" color="white">
              查看演示 <span aria-hidden="true">→</span>
            </Button>
          </div>
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
        <CoreFeaturesSection />
        <AIProductsSection />
        <ProductTerminalsSection />
        <ProductFeaturesSection />
        <SystemDemoSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}

/**
 * 页面元数据
 */
export const metadata = {
  title: '艺创AI - AI企业解决方案 | TaxPal',
  description: '艺创AI企业解决方案，用AI为企业赋能，引领企业实现数字化、智能化转型。提供技术过硬、私有部署、个性化定制、稳定使用的AI解决方案。',
}
