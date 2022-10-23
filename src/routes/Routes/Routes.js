import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../pages/Home/Home";



export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>,
                loader: () => fetch('https://spartan-travel-server-riadleon.vercel.app/hotels')
            },
            {
                path: "/",
                element: <Home></Home>
            },
        ]

    }
])