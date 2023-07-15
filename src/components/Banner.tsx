'use client'
import React from 'react'

export interface BannerProps {}

const HIGHLIGHTS = [{ LABEL: 'ให้วงเงินสูง\nดอกเบี้ยต่ำ' }, { LABEL: 'ปรึกษา\nเราได้ฟรี' }, { LABEL: 'เอกสาร\nไม่ยุ่งยาก' }, { LABEL: `ปิดยอด\nได้ตลอดเวลา` }]

export function Banner(props: BannerProps) {
  const {} = props

  return (
    <div className="relative bg-white dark:bg-gray-900">
      {/* // TODO: Navbar Image 1440 X 500 */}
      <svg className="w-full h-auto text-white dark:text-gray-900" viewBox="0 0 1440 500" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="1440" height="500" fill="currentColor" />
      </svg>
      <div className="absolute container h-full  inset-0 flex items-center justify-end mx-auto px-4 xl:px-0">
        <article className="relative w-max h-full flex flex-col justify-evenly gap-y-4 py-12">
          <div>
            <h1 className="text-4xl font-semibold leading-10 text-black dark:text-white tracking-wider">บริการสินเชื่อเงินด่วน</h1>
            <h2 className="text-3xl font-medium leading-9 text-gray-900 dark:text-gray-50 tracking-wider">เพิ่มสภาพคล่องให้กับธุรกิจ</h2>
            <p className="text-base font-medium leading-6 text-gray-700 dark:text-gray-300 tracking-wider mt-1">สำหรับท่านเจ้าของกิจการ ทั้งขนาดเล็กและใหญ่</p>
          </div>
          <div className="flex flex-row gap-x-6">
            {HIGHLIGHTS.map((highlight, index) => (
              <div
                key={`highlight-${index}`}
                className={
                  'transition-transform ' +
                  (index % 2 === 0 ? 'w-28 h-28 mt-8' : 'w-24 h-24 mb-8') +
                  ' flex items-center justify-center bg-primary hover:bg-gradient-to-bl active:bg-gradient-to-br from-primary-500 to-primary rounded-full hover:scale-105'
                }
              >
                <span className="text-sm font-normal leading-5 text-white text-center whitespace-pre-line">{highlight.LABEL}</span>
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}
