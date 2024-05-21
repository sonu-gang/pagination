import React from 'react'
import "./App.css"
import Pagination from './components/Pagination'
import { BrowserRouter  ,Routes,Route, useLocation } from 'react-router-dom'
import ProductDetails from './components/ProductDetails'
import Breadcrumb from './components/Breadcrumb'
import Home from './components/Home'

const App = () => {
  return (
    <BrowserRouter>
    <Breadcrumb/>
    
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>

        <Route path='/product' element={<Pagination/>}></Route>
        <Route path='/product/:id' element={<ProductDetails/>}></Route>
      </Routes>
     
    </div>
    </BrowserRouter>
  )
}

export default App