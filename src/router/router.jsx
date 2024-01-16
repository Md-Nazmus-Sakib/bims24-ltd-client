import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import FindInDistricts from "../Pages/FindInDistricts/FindInDistricts";

import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import AddShopLocation from "../Pages/AddShopLocation/AddShopLocation";
import SearchShop from "../Pages/SearchShop/SearchShop";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AllShop from "../Pages/Dashboard/AllShop/AllShop";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/addShop",
                element: <AddShopLocation></AddShopLocation>,
            },
            {
                path: "/searchShop",
                element: <SearchShop></SearchShop>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
                children: [
                    {
                        path: '/dashboard/allShop',
                        element: <AllShop></AllShop>
                    }
                ]
            },
            {
                path: "/division/:districtName",
                element: <FindInDistricts></FindInDistricts>,
            },

        ],
    },
]);