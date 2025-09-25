'use client'

import { useState, useEffect } from 'react'
import NewsCard from './components/NewsCard'
import NewsFilter from './components/NewsFilter'
import NewsPagination from './components/NewsPagination'
import { NewsItem, NewsCategory, SortBy, SortOrder, NewsListOptions } from './types'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'

/**
 * 新闻列表客户端组件
 * 接收服务端传递的初始数据，处理客户端交互
 */
interface NewsListClientProps {
  initialNewsList: NewsItem[]
  initialTotalPages: number
  initialTotalItems: number
}

export default function NewsListClient({ 
  initialNewsList, 
  initialTotalPages, 
  initialTotalItems
}: NewsListClientProps) {
  // 页面状态管理
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(12);
  const [category, setCategory] = useState<NewsCategory | undefined>(undefined);
  const [sortBy, setSortBy] = useState<SortBy>('publishDate');
  const [sortOrder, setSortOrder] = useState<SortOrder>('desc');
  const [newsList, setNewsList] = useState<NewsItem[]>(initialNewsList);
  const [totalPages, setTotalPages] = useState(initialTotalPages);
  const [totalItems, setTotalItems] = useState(initialTotalItems);
  const [loading, setLoading] = useState(false);
  const [newsService, setNewsService] = useState<any>(null);
  const [isServiceLoaded, setIsServiceLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 动态导入新闻服务（用于客户端交互）
  useEffect(() => {
    const loadNewsService = async () => {
      try {
        // 根据环境选择合适的服务
        if (typeof window !== 'undefined') {
          // 客户端环境，使用客户端服务
          const { newsServiceClient } = await import('./services/newsServiceClient');
          
          // 只在客户端服务初始化时传递数据
          if (!newsServiceClient.isInitialized()) {
            // 将服务端初始数据传递给客户端服务
            const initialData = {
              items: initialNewsList,
              total: initialTotalItems,
              totalPages: initialTotalPages
            };
            
            // 设置客户端服务的初始数据
            await newsServiceClient.initializeWithData(initialData);
            console.log('使用客户端新闻服务，初始数据:', initialData);
          }
          
          setNewsService(() => newsServiceClient);
        } else {
          // 服务端环境，使用文件系统服务
          const { newsService } = await import('./services/newsServiceFilesystem');
          setNewsService(() => newsService);
          console.log('使用服务端新闻服务');
        }
        setIsServiceLoaded(true);
      } catch (error) {
        console.error('Failed to load news service:', error);
        setError('加载新闻服务失败');
        // 即使服务加载失败，也保持初始数据显示
        setIsServiceLoaded(true);
      }
    };
    
    // 延迟加载服务，避免阻塞初始渲染
    const timer = setTimeout(() => {
      loadNewsService();
    }, 100);
    
    return () => clearTimeout(timer);
  }, []); // 空依赖数组，只在组件挂载时执行

  // 从URL读取参数
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      const urlCategory = urlParams.get('category') as NewsCategory | null;
      const urlPage = urlParams.get('page');
      
      console.log('从URL读取参数:', { urlCategory, urlPage });
      
      if (urlCategory) {
        setCategory(urlCategory);
      }
      
      if (urlPage) {
        const pageNum = parseInt(urlPage, 10);
        if (!isNaN(pageNum) && pageNum > 0) {
          setCurrentPage(pageNum);
        }
      }
    }
  }, []);

  // 设置页面标题
  useEffect(() => {
    document.title = '新闻资讯 - 最新技术动态与行业洞察';
    
    // 设置页面描述
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', '获取最新的技术资讯、行业动态和深度分析文章，涵盖人工智能、Web开发、创业投资等多个领域。');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'description';
      newMeta.content = '获取最新的技术资讯、行业动态和深度分析文章，涵盖人工智能、Web开发、创业投资多个领域。';
      document.head.appendChild(newMeta);
    }
    
    // 设置页面关键词
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', '新闻资讯,技术动态,行业分析,人工智能,Web开发,创业投资');
    } else {
      const newMeta = document.createElement('meta');
      newMeta.name = 'keywords';
      newMeta.content = '新闻资讯,技术动态,行业分析,人工智能,Web开发,创业投资';
      document.head.appendChild(newMeta);
    }
  }, []);

  // 加载新闻列表数据
  useEffect(() => {
    const loadNews = async () => {
      // 只有在服务加载完成时才加载
      if (!newsService || !isServiceLoaded) return;
      
      console.log('加载新闻数据:', {
        currentPage,
        pageSize,
        category,
        sortBy,
        sortOrder,
        newsService: !!newsService,
        isServiceLoaded
      });
      
      setLoading(true);
      try {
        const options: NewsListOptions = {
          page: currentPage,
          pageSize,
          category,
          sortBy,
          sortOrder
        };

        console.log('调用getNews with options:', options);
        const response = await newsService.getNews(options);
        console.log('getNews返回结果:', response);
        
        // 只有在返回数据不为空时才更新状态
        if (response && response.items && response.items.length > 0) {
          setNewsList(response.items);
          setTotalPages(response.totalPages);
          setTotalItems(response.total);
        } else {
          console.log('返回数据为空，保持当前数据');
        }
      } catch (error) {
        console.error('Failed to load news:', error);
      } finally {
        setLoading(false);
      }
    };

    loadNews();
  }, [currentPage, pageSize, category, sortBy, sortOrder, newsService, isServiceLoaded]);

  // 处理分类变更
  const handleCategoryChange = (newCategory?: NewsCategory) => {
    console.log('分类变更:', newCategory, '当前分类:', category);
    setCategory(newCategory);
    setCurrentPage(1); // 重置到第一页
    
    // 更新URL参数
    const url = new URL(window.location.href);
    if (newCategory) {
      url.searchParams.set('category', newCategory);
    } else {
      url.searchParams.delete('category');
    }
    // 重置页码
    url.searchParams.set('page', '1');
    
    // 使用replaceState避免历史记录堆积
    window.history.replaceState({}, '', url.toString());
  };

  // 处理排序变更
  const handleSortChange = (newSortBy: SortBy, newSortOrder: SortOrder) => {
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
    setCurrentPage(1); // 重置到第一页
  };

  // 处理页码变更
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 处理页面大小变更
  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1); // 重置到第一页
  };

  return (
    <div className="min-h-screen bg-slate-50/30 flex flex-col">
      {/* 头部组件 */}
      <Header />
      
      <div className="flex-grow">
        {/* 头部设计 - 参考图片风格的简洁居中布局 */}
        <div className="bg-gray-50 border-b border-gray-200">
          <Container className="pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-8 sm:pb-12 md:pb-16 lg:pb-20">
            <div className="text-center max-w-4xl mx-auto space-y-6 sm:space-y-8">
              {/* 主标题 - 调整为较小字体 */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight mt-8">
                每日掌握 <span className="text-blue-600">支付</span>行业关键动态
              </h1>
              
              {/* 副标题描述 - 调整为较小字体 */}
              <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                加入28,000+专业人士的AI情报网络
              </p>
            </div>
          </Container>
        </div>

        <Container className="py-6 sm:py-8">
          {/* 筛选组件 - 响应式设计 */}
          <div className="mb-6 sm:mb-8">
            <NewsFilter
              category={category}
              sortBy={sortBy}
              sortOrder={sortOrder}
              onCategoryChange={handleCategoryChange}
              onSortChange={handleSortChange}
            />
          </div>

          {/* 主内容区域 - 响应式全宽显示 */}
          <div className="w-full">
            {error ? (
              /* 错误状态 - 显示初始数据 */
              <>
                {/* 新闻列表 - 响应式网格布局 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
                  {newsList.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>

                {/* 分页组件 - 响应式全宽 */}
                <div className="w-full">
                  <NewsPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    itemsPerPage={pageSize}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                    showPageSizeSelector={true}
                  />
                </div>
              </>
            ) : loading ? (
              /* 加载状态 */
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : newsList.length > 0 ? (
              <>
                {/* 新闻列表 - 响应式网格布局 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-10">
                  {newsList.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </div>

                {/* 分页组件 - 响应式全宽 */}
                <div className="w-full">
                  <NewsPagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={totalItems}
                    itemsPerPage={pageSize}
                    onPageChange={handlePageChange}
                    onPageSizeChange={handlePageSizeChange}
                    showPageSizeSelector={true}
                  />
                </div>
              </>
            ) : (
              /* 空状态 - 响应式布局 */
              <div className="bg-white rounded-xl border border-slate-200/60 p-6 sm:p-8 md:p-12 text-center">
                <div className="text-slate-300 mb-3 sm:mb-4">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                  </svg>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-slate-700 mb-2">暂无新闻</h3>
                <p className="text-slate-500 mb-4 sm:mb-6 text-xs sm:text-sm px-4 sm:px-0">
                  暂时没有新闻，请稍后再来查看
                </p>
              </div>
            )}
          </div>
        </Container>
      </div>
      
      {/* 底部组件 */}
      <Footer />
    </div>
  );
}