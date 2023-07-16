import { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import type { OpenGraph } from 'next/dist/lib/metadata/types/opengraph-types'
import type { Twitter } from 'next/dist/lib/metadata/types/twitter-types'
import type { Blog as BlogModel } from '@prisma/client'

import { ENVIRONMENT } from '@/constants'

import { Blog } from '@/components'

interface IBlogPageProps {
  params: Record<'slug', string>
}

const getBlogList = async (hiddenID: number): Promise<BlogModel[]> => {
  const response = await fetch(`${ENVIRONMENT.baseUrl}/api/blog?hiddenID=${hiddenID}`, { next: { revalidate: 60 } })

  return response.json()
}

const getBlogSlugList = async (): Promise<BlogModel[]> => {
  const response = await fetch(`${ENVIRONMENT.baseUrl}/api/blog?slugOnly=1`, { next: { revalidate: 60 } })

  return response.json()
}

const getBlogBySlug = async (slug: string): Promise<BlogModel | null> => {
  const response = await fetch(`${ENVIRONMENT.baseUrl}/api/blog/slug/${slug}`, { next: { revalidate: 60 } })

  return response.json()
}

export const generateMetadata = async ({ params }: IBlogPageProps, parent: ResolvingMetadata): Promise<Metadata> => {
  const blog = await getBlogBySlug(decodeURIComponent(params.slug))

  const title = `${blog ? blog.title : 'ไม่พบบทความ'} - New Money`
  const description = blog?.shortContent ?? '-'

  const prev = await parent

  const prevOpenGrap = (prev?.openGraph ?? { type: 'website' }) as OpenGraph
  const prevTwitter = (prev?.twitter ?? { card: 'summary' }) as Twitter

  return {
    title,
    description,
    keywords: [],
    openGraph: {
      ...prevOpenGrap,
      title: title,
      description,
      images: blog
        ? {
            url: blog.image,
            alt: 'Blog',
          }
        : undefined,
    },
    twitter: {
      ...prevTwitter,
      title,
      description,
      images: blog
        ? {
            url: blog.image,
            alt: 'Blog',
          }
        : undefined,
    },
  }
}

export const generateStaticParams = async () => {
  const blogs = await getBlogSlugList()

  return blogs
}

const BlogPage = async ({ params }: IBlogPageProps) => {
  const blog = await getBlogBySlug(decodeURIComponent(params.slug))

  if (!blog) {
    notFound()
  }

  const blogs = await getBlogList(blog.id)

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
          <Blog blogs={blogs} />
        </div>
      </aside>
    </>
  )
}

export default BlogPage
