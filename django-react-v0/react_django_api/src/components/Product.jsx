import React from 'react'
import { Link } from 'react-router'
import apiUrl from '../config/config'

const Product = ({id,title,description,user}) => {
  return (
    <div className='overflow-hidden'>   
        <Link to={`/product-detail/${id}`} className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100">
        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 ">{title}</h5>
        <p className="font-normal text-gray-700">{description.substring(0,100)}</p>
        <span className='text-xs font-bold'>{user}</span>
        </Link>
    </div>
  )
}

export default Product