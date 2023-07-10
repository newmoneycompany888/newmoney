'use client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { PropsWithChildren } from 'react'

import { Navbar } from 'flowbite-react'
import Theme from './theme'

import { ROUTES } from '@/constants'

export interface AppProps {}

export function App(props: PropsWithChildren<AppProps>) {
  const { children } = props

  const router = useRouter()

  return (
    <Theme>
      <header className="bg-secondary">
        <div className="w-full max-w-5xl lg:max-w-6xl 2xl:max-w-7xl h-9 flex justify-end items-center gap-x-1.5 text-base font-normal leading-6 px-2.5 mx-auto">
          สอบถามเพิ่มเติม โทร.
          <a className="hover:underline" href="tel:0983456489">
            098-3456489
          </a>
        </div>
        <Navbar fluid>
          <Navbar.Brand href={ROUTES.HOME}>
            <Image alt="New Money Logo" width={48} height={48} className="w-10 lg:w-12 h-10 lg:h-12 mr-2 lg:mr-3" src="/logo.png" />
            <span className="self-center whitespace-nowrap text-base lg:text-xl font-semibold dark:text-white ">New Money</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="#">บริการของเรา</Navbar.Link>
            <Navbar.Link href="#">ขั้นตอนการยื่นกู้</Navbar.Link>
            <Navbar.Link href="#">คุณสมบัติของผู้กู้</Navbar.Link>
            <Navbar.Link href="#">บทความน่ารู้</Navbar.Link>
            <Navbar.Link href="#">ติดต่อเรา</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>
      </header>
      {children}
    </Theme>
  )
}
