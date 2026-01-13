import React from 'react'
import { SubProductList1 } from './SubProductList1'

export const ProductList1 = ({

    detail,
    productData,
    onSelect,
    selectedProducts,
}) => {
    return (
        <div style={{textAlign:"center"}}>
            <h1>ProductList1</h1>
            <h4>Company : {detail.name}</h4>
            <h4>City : (detail.city)</h4>

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
                    {
                        productData.map((prod) => (
                            <tr key={prod.id}>
                                <td>{prod.name}</td>
                                <td>{prod.price}</td>
                                <td>{prod.color}</td>
                                <td>
                                    <button className='btn btn-success' onClick={() => onSelect(prod)}>
                                        SELECT
                                    </button>
                                </td>
                            </tr>

                        ))
                    }
                </tbody>

            </table>

            <SubProductList1 products={selectedProducts}></SubProductList1>

        </div>
    )
}
