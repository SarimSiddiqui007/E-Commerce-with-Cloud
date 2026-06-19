import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { useParams } from 'react-router-dom'

export default function Details() {


    const { id } = useParams()

    
    const [api, setapi] = useState({})
    const [categoryapi, setcategoryapi] = useState([])

    const FetchApi = async () => {
        const res = await fetch(`https://dummyjson.com/products/${id}`)
        const data = await res.json()
        setapi(data)

        // console.log(data.category)

        const slug = data.category

       
        const res1 = await fetch(`https://dummyjson.com/products/category/${slug}`)

        const data1 = await res1.json()
        
        setcategoryapi(data1.products)
    }

   
  
  
    
    
    

    useEffect(() => {
        FetchApi()
    }, [])


    return (
        <div>
            <div className="conatiner border border-bottom d-flex justify-content-center align-items-center">
                <div className="row justify-content-evenly align-items-center">
                    <div className="image col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 align-item-top">
                        <img src={api.thumbnail} className='img-fluid' alt="" />
                    </div>
                    <div className="conatainer col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex align-items-start justify-content-center flex-column pt-5">
                        <h2 className='fs-4 text-black fw-bold'>{api.title}</h2>
                        <h2 className='text-primary fs-4'>{api.price}</h2>
                        <h3 className=' text-black fs-6 '><b className='fs-6 text-secondary text-decoration-line-through fw-light'>$19.99</b>{api.discountPercentage}</h3>
                        <h3 className='fs-6'><b className='fs-6'>Brand </b> Glamour Beauty</h3>
                        <h3 className='fs-6'><b className='fs-6'>Category </b> {api.category}</h3>
                        <h3 className='fs-6'><b className='fs-6'>{api.stock} </b> 34</h3>
                        <h3 className='fs-6'><b className='fs-6'>About The Product</b></h3>
                        <p className='fs-6 fw-light'>{api.description}</p>

                    </div>

                    <div className="conatainer col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex flex-column align-items-start justify-content-evenly gap-2">
                        <h3 className='fw-bold fs-4 my-2'>Reviews</h3>
                        <div className="one d-flex flex-column justify-content-evenly align-items-start">
                            <h4 className='fw-bold fs-5'>rshave2</h4>
                            <p className='fs-6 fw-light'>I found the product not long lasting. The quality also seemed a bit downgraded. I don't think its value for money.</p>
                        </div>
                        <div className="one d-flex flex-column justify-content-evenly align-items-start">
                            <h4 className='fw-bold fs-5'>rshave2</h4>
                            <p className='fs-6 fw-light'>I found the product not long lasting. The quality also seemed a bit downgraded. I don't think its value for money.</p>
                        </div>
                        <div className="one d-flex flex-column justify-content-evenly align-items-start">
                            <h4 className='fw-bold fs-5'>rshave2</h4>
                            <p className='fs-6 fw-light'>I found the product not long lasting. The quality also seemed a bit downgraded. I don't think its value for money.</p>
                        </div>
                        <div className="one d-flex flex-column justify-content-evenly align-items-start">
                            <h4 className='fw-bold fs-5'>rshave2</h4>
                            <p className='fs-6 fw-light'>I found the product not long lasting. The quality also seemed a bit downgraded. I don't think its value for money.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h1 className='fs-3 fw-bold'>Similar Products</h1>

                <div className="row">
                    {
                        categoryapi.map((value, index) => {
                            return (
                                <Card value={value} />
                            )
                        })

                    }
                </div>
            </div>
        </div>
    )
}
