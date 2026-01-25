import React from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom'

export const Formdemo6 = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }

    const validationSchema = {
        nameValidator: {
            required: {
                value: 3,
                message: "min lemgth should be > 3"
            }
        },
        ageValidator: {
            required: {
                value: true,
                message: "age is required..."
            },
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Formdemo6</h1>

            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>NAME</label>
                    <input type='text' {...register("name", validationSchema.nameValidator)}></input>
                    {errors.name?.message}
                </div>

                <div>
                    <label>AGE</label>
                    <input type='number' {...register("age", validationSchema.ageValidator)}></input>
                    {errors.age?.message}
                </div>
        <div>
            <input type='submit'></input>
        </div>
            </form>

        </div>
    )
}
