import {
  ArrowPathIcon,
  ChevronRightIcon,
  CloudArrowUpIcon,
  Cog6ToothIcon,
  FingerPrintIcon,
  LockClosedIcon,
  ServerIcon,
} from '@heroicons/react/20/solid'
import { BoltIcon, CalendarDaysIcon, UsersIcon } from '@heroicons/react/24/outline'
import type { Metadata } from 'next'

// 布局组件
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'

/**
 * 电商云页面的元数据配置
 * 用于SEO优化和社交媒体分享
 */
export const metadata: Metadata = {
  title: '电商云_电商vps_电商云主机_跨境电商云服务器_优刻云',
  description: '由优刻云打造的跨境电商专用云主机，专为跨境卖家提供纯净静态IP，使用环境完全隔离，有效解决跨境电商多店铺运营的防关联难题，安全、快速、有保障。平台提供30多个海内外线路，将各个电商平台的使用场景一网打尽',
  keywords: ['电商云,电商vps,电商云主机,跨境电商云服务器'],
  openGraph: {
    title: '电商云_电商vps_电商云主机_跨境电商云服务器_优刻云',
    description: '由优刻云打造的跨境电商专用云主机，专为跨境卖家提供纯净静态IP，使用环境完全隔离，有效解决跨境电商多店铺运营的防关联难题，安全、快速、有保障。平台提供30多个海内外线路，将各个电商平台的使用场景一网打尽',
    type: 'website',
  },
}

const primaryFeatures = [
  {
    name: '纯净公网IP',
    description:
      '提供固定、独立纯净公网IP，有效防关联，确保账号注册、运营安全。',
    href: '#',
    icon: BoltIcon,
  },
  {
    name: '海外专线加速',
    description:
      '免费赠送加速IP，专线加速，告别卡顿，自建高质量全球节点，出海加速，拒绝卡顿。',
    href: '#',
    icon: UsersIcon,
  },
  {
    name: '指纹浏览器',
    description:
      '内置跨境指纹浏览器，安全，更近一步，免费提供指纹环境。',
    href: '#',
    icon: CalendarDaysIcon,
  },
]
const secondaryFeatures = [
  {
    name: '安全隔离',
    description: '每个云主机都可以独立运行，不会与其他云主机共享资源，从而避免了因其他网站被封禁而影响自己网站的问题。',
    icon: CloudArrowUpIcon,
  },
  {
    name: '全球覆盖',
    description: '电商云提供全球范围的服务覆盖，您可以轻松地选择全球各地的服务器节点，覆盖亚太、欧美、东南亚等地域。',
    icon: LockClosedIcon,
  },
  {
    name: '灵活扩展',
    description: '电商云支持按需升级和降级，可以根据实际需求动态调整配置，提高了云主机的灵活性和适应性。',
    icon: ArrowPathIcon,
  },
  {
    name: '统一管理',
    description: '电商云提供多云平台的统一管理，企业可以更加灵活地调配云资源，满足业务需求。',
    icon: FingerPrintIcon,
  },
  {
    name: '店铺协同管理',
    description: '高效的团队协同管理，多团队多角色权限灵活配置，全面提高团队运营效率50%。',
    icon: Cog6ToothIcon,
  },
  {
    name: '网络流畅',
    description: '针对电商场景，优化网络下行带宽，访问电商平台更流畅。',
    icon: ServerIcon,
  },
]
const stats = [
  { id: 1, name: '跨境安全纯净IP', value: '100,000+' },
  { id: 2, name: '全球城市线路数量', value: '200+' },
  { id: 3, name: '电商平台支持', value: '100+' },
  { id: 4, name: '团队运营效率提升', value: '50%' },
]


/**
 * 电商云页面组件
 * 展示电商云平台的核心功能、特性和统计数据
 * @returns 渲染的电商云页面
 */
