import React, { useState } from 'react'
import CoinItem from './CoinItem'
import { Link } from 'react-router-dom'
import Coin from '../routes/Coin'
const Coins = ({coins}) => {
    const [itemCoin, setItemCoin] = useState()

return (
    <div className='container_'>
      <div>
        <div className='heading heading-coin'>
            <p className='coin-name'>#</p>
            <p className='coin-number'>Coin</p> 
            <p>Price</p>
            <p>24h</p>
            <p className=' hide-mobile'>Volume</p>
            <p className='hide-mobile'>Mkt Cap</p>
        </div>
        {coins.map(coins =>  
        {
          return(
           <Link className='text-link'  to={`/coin/${coins.id}`} element={<Coin id={coins.id} />}  key={coins.id}>
                <CoinItem coin={coins}  />
           </Link>
           )} )}
      </div>
    </div>
  )
}

export default Coins