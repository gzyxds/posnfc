'use client'

import { useState } from 'react'
import {
  CreditCardIcon,
  ShieldCheckIcon,
  DevicePhoneMobileIcon,
  QrCodeIcon,
  ChartBarIcon,
  UserGroupIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'

/**
 * POS机功能展示组件 - 采用 Payindustry 双列布局风格
 * 左侧为导航列表，右侧为内容面板，支持响应式设计
 */
export function PosFeatureTabs() {
  const [activeTab, setActiveTab] = useState('aggregatePayment')

  // POS机功能数据 - 保持原有核心信息，优化文案长度
  const posFeatures: {
    [key: string]: {
      id: string
      name: string
      title: string
      icon: React.ComponentType<{ className?: string }>
      features: {
        icon: React.ComponentType<{ className?: string }>
        title: string
        desc: string
      }[]
    }
  } = {
    aggregatePayment: {
      id: 'aggregatePayment',
      name: '聚合收款',
      title: '聚合收款解决方案',
      icon: QrCodeIcon,
      features: [
        { icon: CreditCardIcon, title: '多渠道收款', desc: '支持微信、支付宝、银联云闪付等主流支付方式' },
        { icon: QrCodeIcon, title: '聚合码牌', desc: '一码收全款，支持所有主流扫码支付' },
        { icon: DevicePhoneMobileIcon, title: '实时到账', desc: '7×24小时实时到账，资金周转更灵活' },
        { icon: ShieldCheckIcon, title: '安全保障', desc: '银行级安全防护，交易数据加密传输' },
      ],
    },
    digitalBusiness: {
      id: 'digitalBusiness',
      name: '数字经营',
      title: '数字化经营管理',
      icon: ChartBarIcon,
      features: [
        { icon: ChartBarIcon, title: '经营分析', desc: '深度分析交易数据，提供经营洞察和建议' },
        { icon: UserGroupIcon, title: '客户管理', desc: '智能客户画像，精准营销和客户维护' },
        { icon: DevicePhoneMobileIcon, title: '库存管理', desc: '实时库存监控，智能补货提醒' },
        { icon: CreditCardIcon, title: '财务报表', desc: '自动生成财务报表，经营状况一目了然' },
      ],
    },
    marketing: {
      id: 'marketing',
      name: '营销功能',
      title: '智能营销工具',
      icon: UserGroupIcon,
      features: [
        { icon: UserGroupIcon, title: '优惠券营销', desc: '多样化优惠券模板，灵活设置营销活动' },
        { icon: CreditCardIcon, title: '会员积分', desc: '完善的会员体系，积分兑换增强客户粘性' },
        { icon: DevicePhoneMobileIcon, title: '拼团秒杀', desc: '社交电商功能，拼团秒杀提升销量' },
        { icon: ChartBarIcon, title: '营销分析', desc: '营销效果数据分析，优化推广策略' },
      ],
    },
    posCashier: {
      id: 'posCashier',
      name: 'POS机收银',
      title: 'POS机收银系统',
      icon: CreditCardIcon,
      features: [
        { icon: CreditCardIcon, title: '刷卡收款', desc: '支持银联卡、信用卡、借记卡等传统刷卡支付' },
        { icon: DevicePhoneMobileIcon, title: '电签功能', desc: '电子签名确认，无纸化交易更环保' },
        { icon: QrCodeIcon, title: '小票打印', desc: '自动打印交易小票，完整交易记录' },
        { icon: ShieldCheckIcon, title: '风控保护', desc: '智能风控系统，实时监控异常交易' },
      ],
    },
    cashierHardware: {
      id: 'cashierHardware',
      name: '收银硬件',
      title: '收银硬件设备',
      icon: DevicePhoneMobileIcon,
      features: [
        { icon: DevicePhoneMobileIcon, title: '智能POS机', desc: 'Android系统智能POS，支持多种应用扩展' },
        { icon: QrCodeIcon, title: '扫码枪', desc: '高精度扫码设备，快速识别商品条码' },
        { icon: CreditCardIcon, title: '钱箱打印机', desc: '收银钱箱和热敏打印机，完整收银配套' },
        { icon: ChartBarIcon, title: '数据同步', desc: '硬件数据实时同步，统一管理更便捷' },
      ],
    },
    paymentChannel: {
      id: 'paymentChannel',
      name: '支付通道',
      title: '支付通道服务',
      icon: ShieldCheckIcon,
      features: [
        { icon: ShieldCheckIcon, title: '一清机保障', desc: '央行牌照一清机，资金安全有保障' },
        { icon: CreditCardIcon, title: '多通道备份', desc: '多个支付通道备份，确保交易成功率' },
        { icon: DevicePhoneMobileIcon, title: '风控系统', desc: '智能风控系统，实时监控异常交易' },
        { icon: ChartBarIcon, title: '通道优化', desc: '智能路由选择，提升交易成功率' },
      ],
    },
  }

  const currentFeature = posFeatures[activeTab]

  /**
   * 根据功能名称获取对应的背景图片路径
   * @param featureName - 功能名称
   * @returns 图片路径
   */
  const getBackgroundImage = (featureName: string): string => {
    const imageMap: { [key: string]: string } = {
      '聚合收款': '/images/screenshots/Accordion.svg',
      '数字经营': '/images/screenshots/internet.svg',
      '营销功能': '/images/screenshots/Accordion1.svg',
      'POS机收银': '/images/screenshots/Accordion2.svg',
      '收银硬件': '/images/screenshots/Accordion3.svg',
      '支付通道': '/images/screenshots/Accordion.svg',
    }
    return imageMap[featureName] || '/images/screenshots/Accordion.svg'
  }

  /**
   * 处理鼠标悬停事件，自动切换到对应标签
   * @param tabId - 标签ID
   */
  const handleMouseEnter = (tabId: string) => {
    setActiveTab(tabId)
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
    <div className="flex flex-col items-start gap-1 sm:gap-2 lg:gap-3">
      <div className="flex items-center justify-center">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6 text-white" />
      </div>
      <div className="text-xs sm:text-sm lg:text-base leading-5 sm:leading-6 text-gray-300">
        <div className="font-medium text-white text-xs sm:text-sm lg:text-base mb-0.5 sm:mb-1">{title}</div>
        <div className="text-white text-xs sm:text-xs lg:text-sm leading-4 sm:leading-5">{desc}</div>
      </div>
    </div>
  )

  return (
    <div
      className="w-full relative min-h-[60vh] sm:min-h-screen lg:min-h-[75vh]"
      style={{
        fontFamily: 'Microsoft YaHei, Arial, sans-serif',
      }}
    >
      {/* 背景图层 - 桌面端使用 retail.jpg，移动端使用 PrimaryFeatures.png */}
      <div
        className="absolute inset-0 -z-10 hidden sm:block"
        style={{
          backgroundImage: `url(/images/screenshots/retail.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
          minHeight: '100vh',
        }}
      />

      {/* 移动端专用背景图层 - 移除模糊和透明度，确保清晰显示 */}
      <div
        className="absolute inset-0 -z-10 block sm:hidden"
        style={{
          backgroundImage: `url(/images/screenshots/Productdisplay.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
          minHeight: '60vh',
        }}
      />
      {/* 顶部标题 */}
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 pt-4 sm:pt-6 lg:pt-8">
        <div className="text-center">
          <div className="font-bold text-white mb-2 tracking-wide text-xl sm:text-2xl md:text-4xl lg:text-5xl">不止于收银，更是商家经营的好帮手</div>
          <div className="text-white font-medium text-base sm:text-lg md:text-2xl">助力商户业务增长</div>
        </div>
      </div>

      {/* 主体响应式布局 */}
      <div className="mx-auto mt-3 sm:mt-4 max-w-[1800px] px-4 sm:px-6 pb-8 sm:pb-20">
        <div className="flex flex-row gap-0 sm:gap-4 lg:gap-0">
           {/* 导航区域 - 移动端左侧，桌面端左侧 - 添加半透明遮罩和毛玻璃效果 */}
           <aside
             className="shrink-0 text-sm rounded-none order-1 w-[35%] sm:w-[32%] lg:w-[28%] p-2 sm:p-4 lg:py-6 lg:px-6 lg:pr-0 min-h-auto lg:min-h-[450px]"
             style={{
               fontFamily: 'Poppins, sans-serif',
               background: 'rgba(0,0,0,.05)', // 移动端降低透明度
               backdropFilter: 'blur(10px)', // 恢复为10px模糊效果
               fontWeight: 400,
               lineHeight: 1.5,
               color: '#212529',
               WebkitFontSmoothing: 'antialiased',
               boxSizing: 'border-box',
               margin: 0,
               listStyleType: 'none',
             }}
           >
             {/* 移动端和桌面端：垂直导航 */}
             <div className="flex flex-col gap-1 sm:gap-2 lg:gap-2 px-1 sm:px-2 lg:px-0 lg:pr-0">
               {Object.values(posFeatures).map((feature, idx) => {
                 const isActive = feature.id === activeTab
                 const IconComponent = feature.icon
                 return (
                   <div
                     key={feature.id}
                     onClick={() => setActiveTab(feature.id)}
                     onMouseEnter={() => handleMouseEnter(feature.id)}
                     className={[
                       'relative flex cursor-pointer items-center justify-start lg:justify-end px-2 sm:px-3 lg:px-3 lg:pr-6',
                       'h-10 sm:h-12 lg:h-14 min-h-[40px] sm:min-h-[44px]', // 移动端减小高度
                       'mb-1 sm:mb-2 lg:mb-3', // 调整间距
                       'lg:rounded-none', // 移动端和桌面端都不使用圆角
                       'whitespace-nowrap', // 防止文字换行
                       isActive
                         ? 'text-white bg-[linear-gradient(270deg,#455FFE_0%,rgba(26,140,255,0)_100%)]'
                         : 'hover:bg-gray-700/60 bg-gray-800/40 lg:bg-transparent',
                     ].join(' ')}
                     style={{
                       fontFamily: 'Poppins, sans-serif',
                       fontWeight: 400,
                       lineHeight: 1.5,
                       color: '#fff'
                     }}
                   >
                     <div className="flex items-center gap-1 sm:gap-2 lg:gap-2">
                       <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5 text-white flex-shrink-0" />
                       <span className="truncate text-xs sm:text-sm lg:text-base">{feature.name}</span>
                       <ChevronRightIcon className="h-3 w-3 sm:h-4 sm:w-4 text-white hidden sm:block lg:hidden ml-auto" />
                     </div>
                   </div>
                 )
               })}
             </div>
           </aside>

           {/* 内容面板 - 移动端右侧，桌面端右侧 - 增强半透明遮罩和毛玻璃效果 */}
           <section
             className="flex-1 text-gray-300 rounded-none flex flex-col justify-between order-2 w-[65%] sm:w-[68%] lg:w-[72%] p-2 sm:p-4 lg:py-6 lg:px-10 min-h-auto lg:min-h-[450px]"
             style={{
               background: 'rgba(0,0,0,.08)', // 移动端降低透明度
               backdropFilter: 'blur(15px)', // 恢复为15px模糊效果
             }}
           >
             {/* 头部标题区域 - 响应式优化 */}
             <div className="flex-shrink-0 mb-2 sm:mb-4 lg:mb-6">
               <div className="text-sm sm:text-lg lg:text-2xl xl:text-3xl font-bold text-white mb-1 sm:mb-2 lg:mb-3 tracking-wide leading-tight">{currentFeature.title}</div>
               <div className="w-12 sm:w-16 lg:w-24 h-0.5 sm:h-0.5 lg:h-1 bg-gradient-to-r from-blue-500 to-blue-400 mb-2 sm:mb-3 lg:mb-4 rounded-full"></div>
             </div>

             {/* 主要内容区域 - 响应式网格优化 */}
             <div className="flex-1 flex flex-col justify-center py-1 sm:py-2">
               <div className="grid grid-cols-1 gap-2 sm:gap-4 lg:grid-cols-2 lg:gap-8 xl:gap-10 items-start">
                 {currentFeature.features.map((f, i) => (
                   <Feature key={i} icon={f.icon} title={f.title} desc={f.desc} />
                 ))}
               </div>
             </div>

             {/* 底部操作区域 - 响应式按钮优化 */}
             <div className="flex-shrink-0 pt-2 sm:pt-4 lg:pt-6 mt-2 sm:mt-3 lg:mt-4">
               {/* 分隔线效果 */}
               <div className="mb-2 sm:mb-4 lg:mb-6 w-full bg-gradient-to-r from-white/20 via-white/10 to-transparent" style={{ height: '1px' }} />

               <div className="flex flex-col gap-2 sm:flex-row sm:justify-start sm:items-center sm:gap-3 lg:gap-4">
                 {/* 了解详情按钮 */}
                 <button
                   className="bg-gradient-to-r from-blue-600 to-blue-700 px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-medium text-white shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-200 min-h-[36px] sm:min-h-[44px] flex items-center justify-center gap-1 sm:gap-2"
                   type="button"
                 >
                   了解详情
                   <ArrowRightIcon className="h-3 w-3 sm:h-4 sm:w-4" />
                 </button>

                 {/* 联系客服按钮 */}
                 <button
                   className="border border-gray-300 bg-white px-3 sm:px-6 lg:px-8 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base font-medium text-gray-900 shadow-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 min-h-[36px] sm:min-h-[44px] flex items-center justify-center gap-1 sm:gap-2"
                   type="button"
                 >
                   联系客服
                   <ChatBubbleLeftRightIcon className="h-3 w-3 sm:h-4 sm:w-4 text-gray-900" />
                 </button>
               </div>
             </div>
          </section>
        </div>
      </div>
    </div>
  )
}

/**
 * 向后兼容的 Accordion 组件
 * 直接导出 PosFeatureTabs 组件
 */
export function Accordion() {
  return <PosFeatureTabs />
}


