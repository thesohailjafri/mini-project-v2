import {
  BeakerIcon,
  BriefcaseIcon,
  ChipIcon,
  CurrencyRupeeIcon,
  FilmIcon,
  GlobeAltIcon,
  HeartIcon,
  SearchIcon,
  SpeakerphoneIcon,
  VideoCameraIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import classNames from 'classnames'
import React, { useRef, useEffect } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { searchPanelVisiableState } from '../atoms/searchAtom.js'
import data from '../json/articles.json'
import SmallArticleCard from './SearchArticleCard'

const genres = [
  {
    id: 1,
    name: 'All',
    link: '',
    icon: ViewGridIcon,
  },
  {
    id: 2,
    name: 'Business',
    link: '',
    icon: BriefcaseIcon,
  },
  {
    id: 3,
    name: 'Entertainment',
    link: '',
    icon: VideoCameraIcon,
  },
  {
    id: 4,
    name: 'Health',
    link: '',
    icon: HeartIcon,
  },
  {
    id: 5,
    name: 'Science',
    link: '',
    icon: BeakerIcon,
  },
  {
    id: 6,
    name: 'Sports',
    link: '',
    icon: SpeakerphoneIcon,
  },
  {
    id: 7,
    name: 'Fuel Price',
    link: '',
    icon: CurrencyRupeeIcon,
  },
  {
    id: 8,
    name: 'Web Stories',
    link: '',
    icon: FilmIcon,
  },
  {
    id: 7,
    name: 'Technology',
    link: '',
    icon: ChipIcon,
  },
  {
    id: 8,
    name: 'World',
    link: '',
    icon: GlobeAltIcon,
  },
]

export default function SearchPanel() {
  const searchVisiable = useRecoilValue(searchPanelVisiableState)
  const setSearchPanelVisiable = useSetRecoilState(searchPanelVisiableState)
  const searchbar = useRef(null)
  useEffect(() => {
    if (searchVisiable) {
      searchbar.current.focus()
    }
  }, [searchVisiable])

  return (
    <div
      className={classNames(
        'absolute  transform min-h-screen w-screen transition-all duration-200 bg-sepia-200 p-2 pt-4 z-40',
        {
          'translate-y-0': searchVisiable,
          '-translate-y-full': !searchVisiable,
        },
      )}
    >
      <div className="container grid mx-auto p-2">
        {/* Search-Panel Header */}
        <div className="flex justify-between items-center mb-16">
          <h3 className=" text-3xl font-bold">Search</h3>
          <XIcon
            className="btn-md cursor-pointer rounded-full bg-sepia-800 bg-opacity-30 p-1 hover:bg-opacity-50 transition-all duration-200"
            onClick={() => setSearchPanelVisiable(false)}
          />
        </div>
        {/* Search-Panel Input */}
        <div className="mb-14">
          <div className="flex max-w-lg mx-auto ">
            <input
              ref={searchbar}
              type="text"
              name=""
              id=""
              placeholder="Search..."
              className=" grow form-none text-black border-2 !border-sepia-800 focus:border-2 rounded-tl-sm rounded-bl-sm"
            />
            <button className=" flex-1 bg-sepia-800 transition-all duration-150 ease-out hover:bg-sepia-900 font-semibold rounded-tr-sm rounded-br-sm text-sepia-50 ">
              Search
            </button>
          </div>
        </div>
        {/* Top articels */}

        <div className="flex justify-between items-end">
          <h4 className=" text-2xl font-bold">Trending Articles</h4>
          <h4 className=" text-lg ">See All</h4>
        </div>

        <div className="inline-flex gap-2 overflow-y-auto pb-4 pt-6 scroll-smooth scrollbar-thin scrollbar-thumb-sepia-800 scrollbar-track-sepia-50 mb-14">
          {data.slice(0, 10).map((item, index) => (
            <SmallArticleCard key={index} data={item} />
          ))}
        </div>
        {/* Genres */}
        <div>
          <div className="flex justify-between items-end">
            <h4 className=" text-2xl font-bold">Top Genres</h4>
            <h4 className=" text-lg ">See All</h4>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pb-4 pt-6">
            {genres.map((item, index) => {
              return (
                <div key={item.id} className="flex gap-4 items-center">
                  <item.icon className="btn-md text-sepia-800" />
                  <h6 className="text-lg sm:text-xl">{item.name}</h6>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
