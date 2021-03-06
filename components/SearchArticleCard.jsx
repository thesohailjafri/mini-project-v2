import React from 'react'

export default function SearchArticleCard({ data }) {
  return (
    <div className="flex shrink-0 w-full max-w-sm bg-sepia-300 bg-opacity-50 rounded-sm overflow-hidden gap-2 items-center">
      <img
        src={data.image_url || '/assets/images/news-image-1x1.svg'}
        alt="news-1x1-image"
        className="shrink-0 w-20 h-full object-cover sepia-25"
      />
      {/* Article Title */}
      <h3 className="text-base ">{data.title}</h3>
    </div>
  )
}
