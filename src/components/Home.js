import React, { useEffect, useState } from 'react'
import Card from './Card';

const Home = () => {
    const[products,setProducts]=useState([]);
    useEffect(()=>{
        fetchProduct();

    },[])
    const fetchProduct=async()=>{
        const url=`https://dummyjson.com/products`;
        try {
            const data=await fetch(url);
            const res=await data.json();
            setProducts(res.products);
            console.log("response ",res)
            
        } catch (error) {
            console.log("error",error)
            
        }
    }
  return (
    <div className='container'>
        {products.length>0 && products.map((product)=>(
            <div>
                <Card product={product} />
            </div>
        ))}
    </div>
  )
}

export default Home