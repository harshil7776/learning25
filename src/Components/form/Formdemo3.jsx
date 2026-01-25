import React from 'react'

export const Formdemo3 = () => {
    const {
        register,
        handleSubmit,
        formstate: { error },
    } = useForm();

    console.log("error...", errors)

    const submitHandler = (data) => {
        alert("form submited...");
        console.log(data);
    };
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Formdemo3</h1>
            <form onSubmit={handleSubmit(submitHandler)}>

                <div>
                    <label>NAME</label>
                    <input type='text' {...register("name", { required: { value: true, message: "name is required *" } })}></input>
                    {errors.name && errors.name.message}
                    {errors.name?.message}
                </div>

                <div>
                    <label>AGE</label>
                    <input type='number' {...register("age", { max: { value: 60, message: "age is not valid.." } })}></input>
                    {error.age?.message}
                </div>
                <div>
                    <input type='submit'></input>
                </div>

            </form>
        </div>
    )
}
