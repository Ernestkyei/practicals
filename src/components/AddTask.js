import { useState } from "react";
import "./AddTask.css";

export const AddTask = ({ tasks, setTask }) => {
  const [taskValue, setTaskValue] = useState("");

  
  const [progress, setProgress] = useState(false);

  const handleChange = (event) => {
    setTaskValue(event.target.value);
  };

  const handleReset = () => {
    setTaskValue("");
    setProgress(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: Math.floor(Math.random() * 1000),
      name: taskValue,
      completed: progress === "true" || progress === true,
    };

    setTask([...tasks, task]); // ✅ Add new task correctly
    handleReset();

  };

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange}type="text"  name="task" id="task" placeholder="Task Name" autoComplete="off" value={taskValue} />

        <select onChange={(e) => setProgress(e.target.value === "true")} value={progress} >
          <option value={false}>Pending</option>
          <option value={true}>Completed</option>
        </select>

        <button type="submit">Add Task</button>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
      </form>

      <p>{taskValue.length}</p>
    </section>
  );
};
