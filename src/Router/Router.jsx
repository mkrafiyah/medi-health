import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root/Root";
import Hospitals from "../Pages/Hospitals/Hospitals";
import About from "../Pages/About/About";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/hospitals',
            element: <Hospitals></Hospitals>
        },
        {
            path: '/about',
            element: <About></About>
        }
      ]
    },
  ]);

  export default router;