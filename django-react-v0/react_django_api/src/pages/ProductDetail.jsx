import React, { useEffect, useState } from 'react'
import productListing from '../api/product'
import { set } from 'react-hook-form'
import { useParams } from 'react-router'
import Logout from '../components/Logout'
import ProgressBar from '../components/ProgressBar'
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
    const [loading,setLoading] = useState(true)

    useEffect(()=>{
        setTimeout(() => {
        setLoading(false)
        }, 600);
    },[])

    if(loading) return <ProgressBar />
  return (
    <div className='max-w-[1120px] flex  flex-col mt-10 mx-auto  p-10 rounded-2xl'>

        <div  tabindex="-1" aria-hidden="true" class="overflow-y-auto overflow-x-hidden z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative p-4 w-full ">
                <div class="relative bg-transparent rounded-lg shadow-sm dark:bg-gray-700">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">{product.title}
                        </h3>
                    </div>
                    <div class="p-4 md:p-5 space-y-4">
                        <h5 className='text-base font-medium'>Description:
                        <p class="mt-2 text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {product.description}
                        </p>
                        </h5>

                    </div>
                    <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600 gap-3">
                        <h4 className='text-shadow-xs text-gray-400 font-semibold'>Platform - <span className='text-indigo-500 capitalize'>{product.platform}</span></h4>
                        <h4 className='text-shadow-xs text-gray-400 font-semibold'>Brand - <span className='text-indigo-500 capitalize'>{product.brand_name}</span></h4>
                    </div>
                </div>
            </div>
        </div>
      <div className='relative mt-10'>
      </div>
    </div>
  )
}

export default ProductDetail