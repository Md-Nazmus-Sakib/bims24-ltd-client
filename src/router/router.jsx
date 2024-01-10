import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import FindInDistricts from "../Pages/FindInDistricts/FindInDistricts";
import FindTown from "../Pages/FindTown/FindTown";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import AddShopLocation from "../Pages/AddShopLocation/AddShopLocation";

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
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/division/:districtName",
                element: <FindInDistricts></FindInDistricts>,
            },
            {
                path: "/division/district/:cityName",
                element: <FindTown></FindTown>,
            },
        ],
    },
]);