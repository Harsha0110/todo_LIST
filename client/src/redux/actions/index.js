//for API calls

import axios from 'axios';
import { ADDNEW_TODO } from './type';

export const API_URL ="http://localhost:8000";




 export const addNewTodo = (data) =>async(dispatch) => {
   try{
   const res= await axios.post(`${API_URL}/todo`,{data});
     dispatch({type:ADDNEW_TODO , payload:res.data})
   }
   catch(error)
   {
      console.log("error while adding todo",error);
   }
   
 }
 
