/**
 * 客户端新闻数据服务
 * 在浏览器环境中使用，避免文件系统访问
 */

import { NewsItem, NewsCategory, NewsListOptions, NewsListResponse, SortBy, SortOrder } from '../types'
import { getRandomCoverImage, getCoverImageByNewsId } from '../utils/coverImage'

/**
 * 模拟新闻数据 - 客户端使用
 */
const mockNewsData: NewsItem[] = [
  {
    id: '1',
    title: 'POS机办理官网_银盛/拉卡拉/中付/乐刷一级代理_0.38%费率秒到',
    summary: '正规一清POS机办理入口：银盛/拉卡拉/中付/乐刷总部直签，电签版/智能版/手机POS/聚合码牌随心选，0.38%费率永不+3，激活一台返299元，支持信用卡、微信、支付宝、数字人民币，个人/商户均可在线申请，顺丰包邮当天发货！',
    content: 'POS机办理详细内容...',
    category: NewsCategory.FINANCE,
    tags: ['POS机办理', 'POS机官网', '银盛POS机', '拉卡拉POS机', '中付POS机', '乐刷POS机'],
    author: {
      id: 'author-1',
      name: '支付专家',
      title: 'POS机行业资深顾问',
      avatar: ''
    },
    publishDate: new Date('2024-01-15'),
    updateDate: new Date('2024-01-15'),
    coverImage: '', // 使用默认随机封面图片
    viewCount: 1250,
    readingTime: 8,
    sticky: true,
    featured: true
  },
  {
    id: '2',
    title: '2024年POS机代理加盟新政策：低门槛高回报，开启支付行业创业之路',
    summary: '2024年POS机代理加盟全新政策解读：低门槛加入支付行业，享受高分润、返现奖励、培训支持等多重优势。本文详细介绍代理加盟条件、收益模式、市场前景，助您把握支付行业发展机遇。',
    content: 'POS机代理加盟详细内容...',
    category: NewsCategory.BUSINESS,
    tags: ['POS机代理', '支付行业', '创业', '代理加盟', '分润模式', '返现奖励'],
    author: {
      id: 'author-2',
      name: '支付专家',
      title: 'POS机行业资深顾问',
      avatar: ''
    },
    publishDate: new Date('2024-01-14'),
    updateDate: new Date('2024-01-14'),
    coverImage: '', // 使用默认随机封面图片
    viewCount: 980,
    readingTime: 6,
    sticky: false,
    featured: true
  },
  {
    id: '3',
    title: '现代Web开发最佳实践：构建高性能、可维护的应用',
    summary: '探讨现代Web开发中的最佳实践，包括性能优化、代码组织、测试策略等方面，帮助开发者构建更好的Web应用。',
    content: 'Web开发最佳实践详细内容...',
    category: NewsCategory.TECHNOLOGY,
    tags: ['Web开发', '性能优化', '最佳实践', '前端'],
    author: {
      id: 'author-3',
      name: '李前端',
      title: '资深前端工程师',
      avatar: ''
    },
    publishDate: new Date('2024-01-12'),
    updateDate: new Date('2024-01-12'),
    coverImage: '', // 使用默认随机封面图片
    viewCount: 890,
    readingTime: 6,
    sticky: false,
    featured: true
  }
]

/**
 * 客户端新闻服务类
 * 在浏览器环境中提供新闻数据服务
 */
export class NewsServiceClient {
  private newsCache: NewsItem[] = []
  private cacheInitialized = false

  /**
   * 检查服务是否已经初始化
   * @returns 是否已初始化
   */
  isInitialized(): boolean {
    return this.cacheInitialized
  }

  /**
   * 使用外部数据初始化缓存
   * @param initialData 初始数据
   */
  async initializeWithData(initialData: { items: NewsItem[], total: number, totalPages: number }): Promise<void> {
    if (this.cacheInitialized) {
      console.log('客户端服务已经初始化，跳过重复初始化')
      return
    }
    
    if (initialData && initialData.items && initialData.items.length > 0) {
      this.newsCache = initialData.items.map(item => ({
        ...item,
        coverImage: item.coverImage || getCoverImageByNewsId(item.id)
      }))
      console.log('客户端使用服务端传递的初始数据:', this.newsCache.length)
    } else {
      // 如果没有提供有效的外部数据，使用模拟数据
      this.newsCache = [...mockNewsData]
      console.log('客户端使用模拟新闻数据:', this.newsCache.length)
    }
    this.cacheInitialized = true
  }

