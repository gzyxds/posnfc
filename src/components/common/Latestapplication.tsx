'use client'

import { useEffect, useRef, useState, useMemo, useCallback, memo } from 'react'
import clsx from 'clsx'

/**
 * 订单申请数据接口
 * @interface ApplicationData
 * @property {string} id - 订单唯一标识
 * @property {string} name - 用户名称
 * @property {string} time - 申请时间
 * @property {string} product - 申请产品
 * @property {string} location - 申请地区
 * @property {OrderStatus} status - 订单状态
 * @property {OrderPriority} priority - 订单优先级
 * @property {string} amount - 申请金额
 */
interface ApplicationData {
  id: string
  name: string
  time: string
  product: string
  location: string
  status: OrderStatus
  priority: OrderPriority
  posModel: string
}

/**
 * 订单状态枚举
 */
type OrderStatus = 'pending' | 'processing' | 'approved' | 'rejected'

/**
 * 订单优先级枚举
 */
type OrderPriority = 'low' | 'medium' | 'high' | 'urgent'

/**
 * 最近申请组件属性接口
 * @interface LatestApplicationProps
 * @property {number} [speed=4000] - 滚动速度，单位毫秒
 * @property {number} [visibleRows=4] - 可见行数
 * @property {ApplicationData[]} [data] - 自定义申请数据，不提供则使用随机生成的数据
 * @property {boolean} [showStats=true] - 是否显示统计信息
 */
interface LatestApplicationProps {
  speed?: number
  visibleRows?: number
  data?: ApplicationData[]
  showStats?: boolean
}

/**
 * 生成随机用户名
 * @returns {string} 随机生成的用户名
 */
function generateRandomName(): string {
  const surnames = ['张', '王', '李', '赵', '陈', '刘', '杨', '黄', '周', '吴', '郑', '孙', '马', '朱', '胡', '林', '郭', '何', '高', '罗']
  const names = ['明', '华', '强', '伟', '芳', '娜', '秀英', '敏', '静', '丽', '涛', '勇', '艳', '杰', '磊', '刚', '玲', '桂英', '建华', '文']

  const surname = surnames[Math.floor(Math.random() * surnames.length)]
  const name = names[Math.floor(Math.random() * names.length)]

  // 随机决定是否显示全名或部分隐藏
  const showFullName = Math.random() > 0.5
  return showFullName ? surname + name : surname + '*' + (name.length > 1 ? name.charAt(name.length - 1) : '')
}

/**
 * 生成随机时间（过去24小时内）
 * @returns {string} 格式化的时间字符串
 */
function generateRandomTime(): string {
  const now = new Date()
  // 随机生成过去24小时内的时间
  const randomTime = new Date(now.getTime() - Math.random() * 24 * 60 * 60 * 1000)

  const hours = randomTime.getHours().toString().padStart(2, '0')
  const minutes = randomTime.getMinutes().toString().padStart(2, '0')

  return `${hours}:${minutes}`
}

/**
 * 生成随机产品名称
 * @returns {string} 随机产品名称
 */
function generateRandomProduct(): string {
  const products = [
    'POS机申请', '智能POS', '移动POS', '台式POS',
    '刷卡机办理', '收款宝', '支付宝商家', '微信收款',
    '银联收款', '聚合支付', '云闪付', '扫码支付',
    '信用卡收款', '快捷支付', '商户收款', '电子支付',
    '二维码收款', 'NFC支付', '手机POS', '智能收银',
    '多功能POS', '金融POS', '商业POS', '企业收款'
  ]

  return products[Math.floor(Math.random() * products.length)]
}

/**
 * 生成随机地区
 * @returns {string} 随机地区名称
 */
function generateRandomLocation(): string {
  const locations = [
    '北京', '上海', '广州', '深圳', '杭州',
    '南京', '成都', '重庆', '武汉', '西安',
    '苏州', '天津', '长沙', '郑州', '青岛',
    '宁波', '东莞', '无锡', '厦门', '福州',
    '合肥', '济南', '大连', '沈阳', '哈尔滨',
    '石家庄', '太原', '昆明', '南宁', '贵阳',
    '兰州', '西宁', '银川', '乌鲁木齐', '呼和浩特',
    '南昌', '海口', '三亚', '拉萨', '台北'
  ]

  return locations[Math.floor(Math.random() * locations.length)]
}

