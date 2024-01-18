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
import SingleFood from "../components/Home/Menu/SingleFood/SingleFood";
import MyOrder from "../components/Dashboard/MyOrder/MyOrder";
import NewAddFood from "../components/Dashboard/NewAddFood/NewAddFood";
import Reviews from "../components/Dashboard/Review/Reviews";
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
          path:'singleFood/:id',
          element:<SingleFood></SingleFood>,
          loader: ({params})=>fetch(`http://localhost:5000/product/${params.id}`)
         
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
          element:<Dashboard></Dashboard>,
          children:[
            {
              path:'myOrder',
              element:<MyOrder></MyOrder>
            },
            {
              path:'newAddFood',
              element:<NewAddFood/>
            },
            {
              path:'review',
              element:<Reviews></Reviews>
            }
          ]
         }
      ]
    },
  ]);