import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const value = useContext(TaskContext);

  

  const handleSubtmit = (e) => {
    e.preventDefault();

    createTask({
      title,
      description,
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubtmit} className="bg-slate-800 p-10 mb-5">
        <h1 className="text-2xl font-bold text-white mb-3">Añadir Tu Tarea</h1>
        <input
          placeholder="Escribe Tu Tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-400 p-3 w-full mb-2 placeholder-slate-200"
          autoFocus
        />
        <br></br>
        <br></br>

        <textarea
          placeholder="Escribe La Descripccion De La Tarea"
          onChange={(e) => setDescription(e.target.value)}
          className="bg-slate-400 p-3 w-full mb-2 placeholder-slate-200"
          value={description}
        ></textarea>
        <br></br>
        <button className="bg-indigo-900 px-3 py-1 text-white">Guardar</button>
      </form>

    

    </div>
  );
}

export default TaskForm;
