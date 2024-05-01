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
      id: new Date().getTime.toString(),
      taskName: taskName,
      desc: desc,
    };
    setTaskList((taskList) => {
      return [...taskList, newTask];
    });
  };
  const removeTask = (id) => {
    console.log("clicked");
    setTaskList(
      taskList.filter((task) => {
        return task.id !== id;
      })
    );
  };

  return (
    <>
      <form on onSubmit={handleSubmit}>
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
            <h1>{task.taskName}</h1>
            <h2>{task.desc}</h2>
            <button id="remove-btn" onClick={(event) => removeTask(task.id)}>
              -
            </button>
          </div>
        );
      })}
    </>
  );
};

export default HomePage;
