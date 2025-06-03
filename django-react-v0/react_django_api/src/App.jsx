import { useState } from 'react'
import authService from './api/auth'
import apiUrl from './config/config'
import { ACCESS_TOKEN } from './constants'
import { Outlet } from 'react-router'



function App() {



  return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-200'>
      <div className="w-full block">
        <main>
          <Outlet />
        </main>
      </div>
    {/* <form onSubmit={handleSubmit} className='bg-orange-200 w-full'  method="post">
      <input className='border'  type="text"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}  
      />
      <input className='border' type="password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}  
      />
      <button type="submit" className='px-2 py-1 bg-indigo-500 text-gray-200 cursor-pointer'>submit</button>
    </form> */}
    </div>
  )
}

export default App
