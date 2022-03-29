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
      <div className="container w-full mx-auto px-2 py-8 overflow-hidden shadow-md">
        <ToastContainer />
        {children}
      </div>
    </div>
  )
}
