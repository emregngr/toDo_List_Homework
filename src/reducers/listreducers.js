import { GET_LIST, ADD_LIST, ADD_LIST_LOCAL, UPDATE_LIST, DELETE_LIST } from '../actions/types'
import AsyncStorage from '@react-native-community/async-storage'


const INITIAL_STATE = {
    list: [],
    id: 0,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_LIST:
        return {
            ...state,
            list: action.payload,
            };
        case ADD_LIST:
            const object = action.payload;
            let array = state.list.slice()

            array.push(object)
            
            AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(array))
        return {
            ...state,
            list: array,
            };

        case UPDATE_LIST:
           const object1 = action.payload;
           let  array1 = state.list.slice();
           let index = array1.findIndex((value) => value.id === object1.id);
           
           var array2 = array1[index]

           AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(array2));
        return {
            ...state,
            list: array2,
      };

        case DELETE_LIST:
            let object2 = action.payload;
            let array3 = state.list.slice();
            let index1 = array3.findIndex((value) => value.id !== object2.id);

            array3.splice(index1, 1);
        
            AsyncStorage.clear();
            AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(array3));
      
      return {
            ...state,
            list: array3,
      };
            
        default:
            return state;
    }
}