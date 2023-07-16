import React from 'react'

import { LoanCalculator } from './LoanCalculator'

export interface InterestRateLoanProps {}

export function InterestRateLoan(props: InterestRateLoanProps) {
  const {} = props

  return (
    <div className="grid md:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
      <div className="order-last md:order-none md:col-span-2">
        <LoanCalculator className="mx-auto" />
      </div>
      <article className="w-full flex flex-col justify-around gap-y-6 md:col-span-3">
        <div className="w-full text-center md:text-left">
          <h4 className="text-2xl font-semibold leading-8 text-secondary mb-1 whitespace-pre-line xs:whitespace-normal">{`สินเชื่ออัตราดอกเบี้ยต่ำ\n1% - 12% ต่อปี`}</h4>
          <h5 className="text-base md:text-lg lg:text-xl font-normal leading-6 text-white whitespace-pre-line mb-3">
            {`สินเชื่อเงินด่วน แบบใช้หมุนเวียนเพื่อธุรกิจ (OD) \nชำระดอกเบี้ยเฉพาะยอดที่เบิกใช้จริง สมัครไว้ใช้ยามฉุกเฉินไม่มีค่าใช้จ่าย`}
          </h5>
          <p className="text-sm lg:text-base font-normal leading-6 text-white">
            <b className="font-semibold">**หมายเหตุ**</b> ไม่มีนโยบายโอนเงินก่อนทุกกรณี เงื่อนไขเป็นไปตามที่บริษัทกำหนด
          </p>
        </div>

        <div className="w-full text-sm sm:text-base font-normal leading-7 text-gray-200">
          <h5 className="text-lg lg:text-xl font-semibold leading-7 text-gray-200 whitespace-pre-line">การคำนวณยอดชำระต่อเดือน</h5>
          <p>
            <u>ค่าใช้จ่ายในการชำระ สินเชื่อ มีดอกเบี้ย</u> โดยมีการคำนวณดังนี้
          </p>
          <p className="w-max bg-secondary/60 px-3 py-2 rounded-lg my-3">ยอดสินเชื่อ x อัตราดอกเบี้ย APR = ดอกเบี้ยต่อปี</p>
          <p className="mt-3 mb-2">
            <u>ตัวอย่างการคำนวณค่าใช้จ่ายในการขอสินเชื่อ</u>
          </p>
          <p>ลูกค้าขอสินเชื่อ 50,000 บาท ผ่อนชำระ 12 เดือน</p>
          <p className="mb-1">
            คำนวณดอกเบี้ย <span className="bg-secondary/60 rounded-md px-2 py-0.5">50,000 x 12% = 6,000</span> บาท
          </p>
          <p className="mb-1">
            รวมที่ต้องชำระทั้งสิ้น <span className="bg-secondary/60 rounded-md px-1 py-0.5">50,000 + 6,000 = 56,000</span> บาทต่อปี
          </p>
          <p>
            ค่าใช้จ่ายที่ต้องชำระรายเดือน{' '}
            <span className="bg-secondary/60 rounded-md px-1 py-0.5">
              56,000 / 12 = <b>4,666.67</b>
            </span>{' '}
            บาท
          </p>
        </div>
      </article>
    </div>
  )
}
