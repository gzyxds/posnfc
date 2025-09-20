'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import { generateStructuredData } from './metadata'
import {
  Smartphone,
  Download,
  Star,
  Shield,
  Zap,
  CreditCard,
  QrCode,
  Wifi,
  Battery,
  CheckCircle,
  ArrowRight,
  Play,
  Apple,
  Building2,
  Award,
  Sparkles,
  TrendingUp,
  Users,
  Globe
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
                手机秒变POS机
              </div>

              <h1 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
                手机POS机APP
                <span className="block text-blue-600">免费下载</span>
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-gray-600 md:text-xl">
                无需额外设备，手机安装APP即可收款！支持信用卡、微信、支付宝、花呗、数字人民币全渠道支付，0.38%费率永不+3，激活返现299元，T+0秒到账。
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
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  className="flex items-center justify-center gap-2 bg-blue-600 px-8 py-4 text-white hover:bg-blue-700"
                  onClick={() => handleDownload('android')}
                >
                  <Play className="h-5 w-5" />
                  Android下载
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center justify-center gap-2 border-gray-300 px-8 py-4 text-gray-700 hover:bg-gray-50"
                  onClick={() => handleDownload('ios')}
                >
                  <Apple className="h-5 w-5" />
                  iOS下载
                </Button>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                支持Android 6.0+ / iOS 12.0+ 系统
              </p>
            </motion.div>

            {/* 右侧手机展示 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative mx-auto max-w-sm">
                {/* 手机框架 */}
                <div className="relative overflow-hidden rounded-lg bg-gray-900 p-2">
                  <div className="overflow-hidden rounded-lg bg-white">
                    {/* 状态栏 */}
                    <div className="flex items-center justify-between bg-gray-50 px-6 py-2 text-xs">
                      <span className="font-medium">9:41</span>
                      <div className="flex items-center gap-1">
                        <Wifi className="h-3 w-3" />
                        <Battery className="h-3 w-3" />
                      </div>
                    </div>

                    {/* APP界面模拟 */}
                    <div className="p-6">
                      <div className="mb-4 text-center">
                        <h3 className="text-lg font-bold text-gray-900">收款金额</h3>
                        <p className="text-3xl font-bold text-blue-600">¥ 188.00</p>
                      </div>

                      <div className="mb-6 grid grid-cols-2 gap-3">
                        <div className="rounded-lg bg-green-50 p-3 text-center">
                          <QrCode className="mx-auto mb-1 h-6 w-6 text-green-600" />
                          <p className="text-xs font-medium text-green-700">扫码收款</p>
                        </div>
                        <div className="rounded-lg bg-blue-50 p-3 text-center">
                          <CreditCard className="mx-auto mb-1 h-6 w-6 text-blue-600" />
                          <p className="text-xs font-medium text-blue-700">刷卡收款</p>
                        </div>
                      </div>

                      <Button className="w-full bg-blue-600 py-3 text-white">
                        立即收款
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 浮动元素 */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -right-4 top-20 rounded-lg bg-white p-3"
                >
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-xs font-medium">收款成功</span>
                  </div>
                </motion.div>
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
                icon: <CreditCard className="h-8 w-8" />,
                title: '全渠道收款',
                description: '支持信用卡、借记卡、微信、支付宝、花呗、白条、数字人民币等全部主流支付方式',
                color: 'blue'
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: 'T+0秒到账',
                description: '交易资金实时到账，无需等待，资金周转更灵活，支持365天×24小时到账',
                color: 'green'
              },
              {
                icon: <Shield className="h-8 w-8" />,
                title: '央行一清认证',
                description: '持有央行颁发的支付业务许可证，资金安全有保障，交易数据实时上报',
                color: 'purple'
              },
              {
                icon: <Smartphone className="h-8 w-8" />,
                title: '无需额外设备',
                description: '仅需一部智能手机，下载APP即可开始收款，告别传统POS机的束缚',
                color: 'orange'
              },
              {
                icon: <QrCode className="h-8 w-8" />,
                title: '扫码+刷卡双模式',
                description: '既支持二维码扫码收款，也支持银行卡刷卡，满足不同客户的支付习惯',
                color: 'indigo'
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: '激活返现299元',
                description: '新用户激活APP并完成首笔交易，即可获得299元现金返还奖励',
                color: 'red'
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
                <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-${feature.color}-100 text-${feature.color}-600`}>
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
                logo: '🏦',
                product: '电签版EPOS',
                features: ['0.38%永不+3', '4G秒到账', '央行一清'],
                highlight: '激活返现299元',
                color: 'blue',
                description: '银盛支付是央行颁发支付牌照的正规一清机构，电签版POS机小巧便携，支持全渠道收款。'
              },
              {
                name: '拉卡拉',
                logo: '💳',
                product: '智能POS+收款码',
                features: ['全渠道支付', 'SaaS生态', '会员营销'],
                highlight: '总部直签代理',
                color: 'green',
                description: '拉卡拉是国内知名支付品牌，智能POS机集收银、会员管理、营销于一体。'
              },
              {
                name: '中付支付',
                logo: '🏢',
                product: '智能双屏POS',
                features: ['安卓13系统', '会员营销', '一体化管理'],
                highlight: '万12分润',
                color: 'purple',
                description: '中付支付专注智能收银解决方案，双屏POS机支持扫码点餐、会员管理等功能。'
              },
              {
                name: '乐刷科技',
                logo: '⚡',
                product: '小POS+码牌',
                features: ['激活返299', '万12分润', '小巧便携'],
                highlight: '地摊神器',
                color: 'orange',
                description: '乐刷专注移动支付，小POS机和聚合码牌完美结合，适合各种收款场景。'
              },
              {
                name: '汇莱米',
                logo: '🎯',
                product: '聚合码牌',
                features: ['一张码全渠道', '语音播报', '防逃单'],
                highlight: '0元包邮',
                color: 'indigo',
                description: '汇莱米聚合码牌支持微信、支付宝、信用卡等全渠道收款，语音播报防漏单。'
              },
              {
                name: '合利宝',
                logo: '🌟',
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
                  <div className="text-3xl">{brand.logo}</div>
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
                  <Button
                    className={`w-full bg-${brand.color}-600 text-white hover:bg-${brand.color}-700 transition-colors`}
                    onClick={() => handleDownload(`${brand.name}-android`)}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Play className="h-4 w-4" />
                      Android下载
                    </div>
                  </Button>
                  <Button
                    variant="outline"
                    className={`w-full border-${brand.color}-300 text-${brand.color}-700 hover:bg-${brand.color}-50 transition-colors`}
                    onClick={() => handleDownload(`${brand.name}-ios`)}
                  >
                    <div className="flex items-center justify-center gap-2">
                      <Apple className="h-4 w-4" />
                      iOS下载
                    </div>
                  </Button>
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
