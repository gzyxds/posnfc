'use client'

import { useState } from 'react'
import {
  AdjustmentsHorizontalIcon,
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  BoltIcon,
  BookmarkIcon,
  CalendarDaysIcon,
  ChartBarIcon,
  CheckBadgeIcon,
  CheckCircleIcon,
  ClockIcon,
  CloudArrowUpIcon,
  CloudIcon,
  CodeBracketIcon,
  CogIcon,
  ComputerDesktopIcon,
  CpuChipIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
  DevicePhoneMobileIcon,
  FilmIcon,
  FolderIcon,
  ForwardIcon,
  GiftIcon,
  KeyIcon,
  LockClosedIcon,
  MegaphoneIcon,
  PhoneIcon,
  PlayCircleIcon,
  PresentationChartLineIcon,
  RocketLaunchIcon,
  ShareIcon,
  ShieldCheckIcon,
  SpeakerWaveIcon,
  StarIcon,
  TagIcon,
  TrophyIcon,
  UserGroupIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
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
function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-8">
              {/* 产品标签 */}
              <div className="inline-flex items-center rounded-md bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-700/10 dark:bg-blue-900/20 dark:text-blue-300 dark:ring-blue-300/20">
                <span className="mr-2 h-2 w-2 rounded-full bg-blue-600"></span>
                专为小微商户定制
              </div>

              <h1
                className={clsx(
                  'text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl',
                  'text-gray-900 dark:text-white',
                )}
              >
                小微商户
                <br />
                <span className="text-blue-600">
                  支付解决方案
                </span>
              </h1>

              <p
                className={clsx(
                  'text-xl leading-relaxed',
                  'text-gray-600 dark:text-gray-300',
                )}
              >
                专为小微商户、个体户、小店经营者打造的一站式支付解决方案。0.38%费率秒到账，支持扫码收款、刷卡收银、NFC闪付等多种支付方式，助力小微商户数字化经营。
              </p>

              {/* 特性亮点 */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircleIcon
                    className="mr-2 h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                  0.38%费率秒到
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircleIcon
                    className="mr-2 h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                  免费申请办理
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircleIcon
                    className="mr-2 h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                  当天下机使用
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <CheckCircleIcon
                    className="mr-2 h-5 w-5 text-green-500"
                    aria-hidden="true"
                  />
                  7×24小时服务
                </div>
              </div>

              {/* 按钮组 */}
              <div
                className="flex flex-col gap-4 sm:flex-row"
                role="group"
                aria-label="产品操作按钮"
              >
                <div className="flex gap-3">
                  <Button
                    href="#apply"
                    variant="solid"
                    color="blue"
                    className="group flex-1 sm:flex-none font-light"
                    aria-label="免费申请POS机"
                  >
                    <CreditCardIcon
                      className="mr-2 h-5 w-5"
                      aria-hidden="true"
                    />
                    免费申请
                  </Button>

                  <Button
                    href="#consultation"
                    variant="solid"
                    color="blue"
                    className="group flex-1 sm:flex-none font-light"
                    aria-label="产品咨询"
                  >
                    产品咨询
                  </Button>
                </div>

                <div className="flex gap-3">
                  <Button
                    href="#rates"
                    variant="outline"
                    className="group flex-1 sm:flex-none"
                    aria-label="费率查询"
                  >
                    费率查询
                  </Button>

                  <Button
                    href="#support"
                    variant="outline"
                    className="group flex-1 sm:flex-none"
                    aria-label="客服支持"
                  >
                    客服支持
                  </Button>
                </div>
              </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

/**
 * 核心优势区域组件 - 展示小微商户支付解决方案的核心优势
 * 采用卡片式网格布局，突出产品特色
 * 特点：视觉统一、信息清晰、响应式设计
 *
 * @returns {JSX.Element} 核心优势区域组件
 */
function AdvantagesSection() {
  const advantages: AdvantageItem[] = [
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

  return (
    <section className={clsx('py-16', 'bg-gray-50 dark:bg-gray-900')}>
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
              'text-gray-900 dark:text-white',
            )}
          >
            <StarIcon
              className="mr-2 inline h-8 w-8 text-blue-600"
              aria-hidden="true"
            />
            核心优势
            <StarIcon
              className="ml-2 inline h-8 w-8 text-blue-600"
              aria-hidden="true"
            />
          </h2>
          <p
            className={clsx('mt-4 text-lg', 'text-gray-600 dark:text-gray-300')}
          >
            专为小微商户量身定制的支付解决方案
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className={clsx(
                'group rounded-md border p-6 transition-all duration-300 hover:shadow-lg',
                'border-gray-200 bg-white',
                'dark:border-gray-700 dark:bg-gray-800',
              )}
            >
              <div className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-blue-50 dark:bg-blue-900/20">
                  <advantage.icon
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <h3
                  className={clsx(
                    'mb-3 text-lg font-semibold',
                    'text-gray-900 dark:text-white',
                  )}
                >
                  {advantage.title}
                </h3>
                <p
                  className={clsx(
                    'text-sm leading-relaxed',
                    'text-gray-600 dark:text-gray-300',
                  )}
                >
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 支付场景区域组件 - 展示小微商户的典型支付应用场景
 * 采用卡片式布局，展示实际使用场景
 * 特点：视觉直观、功能清晰、响应式设计
 *
 * @returns {JSX.Element} 支付场景区域组件
 */
function ScenariosSection() {
  const scenarios: ScenarioItem[] = [
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

  return (
    <section className="py-16">
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
              'text-gray-900 dark:text-white',
            )}
          >
            <ComputerDesktopIcon
              className="mr-2 inline h-8 w-8 text-blue-600"
              aria-hidden="true"
            />
            应用场景
            <ComputerDesktopIcon
              className="ml-2 inline h-8 w-8 text-blue-600"
              aria-hidden="true"
            />
          </h2>
          <p
            className={clsx('mt-4 text-lg', 'text-gray-600 dark:text-gray-300')}
          >
            覆盖小微商户各种经营场景的支付需求
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className={clsx(
                'group overflow-hidden rounded-md border transition-all duration-300 hover:shadow-lg',
                'border-gray-200 bg-white',
                'dark:border-gray-700 dark:bg-gray-800',
              )}
            >
              <div
                className={clsx(
                  'relative aspect-video overflow-hidden',
                  'bg-gray-100 dark:bg-gray-700',
                )}
              >
                <Image
                  src={scenario.image}
                  alt={scenario.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-blue-600/30"></div>
              </div>
              <div className="p-6">
                <h3
                  className={clsx(
                    'mb-2 text-lg font-semibold',
                    'text-gray-900 dark:text-white',
                  )}
                >
                  {scenario.title}
                </h3>
                <p
                  className={clsx(
                    'mb-4 text-sm',
                    'text-gray-600 dark:text-gray-300',
                  )}
                >
                  {scenario.description}
                </p>
                <ul className="space-y-2">
                  {scenario.benefits.map((benefit, benefitIndex) => (
                    <li
                      key={benefitIndex}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircleIcon
                        className="mr-2 h-4 w-4 text-green-500"
                        aria-hidden="true"
                      />
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
}

/**
 * 支付产品区域组件 - 展示小微商户支付产品
 * 采用网格布局，突出产品特点
 * 特点：产品全面、布局清晰、响应式设计
 *
 * @returns {JSX.Element} 支付产品区域组件
 */
function ProductsSection() {
  const products = [
    {
      name: '智能POS机',
      description: '多功能智能收银终端',
      features: ['双屏显示', '4G网络', '扫码刷卡', '小票打印'],
      price: '免费申请',
      image: '/images/product/汇来掌柜(台卡）.jpg',
    },
    {
      name: '电签POS机',
      description: '便携式电子签名终端',
      features: ['电子签名', '蓝牙连接', '长续航', '云端管理'],
      price: '免费申请',
      image: '/images/product/汇来掌柜（音箱）.jpg',
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
      image: '/images/product/拉多财大POS（循环版）.jpg',
    },
  ]

  return (
    <section className={clsx('py-16', 'bg-gray-50 dark:bg-gray-900')}>
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
              'text-gray-900 dark:text-white',
            )}
          >
            <CreditCardIcon
              className="mr-2 inline h-8 w-8 text-blue-600"
              aria-hidden="true"
            />
            支付产品
            <CreditCardIcon
              className="ml-2 inline h-8 w-8 text-blue-600"
              aria-hidden="true"
            />
          </h2>
          <p
            className={clsx('mt-4 text-lg', 'text-gray-600 dark:text-gray-300')}
          >
            多样化的支付终端产品，满足不同经营需求
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <div
              key={index}
              className={clsx(
                'group overflow-hidden rounded-md border transition-all duration-300 hover:shadow-lg',
                'border-gray-200 bg-white',
                'dark:border-gray-700 dark:bg-gray-800',
              )}
            >
              <div
                className={clsx(
                  'relative aspect-square overflow-hidden',
                  'bg-gray-100 dark:bg-gray-700',
                )}
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-600/20"></div>
              </div>
              <div className="p-6">
                <h3
                  className={clsx(
                    'mb-2 text-lg font-semibold',
                    'text-gray-900 dark:text-white',
                  )}
                >
                  {product.name}
                </h3>
                <p
                  className={clsx(
                    'mb-4 text-sm',
                    'text-gray-600 dark:text-gray-300',
                  )}
                >
                  {product.description}
                </p>
                <ul className="mb-4 space-y-1">
                  {product.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-300"
                    >
                      <CheckCircleIcon
                        className="mr-2 h-4 w-4 text-green-500"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-blue-600">
                    {product.price}
                  </span>
                  <Button
                    href="#apply"
                    variant="outline"
                    className="text-xs px-3 py-1"
                  >
                    立即申请
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 系统特色功能区域组件 - 展示小微商户支付系统的特色功能
 * 采用网格布局，突出功能特点
 * 特点：功能全面、布局清晰、响应式设计
 *
 * @returns {JSX.Element} 系统特色功能区域组件
 */
function FeaturesSection() {
  const features: FeatureItem[] = [
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

  return (
    <section className="py-16">
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
              'text-gray-900 dark:text-white',
            )}
          >
            <CogIcon
              className="mr-2 inline h-8 w-8 text-blue-600"
              aria-hidden="true"
            />
            系统功能
            <CogIcon
              className="ml-2 inline h-8 w-8 text-blue-600"
              aria-hidden="true"
            />
          </h2>
          <p
            className={clsx('mt-4 text-lg', 'text-gray-600 dark:text-gray-300')}
          >
            全面的支付功能，助力小微商户数字化经营
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className={clsx(
                'group rounded-md border p-6 transition-all duration-300 hover:shadow-lg',
                'border-gray-200 bg-white',
                'dark:border-gray-700 dark:bg-gray-800',
              )}
            >
              <div className="mb-4">
                <feature.icon
                  className="h-8 w-8 text-blue-600"
                  aria-hidden="true"
                />
              </div>
              <h3
                className={clsx(
                  'mb-2 text-lg font-semibold',
                  'text-gray-900 dark:text-white',
                )}
              >
                {feature.title}
              </h3>
              <p
                className={clsx(
                  'text-sm leading-relaxed',
                  'text-gray-600 dark:text-gray-300',
                )}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 客户评价区域组件 - 展示小微商户的真实评价
 * 采用卡片式布局，展示客户反馈
 * 特点：真实可信、视觉清晰、响应式设计
 *
 * @returns {JSX.Element} 客户评价区域组件
 */
function TestimonialsSection() {
  const testimonials = [
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

  return (
    <section className={clsx('py-16', 'bg-gray-50 dark:bg-gray-900')}>
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'mb-4 text-3xl font-bold tracking-tight sm:text-4xl',
              'text-gray-900 dark:text-white',
            )}
          >
            <UsersIcon
              className="mr-2 inline h-8 w-8 text-blue-600"
              aria-hidden="true"
            />
            客户评价
            <UsersIcon
              className="ml-2 inline h-8 w-8 text-blue-600"
              aria-hidden="true"
            />
          </h2>
          <p
            className={clsx('mt-4 text-lg', 'text-gray-600 dark:text-gray-300')}
          >
            听听小微商户的真实反馈
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={clsx(
                'rounded-md border p-6',
                'border-gray-200 bg-white',
                'dark:border-gray-700 dark:bg-gray-800',
              )}
            >
              <div className="mb-4 flex items-center">
                <div className="mr-4 h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <UserGroupIcon
                    className="h-6 w-6 text-blue-600"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h3
                    className={clsx(
                      'font-semibold',
                      'text-gray-900 dark:text-white',
                    )}
                  >
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {testimonial.business}
                  </p>
                </div>
              </div>
              <p
                className={clsx(
                  'mb-4 text-sm leading-relaxed',
                  'text-gray-600 dark:text-gray-300',
                )}
              >
                {testimonial.content}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="h-4 w-4 text-yellow-400"
                      aria-hidden="true"
                    />
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
}

/**
 * FAQ区域组件 - 小微商户支付常见问题解答
 * 采用手风琴式展开设计，提供清晰的问题分类
 * 特点：交互友好、信息层次清晰、响应式设计
 *
 * @returns {JSX.Element} FAQ区域组件
 */
function FAQSection() {
  const faqs: FAQItem[] = [
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

  return (
    <section className="py-16">
      <Container>
        <div className="text-center">
          <h2
            className={clsx(
              'text-3xl font-bold tracking-tight sm:text-4xl',
              'text-gray-900 dark:text-white',
            )}
          >
            常见问题
          </h2>
          <p
            className={clsx('mt-4 text-lg', 'text-gray-600 dark:text-gray-300')}
          >
            解答您关于小微商户支付的疑问
          </p>
        </div>
        <div
          className="mt-12 grid gap-6 md:grid-cols-2"
          role="list"
          aria-label="常见问题列表"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={clsx(
                'rounded-md border p-6',
                'border-gray-200 bg-white',
                'dark:border-gray-700 dark:bg-gray-800',
              )}
              role="listitem"
            >
              <h3
                className={clsx(
                  'mb-3 text-lg font-semibold',
                  'text-gray-900 dark:text-white',
                )}
              >
                {faq.question}
              </h3>
              <p className={clsx('text-gray-600 dark:text-gray-300')}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

/**
 * 行动召唤区域组件 - 引导用户申请和咨询
 * 采用居中布局，突出行动按钮
 * 特点：视觉突出、引导明确、响应式设计
 *
 * @returns {JSX.Element} 行动召唤区域组件
 */
function CTASection() {
  return (
    <section className={clsx('py-16', 'bg-blue-600')}>
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
              <CreditCardIcon
                className="mr-2 h-5 w-5"
                aria-hidden="true"
              />
              免费申请POS机
            </Button>
            <Button
              href="#consultation"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 px-6 py-3 text-lg"
            >
              <PhoneIcon
                className="mr-2 h-5 w-5"
                aria-hidden="true"
              />
              咨询客服
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-white">0.38%</div>
              <div className="text-sm text-blue-100">超低费率</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">秒到账</div>
              <div className="text-sm text-blue-100">7×24小时</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-white">50万+</div>
              <div className="text-sm text-blue-100">服务商户</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

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
        <HeroSection />
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
