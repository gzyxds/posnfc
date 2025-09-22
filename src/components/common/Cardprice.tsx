'use client'

/**
 * 免费领取活动页面POS机产品展示组件
 * 展示智能POS终端产品、热门活动和促销信息
 * 包含产品卡片、价格展示和购买功能
 */

import Image from 'next/image'
import { DualQRCodeButtonGroup } from './QRCode'

/**
 * 统一的二维码配置对象
 * 用于消除重复代码，提供一致的二维码弹出体验
 */
const QR_CODE_CONFIG = {
  // 通用按钮配置
  buttons: {
    claim: {
      text: "立即领取",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )
    },
    contact: {
      text: "联系客服",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
          <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
        </svg>
      )
    }
  },
  // 不同场景的配置组合
  scenarios: {
    productCard: {
      title: "扫码获取更多信息",
      leftQRCode: {
        url: "/images/contact/userhlc.png",
        title: "扫码添加微信客服",
        description: "添加客服微信咨询详情"
      },
      rightQRCode: {
        url: "/images/contact/gzh.png",
        title: "扫码关注公众号",
        description: "扫码获取更多信息"
      }
    },
    promotionCard: {
      title: "联系我们",
      leftQRCode: {
        url: "/images/contact/userhlc.png",
        title: "扫码添加客服",
        description: "扫码免费领取机器"
      },
      rightQRCode: {
        url: "/images/contact/gzh.png",
        title: "关注我们",
        description: "扫码关注我们"
      }
    },
    hotProduct: {
      title: "联系我们",
      leftQRCode: {
        title: "微信客服",
        url: "/images/contact/userhlc.png",
        description: "扫码添加微信客服"
      },
      rightQRCode: {
        title: "官方微信",
        url: "/images/contact/gzh.png",
        description: "扫码关注官方微信"
      }
    }
  }
}

/**
 * 渲染二维码按钮组的通用函数
 * @param scenario - 使用场景配置键名
 * @param customProps - 自定义属性（可选）
 */
const renderQRCodeButtonGroup = (scenario: keyof typeof QR_CODE_CONFIG.scenarios, customProps?: any) => {
  const config = QR_CODE_CONFIG.scenarios[scenario]

  return (
    <DualQRCodeButtonGroup
      leftButton={QR_CODE_CONFIG.buttons.claim}
      rightButton={QR_CODE_CONFIG.buttons.contact}
      leftQRCode={config.leftQRCode}
      rightQRCode={config.rightQRCode}
      title={config.title}
      {...customProps}
    />
  )
}

/**
 * POS机产品数据类型定义
 * 包含产品基本信息、品牌、类型、功能特点和支付方式
 *
 * @interface ServerProduct
 * @property {number} id - 产品唯一标识
 * @property {string} name - 产品名称
 * @property {string} description - 产品描述
 * @property {string} brand - 产品品牌
 * @property {string} type - 产品类型
 * @property {string[]} features - 功能特点数组
 * @property {string[]} paymentMethods - 支持的支付方式数组
 * @property {string | number} price - 当前价格
 * @property {string} unit - 价格单位
 * @property {string | number} originalPrice - 原价
 * @property {boolean} [isHot] - 是否热门产品（可选）
 * @property {boolean} [isRecommended] - 是否推荐产品（可选）
 * @property {string} [activityNote] - 活动说明（可选）
 * @property {string} [linkUrl] - 商品链接地址（可选）
 * @property {string} [discount] - 折扣信息（可选）
 * @property {string | number} [currentPrice] - 当前价格（用于兼容性，可选）
 * @property {string} [subtitle] - 副标题（用于兼容性，可选）
 */
interface ServerProduct {
  id: number
  name: string
  description: string
  brand: string
  type: string
  features: string[]
  paymentMethods: string[]
  price: string | number
  unit: string
  originalPrice: string | number
  isHot?: boolean
  isRecommended?: boolean
  activityNote?: string
  discount?: string
  currentPrice?: string | number
  subtitle?: string
  imageUrl?: string // 添加图片地址字段
  linkUrl?: string // 添加链接地址字段
}

/**
 * 智能POS终端产品列表数据
 * 包含多种配置规格的智能POS终端产品
 * 活动标题：新春特惠 - 限时1折起
 */
