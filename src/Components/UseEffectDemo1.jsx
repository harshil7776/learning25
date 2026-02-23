import React, { useEffect, useState } from 'react'

export const UseEffectDemo1 = () => {

    const [count, setcount] = useState(0)

    // useEffect(()=>{
    //     console.log("Use Effect Called...")

    // },[])

    
    useEffect(()=>{
        console.log("Use Effect Called...")

    },[count])


  return (
    <div style={{textAlign:"center"}}>
        <h1>Use Effect Demo 1</h1>
        <button onClick={()=>{setcount(count+1)}}>INCRIMENT {count}</button>
    </div>
  )
}
