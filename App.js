import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {id:"heading"}, "Hello dude how r u!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);