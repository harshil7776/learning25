import React from 'react'

export const SubProductsList = (props) => {
    return (
        <div>
            <h1>Sub Products List</h1>
            <h3>Title = {props.title}</h3>

            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>COLOR</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                        <td>{}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
