import React, { useContext } from 'react'
import { BookContext } from './BookContext'
import { BookList2 } from './BookList2'

export const BookList = () => {

    const {bookData} = useContext(BookContext)
    console.log("Book Data...",bookData)

  return (
    <div style={{width:"100%",border:"1px solid black",margin:"5px",height:"auto"}}>
        <h1>BookList</h1>
        <BookList2/>
    </div>
  )
}
