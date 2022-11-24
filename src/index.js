import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout/Layout";
import logo from "./logo.svg"
import { ReactComponent as LogoReact } from "./logo.svg"
import "./index.css"
import TaskListV1 from "./components/TaskListV1/TaskListV1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <h1>Titolo pagina</h1>
       {/*  <Layout /> */}
        {/* metodo 1-2 per importare l'immagine */}
        {/* <img src={logo} /> */}
        {/* se l'immagine è un svg abbiamo un 3 metodo -> far finta che il nostro svg sia un componente*/}
        {/*  <LogoReact/> */}
        <TaskListV1/>
    </React.StrictMode>
);
