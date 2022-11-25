import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout/Layout";
import TaskList from "./components/TaskList/TaskList";
import ToDo from "./components/ToDo/ToDo";
import Genitore from "./components/Genitore/Genitore";
import PrintArray from "./components/PrintArray/PrintArray";
import TryImage from "./components/TryImage/TryImage";
import "./index.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <h1>Prima App React Corso Frontend 10-22</h1>
        {/* <Layout />
        <TryImage/>
        <PrintArray/>
        <TaskList/>
        <Genitore/> */}
        <ToDo/> 
        
    </React.StrictMode>
);
