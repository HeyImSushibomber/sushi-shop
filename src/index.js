import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import Futomakis from "./images/futomakis.jpg";
import Hosomakis from "./images/hosomakis.jpg";
import BubbleTea from "./images/bubble-tea.jpg";
import PokeBowl from "./images/poke-bowl.jpg";
import Desserts from "./images/desserts.jpeg";

export { Futomakis, Hosomakis, BubbleTea, PokeBowl, Desserts };

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
