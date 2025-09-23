'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'
import {
  DevicePhoneMobileIcon,
  CreditCardIcon,
  CurrencyYenIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Carousel } from '@/components/carousel'

/**
 * FAQ数据结构定义
 */
interface FAQ {
  question: string
  answer: string
}

/**
 * FAQ分类结构定义
 */
interface FAQCategory {
  name: string
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  faqs: FAQ[]
}

/**
 * FAQ分类数据
 * 包含六个主要分类：办理前、使用中、费用与到账、代理/招商、售后与投诉、产品选择
 */
const faqCategories: FAQCategory[] = [
  {
    name: '办理前',
    icon: DevicePhoneMobileIcon,
    faqs: [
      {
        question: '没有营业执照能办 POS 机吗？',
        answer: '可以。银盛/拉卡拉电签版支持个人身份证入网，秒审秒批，仅用于小微收款。个人凭身份证即可办理，无需营业执照，审核通过后当天发货。',
      },
      {
        question: '一个人最多能办几台？',
        answer: '同一身份证最多可注册 2 台电签；如需更多，可用家人资料或升级做代理。代理可享受分润万12-万16，激活返现299元/台的优惠政策。',
      },
      {
        question: '办理需要费用吗？',
        answer: '机器 0 元包邮，无激活费、无押金；快递签收后 30 天内激活即可，快递费我方承担。激活后即可享受0.38%费率，永不+3。',
      },
      {
        question: '多久发货？发什么快递？',
        answer: '工作日 16:00 前提交，当天出仓；默认顺丰陆运，全国（含乡镇）一般 2-3 天送达。',
      },
      {
        question: '0.38% 费率是套路吗？',
        answer: '贷记卡 0.38% 永不+3 写入电子协议，调价须提前 30 天书面通知，否则差额双倍赔付，可下载央行牌照核验。费率透明，无隐藏费用。',
      },
    ],
  },
  {
    name: '使用中',
    icon: CreditCardIcon,
    faqs: [
      {
        question: '刷卡多久到账？',
        answer: '7:00-22:30 交易秒到；22:30-次日 7:00 交易 T+1 上午 10 点前到账；节假日正常。资金直接结算到您的个人储蓄卡，无需对公账户。',
      },
      {
        question: '为什么刷卡不到账？',
        answer: '①结算卡Ⅱ类卡限额→换Ⅰ类卡；②交易风控→APP 上传小票即可；③系统维护→官网公告查看。如遇问题可拨打客服电话95000或通过APP在线客服解决。',
      },
      {
        question: '如何查看交易记录？',
        answer: '登录「银盛通」APP → 首页「交易查询」→ 可导出 Excel，支持按日/按月筛选。所有交易记录清晰可查，方便财务管理对账。',
      },
      {
        question: '可以异地刷卡吗？',
        answer: '支持全国落地本地商户，出差/旅游照常使用；如常驻地变更，APP 内「定位更新」即可。',
      },
      {
        question: '如何打印小票？',
        answer: '电签版为电子小票，交易完成自动推送 PDF 到 APP，可连接蓝牙热敏打印机（另购）出纸质票。',
      },
    ],
  },
  {
    name: '费用与到账',
    icon: CurrencyYenIcon,
    faqs: [
      {
        question: '费率会偷偷涨吗？',
        answer: '系统费率写入终端固件，如上调需向银联报备并提前 30 天推送消息，用户可无条件停用。我们承诺费率稳定，保障商户权益。',
      },
      {
        question: '为何被扣 48 元？',
        answer: '为流量年卡费用，交易时自动抵扣，余额不足会提示充值，不充值不影响已刷卡到账。内置4G卡，前30天免费，之后每年仅需48元流量费。',
      },
      {
        question: '结算卡换卡怎么操作？',
        answer: 'APP → 我的 → 结算账户 → 更换储蓄卡 → 短信验证 → 秒生效；T 日换卡，T+1 到新卡。',
      },
      {
        question: '可以做对公结算吗？',
        answer: '支持，提交营业执照+对公账户即可，T+1 到账，开票需另加 6% 税点。',
      },
      {
        question: '手续费怎么开发票？',
        answer: '在 APP「发票中心」勾选月份，系统开具 6% 增值税专用发票，PDF 直发邮箱，纸质票顺丰到付。',
      },
    ],
  },
  {
    name: '代理/招商',
    icon: UserGroupIcon,
    faqs: [
      {
        question: '怎么做代理？需要交钱吗？',
        answer: '0 加盟费，1 台起拿总部直签；激活返现 299 元/台，分润万 12-万 16，后台 T+1 自动发放。提供完整培训支持，新手7天可出首台。',
      },
      {
        question: '分润什么时候发？',
        answer: '总部统一在每日上午 10:00 自动打款到您储蓄卡，节假日不休，流水可在后台实时查询。分润透明，系统自动结算，无需手动申请。',
      },
      {
        question: '可以发展下级吗？',
        answer: '支持无限下级，后台可开二级代理，分润差实时结算，二级激活您同样享受 30 元/台级差奖励。提供完整代理管理体系，助力业务拓展。',
      },
      {
        question: '卖不掉可以退货吗？',
        answer: '180 天内未激活按原价回收，运费我方承担；已激活机器不退，可转赠下级。',
      },
      {
        question: '会培训吗？给不给客户资源？',
        answer: '提供 3 套地推话术+抖音同城模板+朋友圈素材；无客户资源分配，但教您 0 成本获客方法。',
      },
    ],
  },
  {
    name: '售后与投诉',
    icon: ShieldCheckIcon,
    faqs: [
      {
        question: '客服电话是多少？',
        answer: '银盛全国客服：95000（7×24），微信客服：「银盛通」APP-在线客服，平均响应 30 秒。专业客服团队随时为您解决问题。',
      },
      {
        question: '刷卡不到账投诉渠道？',
        answer: '① APP 内「异常报备」；② 95000 按 3 键；③ 银联投诉 95516；④ 央行金融消费权益保护热线 12363。多重投诉渠道，保障您的权益。',
      },
      {
        question: '机器坏了怎么办？',
        answer: '非人为损坏 12 个月内免费换新；人为损坏（摔/进水）补 59 元换新，旧机回收。全国联保，售后无忧，让您的收款更安心。',
      },
      {
        question: '押金不退怎么办？',
        answer: '我方机器无押金，如遇到代理商收取押金，请提供聊天记录+转账凭证，总部 3 个工作日原路退回并处罚代理。',
      },
      {
        question: '如何注销机具？',
        answer: 'APP → 我的 → 设备管理 → 申请注销 → 上传结算卡+身份证正反面，3 个工作日完成，注销后可重新注册新设备。',
      },
    ],
  },
  {
    name: '产品选择',
    icon: Cog6ToothIcon,
    faqs: [
      {
        question: '哪些卡可以刷？',
        answer: '支持境内银联贷记卡、借记卡、微信、支付宝、云闪付、Apple Pay、Huawei Pay、花呗。全渠道支付方式，满足各类收款需求。',
      },
      {
        question: '电签POS和手机POS有什么区别？',
        answer: '电签POS是实体设备，支持刷卡、插卡、NFC等多种支付方式；手机POS是软件，通过手机音频或蓝牙连接刷卡器。电签POS更稳定，手机POS更便携，可根据实际需求选择。',
      },
      {
        question: '对公账户/银行卡有要求吗？',
        answer: '结算卡只需Ⅰ类储蓄卡（工行、建行、招行等均可），无需对公账户，个人储蓄卡秒到。支持个人结算，方便小微商户和个体户使用。',
      },
      {
        question: '流量费怎么收？',
        answer: '内置 4G 卡，前 30 天免费，第 31 天一次性扣取 48 元/年，平均 4 元/月，再无其他费用。',
      },
    ],
  },
]

