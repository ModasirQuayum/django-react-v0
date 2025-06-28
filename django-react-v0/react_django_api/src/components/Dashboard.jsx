import React, { useEffect, useState } from 'react'
import Logout from './Logout'
import productListing from '../api/product'
import apiUrl from '../config/config'
import Product from './Product'
import { Link } from 'react-router'

function Dashboard() {
    const [products,setProducts] = useState([])
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
      const productResponse = async()=>{
        try {
          const response = await productListing.getProducts();
          setProducts(response.data)
          console.log(response.data)
        } catch (error) {
          console.log(error)
        }finally{
          setLoading(false)
        }
      }
      productResponse()
    },[])

    
  return (
    <div className='max-w-[1120px] flex  flex-col mt-10 mx-auto bg-gray-50 p-10 rounded-2xl'>
      <div className='w-full flex items-center justify-between'>
      <h1 className='text-2xl font-semibold'>Dashboard</h1>
      <Logout />  
      </div>
      <div className='relative mt-20'>
        <div className='absolute overflow-hidden right-0'>
          <Link to="/create-product">
          <button className='py-2 px-4 bg-pink-600 text-gray-200 hover:bg-pink-400 duration-75 cursor-pointer'>
          Create product listing
          </button>
          </Link>
        </div>
        <div className='my-2 py-3' />
        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10'>
        {loading ? (

          <p>Loading products..</p>
        ):products.length > 0 ?(        
          products.map((product)=>(
            <div key={product.id} className='mt-2'>
            <Product key={product.id} id={product.id} title={product.title} description={product.description} user={product.user} />
            </div>
          ))
        ):(
          <p className='text-xl font-semibold text-gray-500'>No Products</p>
        )  
        }
        </div>
      </div>
    </div>
  )
}

export default Dashboard