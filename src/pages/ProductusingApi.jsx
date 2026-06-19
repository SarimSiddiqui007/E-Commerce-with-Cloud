import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

export default function ProductusingApi() {

  const [api, setApi] = useState([])
  const [filterapi, setfilterapi] = useState([])
  const [category, setcategory] = useState([])

  // Fetch products
  const FetchApi = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=500")
    const data = await res.json()
    setApi(data.products)
    setfilterapi(data.products) //  initialize filtered list
  }

  // Fetch categories
  const Fetchcategory = async () => {
    const res = await fetch("https://dummyjson.com/products/categories")
    const data = await res.json()
    setcategory(data)
  }

  useEffect(() => {
    FetchApi()
    Fetchcategory()
  }, [])

  // Function to filter products by category
  const displayCategory = (value) => {
    if (value === "All") {
      setfilterapi(api)
    } else {
      const newdata = api.filter((v) => v.category === value)
      setfilterapi(newdata)
    }
  }

  return (
    <div className="container mt-4">

      {/* Category Filter */}
      <div className="d-flex align-items-center justify-content-between mb-3">
        <select
          className="form-select w-auto"
          onChange={(e) => displayCategory(e.target.value)}
        >
          <option value="All">All</option>
          {
            category.map((value, index) => (
              <option key={index} value={value.slug}>{value.slug}</option>
            ))
          }
        </select>

        {/* Sorting Dropdown (Not functional yet) */}
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort By
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item">Default</button></li>
            <li><button className="dropdown-item">Price (Low to High)</button></li>
            <li><button className="dropdown-item">Price (High to Low)</button></li>
          </ul>
        </div>
      </div>

      {/* Products Display */}
      <div className="row g-3">
        {
          filterapi.map((value, index) => (
            <Card key={index} value={value} />
          ))
        }
      </div>
    </div>
  )
}
