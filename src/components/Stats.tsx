import Image from 'next/image'
import achievementsImage from '@/images/screenshots/achievements.png'

/**
 * 统计数据配置
 * @description 平台核心数据指标
 */
const stats = [
  { id: 1, name: '平台创作者数量', value: '8,000+' },
  { id: 2, name: '平台服务费', value: '3%' },
  { id: 3, name: '运行时间保证', value: '99.9%' },
  { id: 4, name: '创作者收益', value: '7000万美元' },
]

/**
 * 统计数据展示组件
 * @description 展示平台核心数据指标，支持多端响应式布局
 * @returns 统计数据区块组件
 */
export default function Stats() {
  return (
    <div className="relative bg-white mt-12 sm:mt-16 md:mt-20 lg:mt-24">
      {/* 背景图片 - 多端适配 */}
      <Image
        alt="平台数据统计截图"
        src={achievementsImage}
        width={800}
        height={600}
        className="
          h-48 sm:h-56 md:h-64 lg:h-full
          w-full bg-gray-50 object-cover
          lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2
        "
        priority
      />

      {/* 主要内容区域 */}
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="
          px-4 sm:px-6 lg:px-8
          pt-12 pb-16 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 lg:pt-32 lg:pb-32
          lg:col-start-2
        ">
          <div className="mx-auto max-w-2xl lg:mr-0 lg:max-w-lg">
            {/* 标题区域 */}
            <h2 className="text-sm sm:text-base font-semibold text-indigo-600 tracking-wide uppercase">
              我们的成就
            </h2>
            <p className="
              mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl
              font-semibold tracking-tight text-pretty text-gray-900
              leading-tight
            ">
              全球数千创作者的信赖之选
            </p>
            <p className="
              mt-4 sm:mt-6 text-base sm:text-lg md:text-xl
              leading-relaxed text-gray-600
            ">
              我们致力于为创作者提供最优质的平台服务，通过专业的技术支持和完善的运营体系，帮助创作者实现价值最大化。
            </p>

            {/* 统计数据网格 */}
            <dl className="
              mt-12 sm:mt-16 md:mt-20
              grid max-w-xl grid-cols-1 gap-6 sm:gap-8
              sm:grid-cols-2
              md:gap-x-10 md:gap-y-8
            ">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="
                    flex flex-col gap-y-2 sm:gap-y-3
                    border-l-2 sm:border-l-4 border-gray-900/10
                    pl-4 sm:pl-6
                    hover:border-indigo-500/30 transition-colors duration-200
                  "
                >
                  <dt className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">
                    {stat.name}
                  </dt>
                  <dd className="
                    order-first text-2xl sm:text-3xl md:text-4xl
                    font-bold tracking-tight text-gray-900
                  ">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
