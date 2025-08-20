/**
 * CatSections 组件 - 立即行动区域
 * 采用指定背景图片，卡片左对齐布局，按钮尺寸优化
 * 文案左对齐，整体布局与下方内容宽度保持一致
 */
export default function CatSections() {
  return (
    <div
      className="relative py-20"
      style={{
        backgroundColor: '#ffffff',
      }}
    >
      <div className="relative mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
        {/* 主要行动卡片 - 0元产品免费开始体验 */}
        <div className="mb-16">
          <div className="max-w-[1800px]">
            <div className="relative p-8 bg-gray-100 border border-gray-200">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-left">
                  从0元产品免费开始体验
                </h3>
                <p className="text-gray-700 mb-8 text-lg text-left">
                  立即开始使用我们的免费产品，无需任何前期投入，体验云计算的强大功能
                </p>
                <button className="bg-blue-600 text-white px-6 py-2 text-sm font-semibold hover:bg-blue-700 transition-colors">
                  免费开始体验
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 服务卡片网格 */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* 与我们沟通 */}
          <div className="bg-gray-100 border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-left">
              与我们沟通
            </h3>
            <p className="text-gray-700 mb-6 text-left">
              我们的专业团队随时为您提供咨询服务，帮助您找到最适合的解决方案
            </p>
            <button className="bg-blue-600 border-2 border-blue-600 text-white py-1.5 px-4 text-sm font-medium hover:bg-blue-700 hover:border-blue-700 transition-colors">
              联系我们
            </button>
          </div>

          {/* 产品与服务 */}
          <div className="bg-gray-100 border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-left">
              产品与服务
            </h3>
            <p className="text-gray-700 mb-6 text-left">
              探索我们完整的产品线和专业服务，为您的业务提供全方位支持
            </p>
            <button className="bg-blue-600 border-2 border-blue-600 text-white py-1.5 px-4 text-sm font-medium hover:bg-blue-700 hover:border-blue-700 transition-colors">
              了解更多
            </button>
          </div>

          {/* 合作伙伴网络 */}
          <div className="bg-gray-100 border border-gray-200 p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-left">
              合作伙伴网络
            </h3>
            <p className="text-gray-700 mb-6 text-left">
              与全球领先的技术公司建立战略合作关系，为您提供更优质的服务体验
            </p>
            <button className="bg-blue-600 border-2 border-blue-600 text-white py-1.5 px-4 text-sm font-medium hover:bg-blue-700 hover:border-blue-700 transition-colors">
              了解详情
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
