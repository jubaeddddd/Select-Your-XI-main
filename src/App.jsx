import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Players from './components/Players/Players'

function App() {

  const [coins, setCoins] = useState(0)
  const [players, setPlayers] = useState([])

  const claimCoins = () => {
    setCoins(coins + 700000)
  }

  useEffect(()=>{
     fetch('players.json')
     .then(res=>res.json())
     .then(data=> setPlayers(data))
  },[])

  return (
    <>
      <div className='mx-auto container'>
        <Header coins={coins} claimCoins={claimCoins}></Header>
        <Players players={players}></Players>
      </div>
    </>
  )
}

export default App
