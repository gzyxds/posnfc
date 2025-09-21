/**
 * SEO 配置文件
 * 集中管理站点的 SEO 相关配置
 */

export const seoConfig = {
  // 站点基本信息
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://posnfc.cn',
    name: 'POS支付网',
    title: 'POS支付网_电签POS机_手机POS办理_商户收款码_聚合支付服务平台',
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
    // 首页 - 最高优先级
    { path: '/', priority: 1.0, changefreq: 'daily' },

    // 核心产品页面 - 高优先级
    { path: '/pos', priority: 0.9, changefreq: 'weekly' },
    { path: '/pos/dq', priority: 0.8, changefreq: 'weekly' },
    { path: '/pos/mp', priority: 0.8, changefreq: 'weekly' },
    { path: '/pos/yd', priority: 0.8, changefreq: 'weekly' },
    { path: '/pos/zn', priority: 0.8, changefreq: 'weekly' },

    // 品牌页面 - 高优先级
    { path: '/brand', priority: 0.9, changefreq: 'weekly' },
    { path: '/brand/hlb', priority: 0.8, changefreq: 'weekly' },
    { path: '/brand/hlm', priority: 0.8, changefreq: 'weekly' },
    { path: '/brand/lkb', priority: 0.8, changefreq: 'weekly' },
    { path: '/brand/lkl', priority: 0.8, changefreq: 'weekly' },
    { path: '/brand/ls', priority: 0.8, changefreq: 'weekly' },
    { path: '/brand/xyf', priority: 0.8, changefreq: 'weekly' },
    { path: '/brand/ys', priority: 0.8, changefreq: 'weekly' },
    { path: '/brand/zf', priority: 0.8, changefreq: 'weekly' },

    // 服务页面 - 中高优先级
    { path: '/agent', priority: 0.8, changefreq: 'weekly' },
    { path: '/agent/join', priority: 0.7, changefreq: 'monthly' },
    { path: '/agent/cashback', priority: 0.7, changefreq: 'weekly' },
    { path: '/agent/profit', priority: 0.7, changefreq: 'weekly' },
    { path: '/agent/policy', priority: 0.6, changefreq: 'monthly' },

    { path: '/solution', priority: 0.8, changefreq: 'weekly' },
    { path: '/solution/ecommerce', priority: 0.7, changefreq: 'weekly' },
    { path: '/solution/restaurant', priority: 0.7, changefreq: 'weekly' },
    { path: '/solution/retail', priority: 0.7, changefreq: 'weekly' },
    { path: '/solution/smm', priority: 0.7, changefreq: 'weekly' },

    // 技术服务页面 - 中等优先级
    { path: '/aiservice', priority: 0.8, changefreq: 'weekly' },
    { path: '/eccloud', priority: 0.8, changefreq: 'weekly' },
    { path: '/download', priority: 0.8, changefreq: 'weekly' },
    { path: '/new', priority: 0.7, changefreq: 'weekly' },

    // 支持页面 - 中等优先级
    { path: '/support', priority: 0.8, changefreq: 'weekly' },
    { path: '/support/about', priority: 0.7, changefreq: 'monthly' },
    { path: '/support/contact', priority: 0.7, changefreq: 'monthly' },
    { path: '/support/faq', priority: 0.7, changefreq: 'weekly' },
    { path: '/support/guide', priority: 0.7, changefreq: 'weekly' },
    { path: '/support/service', priority: 0.7, changefreq: 'weekly' },
    { path: '/support/rate', priority: 0.6, changefreq: 'monthly' },
  ],
}

export default seoConfig
