import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Explore from "../Pages/Explore";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Register from "../components/Authentication/Register";
import About from "../Pages/About";
import ForgetPassword from "../components/Authentication/ForgetPassword";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'explore',
          element:<Explore></Explore>
        },
         {
          path:'about',
          element:<About></About>
         },
         {
          path:'contact',
          element:<Contact></Contact>
         },
         {
          path:'login',
          element:<Login></Login>
         },
         {
          path:'register',
          element:<Register></Register>
         },
         {
          path:'forgetPassword',
          element:<ForgetPassword></ForgetPassword>
         },
         {
          path:'dashboard',
          element:<Dashboard></Dashboard>
         }
      ]
    },
  ]);