/**
 * 页面头部横幅组件 - FAQ Hero区域
 * 基于ECSVideoHero组件设计，使用VideoCarousel组件展示FAQ页面头部
 */
function HeroBanner() {
  const faqVideoSlide = [
    {
      id: 1,
      order: 1,
      title: '常见问题解答',
      subtitle: '快速找到您需要的答案',
      description:
        '如果您有其他问题，请随时联系我们的客服团队，我们将为您提供专业的解答和支持。',
      imagePath: '/images/carousel/HeaderCarousel.jpg',
      imageAlt: '常见问题解答背景图',
      primaryButtonText: '联系客服',
      primaryButtonHref: '/contact',
    },
  ]

  return (
    <Carousel
      autoPlay={false}
      showIndicators={false}
      heightClass="h-[400px] md:h-[450px] lg:h-[550px]"
      slides={faqVideoSlide}
      className=""
    />
  )
}

/**
 * FAQ内容区域组件
 */
function FAQContent() {
  const [selectedCategory, setSelectedCategory] = useState(0)

  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto">
          {/* 分类标签页 */}
          <div className="mb-12">
            <TabGroup
              selectedIndex={selectedCategory}
              onChange={setSelectedCategory}
            >
              <TabList className="flex flex-wrap justify-center gap-2 sm:gap-4">
                {faqCategories.map((category) => {
                  const IconComponent = category.icon
                  return (
                    <Tab
                      key={category.name}
                      className="group relative min-w-0 flex-1 overflow-hidden border border-gray-200 bg-white px-3 py-3 text-center text-sm font-medium hover:bg-gray-50 focus:z-10 focus:outline-none data-[selected]:bg-blue-50 data-[selected]:text-blue-600 sm:px-6 sm:py-4"
                    >
                      <div className="mx-auto flex items-center justify-center">
                        <IconComponent
                          className="h-5 w-5 flex-shrink-0"
                          aria-hidden="true"
                        />
                        <span className="ml-2 truncate">{category.name}</span>
                      </div>
                    </Tab>
                  )
                })}
              </TabList>

              <TabPanels className="mt-8">
                {faqCategories.map((category) => (
                  <TabPanel key={category.name} className="focus:outline-none">
                    <dl className="space-y-6">
                      {category.faqs.map((faq, index) => (
                        <Disclosure
                          key={index}
                          as="div"
                          className="border border-gray-200 bg-white"
                        >
                          <dt>
                            <DisclosureButton className="group flex w-full items-start justify-between p-6 text-left hover:bg-gray-50 focus:outline-none">
                              <span className="pr-6 text-base font-semibold text-gray-900">
                                {faq.question}
                              </span>
                              <span className="ml-6 flex h-7 flex-shrink-0 items-center">
                                <PlusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 transition-transform duration-200 group-data-[open]:hidden text-blue-600"
                />
                <MinusSmallIcon
                  aria-hidden="true"
                  className="h-6 w-6 transition-transform duration-200 group-not-data-[open]:hidden text-blue-600"
                />
                              </span>
                            </DisclosureButton>
                          </dt>
                          <DisclosurePanel as="dd" className="px-6 pb-6">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-base leading-7 text-gray-600">
                                {faq.answer}
                              </p>
                            </div>
                          </DisclosurePanel>
                        </Disclosure>
                      ))}
                    </dl>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>
          </div>

          {/* 联系支持 */}
          <div className="mt-16">
            <div className="border border-gray-200 bg-white p-8">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="text-center lg:text-left">
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">
                    没有找到您要的答案？
                  </h3>
                  <p className="text-gray-600">
                    我们的技术支持团队随时为您提供帮助
                  </p>
                </div>
                <div className="flex flex-shrink-0 flex-col justify-center gap-4 sm:flex-row lg:justify-end">
                  <Button
                    variant="solid"
                    color="blue"
                    className="px-6 py-3 text-base"
                  >
                    <Link href="/contact">联系客服</Link>
                  </Button>
                  <Button
                    variant="outline"
                    color="blue"
                    className="px-6 py-3 text-base"
                  >
                    <Link href="/support/ticket">提交工单</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

/**
 * FAQ页面主组件
 * 展示POS机相关的常见问题解答
 * @returns JSX.Element
 */
export default function FAQPage() {
  return (
    <>
      <Header />
      <main>
        {/* 页面头部横幅 */}
        <HeroBanner />

        {/* FAQ内容区域 */}
        <FAQContent />
      </main>
      <Footer />
    </>
  )
}
