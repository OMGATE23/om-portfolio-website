import React from 'react'

import MyIntro from '../../components/myintro'
import Aboutme from '../../components/aboutme'
import Content from '../../components/content'
export default function index() {
  return (
    <div className='bg-white'>
        <MyIntro/>
        <Aboutme/>
        <Content/>
    </div>
  )
}
