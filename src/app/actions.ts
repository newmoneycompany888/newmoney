'use server'

import type { Attachment } from 'nodemailer/lib/mailer'

import { formDataToJson, sendMail } from '@/utils'

export interface IApplyLoanValues {
  businessName: string
  businessType: string
  contactName: string
  contactPhone: string
  email: string
  identityID: string
  desiredAmount: string
  period: string
  address: string
  file: File | null
}

export const applyLoan = async (formData: FormData) => {
  try {
    const { businessName, businessType, contactName, contactPhone, email, identityID, desiredAmount, period, address, file } =
      formDataToJson<IApplyLoanValues>(formData)

    let attachment: Attachment | null = null

    if (file) {
      const arrayBuffer = await file.arrayBuffer()
      const buffer = Buffer.from(arrayBuffer)
      attachment = { filename: file.name, content: buffer }
    }

    return sendMail({
      from: `${contactName} <${email}>`,
      subject: 'ยื่นสมัครสินเชื่อ',
      html: `
        <div>
          <p>คุณ${contactName} ได้สมัครสินเชื่อ โดยมีรายละเอียดดังนี้:</p>
          <span style="white-space: pre-line;">
            ชื่อธุรกิจ (ที่จดทะเบียน): ${businessName} \n
            ประเภทธุรกิจ: ${businessType} \n
            ชื่อผู้ติดต่อ: ${contactName} \n
            เบอร์โทรติดต่อ: ${contactPhone} \n
            อีเมล: ${email} \n
            หมายเลขบัตรประชาชน: ${identityID} \n
            จำนวนเงินที่ต้องการ: ${desiredAmount} \n
            ระยะเวลา: ${period} \n
            ที่อยู่ปัจจุบัน: ${address || '-'}
          </span>
        </div>
      `,
      attachments: attachment ? [attachment] : [],
    })
  } catch (error) {
    console.error('error applyLoan', error)
  }
}
