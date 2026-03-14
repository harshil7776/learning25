import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

export const UseMemoDemo = () => {

    const [count, setcount] = useState(0)
    const [marks, setmarks] = useState(0)

    const randomNo = useMemo(()=>{
        return Math.floor(Math.random()*1000)
    },[marks])

  return (
    <div style={{textAlign:'center'}}>
        <h1>Use Memo Demo</h1>

        <button onClick={()=>{setcount(count+1)}}>INCREACE</button>
        <button onClick={()=>{setmarks(marks+1)}}>INCREACE MARKS</button>
        <h1>Count = {count}</h1>
        <h1>MARKS = {marks}</h1>
        <h1>RANDOM = {randomNo}</h1>
    </div>
  )
}
