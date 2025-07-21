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
  const [toggle, setToggle] = useState(true)
  const [selected, setSelected] = useState([])

  const claimCoins = () => {
    setCoins(coins + 700000)
  }

  useEffect(() => {
    fetch('players.json')
      .then(res => res.json())
      .then(data => setPlayers(data))
  }, [])

  const handleToggle = (state) => {
    setToggle(state)
  }

  const handleSelected = (player) => {
    if (coins < player.price) {
      alert('you cant buy him')
    }
    else {
      const newSelected = [...selected, player]
      setSelected(newSelected)
      setCoins(coins - player.price)
      alert('you bought the player')
      console.log(player)
    }
  }

  const deletePlayer = (player) => {
    const newSelectedAfterRemoving = selected.filter(select => select.id != player.id)
    setSelected(newSelectedAfterRemoving)
    setCoins(coins+player.price)
  }


  return (
    <>
      <div className='mx-auto container'>
        <Header coins={coins} claimCoins={claimCoins}></Header>
        <Toggle selected={selected} handleToggle={handleToggle}></Toggle>
        {
          toggle ? <Players handleSelected={handleSelected} players={players}></Players> : <Choosed deletePlayer={deletePlayer} handleToggle={handleToggle} selected={selected}></Choosed>
        }
        <Footer></Footer>
      </div>
    </>
  )
}

export default App
