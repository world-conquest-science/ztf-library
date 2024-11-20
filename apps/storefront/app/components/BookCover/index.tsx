import React from 'react'
import './book-cover.css'

export type TBookCover = {
  pictureUrl: string
  size?: 'big' | 'normal' | 'small'
}

const BookCover = ({ pictureUrl, size = 'big' }: TBookCover) => {
  const coverCssBackground = `linear-gradient(
      to right,
      rgba(0, 0, 0, 0.15) 1px,
      rgba(255, 255, 255, 0.5) 5px,
      rgba(255, 255, 255, 0.25) 7px,
      rgba(255, 255, 255, 0.25) 10px,
      transparent 12px,
      transparent 16px,
      rgba(255, 255, 255, 0.25) 17px,
      transparent 22px
    ),
    url(${pictureUrl})`

  return (
    <div className={`book-wrapper ${size}`}>
      <div className="cover" style={{ backgroundImage: coverCssBackground }} />
    </div>
  )
}

export { BookCover }
