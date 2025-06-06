import React from 'react'
import { useNavigate } from 'react-router'

function Header() {
    //const navigate = useNavigate()
    const navItems = [
        {
            name: 'Login',
            url: '/login',
        },

    ]
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navItems.map((item)=>(
            <li key={item.name}>
            <button onClick={()=>navigate(item.url)} className="block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">{item.name}</button>
            </li>
            ))}
        </ul>
        </div>
    </div>
    </nav>
  )
}

export default Header