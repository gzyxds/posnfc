import { JSX } from 'react/jsx-runtime'
import Image from 'next/image'
import styles from './css/Logoclouds.module.css'
import { Container } from './Container'

/**
 * Logo云展示组件 - 带有水平滚动效果
 * 展示合作伙伴或客户的logo，支持无限循环滚动
 */
export default function Example() {
  // Logo数据数组
  const allLogos = [
    {
      alt: 'Transistor',
      src: '/images/Logoclouds/Logoclouds1.jpg',
    },
    {
      alt: 'TencentCloud',
      src: '/images/Logoclouds/Logoclouds2.jpg',
    },
    {
      alt: 'Tuple',
      src: '/images/Logoclouds/logo-tencent.png',
    },
    {
      alt: 'SavvyCal',
      src: '/images/Logoclouds/Logoclouds3.png',
    },
    {
      alt: 'Statamic',
      src: '/images/Logoclouds/Logoclouds4.png',
    },
    {
      alt: 'Alibaba Cloud',
      src: '/images/Logoclouds/logo-qcloud-1.png',
    },
    {
      alt: 'ByteDance',
      src: '/images/Logoclouds/logo-qcloud-2.png',
    },
    {
      alt: 'Tencent',
      src: '/images/Logoclouds/logo-qcloud-3.png',
    },
    {
      alt: 'Huawei Cloud',
      src: '/images/Logoclouds/logo-qcloud-4.png',
    },
    {
      alt: 'Huawei Cloud',
      src: '/images/Logoclouds/Logoclouds5.png',
    },
    {
      alt: 'Huawei Cloud',
      src: '/images/Logoclouds/Logoclouds6.png',
    },
    {
      alt: 'Huawei Cloud',
      src: '/images/Logoclouds/Logoclouds7.png',
    },
    {
      alt: 'Huawei Cloud',
      src: '/images/Logoclouds/Logoclouds8.png',
    },
    {
      alt: 'Huawei Cloud',
      src: '/images/Logoclouds/Logoclouds9.png',
    },
  ]

  // 将logo分成三组，增加每组的logo数量，让展示更丰富
  const logosRow1 = allLogos.slice(0, 5)  // 第一排显示5个logo
  const logosRow2 = allLogos.slice(5, 10) // 第二排显示5个logo
  const logosRow3 = allLogos.slice(10, 15) // 第三排显示5个logo

  /**
   * 渲染单排logo滚动组件
   * @param {Array} logos - logo数组
   * @param {string} rowKey - 行标识符
   * @param {string} animationClass - 动画样式类
   * @returns {JSX.Element} 单排logo滚动组件
   */
  const renderLogoRow = (
    logos: Array<any>,
    rowKey: string,
    animationClass: string,
  ): JSX.Element => (
    <div className="mb-8 overflow-hidden">
      <div className={`flex space-x-16 ${animationClass}`}>
        {/* 第一组logo */}
        {logos.map((logo, index) => (
          <div
            key={`${rowKey}-first-${index}`}
            className={`flex-shrink-0 ${styles.logoItem}`}
          >
            <Image
              alt={logo.alt}
              src={logo.src}
              width={158}
              height={48}
              className={styles.logoImage}
            />
          </div>
        ))}
        {/* 第二组logo（用于无缝循环） */}
        {logos.map((logo, index) => (
          <div
            key={`${rowKey}-second-${index}`}
            className={`flex-shrink-0 ${styles.logoItem}`}
          >
            <Image
              alt={logo.alt}
              src={logo.src}
              width={158}
              height={48}
              className={styles.logoImage}
            />
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="bg-white py-6 sm:py-8">
      <Container>
        {/* 第一排 - 正向滚动 */}
        {renderLogoRow(logosRow1, 'row1', styles.scrollContainer)}

        {/* 第二排 - 反向滚动 */}
        {renderLogoRow(logosRow2, 'row2', styles.scrollContainerReverse)}

        {/* 第三排 - 正向滚动（慢速） */}
        {renderLogoRow(logosRow3, 'row3', styles.scrollContainerSlow)}
      </Container>
    </div>
  )
}
