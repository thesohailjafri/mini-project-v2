import React from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from './Navbar'
import SearchPanel from './SearchPanel'
import 'react-toastify/dist/ReactToastify.css'
export default function Layout({ children }) {
  return (
    <div className=" relative">
      <SearchPanel />
      <Navbar />
      <div className="container w-full min-h-screen mx-auto px-2 pb-8 p-20 overflow-hidden  md:shadow-xl">
        <ToastContainer autoClose={4000} />
        {children}
      </div>
    </div>
  )
}
