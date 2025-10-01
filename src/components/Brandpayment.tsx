'use client'

import React, { useState } from 'react'
import {
  VideoCameraIcon,
  UserGroupIcon,
  PencilIcon,
  TvIcon,
  CreditCardIcon,
  CpuChipIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'
import primaryFeaturesImage from '@/images/contact/PrimaryFeatures.png'

/**
 * 应用场景展示组件 - 采用 Accordion 双列布局风格
 * 左侧为场景导航列表，右侧为内容面板，支持响应式设计
 */
function ScenariosSection(): React.JSX.Element {
  const [activeScenario, setActiveScenario] = useState<keyof typeof scenarioData>('digitalPayment')

  // 场景数据配置 - 保持原有核心信息，优化文案长度
  const scenarioData = {
    digitalPayment: {
      id: 'digitalPayment',
      name: '数字人民币',
      title: '数字人民币支付解决方案',
      icon: VideoCameraIcon,
      features: [
        { icon: VideoCameraIcon, title: '布设简单', desc: '快速部署上线，无需复杂配置' },
        { icon: UserGroupIcon, title: '体验良好', desc: '用户操作便捷，支付流程顺畅' },
        { icon: PencilIcon, title: '收款新方式', desc: '多元化支付选择，拓展收款渠道' },
        { icon: TvIcon, title: '安全保障', desc: '央行数字货币，安全可靠' },
      ],
    },
    facePayment: {
      id: 'facePayment',
      name: '刷脸支付',
      title: '刷脸支付智能收款',
      icon: UserGroupIcon,
      features: [
        { icon: UserGroupIcon, title: '刷脸即付', desc: '无需手机操作，面部识别支付' },
        { icon: VideoCameraIcon, title: '升级体验', desc: '科技感十足，提升品牌形象' },
        { icon: TvIcon, title: '提升效率', desc: '加快收款速度，减少排队时间' },
        { icon: PencilIcon, title: '智能识别', desc: '高精度人脸识别技术' },
      ],
    },
    qrPayment: {
      id: 'qrPayment',
      name: '扫码支付',
      title: '扫码支付聚合收款',
      icon: PencilIcon,
      features: [
        { icon: PencilIcon, title: '微信支付', desc: '覆盖广泛用户群体' },
        { icon: VideoCameraIcon, title: '支付宝', desc: '便民支付首选方式' },
        { icon: UserGroupIcon, title: '高效稳定', desc: '收款无忧，到账及时' },
        { icon: TvIcon, title: '聚合码牌', desc: '一码收全款，简化操作' },
      ],

    },
    nfcPayment: {
      id: 'nfcPayment',
      name: 'NFC支付',
      title: 'NFC近场支付服务',
      icon: TvIcon,
      features: [
        { icon: TvIcon, title: 'Apple Pay', desc: 'iOS用户首选支付方式' },
        { icon: VideoCameraIcon, title: 'HUAWEI Pay', desc: '华为生态支付解决方案' },
        { icon: UserGroupIcon, title: '云闪付', desc: '银联官方应用支持' },
      ],
    },
    bankCardPayment: {
      id: 'bankCardPayment',
      name: '银行卡支付',
      title: '银行卡支付解决方案',
      icon: CreditCardIcon,
      features: [
        { icon: PencilIcon, title: '芯片卡支付', desc: 'IC芯片卡安全支付，防伪较强' },
        { icon: VideoCameraIcon, title: '磁条卡支付', desc: '传统磁条卡刷卡支付' },
        { icon: UserGroupIcon, title: '贷记卡受理', desc: '信用卡消费支付服务' },
        { icon: TvIcon, title: '借记卡受理', desc: '储蓄卡直接扣款支付' },
      ],
    },
    posPayment: {
      id: 'posPayment',
      name: 'POS支付',
      title: 'POS机支付终端服务',
      icon: CpuChipIcon,
      features: [
        { icon: CpuChipIcon, title: '智能POS', desc: '多功能智能支付终端，支持全支付方式' },
        { icon: TvIcon, title: '传统POS', desc: '稳定可靠的刷卡支付设备' },
        { icon: VideoCameraIcon, title: '移动POS', desc: '便携式移动支付终端' },
        { icon: UserGroupIcon, title: '收银一体机', desc: '集成收银系统的智能终端' },
      ],
    },
  }

  const currentScenario = scenarioData[activeScenario]

  /**
   * 处理鼠标悬停事件，自动切换到对应场景
   * @param scenarioId - 场景ID
   */
  const handleMouseEnter = (scenarioId: string) => {
    setActiveScenario(scenarioId as keyof typeof scenarioData)
  }

  const Feature = ({
    icon: Icon,
    title,
    desc,
  }: {
    icon: React.ComponentType<{ className?: string }>
    title: string
    desc: string
  }) => (
    <div className="flex items-start gap-2 sm:gap-3 lg:gap-4 group">
      <div className="flex-shrink-0 p-1.5 sm:p-2 lg:p-2.5 bg-white/20 rounded-lg backdrop-blur-sm border border-white/30 group-hover:bg-white/30 transition-all duration-200">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-gray-800" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 mb-1 sm:mb-1.5 lg:mb-2 leading-tight">{title}</h4>
        <p className="text-xs sm:text-sm lg:text-base text-gray-700 leading-relaxed opacity-90">{desc}</p>
      </div>
    </div>
  )

  return (
    <div
      className="w-full relative min-h-0 sm:min-h-0 lg:min-h-[75vh] bg-white"
      style={{
        fontFamily: 'Microsoft YaHei, Arial, sans-serif',
      }}
    >

      {/* 顶部标题 */}
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 pt-6 sm:pt-8">
        <div className="text-center">
          <div className="font-bold text-gray-900 mb-2 tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl">多场景支付解决方案</div>
          <div className="text-gray-700 font-medium text-lg sm:text-xl md:text-2xl">满足不同业务需求的支付方式</div>
        </div>
      </div>

      {/* 主体响应式布局 - 参考 Accordion 的双列设计 */}
      <div className="mx-auto mt-8 max-w-[1800px] px-4 sm:px-6 pb-4 sm:pb-6 lg:pb-12">
        <div className="flex flex-row gap-0 lg:gap-0">
          {/* 导航区域 - 移动端和桌面端都使用左侧布局 - 添加半透明遮罩和毛玻璃效果 */}
          <aside
            className="shrink-0 text-sm rounded-none order-1 w-[35%] sm:w-[32%] lg:w-[28%] p-2 sm:p-4 lg:py-6 lg:px-6 lg:pr-0 min-h-[450px] bg-gray-50"
            style={{
              fontFamily: 'Poppins, sans-serif',
              fontWeight: 400,
              lineHeight: 1.5,
              color: '#212529',
              WebkitFontSmoothing: 'antialiased',
              boxSizing: 'border-box',
              margin: 0,
              listStyleType: 'none',
            }}
          >
            {/* 移动端和桌面端都使用垂直导航 */}
            <div className="flex flex-col gap-1 sm:gap-2 lg:gap-2">
              {Object.values(scenarioData).map((scenario, idx) => {
                const isActive = scenario.id === activeScenario
                const IconComponent = scenario.icon
                return (
                  <div
                    key={scenario.id}
                    onClick={() => setActiveScenario(scenario.id as keyof typeof scenarioData)}
                    onMouseEnter={() => handleMouseEnter(scenario.id)}
                    className={[
                      'relative flex cursor-pointer items-center justify-end px-2 sm:px-3 lg:px-3 lg:pr-6',
                      'h-10 sm:h-12 lg:h-14 mb-1 sm:mb-2 lg:mb-3', // 统一高度和间距
                      'rounded-none', // 移动端和桌面端都不使用圆角
                      'whitespace-nowrap', // 防止文字换行
                      isActive
                        ? 'text-white bg-[linear-gradient(270deg,#455FFE_0%,rgba(26,140,255,0)_100%)]'
                        : 'hover:bg-gray-200 bg-transparent text-gray-700',
                    ].join(' ')}
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      fontWeight: 400,
                      lineHeight: 1.5,
                    }}
                  >
                    <div className="flex items-center gap-1 sm:gap-2">
                      <IconComponent className={`h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 flex-shrink-0 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                      <span className="truncate text-xs sm:text-sm lg:text-base">{scenario.name}</span>
                      <ChevronRightIcon className={`h-3 w-3 sm:h-4 sm:w-4 ${isActive ? 'text-white' : 'text-gray-600'}`} />
                    </div>
                  </div>
                )
              })}
            </div>
          </aside>

          {/* 内容面板 - 移动端和桌面端都使用右侧布局 - 增强半透明遮罩和毛玻璃效果 */}
          <section
            className="flex-1 text-gray-700 rounded-none flex flex-col justify-between order-2 w-[65%] sm:w-[68%] lg:w-[72%] p-3 sm:p-4 lg:py-6 lg:px-10 min-h-[450px] relative overflow-hidden"
            style={{
              backgroundImage: `url(${primaryFeaturesImage.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            {/* 毛玻璃遮罩层 */}
            <div
              className="absolute inset-0 z-0"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
              }}
            />

            {/* 内容区域 */}
            <div className="relative z-10 flex flex-col justify-between h-full">
            {/* 头部标题区域 - 响应式优化 */}
            <div className="flex-shrink-0 mb-3 sm:mb-4 lg:mb-6">
              <div className="text-base sm:text-lg lg:text-2xl xl:text-3xl font-bold text-gray-800 mb-1 sm:mb-2 lg:mb-3 tracking-wide leading-tight">{currentScenario.title}</div>
              <div className="w-12 sm:w-16 lg:w-24 h-px bg-white mb-2 sm:mb-3 lg:mb-4 rounded-full"></div>
            </div>

            {/* 主要内容区域 - 响应式网格优化 */}
            <div className="flex-1 flex flex-col justify-center py-1 sm:py-2">
              <div className="grid grid-cols-1 gap-3 sm:gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-10 items-start">
                {currentScenario.features.map((f, i) => (
                  <Feature key={i} icon={f.icon} title={f.title} desc={f.desc} />
                ))}
              </div>
            </div>

            {/* 底部操作区域 - 响应式按钮优化 */}
            <div className="flex-shrink-0 pt-3 sm:pt-4 lg:pt-6 mt-2 sm:mt-3 lg:mt-4">
              {/* 分隔线效果 */}
              <div className="mb-3 sm:mb-4 lg:mb-6 w-full bg-white" style={{ height: '0.5px' }} />

              <div className="flex flex-col sm:flex-row justify-start items-stretch sm:items-center gap-2 sm:gap-3 lg:gap-4">
                {/* 了解详情按钮 */}
                <button
                  className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-medium text-white shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-200 min-h-[36px] sm:min-h-[40px] lg:min-h-[44px] flex items-center justify-center sm:justify-start gap-1 sm:gap-2"
                  type="button"
                >
                  了解详情
                  <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                </button>

                {/* 联系客服按钮 */}
                <button
                  className="border border-gray-300 bg-white px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-medium text-gray-900 shadow-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 min-h-[36px] sm:min-h-[40px] lg:min-h-[44px] flex items-center justify-center sm:justify-start gap-1 sm:gap-2"
                  type="button"
                >
                  联系客服
                  <ChatBubbleLeftRightIcon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-900" />
                </button>
              </div>
            </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

/**
 * 默认导出 ScenariosSection 组件
 */
export default ScenariosSection
