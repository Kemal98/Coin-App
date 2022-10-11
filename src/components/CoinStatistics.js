import React from 'react'
import Chart from "react-apexcharts";


const CoinStatistics = ({coins}) => {
    console.log(coins.map(coin => coin?.market_cap))  
    const state = {
    series: coins.map(coin => coin?.market_cap),
      options: {
        chart: {
          width: 380,
          type: 'pie',
        },
        labels: coins.map(coin => coin.id),
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          },
          
        }]
      },
    }

  return (
    <div className='container element'>
      <Chart options={state.options} series={state.series} type="pie" width={650}/>
    </div>
  )
}

export default CoinStatistics



