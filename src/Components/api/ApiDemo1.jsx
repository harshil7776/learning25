// Component -->
// function ---> get api ->
// reponse -->
// response.data -->
// response.data.message
// response.data.data..

// -->
// message browser-->
// useSatte --> messgae-->
// setMessage() -->{message}

// useSatet -->users
// setuser(res.data.data) ===[]

// array -->map -->iterate..
import axios from 'axios'
import React, { useState } from 'react'
import { data } from 'react-router-dom'

export const ApiDemo1 = () => {

    const [message, setmessage] = useState("")
    const [users, setusers] = useState([])

    const getUser = async() => {
        const response = await axios.get("https://node5.onrender.com/user/user/")
        console.log(response)
        console.log(response.data)
        console.log(response.data.message)

        setmessage(response.data.message)
        console.log(response.data.data)
        setusers(response.data.data)
    }

  return (
    <div style={{textAlign:"center"}}>

        <h1>Api Demo 1</h1>
        <button onClick={()=>{getUser()}}>GET</button>
        {message}
        {
            users.map((user)=>{
                return <table className='table table-dark'>
                    <thead>
                        <tr>
                            <th>{user.name}</th>
                            <th>{user._id}</th>
                            <th>{user.email}</th>
                            <th>{user.passward}</th>
                            <th>{user.age}</th>
                            <th>{user.isActive}</th>
                            <th>{user.__v}</th>
                        </tr>
                    </thead>
                </table>
            })
        }
    </div>
  )
}
