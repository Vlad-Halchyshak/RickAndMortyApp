import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { characterReducer } from './charsReducer'


const reducers = combineReducers({
  characters: characterReducer,
})
const store = createStore(reducers, applyMiddleware(thunk))

export default store
