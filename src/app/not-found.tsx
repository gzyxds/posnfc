'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import { SlimLayout } from '@/components/SlimLayout'

export default function NotFound() {
  const router = useRouter()
  const [countdown, setCountdown] = useState(2)
  
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
          router.push('/')
          return 0
        }
        return prevCount - 1
      })
    }, 1000)
    
    return () => {
      clearInterval(countdownInterval)
    }
  }, [router])
  
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">404</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">页面不存在</h1>
      <p className="mt-3 text-sm text-gray-700">
        抱歉，我们找不到您要访问的页面。
      </p>
      <p className="mt-2 text-xs text-gray-500">
        <span>{countdown}</span> 秒后自动返回首页...
      </p>
      <Button href="/" className="mt-10">
        返回首页
      </Button>
    </SlimLayout>
  )
}
