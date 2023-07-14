import { ApplyLoan, Article, LoanCalculator, Qualification, RequestProcess } from '@/components'

const HomePage = () => {
  return (
    <main className="bg-white dark:bg-gray-900">
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <RequestProcess />
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <Qualification />
        </div>
      </section>
      <section className="relative bg-loan-calculator bg-no-repeat bg-cover bg-right-top">
        <div className="w-full bg-gray-800 dark:bg-gray-900 bg-opacity-90 dark:bg-opacity-95 py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:col-span-2 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-12">
              <div className="lg:col-span-2">
                <LoanCalculator className="mx-auto" />
              </div>
              <article className="w-full flex flex-col justify-around gap-y-6 lg:col-span-3">
                <div className="w-full">
                  <h4 className="text-2xl font-semibold leading-8 text-secondary mb-1">สินเชื่ออัตราดอกเบี้ยต่ำ 1% - 12% ต่อปี</h4>
                  <h5 className="text-xl font-normal leading-6 text-white whitespace-pre-line mb-3">
                    {`สินเชื่อเงินด่วน แบบใช้หมุนเวียนเพื่อธุรกิจ (OD) \nชำระดอกเบี้ยเฉพาะยอดที่เบิกใช้จริง สมัครไว้ใช้ยามฉุกเฉินไม่มีค่าใช้จ่าย`}
                  </h5>
                  <p className="text-base font-normal leading-6 text-white">
                    <b className="font-semibold">**หมายเหตุ**</b> ไม่มีนโยบายโอนเงินก่อนทุกกรณี เงื่อนไขเป็นไปตามที่บริษัทกำหนด
                  </p>
                </div>

                <div className="w-full text-base font-normal leading-7 text-gray-200">
                  <h5 className="text-xl font-semibold leading-7 text-gray-200 whitespace-pre-line">การคำนวณยอดชำระต่อเดือน</h5>
                  <p>
                    <u>ค่าใช้จ่ายในการชำระ สินเชื่อ มีดอกเบี้ย</u> โดยมีการคำนวณดังนี้
                  </p>
                  <p className="w-max bg-secondary/60 px-3 py-2 rounded-lg my-3">ยอดสินเชื่อ x อัตรดอกเบี้ย APR = ดอกเบี้ยต่อปี</p>
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
          </div>
        </div>
      </section>
      <section className="bg-white dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <ApplyLoan />
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <Article />
        </div>
      </section>
    </main>
  )
}

export default HomePage
