import React, { useState } from 'react'
import { ProductList2 } from './ProductList2'

export const Product2 = () => {

  var title = "PRODUCTS"

  var Companydetail = {
    name: "TCS",
    city: "G-NAGAR",
  };

  const [productData, setproductData] = useState([
    { id: 1, name: "iphone", price: 1200, color: "blue" },
    { id: 2, name: "laptop", price: 1400, color: "black" },
    { id: 3, name: "charger", price: 100, color: "white" },
    { id: 4, name: "bluetooth", price: 500, color: "white" },
    { id: 5, name: "pendrive", price: 400, color: "red" },
    { id: 6, name: "harddisk", price: 550, color: "white" },
    { id: 7, name: "mouse", price: 1000, color: "black" },
  ]);

  const [selectedProducts2, setselectedProducts2] = useState([]);

  const selectProduct2 = (product) => {
      const exists = selectedProducts2.find((p)=>p.id===Product2.id);
      if(!exists)
      {
        setselectedProducts2([...selectedProducts2,product]);
      }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Product2</h1>
      <ProductList2 title={title} detail={Companydetail} productData={productData} onSelect = {selectProduct2} selectedProducts2={selectedProducts2} productdata={productData}/>
    </div>
  )
}
