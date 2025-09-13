import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

/**
 * Next.js 中间件 - 处理.html后缀的URL重定向
 * 
 * 功能说明：
 * 1. 检测所有以.html结尾的URL请求
 * 2. 移除.html后缀并执行301永久重定向
 * 3. 特殊处理index.html，直接重定向到根路径
 * 4. SEO友好，搜索引擎会正确处理重定向
 */
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // 处理.html后缀的URL
  if (url.pathname.endsWith('.html')) {
    // 特殊处理index.html，直接重定向到首页
    if (url.pathname === '/index.html') {
      url.pathname = '/'
    } else {
      // 移除.html后缀
      url.pathname = url.pathname.replace(/\.html$/, '')
    }
    
    // 执行301永久重定向，对SEO友好
    return NextResponse.redirect(url, 301)
  }
  
  // 其他请求正常处理
  return NextResponse.next()
}

/**
 * 中间件匹配配置
 * 匹配所有请求路径，但排除以下特殊路径：
 * - api: API路由
 * - _next/static: 静态文件
 * - _next/image: 图片优化文件
 * - favicon.ico: 网站图标
 * - robots.txt: 爬虫文件
 * - sitemap.xml: 站点地图
 */
export const config = {
  matcher: [
    /*
     * 匹配所有请求路径，除了以下路径:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}