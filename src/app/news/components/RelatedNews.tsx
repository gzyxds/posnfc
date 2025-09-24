import React from 'react';
import Link from 'next/link';
import { NewsItem } from '../types';
import { newsService } from '../services/newsService';

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
  const relatedNews = await newsService.getRelatedNews(currentNewsId, limit);

  if (relatedNews.length === 0) {
    return (
      <div className={`overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-5 ${className}`}>
        <h3 className="text-lg font-semibold text-slate-800 mb-4">相关推荐</h3>
        <div className="text-center py-6">
          <div className="text-slate-400 mb-3">
            <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    <div className={`overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_6px_20px_#dce0e8] rounded-none p-5 ${className}`}>
      <h3 className="text-lg font-semibold text-slate-800 mb-4">相关推荐</h3>
      <div className="space-y-3">
        {relatedNews.map((news) => (
          <Link
            key={news.id}
            href={`/news/${news.id}`}
            className="block group hover:bg-slate-50 rounded-lg p-2 -m-2 transition-colors"
          >
            <div className="flex space-x-3">
              <div className="flex-shrink-0">
                {news.coverImage ? (
                  <img
                    src={news.coverImage}
                    alt={news.title}
                    className="w-16 h-12 object-cover rounded-lg"
                  />
                ) : (
                  <div className="w-16 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-slate-800 group-hover:text-slate-900 line-clamp-2 mb-1 leading-tight">
                  {news.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                  <span>{formatDate(news.publishDate)}</span>
                  <span>•</span>
                  <span>{news.readingTime}分钟</span>
                </div>
                {(news.sticky || news.featured) && (
                  <div className="flex gap-1">
                    {news.sticky && (
                      <span className="px-1.5 py-0.5 bg-red-100 text-red-600 text-xs rounded font-medium">
                        置顶
                      </span>
                    )}
                    {news.featured && (
                      <span className="px-1.5 py-0.5 bg-orange-100 text-orange-600 text-xs rounded font-medium">
                        推荐
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-5 pt-4 border-t border-slate-200">
        <Link
          href="/news"
          className="block w-full text-center py-2 text-sm text-slate-600 hover:text-slate-700 hover:bg-slate-50 rounded-lg transition-colors font-medium"
        >
          查看更多新闻 →
        </Link>
      </div>
    </div>
  );
};

export default RelatedNews;