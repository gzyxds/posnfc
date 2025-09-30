/**
 * POS机产品数据类型定义和数据集合
 * 包含产品基本信息、品牌、类型、功能特点和支付方式
 */

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
 * @property {number} qrCodeRate - 扫码费率（%）
 * @property {number} cardRate - 刷卡费率（%）
 * @property {string | number} price - 当前价格
 * @property {string} unit - 价格单位
 * @property {string | number} originalPrice - 原价
 * @property {boolean} [isHot] - 是否热门产品（可选）
 * @property {boolean} [isNew] - 是否新品产品（可选）
 * @property {boolean} [isRecommended] - 是否推荐产品（可选）
 * @property {string} [activityNote] - 活动说明（可选）
 * @property {string} [linkUrl] - 商品链接地址（可选）
 * @property {string} [discount] - 折扣信息（可选）
 * @property {string | number} [currentPrice] - 当前价格（用于兼容性，可选）
 * @property {string} [subtitle] - 副标题（用于兼容性，可选）
 */
export interface ServerProduct {
  id: number
  name: string
  description: string
  brand: string
  type: string
  features: string[]// 功能特点数组
  paymentMethods: string[]
  qrCodeRate: number // 扫码费率
  cardRate: number // 刷卡费率
  price: string | number
  unit: string
  originalPrice: string | number
  isHot?: boolean
  isNew?: boolean
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
export const serverProducts: ServerProduct[] = [
  {
    id: 1,
    name: '电子码牌免费领取',
    description: '电子码牌，适合个人及小微商户',
    brand: '聚合收款',
    type: '电子码',
    features: ['电子签名', '秒到账'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    qrCodeRate: 0.38,
    cardRate: 0.53,
    price: '0',
    unit: '元(免费领取)',
    originalPrice: '0',
    isHot: true,
    isRecommended: true,
    imageUrl: '/images/product/ymjf.jpg'
  },
  {
    id: 2,
    name: '智能屏',
    description: '多场景轻松适用',
    brand: '智能屏',
    type: '买断版',
    features: ['双屏显示', '扫码支付', '会员管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '79',
    unit: '元/台',
    originalPrice: '79',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/智能屏买断版.jpg'
  },
    {
    id: 3,
    name: 'AI智能码牌',
    description: '优惠支付碰获客',
    brand: 'AI立牌',
    type: 'AI立牌',
    features: ['聚合支付', 'NFC碰一碰', 'AI智能营销'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    qrCodeRate: 0.28,
    cardRate: 0.48,
    price: '9.9',
    unit: '元/台',
    originalPrice: '9.9',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/AI智能码牌.png'
  },
 {
    id: 4,
    name: '中付智能屏',
    description: '优惠支付碰获客',
    brand: '中付智能屏',
    type: '中付智能屏',
    features: ['聚合支付', 'NFC碰一碰', '电签'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    qrCodeRate: 0.38,
    cardRate: 0.48,
    price: '59',
    unit: '元/台',
    originalPrice: '59',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/中付智能屏.jpg'
  },
  {
    id: 5,
    name: '银盛立牌',
    description: '扫码即付，多场景适用',
    brand: '银盛码牌',
    type: '银盛码牌',
    features: ['聚合支付', 'NFC碰一碰', '电签'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    qrCodeRate: 0.38,
    cardRate: 0.48,
    price: '3',
    unit: '元/台',
    originalPrice: '3',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/银盛码牌.jpg'
  },
  {
    id: 6,
    name: '海科大POS',
    description: '扫码即付，多场景适用',
    brand: '海科大POS',
    type: '海科大POS',
    features: ['聚合支付', '白条', '花呗'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    qrCodeRate: 0.38,
    cardRate: 0.48,
    price: '59',
    unit: '元/台',
    originalPrice: '59',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/海科大POS.jpg'
  },
  {
    id: 7,
    name: '银盛云音响',
    description: '扫码即付，语音播报',
    brand: '银盛云音响',
    type: '银盛云音响',
    features: ['聚合支付', '白条', '花呗'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    qrCodeRate: 0.38,
    cardRate: 0.38,
    price: '68',
    unit: '元/台',
    originalPrice: '68',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/银盛云音响.jpg'
  },
    {
    id: 8,
    name: '扫码王',
    description: '智能扫码，流程便捷',
    brand: '扫码王',
    type: '扫码王',
    features: ['电子签名', '秒到账', 'T+1结算'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '138',
    unit: '元',
    originalPrice: '299',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/云银扫码盒.jpg'
  },
    {
    id: 9,
    name: '银盛/银电签',
    description: '智能扫码，流程便捷',
    brand: '银盛电签',
    type: '电签版',
    features: ['电子签名', '秒到账', 'T+1结算'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '59',
    unit: '元',
    originalPrice: '59',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/银多财电签循环版.jpg'
  },
  {
    id: 10,
    name: '海多财乐刷电签',
    description: '4G网络电签版，适合个人及小微商户',
    brand: '海多财',
    type: '电签版',
    features: ['电子签名', '秒到账', 'T+1结算'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '59',
    unit: '元(免费领取)',
    originalPrice: '59',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/海多财电签(循环版).jpg'
  },

  {
    id: 1001,
    name: '汇来掌柜(扫码盒)',
    description: '新款4G电签版，功能全面升级',
    brand: '汇来掌柜',
    type: '扫码盒',
    features: ['电子签名', '秒到账', '支持花呗'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '花呗'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '238',
    unit: '元(免费领取)',
    originalPrice: '238',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/汇来掌柜扫码盒.jpg'
  },
  {
    id: 1002,
    name: '汇来掌柜(台卡)',
    description: '安卓智能系统，适合中大型商户',
    brand: '汇来掌柜',
    type: '台卡',
    features: ['触摸屏', '打印小票', '会员管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '数字人民币'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '0',
    unit: '元/台',
    originalPrice: '5',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/汇来掌柜台卡.jpg'
  },
  {
    id: 1003,
    name: '汇来掌柜音箱',
    description: '安卓智能系统，适合中大型商户',
    brand: '汇来掌柜',
    type: '音箱',
    features: ['触摸屏', '打印小票', '会员管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '数字人民币'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '120',
    unit: '元/台',
    originalPrice: '120',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/汇来掌柜音箱.jpg'
  },
  {
    id: 1004,
    name: '惠客收音箱',
    description: '双屏双显，适合餐饮零售行业',
    brand: '惠客收',
    type: '音箱',
    features: ['双屏显示', '扫码支付', '会员管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '云闪付'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '120',
    unit: '元/台',
    originalPrice: '120',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/惠客收音箱.jpg'
  },
  {
    id: 1005,
    name: '拉多财大POS循环版',
    description: '便携式设计，适合外出收款',
    brand: '拉多财',
    type: '大POS',
    features: ['便携设计', '长续航', '快速打印'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '花呗'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '238',
    unit: '元/台',
    originalPrice: '238',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/拉多财大POS循环版.jpg'
  },
  {
    id: 1006,
    name: '拉多财电签循环版',
    description: '有线连接，适合固定收银台',
    brand: '拉多财',
    type: '电签',
    features: ['稳定连接', '高速打印', '密码键盘'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '数字人民币'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '138',
    unit: '元/台',
    originalPrice: '238',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/拉多财电签循环版.jpg'
  },
  {
    id: 1007,
    name: '碰一下银盛小Y版',
    description: '支持多种收款方式，功能全面',
    brand: '银盛',
    type: '碰一下',
    features: ['全支付方式', '会员管理', '库存管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '花呗', '数字人民币'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '238',
    unit: '元/台',
    originalPrice: '238',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/碰一下银盛小Y版.jpg'
  },

  {
    id: 1008,
    name: '云银-扫码盒',
    description: '云银-扫码盒，功能全面升级',
    brand: '云银',
    type: '扫码盒',
    features: ['电子签名', '秒到账', '支持花呗'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '花呗'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '138',
    unit: '元(免费领取)',
    originalPrice: '299',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/云银-扫码盒.jpg'
  },
  {
    id: 1009,
    name: '云银-贴纸',
    description: '云银-贴纸，适合中大型商户',
    brand: '云银',
    type: '贴纸',
    features: ['触摸屏', '打印小票', '会员管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '数字人民币'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '0',
    unit: '元/台',
    originalPrice: '5',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/云银-贴纸.jpg'
  },
  {
    id: 1010,
    name: '云银-云音箱',
    description: '云银-云音箱，适合中大型商户',
    brand: '云银',
    type: '云音箱',
    features: ['触摸屏', '打印小票', '会员管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '数字人民币'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '120',
    unit: '元/台',
    originalPrice: '120',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/云银-云音箱.jpg'
  },
  {
    id: 1011,
    name: '智能屏(循环版)',
    description: '智能屏(循环版)，适合外出收款',
    brand: '智能屏',
    type: '循环版',
    features: ['便携设计', '长续航', '快速打印'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '花呗'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '138',
    unit: '元/台',
    originalPrice: '138',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/智能屏循环版.jpg'
  },
  {
    id: 1012,
    name: '智能终端电签',
    description: '智能终端电签，适合固定收银台',
    brand: '智能终端',
    type: '电签',
    features: ['稳定连接', '高速打印', '密码键盘'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '数字人民币'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: '138',
    unit: '元/台',
    originalPrice: '138',
    isHot: true,
    isRecommended: false,
    imageUrl: '/images/product/智能终端电签.jpg'
  },
  {
    id: 1013,
    name: '中多财电签(循环版)',
    description: '中多财电签(循环版)，功能全面',
    brand: '中多财',
    type: '电签',
    features: ['全支付方式', '会员管理', '库存管理'],
    paymentMethods: ['信用卡', '借记卡', '微信', '支付宝', '花呗', '数字人民币'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
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
export const cloudVmProducts: ServerProduct[] = [
  {
    id: 201,
    name: '小Y贴纸',
    description: '4G全网通移动POS机，适合移动收款',
    brand: '银盛',
    type: '贴纸',
    paymentMethods: ['刷卡', '扫码', 'NFC', '云闪付'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
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
    qrCodeRate: 0.38,
    cardRate: 0.6,
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
    qrCodeRate: 0.38,
    cardRate: 0.6,
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
    qrCodeRate: 0.38,
    cardRate: 0.6,
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
    qrCodeRate: 0.38,
    cardRate: 0.6,
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
    qrCodeRate: 0.38,
    cardRate: 0.6,
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
 * 热销推荐产品数据
 * 包含当前热销和推荐的POS机产品
 */
export const promotionProducts: ServerProduct[] = [
  {
    id: 101,
    name: '银多财电签循环版',
    description: '高性能电签POS机，适合中小型商户',
    brand: '银多财',
    type: '电签',
    paymentMethods: ['刷卡', '插卡', '非接', '扫码'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: 138,
    unit: '元/台',
    originalPrice: 138,
    discount: '7.1折',
    isHot: true,
    features: ['电子签名', '高清触摸屏', '高速打印机', '4G全网通'],
    activityNote: '高性能电签POS机，适合中小型商户',
    linkUrl: '#',
    imageUrl: '/images/product/银多财电签循环版.jpg'
  },
  {
    id: 102,
    name: '云银-码牌',
    description: '推荐配置，性价比高，适合各类商户',
    brand: '云银',
    type: '码牌',
    paymentMethods: ['刷卡', '插卡', '非接', '扫码', '云闪付'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: 0,
    unit: '元/台',
    originalPrice: 5,
    discount: '8折',
    isRecommended: true,
    features: ['电子签名', '5.5英寸触摸屏', '高速热敏打印机', '长续航电池'],
    activityNote: '推荐配置，性价比高，适合各类商户',
    linkUrl: '#',
    imageUrl: '/images/product/云银-码牌.jpg'
  },
  {
    id: 103,
    name: '云银-扫码盒',
    description: '云银-扫码盒，适合中小型商户',
    brand: '云银',
    type: '扫码盒',
    paymentMethods: ['刷卡', '插卡', '非接', '扫码'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: 138,
    unit: '元/台',
    originalPrice: 138,
    discount: '7.1折',
    isHot: true,
    features: ['电子签名', '高清触摸屏', '高速打印机', '4G全网通'],
    activityNote: '高性能电签POS机，适合中小型商户',
    linkUrl: '#',
    imageUrl: '/images/product/云银-扫码盒.jpg'
  },
  {
    id: 104,
    name: '云银-贴纸',
    description: '云银-贴纸，性价比高，适合各类商户',
    brand: '云银',
    type: '贴纸',
    paymentMethods: ['刷卡', '插卡', '非接', '扫码', '云闪付'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: 0,
    unit: '元/台',
    originalPrice: 5,
    discount: '8折',
    isRecommended: true,
    features: ['电子签名', '5.5英寸触摸屏', '高速热敏打印机', '长续航电池'],
    activityNote: '推荐配置，性价比高，适合各类商户',
    linkUrl: '#',
    imageUrl: '/images/product/云银-贴纸.jpg'
  },
  {
    id: 105,
    name: '全能收银系统',
    description: '全能收银系统，性价比高，适合各类商户',
    brand: '云银',
    type: '收银系统',
    paymentMethods: ['刷卡', '插卡', '非接', '扫码', '云闪付'],
    qrCodeRate: 0.38,
    cardRate: 0.6,
    price: 0,
    unit: '元/台',
    originalPrice: 5,
    discount: '8折',
    isRecommended: true,
    features: ['电子签名', '5.5英寸触摸屏', '高速热敏打印机', '长续航电池'],
    activityNote: '推荐配置，性价比高，适合各类商户',
    linkUrl: '#',
    imageUrl: '/images/product/全能收银系统.jpg'
  },
]

/**
 * 按照业务分类重新组织的产品分组
 * 根据产品特性和使用场景进行精确分类
 */

/**
 * 码牌台卡产品分组
 * 包含各种码牌、台卡、贴纸类产品
 */
export const qrCodeProducts: ServerProduct[] = [
  // 从现有产品中筛选码牌台卡类产品
  ...serverProducts.filter(product =>
    ['电子码', '码牌', '贴纸', '台卡', 'AI立牌'].includes(product.type) ||
    product.name.includes('码牌') ||
    product.name.includes('贴纸') ||
    product.name.includes('台卡')
  ),
  ...cloudVmProducts.filter(product =>
    ['码牌', '贴纸', '台卡'].includes(product.type) ||
    product.name.includes('码牌') ||
    product.name.includes('贴纸') ||
    product.name.includes('台卡')
  ),
  ...promotionProducts.filter(product =>
    ['码牌', '贴纸'].includes(product.type) ||
    product.name.includes('码牌') ||
    product.name.includes('贴纸')
  )
]

/**
 * 传统POS产品分组
 * 包含传统电签POS、大POS等产品
 */
export const traditionalPosProducts: ServerProduct[] = [
  // 从现有产品中筛选传统POS类产品
  ...serverProducts.filter(product =>
    ['电签版', '电签', '大POS'].includes(product.type) ||
    product.name.includes('电签') ||
    product.name.includes('大POS')
  ),
  ...cloudVmProducts.filter(product =>
    ['电签', '大POS'].includes(product.type) ||
    product.name.includes('电签') ||
    product.name.includes('大POS')
  ),
  ...promotionProducts.filter(product =>
    ['电签'].includes(product.type) ||
    product.name.includes('电签')
  )
]

/**
 * 智能POS产品分组
 * 包含智能屏、智能终端等产品
 */
export const smartPosProducts: ServerProduct[] = [
  // 从现有产品中筛选智能POS类产品
  ...serverProducts.filter(product =>
    ['买断版', '循环版', '智能屏'].includes(product.type) ||
    product.name.includes('智能屏') ||
    product.name.includes('智能终端') ||
    product.name.includes('海科大POS')
  ),
  ...cloudVmProducts.filter(product =>
    ['智能屏'].includes(product.type) ||
    product.name.includes('智能屏')
  )
]

/**
 * 云音箱产品分组
 * 包含各种音箱类收款产品
 */
export const cloudSpeakerProducts: ServerProduct[] = [
  // 从现有产品中筛选云音箱类产品
  ...serverProducts.filter(product =>
    ['音箱', '云音箱'].includes(product.type) ||
    product.name.includes('音箱') ||
    product.name.includes('云音响')
  ),
  ...cloudVmProducts.filter(product =>
    ['音箱'].includes(product.type) ||
    product.name.includes('音箱')
  )
]

/**
 * 扫码王产品分组
 * 包含扫码盒、扫码王等产品
 */
export const scanCodeProducts: ServerProduct[] = [
  // 从现有产品中筛选扫码王类产品
  ...serverProducts.filter(product =>
    ['扫码王', '扫码盒'].includes(product.type) ||
    product.name.includes('扫码王') ||
    product.name.includes('扫码盒')
  ),
  ...cloudVmProducts.filter(product =>
    ['扫码盒'].includes(product.type) ||
    product.name.includes('扫码盒')
  ),
  ...promotionProducts.filter(product =>
    ['扫码盒'].includes(product.type) ||
    product.name.includes('扫码盒')
  )
]

/**
 * 碰一碰产品分组
 * 包含NFC碰一碰类产品
 */
export const nfcTouchProducts: ServerProduct[] = [
  // 从现有产品中筛选碰一碰类产品
  ...serverProducts.filter(product =>
    ['碰一下'].includes(product.type) ||
    product.name.includes('碰一下') ||
    product.name.includes('碰一碰')
  )
]

/**
 * 电签POS产品分组
 * 包含各种电签版POS机产品
 */
export const electronicPosProducts: ServerProduct[] = [
  ...serverProducts.filter(product =>
    product.name.includes('电签') ||
    product.type === '电签POS'
  ),
  ...promotionProducts.filter(product =>
    product.name.includes('电签')
  )
]

/**
 * 智能屏产品分组
 * 包含各种智能屏设备
 */
export const smartScreenProducts: ServerProduct[] = [
  ...serverProducts.filter(product =>
    product.name.includes('智能屏') ||
    product.type === '智能屏'
  ),
  ...promotionProducts.filter(product =>
    product.name.includes('智能屏')
  )
]

/**
 * 贴纸码产品分组
 * 包含各种贴纸类产品
 */
export const stickerCodeProducts: ServerProduct[] = [
  ...serverProducts.filter(product =>
    product.name.includes('贴纸') ||
    product.type === '贴纸码'
  ),
  ...promotionProducts.filter(product =>
    product.name.includes('贴纸')
  )
]

/**
 * 大型POS产品分组
 * 包含大POS等大型设备
 */
export const bigPosProducts: ServerProduct[] = [
  ...serverProducts.filter(product =>
    product.name.includes('大POS') ||
    product.type === '大型POS'
  ),
  ...promotionProducts.filter(product =>
    product.name.includes('大POS')
  )
]

/**
 * 产品分组映射对象
 * 用于统一管理所有产品分组
 */
export const productGroups = {
  qrCode: qrCodeProducts,
  electronicPos: electronicPosProducts,
  smartScreen: smartScreenProducts,
  cloudSpeaker: cloudSpeakerProducts,
  scanCode: scanCodeProducts,
  stickerCode: stickerCodeProducts,
  nfcTouch: nfcTouchProducts,
  bigPos: bigPosProducts
} as const

/**
 * 产品分组类型定义
 */
export type ProductGroupKey = keyof typeof productGroups
