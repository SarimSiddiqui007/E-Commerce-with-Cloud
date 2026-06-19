import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addQuantity, addToCart, decreaseQuantity, removeFromCart } from '../redux/slice'

export default function Cart() {
  const cartData = useSelector((state) => state.cart)
  const dispatch = useDispatch()



  return (
    <div className="container-fluid d-flex justify-content-around align-items-center">
      <div className="container d-flex flex-column justify-content-evenly align-items-center w-75">
        <div className="container-fluid d-flex justify-content-between align-items-center border-bottom">
          <h2 className='fs-5 fw-bold'>Shopping Cart</h2>
          <h2 className='fs-5 fw-bold'>{cartData.length} Items</h2>
        </div>
        <table className='container p-5'>
          <thead>
            <tr>
              <td className='text-secondary fs-6 fw-light'>Product Details</td>
              <td className='text-secondary fs-6 fw-light'>Quantity</td>
              <td className='text-secondary fs-6 fw-light'>Price</td>
            </tr>
          </thead>
          <tbody>
            {cartData.map((value, index) => (
              <tr key={index}>
                <td>
                  <div className="d-flex gap-3">
                    <img src={value.thumbnail} className='img-fluid' style={{ height: "100px", width: "100px" }} alt={value.title} />
                    <div className="d-flex flex-column justify-content-center">
                      <h3 className='fs-5 fw-bold'>{value.title}</h3>
                      <h3 className='fs-6 text-danger'>{value.category}</h3>
                    </div>
                  </div>
                </td>
                <td className='d-flex gap-2 align-items-center'>
                  <button className='btn btn-sm btn-primary' onClick={() => dispatch(addQuantity(value.id))}>+</button>
                  <h3 className='fs-6 m-0'>{value.quantity}</h3>
                  <button className='btn btn-sm btn-primary' onClick={() => dispatch(decreaseQuantity(value.id))}>-</button>
                </td>
                <td>
                  <h3 className='fs-6 fw-bold'>${value.price * value.quantity}</h3>
                  <button className='btn btn-danger' onClick={() => dispatch(removeFromCart(value.id))}>
                    Remove
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="container-fluid bg-body-tertiary d-flex flex-column justify-content-evenly align-items-start w-25 p-3 rounded shadow-sm">
        <div className="head border-bottom mb-2">
          <h3 className='fw-bold fs-4'>Order Summary</h3>
        </div>
        <div className="container-fluid d-flex justify-content-between align-items-center mb-2">
          <h4 className='fs-6'>Items ({cartData.length})</h4>
          <h3 className='fs-6'>
            ${cartData.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}
          </h3>
        </div>
        <h3 className='fs-6 mb-1'>Shipping</h3>
        <div className="dropdown mb-2">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Default
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Standard Delivery - $5</a></li>
            <li><a className="dropdown-item" href="#">Express - $10</a></li>
          </ul>
        </div>
        <h3 className='fs-6 mb-1'>Promo Code</h3>
        <input className='form-control mb-2' placeholder='Enter Code here'></input>
        <button className='btn btn-danger mb-2'>Apply</button>
        <div className="container-fluid d-flex justify-content-between align-items-center mb-2">
          <h4 className='fs-6'>Total Items</h4>
          <h3 className='fs-6'>
            ${(cartData.reduce((acc, item) => acc + item.price * item.quantity, 0)).toFixed(2)}
          </h3>
        </div>
        <Link
          to="/checkout"
          className="btn btn-primary w-100"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  )
}
