import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { prisma } from '@/libs/prisma'

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams

  const slugOnly = searchParams.get('slugOnly')
  const hiddenID = searchParams.get('hiddenID')

  const blogs = await prisma.blog.findMany({
    select: slugOnly && +slugOnly ? { slug: true } : undefined,
    where: hiddenID
      ? {
          id: {
            not: {
              equals: +hiddenID,
            },
          },
        }
      : undefined,
  })

  return NextResponse.json(blogs)
}

export const POST = async (request: NextRequest) => {
  const body = await request.json()

  const blog = await prisma.blog.create({
    data: {
      title: body.title,
      slug: body.slug,
      image: body.image,
      shortContent: body.shortContent,
      content: body.content,
    },
  })

  return new NextResponse(JSON.stringify(blog), { status: 201 })
}
