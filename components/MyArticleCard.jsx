import classNames from 'classnames'
import React from 'react'
import { FolderOpenIcon } from '@heroicons/react/outline'
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  BookmarkIcon,
} from '@heroicons/react/solid'
import { format } from 'date-fns'
import Link from 'next/link'

export default function MyArticleCard({ data, index }) {
  let fake = index % 5 === 0
  return (
    <div className="relative shadow-sm grid grid-cols-6 gap-4 bg-sepia-300 bg-opacity-50 p-2 h-60">
      <div className=" absolute z-[1] -top-2 left-7 ">
        <div className="flex justify-center relative">
          <BookmarkIcon
            className={classNames(
              'btn-2xl absolute ',
              fake ? 'text-red-800' : 'text-sepia-800',
            )}
          />
          {fake ? (
            <ExclamationCircleIcon className=" btn-sm mt-2 absolute text-sepia-50 shadow-lg rounded-full" />
          ) : (
            <CheckCircleIcon className=" btn-sm mt-2 absolute text-sepia-50" />
          )}
        </div>
      </div>
      <div className="overflow-hidden col-span-2">
        <img
          src={data.image_url || '/assets/images/news-image-1x1.svg'}
          alt=""
          className=" sepia-25 rounded-sm bg-cover object-cover w-full bg-sepia-600 h-full transform scale-100 group-hover:scale-110 transition-all duration-150 cursor-pointer"
        />
      </div>
      <div className=" col-span-3 flex flex-col overflow-hidden">
        {/* Article Title */}
        <h3 className=" overflow-hidden ">{data.title}</h3>
        {/* Category */}
        <div className=" mt-auto flex gap-2 uppercase">
          {data.category.join(', ')}
        </div>
        {/* Date and meta */}
        <div className="mt-2 text-sepia-900 text-opacity-50">
          <div>{format(new Date(data.pubDate), 'PP')},</div>
          <div className=" flex gap-2">
            <div>View 202,</div>
            <div>Likes 50</div>
          </div>
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-2">
        <Link href={`/dashboard/edit/${index}`}>
          <button className="sepia-btn">Edit</button>
        </Link>
        <button className="red-btn">Delete</button>
        <div className="mt-auto text-center underline">
          <Link href="/">View</Link>
        </div>
      </div>
    </div>
  )
}
