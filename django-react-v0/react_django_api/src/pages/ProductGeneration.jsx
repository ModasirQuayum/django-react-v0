import React, { useEffect, useState } from 'react'
import { CreateProduct } from '../components'
import ProgressBar from '../components/ProgressBar'
const ProductGeneration = () => {
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 600);
  },[])

  if(loading) return <ProgressBar />
  return (
   <CreateProduct />
  )
}

export default ProductGeneration