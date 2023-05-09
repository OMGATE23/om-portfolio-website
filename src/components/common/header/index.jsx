import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <nav className='px-12 text-textColor flex rounded-b-xl shadow-md items-center justify-between h-[10vh]'>
        <h2 className=' ml-2 text-3xl lg:text-4xl font-semibold '>Om Gate</h2>
        <div className='h-full'>
        <ul className=' h-full flex items-center gap-24 text-xl '>
            <li className='transition-transform duration-300 hover:border-b-2 hover:translate-y-[-5px] border-black font-bold hover:cursor-pointer'>
                <Link to='/'>
                    Home
                </Link>
            </li>

            <li className='transition-transform duration-300 hover:border-b-2 hover:translate-y-[-5px] border-black font-bold hover:cursor-pointer'>
                <Link to='/projects'>
                    Projects
                </Link>
            </li>

            <li className='transition-transform duration-300 hover:border-b-2 hover:translate-y-[-5px] border-black font-bold hover:cursor-pointer'>
                <a href="https://omgate.hashnode.dev/">Blogs</a>
            </li>
        </ul>
        
        </div>
        
    </nav>
  )
}
