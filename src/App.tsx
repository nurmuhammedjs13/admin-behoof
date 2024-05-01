import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/home";
import AddProduct from "./pages/addProduct/addProduct";
import "./index.css";
import List from "./pages/List/list";
import Context from "./Context";

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
        <Context.Provider value={{}}>
            <RouterProvider router={router} />
        </Context.Provider>
    );
}

export default App;
