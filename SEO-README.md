# SEO 配置说明

本项目已完整配置了 robots.txt 和 sitemap.xml，为搜索引擎优化提供了完整的支持。

## 📁 文件结构

```
├── public/
│   ├── robots.txt              # 静态 robots.txt 文件
│   └── sitemap.xml             # 静态 sitemap.xml 文件
├── src/
│   ├── app/
│   │   ├── robots.ts           # Next.js robots.txt 路由处理器
│   │   └── sitemap.ts          # Next.js sitemap.xml 路由处理器
│   └── config/                 # 集中的配置目录
│       ├── seo.config.ts       # 主要 SEO 配置
│       ├── robots.config.ts    # robots.txt 生成配置
│       ├── sitemap.config.ts   # sitemap.xml 生成配置
│       └── index.ts            # 配置模块统一导出
├── scripts/
│   └── validate-seo.js         # SEO 文件验证脚本
└── out/                        # 构建输出目录
    ├── robots.txt              # 生成的 robots.txt
    └── sitemap.xml             # 生成的 sitemap.xml
```

## 🚀 主要特性

### 1. 模块化设计
- **集中配置**：所有 SEO 相关配置集中在 `src/config/` 目录
- **分离关注**：robots.txt 和 sitemap.xml 的生成逻辑分开管理
- **统一导出**：通过 `index.ts` 统一导出所有配置
- **类型安全**：使用 TypeScript 提供完整的类型支持

### 2. 双重保障机制
- **静态文件**：`public/` 目录下的静态文件作为备选
- **动态生成**：Next.js 15 的 `robots.ts` 和 `sitemap.ts` 动态生成
- **配置驱动**：使用 `src/config/` 中的配置文件驱动生成
- ✅ 允许所有搜索引擎访问主要内容
- ✅ 禁止访问敏感目录（`/api/`、`/_next/` 等）
- ✅ 针对不同搜索引擎的特定配置：
  - **百度（Baiduspider）**：爬取延迟 2 秒
  - **Google（Googlebot）**：爬取延迟 1 秒
  - **360 搜索**：爬取延迟 2 秒
  - **搜狗**：爬取延迟 2 秒
- ✅ 阻止恶意爬虫（AhrefsBot、SemrushBot 等）

### 3. 完整的 robots.txt 配置
- ✅ 包含 23 个主要页面路径
- ✅ 合理的优先级分配：
  - 首页：`1.0`（最高）
  - 产品页面：`0.9`（高）
  - 关于/联系页面：`0.7-0.8`（中等）
  - 解决方案页面：`0.6`（中等）
  - 演示页面：`0.5`（较低）
- ✅ 适当的更新频率：
  - 首页：每日更新
  - 产品页面：每周更新
  - 静态页面：每月更新

## 🛠️ 使用方法

### 构建项目
```bash
npm run build
```

### 验证 SEO 文件
```bash
npm run validate-seo
# 或
npm run seo:check
```

### 开发环境测试
```bash
npm run dev
```
然后访问：
- http://localhost:3000/robots.txt
- http://localhost:3000/sitemap.xml

## ⚙️ 配置说明

### SEO 配置文件 (`src/config/seo.config.ts`)
该文件集中管理所有 SEO 相关配置：

```typescript
export const seoConfig = {
  site: {
    url: 'https://cloudcvm.com',
    name: '优刻云计算',
    // ...
  },
  pages: [
    { path: '/', priority: 1.0, changefreq: 'daily' },
    { path: '/about', priority: 0.8, changefreq: 'monthly' },
    // ...
  ],
  // ...
}
```

### 环境变量配置
在 `.env.local` 文件中配置（可选）：

```env
NEXT_PUBLIC_SITE_URL=https://cloudcvm.com
NEXT_PUBLIC_GOOGLE_VERIFICATION=your_google_verification_code
NEXT_PUBLIC_BAIDU_VERIFICATION=your_baidu_verification_code
```

## 🔍 SEO 最佳实践

### 1. 定期更新
- 新增页面时，记得在 `seo.config.ts` 中添加对应路径
- 每次发布新内容后重新构建项目

### 2. 搜索引擎提交
- **Google Search Console**：提交 sitemap.xml
- **百度搜索资源平台**：提交 sitemap.xml
- **Bing Webmaster Tools**：提交 sitemap.xml

### 3. 监控和验证
使用验证脚本定期检查：
```bash
npm run validate-seo
```

### 4. 访问统计
- robots.txt 访问量：`https://cloudcvm.com/robots.txt`
- sitemap.xml 访问量：`https://cloudcvm.com/sitemap.xml`

## 📊 文件内容示例

### robots.txt
```
User-Agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Crawl-delay: 1

User-Agent: Baiduspider
Allow: /
Crawl-delay: 2

Sitemap: https://cloudcvm.com/sitemap.xml
```

### sitemap.xml
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://cloudcvm.com/</loc>
    <lastmod>2025-01-12T14:05:41.935Z</lastmod>
    <changefreq>daily</changefreq>
    <priority>1</priority>
  </url>
  <!-- 更多 URL... -->
</urlset>
```

## 🚨 注意事项

1. **静态导出限制**：项目使用 `output: 'export'`，需要在动态路由中添加 `export const dynamic = 'force-static'`

2. **URL 同步**：确保 sitemap.xml 中的 URL 与实际页面路径保持一致

3. **更新频率**：根据实际内容更新频率调整 `changefreq` 配置

4. **优先级设置**：合理设置页面优先级，避免所有页面都设置为最高优先级

## 🔧 故障排除

### 构建错误
如果遇到 "export const dynamic" 相关错误：
```bash
# 确保 sitemap.ts 和 robots.ts 中包含：
export const dynamic = 'force-static'
```

### 验证失败
如果验证脚本报错：
```bash
# 检查文件是否存在
ls public/robots.txt
ls public/sitemap.xml

# 检查构建输出
ls out/robots.txt
ls out/sitemap.xml
```

---

## 📞 技术支持

如有问题，请参考：
- [Next.js SEO 文档](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)
- [Google Search Central](https://developers.google.com/search/docs)
- [百度搜索资源平台](https://ziyuan.baidu.com/)

**最后更新**: 2025-01-12
**维护者**: CloudCVM 团队