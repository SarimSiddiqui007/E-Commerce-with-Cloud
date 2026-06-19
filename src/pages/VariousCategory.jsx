import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import { Link, useParams } from 'react-router-dom'
export default function VariousCategory() {
    const { slug } = useParams()

    const [api, setApi] = useState([])

    const FetchApi = async () => {
        const res = await fetch(`https://dummyjson.com/products/category/${slug}`)
        const data = await res.json()
        setApi(data.products)
    }

    useEffect(() => {
        FetchApi()
    }, [])
    return (
          <div className="container d-flex mx-auto align-items-center">



               <div className="row gap-2">
                                
<nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page"><Link to="/categories" >Category </Link></li>
    <li class="breadcrumb-item active" aria-current="page">{slug} </li>
  </ol>
</nav>
                     {
                       api.map((value,index)=>{
                         return(
                           <Card value={value} />
                         )
                       })
                     }
               </div>
             </div>
    )
}
