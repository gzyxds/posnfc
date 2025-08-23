# CloudCVM.com 项目规则文档

> **版本**: 5.0.0  
> **更新日期**: 2025-08-23  
> **文档状态**: Active

## 🎯 项目概述

CloudCVM.com 是一个基于 Next.js 15 + React 19 + TypeScript 的现代云服务商官网项目，主要提供云服务器、CDN、SSL证书等云计算产品服务，并集成了AI聊天与绘画功能。

---

## 📁 项目结构规范

### 目录组织原则
```
src/
├── app/                    # Next.js 应用路由 (App Router)
│   ├── (auth)/            # 认证相关路由组
│   ├── [product]/         # 产品页面路由
│   ├── layout.tsx         # 根布局组件
│   └── page.tsx           # 首页组件
├── components/            # 可复用组件库
│   ├── ai/               # AI产品专用组件
│   ├── common/           # 通用业务组件
│   ├── carousel/         # 轮播组件模块
│   ├── css/             # CSS模块文件
│   └── [ComponentName].tsx # 页面级组件
└── styles/              # 全局样式文件
    └── tailwind.css     # Tailwind CSS入口文件
```

### 文件命名规范
- **组件文件**: 使用 `PascalCase`，如 `HeaderCarousel.tsx`
- **页面文件**: 统一使用 `page.tsx` 和 `layout.tsx`
- **样式文件**: CSS模块使用 `ComponentName.module.css`
- **配置文件**: 使用 `kebab-case`，如 `next.config.js`

---

## 🏗️ 技术栈规范

### 核心依赖
- **框架**: Next.js 15 (App Router)
- **UI库**: React 19
- **类型检查**: TypeScript 5.8+
- **样式系统**: Tailwind CSS 4.1+
- **动画**: Framer Motion 12+
- **图标**: Heroicons 2+ / Lucide React
- **3D渲染**: Three.js 0.179+

### 开发工具
- **代码规范**: ESLint + Prettier
- **包管理器**: npm (推荐) / yarn
- **构建工具**: Next.js 内置 (基于 Turbopack)

---

## 🎨 样式系统规范

### Tailwind CSS 配置
```css
/* 主题自定义 - src/styles/tailwind.css */
@theme {
  /* 品牌主色 */
  --color-indigo-500: #0055ff;
  --color-indigo-600: #0055ff;
  
  /* 字体系统 */
  --font-sans: var(--font-inter);
  --font-display: var(--font-lexend);
  
  /* 容器尺寸 */
  --container-2xl: 80rem;
}
```

### 样式编写原则
1. **优先使用 Tailwind 实用类**
   ```tsx
   // ✅ 推荐
   <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
   
   // ❌ 避免
   <button style={{backgroundColor: '#3b82f6', color: 'white'}}>
   ```

2. **组件级样式隔离**
   ```tsx
   // 使用 CSS 模块
   import styles from './Component.module.css'
   <div className={styles.container}>
   ```

3. **响应式设计 (Mobile-First)**
   ```tsx
   <div className="text-sm md:text-base lg:text-lg">
   ```

### 暗黑模式实现
```tsx
// 使用 dark: 变体前缀
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
```

---

## ⚛️ 组件开发规范

### 组件分类与职责
```
components/
├── 页面级组件/          # 完整页面功能模块 (Hero, Header, Footer)
├── ai/                 # AI产品专用组件
├── common/             # 通用业务组件 (ProductTraits, Customer)
├── carousel/           # 轮播相关组件
└── 基础组件/           # 原子级UI组件 (Button, Container)
```

### 组件编写规范
1. **TypeScript 接口定义**
   ```tsx
   interface ComponentProps {
     title: string
     subtitle?: string
     className?: string
     children?: React.ReactNode
   }
   
   export default function Component({ title, subtitle, className }: ComponentProps) {
     return <div className={clsx('base-styles', className)}>{title}</div>
   }
   ```

2. **导入顺序规范**
   ```tsx
   // 1. React 和 Next.js 核心
   import React from 'react'
   import Link from 'next/link'
   
   // 2. 第三方库
   import { motion } from 'framer-motion'
   import clsx from 'clsx'
   
   // 3. 内部组件 (按功能分组)
   // === 解决方案与产品展示 ===
   import { Solution } from '@/components/Solution'
   import ProductTraits from '@/components/common/ProductTraits'
   
   // === 客户与信任建立 ===
   import Customer from '@/components/common/Customer'
   
   // 4. 类型定义
   import type { ComponentProps } from './types'
   ```

3. **Props 设计原则**
   - 必需属性放在前面
   - 可选属性使用 `?` 标记
   - 提供合理的默认值
   - 支持 `className` 扩展样式

### 响应式组件设计
```tsx
// 支持响应式高度配置
interface ResponsiveHeight {
  base?: string
  sm?: string
  md?: string
  lg?: string
  xl?: string
  '2xl'?: string
}

interface CarouselProps {
  height?: ResponsiveHeight
  theme?: 'light' | 'dark'
}

// 默认配置
const defaultHeight: ResponsiveHeight = {
  base: 'h-[70vh]',
  md: 'h-[80vh]',
  lg: 'h-[90vh]'
}
```

---

## 📄 页面开发规范

