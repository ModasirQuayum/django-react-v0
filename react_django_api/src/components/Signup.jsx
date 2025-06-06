import React from 'react'
import { Link } from 'react-router'
import Input from './Input'

function Signup() {
  return (
        <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Sign in to your account
                  </h1>
                  <form className="space-y-4 md:space-y-6" action="#">
                      <Input
                        label="Username"
                        type="text"
                        id="username"
                        name="username"
                      />
                      <Input
                        label="Email"
                        type="email"
                        id="email"
                        name="email"
                      />
                      <Input
                        label="Password"
                        type="password"
                        id="password"
                        name="password"
                      />
                      <Input
                        label="Confirm Password"
                        type="password"
                        id="c_password"
                        name="c_password"
                      />
                      <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                          Don’t have an account yet? 
                          <Link to="/login" >
                          <span className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</span>
                          </Link>
                      </p>
                  </form>
              </div>
          </div>
      </div>
    </section>
  )
}

export default Signup