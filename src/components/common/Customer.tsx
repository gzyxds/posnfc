"use client"

import { useState } from 'react';
import Image from 'next/image';
import { Container } from '@/components/Container';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

// 客户案例数据
const customers = [
  {
    id: 'bravesoft',
    name: 'Bravesoft',
    content: '我们选择了腾讯云提供的TDSQL解决方案，这帮助我们过渡到全球金融业务并提高了响应能力。我们利用开源的数据库架构提高了端到端的数字化水平。',
    logo: '/images/screenshots/logo-qcloud-1.png',
    media: {
      type: 'image',
      src: '/images/screenshots/solution-1.png',
      alt: 'Bravesoft案例'
    }
  },
  {
    id: 'bank-neo',
    name: 'Bank Neo Commerce',
    content: '我们选择了腾讯云提供的TDSQL解决方案，这帮助我们过渡到全球金融业务并提高了响应能力。我们利用开源的数据库架构提高了端到端的数字化水平。',
    logo: '/images/screenshots/logo-qcloud-2.png',
    media: {
      type: 'image',
      src: '/images/screenshots/solution-2.png',
      poster: '/images/screenshots/solution-2.png',
      alt: 'Bank Neo Commerce案例'
    }
  },
  {
    id: 'ookbee',
    name: 'OOKBEE',
    content: '通过腾讯云的CDN和存储解决方案，我们的内容分发速度提升了200%，用户体验显著改善，同时运营成本降低了30%。',
    logo: '/images/screenshots/logo-qcloud-3.png',
    media: {
      type: 'image',
      src: '/images/screenshots/solution-3.png',
      alt: 'OOKBEE案例'
    }
  },
  {
    id: 'blue',
    name: 'Blue',
    content: '借助腾讯云的AI和大数据分析能力，我们成功构建了智能推荐系统，用户留存率提升了45%，平台活跃度显著增长。',
    logo: '/images/screenshots/logo-qcloud-4.png',
    media: {
      type: 'image',
      src: '/images/screenshots/solution-5.png',
      alt: 'Blue案例'
    }
  }
];

/**
 * Customer组件 - 展示客户案例的左右布局界面
 * 左侧使用简洁的列表展示客户案例，右侧显示相关媒体
 * @returns {JSX.Element} Customer组件
 */
export default function Customer() {
  const [activeCustomer, setActiveCustomer] = useState('bank-neo');

  // 获取当前激活的客户案例
  const currentCustomer = customers.find(customer => customer.id === activeCustomer) || customers[0];

  return (
    <section className="bg-gradient-to-b from-white to-blue-50 py-12 sm:py-16 md:py-24">
      <Container>
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-2 sm:mb-0">
            选择腾讯云赋能全球业务成功的客户案例
          </h2>
          <a href="#" className="text-indigo-600 hover:text-indigo-500 flex items-center text-xs sm:text-sm font-medium">
            了解更多 <ChevronRightIcon className="h-3 w-3 sm:h-4 sm:w-4 ml-1" />
          </a>
        </div>

        {/* 移动端：先显示案例，再显示列表 */}
        <div className="block md:hidden mb-6">
          <div className="relative bg-black h-[250px] w-full mb-4 rounded-lg overflow-hidden">
            {currentCustomer.media.type === 'image' ? (
              <Image
                src={currentCustomer.media.src}
                alt={currentCustomer.media.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full relative">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster={currentCustomer.media.poster}
                >
                  <source src={currentCustomer.media.src} type="video/mp4" />
                  您的浏览器不支持视频标签
                </video>
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-6">
          {/* 左侧列表区 */}
          <div className="max-h-[350px] md:max-h-[400px] overflow-y-auto pr-2 md:pr-4 mb-6 md:mb-0">
            {customers.map((customer) => (
              <div 
                key={customer.id}
                className="mb-2 border-b border-gray-100 last:border-b-0"
              >
                <button
                  className="w-full text-left py-3 sm:py-4 px-4 sm:px-6 flex items-center justify-between"
                  onClick={() => setActiveCustomer(customer.id)}
                >
                  <span className={`text-base sm:text-lg font-medium ${activeCustomer === customer.id ? 'text-indigo-600' : 'text-gray-900'}`}>
                    {customer.name}
                  </span>
                  <ChevronDownIcon className={`h-5 w-5 ${activeCustomer === customer.id ? 'text-indigo-600 rotate-180' : 'text-gray-400'} transition-transform`} />
                </button>
                
                {activeCustomer === customer.id && (
                  <div className="px-4 sm:px-6 pb-3 sm:pb-4">
                    <p className="text-gray-600 text-sm sm:text-base">{customer.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* 右侧媒体展示 - 仅在平板及以上尺寸显示 */}
          <div className="hidden md:block relative bg-black h-[400px] rounded-lg overflow-hidden">
            {currentCustomer.media.type === 'image' ? (
              <Image
                src={currentCustomer.media.src}
                alt={currentCustomer.media.alt}
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full relative">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster={currentCustomer.media.poster}
                >
                  <source src={currentCustomer.media.src} type="video/mp4" />
                  您的浏览器不支持视频标签
                </video>
                <div className="absolute bottom-4 right-4 flex space-x-2">
                  <button className="p-1 bg-black/50 text-white rounded">
                    <span className="sr-only">暂停</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>
                  </button>
                  <button className="p-1 bg-black/50 text-white rounded">
                    <span className="sr-only">静音</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
                    </svg>
                  </button>
                  <button className="p-1 bg-black/50 text-white rounded">
                    <span className="sr-only">全屏</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}