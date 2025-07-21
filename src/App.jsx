import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Players from './components/Players/Players'
import Footer from './components/Footer/Footer'
import Choosed from './components/Choosed/Choosed'
import Toggle from './components/Toggle/Toggle'

function App() {

  const [coins, setCoins] = useState(0)
  const [players, setPlayers] = useState([])
  const [toggle,setToggle]=useState(true)

  const claimCoins = () => {
    setCoins(coins + 700000)
  }

  useEffect(()=>{
     fetch('players.json')
     .then(res=>res.json())
     .then(data=> setPlayers(data))
  },[])

  const handleToggle=(state)=>{
     setToggle(state)
  }


  return (
    <>
      <div className='mx-auto container'>
        <Header coins={coins} claimCoins={claimCoins}></Header>
        <Toggle handleToggle={handleToggle}></Toggle>
        {
          toggle? <Players players={players}></Players> : <Choosed></Choosed>
        }
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
