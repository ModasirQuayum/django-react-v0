import React from 'react'
import { Link } from 'react-router'
import Input from './Input'
import { useForm } from 'react-hook-form'
import authService from '../api/auth'
import apiUrl from '../config/config'
function Signup() {
  const {register,handleSubmit} = useForm()

  const signUp = async (data) => {
      const {username,email,password,password2} = data
      try {
      const token = await authService.signup(apiUrl.signup_endpoint,username,email,password,password2)
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
                  <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit(signUp)}>
                      <Input
                        field_tag="input"
                        label="Username"
                        type="text"
                        id="username"
                        name="username"
                        {...register("username", { required: true })}
                      />
                      <Input
                        field_tag="input"
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                        {...register("email", { required: true })}
                      />
                      <Input
                        field_tag="input"
                        label="Password"
                        type="password"
                        id="password"
                        name="password"
                        {...register("password", { required: true })}
                      />
                      <Input
                        field_tag="input"
                        label="Confirm Password"
                        type="password"
                        id="password2"
                        name="password2"
                        {...register("password2", { required: true })}
                      />
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Already have account?  
                          <Link to="/login" >
                          <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</span>
                          </Link>
                      </p>
                        <button type="submit" className="w-full bg-gray-900 py-2 text-gray-100 cursor-pointer">
                        Sign up
                      </button>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Signup