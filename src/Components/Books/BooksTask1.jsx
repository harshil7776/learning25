// Create Component Named Books:
// create array : id name price

// link : ul ->
// java --> click --> BookDetail --> bookName

// Create BookDetail:
// reading book  -->java
// routes. register
// 15 min
import React from 'react'
import { Link } from 'react-router-dom';

export const BooksTask1 = () => {
    // var Book = [
    //     {id : 101 , name : "C Programing language"} , 
    //     {id : 102 , name : "Data Structure"} , 
    //     {id : 103 , name : "C++ language"}
    // ];
    return (
        <div style={{textAlign : "center"}}> 
            <h1>====Books Description====</h1>
            <div>
                <ul>
                    <li>
                        <Link to={"/Book/C_programing"}>C Programing</Link>
                    </li>
                    <li>
                        <Link to={"/Book/Java"}>Java</Link>
                    </li>
                    <li>
                        <Link to={"/Book/Data_struc"}>Data Structure</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}
