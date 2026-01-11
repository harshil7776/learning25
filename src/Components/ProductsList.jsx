import React from 'react'
import { SubProductsList } from './SubProductsList';
import { Products } from './Products';

export const ProductsList = (props) => {

    console.log("Product List", props)

    return (
        <div>
            <h1>Products List</h1>
            <h3>Title : {props.title}</h3>
            <h3>Detail : {props.detail.name}</h3>
            <h3>Detail : {props.detail.city}</h3>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>PRICE</th>
                        <th>COLOR</th>
                        <th>SHOW</th>
                    </tr>
                </thead>
                <tbody>
                    {props.productData.map((prod, index) => {
                        return (
                            <tr>
                                <td>{prod.id}</td>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                <td>{prod.color}</td>
                                <td>
                                    <button onClick={()=>{prod.productData}} className='btn btn-danger'> SHOW</button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>

            </table>

            <SubProductsList title={props.title}></SubProductsList>

        </div>
    )
}
