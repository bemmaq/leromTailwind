import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Modell from "../pages/Modell/Modell";
import Catalog from "../pages/Catalog/Catalog";
import New from "../pages/Catalog/New/New";
import Rooms from "../pages/Catalog/Rooms/Rooms";
import Hallways from "../pages/Catalog/Hallways/Hallways";
import Layout from './../Layout/Layout';





export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        errorElement: <NotFound />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path: '/modell',
                element: <Modell/>
            },
            {
                path: '/catalog',
                element: <Catalog/>,
                children:[
                    {
                        path: '/catalog/new/',
                        element:<New/>
                    },
                    {
                        path: '/catalog/room/',
                        element: <Rooms/>
                    },
                    {
                        path:'/catalog/hall/',
                        element:<Hallways/>
                    }
                    
                ]
            }
        ]
    }
]);
