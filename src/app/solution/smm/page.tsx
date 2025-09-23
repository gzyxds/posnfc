'use client'

import React from 'react'
import {
  BanknotesIcon,
  ChartBarIcon,
  CheckCircleIcon,
  ClockIcon,
  CloudIcon,
  CogIcon,
  ComputerDesktopIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  GiftIcon,
  PhoneIcon,
  ShieldCheckIcon,
  StarIcon,
  TagIcon,
  UserGroupIcon,
  UsersIcon,
  ChatBubbleLeftRightIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DualQRCodeButtonGroup } from '@/components/common/QRCode'
import clsx from 'clsx'
import Image from 'next/image'

/**
 * 产品优势项接口定义
 */
interface AdvantageItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

/**
 * 支付场景项接口定义
 */
interface ScenarioItem {
  title: string
  description: string
  image: string
  benefits: string[]
}

/**
 * 系统功能项接口定义
 */
interface FeatureItem {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  color: string
}

/**
 * FAQ项接口定义
 */
interface FAQItem {
  question: string
  answer: string
}

// 静态数据定义 - 移到组件外部避免重复创建
const ADVANTAGES_DATA: AdvantageItem[] = [
  {
    icon: BanknotesIcon,
    title: '超低费率',
    description: '0.38%费率永不上调，为小微商户节省每一分成本，提升盈利空间',
    color: 'text-green-600',
  },
  {
    icon: ClockIcon,
    title: '秒到账户',
    description: '7×24小时实时到账，资金周转无忧，支持节假日正常结算',
    color: 'text-blue-600',
  },
  {
    icon: CreditCardIcon,
    title: '多种支付',
    description: '支持扫码、刷卡、NFC闪付、云闪付等多种支付方式，满足不同客户需求',
    color: 'text-purple-600',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: '移动便携',
    description: '轻巧便携的移动POS机，随时随地收款，适合流动经营和上门服务',
    color: 'text-orange-600',
  },
  {
    icon: ShieldCheckIcon,
    title: '安全可靠',
    description: '银联认证，央行监管，多重安全防护，保障每一笔交易安全',
    color: 'text-red-600',
  },
  {
    icon: PhoneIcon,
    title: '专属服务',
    description: '7×24小时专属客服，一对一服务支持，问题响应及时解决',
    color: 'text-indigo-600',
  },
  {
    icon: GiftIcon,
    title: '免费申请',
    description: '0元免费申请，无押金无租金，当天申请当天下机，快速开通使用',
    color: 'text-pink-600',
  },
  {
    icon: ChartBarIcon,
    title: '数据统计',
    description: '实时交易数据统计，经营状况一目了然，助力科学决策',
    color: 'text-teal-600',
  },
]

const SCENARIOS_DATA: ScenarioItem[] = [
  {
    title: '便利店收银',
    description: '小型便利店、夫妻店的日常收银解决方案',
    image: '/images/screenshots/Productdisplay5.jpg',
    benefits: ['收银效率提升60%', '支持多种支付方式', '实时库存管理', '会员积分系统'],
  },
  {
    title: '餐饮小店',
    description: '小餐馆、奶茶店、小吃摊的移动收款',
    image: '/images/screenshots/Productdisplay6.jpg',
    benefits: ['扫码点餐收款', '桌台分单管理', '外卖平台对接', '营业数据统计'],
  },
  {
    title: '流动摊贩',
    description: '地摊经济、流动商贩的便携收款',
    image: '/images/screenshots/Productdisplay7.jpg',
    benefits: ['随时随地收款', '无需网络依赖', '电池续航持久', '防水防摔设计'],
  },
  {
    title: '上门服务',
    description: '家政服务、维修师傅的上门收款',
    image: '/images/screenshots/Productdisplay8.jpg',
    benefits: ['客户现场付款', '服务费用透明', '电子小票凭证', '服务记录管理'],
  },
]

