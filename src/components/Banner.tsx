'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'

export interface BannerProps {}

const HIGHLIGHTS = [{ LABEL: 'ให้วงเงินสูง\nดอกเบี้ยต่ำ' }, { LABEL: 'ปรึกษา\nเราได้ฟรี' }, { LABEL: 'เอกสาร\nไม่ยุ่งยาก' }, { LABEL: `ปิดยอด\nได้ตลอดเวลา` }]

let timeout: NodeJS.Timeout
let timeoutMS: number = 7000

export function Banner(props: BannerProps) {
  const {} = props

  const bgBannerRef = useRef<HTMLDivElement | null>(null)

  const BG_BANNER_IMAGES = useMemo(
    () => [
      // TODO: change banner bg
      '/backgrounds/bg-banner-slide-1.jpeg',
      '/backgrounds/bg-banner-slide-2.jpeg',
    ],
    []
  )

  useEffect(() => {
    timeout = setInterval(() => {
      handleChangeBgBannerImage(0)
    }, timeoutMS)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChangeBgBannerImage = (current: number) => {
    clearTimeout(timeout)
    if (bgBannerRef?.current) {
      bgBannerRef?.current?.classList.remove('bg-opacity-100')
      bgBannerRef?.current?.classList.add('bg-opacity-0')
    }
    timeout = setTimeout(() => {
      const _current = (current + 1) % BG_BANNER_IMAGES.length
      if (bgBannerRef?.current) {
        bgBannerRef.current.style.backgroundImage = `url(${BG_BANNER_IMAGES[_current]})`
        bgBannerRef.current?.classList.add('bg-opacity-100')
      }
      timeout = setInterval(() => {
        handleChangeBgBannerImage(_current)
      }, timeoutMS)
    }, 500)
  }

  return (
    <div className="relative w-full bg-white">
      <div
        ref={bgBannerRef}
        className="w-full h-60 md:h-89 lg:h-125 bg-banner-slide-1 bg-no-repeat bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${BG_BANNER_IMAGES[0]})` }}
      >
        <div className="container mx-auto px-4 xl:px-0">
          <div className="w-max md:w-110 lg:w-122 xl:w-132 h-60 md:h-89 lg:h-125 flex flex-col justify-center md:justify-start ml-auto text-right lg:text-left py-10 lg:pt-24 xl:pt-20">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-semibold leading-8 xs:leading-9 sm:leading-10 lg:leading-tight text-black tracking-wider">
              บริการสินเชื่อเงินด่วน
            </h1>
            <h2 className="text-lg xs:text-xl sm:leading-2xl lg:text-3xl font-medium leading-7 xs:leading-7 sm:leading-8 lg:leading-9 text-gray-900 tracking-wider">
              เพิ่มสภาพคล่องให้กับธุรกิจ
            </h2>
            <p className="text-xs xs:text-sm sm:text-base lg:text-lg font-medium leading-4 xs:leading-5 sm:leading-6 lg:leading-7 text-gray-700 tracking-wider mt-1">
              สำหรับท่านเจ้าของกิจการ ทั้งขนาดเล็กและใหญ่
            </p>
          </div>
        </div>
      </div>
      <article className="w-full container md:absolute md:bottom-10 lg:bottom-24 xl:bottom-20 md:left-1/2 md:transform md:-translate-x-1/2 pt-6 md:pt-0 pb-14 md:pb-0 px-4 xl:px-0 mx-auto">
        <div className="flex flex-row justify-between xs:justify-evenly sm:justify-center md:justify-end sm:gap-x-6 md:gap-x-2 lg:gap-x-6 xl:gap-x-4">
          {HIGHLIGHTS.map((highlight, index) => (
            <div
              key={`highlight-${index}`}
              className={
                'transition-transform ' +
                (index % 2 === 0
                  ? 'w-20 xs:w-24 sm:w-28 md:w-28 xl:w-32 h-20 xs:h-24 sm:h-28 md:h-28 xl:h-32 md:mt-8 xl:mt-12'
                  : 'w-20 xs:w-24 sm:w-28 md:w-24 xl:w-28 h-20 xs:h-24 sm:h-28 md:h-24 xl:h-28 md:mb-8 xl:mb-12') +
                ' flex items-center justify-center bg-primary hover:bg-gradient-to-bl active:bg-gradient-to-br from-primary-500 to-primary rounded-full hover:scale-105'
              }
            >
              <span className="text-xs xs:text-sm xl:text-base font-normal leading-4 xs:leading-5 xl:leading-6 text-white text-center whitespace-pre-line">
                {highlight.LABEL}
              </span>
            </div>
          ))}
        </div>
      </article>
    </div>
  )
}
