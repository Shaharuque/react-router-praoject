import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts]=useState([])
    //fetch data from api
    useEffect(()=>{
        fetch('data.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div style={{padding:'10px'}}>
            <h1 style={{textAlign:'center'}}>Products page</h1>
            <div className='products-container'>
            {
                products.map(product=><Product key={product.id} product={product}></Product>)
            }
            </div>
        </div>
    );
};

export default Products;