/**
 * 生成随机订单状态
 * @returns {OrderStatus} 随机订单状态
 */
function generateRandomStatus(): OrderStatus {
  const statuses: OrderStatus[] = ['pending', 'processing', 'approved', 'rejected']
  const weights = [0.4, 0.3, 0.2, 0.1] // 权重分布：待处理40%，处理中30%，已批准20%，已拒绝10%

  const random = Math.random()
  let sum = 0
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i]
    if (random <= sum) {
      return statuses[i]
    }
  }
  return 'pending'
}

/**
 * 生成随机订单优先级
 * @returns {OrderPriority} 随机订单优先级
 */
function generateRandomPriority(): OrderPriority {
  const priorities: OrderPriority[] = ['low', 'medium', 'high', 'urgent']
  const weights = [0.3, 0.4, 0.2, 0.1] // 权重分布：低30%，中40%，高20%，紧急10%

  const random = Math.random()
  let sum = 0
  for (let i = 0; i < weights.length; i++) {
    sum += weights[i]
    if (random <= sum) {
      return priorities[i]
    }
  }
  return 'medium'
}

/**
 * 生成随机POS机型号
 * @returns {string} POS机型号字符串
 */
function generateRandomPosModel(): string {
  // POS机型号数组
  const posModels = [
    'K300', 'K310', 'K320', 'ME30', 'ME31', 'ME50',
    'ME60', 'P1000', 'P2000', 'S800', 'S900', 'A8'
  ]
  // 随机选择一个POS机型号
  const randomIndex = Math.floor(Math.random() * posModels.length)
  return posModels[randomIndex]
}

/**
 * 生成随机申请数据
 * @param {number} count - 需要生成的数据条数
 * @returns {ApplicationData[]} 生成的随机申请数据数组
 */
function generateRandomData(count: number): ApplicationData[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `order-${Date.now()}-${index}`,
    name: generateRandomName(),
    time: generateRandomTime(),
    product: generateRandomProduct(),
    location: generateRandomLocation(),
    status: generateRandomStatus(),
    priority: generateRandomPriority(),
    posModel: generateRandomPosModel()
  }))
}

/**
 * 计算每行应显示的卡片数量，根据屏幕宽度自适应
 * @returns {number} 每行卡片数量
 */
function getCardsPerRow(): number {
  // 在客户端环境中检测窗口宽度
  if (typeof window !== 'undefined') {
    const width = window.innerWidth
    if (width < 640) return 1 // 移动设备显示1个
    if (width < 1024) return 2 // 平板设备显示2个
  }
  // 默认桌面显示3个卡片
  return 3
}

/**
 * 获取组件样式配置 - 简化版
 * @returns {object} 样式配置对象
 */
function getComponentStyles() {
  return {
    width: 'max-w-[1800px]', // 修改为与CatSections.tsx一致的宽度设置
    rowHeight: 120,
    scrollSpeed: 50,
    transitionDuration: 300,
    cardGap: 16,
    borderRadius: 8
  }
}

/**
 * 获取状态样式配置
 * @param {OrderStatus} status - 订单状态
 * @returns {object} 状态样式对象
 */
function getStatusStyles(status: OrderStatus) {
  const statusConfig = {
    pending: {
      bg: 'bg-amber-50',
      text: 'text-amber-700',
      border: 'border-amber-200',
      dot: 'bg-amber-400',
      label: '待处理'
    },
    processing: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      border: 'border-blue-200',
      dot: 'bg-blue-400',
      label: '处理中'
    },
    approved: {
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200',
      dot: 'bg-green-400',
      label: '已批准'
    },
    rejected: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-200',
      dot: 'bg-red-400',
      label: '已拒绝'
    }
  }
  return statusConfig[status]
}

/**
 * 获取优先级样式配置
 * @param {OrderPriority} priority - 订单优先级
 * @returns {object} 优先级样式对象
 */
function getPriorityStyles(priority: OrderPriority) {
  const priorityConfig = {
    low: {
      bg: 'bg-gray-100',
      text: 'text-gray-600',
      label: '低'
    },
    medium: {
      bg: 'bg-blue-100',
      text: 'text-blue-600',
      label: '中'
    },
    high: {
      bg: 'bg-orange-100',
      text: 'text-orange-600',
      label: '高'
    },
    urgent: {
      bg: 'bg-red-100',
      text: 'text-red-600',
      label: '紧急'
    }
  }
  return priorityConfig[priority]
}

