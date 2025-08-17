'use client'

import { useState } from 'react'
import Image from 'next/image'

/**
 * 客服悬浮组件
 * 提供客服、咨询、购物车等功能，支持悬停显示二维码
 * 采用简洁现代的设计风格
 */
export default function CustomerService() {
  const [showQRCode, setShowQRCode] = useState(false)

  /**
   * 滚动到页面顶部
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="fixed right-2 lg:right-4 top-1/2 transform -translate-y-1/2 translate-y-4 z-50">
      {/* 客服悬浮按钮组 */}
      <div className="flex flex-col space-y-2">
        {/* 客服按钮 */}
        <div
          className="relative"
          onMouseEnter={() => setShowQRCode(true)}
          onMouseLeave={() => setShowQRCode(false)}
        >
          <button
            className="group w-10 h-20 lg:w-12 lg:h-24 bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-sm"
            aria-label="联系客服"
          >
            <div className="w-5 h-5 lg:w-7 lg:h-7 mb-1 flex items-center justify-center">
              <svg className="w-3 h-3 lg:w-5 lg:h-5 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17L4 17.17V4h16v12zM7 9h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
              </svg>
            </div>
            <span className="text-[10px] lg:text-xs font-medium tracking-wide">客服</span>
          </button>

          {/* 二维码浮窗 */}
          {showQRCode && (
            <div className="absolute right-12 lg:right-16 top-0 bg-white/95 backdrop-blur-md rounded-xl shadow-2xl p-3 lg:p-6 border border-gray-100 animate-in slide-in-from-right-2 fade-in duration-200">
              <div className="text-center">
                <div className="w-20 h-20 lg:w-28 lg:h-28 rounded-xl overflow-hidden mb-2 lg:mb-3 border border-gray-200">
                  <Image
                    src="/images/contact/xcx.png"
                    alt="客服二维码"
                    width={112}
                    height={112}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs lg:text-sm text-gray-700 font-medium">扫码联系客服</p>
              </div>
              {/* 箭头指示器 */}
              <div className="absolute left-full top-3 lg:top-5 w-0 h-0 border-l-4 lg:border-l-6 border-l-white/95 border-t-4 lg:border-t-6 border-t-transparent border-b-4 lg:border-b-6 border-b-transparent"></div>
            </div>
          )}
        </div>

        {/* 咨询按钮 */}
        <button
           className="group w-10 h-20 lg:w-12 lg:h-24 bg-white/90 backdrop-blur-sm text-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center border border-gray-200/50 hover:border-gray-300/70 hover:bg-white"
           aria-label="在线咨询"
         >
          <div className="w-5 h-5 lg:w-7 lg:h-7 mb-1 flex items-center justify-center">
            <svg className="w-3 h-3 lg:w-5 lg:h-5 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.27-.27.35-.67.24-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1z"/>
            </svg>
          </div>
          <span className="text-[10px] lg:text-xs font-medium tracking-wide">咨询</span>
        </button>

        {/* 购物车按钮 */}
        <button
           className="group w-10 h-20 lg:w-12 lg:h-24 bg-white/90 backdrop-blur-sm text-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center border border-gray-200/50 hover:border-gray-300/70 hover:bg-white"
           aria-label="购物车"
         >
          <div className="w-5 h-5 lg:w-7 lg:h-7 mb-1 flex items-center justify-center">
            <svg className="w-3 h-3 lg:w-5 lg:h-5 transition-transform duration-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12L8.1 13h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1zm16 16c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
            </svg>
          </div>
          <span className="text-[10px] lg:text-xs font-medium tracking-wide">购物车</span>
        </button>

        {/* 回到顶部按钮 */}
        <button
           onClick={scrollToTop}
           className="group w-12 h-12 lg:w-14 lg:h-14 bg-white/90 backdrop-blur-sm text-gray-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center border border-gray-200/50 hover:border-gray-300/70 hover:bg-white mt-2"
           aria-label="回到顶部"
         >
          <svg className="w-3 h-3 lg:w-5 lg:h-5 group-hover:-translate-y-0.5 transition-all duration-200" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
          </svg>
        </button>
      </div>
    </div>
  )
}
