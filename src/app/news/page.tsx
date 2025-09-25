import { Metadata } from 'next'
import NewsListClient from './NewsListClient'
import { newsService } from './services/newsServiceFilesystem'
import { NewsCategory } from './types'

/**
 * 新闻列表页面 - 服务端组件
 * 提供初始数据给客户端组件进行交互
 */
export const metadata: Metadata = {
  title: '新闻资讯 - 最新技术动态与行业洞察',
  description: '获取最新的技术资讯、行业动态和深度分析文章，涵盖人工智能、Web开发、创业投资等多个领域。',
  keywords: ['新闻资讯', '技术动态', '行业分析', '人工智能', 'Web开发', '创业投资'],
  openGraph: {
    title: '新闻资讯 - 最新技术动态与行业洞察',
    description: '获取最新的技术资讯、行业动态和深度分析文章，涵盖人工智能、Web开发、创业投资等多个领域。',
    type: 'website',
  },
}

/**
 * 新闻列表页面默认导出组件
 * 从服务端获取初始新闻数据并传递给客户端组件
 * 注意：由于项目使用静态导出，不支持动态路由参数
 */
export default async function NewsPage() {
  try {
    // 静态导出模式下，只提供默认的初始数据
    console.log('服务端获取初始数据 - 静态模式')

    // 获取初始新闻数据 - 第一页显示所有数据以确保客户端获得完整数据
    const response = await newsService.getNews({
      page: 1,
      pageSize: 20, // 设置为20确保能获取所有13条数据
      sortBy: 'publishDate',
      sortOrder: 'desc'
    })

    console.log('服务端获取初始数据 - 结果:', {
      itemsCount: response.items.length,
      total: response.total,
      totalPages: response.totalPages
    })

    return (
      <NewsListClient 
        initialNewsList={response.items}
        initialTotalPages={response.totalPages}
        initialTotalItems={response.total}
      />
    )
  } catch (error) {
    console.error('Failed to load news data:', error)
    
    // 如果数据加载失败，返回空数据状态
    return (
      <NewsListClient 
        initialNewsList={[]}
        initialTotalPages={0}
        initialTotalItems={0}
      />
    )
  }
}