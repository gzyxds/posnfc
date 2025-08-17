export default function BentoGrids() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        <h2 className="text-base/7 font-semibold text-indigo-600">更快部署</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-gray-950 sm:text-5xl">
          部署应用所需的一切
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden">
              <img
                alt=""
                src="/plus-assets/img/component-images/bento-01-performance.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">性能</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">闪电般的构建速度</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  通过优化的构建流程和先进的缓存技术，确保每次部署都能达到最快的速度。
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden">
              <img
                alt=""
                src="/plus-assets/img/component-images/bento-01-releases.png"
                className="h-80 object-cover object-left lg:object-right"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">发布</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">推送即部署</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  简单的代码推送即可触发自动化部署流程，让您专注于开发而不是运维。
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden">
              <img
                alt=""
                src="/plus-assets/img/component-images/bento-01-speed.png"
                className="h-80 object-cover object-left"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">速度</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">为专业用户打造</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  强大的性能优化工具，满足专业开发者的高要求。
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden">
              <img
                alt=""
                src="/plus-assets/img/component-images/bento-01-integrations.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">集成</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">连接您喜爱的工具</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  无缝对接各类开发工具，打造顺畅的开发体验。
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 shadow-sm outline outline-black/5" />
          </div>
          <div className="relative lg:col-span-2">
            <div className="absolute inset-0 bg-white" />
            <div className="relative flex h-full flex-col overflow-hidden">
              <img
                alt=""
                src="/plus-assets/img/component-images/bento-01-network.png"
                className="h-80 object-cover"
              />
              <div className="p-10 pt-4">
                <h3 className="text-sm/4 font-semibold text-indigo-600">网络</h3>
                <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">全球分布式CDN</p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                  依托全球节点网络，确保内容快速分发到世界各地。
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
