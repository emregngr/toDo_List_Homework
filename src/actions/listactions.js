
import {
  ADD_LIST,
  GET_LIST,
  ADD_LIST_LOCAL,
  UPDATE_LIST,
  DELETE_LIST,
} from './types'
import AsyncStorage from '@react-native-community/async-storage'


export const addList = (payload) => {
  return (dispatch) => {
     dispatch({  type: ADD_LIST, payload })
  }
}

export const getList = () => {
  return async (dispatch) => {
      let data = await AsyncStorage.getItem(ADD_LIST_LOCAL)
      if (data) {
          dispatch({  type: GET_LIST, payload: JSON.parse(data) })
      }
          
  }
}
export const updateList = (payload) => {
  return (dispatch) => {
     dispatch({  type: UPDATE_LIST, payload })
  }
}

export const deleteList = (payload) => {
  return (dispatch) => {
     dispatch({  type: DELETE_LIST, payload })
  }
}