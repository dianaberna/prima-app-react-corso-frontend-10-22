import { useState } from "react";
import "./TaskList.css";

function TaskList() {
    const [lista, setLista] = useState([]);
    const [task, setTask] = useState("");

    const submit = (e) => {
        e.preventDefault();
        setLista([...lista, task]);
        setTask("");
    };

    const handleChange = (e) => {
        setTask(e.target.value);
    };

    return (
        <div>
            <h2>to-do-list con un componente</h2>
            <form onSubmit={submit} className="tasklist">
                <label htmlFor="task">Inserisci nuovo task:</label>
                <div>
                    <input
                        type="text"
                        id="task"
                        onChange={handleChange}
                        value={task}
                    />
                    <button type="submit" value="submit">
                        Invia
                    </button>
                </div>
            </form>
            <ul>
                {lista.map((elem, i) => (
                    <li key={i}>{elem}</li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
