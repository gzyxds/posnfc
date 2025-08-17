# Salient - TaxPal Business Template

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1-38B2AC?style=flat-square&logo=tailwind-css)

Salient is a premium [Tailwind Plus](https://tailwindcss.com/plus) site template designed for small business accounting and financial services. Built with modern web technologies including [Tailwind CSS](https://tailwindcss.com), [Next.js](https://nextjs.org), and [TypeScript](https://www.typescriptlang.org/), this template provides a complete solution for creating professional business websites.

## 🚀 项目概述

TaxPal 是一个专为小型企业设计的会计软件营销网站模板。该项目展示了现代 Web 开发的最佳实践，包含完整的用户认证系统、响应式设计和优雅的用户界面。

### 核心特性

- 🎨 **现代化设计**: 基于 Tailwind CSS 4.1 的响应式设计
- ⚡ **高性能**: Next.js 15 App Router 架构，支持 SSR 和 SSG
- 🔒 **用户认证**: 完整的登录和注册系统
- 📱 **移动优先**: 完全响应式设计，适配所有设备
- 🎯 **SEO 优化**: 内置 SEO 最佳实践和元数据管理
- 🛠️ **TypeScript**: 完整的类型安全支持
- 🎭 **组件化**: 可复用的 React 组件库

## 🛠️ 技术栈

### 核心框架
- **Next.js 15**: React 全栈框架，支持 App Router
- **React 19**: 最新版本的 React 库
- **TypeScript 5.8**: 静态类型检查

### 样式和 UI
- **Tailwind CSS 4.1**: 实用优先的 CSS 框架
- **@tailwindcss/forms**: 表单样式插件
- **@headlessui/react**: 无样式的可访问 UI 组件
- **clsx**: 条件类名工具

### 开发工具
- **ESLint**: 代码质量检查
- **Prettier**: 代码格式化
- **Sharp**: 图像优化

### 字体
- **Inter**: 主要文本字体
- **Lexend**: 显示字体

## 📁 项目结构

```
salient-ts/
├── src/
│   ├── app/                    # Next.js App Router 页面
│   │   ├── (auth)/             # 认证相关页面组
│   │   │   ├── login/          # 登录页面
│   │   │   └── register/       # 注册页面
│   │   ├── layout.tsx          # 根布局组件
│   │   ├── page.tsx            # 首页
│   │   ├── not-found.tsx       # 404 页面
│   │   └── favicon.ico         # 网站图标
│   ├── components/             # 可复用组件
│   │   ├── Button.tsx          # 按钮组件
│   │   ├── CallToAction.tsx    # 行动号召组件
│   │   ├── Container.tsx       # 容器组件 宽度适配
│   │   ├── Faqs.tsx           # 常见问题组件
│   │   ├── Fields.tsx         # 表单字段组件
│   │   ├── Footer.tsx         # 页脚组件
│   │   ├── Header.tsx         # 页头组件
│   │   ├── Hero.tsx           # 英雄区域组件
│   │   ├── Logo.tsx           # Logo 组件
│   │   ├── NavLink.tsx        # 导航链接组件
│   │   ├── Pricing.tsx        # 价格组件
│   │   ├── PrimaryFeatures.tsx # 主要功能组件
│   │   ├── SecondaryFeatures.tsx # 次要功能组件
│   │   ├── SlimLayout.tsx     # 简洁布局组件
│   │   └── Testimonials.tsx   # 客户评价组件
│   ├── images/                # 静态图片资源
│   │   ├── avatars/           # 头像图片
│   │   ├── logos/             # 品牌 Logo
│   │   ├── screenshots/       # 产品截图
│   │   └── background-*.jpg   # 背景图片
│   └── styles/
│       └── tailwind.css       # Tailwind CSS 入口文件
├── .eslintrc.json             # ESLint 配置
├── .gitignore                 # Git 忽略文件
├── next.config.js             # Next.js 配置
├── package.json               # 项目依赖和脚本
├── postcss.config.js          # PostCSS 配置
├── prettier.config.js         # Prettier 配置
├── tailwind.config.js         # Tailwind CSS 配置
└── tsconfig.json              # TypeScript 配置
```

## 🚀 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装步骤

1. **克隆项目**（如果适用）或解压模板文件

2. **安装依赖**
   ```bash
   npm install
   ```

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

4. **访问应用**

   打开浏览器访问 [http://localhost:3000](http://localhost:3000) 查看网站

### 可用脚本

```bash
# 开发模式
npm run dev

# 构建生产版本
npm run build

# 启动生产服务器
npm start

# 代码检查
npm run lint
```

## 🎨 页面和组件说明

### 主要页面

1. **首页 (`/`)**: 展示产品特性、价格、客户评价等完整营销内容
2. **登录页面 (`/login`)**: 用户登录界面
3. **注册页面 (`/register`)**: 用户注册界面，包含完整的表单验证

### 核心组件

#### Hero 组件
- 展示主要价值主张
- 包含行动号召按钮
- 显示合作伙伴 Logo

#### PrimaryFeatures 组件
- 展示产品的主要功能特性
- 响应式网格布局

#### Pricing 组件
- 展示不同的价格方案
- 支持月付/年付切换

#### Testimonials 组件
- 客户评价和推荐
- 头像和评价内容展示

#### Faqs 组件
- 常见问题解答
- 可折叠的问答列表

## 🔧 自定义指南

### 修改品牌信息

1. **更新网站标题和描述**

   编辑 `src/app/layout.tsx` 中的 metadata 配置：
   ```typescript
   export const metadata: Metadata = {
     title: {
       template: '%s - 您的品牌名',
       default: '您的品牌名 - 您的标语',
     },
     description: '您的产品描述',
   }
   ```

2. **替换 Logo**

   更新 `src/components/Logo.tsx` 组件中的 Logo 内容

3. **修改主题色彩**

   在 Tailwind CSS 配置中自定义颜色方案

### 添加新页面

在 `src/app/` 目录下创建新的文件夹和 `page.tsx` 文件：

```typescript
// src/app/about/page.tsx
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: '关于我们',
}

export default function About() {
  return (
    <div>
      <h1>关于我们</h1>
      {/* 页面内容 */}
    </div>
  )
}
```

### 自定义组件

所有组件都位于 `src/components/` 目录中，您可以：

1. 修改现有组件的样式和内容
2. 创建新的可复用组件
3. 调整组件的 props 和功能

## 🎯 SEO 优化

该模板已内置 SEO 最佳实践：

- **元数据管理**: 每个页面都有独立的 metadata 配置
- **语义化 HTML**: 使用正确的 HTML 标签结构
- **图片优化**: 使用 Next.js Image 组件自动优化
- **性能优化**: 代码分割和懒加载

## 🚀 部署指南

### Vercel 部署（推荐）

1. 将代码推送到 GitHub 仓库
2. 在 [Vercel](https://vercel.com) 中导入项目
3. Vercel 会自动检测 Next.js 项目并进行部署

### 其他平台

```bash
# 构建生产版本
npm run build

# 启动生产服务器
npm start
```

## 🔍 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

配置详见 `package.json` 中的 `browserslist` 字段。

## 📝 许可证

本网站模板是商业产品，遵循 [Tailwind Plus 许可证](https://tailwindcss.com/plus/license)。

## 📚 学习资源

要了解更多关于本模板使用的技术，请参考以下资源：

- [Tailwind CSS 文档](https://tailwindcss.com/docs) - Tailwind CSS 官方文档
- [Next.js 文档](https://nextjs.org/docs) - Next.js 官方文档
- [React 文档](https://react.dev) - React 官方文档
- [TypeScript 文档](https://www.typescriptlang.org/docs) - TypeScript 官方文档
- [Headless UI 文档](https://headlessui.dev) - Headless UI 官方文档

## 🤝 技术支持

如果您在使用过程中遇到问题，建议：

1. 查阅相关技术文档
2. 检查 GitHub Issues
3. 联系 Tailwind Plus 支持团队

---

**注意**: 这是一个高级模板，建议具备 React、Next.js 和 Tailwind CSS 基础知识后使用。
#   c l o u d c v m . c o m  
 