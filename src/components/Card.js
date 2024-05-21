import React, { useState } from 'react'

const Card = ({product}) => {
    const [isHover,setIsHover]=useState(false);
  const handleMouseEnter=()=>{
    setIsHover(true);
  }
  const handleMouseLeave=()=>{
    setIsHover(false);
  }
  return (
    <div className='card' key={product.id} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{transition:"transform 0.3s",transform:isHover?"scale(1.1)":"scale(1.0)"}}>
    <img  src={product.thumbnail} width="380px" height="140px"/>
    <h3 style={{textAlign:"center",textDecoration:"none"}}>{product.brand}</h3>
    <p className='description'>{product.description}</p>
    </div>
  )
}

export default Card