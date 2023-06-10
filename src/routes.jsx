import Login from "./components/auth/login/login";
import Home from "./components/home/Home";
import Register from "./components/auth/register/register";
import Dashboard from "./components/dashboard/Dashboard";

const routes = [
  {
    path: "/",
    index: true,
    element: <Home />,
  },
  {
    path: "*",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
];

export default routes;
