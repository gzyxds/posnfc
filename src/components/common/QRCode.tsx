'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

/**
 * 二维码弹出组件的属性接口
 * @interface QRCodeModalProps
 */
interface QRCodeModalProps {
  /** 触发按钮的文本内容 */
  buttonText: string
  /** 二维码图片路径 */
  qrCodeSrc: string
  /** 二维码图片的alt文本 */
  qrCodeAlt: string
  /** 弹窗标题 */
  title: string
  /** 弹窗描述文本 */
  description: string
  /** 按钮的自定义样式类名 */
  buttonClassName?: string
  /** 二维码图片尺寸（宽度和高度相同） */
  qrCodeSize?: number
  /** 提示文字 */
  hintText?: string
}

/**
 * 双二维码弹出组件的属性接口
 * @interface DualQRCodeModalProps
 */
interface DualQRCodeModalProps {
  /** 是否显示弹窗 */
  isOpen: boolean
  /** 关闭弹窗的回调函数 */
  onClose: () => void
  /** 触发按钮的文本内容 */
  buttonText: string
  /** 第一个二维码配置 */
  firstQRCode: {
    src: string
    alt: string
    label: string
    description?: string
  }
  /** 第二个二维码配置 */
  secondQRCode: {
    src: string
    alt: string
    label: string
    description?: string
  }
  /** 弹窗标题 */
  title: string
  /** 弹窗描述文本 */
  description: string
  /** 按钮的自定义样式类名 */
  buttonClassName?: string
  /** 二维码图片尺寸（宽度和高度相同） */
  qrCodeSize?: number
  /** 提示文字 */
  hintText?: string
}

/**
 * 可复用的二维码弹出组件
 * 基于Top.tsx的设计风格，提供统一的二维码弹窗体验
 * 支持单个二维码显示，响应式布局适配不同屏幕尺寸
 *
 * @param props - 组件属性
 * @returns JSX.Element
 */
export function QRCodeModal({
  buttonText,
  qrCodeSrc,
  qrCodeAlt,
  title,
  description,
  buttonClassName = '',
  qrCodeSize = 192,
  hintText = '长按二维码保存到相册'
}: QRCodeModalProps) {
  const [showQRCode, setShowQRCode] = useState(false)

  /**
   * 处理按钮点击事件，显示二维码弹出框
   */
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleButtonClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <>
      <button
        onClick={handleButtonClick}
        className={buttonClassName || "inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"}
      >
        {buttonText}
      </button>

      {/* 二维码弹出框模态框 */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
            onClick={handleCloseModal}
          >
            {/* 背景遮罩 */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            {/* 模态框内容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative mx-4 w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-gray-200/70"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100/80 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
                aria-label="关闭"
              >
                <XMarkIcon className="h-4 w-4 text-gray-700" />
              </button>

              {/* 内容区域 */}
              <div className="p-8 text-center">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mb-6 text-sm text-gray-600">
                  {description}
                </p>

                {/* 二维码 */}
                <div className="mb-4 flex justify-center">
                  <div className="relative">
                    <Image
                      src={qrCodeSrc}
                      alt={qrCodeAlt}
                      width={qrCodeSize}
                      height={qrCodeSize}
                      className="border border-gray-200 object-contain shadow-lg"
                      style={{ width: qrCodeSize, height: qrCodeSize }}
                    />
                  </div>
                </div>

                {/* 提示文字 */}
                <p className="mt-6 text-xs text-gray-500">
                  {hintText || '长按二维码保存到相册，或使用微信扫一扫'}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/**
 * 可复用的双二维码弹出组件
 * 基于Top.tsx的设计风格，提供统一的双二维码弹窗体验
 * 支持两个二维码并排显示，响应式布局适配不同屏幕尺寸
 *
 * @param props - 组件属性
 * @returns JSX.Element
 */
export function DualQRCodeModal({
  isOpen,
  onClose,
  buttonText,
  firstQRCode,
  secondQRCode,
  title,
  description,
  buttonClassName = '',
  qrCodeSize = 120,
  hintText = '长按二维码保存到相册'
}: DualQRCodeModalProps) {
  return (
    <>
      {/* 二维码弹出框模态框 */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-6"
            onClick={onClose}
          >
            {/* 背景遮罩 */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

            {/* 模态框内容 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative mx-4 w-full max-w-md overflow-hidden rounded-lg bg-white shadow-xl ring-1 ring-gray-200/70"
              onClick={(e) => e.stopPropagation()}
            >
              {/* 关闭按钮 */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100/80 transition-all duration-200 hover:bg-gray-200 hover:scale-105"
                aria-label="关闭"
              >
                <XMarkIcon className="h-4 w-4 text-gray-700" />
              </button>

              {/* 内容区域 */}
              <div className="p-8 text-center">
                <h3 className="mb-2 text-lg font-semibold text-gray-900">
                  {title}
                </h3>
                <p className="mb-6 text-sm text-gray-600">
                  {description}
                </p>

                {/* 双二维码布局 - 参考VideoCarousel.tsx设计 */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* 第一个二维码 */}
                  <div className="text-center">
                    <div className="mb-3 text-sm font-medium text-gray-700">
                      {firstQRCode.label}
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src={firstQRCode.src}
                        alt={firstQRCode.alt}
                        width={qrCodeSize}
                        height={qrCodeSize}
                        className="h-30 w-30 border border-gray-200 object-contain shadow-sm"
                        unoptimized
                      />
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                       {firstQRCode.description || '微信客服咨询'}
                     </p>
                  </div>

                  {/* 第二个二维码 */}
                  <div className="text-center">
                    <div className="mb-3 text-sm font-medium text-gray-700">
                      {secondQRCode.label}
                    </div>
                    <div className="flex justify-center">
                      <Image
                        src={secondQRCode.src}
                        alt={secondQRCode.alt}
                        width={qrCodeSize}
                        height={qrCodeSize}
                        className="h-30 w-30 border border-gray-200 object-contain shadow-sm"
                        unoptimized
                      />
                    </div>
                    <p className="mt-2 text-xs text-gray-500">
                       {secondQRCode.description || '获取最新资讯'}
                     </p>
                  </div>
                </div>

                {/* 提示文字 */}
                <p className="mt-6 text-xs text-gray-500">{hintText}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

/**
 * 默认导出单个二维码组件
 */
export default QRCodeModal
