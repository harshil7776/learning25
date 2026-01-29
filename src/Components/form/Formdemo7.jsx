import React from 'react'
import { useForm } from 'react-hook-form'
import { data } from 'react-router-dom'

export const Formdemo7 = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }

    const validateSchema = {
        nameValidator: {
            required: {
                value: true,
                message: "Name is required"
            },
            minLength: {
                value: 3,
                message: "Min length is 3"
            },
            maxLength: {
                value: 12,
                message: "Max length is 12"
            }
        },
        contactValidator: {
            required: {
                value: true,
                message: "contact is required*"
            },
            pattern: {
                value: /^[6-9]{1}[0-9]{9}$/,
                message: "invalid contact no"
            }
        },
        refCodeValidator: {
            required: {
                value: true,
                message: "Ref code is required *"
            },
            validate: (params) => {
                return refCode.includes(params) || "invalid ref code."
            }
        },
        hobbiesValidator :{
            required : {
                value : 2 ,
                message : "Min 2 hobbies should be selected *"
            }
        }
    }

    const refCode = ["dhirajsir", "insta", "mihir", "jagrut"]


    return (
        <div style={{ textAlign: "center" }}>
            <h1>Formdemo7</h1>

            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>NAME</label>
                    <input type='text' {...register("name", validateSchema.nameValidator)}></input>
                    {errors.name?.message}
                </div>
                <div>
                    <label>CONTACT</label>
                    <input type='text' {...register("contact", validateSchema.contactValidator)}></input>
                    {errors.contact?.message}
                </div>
                <div>
                    <label>REF CODE</label>
                    <input type='text' {...register("refcode", validateSchema.refCodeValidator)}></input>
                    {errors.refcode?.message}
                </div>

                <div>
                    <label>HOBBIES</label> 
                    <input type='checkbox'></input>
                    <br />
                    <label>
                    <input type='checkbox' value="tt" {...register("hobbies")}/>
                    TT
                    </label>

                    <label>
                        <input type='checkbox' value="chess" {...register("hobbies")}/>
                    Chess
                    </label>
                    <label>
                    <input type='checkbox' value="cricket" {...register("hobbies")}/>
                    Cricket
                    </label>

                </div>
                    



                <div>
                    <input type='submit'></input>
                </div>
            </form>
        </div>
    )
}
