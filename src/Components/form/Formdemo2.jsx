//name email password lastname gender hobies country
import React from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo2 = () => {

    const {register , handleSubmit} = useForm();

    const submitHandler = (data) => {
        console.log(data);
    }

    const hobbiesHandler = (data) => {
        console.log(data);
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Formdemo2</h1>

        <form  onSubmit={handleSubmit(submitHandler)}>
            <div>
                <label>First Name</label>
                <input type='text' {...register("First Name")}></input>
            </div>
            <div>
                <label>Last Name</label>
                <input type='text' {...register("Last Name")}></input>
            </div>

            <div>
                <label>Password</label>
                <input type='password' {...register("Password")}></input>
            </div>
            <div>
                <label>E-mail</label>
                <input type='email' {...register("Email")}></input>
            </div>
            <div>
                <label>Gender</label><br />
                MALE :<input type='radio' value="male" {...register("Gender")}></input>
                <br />
                FEMALE :<input type='radio' value="female" {...register("Gender")}></input>
            </div>
            <div>
                <select  {...register("City")}>
                    <option value="">Select City</option>
                    <option>G-Nagar</option>
                    <option>Ahmedabad</option>
                    <option>Surat</option>
                    <option>Baroda</option>
                </select>
            </div>


            <div>
            <input type="submit" />

            </div>
        </form>

    </div>
  )
}
