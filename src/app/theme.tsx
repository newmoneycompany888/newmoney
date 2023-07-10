'use client'

import { FC, PropsWithChildren } from 'react'
import { Flowbite } from 'flowbite-react'
import type { CustomFlowbiteTheme } from 'flowbite-react'

const flowbiteTheme: CustomFlowbiteTheme = {
  card: {
    root: { children: 'flex h-full flex-col p-4 sm:p-6' },
  },
}

interface IThemeProps extends PropsWithChildren {}

const Theme: FC<IThemeProps> = ({ children }) => {
  return <Flowbite theme={{ theme: flowbiteTheme }}>{children}</Flowbite>
}

export default Theme
