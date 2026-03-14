import React, { useMemo, useState } from 'react'

export const MemoryGame = () => {

    const [number, setnumber] = useState([])
    const [show, setshow] = useState(false)
    const [input, setinput] = useState("")
    const [result, setresult] = useState("")

    const start = () => {

        let arr = [];

        for (let i = 0; i < 5; i++) {
            arr.push(Math.floor(Math.random() * 10));
        }
        setshow(true)
        setnumber(arr)
        setresult("")
        setinput("")

        setTimeout(() => {
            setshow(false)

        }, 3000);
    }

    const check = () => {

        let correct = number.join("");

        if (input == correct) {
            setresult("Correct...")
        } else {
            setresult("Try Again...")
        }

        console.log(result)

    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>MemoryGame</h1>
            <div>
                <h1>
                {show && number.join(" ")}
                </h1>
            </div>

            <div>
                <button className='btn btn-primary' onClick={start}>START</button>
            </div>

            <br />

            <div>
                <input type='text' onChange={(e) => setinput(e.target.value)} value={input} ></input>
                <br />
                <br />
                <button className='btn btn-primary' onClick={check}>CHECK</button>

                <h3>{result}</h3>
            </div>


        </div>
    )
}