/**
 * 最近申请滚动组件 - 企业级设计
 * 展示最近的申请订单信息，采用专业的卡片式布局和平滑滚动动画
 *
 * @param {LatestApplicationProps} props - 组件属性
 * @returns {JSX.Element} 渲染的组件
 */
const LatestApplication = memo(function LatestApplication({
  speed = 3000,
  visibleRows = 3,
  data,
  showStats = true
}: LatestApplicationProps) {
  // 获取样式配置
  const styles = getComponentStyles()

  // 生成或使用提供的数据
  const [applications, setApplications] = useState<ApplicationData[]>([])
  const [isScrolling, setIsScrolling] = useState(true)
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200)
  const scrollRef = useRef<HTMLDivElement>(null)

  // 监听窗口大小变化
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    handleResize() // 初始化时立即调用一次以确保正确的初始布局
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // 初始化数据
  useEffect(() => {
    // 生成30条随机数据，提供更丰富的展示内容
    const initialData = data || generateRandomData(30)
    setApplications(initialData)
  }, [data])

  // 计算统计信息
  const stats = useMemo(() => {
    if (applications.length === 0) return null

    const statusCounts = applications.reduce((acc, app) => {
      acc[app.status] = (acc[app.status] || 0) + 1
      return acc
    }, {} as Record<OrderStatus, number>)

    const priorityCounts = applications.reduce((acc, app) => {
      acc[app.priority] = (acc[app.priority] || 0) + 1
      return acc
    }, {} as Record<OrderPriority, number>)

    // 生成1862到8501之间的随机数作为总申请数
    const randomTotal = Math.floor(Math.random() * (8501 - 1862 + 1)) + 1862
    
    // 计算各状态数据，确保与总申请保持合理比例
    // 已批准数据约为总申请的30%-40%
    const approvedPercentage = 0.3 + Math.random() * 0.1; // 30%-40%之间的随机比例
    const approvedCount = Math.floor(randomTotal * approvedPercentage);
    
    // 其他状态数据按比例分配
    const pendingPercentage = 0.2 + Math.random() * 0.1; // 20%-30%
    const processingPercentage = 0.2 + Math.random() * 0.1; // 20%-30%
    
    // 直接控制已拒绝数据在两位数以内（10-99之间）
    const rejectedCount = Math.floor(Math.random() * 90) + 10; // 10-99之间的随机数
    
    const pendingCount = Math.floor(randomTotal * pendingPercentage);
    const processingCount = Math.floor(randomTotal * processingPercentage);

    return {
      total: randomTotal,
      pending: pendingCount,
      processing: processingCount,
      approved: approvedCount,
      rejected: rejectedCount,
      urgent: priorityCounts.urgent || 0,
      high: priorityCounts.high || 0
    }
  }, [applications])

  // 简化滚动效果
  const [scrollPosition, setScrollPosition] = useState(0)
  const rowHeight = styles.rowHeight
  const cardsPerRow = getCardsPerRow()

  useEffect(() => {
    if (applications.length === 0 || !isScrolling) return

    const scrollInterval = setInterval(() => {
      setScrollPosition(prev => {
        if (prev >= rowHeight) {
          // 直接切换到下一行，无复杂动画
          setApplications(prevApps => {
            const newData = [...prevApps]
            const firstItems = newData.splice(0, cardsPerRow)
            return [...newData, ...firstItems]
          })
          return 0
        }
        return prev + 2 // 简单的滚动步长
      })
    }, styles.scrollSpeed)

    return () => clearInterval(scrollInterval)
  }, [applications, isScrolling, rowHeight, cardsPerRow, styles])

  // 鼠标和触摸交互 - 使用useCallback优化性能
  const handleMouseEnter = useCallback(() => setIsScrolling(false), [])
  const handleMouseLeave = useCallback(() => setIsScrolling(true), [])

  // 触摸事件处理
  const handleTouchStart = useCallback(() => setIsScrolling(false), [])
  const handleTouchEnd = useCallback(() => {
    // 延迟3秒后恢复滚动，给用户足够时间阅读
    setTimeout(() => setIsScrolling(true), 3000)
  }, [])

  // 数据分组 - 使用useMemo缓存计算结果
  const groupedApplications = useMemo(() => {
    const grouped = []
    for (let i = 0; i < applications.length; i += cardsPerRow) {
      grouped.push(applications.slice(i, i + cardsPerRow))
    }
    return grouped
  }, [applications, cardsPerRow])

  return (
    <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 space-y-4">
      {/* 统计面板 - 更紧凑的设计，优化移动端显示 */}
      {showStats && stats && (
        <div className="rounded-[2px] border-2 border-white bg-[#f3f5f8] p-3 sm:p-4 mt-8" style={{background: 'linear-gradient(180deg,#f3f5f8,#fff)', boxShadow: '0 6px 20px #dce0e8'}}>
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <h2 className="text-sm sm:text-base font-semibold text-gray-900">实时申请概览</h2>
            <div className="flex items-center space-x-1.5">
              <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-xs text-gray-600">实时数据</span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1.5 sm:gap-2">
            <div className="rounded-[2px] border-2 border-white bg-[#f3f5f8] p-2 sm:p-2.5 transition-all duration-300 hover:shadow-[0_6px_20px_#dce0e8]" style={{background: 'linear-gradient(180deg,#f3f5f8,#fff)'}}>
              <div className="text-base sm:text-lg md:text-xl font-bold text-gray-900">{stats.total}</div>
              <div className="text-xs text-gray-500">总申请</div>
            </div>
            <div className="rounded-[2px] border-2 border-white bg-amber-50/30 p-2 sm:p-2.5 transition-all duration-300 hover:shadow-[0_6px_20px_#dce0e8]" style={{background: 'linear-gradient(180deg,#fff8e6,#fff)'}}>
              <div className="text-base sm:text-lg md:text-xl font-bold text-amber-600">{stats.pending}</div>
              <div className="text-xs text-amber-600">待处理</div>
            </div>
            <div className="rounded-[2px] border-2 border-white bg-blue-50/30 p-2 sm:p-2.5 transition-all duration-300 hover:shadow-[0_6px_20px_#dce0e8]" style={{background: 'linear-gradient(180deg,#e6f4ff,#fff)'}}>
              <div className="text-base sm:text-lg md:text-xl font-bold text-blue-600">{stats.processing}</div>
              <div className="text-xs text-blue-600">处理中</div>
            </div>
            <div className="rounded-[2px] border-2 border-white bg-green-50/30 p-2 sm:p-2.5 transition-all duration-300 hover:shadow-[0_6px_20px_#dce0e8]" style={{background: 'linear-gradient(180deg,#e6fff0,#fff)'}}>
              <div className="text-base sm:text-lg md:text-xl font-bold text-green-600">{stats.approved}</div>
              <div className="text-xs text-green-600">已批准</div>
            </div>
            <div className="rounded-[2px] border-2 border-white bg-red-50/30 p-2 sm:p-2.5 transition-all duration-300 hover:shadow-[0_6px_20px_#dce0e8]" style={{background: 'linear-gradient(180deg,#ffe6e6,#fff)'}}>
              <div className="text-base sm:text-lg md:text-xl font-bold text-red-600">{stats.rejected}</div>
              <div className="text-xs text-red-600">已拒绝</div>
            </div>
            <div className="rounded-[2px] border-2 border-white bg-orange-50/30 p-2 sm:p-2.5 transition-all duration-300 hover:shadow-[0_6px_20px_#dce0e8]" style={{background: 'linear-gradient(180deg,#fff0e6,#fff)'}}>
              <div className="text-base sm:text-lg md:text-xl font-bold text-orange-600">{stats.urgent + stats.high}</div>
              <div className="text-xs text-orange-600">高优先</div>
            </div>
          </div>
        </div>
      )}

      {/* 订单列表 */}
      <div
        className="bg-[#f3f5f8] border-2 border-white rounded-[2px] overflow-hidden transition-all duration-300 hover:shadow-[0_6px_20px_#dce0e8]"
        style={{background: 'linear-gradient(180deg,#f3f5f8,#fff)', boxShadow: '0 6px 20px #dce0e8'}}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        role="region"
        aria-label="最新订单申请列表"
      >
        {/* 头部标题栏 - 优化对齐和间距 */}
        <div
          className="bg-white px-4 py-2.5 border-b border-gray-100 flex items-center justify-between"
        >
          <h3 className="text-base font-semibold text-gray-900">最近申请订单</h3>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-500">自动刷新</span>
            <div className={clsx(
              "w-1.5 h-1.5 rounded-full transition-colors duration-300",
              isScrolling ? "bg-green-400" : "bg-gray-400"
            )}></div>
          </div>
        </div>

        {/* 滚动内容区 */}
        <div
          ref={scrollRef}
          className="relative overflow-hidden"
          style={{ height: `${visibleRows * styles.rowHeight}px` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="transition-transform ease-linear"
            style={{
              transform: `translateY(-${scrollPosition}px)`,
              transitionDuration: '0ms'
            }}
          >
            {groupedApplications.map((group, groupIndex) => (
              <div
                key={`group-${groupIndex}`}
                className="flex gap-3 p-3 border-b border-gray-100 last:border-b-0"
                style={{ height: `${styles.rowHeight}px` }}
              >
                {group.map((app, index) => {
                  const statusStyles = getStatusStyles(app.status)
                  const priorityStyles = getPriorityStyles(app.priority)
                  const isLatest = groupIndex === 0 && index === 0

                  return (
                    <div
                      key={`${app.id}-${index}`}
                      className={clsx(
                        "flex-1 bg-[#f3f5f8] border-2 border-white rounded-[2px] transition-all duration-300",
                        "hover:shadow-[0_6px_20px_#dce0e8]",
                        isLatest ? "bg-blue-50/20" : "",
                        "relative overflow-hidden"
                      )}
                      style={{background: 'linear-gradient(180deg,#f3f5f8,#fff)', boxShadow: '0 6px 20px #dce0e8'}}
                    >
                      {/* 移除了优先级指示条 */}

                      <div className="p-2.5 flex flex-col h-full">
                        {/* 头部信息行 - 更紧凑对齐 */}
                        <div className="flex items-center justify-between mb-1.5">
                          <div className="flex items-center gap-1">
                            <p className="font-medium text-gray-900 text-sm truncate max-w-[120px]">{app.name}</p>
                            {isLatest && (
                              <span className="inline-flex items-center px-1 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                                新
                              </span>
                            )}
                          </div>

                          {/* 优先级标签 - 更紧凑 */}
                          <span className={clsx(
                            "inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium",
                            priorityStyles.bg,
                            priorityStyles.text
                          )}>
                            {priorityStyles.label}
                          </span>
                        </div>

                        {/* 产品信息行 - 改进对齐 */}
                        <div className="flex justify-between items-center mb-1.5">
                          <p className="text-sm text-gray-900 truncate max-w-[65%]">{app.product}</p>
                          <p className="text-xs text-gray-500">{app.time}</p>
                        </div>

                        {/* 底部信息行 - 优化对齐 */}
                        <div className="flex items-center justify-between mt-auto">
                          <div className={clsx(
                            "inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium",
                            statusStyles.bg,
                            statusStyles.text
                          )}>
                            <div className={clsx("w-1 h-1 rounded-full mr-1", statusStyles.dot)}></div>
                            {statusStyles.label}
                          </div>
                          <span className="text-sm font-medium text-gray-900">型号: {app.posModel}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}

                {/* 填充空白卡片 */}
                {Array.from({ length: cardsPerRow - group.length }).map((_, i) => (
                  <div key={`empty-${i}`} className="flex-1"></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* 底部信息栏 - 优化对齐和间距 */}
        <div
          className="bg-[#f3f5f8] px-4 py-2 border-t border-white"
          style={{background: 'linear-gradient(180deg,#fff,#f3f5f8)'}}
        >
          <div className="flex items-center justify-between text-xs text-gray-600">
            <span>{applications.length}条记录</span>
            <span>{speed / 1000}秒自动更新</span>
          </div>
        </div>
      </div>
    </div>
  )
})

// 错误边界组件
export function LatestApplicationWithErrorBoundary(props: LatestApplicationProps) {
  try {
    return <LatestApplication {...props} />
  } catch (error) {
    console.error('LatestApplication 组件渲染错误:', error)
    return (
      <div className="mx-auto max-w-[1800px] p-6 text-center">
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <h3 className="text-lg font-medium text-red-800">加载失败</h3>
          <p className="mt-2 text-sm text-red-600">
            订单数据加载出现问题，请稍后重试
          </p>
        </div>
      </div>
    )
  }
}

export default LatestApplication
