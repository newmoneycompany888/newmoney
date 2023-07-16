'use client'

import { FC, PropsWithChildren } from 'react'
import { Flowbite } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react'

const flowbiteTheme: CustomFlowbiteTheme = {
  button: {
    color: {
      primary:
        'text-white bg-primary-700 border border-transparent enabled:hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:enabled:hover:bg-primary-700 dark:focus:ring-primary-800',
      secondary:
        'text-white bg-secondary-400 border border-transparent enabled:hover:bg-secondary-500 focus:ring-4 focus:ring-secondary-300 dark:focus:ring-secondary-900',
      tel: 'text-white bg-gradient-to-br from-primary-500 active:from-primary-600 to-primary active:to-primary-900 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-primary-300',
      line: 'text-white bg-gradient-to-br from-line-300 active:from-line-400 to-line active:to-line-600 enabled:hover:bg-gradient-to-bl focus:ring-4 focus:ring-line-300',
    },
  },
  card: {
    root: { children: 'flex h-full flex-col p-4 sm:p-6' },
  },
  textInput: {
    field: {
      input: {
        sizes: {
          lg: 'sm:text-md p-3',
        },
      },
    },
  },
  navbar: {
    root: {
      base: 'bg-white dark:border-gray-700 dark:bg-gray-800 shadow-navbar px-2 py-2.5 sm:px-4 ',
      inner: {
        base: 'container flex flex-wrap items-center justify-between gap-x-0.5 mx-auto',
      },
    },
    collapse: {
      base: 'w-full h-full md:flex md:items-center md:w-auto',
      list: 'flex flex-col md:flex-row md:space-x-1 text-sm lg:text-base font-semibold text-primary my-auto whitespace-nowrap mt-4 md:mt-0',
    },
    link: {
      base: 'block rounded mx-auto py-2 px-4',
      active: {
        on: 'bg-primary text-white',
        off: 'bg-transparent hover:bg-primary text-gray-900 dark:text-white hover:text-white',
      },
    },
  },
}

interface IThemeProps extends PropsWithChildren {}

const Theme: FC<IThemeProps> = ({ children }) => {
  return <Flowbite theme={{ theme: flowbiteTheme }}>{children}</Flowbite>
}

export default Theme
