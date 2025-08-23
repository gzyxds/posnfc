'use client'

import { useState } from 'react'
import Image from 'next/image'
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon, CpuChipIcon, ShieldCheckIcon, ChartBarIcon, WrenchScrewdriverIcon } from '@heroicons/react/20/solid'

/**
 * 云计算功能标签页数据
 * 包含六个核心功能分类：基础服务、安全防护、数据管理、AI智能、性能监控、开发工具
 */
const cloudFeatures = {
  basic: {
    id: 'basic',
    name: '基础服务',
    icon: ServerIcon,
    title: '云计算基础服务让部署更简单',
    description: '提供完整的云计算基础设施服务，助力企业快速上云',
    features: [
      { name: '一键部署', desc: '通过简单的推送操作即可完成应用部署' },
      { name: '弹性扩容', desc: '根据业务需求自动调整资源配置' },
      { name: '负载均衡', desc: '智能分配流量，确保服务稳定运行' }
    ],
    model: '基础云服务',
    image: '/images/screenshots/Accordion.svg'
  },
  security: {
    id: 'security',
    name: '安全防护',
    icon: ShieldCheckIcon,
    title: '全方位安全防护体系',
    description: '多层次安全防护，保障您的数据和业务安全',
    features: [
      { name: 'SSL证书管理', desc: '自动化SSL证书申请、部署和续期' },
      { name: 'DDoS防护', desc: '智能识别和防御各类网络攻击' },
      { name: '数据加密', desc: '端到端数据加密，确保信息安全' }
    ],
    model: '安全防护系统',
    image: '/images/screenshots/internet.svg'
  },
  data: {
    id: 'data',
    name: '数据管理',
    icon: CloudArrowUpIcon,
    title: '智能化数据管理平台',
    description: '专业的数据存储、备份和分析解决方案',
    features: [
      { name: '数据库备份', desc: '智能化数据备份策略，支持定时和增量备份' },
      { name: '数据同步', desc: '多地域数据实时同步，确保数据一致性' },
      { name: '数据分析', desc: '强大的数据分析工具，洞察业务趋势' }
    ],
    model: '数据管理引擎',
    image: '/images/screenshots/Accordion1.svg'
  },
  ai: {
    id: 'ai',
    name: 'AI智能',
    icon: CpuChipIcon,
    title: 'AI驱动的智能云服务',
    description: '融合人工智能技术，提供智能化云计算解决方案',
    features: [
      { name: '智能运维', desc: 'AI自动化运维，预测和解决潜在问题' },
      { name: '智能推荐', desc: '基于用户行为的个性化服务推荐' },
      { name: '智能优化', desc: '自动优化资源配置，提升性能效率' }
    ],
    model: 'AI智能引擎',
    image: '/images/screenshots/Accordion2.svg'
  },
  monitor: {
    id: 'monitor',
    name: '性能监控',
    icon: ChartBarIcon,
    title: '实时性能监控与分析',
    description: '全方位监控系统性能，确保服务稳定运行',
    features: [
      { name: '实时监控', desc: '24/7实时监控系统运行状态' },
      { name: '性能分析', desc: '深度分析性能瓶颈，提供优化建议' },
      { name: '告警通知', desc: '智能告警系统，及时发现和处理问题' }
    ],
    model: '监控分析系统',
    image: '/images/screenshots/Accordion3.svg'
  },
  devtools: {
    id: 'devtools',
    name: '开发工具',
    icon: WrenchScrewdriverIcon,
    title: '完整的开发工具链',
    description: '提供从开发到部署的完整工具链支持',
    features: [
      { name: 'CI/CD集成', desc: '持续集成和持续部署，提升开发效率' },
      { name: '代码管理', desc: '版本控制和代码审查，确保代码质量' },
      { name: 'API网关', desc: '统一API管理，简化服务间通信' }
    ],
    model: '开发工具套件',
    image: '/images/screenshots/Accordion.svg'
  }
}

/**
 * 云计算功能展示标签页组件
 * 参考 ai.astro 的设计风格，采用标签页布局展示云计算功能
 * 支持响应式设计和交互动画效果
 * @returns 云计算功能标签页组件
 */
