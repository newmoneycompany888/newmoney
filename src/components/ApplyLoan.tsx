'use client'

import { FC } from 'react'
import { Card } from 'flowbite-react'

interface IApplyLoadProps {}

export const ApplyLoad: FC<IApplyLoadProps> = () => {
  return (
    <Card className="w-full max-w-screen-lg mx-auto">
      <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-2 sm:mb-4">กรอกข้อมูล สมัครสินเชื่อธุรกิจ</h2>
      <p className="text-gray-500 dark:text-gray-400 sm:text-xl font-light text-center mb-8 sm:mb-12">เจ้าหน้าที่จะติดต่อกลับหาคุณทันที</p>
      <form action="#" className="space-y-8">
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div>
          <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
            Your message
          </label>
          <textarea
            id="message"
            rows={6}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a comment..."
          ></textarea>
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
        >
          Send message
        </button>
      </form>
    </Card>
  )
}
