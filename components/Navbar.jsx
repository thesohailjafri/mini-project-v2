import React from 'react'
import { SearchIcon, UserIcon } from '@heroicons/react/outline'
import { useSetRecoilState } from 'recoil'
import { searchPanelVisiableState } from '../atoms/searchAtom'
import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  const setSearchPanelVisiable = useSetRecoilState(searchPanelVisiableState)

  return (
    <div className=" bg-sepia-600 shadow-md absolute top-0 z-10 w-screen">
      <div className="container mx-auto flex justify-between px-2 py-3 items-center">
        <Link href="/">
          <img
            src="/assets/images/logo.svg"
            alt="NEWSDAiLY"
            className=" h-9 cursor-pointer"
          />
        </Link>
        <div className="flex gap-2">
          <div>
            <SearchIcon
              className="btn-md text-sepia-50 cursor-pointer"
              onClick={() => setSearchPanelVisiable(true)}
            />
          </div>
          <div className="">
            <Link href="/auth/login">
              <UserIcon className=" btn-md text-sepia-50 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
