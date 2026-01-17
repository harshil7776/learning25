import React, { useState } from 'react'

export const SelectDropDown = () => {

    const [selectdrop, setselectdrop] = useState("")

    const countryChange = (event) => {
        console.log(event.target.value)
    }

    
  return (
    <div style={{textAlign:"center"}}>

        <h1>Select Drop Down</h1>
        <label>Select Country </label>
        <select onChange={(event)=>{countryChange}}>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="canada">Canada</option>
        </select>
<br /><br />
        <label>Select State</label>
    <select onChange={(event)=>{}}>
        <option value="india">Gujarat</option>
        <option value="india">Maharastra</option>
        <option value="india">MP</option>
        <option value="usa">New York</option>
        <option value="usa">California</option>
        <option value="usa">WAshington DC</option>
        <option value="canada">Ontario</option>
        <option value="canada">Toronto</option>
        <option value="canada"></option>

    </select>


    </div>

  )
}
