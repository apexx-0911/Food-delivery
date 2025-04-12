import React from "react";
import ReactDOM from 'react-dom/client';

const headComponent = () => {
    return (<div><h1 className="head"> hello from jsx headComponent</h1></div>)
};
const heading = (<div><h1 className="head"> hello from jsx</h1></div>);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headComponent());
