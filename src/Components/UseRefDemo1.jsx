import React, { useEffect, useRef } from 'react'

export const UseRefDemo1 = () => {

    const inputRef = useRef()
    const focusHandler = () => {

        inputRef.current.focus()

    }

    useEffect(()=>{

        inputRef.current.focus()

    },[])


    return (
        <div style={{ textAlign: "center" }}>
            <h1>Use Ref Demo 1</h1>

            <div>
                <label>ENTER NAME : </label>
                <input ref={inputRef} type='text'></input>
            </div>
            <div>
                <button onClick={focusHandler}>FOCUS</button>
            </div>

        </div>
    )
}
