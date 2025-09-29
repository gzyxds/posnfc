"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, MessageSquare, X } from 'lucide-react';

/**
 * 移动端底部业务咨询组件
 * 
 * 功能特性：
 * 1. 固定在移动端底部，不影响页面内容
 * 2. 包含办卡、演示、客服、QQ客服四个主要功能
 * 3. 响应式设计，仅在移动端显示
 * 4. 支持暗黑模式
 * 
 * 使用说明：
 * - 在页面底部固定显示，提供快速咨询入口
 * - 点击图标按钮可打开对应的二维码弹窗
 * - 业务咨询按钮单独显示在右侧
 */

// 二维码图片URL配置
interface MobileBottomConsultProps {
  presalesQR?: string;
  aftersalesQR?: string;
  phoneNumber?: string;
}

interface QRModalData {
  type: string;
  url: string;
  title: string;
  description: string;
}

const MobileBottomConsult = ({ 
  presalesQR = '/images/contact/userhlc.png',
  aftersalesQR = '/images/contact/userhlc.png',
  phoneNumber = '400-8888-8888'
}: MobileBottomConsultProps) => {
  const [showQR, setShowQR] = useState(false);
  const [qrData, setQRData] = useState<QRModalData | null>(null);

  /**
   * 打开二维码弹窗
   * @param type - 二维码类型
   * @param url - 二维码图片URL
   * @param title - 弹窗标题
   * @param description - 描述文字
   */
  const openQR = (type: string, url: string, title: string, description: string) => {
    setQRData({ type, url, title, description });
    setShowQR(true);
  };

  /**
   * 关闭二维码弹窗
   */
  const closeQR = () => {
    setShowQR(false);
    setTimeout(() => setQRData(null), 300);
  };

  /**
   * 跳转到演示页面
   */
  const goToDemo = () => {
    window.location.href = '/new';
  };

  /**
   * 更新body底部内边距，避免内容被遮挡
   */
  useEffect(() => {
    const updateBodyPadding = () => {
      if (window.innerWidth >= 768) {
        document.body.style.paddingBottom = '0';
      } else {
        document.body.style.paddingBottom = '80px';
      }
    };

    updateBodyPadding();

    // 防抖处理resize事件
    let resizeTimeout: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(updateBodyPadding, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.paddingBottom = '0';
    };
  }, []);

  return (
    <>
      {/* 手机端底部业务咨询组件 */}
      <motion.div
        className="fixed bottom-0 left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-700 z-50 md:hidden"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
      >
        {/* 左右分离布局：左侧图标按钮，右侧业务咨询按钮 */}
        <div className="flex items-center justify-between px-4 py-3">

          {/* 左侧四个图标按钮容器 */}
          <div className="flex items-center gap-3">
            {/* 查看演示按钮 */}
            <motion.button
              className="flex flex-col items-center justify-center py-2 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 active:scale-95"
              onClick={goToDemo}
              aria-label="查看产品演示"
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight">办理</span>
            </motion.button>

            {/* 联系客服按钮 */}
            <motion.button
              className="flex flex-col items-center justify-center py-2 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 active:scale-95"
              onClick={() => openQR('presales', presalesQR, '联系客服', '扫描二维码添加客服,获取产品咨询和技术支持')}
              aria-label="联系客服"
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400" />
              <span className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight">客服</span>
            </motion.button>

            {/* QQ客服按钮 */}
            <motion.button
              className="flex flex-col items-center justify-center py-2 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 active:scale-95"
              onClick={() => openQR('aftersales', aftersalesQR, 'QQ客服', '扫描二维码添加客服,获取技术支持和问题解决')}
              aria-label="QQ客服"
              whileTap={{ scale: 0.95 }}
            >
              <MessageSquare className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400" />
              <span className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight">代理</span>
            </motion.button>

            {/* 办卡链接按钮 - 放在最后 */}
            <motion.button
              className="flex flex-col items-center justify-center py-2 px-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200 active:scale-95"
              onClick={() => window.open('https://tui.yirong.com/toa/custom/share?invite_code=3ZqjQn&share_id=12ff9d0802dfa8f14o632Cjhd_SKbF6trJFRGBGvbMU9_832ugpMHmlJK', '_blank')}
              aria-label="申请信用卡"
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-6 h-6 mb-1 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
              <span className="text-xs text-gray-700 dark:text-gray-300 font-medium leading-tight">办卡</span>
            </motion.button>
          </div>

          {/* 业务咨询按钮单独靠右边缘显示 */}
          <motion.button
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 text-sm shadow-md"
            onClick={() => openQR('business', presalesQR, '业务咨询', '扫描二维码联系,获取专业的业务咨询')}
            aria-label="业务咨询"
            whileTap={{ scale: 0.95 }}
          >
            业务咨询
          </motion.button>
        </div>
      </motion.div>

      {/* 二维码弹窗 */}
      <AnimatePresence>
        {showQR && qrData && (
          <motion.div
            className="fixed inset-0 flex items-end justify-center z-[60] p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeQR}
          >
            {/* 背景遮罩 */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

            {/* 弹窗内容 */}
            <motion.div
              className="relative bg-white dark:bg-gray-800 rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl mb-24"
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* 弹窗头部 */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {qrData.title}
                </h3>
                <motion.button
                  onClick={closeQR}
                  className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
                  aria-label="关闭弹窗"
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5" />
                </motion.button>
              </div>

              {/* 二维码图片 */}
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-white rounded-lg border border-gray-200 dark:border-gray-600">
                  <img
                    src={qrData.url}
                    alt={`${qrData.title}二维码`}
                    className="w-40 h-40 object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/contact/userhlc.png'; // 备用图片
                    }}
                  />
                </div>
              </div>

              {/* 描述文字 */}
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center leading-relaxed">
                {qrData.description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MobileBottomConsult;
