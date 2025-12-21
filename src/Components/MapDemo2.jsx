import React from 'react'

export const MapDemo2 = () => {
    var students = ["amit", "raj", "parth", "jay", "kunal"]

    return (
        <div style={{ textAlign: "center",color:"red"}}>
            <h1>MapDemo2</h1>

            <ol>
                {
                    students.map((stu, index) => {
                        return <li>{stu}</li>
                    })
                }
            </ol>

        </div>
    )
}
