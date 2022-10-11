import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CoinChart from '../components/CoinChart';
import HistoryChart from '../components/HistoryChart';
import Spinner from './spinnerTwo.svg'
import './coin.css'


const Coin = () => {
    const [isLoading, setIsLoading] = useState(true)
    
    const parms = useParams()
     
    console.log(parms.coinId)
    const [coin, setCoin] = useState({})
    
    const url = `https://api.coingecko.com/api/v3/coins/${parms.coinId}`
    

    useEffect(() => {
        axios.get(url).then((res) => {
            setCoin(res.data)
            setIsLoading(false)
        }).catch((error) => {
            console.log(error)
        })
    }, [])
    
  const [historyCoin, setHistoryCoin] = useState(true)
 
  const [coinCss, setCoinCss] = useState('')
  useEffect(() => {
      if(coin.market_data?.price_change_24h > 0) {
    setCoinCss('green')
  } 
  else {
    setCoinCss('red')
  }
}, [])
 
console.log(coin)

return (
    <>
    {isLoading ? <div className='element'>
        <img src={Spinner} alt='loading'/>
    </div>: 
    <div className='container-coin'>
         <div className='content-name'>
            <h2>{coin.name}</h2>
         </div>
        
         <div className='content'>
            <div className='rank'>
                <span className='rank-btn'>Rank # {coin.market_cap_rank}</span>
            </div>
          
            <div className='info'>
                <div className='coin-heading'>
                    {coin.image ? <img src={coin.image.small} alt='' /> : null}
                    <div className='name-symbol'>
                    <p>{coin.name}</p>
                    <p className='symbol'>{coin.symbol}</p>
                    </div>
                </div>
                <div className='coin-price'>
                     <h5>Last Update</h5>
                     {/* {coin.last_updated} */}
                    <h4 className={`${coinCss}`}>{coin.market_data?.price_change_24h.toFixed(3)}%</h4>
                    <h3>${coin.market_data?.current_price? (coin.market_data.current_price.eur) : null}</h3>
                  <div className='market-info'>
                    <h6>Low: ${coin.market_data?.low_24h?.eur} </h6>
                    <h6>High: ${coin.market_data?.high_24h?.eur} </h6>
                  </div>
                </div>
                
            </div>
         </div>
         <div className='btn-coin'>
         <h4>COIN PRICE CHANGE</h4>
         <div>
            <button className="btna " onClick={() => setHistoryCoin(false)}>History</button>
            <button className="btna" onClick={() => setHistoryCoin(true)}>Details</button>
         </div>
             </div>
         <div className='content'>
                <div>
                    {
                   historyCoin ? <HistoryChart parmsCoin={parms.coinId} coin={coin} />:<CoinChart coin={coin}/>
                    }
                </div>
         </div>
         <div >
         <h2>Info</h2>
            <div className='info-coin'>
                <p>{coin.description? (coin.description.el) : ('')}</p>
            </div>
         </div>
    </div>
     }    
     </>
  )
}

export default Coin