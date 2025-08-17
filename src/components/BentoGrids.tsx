import Image from 'next/image'

/**
 * BentoGrids组件 - 展示产品特性的网格布局
 * 使用Bento Grid设计模式展示不同的产品功能和特性
 * @returns {JSX.Element} BentoGrids组件
 */
export default function BentoGrids() {
  return (
    <div className="bg-white py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-[1800px] px-3 sm:px-4 md:px-6 lg:px-8">
        <h2 className="text-xs/6 sm:text-sm/6 md:text-base/7 font-semibold text-indigo-600">更快部署</h2>
        <p className="mt-1 sm:mt-2 max-w-lg text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-pretty text-gray-950">
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
                {/* 核心功能列表 - 位于图片内部右下角 */}
                <div className="absolute right-3 bottom-3 sm:right-4 sm:bottom-4 text-white space-y-1">
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    增量构建技术
                  </div>
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    智能缓存策略
                  </div>
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    热重载预览
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <div className="text-sm sm:text-base font-medium opacity-90">庞大用户基础</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 pt-4 sm:pt-6">
                <h3 className="text-sm sm:text-base font-semibold text-indigo-600 mb-2">性能</h3>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-950 mb-3 sm:mb-4">闪电般的构建速度</p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  采用业界领先的增量构建技术和智能缓存策略，构建速度提升90%以上。支持热重载和实时预览，让您的开发效率倍增，告别漫长的等待时间。
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
                {/* 核心功能列表 - 位于图片内部右下角 */}
                <div className="absolute right-3 bottom-3 sm:right-4 sm:bottom-4 text-white space-y-1">
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    CI/CD流水线
                  </div>
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    蓝绿部署
                  </div>
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    零停机发布
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <div className="text-sm sm:text-base font-medium opacity-90">全球网络覆盖</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 pt-4 sm:pt-6">
                <h3 className="text-sm sm:text-base font-semibold text-indigo-600 mb-2">发布</h3>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-950 mb-3 sm:mb-4">推送即部署</p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  Git推送后自动触发CI/CD流水线，支持蓝绿部署、金丝雀发布等多种策略。内置回滚机制和健康检查，确保每次发布都安全可靠，零停机时间。
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
                {/* 核心功能列表 - 位于图片内部右下角 */}
                <div className="absolute right-3 bottom-3 sm:right-4 sm:bottom-4 text-white space-y-1">
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    代码分割优化
                  </div>
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    Tree Shaking
                  </div>
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    自定义配置
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <div className="text-sm sm:text-base font-medium opacity-90">专业技术支持</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 pt-4 sm:pt-6">
                <h3 className="text-sm sm:text-base font-semibold text-indigo-600 mb-2">速度</h3>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-950 mb-3 sm:mb-4">为专业用户打造</p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  提供代码分割、Tree Shaking、压缩优化等专业级性能调优工具。支持自定义Webpack配置，满足复杂项目需求，让您的应用始终保持最佳性能。
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
                {/* 核心功能列表 - 位于图片内部右下角 */}
                <div className="absolute right-3 bottom-3 sm:right-4 sm:bottom-4 text-white space-y-1">
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    代码仓库集成
                  </div>
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    协作工具连接
                  </div>
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    自定义工作流
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <div className="text-sm sm:text-base font-medium opacity-90">成熟稳定方案</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 pt-4 sm:pt-6">
                <h3 className="text-sm sm:text-base font-semibold text-indigo-600 mb-2">集成</h3>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-950 mb-3 sm:mb-4">连接您喜爱的工具</p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  支持GitHub、GitLab、Bitbucket等主流代码仓库，集成Slack、钉钉等协作工具。提供丰富的API和Webhook，轻松构建自定义工作流。
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
                {/* 核心功能列表 - 位于图片内部右下角 */}
                <div className="absolute right-3 bottom-3 sm:right-4 sm:bottom-4 text-white space-y-1">
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    实时监控
                  </div>
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    可视化仪表板
                  </div>
                  <div className="flex items-center text-xs opacity-90">
                    <div className="mr-1.5 h-1 w-1 rounded-full bg-white" />
                    趋势分析
                  </div>
                </div>

                <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white">
                  <div className="text-sm sm:text-base font-medium opacity-90">全方位服务</div>
                </div>
              </div>
              <div className="p-4 sm:p-6 lg:p-8 pt-4 sm:pt-6">
                <h3 className="text-sm sm:text-base font-semibold text-indigo-600 mb-2">分析</h3>
                <p className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-gray-950 mb-3 sm:mb-4">深入了解您的数据</p>
                <p className="text-sm sm:text-base leading-relaxed text-gray-600">
                  实时监控应用性能、用户行为和业务指标。提供可视化仪表板、智能告警和趋势分析，助您做出数据驱动的决策，持续优化产品体验。
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
