import React from 'react'
import { Link } from 'react-router-dom'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';
import FavoriteIcon from '@mui/icons-material/Favorite';


export default function Navbar() {

  const cartData = useSelector((state) => state.cart)
  const wishData = useSelector((state => state.wish))


  const isLoggedIn=true;


  return (
    <div className="container-fluid bg-light d-flex justify-content-around align-items-center sticky-top">
      <h1 ><Link className="fw-bold fs-2 text-decoration-none text-black" to="/" >Shopify</Link></h1>
      <div className="container d-flex align-items-center justify-content-center p-3">
        <input type="text" className="border border-2 border-primary text-black w-50 d-md-none d-lg-block p-2" placeholder="Search" name="search" id="search" />
        <button className="bg-primary text-white align-item-center border border-0 d-none d-lg-block  p-2"><SearchIcon /></button>
      </div>
      <div className="icon d-flex justify-content-evenly align-items-center gap-3">
        <h2 ><Link className="fw-semibold fs-5 text-decoration-none text-black" to="/products">Products</Link></h2>
        <h2 ><Link className="fw-semibold fs-5 text-decoration-none text-black" to="/categories">categories</Link></h2>
        <Link to="/cart" className="bg-light text-black align-item-center border border-0 d-none d-lg-block  p-2 position-relative"><ShoppingCartIcon />
          <h1 className='position-absolute end-0 top-0 bg-danger text-black fs-5 rounded-4'>{cartData.length}</h1>
        </Link>
        <Link to="/wishlist" className="bg-light text-black align-item-center border border-0 d-none d-lg-block  p-2 position-relative"><FavoriteIcon />
          <h1 className='position-absolute end-0 top-0 bg-danger text-black fs-5 rounded-4'>{wishData.length}</h1>


        </Link>
        {

              isLoggedIn?(
                  <>
        <h2 ><Link className="fw-semibold fs-5 text-decoration-none text-black" >Logout</Link></h2>

                  </>

              ):(
        <h2 ><Link className="fw-semibold fs-5 text-decoration-none text-black" >Login/Register</Link></h2>

              )



        }

      </div>
    </div>


  )
}
