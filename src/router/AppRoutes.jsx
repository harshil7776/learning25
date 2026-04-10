import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UseRefDemo1 } from "../Components/UseRefDemo1";
import { UseRefDemo2 } from "../Components/UseRefDemo2";
import { Navbar } from "../Components/Navbar"
import { ProductComponent } from "../Components/ProductComponent";
import { BankComponent } from "../Components/BankComponent";
import { Login } from "../Components/Login";
import ProtectedRoutes from "../Components/ProtectedRoutes";
import { AdminSideBar } from "../Components/AdminSideBar";
import { ApiDemo1 } from "../Components/api/ApiDemo1"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/user",
        element: <Navbar />,

        children: [
            {
                path: "", element: <UseRefDemo1 />
            },
            {
                path: "/useref1", element: <UseRefDemo1 />
            },
            {
                path: "productcomponent",
                element: <ProductComponent />
            },
            {
                path: "bank",
                element: <BankComponent />
            },
            {
                path: "useref2",
                element: <ProtectedRoutes roles={["user", "admin"]}>
                    <UseRefDemo2 />
                </ProtectedRoutes>
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminSideBar />,
        children: [
            {
                path: "",
                element: <ProtectedRoutes roles={["admin"]}>
                    <ApiDemo1></ApiDemo1>
                </ProtectedRoutes>
            },
            {
                path:"apidemo1",
                element:<ApiDemo1></ApiDemo1>
            }
        ]

    }

]);

const AppRoutes = () => {
    return <RouterProvider router={router}></RouterProvider>;
}

export default AppRoutes;