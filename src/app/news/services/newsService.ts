/**
 * 新闻数据服务
 * 基于本地 Markdown 文件的静态新闻系统
 * 提供新闻列表、详情、筛选、搜索等功能
 */

import { NewsItem, NewsCategory, NewsListOptions, NewsListResponse, SortBy, SortOrder } from '../types';
import { markdownToNewsItem, parseMarkdownFrontMatter } from '../utils/markdown';
import newsData from '../data/news-data.json';

/**
 * 新闻服务类
 * 负责处理所有新闻相关的数据操作
 */
class NewsService {
  private newsCache: NewsItem[] = [];
  private cacheInitialized = false;

  /**
   * 初始化新闻缓存
   * 从预定义的新闻数据加载所有新闻
   */
  private async initializeCache(): Promise<void> {
    if (this.cacheInitialized) {
      return;
    }

    try {
      // 在静态导出环境中，我们需要使用预定义的新闻数据
      // 这里可以通过构建时脚本来生成新闻列表
      const newsFiles = await this.getAvailableNewsFiles();
      
      console.log(`📁 发现 ${newsFiles.length} 个新闻文件:`, newsFiles);

      const newsPromises = newsFiles.map(async (filename) => {
        try {
          const newsData = await this.getStaticNewsData(filename);
          return markdownToNewsItem(filename, newsData);
        } catch (error) {
          console.warn(`Failed to load news file ${filename}:`, error);
          return null;
        }
      });

      const newsItems = await Promise.all(newsPromises);
      this.newsCache = newsItems.filter((item): item is NewsItem => item !== null);
      this.cacheInitialized = true;

      console.log(`📰 新闻缓存初始化完成，共加载 ${this.newsCache.length} 篇新闻`);
    } catch (error) {
      console.error('Failed to initialize news cache:', error);
      this.newsCache = [];
      this.cacheInitialized = true;
    }
  }

  /**
   * 获取可用的新闻文件列表
   * 从生成的新闻数据文件中读取文件列表
   */
  private async getAvailableNewsFiles(): Promise<string[]> {
    return newsData.files;
  }

  /**
   * 获取静态新闻数据
   * 从生成的新闻数据文件中读取内容
   * @param filename 文件名
   * @returns Markdown 内容
   */
  private async getStaticNewsData(filename: string): Promise<string> {
    // 从生成的新闻数据中获取内容
    const content = (newsData.data as Record<string, string>)[filename];
    if (content) {
      return content;
    }
    
    // 如果没有找到对应文件，返回默认内容
    const staticNewsData: Record<string, string> = {
      '1.md': `---
title: "2024年人工智能发展趋势：从技术突破到产业应用"
summary: "深入分析2024年人工智能领域的最新发展趋势，包括大模型技术、多模态AI、边缘计算等关键技术的突破。"
category: "tech"
tags: ["人工智能", "技术趋势", "大模型"]
author:
  name: "张技术"
  bio: "AI技术专家"
publishDate: "2024-01-15"
isSticky: true
isHot: true
views: 1250
readTime: 8
---

# 2024年人工智能发展趋势

人工智能技术在2024年迎来了新的发展高峰，从基础技术的突破到产业应用的深化，AI正在重塑我们的工作和生活方式。`,
      
      '2.md': `---
title: "移动支付行业创新发展报告"
summary: "全面解析移动支付行业的最新发展动态，包括技术创新、市场格局变化和未来发展趋势。"
category: "industry"
tags: ["移动支付", "金融科技", "行业报告"]
author:
  name: "李分析师"
  bio: "金融科技分析师"
publishDate: "2024-01-10"
views: 890
readTime: 6
---

# 移动支付行业创新发展报告

移动支付作为数字经济的重要基础设施，正在经历新一轮的技术革新和市场变革。`,
      
      '3.md': `---
title: "智能POS终端产品升级公告"
summary: "我们的智能POS终端产品迎来重大升级，新增多项实用功能，提升用户体验。"
category: "product"
tags: ["产品升级", "POS终端", "功能更新"]
author:
  name: "产品团队"
  bio: "产品开发团队"
publishDate: "2024-01-08"
views: 567
readTime: 4
---

# 智能POS终端产品升级公告

为了更好地服务广大商户，我们对智能POS终端产品进行了全面升级。`
    };

    // 如果没有预定义数据，生成默认内容
    if (!staticNewsData[filename]) {
      const id = filename.replace('.md', '');
      return `---
title: "新闻标题 ${id}"
summary: "这是新闻 ${id} 的摘要内容"
category: "tech"
tags: ["标签1", "标签2"]
author:
  name: "作者"
  bio: "作者简介"
publishDate: "2024-01-01"
views: ${Math.floor(Math.random() * 1000) + 100}
readTime: ${Math.floor(Math.random() * 10) + 3}
---

# 新闻标题 ${id}

这是新闻 ${id} 的正文内容。`;
    }

    return staticNewsData[filename];
  }

