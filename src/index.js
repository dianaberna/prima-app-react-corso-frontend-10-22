import React from "react";
import ReactDOM from "react-dom/client";
import Layout from "./components/Layout/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <h1>Titolo pagina</h1>
        <Layout />
    </React.StrictMode>
);
