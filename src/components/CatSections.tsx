/**
 * CatSections 组件 - 立即行动区域
 * 移动端优化的网格式UI，简化布局和交互元素
 * 响应式设计，在不同屏幕尺寸下提供最佳用户体验
 */
export default function CatSections() {
  return (
    <div className="relative bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* 服务卡片网格 - 移动端两行两列优化 */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {/* 联系咨询 */}
          <div className="border border-gray-200 bg-white p-3 transition-shadow duration-200 hover:shadow-md sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg lg:text-xl">
                  专业咨询
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:mt-2 sm:text-sm lg:text-base">
                  专业团队为您提供个性化解决方案
                </p>
              </div>
              <button className="mt-2 inline-flex flex-shrink-0 items-center border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-black transition-colors duration-200 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-4 sm:px-10 sm:py-3 sm:text-base">
                联系我们
              </button>
            </div>
          </div>

          {/* 产品服务 */}
          <div className="border border-gray-200 bg-white p-3 transition-shadow duration-200 hover:shadow-md sm:p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg lg:text-xl">
                  产品服务
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:mt-2 sm:text-sm lg:text-base">
                  完整产品线为您的业务提供全方位支持
                </p>
              </div>
              <button className="mt-2 inline-flex flex-shrink-0 items-center border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-black transition-colors duration-200 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-4 sm:px-10 sm:py-3 sm:text-base">
                了解更多
              </button>
            </div>
          </div>

          {/* 合作伙伴 */}
          <div className="col-span-2 border border-gray-200 bg-white p-3 transition-shadow duration-200 hover:shadow-md sm:col-span-1 sm:p-6 lg:col-span-1">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h3 className="text-base font-semibold text-gray-900 sm:text-lg lg:text-xl">
                  合作伙伴
                </h3>
                <p className="mt-1 text-xs leading-relaxed text-gray-600 sm:mt-2 sm:text-sm lg:text-base">
                  与全球领先技术公司建立战略合作关系
                </p>
              </div>
              <button className="mt-2 inline-flex flex-shrink-0 items-center border border-gray-300 bg-white px-4 py-2 text-xs font-medium text-black transition-colors duration-200 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-4 sm:px-10 sm:py-3 sm:text-base">
                了解详情
              </button>
            </div>
          </div>

          {/* 免费开始体验 - 移动端占据整行 */}
          <div className="col-span-2 border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:col-span-2 sm:p-6 lg:col-span-3 lg:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h2 className="mb-2 text-lg font-bold text-gray-900 sm:mb-3 sm:text-xl lg:text-2xl">
                  免费开始体验
                </h2>
                <p className="text-xs leading-relaxed text-gray-600 sm:text-sm lg:text-base">
                  无需任何前期投入，立即体验云计算的强大功能
                </p>
              </div>
              <button
                className="mt-3 inline-flex flex-shrink-0 items-center border border-transparent px-6 py-2 text-xs font-medium text-white shadow-sm transition-colors duration-200 hover:opacity-90 focus:outline-none sm:mt-0 sm:ml-4 sm:px-10 sm:py-3 sm:text-base"
                style={{ backgroundColor: '#05f' }}
              >
                立即开始
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
