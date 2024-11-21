// This file is the entry point of the React application. It renders the App component into the DOM.

// This is going to help us connect our react application to "index.html"
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"; // now we can use "App.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
