import React, { useState } from 'react'
import Card from './Card';
import { Link } from 'react-router-dom';

const ProductList = ({products}) => {
  
  return (
    <div className='container'>
      {products.map((product,index)=>(
        <Link to={`/product/${product.id}`}>
         <Card product={product}/>
        </Link>

      ))}
    </div>
  )
}

export default ProductList