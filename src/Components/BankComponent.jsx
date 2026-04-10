import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { depositeAction, withdrawAction } from '../redux/BankSlice'

export const BankComponent = () => {

    const dispatch = useDispatch()
    const [deposite, setdeposite] = useState(0)
    const [withdraw, setwithdraw] = useState(0)

    const depositeHandler = () => {

        dispatch(depositeAction(parseInt(deposite)))
    }
    const withdrawHandler = () => {
        dispatch(withdrawAction(parseInt(deposite)))
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Bank Component</h1>
            <div>
                <label>DEPOSITE AMT</label>
                <input type="text" onChange={(event) => { setdeposite(event.target.value) }}></input>
                <input type='text' onChange={(event) => {setwithdraw(event.target.value)}}></input>
                <button onClick={depositeHandler}>DEPOSITE</button>
                <button onClick={withdrawHandler}>WITHDRAW</button>
            </div>
        </div>
    )
}
