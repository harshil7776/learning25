import React, { useState } from 'react'
import { ProductsList } from './ProductsList';

export const Products = () => {
    //string
    var title = "PRODUCTS"

    //object var
    var Companydetail = {
        name: "TCS",
        city: "G-Nagar"
    }

    //array
    const [productData, setproductData] = useState([
        { id: 1, name: "iphone", price: 1200, color: "blue" },
        { id: 2, name: "laptop", price: 1400, color: "black" },
        { id: 3, name: "cahrger", price: 100, color: "white" },
    ]);

    const showProducts = (id) =>{
        setproductData(productData.filter((props)=>props.id!=id))
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Products</h1>
            <ProductsList title={title} detail={Companydetail} productData={productData}></ProductsList>
        </div>
    )
}
