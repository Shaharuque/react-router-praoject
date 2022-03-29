import React from 'react';
import './Product.css'
import { useNavigate } from "react-router-dom";

const Product = (props) => {
    const { name, color, pairImage, price,id } = props.product
    const navigate=useNavigate()
    //btn click event hander
    const viewProduct=()=>{
        const path=`/product/${id}`
        navigate(path)
    }

    return (
        <div className='product-container'>
            <img style={{width:'25%'}} src={pairImage} alt="" />
            <h1>Name:{name}</h1>
            <p style={{margin:'5px'}}>Price:{price}</p>
            <p style={{margin:'5px'}}>color: {color}</p>
            <button onClick={viewProduct} className='button-style' >View-Product::{id}</button>
        </div>
    );
};

export default Product;