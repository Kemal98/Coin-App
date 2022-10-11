import React, { useEffect, useRef, useState, useParams } from 'react'
import axios from 'axios'
import ChartDetails from './ChartDetails'
const HistoryChart = ({parmsCoin}) => {

  console.log(parmsCoin)

const [coinData, setCoinData] = useState([])
const [isLoading, setIsLoading] = useState(false)
const url = `https://api.coingecko.com/api/v3`

useEffect(() => {
    const formatData = data => {
            return data.map((el) => {
                return {
                  t: el[0],
                  y: el[1].toFixed(2),
                };
              });
    }
    const fetchData = async () => {
        setIsLoading(true)
        const [day, week, year] = await Promise.all([
              axios.get(`${url}/coins/${parmsCoin}/market_chart/`, {
                params:{
                    vs_currency:"usd",
                    days:"1",
                },
              }),
              axios.get(`${url}/coins/${parmsCoin}/market_chart/`, {
                params:{
                    vs_currency:"usd",
                    days:"7",
                },
              }),

              axios.get(`${url}/coins/${parmsCoin}/market_chart/`, {
                params:{
                    vs_currency:"usd",
                    days:"30",
                },
              }),
             ]);

             setCoinData(
                 {
                    day: formatData(day.data.prices),
                    week: formatData(week.data.prices),
                    year: formatData(year.data.prices),
                 });

                 setIsLoading(false)
            }
            fetchData()
}, []);


  return (
    <>
    {isLoading ? (<div>Loading...</div>) : (
        <div>
            <ChartDetails dataCoin={coinData}/>
        </div>
    )}
    </>
  )
}

export default HistoryChart