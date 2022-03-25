import React from 'react'
import Navbar from './Navbar'
import SearchPanel from './SearchPanel'

export default function Layout({ children }) {
  return (
    <div className=" relative">
      <SearchPanel />
      <Navbar />
      <div className="container mx-auto p-2 overflow-hidden shadow-md">
        {children}
      </div>
    </div>
  )
}
