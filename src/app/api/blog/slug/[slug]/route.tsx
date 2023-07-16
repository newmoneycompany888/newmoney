import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { prisma } from '@/libs/prisma'

export const GET = async (request: NextRequest, { params: { slug } }: { params: Record<'slug', string> }) => {
  const blog = await prisma.blog.findFirst({ where: { slug: slug } })

  return NextResponse.json(blog)
}
