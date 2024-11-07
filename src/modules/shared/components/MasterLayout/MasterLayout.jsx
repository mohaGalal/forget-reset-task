import React from 'react'
import Navbar from '../navbar/Navbar'
import Header from '../header/Header'
import { Outlet } from 'react-router-dom'

export default function  () {
  return (
    <div className='d-flex'>
      <div className='w-25 bg-info'>sidebar</div>
      <div className='w-100 bg-success'>
        <Navbar/>
        <Header/>
        <Outlet/>
      </div>

    </div>
  )
}
