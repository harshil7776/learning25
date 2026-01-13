import React from 'react'
import { SubProductList2 } from './SubProductList2'

export const ProductList2 = ({
  detail,
  productData,
  onSelect,
  selectedProducts2
}) => {    

  return (
    <div>
        <h1>ProductList2</h1>
        <h3>Company : {detail.name}</h3>
        <h3>City : {detail.city}</h3> 
        
        <table className='table table-dark'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>PRICE</th>
              <th>COLOR</th>
              <th>SELECT</th>
            </tr>
          </thead>
<tbody>
  {productData.map((prod , index) => {
    return (
      <tr key={prod.id}>
        <td>{prod.id}</td>
        <td>{prod.name}</td>
        <td>{prod.price}</td>
        <td>{prod.color}</td>
        <td>
          <button className='btn btn-success' onClick={()=>onSelect(prod)}>SELECT</button>
        </td>
      </tr>
    )
  })}
</tbody>
        </table>


        <SubProductList2 products = {selectedProducts2} />

    </div>
  )
}
