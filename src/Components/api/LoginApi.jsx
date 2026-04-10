import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const LoginApi = () => {

    const { register, handleSubmit } = useForm()

    const submitHandler = async (data) => {
        const res = await axios.post("https://node5.onrender.com/user/login",  data )
        localStorage.setItem("token", res.data.data)

    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Login Api</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <label>ENTER E-MAIL :</label>
                <input {...register("email")} type='email'></input>
                <br /><br />
                <label>ENATER PASSWORD :</label>
                <input {...register("password")} type='password'></input>
                <br /><br />
                <button type='submit'>LOGIN</button>
            </form>

        </div>
    )
}
