import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from "../App";
import Home from "../Home/Home";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";


const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
         path:"/",
         element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
            path:"/projects",
            element:<Projects/>
        },
        {
            path:"/contact",
            element:<Contact/>
        },
      ]
    },
  ]);


  export default router