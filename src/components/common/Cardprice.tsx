'use client'

/**
 * 免费领取活动页面POS机产品展示组件
 * 展示智能POS终端产品、热门活动和促销信息
 * 包含产品卡片、价格展示和购买功能
 * 支持分类标签栏切换功能
 */

import { useState } from 'react'
import Image from 'next/image'
import { Container } from '../Container'
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
      className: "h-9 px-4 text-sm leading-5 border border-blue-600 bg-blue-600 text-white hover:bg-blue-700 hover:border-blue-700 active:bg-blue-800 transition-all duration-300 ease-in-out flex-1 w-auto",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      )
    },
    contact: {
      text: "联系客服",
      className: "h-9 px-4 text-sm leading-5 border border-blue-600 bg-transparent text-blue-600 hover:bg-blue-50 hover:border-blue-700 hover:text-blue-700 active:bg-blue-100 transition-all duration-300 ease-in-out flex-1 w-auto",
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
    name: '电子码牌',
    description: '电子码牌，适合个人及小微商户',
    brand: '聚合收款',
    type: '电子版',
    features: ['电子签名', '秒到账', 'T+1结算'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    price: '0',
    unit: '元(免费领取)',
    originalPrice: '0',
    isHot: true,
    isRecommended: false,

    imageUrl: '/images/product/ymjf.jpg'
  },
    {
    id: 111,
    name: '海多财电签(循环版)',
    description: '4G网络电签版，适合个人及小微商户',
    brand: '海多财',
    type: '电签版',
    features: ['电子签名', '秒到账', 'T+1结算'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    price: '138',
    unit: '元(免费领取)',
    originalPrice: '138',
    isHot: true,
    isRecommended: false,

    imageUrl: '/images/product/海多财电签(循环版).jpg'
  },
  {
    id: 2,
    name: '汇来掌柜(扫码盒)',
    description: '新款4G电签版，功能全面升级',
    brand: '汇来掌柜',
    type: '扫码盒',
    features: ['电子签名', '秒到账', '支持花呗'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '花呗'],
    price: '238',
    unit: '元(免费领取)',
    originalPrice: '238',
    isHot: true,
    isRecommended: false,

    imageUrl: '/images/product/汇来掌柜扫码盒.jpg'
  },
  {
    id: 3,
    name: '汇来掌柜(台卡)',
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

    imageUrl: '/images/product/汇来掌柜台卡.jpg'
  },
  {
    id: 4,
    name: '汇来掌柜音箱',
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

    imageUrl: '/images/product/汇来掌柜音箱.jpg'
  },
  {
    id: 5,
    name: '惠客收音箱',
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

    imageUrl: '/images/product/惠客收音箱.jpg'
  },
  {
    id: 6,
    name: '拉多财大POS循环版',
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

    imageUrl: '/images/product/拉多财大POS循环版.jpg'
  },
  {
    id: 7,
    name: '拉多财电签循环版',
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

    imageUrl: '/images/product/拉多财电签循环版.jpg'
  },
  {
    id: 8,
    name: '碰一下银盛小Y版',
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

    imageUrl: '/images/product/碰一下银盛小Y版.jpg'
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
    unit: '元(免费领取)',
    originalPrice: '299',
    isHot: true,
    isRecommended: false,

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

    imageUrl: '/images/product/云银-云音箱.jpg'
  },
  {
    id: 13,
    name: '智能屏(买断版)',
    description: '智能屏(买断版)，适合餐饮零售行业',
    brand: '智能屏',
    type: '买断版',
    features: ['双屏显示', '扫码支付', '会员管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    price: '79',
    unit: '元/台',
    originalPrice: '79',
    isHot: true,
    isRecommended: false,

    imageUrl: '/images/product/智能屏买断版.jpg'
  },
  {
    id: 14,
    name: '智能屏(循环版)',
    description: '智能屏(循环版)，适合外出收款',
    brand: '智能屏',
    type: '循环版',
    features: ['便携设计', '长续航', '快速打印'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '花呗'],
    price: '138',
    unit: '元/台',
    originalPrice: '138',
    isHot: true,
    isRecommended: false,

    imageUrl: '/images/product/智能屏循环版.jpg'
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
    name: '中付红蓝圈(码牌)',
    description: '中付红蓝圈(码牌)，适合移动收款',
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
    imageUrl: '/images/product/中付红蓝圈码牌.jpg'
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
    name: '银多财电签循环版',
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
    imageUrl: '/images/product/银多财电签循环版.jpg'
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
 * 产品分类配置
 * 定义不同的产品分类及其对应的数据源
 */
interface ProductCategory {
  id: string
  name: string
  description: string
  products: ServerProduct[]
  count: number
}

const productCategories: ProductCategory[] = [
  {
    id: 'all',
    name: '全部产品',
    description: '查看所有POS机产品',
    products: [...serverProducts, ...cloudVmProducts, ...promotionProducts],
    count: serverProducts.length + cloudVmProducts.length + promotionProducts.length
  },
  {
    id: 'smart',
    name: '智能POS',
    description: '智能POS终端产品系列',
    products: serverProducts,
    count: serverProducts.length
  },
  {
    id: 'mobile',
    name: '移动POS',
    description: '移动POS机产品系列',
    products: cloudVmProducts,
    count: cloudVmProducts.length
  },
  {
    id: 'promotion',
    name: '热销推荐',
    description: '热销POS机推荐产品',
    products: promotionProducts,
    count: promotionProducts.length
  }
]

/**
 * POS机产品展示组件
 *
 * 这是一个功能完整的POS机产品展示组件，提供了丰富的产品信息展示和交互功能。
 * 组件采用现代化的响应式设计，确保在各种设备上都能提供良好的用户体验。
 *
 * 主要功能特点：
 * 1. 产品分类展示 - 支持全部产品、智能POS、移动POS、热销推荐等多个分类
 * 2. 响应式网格布局 - 适配手机、平板、桌面等不同屏幕尺寸
 * 3. 产品信息展示 - 包含POS机规格、系统、价格、折扣等完整信息
 * 4. 标签系统 - 支持热门标签和推荐标签显示
 * 5. 活动信息 - 展示热门活动和促销信息
 * 6. 二维码功能 - 支持二维码弹出框，提供联系方式
 * 7. 交互体验 - 悬停效果、点击反馈等现代化交互
 *
 * 技术实现：
 * - 使用 React Hooks (useState) 进行状态管理
 * - 采用 Tailwind CSS 进行样式设计
 * - 支持 TypeScript 类型检查
 * - 组件化设计，便于维护和扩展
 *
 * 布局结构：
 * 1. 顶部产品网格布局 - 展示精选特惠和热门产品卡片
 * 2. 产品分类标签栏 - 提供产品分类切换功能
 * 3. 当前分类描述 - 显示选中分类的详细信息
 * 4. POS机产品网格 - 展示具体的产品列表
 *
 * @component
 * @returns {JSX.Element} 返回完整的POS机产品展示组件
 *
 * @example
 * ```tsx
 * import Cardprice from '@/components/common/Cardprice'
 *
 * function App() {
 *   return (
 *     <div>
 *       <Cardprice />
 *     </div>
 *   )
 * }
 * ```
 */
export default function Cardprice() {
  // 状态管理 - 当前选中的产品分类
  const [activeCategory, setActiveCategory] = useState('all')

  // 获取当前选中分类的产品数据
  const currentCategory = productCategories.find(cat => cat.id === activeCategory) || productCategories[0]

  return (
    <section className="py-10 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden">
      <div className="relative">
        {/* 背景装饰 */}
        <div className="absolute top-0 left-0 right-0 h-[800px] bg-gradient-to-b from-blue-50/60 via-blue-100/40 to-transparent dark:from-blue-900/30 dark:via-blue-800/20 -z-10 rounded-b-[100%] blur-xl"></div>

        {/* 装饰元素 - 左上角 */}
        <div className="absolute left-0 top-1/4 w-64 h-64 bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-3xl -z-10 animate-pulse-slow"></div>

        {/* 装饰元素 - 右上角 */}
        <div className="absolute right-0 top-1/3 w-80 h-80 bg-blue-100/40 dark:bg-blue-900/20 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '1s' }}></div>

        {/* 装饰元素 - 左下角 */}
        <div className="absolute left-1/4 bottom-1/4 w-72 h-72 bg-purple-100/40 dark:bg-purple-900/20 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

        {/* 装饰元素 - 右下角 */}
        <div className="absolute right-1/4 bottom-1/3 w-60 h-60 bg-indigo-100/40 dark:bg-indigo-900/20 rounded-full blur-3xl -z-10 animate-pulse-slow" style={{ animationDelay: '3s' }}></div>

        {/* 产品分类标签栏 */}
        <div className="mx-auto max-w-[1800px] px-4 pt-24 pb-8 sm:px-6 lg:px-8">
        {/* 标签栏标题 */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 lg:text-3xl">
            POS机产品中心
          </h2>
          <p className="mt-2 text-gray-600">
            选择适合您的POS机产品，支持多种支付方式
          </p>
        </div>

        {/* 分类标签栏 - 优化移动端显示 */}
        <div className="mb-3 sm:mb-5 lg:mb-6 xl:mb-7">
          {/* 统一梯形标签设计 - 优化移动端 */}
          <div className="relative overflow-hidden border-b-2 border-blue-600">
            <div className="flex overflow-x-auto scrollbar-hide">
              {productCategories.map((category, index) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`
                    relative flex-shrink-0 cursor-pointer transition-all duration-300
                    ${activeCategory === category.id
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                      : 'bg-transparent hover:bg-gray-50'
                    }
                  `}
                  style={{
                    clipPath: index === 0
                      ? (index === productCategories.length - 1
                          ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
                          : 'polygon(0 0, calc(100% - 8px) 0, 100% 100%, 0 100%)')
                      : (index === productCategories.length - 1
                          ? 'polygon(8px 0, 100% 0, 100% 100%, 0 100%)'
                          : 'polygon(8px 0, calc(100% - 8px) 0, 100% 100%, 8px 100%)'),
                    marginRight: index === productCategories.length - 1 ? '0' : '-8px',
                    zIndex: productCategories.length - index,
                    minWidth: '100px',
                    width: 'auto',
                    flex: '1 1 0%'
                  }}
                >
                  <div className="flex flex-col items-center justify-center w-full px-1 py-1 sm:px-2 sm:py-1.5 md:px-3 md:py-2 lg:px-3 lg:py-2 xl:px-4 xl:py-2.5 relative">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <span className={`
                          text-xs sm:text-sm md:text-base lg:text-base font-medium transition-colors duration-200
                          ${activeCategory === category.id ? 'text-white' : 'text-gray-600'}
                        `}>
                        {category.name}
                      </span>
                      <span className={`
                        text-xs transition-colors duration-300 px-1 py-0.5 rounded-full
                        ${activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}
                      `}>
                        {category.count}
                      </span>
                    </div>
                    <span className={`
                      text-xs mt-0.5 text-center transition-colors duration-300 hidden md:block
                      ${activeCategory === category.id ? 'text-white/80' : 'text-gray-500'}
                    `}>
                      {category.description?.split('，')[0] || '专业设备'}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

     {/* 头部热门活动精选区域结束 */}

        {/* POS机产品网格数据区域 - 移动端双排布局 */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4">
          {currentCategory.products.map((product, index) => (
            <div
              key={product.id}
              className="group relative overflow-hidden outline-1 outline-gray-200 transition-all duration-200 hover:shadow-lg hover:outline-gray-300 bg-gradient-to-b from-gray-100 to-white border-2 border-white shadow-[0_4px_15px_#e5e9f0] rounded-lg p-3 sm:p-4 md:p-6 flex flex-col h-full hover:scale-[1.02] hover:-translate-y-1"
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              {/* 产品图片容器 - 优化移动端显示 */}
              <div className="relative mb-2 sm:mb-4 md:mb-5">
                <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-sm group-hover:shadow-md transition-shadow duration-300 aspect-square sm:aspect-video">
                  <Image
                    src={product.imageUrl || '/images/product/云银扫码盒.jpg'}
                    alt={product.name}
                    width={300}
                    height={169}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* 热门标签 - 移动端精简 */}
                  {product.isHot && (
                    <div className="absolute top-1 left-1 sm:top-2 sm:left-2">
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-red-500 to-orange-500 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium text-white shadow-lg animate-pulse">
                        <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="hidden sm:inline">热门</span>
                        <span className="sm:hidden">🔥</span>
                      </span>
                    </div>
                  )}

                  {/* 推荐标签 - 移动端精简 */}
                  {product.isRecommended && (
                    <div className="absolute top-1 right-1 sm:top-2 sm:right-2">
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-500 px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full text-xs font-medium text-white shadow-lg">
                        <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="hidden sm:inline">推荐</span>
                        <span className="sm:hidden">⭐</span>
                      </span>
                    </div>
                  )}

                  {/* 产品类型标签 - 移动端精简 */}
                  <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 bg-blue-500/90 backdrop-blur-sm text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-full shadow-lg">
                    {product.type}
                  </div>
                </div>
              </div>

              {/* 产品信息区域 - 优化移动端字体 */}
              <div className="flex-1 flex flex-col">
                <h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-900 dark:text-white group-hover:text-blue-500 transition-colors duration-200 line-clamp-2 leading-tight mb-2">
                  {product.name}
                </h3>

                {/* 支付方式标签和品牌信息 - 移动端精简 */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {product.paymentMethods.slice(0, 2).map((method, index) => {
                    // 为不同支付方式分配简洁颜色
                    const getPaymentMethodStyle = (method: string) => {
                      switch (method) {
                        case '信用卡':
                        case '刷卡':
                          return 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400';
                        case '借记卡':
                        case '插卡':
                          return 'bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400';
                        case '微信':
                          return 'bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400';
                        case '支付宝':
                          return 'bg-orange-50 text-orange-600 dark:bg-orange-900/20 dark:text-orange-400';
                        case '云闪付':
                        case 'NFC':
                          return 'bg-cyan-50 text-cyan-600 dark:bg-cyan-900/20 dark:text-cyan-400';
                        case '花呗':
                          return 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/20 dark:text-indigo-400';
                        case '数字人民币':
                          return 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400';
                        case '扫码':
                          return 'bg-teal-50 text-teal-600 dark:bg-teal-900/20 dark:text-teal-400';
                        case '非接':
                          return 'bg-pink-50 text-pink-600 dark:bg-pink-900/20 dark:text-pink-400';
                        case '会员卡':
                          return 'bg-amber-50 text-amber-600 dark:bg-amber-900/20 dark:text-amber-400';
                        case '银联二维码':
                          return 'bg-slate-50 text-slate-600 dark:bg-slate-900/20 dark:text-slate-400';
                        default:
                          return 'bg-gray-50 text-gray-600 dark:bg-gray-900/20 dark:text-gray-400';
                      }
                    };

                    return (
                      <span
                        key={index}
                        className={`px-1.5 py-0.5 text-xs rounded-full transition-colors duration-200 ${getPaymentMethodStyle(method)}`}
                      >
                        {method}
                      </span>
                    );
                  })}
                  {product.paymentMethods.length > 2 && (
                    <span className="px-1.5 py-0.5 bg-gray-50 text-gray-600 dark:bg-gray-900/20 dark:text-gray-400 text-xs rounded-full transition-colors duration-200">
                      +{product.paymentMethods.length - 2}
                    </span>
                  )}
                  {/* 品牌信息 */}
                  <span className="px-1.5 py-0.5 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-full transition-colors duration-200">
                    {product.brand}
                  </span>
                </div>

                <div className="mt-auto pt-2 sm:pt-3 border-t border-gray-100 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="text-base sm:text-lg md:text-xl font-bold text-blue-500 dark:text-blue-400">
                      ¥{product.price}
                      {product.originalPrice && product.originalPrice !== product.price && (
                        <span className="ml-1 sm:ml-2 text-xs sm:text-sm line-through text-gray-500 dark:text-gray-400">¥{product.originalPrice}</span>
                      )}
                    </div>
                  </div>
                  {/* 双二维码按钮组 - 移动端垂直布局 */}
                  {renderQRCodeButtonGroup('productCard', {
                    containerClassName: 'flex flex-col sm:flex-row gap-2',
                    leftButton: {
                      ...QR_CODE_CONFIG.buttons.claim,
                      text: '免费申请',
                      className: 'flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-600',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      )
                    },
                    rightButton: {
                      ...QR_CODE_CONFIG.buttons.contact,
                      text: '联系客服',
                      className: 'flex-1 inline-flex items-center justify-center gap-1 px-2 py-1.5 sm:px-3 sm:py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 text-xs sm:text-sm font-medium border border-gray-200 dark:border-gray-600',
                      icon: (
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      )
                    }
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 产品网格布局 - 优化移动端显示 */}
      <Container className="py-6 sm:py-8 pt-16 sm:pt-24">
        <div className="grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-5 xl:grid-cols-7">
          {/* 左侧大卡片 - 精选特惠 新老同享 - 移动端单独一排 */}
          <a href="#" className="col-span-1 lg:col-span-2 xl:col-span-3 relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
            {/* 背景图片 */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/carousel/Cardprice.jpg')"
              }}
            />
            {/* 白色渐变遮罩层 - 增强文字可读性 */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />

            <div className="relative h-full min-h-[160px] sm:min-h-[320px] lg:min-h-[350px] p-4 sm:p-6 flex flex-col z-10">
              {/* 卡片标签 */}
              <div className="mb-3 sm:mb-4">
                <span className="inline-block bg-blue-600 px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm font-medium text-white">
                  精选特惠 新老同享
                </span>
              </div>

              {/* 卡片标题 */}
              <div className="mb-4 sm:mb-6">
                <h3 className="mb-1 sm:mb-2 text-lg sm:text-2xl font-bold text-gray-900">0费率收款码</h3>
                <p className="text-sm sm:text-base text-gray-700">单笔300以内免手续费</p>
                <p className="text-sm sm:text-base text-gray-700">让你省更多的钱</p>
              </div>

              {/* 卡片按钮 - 靠左显示 */}
              <div className="mt-auto sm:mt-6 lg:mt-8">
                <div className="text-left">
                  <button className="bg-blue-600 px-3 py-2 sm:px-4 sm:py-2 lg:px-6 lg:py-3 text-xs sm:text-sm lg:text-base font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 inline-flex items-center gap-1 sm:gap-2 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 lg:h-5 lg:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    立即查看
                  </button>
                </div>
              </div>
            </div>
          </a>

          {/* 右侧卡片区域 - 移动端2x2宫格布局 */}
          <div className="col-span-1 lg:col-span-3 xl:col-span-4 grid grid-cols-2 gap-3 sm:gap-6">
            {/* 右侧卡片1 - 云计算产品热销榜 - 优化移动端显示 */}
              <a href="#" className="relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block aspect-square sm:aspect-video">
                {/* 背景图片 */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/carousel/new-1.png')"
                  }}
                />
                {/* 黑色渐变遮罩层 - 增强文字可读性 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="relative h-full p-3 sm:p-4 flex flex-col justify-end z-10">
                  {/* 卡片标签 - 左上角 */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                    <span className="inline-block bg-red-500 px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-xs font-medium text-white">
                      热销榜
                    </span>
                  </div>

                  {/* 卡片内容 - 底部 */}
                  <div className="text-white">
                    <h3 className="text-sm sm:text-lg font-bold mb-0.5 sm:mb-1">智能POS终端</h3>
                    <p className="text-xs sm:text-sm text-gray-200 mb-1 sm:mb-2">热销榜</p>
                    <p className="text-xs text-gray-300">热销产品推荐</p>
                  </div>
                </div>
              </a>

            {/* 右侧卡片2 - 精选推荐 - 优化移动端显示 */}
              <a href="#" className="relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block aspect-square sm:aspect-video">
                {/* 背景图片 */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/carousel/new-2.png')"
                  }}
                />
                {/* 黑色渐变遮罩层 - 增强文字可读性 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="relative h-full p-3 sm:p-4 flex flex-col justify-end z-10">
                  {/* 卡片标签 - 左上角 */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                    <span className="inline-block bg-green-500 px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-xs font-medium text-white">
                      精选推荐
                    </span>
                  </div>

                  {/* 卡片内容 - 底部 */}
                  <div className="text-white">
                    <h3 className="text-sm sm:text-lg font-bold mb-0.5 sm:mb-1">精选推荐</h3>
                    <p className="text-xs sm:text-sm text-gray-200 mb-1 sm:mb-2">优质产品</p>
                    <p className="text-xs text-gray-300">为您精心挑选</p>
                  </div>
                </div>
              </a>

            {/* 右侧卡片3 - 新品上市 - 优化移动端显示 */}
              <a href="#" className="relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block aspect-square sm:aspect-video">
                {/* 背景图片 */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/carousel/new-3.png')"
                  }}
                />
                {/* 黑色渐变遮罩层 - 增强文字可读性 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="relative h-full p-3 sm:p-4 flex flex-col justify-end z-10">
                  {/* 卡片标签 - 左上角 */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                    <span className="inline-block bg-blue-500 px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-xs font-medium text-white">
                      新品上市
                    </span>
                  </div>

                  {/* 卡片内容 - 底部 */}
                  <div className="text-white">
                    <h3 className="text-sm sm:text-lg font-bold mb-0.5 sm:mb-1">新品上市</h3>
                    <p className="text-xs sm:text-sm text-gray-200 mb-1 sm:mb-2">最新产品</p>
                    <p className="text-xs text-gray-300">抢先体验</p>
                  </div>
                </div>
              </a>

            {/* 右侧卡片4 - 限时优惠 - 优化移动端显示 */}
              <a href="#" className="relative overflow-hidden bg-white rounded-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer block aspect-square sm:aspect-video">
                {/* 背景图片 */}
                <div
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{
                    backgroundImage: "url('/images/carousel/new-4.png')"
                  }}
                />
                {/* 黑色渐变遮罩层 - 增强文字可读性 */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="relative h-full p-3 sm:p-4 flex flex-col justify-end z-10">
                  {/* 卡片标签 - 左上角 */}
                  <div className="absolute top-2 left-2 sm:top-4 sm:left-4">
                    <span className="inline-block bg-orange-500 px-2 py-0.5 text-xs sm:px-3 sm:py-1 sm:text-xs font-medium text-white">
                      限时优惠
                    </span>
                  </div>

                  {/* 卡片内容 - 底部 */}
                  <div className="text-white">
                    <h3 className="text-sm sm:text-lg font-bold mb-0.5 sm:mb-1">限时优惠</h3>
                    <p className="text-xs sm:text-sm text-gray-200 mb-1 sm:mb-2">特价产品</p>
                    <p className="text-xs text-gray-300">错过就没有了</p>
                  </div>
                </div>
              </a>
          </div>
        </div>
      </Container>
      </div>
    </section>
  )
}
