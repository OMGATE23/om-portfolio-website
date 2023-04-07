import React from 'react'
import Header from './components/common/header'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer'

const Main = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main