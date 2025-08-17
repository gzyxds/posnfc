import { JSX } from 'react/jsx-runtime';
import Image from 'next/image';
import styles from './css/Logoclouds.module.css';

/**
 * Logo云展示组件 - 带有水平滚动效果
 * 展示合作伙伴或客户的logo，支持无限循环滚动
 */
export default function Example() {
  // Logo数据数组
  const allLogos = [
    {
      alt: "Transistor",
      src: "/images/screenshots/logo-alibaba.svg",
    },
    {
      alt: "TencentCloud",
      src: "/images/screenshots/logo-bytedance.svg",
    },
    {
      alt: "Tuple",
      src: "/images/screenshots/logo-tencent.png",
    },
    {
      alt: "SavvyCal",
      src: "/images/screenshots/logo-huawei.svg",
    },
    {
      alt: "Statamic",
      src: "http://localhost:3000/images/logos/logo.svg",
    },
    {
      alt: "Alibaba Cloud",
      src: "/images/screenshots/logo-qcloud-1.png",
    },
    {
      alt: "ByteDance",
      src: "/images/screenshots/logo-qcloud-2.png",
    },
    {
      alt: "Tencent",
      src: "/images/screenshots/logo-qcloud-3.png",
    },
    {
      alt: "Huawei Cloud",
      src: "/images/screenshots/logo-qcloud-4.png",
    },
  ];

  // 将logo分成三组
  const logosRow1 = allLogos.slice(0, 3);
  const logosRow2 = allLogos.slice(3, 6);
  const logosRow3 = allLogos.slice(6, 9);

  /**
   * 渲染单排logo滚动组件
   * @param {Array} logos - logo数组
   * @param {string} rowKey - 行标识符
   * @param {string} animationClass - 动画样式类
   * @returns {JSX.Element} 单排logo滚动组件
   */
  const renderLogoRow = (logos: Array<any>, rowKey: string, animationClass: string): JSX.Element => (
    <div className="overflow-hidden mb-8">
      <div className={`flex space-x-16 ${animationClass}`}>
        {/* 第一组logo */}
        {logos.map((logo, index) => (
          <div key={`${rowKey}-first-${index}`} className={`flex-shrink-0 ${styles.logoItem}`}>
            <Image
              alt={logo.alt}
              src={logo.src}
              width={158}
              height={48}
              className={`h-12 w-auto object-contain ${styles.logoImage}`}
            />
          </div>
        ))}
        {/* 第二组logo（用于无缝循环） */}
        {logos.map((logo, index) => (
          <div key={`${rowKey}-second-${index}`} className={`flex-shrink-0 ${styles.logoItem}`}>
            <Image
              alt={logo.alt}
              src={logo.src}
              width={158}
              height={48}
              className={`h-12 w-auto object-contain ${styles.logoImage}`}
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="w-full">
        {/* 第一排 - 正向滚动 */}
        {renderLogoRow(logosRow1, 'row1', styles.scrollContainer)}

        {/* 第二排 - 反向滚动 */}
        {renderLogoRow(logosRow2, 'row2', styles.scrollContainerReverse)}

        {/* 第三排 - 正向滚动（慢速） */}
        {renderLogoRow(logosRow3, 'row3', styles.scrollContainerSlow)}
      </div>
    </div>
  )
}
