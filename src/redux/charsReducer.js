import { apiCharacters } from "../api/api"

const initialState = {
  data: null,
  status: null
}
export const characterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CHARACTERS': {
      return {
        ...state,
        data: action.payload,
      }
    }
    case 'SET_STATUS': {
      return {
        ...state,
        status: action.status,
      }
    }
   }
  return state
}
export const setCharacter = (data) => ({
  type: 'SET_DATA',
  payload: data,
})
export const setStatus = (status) => ({
  type: 'SET_STATUS',
  payload: status,
})

export const getCharacter = (data) => async (dispatch) => {

  const data = await apiCharacters.getChars(data)
  dispatch(setCharacter(data))
  console.log(data)
}
/* export const getWeather = (status) => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const data = await WeatherApi.getWeather(city)
    dispatch(setLoading(false))
    dispatch(setData(data))
    dispatch(setError(''))
  } catch (error) {
    dispatch(setLoading(true))
    dispatch(setError('city does not exist'))
    dispatch(setLoading(false))
    if (!city) {
      dispatch(setError(''))
    }
  }
} */