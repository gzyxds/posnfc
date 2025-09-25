/**
 * 新闻数据服务 - 基于文件系统路由的实现
 * 从本地 Markdown 文件直接读取新闻内容，替代 news-data.json 方式
 */

// 动态导入Node.js模块，确保只在服务端使用
let fs: any, path: any, matter: any

if (typeof window === 'undefined') {
  // 只在服务端导入这些模块
  fs = require('fs')
  path = require('path')
  matter = require('gray-matter')
}
import { NewsItem, NewsCategory, NewsListOptions, NewsListResponse, SortBy, SortOrder } from '../types'
import { getRandomCoverImage, getCoverImageByNewsId } from '../utils/coverImage'

/**
 * 新闻服务类
 * 负责处理所有新闻相关的数据操作，基于文件系统
 */
class NewsService {
  private newsCache: NewsItem[] = []
  private cacheInitialized = false

  /**
   * 获取新闻内容目录路径
   */
  private getNewsDirectory(): string {
    // 确保只在服务端环境下使用path模块
    if (typeof window === 'undefined' && path) {
      return path.join(process.cwd(), 'src/app/news/news')
    }
    // 在客户端环境下返回空字符串，避免错误
    return ''
  }

  /**
   * 初始化新闻缓存
   * 从文件系统读取所有新闻文件
   */
  private async initializeCache(): Promise<void> {
    if (this.cacheInitialized) {
      return
    }

    // 确保只在服务端环境下访问文件系统
    if (typeof window !== 'undefined') {
      console.warn('新闻服务只能在服务端运行，客户端将使用空数据')
      // 在客户端也尝试加载数据，但使用不同的方式
      try {
        // 尝试从window对象获取预加载的数据
        if ((window as any).__INITIAL_NEWS_DATA__) {
          this.newsCache = (window as any).__INITIAL_NEWS_DATA__
          console.log('客户端从预加载数据获取新闻:', this.newsCache.length)
        } else {
          this.newsCache = []
        }
      } catch (error) {
        console.warn('客户端加载预加载数据失败:', error)
        this.newsCache = []
      }
      this.cacheInitialized = true
      return
    }

    try {
      const newsDirectory = this.getNewsDirectory()
      if (!newsDirectory) {
        throw new Error('无法获取新闻目录路径')
      }
      
      const filenames = fs.readdirSync(newsDirectory)
      
      console.log(`📁 发现 ${filenames.length} 个新闻文件:`, filenames)

      const newsItems: NewsItem[] = []
      
      for (const filename of filenames) {
        if (filename.endsWith('.md')) {
          try {
            const newsItem = await this.getNewsFromFile(filename)
            if (newsItem) {
              newsItems.push(newsItem)
            }
          } catch (error) {
            console.warn(`Failed to load news file ${filename}:`, error)
          }
        }
      }

      this.newsCache = newsItems
      this.cacheInitialized = true

      console.log(`📰 新闻缓存初始化完成，共加载 ${this.newsCache.length} 篇新闻`)
    } catch (error) {
      console.error('Failed to initialize news cache:', error)
      this.newsCache = []
      this.cacheInitialized = true
    }
  }