const PRODUCTS_DATA = [
  {
    name: '智能POS机',
    description: '多功能智能收银终端',
    features: ['双屏显示', '4G网络', '扫码刷卡', '小票打印'],
    price: '免费申请',
    image: '/images/product/汇来掌柜音箱.jpg',
  },
  {
    name: '电签POS机',
    description: '便携式电子签名终端',
    features: ['电子签名', '蓝牙连接', '长续航', '云端管理'],
    price: '免费申请',
    image: '/images/product/汇来掌柜音箱.jpg',
  },
  {
    name: '聚合码牌',
    description: '多合一收款二维码',
    features: ['微信支付宝', '银联云闪付', '数字人民币', '语音播报'],
    price: '免费申请',
    image: '/images/product/惠客收 音箱.jpg',
  },
  {
    name: '移动POS机',
    description: '手持式移动收款终端',
    features: ['轻巧便携', '4G全网通', '长续航', '防水防摔'],
    price: '免费申请',
    image: '/images/product/拉多财大POS循环版.jpg',
  },
]

const FEATURES_DATA: FeatureItem[] = [
  {
    icon: BanknotesIcon,
    title: '多种支付方式',
    description: '支持微信、支付宝、银联、云闪付等',
    color: 'text-blue-600',
  },
  {
    icon: ClockIcon,
    title: '实时到账',
    description: '7×24小时实时结算，资金快速到账',
    color: 'text-blue-600',
  },
  {
    icon: DevicePhoneMobileIcon,
    title: 'NFC闪付',
    description: '支持银联云闪付、Apple Pay等',
    color: 'text-blue-600',
  },
  {
    icon: ShieldCheckIcon,
    title: '安全防护',
    description: '多重安全机制，保障交易安全',
    color: 'text-blue-600',
  },
  {
    icon: ChartBarIcon,
    title: '数据统计',
    description: '实时交易数据，经营状况一目了然',
    color: 'text-blue-600',
  },
  {
    icon: PhoneIcon,
    title: '客服支持',
    description: '7×24小时专业客服在线服务',
    color: 'text-blue-600',
  },
  {
    icon: CurrencyDollarIcon,
    title: '费率优惠',
    description: '0.38%超低费率，为商户节省成本',
    color: 'text-blue-600',
  },
  {
    icon: GiftIcon,
    title: '免费申请',
    description: '0元申请，无押金无租金',
    color: 'text-blue-600',
  },
  {
    icon: UserGroupIcon,
    title: '会员管理',
    description: '支持会员积分、储值等功能',
    color: 'text-blue-600',
  },
  {
    icon: TagIcon,
    title: '营销工具',
    description: '优惠券、满减等营销功能',
    color: 'text-blue-600',
  },
  {
    icon: CloudIcon,
    title: '云端管理',
    description: '云端数据存储，随时随地查看',
    color: 'text-blue-600',
  },
  {
    icon: CogIcon,
    title: '系统稳定',
    description: '99.99%系统稳定性，保障正常营业',
    color: 'text-blue-600',
  },
]

const TESTIMONIALS_DATA = [
  {
    name: '李老板',
    business: '便利店',
    content: '用了这个POS机后，收银效率提升了很多，0.38%的费率也很实惠，秒到账让资金周转更灵活。',
    rating: 5,
    improvement: '营业额增长25%',
  },
  {
    name: '张师傅',
    business: '小餐馆',
    content: '扫码收款很方便，客户付款快，我们收钱也快，再也不用担心找零钱的问题了。',
    rating: 5,
    improvement: '收银效率提升40%',
  },
  {
    name: '王阿姨',
    business: '水果摊',
    content: '移动POS机很轻便，摆摊收钱特别方便，电池也很耐用，一天都不用充电。',
    rating: 5,
    improvement: '客户满意度提升30%',
  },
]

