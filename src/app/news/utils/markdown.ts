/**
 * Markdown 文件处理工具
 * 用于读取和解析本地 Markdown 新闻文件
 */

import { NewsItem, NewsCategory, NewsAuthor } from '../types';

// Markdown 文件的前置元数据接口
export interface MarkdownFrontMatter {
  title: string;
  summary: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishDate: string;
  updateDate?: string;
  coverImage?: string;
  readTime?: number;
  readingTime?: number;
  isSticky?: boolean;
  isHot?: boolean;
  views?: number;
}

/**
 * 简单的 YAML 解析器，专门用于解析 frontmatter
 * @param yamlText YAML 文本
 * @returns 解析后的对象
 */
function parseSimpleYaml(yamlText: string): any {
  const result: any = {};
  const lines = yamlText.split('\n');
  let currentKey = '';
  let currentObject: any = null;
  let inArray = false;
  let arrayKey = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line || line.startsWith('#')) continue;

    // 处理对象开始
    if (line.endsWith(':') && !line.includes(' ')) {
      currentKey = line.slice(0, -1);
      currentObject = {};
      result[currentKey] = currentObject;
      continue;
    }

    // 处理数组
    if (line.startsWith('- ')) {
      if (!inArray) {
        // 查找数组的键名（上一行应该是键名）
        for (let j = i - 1; j >= 0; j--) {
          const prevLine = lines[j].trim();
          if (prevLine.endsWith(':') && !prevLine.includes(' ')) {
            arrayKey = prevLine.slice(0, -1);
            result[arrayKey] = [];
            inArray = true;
            break;
          }
        }
      }
      if (inArray && arrayKey) {
        const value = line.slice(2).trim().replace(/^["']|["']$/g, '');
        result[arrayKey].push(value);
      }
      continue;
    } else {
      inArray = false;
      arrayKey = '';
    }

    // 处理对象属性
    if (currentObject && line.includes(':')) {
      const colonIndex = line.indexOf(':');
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '');
      currentObject[key] = value;
      continue;
    }

    // 处理普通键值对
    if (line.includes(':')) {
      const colonIndex = line.indexOf(':');
      const key = line.substring(0, colonIndex).trim();
      let value = line.substring(colonIndex + 1).trim();
      
      // 处理 JSON 数组格式 (如: tags: ["tag1", "tag2"])
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          result[key] = JSON.parse(value);
        } catch (error) {
          console.warn(`Failed to parse JSON array for key ${key}:`, error);
          result[key] = [];
        }
        continue;
      }
      
      // 移除引号
      value = value.replace(/^["']|["']$/g, '');
      
      // 转换布尔值和数字
      if (value === 'true') {
        result[key] = true;
      } else if (value === 'false') {
        result[key] = false;
      } else if (!isNaN(Number(value)) && value !== '') {
        result[key] = Number(value);
      } else {
        result[key] = value;
      }
    }
  }

  return result;
}

/**
 * 解析 Markdown 文件的前置元数据（Front Matter）
 * @param content Markdown 文件内容
 * @returns 解析后的元数据和正文内容
 */
export function parseMarkdownFrontMatter(content: string): {
  frontMatter: Partial<MarkdownFrontMatter>;
  content: string;
} {
  const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/;
  const match = content.match(frontMatterRegex);

  if (!match) {
    return {
      frontMatter: {},
      content: content
    };
  }

  const frontMatterText = match[1];
  const markdownContent = match[2];
  
  try {
    const frontMatter = parseSimpleYaml(frontMatterText) as Partial<MarkdownFrontMatter>;
    return {
      frontMatter,
      content: markdownContent
    };
  } catch (error) {
    console.error('Failed to parse frontmatter:', error);
    return {
      frontMatter: {},
      content: markdownContent
    };
  }
}

/**
 * 获取所有可用的图片文件
 * @returns 图片路径数组
 */
function getAvailablePictures(): string[] {
  // 返回相对路径的图片文件，使用public/images/carousel目录下的图片
  return [
    '/images/carousel/HeaderCarousel.jpg',
    '/images/carousel/HeaderCarousel1.jpg',
    '/images/carousel/HeaderCarousel2.jpg',
    '/images/carousel/HeaderCarousel3.jpg',
    '/images/carousel/HeaderCarousel4.jpg',
    '/images/carousel/new-1.png',
    '/images/carousel/new-2.png',
    '/images/carousel/new-3.png',
    '/images/carousel/new-4.png',
    '/images/carousel/new-5.png',
    '/images/carousel/new-6.png',
    '/images/carousel/7.png',
    '/images/carousel/Header.png',
    '/images/carousel/Headernew.png',
    '/images/carousel/new.png',
    '/images/carousel/zyfpay.jpg',
    '/images/carousel/zyfpay1.jpg'
  ];
}

/**
 * 随机选择一张图片
 * 从 src/app/news/picture 目录中随机选择图片作为新闻封面
 * @returns 图片路径
 */
