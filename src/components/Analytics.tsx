'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { seoConfig } from '@/config/seo.config'

/**
 * 统计分析组件
 * 集成多种统计工具：百度统计、Google Analytics、Microsoft Clarity
 */
export default function Analytics() {
  const { baidu, google, clarity } = seoConfig.analytics

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 初始化百度统计全局变量
      if (baidu) {
        window._hmt = window._hmt || []
      }
    }
  }, [baidu])

  return (
    <>
      {/* 百度统计 */}
      {baidu && (
        <Script
          id="baidu-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?${baidu}";
                var s = document.getElementsByTagName("script")[0]; 
                s.parentNode.insertBefore(hm, s);
              })();
            `,
          }}
        />
      )}

      {/* Google Analytics */}
      {google && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${google}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${google}');
              `,
            }}
          />
        </>
      )}

      {/* Microsoft Clarity */}
      {clarity && (
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${clarity}");
            `,
          }}
        />
      )}
    </>
  )
}

// TypeScript 全局声明
declare global {
  interface Window {
    _hmt: any[]
    dataLayer: any[]
    gtag: (...args: any[]) => void
    clarity: (...args: any[]) => void
  }
}