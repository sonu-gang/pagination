import React, { useEffect, useState } from 'react'
import ProductList from './ProductList1';

const Pagination = () => {
    const [product,setProduct]=useState([]);
    const [currentPage,setCurrentPage]=useState(0);
    const [limit,setLimit]=useState(10);
    useEffect(()=>{
        fetchProduct();

    },[currentPage])
    const fetchProduct=async()=>{
        const url=`https://dummyjson.com/products?limit=${limit}&skip=${currentPage*10}`;
        try {
            const data=await fetch(url);
            const res=await data.json();
            setProduct(res.products);
            console.log("response ",res)
            
        } catch (error) {
            console.log("error",error)
            
        }
    }
    const handlePage=(index)=>{
        setCurrentPage(index)

    }
  return (
    <div>
        <ProductList products={product}/>
        <div className='page-container'>
            {currentPage===0?null:<div className='page-box'>&larr;</div>}
        {Array(10).fill(null).map((_,index)=>{
            return (

                <div className='page-box' onClick={()=>handlePage(index)} >{index+1}</div>
            )
        })}
        {currentPage===9?null: <div className='page-box'>&rarr;</div>}

        </div>

    
    </div>
  )
}

export default Pagination