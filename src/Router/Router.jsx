import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root/Root";
import Hospitals from "../Pages/Hospitals/Hospitals";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Specialists from "../Pages/Specialists/Specialists";
import Service from "../Pages/Service/Service";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServicePrivate from "../PrivateRoute/ServicePrivate";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
            loader: ()=> fetch('data.json')
        },
        {
            path: 'services/:id',
            element: <ServicePrivate><Service></Service></ServicePrivate>,
            loader: ()=> fetch('/data.json')
        },
        {
            path: '/hospitals',
            element: <Hospitals></Hospitals>
        },
        {
            path: '/about',
            element: <ServicePrivate><About></About></ServicePrivate>
        },
        {
            path: '/specialists',
            element: <ServicePrivate> <Specialists></Specialists></ServicePrivate>,
            loader: ()=> fetch('specialists.json')
            
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);

  export default router;