// 主要POS机产品数据
const serverProducts: ServerProduct[] = [
  {
    id: 1,
    name: '海多财电签(循环版)',
    description: '4G网络电签版，适合个人及小微商户',
    brand: '海多财',
    type: '电签版',
    features: ['电子签名', '秒到账', 'T+1结算'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    price: '138',
    unit: '元（免费领取）',
    originalPrice: '138',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/海多财电签(循环版).jpg'
  },
  {
    id: 2,
    name: '汇来掌柜(扫码盒）',
    description: '新款4G电签版，功能全面升级',
    brand: '汇来掌柜',
    type: '扫码盒',
    features: ['电子签名', '秒到账', '支持花呗'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '花呗'],
    price: '238',
    unit: '元（免费领取）',
    originalPrice: '238',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/汇来掌柜(扫码盒）.jpg'
  },
  {
    id: 3,
    name: '汇来掌柜(台卡）',
    description: '安卓智能系统，适合中大型商户',
    brand: '汇来掌柜',
    type: '台卡',
    features: ['触摸屏', '打印小票', '会员管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '数字人民币'],
    price: '0',
    unit: '元/台',
    originalPrice: '5',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/汇来掌柜(台卡）.jpg'
  },
  {
    id: 4,
    name: '汇来掌柜（音箱）',
    description: '安卓智能系统，适合中大型商户',
    brand: '汇来掌柜',
    type: '音箱',
    features: ['触摸屏', '打印小票', '会员管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '数字人民币'],
    price: '120',
    unit: '元/台',
    originalPrice: '120',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/汇来掌柜（音箱）.jpg'
  },
  {
    id: 5,
    name: '惠客收 音箱',
    description: '双屏双显，适合餐饮零售行业',
    brand: '惠客收',
    type: '音箱',
    features: ['双屏显示', '扫码支付', '会员管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    price: '120',
    unit: '元/台',
    originalPrice: '120',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/惠客收 音箱.jpg'
  },
  {
    id: 6,
    name: '拉多财大POS（循环版）',
    description: '便携式设计，适合外出收款',
    brand: '拉多财',
    type: '大POS',
    features: ['便携设计', '长续航', '快速打印'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '花呗'],
    price: '238',
    unit: '元/台',
    originalPrice: '238',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/拉多财大POS（循环版）.jpg'
  },
  {
    id: 7,
    name: '拉多财电签（循环版）',
    description: '有线连接，适合固定收银台',
    brand: '拉多财',
    type: '电签',
    features: ['稳定连接', '高速打印', '密码键盘'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '数字人民币'],
    price: '138',
    unit: '元/台',
    originalPrice: '238',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/拉多财电签（循环版）.jpg'
  },
  {
    id: 8,
    name: '碰一下（银盛小Y版）',
    description: '支持多种收款方式，功能全面',
    brand: '银盛',
    type: '碰一下',
    features: ['全支付方式', '会员管理', '库存管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '花呗', '数字人民币'],
    price: '238',
    unit: '元/台',
    originalPrice: '238',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/碰一下（银盛小Y版）.jpg'
  },
  {
    id: 9,
    name: '云银扫码盒',
    description: '云银扫码盒，适合个人及小微商户',
    brand: '云银',
    type: '扫码盒',
    features: ['电子签名', '秒到账', 'T+1结算'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    price: '138',
    unit: '元',
    originalPrice: '299',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/云银扫码盒.jpg'
  },
  {
    id: 10,
    name: '云银-扫码盒',
    description: '云银-扫码盒，功能全面升级',
    brand: '云银',
    type: '扫码盒',
    features: ['电子签名', '秒到账', '支持花呗'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '花呗'],
    price: '138',
    unit: '元（免费领取）',
    originalPrice: '299',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/云银-扫码盒.jpg'
  },
  {
    id: 11,
    name: '云银-贴纸',
    description: '云银-贴纸，适合中大型商户',
    brand: '云银',
    type: '贴纸',
    features: ['触摸屏', '打印小票', '会员管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '数字人民币'],
    price: '0',
    unit: '元/台',
    originalPrice: '5',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/云银-贴纸.jpg'
  },
  {
    id: 12,
    name: '云银-云音箱',
    description: '云银-云音箱，适合中大型商户',
    brand: '云银',
    type: '云音箱',
    features: ['触摸屏', '打印小票', '会员管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '数字人民币'],
    price: '120',
    unit: '元/台',
    originalPrice: '120',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/云银-云音箱.jpg'
  },
  {
    id: 13,
    name: '智能屏（买断版）',
    description: '智能屏（买断版），适合餐饮零售行业',
    brand: '智能屏',
    type: '买断版',
    features: ['双屏显示', '扫码支付', '会员管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    price: '79',
    unit: '元/台',
    originalPrice: '79',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/智能屏（买断版）.jpg'
  },
  {
    id: 14,
    name: '智能屏（循环版）',
    description: '智能屏（循环版），适合外出收款',
    brand: '智能屏',
    type: '循环版',
    features: ['便携设计', '长续航', '快速打印'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '花呗'],
    price: '138',
    unit: '元/台',
    originalPrice: '138',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/智能屏（循环版）.jpg'
  },
  {
    id: 15,
    name: '智能终端电签',
    description: '智能终端电签，适合固定收银台',
    brand: '智能终端',
    type: '电签',
    features: ['稳定连接', '高速打印', '密码键盘'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '数字人民币'],
    price: '138',
    unit: '元/台',
    originalPrice: '138',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/智能终端电签.jpg'
  },
  {
    id: 16,
    name: '中多财电签(循环版)',
    description: '中多财电签(循环版)，功能全面',
    brand: '中多财',
    type: '电签',
    features: ['全支付方式', '会员管理', '库存管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '花呗', '数字人民币'],
    price: '138',
    unit: '元/台',
    originalPrice: '138',
    isHot: true,
    isRecommended: false,
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/中多财电签(循环版).jpg'
  },
]

/**
 * 移动POS机产品系列数据
 * 包含移动POS机和手持POS的多种配置规格
 */
const cloudVmProducts: ServerProduct[] = [
  {
    id: 201,
    name: '小Y贴纸',
    description: '4G全网通移动POS机，适合移动收款',
    brand: '银盛',
    type: '贴纸',
    paymentMethods: ['刷卡', '扫码', 'NFC', '云闪付'],
    price: 0,
    unit: '元/台',
    originalPrice: 5,
    discount: '8折',
    isHot: true,
    isRecommended: true,
    features: ['4G全网通', '5.5英寸高清触摸屏', '支持电子签名', '内置打印机'],
    activityNote: '【限时优惠】移动POS机 ME30 4G全网通',
    imageUrl: '/images/product/小Y贴纸.jpg'
  },
  {
    id: 202,
    name: '移掌柜码牌',
    description: '轻巧便携手持POS机，适合流动商户',
    brand: '移掌柜',
    type: '码牌',
    paymentMethods: ['扫码', 'NFC', '会员卡'],
    price: 0,
    unit: '元/台',
    originalPrice: 5,
    discount: '7.8折',
    isHot: true,
    isRecommended: true,
    features: ['5英寸触摸屏', '高清摄像头', '长续航电池', '轻巧便携'],
    activityNote: '【限时优惠】手持POS机 V1 轻巧便携',
    imageUrl: '/images/product/移掌柜码牌.jpg'
  },
  {
    id: 203,
    name: '移掌柜贴纸',
    description: '高性能移动POS机，支持多种支付方式',
    brand: '移掌柜',
    type: '贴纸',
    paymentMethods: ['刷卡', '插卡', '非接', '扫码'],
    price: 0,
    unit: '元/台',
    originalPrice: 5,
    discount: '8.2折',
    isRecommended: true,
    features: ['3.5英寸彩色屏幕', '高速热敏打印机', 'PSAM卡座', '防拆开关'],
    activityNote: '【限时优惠】移动POS机 E350 高性能',
    imageUrl: '/images/product/移掌柜贴纸.jpg'
  },
  {
    id: 204,
    name: '银多财大POS(循环版)',
    description: '专业级手持POS机，防水防尘设计',
    brand: '银多财',
    type: '大POS',
    paymentMethods: ['刷卡', 'NFC', '扫码', '银联二维码'],
    price: 238,
    unit: '元/台',
    originalPrice: 238,
    discount: '8.1折',
    isHot: true,
    features: ['4英寸触摸屏', '高速打印机', '大容量电池', '防水防尘'],
    activityNote: '【限时优惠】手持POS机 S90 专业版',
    imageUrl: '/images/product/银多财大POS(循环版).jpg'
  },
  {
    id: 205,
    name: '中付红蓝圈（码牌）',
    description: '中付红蓝圈（码牌），适合移动收款',
    brand: '中付',
    type: '码牌',
    paymentMethods: ['刷卡', '扫码', 'NFC', '云闪付'],
    price: 0,
    unit: '元/台',
    originalPrice: 5,
    discount: '8折',
    isHot: true,
    isRecommended: true,
    features: ['4G全网通', '5.5英寸高清触摸屏', '支持电子签名', '内置打印机'],
    activityNote: '【限时优惠】移动POS机 ME30 4G全网通',
    imageUrl: '/images/product/中付红蓝圈（码牌）.jpg'
  },
  {
    id: 206,
    name: '中付智能屏',
    description: '中付智能屏，适合流动商户',
    brand: '中付',
    type: '智能屏',
    paymentMethods: ['扫码', 'NFC', '会员卡'],
    price: 138,
    unit: '元/台',
    originalPrice: 138,
    discount: '7.8折',
    isHot: true,
    isRecommended: true,
    features: ['5英寸触摸屏', '高清摄像头', '长续航电池', '轻巧便携'],
    activityNote: '【限时优惠】手持POS机 V1 轻巧便携',
    imageUrl: '/images/product/中付智能屏.jpg'
  },
];

/**
 * 热销POS机推荐第二组
 * 独立于主要产品数据，用于展示特别促销的产品
 */
const promotionProducts: ServerProduct[] = [
  {
    id: 101,
    name: '银多财电签（循环版）',
    description: '高性能电签POS机，适合中小型商户',
    brand: '银多财',
    type: '电签',
    paymentMethods: ['刷卡', '插卡', '非接', '扫码'],
    price: 138,
    unit: '元/台',
    originalPrice: 138,
    discount: '7.1折',
    isHot: true,
    features: ['电子签名', '高清触摸屏', '高速打印机', '4G全网通'],
    activityNote: '高性能电签POS机，适合中小型商户',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=70',
    imageUrl: '/images/product/银多财电签（循环版）.jpg'
  },
  {
    id: 102,
    name: '云银-码牌',
    description: '推荐配置，性价比高，适合各类商户',
    brand: '云银',
    type: '码牌',
    paymentMethods: ['刷卡', '插卡', '非接', '扫码', '云闪付'],
    price: 0,
    unit: '元/台',
    originalPrice: 5,
    discount: '8折',
    isRecommended: true,
    features: ['电子签名', '5.5英寸触摸屏', '高速热敏打印机', '长续航电池'],
    activityNote: '推荐配置，性价比高，适合各类商户',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=70',
    imageUrl: '/images/product/云银-码牌.jpg'
  },
  {
    id: 103,
    name: '云银-扫码盒',
    description: '云银-扫码盒，适合中小型商户',
    brand: '云银',
    type: '扫码盒',
    paymentMethods: ['刷卡', '插卡', '非接', '扫码'],
    price: 138,
    unit: '元/台',
    originalPrice: 138,
    discount: '7.1折',
    isHot: true,
    features: ['电子签名', '高清触摸屏', '高速打印机', '4G全网通'],
    activityNote: '高性能电签POS机，适合中小型商户',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=70',
    imageUrl: '/images/product/云银-扫码盒.jpg'
  },
  {
    id: 104,
    name: '云银-贴纸',
    description: '云银-贴纸，性价比高，适合各类商户',
    brand: '云银',
    type: '贴纸',
    paymentMethods: ['刷卡', '插卡', '非接', '扫码', '云闪付'],
    price: 0,
    unit: '元/台',
    originalPrice: 5,
    discount: '8折',
    isRecommended: true,
    features: ['电子签名', '5.5英寸触摸屏', '高速热敏打印机', '长续航电池'],
    activityNote: '推荐配置，性价比高，适合各类商户',
    linkUrl: 'https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=70',
    imageUrl: '/images/product/云银-贴纸.jpg'
  }
]


/**
 * POS机产品展示组件
 *
 * 功能特点：
 * - POS机产品卡片布局，展示多种配置的智能POS终端
 * - 响应式网格布局，适配不同屏幕尺寸（手机、平板、桌面）
 * - 包含POS机规格、系统、价格、折扣等完整信息展示
 * - 支持热门标签和推荐标签显示
 * - 热门活动和促销信息展示
 * - 支持二维码弹出框功能
 *
 * @returns {JSX.Element} POS机产品展示组件
 */
export default function Cardprice() {

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 头部热门活动精选区域 */}
      <div className="mx-auto max-w-[1800px] px-4 py-8 pt-24 sm:px-6 lg:px-8">
      {/* 热门活动精选卡片 - 完全按照参考图片设计：左侧1个大卡片，右侧4个小卡片(2x2布局) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* 左侧大卡片 - 精选特惠 新老同享 */}
          <a href="https://console.cloudcvm.com/cart/goodsList.htm?fpg_id=50&spg_id=all" className="lg:col-span-1 relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
            {/* 背景图片 */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/carousel/new.png')"
              }}
            />
            {/* 白色渐变遮罩层 - 增强文字可读性 */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />

            <div className="relative h-full min-h-[350px] p-6 flex flex-col z-10">
              {/* 卡片标签 */}
              <div className="mb-4">
                <span className="inline-block bg-blue-600 px-4 py-1.5 text-sm font-medium text-white">
                  精选特惠 新老同享
                </span>
              </div>

              {/* 卡片标题 */}
              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold text-gray-900">热门POS机优惠套餐</h3>
                <p className="text-gray-700">新老用户同价秒杀</p>
                <p className="text-gray-700">性能稳定 等你来抢!!!</p>
              </div>

              {/* 卡片按钮 - 靠左显示并向上移动 */}
              <div className="mt-4">
                <div className="text-left">
                  {/* 抢购按钮已移除，保留查看功能 */}
                  <button className="bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105">
                    立即查看
                  </button>
                </div>
              </div>
            </div>
          </a>

          {/* 右侧卡片区域 - 2x2网格布局 */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 右侧卡片1 - 云计算产品热销榜 */}
            <a href="#" className="relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/carousel/new-1.png')"
                }}
              />
              {/* 白色遮罩层 - 增强文字可读性 */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />

              <div className="relative h-full min-h-[160px] p-5 flex flex-col z-10">
                {/* 卡片标签 */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    POS机产品热销榜
                  </span>
                </div>

                {/* 卡片内容 */}
                <div className="mb-4">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">智能POS终端热销榜单</h3>
                  <p className="text-sm text-gray-700">智能POS终端热销榜单上架</p>
                </div>

                {/* 卡片文案 - 靠左显示 */}
              <div className="mt-auto">
                <div className="text-left text-sm font-medium text-blue-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-700">
                  立即查看 →
                </div>
              </div>
              </div>
            </a>

            {/* 右侧卡片2 - 文字识别品类季 */}
            <a href="#" className="relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/carousel/new-2.png')"
                }}
              />
              {/* 白色遮罩层 - 增强文字可读性 */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />

              <div className="relative h-full min-h-[160px] p-5 flex flex-col z-10">
                {/* 卡片标签 */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    POS机支付技术
                  </span>
                </div>

                {/* 卡片内容 */}
                <div className="mb-4">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">多种支付方式</h3>
                  <p className="text-sm text-gray-700">支持刷卡、扫码、NFC等多种支付方式</p>
                </div>

                {/* 卡片文案 - 靠左显示 */}
              <div className="mt-auto">
                <div className="text-left text-sm font-medium text-blue-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-700">
                  立即查看 →
                </div>
              </div>
              </div>
            </a>

            {/* 右侧卡片3 - 语音技术品类季 */}
            <a href="#" className="relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/carousel/new-3.png')"
                }}
              />
              {/* 白色遮罩层 - 增强文字可读性 */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />

              <div className="relative h-full min-h-[160px] p-5 flex flex-col z-10">
                {/* 卡片标签 */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    移动支付技术
                  </span>
                </div>

                {/* 卡片内容 */}
                <div className="mb-4">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">移动支付解决方案</h3>
                  <p className="text-sm text-gray-700">支持微信、支付宝等多种移动支付方式</p>
                  <p className="text-sm text-gray-700">适用于各类商户场景</p>
                </div>

                {/* 卡片文案 - 靠左显示 */}
              <div className="mt-auto">
                <div className="text-left text-sm font-medium text-blue-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-700">
                  立即查看 →
                </div>
              </div>
              </div>
            </a>

            {/* 右侧卡片4 - AI智能助手 */}
            <a href="#" className="relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/carousel/new-4.png')"
                }}
              />
              {/* 白色遮罩层 - 增强文字可读性 */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />

              <div className="relative h-full min-h-[160px] p-5 flex flex-col z-10">
                {/* 卡片标签 */}
                <div className="mb-3">
                  <span className="inline-block bg-blue-600 px-3 py-1 text-xs font-medium text-white">
                    智能POS终端
                  </span>
                </div>

                {/* 卡片内容 */}
                <div className="mb-4">
                  <h3 className="mb-1 text-lg font-bold text-gray-900">智能收款终端</h3>
                  <p className="text-sm text-gray-700">支持多种支付方式的智能POS终端</p>
                </div>

                {/* 卡片文案 - 靠左显示 */}
              <div className="mt-auto">
                <div className="text-left text-sm font-medium text-blue-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-700">
                  立即查看 →
                </div>
              </div>
              </div>
            </a>
          </div>
        </div>
     {/* 头部热门活动精选区域结束 */}

        {/* POS机产品网格数据区域 */}
        <div className="mt-12 mb-6">
          <h2 className="text-3xl font-bold text-blue-600">POS机产品</h2>
          <p className="mt-1 text-gray-900">每个配置全网（包含其他活动页面）限新购1次，续费1次，详情参见销售卡片</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serverProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-md border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-md"
            >
              {/* 产品图片 */}
              <div className="relative aspect-square overflow-hidden bg-gray-100">
                <Image
                  src={product.imageUrl || '/images/product/云银扫码盒.jpg'}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="h-full w-full object-contain"
                  unoptimized
                />
              </div>

              {/* 产品标题和标签 */}
              <div className="border-b border-gray-100 p-4">
                <div className="mb-2 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-medium text-gray-900">
                      {product.name}
                    </h3>
                    {product.isHot && (
                      <span className="bg-red-500 px-2 py-1 text-xs text-white">
                        热门
                      </span>
                    )}
                  </div>
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-bold text-gray-900">
                    {product.subtitle}
                  </span>
                  {product.isRecommended && (
                    <span className="rounded bg-red-500 px-2 py-1 text-xs text-white">
                     热门
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm text-gray-600">
                  零售、餐饮、商超等高性价比的选择
                </p>
                {product.activityNote && (
                  <p className="mt-1 text-xs text-gray-500">
                    {product.activityNote}
                  </p>
                )}
              </div>

              {/* 产品规格信息 */}
              <div className="space-y-3 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">品牌</span>
                  <div className="flex items-center gap-1">
                    <span className="font-medium text-gray-900">
                      {product.brand}
                    </span>
                    <svg
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">类型</span>
                  <span className="text-sm text-gray-900">
                    {product.type}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">支付方式</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-900">
                      {Array.isArray(product.paymentMethods) ? product.paymentMethods.join('/') : product.paymentMethods}
                    </span>
                    <span className="bg-red-100 px-1 py-0.5 text-xs text-red-600">
                      {product.discount}
                    </span>
                  </div>
                </div>

                {/* 产品特性 - 条件渲染 */}
                {product.features && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">特性</span>
                    <span className="text-sm text-gray-900">
                      {Array.isArray(product.features) ? product.features.slice(0, 2).join('、') : product.features}
                    </span>
                  </div>
                )}



                {/* 注意事项 - 条件渲染 */}
                {product.activityNote && (
                  <div className="mt-2 p-2 bg-yellow-50 border border-yellow-200 rounded">
                    <p className="text-xs text-yellow-800">
                      <span className="font-medium">注意：</span>{product.activityNote}
                    </p>
                  </div>
                )}


              </div>

              {/* 价格和折扣信息 */}
              <div className="border-t border-gray-100 p-4">
                {product.discount && (
                  <div className="mb-2 flex items-center gap-2">
                    <span className="bg-red-100 px-2 py-1 text-xs text-red-600">
                      {product.discount}
                    </span>
                    <span className="text-xs text-gray-500">
                      限时特惠
                    </span>
                  </div>
                )}

                <div className="mb-3">
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm text-gray-600">活动价:</span>
                    <span className="text-2xl font-bold text-red-600">
                      {product.price}
                    </span>
                    <span className="text-sm text-gray-600">{product.unit}</span>
                  </div>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="text-sm text-gray-600">日常价:</span>
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice} {product.unit}
                    </span>
                  </div>
                </div>

                {/* 底部按钮区域 */}
                {renderQRCodeButtonGroup('productCard')}
              </div>
            </div>
          ))}
        </div>
        {/* 产品网格数据 */}



       {/*  4个卡片区域  */}
        <section className="mt-8" aria-labelledby="hot-activities-title">
          <div className="mx-auto max-w-[1800px] px-0 sm:px-1 lg:px-1">
            {/* 标题和文案 */}
            <div className="mb-6">
              <div className="relative inline-block">
                <h2 id="hot-activities-title" className="relative z-10 mb-2 text-2xl font-bold text-blue-600">
                  热门活动精选
                </h2>
                <div className="absolute bottom-1 left-0 h-3 w-full bg-blue-100 opacity-50"></div>
              </div>
              <p className="text-gray-600">
                汇聚当前最热门活动精选推荐
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* 精选特惠 新老同享 */}
              <div className="group relative overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative p-5">
                  {/* 背景图形元素 - 使用绝对定位的蓝色立方体图形 */}
                  <div className="absolute right-0 top-0 h-32 w-32 opacity-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600">
                      <path fill="currentColor" d="M40,40 L160,40 L160,160 L40,160 Z" />
                    </svg>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                      精选特惠 新老同享
                    </span>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">4核8GB智能POS终端</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">新老用户同价秒杀</p>
                       </div>
                  </div>
                  {/* 抢购按钮已移除，保留查看功能 */}
                  {/* 抢购按钮已移除，保留查看功能 */}
                  <button className="group-hover:bg-blue-700 w-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-md">
                    立即查看
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>

              {/* 云计算产品热销榜 */}
              <div className="group relative overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative p-5">
                  {/* 背景图形元素 - 使用绝对定位的图表图形 */}
                  <div className="absolute right-0 top-0 h-32 w-32 opacity-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600">
                      <path fill="currentColor" d="M40,160 L40,80 L80,80 L80,160 Z M90,160 L90,40 L130,40 L130,160 Z M140,160 L140,100 L180,100 L180,160 Z" />
                    </svg>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                      云计算产品热销榜
                    </span>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">智能POS终端热销榜单</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">智能POS终端热销榜单上架</p>
                    </div>
                  </div>
                  <button className="group-hover:bg-blue-700 w-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-md">
                    立即查看
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>

              {/* 文字识别品类季 */}
              <div className="group relative overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative p-5">
                  {/* 背景图形元素 - 使用绝对定位的文字图标 */}
                  <div className="absolute right-0 top-0 h-32 w-32 opacity-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600">
                      <text x="50" y="120" fontSize="80" fontWeight="bold" fill="currentColor">T</text>
                    </svg>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                      文字识别品类季
                    </span>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">通用文字识别1元起</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">通用文字识别1元起</p>
                    </div>
                  </div>
                  <button className="group-hover:bg-blue-700 w-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-md">
                    立即查看
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>

              {/* 语音技术品类季 */}
              <div className="group relative overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md">
                <div className="relative p-5">
                  {/* 背景图形元素 - 使用绝对定位的声波图标 */}
                  <div className="absolute right-0 top-0 h-32 w-32 opacity-10">
                    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-full w-full text-blue-600">
                      <path fill="currentColor" d="M100,40 L100,160 M80,60 L80,140 M60,80 L60,120 M120,60 L120,140 M140,80 L140,120" stroke="currentColor" strokeWidth="8" />
                    </svg>
                  </div>

                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 px-3 py-1 text-sm font-medium text-blue-800">
                      语音技术品类季
                    </span>
                  </div>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">语音技术品类季</h3>
                    <div className="mt-2">
                      <p className="text-sm text-gray-600">语音合成转换等多项功能</p>

                    </div>
                  </div>
                  <button className="group-hover:bg-blue-700 w-full bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:shadow-md">
                    立即查看
                    <span className="ml-1 inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* 移动POS机产品区域 */}
        <div className="mx-auto mt-8 max-w-[1800px] px-0 sm:px-1 lg:px-1">
          {/* 移动POS机产品标题和描述 */}
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold text-blue-600">
              移动POS机产品系列
            </h2>
            <p className="text-gray-600">
              高性能移动POS机，超长续航，稳定可靠的移动支付解决方案
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {cloudVmProducts.map((product) => (
              <div key={product.id} className="rounded-md border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
                {/* 产品图片 */}
                <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={product.imageUrl || '/images/product/云银扫码盒.jpg'}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-contain"
                    unoptimized
                  />
                </div>

                {/* 产品标签 */}
                <div className="mb-3 flex items-center gap-2">
                  {product.isRecommended && (
                    <span className="bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                      推荐
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-orange-500 px-2 py-1 text-xs font-medium text-white">
                      {product.discount}折
                    </span>
                  )}
                </div>

                {/* 产品名称 */}
                <div className="mb-2 flex items-center gap-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  {product.isHot && (
                    <span className="bg-red-500 px-2 py-1 text-xs font-medium text-white">
                      热销
                    </span>
                  )}
                </div>
                <p className="mb-4 text-sm text-gray-600">{product.activityNote || product.subtitle}</p>

                {/* 产品规格 */}
                <div className="mb-4 space-y-2">
                  {/* 品牌 */}
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">品牌: {product.brand}</span>
                  </div>

                  {/* 类型 */}
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">类型: {product.type}</span>
                  </div>

                  {/* 支付方式 */}
                  <div className="flex items-start gap-2">
                    <div className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700">支付方式: {Array.isArray(product.paymentMethods) ? product.paymentMethods.join('/') : product.paymentMethods}</span>
                  </div>

                  {/* 产品特性 */}
                  {product.features && (
                    <div className="flex items-start gap-2">
                      <div className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-sm text-gray-700">特性: {Array.isArray(product.features) ? product.features.slice(0, 2).join('、') : product.features}</span>
                    </div>
                  )}
                </div>

                {/* 价格信息 */}
                <div className="mb-4">
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-blue-600">¥{product.price}</span>
                    <span className="text-sm text-gray-600">{product.unit}</span>
                  </div>
                  {product.originalPrice && (
                    <div className="mt-1 flex items-center gap-1">
                      <span className="text-sm text-gray-600">日常价:</span>
                      <span className="text-sm text-gray-500 line-through">¥{product.originalPrice} {product.unit}</span>
                    </div>
                  )}
                </div>

                {/* 底部按钮区域 */}
                {renderQRCodeButtonGroup('promotionCard', {
                  leftButton: {
                    ...QR_CODE_CONFIG.buttons.claim,
                    className: "flex items-center justify-center gap-1 rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105"
                  },
                  rightButton: {
                    ...QR_CODE_CONFIG.buttons.contact,
                    className: "flex items-center justify-center gap-1 rounded-md bg-white px-3 py-2 text-sm font-medium text-gray-700 transition-all duration-300 hover:bg-gray-100 hover:scale-105 border border-gray-300"
                  },
                  containerClassName: "grid grid-cols-2 gap-3 mt-6"
                })}
              </div>
            ))}
          </div>
        </div>


        {/* 热门POS机推荐区域 */}
        <div className="mx-auto mt-8 max-w-[1800px] px-0 sm:px-1 lg:px-1">
          {/* 热门POS机标题和描述 */}
          <div className="mb-6">
            <h2 className="mb-2 text-2xl font-bold text-blue-600">
              热门POS机推荐
            </h2>
            <p className="text-gray-600">
              精选优质智能POS终端，助力您的业务快速发展
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {promotionProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-md border border-gray-200 bg-white p-6 shadow-sm transition-shadow duration-200 hover:shadow-md"
              >
                {/* 产品图片 */}
                <div className="relative aspect-square overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={product.imageUrl || '/images/product/云银扫码盒.jpg'}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="h-full w-full object-contain"
                    unoptimized
                  />
                </div>

                {/* 产品标签 */}
                <div className="mb-3 flex items-center gap-2">
                  {product.isRecommended && (
                    <span className="bg-blue-500 px-2 py-1 text-xs font-medium text-white">
                      推荐
                    </span>
                  )}
                  {product.discount && (
                    <span className="bg-orange-500 px-2 py-1 text-xs font-medium text-white">
                      {product.discount}
                    </span>
                  )}
                </div>

                {/* 产品名称和副标题 */}
                <div className="mb-4">
                  <div className="mb-1 flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    {product.isHot && (
                      <span className="bg-red-500 px-2 py-1 text-xs font-medium text-white">
                        热销
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600">{product.subtitle}</p>
                </div>

                {/* 产品规格 */}
                <div className="mb-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">品牌:</span>
                    <span className="font-medium text-gray-900">
                      {product.brand}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">类型:</span>
                    <span className="font-medium text-gray-900">
                      {product.type}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">支付方式:</span>
                    <span className="font-medium text-gray-900">
                      {Array.isArray(product.paymentMethods) ? product.paymentMethods.join('/') : product.paymentMethods}
                    </span>
                  </div>
                  {/* 产品特性 - 条件渲染 */}
                  {product.features && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">特性:</span>
                      <span className="font-medium text-gray-900">
                        {Array.isArray(product.features) ? product.features.slice(0, 2).join('、') : product.features}
                      </span>
                    </div>
                  )}

                  {/* 注意事项 - 条件渲染 */}
                  {product.activityNote && (
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">注意事项:</span>
                      <span className="font-medium text-gray-900">
                        {product.activityNote}
                      </span>
                    </div>
                  )}
                </div>

                {/* 价格信息 */}
                <div className="mb-6">
                  <div className="mb-1 flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-red-600">
                      ¥{product.price}
                    </span>
                    <span className="text-sm text-gray-600">
                      {product.unit}
                    </span>
                  </div>
                  {product.originalPrice && (
                    <div className="mt-1 flex items-center gap-1">
                      <span className="text-sm text-gray-600">日常价:</span>
                      <span className="text-sm text-gray-500 line-through">
                        ¥{product.originalPrice} {product.unit}
                      </span>
                    </div>
                  )}
                </div>

                {/* 底部按钮区域 */}
                <div className="mt-4">
                  {renderQRCodeButtonGroup('hotProduct')}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* 热销产品推荐区域结束 */}

        {/* 活动推广卡片区域 - 宽屏设计 */}
        <section className="mt-1 py-16">
          <div className="mx-auto max-w-[1800px] px-0 sm:px-1 lg:px-1">
            {/* 智能POS终端特惠卡片 - 宽屏设计 */}
            <div className="mx-auto w-full overflow-hidden border border-gray-200">
              <div className="flex flex-col lg:flex-row">
                {/* 左侧：产品信息区域（蓝色背景） */}
                <div className="bg-blue-600 p-4 text-white sm:p-6 lg:w-[40%] lg:p-8">
                  <div className="flex h-full flex-col justify-center">
                    <div>
                      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
                        <h3 className="text-xl font-bold sm:text-2xl">
                          智能POS终端 2核8GB
                        </h3>
                        <span className="inline-flex w-fit items-center bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800">
                          限时特惠
                        </span>
                      </div>
                      <p className="mt-2 text-sm text-blue-100 sm:text-base">
                        支持多种支付方式，快速收款，安全稳定，适合各类商户使用
                      </p>
                    </div>
                  </div>
                </div>

                {/* 右侧：购买信息区域（白色背景） */}
                <div className="bg-white p-4 sm:p-6 lg:w-[60%] lg:p-8">
                  <div className="flex h-full flex-col items-center justify-between gap-4 lg:flex-row">
                    <div className="w-full flex-1">
                      <div className="mb-4 grid grid-cols-2 gap-3 sm:gap-6 md:grid-cols-4 lg:mb-0">
                        <div className="text-center">
                          <div className="text-xl font-bold text-gray-900 sm:text-2xl">
                            2
                          </div>
                          <div className="text-xs text-gray-500 sm:text-sm">
                            处理器核数
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-gray-900 sm:text-2xl">
                            8GB
                          </div>
                          <div className="text-xs text-gray-500 sm:text-sm">
                            内存
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-gray-900 sm:text-2xl">
                            5.5寸
                          </div>
                          <div className="text-xs text-gray-500 sm:text-sm">
                            触摸屏
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-xl font-bold text-gray-900 sm:text-2xl">
                            4000mAh
                          </div>
                          <div className="text-xs text-gray-500 sm:text-sm">
                            电池容量
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex w-full flex-col justify-center lg:ml-8 lg:w-auto">
                      <div className="flex flex-col items-center lg:items-end">
                        <div className="flex items-baseline text-center lg:text-right">
                          <span className="mr-1 text-sm text-orange-500">
                            ¥
                          </span>
                          <span className="text-3xl font-bold text-orange-500 sm:text-4xl">
                            599
                          </span>
                          <span className="ml-1 text-sm text-orange-500">
                            元/台
                          </span>
                        </div>
                        <p className="mt-1 text-xs text-gray-500">
                          日常价 ¥699 元/台
                        </p>
                      </div>

                      <div className="mt-4 flex w-full flex-col gap-2 sm:flex-row lg:w-auto">
                        {renderQRCodeButtonGroup('hotProduct')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </section>
      </div>


    </div>
  )
}
