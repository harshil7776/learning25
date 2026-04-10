import React, { useContext } from 'react'
import { BookContext } from './BookContext'

export const BookList2 = () => {

    const{bookData,bookCount} =useContext(BookContext)
    console.log("BookList 2 ",bookData)
    console.log(bookCount)

  return (
    <div>
        <h1>Book List 2</h1>
    </div>
  )
}
