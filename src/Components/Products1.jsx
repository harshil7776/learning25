import React, { useState } from 'react';
import { use } from 'react';
import { ProductList1 } from './ProductList1';

export const Products1 = () => {

    const title = "PRODUCTS";

    const companyDetail = {
        name: "TCS",
        city: "G-Nagar",
    };

    const [products, setproducts] = useState([
        { id: 1, name: "iphone", price: 1200, color: "blue" },
        { id: 2, name: "laptop", price: 1400, color: "black" },
        { id: 3, name: "charger", price: 100, color: "white" },
        { id: 4, name: "bluetooth", price: 500, color: "white" },
        { id: 5, name: "pendrive", price: 400, color: "red" },
        { id: 6, name: "harddisk", price: 550, color: "white" },
        { id: 7, name: "mouse", price: 1000, color: "black" },
    ]);

    const [selectedProducts, setselectedProducts] = useState([])

    const selectProduct = (product) => {
        const exists = selectedProducts.find((p) => p.id === product.id);
        if (!exists)
        {
            setselectedProducts([...selectedProducts,product]);
        }
    }

    return (
        <div style={{textAlign:"center"}}>
            <h1>{title}</h1>

            <ProductList1
            detail = {companyDetail}
            productData = {productData}
            onSelect={selectProduct}
            selectedProduct={selectedProducts}
            />
        </div>
    )
}
