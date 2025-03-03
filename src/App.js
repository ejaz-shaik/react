import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
import Accordion from "./machine-coding/Accordion";
import MemesPage from "./machine-coding/infinite-scroll/MemesPage";

const SigninForm = lazy(() => import("./components/SigninForm"));

const AppLayout = () => {
    const [userName, setUserName] = useState("Ejaz");

    // useEffect(() => {
    //     //used when API call to fetch user based on credentials
    //     const data = {
    //         name: "Ejaz Ahmad",
    //     };
    //     setUserName(data.name);
    // }, []);

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{ user: userName, setUserName: setUserName }} >
            <div className="app">
                <Header />
                <Outlet />
            </div>
        </UserContext.Provider>
        </Provider>
    )
}

// Define routes
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/signin',
                element: <Suspense fallback={<h1>Loading...</h1>}><SigninForm /></Suspense>
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/accordion',
                element: <Accordion />
            },
            {
                path: '/memes',
                element: <MemesPage />
            }
        ],
        errorElement: <Error />
    }
]);

// Render application
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);



