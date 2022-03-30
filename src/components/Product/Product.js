import React from 'react';
import './Product.css'
import { Link, useNavigate } from "react-router-dom";

const Product = (props) => {
    const { name, username,website ,id} = props.product
    const navigate=useNavigate()
    //btn click event hander
    const viewProduct=()=>{
        const path=`/product_details/${id}`
        navigate(path)   //View-Product btn click korley 'path' ar moddhey jei url thakbey sheikhaney navigate/niye jabey
    }

    return (
        <div className='product-container'>
    {/*<img style={{width:'25%'}} src={pairImage} alt="" />*/}
            <h5>Name:{name}</h5>
            <p style={{margin:'5px'}}>userName: {username}</p>
            <p style={{margin:'5px'}}>website: {website}</p>
            {/*button click ar sathey sathey productDetails page/component a niye jassey ai same kaj 'Link' use koreo kora jay*/}
            <Link to={`/product_details/${id}`}>viewProduct</Link>
            <button onClick={viewProduct} className='button-style' >View-Product::{id}</button>
        </div>
    );
};

export default Product;