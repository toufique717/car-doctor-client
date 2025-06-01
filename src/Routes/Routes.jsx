import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home";
import About from "../Layout/Pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:
    [
        {
            path: '/',
            element:<Home></Home>
        },

        {
            path: '/about',
            element:<About></About>
        }
    ]
  },
]);

export default router;