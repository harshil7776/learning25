import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ApiDemo2 = () => {

    const [products, setproducts] = useState([])

    const getProducts = async()=>{
        const res = await axios.get("https://dummyjson.com/products")
        console.log(res)
        console.log(res.data)
        console.log(res.data.products)
        setproducts(res.data.products)
    }

    useEffect(()=>{
        getProducts()
    },[])

  return (

    <div style={{textAlign:"center"}}>
        <h1>ApiDemo2</h1>
        {/* <button onClick={getProducts}>GET</button> */}
        <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>CATEGORY</th>
              <th>PRICE</th>
              <th>DISCOUNT</th>
              <th>RATING</th>
              <th>STOCK</th>
              <th>THUMBNAIL</th>
            </tr>
          </thead>
          <tbody>
            {
              products?.map((pro)=>{
                return <tr>
                  <td>{pro.id}</td>
                  <td>{pro.title}</td>
                  <td>{pro.category}</td>
                  <td>{pro.price}</td>
                  <td>{pro.discountPercentage}</td>
                  <td>{pro.rating}</td>
                  <td>{pro.stock}</td>
                  <td>
                    <img src={pro.thumbnail} style={{height:"50px",width:"50px"}}></img>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>

    </div>
  )
}
