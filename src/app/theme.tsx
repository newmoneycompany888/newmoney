'use client'

import { FC, PropsWithChildren } from 'react'
import { Flowbite } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react'

const flowbiteTheme: CustomFlowbiteTheme = {
  card: {
    root: { children: 'flex h-full flex-col p-4 sm:p-6' },
  },
  navbar: {
    root: {
      inner: {
        base: 'container h-12 flex items-center justify-between gap-x-4 mx-auto',
      },
    },
    collapse: {
      base: 'w-full h-full md:flex md:items-center md:w-auto',
      list: ' flex flex-col md:flex-row md:space-x-1 text-sm lg:text-base font-semibold text-primary my-auto whitespace-nowrap',
    },
    link: {
      base: 'block rounded py-2 px-4',
      active: {
        on: 'bg-primary text-white',
        off: 'bg-transparent hover:bg-primary text-primary hover:text-white',
      },
    },
  },
}

interface IThemeProps extends PropsWithChildren {}

const Theme: FC<IThemeProps> = ({ children }) => {
  return <Flowbite theme={{ theme: flowbiteTheme }}>{children}</Flowbite>
}

export default Theme
