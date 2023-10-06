import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../layout/Root/Root";
import Hospitals from "../Pages/Hospitals/Hospitals";

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
        }
      ]
    },
  ]);

  export default router;