function getRandomPicture(): string {
  const pictures = getAvailablePictures();
  const randomIndex = Math.floor(Math.random() * pictures.length);
  console.log(`🎲 随机选择图片: ${pictures[randomIndex]} (索引: ${randomIndex})`);
  return pictures[randomIndex];
}

/**
 * 将分类字符串转换为 NewsCategory 枚举
 * @param category 分类字符串
 * @returns NewsCategory 枚举值
 */
function mapCategory(category: string): NewsCategory {
  const categoryMap: Record<string, NewsCategory> = {
    'technology': NewsCategory.TECH,
    'tech': NewsCategory.TECH,
    'business': NewsCategory.COMPANY,
    'company': NewsCategory.COMPANY,
    'product': NewsCategory.PRODUCT,
    'industry': NewsCategory.INDUSTRY,
    'ai': NewsCategory.AI
  };
  
  return categoryMap[category.toLowerCase()] || NewsCategory.TECH;
}

/**
 * 将 Markdown 文件转换为 NewsItem 对象
 * @param filename 文件名（用作ID）
 * @param content Markdown 文件内容
 * @returns NewsItem 对象
 */
export function markdownToNewsItem(filename: string, content: string): NewsItem {
  const { frontMatter, content: markdownContent } = parseMarkdownFrontMatter(content);
  
  // 从文件名提取ID（去掉.md扩展名）
  const id = filename.replace(/\.md$/, '');
  
  // 创建作者对象
  // 使用网站logo作为默认头像
  const author: NewsAuthor = {
    id: frontMatter.author?.name?.toLowerCase().replace(/\s+/g, '-') || 'unknown-author',
    name: frontMatter.author?.name || '未知作者',
    avatar: frontMatter.author?.avatar || '/images/scenarios/logo.svg',
    title: frontMatter.author?.bio || ''
  };
  
  // 如果没有指定封面图片，则随机选择一张
  let coverImage = frontMatter.coverImage;
  if (!coverImage) {
    coverImage = getRandomPicture();
    console.log(`📷 新闻 "${frontMatter.title}" 使用随机封面图片: ${coverImage}`);
  }
  
  // 如果没有指定阅读时间，根据内容长度估算
  const estimatedReadTime = frontMatter.readTime || frontMatter.readingTime || estimateReadTime(markdownContent);
  
  // 随机生成浏览量（如果没有指定）
  const viewCount = frontMatter.views || Math.floor(Math.random() * 1000) + 100;
  
  return {
    id,
    title: frontMatter.title || '无标题',
    summary: frontMatter.summary || '',
    content: markdownContent,
    category: mapCategory(frontMatter.category || 'technology'),
    tags: frontMatter.tags || [],
    author,
    publishDate: new Date(frontMatter.publishDate || new Date()),
    updateDate: frontMatter.updateDate ? new Date(frontMatter.updateDate) : undefined,
    coverImage: coverImage,
    readingTime: estimatedReadTime,
    viewCount,
    featured: frontMatter.isHot || false,
    sticky: frontMatter.isSticky || false
  };
}

/**
 * 估算 Markdown 内容的阅读时间
 * @param content Markdown 内容
 * @param wordsPerMinute 每分钟阅读字数（默认200字）
 * @returns 预计阅读时间（分钟）
 */
export function estimateReadTime(content: string, wordsPerMinute: number = 200): number {
  // 移除 Markdown 语法标记
  const plainText = content
    .replace(/#{1,6}\s+/g, '') // 移除标题标记
    .replace(/\*\*(.*?)\*\*/g, '$1') // 移除粗体标记
    .replace(/\*(.*?)\*/g, '$1') // 移除斜体标记
    .replace(/`(.*?)`/g, '$1') // 移除行内代码标记
    .replace(/```[\s\S]*?```/g, '') // 移除代码块
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 移除链接，保留文本
    .replace(/!\[([^\]]*)\]\([^)]+\)/g, '') // 移除图片
    .replace(/\n+/g, ' ') // 将换行符替换为空格
    .trim();
  
  // 计算字数（中文按字符计算，英文按单词计算）
  const chineseChars = (plainText.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishWords = plainText.replace(/[\u4e00-\u9fa5]/g, '').split(/\s+/).filter(word => word.length > 0).length;
  
  const totalWords = chineseChars + englishWords;
  return Math.max(1, Math.ceil(totalWords / wordsPerMinute));
}

/**
 * 生成 Markdown 文件模板
 * @param title 文章标题
 * @param category 文章分类
 * @returns Markdown 文件模板内容
 */
export function generateMarkdownTemplate(title: string, category: NewsCategory): string {
  const currentDate = new Date().toISOString().split('T')[0];
  
  return `---
title: "${title}"
summary: "请在这里填写文章摘要"
category: ${category}
tags: ["标签1", "标签2"]
author: "作者姓名"
authorTitle: "作者职位"
publishDate: "${currentDate}"
coverImage: "/images/news/cover-image.jpg"
readTime: 5
isHot: false
isTop: false
---

# ${title}

请在这里编写文章内容...

## 小标题

文章正文内容。

### 更小的标题

更多内容...

## 总结

文章总结内容。
`;
}