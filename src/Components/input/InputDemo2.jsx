import React, { useState } from 'react'

export const InputDemo2 = () => {

    const [age, setage] = useState("")
    const [name, setname] = useState("");
    const [gender, setgender] = useState("");
    const [country, setcountry] = useState("");
    const [color, setcolor] = useState("");
    const [isSubmitted, setisSubmitted] = useState(false);

    const nameHandler = (event) => {
        console.log(event.target.value)
        setname(event.target.value)
    }

    const genderHandler = (event) => {
        console.log(event.target.value)
        setgender(event.target.value)
    }

    const countryHandler = (event) => {
        console.log(event.target.value)
        setcountry(event.target.value)
    }

    const colorHandler = (event) => {
        console.log(event.target.value)
        setcolor(event.target.value)
    }

    const submitHandler = (event) => {
        setisSubmitted(true)
    }
    const ageHandler = (event) => {
        console.log(event.target.value)
        setage(event.target.value)
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>INPUT DEMO 2</h1>
            <div>
                <label>Name : </label>
                <input type="text" onChange={(event) => { nameHandler(event) }} />
            </div>

            <div>
                <label >Age</label>
                <input type="number" onChange={(event)=>{ageHandler(event)}} />
            </div>

            <div>
                <label>GENDER</label>
                <br />
                Male :<input type="radio" name='gender' value="male" onChange={(event) => { genderHandler(event) }} />
                <br />
                FeMale :<input type="radio" name='gender' value="female" onChange={(event) => { genderHandler(event) }} />
            </div>
            <div>
                <label>SELECT COUNTRY</label>
                <select onChange={(event) => { countryHandler(event) }}>
                    <option value="india">INDIA</option>
                    <option value="canada">CANADA</option>
                    <option value="usa">USA</option>
                </select>
            </div>
            <div>
                <label>SELECT COLOR</label>
                <input type="color" onChange={(event) => { colorHandler(event) }} />
            </div>

            <div>
                <button onClick={submitHandler}>
                    SUBMIT
                </button>
            </div>

            <div style={{color:color}}>
                {
                    isSubmitted == true && <div>

                        <h1>OUTPUT</h1>
                        <h4>Name :{name}</h4>   
                        <h4>Gender :{gender}</h4>
                        <h4>Country : {country}</h4>
                        <h4>Color : {color}</h4>
                        <label>Age :{age}</label>
                    </div>
                }
            </div>
            <div>

            </div>

        </div>
    )
}
