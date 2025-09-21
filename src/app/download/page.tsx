'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { generateStructuredData } from './metadata'
import {
  Smartphone,
  Download,
  Star,
  Shield,
  Zap,
  CreditCard,
  QrCode,
  CheckCircle,
  ArrowRight,
  Play,
  Apple,
  Building2,
  Award,
  Sparkles,
  TrendingUp,
  Users,
  Globe,
  Landmark,
  Wallet,
  Target,
  Banknote
} from 'lucide-react'
import { Button } from '@/components/Button'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'

/**
 * 手机POS机APP下载页面
 * 包含APP功能展示、下载入口、用户评价等完整内容
 * @returns {JSX.Element} APP下载页面组件
 */
const AppDownloadPage = () => {
  // 二维码悬停状态管理
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  /**
   * 处理联系客服按钮点击事件
   * 触发BackToTop组件中的二维码弹窗
   */
  const handleContactService = () => {
    window.dispatchEvent(new CustomEvent('showQRCodeModal'))
  }

  /**
   * 处理APP下载按钮点击
   * @param {string} platform - 下载平台 (android/ios)
   */
  const handleDownload = (platform: string) => {
    // 这里可以添加下载统计或跳转逻辑
    console.log(`下载${platform}版本`)
  }

  return (
    <>
      {/* SEO结构化数据 */}
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateStructuredData()),
          }}
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* 导航菜单 */}
        <Header />

      {/* 英雄区域 - APP下载主要入口 */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-16">
        <Container className="py-20 lg:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* 左侧内容 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                <Smartphone className="h-4 w-4" />
                代理商APP
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                代理商APP
                <span className="block text-blue-600">免费下载</span>
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
               联拓宝是一款SaaS系统管理工具，支持多品牌自主运营；可自主上架产品、进行用户管理、开展运营活动、管理订单、统计业务数据等。具备前端风格配置、功能配置、机具和物料库存管理、运营活动管理、分享推广、团队管理、账户管理、机具管理、统计分析等相关功能。
              </p>

              {/* 核心卖点 */}
              <div className="mb-6 flex flex-wrap items-center gap-x-6 gap-y-3">
                <div className="flex items-center gap-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">0元免押</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                    <Zap className="h-4 w-4 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">秒到账</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-100">
                    <CreditCard className="h-4 w-4 text-purple-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">全渠道收款</p>
                </div>
                <div className="flex items-center gap-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-100">
                    <Shield className="h-4 w-4 text-orange-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">央行一清</p>
                </div>
              </div>

              {/* 下载按钮 */}
              <div className="flex flex-col gap-3 sm:gap-4 md:flex-row">
                <div className="relative w-full md:w-auto">
                  <Button
                    className="flex w-full items-center justify-center gap-2 bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 sm:px-8 sm:py-4 md:w-auto"
                    onClick={() => handleDownload('android')}
                    onMouseEnter={() => setHoveredButton('android-top')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <Play className="h-5 w-5 flex-shrink-0" />
                    <span className="whitespace-nowrap">Android下载</span>
                  </Button>

                  {/* Android 二维码 - 响应式位置显示 */}
                  <AnimatePresence>
                    {hoveredButton === 'android-top' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 bottom-full z-[9999] mb-2 -translate-x-1/2 transform md:left-1/2 md:-translate-x-1/2"
                      >
                        <div className="relative rounded-lg bg-white p-3 shadow-lg ring-1 ring-black ring-opacity-5 sm:p-4">
                          <div className="text-center">
                            <div className="mb-2 h-24 w-24 rounded-lg overflow-hidden sm:h-32 sm:w-32">
                              <Image
                                src="/images/contact/userhlc.png"
                                alt="Android应用下载二维码"
                                width={128}
                                height={128}
                                className="h-full w-full object-cover"
                                unoptimized
                              />
                            </div>
                            <p className="text-xs text-gray-600 sm:text-sm">扫码下载Android版</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative w-full md:w-auto">
                  <Button
                    variant="outline"
                    className="flex w-full items-center justify-center gap-2 border-gray-300 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 sm:px-8 sm:py-4 md:w-auto"
                    onClick={() => handleDownload('ios')}
                    onMouseEnter={() => setHoveredButton('ios-top')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <Apple className="h-5 w-5 flex-shrink-0" />
                    <span className="whitespace-nowrap">iOS下载</span>
                  </Button>

                  {/* iOS 二维码 - 响应式位置显示 */}
                  <AnimatePresence>
                    {hoveredButton === 'ios-top' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 bottom-full z-[9999] mb-2 -translate-x-1/2 transform md:left-1/2 md:-translate-x-1/2"
                      >
                        <div className="relative rounded-lg bg-white p-3 shadow-lg ring-1 ring-black ring-opacity-5 sm:p-4">
                          <div className="text-center">
                            <div className="mb-2 h-24 w-24 rounded-lg overflow-hidden sm:h-32 sm:w-32">
                              <Image
                                src="/images/contact/userhlc.png"
                                alt="iOS应用下载二维码"
                                width={128}
                                height={128}
                                className="h-full w-full object-cover"
                                unoptimized
                              />
                            </div>
                            <p className="text-xs text-gray-600 sm:text-sm">扫码下载iOS版</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative w-full md:w-auto">
                  <Button
                    className="flex w-full items-center justify-center gap-2 bg-green-600 px-6 py-3 text-base font-medium text-white hover:bg-green-700 sm:px-8 sm:py-4 md:w-auto"
                    onClick={() => window.open('/agent/join', '_blank')}
                    onMouseEnter={() => setHoveredButton('agent-top')}
                    onMouseLeave={() => setHoveredButton(null)}
                  >
                    <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.284-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.284.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="whitespace-nowrap">代理注册</span>
                  </Button>

                  {/* 代理注册二维码 - 响应式位置显示 */}
                  <AnimatePresence>
                    {hoveredButton === 'agent-top' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 bottom-full z-[9999] mb-2 -translate-x-1/2 transform md:left-1/2 md:-translate-x-1/2"
                      >
                        <div className="relative rounded-lg bg-white p-3 shadow-lg ring-1 ring-black ring-opacity-5 sm:p-4">
                          <div className="text-center">
                            <div className="mb-2 h-24 w-24 rounded-lg overflow-hidden sm:h-32 sm:w-32">
                              <Image
                                src="/images/contact/userhlc.png"
                                alt="代理注册二维码"
                                width={128}
                                height={128}
                                className="h-full w-full object-cover"
                                unoptimized
                              />
                            </div>
                            <p className="text-xs text-gray-600 sm:text-sm">扫码代理注册</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                支持Android 6.0+ / iOS 12.0+ 系统
              </p>
            </motion.div>

            {/* 右侧手机展示 - 采用lkb页面的SVG框架样式 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-16 sm:mt-24 lg:mt-0 lg:shrink-0 lg:grow"
            >
              <div className="relative">
                <svg role="img" viewBox="0 0 366 729" className="mx-auto w-[22.875rem] max-w-full drop-shadow-xl">
                  <title>POS收款App界面</title>
                  <defs>
                    <clipPath id="pos-app-clip">
                      <rect rx={36} width={316} height={684} />
                    </clipPath>
                  </defs>
                  <path
                    d="M363.315 64.213C363.315 22.99 341.312 1 300.092 1H66.751C25.53 1 3.528 22.99 3.528 64.213v44.68l-.857.143A2 2 0 0 0 1 111.009v24.611a2 2 0 0 0 1.671 1.973l.95.158a2.26 2.26 0 0 1-.093.236v26.173c.212.1.398.296.541.643l-1.398.233A2 2 0 0 0 1 167.009v47.611a2 2 0 0 0 1.671 1.973l1.368.228c-.139.319-.314.533-.511.653v16.637c.221.104.414.313.56.689l-1.417.236A2 2 0 0 0 1 237.009v47.611a2 2 0 0 0 1.671 1.973l1.347.225c-.135.294-.302.493-.49.607v377.681c0 41.213 22 63.208 63.223 63.208h95.074c.947-.504 2.717-.843 4.745-.843l.141.001h.194l.086-.001 33.704.005c1.849.043 3.442.37 4.323.838h95.074c41.222 0 63.223-21.999 63.223-63.212v-394.63c-.259-.275-.48-.796-.63-1.47l-.011-.133 1.655-.276A2 2 0 0 0 366 266.62v-77.611a2 2 0 0 0-1.671-1.973l-1.712-.285c.148-.839.396-1.491.698-1.811V64.213Z"
                    fill="#4B5563"
                  />
                  <path
                    d="M16 59c0-23.748 19.252-43 43-43h246c23.748 0 43 19.252 43 43v615c0 23.196-18.804 42-42 42H58c-23.196 0-42-18.804-42-42V59Z"
                    fill="#343E4E"
                  />
                  <foreignObject
                    width={316}
                    height={684}
                    clipPath="url(#pos-app-clip)"
                    transform="translate(24 24)"
                  >
                    <Image alt="POS收款App界面" src="/images/product/ltbapp.jpg" width={316} height={684} unoptimized />
                  </foreignObject>
                </svg>


              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* APP功能特色 */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              为什么选择我们的手机POS机APP？
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              专业的移动收款解决方案，让您的手机瞬间变身专业POS机
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* 功能卡片 */}
            {[
              {
                icon: <CreditCard className="h-6 w-6" />,
                title: '全渠道收款',
                description: '支持信用卡、借记卡、微信、支付宝、花呗、白条、数字人民币等全部主流支付方式'
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: 'T+0秒到账',
                description: '交易资金实时到账，无需等待，资金周转更灵活，支持365天×24小时到账'
              },
              {
                icon: <Shield className="h-6 w-6" />,
                title: '央行一清认证',
                description: '持有央行颁发的支付业务许可证，资金安全有保障，交易数据实时上报'
              },
              {
                icon: <Smartphone className="h-6 w-6" />,
                title: '无需额外设备',
                description: '仅需一部智能手机，下载APP即可开始收款，告别传统POS机的束缚'
              },
              {
                icon: <QrCode className="h-6 w-6" />,
                title: '扫码+刷卡双模式',
                description: '既支持二维码扫码收款，也支持银行卡刷卡，满足不同客户的支付习惯'
              },
              {
                icon: <Star className="h-6 w-6" />,
                title: '激活返现299元',
                description: '新用户激活APP并完成首笔交易，即可获得299元现金返还奖励'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-gray-200 bg-white p-6 transition-shadow"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gray-100 text-blue-600">
                  {feature.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 费率优势 */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
                费率透明，永不涨价
              </h2>
              <p className="mb-8 text-lg text-gray-600">
                我们承诺费率透明，写入电子协议，让您安心使用
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">贷记卡费率：0.38% 永不+3</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">借记卡费率：0.5% 单笔最高20元</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">扫码支付：0.38% 无上限</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-gray-700">调价须提前30天书面通知</span>
                </div>
              </div>

              <div className="mt-8 rounded-lg bg-blue-50 p-4">
                <p className="text-sm text-blue-700">
                  <strong>费率保障承诺：</strong>如违约调价，差额双倍赔付！
                </p>
              </div>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-8">
              <h3 className="mb-6 text-center text-2xl font-bold text-gray-900">费率对比</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                  <span className="font-medium text-gray-900">我们的APP</span>
                  <span className="text-2xl font-bold text-green-600">0.38%</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                  <span className="font-medium text-gray-600">传统POS机</span>
                  <span className="text-xl font-medium text-gray-500">0.6%+</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-gray-100 rounded-lg">
                  <span className="font-medium text-gray-600">其他手机POS</span>
                  <span className="text-xl font-medium text-gray-500">0.55%+</span>
                </div>
              </div>
              <p className="mt-4 text-center text-sm text-gray-500">
                每万元交易可节省17-22元手续费
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 品牌APP下载 */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              热门品牌APP下载
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              选择知名品牌，享受专业服务，央行一清认证，资金安全有保障
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* 品牌卡片 */}
            {[
              {
                name: '银盛支付',
                logo: Landmark,
                product: '电签版EPOS',
                features: ['0.38%永不+3', '4G秒到账', '央行一清'],
                highlight: '激活返现299元',
                color: 'blue',
                description: '银盛支付是央行颁发支付牌照的正规一清机构，电签版POS机小巧便携，支持全渠道收款。'
              },
              {
                name: '拉卡拉',
                logo: CreditCard,
                product: '智能POS+收款码',
                features: ['全渠道支付', 'SaaS生态', '会员营销'],
                highlight: '总部直签代理',
                color: 'green',
                description: '拉卡拉是国内知名支付品牌，智能POS机集收银、会员管理、营销于一体。'
              },
              {
                name: '中付支付',
                logo: Building2,
                product: '智能双屏POS',
                features: ['安卓13系统', '会员营销', '一体化管理'],
                highlight: '万12分润',
                color: 'purple',
                description: '中付支付专注智能收银解决方案，双屏POS机支持扫码点餐、会员管理等功能。'
              },
              {
                name: '乐刷科技',
                logo: Zap,
                product: '小POS+码牌',
                features: ['激活返299', '万12分润', '小巧便携'],
                highlight: '地摊神器',
                color: 'orange',
                description: '乐刷专注移动支付，小POS机和聚合码牌完美结合，适合各种收款场景。'
              },
              {
                name: '汇莱米',
                logo: Target,
                product: '聚合码牌',
                features: ['一张码全渠道', '语音播报', '防逃单'],
                highlight: '0元包邮',
                color: 'indigo',
                description: '汇莱米聚合码牌支持微信、支付宝、信用卡等全渠道收款，语音播报防漏单。'
              },
              {
                name: '合利宝',
                logo: Banknote,
                product: '移动POS',
                features: ['免流量卡', '数字人民币', '4G全网通'],
                highlight: '激活返349元',
                color: 'red',
                description: '合利宝移动POS机支持数字人民币支付，4G网络连接，随时随地收款无忧。'
              }
            ].map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white p-6 transition-all duration-300"
              >
                {/* 品牌头部 */}
                <div className="mb-4 flex items-center gap-3">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${brand.color}-100`}>
                    <brand.logo className={`h-6 w-6 text-${brand.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{brand.name}</h3>
                    <p className="text-sm text-gray-600">{brand.product}</p>
                  </div>
                </div>

                {/* 特色标签 */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {brand.features.map((feature, idx) => (
                    <span
                      key={idx}
                      className={`inline-flex items-center rounded-full bg-${brand.color}-100 px-3 py-1 text-xs font-medium text-${brand.color}-700`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* 描述 */}
                <p className="mb-4 text-sm text-gray-600 leading-relaxed">
                  {brand.description}
                </p>

                {/* 亮点 */}
                <div className={`mb-4 rounded-lg bg-${brand.color}-50 p-3`}>
                  <div className="flex items-center gap-2">
                    <Sparkles className={`h-4 w-4 text-${brand.color}-600`} />
                    <span className={`text-sm font-medium text-${brand.color}-700`}>
                      {brand.highlight}
                    </span>
                  </div>
                </div>

                {/* 下载按钮 */}
                <div className="space-y-3">
                  <div className="relative">
                    <button
                      className={`w-full text-white transition-colors py-2 px-4 rounded-md font-semibold ${
                        brand.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                        brand.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                        brand.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                        brand.color === 'orange' ? 'bg-orange-600 hover:bg-orange-700' :
                        brand.color === 'indigo' ? 'bg-indigo-600 hover:bg-indigo-700' :
                        brand.color === 'red' ? 'bg-red-600 hover:bg-red-700' :
                        'bg-gray-600 hover:bg-gray-700'
                      }`}
                      onClick={() => handleDownload(`${brand.name}-android`)}
                      onMouseEnter={() => setHoveredButton(`${brand.name}-android`)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Play className="h-4 w-4" />
                        Android下载
                      </div>
                    </button>

                    {/* Android二维码悬浮显示 */}
                    <AnimatePresence>
                      {hoveredButton === `${brand.name}-android` && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 bottom-full z-[9999] mb-2 -translate-x-1/2 transform"
                        >
                          <div className="rounded-lg bg-white p-4 shadow-xl border border-gray-200">
                            <div className="text-center">
                              <Image
                                src="/images/contact/userhlc.png"
                                alt="Android下载二维码"
                                width={120}
                                height={120}
                                className="mx-auto rounded-lg"
                                unoptimized
                              />
                              <p className="mt-2 text-xs text-gray-600">扫码下载Android版</p>
                            </div>
                            {/* 小三角箭头 */}
                            <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 transform rotate-45 bg-white border-r border-b border-gray-200"></div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className="relative">
                    <button
                      className={`w-full transition-colors py-2 px-4 rounded-md font-semibold border ${
                        brand.color === 'blue' ? 'border-blue-300 text-blue-700 hover:bg-blue-50' :
                        brand.color === 'green' ? 'border-green-300 text-green-700 hover:bg-green-50' :
                        brand.color === 'purple' ? 'border-purple-300 text-purple-700 hover:bg-purple-50' :
                        brand.color === 'orange' ? 'border-orange-300 text-orange-700 hover:bg-orange-50' :
                        brand.color === 'indigo' ? 'border-indigo-300 text-indigo-700 hover:bg-indigo-50' :
                        brand.color === 'red' ? 'border-red-300 text-red-700 hover:bg-red-50' :
                        'border-gray-300 text-gray-700 hover:bg-gray-50'
                      }`}
                      onClick={() => handleDownload(`${brand.name}-ios`)}
                      onMouseEnter={() => setHoveredButton(`${brand.name}-ios`)}
                      onMouseLeave={() => setHoveredButton(null)}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Apple className="h-4 w-4" />
                        iOS下载
                      </div>
                    </button>

                    {/* iOS二维码悬浮显示 */}
                    <AnimatePresence>
                      {hoveredButton === `${brand.name}-ios` && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.8, y: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-1/2 bottom-full z-[9999] mb-2 -translate-x-1/2 transform"
                        >
                          <div className="rounded-lg bg-white p-4 shadow-xl border border-gray-200">
                            <div className="text-center">
                              <Image
                                src="/images/contact/userhlc.png"
                                alt="iOS下载二维码"
                                width={120}
                                height={120}
                                className="mx-auto rounded-lg"
                                unoptimized
                              />
                              <p className="mt-2 text-xs text-gray-600">扫码下载iOS版</p>
                            </div>
                            {/* 小三角箭头 */}
                            <div className="absolute -bottom-2 left-1/2 h-4 w-4 -translate-x-1/2 transform rotate-45 bg-white border-r border-b border-gray-200"></div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                {/* 悬浮效果 */}
                <div className={`absolute -top-2 -right-2 h-20 w-20 rounded-full bg-${brand.color}-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              </motion.div>
            ))}
          </div>

          {/* 底部说明 */}
          <div className="mt-12 text-center">
            <div className="mx-auto max-w-[1800px] rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 p-8">
              <div className="mb-6 flex justify-center gap-6">
                <div className="text-center">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">央行一清</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                    <Award className="h-5 w-5 text-green-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">品牌保障</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">费率优惠</p>
                </div>
                <div className="text-center">
                  <div className="mb-2 inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-100">
                    <Users className="h-5 w-5 text-orange-600" />
                  </div>
                  <p className="text-sm font-medium text-gray-900">专业服务</p>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">
                选择知名品牌，享受专业服务
              </h3>
              <p className="text-gray-600">
                所有品牌均持有央行支付业务许可证，资金安全有保障。支持个人和商户申请，
                提供专业的收款解决方案和完善的售后服务。
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* 用户评价 */}
      <section className="py-20 lg:py-32">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              用户真实评价
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              已有50万+商户选择我们的手机POS机APP
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: '张老板',
                business: '便利店店主',
                rating: 5,
                comment: '太方便了！以前用传统POS机又大又重，现在手机装个APP就能收款，费率还便宜，强烈推荐！',
                avatar: '👨‍💼'
              },
              {
                name: '李姐',
                business: '美甲店老板',
                comment: '客户付款方式很多样，微信、支付宝、信用卡都能收，而且到账很快，生意好做多了。',
                rating: 5,
                avatar: '👩‍💼'
              },
              {
                name: '王师傅',
                business: '外卖骑手',
                comment: '跑外卖经常遇到客户要刷卡的，有了这个APP，手机就是POS机，太实用了！',
                rating: 5,
                avatar: '🚴‍♂️'
              }
            ].map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-gray-200 bg-white p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="text-2xl">{review.avatar}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.business}</p>
                  </div>
                </div>
                <div className="mb-3 flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700">&ldquo;{review.comment}&rdquo;</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 常见问题 */}
      <section className="bg-gray-50 py-20 lg:py-32">
        <Container>
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              常见问题解答
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              为您解答关于手机POS机APP的常见疑问
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                question: '手机POS机APP安全吗？',
                answer: '绝对安全！我们持有央行颁发的支付业务许可证，是正规一清机构。所有交易数据都经过加密传输，资金由银行监管，安全有保障。'
              },
              {
                question: '需要什么手机才能使用？',
                answer: '支持Android 6.0+和iOS 12.0+系统的智能手机都可以使用。无需额外硬件设备，下载APP即可开始收款。'
              },
              {
                question: '费率真的不会涨价吗？',
                answer: '是的！费率0.38%写入电子协议，承诺永不+3。如需调价必须提前30天书面通知，否则差额双倍赔付。'
              },
              {
                question: '激活返现299元是真的吗？',
                answer: '真实有效！新用户下载APP并完成实名认证，激活后完成首笔交易即可获得299元现金返还，通常3-5个工作日到账。'
              },
              {
                question: '支持哪些支付方式？',
                answer: '支持信用卡、借记卡、微信、支付宝、花呗、白条、数字人民币、Apple Pay、华为Pay等全部主流支付方式。'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-lg border border-gray-200 bg-white p-6 h-full flex flex-col"
              >
                <h3 className="mb-3 text-lg font-bold text-gray-900">{faq.question}</h3>
                <p className="text-gray-600 flex-1">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* 立即下载CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <Container>
          <div className="text-center text-white">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              立即下载，开启移动收款新体验
            </h2>
            <p className="mb-8 text-xl opacity-90">
              0元免押 · 激活返现299元 · 费率0.38%永不+3
            </p>

            <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
              <Button
                className="flex items-center gap-2 bg-white px-8 py-4 text-blue-600 hover:bg-gray-100"
                onClick={() => handleDownload('android')}
              >
                <Download className="h-5 w-5" />
                <span className="text-blue-600 hover:text-white">立即下载APP</span>
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button
                variant="outline"
                className="border-white px-8 py-4 text-white hover:bg-white hover:text-blue-600"
                onClick={handleContactService}
              >
                咨询客服
              </Button>
            </div>

            <p className="mt-6 text-sm opacity-75">
              客服热线：400-000-0000 | 7×24小时在线服务
            </p>
          </div>
        </Container>
      </section>

      {/* 底部 */}
        <Footer />
      </div>
    </>
  )
}

export default AppDownloadPage
