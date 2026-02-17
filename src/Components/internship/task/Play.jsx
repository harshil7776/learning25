import React from 'react'
import { useParams } from 'react-router-dom'

export const Play = () => {

    const teamName = useParams().id

  return (
    <div style={{textAlign:"center"}}>
        <h1>iplteam...{teamName}</h1>
    </div>
  )
}
