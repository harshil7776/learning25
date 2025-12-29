import React from 'react'

export const UseStateDemo = () => {
    var count = 0;

    //user define func
    const increaseCount = () => {
        alert("increase count called..")
    }

    const decreaseCount = (x) => {
        alert("decrease count called...")
    }

  return (
    <div style={{textAlign : "center"}}>
        <h1>USE STATE DEMO 1</h1>
        <h2>Count : {count}</h2>
        <button onClick={increaseCount}>increase</button>
        <button onClick={decreaseCount}>decrease</button>
        <button onClick={()=>{decreaseCount(100)}}>Decrease 2</button>
    </div>
  )
}
