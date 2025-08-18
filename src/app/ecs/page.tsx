import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CpuChipIcon, ChartBarIcon, DocumentTextIcon, ChevronRightIcon, CogIcon, ShieldCheckIcon, GlobeAltIcon } from '@heroicons/react/20/solid'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import ProductGrid from '@/components/Products '
import screenshotExpenses from '@/images/screenshots/inventory.png'
import screenshotPayroll from '@/images/screenshots/inventory.png'
import screenshotReporting from '@/images/screenshots/inventory.png'
// 保留页面其他部分需要的图片导入，BentoGrids 部分已替换为模拟界面
import transistorLogo from '@/images/logos/transistor.svg'
import mirageLogo from '@/images/logos/mirage.svg'
import tupleLogo from '@/images/logos/tuple.svg'
import statickitLogo from '@/images/logos/statickit.svg'
import stamaticLogo from '@/images/logos/statamic.svg'

export const metadata: Metadata = {
  title: 'ECS 云计算服务',
  description:
    '体验 优刻云计算的 ECS 云计算服务，为您的业务提供弹性、安全、高性能的云端计算解决方案。',
}

/**
 * ECS 云计算服务的核心特性配置
 */
const ecsFeatures = [
  {
    name: '弹性伸缩',
    description:
      '根据业务需求自动调整计算资源，支持秒级扩容和缩容，确保应用性能的同时优化成本控制。',
    icon: ChartBarIcon,
  },
  {
    name: '高可用架构',
    description: '多可用区部署，99.95% 的服务可用性保障，自动故障转移和负载均衡，确保业务连续性。',
    icon: DocumentTextIcon,
  },
  {
    name: '安全防护',
    description: '企业级安全防护体系，包括网络隔离、访问控制、数据加密和安全审计，全方位保护您的数据安全。',
    icon: LockClosedIcon,
  },
]

/**
 * ECS 特性展示组件
 * 基于 Feature Sections 设计，展示 ECS 云计算服务的核心特性
 * @returns JSX.Element
 */
function ECSFeaturesSection() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1800px] px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-blue-600">更快部署</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                更优的工作流程
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
                优刻云计算ECS 云计算服务提供完整的云端解决方案，从自动化部署到安全防护，
                让您的业务在云端运行得更加高效和安全。
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {ecsFeatures.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon aria-hidden="true" className="absolute top-1 left-1 size-5 text-blue-600" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={screenshotExpenses}
            alt="ECS 云计算服务界面截图"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
          />
        </div>
      </div>
    </div>
  )
}

/**
 * ECS 云计算服务页面主组件
 * 整合了 Hero Sections、Feature Sections 和 BentoGrids 的设计元素
 * @returns JSX.Element
 */
