import React from "react";
import ReactDOM from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import {createBrowserRouter, RouterProvider, Outlet} from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contactus";
import Errorpage from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";




const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path :"/",
                element:<Body/>
            },
            {
                path :"/about",
                element:<About/>
            },
            {
                path :"/contact",
                element:<Contact/>
            },
            {
                path :"/restaurant/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Errorpage/>
    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter} />);
