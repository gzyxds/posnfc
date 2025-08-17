const stats = [
  { id: 1, name: '平台创作者数量', value: '8,000+' },
  { id: 2, name: '平台服务费', value: '3%' },
  { id: 3, name: '运行时间保证', value: '99.9%' },
  { id: 4, name: '创作者收益', value: '7000万美元' },
]

export default function Stats() {
  return (
    <div className="relative bg-white mt-16 sm:mt-20 lg:mt-24">
      <img
        alt=""
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2850&q=80"
        className="h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2"
      />
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="px-6 pt-16 pb-24 sm:pt-20 sm:pb-32 lg:col-start-2 lg:px-8 lg:pt-32">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            <h2 className="text-base/8 font-semibold text-indigo-600">我们的成就</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
              全球数千创作者的信赖之选
            </p>
            <p className="mt-6 text-lg/8 text-gray-600">
              我们致力于为创作者提供最优质的平台服务，通过专业的技术支持和完善的运营体系，帮助创作者实现价值最大化。
            </p>
            <dl className="mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col gap-y-3 border-l border-gray-900/10 pl-6">
                  <dt className="text-sm/6 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
