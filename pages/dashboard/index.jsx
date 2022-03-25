import { debounce } from 'lodash'
import React, { useState, useCallback, useEffect } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  ReferenceLine,
  ReferenceArea,
  ReferenceDot,
  Tooltip,
  CartesianGrid,
  Legend,
  Brush,
  ErrorBar,
  AreaChart,
  Area,
  Label,
  LabelList,
} from 'recharts'
import ArticleCard from '../../components/ArticleCard'
import MyArticleCard from '../../components/MyArticleCard'
import data from '../../json/articles.json'
import Link from 'next/link'
import { PlusCircleIcon } from '@heroicons/react/solid'
export default function Index() {
  const [articles, setArticles] = useState(data)

  const [data03, setData03] = useState([
    { date: 'Jan 04 2016', price: 105.35 },
    { date: 'Jan 05 2016', price: 102.71 },
    { date: 'Jan 06 2016', price: 100.7 },
    { date: 'Jan 07 2016', price: 96.45 },
    { date: 'Jan 08 2016', price: 96.96 },
    { date: 'Jan 11 2016', price: 98.53 },
    { date: 'Jan 12 2016', price: 99.96 },
    { date: 'Jan 13 2016', price: 97.39 },
    { date: 'Jan 14 2016', price: 99.52 },
    { date: 'Jan 15 2016', price: 97.13 },
    { date: 'Jan 19 2016', price: 96.66 },
    { date: 'Jan 20 2016', price: 96.79 },
    { date: 'Jan 21 2016', price: 96.3 },
    { date: 'Jan 22 2016', price: 101.42 },
    { date: 'Jan 25 2016', price: 99.44 },
    { date: 'Jan 26 2016', price: 99.99 },
    { date: 'Jan 27 2016', price: 93.42 },
    { date: 'Jan 28 2016', price: 94.09 },
    { date: 'Jan 29 2016', price: 97.34 },
    { date: 'Feb 01 2016', price: 96.43 },
    { date: 'Feb 02 2016', price: 94.48 },
    { date: 'Feb 03 2016', price: 96.35 },
    { date: 'Feb 04 2016', price: 96.6 },
    { date: 'Feb 05 2016', price: 94.02 },
    { date: 'Feb 08 2016', price: 95.01 },
    { date: 'Feb 09 2016', price: 94.99 },
    { date: 'Feb 10 2016', price: 94.27 },
    { date: 'Feb 11 2016', price: 93.7 },
    { date: 'Feb 12 2016', price: 93.99 },
    { date: 'Feb 16 2016', price: 96.64 },
    { date: 'Feb 17 2016', price: 98.12 },
    { date: 'Feb 18 2016', price: 96.26 },
    { date: 'Feb 19 2016', price: 96.04 },
    { date: 'Feb 22 2016', price: 96.88 },
    { date: 'Feb 23 2016', price: 94.69 },
    { date: 'Feb 24 2016', price: 96.1 },
    { date: 'Feb 25 2016', price: 96.76 },
    { date: 'Feb 26 2016', price: 96.91 },
    { date: 'Feb 29 2016', price: 96.69 },
    { date: 'Mar 01 2016', price: 100.53 },
    { date: 'Mar 02 2016', price: 100.75 },
    { date: 'Mar 03 2016', price: 101.5 },
    { date: 'Mar 04 2016', price: 103.01 },
    { date: 'Mar 07 2016', price: 101.87 },
    { date: 'Mar 08 2016', price: 101.03 },
    { date: 'Mar 09 2016', price: 101.12 },
    { date: 'Mar 10 2016', price: 101.17 },
    { date: 'Mar 11 2016', price: 102.26 },
    { date: 'Mar 14 2016', price: 102.52 },
    { date: 'Mar 15 2016', price: 104.58 },
    { date: 'Mar 16 2016', price: 105.97 },
    { date: 'Mar 17 2016', price: 105.8 },
    { date: 'Mar 18 2016', price: 105.92 },
    { date: 'Mar 21 2016', price: 105.91 },
    { date: 'Mar 22 2016', price: 106.72 },
    { date: 'Mar 23 2016', price: 106.13 },
    { date: 'Mar 24 2016', price: 105.67 },
    { date: 'Mar 28 2016', price: 105.19 },
    { date: 'Mar 29 2016', price: 107.68 },
    { date: 'Mar 30 2016', price: 109.56 },
    { date: 'Mar 31 2016', price: 108.99 },
  ])

  const [chartWidth, setChartWidth] = useState(700)

  const setWindowWidthDebounched = useCallback(
    debounce(() => {
      const width = window.innerWidth
      const calculateNewWidth = () => {
        let newWidth
        if (width < 560) {
          newWidth = width
        } else if (width < 768) {
          newWidth = 640
        } else if (width < 1024) {
          newWidth = 768
        } else if (width < 1280) {
          newWidth = 1024
        } else if (width < 1536) {
          newWidth = 1280
        } else {
          newWidth = 1536
        }
        newWidth -= 60
        console.log(width, newWidth)
        return newWidth
      }
      setChartWidth(calculateNewWidth())
    }, 100),
    [],
  )
  useEffect(() => {
    setWindowWidthDebounched()
  }, [])
  useEffect(() => {
    window.addEventListener('resize', setWindowWidthDebounched, false)
  }, [])

  const greetings = () => {
    let myDate = new Date()
    let hrs = myDate.getHours()
    let mins = myDate.getMinutes()
    let greet
    if (hrs >= 5 && ((hrs == 5 && mins >= 30) || (hrs > 5 && hrs < 12)))
      greet = 'Good Morning'
    else if (hrs >= 12 && hrs < 18) greet = 'Good Afternoon'
    else if ((hrs >= 18 && hrs < 24) || hrs > 0) greet = 'Good Evening'
    else greet = 'Greetings'
    return greet
  }

  return (
    <div className="grid gap-4 my-4">
      {/* greetings */}
      <div className="flex justify-between">
        <h3 className=" text-3xl font-semibold">
          {greetings()} <span className=" text-red-800">Sohail</span>
        </h3>
        <div>
          <Link href="dashboard/upload">
            <button className=" sepia-btn">
              <PlusCircleIcon className="btn-sm" />
              Upload Article
            </button>
          </Link>
        </div>
      </div>
      {/* articles stats */}
      <div className="bg-sepia-300 bg-opacity-50 rounded-sm w-full p-4 shadow-sm">
        <p className=" text-center text-2xl my-2">Total Views</p>
        <hr className="hr-line" />
        <div className="line-chart-wrapper ">
          <LineChart
            className="mx-auto xl:mx-0"
            width={chartWidth}
            height={300}
            data={data03}
            margin={{ top: 40, right: 40, bottom: 20, left: 20 }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="date" stroke="#0a0806" />
            <YAxis domain={['auto', 'auto']} stroke="#0a0806" />
            <Tooltip
              wrapperStyle={{
                borderColor: '#0a0806',
                boxShadow: '2px 2px 3px 0px #bcad91',
              }}
              contentStyle={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }}
              labelStyle={{ fontWeight: 'bold', color: '#0a0806' }}
            />
            <Line dataKey="price" stroke="#DC2626" dot={true} />
            <Brush
              dataKey="date"
              startIndex={data03.length - 40}
              stroke="#564a34"
            >
              <AreaChart>
                <CartesianGrid />
                <YAxis hide domain={['auto', 'auto']} />
                <Area
                  dataKey="price"
                  stroke="#DC2626"
                  fill="#DC2626"
                  dot={false}
                />
              </AreaChart>
            </Brush>
          </LineChart>
        </div>
      </div>
      {/* articles listing */}
      <div className="bg-sepia-300 bg-opacity-50 rounded-sm w-full p-4 shadow-sm">
        <p className=" text-center text-2xl my-2">Articles</p>
        <hr className="hr-line" />
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
          {articles.splice(0, 10).map((item, index) => (
            <MyArticleCard key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}
