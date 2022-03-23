import React from 'react'
import { SearchIcon } from '@heroicons/react/solid'
import { useSetRecoilState } from 'recoil'
import { SearchPanelVisiable } from '../atoms/SearchAtom'
export default function Navbar() {
  const setSearchPanelVisiable = useSetRecoilState(SearchPanelVisiable)

  return (
    <div className=" bg-sepia-800 shadow-md">
      <div className="container mx-auto flex justify-between px-2 py-3">
        <div className="">
          <img
            src="./assets/images/logo.svg"
            alt="NEWSDAiLY"
            className=" w-32"
          />
        </div>
        <div className="">
          <SearchIcon
            className="btn-md text-sepia-50 cursor-pointer"
            onClick={() => setSearchPanelVisiable(true)}
          />
        </div>
      </div>
    </div>
  )
}
