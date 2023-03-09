import React, { useState } from "react";
import TaskForm from "./TaskForm";
import '../stylesheets/TaskList.css'
import Task from "./Task";

function TaskList(){

  const [tasks, setTasks] = useState([]);

  const addTask = task => {
    if(task.text.trim()){
      task.text = task.text.trim();

      const totalTasks = [task, ...tasks]
      setTasks(totalTasks);
    }
  }

  const deleteTask = id => {
    const totalTasks = tasks.filter(task => task.id !== id);
    setTasks(totalTasks)
  }

  const finishTask = id =>{
    const totalTasks = tasks.map(task => {
      if(task.id === id){
        task.finished = !task.finished;
      }
      return task;
    });
    setTasks(totalTasks)
  }

  return(
    <>
      <TaskForm onSubmit={addTask}/>
      <div className="taskListContainer">
        {
          tasks.map((task) =>
            <Task 
              key={task.id}
              id={task.id}
              text={task.text}
              finished={task.finished}
              deleteTask={deleteTask}
              finishTask={finishTask} />
          )
        }
      </div>
    </>
  );
}
export default TaskList;