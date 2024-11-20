import React from 'react'
import Image from 'next/image'

import blackIcon from '/public/images/ztf-library-black-icon.png'
import whiteIcon from '/public/images/ztf-library-white-icon.png'
import coloredIcon from '/public/images/ztf-library-colored-icon.png'
import coloredLogo from '/public/images/ztf-library-colored-logo.png'

interface TLogo {
  variant?: 'icon' | 'full'
  theme?: 'black' | 'white' | 'colored'
  width?: number
  height?: number
}

export const Logo = ({
  variant = 'full',
  theme = 'colored',
  width,
  height,
}: TLogo) => {
  let src = coloredLogo

  switch (theme) {
    case 'black':
      if (variant === 'icon') {
        src = blackIcon
      } else if (variant === 'full') {
        throw new Error('Logo not available')
      }
      break
    case 'white':
      if (variant === 'icon') {
        src = whiteIcon
      } else if (variant === 'full') {
        throw new Error('Logo not available')
      }
      break
    case 'colored':
      if (variant === 'icon') {
        src = coloredIcon
      } else if (variant === 'full') {
        src = coloredLogo
      }
      break
  }

  return (
    <Image
      src={src}
      alt="ZTF Library logo"
      priority
      width={width}
      height={height}
    />
  )
}
