import React from 'react';
import { useState } from 'react';
import {useDispatch} from 'react-redux'

import { addNewTodo} from '../redux/actions';



export const Todoform = () => {

  const [text ,setText] =useState("");
  const dispatch= useDispatch();

   // Using the useState hook to declare a state
   // variable 'text' initialized 
   //to an empty string





const onFormSubmit =(e) =>
{
  e.preventDefault();
 // Logic for handling form submission 
 //can be added here
 dispatch(addNewTodo(text));
 setText('');
}
// Function to handle input change events
const onInputChange =(e) =>
{
   // Update the 'text' state with the value typed 
   //into the input field
 setText(e.target.value);
}



// Render the form component
  return (
    <form className="form" onSubmit={onFormSubmit}>
  <input placeholder='inter your todo...'
  className='input'
  onChange={onInputChange}
    value={text}
 />
    </form>
   
  )
}

