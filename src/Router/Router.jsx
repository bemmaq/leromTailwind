import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound/NotFound";

import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Modell from "../pages/Modell/Modell";
import Catalog from "../pages/Catalog/Catalog";
import New from "../pages/Catalog/New/New";
import Rooms from "../pages/Catalog/Rooms/Rooms";
import Hallways from "../pages/Catalog/Hallways/Hallways";
import Layout from "./../Layout/Layout";
import Company from "../pages/Company/Company";
import Production from "../pages/Production/Production";
import Jobs from "../pages/Jobs/Jobs";
import All from "../pages/All/All";
import { Awards } from "../pages/Awards/Awards"; // Keep only one import statement for Awards

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/all",
        element: <All />,
      },
      {
        path: "/modell",
        element: <Modell />,
      },
      {
        path: "/company",
        element: <Company />,
      },
      {
        path: "/production",
        element: <Production />,
      },
      {
        path: "/awards",
        element: <Awards />,
      },
      {
        path: "/job",
        element: <Jobs />,
      },
    ],
  },
  {
    path: "/catalog",
    element: <Catalog />,
    children: [
      {
        path: "/catalog/new/",
        element: <New />,
      },
      {
        path: "/catalog/room/",
        element: <Rooms />,
      },
      {
        path: "/catalog/hall/",
        element: <Hallways />,
      },
    ],
  },
]);
