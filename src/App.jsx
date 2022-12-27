import TaskList from "./Components/TaskList";
import TaskForm from "./Components/TaskForm";
import { useState, useEffect } from "react";
import {Countert} from './Components/Counter'

function App() {
  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <TaskList />
        <Countert />
      </div>
    </main>
  );
}

export default App;
