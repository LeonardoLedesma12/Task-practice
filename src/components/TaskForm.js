import React, { useState } from "react";
import '../stylesheets/TaskForm.css'
import { v4 as uuidv4} from 'uuid';

function TaskForm(props){

  const [input, setInput] = useState('')

  const manageChange = e =>{
    setInput(e.target.value);
  }

  const manageShipping = e => {
    e.preventDefault();
    
    const newTask = {
      id : uuidv4(),
      text: input,
      finished: false
    }

    props.onSubmit(newTask);
  }



  return(
    <form 
    className="taskForm"
    onSubmit={manageShipping}>
      <input 
        className="taskInput"
        type='text'
        placeholder="Add a task"
        name="text"
        onChange={manageChange} />
      <button className="taskBtn">
        Add Task
      </button>
    </form>
  );
}
export default TaskForm; 