export default function EcommercePage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* 页面头部导航 */}
      <Header />

      <main>
        {/* Hero section */}
        <div className="relative isolate overflow-hidden bg-white dark:bg-gray-900">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10"
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
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50 dark:fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#983e3e4c-de6d-4c3f-8d64-b9761d1534cc)" width="100%" height="100%" strokeWidth={0} />
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
              className="aspect-[1108/632] w-[277px] bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            />
          </div>
        </div>
        {/* Hero section */}
        <Container className="pt-10 pb-24 sm:pb-32 lg:flex lg:py-40">
          <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">

            <div className="mt-24 sm:mt-32 lg:mt-16">
              <a href="#" className="inline-flex space-x-6">
                <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-600/20 ring-inset dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-500/25">
                  最新动态
                </span>
                <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600 dark:text-gray-300">
                  <span>全新电商云服务上线</span>
                  <ChevronRightIcon aria-hidden="true" className="size-5 text-gray-400 dark:text-gray-500" />
                </span>
              </a>
            </div>
            <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white">
              电商云 - 助力跨境电商业务
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
              青果云携手腾讯云、阿里云，助力平台卖家拓展跨境电商业务，地域分布全球，提供固定、独立的纯净公网IP。
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                立即购买
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                联系我们 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
            <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
              {/* 电商云管理界面模拟设计 */}
              <div className="w-[400px] rounded-lg bg-white shadow-2xl ring-1 ring-gray-900/10 dark:bg-gray-900 dark:ring-white/10">
                {/* 顶部导航栏 */}
                <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-red-500"></div>
                    <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">电商云控制台</div>
                  <div className="flex items-center space-x-2">
                    <div className="h-6 w-6 rounded-full bg-indigo-600"></div>
                  </div>
                </div>

                {/* 主要内容区域 */}
                <div className="p-4">
                  {/* 状态卡片 */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="rounded-lg bg-green-50 p-3 dark:bg-green-900/20">
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
                        <span className="text-xs font-medium text-green-800 dark:text-green-300">在线</span>
                      </div>
                      <div className="mt-1 text-lg font-semibold text-green-900 dark:text-green-100">12</div>
                      <div className="text-xs text-green-600 dark:text-green-400">服务器</div>
                    </div>
                    <div className="rounded-lg bg-blue-50 p-3 dark:bg-blue-900/20">
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-blue-500 mr-2"></div>
                        <span className="text-xs font-medium text-blue-800 dark:text-blue-300">活跃</span>
                      </div>
                      <div className="mt-1 text-lg font-semibold text-blue-900 dark:text-blue-100">8</div>
                      <div className="text-xs text-blue-600 dark:text-blue-400">店铺</div>
                    </div>
                  </div>

                  {/* 地域分布 */}
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2 dark:text-white">地域分布</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600 dark:text-gray-400">美国东部</span>
                        <div className="flex items-center">
                          <div className="h-1.5 w-16 bg-gray-200 rounded-full mr-2 dark:bg-gray-700">
                            <div className="h-1.5 w-12 bg-indigo-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-900 dark:text-white">75%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600 dark:text-gray-400">欧洲</span>
                        <div className="flex items-center">
                          <div className="h-1.5 w-16 bg-gray-200 rounded-full mr-2 dark:bg-gray-700">
                            <div className="h-1.5 w-8 bg-green-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-900 dark:text-white">50%</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-600 dark:text-gray-400">亚太</span>
                        <div className="flex items-center">
                          <div className="h-1.5 w-16 bg-gray-200 rounded-full mr-2 dark:bg-gray-700">
                            <div className="h-1.5 w-10 bg-blue-600 rounded-full"></div>
                          </div>
                          <span className="text-xs text-gray-900 dark:text-white">60%</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 实时监控 */}
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-900 mb-2 dark:text-white">实时监控</h3>
                    <div className="h-16 bg-gray-50 rounded-lg p-2 dark:bg-gray-800">
                      <div className="flex items-end justify-between h-full">
                        <div className="w-1 bg-indigo-600 rounded-t" style={{height: '60%'}}></div>
                        <div className="w-1 bg-indigo-600 rounded-t" style={{height: '80%'}}></div>
                        <div className="w-1 bg-indigo-600 rounded-t" style={{height: '40%'}}></div>
                        <div className="w-1 bg-indigo-600 rounded-t" style={{height: '90%'}}></div>
                        <div className="w-1 bg-indigo-600 rounded-t" style={{height: '70%'}}></div>
                        <div className="w-1 bg-indigo-600 rounded-t" style={{height: '50%'}}></div>
                        <div className="w-1 bg-indigo-600 rounded-t" style={{height: '85%'}}></div>
                        <div className="w-1 bg-indigo-600 rounded-t" style={{height: '65%'}}></div>
                      </div>
                    </div>
                    <div className="flex justify-between text-xs text-gray-500 mt-1 dark:text-gray-400">
                      <span>CPU</span>
                      <span>内存</span>
                      <span>网络</span>
                    </div>
                  </div>

                  {/* 快速操作 */}
                  <div className="grid grid-cols-2 gap-2">
                    <button className="rounded-md bg-indigo-600 px-3 py-2 text-xs font-semibold text-white hover:bg-indigo-500">
                      新建实例
                    </button>
                    <button className="rounded-md border border-gray-300 px-3 py-2 text-xs font-semibold text-gray-900 hover:bg-gray-50 dark:border-gray-600 dark:text-white dark:hover:bg-gray-800">
                      查看详情
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* 商品模块 */}
        <Container className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">热销产品</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
              电商云服务器推荐
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              精选高性能电商云服务器，支持全球多地域部署，为您的电商业务提供稳定可靠的基础设施。
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {/* 福建-福州 产品卡片 */}
            <div className="flex flex-col justify-between bg-white p-8 ring-1 ring-gray-200 xl:p-10 dark:bg-gray-900 dark:ring-gray-800">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg/8 font-semibold text-gray-900 dark:text-white">福建-福州</h3>
                  <p className="bg-indigo-600/10 px-2.5 py-1 text-xs/5 font-semibold text-indigo-600 dark:bg-indigo-400/10 dark:text-indigo-400">
                    入门推荐
                  </p>
                </div>
                <p className="mt-4 text-sm/6 text-gray-600 dark:text-gray-400">
                  1核1G配置，适合小型电商网站和测试环境
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">¥49</span>
                  <span className="text-sm/6 font-semibold text-gray-600 dark:text-gray-400">/月</span>
                </p>
                <ul className="mt-8 space-y-3 text-sm/6 text-gray-600 dark:text-gray-400">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    1核 CPU
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    1GB 内存
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    20GB SSD 硬盘
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    1Mbps 带宽
                  </li>
                </ul>
              </div>
              <button className="mt-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400">
                立即购买
              </button>
            </div>

            {/* 中国香港 产品卡片 */}
            <div className="flex flex-col justify-between bg-white p-8 ring-1 ring-gray-200 xl:p-10 dark:bg-gray-900 dark:ring-gray-800">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg/8 font-semibold text-gray-900 dark:text-white">中国香港</h3>
                  <p className="bg-green-600/10 px-2.5 py-1 text-xs/5 font-semibold text-green-600 dark:bg-green-400/10 dark:text-green-400">
                    热门选择
                  </p>
                </div>
                <p className="mt-4 text-sm/6 text-gray-600 dark:text-gray-400">
                  2核2G配置，适合中小型电商平台和跨境业务
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">¥89</span>
                  <span className="text-sm/6 font-semibold text-gray-600 dark:text-gray-400">/月</span>
                </p>
                <ul className="mt-8 space-y-3 text-sm/6 text-gray-600 dark:text-gray-400">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    2核 CPU
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    2GB 内存
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    40GB SSD 硬盘
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    3Mbps 带宽
                  </li>
                </ul>
              </div>
              <button className="mt-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400">
                立即购买
              </button>
            </div>

            {/* 美国-加利福尼亚 产品卡片 */}
            <div className="flex flex-col justify-between bg-white p-8 ring-1 ring-gray-200 xl:p-10 dark:bg-gray-900 dark:ring-gray-800">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg/8 font-semibold text-gray-900 dark:text-white">美国-加州</h3>
                  <p className="bg-blue-600/10 px-2.5 py-1 text-xs/5 font-semibold text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                    海外专线
                  </p>
                </div>
                <p className="mt-4 text-sm/6 text-gray-600 dark:text-gray-400">
                  2核2G配置，专为北美市场电商业务优化
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">¥129</span>
                  <span className="text-sm/6 font-semibold text-gray-600 dark:text-gray-400">/月</span>
                </p>
                <ul className="mt-8 space-y-3 text-sm/6 text-gray-600 dark:text-gray-400">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    2核 CPU
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    2GB 内存
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    40GB SSD 硬盘
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    5Mbps 带宽
                  </li>
                </ul>
              </div>
              <button className="mt-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400">
                立即购买
              </button>
            </div>

            {/* 德国-法兰克福 产品卡片 */}
            <div className="flex flex-col justify-between bg-white p-8 ring-1 ring-gray-200 xl:p-10 dark:bg-gray-900 dark:ring-gray-800">
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-lg/8 font-semibold text-gray-900 dark:text-white">德国-法兰克福</h3>
                  <p className="bg-purple-600/10 px-2.5 py-1 text-xs/5 font-semibold text-purple-600 dark:bg-purple-400/10 dark:text-purple-400">
                    欧洲节点
                  </p>
                </div>
                <p className="mt-4 text-sm/6 text-gray-600 dark:text-gray-400">
                  2核2G配置，覆盖欧洲市场的最佳选择
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">¥119</span>
                  <span className="text-sm/6 font-semibold text-gray-600 dark:text-gray-400">/月</span>
                </p>
                <ul className="mt-8 space-y-3 text-sm/6 text-gray-600 dark:text-gray-400">
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    2核 CPU
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    2GB 内存
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    40GB SSD 硬盘
                  </li>
                  <li className="flex gap-x-3">
                    <svg className="h-6 w-5 flex-none text-indigo-600 dark:text-indigo-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    5Mbps 带宽
                  </li>
                </ul>
              </div>
              <button className="mt-8 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:hover:bg-indigo-400">
                立即购买
              </button>
            </div>
          </div>

          {/* 产品特色说明 */}
          <div className="mx-auto mt-16 max-w-2xl text-center">
            <p className="text-sm/6 text-gray-600 dark:text-gray-400">
              所有产品均支持弹性扩容、自动备份、7x24小时技术支持
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <a href="#" className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                查看更多配置 <span aria-hidden="true">→</span>
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 hover:text-gray-700 dark:text-white dark:hover:text-gray-300">
                联系销售 <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Container>

        {/* Feature section */}
        <Container className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">丰富线路</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance dark:text-white">
              覆盖亚太、欧美、东南亚等地域
            </p>
            <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
              提供系统化的电商平台防关联解决方案，从系统真实、网络稳定、团队协同等方面入手，致力于提升店铺安全和运营效率。
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {primaryFeatures.map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">
                    <div className="mb-6 flex size-10 items-center justify-center rounded-lg bg-indigo-600 dark:bg-indigo-500">
                      <feature.icon aria-hidden="true" className="size-6 text-white" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base/7 text-gray-600 dark:text-gray-400">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <a
                        href={feature.href}
                        className="text-sm/6 font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                      >
                        了解更多 <span aria-hidden="true">→</span>
                      </a>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Container>

        {/* Feature section */}
        <div className="mt-32 sm:mt-56">
          <Container>
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">方案架构</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl sm:text-balance dark:text-white">
                电商云架构优势
              </p>
              <p className="mt-6 text-lg/8 text-gray-600 dark:text-gray-300">
                我们的解决方案能够帮助您快速拓展全球电商业务，获得更高的业务增长。
              </p>
            </div>
          </Container>
          <div className="relative overflow-hidden pt-16">
            <Container>
              {/* 电商云架构图模拟设计 */}
              <div className="mb-[-12%] rounded-xl bg-white shadow-2xl ring-1 ring-gray-900/10 dark:bg-gray-900 dark:ring-white/10">
                {/* 架构图头部 */}
                <div className="border-b border-gray-200 px-6 py-4 dark:border-gray-700">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">电商云架构拓扑</h3>
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <div className="h-2 w-2 rounded-full bg-green-500"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">健康</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-400">运行中</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 架构图主体 */}
                <div className="p-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* 用户层 */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">用户层</h4>
                      <div className="space-y-3">
                        <div className="rounded-lg border-2 border-dashed border-blue-300 bg-blue-50 p-4 dark:border-blue-600 dark:bg-blue-900/20">
                          <div className="flex items-center space-x-2">
                            <div className="h-3 w-3 rounded-full bg-blue-600"></div>
                            <span className="text-sm font-medium text-blue-900 dark:text-blue-100">全球用户</span>
                          </div>
                          <div className="mt-2 text-xs text-blue-700 dark:text-blue-300">多地域访问</div>
                        </div>
                        <div className="rounded-lg border border-gray-200 bg-gray-50 p-3 dark:border-gray-600 dark:bg-gray-800">
                          <div className="text-xs font-medium text-gray-900 dark:text-white">CDN 加速</div>
                          <div className="mt-1 text-xs text-gray-600 dark:text-gray-400">智能路由</div>
                        </div>
                      </div>
                    </div>

                    {/* 应用层 */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">应用层</h4>
                      <div className="space-y-3">
                        <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-600 dark:bg-green-900/20">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <div className="h-3 w-3 rounded-full bg-green-600"></div>
                              <span className="text-sm font-medium text-green-900 dark:text-green-100">负载均衡</span>
                            </div>
                            <span className="text-xs text-green-700 dark:text-green-300">99.9%</span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="rounded border border-indigo-200 bg-indigo-50 p-2 dark:border-indigo-600 dark:bg-indigo-900/20">
                            <div className="text-xs font-medium text-indigo-900 dark:text-indigo-100">Web 服务</div>
                            <div className="text-xs text-indigo-600 dark:text-indigo-400">实例 x3</div>
                          </div>
                          <div className="rounded border border-purple-200 bg-purple-50 p-2 dark:border-purple-600 dark:bg-purple-900/20">
                            <div className="text-xs font-medium text-purple-900 dark:text-purple-100">API 网关</div>
                            <div className="text-xs text-purple-600 dark:text-purple-400">高可用</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 数据层 */}
                    <div className="space-y-4">
                      <h4 className="text-sm font-medium text-gray-900 dark:text-white">数据层</h4>
                      <div className="space-y-3">
                        <div className="rounded-lg border border-orange-200 bg-orange-50 p-4 dark:border-orange-600 dark:bg-orange-900/20">
                          <div className="flex items-center space-x-2">
                            <div className="h-3 w-3 rounded-full bg-orange-600"></div>
                            <span className="text-sm font-medium text-orange-900 dark:text-orange-100">主数据库</span>
                          </div>
                          <div className="mt-2 text-xs text-orange-700 dark:text-orange-300">MySQL 集群</div>
                        </div>
                        <div className="rounded border border-red-200 bg-red-50 p-3 dark:border-red-600 dark:bg-red-900/20">
                          <div className="text-xs font-medium text-red-900 dark:text-red-100">Redis 缓存</div>
                          <div className="text-xs text-red-600 dark:text-red-400">内存优化</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 连接线和流量指示 */}
                  <div className="mt-8 flex items-center justify-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-1 w-8 bg-gradient-to-r from-blue-500 to-green-500 rounded"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">数据流</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-1 w-8 bg-gradient-to-r from-green-500 to-orange-500 rounded"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">请求路径</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="h-1 w-8 bg-gradient-to-r from-orange-500 to-red-500 rounded"></div>
                      <span className="text-xs text-gray-600 dark:text-gray-400">缓存同步</span>
                    </div>
                  </div>

                  {/* 性能指标 */}
                  <div className="mt-6 grid grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">99.9%</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">可用性</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">&lt;50ms</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">响应时间</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">10K+</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">并发用户</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-gray-900 dark:text-white">24/7</div>
                      <div className="text-xs text-gray-600 dark:text-gray-400">监控</div>
                    </div>
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="relative">
                <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%] dark:from-gray-900" />
              </div>
            </Container>
          </div>
          <Container className="mt-16 sm:mt-20 md:mt-24">
            <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base/7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16 dark:text-gray-400">
              {secondaryFeatures.map((feature) => (
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
          </Container>
        </div>

        {/* Stats */}
        <Container className="mt-32 sm:mt-56">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
            <h2 className="text-base/8 font-semibold text-indigo-600 dark:text-indigo-400">安全高效防关联</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl dark:text-white">
              值得信赖的电商云服务
            </p>
            <p className="mt-6 text-lg/8 text-gray-700 dark:text-gray-300">
              为全球电商卖家提供专业的防关联解决方案，助力业务安全稳定发展。
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-gray-900 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4 dark:text-white">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="flex flex-col gap-y-3 border-l border-gray-900/15 pl-6 dark:border-white/10"
              >
                <dt className="text-sm/6">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </Container>

        {/* CTA section */}
        <div className="relative isolate mt-32 sm:mt-56">
          <svg
            aria-hidden="true"
            className="absolute inset-0 -z-10 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-gray-200 dark:stroke-white/10"
          >
            <defs>
              <pattern
                x="50%"
                y={0}
                id="1d4240dd-898f-445f-932d-e2872fd12de3"
                width={200}
                height={200}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={0} className="overflow-visible fill-gray-50 dark:fill-gray-800/20">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect fill="url(#1d4240dd-898f-445f-932d-e2872fd12de3)" width="100%" height="100%" strokeWidth={0} />
          </svg>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-10 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          >
            <div
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
              className="aspect-[1108/632] w-[277px] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-20"
            />
          </div>
          <Container className="py-32 sm:py-40 text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl dark:text-white">
              提升您的电商业务效率，立即开始使用电商云
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-600 dark:text-gray-300">
              专业的跨境电商解决方案，助力您的业务快速发展，获得更高的收益和更好的用户体验。
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-indigo-500 dark:shadow-none dark:hover:bg-indigo-400 dark:focus-visible:outline-indigo-500"
              >
                立即开始
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                了解更多 <span aria-hidden="true">→</span>
              </a>
            </div>
          </Container>

        {/* FAQ section */}
        <Container className="mt-8 sm:mt-16">
          <div className="py-24 sm:pt-32 lg:py-40">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="lg:col-span-5">
                <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl dark:text-white">
                  常见问题
                </h2>
                <p className="mt-4 text-base/7 text-pretty text-gray-600 dark:text-gray-300">
                  找不到您要的答案？请联系我们的{' '}
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300">
                    客服团队
                  </a>{' '}
                  获取帮助。
                </p>
              </div>
              <div className="mt-10 lg:col-span-7 lg:mt-0">
                <dl className="space-y-10">
                  <div>
                    <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">电商云如何防关联？</dt>
                    <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300">电商云为每一个电商用户新开的云主机都采用了固定、独立的纯净公网IP，保障每一个店铺环境独立安全运营，有效避免账号关联风险。</dd>
                  </div>
                  <div>
                    <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">什么是纯净公网IP？</dt>
                    <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300">电商云自建IP数据库，记录所有IP的使用情况，已使用过的IP将进入封存期，不再使用。确保每个IP都是全新、干净的，没有被其他用户使用过的历史记录。</dd>
                  </div>
                  <div>
                    <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">加速IP如何使用？</dt>
                    <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300">使用加速IP作为连接目标，账号密码不变，即可实现海外加速访问。支持全球多个节点，自动选择最优路径，提升访问速度和稳定性。</dd>
                  </div>
                  <div>
                    <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">电商云支持哪些平台？</dt>
                    <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300">电商云支持Amazon、eBay、Shopify、速卖通、Wish等主流跨境电商平台，以及Facebook、Google等社交媒体和广告平台的安全访问。</dd>
                  </div>
                  <div>
                    <dt className="text-base/7 font-semibold text-gray-900 dark:text-white">如何保证数据安全？</dt>
                    <dd className="mt-2 text-base/7 text-gray-600 dark:text-gray-300">采用企业级加密技术，所有数据传输均通过SSL加密，服务器部署在安全的数据中心，定期备份，确保您的业务数据安全可靠。</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </Container>


        </div>
      </main>

      {/* 页面底部 */}
      <Footer />
    </div>
  )
}
