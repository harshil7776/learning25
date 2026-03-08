import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate, useParams } from 'react-router-dom'

export const UpdateUser = () => {

    const id = useParams().id
    const navigate = useNavigate()

    // const {register,handleSubmit} = useForm({defaultValues:{name:"test",age:0,email:""}})
    const {register,handleSubmit} = useForm({defaultValues:async()=>{
        const res = await axios.get(`https://node5.onrender.com/user/user/${id}`)
        return res.data.data
    }})

    const submitHandler = async(data) => {
        console.log("data to update...",data)

        delete data._id
        const res = await axios.put(`https://node5.onrender.com/user/user/${id}`,data)
        console.log(res)

        if(res.status==200)
        {
            navigate("/apidemo1")
        }
    }

  return (
    <div style={{textAlign:'center'}}>
        <h1>UpdateUser...{id}</h1>
        <form onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>NAME</label>
                <input type='text' {...register("name")}></input>
            </div>
            <div>
                <label>EMAIL</label>
                <input type='text' {...register("email")}></input>
            </div>
            <div>
                <label>AGE</label>
                <input type='text' {...register("age")}></input>
            </div>
            <input type='submit' value="update"></input>
        </form>
    </div>
  )
}
