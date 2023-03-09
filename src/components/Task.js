import React from "react";
import '../stylesheets/Task.css'
import { AiOutlineCloseCircle } from "react-icons/ai";


function Task({ id, text, finished, finishTask, deleteTask }){
  return(
    <div className={finished ? 'taskContainer finished' : 'taskContainer'}>
      <div 
        className="taskTxt"
        onClick={() => finishTask(id)}>
        {text}
      </div>
      <div 
        className="taskIconsContainer"
        onClick={() => deleteTask(id)}>
        <AiOutlineCloseCircle className="taskIcon"/>
      </div>
    </div>
  );
}

export default Task;