const FAQS_DATA: FAQItem[] = [
  {
    question: '申请POS机需要什么条件？',
    answer:
      '只需要有营业执照（个体户或企业）、身份证、银行卡即可申请。个人也可以申请，但需要提供相关经营证明材料。',
  },
  {
    question: '费率是多少？什么时候到账？',
    answer:
      '我们的费率是0.38%，行业内最优惠的费率之一。支持7×24小时实时到账，包括节假日也正常结算，让您的资金周转无忧。',
  },
  {
    question: '支持哪些支付方式？',
    answer:
      '支持微信支付、支付宝、银联云闪付、Apple Pay、数字人民币等主流支付方式，满足不同客户的支付习惯。',
  },
  {
    question: '设备是否免费？有没有押金？',
    answer:
      '设备完全免费提供，无需任何押金和租金。我们还提供免费的技术支持和售后服务，让您使用无忧。',
  },
  {
    question: '多久可以拿到设备？',
    answer:
      '审核通过后当天发货，一般1-2个工作日即可收到设备。我们在全国主要城市都有仓库，确保快速配送。',
  },
  {
    question: '如果设备出现问题怎么办？',
    answer:
      '我们提供7×24小时技术支持，设备出现问题可以随时联系客服。如果是设备故障，我们会免费更换新设备。',
  },
]

// 预定义样式类，避免重复计算
const COMMON_STYLES = {
  sectionPadding: 'py-16',
  sectionBg: 'bg-gray-50 dark:bg-gray-900',
  cardBase: 'rounded-md border transition-all duration-300 hover:shadow-lg',
  cardBorder: 'border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-800',
  titleText: 'text-gray-900 dark:text-white',
  bodyText: 'text-gray-600 dark:text-gray-300',
  gridCols2: 'grid gap-6 sm:grid-cols-2',
  gridCols4: 'grid gap-6 sm:grid-cols-2 lg:grid-cols-4',
}

/**
 * Hero区域组件 - 小微商户支付解决方案首页英雄区域
 * 采用左文右图的经典分栏结构，以蓝色调为主，统一视觉效果
 * 特点：视觉统一性、层次清晰、交互友好、响应式设计
 *
 * 功能包括：
 * 1. 展示小微商户支付解决方案的主要标题和简介
 * 2. 提供产品特性标签
 * 3. 提供行动按钮（免费申请、产品咨询、费率查询、客服支持）
 * 4. 右侧展示支付场景图片
 * 5. 响应式设计，适配不同屏幕尺寸
 *
 * @returns {JSX.Element} Hero区域组件
 */
