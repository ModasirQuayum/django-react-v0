import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../api/auth'
import { logout } from '../store/authSlice'
import { useNavigate } from 'react-router'

function Logout() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const logoutHandler = ()=>{
        authService.logout()
        dispatch(logout())
        navigate("/login")
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 bg-gray-800  border-2 text-gray-100 hover:bg-blue-100 hover:text-gray-700 rounded-full cursor-pointer hover:border-2 hover:border-gray-800'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default Logout