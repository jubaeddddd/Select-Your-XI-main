import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'

function App() {

  const [coins,setCoins]=useState(0)

  const claimCoins=()=>{
    setCoins(coins + 700000)
  }

  return (
    <>
      <div className='mx-auto container'>
        <Header coins={coins} claimCoins={claimCoins}></Header>
      </div>
    </>
  )
}

export default App
