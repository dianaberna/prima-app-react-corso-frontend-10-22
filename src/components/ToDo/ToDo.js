import { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import "./ToDo.css";

function ToDo() {
    const [list, setList] = useState([]);

    return (
        <div>
            <h2>to-do-list con più componenti e con cancellazione e aggiornamento</h2>
            <ToDoForm list={list} setList={setList} />
            <ToDoList list={list} setList={setList}/>
        </div>
    );
}

export default ToDo;