export default function ECSPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero 区域 - 基于 Tailwind UI Hero Sections 设计 */}
        <div className="relative isolate overflow-hidden bg-white">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200"
          >
            <defs>
              <pattern
                x="50%"
                y={-1}
                id="ecs-hero-pattern"
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
            <rect fill="url(#ecs-hero-pattern)" width="100%" height="100%" strokeWidth={0} />
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
              className="aspect-1108/632 w-277 bg-gradient-to-r from-[#60a5fa] to-[#3b82f6] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-[1800px] px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
            <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
              <div className="mt-24 sm:mt-32 lg:mt-16">
                <Link href="#" className="inline-flex space-x-6">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-sm/6 font-semibold text-blue-600 ring-1 ring-blue-600/20 ring-inset">
                    最新发布
                  </span>
                  <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600">
                    <span>ECS 2.0 正式上线</span>
                    <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400" />
                  </span>
                </Link>
              </div>
              <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
                ECS 云计算服务
                <span className="block text-blue-600">重新定义云端计算</span>
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                体验下一代云计算服务，让弹性计算为您的业务发展提供强大支持。
                从基础设施管理到应用部署，ECS 让云端计算变得前所未有的简单。
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button
                  href="/register"
                  className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                >
                  开始体验 ECS
                </Button>
                <Link href="#ecs-features" className="text-sm/6 font-semibold text-gray-900">
                  了解更多特性 <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
            <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
              <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                <Image
                  src={screenshotReporting}
                  alt="ECS 云计算管理界面截图"
                  width={2432}
                  height={1442}
                  className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ECS 特性展示区域 */}
        <div id="ecs-features">
          <ECSFeaturesSection />
        </div>

        {/* 详细功能介绍区域 */}
        <div className="overflow-hidden bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-screen-2xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
              <div className="lg:ml-auto lg:pt-4 lg:pl-4">
                <div className="lg:max-w-lg">
                  <h2 className="text-base/7 font-semibold text-blue-600">智能运维</h2>
                  <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    专业级云端管理
                  </p>
                  <p className="mt-6 text-lg/8 text-gray-600">
                    ECS 提供企业级云计算管理平台，集成智能监控、自动化运维和安全防护，
                    让您的云端基础设施管理变得简单高效。
                  </p>
                  <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <ServerIcon aria-hidden="true" className="absolute top-1 left-1 size-5 text-blue-600" />
                        云服务器管理
                      </dt>{' '}
                      <dd className="inline">统一管理多台云服务器，支持批量操作和自动化配置，提升运维效率。</dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <CpuChipIcon aria-hidden="true" className="absolute top-1 left-1 size-5 text-blue-600" />
                        性能优化
                      </dt>{' '}
                      <dd className="inline">智能分析系统性能瓶颈，提供优化建议和自动调优方案。</dd>
                    </div>
                    <div className="relative pl-9">
                      <dt className="inline font-semibold text-gray-900">
                        <CloudArrowUpIcon aria-hidden="true" className="absolute top-1 left-1 size-5 text-blue-600" />
                        数据备份
                      </dt>{' '}
                      <dd className="inline">自动化数据备份和恢复，确保业务数据安全可靠。</dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="flex items-start justify-end lg:order-first">
                <Image
                  src={screenshotPayroll}
                  alt="ECS 云服务器管理界面截图"
                  width={2432}
                  height={1442}
                  className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* BentoGrids 风格的服务全景展示 */}
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-2xl px-6 lg:max-w-[1800px] lg:px-8">
            <h2 className="text-base/7 font-semibold text-blue-600">全面覆盖</h2>
            <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
              ECS 云计算服务的完整解决方案
            </p>
            <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
              <div className="relative lg:col-span-3">
                <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
                  {/* 性能监控模拟界面 */}
                  <div className="h-80 bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                      <ChartBarIcon className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600 w-12">CPU</span>
                          <div className="h-1.5 w-16 bg-gray-200 rounded-full">
                            <div className="h-1.5 w-10 bg-blue-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-700">65%</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600 w-12">内存</span>
                          <div className="h-1.5 w-16 bg-gray-200 rounded-full">
                            <div className="h-1.5 w-7 bg-green-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-700">45%</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-600 w-12">磁盘</span>
                          <div className="h-1.5 w-16 bg-gray-200 rounded-full">
                            <div className="h-1.5 w-5 bg-yellow-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-700">32%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-blue-600">性能监控</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">实时性能分析</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      全方位监控云服务器性能指标，包括 CPU、内存、磁盘和网络使用情况，提供详细的性能分析报告。
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
              </div>
              <div className="relative lg:col-span-3">
                <div className="absolute inset-0 rounded-lg bg-white lg:rounded-tr-4xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
                  {/* 自动部署模拟界面 */}
                  <div className="h-80 bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                      <CogIcon className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 text-blue-600 rounded-full bg-blue-600"></div>
                          <span className="text-sm text-gray-700">代码提交</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 text-blue-600 rounded-full bg-blue-600"></div>
                          <span className="text-sm text-gray-700">构建中</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-2 h-2 text-blue-600 rounded-full bg-blue-600"></div>
                          <span className="text-sm text-gray-500">等待部署</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-blue-600">自动部署</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">一键发布上线</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      支持 CI/CD 流水线，从代码提交到生产环境部署全程自动化，大幅提升开发效率和部署质量。
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-tr-4xl" />
              </div>
              <div className="relative lg:col-span-2">
                <div className="absolute inset-0 rounded-lg bg-white lg:rounded-bl-4xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
                  {/* 弹性伸缩模拟界面 */}
                  <div className="h-80 bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                      <ServerIcon className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                      <div className="space-y-4">
                        <div className="flex items-end justify-center space-x-1">
                          <div className="w-3 h-4 bg-blue-400 rounded-sm"></div>
                          <div className="w-3 h-6 bg-blue-500 rounded-sm"></div>
                          <div className="w-3 h-4 bg-blue-400 rounded-sm"></div>
                          <div className="w-3 h-3 bg-blue-300 rounded-sm"></div>
                        </div>
                        <div className="text-xs text-gray-600">服务器实例</div>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">负载</span>
                          <div className="w-16 h-1.5 bg-gray-200 rounded-full">
                            <div className="w-3/4 h-1.5 bg-purple-500 rounded-full"></div>
                          </div>
                          <span className="text-sm text-gray-700">75%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-blue-600">弹性伸缩</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">智能资源调配</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      根据业务负载自动调整计算资源，确保应用性能的同时优化成本。
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 lg:rounded-bl-4xl" />
              </div>
              <div className="relative lg:col-span-2">
                <div className="absolute inset-0 rounded-lg bg-white" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
                  {/* 安全防护模拟界面 */}
                  <div className="h-80 bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                      <ShieldCheckIcon className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500"></div>
                          <span className="text-sm text-gray-700">防火墙</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500"></div>
                          <span className="text-sm text-gray-700">DDoS 防护</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-500"></div>
                          <span className="text-sm text-gray-700">数据加密</span>
                        </div>
                        <div className="mt-4 px-3 py-1 bg-green-100 rounded">
                          <span className="text-xs text-green-700">状态: 正常</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-blue-600">安全防护</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">企业级安全保障</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      多层安全防护体系，包括网络隔离、访问控制和数据加密，全方位保护您的业务安全。
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5" />
              </div>
              <div className="relative lg:col-span-2">
                <div className="absolute inset-0 rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-br-4xl" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
                  {/* 全球网络模拟界面 */}
                  <div className="h-80 bg-gray-50 flex items-center justify-center">
                    <div className="text-center">
                      <GlobeAltIcon className="h-12 w-12 text-blue-600 mx-auto mb-6" />
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-2 max-w-20 mx-auto">
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        </div>
                        <div className="text-xs text-gray-600">全球节点</div>
                        <div className="flex items-center space-x-2">
                           <span className="text-sm text-gray-600">延迟</span>
                           <span className="text-sm text-green-600">&lt; 50ms</span>
                         </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-10 pt-4">
                    <h3 className="text-sm/4 font-semibold text-blue-600">全球网络</h3>
                    <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">全球分布式 CDN</p>
                    <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                      覆盖全球的高速网络节点，确保用户无论身在何处都能享受极速的访问体验。
                    </p>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-br-4xl" />
              </div>
            </div>
          </div>
        </div>
     </main>
      <Footer />
    </>
  )
}
