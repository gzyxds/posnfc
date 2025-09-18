/**
 * SEO 配置文件
 * 集中管理站点的 SEO 相关配置
 */

export const seoConfig = {
  // 站点基本信息
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://posnfc.cn',
    name: 'POS支付网',
    title: 'POS机办理_智能收银终端_移动收款设备_刷脸支付_银盛拉卡拉中付乐刷_POS支付网',
    description: '【POS支付网】专业POS机办理平台，提供银盛、拉卡拉、中付、乐刷等品牌智能收银终端、移动收款设备、刷脸支付设备、码牌收款、电签POS机、信用卡POS机办理服务，支持数字经营、聚合支付、收钱码等多元化支付解决方案，银联正规认证，安全可靠',
    keywords: [
      'POS机办理',
      'pos机官网',
      '智能收银终端',
      '移动收款设备',
      '刷脸支付设备',
      '银盛POS机',
      '拉卡拉POS机',
      '中付POS机',
      '乐刷POS机',
      '电签POS机',
      '信用卡POS机',
      '码牌收款',
      '收钱码',
      '聚合支付',
      '数字经营',
      '银联POS机',
      'POS支付网',
      '商户收款码',
      '移动收银设备',
      '智能终端',
      'pos收单',
      '支付服务',
      '在线pos刷卡',
      'posapp下载'
    ],
  },

  // 搜索引擎验证
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION || '',
    baidu: process.env.NEXT_PUBLIC_BAIDU_VERIFICATION || '',
    '360': process.env.NEXT_PUBLIC_360_VERIFICATION || '',
    sogou: process.env.NEXT_PUBLIC_SOGOU_VERIFICATION || '',
    shenma: process.env.NEXT_PUBLIC_SHENMA_VERIFICATION || '',
    bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
  },

  // 分析工具配置
  analytics: {
    baidu: process.env.NEXT_PUBLIC_BAIDU_ANALYTICS_ID || 'e42a07ed14d43b317d0711be87b19fe3',
    google: process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID || 'G-RKPD2E6626',
    clarity: process.env.NEXT_PUBLIC_BING_CLARITY_ID || 'onu0z1x1vc',
  },

  // Open Graph 配置
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    site_name: 'POS支付网',
    images: [
      {
        url: '/images/logos/logo.jpg',
        width: 1200,
        height: 630,
        alt: 'POS支付网 - 专业POS机办理平台',
      },
    ],
  },

  // Twitter 卡片配置
  twitter: {
    card: 'summary_large_image',
    site: '@posnfc',
    creator: '@posnfc',
  },

  // robots.txt 配置
  robots: {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
        crawlDelay: 1,
      },
      {
        userAgent: 'Baiduspider',
        crawlDelay: 2,
      },
      {
        userAgent: 'Googlebot',
        crawlDelay: 1,
      },
    ],
    sitemap: '/sitemap.xml',
  },

  // sitemap.xml 配置
  sitemap: {
    changefreq: {
      home: 'daily',
      product: 'weekly',
      about: 'monthly',
      support: 'weekly',
    },
    priority: {
      home: 1.0,
      product: 0.9,
      about: 0.8,
      support: 0.7,
      other: 0.6,
    },
  },

  // 页面路径配置
  pages: [
    { path: '/', priority: 1.0, changefreq: 'daily' },
    { path: '/about', priority: 0.8, changefreq: 'monthly' },
    { path: '/brand', priority: 0.9, changefreq: 'weekly' },
    { path: '/brand/yinsheng', priority: 0.9, changefreq: 'weekly' },
    { path: '/brand/lakala', priority: 0.9, changefreq: 'weekly' },
    { path: '/brand/zhongfu', priority: 0.9, changefreq: 'weekly' },
    { path: '/brand/leshua', priority: 0.9, changefreq: 'weekly' },
    { path: '/pos', priority: 0.9, changefreq: 'weekly' },
    { path: '/pos/zhineng', priority: 0.8, changefreq: 'weekly' },
    { path: '/pos/dianqian', priority: 0.8, changefreq: 'weekly' },
    { path: '/pos/yidong', priority: 0.8, changefreq: 'weekly' },
    { path: '/pos/mapai', priority: 0.8, changefreq: 'weekly' },
    { path: '/solution', priority: 0.8, changefreq: 'weekly' },
    { path: '/solution/retail', priority: 0.7, changefreq: 'weekly' },
    { path: '/solution/restaurant', priority: 0.7, changefreq: 'weekly' },
    { path: '/solution/ecommerce', priority: 0.7, changefreq: 'weekly' },
    { path: '/solution/smallbusiness', priority: 0.7, changefreq: 'weekly' },
    { path: '/contact', priority: 0.7, changefreq: 'monthly' },
    { path: '/support', priority: 0.7, changefreq: 'weekly' },
    { path: '/agent', priority: 0.6, changefreq: 'weekly' },
    { path: '/agent/join', priority: 0.6, changefreq: 'monthly' },
    { path: '/demo', priority: 0.5, changefreq: 'monthly' },
    { path: '/new', priority: 0.6, changefreq: 'weekly' },
  ],
}

export default seoConfig