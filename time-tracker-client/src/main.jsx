import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Route from "./routes/Route.jsx";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./providers/AuthProvider.jsx";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={Route} />
    <Toaster position="top-center" reverseOrder={false} />
  </AuthProvider>
);
