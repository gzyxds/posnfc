import { ChevronRightIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-50">
      <div
        aria-hidden="true"
        className="absolute top-10 left-[calc(50%-4rem)] -z-10 transform-gpu sm:left-[calc(50%-18rem)] lg:top-[calc(50%-30rem)] lg:left-48 xl:left-[calc(50%-24rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
          }}
          className="aspect-1108/632 w-277 bg-linear-to-r from-[#80caff] to-[#4f46e5] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-[1800px] px-4 pt-10 pb-24 sm:px-6 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <div className="mx-auto max-w-2xl shrink-0 lg:mx-0 lg:pt-8">
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="#" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-sm/6 font-semibold text-indigo-600 ring-1 ring-indigo-600/20 ring-inset">
                最新动态
              </span>
              <span className="inline-flex items-center space-x-2 text-sm/6 font-medium text-gray-600">
                <span>刚发布 v1.0</span>
                <ChevronRightIcon
                  aria-hidden="true"
                  className="size-5 text-gray-400"
                />
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl">
            安全可靠的POS机办理服务
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            为您提供银盛、拉卡拉、中付、乐刷等银联正规POS机办理服务
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <a
              href="#"
              className="rounded-none bg-indigo-600 px-8 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              立即申请
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              了解更多 <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:mt-0 lg:mr-0 lg:ml-10 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            {/* POS机模拟界面 */}
            <div className="w-304 rounded-md bg-gradient-to-br from-blue-50 to-indigo-100 p-8 shadow-xl ring-1 ring-gray-900/10">
              {/* POS机集群 */}
              <div className="mb-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">
                  设备网络
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[1, 2, 3].map((pos) => (
                    <div
                      key={pos}
                      className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm"
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <div className="h-3 w-3 rounded-full bg-green-400"></div>
                        <span className="text-xs text-gray-500">
                          终端 {pos}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 rounded bg-gray-200">
                          <div
                            className={`h-2 rounded bg-blue-500`}
                            style={{ width: `${Math.random() * 80 + 20}%` }}
                          ></div>
                        </div>
                        <div className="text-xs text-gray-600">
                          使用率: {Math.floor(Math.random() * 80 + 20)}%
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 数据流动 */}
              <div className="mb-6">
                <h3 className="mb-4 text-lg font-semibold text-gray-800">
                  交易流程
                </h3>
                <div className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-blue-500">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                    </div>
                    <div className="mx-4 flex-1">
                      <div className="flex items-center">
                        <div className="h-1 flex-1 animate-pulse rounded bg-gradient-to-r from-blue-500 to-green-500"></div>
                        <div className="mx-2 text-sm text-gray-600">传输中</div>
                        <div className="h-1 flex-1 animate-pulse rounded bg-gradient-to-r from-green-500 to-purple-500"></div>
                      </div>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-500">
                      <svg
                        className="h-8 w-8 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* 实时监控 */}
              <div>
                <h3 className="mb-4 text-lg font-semibold text-gray-800">
                  系统状态
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="mb-1 text-sm text-gray-600">响应时间</div>
                    <div className="text-2xl font-bold text-green-600">
                      0.25秒
                    </div>
                  </div>
                  <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="mb-1 text-sm text-gray-600">活跃终端</div>
                    <div className="text-2xl font-bold text-blue-600">
                     12585,126
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
