import classNames from 'classnames'
import React from 'react'

export default function ArticleCard({ data, index }) {
  return (
    <div
      className={classNames(
        'flex gap-4 group h-40 bg-sepia-300 p-2 rounded-sm bg-opacity-50',
        index % 5 === 0 ? 'md:col-span-2' : 'md:col-span-1',
        index % 6 === 0 ? 'lg:col-span-2' : 'lg:col-span-1',
        index % 5 === 0 ? 'xl:col-span-2' : 'xl:col-span-1',
      )}
    >
      <div className="flex-1 md:max-w-[240px]">
        <img
          src={data.image_url || './assets/images/news-image-2x1.svg'}
          alt=""
          className=" sepia-25 rounded-sm bg-cover object-cover w-full bg-sepia-600 h-full group-hover:sepia-0 transition-all duration-100 cursor-pointer"
        />
      </div>
      <div className=" flex-1 overflow-hidden">
        {/* Article Title */}
        <h3 className="text-base ">{data.title}</h3>
      </div>
    </div>
  )
}
