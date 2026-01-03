import React from 'react'
import { useParams } from 'react-router-dom'

export const BooksDescription = () => {
    const desc1 = useParams().id
  return (
    <div style={{textAlign : "center"}}>
        <h1>Description....{desc1}</h1>
    </div>
  )
}