  /**
   * 从文件获取新闻数据
   * @param filename 文件名
   * @returns 新闻项或null
   */
  private async getNewsFromFile(filename: string): Promise<NewsItem | null> {
    // 确保只在服务端环境下访问文件系统
    if (typeof window !== 'undefined') {
      console.warn('getNewsFromFile 只能在服务端运行')
      return null
    }

    try {
      const newsDirectory = this.getNewsDirectory()
      if (!newsDirectory) {
        throw new Error('无法获取新闻目录路径')
      }
      
      const filePath = path.join(newsDirectory, filename)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const { data, content } = matter(fileContent)

      // 解析发布日期
      const publishDate = data.publishDate ? new Date(data.publishDate) : new Date()
      const updateDate = data.updateDate ? new Date(data.updateDate) : publishDate

      // 生成新闻ID（从文件名中提取）
      const id = filename.replace('.md', '')

      return {
        id,
        title: data.title || `新闻 ${id}`,
        summary: data.summary || '',
        content: content || '',
        category: data.category || 'technology' as NewsCategory,
        tags: data.tags || [],
        author: {
          id: data.author?.id || `author-${Date.now()}`,
          name: data.author?.name || '管理员',
          title: data.author?.title || '',
          avatar: data.author?.avatar || '',
        },
        publishDate,
        updateDate,
        sticky: data.isSticky || false,
        featured: data.isHot || false,
        coverImage: data.coverImage || getCoverImageByNewsId(id),
        viewCount: data.views || 0,
        readingTime: data.readTime || 5,
      }
    } catch (error) {
      console.error(`Error processing news file ${filename}:`, error)
      return null
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

    // 分类筛选
    if (category) {
      filteredNews = filteredNews.filter(news => news.category === category)
    }

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
    return news || null
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
      news.tags.forEach(tag => {
        tags.add(tag)
      })
    })

    return Array.from(tags)
  }

  /**
   * 获取分类统计信息
   * @returns 各分类的新闻数量统计
   */
  async getCategoryStats(): Promise<Record<NewsCategory, number>> {
    await this.initializeCache()

    const stats: Record<NewsCategory, number> = {} as Record<NewsCategory, number>
    
    // 初始化所有分类为0
    Object.values(NewsCategory).forEach(category => {
      stats[category] = 0
    })
    
    // 统计各分类的新闻数量
    this.newsCache.forEach(news => {
      if (news.category in stats) {
        stats[news.category]++
      }
    })

    return stats
  }

  /**
   * 获取标签统计信息
   * @returns 各标签的使用次数统计
   */
  async getTagStats(): Promise<Record<string, number>> {
    await this.initializeCache()

    const stats: Record<string, number> = {}
    
    // 统计各标签的使用次数
    this.newsCache.forEach(news => {
      news.tags.forEach(tag => {
        if (tag in stats) {
          stats[tag]++
        } else {
          stats[tag] = 1
        }
      })
    })

    return stats
  }

  /**
   * 获取相关新闻
   * @param currentNewsId 当前新闻ID
   * @param limit 返回数量限制
   * @returns 相关新闻列表
   */
  async getRelatedNews(currentNewsId: string, limit: number = 3): Promise<NewsItem[]> {
    await this.initializeCache()

    const currentNews = this.newsCache.find(item => item.id === currentNewsId)
    if (!currentNews) {
      return []
    }

    // 根据分类和标签计算相关度
    const relatedNews = this.newsCache
      .filter(news => news.id !== currentNewsId)
      .map(news => {
        let score = 0
        
        // 同分类加分
        if (news.category === currentNews.category) {
          score += 10
        }
        
        // 相同标签加分
        const commonTags = news.tags.filter(tag => currentNews.tags.includes(tag))
        score += commonTags.length * 5
        
        return { news, score }
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, limit)
      .map(item => item.news)

    return relatedNews
  }

  /**
   * 获取热门新闻
   * @param limit 返回数量限制
   * @returns 热门新闻列表
   */
  async getHotNews(limit: number = 5): Promise<NewsItem[]> {
    await this.initializeCache()

    return this.newsCache
      .filter(news => news.featured)
      .sort((a, b) => b.viewCount - a.viewCount)
      .slice(0, limit)
  }

  /**
   * 获取最新新闻
   * @param limit 返回数量限制
   * @returns 最新新闻列表
   */
  async getLatestNews(limit: number = 5): Promise<NewsItem[]> {
    await this.initializeCache()

    return this.newsCache
      .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime())
      .slice(0, limit)
  }

  /**
   * 搜索新闻
   * @param query 搜索关键词
   * @param options 搜索选项
   * @returns 搜索结果
   */
  async searchNews(query: string, options: NewsListOptions = {}): Promise<NewsListResponse> {
    return this.getNews({
      ...options,
      search: query
    })
  }
}

// 创建单例实例
export const newsService = new NewsService()