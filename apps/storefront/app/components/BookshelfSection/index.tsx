import React from 'react'
import './bookshelf.css'

const BookshelfSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="bookshelf-container">
      <div className="bookshelf-background" />
      <div className="bookshelf" />
      <div className="bookshelf-shadow" />
      {children}
    </section>
  )
}

export { BookshelfSection }
