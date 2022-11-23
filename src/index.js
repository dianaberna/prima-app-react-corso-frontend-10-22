import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <h1>Titolo pagina</h1>
        <App colore="blue" />
        <App> prova </App>
    </React.StrictMode>
);
