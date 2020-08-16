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
            const addlist = action.payload;
            let addlistArray = state.list.slice()

            addlistArray.push(addlist)
            
            AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(addlistArray))
        return {
            ...state,
            list: addlistArray,
        };

        case UPDATE_LIST:
            const updatelist = action.payload;
            let updatelistArray = state.list.slice();

            const updatelistIndex = updatelistArray.findIndex(x => x.id == updatelist.id);

            updatelistArray[updatelistIndex].id = updatelist.id;
            updatelistArray[updatelistIndex].title = updatelist.title;
            updatelistArray[updatelistIndex].description = updatelist.description;
            updatelistArray[updatelistIndex].date = updatelist.date;

            AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(updatelistArray))

            return {
                ...state,
                list: updatelistArray,
        };

        case DELETE_LIST:
            const deletelist = action.payload;
            let deletelistArray = state.list.slice();
            
            const deletelistIndex = deletelistArray.findIndex(y => y.id !== deletelist.id);

            deletelistArray.splice(deletelistIndex, 1);
            
            AsyncStorage.setItem(ADD_LIST_LOCAL, JSON.stringify(deletelistArray));
      
      return {
            ...state,
            list: deletelistArray,
      };
            
        default:
            return state;
    }
}