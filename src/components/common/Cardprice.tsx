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
    activityNote: '激活一台返299元，0.38%费率永不+3',
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
    activityNote: '激活一台返299元，0.38%费率永不+3',
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
    activityNote: '激活一台返299元，0.38%费率永不+3',
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
    activityNote: '激活一台返299元，0.38%费率永不+3',
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
    activityNote: '激活一台返299元，0.38%费率永不+3',
    imageUrl: '/images/product/汇来掌柜音箱.jpg'
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
    activityNote: '激活一台返299元，0.38%费率永不+3',
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
    activityNote: '激活一台返299元，0.38%费率永不+3',
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
    activityNote: '激活一台返299元，0.38%费率永不+3',
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
    unit: '元(免费领取)',
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
    activityNote: '激活一台返299元，0.38%费率永不+3',
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
    activityNote: '激活一台返299元，0.38%费率永不+3',
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
    <div className="min-h-screen bg-blue-50">
      {/* 5个活动设计 */}

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

        {/* 分类标签栏 */}
        <div className="mb-6 sm:mb-8 lg:mb-10 xl:mb-12">
          {/* 统一梯形标签设计 - 所有设备 */}
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
                          : 'polygon(0 0, calc(100% - 10px) 0, 100% 100%, 0 100%)')
                      : (index === productCategories.length - 1
                          ? 'polygon(10px 0, 100% 0, 100% 100%, 0 100%)'
                          : 'polygon(10px 0, calc(100% - 10px) 0, 100% 100%, 10px 100%)'),
                    marginRight: index === productCategories.length - 1 ? '0' : '-10px',
                    zIndex: productCategories.length - index,
                    minWidth: '120px',
                    width: 'auto',
                    flex: '1 1 0%'
                  }}
                >
                  <div className="flex flex-col items-center justify-center w-full px-2 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-8 lg:py-5 xl:px-12 xl:py-6 relative">
                    <div className="flex items-center gap-1 sm:gap-1.5">
                      <span className={`
                          text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium transition-colors duration-200
                          ${activeCategory === category.id ? 'text-white' : 'text-gray-600'}
                        `}>
                        {category.name}
                      </span>
                      <span className={`
                        text-xs transition-colors duration-300 px-1 sm:px-1.5 py-0.5 rounded-full
                        ${activeCategory === category.id ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-600'}
                      `}>
                        {category.count}
                      </span>
                    </div>
                    <span className={`
                      text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-0.5 sm:mt-1 text-center transition-colors duration-300 hidden sm:block
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

        {/* POS机产品网格数据区域 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {currentCategory.products.map((product) => (
            <div
              key={product.id}
              className="group flex h-full transform flex-col overflow-hidden bg-white border-2 border-white shadow-[2px_2px_8px_0_rgba(55,99,170,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_12px_0_rgba(55,99,170,0.12)] cursor-pointer"
            >
              {/* 产品图片容器 - 16:9比例 */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                <Image
                  src={product.imageUrl || '/images/product/云银扫码盒.jpg'}
                  alt={product.name}
                  width={300}
                  height={169}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  unoptimized
                />
                {/* 热门标签 */}
                {product.isHot && (
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-1.5 rounded-full text-xs font-medium text-white shadow-lg">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      热门
                    </span>
                  </div>
                )}
                {/* 推荐标签 */}
                {product.isRecommended && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1.5 rounded-full text-xs font-medium text-white shadow-lg">
                      <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      推荐
                    </span>
                  </div>
                )}
              </div>

              {/* 产品信息区域 */}
              <div className="p-5 flex-1 flex flex-col">
                {/* 产品标题和价格 */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-gray-900 line-clamp-1 group-hover:text-blue-600 transition-colors duration-300 flex-1">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline gap-2 ml-3">
                      <span className="text-xl font-semibold text-gray-900">
                        ¥{product.price}
                      </span>
                      {product.originalPrice && product.originalPrice !== product.price && (
                        <span className="text-sm text-gray-400 line-through">
                          ¥{product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* 产品特性 */}
                <div className="mb-4">
                  <div className="flex items-center justify-between gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">品牌</span>
                      <span className="font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded-md">
                        {product.brand}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600">类型</span>
                      <span className="font-medium text-gray-900 bg-gray-100 px-2 py-1 rounded-md">
                        {product.type}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 支付方式标签 */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1.5">
                    {product.paymentMethods.slice(0, 4).map((method, index) => {
                      // 为不同支付方式分配简洁颜色
                      const getPaymentMethodStyle = (method: string) => {
                        switch (method) {
                          case '信用卡':
                          case '刷卡':
                            return 'bg-blue-500 text-white';
                          case '借记卡':
                          case '插卡':
                            return 'bg-purple-500 text-white';
                          case '微信':
                            return 'bg-green-500 text-white';
                          case '支付宝':
                            return 'bg-orange-500 text-white';
                          case '云闪付':
                          case 'NFC':
                            return 'bg-cyan-500 text-white';
                          case '花呗':
                            return 'bg-indigo-500 text-white';
                          case '数字人民币':
                            return 'bg-red-500 text-white';
                          case '扫码':
                            return 'bg-teal-500 text-white';
                          case '非接':
                            return 'bg-pink-500 text-white';
                          case '会员卡':
                            return 'bg-amber-500 text-white';
                          case '银联二维码':
                            return 'bg-slate-500 text-white';
                          default:
                            return 'bg-gray-500 text-white';
                        }
                      };

                      return (
                        <span
                          key={index}
                          className={`inline-block text-xs px-2 py-1 font-medium ${getPaymentMethodStyle(method)}`}
                        >
                          {method}
                        </span>
                      );
                    })}
                    {product.paymentMethods.length > 4 && (
                      <span className="inline-block bg-gray-500 text-white text-xs px-2 py-1 font-medium">
                        +{product.paymentMethods.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* 活动信息 */}
                {product.activityNote && (
                  <div className="mb-4">
                    <p className="text-xs text-red-600 font-medium leading-relaxed">
                      🎉{product.activityNote}
                    </p>
                  </div>
                )}

                {/* 底部按钮区域 */}
                <div className="mt-auto pt-4 border-t border-gray-100">
                  {renderQRCodeButtonGroup('productCard')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 产品网格布局 - 移动到最底部 */}
      <Container className="py-8 pt-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {/* 左侧大卡片 - 精选特惠 新老同享 - 移动端单独一排，桌面端较小宽度 */}
          <a href="#" className="col-span-1 sm:col-span-1 lg:col-span-1 xl:col-span-1 relative overflow-hidden bg-white transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
            {/* 背景图片 */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: "url('/images/carousel/new.png')"
              }}
            />
            {/* 白色渐变遮罩层 - 增强文字可读性 */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />

            <div className="relative h-full min-h-[280px] sm:min-h-[320px] lg:min-h-[350px] p-6 flex flex-col z-10">
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

              {/* 卡片按钮 - 靠左显示并向下移动 */}
              <div className="mt-6 lg:mt-8">
                <div className="text-left">
                  {/* 抢购按钮已移除，保留查看功能 */}
                  <button className="bg-blue-600 px-4 py-2 lg:px-6 lg:py-3 text-sm lg:text-base font-medium text-white transition-all duration-300 hover:bg-blue-700 hover:scale-105 inline-flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 lg:h-5 lg:w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                    </svg>
                    立即查看
                  </button>
                </div>
              </div>
            </div>
          </a>

          {/* 右侧卡片区域 - 移动端2x2宫格布局，桌面端适应新布局 */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 xl:col-span-3 grid grid-cols-2 gap-4 sm:gap-6">
            {/* 右侧卡片1 - 云计算产品热销榜 */}
            <a href="#" className="relative overflow-hidden bg-white transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/carousel/new-1.png')"
                }}
              />
              {/* 白色遮罩层 - 增强文字可读性 */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />

              <div className="relative h-full min-h-[120px] sm:min-h-[160px] p-3 sm:p-5 flex flex-col z-10">
                {/* 卡片标签 */}
                <div className="mb-2 sm:mb-3">
                  <span className="inline-block bg-blue-600 px-2 py-1 text-xs font-medium text-white">
                    POS机热销榜
                  </span>
                </div>

                {/* 卡片内容 */}
                <div className="mb-2 sm:mb-4">
                  <h3 className="mb-1 text-sm sm:text-lg font-bold text-gray-900">智能POS终端</h3>
                  <p className="text-xs sm:text-sm text-gray-700 hidden sm:block">智能POS终端热销榜单上架</p>
                </div>

                {/* 卡片文案 - 靠左显示 */}
              <div className="mt-auto">
                <div className="text-left text-xs sm:text-sm font-medium text-blue-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-700">
                  立即查看 →
                </div>
              </div>
              </div>
            </a>

            {/* 右侧卡片2 - 文字识别品类季 */}
            <a href="#" className="relative overflow-hidden bg-white transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/carousel/new-2.png')"
                }}
              />
              {/* 白色遮罩层 - 增强文字可读性 */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />

              <div className="relative h-full min-h-[120px] sm:min-h-[160px] p-3 sm:p-5 flex flex-col z-10">
                {/* 卡片标签 */}
                <div className="mb-2 sm:mb-3">
                  <span className="inline-block bg-blue-600 px-2 py-1 text-xs font-medium text-white">
                    支付技术
                  </span>
                </div>

                {/* 卡片内容 */}
                <div className="mb-2 sm:mb-4">
                  <h3 className="mb-1 text-sm sm:text-lg font-bold text-gray-900">多种支付方式</h3>
                  <p className="text-xs sm:text-sm text-gray-700 hidden sm:block">支持刷卡、扫码、NFC等多种支付方式</p>
                </div>

                {/* 卡片文案 - 靠左显示 */}
              <div className="mt-auto">
                <div className="text-left text-xs sm:text-sm font-medium text-blue-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-700">
                  立即查看 →
                </div>
              </div>
              </div>
            </a>

            {/* 右侧卡片3 - 语音技术品类季 */}
            <a href="#" className="relative overflow-hidden bg-white transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/carousel/new-3.png')"
                }}
              />
              {/* 白色遮罩层 - 增强文字可读性 */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />

              <div className="relative h-full min-h-[120px] sm:min-h-[160px] p-3 sm:p-5 flex flex-col z-10">
                {/* 卡片标签 */}
                <div className="mb-2 sm:mb-3">
                  <span className="inline-block bg-blue-600 px-2 py-1 text-xs font-medium text-white">
                    移动支付
                  </span>
                </div>

                {/* 卡片内容 */}
                <div className="mb-2 sm:mb-4">
                  <h3 className="mb-1 text-sm sm:text-lg font-bold text-gray-900">移动支付方案</h3>
                  <p className="text-xs sm:text-sm text-gray-700 hidden sm:block">支持微信、支付宝等多种移动支付方式</p>
                  <p className="text-xs sm:text-sm text-gray-700 hidden sm:block">适用于各类商户场景</p>
                </div>

                {/* 卡片文案 - 靠左显示 */}
              <div className="mt-auto">
                <div className="text-left text-xs sm:text-sm font-medium text-blue-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-700">
                  立即查看 →
                </div>
              </div>
              </div>
            </a>

            {/* 右侧卡片4 - AI智能助手 */}
            <a href="#" className="relative overflow-hidden bg-white transition-all duration-300 hover:scale-[1.02] cursor-pointer block">
              {/* 背景图片 */}
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                  backgroundImage: "url('/images/carousel/new-4.png')"
                }}
              />
              {/* 白色遮罩层 - 增强文字可读性 */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />

              <div className="relative h-full min-h-[120px] sm:min-h-[160px] p-3 sm:p-5 flex flex-col z-10">
                {/* 卡片标签 */}
                <div className="mb-2 sm:mb-3">
                  <span className="inline-block bg-blue-600 px-2 py-1 text-xs font-medium text-white">
                    智能终端
                  </span>
                </div>

                {/* 卡片内容 */}
                <div className="mb-2 sm:mb-4">
                  <h3 className="mb-1 text-sm sm:text-lg font-bold text-gray-900">智能收款终端</h3>
                  <p className="text-xs sm:text-sm text-gray-700 hidden sm:block">支持多种支付方式的智能POS终端</p>
                </div>

                {/* 卡片文案 - 靠左显示 */}
              <div className="mt-auto">
                <div className="text-left text-xs sm:text-sm font-medium text-blue-600 transition-all duration-300 hover:translate-x-1 hover:text-blue-700">
                  立即查看 →
                </div>
              </div>
              </div>
            </a>
          </div>
        </div>
      </Container>
    </div>
  )
}
