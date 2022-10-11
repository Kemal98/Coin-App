import React from 'react'

const CoinItem = ({coin}) => {

  console.log(coin.current_price)
  return (
    <div className='coin-row'>
       <p className='rank'>{coin.market_cap_rank}</p>
       <div className='img-symbol'>
         <img src={coin.image}/>
         <p>{coin.symbol.toUpperCase()}</p>
         </div>
       <p>${coin.current_price.toLocaleString()}</p>
       <p>{coin.price_change_percentage_24h.toFixed(2)}%</p>
       <p>{coin.total_volume.toLocaleString()}</p>
       <p>{coin.market_cap.toLocaleString()}</p>
    
    </div>
  )
}

export default CoinItem