  /**
   * 获取新闻列表
   * 支持分页、筛选、排序、搜索等功能
   * @param options 查询选项
   * @returns 新闻列表响应
   */
  async getNews(options: NewsListOptions = {}): Promise<NewsListResponse> {
    await this.initializeCache();

    const {
      page = 1,
      pageSize = 12,
      category,
      tags,
      search,
      sortBy = 'publishDate',
      sortOrder = 'desc'
    } = options;

    let filteredNews = [...this.newsCache];

    // 分类筛选
    if (category) {
      filteredNews = filteredNews.filter(news => news.category === category);
    }

    // 标签筛选
    if (tags && tags.length > 0) {
      filteredNews = filteredNews.filter(news => 
        tags.some(tag => news.tags.includes(tag))
      );
    }

    // 搜索筛选
    if (search) {
      const searchLower = search.toLowerCase();
      filteredNews = filteredNews.filter(news => 
        news.title.toLowerCase().includes(searchLower) ||
        news.summary.toLowerCase().includes(searchLower) ||
        news.content.toLowerCase().includes(searchLower) ||
        news.tags.some(tag => tag.toLowerCase().includes(searchLower))
      );
    }

    // 排序
    filteredNews.sort((a, b) => {
      let aValue: any, bValue: any;
      
      switch (sortBy) {
        case 'publishDate':
          aValue = a.publishDate.getTime();
          bValue = b.publishDate.getTime();
          break;
        case 'viewCount':
          aValue = a.viewCount;
          bValue = b.viewCount;
          break;
        case 'readingTime':
          aValue = a.readingTime;
          bValue = b.readingTime;
          break;
        default:
          aValue = a.publishDate.getTime();
          bValue = b.publishDate.getTime();
      }

      if (sortOrder === 'asc') {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });

    // 置顶文章排序
    filteredNews.sort((a, b) => {
      if (a.sticky && !b.sticky) return -1;
      if (!a.sticky && b.sticky) return 1;
      return 0;
    });

    // 分页
    const total = filteredNews.length;
    const totalPages = Math.ceil(total / pageSize);
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const items = filteredNews.slice(startIndex, endIndex);

    return {
      items,
      total,
      page,
      pageSize,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1
    };
  }

  /**
   * 根据ID获取单篇新闻
   * @param id 新闻ID
   * @returns 新闻详情或null
   */
  async getNewsById(id: string): Promise<NewsItem | null> {
    await this.initializeCache();
    
    const news = this.newsCache.find(item => item.id === id);
    
    if (news) {
      // 增加浏览量（在实际应用中应该持久化）
      news.viewCount += 1;
    }
    
    return news || null;
  }

  /**
   * 获取热门新闻
   * @param limit 返回数量限制
   * @returns 热门新闻列表
   */
  async getHotNews(limit: number = 6): Promise<NewsItem[]> {
    await this.initializeCache();
    
    return this.newsCache
      .filter(news => news.featured || news.viewCount > 500)
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, limit);
  }

  /**
   * 获取相关新闻
   * 基于分类和标签的相似度推荐
   * @param newsId 当前新闻ID
   * @param limit 返回数量限制
   * @returns 相关新闻列表
   */
  async getRelatedNews(newsId: string, limit: number = 6): Promise<NewsItem[]> {
    await this.initializeCache();
    
    const currentNews = this.newsCache.find(item => item.id === newsId);
    if (!currentNews) {
      return [];
    }

    // 计算相关度并排序
    const relatedNews = this.newsCache
      .filter(news => news.id !== newsId)
      .map(news => {
        let score = 0;
        
        // 同分类加分
        if (news.category === currentNews.category) {
          score += 3;
        }
        
        // 共同标签加分
        const commonTags = news.tags.filter(tag => currentNews.tags.includes(tag));
        score += commonTags.length * 2;
        
        // 发布时间相近加分
        const timeDiff = Math.abs(news.publishDate.getTime() - currentNews.publishDate.getTime());
        const daysDiff = timeDiff / (1000 * 60 * 60 * 24);
        if (daysDiff < 30) {
          score += 1;
        }
        
        return { news, score };
      })
      .filter(item => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.news);

    return relatedNews;
  }

  /**
   * 获取分类统计
   * @returns 各分类的新闻数量
   */
  async getCategoryStats(): Promise<Record<NewsCategory, number>> {
    await this.initializeCache();
    
    const stats = {} as Record<NewsCategory, number>;
    
    // 初始化所有分类为0
    Object.values(NewsCategory).forEach(category => {
      stats[category] = 0;
    });
    
    // 统计各分类数量
    this.newsCache.forEach(news => {
      stats[news.category] = (stats[news.category] || 0) + 1;
    });
    
    return stats;
  }

  /**
   * 获取标签统计
   * @returns 各标签的使用次数
   */
  async getTagStats(): Promise<Record<string, number>> {
    await this.initializeCache();
    
    const tagStats: Record<string, number> = {};
    
    this.newsCache.forEach(news => {
      news.tags.forEach(tag => {
        tagStats[tag] = (tagStats[tag] || 0) + 1;
      });
    });
    
    return tagStats;
  }

  /**
   * 搜索新闻
   * @param keyword 搜索关键词
   * @param options 搜索选项
   * @returns 搜索结果
   */
  async searchNews(keyword: string, options: Omit<NewsListOptions, 'search'> = {}): Promise<NewsListResponse> {
    return this.getNews({ ...options, search: keyword });
  }

  /**
   * 清除缓存
   * 用于开发环境热更新
   */
  clearCache(): void {
    this.newsCache = [];
    this.cacheInitialized = false;
    console.log('🗑️ 新闻缓存已清除');
  }
}

// 导出单例实例
export const newsService = new NewsService();
export default newsService;