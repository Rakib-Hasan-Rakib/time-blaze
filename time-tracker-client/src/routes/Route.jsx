import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Signup from "../pages/signup/Signup";

const Route = createBrowserRouter([
  { path: "/", element: <Layout />,children:[] },
  { path: "/signup", element: <Signup /> },
]);
export default Route;
