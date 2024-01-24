import {createBrowserRouter} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Contact from "../Pages/Contact";
import Dashboard from "../Pages/Dashboard";
import Register from "../components/Authentication/Register";
import About from "../Pages/About";
import ForgetPassword from "../components/Authentication/ForgetPassword";
import NotFound from "../Sheared/PageNotFound/NotFound";
import Login from "../Pages/Login";
import SingleFood from "../components/SingleFood/SingleFood";
import Menu from "../Pages/Menu";
import Cart from "../components/Cart/Cart";
import MyOrder from "../components/Dashboard/MyOrder/MyOrder";
import NewAddFood from "../components/Dashboard/NewAddFood/NewAddFood";
import DataAnalyst from "../components/Dashboard/DataAnalyis/DataAnalyst";
import Reviews from "../components/Dashboard/Review/Reviews";
import PrivetRoute from "./PrivetRoute";
export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: 'foodmenu',
        element: <Menu></Menu>,
      },
      {
        path: 'about',
        element: <About></About>,
      },
      {
        path: 'contact',
        element: <Contact></Contact>,
      },
      {
        path: 'singleFood/:id',
        element:<PrivetRoute>
         <SingleFood></SingleFood>
        </PrivetRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
      {
        path: 'cart',
        element: <Cart></Cart>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
      {
        path: 'forgetPassword',
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: 'dashboard',
        element: <PrivetRoute>
          <Dashboard></Dashboard>
        </PrivetRoute>,
        children:[
          {
            path:'myOrder',
            element:<MyOrder />
          },
          {
            path:'newAddFood',
            element:<NewAddFood/>
          },
          {
            path:'dataAnalyst',
            element:<DataAnalyst />
          },
          {
            path:'review',
            element:<Reviews />
          }
        ]
      },
    ],
  },
]);
