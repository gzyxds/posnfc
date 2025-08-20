/**
 * CatSections 组件 - 立即行动区域
 * 移动端优化的网格式UI，简化布局和交互元素
 * 响应式设计，在不同屏幕尺寸下提供最佳用户体验
 */
export default function CatSections() {
  return (
    <div className="relative py-12 sm:py-16 lg:py-20 bg-white">
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* 服务卡片网格 - 移动端两行两列优化 */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          {/* 联系咨询 */}
          <div className="bg-white border border-gray-200 p-3 sm:p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                  专业咨询
                </h3>
                <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base leading-relaxed">
                  专业团队为您提供个性化解决方案
                </p>
              </div>
              <button className="inline-flex items-center px-4 sm:px-10 py-2 sm:py-3 border border-gray-300 text-xs sm:text-base font-medium text-black bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-200 mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                联系我们
              </button>
            </div>
          </div>

          {/* 产品服务 */}
          <div className="bg-white border border-gray-200 p-3 sm:p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                  产品服务
                </h3>
                <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base leading-relaxed">
                  完整产品线为您的业务提供全方位支持
                </p>
              </div>
              <button className="inline-flex items-center px-4 sm:px-10 py-2 sm:py-3 border border-gray-300 text-xs sm:text-base font-medium text-black bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-200 mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                了解更多
              </button>
            </div>
          </div>

          {/* 合作伙伴 */}
          <div className="col-span-2 sm:col-span-1 lg:col-span-1 bg-white border border-gray-200 p-3 sm:p-6 hover:shadow-md transition-shadow duration-200">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-900">
                  合作伙伴
                </h3>
                <p className="text-gray-600 mt-1 sm:mt-2 text-xs sm:text-sm lg:text-base leading-relaxed">
                  与全球领先技术公司建立战略合作关系
                </p>
              </div>
              <button className="inline-flex items-center px-4 sm:px-10 py-2 sm:py-3 border border-gray-300 text-xs sm:text-base font-medium text-black bg-white hover:bg-gray-50 focus:outline-none transition-colors duration-200 mt-2 sm:mt-0 sm:ml-4 flex-shrink-0">
                了解详情
              </button>
            </div>
          </div>

          {/* 免费开始体验 - 移动端占据整行 */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-3 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 lg:p-8 border border-blue-100">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  免费开始体验
                </h2>
                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed">
                  无需任何前期投入，立即体验云计算的强大功能
                </p>
              </div>
              <button className="inline-flex items-center px-6 sm:px-10 py-2 sm:py-3 border border-transparent text-xs sm:text-base font-medium shadow-sm text-white hover:opacity-90 focus:outline-none transition-colors duration-200 mt-3 sm:mt-0 sm:ml-4 flex-shrink-0" style={{backgroundColor: '#05f'}}>
                立即开始
              </button>
            </div>
          </div>
        </div>


      </div>
    </div>
  )
}
