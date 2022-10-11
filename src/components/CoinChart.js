import {useEffect, useState} from 'react';
import React from 'react';
import Chart from "react-apexcharts";
const CoinChart = ({coin}) => {
  
  const state = {
    options: {
      colors: ["#1064a3"],
      chart: {
        id: "basic-bar",
      },


      tooltip: {
        enabled: true,
        custom: undefined,
        theme:'dark',
        style: {
          fontSize: '13px',
          fontFamily: undefined,
          fontWeight: '400',
        }
      },
      
      fill: {
        colors: ['#266eaa'],
      },
      Response:true,
      
      xaxis: {
        categories: ['1h','24h','7d','14d','30d','60d','200d','1y'],
      },
      dataLabels: {
        style: {
          colors: ['#fff']
        }
      },
    },
    series: [
      {
        name: "Coin Market",
        data: [
                    ` ${coin.market_data?.price_change_percentage_1h_in_currency ? (coin.market_data.price_change_percentage_1h_in_currency.usd.toFixed(2)) : null}`,
                    ` ${coin.market_data?.price_change_percentage_24h_in_currency ? (coin.market_data.price_change_percentage_24h_in_currency.usd.toFixed(2)) : null}`,
                    ` ${coin.market_data?.price_change_percentage_24h_in_currency ? (coin.market_data.price_change_percentage_7d_in_currency.usd.toFixed(2)) : null}`,
                    ` ${coin.market_data?.price_change_percentage_24h_in_currency ? (coin.market_data.price_change_percentage_14d_in_currency.usd.toFixed(2)) : null}`,
                    ` ${coin.market_data?.price_change_percentage_24h_in_currency ? (coin.market_data.price_change_percentage_30d_in_currency.usd.toFixed(2)) : null}`,
                    ` ${coin.market_data?.price_change_percentage_24h_in_currency ? (coin.market_data.price_change_percentage_60d_in_currency.usd.toFixed(2)) : null}`,
                    ` ${coin.market_data?.price_change_percentage_24h_in_currency ? (coin.market_data.price_change_percentage_200d_in_currency.usd.toFixed(2)) : null}`,
                    ` ${coin.market_data?.price_change_percentage_24h_in_currency ? (coin.market_data.price_change_percentage_1y_in_currency.usd.toFixed(2)) : null}`,
                  ],
      },
    ],
  }
  return (

    <div className="row">     
    <div className="col-4">
    <Chart
      options={state.options}
      series={state.series}
      type="bar"
      className="chartJs"
    />
  </div>
</div>
  
  )
}

export default CoinChart