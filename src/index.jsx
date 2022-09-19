import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import "./App.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ErrorPage from "./error-page";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/home/home.component";
import Menu from "./routes/menu/menu.component";
import Contact from "./routes/contact/contact.component";
import Login from "./routes/login/login.component";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
