import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Card from '../components/Card'
export default function Category() {



  const [api, setApi] = useState([])


  const FetchApi = async () => {
    const res = await fetch("https://dummyjson.com/products/categories")

    const data = await res.json()

    setApi(data)
  }

  useEffect(() => {
    FetchApi()
  }, [])

  

  // const data1 = [
  //   {
  //     name: "Beauty"
  //   },
  //   {
  //     name: "Fragrance"
  //   },
  //   {
  //     name: "Furniture"
  //   },
  //   {
  //     name: "Groceries"
  //   },
  //   {
  //     name: "Home "
  //   },
  //   {
  //     name: "Kitchen"
  //   },
  //   {
  //     name: "Laptop"
  //   },
  //   {
  //     name: "Mens Shirts"
  //   },
  //   {
  //     name: "Mens Shoes"
  //   },
  //   {
  //     name: "Mobile"
  //   },
  //   {
  //     name: "Vehicle"
  //   },
  //   {
  //     name: "Womens Accessories"
  //   },
  //   {
  //     name: "Womens Shoes"
  //   },
  //   {
  //     name: "Watches"
  //   },
  //   {
  //     name: "Skin Care"
  //   },

  // ]
  return (
    <div>
      <div className="container d-flex">
        Categories
        <div className="row mx-auto mt-5 gap-2">
          {
            api.map((value, index) => {
              return (
                <>
                  <div className="card col-12 col-sm-12 col-md-6 col-lg-4 col-xl-2 bg-body-tertiary" >
                    <div className="card-body">
                      <h6>{value.name}</h6>
                      <Link to={`/category/${value.slug}`} >View product</Link>
                    </div>
                  </div>
                </>
              )
            })
          }

        </div>
      </div>


    </div>
  )
}
