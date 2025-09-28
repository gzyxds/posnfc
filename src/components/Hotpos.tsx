'use client'

import clsx from 'clsx'
import { Container } from '@/components/Container'
import { useRef, useState } from 'react'
import styles from './css/Merchants.module.css'
import {
  DevicePhoneMobileIcon,
  QrCodeIcon,
  SpeakerWaveIcon,
  CreditCardIcon,
  ShoppingBagIcon,
  CubeIcon,
} from '@heroicons/react/24/outline'
import { DualQRCodeModal } from '@/components/common/QRCode'

// 热门产品数据
const hotProducts = [
  {
    id: 1,
    title: '电子码牌',
    subtitle: '支持多种支付方式，便捷收款',
    icon: QrCodeIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/product/电子码牌.jpg',
  },
  {
    id: 2,
    title: '微智能',
    subtitle: '智能化收款解决方案',
    icon: CubeIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/product/汇来掌柜扫码盒.jpg',
  },
  {
    id: 3,
    title: 'AI智能码牌',
    subtitle: 'AI赋能，智能收款体验',
    icon: QrCodeIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/product/ymjf.jpg',
  },
  {
    id: 4,
    title: '智能屏循环',
    subtitle: '安全便捷的电子签名支付',
    icon: CreditCardIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/product/智能屏循环.jpg',
  },
  {
    id: 5,
    title: '银盛码牌',
    subtitle: '专业收款码牌解决方案',
    icon: QrCodeIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/product/小Y贴纸.jpg',
  },
  {
    id: 6,
    title: '惠客收音箱',
    subtitle: '大屏POS，操作更便捷',
    icon: CreditCardIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/product/惠客收音箱.jpg',
  },
  {
    id: 7,
    title: '银盛云音响',
    subtitle: '语音播报，收款更明确',
    icon: SpeakerWaveIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/product/云银扫码盒.jpg',
  },
  {
    id: 8,
    title: '扫码王',
    subtitle: '快速扫码，高效收款',
    icon: QrCodeIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/product/智能终端电签.jpg',
  },
  {
    id: 9,
    title: '收款王M820',
    subtitle: '多种支付方式，一码搞定',
    icon: QrCodeIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/product/收款王M820.png',
  },
  {
    id: 10,
    title: '银盛电签',
    subtitle: '电子签名，安全支付',
    icon: CreditCardIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/product/汇来掌柜扫码盒.jpg',
  },
  {
    id: 11,
    title: '乐刷电签',
    subtitle: '便携电签，随时收款',
    icon: CreditCardIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/product/汇来掌柜扫码盒.jpg',
  },
  {
    id: 12,
    title: '海科刚刷',
    subtitle: '小巧便携，功能强大',
    icon: DevicePhoneMobileIcon,
    iconColor: 'text-blue-600',
    bgImage: '/images/product/汇来掌柜扫码盒.jpg',
  },
]

// 商品卡片组件
interface ProductCardProps {
  product: typeof hotProducts[number]
  index: number
}

