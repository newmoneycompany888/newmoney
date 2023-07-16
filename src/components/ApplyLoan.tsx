'use client'

import { useTransition, type FC } from 'react'
import { Button, Card, Checkbox, FileInput, HelperText, Label, Select, TextInput, Textarea, Toast } from 'flowbite-react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import * as yup from 'yup'
import { toast } from 'react-hot-toast'
import { HiOutlineCheck } from 'react-icons/hi'

import { jsonToFormData } from '@/utils'

import { IApplyLoanValues, applyLoan } from '@/app/actions'

interface IApplyLoanProps {}

export interface IApplyLoanFormValues extends Omit<IApplyLoanValues, 'file'> {
  isAccept: boolean
  file: FileList | null
}

const validateSchema = yup.object().shape({
  businessName: yup.string().required('กรุณาระบุชื่อธุรกิจ (ที่จดทะเบียน)'),
  businessType: yup.string().required('กรุณาเลือกประเภทธุรกิจ'),
  contactName: yup.string().required('กรุณาระบุชื่อผู้ติดต่อ'),
  contactPhone: yup.string().required('กรุณาระบุเบอร์โทรติดต่อ'),
  email: yup.string().required('กรุณาระบุอีเมล').email('รูปแบบอีเมลไม่ถูกต้อง'),
  identityID: yup.string().required('กรุณาระบุหมายเลขบัตรประชาชน'),
  desiredAmount: yup.string().required('กรุณาระบุจำนวนเงินที่ต้องการ'),
  period: yup.string().required('กรุณาระบุระยะเวลา'),
  address: yup.string().nullable(),
  isAccept: yup.bool().oneOf([true], 'กรุณายินยอมข้อมูลข้างต้น'),
  file: yup.mixed<FileList>().nullable(),
})

const businessTypeList = [
  'ร้านขายยา',
  'คลีนิคเสริมความงามและสปา',
  'ขายสินค้าออนไลน์',
  'โรงงานอุตสาหกรรม',
  'คาร์แคร์-ประดับยนต์',
  'อู่ซ่อมรถยนต์-อู่ทำสีรถยนต์',
  'นำเข้า-ส่งออกสินค้า',
  'ขนส่งสินค้า',
  'โรงแรม-รีสอร์ท',
  'ขายวัสดุก่อสร้าง-ขายอุปกรณ์ไฟฟ้า',
  'บจก. หรือ หจก.',
  'อาชีพอื่นๆ',
]

