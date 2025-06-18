import { useState } from "react";
import { TasKCard } from "./TasKCard";
import { BoxCard } from "./BoxCard";

export const TaskList = ({ title, subtitle, tasks = [], setTask }) => {
  const [show, setShow] = useState(true);

  const handleDelete = (id) => {
    setTask(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="tasklist">
      <div className="box">
        <h1>{title || "Task"}</h1>
        <button className="trigger-1" onClick={() => setShow(!show)}>
          {show ? "Hide" : "Show"}
        </button>

        {show && (
          <ul className="task-list">
            {tasks.map((task) => (
              <TasKCard key={task.id} task={task} handleDelete={handleDelete} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};