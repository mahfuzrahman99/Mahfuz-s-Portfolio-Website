import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MainLayout from "../Layouts/MainLayout";
import OwnerDashboard from "../Layouts/OwnerDashboard";
import AllProjects from "../Pages/Dashboard/AllProjects";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>,
        },
        {},
        {},
        {},
      ]
    },
    {
      path:"owner_dashboard",
      element:<OwnerDashboard/>,
      children:[
        {
          path:"allProjects",
          element:<AllProjects/>,
        },
      ]
    },
    {
      path:"Login",
      element: <Login/>,
    },
    {
      path:"Register",
      element: <Register/>,
    },
  ]);

export default router;