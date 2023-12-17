import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Routers/Router";
import "./index.css";
import { PhotoProvider } from "react-photo-view";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="p-2 md:p-0">
      <PhotoProvider>
        <RouterProvider router={router} />
      </PhotoProvider>
    </div>
  </React.StrictMode>
);
