import { useEffect, useState } from "react"
import { Card } from "./charactersCard"
import style from './characters.scss'
import { Pagination } from "./pagination"
//import { PopoverYeah } from "./popOver"

import { getCharacter } from "../../redux/charsReducer"

export const Characters = () => {
  
  
  

  const [Characters, setCharacters] = useState(null)
 /*  const [alive, setAlive] = useState(null)
  console.log(alive)
 const statusFilter = async (status) => {
     let url = `https://rickandmortyapi.com/api/character?status=${status}`
     const result = await fetch(url)
     const response = await result.json()
     console.log(response)
     setCharacters(response.results)
   }
  useEffect(() => {
     console.log('yes ')
   }, [alive]) */

  return (
    <>
      <Pagination setCharacters={setCharacters} />
      {/* <button onClick={() => statusFilter('Dead')}>filter</button>
      <button onClick={() => statusFilter('Alive')}>alive</button>
      <button onClick={() => statusFilter('Unknown')}>Unknown</button> */}
      <div className="container_list">
        {Characters &&
          Characters.map((character, index) => (
            <ul>
              <li>
                <Card character={character} />
              </li>
            </ul>
          ))}
        
      </div>
    </>
  )
}