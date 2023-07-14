import { FC } from 'react'
import { FaBlogger } from 'react-icons/fa'

const BlogNotFound: FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-6 py-8 lg:py-16">
        <div className="flex flex-col items-center max-w-screen-sm space-y-4 mx-auto">
          <FaBlogger className="text-primary-600 dark:text-primary-500 text-7xl lg:text-9xl" />
          <p className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight">Blog Not Found</p>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-light">ขออภัย ไม่พบบทความที่คุณต้องการ</p>
        </div>
      </div>
    </section>
  )
}

export default BlogNotFound
