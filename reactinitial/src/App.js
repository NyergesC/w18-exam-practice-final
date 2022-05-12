import React, { useEffect, useState } from "react"
import LoadingMask from "./components/LoadingMask"
import Character from "./components/Character"
import Subscription from "./components/Subscription"

const App = () => {

  const [character, setCharacter] = useState([]) 
  const [loading, setLoading] = useState(false)
  const [showComp, setShowComp] = useState(false)

  async function fetchCharacters() {
    const response = await fetch ("https://demoapi.com/api/series/howimetyourmother")
    const responseJSON = await response.json()

    setCharacter(responseJSON)
    setLoading(false)


  }

  useEffect(()=>{
    setLoading(true)
    fetchCharacters()
  }, [])


  useEffect(()=>{
    setInterval (()=>{
      setShowComp(!showComp)

    }, 10000)
 
  }, [])

  return (
    <div>
       <h1>Series Api</h1>
       {loading ? 
       <LoadingMask /> :
       <>       
              
       {character.map(({name, details}) => <Character key={name} name={name} details={details} />)}
       </>
       }
       {showComp && <Subscription  />}
    </div>
  )
}

export default App
