import React from 'react'
import type { Blog } from '@prisma/client'

import { ApplyLoan, Article, Banner, CustomerGroup, ExperiencingIssue, InterestRateLoan, OurServices, Qualification, RequestProcess } from '@/components'

import { ENVIRONMENT } from '@/constants'

const getBlogList = async (): Promise<Blog[]> => {
  const response = await fetch(`${ENVIRONMENT.baseUrl}/api/blog`, {
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'ngrok-skip-browser-warning': 'true',
    }),
    next: { revalidate: 60 },
  })

  return response.json()
}

const HomePage = async () => {
  const blogs = await getBlogList()

  return (
    <main className="bg-white dark:bg-gray-900">
      <section>
        <Banner />
      </section>
      <section id="our-services-section" className="pt-10 -mt-10">
        <OurServices />
      </section>
      <section className="bg-gray-800 dark:bg-gray-800 pt-12 pb-16">
        <div className="container mx-auto px-4 xl:px-0">
          <ExperiencingIssue />
        </div>
      </section>
      <section className="bg-customer-group bg-no-repeat bg-cover">
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto px-4 xl:px-0">
            <CustomerGroup />
          </div>
        </div>
      </section>
      <section id="request-process-section" className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 xl:px-0">
          <RequestProcess />
        </div>
      </section>
      <section id="qualification-section" className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 xl:px-0">
          <Qualification />
        </div>
      </section>
      <section className="relative bg-loan-calculator bg-no-repeat bg-cover bg-center md:bg-right-top">
        <div className="w-full bg-gray-800 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-95 py-12">
          <div className="container mx-auto px-4 xl:px-0">
            <InterestRateLoan />
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 xl:px-0">
          <ApplyLoan />
        </div>
      </section>
      <section id="article-section" className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4 xl:px-0">
          <Article blogs={blogs} />
        </div>
      </section>
    </main>
  )
}

export default HomePage
