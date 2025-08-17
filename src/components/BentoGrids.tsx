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
              <div className="h-80 bg-gradient-to-br from-indigo-50 to-indigo-100 flex items-center justify-center">
                <svg className="w-24 h-24 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
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
              <div className="h-80 bg-gradient-to-br from-green-50 to-green-100 flex items-center justify-center">
                <svg className="w-24 h-24 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
              </div>
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
              <div className="h-80 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <svg className="w-24 h-24 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
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
              <div className="h-80 bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                <svg className="w-24 h-24 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a1 1 0 01-1-1V9a1 1 0 011-1h1a2 2 0 100-4H4a1 1 0 01-1-1V4a1 1 0 011-1h3a1 1 0 001-1v-1a2 2 0 114 0z" />
                </svg>
              </div>
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
              <div className="h-80 bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center">
                <svg className="w-24 h-24 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
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
