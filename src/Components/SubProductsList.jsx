import React from 'react'
import { ProductsList } from './ProductsList'
import { Products } from './Products'

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
                    {Products.map((prod) => (
                        <tr key={prod.id}>
                            <td>{prod.id}</td>
                            <td>{prod.name}</td>
                            <td>{prod.price}</td>
                            <td>{prod.color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
