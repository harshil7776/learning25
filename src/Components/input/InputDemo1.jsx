import React, { use, useState } from 'react'
import { useActionData, useSearchParams } from 'react-router-dom'

export const InputDemo1 = () => {
    const [name, setname] = useState("");
    const [age, setage] = useState("");
    const [email, setemail] = useState("");
    const [number , setnumber] = useState("");
    const [address , setaddress] = useState("");

    const [showAddress , setShowAddress] = useState("");
    const [showName, setShowName] = useState("");
    const [showAge, setShowAge] = useState("");
    const [showEmail, setShowEamil] = useState("");
    const [showNumber , setShowNumber] = useState("");

    const addressHolder = (event) => {
        console.log(event.target.value)
        setaddress(event.target.value)
    }

    const nameHolder = (event) => {
        // console.log(event)
        console.log(event.target.value)
        setname(event.target.value)
    }

    const setAge = (event) => {
        // console.log(event)
        console.log(event.target.value)
        setage(event.target.value)
    }

    const setEmail = (event) => {
        console.log(event.target.value)
        setemail(event.target.value)
    }

    const setNumber = (event) => {
        console.log(event.target.value)
        setnumber(event.target.value)
    }


    return (
        <div style={{ textAlign: "center" }}>
            <h1>Input Demo 1</h1>
            <div>
                <label>NAME :  </label>
                <input type="text" placeholder='Enter name' onChange={(event) => { nameHolder(event) }} />
                <button onClick={() => setShowName(name)}>Enter</button>
                {/* <input type="submit" placeholder='Enter' onClick={(event)=>{name}}/> */}
                {/* {name} */}
            </div>
            <div>

                <label>AGE :  </label>
                <input type="number" placeholder='Enter Age' onChange={(event) => { setAge(event) }} />
                <button onClick={() => setShowAge(age)}>Enter</button>
                {/* <input type="submit" placeholder='Enter' onClick={(event)=>{name}}/> */}
                {/* {age} */}

            </div>
            <div>
                <label>E-Mail : </label>
                <input type="email" placeholder='Enter E-mail' onChange={(event) => { setEmail(event) }} />
                <button onClick={() => setShowEamil(email)}>Enter</button>
            </div>
            <div>
                <label>Phone Number : </label>
                <input type="number" placeholder='Enter number' onChange={(event) => {setNumber(event)}} />
                <button onClick={()=> setShowNumber(number)}>Enter</button>
            </div>
            <div>
                <label>Address : </label>
                <input type="text" placeholder='Enter Address' onChange={(event)=>{addressHolder(event)}} />
                <button onClick={()=> setShowAddress(address)}>Enter</button>
            </div>

            <hr color='red' />
            <p>Name : {showName}</p>
            <p>Age : {showAge}</p>
            <p>E-mail : {showEmail}</p>
            <p>Phone Number : {showNumber}</p>
            <p>Address : {showAddress}</p>
        </div>

    )
}
