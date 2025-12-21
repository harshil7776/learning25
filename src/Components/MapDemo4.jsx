import React from 'react'

export const MapDemo4 = () => {
    const users1 = [{ id: 1, name: "raj", age: 23 },
    { id: 2, name: "amit", age: 24 },
    { id: 3, name: "kunal", age: 22 },
    ];
    return (
        <div style={{ textAlign: "center" }}>
            <h1>MapDemo4</h1>

            <table border="1" align='center'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>AGE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users1.map((users1) => {
                            return <tr>
                                <td>{users1.id}</td>
                                <td>{users1.name}</td>
                                <td>{users1.age}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
