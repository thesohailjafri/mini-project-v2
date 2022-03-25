import { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ArticleCard from '../components/ArticleCard'
import data from '../json/articles.json'
export default function Home() {
  const [articles, setArticles] = useState(data)
  return (
    <div className="">
      {/* Hero */}
      <article className="grid grid-cols-1 lg:grid-cols-4 gap-4" id="hero">
        <div className=" col-span-2 sepia-25 border-8 border-sepia-600 p-2 rounded-sm hover:sepia-0 transition-all duration-100 cursor-pointer">
          <div className="border-4 border-sepia-500 rounded-sm ">
            <Image
              src="https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
              alt="Hero"
              layout="responsive"
              className=" object-cover"
              width={1200}
              height={600}
            />
          </div>
        </div>
        <div className="col-span-2 my-auto space-y-6">
          <h2 className=" font-bold text-4xl xl:text-5xl ">
            Post-Holi Detox: This Lemon-Pink Salt Water May Help You Detox After
            Holi
          </h2>
          <p className=" hidden sm:block ">
            To make this drink you need a pinch of pink salt, lemon juice and
            ginger, mixed in lukewarm water. That's it! The drink is ready in
            just no time. You might also add some honey for taste.
          </p>
        </div>
      </article>
      <main>
        <hr className=" hr-lines" />
        <h3 className=" text-3xl font-semibold">Trending Articles</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-4">
          {articles.splice(0, 10).map((item, index) => (
            <ArticleCard key={index} data={item} index={index} />
          ))}
        </div>
      </main>
    </div>
  )
}
