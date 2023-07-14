import { notFound } from 'next/navigation'

import { BLOGS } from '@/constants'

import { Blog } from '@/components'

interface IBlogPageProps {
  params: Record<'slug', string>
}

export const generateStaticParams = () => BLOGS.map((blog) => ({ slug: blog.slug }))

const BlogPage = ({ params }: IBlogPageProps) => {
  const blog = BLOGS.find((blog) => blog.slug === decodeURIComponent(params.slug))

  if (!blog) {
    notFound()
  }

  return (
    <>
      <main className="bg-white dark:bg-gray-900 pt-12 lg:pt-16 pb-16 lg:pb-24">
        <div className="container flex justify-between mx-auto px-4">
          <article className="w-full">
            <h1 className="text-gray-900 dark:text-white text-3xl lg:text-4xl font-extrabold mb-6 md:mb-8">{blog.title}</h1>
            <div className="flex justify-center mb-4 md:mb-6">
              <img src={blog.image} alt="blog" className="w-full max-w-2xl object-cover rounded-lg" />
            </div>
            <div dangerouslySetInnerHTML={{ __html: blog.content }} className="text-gray-900 dark:text-white" />
          </article>
        </div>
      </main>

      <aside className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <h2 className="text-gray-900 dark:text-white text-xl md:text-2xl font-bold mb-4 sm:mb-6 lg:mb-8">บทความที่เกี่ยวข้อง</h2>
          </div>
          <Blog hiddenSlug={blog.slug} />
        </div>
      </aside>
    </>
  )
}

export default BlogPage
