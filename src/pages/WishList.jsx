import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addWish, decreaseWish, removeFromwish } from '../redux/slice'

export default function WishList() {
const wishData = useSelector((state => state.wish))
const dispatch1 = useDispatch()

  return (
    <div>
      <div className="container d-flex flex-column justify-content-evenly align-items-center w-75">
        <div className="container-fluid d-flex justify-content-between align-items-center border-bottom">
          <h2 className='fs-5 fw-bold'>Wishlist</h2>
          <h2 className='fs-5 fw-bold'>{wishData.length} Items</h2>
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
            {wishData.map((value, index) => (
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
                  <button className='btn btn-sm btn-primary' onClick={()=> dispatch1(addWish(value.id))}>+</button>
                  <h3 className='fs-6 m-0'>{value.quantity}</h3>
                  <button className='btn btn-sm btn-primary' onClick={()=> dispatch1(decreaseWish(value.id))}>-</button>
                </td>
                <td>
                  <h3 className='fs-6 fw-bold'>${value.price * value.quantity}</h3>
                  <button className='btn btn-danger' onClick={() => dispatch1(removeFromwish(value.id))}>
                    Remove
                  </button>

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
