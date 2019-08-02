import { AUTH_USER, AUTH_ERROR } from 'actions/types'
import axios from 'axios'

export const signUp = ({ email, password }, redirect) => async dispatch => {
  
  
  try {
    const response = await axios.post('http://localhost:3090/signup', { email, password })
    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    })
    localStorage.setItem('token',response.data.token)
    redirect()
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email in use'
    })
  }
  


}



export const signIn = ({ email, password }, redirect) => async dispatch => {
  
  
  try {
    const response = await axios.post('http://localhost:3090/signin', { email, password })
    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    })
    localStorage.setItem('token',response.data.token)
    redirect()
  } catch (e) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Email or password are incorrect'
    })
  }
  


}



export const signOut = () => {
  localStorage.removeItem('token')
  return ({
    type: AUTH_USER,
    payload: ""
  })
}
  