function ProductCard({ product, index }: ProductCardProps) {
  const IconComponent = product.icon
  const [isQRModalOpen, setIsQRModalOpen] = useState(false)
  const [modalType, setModalType] = useState<'apply' | 'contact'>('apply')

  // 处理免费申请按钮点击
  const handleApplyClick = () => {
    setModalType('apply')
    setIsQRModalOpen(true)
  }

  // 处理联系客服按钮点击
  const handleContactClick = () => {
    setModalType('contact')
    setIsQRModalOpen(true)
  }

  // 关闭弹窗
  const handleCloseModal = () => {
    setIsQRModalOpen(false)
  }

  return (
    <>
      <div className="group relative overflow-hidden bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] transition-all duration-200 hover:shadow-lg rounded-none p-4 sm:p-5 cursor-pointer">
        {/* 背景图片区域 - 16:9比例显示 */}
        <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-3 sm:mb-4">
          {/* 背景图片 */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage: `url(${product.bgImage})`,
            }}
          />
          {/* 渐变遮罩 */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* 产品类型标签 - 参考Cardprice.tsx */}
          <div className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 bg-blue-500/90 backdrop-blur-sm text-white text-xs sm:text-sm px-2 py-1 sm:px-3 sm:py-1.5 rounded-full shadow-lg">
            POS机
          </div>
        </div>

        {/* 内容区域 - 使用flex布局优化 */}
        <div className="flex flex-col min-h-[120px] sm:min-h-[140px] bg-transparent">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-tight mb-2">
            {product.title}
          </h3>

          {/* 支付方式标签 - 参考Cardprice.tsx */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="px-2 py-0.5 bg-blue-50 text-blue-600 text-xs rounded-full transition-colors duration-200">
              扫码支付
            </span>
            <span className="px-2 py-0.5 bg-green-50 text-green-600 text-xs rounded-full transition-colors duration-200">
              NFC
            </span>
            <span className="px-2 py-0.5 bg-purple-50 text-purple-600 text-xs rounded-full transition-colors duration-200">
              云闪付
            </span>
          </div>

          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-3 sm:mb-4 flex-grow">
            {product.subtitle}
          </p>

          {/* 双按钮组合 - 完全自定义适配 */}
          <div className="mt-auto">
            <div className="flex gap-2">
              <button
                onClick={handleApplyClick}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="truncate">免费申请</span>
              </button>
              <button
                onClick={handleContactClick}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium border border-gray-200 dark:border-gray-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="truncate">联系客服</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 双二维码弹窗 */}
      <DualQRCodeModal
        isOpen={isQRModalOpen}
        onClose={handleCloseModal}
        buttonText=""
        title={modalType === 'apply' ? '免费申请POS机' : '联系客服'}
        description={modalType === 'apply' ? '扫描下方二维码，免费申请POS机' : '扫描下方二维码，联系客服获取更多信息'}
        firstQRCode={{
          src: '/images/contact/userhlc.png',
          alt: modalType === 'apply' ? '申请POS机二维码' : '微信客服二维码',
          label: modalType === 'apply' ? '申请POS机' : '微信客服',
          description: modalType === 'apply' ? '扫码免费申请' : '添加微信客服'
        }}
        secondQRCode={{
          src: '/images/contact/gzh.png',
          alt: '微信公众号二维码',
          label: '微信公众号',
          description: '关注获取更多优惠'
        }}
        qrCodeSize={120}
        hintText="长按二维码保存到相册"
      />
    </>
  )
}

/**
 * 热门产品展示组件
 * 展示各种POS机和支付设备产品
 *
 * @returns {JSX.Element} 热门产品展示区域
 */
export default function Hotpos() {
  // 滚动容器引用
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  return (
    <section className="relative py-12 sm:py-16 lg:py-20"
      style={{
        backgroundImage: 'url(/images/screenshots/Hotposbj.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed'
      }}>
      {/* 内容背景遮罩 - 仅10%透明度 */}
      <div className="absolute inset-0 bg-white/98"></div>
      {/* 灰色遮罩层 - 添加轻微灰度效果 */}
      <div className="absolute inset-0 bg-gray-900/5"></div>
      {/* 内容容器 - 相对定位确保内容在背景之上 */}
      <div className="relative">
      {/* 标题区域 - 使用Container限制宽度 */}
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            热门POS机产品推荐
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            多种智能收款设备，满足不同场景的支付需求
          </p>
        </div>
      </Container>

      {/* 卡片展示区域 - 全屏展示 */}
      <div className="relative mt-10 sm:mt-12 overflow-hidden py-4">
        {/* 卡片容器 - 纯CSS无限滚动 */}
        <div
          ref={scrollContainerRef}
          className={`${styles.hideScrollbar} relative overflow-hidden mx-auto`}
          style={{ width: '100%', maxWidth: '1800px' }}
        >
          <div className={`${styles.scrollContainer} px-4 md:px-8 py-2`}>
            {/* 第一组卡片 */}
            {hotProducts.map((product, index) => (
              <div
                key={`first-${product.id}`}
                className={`${styles.industryCard}`}
              >
                <ProductCard
                  product={product}
                  index={index}
                />
              </div>
            ))}

            {/* 第二组卡片（用于无缝循环） */}
            {hotProducts.map((product, index) => (
              <div
                key={`second-${product.id}`}
                className={`${styles.industryCard}`}
              >
                <ProductCard
                  product={product}
                  index={index}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 底部说明文字 - 使用Container限制宽度 */}
      <Container>
        <div className="mt-16 text-center">
          <p className="text-base text-gray-500">
            更多产品请咨询客服，我们将为您提供专业的选型建议
          </p>
        </div>
      </Container>
      </div>
    </section>
  )
}
