import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { prisma } from '@/libs/prisma'

export const GET = async (request: NextRequest, { params: { id } }: { params: Record<'id', string> }) => {
  const blog = await prisma.blog.findFirst({ where: { id: +id } })

  return NextResponse.json(blog)
}

export const PATCH = async (request: NextRequest, { params: { id } }: { params: Record<'id', string> }) => {
  const body = await request.json()

  const blog = await prisma.blog.update({
    where: { id: +id },
    data: {
      title: body.title,
      slug: body.slug,
      image: body.image,
      shortContent: body.shortContent,
      content: body.content,
    },
  })

  return NextResponse.json(blog)
}
