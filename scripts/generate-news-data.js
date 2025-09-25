/**
 * 新闻数据生成脚本
 * 用于在构建时预处理新闻数据，提高运行时性能
 * 
 * 功能说明：
 * 1. 扫描 src/app/news/news 目录下的所有 Markdown 文件
 * 2. 解析每个文件的 Front Matter 和内容
 * 3. 生成统一的新闻数据结构
 * 4. 输出到 public/news-data.json 供客户端使用
 */

const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

/**
 * 获取随机封面图片
 * @param {string} newsId - 新闻ID
 * @returns {string} 封面图片路径
 */
function getRandomCoverImage(newsId) {
  // 预定义的封面图片列表
  const coverImages = [
    '/images/screenshots/app-screenshot-1.png',
    '/images/screenshots/app-screenshot-2.png',
    '/images/screenshots/app-screenshot-3.png',
    '/images/screenshots/app-screenshot-4.png',
    '/images/screenshots/app-screenshot-5.png'
  ]
  
  // 基于新闻ID生成一致的随机索引
  const hash = newsId.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const index = hash % coverImages.length
  
  return coverImages[index]
}

/**
 * 估算阅读时间
 * @param {string} content - 文章内容
 * @returns {number} 预估阅读时间（分钟）
 */
function estimateReadTime(content) {
  // 中文字符数 + 英文单词数
  const chineseChars = (content.match(/[\u4e00-\u9fa5]/g) || []).length
  const englishWords = (content.match(/\b\w+\b/g) || []).length
  
  // 假设中文阅读速度：300字/分钟，英文阅读速度：200词/分钟
  const readTimeMinutes = Math.ceil((chineseChars / 300) + (englishWords / 200))
  
  return Math.max(1, readTimeMinutes) // 最少1分钟
}

/**
 * 解析单个新闻文件
 * @param {string} filename - 文件名
 * @param {string} newsDirectory - 新闻目录路径
 * @returns {Object|null} 新闻数据对象
 */
function parseNewsFile(filename, newsDirectory) {
  try {
    const filePath = path.join(newsDirectory, filename)
    const fileContent = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContent)

    // 生成新闻ID（从文件名中提取）
    const id = filename.replace('.md', '')

    // 解析日期
    const publishDate = data.publishDate ? new Date(data.publishDate) : new Date()
    const updateDate = data.updateDate ? new Date(data.updateDate) : publishDate

    // 构建新闻对象
    const newsItem = {
      id,
      title: data.title || `新闻 ${id}`,
      summary: data.summary || '',
      content: content || '',
      category: data.category || 'technology',
      tags: data.tags || [],
      author: {
        id: data.author?.id || `author-${Date.now()}`,
        name: data.author?.name || '管理员',
        title: data.author?.title || '',
        avatar: data.author?.avatar || '',
        bio: data.author?.bio || ''
      },
      publishDate: publishDate.toISOString(),
      updateDate: updateDate.toISOString(),
      coverImage: data.coverImage || getRandomCoverImage(id),
      readTime: estimateReadTime(content),
      viewCount: data.viewCount || 0,
      likeCount: data.likeCount || 0,
      isSticky: data.isSticky || false,
      isHot: data.isHot || false,
      status: data.status || 'published'
    }

    console.log(`✅ 解析成功: ${filename} -> ${newsItem.title}`)
    return newsItem
  } catch (error) {
    console.error(`❌ 解析失败: ${filename}`, error.message)
    return null
  }
}

/**
 * 主函数：生成新闻数据
 */
