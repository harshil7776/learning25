import React, { use } from 'react'

export const MapDemo6 = () => {
    const users = [
        { id: 1, name: "raj", age: 23, gender: "male", salary: 25000 },
        { id: 2, name: "neha", age: 24, gender: "female", salary: 25000 },
        { id: 3, name: "sneha", age: 25, gender: "female", salary: 35000 },
        { id: 4, name: "parth", age: 28, gender: "male", salary: 50000 },
        { id: 5, name: "krishna", age: 27, gender: "female", salary: 30000 },
        { id: 6, name: "ajay", age: 22, gender: "male", salary: 25000 },
    ];
    return (
        <div style={{ textAlign: "center" }}>
            <h1>Map Demo 6</h1>
            <table className='table table-dark'>
                <thead>
                    <tr>ID</tr>
                    <tr>NAME</tr>
                    <tr>AGE</tr>
                    <tr>GENDER</tr>
                    <tr>SALARY</tr>
                </thead>
                <tbody>
                    {users.map((user, index) => {
                        return <tr style={{ backgroundColor: user.gender == "female" && "pink" }}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            {/* <td style={{color :}}>{}</td> */}
                            <td style={{ color: user.age > 27 && "yellow" }}>{user.age}</td>
                            <td>{user.gender}</td>
                            {/* <td style={{color:"red"}}>{user.salary}</td> */}
                            {/* <td style={{color:user.salary>=35000 ? "red":"white"}}>{user.salary}</td> */}
                            <td style={{color : user.salary >= 35000 && "red"}}>{user.salary}</td>
                        </tr>
                    })}
                </tbody>

            </table>
        </div>
    )
}
