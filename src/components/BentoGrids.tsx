import Image from 'next/image'

/**
 * BentoGrids组件 - 展示产品特性的网格布局
 * 使用Bento Grid设计模式展示不同的产品功能和特性
 * @returns {JSX.Element} BentoGrids组件
 */
export default function BentoGrids() {
  return (
    <div className="bg-white py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm/6 sm:text-base/7 font-semibold text-indigo-600">更快部署</h2>
        <p className="mt-2 max-w-lg text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-pretty text-gray-950">
          部署应用所需的一切
        </p>
        <div className="mt-8 sm:mt-12 lg:mt-16 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative md:col-span-1 lg:col-span-3">
            <div className="absolute inset-0 bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="h-48 sm:h-64 md:h-56 lg:h-80 bg-gradient-to-br from-indigo-50 to-indigo-100 relative overflow-hidden">
                <Image
                  src="/images/screenshots/solution-1.png"
                  alt="解决方案1"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white">
                  <div className="text-sm sm:text-base lg:text-lg font-medium">10亿+ 微信及QQ用户</div>
                </div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <div className="text-xs sm:text-sm opacity-80">庞大用户基础</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-10 pt-3 sm:pt-4">
                <h3 className="text-xs sm:text-sm/4 font-semibold text-indigo-600">性能</h3>
                <p className="mt-1 sm:mt-2 text-base sm:text-lg font-medium tracking-tight text-gray-950">闪电般的构建速度</p>
                <p className="mt-1 sm:mt-2 max-w-lg text-xs sm:text-sm/6 text-gray-600">
                  通过优化的构建流程和先进的缓存技术，确保每次部署都能达到最快的速度。
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 shadow-sm outline outline-black/5" />
          </div>
          <div className="relative md:col-span-1 lg:col-span-3">
            <div className="absolute inset-0 bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="h-48 sm:h-64 md:h-56 lg:h-80 bg-gradient-to-br from-green-50 to-green-100 relative overflow-hidden">
                <Image
                  src="/images/screenshots/solution-5.png"
                  alt="解决方案5"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white">
                  <div className="text-sm sm:text-base lg:text-lg font-medium">3200+ 全球CDN节点</div>
                </div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <div className="text-xs sm:text-sm opacity-80">全球网络覆盖</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-10 pt-3 sm:pt-4">
                <h3 className="text-xs sm:text-sm/4 font-semibold text-indigo-600">发布</h3>
                <p className="mt-1 sm:mt-2 text-base sm:text-lg font-medium tracking-tight text-gray-950">推送即部署</p>
                <p className="mt-1 sm:mt-2 max-w-lg text-xs sm:text-sm/6 text-gray-600">
                  简单的代码推送即可触发自动化部署流程，让您专注于开发而不是运维。
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 shadow-sm outline outline-black/5" />
          </div>
          <div className="relative md:col-span-1 lg:col-span-2">
            <div className="absolute inset-0 bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="h-48 sm:h-64 md:h-56 lg:h-80 bg-gradient-to-br from-blue-50 to-blue-100 relative overflow-hidden">
                <Image
                  src="/images/screenshots/solution-1.png"
                  alt="解决方案1"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white">
                  <div className="text-sm sm:text-base lg:text-lg font-medium">24/7 全天候提供服务</div>
                </div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <div className="text-xs sm:text-sm opacity-80">专业技术支持</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-10 pt-3 sm:pt-4">
                <h3 className="text-xs sm:text-sm/4 font-semibold text-indigo-600">速度</h3>
                <p className="mt-1 sm:mt-2 text-base sm:text-lg font-medium tracking-tight text-gray-950">为专业用户打造</p>
                <p className="mt-1 sm:mt-2 max-w-lg text-xs sm:text-sm/6 text-gray-600">
                  强大的性能优化工具，满足专业开发者的高要求。
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 shadow-sm outline outline-black/5" />
          </div>
          <div className="relative md:col-span-1 lg:col-span-2">
            <div className="absolute inset-0 bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="h-48 sm:h-64 md:h-56 lg:h-80 bg-gradient-to-br from-purple-50 to-purple-100 relative overflow-hidden">
                <Image
                  src="/images/screenshots/solution-2.png"
                  alt="解决方案2"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white">
                  <div className="text-sm sm:text-base lg:text-lg font-medium">经多行业证实的技术</div>
                </div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <div className="text-xs sm:text-sm opacity-80">成熟稳定方案</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-10 pt-3 sm:pt-4">
                <h3 className="text-xs sm:text-sm/4 font-semibold text-indigo-600">集成</h3>
                <p className="mt-1 sm:mt-2 text-base sm:text-lg font-medium tracking-tight text-gray-950">连接您喜爱的工具</p>
                <p className="mt-1 sm:mt-2 max-w-lg text-xs sm:text-sm/6 text-gray-600">
                  无缝对接各类开发工具，打造顺畅的开发体验。
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 shadow-sm outline outline-black/5" />
          </div>
          <div className="relative md:col-span-1 lg:col-span-2">
            <div className="absolute inset-0 bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden">
              <div className="h-48 sm:h-64 md:h-56 lg:h-80 bg-gradient-to-br from-orange-50 to-orange-100 relative overflow-hidden">
                <Image
                  src="/images/screenshots/catsections-bg.jpg"
                  alt="分类背景"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white">
                  <div className="text-sm sm:text-base lg:text-lg font-medium">专业团队技术解决方案</div>
                </div>
                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <div className="text-xs sm:text-sm opacity-80">全方位服务</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-10 pt-3 sm:pt-4">
                <h3 className="text-xs sm:text-sm/4 font-semibold text-indigo-600">分析</h3>
                <p className="mt-1 sm:mt-2 text-base sm:text-lg font-medium tracking-tight text-gray-950">深入了解您的数据</p>
                <p className="mt-1 sm:mt-2 max-w-lg text-xs sm:text-sm/6 text-gray-600">
                  强大的数据分析工具，帮助您从数据中获得有价值的洞察。
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 shadow-sm outline outline-black/5" />
          </div>
        </div>
      </div>
    </div>
  )
}
