'use client'

import { FC } from 'react'
import type { Blog as BlogModel } from '@prisma/client'

import { Blog } from './Blog'

interface IArticleProps {
  blogs: BlogModel[]
}

export const Article: FC<IArticleProps> = ({ blogs }) => {
  return (
    <div>
      <div className="text-center mb-4 sm:mb-6 lg:mb-8">
        <h2 className="text-gray-900 dark:text-white text-xl md:text-2xl lg:text-3xl font-extrabold">บทความน่ารู้</h2>
      </div>
      <Blog blogs={blogs} />
    </div>
  )
}
