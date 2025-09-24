'use client';

import React from 'react';

/**
 * 新闻封面图片组件
 * 
 * 功能说明：
 * - 展示新闻封面图片
 * - 处理图片加载失败的情况
 * - 支持悬停放大效果
 */
interface NewsCoverImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function NewsCoverImage({ src, alt, className = '' }: NewsCoverImageProps) {
  /**
   * 处理图片加载失败
   * @param e - 图片加载错误事件
   */
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    // 图片加载失败时隐藏
    (e.target as HTMLImageElement).style.display = 'none';
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-full object-cover hover:scale-105 transition-transform duration-500 ${className}`}
      onError={handleImageError}
    />
  );
}