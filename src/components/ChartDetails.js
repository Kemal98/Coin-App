import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import moment from 'moment'
 
const ChartDetails = ({dataCoin}) => {

const {day, week, year} = dataCoin



const [timeFormat, setTimeForamt] = useState('7d')

function getWindowSize() {
  const {innerWidth} = window;
  return {innerWidth};
}

const [windowSize, setWindowSize] = useState(getWindowSize());

useEffect(() => {
  
  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }

  window.addEventListener('resize', handleWindowResize);

  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };

 
}, [windowSize]);




const determineTimeFormat = () => {
  if(timeFormat === '24h') {
    return day
  }
  else if (timeFormat === '7d') {
    return week
  }
  else if (timeFormat === '1y')  
  {
    return year
  }
}


  const state = {
    Chart: {
      width: 650,
    
  },
  


    options: {
      colors: [
        "#19b3f0",   
           
      ],
       
      Responsive: [{
        Breakpoint: 480,
        Options: {
            Chart: {
                Width: 200
            },
      
        }
    }],
      grid: {
        clipMarkers: true,
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      
      fill: {
        gradient: {
          enabled: false,
          opacityFrom: 0.95,
          opacityTo: 0
        }
      },
      markers: {
        size: 0,
        colors: ["#000524"],
        strokeColor: "#00BAEC",
        strokeWidth: 2,
      },
      responsive: [{
        breakpoint: undefined,
        options: {},
    }],
    
    colors: ['#DCE6EC'],
    title: {
      text: 'COINS',
      offsetX: 30,
      style: {
        fontSize: '24px',
        color: '#78909c',
      },
    },
     tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared: true,
        followCursor: true,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        theme:'dark',
        style: {
          fontSize: '13px',
          fontFamily: undefined,
          fontWeight: '400',
        },
      
      
        marker: {
            show: true,
        },
       
        fixed: {
            enabled: false,
            position: 'topRight',
            offsetX: 0,
            offsetY: 0,
        },
      },    
      xaxis: {
        categories: determineTimeFormat()?.map(value => moment(value.t).format('MMM DD')),
      },
  
      yaxis: {
        title: {
          text: 'Performance',
          
        },
      
      },
      dataLabels: {
        style: {
          fontSize: '0',
          fontFamily: 'Helvetica, Arial, sans-serif',
          fontWeight: 'bold',
          colors: undefined
       },

      },
    },
 
    series: [
      {
        color:'#189afc',
        name: "Price",
        data: determineTimeFormat()?.map(value => value.y),
      },
    ],
  }    



    return (
    <div className="history-chart">
     
         <div className="row">     
          <div className="col-4">
          <Chart
            options={state.options}
            series={state.series}
            type="area"
            className="chartJs"

            />
       </div>
        </div>
         <div className="chart-button mt-2">
          <button onClick={() => setTimeForamt('24h')} className="bta">24H</button>
          <button onClick={() => setTimeForamt('7d')}  className="bta no">7D</button>
          <button onClick={() => setTimeForamt('1y')} className="bta mounth no">1M</button>
        </div>
     </div>
  )
}

export default ChartDetails
