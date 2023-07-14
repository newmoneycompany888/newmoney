'use client'

import { useRouter } from 'next/navigation'
import { FC } from 'react'

import { BLOGS, ROUTES } from '@/constants'

interface IBlogProps {
  hiddenSlug?: string
}

export const Blog: FC<IBlogProps> = ({ hiddenSlug }) => {
  const router = useRouter()

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
      {BLOGS.filter((blog) => blog.slug !== hiddenSlug).map((blog, index) => (
        <article
          key={`blog-${index}`}
          className="bg-white active:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-800 dark:active:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg shadow-md hover:shadow-2xl dark:hover:shadow-md cursor-pointer p-2 md:p-4"
          onClick={() => router.push(ROUTES.BLOG.replace(':slug', blog.slug), { scroll: true })}
        >
          <img className="w-full object-cover rounded-lg mb-2" src={blog.image} alt="blog" />
          <span className="bg-primary-100 dark:bg-primary-200 text-primary-800 dark:text-primary-900 text-xs font-semibold rounded px-2.5 py-0.5">บทความ</span>
          <h2 className="text-gray-900 dark:text-white text-xl font-bold my-2">{blog.title}</h2>
          <p className="text-gray-500 dark:text-gray-400 font-light line-clamp-2">{blog.shortContent}</p>
        </article>
      ))}
    </div>
  )
}
