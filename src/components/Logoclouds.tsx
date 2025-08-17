import { JSX } from 'react/jsx-runtime';
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
      src: "https://img.alicdn.com/imgextra/i4/O1CN01cMRNZN1Q3rqeuFGkP_!!6000000001921-55-tps-296-37.svg",
    },
    {
      alt: "TencentCloud",
      src: "https://lf3-static.bytednsdoc.com/obj/eden-cn/shayvw_lmjsvc/ljhwZthlaukjlkulzlp/logo-theme-light.svg",
    },
    {
      alt: "Tuple",
      src: "https://dscache.tencent-cloud.cn/upload/uploader/tit-pc-5513af44600ae4e970a9022ac0c19011d6e2093b.png",
    },
    {
      alt: "SavvyCal",
      src: "https://res-static.hc-cdn.cn/cloudbu-site/china/zh-cn/wangxue/header/logo.svg",
    },
    {
      alt: "Statamic",
      src: "http://localhost:3000/images/logos/logo.svg",
    },
    {
      alt: "Alibaba Cloud",
      src: "https://main.qcloudimg.com/raw/366d552f24bc0b28361edba46477af9c.png",
    },
    {
      alt: "ByteDance",
      src: "https://main.qcloudimg.com/raw/a9d599a4d04b3b8cd1079409555e45ef.png",
    },
    {
      alt: "Tencent",
      src: "https://main.qcloudimg.com/raw/1582931a4de2929d6f5d6eb7362070a0.png",
    },
    {
      alt: "Huawei Cloud",
      src: "https://qcloudimg.tencent-cloud.cn/raw/4e2ba47c6ce08c7296e76101cd976595.png",
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
            <img
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
            <img
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
