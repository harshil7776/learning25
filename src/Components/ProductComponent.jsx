import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/CartSlice'

export const ProductComponent = () => {
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Product Component</h1>
        <button onClick={()=>{dispatch(addToCart({name:"I-Phone",price:10000}))}}>ADD TO CART</button>
    </div>
  )
}
