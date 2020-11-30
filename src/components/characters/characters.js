import { useEffect, useState } from "react"
import { Card } from "./charactersCard"
import style from './characters.scss'
import { Pagination } from "./pagination"

export const Characters = () => {
  
const [Characters, setCharacters] = useState(null)
  const [filter, setFilter] = useState(null)
// Вот этот блок кода запрашивает фильтрацию по статусу, и кладёт респонс у Characters
  const [alive, setAlive] = useState(null)
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
   }, [alive])

  return (
    <>
      <Pagination setCharacters={setCharacters} />
      <button onClick={() => statusFilter('Dead')}>Dead</button>
      <button onClick={() => statusFilter('Alive')}>Alive</button>
      <button onClick={() => statusFilter('Unknown')}>Unknown</button>
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