import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <nav className='sticky top-0 left-0 backdrop-blur-xl text-textColor flex rounded-b-xl shadow-md items-center h-[10vh]'>
        <h2 className='justify-self-start ml-8 text-4xl font-semibold '>Om Gate</h2>
        <div className='h-full text-tex justify-self-center  mx-auto'>
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
                <Link to = '/blogs'>
                    Blogs
                </Link>
            </li>
        </ul>
        
        </div>
        <h2 className='justify-self-start mr-8 text-4xl font-semibold outline outline-2 text-transparent'>Om Gate</h2>
    </nav>
  )
}
