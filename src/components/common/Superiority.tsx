'use client'

import clsx from 'clsx'
import {
  CurrencyDollarIcon,
  ClockIcon,
  ComputerDesktopIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  LockClosedIcon,
  CloudArrowUpIcon,
  ChartBarIcon,
  ServerStackIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'

/**
 * 产品优势数据类型定义
 */
interface ProductAdvantage {
  id: string
  name: string
  description: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

/**
 * 产品优势数据配置
 * 基于云服务器的六大核心优势
 */
const productAdvantages: ProductAdvantage[] = [
  {
    id: 'cost-effective',
    name: '成本低廉',
    description: '云服务器资源按使用量计费，较传统IT系统，大幅度缩减建设与维护成本。',
    icon: CurrencyDollarIcon,
  },
  {
    id: 'fast-delivery',
    name: '快速交付',
    description: '云服务器从订购到开通使用仅需数分钟时间，可快速交付到用户手中。',
    icon: ClockIcon,
  },
  {
    id: 'easy-to-use',
    name: '便捷易用',
    description: '云服务器的所有操作在控制台可轻松查看并使用，操作指引与说明简洁易懂。',
    icon: ComputerDesktopIcon,
  },
  {
    id: 'stable-reliable',
    name: '稳定可靠',
    description: '实力认证，高达95%的数据持久性，更有故障时长赔偿。',
    icon: ShieldCheckIcon,
  },
  {
    id: 'powerful-hardware',
    name: '至强硬件',
    description: '强悍硬件配置结合前沿处理技术，轻松支撑业务负载',
    icon: CpuChipIcon,
  },
  {
    id: 'security-strategy',
    name: '安全策略',
    description: '采用全智能调度技术，分钟级响应速度应对高要求的场景',
    icon: LockClosedIcon,
  },
  {
    id: 'rich-images',
    name: '丰富镜像 一键部署',
    description: '丰富的公共镜像与市场镜像满足您各类业务需求',
    icon: CloudArrowUpIcon,
  },
  {
    id: 'real-time-monitoring',
    name: '资源使用 实时监控',
    description: '支持实时查看云服务器资源使用详情，随时了解自己业务运行情况',
    icon: ChartBarIcon,
  },
  {
    id: 'internal-network',
    name: '多台实例 内网互通',
    description: '支持同区域内网互通，高效调用名下多台云服务资源',
    icon: ServerStackIcon,
  },

]

/**
 * 产品优势组件属性接口
 */
interface SuperiorityProps {
  /** 自定义标题 */
  title?: string
  /** 自定义副标题 */
  subtitle?: string
  /** 自定义描述 */
  description?: string
  /** 自定义CSS类名 */
  className?: string
  /** 是否显示背景 */
  showBackground?: boolean
  /** 网格列数配置 */
  gridCols?: {
    base?: string
    sm?: string
    lg?: string
  }
}

/**
 * 产品优势展示组件
 *
 * 功能特点：
 * - 响应式网格布局，支持移动端、平板和桌面端适配
 * - 使用 Heroicons 图标库提供视觉化图标
 * - 支持自定义标题、描述和样式
 * - 基于项目现有设计规范，保持一致的视觉风格
 * - 展示云服务器的六大核心优势
 *
 * @param title - 组件标题，默认为"产品优势"
 * @param subtitle - 组件副标题
 * @param description - 组件描述
 * @param className - 自定义CSS类名
 * @param showBackground - 是否显示背景色，默认为true
 * @param gridCols - 网格列数配置
 * @returns {JSX.Element} 产品优势展示组件
 */
export function Superiority({
  title = '产品优势',
  subtitle,
  description = '云服务器为您提供全方位的技术优势，助力业务快速发展',
  className,
  showBackground = true,
  gridCols = {
    base: 'grid-cols-1',
    sm: 'grid-cols-2',
    lg: 'grid-cols-3',
  },
}: SuperiorityProps = {}) {
  return (
    <section
      className={clsx(
        'py-16 sm:py-20 lg:py-24',
        showBackground && 'bg-gray-50',
        className
      )}
    >
      <Container>
        {/* 标题区域 */}
        <div className="mx-auto max-w-2xl text-center">
          {subtitle && (
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              {subtitle}
            </h2>
          )}
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </p>
          {description && (
            <p className="mt-6 text-lg leading-8 text-gray-600">
              {description}
            </p>
          )}
        </div>

        {/* 产品优势网格 */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl
            className={clsx(
              'grid max-w-xl gap-x-8 gap-y-16 lg:max-w-none',
              gridCols.base,
              gridCols.sm && `sm:${gridCols.sm}`,
              gridCols.lg && `lg:${gridCols.lg}`
            )}
          >
            {productAdvantages.map((advantage) => (
              <div key={advantage.id} className="flex flex-col p-6 border border-gray-200 rounded-none bg-white hover:border-gray-300 transition-all duration-200">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <advantage.icon
                    aria-hidden="true"
                    className="h-5 w-5 flex-none text-indigo-600"
                  />
                  {advantage.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{advantage.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  )
}

/**
 * 默认导出产品优势组件
 */
export default Superiority
