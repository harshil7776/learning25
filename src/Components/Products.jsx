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
        { id: 4, name: "bluetooth", price: 500, color: "white" },
        { id: 5, name: "pendrive", price: 400, color: "red" },
        { id: 6, name: "harddisk", price: 550, color: "white" },
        { id: 7, name: "mouse", price: 1000, color: "black" },
    ]);

    const [selectedProducts, setselectedProducts] = useState([]);

    const selectProduct = (product) => {
        const exists = selectProduct.find((p)=>p.id === product.id);
        if(!exists) {
            setselectedProducts([...selectProduct,product]);
        }
    }

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Products</h1>
            <ProductsList title={title} detail={Companydetail} productData={productData}></ProductsList>
        </div>
    )
}