function generateNewsData() {
  console.log('🚀 开始生成新闻数据...')
  
  try {
    // 定义路径
    const newsDirectory = path.join(process.cwd(), 'src/app/news/news')
    const outputPath = path.join(process.cwd(), 'public/news-data.json')
    
    // 检查新闻目录是否存在
    if (!fs.existsSync(newsDirectory)) {
      console.log(`📁 新闻目录不存在，创建目录: ${newsDirectory}`)
      fs.mkdirSync(newsDirectory, { recursive: true })
      
      // 创建示例新闻文件
      const exampleNews = `---
title: "欢迎使用新闻系统"
summary: "这是一个示例新闻文章，展示了新闻系统的基本功能。"
category: "technology"
tags: ["示例", "新闻系统"]
author:
  name: "系统管理员"
  bio: "负责系统维护和内容管理"
publishDate: "${new Date().toISOString().split('T')[0]}"
isHot: true
---

# 欢迎使用新闻系统

这是一个基于 Next.js 和 Markdown 的静态新闻系统。

## 主要特性

- 📝 支持 Markdown 格式
- 🏷️ 分类和标签管理
- 🔍 搜索和筛选功能
- 📱 响应式设计
- ⚡ 静态生成，性能优异

## 如何添加新闻

1. 在 \`src/app/news/news\` 目录下创建 \`.md\` 文件
2. 添加 Front Matter 元数据
3. 编写 Markdown 内容
4. 运行构建命令

开始创建您的第一篇新闻文章吧！
`
      
      fs.writeFileSync(path.join(newsDirectory, '1.md'), exampleNews)
      console.log('📄 已创建示例新闻文件')
    }
    
    // 读取所有 Markdown 文件
    const files = fs.readdirSync(newsDirectory)
    const markdownFiles = files.filter(file => file.endsWith('.md'))
    
    console.log(`📁 发现 ${markdownFiles.length} 个新闻文件`)
    
    if (markdownFiles.length === 0) {
      console.log('⚠️  没有找到新闻文件，生成空数据')
      const emptyData = {
        news: [],
        categories: {},
        tags: {},
        total: 0,
        lastUpdated: new Date().toISOString()
      }
      
      // 确保 public 目录存在
      const publicDir = path.dirname(outputPath)
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true })
      }
      
      fs.writeFileSync(outputPath, JSON.stringify(emptyData, null, 2))
      console.log(`📄 已生成空新闻数据: ${outputPath}`)
      return
    }
    
    // 解析所有新闻文件
    const newsItems = []
    for (const filename of markdownFiles) {
      const newsItem = parseNewsFile(filename, newsDirectory)
      if (newsItem) {
        newsItems.push(newsItem)
      }
    }
    
    // 按发布日期排序（最新的在前）
    newsItems.sort((a, b) => new Date(b.publishDate) - new Date(a.publishDate))
    
    // 统计分类和标签
    const categories = {}
    const tags = {}
    
    newsItems.forEach(item => {
      // 统计分类
      categories[item.category] = (categories[item.category] || 0) + 1
      
      // 统计标签
      item.tags.forEach(tag => {
        tags[tag] = (tags[tag] || 0) + 1
      })
    })
    
    // 构建最终数据结构
    const newsData = {
      news: newsItems,
      categories,
      tags,
      total: newsItems.length,
      lastUpdated: new Date().toISOString()
    }
    
    // 确保 public 目录存在
    const publicDir = path.dirname(outputPath)
    if (!fs.existsSync(publicDir)) {
      fs.mkdirSync(publicDir, { recursive: true })
    }
    
    // 写入文件
    fs.writeFileSync(outputPath, JSON.stringify(newsData, null, 2))
    
    console.log('✅ 新闻数据生成完成！')
    console.log(`📊 统计信息:`)
    console.log(`   - 总文章数: ${newsItems.length}`)
    console.log(`   - 分类数: ${Object.keys(categories).length}`)
    console.log(`   - 标签数: ${Object.keys(tags).length}`)
    console.log(`📄 输出文件: ${outputPath}`)
    
  } catch (error) {
    console.error('❌ 生成新闻数据时发生错误:', error)
    process.exit(1)
  }
}

// 执行主函数
if (require.main === module) {
  generateNewsData()
}

module.exports = { generateNewsData }