
import * as actionTypes from '../type';

const todoReducers = (state =[], action) => {
  switch(action.type){
    case actionTypes.ADDNEW_TODO:
      return[action.payload, ...state]

      default :return state
  }
}


export default todoReducers;