import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import {TaskList} from "./components/TaskList"
import "./App.css"
import { AddTask } from "./components/AddTask";





export default function App() {
    const [tasks, setTask] = useState([]);


  return (
    <div className="App">
      <Header />
        <main>
          <AddTask  tasks={tasks} setTask={setTask}/>
          <TaskList tasks={tasks} setTask={setTask} />          
          </main>    
      <Footer />  
    </div>
  );
}



  