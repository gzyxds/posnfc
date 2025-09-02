import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Button } from '../src/components/Button'
import { Logo } from '../src/components/Logo'
import { SlimLayout } from '../src/components/SlimLayout'

export default function Custom404() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(2)
  const [shouldRedirect, setShouldRedirect] = useState(false)

  // 处理重定向到首页
  useEffect(() => {
    if (shouldRedirect) {
      router.push('/')
    }
  }, [shouldRedirect, router])

  // 处理.html结尾的URL和倒计时
  useEffect(() => {
    // 处理.html结尾的URL
    if (typeof window !== 'undefined') {
      const path = window.location.pathname
      if (path.endsWith('.html')) {
        // 移除.html后缀并重定向
        const newPath = path.replace(/\.html$/, '')
        window.location.href = newPath
        return
      }
    }

    // 倒计时功能
    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount <= 1) {
          clearInterval(countdownInterval)
          setShouldRedirect(true) // 触发重定向而不是直接调用router.push
          return 0
        }
        return prevCount - 1
      })
    }, 1000)

    return () => {
      clearInterval(countdownInterval)
    }
  }, [])

  return (
    <SlimLayout>
      <div className="flex items-center justify-between">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
        <div className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white shadow-sm">
          404 错误
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center">
        <div className="w-full max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">抱歉，当前页面无法访问</h1>
          <p className="mt-6 text-lg text-gray-600">
            当前页面已更新，正在返回首页...
          </p>

          <div className="mt-8 inline-flex items-center justify-center space-x-2 text-sm bg-blue-50 px-4 py-2 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-4 w-4 text-blue-600">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <span><span className="font-medium text-blue-600">{countdown}</span> 秒后自动返回首页...</span>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button href="/" color="blue" className="px-8 py-3">
              返回首页
            </Button>
            <Button href="/contact" variant="outline" className="px-8 py-3">
              联系我们
            </Button>
          </div>
        </div>
      </div>
    </SlimLayout>
  )
}