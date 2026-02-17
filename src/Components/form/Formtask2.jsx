// irctc
// username
// age
// gender radio
// berth pref drop down
// -->ticke print
import React, { useState } from 'react'
import { useFieldArray, useForm } from 'react-hook-form'

export const Formtask2 = () => {

    const [passengerData, setpassengerData] = useState([])
    const { register, handleSubmit, control } = useForm({ defaultValues: { passenger: [{ userName: "", age: "", gender: "", berth: "" }] } })

    const { fields, append, remove } = useFieldArray({ control, name: "passenger" })

    const submitHandler = (data) => {
        console.log(data)
        setpassengerData(data.passenger)
    }


    return (
        <div style={{ textAlign: "center" }}>
            <h1>Form task 2</h1>
            <form onSubmit={handleSubmit(submitHandler)}>
                {
                    fields.map((field, index) => {
                        return <div>
                            <div>
                                <label>USER NAME : </label>
                                <input type='text' {...register(`passenger.${index}.userName`)}></input>
                            </div>
                            <div>
                                <label>AGE :</label>
                                <input type='number' {...register(`passenger.${index}.age`)}></input>
                            </div>
                            <div>
                                <label>GENDER : </label>
                                MALE<input type='radio' value="Male" {...register(`passenger.${index}.gender`)}></input>
                                FEMALE<input type='radio' value="FeMale" {...register(`passenger.${index}.gender`)}></input>
                            </div>
                            <div>
                                <label>BERTH PREFERENCE : </label>
                                <select {...register(`passenger.${index}.berth`)}>
                                    <option value='Lower'>LOWER</option>
                                    <option value='Middle'>MIDDLE</option>
                                    <option value='Upper'>UPPER</option>
                                    <option value='sideUpper'>SIDE UPPER</option>
                                    <option value='sideLower'>SIDE LOWER</option>
                                </select>
                            </div>


                        </div>
                    })
                }
                <div>
                    <input type='submit'></input>
                </div>
            </form>
            <br />
            <button onClick={() => { append({ userName: "", age: "", gender: "", berth: "" }) }}>ADD PASSENGER</button>
            <br /><br />
            <div>
                {
                    passengerData.map((pass) => (
                        <div>
                            <h3>NAME : {pass.userName}</h3>
                            <h3>AGE : {pass.age}</h3>
                            <h3>GENDER : {pass.gender}</h3>
                            <h3>BERTH : {pass.berth}</h3>
                        </div>
                    ))
                }
                <button>PRINT TICKET</button>
            </div>



        </div>
    )
}
