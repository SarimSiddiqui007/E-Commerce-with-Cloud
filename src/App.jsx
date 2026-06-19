import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Products from './pages/Products'
import Category from './pages/Category'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Details from './pages/Details'
import ProductusingApi from './pages/ProductusingApi'
import VariousCategory from './pages/variouscategory'
import Cart from './pages/Cart'
import WishList from './pages/WishList'
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>

        <Navbar/>

        <Routes>
            <Route path='/' element={<Home/>} />
            {/* <Route path='/products' element={<Products/>} /> */}
            <Route path='/products' element={<ProductusingApi/>} />
            <Route path='/categories' element={<Category/>} />
            <Route path='/product/:id' element={<Details/>} />
            <Route path='/cart' element={<Cart/>} />
            <Route path='/category/:slug' element={<VariousCategory/>}/>
            <Route path='/wishlist' element={<WishList/>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />


        </Routes>
        <Footer/>
      </BrowserRouter>


    </>
  )
}

export default App
