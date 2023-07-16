import { FC } from 'react'

interface IRequestProcessProps {}

const REQUEST_PROCESSES = [
  {
    title: 'มีเอกสารเกี่ยวกับธุรกิจ',
    detail: 'มีเอกสารจดทะเบียนธุรกิจหรือหนังสือรับรองบริษัท',
    image: '/images/business-people-using-pencil-noting-laptop.webp',
  },
  {
    title: 'มีที่อยู่เป็นหลักแหล่ง',
    detail: 'มีเอกสารจดทะเบียนธุรกิจหรือหนังสือรับรองบริษัท',
    image: '/images/collaborative-process-multicultural-businesspeople-using-computer-presentation-communication-meeting.webp',
  },
  {
    title: 'เป็นเจ้าของกิจการ',
    detail: 'ต้องเป็นเจ้าของกิจการ หรือผู้ประกอบการ',
    image: '/images/proud-businessman-his-office.webp',
  },
  {
    title: 'มีเอกสารแสดงรายได้',
    detail: 'มีเอกสารแสดงรายรับรายจ่ายของตนเองและธุรกิจ',
    image: '/images/woman-doing-accounting.webp',
  },
]

export const RequestProcess: FC<IRequestProcessProps> = () => {
  return (
    <div className="text-center">
      <h2 className="text-primary dark:text-white text-2xl lg:text-3xl font-extrabold mb-0.5 md:mb-1">ขั้นตอนการขอสินเชื่อ</h2>
      <p className="text-base font-normal leading-6 text-gray-700 dark:text-gray-400">สำหรับผู้ที่สนใจยื่นกู้สินเชื่อกับเรา มีขั้นตอนดำเนินการดังต่อไปนี้</p>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mt-4 lg:mt-6">
        {REQUEST_PROCESSES.map((requestProcess, index) => (
          <div key={`request-process-${index}`}>
            <div className="bg-white rounded-md shadow-md mb-3 sm:mb-4 p-0.5">
              <img src={requestProcess.image} alt="request-process" className="w-full aspect-[3/2] object-cover rounded-md" />
            </div>
            <h4 className="dark:text-white text-xl md:text-base lg:text-lg xl:text-xl font-bold">{requestProcess.title}</h4>
            <p className="text-gray-500 dark:text-gray-400 text-sm">{requestProcess.detail}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
