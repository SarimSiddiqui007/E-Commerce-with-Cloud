import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PaidIcon from '@mui/icons-material/Paid';
import PercentIcon from '@mui/icons-material/Percent';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import Card from '../components/Card';
import { Link } from 'react-router-dom';

export default function Home() {
      const [api,setApi] = useState([])

      const FetchApi=async () => {
        const res = await fetch("https://dummyjson.com/products?limit=4")

        const data = await res.json()

        setApi(data.products)
        
      }

      useEffect (() =>{
        FetchApi()
      },[]) 

      
  return (
    <div>
      <div className="container-fluid bg-body-secondary">
        <div className="row w-100 p-5 ">
          <div className=" col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6  text d-flex flex-column gap-2 justify-content-center align-items-start">
            <h3 className="text-black fs-6 fw-bold">Starting at $999</h3>
            <h1 className="text-black fs-3 fw-bold">The Best Notebook Collection in 2025</h1>
            <h2 className="text-black fs-4 fw-bold">Exclusive Offer <b className="text-danger fs-4">-10% </b> off this week</h2>
            <button className='b1'>Shop Now</button>
          </div>
          <div className="imgage col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 ">
                <img src="/hero.webp" className="img-fluid" alt="" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="d-flex m-5 gap-1">
          <div className="p1  p-2 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-around align-items-center gap-2 bg-body-secondary">
            <div className="icon">
              <LocalShippingIcon />
            </div>
            <div className="text">
              <h3 className="fs-5  text-black">Free Delivery</h3>
              <h3 className="fs-6 fw-light text-black">Order from all Items</h3>
            </div>
          </div>
          <div className="p2 p-2 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-around align-items-center gap-2 bg-body-secondary">
            <div className="icon">
              <PaidIcon />
            </div>
            <div className="text">
              <h3 className="fs-5 text-black">Return & Refund</h3>
              <h3 className="fs-6 fw-light text-black">Money back guarantee</h3>
            </div>
          </div>
          <div className="p3 p-2 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-around align-items-center gap-2 bg-body-secondary">
            <div className="icon">
              <PercentIcon />
            </div>
            <div className="text">
              <h3 className="fs-5 text-black">Member Discount</h3>
              <h3 className="fs-6 fw-light text-black">On order over $99</h3>
            </div>
          </div>
          <div className="p4 p-2 col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 d-flex justify-content-around align-items-center gap-2 bg-body-secondary">
            <div className="icon">
              <SupportAgentIcon />
            </div>
            <div className="text">
              <h3 className="fs-5 text-black">Support 24/7</h3>
              <h3 className="fs-6 fw-light text-black">Contact us 24 hours a day</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid p-5">
        <div className="flex-column justify-content-around align-items-center">
          <div className="container">
          <h1 className='fs-3 fw-bold'>Trending Products</h1>

            <div className="row">
              {/* <Card  thumbnail={"/thumbnail (1).webp"} category="beauty" title="Essence Mascara Lash Princes" price="10.95" discontedprice="8.00"  />  
              <Card  thumbnail={"/thumbnail (2).webp"} category="beauty" title="Essence Mascara Lash Princes" price="10.95" discontedprice="8.00"  />
              <Card  thumbnail={"/thumbnail (3).webp"} category="beauty" title="Essence Mascara Lash Princes" price="10.95" discontedprice="8.00"  />
              <Card  thumbnail={"/thumbnail (2).webp"} category="beauty" title="Essence Mascara Lash Princes" price="10.95" discontedprice="8.00"  />
              <Card  thumbnail={"/thumbnail (1).webp"} category="beauty" title="Essence Mascara Lash Princes" price="10.95" discontedprice="8.00"  />
              <Card  thumbnail={"/thumbnail (3).webp"} category="beauty" title="Essence Mascara Lash Princes" price="10.95" discontedprice="8.00"  /> */}
              {
              api.map((value,index) => {
                return (
                  <Card value = {value} />
                )
              })

            }

              {/* <div className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto m-3" style={{ width: '17rem' }}>
                <img src="/thumbnail.webp" className="card-img-top" style={{height:"240px",width:"240px"}} alt="..." />
                <div className="card-body">
                    <h3 className='fs-6 text-secondary'>beauty</h3>
                       <h2 className='fs-4 text-black fw-bold'>Essence Mascara Lash Princess</h2>
                        <h2 className='text-primary fs-4'>$8.94</h2>
            <h3 className=' text-black fs-6 '><b className='fs-6 text-secondary text-decoration-line-through fw-light'>$9.99 </b> -10.48%</h3>
                </div>
              </div>
              <div className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto m-3" style={{ width: '17rem' }}>
                <img src="/thumbnail.webp" className="card-img-top" style={{height:"240px",width:"240px"}} alt="..." />
                <div className="card-body">
                    <h3 className='fs-6 text-secondary'>beauty</h3>
                       <h2 className='fs-4 text-black fw-bold'>Essence Mascara Lash Princess</h2>
                        <h2 className='text-primary fs-4'>$8.94</h2>
            <h3 className=' text-black fs-6 '><b className='fs-6 text-secondary text-decoration-line-through fw-light'>$9.99 </b> -10.48%</h3>
                </div>
              </div>
              <div className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto m-3" style={{ width: '17rem' }}>
                <img src="/thumbnail.webp" className="card-img-top" style={{height:"240px",width:"240px"}} alt="..." />
                <div className="card-body">
                    <h3 className='fs-6 text-secondary'>beauty</h3>
                       <h2 className='fs-4 text-black fw-bold'>Essence Mascara Lash Princess</h2>
                        <h2 className='text-primary fs-4'>$8.94</h2>
            <h3 className=' text-black fs-6 '><b className='fs-6 text-secondary text-decoration-line-through fw-light'>$9.99 </b> -10.48%</h3>
                </div>
              </div>
              <div className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto m-3" style={{ width: '17rem' }}>
                <img src="/thumbnail.webp" className="card-img-top" style={{height:"240px",width:"240px"}} alt="..." />
                <div className="card-body">
                    <h3 className='fs-6 text-secondary'>beauty</h3>
                       <h2 className='fs-4 text-black fw-bold'>Essence Mascara Lash Princess</h2>
                        <h2 className='text-primary fs-4'>$8.94</h2>
            <h3 className=' text-black fs-6 '><b className='fs-6 text-secondary text-decoration-line-through fw-light'>$9.99 </b> -10.48%</h3>
                </div>
              </div>
              <div className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto m-3" style={{ width: '17rem' }}>
                <img src="/thumbnail.webp" className="card-img-top" style={{height:"240px",width:"240px"}} alt="..." />
                <div className="card-body">
                    <h3 className='fs-6 text-secondary'>beauty</h3>
                       <h2 className='fs-4 text-black fw-bold'>Essence Mascara Lash Princess</h2>
                        <h2 className='text-primary fs-4'>$8.94</h2>
            <h3 className=' text-black fs-6 '><b className='fs-6 text-secondary text-decoration-line-through fw-light'>$9.99 </b> -10.48%</h3>
                </div>
              </div>

                <div className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto m-3" style={{ width: '17rem' }}>
                <img src="/thumbnail.webp" className="card-img-top" style={{height:"240px",width:"240px"}} alt="..." />
                <div className="card-body">
                    <h3 className='fs-6 text-secondary'>beauty</h3>
                       <h2 className='fs-4 text-black fw-bold'>Essence Mascara Lash Princess</h2>
                        <h2 className='text-primary fs-4'>$8.94</h2>
            <h3 className=' text-black fs-6 '><b className='fs-6 text-secondary text-decoration-line-through fw-light'>$9.99 </b> -10.48%</h3>
                </div>
              </div>

                <div className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto m-3" style={{ width: '17rem' }}>
                <img src="/thumbnail.webp" className="card-img-top" style={{height:"240px",width:"240px"}} alt="..." />
                <div className="card-body">
                    <h3 className='fs-6 text-secondary'>beauty</h3>
                       <h2 className='fs-4 text-black fw-bold'>Essence Mascara Lash Princess</h2>
                        <h2 className='text-primary fs-4'>$8.94</h2>
            <h3 className=' text-black fs-6 '><b className='fs-6 text-secondary text-decoration-line-through fw-light'>$9.99 </b> -10.48%</h3>
                </div>
              </div>

                <div className="card col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 mx-auto m-3" style={{ width: '17rem' }}>
                <img src="/thumbnail.webp" className="card-img-top" style={{height:"240px",width:"240px"}} alt="..." />
                <div className="card-body">
                    <h3 className='fs-6 text-secondary'>beauty</h3>
                       <h2 className='fs-4 text-black fw-bold'>Essence Mascara Lash Princess</h2>
                        <h2 className='text-primary fs-4'>$8.94</h2>
            <h3 className=' text-black fs-6 '><b className='fs-6 text-secondary text-decoration-line-through fw-light'>$9.99 </b> -10.48%</h3>
                </div>
              </div> */}

              {/* <div className="p1 border border-1 d-flex flex-column gap-1 justify-content-evenly align-items-start col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="image">
                <img src="/thumbnail.webp" className='image-fluid' alt="" />
            </div>
            <hr></hr>
            <h3 className='fs-6 text-secondary'>beauty</h3>
            <h2 className='fs-4 text-black fw-bold'>Essence Mascara Lash Princess</h2>
            <h2 className='text-primary fs-4'>$8.94</h2>
            <h3 className=' text-black fs-6 '><b className='fs-6 text-secondary text-decoration-line-through fw-light'>$9.99 </b> -10.48%</h3>
        </div>
        <div className="p2 border border-1 d-flex flex-column gap-1 justify-content-evenly align-items-start col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="image">
                <img src="/thumbnail (1).webp" className='image-fluid' alt="" />
            </div>
            <hr></hr>
            <h3 className='fs-6 text-secondary'>beauty</h3>
            <h2 className='fs-4 text-black fw-bold'>Eye Shadow Platelette with Mirror</h2>
            <h2 className='text-primary fs-4'>$16.35</h2>
            <h3 className=' text-black fs-6 '><b className='fs-6 text-secondary text-decoration-line-through fw-light'>$19.99 </b> -18.19%</h3>
        </div>
        <div className="p3 border border-1 d-flex flex-column gap-1 justify-content-evenly align-items-start col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
              <div className="image">
                <img src="/thumbnail (2).webp" className='image-fluid' alt="" />
            </div>
            <hr></hr>
            <h3 className='fs-6 text-secondary'>beauty</h3>
            <h2 className='fs-4 text-black fw-bold'>Powder Canister</h2>
            <h2 className='text-primary fs-4'>$13.51</h2>
            <h3 className=' text-black fs-6 '><b className='fs-6 text-secondary text-decoration-line-through fw-light'>$14.99 </b> -9.84%</h3>
        </div>
        <div className="p4 border border-1 d-flex flex-column gap-1 justify-content-evenly align-items-start col-12 col-sm-12 col-md-6 col-lg-3 col-xl-3">
            <div className="image">
                <img src="/thumbnail (3).webp" className='image-fluid' alt="" />
            </div>
            <hr></hr>
            <h3 className='fs-6 text-secondary'>beauty</h3>
            <h2 className='fs-4 text-black fw-bold'>Red Lipstick</h2>
            <h2 className='text-primary fs-4'>$11.41</h2>
            <h3 className=' text-black fs-6 '><b className='fs-6 text-secondary text-decoration-line-through fw-light'>$12.99 </b> -12.16%</h3>
        </div> */}
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
