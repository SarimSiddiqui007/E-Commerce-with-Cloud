import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addQuantity, addToCart, addTowish, decreaseQuantity, isUpdated } from '../redux/slice';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { ToastContainer, toast } from 'react-toastify';

// export default function Card(props) {
// export default function Card({thumbnail,category,title,price,discontedprice}) {
export default function Card({ value }) {

    const dispatch = useDispatch()
    const dispatch1 = useDispatch()




    const navigate = useNavigate()


    const sendData = (value) => {
        navigate(`/product/${value.id}`)
    }

    const navigate1 = useNavigate()

    const sendData1 = (value) => {
        navigate(`/products/category/${value.slug}`)
    }

    const sendToCart = (value) => {

        dispatch(addToCart(value))
        toast(`${value.title}  added to cart`)
    }

    const sendToWish = (value) => {
        dispatch1(addTowish(value))
    }


    // const [isChecked, setChecked] = useState(false)
    const quantity = useSelector(state => {
        const item = state.cart.find(i => i.id === value.id)
        return item ? item.quantity : 0
    })


    if (!value) {
        return <div className="text-center text-danger">No data available</div>;
    }
    return (
        <div className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto m-3 position-relative   " style={{ width: '17rem' }}>
            <ToastContainer
                position="bottom-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"

            />
            <img src={value.thumbnail} onClick={() => { sendData(value) }} className="card-img-top border-bottom" style={{ height: "240px", width: "240px" }} alt="..." />
            <div className="card-body">
                <h3 className='fs-6 text-secondary'>{value.category}</h3>
                <h2 className='fs-4 text-black fw-bold'>{value.title}</h2>
                <Rating name="read-only" value={value.rating} readOnly />
                <h2 className='text-primary fs-4'>${value.price}</h2>
                <h3 className=' text-black fs-6 '><b className='fs-6 text-secondary text-decoration-line-through fw-light'>${value.discountPercentage} </b></h3>
                {
                    quantity > 0 ? (
                        <div className="d-flex align-items-center gap-2 position-absolute bottom-0 end-0 mb-2 me-3">
                            <button className="btn btn-outline-secondary " onClick={() => dispatch(decreaseQuantity(value.id))}>-</button>
                            <span>{quantity}</span>
                            <button className="btn btn-outline-secondary" onClick={() => dispatch(addQuantity(value.id))}>+</button>
                            
                             <button className="btn btn-outline-danger position-absolute bottom-0 end-50 me-5" onClick={() => { dispatch1(addTowish(value)); } }><FavoriteIcon /></button >
                        </div>
                    ) : (
                        <><button
                                className="btn btn-outline-primary position-absolute bottom-0 end-0 mb-2 me-3"
                                onClick={() => dispatch(addToCart(value))}
                            >
                                <ShoppingCartIcon />
                            </button>
                            <button className='btn btn-outline-danger position-absolute bottom-0 start-50 mb-2 me-5  ' onClick={() => { dispatch1(addTowish(value)); } }><FavoriteIcon /></button ></>
                    )
                }
               
            </div>
        </div>
    )
}
