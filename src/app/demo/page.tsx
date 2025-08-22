"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Container } from '@/components/Container';
import DemoShowcase from './components/demo';
/**
 * 产品演示页面
 * 包含导航菜单、英雄区域、产品展示和页脚
 * @returns {JSX.Element} 页面组件
 */
const DemoPage = () => {

    /**
   * 处理联系客服按钮点击事件
   * 触发BackToTop组件中的二维码弹窗
   */
  const handleContactService = () => {
    // 触发自定义事件，让BackToTop组件显示二维码弹窗
    window.dispatchEvent(new CustomEvent('showQRCodeModal'));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* 导航菜单 */}
      <Header />
      
      {/* 简约英雄区域 */}
      <section className="relative bg-slate-100 border-b border-gray-100 pt-16">
        <Container className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Star className="w-4 h-4" />
                用科技创造无限可能
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                产品体验
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed max-w-2xl mx-auto">
              基于前后端分离架构以及Vue3、uni-app、ThinkPHP6.x、PHP8.0技术栈开发，包含PC端、H5端、小程序端、APP端
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3"
                onClick={() => window.open('https://auth.cnai.art/', '_blank')}
              >
                立即购买
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                className="border-gray-300 text-gray-700 hover:bg-gray-50 font-medium px-8 py-3"
                onClick={handleContactService}
              >
                联系我们
              </Button>
            </motion.div>
          </div>
        </Container>
      </section>

      <main>
        {/* 产品展示区域 */}
        <DemoShowcase />
      </main>
      
      {/* 底部 */}
      <Footer />
    </div>
  );
};

export default DemoPage;