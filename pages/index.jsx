import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="">
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4" id="hero">
        <div className=" col-span-2">
          <Image
            src="https://images.unsplash.com/photo-1519802772250-a52a9af0eacb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1036&q=80"
            alt="Hero"
            layout="responsive"
            className=" object-cover rounded-sm "
            width={1200}
            height={600}
          />
        </div>
        <h2 className=" font-bold text-2xl lg:text-3xl xl:text-4xl col-span-2 my-auto">
          Post-Holi Detox: This Lemon-Pink Salt Water May Help You Detox After
          Holi
        </h2>
      </div>
    </div>
  )
}
