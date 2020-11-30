import axios from 'axios'
let url = `https://rickandmortyapi.com/api/character`

export const apiCharacters = {
  getChars(data) {
    return axios.get('https://rickandmortyapi.com/api/character')
     
}
}