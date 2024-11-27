import { useState } from "react";
import "./App.css";
import { tasks } from "./data/tasks";

// - Array con "backlog" oppure "in_progress"
const firstList = tasks.filter(
  (task) => task.state == "backlog" || task.state == "in_progress"
);

// - Array con "completed"
const completedList = tasks.filter((task) => task.state == "completed");

const labelColor = (task) => {
  if (task.state == "backlog") {
    return "label red";
  } else if (task.state == "in_progress") {
    return "label yellow";
  } else if (task.state == "completed") {
    return "label green";
  }
};

function App() {
  return (
    <>
      <header>
        <h1>Task Manager</h1>
      </header>

      {/* - Current Tasks */}
      <h2 className="tasks-title">Current tasks ({firstList.length})</h2>
      {firstList.map((task) => {
        return (
          <div className="list-items">
            <span className="title">
              {task.title}
              <span className={labelColor(task)}>{task.state}</span>
            </span>
            <p>Priority: {task.priority}</p>
            <p>Est. Time: {task.estimatedTime}</p>
          </div>
        );
      })}

      <hr />

      {/* - Completed Tasks */}

      <h2 className="tasks-title">Completed Tasks ({completedList.length})</h2>
      {completedList.map((task) => {
        return (
          <div className="list-items">
            <span className="title">
              {task.title}{" "}
              <span className={labelColor(task)}>{task.state}</span>
            </span>
            <p>Priority: {task.priority}</p>
            <p>Est. Time: {task.estimatedTime}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
