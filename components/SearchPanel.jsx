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
import { SearchPanelVisiable } from '../atoms/SearchAtom'
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
  const searchVisiable = useRecoilValue(SearchPanelVisiable)
  const setSearchPanelVisiable = useSetRecoilState(SearchPanelVisiable)
  const searchbar = useRef(null)
  useEffect(() => {
    if (searchVisiable) {
      searchbar.current.focus()
    }
  }, [searchVisiable])

  return (
    <div
      className={classNames(
        'absolute  transform min-h-screen w-screen transition-all duration-200 bg-neutral-700 p-2 pt-4 z-40',
        {
          'translate-y-0': searchVisiable,
          '-translate-y-full': !searchVisiable,
        },
      )}
    >
      <div className="grid gap-4 container mx-auto p-2">
        {/* Search-Panel Header */}
        <div className="flex justify-between items-center">
          <h3 className=" text-2xl font-bold">Search</h3>
          <XIcon
            className="btn-md cursor-pointer rounded-full bg-neutral-900 bg-opacity-50 p-1 hover:bg-opacity-75 transition-all duration-200"
            onClick={() => setSearchPanelVisiable(false)}
          />
        </div>
        {/* Search-Panel Input */}
        <div>
          <div className="flex max-w-lg mx-auto ">
            <input
              ref={searchbar}
              type="text"
              name=""
              id=""
              placeholder="Search"
              className=" grow form-none text-black border-2 !border-red-400 focus:border-2 rounded-tl-sm rounded-bl-sm"
            />
            <button className=" flex-1 bg-red-400 font-semibold rounded-tr-sm rounded-br-sm">
              Search
            </button>
          </div>
        </div>
        {/* Top articels */}
        <div className="flex justify-between items-end mt-4">
          <h4 className=" text-lg font-bold">Trending Articles</h4>
          <h4 className=" text-lg text-red-300">See All</h4>
        </div>
        <div className=" inline-flex gap-2 overflow-y-auto pb-4 scroll-smooth">
          {data.slice(0, 10).map((item, index) => (
            <SmallArticleCard key={index} data={item} />
          ))}
        </div>
        {/* Genres */}
        <div className="flex justify-between items-end">
          <h4 className=" text-lg font-bold">Top Genres</h4>
          <h4 className=" text-lg text-red-300">See All</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {genres.map((item, index) => {
            return (
              <div key={item.id} className="flex gap-2 items-center">
                <item.icon className="btn-sm text-red-300" />
                <h6>{item.name}</h6>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
