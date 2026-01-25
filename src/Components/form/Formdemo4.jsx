import React from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo4 = () => {

    const {register , handleSubmit , formstate : {errors}} = useForm()

    const submitHandler = (data) => {
        console.log(data);
    }

    const validationSchema = {
        nameValidator : {
            required : {
                value : true ,
                message : "Name is required"
            },
            minLength : {
                value : 3 ,
                message : "min length is > 3"
            }
        },

        ageValidator : {
            required : {
                value : true,
                message :" Age is required *"
            },
        }

    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>
                Formdemo4
            </h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>NAME</label>
                    <input type='text' {...register("age" , validationSchema.ageValidator)}></input>
                    {errors.age?.message}
                </div>
                <div>
                    <input type='submit'></input>
                </div>
            </form>
        </div>
    )
}
