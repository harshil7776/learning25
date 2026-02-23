import axios from 'axios'
import React from 'react'
import { useForm, useFormState } from 'react-hook-form'
import { data, useFormAction } from 'react-router-dom'

export const ApiFormDemo1 = () => {

    const {register , handleSubmit} = useForm()

    const submitHandler = async (data) =>{
        
        const res = await axios.post("https://node5.onrender.com/user/user/",data)
        console.log(data)
    }

    // const addUser = async() => {
    //     onclick()   
    // }

 
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Api Form Demo 1</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>NAME :</label>
                    <input type='text' {...register("name")}></input>
                </div>
                <div>
                    <label>AGE :</label>
                    <input type='number' {...register("age")}></input>
                </div>
                <div>
                    <label>PASSWORD :</label>
                    <input type='password' {...register("password")}></input>
                </div>
                <div>
                    <label>EMAIL :</label>
                    <input type='email' {...register("email")}></input>
                </div>
                <div>
                    <label>isActive :</label><br />
                    TRUE<input type='radio' value='true' {...register("isActive")}></input>
                    FALSE<input type='radio' value='false' {...register("isActive")}></input>
                </div>
                <div>
                    <button type='submit'>ADD USER</button>
                </div>
            </form>
        </div>
    )
}
