'use client'

import clsx from 'clsx'
import Image from 'next/image'
import { Container } from '@/components/Container'
import {
  ComputerDesktopIcon,
  CogIcon,
  ServerIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline'

// 场景图片路径 - 使用 public 目录中的实际图片资源

/**
 * 应用场景数据接口
 * @interface ScenarioItem
 * @property {string} title - 场景标题
 * @property {string} description - 场景描述
 * @property {React.ComponentType<React.SVGProps<SVGSVGElement>>} icon - 场景图标组件
 * @property {string[]} features - 场景特性列表
 * @property {string} image - 场景展示图片路径
 */
interface ScenarioItem {
  title: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  features: string[]
  image: string
}

/**
 * 应用场景数据配置
 */
const scenarios: ScenarioItem[] = [
  {
    title: '网站搭建',
    description: '使用 Lighthouse 提供的精品镜像，可快速创建满足您业务诉求的网站',
    features: ['企业官网', '个人展示网页', '小程序', '论坛', '电商', '外贸网站'],
    icon: ComputerDesktopIcon,
    image: '/images/screenshots/solution-1.png',
  },
  {
    title: '开发测试',
    description: '帮助开发者随时随地在生产环境之外构建开发测试环境',
    features: ['LAMP 环境', 'Node.js', 'ASP.NET', '多语言支持', '版本控制', '持续集成'],
    icon: CogIcon,
    image: '/images/screenshots/solution-2.png',
  },
  {
    title: 'Web应用服务',
    description: '使用预置常用 Web 开发平台的镜像，快速部署 Web 应用程序',
    features: ['LAMP 堆栈', 'Node.js 平台', '快速部署', '高效上线', '业务应用', '性能优化'],
    icon: ServerIcon,
    image: '/images/screenshots/solution-3.png',
  },
  {
    title: '云端学习',
    description: '提供触手可及的云端学习环境，随时创建、随时销毁环境',
    features: ['Ubuntu 系统', 'CentOS', 'Debian', 'Windows Server', '即时创建', '灵活销毁'],
    icon: AcademicCapIcon,
    image: '/images/screenshots/solution-4.png',
  },
]

/**
 * 应用场景组件 - 展示云服务的各种应用场景
 *
 * 采用简洁的卡片式设计，每个场景包含图标、标题、描述和特性列表
 * 响应式布局，在不同屏幕尺寸下自适应显示
 *
 * @returns {JSX.Element} 应用场景组件
 */
export function Scenario() {
  return (
    <section
      id="scenarios"
      aria-label="应用场景"
      className="bg-slate-50 py-20 sm:py-24 lg:py-32"
    >
      <Container>
        <div className="text-left">
          <h1 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            应用场景
          </h1>
          <p className="mt-3 text-base tracking-tight text-slate-700 sm:mt-4 sm:text-lg">
            开箱即用、面向轻量应用场景
          </p>
        </div>

        {/* 两排两列网格布局 - 直角设计 */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 sm:gap-6 lg:mt-20 lg:gap-8">
          {scenarios.map((scenario, index) => (
            <div
              key={scenario.title}
              className={clsx(
                'group relative bg-white overflow-hidden shadow-sm ring-1 ring-slate-200',
                'transition-all duration-300 hover:shadow-lg hover:ring-slate-300 hover:-translate-y-1',
                // 移动端触摸友好的最小高度和内边距
                 'min-h-[200px] p-4 sm:min-h-[220px] sm:p-5 md:min-h-[260px] md:p-6 lg:p-8',
                 // 直角设计，无圆角
                 'rounded-none'
              )}
            >
              {/* 图片区域 - 直角设计 */}
               <div className="relative h-20 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 sm:h-24 md:h-28">
                <Image
                  src={scenario.image}
                  alt={`${scenario.title}场景展示`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
                />
                {/* 白色遮罩层 */}
                <div className="absolute inset-0 bg-white/30"></div>
                {/* 标题覆盖层 - 居中显示 */}
                 <div className="absolute inset-0 flex items-center justify-center">
                   <h3 className="text-white font-semibold text-sm sm:text-base md:text-lg text-center px-2 drop-shadow-lg">
                     {scenario.title}
                   </h3>
                 </div>
              </div>

              {/* 内容区域 - 两列布局优化 */}
               <div className="mt-3 sm:mt-4">
                {/* 描述文字 - 两列布局适配 */}
                 <p className="text-sm text-slate-600 leading-relaxed sm:text-base">
                   {scenario.description.length > 80
                     ? `${scenario.description.substring(0, 80)}...`
                     : scenario.description
                   }
                 </p>

                {/* 特性标签 - 直角设计 */}
                 <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
                   {scenario.features.slice(0, 3).map((feature) => (
                     <span
                       key={feature}
                       className="inline-flex items-center bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 sm:px-2.5 sm:text-sm"
                     >
                       {feature}
                     </span>
                   ))}
                   {scenario.features.length > 3 && (
                     <span className="inline-flex items-center bg-slate-100 px-2 py-1 text-xs font-medium text-slate-600 sm:px-2.5 sm:text-sm">
                       +{scenario.features.length - 3}
                     </span>
                   )}
                </div>
              </div>



              {/* 悬停效果装饰 */}
               <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
