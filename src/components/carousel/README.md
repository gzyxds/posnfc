# VideoCarousel 组件使用指南

## 组件简介

`VideoCarousel` 是一个封装了 `HeaderCarousel` 的视频背景轮播组件，可以直接导入到首页或其他页面使用。该组件支持视频背景和文案按钮设计，提供了丰富的自定义选项。

## 导入方式

```tsx
import { VideoCarousel } from '@/components/carousel/VideoCarousel'
```

## 基本用法

### 在首页中使用默认配置

```tsx
// src/app/page.tsx
import { VideoCarousel } from '@/components/carousel/VideoCarousel'

export default function Home() {
  return (
    <main>
      {/* 其他内容 */}
      <VideoCarousel />
      {/* 其他内容 */}
    </main>
  )
}
```

### 自定义配置

```tsx
<VideoCarousel
  autoPlay={true}
  showProgress={true}
  height={{ base: 'h-[50vh]', md: 'h-[60vh]', lg: 'h-[70vh]' }}
  theme="dark"
  textModeButton={true}
  showOverlay={true}
  customSlides={yourCustomSlides} // 可选，自定义轮播数据
/>
```

## 属性说明

| 属性名         | 类型              | 默认值                                               | 说明                 |
| -------------- | ----------------- | ---------------------------------------------------- | -------------------- |
| autoPlay       | boolean           | false                                                | 是否自动播放         |
| showProgress   | boolean           | false                                                | 是否显示进度条       |
| height         | object            | { base: 'h-[56vh]', md: 'h-[62vh]', lg: 'h-[66vh]' } | 响应式高度配置       |
| theme          | 'light' \| 'dark' | 'light'                                              | 主题颜色             |
| textModeButton | boolean           | true                                                 | 是否使用文本模式按钮 |
| showOverlay    | boolean           | false                                                | 是否显示遮罩层       |
| customSlides   | SlideData[]       | 内置默认数据                                         | 自定义轮播数据       |

## 自定义轮播数据示例

```tsx
const customSlides: SlideData[] = [
  {
    id: 1,
    title: '自定义标题',
    subtitle: '自定义副标题',
    description: '自定义描述文本',
    backgroundType: 'video',
    backgroundVideo: {
      src: '视频URL',
      autoPlay: true,
      muted: true,
      loop: true,
      controls: false,
      preload: 'metadata',
    },
    textPosition: 'left',
    buttonText: '按钮文本',
    buttonLink: '#',
  },
  // 更多轮播项...
]
```
