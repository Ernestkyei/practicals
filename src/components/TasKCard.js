import "./TaskCard.css"
import style from "./TaskCard.module.css"

export const TasKCard = ({task, handleDelete}) => {

  return (
      
        <li className={task.completed ? "completed" : "incomplete"}>
           <span>{task.id} - {task.name}</span>
            <button onClick={() => handleDelete(task.id)} >Delete</button>
        </li>
    
  )
}


