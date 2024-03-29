'use client'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { PropsWithChildren, useEffect, useMemo, useRef, useState } from 'react'

import { DarkThemeToggle, Navbar } from 'flowbite-react'
import Theme from './theme'

import { FiPhoneCall, FiMail } from 'react-icons/fi'
import { HiOutlineLocationMarker } from 'react-icons/hi'

import { CONTRACT_US, ROUTES } from '@/constants'

export interface AppProps {}

const NAV_LINKS = [
  // {
  //   key: 'home-page-container',
  //   path: ROUTES.HOME,
  //   name: 'หน้าหลัก',
  // },
  {
    key: 'our-services-section',
    path: ROUTES.HOME,
    name: 'บริการของเรา',
  },
  {
    key: 'request-process-section',
    path: ROUTES.HOME,
    name: 'ขั้นตอนการยื่นกู้',
  },
  { key: 'qualification-section', path: ROUTES.HOME, name: 'คุณสมบัติของผู้กู้' },
  { key: 'article-section', path: ROUTES.HOME, name: 'บทความน่ารู้' },
  { key: 'footer', path: ROUTES.HOME, name: 'ติดต่อเรา' },
]

export function App(props: PropsWithChildren<AppProps>) {
  const { children } = props

  const router = useRouter()
  const pathname = usePathname()

  const [isReady, setIsReady] = useState<boolean>(false)
  const [scrollY, setScrollY] = useState<number>(global?.window && window.screenY)
  const [activeNavLink, setActiveNavLink] = useState<string | null>(null)

  const subHeaderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    handleScroll()
    setIsReady(true)
    //add eventlistener to window
    window.addEventListener('scroll', handleScroll)
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    handleScroll()
  }, [pathname])

  const handleScroll = () => {
    const scrollY = window.scrollY
    const subHeaderHeight = subHeaderRef.current?.clientHeight ?? 0

    const activeNavLink =
      [...NAV_LINKS].reverse().find((navLink) => {
        const el = document.getElementById(navLink.key)

        if (el) {
          if (scrollY > subHeaderHeight) {
            return el.offsetTop - subHeaderHeight <= scrollY + subHeaderHeight
          }

          return el.offsetTop <= scrollY
        }

        return false
      })?.key ?? null

    setScrollY(scrollY)
    setActiveNavLink(activeNavLink)
  }

  const contactUs = useMemo(
    () => [
      {
        icon: <FiPhoneCall size={24} />,
        labels: [
          {
            label: CONTRACT_US.TEL.LABEL,
            href: CONTRACT_US.TEL.HREF,
          },
          { label: CONTRACT_US.TEL2.LABEL, href: CONTRACT_US.TEL2.HREF },
        ],
      },
      {
        icon: <FiMail size={24} />,
        label: CONTRACT_US.EMAIL.LABEL,
        href: CONTRACT_US.EMAIL.HREF,
      },
      {
        icon: (
          <svg width={24} height={24} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path
                fill="currentColor"
                fillRule="nonzero"
                d="M22 10.69c0 1.787-.687 3.4-2.123 4.974-2.1 2.414-6.788 5.363-7.864 5.812-1.074.451-.911-.287-.874-.537l.137-.85c.034-.262.068-.65-.032-.9-.112-.277-.556-.424-.881-.492C5.558 18.059 2 14.7 2 10.69c0-4.475 4.487-8.118 10-8.118 5.512 0 10 3.643 10 8.118zm-3.6 3.625c1.113-1.22 1.6-2.361 1.6-3.625 0-3.268-3.51-6.118-8-6.118s-8 2.85-8 6.118c0 2.905 2.728 5.507 6.626 6.024l.147.026c1.078.226 1.884.614 2.329 1.708l.036.096c1.806-1.176 4.174-2.98 5.261-4.229zm-.262-4a.526.526 0 0 1 0 1.05h-1.463v.938h1.462a.525.525 0 1 1 0 1.049H16.15a.526.526 0 0 1-.522-.524V8.852c0-.287.235-.525.525-.525h1.988a.525.525 0 0 1-.003 1.05h-1.462v.938h1.462zm-3.213 2.513a.524.524 0 0 1-.526.522.515.515 0 0 1-.425-.208l-2.036-2.764v2.45a.525.525 0 0 1-1.047 0V8.852a.522.522 0 0 1 .52-.523c.162 0 .312.086.412.211l2.052 2.775V8.852c0-.287.235-.525.525-.525.287 0 .525.238.525.525v3.976zm-4.784 0a.527.527 0 0 1-.526.524.526.526 0 0 1-.523-.524V8.852c0-.287.236-.525.525-.525.289 0 .524.238.524.525v3.976zm-2.055.524H6.097a.528.528 0 0 1-.525-.524V8.852a.527.527 0 0 1 1.05 0v3.45h1.464a.525.525 0 0 1 0 1.05z"
              />
            </g>
          </svg>
        ),
        label: `ไลน์ไอดี ${CONTRACT_US.LINE.LABEL}`,
        href: CONTRACT_US.LINE.HREF,
      },
      {
        icon: <HiOutlineLocationMarker size={24} />,
        label: CONTRACT_US.ADDRESS.LABEL,
        href: CONTRACT_US.ADDRESS.HREF,
      },
    ],
    []
  )

  const handleNavigate = (navLink: (typeof NAV_LINKS)[0]) => {
    let timeOut = 0

    if (pathname !== navLink.path) {
      router.push(navLink.path)
      timeOut = 300
    }

    setTimeout(() => {
      const subHeaderHeight = subHeaderRef.current?.clientHeight ?? 0

      const el = document.getElementById(navLink.key)

      if (el) {
        window.scrollTo({ top: el.offsetTop - (subHeaderHeight + 22), behavior: 'smooth' })
      }
    }, timeOut)
  }

  return (
    <Theme>
      <div id={pathname === '/' ? 'home-page-container' : undefined} className="relative w-full h-full grid grid-rows-1fr-auto pt-[6.125rem]">
        <header
          className={`w-full fixed top-0 left-0 right-0 z-999 bg-primary-900 dark:bg-primary transition-transform ${
            isReady && scrollY > (subHeaderRef.current?.clientHeight ?? 0) ? '-translate-y-9' : 'translate-y-0'
          }`}
        >
          <div
            ref={subHeaderRef}
            className="w-full max-w-5xl lg:max-w-6xl 2xl:max-w-7xl h-9 flex justify-end items-center text-base font-normal leading-6 text-white px-2.5 mx-auto"
          >
            <span>
              <span>สอบถามเพิ่มเติม โทร. </span>
              <a className="hover:underline" href={CONTRACT_US.TEL.HREF}>
                {CONTRACT_US.TEL.LABEL}
              </a>
              <span>, </span>
              <a className="hover:underline" href={CONTRACT_US.TEL2.HREF}>
                {CONTRACT_US.TEL.LABEL}
              </a>
            </span>
          </div>
          <Navbar fluid className="min-h-[3rem]">
            <Navbar.Brand href={ROUTES.HOME}>
              <Image
                alt="New Money Logo"
                width={48}
                height={48}
                className="w-12 h-12 mr-2"
                src="/logo.jpg"
                loader={(load) => `${load.src}?w=${load.width}&q=${load.quality || 100}`}
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white block md:hidden lg:block">New Money</span>
            </Navbar.Brand>
            <div className="space-x-1">
              <DarkThemeToggle className="md:hidden" />
              <Navbar.Toggle />
            </div>
            <div className="flex items-center w-full md:w-auto space-x-1">
              <Navbar.Collapse>
                {NAV_LINKS.map((navLink, index) => (
                  <Navbar.Link key={`nav-link-${index}`} as="button" active={navLink.key === activeNavLink} onClick={() => handleNavigate(navLink)}>
                    {navLink.name}
                  </Navbar.Link>
                ))}
              </Navbar.Collapse>
              <DarkThemeToggle className="hidden md:block" />
            </div>
          </Navbar>
        </header>
        {children}
        <footer id="footer" className="relative w-full bg-footer bg-no-repeat bg-cover bg-center">
          <div className="bg-primary-900/30 dark:bg-primary/30 pt-7.5 pb-5">
            <div className="container px-2 sm:px-4 mx-auto">
              <section className="flex flex-row flex-wrap justify-between gap-x-6 gap-y-2">
                <article className="w-full max-w-89 py-2.5">
                  <Link className="text-2xl font-semibold leading-8 text-white" href={ROUTES.HOME}>
                    New Money
                  </Link>
                  <hr className="w-28 h-0.5 bg-white my-2.5" />
                  <p className="text-base font-normal leading-6 text-white">
                    บริการสินเชื่อธุรกิจ เงินกู้เร่งด่วน เงินด่วนเสริมสภาพคล่องธุรกิจ กู้ง่าย ฟรีประเมิณ วงเงินไม่เกิน 5 ล้านบาท
                  </p>
                </article>
                <article className="flex flex-wrap gap-6 py-2.5 lg:ml-auto">
                  <div className="min-w-89 flex flex-col gap-y-2">
                    <h5 className="text-xl font-semibold leading-7 text-white mb-3.5">ติดต่อเรา</h5>
                    {contactUs.map((contact, index) =>
                      contact.labels ? (
                        <span key={`footer-contact-${index}`} className="flex items-center gap-x-2">
                          <span className="text-secondary">{contact.icon}</span>
                          <span>
                            {contact.labels.map((label, index) => (
                              <span key={`footer-contact-label-${index}`}>
                                {index ? <span className="text-base font-normal leading-6 text-white">, </span> : null}
                                <a key={`footer-contact-${index}`} className="text-base font-normal leading-6 text-white" href={label.href} target="_blank">
                                  {label.label}
                                </a>
                              </span>
                            ))}
                          </span>
                        </span>
                      ) : (
                        <a key={`footer-contact-${index}`} className="flex items-center gap-x-2" href={contact.href} target="_blank">
                          <span className="text-secondary">{contact.icon}</span>
                          <span className="text-base font-normal leading-6 text-white">{contact.label}</span>
                        </a>
                      )
                    )}
                  </div>
                  <Image
                    src={'/images/M_273axokg_GW.png'}
                    width={178}
                    height={178}
                    alt={'line qr code'}
                    loader={(load) => `${load.src}?w=${load.width}&q=${load.quality || 100}`}
                  />
                </article>
              </section>
              <section className="w-full border-t text-center mt-7.5 pt-1">
                <span className="text-sm font-light leading-5 text-white">Copyright © 2023 New Money | Loan for Business. All rights reserved.</span>
              </section>
            </div>
          </div>
        </footer>
      </div>
    </Theme>
  )
}
