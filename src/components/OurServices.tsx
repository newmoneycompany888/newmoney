'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { Button } from 'flowbite-react'
import { FiPhoneCall } from 'react-icons/fi'

import { CONTRACT_US } from '@/constants'

interface IOurServicesProps {}

export const OurServices: FC<IOurServicesProps> = () => {
  return (
    <>
      <article className="relative lg:col-span-2 flex flex-col justify-center pb-12 md:pt-12">
        <h3 className=" text-xl md:text-2xl lg:text-3xl font-semibold text-gray-900 mb-1 md:mb-1.5">บริการสินเชื่อเงินด่วน สำหรับท่านเจ้าของกิจการ</h3>
        <p className="text-base lg:text-lg font-normal leading-6 text-gray-800">
          New Money คือผู้ให้บริการสินเชื่อเพื่อธุรกิจ สินเชื่อเร่งด่วน เงินกู้ เพื่อเสริมสภาพคล่องให้กับเจ้าของธุรกิจทุกประเภททุกขนาด ไม่ว่าจะเป็น ร้านค้า
          ร้านอาหาร ออฟฟิศ สำนักงาน โรงงาน และอื่นๆ อีกมากมาย
          <br />
          <br />
          เรามีทีมงานฝ่ายสินเชื่อพร้อมให้บริการประเมิน และตรวจสอบคุณสมบัติของผู้กู้ภายใน 2 ชั่วโมง เพื่ออำนวยความสะดวกสูงสุดให้กับผู้ขอยื่นกู้สินเชื่อ
        </p>
        <div className="w-full flex items-center gap-x-4 mx-auto mt-6">
          <Link href={CONTRACT_US.TEL.HREF} target="_blank">
            <Button color="tel" pill size="xl">
              <FiPhoneCall className="mr-2" size={24} />
              โทร.{CONTRACT_US.TEL.LABEL}
            </Button>
          </Link>
          <Link href={CONTRACT_US.LINE.HREF} target="_blank">
            <Button color="line" pill size="xl">
              <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={24} height={24} viewBox="0 0 48 48">
                <path
                  d="M25.12,44.521c-2.114,1.162-2.024-0.549-1.933-1.076c0.054-0.314,0.3-1.787,0.3-1.787c0.07-0.534,0.144-1.36-0.067-1.887 c-0.235-0.58-1.166-0.882-1.85-1.029C11.48,37.415,4.011,30.4,4.011,22.025c0-9.342,9.42-16.943,20.995-16.943S46,12.683,46,22.025 C46,32.517,34.872,39.159,25.12,44.521z M18.369,25.845c0-0.56-0.459-1.015-1.023-1.015h-2.856v-6.678 c0-0.56-0.459-1.015-1.023-1.015c-0.565,0-1.023,0.455-1.023,1.015v7.694c0,0.561,0.459,1.016,1.023,1.016h3.879 C17.91,26.863,18.369,26.406,18.369,25.845z M21.357,18.152c0-0.56-0.459-1.015-1.023-1.015c-0.565,0-1.023,0.455-1.023,1.015 v7.694c0,0.561,0.459,1.016,1.023,1.016c0.565,0,1.023-0.456,1.023-1.016V18.152z M30.697,18.152c0-0.56-0.459-1.015-1.023-1.015 c-0.565,0-1.025,0.455-1.025,1.015v4.761l-3.978-5.369c-0.192-0.254-0.499-0.406-0.818-0.406c-0.11,0-0.219,0.016-0.325,0.052 c-0.419,0.139-0.7,0.526-0.7,0.963v7.694c0,0.561,0.46,1.016,1.025,1.016c0.566,0,1.025-0.456,1.025-1.016v-4.759l3.976,5.369 c0.192,0.254,0.498,0.406,0.818,0.406c0.109,0,0.219-0.018,0.325-0.053c0.42-0.137,0.7-0.524,0.7-0.963V18.152z M36.975,20.984 h-2.856v-1.817h2.856c0.566,0,1.025-0.455,1.025-1.015c0-0.56-0.46-1.015-1.025-1.015h-3.879c-0.565,0-1.023,0.455-1.023,1.015 c0,0.001,0,0.001,0,0.003v3.842v0.001c0,0,0,0,0,0.001v3.845c0,0.561,0.46,1.016,1.023,1.016h3.879 c0.565,0,1.025-0.456,1.025-1.016c0-0.56-0.46-1.015-1.025-1.015h-2.856v-1.817h2.856c0.566,0,1.025-0.455,1.025-1.015 c0-0.561-0.46-1.016-1.025-1.016V20.984z"
                  fill="currentColor"
                ></path>
              </svg>
              Line {CONTRACT_US.LINE.LABEL}
            </Button>
          </Link>
        </div>
      </article>
      <div className="relative w-full max-w-80 lg:max-w-none md:pb-8 lg:pb-10 xl:pb-12">
        {/* // TODO: change image */}
        <Image className="-mt-10 md:-mt-6 lg:-mt-8 xl:-mt-10" width={900} height={1156} src={'/images/art04.jpeg'} alt="main image" />
      </div>
    </>
  )
}
