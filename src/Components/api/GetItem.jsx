// :--> get all items:

// https://node5.onrender.com/item

// reqyest header token :

// localstorage:

// axios.get("https://node5.onrender.com/item",{headers:{
// "Authorization":`Bearer localstorage.getItem("token")`
// }})

import axios from 'axios'
import React from 'react'

export const GetItem = () => {

    const item = async () => {

        const res = await axios.get("https://node5.onrender.com/item",{headers:{"Authorization":`Bearer ${localStorage.getItem("token")}`}})
        console.log(res.data)
        
    }


  return (
    <div style={{textAlign:"center"}}>
        <h1>Get Item</h1>
        <button onClick={item}>GET ITEM</button>
    </div>
  )
}
