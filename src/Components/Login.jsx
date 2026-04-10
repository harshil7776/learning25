import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {

    const navigate = useNavigate()

    const loginHandler = async() => {

        localStorage.setItem("token","12345")
        localStorage.setItem("role","user")
        navigate("/user")
    }

  return (
    <div>
        <h1>Login</h1>
        <button onClick={()=>{loginHandler()}}>LOGIN</button>
    </div>
  )
}
