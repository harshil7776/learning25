import React from 'react'

export const MapTask1 = () => {
        const employees = [
            {
                "employee_id": 1,
                "department_code": "A",
                "name": "John",
                "age": 25,
                "gender": "Male",
                "department": "IT",
                "salary": 45000,
                "city": "Mumbai",
                "country": "India",
                "is_active": true
            },
            {
                "employee_id": 2,
                "department_code": "B",
                "name": "Sara",
                "age": 28,
                "gender": "Female",
                "department": "HR",
                "salary": 40000,
                "city": "Delhi",
                "country": "India",
                "is_active": false
            },
            {
                "employee_id": 3,
                "department_code": "C",
                "name": "Amit",
                "age": 32,
                "gender": "Male",
                "department": "Finance",
                "salary": 55000,
                "city": "Ahmedabad",
                "country": "India",
                "is_active": true
            },
            {
                "employee_id": 4,
                "department_code": "D",
                "name": "Neha",
                "age": 26,
                "gender": "Female",
                "department": "Marketing",
                "salary": 42000,
                "city": "Pune",
                "country": "India",
                "is_active": false
            },
            {
                "employee_id": 5,
                "department_code": "E",
                "name": "Rahul",
                "age": 30,
                "gender": "Male",
                "department": "Sales",
                "salary": 48000,
                "city": "Bangalore",
                "country": "India",
                "is_active": true
            }
        ]

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Map Task 1</h1>
            <table className='table' border={1} align='center'>
                <thead>
                    <tr>
                        <th>Employee ID</th>
                        <th>Department Code</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Department</th>
                        <th>Salary</th>
                        <th>City</th>
                        <th>Country</th>
                        <th>Is Active</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp , index) => {
                        return (
                            <tr>
                                <td>{emp.employee_id}</td>
                                <td>{emp.department_code}</td>
                                <td>{emp.name}</td>
                                <td style={{color : emp.age > 25 && "red"}}>{emp.age}</td>
                                <td style={{backgroundColor : emp.gender == "Male" && "blue"}}>{emp.gender}</td>
                                <td>{emp.department}</td>
                                <td style={{color : emp.salary > 45000 && "orange"}}>{emp.salary}</td>
                                <td>{emp.city}</td>
                                <td style={{backgroundColor : emp.country && "red"}}>{emp.country}</td>
                                <td style={{backgroundColor : emp.is_active  && "yellow"}}>{emp.is_active ? "Active" : "Inactive"}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};
