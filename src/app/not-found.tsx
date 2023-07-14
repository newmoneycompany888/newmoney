'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'
import { Button } from 'flowbite-react'
import { ROUTES } from '@/constants'

const NotFound: FC = () => {
  const router = useRouter()

  return (
    <main className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-6 py-8 lg:py-16">
        <div className="flex flex-col items-center max-w-screen-sm space-y-4 mx-auto">
          <h1 className="text-primary-600 dark:text-primary-500 text-7xl lg:text-9xl font-extrabold tracking-tight">404</h1>
          <p className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight">Page Not Found</p>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-light">ขออภัย ไม่พบหน้าเว็บไซต์ที่คุณต้องการ</p>
          <Button type="submit" color="primary" onClick={() => router.push(ROUTES.HOME, { scroll: true })}>
            กลับหน้าหลัก
          </Button>
        </div>
      </div>
    </main>
  )
}

export default NotFound
