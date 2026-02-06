import React from 'react'
import { useForm } from 'react-hook-form'
import "../../assets/CSS/formtask1.css";

export const FormTask1 = () => {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const submitHandler = (data) => {
        console.log(data)
    }

    const validateSchema = {

        gender: {
            required: {
                value: true,
                message: "Gender is required *"
            }
        },

        // hobbies: {

        // required : {
        //     value : true ,
        //     message : "Hobbies are required * "
        // },

        // min : {
        //     value : 3,
        //     message : "Min 3 hobbies required *"
        // }
        // hobbies: {

        //     required : {
        //             value : true ,
        //             message : "Hobbies are required * "
        //         },

        //     validate: (params) => {
        //       if (!params || params.length === 0)
        //         return "Hobbies are required *"

        //       if (params.length < 3)
        //         return "Min 3 hobbies required *"

        //       if (params.length > 3)
        //         return "Max 3 hobbies allowed *"

        //       return true
        //     }
        //   }

        hobbies: {
            validate: (p) =>
                p?.length === 3 || "Select exactly 3 hobbies *"
        },



        // },

        countries: {
            required: {
                value: true,
                message: "Country is required *"
            }
        },
        email: {
            required: {
                value: true,
                message: "Email is required *"
            },
            pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email *"
            }
        },
        password: {
            required: {
                value: true,
                message: "Pass is required *"
            },
            pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,16}$/,
                message: "min 8 char max 16 1 cap 1 small 1 number 1 special char [pattern]"
            }
        },
        age: {
            required: {
                value: true,
                message: "Age Required *"
            },
            min: {
                value: 18,
                message: "Min age is 18 *"
            },
            max: {
                value: 60,
                message: "Max age is 60 *"
            }
        }

    };


    return (
        <div style={{ textAlign: "center" }} className="form-container">
            <h1>FormTask1</h1>

            <form onSubmit={handleSubmit(submitHandler)} >
                <div class="form-options">
                    <label><h3>GENDER :</h3></label>  <br />
                    MALE<input type='radio' value='male' {...register("gender", validateSchema.gender)}></input><br />
                    FEMALE<input type='radio' value='female' {...register("gender", validateSchema.gender)}></input>
                    {errors.gender?.message}
                </div>
                <div>
                    <label><h3>HOBBIES :</h3></label><br />
                    TT<input type='checkbox' value='tt' {...register("hobbies", validateSchema.hobbies)}></input>
                    CRICKET<input type='checkbox' value='cricket' {...register("hobbies", validateSchema.hobbies)}></input>
                    FOOTBALL<input type='checkbox' value='football' {...register("hobbies", validateSchema.hobbies)}></input>
                    CHESS<input type='checkbox' value='chess' {...register("hobbies", validateSchema.hobbies)}></input>
                    VOLLYBALL<input type='checkbox' value='vollyball' {...register("hobbies", validateSchema.hobbies)}></input>
                    {errors.hobbies?.message}
                </div>
                <div>
                    <label><h3>COUNTRIES :</h3></label><br />

                    <select {...register("countries", validateSchema.countries)}>
                        <option value="" selected disabled>Select Country</option>
                        <option value="INDIA">INDIA</option>
                        <option value="USA">USA</option>
                        <option value="CANADA">CANADA</option>
                        <option value="DUBAI">DUBAI</option>
                    </select>

                    {errors.countries?.message}
                </div>

                <div>
                    <label><h3>EMAIL : </h3></label>
                    <input type='email' {...register("email", validateSchema.email)}></input>
                    {errors.email?.message}
                </div>
                <div>
                    <label><h3>PASSWORD :</h3></label>
                    <input type='password' {...register("password", validateSchema.password)}></input>
                    {errors.password?.message}
                </div>
                <div>
                    <label><h3>AGE : </h3></label>
                    <input type='number' {...register("age", validateSchema.age)}></input>
                    {errors.age?.message}
                </div>

                <div>
                    <input type='submit'></input>
                </div>


            </form>


        </div>
    )
}
