import type { Metadata } from 'next'

/**
 * APP下载页面SEO元数据配置
 * 包含手机POS机、APP下载、移动收款等核心关键词
 */
export const appDownloadMetadata: Metadata = {
  metadataBase: new URL('https://www.liantuo.com'),
  title: '手机POS机APP免费下载 - 0.38%费率永不+3 | 移动收款神器',
  description: '手机POS机APP免费下载，无需额外设备，手机秒变POS机！支持信用卡、微信、支付宝、花呗全渠道收款，0.38%费率永不+3，T+0秒到账，激活返现299元。央行一清认证，资金安全有保障。',
  keywords: [
    // 核心关键词
    '手机POS机',
    'POS机APP',
    '手机POS机APP',
    '移动POS机',
    '手机收款',
    'APP下载',
    
    // 功能关键词
    '移动收款',
    '扫码收款',
    '刷卡收款',
    '信用卡收款',
    '微信收款',
    '支付宝收款',
    '花呗收款',
    '数字人民币',
    
    // 场景关键词
    '便利店收款',
    '餐饮收款',
    '外卖收款',
    '小商户收款',
    '个人收款',
    '商家收款',
    
    // 痛点关键词
    '免费POS机',
    '0元免押',
    '秒到账',
    '低费率',
    '无需设备',
    '央行一清',
    
    // 对比关键词
    '传统POS机替代',
    '手机变POS机',
    '便携式POS',
    '智能收款',
    
    // 营销关键词
    '激活返现',
    '299元返现',
    '费率0.38%',
    '永不+3',
    'T+0到账',
    
    // 疑问关键词
    '手机POS机安全吗',
    '手机POS机怎么用',
    '手机POS机费率',
    '手机POS机下载',
    'POS机APP哪个好',
    
    // 品牌相关
    '联拓宝',
    '联拓宝APP',
    '正规POS机',
    '一清POS机'
  ],
  
  // Open Graph 元数据（社交媒体分享）
  openGraph: {
    title: '手机POS机APP免费下载 - 移动收款神器',
    description: '无需额外设备，手机秒变POS机！0.38%费率永不+3，T+0秒到账，激活返现299元',
    type: 'website',
    locale: 'zh_CN',
    siteName: '联拓宝',
    images: [
      {
        url: '/images/app-download-og.jpg',
        width: 1200,
        height: 630,
        alt: '手机POS机APP下载页面',
      }
    ],
  },
  
  // Twitter Card 元数据
  twitter: {
    card: 'summary_large_image',
    title: '手机POS机APP免费下载 - 移动收款神器',
    description: '无需额外设备，手机秒变POS机！0.38%费率永不+3，T+0秒到账',
    images: ['/images/app-download-twitter.jpg'],
  },
  
  // 其他SEO元数据
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // 结构化数据
  other: {
    'application-name': '联拓宝手机POS机APP',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': '联拓宝POS',
    'format-detection': 'telephone=no',
  },
  
  // 语言和地区
  alternates: {
    canonical: '/download',
    languages: {
      'zh-CN': '/download',
    },
  },
  
  // 分类和标签
  category: '金融科技',
  
  // 作者信息
  authors: [
    {
      name: '联拓宝',
      url: 'https://www.liantuo.com',
    }
  ],
  
  // 发布者信息
  publisher: '联拓宝科技有限公司',
  
  // 应用相关元数据
  applicationName: '联拓宝手机POS机',
  referrer: 'origin-when-cross-origin',
  

  
  // 图标
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
    other: {
      rel: 'apple-touch-icon-precomposed',
      url: '/apple-touch-icon-precomposed.png',
    },
  },
  
  // 清单文件
  manifest: '/manifest.json',
}

/**
 * 生成结构化数据 JSON-LD
 * 用于搜索引擎更好地理解页面内容
 */
export const generateStructuredData = () => {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: '联拓宝手机POS机APP',
    description: '专业的手机POS机应用，支持全渠道收款，费率0.38%永不+3，T+0秒到账',
    applicationCategory: 'FinanceApplication',
    operatingSystem: ['Android', 'iOS'],
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CNY',
      description: '免费下载，激活返现299元'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '50000',
      bestRating: '5',
      worstRating: '1'
    },
    author: {
      '@type': 'Organization',
      name: '联拓宝科技有限公司',
      url: 'https://www.liantuo.com'
    },
    publisher: {
      '@type': 'Organization',
      name: '联拓宝科技有限公司',
      logo: {
        '@type': 'ImageObject',
        url: '/images/logo.png'
      }
    },
    downloadUrl: [
      'https://play.google.com/store/apps/details?id=com.liantuo.pos',
      'https://apps.apple.com/app/liantuo-pos/id123456789'
    ],
    screenshot: [
      '/images/app-screenshot-1.jpg',
      '/images/app-screenshot-2.jpg',
      '/images/app-screenshot-3.jpg'
    ],
    featureList: [
      '全渠道收款支持',
      'T+0秒到账',
      '0.38%低费率',
      '央行一清认证',
      '无需额外设备',
      '激活返现299元'
    ]
  }
}