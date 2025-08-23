import React from 'react'
import { Container } from './Container'
import clsx from 'clsx'

/**
 * 全球基础设施展示组件
 * 展示优刻云在全球的基础设施分布，采用简洁现代的设计风格
 * 包含统计数据展示和全球网络可视化效果
 *
 * @returns 渲染的全球基础设施展示区域
 */
export default function Zone() {
  // 统计数据配置
  const stats = [
    {
      number: '29',
      unit: '个',
      label: '可用区域',
      description: '覆盖全球主要地区',
      color: 'text-blue-600'
    },
    {
      number: '89',
      unit: '个',
      label: '国家和地区',
      description: '服务遍布全球',
      color: 'text-emerald-600'
    },
    {
      number: '10',
      unit: '+',
      label: '动态节点',
      description: '实时在线节点',
      color: 'text-purple-600'
    },
    {
      number: '180',
      unit: '+Tbps',
      label: '网络带宽',
      description: '超大带宽保障',
      color: 'text-orange-600'
    }
  ]

  // 动态节点位置数据（相对位置百分比）
  const dynamicNodes = [
    // 亚洲节点
    { id: 1, x: 70, y: 35, region: '中国大陆', country: 'CN', color: 'bg-red-500', pulse: 'animate-ping', status: 'active' },
    { id: 2, x: 72, y: 38, region: '香港', country: 'HK', color: 'bg-blue-500', pulse: 'animate-ping', status: 'active' },
    { id: 3, x: 74, y: 36, region: '台湾', country: 'TW', color: 'bg-green-500', pulse: 'animate-ping', status: 'active' },
    { id: 4, x: 78, y: 50, region: '新加坡', country: 'SG', color: 'bg-purple-500', pulse: 'animate-ping', status: 'active' },
    { id: 5, x: 82, y: 32, region: '韩国', country: 'KR', color: 'bg-indigo-500', pulse: 'animate-ping', status: 'active' },
    { id: 6, x: 75, y: 55, region: '泰国', country: 'TH', color: 'bg-yellow-500', pulse: 'animate-ping', status: 'active' },
    { id: 7, x: 85, y: 30, region: '日本', country: 'JP', color: 'bg-pink-500', pulse: 'animate-ping', status: 'active' },
    { id: 8, x: 76, y: 52, region: '马来西亚', country: 'MY', color: 'bg-teal-500', pulse: 'animate-ping', status: 'active' },
    // 北美节点
    { id: 9, x: 15, y: 35, region: '美国', country: 'US', color: 'bg-blue-600', pulse: 'animate-ping', status: 'active' },
    { id: 10, x: 12, y: 25, region: '加拿大', country: 'CA', color: 'bg-red-600', pulse: 'animate-ping', status: 'active' }
  ]

  return (
    <section className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 sm:py-20 lg:py-24">
      <Container>
        {/* 标题部分 */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            安全合规，通布全球的云计算基础设施
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            优刻云基础设施遍布全球，为您提供安全、稳定、高性能的云计算服务
          </p>
        </div>

        {/* 统计数据卡片 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12 lg:mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-4 lg:p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="flex items-baseline justify-center space-x-1 mb-2">
                  <span className={clsx(
                    'text-2xl sm:text-3xl lg:text-4xl font-bold',
                    stat.color
                  )}>
                    {stat.number}
                  </span>
                  <span className={clsx(
                    'text-lg sm:text-xl font-semibold',
                    stat.color
                  )}>
                    {stat.unit}
                  </span>
                </div>
                <div className="text-sm lg:text-base font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-xs lg:text-sm text-gray-600">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 全球网络可视化 */}
        <div className="relative bg-white p-8 lg:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-xl lg:text-2xl font-semibold text-gray-900 mb-2">
              全球网络分布
            </h3>
            <p className="text-gray-600">
              实时连接全球各大洲的数据中心和边缘节点
            </p>
          </div>

          {/* 简化的世界地图可视化 */}
          <div className="relative h-64 lg:h-80 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl overflow-hidden">
            {/* 背景网格 */}
            <div className="absolute inset-0 opacity-20">
              <svg className="w-full h-full" viewBox="0 0 400 300">
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#3b82f6" strokeWidth="0.5"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* 动态节点 */}
            {dynamicNodes.map((node, index) => {
              // 根据节点位置调整标签显示方向，避免边界溢出
              const isRightSide = node.x > 75
              const isBottomSide = node.y > 60
              const labelPosition = isRightSide ? 'right' : isBottomSide ? 'bottom' : 'top'

              return (
                <div
                  key={node.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{
                    left: `${node.x}%`,
                    top: `${node.y}%`,
                    animationDelay: `${index * 0.2}s`,
                    zIndex: 10 + index
                  }}
                  title={`${node.region} (${node.country}) - ${node.status}`}
                >
                {/* 脉冲效果 */}
                <div className={clsx(
                  'absolute inset-0 rounded-full opacity-60 group-hover:opacity-80',
                  node.color,
                  node.pulse
                )} />
                {/* 节点核心 */}
                <div className={clsx(
                  'relative w-3 h-3 lg:w-4 lg:h-4 rounded-full border-2 border-white shadow-lg group-hover:scale-125 transition-transform duration-200',
                  node.color
                )} />
                {/* 状态指示器 */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full border border-white animate-pulse" />
                {/* 节点标签 */}
                 <div className={clsx(
                   'absolute whitespace-nowrap z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none',
                   labelPosition === 'top' && 'bottom-6 left-1/2 transform -translate-x-1/2',
                   labelPosition === 'bottom' && 'top-6 left-1/2 transform -translate-x-1/2',
                   labelPosition === 'right' && 'top-1/2 right-6 transform -translate-y-1/2'
                 )}>
                   <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-gray-200 min-w-max max-w-32">
                     <div className="text-sm font-semibold text-gray-900 leading-tight truncate">
                       {node.region}
                     </div>
                     <div className="text-xs text-gray-500 mt-0.5 truncate">
                       {node.country} • {node.status}
                     </div>
                   </div>
                   {/* 标签箭头 */}
                   <div className={clsx(
                     'absolute w-2 h-2 bg-white border border-gray-200',
                     labelPosition === 'top' && 'top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45 border-r-0 border-b-0',
                     labelPosition === 'bottom' && '-top-1 left-1/2 transform -translate-x-1/2 rotate-45 border-r-0 border-b-0',
                     labelPosition === 'right' && 'top-1/2 -left-1 transform -translate-y-1/2 rotate-45 border-t-0 border-r-0'
                   )}></div>
                 </div>
              </div>
               )
             })}

            {/* 连接线动画 */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
                  <stop offset="50%" stopColor="#3b82f6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* 动态连接线 */}
              <g className="opacity-50">
                {/* 美国到亚洲主干线 */}
                <path
                  d="M60 105 Q200 60 280 105"
                  stroke="url(#connectionGradient)"
                  strokeWidth="2"
                  fill="none"
                  className="animate-pulse"
                />
                {/* 加拿大到中国大陆 */}
                <path
                  d="M48 75 Q200 50 280 105"
                  stroke="url(#connectionGradient)"
                  strokeWidth="1.5"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: '0.5s' }}
                />
                {/* 亚洲内部连接 */}
                <path
                  d="M280 105 Q300 120 312 150"
                  stroke="url(#connectionGradient)"
                  strokeWidth="1.5"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: '1s' }}
                />
                {/* 香港到新加坡 */}
                <path
                  d="M288 114 Q300 130 312 150"
                  stroke="url(#connectionGradient)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: '1.5s' }}
                />
                {/* 日本到韩国连接 */}
                <path
                  d="M340 90 Q330 100 328 96"
                  stroke="url(#connectionGradient)"
                  strokeWidth="1"
                  fill="none"
                  className="animate-pulse"
                  style={{ animationDelay: '2s' }}
                />
              </g>

              {/* 数据流动效果 */}
              <g>
                {/* 美国到亚洲数据流 */}
                <circle r="2" fill="#3b82f6" opacity="0.8">
                  <animateMotion
                    dur="4s"
                    repeatCount="indefinite"
                    path="M60 105 Q200 60 280 105"
                  />
                </circle>
                {/* 加拿大到中国数据流 */}
                <circle r="1.5" fill="#ef4444" opacity="0.8">
                  <animateMotion
                    dur="5s"
                    repeatCount="indefinite"
                    path="M48 75 Q200 50 280 105"
                    begin="1s"
                  />
                </circle>
                {/* 亚洲内部数据流 */}
                <circle r="1.5" fill="#10b981" opacity="0.8">
                  <animateMotion
                    dur="3s"
                    repeatCount="indefinite"
                    path="M280 105 Q300 120 312 150"
                    begin="2s"
                  />
                </circle>
                {/* 香港新加坡数据流 */}
                <circle r="1" fill="#8b5cf6" opacity="0.8">
                  <animateMotion
                    dur="2s"
                    repeatCount="indefinite"
                    path="M288 114 Q300 130 312 150"
                    begin="0.5s"
                  />
                </circle>
              </g>
            </svg>
          </div>

          {/* 底部说明 */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              实时监控全球 {stats[2].number}{stats[2].unit} 动态节点状态，覆盖亚洲和北美主要地区
            </p>
            <div className="mt-2 flex justify-center space-x-4 text-xs text-gray-400">
              <span>🟢 在线节点: {dynamicNodes.filter(node => node.status === 'active').length}</span>
              <span>📊 实时延迟: &lt;50ms</span>
              <span>🔄 数据同步: 99.99%</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
