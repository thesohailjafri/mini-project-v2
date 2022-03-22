import React from 'react'

export default function SearchArticleCard({ data }) {
  return (
    <div className="flex shrink-0 w-80 bg-neutral-600 rounded-sm overflow-hidden gap-2 items-center">
      <img
        src="./assets/images/news-image-1x1.svg"
        alt="news-1x1-image"
        className="shrink-0 w-20 h-full object-cover"
      />
      {/* Article Title */}
      <h3 className="text-base ">{data.title}</h3>
    </div>
  )
}
