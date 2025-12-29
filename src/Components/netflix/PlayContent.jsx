import React from 'react'
import { useParams } from 'react-router-dom'

export const PlayContent = () => {
    const data = useParams().id

  return (
    <div style={{textAlign:"center"}}>
        <h1>WATCHING...{data}</h1>
    </div>
  )
}
