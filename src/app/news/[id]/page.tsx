import React from 'react';
import Link from 'next/link';
import { NewsItem } from '../types';
import { newsService } from '../services/newsService';
import MarkdownRenderer from '../components/MarkdownRenderer';
import RelatedNews from '../components/RelatedNews';
import Breadcrumb, { generateNewsBreadcrumb } from '../components/Breadcrumb';
import NewsCoverImage from './components/NewsCoverImage';
import Header from '@/components/Header';
import { Footer } from '@/components/Footer';

// 为静态导出添加generateStaticParams函数
export async function generateStaticParams() {
  // 初始化新闻服务
  const service = newsService;
  
  // 获取所有新闻ID
  const newsList = await service.getNews({ pageSize: 100 });
  return newsList.items.map((news) => ({
    id: news.id,
  }));
}

// 为服务端渲染添加获取数据的函数
export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const news = await newsService.getNewsById(resolvedParams.id);
  
  if (!news) {
    return {
      title: '新闻未找到',
      description: '请求的新闻不存在',
    };
  }
  
  return {
    title: `${news.title} - 新闻详情`,
    description: news.summary,
    keywords: news.tags.join(','),
  };
}

/**
 * 格式化日期显示
 */
const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(date);
};

/**
 * 新闻详情页面组件
 * 
 * 功能说明：
 * - 展示单篇新闻的完整内容
 * - 提供面包屑导航和返回功能
 * - 显示文章元信息（作者、发布时间、阅读时间等）
 * - 渲染Markdown格式的文章内容
 * - 推荐相关新闻
 * - 动态设置页面SEO元数据
 */
export default async function NewsDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const news = await newsService.getNewsById(resolvedParams.id);
  
  if (!news) {
    return (
      <div className="min-h-screen bg-slate-50/30">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-8">
          {/* 面包屑导航 */}
          <div className="mb-6">
            <Breadcrumb items={generateNewsBreadcrumb()} />
          </div>

          {/* 错误提示 */}
          <div className="bg-white rounded-xl border border-slate-200/60 p-12 text-center">
            <div className="text-slate-400 mb-4">
              <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-slate-700 mb-2">
              新闻不存在
            </h3>
            <p className="text-slate-500 mb-6 text-sm">
              您访问的新闻可能已被删除或链接有误
            </p>
            <div className="space-x-3">
              <Link
                href="/news"
                className="px-5 py-2.5 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors text-sm font-medium"
              >
                返回新闻列表
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/30 flex flex-col">
      {/* 头部组件 */}
      <Header />
      
      <div className="flex-grow">
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-8">
          {/* 面包屑导航 */}
          <div className="mb-8">
            <Breadcrumb items={generateNewsBreadcrumb(news.title)} />
          </div>

          {/* 左右布局容器 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 左侧内容区域 */}
            <div className="lg:col-span-2 space-y-8">
              {/* 文章头部 */}
              <article className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none">
                {/* 封面图片 */}
                {news.coverImage && (
                  <div className="w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
                    <NewsCoverImage 
                      src={news.coverImage}
                      alt={news.title}
                    />
                  </div>
                )}

                <div className="p-8">
                  {/* 特殊标记 */}
                  <div className="flex space-x-3 mb-6">
                    {news.sticky && (
                      <span className="px-3 py-1.5 bg-red-500/10 text-red-600 text-sm font-semibold rounded-lg border border-red-200">
                        🔝 置顶
                      </span>
                    )}
                    {news.featured && (
                      <span className="px-3 py-1.5 bg-amber-500/10 text-amber-600 text-sm font-semibold rounded-lg border border-amber-200">
                        ⭐ 推荐
                      </span>
                    )}
                  </div>

                  {/* 标题和摘要 */}
                  <div className="mb-8">
                    <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-6 leading-tight">
                      {news.title}
                    </h1>
                    <p className="text-lg text-slate-600 leading-relaxed">
                      {news.summary}
                    </p>
                  </div>

                  {/* 文章元信息 */}
                  <div className="flex flex-wrap items-center gap-6 mb-8 text-sm text-slate-500 pb-6 border-b border-slate-100">
                    {/* 作者信息 */}
                    <div className="flex items-center space-x-3">
                      <img
                        src="/images/scenarios/logo.svg"
                        alt="网站Logo"
                        className="w-10 h-10 rounded-full object-cover bg-white border-2 border-slate-200 p-1"
                      />
                      <div>
                        <div className="font-semibold text-slate-700">{news.author.name}</div>
                        <div className="text-xs text-slate-500">{news.author.title}</div>
                      </div>
                    </div>

                    {/* 发布时间 */}
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="font-medium">{formatDate(news.publishDate)}</span>
                    </div>

                    {/* 阅读时间 */}
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="font-medium">约 {news.readingTime} 分钟阅读</span>
                    </div>
                  </div>

                  {/* 标签 */}
                  {news.tags.length > 0 && (
                    <div className="flex flex-wrap gap-3">
                      {news.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-blue-50 text-blue-600 text-sm font-medium rounded-full border border-blue-200 hover:bg-blue-100 transition-colors"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>

              {/* 文章内容 */}
              <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-8">
                <MarkdownRenderer content={news.content} />
              </div>

              {/* 操作按钮 */}
              <div className="flex justify-between items-center">
                <Link
                  href="/news"
                  className="flex items-center space-x-2 px-6 py-3 bg-slate-600 text-white rounded-lg hover:bg-slate-700 transition-colors font-medium"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  <span>返回新闻列表</span>
                </Link>

                {/* 分享按钮 - 移除了使用window对象的onClick事件 */}
                <div className="flex space-x-3">
                  <button
                    className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                    </svg>
                    <span>分享</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 右侧边栏 */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 space-y-6">
                {/* 文章信息卡片 */}
                <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">文章信息</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-slate-500">发布时间</span>
                      <span className="text-slate-700 font-medium">{formatDate(news.publishDate)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">阅读时间</span>
                      <span className="text-slate-700 font-medium">{news.readingTime} 分钟</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">分类</span>
                      <span className="text-slate-700 font-medium">{news.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-500">作者</span>
                      <span className="text-slate-700 font-medium">{news.author.name}</span>
                    </div>
                  </div>
                </div>

                {/* 目录导航（可选） */}
                <div className="overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-6">
                  <h3 className="text-lg font-semibold text-slate-800 mb-4">快速导航</h3>
                  <div className="space-y-2 text-sm">
                    <a href="#content" className="block text-slate-600 hover:text-blue-600 transition-colors py-1">
                      文章内容
                    </a>
                    <a href="#related" className="block text-slate-600 hover:text-blue-600 transition-colors py-1">
                      相关推荐
                    </a>
                  </div>
                </div>

                {/* 相关新闻 */}
                <div id="related">
                  <RelatedNews currentNewsId={news.id} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* 底部组件 */}
      <Footer />
    </div>
  );
}