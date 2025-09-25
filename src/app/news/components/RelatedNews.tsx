import React from 'react';
import Link from 'next/link';
import { NewsItem } from '../types';

// 动态导入新闻服务
const getNewsService = async () => {
  const { newsService } = await import('../services/newsServiceFilesystem');
  return newsService;
};

interface RelatedNewsProps {
  currentNewsId: string;
  category?: string;
  tags?: string[];
  limit?: number;
  className?: string;
}

/**
 * 格式化日期显示
 * @param date Date对象或日期字符串
 */
const formatDate = (date: Date | string): string => {
  const dateObj = date instanceof Date ? date : new Date(date);
  const now = new Date();
  const diffTime = now.getTime() - dateObj.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays === 0) {
    return '今天';
  } else if (diffDays === 1) {
    return '昨天';
  } else if (diffDays < 7) {
    return `${diffDays}天前`;
  } else {
    return dateObj.toLocaleDateString('zh-CN', {
      month: 'short',
      day: 'numeric'
    });
  }
};

/**
 * 相关新闻组件
 * 根据当前新闻的分类和标签推荐相关新闻
 */
const RelatedNews: React.FC<RelatedNewsProps> = async ({
  currentNewsId,
  category,
  tags = [],
  limit = 6,
  className = ''
}) => {
  // 加载相关新闻
  const newsService = await getNewsService();
  const relatedNews = await newsService.getRelatedNews(currentNewsId, limit);

  if (relatedNews.length === 0) {
    return (
      <div className={`overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-4 sm:p-5 ${className}`}>
        <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4">相关推荐</h3>
        <div className="text-center py-4 sm:py-6">
          <div className="text-slate-400 mb-3">
            <svg className="w-6 sm:w-8 h-6 sm:h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
            </svg>
          </div>
          <p className="text-slate-500 text-sm mb-3">暂无相关新闻</p>
          <Link
            href="/news"
            className="inline-block px-3 py-1.5 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-700 text-sm rounded-lg transition-colors font-medium"
          >
            浏览更多 →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={`overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-4 sm:p-5 ${className}`}>
      <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-3 sm:mb-4">相关推荐</h3>
      
      <div className="mt-4 sm:mt-5 pt-3 sm:pt-4 border-t border-slate-200">
        <div className="grid grid-cols-2 gap-3">
            {relatedNews.slice(0, 6).map((news) => (
            <Link
              key={`more-${news.id}`}
              href={`/news/${news.id}`}
              className="block group"
            >
              <div className="flex flex-col h-full">
                {news.coverImage ? (
                  <img
                    src={news.coverImage}
                    alt={news.title}
                    className="w-full h-20 object-cover rounded-none"
                  />
                ) : (
                  <div className="w-full h-20 bg-slate-100 rounded-none flex items-center justify-center">
                    <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <h4 className="text-xs font-medium text-slate-800 group-hover:text-slate-900 line-clamp-1 mt-2 leading-tight">
                  {news.title}
                </h4>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/news"
          className="block w-full text-center py-2 text-sm text-slate-600 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors font-medium mt-3"
        >
          查看更多新闻 →
        </Link>
      </div>
    </div>
  );
};

export default RelatedNews;