### 页面结构模板
```tsx
// src/app/[product]/page.tsx
import type { Metadata } from 'next'

// SEO 元数据
export const metadata: Metadata = {
  title: '产品名称 - 核心功能 - CloudCVM',
  description: '200字以内的产品描述，突出价值和优势',
  keywords: ['关键词1', '关键词2', '关键词3'],
}

// 页面数据结构
const pageData = {
  hero: {
    title: "产品标题",
    subtitle: "产品副标题",
    // ...
  },
  // ...
}

export default function ProductPage() {
  return (
    <main>
      {/* 页面组件组合 */}
    </main>
  )
}
```

### 页面开发流程
1. **创建页面目录**: 在 `src/app` 下创建产品路径
2. **定义数据结构**: 根据产品特性定义 TypeScript 接口
3. **配置 SEO 元数据**: 设置标题、描述和关键词
4. **导入公共组件**: 按需导入 ProductTraits、Solution 等组件
5. **实现页面逻辑**: 组合组件构建页面主体
6. **样式定制**: 通过 className 进行局部调整
7. **SEO 优化**: 确保关键词覆盖核心搜索需求

---

## 🔧 开发工具配置

### TypeScript 配置
```json
// tsconfig.json - 关键配置
{
  "compilerOptions": {
    "target": "es6",
    "strict": true,
    "moduleResolution": "bundler",
    "paths": {
      "@/*": ["./src/*"]  // 路径别名
    }
  }
}
```

### ESLint 配置
```json
// .eslintrc.json
{
  "extends": "next/core-web-vitals"
}
```

### Prettier 配置
```js
// prettier.config.js
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],
  // 自动排序 Tailwind 类名
}
```

---

## 🚀 构建与部署规范

### Next.js 配置
```js
// next.config.js
const nextConfig = {
  output: 'export',        // 静态导出
  trailingSlash: true,     // 兼容性配置
  images: {
    unoptimized: true,     // 禁用图片优化
  },
}
```

### 脚本命令
```json
// package.json scripts
{
  "dev": "next dev",        // 开发服务器
  "build": "next build",    // 生产构建
  "start": "next start",    // 生产服务器
  "lint": "next lint"       // 代码检查
}
```

### 部署流程
1. 运行 `npm run build` 生成静态文件到 `out/` 目录
2. 将 `out/` 目录内容部署到静态托管服务
3. 确保服务器配置支持 SPA 路由

---

## 🎯 AI产品模块规范

### AI组件架构
```
components/ai/
├── AIProductsSection.tsx    # AI产品主容器
├── Hero.tsx                 # AI产品首屏
├── ProductsSection.tsx      # 产品展示区域
├── HotProducts.tsx          # 热门产品展示
├── ProductFeaturesSection.tsx # 核心技术特性
├── ProductTerminalsSection.tsx # 多终端支持
├── FAQSection.tsx           # 常见问题
└── AIscene.tsx             # AI场景展示
```

### AI组件使用规范
- AI相关组件应放在 `components/ai/` 目录
- 使用统一的数据接口规范
- 支持主题切换 (light/dark)
- 保持与主站设计系统一致性

---

## 📋 代码质量规范

### 命名约定
- **组件**: PascalCase (`HeaderCarousel`)
- **函数**: camelCase (`handleSubmit`)
- **常量**: UPPER_SNAKE_CASE (`API_BASE_URL`)
- **文件**: PascalCase for components, kebab-case for configs

### 注释规范
```tsx
/**
 * 产品特性展示组件
 * @param title - 特性标题
 * @param features - 特性列表
 * @param className - 额外样式类名
 */
interface ProductFeaturesProps {
  title: string
  features: Feature[]
  className?: string
}
```

### 性能优化
1. 使用 `React.memo` 包装纯组件
2. 合理使用 `useMemo` 和 `useCallback`
3. 图片使用 Next.js Image 组件 (开发环境)
4. 代码分割使用动态导入

---

## 🔒 安全与最佳实践

### 安全规范
1. **XSS 防护**: 避免 `dangerouslySetInnerHTML`
2. **HTTPS**: 生产环境强制 HTTPS
3. **依赖安全**: 定期更新依赖包

### 最佳实践
1. **组件复用**: 优先使用已有组件
2. **状态管理**: 合理使用 React 内置 hooks
3. **错误处理**: 实现 Error Boundary
4. **加载状态**: 提供良好的 loading 体验

---

## 📊 测试规范

### 测试策略
- **单元测试**: 核心业务逻辑组件
- **集成测试**: 页面级功能测试
- **E2E测试**: 关键用户流程

### 测试工具推荐
- Jest + React Testing Library (单元测试)
- Playwright (E2E测试)
- Storybook (组件文档)

---

## 🔄 版本控制

### Git 工作流
1. **分支命名**: 
   - `feature/功能名称`
   - `bugfix/问题描述`
   - `hotfix/紧急修复`

2. **提交信息规范**:
   ```
   type(scope): description
   
   feat(auth): add login component
   fix(carousel): resolve mobile display issue
   docs(readme): update installation guide
   ```

---

## 📚 文档规范

### 必需文档
- [ ] README.md - 项目介绍和快速开始
- [ ] CHANGELOG.md - 版本变更记录
- [ ] project_rules.md - 项目规则 (本文档)
- [ ] API.md - API接口文档

### 组件文档
每个复杂组件应包含：
- 使用示例
- Props 接口说明
- 样式定制方法
- 注意事项

---

## 🎉 结语

本项目规则文档旨在确保团队协作的一致性和代码质量。所有开发者应遵循这些规范，如有疑问或改进建议，请通过项目 Issue 或团队沟通渠道反馈。

**最后更新**: 2025-08-23  
**维护者**: CloudCVM 开发团队