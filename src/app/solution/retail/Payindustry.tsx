"use client"
import React, { useState } from 'react'
import {
  BanknotesIcon,
  CreditCardIcon,
  DevicePhoneMobileIcon,
  ShoppingBagIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  ChatBubbleLeftRightIcon,
  BuildingStorefrontIcon,
  BuildingOffice2Icon,
  HomeIcon,
  SparklesIcon,
  CakeIcon,
  FireIcon,
  FaceSmileIcon,
  BeakerIcon as CupIcon,
  TruckIcon,
  MapPinIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline'

/**
 * 参考截图复刻的双列布局页面：左侧为导航列表，右侧为内容面板
 * 仅用于视觉与结构复刻，不涉及真实数据与交互
 */
export default function Payindustry() {
  // 标签及对应的内容数据 - 根据关键词布局文档更新的11个行业类别
  const tabs: {
    name: string
    title: string
    icon: React.ComponentType<{ className?: string }>
    features: {
      icon: React.ComponentType<{ className?: string }>
      title: string
      desc: string
    }[]
  }[] = [
    {
      name: '标超卖场',
      title: '标准超市卖场解决方案',
      icon: BuildingStorefrontIcon,
      features: [
        { icon: CreditCardIcon, title: '快速收银系统', desc: '支持多种支付方式，提升收银效率' },
        { icon: ShoppingBagIcon, title: '商品管理', desc: '条码扫描，库存实时更新' },
        { icon: DevicePhoneMobileIcon, title: '价格管理', desc: '电子价签，统一价格策略' },
        { icon: BanknotesIcon, title: '营业报表', desc: '日销售统计，经营数据分析' },
      ],
    },
    {
      name: '连锁超市',
      title: '连锁超市解决方案',
      icon: BuildingOffice2Icon,
      features: [
        { icon: CreditCardIcon, title: '统一收银系统', desc: '多门店统一收银流程与标准' },
        { icon: DevicePhoneMobileIcon, title: '总部管控', desc: '远程监控各门店经营状况' },
        { icon: ShoppingBagIcon, title: '供应链管理', desc: '统一采购，配送优化' },
        { icon: BanknotesIcon, title: '财务结算', desc: '多门店财务统一管理' },
      ],
    },
    {
      name: '社区便利',
      title: '社区便利店解决方案',
      icon: HomeIcon,
      features: [
        { icon: DevicePhoneMobileIcon, title: '便民服务', desc: '生活缴费，快递代收' },
        { icon: CreditCardIcon, title: '快捷支付', desc: '扫码支付，现金找零' },
        { icon: ShoppingBagIcon, title: '会员积分', desc: '积分兑换，促进复购' },
        { icon: BanknotesIcon, title: '小额收银', desc: '适合小额高频交易场景' },
      ],
    },
    {
      name: '果蔬生鲜',
      title: '果蔬生鲜解决方案',
      icon: SparklesIcon,
      features: [
        { icon: ShoppingBagIcon, title: '称重计价', desc: '电子秤集成，自动计算价格' },
        { icon: CreditCardIcon, title: '生鲜收银', desc: '支持称重商品快速结算' },
        { icon: DevicePhoneMobileIcon, title: '保质期管理', desc: '临期商品提醒与促销' },
        { icon: BanknotesIcon, title: '损耗统计', desc: '生鲜损耗分析与控制' },
      ],
    },
    {
      name: '熟食烘焙',
      title: '熟食烘焙解决方案',
      icon: CakeIcon,
      features: [
        { icon: ShoppingBagIcon, title: '现制现售', desc: '支持现场制作商品管理' },
        { icon: CreditCardIcon, title: '套餐组合', desc: '灵活的套餐定价策略' },
        { icon: DevicePhoneMobileIcon, title: '预订服务', desc: '生日蛋糕等预订管理' },
        { icon: BanknotesIcon, title: '成本核算', desc: '原料成本与利润分析' },
      ],
    },
    {
      name: '小吃快餐',
      title: '小吃快餐解决方案',
      icon: FireIcon,
      features: [
        { icon: DevicePhoneMobileIcon, title: '快速下单', desc: '移动点餐，减少排队时间' },
        { icon: CreditCardIcon, title: '多样支付', desc: '现金、刷卡、扫码全支持' },
        { icon: ShoppingBagIcon, title: '外卖对接', desc: '美团、饿了么订单统一管理' },
        { icon: BanknotesIcon, title: '翻台统计', desc: '餐桌周转率分析优化' },
      ],
    },
    {
      name: '时尚中餐',
      title: '时尚中餐解决方案',
      icon: FaceSmileIcon,
      features: [
        { icon: DevicePhoneMobileIcon, title: '智能点餐', desc: '扫码点餐，个性化推荐' },
        { icon: ShoppingBagIcon, title: '菜品管理', desc: '季节性菜单，库存联动' },
        { icon: CreditCardIcon, title: '分账结算', desc: '支持AA制等多种结算方式' },
        { icon: BanknotesIcon, title: '会员营销', desc: '储值优惠，会员等级管理' },
      ],
    },
    {
      name: '奶茶饮品',
      title: '奶茶饮品解决方案',
      icon: CupIcon,
      features: [
        { icon: DevicePhoneMobileIcon, title: '在线点单', desc: '小程序点餐，到店自取' },
        { icon: ShoppingBagIcon, title: '配料管理', desc: '多种配料组合，库存提醒' },
        { icon: CreditCardIcon, title: '会员储值', desc: '充值优惠，提升客户粘性' },
        { icon: BanknotesIcon, title: '销量分析', desc: '热销产品统计，优化菜单' },
      ],
    },
    {
      name: '农贸市场',
      title: '农贸市场解决方案',
      icon: TruckIcon,
      features: [
        { icon: CreditCardIcon, title: '统一收银', desc: '市场统一收银系统管理' },
        { icon: ShoppingBagIcon, title: '摊位管理', desc: '摊位费收取，经营监管' },
        { icon: DevicePhoneMobileIcon, title: '食品溯源', desc: '农产品来源追踪管理' },
        { icon: BanknotesIcon, title: '市场结算', desc: '摊主与市场方分账清晰' },
      ],
    },
    {
      name: '景区商圈',
      title: '景区商圈解决方案',
      icon: MapPinIcon,
      features: [
        { icon: DevicePhoneMobileIcon, title: '移动收银', desc: '便携设备，随时随地收款' },
        { icon: CreditCardIcon, title: '多币种支付', desc: '支持外币，服务国际游客' },
        { icon: ShoppingBagIcon, title: '纪念品管理', desc: '特色商品，季节性调整' },
        { icon: BanknotesIcon, title: '客流分析', desc: '游客消费习惯数据分析' },
      ],
    },
    {
      name: '美食城',
      title: '美食城解决方案',
      icon: UserGroupIcon,
      features: [
        { icon: CreditCardIcon, title: '统一支付', desc: '一卡通消费，各档口分账' },
        { icon: DevicePhoneMobileIcon, title: '排队叫号', desc: '智能排队，提升就餐体验' },
        { icon: ShoppingBagIcon, title: '档口管理', desc: '各商户独立经营数据' },
        { icon: BanknotesIcon, title: '租金结算', desc: '基于营业额的租金分成' },
      ],
    },
  ]

  const [active, setActive] = useState(0) // 默认选中"标超卖场"

  /**
   * 根据标签名称获取对应的背景图片路径
   * @param tabName - 标签名称
   * @returns 图片路径
   */
  const getBackgroundImage = (tabName: string): string => {
    // 根据标签名称匹配对应的图片文件
    const imageMap: { [key: string]: string } = {
      '标超卖场': '/images/screenshots/标超卖场.webp',
      '连锁超市': '/images/screenshots/连锁超市.webp',
      '社区便利': '/images/screenshots/社区便利.webp',
      '果蔬生鲜': '/images/screenshots/果蔬生鲜.webp',
      '熟食烘焙': '/images/screenshots/熟食烘焙.webp',
      '小吃快餐': '/images/screenshots/小吃快餐.webp',
      '时尚中餐': '/images/screenshots/时尚中餐.webp',
      '奶茶饮品': '/images/screenshots/奶茶饮品.webp',
      '农贸市场': '/images/screenshots/农贸市场.webp',
      '景区商圈': '/images/screenshots/景区商圈.webp',
      '美食城': '/images/screenshots/美食城.webp',
    }

    return imageMap[tabName] || '/images/screenshots/retail.png' // 默认图片
  }

  /**
   * 处理鼠标悬停事件，自动切换到对应标签
   * @param index - 标签索引
   */
  const handleMouseEnter = (index: number) => {
    setActive(index)
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
    <div className="flex flex-col items-start gap-3 sm:gap-4">
      <div className="flex items-center justify-center">
        <Icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
      </div>
      <div className="text-sm sm:text-base leading-6 text-gray-300">
        <div className="font-medium text-white text-base sm:text-lg mb-1 sm:mb-2">{title}</div>
        <div className="text-white text-sm sm:text-base">{desc}</div>
      </div>
    </div>
  )

  return (
    <div
        className="w-full relative min-h-screen lg:min-h-[80vh]"
        style={{
          fontFamily: 'Microsoft YaHei, Arial, sans-serif',
        }}
      >
      {/* 背景图层 - 带模糊效果 */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `url(${getBackgroundImage(tabs[active].name)})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(3px)', // 60% 模糊效果，约等于 3px
        }}
      />
      {/* 顶部标题 */}
      <div className="mx-auto max-w-[1800px] px-4 sm:px-6 pt-6 sm:pt-8">
        <div className="text-center">
          <div className="font-bold text-white mb-2 tracking-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl">全行业解决方案</div>
          <div className="text-white font-medium text-lg sm:text-xl md:text-2xl">助力商家门店数智化运营</div>
        </div>
      </div>

      {/* 主体响应式布局 */}
      <div className="mx-auto mt-4 max-w-[1800px] px-4 sm:px-6 pb-6">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0">
          {/* 导航区域 - 移动端上方，桌面端左侧 */}
          <aside
             className="shrink-0 text-sm rounded-none order-1 lg:order-1 w-full lg:w-1/5 p-5 lg:py-8 lg:px-0 min-h-auto lg:min-h-[500px]"
             style={{
               fontFamily: 'Poppins, sans-serif',
               background: 'rgba(0,0,0,.7)',
               fontWeight: 400,
               lineHeight: 1.5,
               color: '#212529',
               WebkitFontSmoothing: 'antialiased',
               boxSizing: 'border-box',
               margin: 0,
               listStyleType: 'none',
             }}
           >
            {/* 移动端：横向滚动导航 */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible scrollbar-hide gap-2 lg:gap-0 px-4 lg:px-0">
              {tabs.map((t, idx) => {
                const isActive = idx === active
                const IconComponent = t.icon
                return (
                  <div
                    key={t.name}
                    onClick={() => setActive(idx)}
                    onMouseEnter={() => handleMouseEnter(idx)}
                    className={[
                      'relative flex cursor-pointer items-center justify-center lg:justify-end px-3 lg:px-3',
                      'h-12 min-h-[44px] min-w-[120px] lg:min-w-0', // 移动端最小宽度，确保触摸友好
                      'lg:h-11 lg:mb-1', // 桌面端样式
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
                    <div className="flex items-center gap-2">
                      <IconComponent className="h-4 w-4 lg:h-5 lg:w-5 text-white flex-shrink-0" />
                      <span className="truncate text-sm lg:text-base">{t.name}</span>
                      <ChevronRightIcon className="h-4 w-4 text-white hidden lg:block" />
                    </div>
                  </div>
                )
              })}
            </div>
          </aside>

          {/* 内容面板 - 移动端下方，桌面端右侧 */}
          <section
            className="flex-1 text-gray-300 rounded-none flex flex-col justify-between order-2 lg:order-2 w-full lg:w-4/5 p-5 lg:py-8 lg:px-12 min-h-auto lg:min-h-[500px]"
            style={{
              background: 'rgba(0,0,0,.6)',
              backdropFilter: 'blur(15px)',
            }}
          >
            {/* 头部标题区域 */}
            <div className="flex-shrink-0 mb-4 sm:mb-6">
              <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2 sm:mb-3 tracking-wide">{tabs[active].title}</div>
              <div className="w-16 sm:w-20 h-1 bg-blue-500 mb-4 sm:mb-6"></div>
            </div>

            {/* 主要内容区域 - 均匀分布 */}
            <div className="flex-1 flex flex-col justify-start pt-1 sm:pt-2 mb-4 sm:mb-6">
              <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
                {tabs[active].features.map((f, i) => (
                  <Feature key={i} icon={f.icon} title={f.title} desc={f.desc} />
                ))}
              </div>
            </div>

            {/* 底部操作区域 */}
            <div className="flex-shrink-0 pt-3 sm:pt-4">
              {/* 分隔线效果 */}
              {/* 0.25px 分割线：极细白线，用于轻微分隔底部按钮区域，保持整体轻盈感 */}
              <div className="mb-4 sm:mb-6 w-full bg-white/20" style={{ height: '0.25px' }} />

              <div className="flex justify-start gap-4">
                {/* 了解详情按钮 */}
                <button
                  className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 sm:px-8 py-3 text-sm sm:text-base font-medium text-white shadow-lg hover:from-blue-700 hover:to-blue-800 hover:shadow-xl transition-all duration-200 min-h-[44px] flex items-center gap-2"
                  type="button"
                >
                  了解详情
                  <ArrowRightIcon className="h-4 w-4" />
                </button>

                {/* 联系客服按钮 */}
                <button
                  className="border border-white/30 bg-white/10 backdrop-blur-sm px-6 sm:px-8 py-3 text-sm sm:text-base font-medium text-white shadow-lg hover:bg-white/20 hover:border-white/50 transition-all duration-200 min-h-[44px] flex items-center gap-2"
                  type="button"
                >
                  联系客服
                  <ChatBubbleLeftRightIcon className="h-4 w-4" />
                </button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
