import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const HomePage = () => {
  const [taskName, setTaskName] = useState("");
  const [desc, setDesc] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Math.random().toString(),
      taskName: taskName,
      desc: desc,
    };
    setTaskList((taskList) => {
      return [...taskList, newTask];
    });
  };
  const removeTask = (id) => {
    console.log(id);
    const filteredList = 
      taskList.filter((task) => {
      return task.id != id;
      })
      setTaskList(filteredList);
    
  };
  const editTask = (id) => {
    console.log(id);
    taskList.map((task) => {

      if(task.id == id)
      {
        task.taskName =taskName;
        task.desc = desc;
      }
    })
      setTaskList(taskList);
    
  };


console.log(taskList);
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="taskName"> Task Name </label>
          <input
            type="text"
            id="taskName"
            name="taskName"
            onChange={(e) => {
              setTaskName(e.target.value);
            }}
          />
          <label htmlFor="desc"> Description </label>
          <input
            type="text"
            id="desc"
            name="desc"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
          />
          <input type="submit" value="+" />
        </div>
      </form>

      {taskList.map((task, index) => {
        return (
          <div key={index}>
            <input type = "text" value = {task.taskName}></input>
            <input type = "text" value = {task.desc}></input>
           
            <button id="remove-btn" onClick={() => removeTask(task.id)}>-</button>
            <button id="edit-btn" onClick={() => editTask(task.id)}>&#9998;
            </button>
          </div>
        );
      })}
    </>
  );
};

export default HomePage;
