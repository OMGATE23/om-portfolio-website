import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
    const [showModal , setShowModal] = useState(false)
  return (
    <nav className='px-4 md:px-12 mx-2  flex border-b-[1px] border-neutral-700 items-center justify-between h-[10vh]'>
        <h2 className=' ml-2 text-3xl font-semibold '>Om Gate</h2>
        <div className='h-full'>
        <ul className=' h-full hidden md:flex items-center gap-24 text-xl '>
            <li className='transition-transform duration-300 hover:border-b-2 border-neutral-50 font-semibold hover:cursor-pointer'>
                <Link to='/'>
                    Home
                </Link>
            </li>

            <li className='transition-transform duration-300 hover:border-b-2 border-neutral-50 font-semibold hover:cursor-pointer'>
                <Link to='/projects'>
                    Projects
                </Link>
            </li>

            <li className='transition-transform duration-300 hover:border-b-2 border-neutral-50 font-semibold hover:cursor-pointer'>
                <a href="https://omgate.hashnode.dev/">Blogs</a>
            </li>
        </ul>
        </div>
        <button onClick={() => setShowModal(true)} ><img width={24}  src = '/hamburger.svg'/></button>
        {
            showModal && (<div className='h-[100dvh] w-[100vw] bg-neutral-900 fixed top-0 left-0 z-[100]'>
                <ul className=' h-full flex flex-col justify-center gap-8 md:hidden items-center text-xl '>
            <li className='transition-transform duration-300 hover:border-b-2 border-neutral-50 font-semibold hover:cursor-pointer'>
                <Link to='/'>
                    Home
                </Link>
            </li>

            <li className='transition-transform duration-300 hover:border-b-2 border-neutral-50 font-semibold hover:cursor-pointer'>
                <Link to='/projects'>
                    Projects
                </Link>
            </li>

            <li className='transition-transform duration-300 hover:border-b-2 border-neutral-50 font-semibold hover:cursor-pointer'>
                <a href="https://omgate.hashnode.dev/">Blogs</a>
            </li>
        </ul>
        <button onClick={() => setShowModal(false)} className='z-[120] absolute top-4 right-4'><img width={24} src='/closs.svg' /></button>
            </div>)
        }
    </nav>
  )
}