  /**
   * 初始化缓存
   */
  private async initializeCache(): Promise<void> {
    if (this.cacheInitialized) {
      return
    }

    try {
      // 尝试从window对象获取预加载的数据
      if (typeof window !== 'undefined' && (window as any).__INITIAL_NEWS_DATA__) {
        this.newsCache = (window as any).__INITIAL_NEWS_DATA__
        console.log('客户端从预加载数据获取新闻:', this.newsCache.length)
      } else {
        // 使用模拟数据，并为没有封面图片的新闻项分配随机封面图片
      this.newsCache = mockNewsData.map(item => ({
        ...item,
        coverImage: item.coverImage || getCoverImageByNewsId(item.id)
      }))
      console.log('客户端使用模拟新闻数据:', this.newsCache.length)
      }
      
      this.cacheInitialized = true
    } catch (error) {
      console.warn('客户端初始化缓存失败:', error)
      // 使用模拟数据，并为没有封面图片的新闻项分配随机封面图片
      this.newsCache = mockNewsData.map(item => ({
        ...item,
        coverImage: item.coverImage || getCoverImageByNewsId(item.id)
      }))
      this.cacheInitialized = true
    }
  }

  /**
   * 获取新闻列表
   * 支持分页、筛选、排序、搜索等功能
   * @param options 查询选项
   * @returns 新闻列表响应
   */
  async getNews(options: NewsListOptions = {}): Promise<NewsListResponse> {
    await this.initializeCache()

    const {
      page = 1,
      pageSize = 12,
      category,
      tags,
      search,
      sortBy = 'publishDate',
      sortOrder = 'desc'
    } = options

    let filteredNews = [...this.newsCache]

    console.log('客户端getNews - 初始数据:', filteredNews.length, '分类:', category)

    // 分类筛选
    if (category) {
      filteredNews = filteredNews.filter(news => {
        const match = news.category === category
        console.log(`分类筛选: ${news.title} -> ${news.category} vs ${category} = ${match}`)
        return match
      })
    }

    console.log('客户端getNews - 分类筛选后:', filteredNews.length)

    // 标签筛选
    if (tags && tags.length > 0) {
      filteredNews = filteredNews.filter(news => 
        tags.some(tag => news.tags.includes(tag))
      )
    }

    // 搜索筛选
    if (search) {
      const searchLower = search.toLowerCase()
      filteredNews = filteredNews.filter(news => 
        news.title.toLowerCase().includes(searchLower) ||
        news.summary.toLowerCase().includes(searchLower) ||
        news.content.toLowerCase().includes(searchLower) ||
        news.tags.some(tag => tag.toLowerCase().includes(searchLower))
      )
    }

    // 排序
    filteredNews.sort((a, b) => {
      let aValue: any, bValue: any
      
      switch (sortBy) {
        case 'publishDate':
          aValue = a.publishDate.getTime()
          bValue = b.publishDate.getTime()
          break
        case 'viewCount':
          aValue = a.viewCount
          bValue = b.viewCount
          break
        case 'readingTime':
          aValue = a.readingTime
          bValue = b.readingTime
          break
        default:
          aValue = a.publishDate.getTime()
          bValue = b.publishDate.getTime()
      }

      if (sortOrder === 'asc') {
        return aValue - bValue
      } else {
        return bValue - aValue
      }
    })

    // 置顶文章排序
    filteredNews.sort((a, b) => {
      if (a.sticky && !b.sticky) return -1
      if (!a.sticky && b.sticky) return 1
      return 0
    })

    // 分页
    const total = filteredNews.length
    const totalPages = Math.ceil(total / pageSize)
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize
    const items = filteredNews.slice(startIndex, endIndex)

    console.log('客户端getNews - 最终结果:', {
      total,
      totalPages,
      page,
      pageSize,
      itemsCount: items.length
    })

    return {
      items,
      total,
      page,
      pageSize,
      totalPages,
      hasNext: page < totalPages,
      hasPrev: page > 1
    }
  }

  /**
   * 根据ID获取新闻详情
   * @param id 新闻ID
   * @returns 新闻项或null
   */
  async getNewsById(id: string): Promise<NewsItem | null> {
    await this.initializeCache()

    const news = this.newsCache.find(item => item.id === id)
    if (!news) {
      return null
    }
    
    // 确保新闻有封面图片
    if (!news.coverImage) {
      return {
        ...news,
        coverImage: getCoverImageByNewsId(id)
      }
    }
    
    return news
  }

  /**
   * 获取所有新闻分类
   * @returns 分类列表
   */
  async getCategories(): Promise<NewsCategory[]> {
    await this.initializeCache()

    const categories = new Set<NewsCategory>()
    this.newsCache.forEach(news => {
      categories.add(news.category)
    })

    return Array.from(categories)
  }

  /**
   * 获取所有标签
   * @returns 标签列表
   */
  async getTags(): Promise<string[]> {
    await this.initializeCache()

    const tags = new Set<string>()
    this.newsCache.forEach(news => {
      news.tags.forEach(tag => tags.add(tag))
    })

    return Array.from(tags)
  }
}

// 创建客户端新闻服务实例
export const newsServiceClient = new NewsServiceClient()