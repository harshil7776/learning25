import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UseRefDemo1 } from "../Components/UseRefDemo1";
import { UseRefDemo2 } from "../Components/UseRefDemo2";
import { Navbar } from "../Components/Navbar"
import { ProductComponent } from "../Components/ProductComponent";
import { BankComponent } from "../Components/BankComponent";
const router = createBrowserRouter([

    {
        path: "/",
        element: <Navbar />,

        children: [
            {
                path: "/useref1", element: <UseRefDemo1 />
            },
            {
                path: "/useref2", element: <UseRefDemo2 />
            },
            {
                path: "productcomponent",
                element: <ProductComponent />
            },
            {
                path: "bank",
                element: <BankComponent />
            }


        ]
    }

]);

const AppRoutes = () => {
    return <RouterProvider router={router}></RouterProvider>;
}

export default AppRoutes;