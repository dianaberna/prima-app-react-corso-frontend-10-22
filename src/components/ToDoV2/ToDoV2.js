import { useState } from "react";
import ToDoForm from "../ToDoForm/ToDoForm";
import ToDoList from "../ToDoList/ToDoList";
import "./ToDoV2.css";

function ToDoV2() {
    const [list, setList] = useState([]);

    return (
        <div>
            <h1>To Do List</h1>
            <ToDoForm list={list} setList={setList} />
            <ToDoList list={list} />
        </div>
    );
}

export default ToDoV2;
