'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-features.jpg'
import screenshotExpenses from '@/images/screenshots/expenses.png'
import screenshotPayroll from '@/images/screenshots/payroll.png'
import screenshotReporting from '@/images/screenshots/reporting.png'
import screenshotVatReturns from '@/images/screenshots/vat-returns.png'

const features = [
  {
    title: '弹性计算',
    description:
      '提供多种类型的云服务器实例，支持按需扩展，灵活应对业务负载变化。',
    image: screenshotPayroll,
  },
  {
    title: '云存储',
    description:
      '高可靠、低成本的云存储服务，支持对象存储、文件存储和块存储等多种存储方案。',
    image: screenshotExpenses,
  },
  {
    title: '数据库服务',
    description:
      '提供关系型数据库、NoSQL数据库等多种类型的数据库服务，确保数据安全可靠。',
    image: screenshotVatReturns,
  },
  {
    title: '安全服务',
    description:
      '全方位的云安全解决方案，包括DDoS防护、WAF、SSL证书等多重安全保障。',
    image: screenshotReporting,
  },
]

export function PrimaryFeatures() {
  // 使用四种布局状态以适应更多设备尺寸
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical' | 'stacked' | 'compact'>(
    'horizontal',
  )

  useEffect(() => {
    // 添加更多断点以适应不同设备
    let xlMediaQuery = window.matchMedia('(min-width: 1280px)')
    let lgMediaQuery = window.matchMedia('(min-width: 1024px) and (max-width: 1279px)')
    let mdMediaQuery = window.matchMedia('(min-width: 768px) and (max-width: 1023px)')
    let smMediaQuery = window.matchMedia('(min-width: 640px) and (max-width: 767px)')
    let xsMediaQuery = window.matchMedia('(max-width: 639px)')

    function onMediaQueryChange() {
      if (xlMediaQuery.matches) {
        setTabOrientation('vertical')
      } else if (lgMediaQuery.matches) {
        setTabOrientation('horizontal')
      } else if (mdMediaQuery.matches) {
        setTabOrientation('horizontal')
      } else if (smMediaQuery.matches) {
        setTabOrientation('stacked')
      } else if (xsMediaQuery.matches) {
        setTabOrientation('compact')
      }
    }

    // 初始化布局
    onMediaQueryChange()
    
    // 监听屏幕尺寸变化
    xlMediaQuery.addEventListener('change', onMediaQueryChange)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)
    mdMediaQuery.addEventListener('change', onMediaQueryChange)
    smMediaQuery.addEventListener('change', onMediaQueryChange)
    xsMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      xlMediaQuery.removeEventListener('change', onMediaQueryChange)
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
      mdMediaQuery.removeEventListener('change', onMediaQueryChange)
      smMediaQuery.removeEventListener('change', onMediaQueryChange)
      xsMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="云计算核心功能"
      className="relative overflow-hidden bg-blue-600 pt-16 pb-20 sm:pt-20 sm:pb-28 md:py-32"
    >
      <Image
        className="absolute top-1/2 left-1/2 max-w-none translate-x-[-44%] translate-y-[-42%] opacity-30 sm:opacity-40 md:opacity-50 lg:opacity-70"
        src={backgroundImage}
        alt=""
        width={2245}
        height={1636}
        priority={false}
        loading="lazy"
        sizes="100vw"
        quality={90}
      />
      <Container className="relative">
        <div className="max-w-2xl md:mx-auto md:text-center xl:max-w-none">
          <h2 className="font-display text-xl tracking-tight text-white sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
            性能强大、安全、稳定的云产品
          </h2>
          <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg tracking-tight text-blue-100">
            多年技术沉淀，300+ 款产品共筑云产品矩阵
          </p>
        </div>
        <TabGroup
          className="mt-12 grid grid-cols-1 items-center gap-y-2 pt-8 sm:mt-16 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className={clsx(
                "-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:pb-0",
                tabOrientation === 'stacked' || tabOrientation === 'compact' ? "flex-col" : "flex-row",
                tabOrientation === 'vertical' ? "lg:col-span-5" : "lg:col-span-12",
                tabOrientation === 'stacked' || tabOrientation === 'compact' ? "sm:overflow-visible" : "sm:overflow-x-auto"
              )}>
                <TabList className={clsx(
                  "relative z-10",
                  tabOrientation === 'stacked' 
                    ? "flex flex-col gap-y-2 px-4 sm:px-0" 
                    : tabOrientation === 'compact'
                      ? "flex flex-col gap-y-1 px-3 sm:px-0"
                      : "flex flex-row gap-x-4 px-4 whitespace-nowrap sm:mx-auto sm:px-0",
                  tabOrientation === 'vertical'
                    ? "lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal"
                    : ""
                )}>
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-3 sm:px-4 py-1 transition-all duration-200 ease-in-out',
                        tabOrientation === 'vertical' ? 'lg:rounded-l-xl lg:rounded-r-none lg:p-6' : '',
                        (tabOrientation === 'stacked' || tabOrientation === 'compact') ? 'w-full' : '',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white/10 lg:ring-1 lg:ring-white/10 lg:ring-inset'
                          : 'hover:bg-white/10 lg:hover:bg-white/5',
                      )}
                    >
                      <h3>
                        <Tab
                          className={clsx(
                            'font-display text-sm sm:text-base md:text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 data-selected:not-data-focus:outline-hidden',
                            (tabOrientation === 'stacked' || tabOrientation === 'compact') ? 'w-full text-center' : '',
                            selectedIndex === featureIndex
                              ? 'text-blue-600 lg:text-white'
                              : 'text-blue-100 hover:text-white lg:text-white',
                          )}
                        >
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p
                        className={clsx(
                          'mt-2 hidden text-sm lg:block',
                          selectedIndex === featureIndex
                            ? 'text-white'
                            : 'text-blue-100 group-hover:text-white',
                        )}
                      >
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </TabList>
              </div>
              <TabPanels className={clsx(
                tabOrientation === 'vertical' ? "lg:col-span-7" : "lg:col-span-12",
                "mt-4 sm:mt-6 lg:mt-0"
              )}>
                {features.map((feature) => (
                  <TabPanel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <div className="absolute -inset-x-4 -top-26 -bottom-17 bg-white/10 ring-1 ring-white/10 ring-inset sm:inset-x-0 sm:rounded-t-xl" />
                      <p className="relative mx-auto max-w-2xl text-xs sm:text-sm md:text-base text-white sm:text-center py-3 sm:py-4">
                        {feature.description}
                      </p>
                    </div>
                    <div className={clsx(
                      "mt-4 sm:mt-6 md:mt-10 overflow-hidden rounded-xl bg-slate-50 shadow-xl shadow-blue-900/20",
                      tabOrientation === 'vertical' ? "lg:mt-0 lg:w-full" : "w-full sm:max-w-3xl mx-auto"
                    )}>
                      <Image
                        className="w-full"
                        src={feature.image}
                        alt={feature.title}
                        priority={selectedIndex === 0}
                        loading={selectedIndex === 0 ? "eager" : "lazy"}
                        sizes="(min-width: 1280px) 40vw, (min-width: 1024px) 50vw, (min-width: 768px) 70vw, 90vw"
                      />
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </>
          )}
        </TabGroup>
      </Container>
    </section>
  )
}
