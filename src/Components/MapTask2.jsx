import React from 'react'

export const MapTask2 = () => {
    const students = [
        {
            "student_id": 101,
            "roll_no": "A01",
            "name": "Aarav",
            "age": 20,
            "gender": "Male",
            "course": "Computer Science",
            "semester": 4,
            "college": "ABC University",
            "city": "Ahmedabad",
            "is_active": true
        },
        {
            "student_id": 102,
            "roll_no": "A02",
            "name": "Diya",
            "age": 21,
            "gender": "Female",
            "course": "Information Technology",
            "semester": 5,
            "college": "ABC University",
            "city": "Surat",
            "is_active": true
        },
        {
            "student_id": 103,
            "roll_no": "A03",
            "name": "Rohan",
            "age": 22,
            "gender": "Male",
            "course": "Mechanical",
            "semester": 6,
            "college": "XYZ College",
            "city": "Vadodara",
            "is_active": false
        },
        {
            "student_id": 104,
            "roll_no": "A04",
            "name": "Neha",
            "age": 20,
            "gender": "Female",
            "course": "Civil",
            "semester": 4,
            "college": "XYZ College",
            "city": "Rajkot",
            "is_active": true
        },
        {
            "student_id": 105,
            "roll_no": "A05",
            "name": "Kunal",
            "age": 23,
            "gender": "Male",
            "course": "Electrical",
            "semester": 7,
            "college": "LMN Institute",
            "city": "Bhavnagar",
            "is_active": false
        }
    ]


    return (
        <div style={{ textAlign: "center" }}>
            <h1>Map Task 2</h1>
            <table className='table table-dark' border={1} align='center' hight = {"5000px"} width={"1000px"}>
                <thead>
                <tr style={{color : "rgb(0, 128, 0)"}}>
                    <th>Student ID</th>
                    <th>Roll No</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Course</th>
                    <th>Semester</th>
                    <th>College</th>
                    <th>City</th>
                    <th>Is Active</th>
                </tr>
                </thead>
                <tbody>
                    {
                        students.map((stu , index) => {
                            return (
                                <tr>
                                    <td style={{color : stu.student_id % 2 == 0 && "red"}}>{stu.student_id}</td>
                                    <td>{stu.roll_no}</td>
                                    <td>{stu.name}</td>
                                    <td>{stu.age}</td>
                                    <td style={{color : stu.gender === "Male" && "blue"}}>{stu.gender}</td>
                                    <td>{stu.course}</td>
                                    <td style={{backgroundColor : stu.semester > 5 && "red"}}>{stu.semester}</td>
                                    <td style={{color : stu.college === "ABC University" && "pink"} } >
                                        
                                        {stu.college}</td>
                                    <td>{stu.city}</td>
                                    <td style={{backgroundColor : stu.is_active && "blue" }}>{stu.is_active ? "Active" : "InActive"}</td>
                                </tr>

                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
//======================================================
// import React from "react";
// import "../assets/CSS/MapTask2Css.css";

// export const MapTask2 = () => {

//     const students = [
//         { student_id: 101, roll_no: "A01", name: "Aarav", age: 20, gender: "Male", course: "Computer Science", semester: 4, college: "ABC University", city: "Ahmedabad", is_active: true },
//         { student_id: 102, roll_no: "A02", name: "Diya", age: 21, gender: "Female", course: "Information Technology", semester: 5, college: "ABC University", city: "Surat", is_active: true },
//         { student_id: 103, roll_no: "A03", name: "Rohan", age: 22, gender: "Male", course: "Mechanical", semester: 6, college: "XYZ College", city: "Vadodara", is_active: false },
//         { student_id: 104, roll_no: "A04", name: "Neha", age: 20, gender: "Female", course: "Civil", semester: 4, college: "XYZ College", city: "Rajkot", is_active: true },
//         { student_id: 105, roll_no: "A05", name: "Kunal", age: 23, gender: "Male", course: "Electrical", semester: 7, college: "LMN Institute", city: "Bhavnagar", is_active: false }
//     ];

//     return (
//         <div className="container">
//             <h1 className="title">Map Task 2</h1>

//             <table className="student-table">
//                 <thead>
//                     <tr>
//                         <th>Student ID</th>
//                         <th>Roll No</th>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Gender</th>
//                         <th>Course</th>
//                         <th>Semester</th>
//                         <th>College</th>
//                         <th>City</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>

//                 <tbody>
//                     {students.map(stu => (
//                         <tr key={stu.student_id}>
//                             <td className={stu.student_id % 2 === 0 ? "even-id" : ""}>{stu.student_id}</td>
//                             <td>{stu.roll_no}</td>
//                             <td>{stu.name}</td>
//                             <td>{stu.age}</td>
//                             <td className={stu.gender === "Male" ? "male" : "female"}>{stu.gender}</td>
//                             <td>{stu.course}</td>
//                             <td className={stu.semester > 5 ? "high-sem" : ""}>{stu.semester}</td>
//                             <td className={stu.college === "ABC University" ? "abc-college" : ""}>{stu.college}</td>
//                             <td>{stu.city}</td>
//                             <td className={stu.is_active ? "active" : "inactive"}>
//                                 {stu.is_active ? "Active" : "Inactive"}
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };
