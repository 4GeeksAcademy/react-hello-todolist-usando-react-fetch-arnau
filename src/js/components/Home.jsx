import React, { useState } from 'react';

export default function Home() {
  // Estado de la lista de tareas
  const [tasks, setTasks] = useState([]);
  // Estado del input de texto
  const [inputValue, setInputValue] = useState("");

  // Aquí es cuando presiono Enter en el input para añadir tarea
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const text = inputValue.trim();
      if (text) {
        setTasks(prev => [...prev, { id: Date.now(), text }]);
      }
      setInputValue("");
    }
  };

  // Aquí elimino mi tarea por id
  const handleDelete = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  return (
    <div className="todo-app-container">
      <h1>Mi Lista de Tareas</h1>
      <input
        type="text"
        className="todo-input"
        placeholder="Escribe una tarea y presiona Enter"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      {tasks.length === 0 ? (
        <p className="no-tasks-message">Añadir tareas</p>
      ) : (
        <ul className="todo-list">
          {tasks.map(task => (
            <li key={task.id} className="todo-item">
              <span className="task-text">{task.text}</span>
              <button
                className="delete-button"
                onClick={() => handleDelete(task.id)}
                aria-label="Eliminar tarea"
              >
                &times;
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
