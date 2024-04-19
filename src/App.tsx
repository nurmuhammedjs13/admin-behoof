import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import AddProduct from "./pages/addProduct/addProduct";
import './index.css'
import List from "./pages/List/list";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/AddProduct",
        element: <AddProduct />,
    },
    {
        path: "/List",
        element: <List />,
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
