import { FC } from 'react'
import { HiOutlineDocumentCheck, HiOutlineShieldCheck } from 'react-icons/hi2'

interface IQualificationProps {}

const QUANTICATIONS = [
  'เป็นเจ้าของธุรกิจ หรือ ผู้ประกอบการ',
  'มีที่พักอาศัยที่สามารถตรวจสอบได้ในพื้นที่ กรุงเทพฯ และใกล้เคียง',
  'มีหน้างาน ออฟฟิศ โรงงาน หรือ บริษัทที่สามารถตรวจสอบได้',
  'ธุรกิจมีการจดทะเบียน บจก. หจก. หรือ จดทะเบียนพาณิชย์',
]

const DOCUMENTS = [
  'สำเนาประจำตัวบัตรประชาชน/สำเนาทะเบียนบ้าน',
  'สำเนาทะเบียนการค้า/ทะเบียนพาณิชย์/ใบจดทะเบียนประกอบการ',
  'สำเนาเอกสารแสดงรายได้ของกิจการ เช่น Statement , บิลเงินสด , หนังสือรับรองการหักภาษี ณ ที่จ่ายเป็นต้น',
  'รูปถ่ายที่พักอาศัยและสถานที่ประกอบธุรกิจหรือกิจการของลูกค้า',
]

export const Qualification: FC<IQualificationProps> = () => {
  return (
    <div className="grid md:grid-cols-5 gap-6 md:gap-6 lg:gap-12 py-6 lg:py-0">
      <div className="md:col-span-2 flex justify-center">
        <img
          src="/images/portrait-beautiful-young-asian-woman-smiles-with-action-yellow-wall.webp"
          alt="portrait-beautiful-young-asian-woman-smiles-with-action-yellow-wall"
          className="h-full object-cover rounded"
        />
      </div>

      <div className="md:col-span-3 space-y-6 lg:py-12">
        <div>
          <h3 className="text-primary dark:text-white text-2xl lg:text-3xl font-bold text-center md:text-left">คุณสมบัติของผู้ยื่นกู้สินเชื่อ</h3>
          <hr className="border-t border-t-gray-300 dark:border-t-gray-200 mt-3 mb-6" />
          <ul className="space-y-2 md:space-y-4">
            {QUANTICATIONS.map((quantication, index) => (
              <li key={`quantication-${index}`} className="flex items-center space-x-2">
                <HiOutlineShieldCheck className="shrink w-6 h-6 text-secondary-800 dark:text-secondary font-bold" />
                <span className="flex-1 text-sm sm:text-base text-gray-900 dark:text-white font-medium">{quantication}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-primary dark:text-white text-2xl lg:text-3xl font-bold text-center md:text-left">เอกสารสำหรับยื่นกู้สินเชื่อ</h3>
          <hr className="border-t border-t-gray-300 dark:border-t-gray-200 mt-3 mb-6" />
          <ul className="space-y-2 md:space-y-4">
            {DOCUMENTS.map((document, index) => (
              <li key={`document-${index}`} className="flex items-center space-x-2">
                <HiOutlineDocumentCheck className="shrink w-6 h-6 text-secondary-800 dark:text-secondary font-bold" />
                <span className="flex-1 text-sm sm:text-base text-gray-900 dark:text-white font-medium">{document}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
