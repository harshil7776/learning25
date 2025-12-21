import React from 'react'

export const MapDemo = () => {
    var students = ["amit", "raj", "parth", "jay", "kunal"]

    return (
        <div style={{ textAlign: "center" ,color:"blue"}}>
            <h1>MapDemo</h1>
            <ul>
                {
                    students.map((stu, index) => {
                        return <li>{stu}</li>
                    })
                }
            </ul>
        </div>

    )
}
