import React from 'react'

export const SubProductList1 = ({ Products }) => {
    return (
        <div style={{ textAlign: "center" }}>
            <h1>SubProductList1</h1>

            {
                Products.length === 0 ? (
                    <h4>no products selected</h4>

                ) : (
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
                                Products.map((prod) => {
                                    <tr key={prod.id}>
                                        <td>{prod.id}</td>
                                        <td>{prod.name}</td>
                                        <td>{prod.price}</td>
                                        <td>{prod.color}</td>

                                    </tr>
                                })
                            }
                        </tbody>

                    </table>
                )
            }

        </div>
    )
}
