import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Layout/Pages/Home";
import About from "../Layout/Pages/About";
import Login from "../Layout/Pages/Login";
import Signup from "../Layout/Pages/Signup";
import Checkout from "../Layout/Pages/Checkout";

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
        },

        {
            path: '/login',
            element:<Login></Login>
        },

        {
            path: '/signup',
            element:<Signup></Signup>
        },

         {
            path: '/checkout/:id',
            element:<Checkout></Checkout>,
            loader: ({params})=> fetch(`http://localhost:5000/services/${ params.id}`)
        }

        
    ]
  },
]);

export default router;