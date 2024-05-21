import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Breadcrumb = () => {
  const location=useLocation();
  const pathname=location.pathname.split("/").filter((x)=>x);
  let pathstring="";

  console.log("pathname",pathname)
    console.log("location",location)
  return (
    <div style={{margin:"32px"}}>
      <Link to="/">Home</Link>
      {pathname.map((path,index)=>{
        const  isLast=pathname.length-1===index?true:false;
        pathstring+= `/${path}`
      
        return(
          isLast?<span>/{path}</span>:<Link to={pathstring} style={{textDecoration:"none"}}>/{path}</Link>
          
        )
      })}
      </div>
  )
}

export default Breadcrumb