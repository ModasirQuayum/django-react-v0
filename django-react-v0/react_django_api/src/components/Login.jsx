import React, { useState } from 'react'
import Input from './Input'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import authService from '../api/auth'
import { login as authLogin } from '../store/authSlice'
import apiUrl from '../config/config'
function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {register,handleSubmit} = useForm()
  const [error,setError] = useState("")

  const login = async(data)=>{
    const {username,password} = data;
    try {
      const token = await authService.login(apiUrl.token_endpoint,username,password)
      if(token){
        const userData = await authService.getUser()
        if(userData){
          console.log(userData)
          dispatch(authLogin(userData))
          navigate("/dashboard")
        }
      }
    } catch (error) {
      console.log(error)
      setError(error.message)
    }
  }

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign in to your account
                  </h1>
                  <form  className="space-y-4 md:space-y-6" onSubmit={handleSubmit(login)}>
                      <Input
                        label="Username"
                        type="text"
                        id="username"
                        {...register("username", { required: true })}

                      />
                      <Input
                        label="Password"
                        type="password"
                        id="password"
                        {...register("password", { required: true })}
                         
                      />
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet? 
                          <Link to="/signup" >
                          <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</span>
                          </Link>
                      </p>
                      <button type="submit" className="w-full bg-gray-900 py-2 text-gray-100 cursor-pointer">
                        Sign in
                      </button>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Login