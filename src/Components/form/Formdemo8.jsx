import React from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo8 = () => {

    const { register, handleSubmit, formState: { errors }, watch } = useForm({ mode: "onChange" })
    const password = watch("password", "")
    console.log("Watching password....", password)

    const submitHandler = (data) => {
        console.log(data)
    }

    const validateSchema = {
        passwordValidator: {
            required: {
                value: true,
                message: "Password is required *"
            }
        },

        conformPasswordValidator: {
            required: {
                value: true,
                message: "Password is required *"
            },

            validate: (params) => {
                console.log("here")
                return params === password || "Both password are different..."
            }
        }
    }

    const checkPassword = () => {
        if (password.length < 3) {
            return <span style={{ color: "red" }}>WEAK</span>
        }
        else if (password.length < 6) {
            return <span style={{ color: "orange" }}>AVG</span>
        }
        else {
            return <span style={{ color: "green" }}>STRONG</span>
        }
    };



    return (
        <div style={{ textAlign: "center" }}>
            <h1>Formdemo8</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>PASSWORD</label>
                    <input type='password' {...register("password", validateSchema.passwordValidator)}></input>
                    <br />
                    <span style={{ color: "red" }}>
                        {errors.password?.message}
                    </span>
                    <br />
                    {checkPassword}
                </div>
                <div>
                    <label>CONFORM PASSWORD</label>
                    <input type='password' {...register("conformPassword", validateSchema.conformPasswordValidator)}></input>
                    <br />
                    <span style={{color : "red"}}>

                    {errors.conformPassword?.message}
                    </span>
                </div>
                <div>
                    <input type='submit' value='submit'></input>
                </div>
            </form>

        </div>
    )
}
