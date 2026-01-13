import React from 'react'

export const SubProductList2 = ({products}) => {

  return (
    <div style={{ textAlign: "center" }}>

      <h1>SubProductList2</h1>
      {/* <h3>Title ={props.title}</h3> */}

      {
        products.length === 0 ? (
          <h4>No Product Selected</h4>
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
                products.map((prod) => (
                  <tr key={prod.id}>
                    <td>{prod.id}</td>
                    <td>{prod.name}</td>
                    <td>{prod.price}</td>
                    <td>{prod.color}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        )
      }
    </div>
  )
}