export const ApplyLoan: FC<IApplyLoanProps> = () => {
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IApplyLoanFormValues>({
    resolver: yupResolver(validateSchema),
    defaultValues: {
      businessName: '',
      businessType: '',
      contactName: '',
      contactPhone: '',
      email: '',
      identityID: '',
      desiredAmount: '',
      period: '',
      address: '',
      isAccept: false,
      file: null,
    },
  })

  const handleSubmitApplyLoan = (data: IApplyLoanFormValues) => {
    const { file, isAccept, ...restData } = data

    if (isAccept) {
      const formData = jsonToFormData(restData)

      if (file) {
        formData.append('file', file[0])
      }

      startTransition(() => {
        applyLoan(formData)
          .then(() => {
            toast.custom(
              (message) => (
                <Toast>
                  <div className="inline-flex shrink-0 justify-center items-center h-8 w-8 bg-green-100 dark:bg-green-800 rounded-lg text-green-500  dark:text-green-200 mr-2">
                    <HiOutlineCheck className="h-5 w-5" />
                  </div>
                  <span>สมัครสินเชื่อสำเร็จ</span>
                  <Toast.Toggle onClick={() => toast.dismiss(message.id)} />
                </Toast>
              ),
              { duration: 3000 }
            )
          })
          .catch((error) => {
            console.error('error applyLoan', error)
          })
      })
    }
  }

  return (
    <Card className="w-full max-w-screen-lg mx-auto pt-8 pb-2">
      <h2 className="text-gray-900 dark:text-white text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center mb-2 sm:mb-4">กรอกข้อมูล สมัครสินเชื่อธุรกิจ</h2>
      <p className="text-gray-500 dark:text-gray-400 sm:text-xl font-light text-center mb-8 sm:mb-12">เจ้าหน้าที่จะติดต่อกลับหาคุณทันที</p>
      <form className="grid md:grid-cols-2 gap-2 sm:gap-4" onSubmit={handleSubmit(handleSubmitApplyLoan)}>
        <div className="space-y-1">
          <Label
            htmlFor="apply-loan-business-name"
            value="ชื่อธุรกิจ (ที่จดทะเบียน)"
            color={errors.businessName ? 'failure' : undefined}
            className="required dark:text-gray-300 text-sm font-medium"
          />
          <TextInput
            {...register('businessName')}
            id="apply-loan-business-name"
            type="text"
            color={errors.businessName ? 'failure' : undefined}
            placeholder="ชื่อธุรกิจ (ที่จดทะเบียน)"
            helperText={errors.businessName?.message}
          />
        </div>
        <div className="space-y-1">
          <Label
            htmlFor="apply-loan-business-type"
            value="ประเภทธุรกิจ"
            color={errors.businessType ? 'failure' : undefined}
            className="required dark:text-gray-300 text-sm font-medium"
          />
          <Select
            {...register('businessType')}
            id="apply-loan-business-type"
            color={errors.businessType ? 'failure' : undefined}
            placeholder="ประเภทธุรกิจ"
            helperText={errors.businessType?.message}
          >
            <option disabled value="">
              เลือกประเภทธุรกิจ
            </option>
            {businessTypeList.map((businessType, index) => (
              <option key={`business-type-option-${index}`}>{businessType}</option>
            ))}
          </Select>
        </div>
        <div className="space-y-1">
          <Label
            htmlFor="apply-loan-contact-name"
            value="ชื่อผู้ติดต่อ"
            color={errors.contactName ? 'failure' : undefined}
            className="required dark:text-gray-300 text-sm font-medium"
          />
          <TextInput
            {...register('contactName')}
            id="apply-loan-contact-name"
            type="text"
            color={errors.contactName ? 'failure' : undefined}
            placeholder="ชื่อผู้ติดต่อ"
            helperText={errors.contactName?.message}
          />
        </div>
        <div className="space-y-1">
          <Label
            htmlFor="apply-loan-contact-phone"
            value="เบอร์โทรติดต่อ"
            color={errors.contactPhone ? 'failure' : undefined}
            className="required dark:text-gray-300 text-sm font-medium"
          />
          <TextInput
            {...register('contactPhone')}
            id="apply-loan-contact-phone"
            type="text"
            color={errors.contactPhone ? 'failure' : undefined}
            placeholder="เบอร์โทรติดต่อ"
            helperText={errors.contactPhone?.message}
          />
        </div>
        <div className="space-y-1">
          <Label
            htmlFor="apply-loan-email"
            value="อีเมล"
            color={errors.email ? 'failure' : undefined}
            className="required dark:text-gray-300 text-sm font-medium"
          />
          <TextInput
            {...register('email')}
            id="apply-loan-email"
            type="email"
            color={errors.email ? 'failure' : undefined}
            placeholder="อีเมล"
            helperText={errors.email?.message}
          />
        </div>
        <div className="space-y-1">
          <Label
            htmlFor="apply-loan-identity-id"
            value="หมายเลขบัตรประชาชน"
            color={errors.identityID ? 'failure' : undefined}
            className="required dark:text-gray-300 text-sm font-medium"
          />
          <TextInput
            {...register('identityID')}
            id="apply-loan-identity-id"
            type="text"
            color={errors.identityID ? 'failure' : undefined}
            placeholder="หมายเลขบัตรประชาชน"
            helperText={errors.identityID?.message}
          />
        </div>
        <div className="space-y-1">
          <Label
            htmlFor="apply-loan-desired-amount"
            value="จำนวนเงินที่ต้องการ"
            color={errors.desiredAmount ? 'failure' : undefined}
            className="required dark:text-gray-300 text-sm font-medium"
          />
          <TextInput
            {...register('desiredAmount')}
            id="apply-loan-desired-amount"
            type="text"
            color={errors.desiredAmount ? 'failure' : undefined}
            placeholder="จำนวนเงินที่ต้องการ (ระบุจำนวนเงิน)"
            helperText={errors.desiredAmount?.message}
          />
        </div>
        <div className="space-y-1">
          <Label
            htmlFor="apply-loan-period"
            value="ระยะเวลา"
            color={errors.period ? 'failure' : undefined}
            className="required dark:text-gray-300 text-sm font-medium"
          />
          <TextInput
            {...register('period')}
            id="apply-loan-period"
            type="text"
            color={errors.period ? 'failure' : undefined}
            placeholder="ระยะเวลา (สูงสุด 180 วัน)"
            helperText={errors.period?.message}
          />
        </div>
        <div className="col-span-full space-y-1">
          <Label
            htmlFor="apply-loan-address"
            value="ที่อยู่ปัจจุบัน"
            color={errors.address ? 'failure' : undefined}
            className="dark:text-gray-300 text-sm font-medium"
          />
          <Textarea
            {...register('address')}
            id="apply-loan-address"
            color={errors.address ? 'failure' : undefined}
            placeholder="ที่อยู่ปัจจุบัน"
            helperText={errors.address?.message}
            rows={3}
            className="text-sm"
          />
        </div>
        <div className="space-y-1">
          <Label
            htmlFor="apply-loan-address"
            value="อัพโหลดไฟล์บัตรประชาชน"
            color={errors.address ? 'failure' : undefined}
            className="dark:text-gray-300 text-sm font-medium"
          />
          <FileInput
            {...register('file')}
            id="apply-loan-file"
            color={errors.file ? 'failure' : undefined}
            placeholder="เลือกไฟล์บัตรประชาชน"
            helperText={errors.file?.message}
          />
        </div>
        <div className="col-span-full">
          <div className="flex space-x-2">
            <Checkbox {...register('isAccept')} id="apply-loan-is-accept" />
            <div className="flex flex-col">
              <Label
                htmlFor="apply-loan-is-accept"
                value="สินเชื่อ New Money จะใช้ข้อมูลข้างต้นในการติดต่อท่าน และเพื่อวัตถุประสงค์ในการบริการสินเชื่อเท่านั้น"
                color={errors.isAccept ? 'failure' : undefined}
                className="dark:text-gray-300 text-sm font-medium"
              />
              {errors.isAccept ? <HelperText color="failure">{errors.isAccept.message}</HelperText> : null}
            </div>
          </div>
        </div>
        <Button type="submit" isProcessing={isPending} color="primary" className="col-span-full">
          ส่งข้อมูล
        </Button>
      </form>
    </Card>
  )
}
