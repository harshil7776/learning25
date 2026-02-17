import React from 'react'
import { useForm } from 'react-hook-form'

export const FormdemoTask2 = () => {

  const { register, watch } = useForm({ mode: "onChange" })
  const price = watch("price")
  const quantity = watch("quantity")

  const total = price > 0 && quantity > 0 ? price * quantity : null;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Form Task 2</h1>
      <form>
        <div>
          <label>NAME : </label>
          <input type='text' {...register("name")}></input>
        </div>

        <div>
          <label>PRICE : </label>
          <input type='number' {...register("price")}></input>
        </div>

        <div>
          <label>QUANTITY : </label>
          <input type='number' {...register("quantity")}></input>
        </div>
<br /><br />
        {price > 0 && quantity > 0 && (
          <div>
            <h1>Total : {total}</h1> 
          </div>

        )}

      </form>
    </div>
  )
}
