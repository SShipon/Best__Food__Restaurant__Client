import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Explore from "../Pages/Explore";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashboard";
import Register from "../components/Authentication/Register";
import About from "../Pages/About";
import ForgetPassword from "../components/Authentication/ForgetPassword";
import NotFound from "../Sheared/PageNotFound/NotFound";
import Login from "../Pages/Login";
import SingleFood from "../components/SingleFood/SingleFood";
import FoodMenu from "../components/FoodMenu/FoodMenu";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <NotFound />,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'foodmenu',
          element:<FoodMenu></FoodMenu>
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
          path:'singleFood/:id',
          element:<SingleFood></SingleFood>,
          loader: ({params})=> fetch(`http://localhost:5000/product/${params.id}`)
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