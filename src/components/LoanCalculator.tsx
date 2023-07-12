'use client'
import React, { CSSProperties, FormEvent, useState } from 'react'

import classNames from 'classnames'

import { Button, Label, TextInput, Textarea } from 'flowbite-react'

export interface LoanCalculatorProps {
  className?: string
  style?: CSSProperties
}

const exceptThisSymbols = ['e', 'E', '+', '-', '.']

export function LoanCalculator(props: LoanCalculatorProps) {
  const { className, ...rest } = props

  const [loanCalculationResult, setLoanCalculationResults] = useState<number | null>(null)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)

    const loanAmount = Number(formData.get('loan_amount'))
    const loanInterestRate = Number(formData.get('loan_interest_rate'))
    const loanTerm = Number(formData.get('loan_term'))

    setLoanCalculationResults(Number(((loanAmount + loanAmount * (loanInterestRate / 100)) / (loanTerm * 12)).toFixed(2)))
  }

  return (
    <div
      className={classNames('w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700', className)}
      {...rest}
    >
      <h5 className="text-2xl font-semibold tracking-tight text-gray-900 dark:text-white mb-6">คำนวณสินเชื่อยอดชำระต่อเดือน</h5>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="loan_amount" value="จำนวนที่ต้องการกู้ (บาท)" className="required dark:text-gray-300 text-base font-medium" />
          <TextInput type="number" id="loan_amount" name="loan_amount" sizing="lg" className="text-base" required />
        </div>
        <div>
          <Label htmlFor="loan_interest_rate" value="อัตราดอกเบี้ย (%):" className="required dark:text-gray-300 text-base font-medium" />
          <TextInput type="number" id="loan_interest_rate" name="loan_interest_rate" sizing="lg" className="text-base" required />
        </div>
        <div>
          <Label htmlFor="loan_term" value="ระยะเวลาที่ขอกู้ (ปี):" className="required dark:text-gray-300 text-base font-medium" />
          <TextInput
            type="number"
            id="loan_term"
            name="loan_term"
            className="text-base"
            sizing="lg"
            onKeyDown={(e) => exceptThisSymbols.includes(e.key) && e.preventDefault()}
            onInput={(e) => {
              ;((e.target as HTMLInputElement) || '').value = ((e.target as HTMLInputElement) || '').value.replace(/[^0-9]/g, '')
            }}
            required
          />
        </div>
        <div className="flex items-center gap-x-4">
          <Button type="submit" color="primary" size="lg">
            คำนวณ
          </Button>
          <Button type="reset" color="gray" size="lg" onClick={() => setLoanCalculationResults(null)}>
            ล้างข้อมูล
          </Button>
        </div>
      </form>
      {loanCalculationResult && (
        <>
          <h6 className="text-xl font-medium leading-7 text-gray-900 dark:text-white underline mt-6 mb-4">ผลการคำนวณ</h6>
          <div className="flex justify-between items-end gap-x-4 text-base font-normal leading-none text-gray-700">
            <p className="pb-1">ยอดชำระต่อเดือน</p>
            <p>
              <span className="text-2xl font-bold leading-none tracking-wide text-primary mr-4"> {loanCalculationResult.toLocaleString()}</span>บาท
            </p>
          </div>
        </>
      )}
    </div>
  )
}
