import { useState } from "react";
import Greeting from "./components/Greeting.jsx";

function App() {
  <Greeting name="Fadi" />;

  const [tasks, setTasks] = useState([]);

  const addTask = (tasks) => {
    setTasks([...tasks, "New Task"]);
  };

  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}

export default App;
