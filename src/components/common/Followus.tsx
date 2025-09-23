import { JSX } from 'react'
import Image from 'next/image'
import { QrCodeIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'

/**
 * 关注我们组件的属性接口
 */
interface FollowusProps {
  /** 自定义CSS类名 */
  className?: string
  /** 主标题文本 */
  title?: string
  /** 副标题文本 */
  subtitle?: string
  /** 标签文本 */
  badgeText?: string
  /** 主图片路径 */
  imageSrc?: string
  /** 主图片alt文本 */
  imageAlt?: string
  /** 二维码图片路径 */
  qrImageSrc?: string
  /** 申请设备按钮链接 */
  applyDeviceHref?: string
  /** 联系客服按钮链接 */
  contactServiceHref?: string
  /** 二维码项目数据 */
  qrItems?: Array<{
    title: string
    desc: string
    /** 二维码图片地址 */
    imageSrc: string
    /** 二维码图片alt文本 */
    imageAlt?: string
  }>
}

/**
 * 关注我们组件 - 展示二维码、申请设备和联系客服功能
 *
 * @param props - 组件属性
 * @param props.className - 自定义CSS类名
 * @param props.title - 主标题文本，默认为"关注我们"
 * @param props.subtitle - 副标题文本，默认为"免费领取机器"
 * @param props.badgeText - 标签文本，默认为"申请办理"
 * @param props.imageSrc - 主图片路径，默认为"/images/product/hd.jpg"
 * @param props.imageAlt - 主图片alt文本，默认为"POS支付网"
 * @param props.qrImageSrc - 二维码图片路径，默认为"/images/contact/gzh.png"
 * @param props.applyDeviceHref - 申请设备按钮链接，默认为"#"
 * @param props.contactServiceHref - 联系客服按钮链接，默认为"#"
 * @param props.qrItems - 二维码项目数据数组，每个项目包含标题、描述和独立的图片地址
 * @returns 渲染的关注我们组件
 *
 * @example
 * ```tsx
 * <Followus
 *   title="关注我们"
 *   subtitle="免费领取机器"
 *   applyDeviceHref="/apply"
 *   contactServiceHref="/contact"
 * />
 * ```
 */
export function Followus({
  className = '',
  title = '关注我们',
  subtitle = '免费领取机器',
  badgeText = '申请办理',
  imageSrc = '/images/product/hd.jpg',
  imageAlt = 'POS支付网',
  qrImageSrc = '/images/contact/gzh.png',
  applyDeviceHref = '#',
  contactServiceHref = '#',
  qrItems = [
    { title: '领取机器', desc: '扫码申请POS机', imageSrc: '/images/contact/userhlc.png', imageAlt: '申请POS机二维码' },
    { title: '联系客服', desc: '扫码咨询客服', imageSrc: '/images/contact/userhlc.png', imageAlt: '联系客服二维码' },
    { title: '代理加盟', desc: '扫码加盟代理', imageSrc: '/images/contact/qq.png', imageAlt: '代理加盟二维码' },
    { title: '关注公众号', desc: '扫码获取最新资讯', imageSrc: '/images/contact/gzh.png', imageAlt: '关注公众号二维码' }
  ]
}: FollowusProps): JSX.Element {
  // 共用样式 - 参考developer-ecology-card设计
  const mainCardClass = "w-full bg-[#f3f5f8] rounded border-2 border-white shadow-[8px_8px_20px_rgba(55,99,170,0.1),-8px_-8px_20px_#fff] transition-[box-shadow] duration-300 ease-in-out hover:shadow-[12px_12px_30px_rgba(55,99,170,0.15),-12px_-12px_30px_#fff] p-8 box-border"
  const qrCardClass = "group flex h-full transform flex-col items-center bg-[#f3f5f8] rounded border border-white shadow-[4px_4px_12px_rgba(55,99,170,0.08),-4px_-4px_12px_#fff] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_16px_rgba(55,99,170,0.12),-6px_-6px_16px_#fff] p-4"
  const qrImageClass = "mb-3 h-24 w-24 bg-white p-2 rounded sm:h-32 sm:w-32"
  const iconContainerClass = "mr-3 flex h-10 w-10 items-center justify-center rounded bg-white shadow-sm"

  return (
    <section className={`relative overflow-hidden bg-gray-50 py-16 sm:py-20 ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-20 sm:opacity-30">
        <div className="absolute top-10 left-10 h-32 w-32 bg-blue-100 blur-2xl sm:h-40 sm:w-40 sm:blur-3xl" />
        <div className="absolute right-10 bottom-10 h-48 w-48 bg-indigo-100 blur-2xl sm:h-60 sm:w-60 sm:blur-3xl" />
      </div>
      <Container className="relative z-10">
        <div className="flex flex-col items-center gap-8 sm:gap-12 lg:flex-row">
          <div className="order-2 w-full lg:order-1 lg:w-1/2">
            <div className="mb-4 inline-flex items-center rounded bg-blue-100 px-3 py-1.5 text-xs font-medium text-blue-700 sm:mb-6 sm:text-sm">
              <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-600" />
              {badgeText}
            </div>
            <h2 className="mb-4 text-2xl font-bold leading-tight sm:mb-6 sm:text-3xl">
              <span className="text-gray-900">{title}</span>
              <span className="text-blue-600">{subtitle}</span>
            </h2>
            <div className={mainCardClass}>
              <div className="mb-3 flex items-center sm:mb-4">
                <div className={iconContainerClass}>
                  <QrCodeIcon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">扫码了解更多</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {qrItems.map((item, i) => (
                  <div key={i} className={qrCardClass}>
                    <div className={qrImageClass}>
                      <Image
                        src={item.imageSrc}
                        alt={item.imageAlt || item.title}
                        width={120}
                        height={120}
                        className="h-full w-full"
                        loading="lazy"
                      />
                    </div>
                    <p className="text-sm font-bold text-gray-900">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-4">
              <Button className="h-auto min-h-[44px] bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 sm:min-h-[48px] sm:px-8 sm:text-base" href={applyDeviceHref}>
                <svg className="mr-2 h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                申请设备
              </Button>
              <Button variant="outline" className="h-auto min-h-[44px] border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 sm:min-h-[48px] sm:px-8 sm:text-base" href={contactServiceHref}>
                <svg className="mr-2 h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                联系客服
              </Button>
            </div>
          </div>

          <div className="order-1 flex w-full justify-center lg:order-2 lg:w-1/2">
            <div className="relative w-full max-w-md lg:max-w-none">
              <div className="w-full bg-[#f3f5f8] rounded border-2 border-white shadow-[8px_8px_20px_rgba(55,99,170,0.1),-8px_-8px_20px_#fff] transition-[box-shadow] duration-300 ease-in-out hover:shadow-[12px_12px_30px_rgba(55,99,170,0.15),-12px_-12px_30px_#fff] p-8 box-border">
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  width={600}
                  height={400}
                  className="h-auto w-full"
                  priority
                />
                <div className="mt-3 flex items-center justify-between sm:mt-4">
                  <div>
                    <h4 className="text-xs font-medium text-gray-900 sm:text-sm">关注我们</h4>
                    <p className="text-xs text-gray-500">一站式数字支付运营解决方案</p>
                  </div>
                  <div className="flex space-x-1 sm:space-x-2">
                    <div className="h-1.5 w-1.5 rounded-full bg-red-500 sm:h-2 sm:w-2" />
                    <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 sm:h-2 sm:w-2" />
                    <div className="h-1.5 w-1.5 rounded-full bg-green-500 sm:h-2 sm:w-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Followus