export function CloudFeatureTabs() {
  const [activeTab, setActiveTab] = useState('basic')
  const currentFeature = cloudFeatures[activeTab as keyof typeof cloudFeatures]

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#F7F9FC' }}>
      <div className="mx-auto max-w-[1800px] px-3 lg:px-4">
        {/* 标题区域 */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="inline-block px-3 sm:px-4 py-2 bg-white border border-gray-200 rounded-full mb-4 sm:mb-6 md:mb-8">
            <span className="text-[#0052D9] font-semibold text-xs sm:text-sm tracking-wide">云计算功能展示</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6 px-2" style={{ color: '#05f' }}>
            你可以用云计算做什么？
          </h2>
          <p className="text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-2" style={{ color: 'rgba(12,13,14,0.7)' }}>
            探索云计算在不同场景的强大应用，让智能云服务为你的业务发展赋能
          </p>
        </div>

        {/* 标签导航栏 */}
        <div className="mb-12 md:mb-16">
          {/* 移动端：水平滚动标签 */}
          <div className="md:hidden overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            <div className="flex space-x-2 pb-2 min-w-max">
              {Object.values(cloudFeatures).map((feature) => {
                const IconComponent = feature.icon
                return (
                  <button
                    key={feature.id}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      setActiveTab(feature.id)
                    }}
                    className={`flex-shrink-0 flex items-center gap-2 px-4 py-2 font-medium text-sm transition-all duration-200 whitespace-nowrap touch-manipulation ${
                      activeTab === feature.id
                        ? 'bg-[#0052D9] text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300'
                    }`}
                    style={{
                      WebkitTapHighlightColor: 'transparent',
                      userSelect: 'none'
                    }}
                  >
                    <IconComponent className="w-4 h-4 flex-shrink-0" />
                    {feature.name}
                  </button>
                )
              })}
            </div>
          </div>

          {/* 桌面端：网格布局标签 */}
          <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-1 lg:gap-2">
            {Object.values(cloudFeatures).map((feature) => {
              const IconComponent = feature.icon
              return (
                <button
                  key={feature.id}
                  type="button"
                  onClick={() => setActiveTab(feature.id)}
                  className={`flex items-center justify-center gap-2 px-4 lg:px-6 py-2 lg:py-3 font-medium text-sm lg:text-base transition-all duration-200 w-full ${
                    activeTab === feature.id
                      ? 'text-[#0052D9] border-b-2 border-[#0052D9]'
                      : 'text-gray-600 hover:text-[#0052D9]'
                  }`}
                >
                  <IconComponent className="w-4 h-4 lg:w-5 lg:h-5" />
                  {feature.name}
                </button>
              )
            })}
          </div>
        </div>

        {/* 标签内容区域 */}
        <div className="grid grid-cols-1 gap-4">
          <div className="transition-all duration-300 ease-out">
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-20 items-center bg-white p-4 sm:p-6 md:p-8 lg:p-12 min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]" style={{ boxShadow: '0 2px 8px rgba(0,0,0,.05)' }}>
              {/* 左侧文字内容 */}
              <div className="space-y-4 sm:space-y-6 md:space-y-8 flex flex-col justify-center lg:w-2/5 w-full order-2 lg:order-1">
                <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold leading-tight" style={{ color: 'rgba(12,13,14,1)', lineHeight: '1.3' }}>
                  {currentFeature.title}
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: 'rgba(12,13,14,0.7)', lineHeight: '1.6' }}>
                  {currentFeature.description}
                </p>
                <div className="space-y-3 sm:space-y-4 md:space-y-6">
                  {currentFeature.features.map((item, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3 md:gap-4">
                      <div className="w-2 h-2 bg-[#0052D9] rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                      <span className="text-sm sm:text-base md:text-lg leading-relaxed" style={{ color: 'rgba(12,13,14,1)', lineHeight: '1.6' }}>
                        <strong style={{ fontWeight: '500' }}>{item.name}</strong>：{item.desc}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-xs sm:text-sm" style={{ color: 'rgba(12,13,14,0.6)' }}>
                  相关服务：{currentFeature.model}
                </div>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-white border border-gray-300 text-gray-700 font-medium transition-all duration-200 hover:bg-gray-50 text-sm md:text-base"
                  >
                    查看详情
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="inline-flex items-center justify-center px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 bg-[#0052D9] text-white font-medium transition-all duration-200 hover:scale-105 hover:bg-[#003db8] text-sm md:text-base"
                  >
                    立即体验
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
              {/* 右侧图片展示 */}
              <div className="flex justify-center lg:justify-end items-center lg:w-3/5 w-full mt-6 lg:mt-0 order-1 lg:order-2">
                <div className="w-full max-w-xs sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-48 sm:h-60 md:h-80 lg:h-[28rem] xl:h-[32rem]">
                  <Image
                    src={currentFeature.image}
                    alt={`${currentFeature.name}功能演示`}
                    width={800}
                    height={600}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/**
 * 云计算功能展示组件 - 主导出组件
 * 展示云计算产品的功能特性，采用标签页交互设计
 * 参考 ai.astro 的设计风格，提供现代化的用户体验
 * @returns 云计算功能展示区块
 */
export function Accordion() {
  return (
    <section
      id="cloud-features"
      aria-label="云计算功能特性展示"
    >
      <CloudFeatureTabs />
    </section>
  )
}
