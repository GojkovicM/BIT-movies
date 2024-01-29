import { createBrowserRouter, useParams } from "react-router-dom";
import HomePage from "../Pages/HomePage/HomePage";
import SinglePage from "../Pages/SinglePage/SinglePage";


export const router = createBrowserRouter([

    {
        path: "/",
        element: <HomePage/>
    },
    {
        path: "/SinglePage/:id",
        element: <SinglePage/>
    }

])
