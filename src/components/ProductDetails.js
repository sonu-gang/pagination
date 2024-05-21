import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    const {id}=useParams();
    const [details,setDetails]=useState([]);
    
    console.log("id",id)
    console.log("called product details")
    useEffect(()=>{
        if(id)
        {
            fetchProductDetails(id);
        }

    },[id])
    const fetchProductDetails=async(id)=>{
        const url=`https://dummyjson.com/products/${parseInt(id)}`
        try {
            const data=await fetch(url);
            const res=await data.json();
            console.log("res details",res)
            setDetails([res]);
            
        } catch (error) {
            console.log("error",error)
            
        }
    }
  return (
    <div className='detail-main-container'>
    <div className='product-detail'>{details.length>0 && <ul>
        <li>{details[0]?.brand}</li>
        <li>{details[0]?.category}</li>
        <li style={{marginRight:"20px"}}> {details[0]?.description}</li>
        <li>{details[0]?.price}</li>
        <li>{details[0]?.rating}</li>
        </ul>}</div>
        </div>
  )
}

export default ProductDetails