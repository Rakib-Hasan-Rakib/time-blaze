import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Signup from "../pages/signup/Signup";
import DashLayout from "../layout/DashLayout";

const Route = createBrowserRouter([
  { path: "/", element: <Layout />, children: [] },
  { path: "/signup", element: <Signup /> },
  {
    path: "/dashLayout",
    element: <DashLayout />,
  },
]);
export default Route;
