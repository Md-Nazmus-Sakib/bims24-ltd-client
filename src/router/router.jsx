import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home/Home";
import FindInDistricts from "../Pages/FindInDistricts/FindInDistricts";
import FindTown from "../Pages/FindTown/FindTown";

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