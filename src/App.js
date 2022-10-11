import {useEffect, useState} from 'react';
import Axios from './components/CoinChart';
import axios from 'axios'
import NavBar from './components/NavBar';
import Coins from './components/Coins';
import { BrowserRouter, NavLink, Routes, Route, Link } from 'react-router-dom';
import Coin from './routes/Coin';
import CoinStatistics from './components/CoinStatistics';
import HistoryChart from './components/HistoryChart';
import CoinChart from './components/CoinChart';

function App() {
const [coins, setCoins] = useState([]);

console.log(coins)

const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
useEffect(() => {
  axios.get(url).then((response) => {
    setCoins(response.data)
    
    console.log(response.data)
  }).catch((error) => {
    console.log(error)
  })
}, []);

const [search, setSearch] = useState('')
const [urlSearch, setUrlSerach] = useState('')

const searchInput = () => {
  console.log(urlSearch)
}


  return(
    <>
    <div className='container'>
      <NavBar/>
    
        <Routes>
          <Route exact  path="/" element={<Coins coins={coins}/>} />
           <Route path='/coin' element={<Coin/>}/>
           <Route path='/statistics' element={<CoinStatistics coins={coins}/>} />
           <Route path='/coin/:coinId' element={<Coin urlSearch={urlSearch} />}/>
           <Route path='/top' element={<CoinChart coin={coins} />}/>
       </Routes>
     </div>
  </>
  );
 }


export default App
