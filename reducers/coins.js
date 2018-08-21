import axios from 'axios'
import { BASE_URL } from '../utils/urls'

const COINS = 'COINS'
const ADD_COIN = 'ADD_COIN'
const REMOVE_COIN = 'REMOVE_COIN'

//actions
export const addCoin = (coin) => {
  return (dispatch) => {
    axios.post(`${BASE_URL}/api/coins`, { coin })
      .then( res => {
        dispatch({ type: ADD_COIN, coin: res.data, headers: res.headers })
      })
  }
}

export const getCoins = () => {
  return (dispatch) => {
    axios.get(`${BASE_URL}/api/coins`)
      .then( res => {
        dispatch({ type: COINS, coins: res.data, headers: res.headers })
      })
  }

}

export const removeCoin = (id) => {
  return (dispatch) => {
    axios.put(`${BASE_URL}/api/coins/${id}`)
      .then( res => {
        dispatch({ type: REMOVE_COIN, id, headers: res.headers })
      })
  }
}

export default (state = [], action) => {
  switch (action.type) {
    case COINS:
      return action.coins
    case ADD_COIN:
      return [...state, action.coin]
    case REMOVE_COIN:
      return state.filter( c => c.id !== action.id )
    default:
      return state
  }
}



