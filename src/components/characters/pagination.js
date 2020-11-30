import React, {useState,useEffect} from 'react'

export const Pagination = ({ setCharacters}) => {
  const [info, setInfo] = useState(1)
 
 const fetchCharacters = async (page) => {
    // const {page, status} = params

    let url = `https://rickandmortyapi.com/api/character`

    if (page) {
      url += `/?page=${page}`
    }
    const result = await fetch(url)
    const response = await result.json()
    const pageInfo = response.info
   console.log(response)

    setInfo({
      next: page < pageInfo.pages ? page + 1 : null,
      current: page,
      prev: page > 1 ? page - 1 : null,
    })
    setCharacters(response.results)
  }
     useEffect(() => {
       fetchCharacters(1)
      
      }, [])
     
     return(
       <div className="pagination">
         
         {info.prev ? (
           <button type="button" onClick={() => fetchCharacters(info.prev)}>
             {info.prev}
           </button>
         ) : (
           <React.Fragment />
         )}

         <button type="button">{`Current page is ${info.current}`}</button>

         {info.next ? (
           <button type="button" onClick={() => fetchCharacters(info.next)}>
             {info.next}
           </button>
         ) : (
           <React.Fragment />
           )}
         
       </div>
     )
     
   }
