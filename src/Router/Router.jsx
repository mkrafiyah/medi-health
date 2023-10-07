import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root/Root";
import Hospitals from "../Pages/Hospitals/Hospitals";
import About from "../Pages/About/About";
import Services from "../Pages/Services/Services";
import Specialists from "../Pages/Specialists/Specialists";
import Service from "../Pages/Service/Service";

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
            element: <Service></Service>,
            loader: ()=> fetch('/data.json')
        },
        {
            path: '/hospitals',
            element: <Hospitals></Hospitals>
        },
        {
            path: '/about',
            element: <About></About>
        },
        {
            path: '/specialists',
            element: <Specialists></Specialists>,
            loader: ()=> fetch('specialists.json')
            
        }
      ]
    },
  ]);

  export default router;