const PosHero = React.memo(() => {
  return (
    <section className="relative pt-24 pb-12 lg:pt-24 lg:pb-16" style={{backgroundColor: '#f0f4f8'}}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* 左侧内容区域 */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-md bg-blue-50 px-3 py-1 text-sm text-blue-700">
                0元免押金 · 激活返现299元
              </div>

              <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
                收款王M820
                <span className="block text-blue-600">聚合收款</span>
              </h1>

              <p className="text-lg text-gray-600">
                支持扫码支付（微信、支付宝、花呗、云闪付）、刷卡、插卡、挥卡等多种收款方式
              </p>
            </div>

            {/* 核心特性 - 简化版 */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="text-green-600">✓</span>
                <span>内置电签屏 · 手写签名更便捷</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <span className="text-green-600">✓</span>
                <span>百货商超 · 零售餐饮均可用</span>
              </div>
            </div>

            {/* 行动按钮 - 简化版 */}
            <DualQRCodeButtonGroup
              leftButton={{
                text: '立即办理',
                className: 'inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 transition-colors',
                icon: <GiftIcon className="mr-2 h-5 w-5" />
              }}
              rightButton={{
                text: '联系客服',
                className: 'inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 transition-colors',
                icon: <ChatBubbleLeftRightIcon className="mr-2 h-5 w-5" />
              }}
              leftQRCode={{
                src: '/images/contact/gzh.png',
                alt: '微信公众号二维码',
                title: '关注公众号',
                description: '扫描二维码关注公众号'
              }}
              rightQRCode={{
                src: '/images/contact/userhlc.png',
                alt: '客服二维码',
                title: '联系客服',
                description: '扫码添加客服咨询'
              }}
              title="扫码联系我们"
              description="选择下方二维码进行联系"
            />

            {/* 信任标识 - 简化版 */}
            <div className="flex items-center space-x-4 text-sm text-gray-500">
              <span>央行一清认证</span>
              <span>·</span>
              <span>顺丰包邮</span>
              <span>·</span>
              <span>30天无理由退</span>
            </div>
          </div>

          {/* 右侧产品图片 - 简化版 */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src="/images/product/聚合支持.svg"
              alt="智能POS机产品图"
              width={500}
              height={400}
              className="w-full h-auto"
              unoptimized
            />
          </div>
        </div>
      </Container>
    </section>
  )
})
PosHero.displayName = 'PosHero'

//头部组件

/**
 * 核心优势区域组件 - 展示小微商户支付解决方案的核心优势
 * 采用卡片式网格布局，突出产品特色
 * 特点：视觉统一、信息清晰、响应式设计
 *
 * @returns {JSX.Element} 核心优势区域组件
 */
const AdvantagesSection = React.memo(() => {
  return (
    <section className={clsx(COMMON_STYLES.sectionPadding, COMMON_STYLES.sectionBg)}>
      <Container>
        <div className="text-center">
          <h2 className={clsx('mb-4 text-3xl font-bold tracking-tight sm:text-4xl', COMMON_STYLES.titleText)}>
            <StarIcon className="mr-2 inline h-8 w-8 text-blue-600" aria-hidden="true" />
            核心优势
            <StarIcon className="ml-2 inline h-8 w-8 text-blue-600" aria-hidden="true" />
          </h2>
          <p className={clsx('mt-4 text-lg', COMMON_STYLES.bodyText)}>
            专为小微商户量身定制的支付解决方案
          </p>
        </div>

        <div className="mx-auto mt-16" style={{maxWidth: '1800px'}}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES_DATA.map((advantage, index) => (
              <div
                key={index}
                className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)] cursor-pointer"
              >
                <div className="p-5">
                  <div className="mb-3 flex items-center">
                    <div className="mr-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-700">
                      <advantage.icon
                        className="h-6 w-6 text-blue-600 dark:text-blue-400"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {advantage.title}
                    </h3>
                  </div>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                    {advantage.description}
                  </p>
                  <div className="group inline-flex items-center text-sm font-medium text-blue-600 cursor-pointer">
                    <span className="transition-all duration-300 group-hover:mr-1">
                      了解更多
                    </span>
                    <svg className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
})
AdvantagesSection.displayName = 'AdvantagesSection'

/**
 * 支付场景区域组件 - 展示小微商户的典型支付应用场景
 * 采用卡片式布局，展示实际使用场景
 * 特点：视觉直观、功能清晰、响应式设计
 *
 * @returns {JSX.Element} 支付场景区域组件
 */
const ScenariosSection = React.memo(() => {
  return (
    <section className={COMMON_STYLES.sectionPadding}>
      <Container>
        <div className="text-center">
          <h2 className={clsx('mb-4 text-3xl font-bold tracking-tight sm:text-4xl', COMMON_STYLES.titleText)}>
            <ComputerDesktopIcon className="mr-2 inline h-8 w-8 text-blue-600" aria-hidden="true" />
            应用场景
            <ComputerDesktopIcon className="ml-2 inline h-8 w-8 text-blue-600" aria-hidden="true" />
          </h2>
          <p className={clsx('mt-4 text-lg', COMMON_STYLES.bodyText)}>
            覆盖小微商户各种经营场景的支付需求
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {SCENARIOS_DATA.map((scenario, index) => (
            <div key={index} className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)]">
              <div className={clsx('relative aspect-video overflow-hidden', 'bg-gray-100 dark:bg-gray-700')}>
                <Image
                  src={scenario.image}
                  alt={scenario.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/30"></div>
              </div>
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {scenario.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {scenario.description}
                </p>
                <ul className="space-y-2">
                  {scenario.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <CheckCircleIcon className="mr-2 h-4 w-4 text-green-500" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
})
ScenariosSection.displayName = 'ScenariosSection'

/**
 * 支付产品区域组件 - 展示小微商户支付产品
 * 采用网格布局，突出产品特点
 * 特点：产品全面、布局清晰、响应式设计
 *
 * @returns {JSX.Element} 支付产品区域组件
 */
const ProductsSection = React.memo(() => {
  return (
    <section className={clsx(COMMON_STYLES.sectionPadding, COMMON_STYLES.sectionBg)}>
      <Container>
        <div className="text-center">
          <h2 className={clsx('mb-4 text-3xl font-bold tracking-tight sm:text-4xl', COMMON_STYLES.titleText)}>
            <CreditCardIcon className="mr-2 inline h-8 w-8 text-blue-600" aria-hidden="true" />
            支付产品
            <CreditCardIcon className="ml-2 inline h-8 w-8 text-blue-600" aria-hidden="true" />
          </h2>
          <p className={clsx('mt-4 text-lg', COMMON_STYLES.bodyText)}>
            多样化的支付终端产品，满足不同经营需求
          </p>
        </div>

        <div className="mx-auto mt-16" style={{maxWidth: '1800px'}}>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS_DATA.map((product, index) => (
              <div key={index} className="group flex h-full transform flex-col overflow-hidden bg-white border border-gray-200 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer">
                <div className="relative aspect-video overflow-hidden bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mb-4 text-sm leading-relaxed text-gray-600">
                    {product.description}
                  </p>
                  <ul className="mb-4 space-y-1 flex-1">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircleIcon className="mr-2 h-4 w-4 text-green-500" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-lg font-bold text-blue-600">
                      {product.price}
                    </span>
                    <Button href="#apply" variant="outline" className="text-xs px-3 py-1">
                      立即申请
                    </Button>
                  </div>
                  <div className="group inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 cursor-pointer">
                    <span className="transition-all duration-300 group-hover:mr-1">
                      查看详情
                    </span>
                    <svg className="ml-2 h-4 w-4 transform transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
})
ProductsSection.displayName = 'ProductsSection'

/**
 * 系统特色功能区域组件 - 展示小微商户支付系统的特色功能
 * 采用网格布局，突出功能特点
 * 特点：功能全面、布局清晰、响应式设计
 *
 * @returns {JSX.Element} 系统特色功能区域组件
 */
const FeaturesSection = React.memo(() => {
  return (
    <section className={COMMON_STYLES.sectionPadding}>
      <Container>
        <div className="text-center">
          <h2 className={clsx('mb-4 text-3xl font-bold tracking-tight sm:text-4xl', COMMON_STYLES.titleText)}>
            <CogIcon className="mr-2 inline h-8 w-8 text-blue-600" aria-hidden="true" />
            系统功能
            <CogIcon className="ml-2 inline h-8 w-8 text-blue-600" aria-hidden="true" />
          </h2>
          <p className={clsx('mt-4 text-lg', COMMON_STYLES.bodyText)}>
            全面的支付功能，助力小微商户数字化经营
          </p>
        </div>

        <div className={clsx('mt-12', COMMON_STYLES.gridCols4)}>
          {FEATURES_DATA.map((feature, index) => (
            <div key={index} className="group flex h-full transform flex-col overflow-hidden rounded-lg bg-gradient-to-b from-white to-gray-50 border-2 border-white shadow-[8px_8px_20px_0_rgba(55,99,170,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[8px_8px_25px_0_rgba(55,99,170,0.15)] dark:from-gray-800 dark:to-gray-900 dark:border-gray-700 dark:shadow-[8px_8px_20px_0_rgba(55,99,170,0.2)]">
              <div className="p-5">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 flex h-10 w-10 items-center justify-center bg-gray-100 dark:bg-gray-700">
                    <feature.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" aria-hidden="true" />
                  </div>
                  <h3 className={clsx('text-lg font-bold', COMMON_STYLES.titleText)}>
                    {feature.title}
                  </h3>
                </div>
                <p className={clsx('text-sm leading-relaxed', COMMON_STYLES.bodyText)}>
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
})
FeaturesSection.displayName = 'FeaturesSection'

/**
 * 客户评价区域组件 - 展示小微商户的真实评价
 * 采用卡片式布局，展示客户反馈
 * 特点：真实可信、视觉清晰、响应式设计
 *
 * @returns {JSX.Element} 客户评价区域组件
 */
const TestimonialsSection = React.memo(() => {
  return (
    <section className={clsx(COMMON_STYLES.sectionPadding, COMMON_STYLES.sectionBg)}>
      <Container>
        <div className="text-center">
          <h2 className={clsx('mb-4 text-3xl font-bold tracking-tight sm:text-4xl', COMMON_STYLES.titleText)}>
            <UsersIcon className="mr-2 inline h-8 w-8 text-blue-600" aria-hidden="true" />
            客户评价
            <UsersIcon className="ml-2 inline h-8 w-8 text-blue-600" aria-hidden="true" />
          </h2>
          <p className={clsx('mt-4 text-lg', COMMON_STYLES.bodyText)}>
            听听小微商户的真实反馈
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <div key={index} className={clsx('p-6', COMMON_STYLES.cardBase, COMMON_STYLES.cardBorder)}>
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <UserGroupIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <div>
                  <h3 className={clsx('font-semibold', COMMON_STYLES.titleText)}>
                    {testimonial.name}
                  </h3>
                  <p className={clsx('text-sm', COMMON_STYLES.bodyText)}>
                    {testimonial.business}
                  </p>
                </div>
              </div>
              <p className={clsx('mb-4 text-sm leading-relaxed', COMMON_STYLES.bodyText)}>
                {testimonial.content}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4 text-yellow-400" aria-hidden="true" />
                  ))}
                </div>
                <span className="text-sm font-medium text-green-600">
                  {testimonial.improvement}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
})
TestimonialsSection.displayName = 'TestimonialsSection'

/**
 * FAQ区域组件 - 小微商户支付常见问题解答
 * 采用手风琴式展开设计，提供清晰的问题分类
 * 特点：交互友好、信息层次清晰、响应式设计
 *
 * @returns {JSX.Element} FAQ区域组件
 */
const FAQSection = React.memo(() => {
  return (
    <section className={COMMON_STYLES.sectionPadding}>
      <Container>
        <div className="text-center">
          <h2 className={clsx('text-3xl font-bold tracking-tight sm:text-4xl', COMMON_STYLES.titleText)}>
            常见问题
          </h2>
          <p className={clsx('mt-4 text-lg', COMMON_STYLES.bodyText)}>
            解答您关于小微商户支付的疑问
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2" role="list" aria-label="常见问题列表">
          {FAQS_DATA.map((faq, index) => (
            <div key={index} className={clsx('p-6', COMMON_STYLES.cardBase, COMMON_STYLES.cardBorder)} role="listitem">
              <h3 className={clsx('mb-3 text-lg font-semibold', COMMON_STYLES.titleText)}>
                {faq.question}
              </h3>
              <p className={COMMON_STYLES.bodyText}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
})
FAQSection.displayName = 'FAQSection'

/**
 * 行动召唤区域组件 - 引导用户申请和咨询
 * 采用居中布局，突出行动按钮
 * 特点：视觉突出、引导明确、响应式设计
 *
 * @returns {JSX.Element} 行动召唤区域组件
 */
const CTASection = React.memo(() => {
  return (
    <section className="py-16 bg-blue-600">
      <Container>
        <div className="text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            立即开启数字化收银之旅
          </h2>
          <p className="mb-8 text-xl text-blue-100">
            0.38%费率秒到账，免费申请，当天下机
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              href="#apply"
              variant="solid"
              color="white"
              className="group px-6 py-3 text-lg"
            >
              <CreditCardIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              免费申请POS机
            </Button>
            <Button
              href="#consultation"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 text-lg"
            >
              <PhoneIcon className="mr-2 h-5 w-5" aria-hidden="true" />
              咨询客服
            </Button>
          </div>

        </div>
      </Container>
    </section>
  )
})
CTASection.displayName = 'CTASection'

/**
 * 小微商户支付解决方案页面主组件
 * 展示小微商户支付解决方案的完整功能和特性
 * @returns JSX.Element
 */
export default function SmallBusinessPage() {
  return (
    <>
      <Header />
      <main>
        <PosHero />
        <AdvantagesSection />
        <ScenariosSection />
        <ProductsSection />
        <FeaturesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
