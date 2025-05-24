import React from 'react'
import Logout from './Logout'

function Dashboard() {
  return (
    <div className='flex items-center justify-center gap-40 mt-10'>
      <h1 className='text-2xl font-semibold'>Dashboard</h1>
      <Logout />  
    </div>
  )
}

export default Dashboard