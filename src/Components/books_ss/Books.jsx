import React, { useState } from 'react'
import { BookContext } from './BookContext'
import { BookList } from './BookList'

export const Books = () => {
    const [bookCount, setbookCount] = useState(100)
    const [bookData, setbookData] = useState([
        { id: 101, name: "JAVA", price: 1000, qty: 10 },
        { id: 102, name: "C", price: 1000, qty: 20 },
        { id: 103, name: "CPP", price: 1000, qty: 30 },
        { id: 104, name: "PY", price: 1000, qty: 40 },
    ])

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Books</h1>

            <BookContext.Provider value={{ bookData, bookCount }}>
                <BookList></BookList>
            </BookContext.Provider>

        </div>
    )
}
