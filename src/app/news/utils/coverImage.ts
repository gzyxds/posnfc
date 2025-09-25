/**
 * 封面图片工具函数
 * 提供新闻封面图片的随机选择和生成功能
 */

/**
 * 获取随机封面图片路径
 * 从 /images/carousel/ 目录下的 news.webp 到 news5.webp 中随机选择
 * @returns 随机封面图片路径
 */
export function getRandomCoverImage(): string {
  // 可用的封面图片列表
  const coverImages = [
    '/images/carousel/news.webp',
    '/images/carousel/news1.webp',
    '/images/carousel/news2.webp',
    '/images/carousel/news3.webp',
    '/images/carousel/news4.webp',
    '/images/carousel/news5.webp'
  ]
  
  // 随机选择一个图片
  const randomIndex = Math.floor(Math.random() * coverImages.length)
  return coverImages[randomIndex]
}

/**
 * 获取指定索引的封面图片路径
 * @param index 图片索引（0-5）
 * @returns 封面图片路径
 */
export function getCoverImageByIndex(index: number): string {
  const coverImages = [
    '/images/carousel/news.webp',
    '/images/carousel/news1.webp',
    '/images/carousel/news2.webp',
    '/images/carousel/news3.webp',
    '/images/carousel/news4.webp',
    '/images/carousel/news5.webp'
  ]
  
  // 确保索引在有效范围内
  const safeIndex = Math.max(0, Math.min(index, coverImages.length - 1))
  return coverImages[safeIndex]
}

/**
 * 根据新闻ID获取封面图片（确保同一新闻始终使用相同图片）
 * @param newsId 新闻ID
 * @returns 封面图片路径
 */
export function getCoverImageByNewsId(newsId: string): string {
  // 将新闻ID转换为数字索引
  const hash = newsId.split('').reduce((acc, char) => {
    return acc + char.charCodeAt(0)
  }, 0)
  
  const index = hash % 6 // 6张可用图片
  return getCoverImageByIndex(index)
}