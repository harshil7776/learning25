import React from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo1 = () => {

    const { register, handleSubmit } = useForm();

    const submitHandler = (data) => {
        console.log(data);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Formdemo1</h1>

            <form onSubmit={handleSubmit(submitHandler)}>
                <div>
                    <label>NAME</label>
                    <input type="text" {...register("name")} />
                </div>
                <div>
                    <label >GENDER</label><br />
                    MALE : <input type="radio" value="male" {...register("gender")} />
                    <br />
                    FEMALE : <input type="radio" value="female" {...register("gender")} />
                </div>
                <div>
                    <input type="submit" />
                </div>
            </form>
        </div>
    )
}
