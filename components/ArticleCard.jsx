import classNames from 'classnames'
import React from 'react'

export default function ArticleCard({ data, index }) {
  return (
    <div
      className={classNames(
        'flex gap-4 group h-40 bg-sepia-300 p-2 rounded-sm bg-opacity-50 shadow-sm',
        index % 5 === 0 ? 'md:col-span-2' : 'md:col-span-1',
        index % 6 === 0 ? 'lg:col-span-2' : 'lg:col-span-1',
        index % 5 === 0 ? 'xl:col-span-2' : 'xl:col-span-1',
      )}
    >
      <div className="flex-1 md:max-w-[240px] overflow-hidden">
        <img
          src={data.image_url || '/assets/images/news-image-2x1.svg'}
          alt=""
          className=" sepia-25 rounded-sm bg-cover object-cover w-full bg-sepia-600 h-full transform scale-100 group-hover:scale-110 transition-all duration-150 cursor-pointer"
        />
      </div>
      <div className=" flex-1 overflow-hidden">
        {/* Article Title */}
        <h3
          className={classNames(
            index % 5 === 0 ? 'md:text-xl' : 'md:text-base',
            index % 6 === 0 ? 'lg:text-xl' : 'lg:text-base',
            index % 5 === 0 ? 'xl:text-xl' : 'xl:text-base',
          )}
        >
          {data.title}
        </h3>
        {/* Article Description */}
        <p
          className={classNames(
            'text-sm text-sepia-900 text-opacity-50 mt-2',
            index % 5 === 0 ? 'md:block' : 'md:hidden',
            index % 6 === 0 ? 'lg:block' : 'lg:hidden',
            index % 5 === 0 ? 'xl:block' : 'xl:hidden',
          )}
        >
          {data.description}
        </p>
      </div>
    </div>
  )
}
