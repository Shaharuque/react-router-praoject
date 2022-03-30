//ai component a each product/user ar details show korbo
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
    const [product,setProduct]=useState({})
    //useParams() hook use korey clicked product ar id/parameter catch kora hocchey aikhaney 
    //useParams returns an object of key/value pairs of URL parameters['/product_details/${id}' ai url ar dynamic parameter holo ${id} and ai dynamic part tuku get kora jay useParam() ar help a ]
    //const params=useParams()
    //console.log(params)
    const {productId}=useParams()

    //dataa fetch dynamically using params.productId(http://localhost:3000/product_details/3 ;3=productId=dynamic part or routh path)
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${productId}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[productId]) //productId ar opor dependency cuz new product a click holey new productId pabo useParams() ar through tey so new productId means url change productId wise so thats why 'product' ar value o setProduct() ar help a set hobey means state change basically this is why productId dependency tey disi cuz productId change ar sathey sathey 'product' o chanage hobey tai
    

    //for navigation 
    const navigate=useNavigate()
    //back button click event handler function
    const backToProducts=()=>{
        navigate(`/products`)      //Products component jei path a render hocchey shei path ta diye disi
    }

    return (
        <div style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'lightGreen',color:'black',justifyContent:'center',margin:'50px',borderRadius:'20px',padding:'20px'}}>
            <h1>--This is clicked product details page--</h1>
            <p>clicked product id: {productId}</p>
            <p>Product_name: {product.name}</p>
            <p>phone: {product.phone}</p>
            <p>website: {product.website}</p>

            {/*data load hotey kicho somoy lagey tai error jeno na khay shei jnno optional chaining rule use kora (website stuck hoye jawa prevent korey optional chaining) */}
            <p><small>Company: {product.company?.name}</small></p>  
            <p><small>Adress: {product.address?.city}</small></p>

            <div>
                <button style={{borderRadius:'10px',color:'white', backgroundColor:'purple',padding:'5px',
            border:'1px solid white'}} onClick={backToProducts} >Back to products</button>
            </div>
        </div>
    );
};

export default ProductDetails;