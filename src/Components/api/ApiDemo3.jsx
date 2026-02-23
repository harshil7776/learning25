import axios from 'axios'
import React from 'react'

export const ApiDemo3 = () => {

    // const addUser = async () => {
    //     const userObj = {
    //         name: "Harshil",
    //         age: 25,
    //         password: "harshil123",
    //         email: "harshil12@gmail.com",
    //         isActive: false
    //     }

    //     const res = await axios.post("https://node5.onrender.com/user/user/", userObj)
    //     console.log(res)
    //     console.log(res.data)
    //     post("url", obj)
    //     if (res.status == 200) {
    //         alert("User Added...")
    //     }
    // }


    const addUser = async () => {
        const userObj = {
            name: "Harshil",
            age: 25,
            password: "harshil123",
            email: "harshil122266@gmail.com",
            isActive: false
        }
        try {

            const res = await axios.post("https://node5.onrender.com/user/user/", userObj)
            console.log(res)
            console.log(res.data)
            // post("url", obj)
            if (res.status == 200) {
                alert("User Added...")
            }
        } catch (err) {
            alert("Error While Adding User...");
        }
    }


    return (
        <div style={{ textAlign: "center" }}>
            <h1>Api Demo 3</h1>
            <button onClick={addUser}>ADD</button>
        </div>
    )
}
