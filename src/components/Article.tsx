'use client'

import { FC } from 'react'

interface IArticleProps {}

const articles = [
  {
    title: 'เตรียมเอกสารให้พร้อมก่อนขอสินเชื่อ',
    image: '/images/medium-shot-asian-woman-checking-business-documents.webp',
    shortContent: 'เอกสารขอสินเชื่อส่วนบุคคลมีอะไรบ้าง ต้องเตรียมตัวอย่างไร',
  },
  {
    title: 'เทคนิคปลดหนี้ในระยะเวลาอันสั้น',
    image: '/images/inspire-your-teamwork-keep-achieving-group-asian-team-creative-business-people-hand-raise-up-partner.webp',
    shortContent: 'สิ่งสำคัญของการปลดหนี้สินในระยะเวลาอันสั้นคือเราต้องรู้ว่าหนี้ทั้งหมดที่เรากำลังผ่อนชำระนั้นมีอยู่จำนวนเท่าไร',
  },
  {
    title: 'เทคนิคกู้สินเชื่อ อย่างไรให้อนุมัติไว',
    image: '/images/lifestyle-beautiful-asian-business-young-woman-using-laptop-computer-office-desk.webp',
    shortContent: 'เชื่อว่ามีเพื่อนหลายคนมีกำลังมองหาสินเชื่อเพื่อเสริมสภาพคล่องธุรกิจ',
  },
]

export const Article: FC<IArticleProps> = () => {
  return (
    <div>
      <div className="text-center mb-4 sm:mb-6 lg:mb-8">
        <h2 className="text-gray-900 dark:text-white text-xl md:text-2xl lg:text-3xl font-extrabold">บทความน่ารู้</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {articles.map((article, index) => (
          <article
            key={`article-${index}`}
            className="bg-white active:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-900 dark:active:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-md hover:shadow-2xl dark:hover:shadow-md cursor-pointer p-2 md:p-4"
          >
            <img className="w-full object-cover rounded-lg mb-2" src={article.image} alt="article" />
            <span className="bg-primary-100 dark:bg-primary-200 text-primary-800 dark:text-primary-900 text-xs font-semibold rounded px-2.5 py-0.5">
              บทความ
            </span>
            <h2 className="text-gray-900 dark:text-white text-xl font-bold my-2">{article.title}</h2>
            <p className="text-gray-500 dark:text-gray-400 font-light line-clamp-2">{article.shortContent}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
