import React from 'react'
import Header from './components/common/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'

const Main = () => {
  return (
    <div className='bg-black p-8 text-neutral-50'>
        <div className='bg-neutral-900 p-2 rounded-lg'>
          <Header/>
          <Outlet/>
          <Footer/>
        </div>
    </div>
  )
}

export default Main