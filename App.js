import React from "react";
import ReactDOM from 'react-dom/client'

const parent = React.createElement("div",{id : "parent"}, 
    React.createElement("div", {id:"child"}, 
    [React.createElement("h1", {id:"h1"}, "Smile krooo"), React.createElement("h2", {id:"h2"}, "Smile krooooo")]));
    const body = document.querySelector("body");
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
