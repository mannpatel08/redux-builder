import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../features/tasks/taskSlice";

const TaskList = () => {
  const [task, setTask] = useState("");
  const tasks = useSelector((state) => state.tasks.taskList);
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (!task.trim()) return;
    dispatch(addTask(task));
    setTask("");
  };

  return (
    <div className="task-container">
      <h2>Task Builder App</h2>

      <div className="task-input">
        <input
          type="text"
          value={task}
          placeholder="Enter task"
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add</button>
      </div>

      <ul className="task-list">
        {tasks.map((t) => (
          <li key={t.id}>
            {t.text}
            <button onClick={() => dispatch(deleteTask(t.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
