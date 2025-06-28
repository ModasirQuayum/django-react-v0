import React, { useEffect, useState } from 'react'
import productListing from '../api/product'
import { set } from 'react-hook-form'
import { useParams } from 'react-router'

const ProductDetail = () => {
    const {productId} = useParams()
    const [product,setProduct] = useState([])
    useEffect(()=>{
        const response = async ()=>{
            try {
                const result = await productListing.getProduct(productId)
                setProduct(result.data)
            } catch (error) {
                console.log(error)
            }

        }
        response()
    },[productId])

    console.log(product)
  return (
    <div>
       <h1>{product.title}</h1>
       <h3>Brand Name: {product.brand_name}</h3>
       <h3>Platform: {product.platform}</h3>
       <p>{product.description}</p>
    </div>
  )
}

export default ProductDetail